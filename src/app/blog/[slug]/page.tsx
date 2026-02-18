// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { getBlogPost, getBlogSlugs, getAllBlogPosts } from '@/lib/content';
import { generatePageMetadata, generateOpenGraph } from '@/lib/metadata';
import { SITE_URL } from '@/lib/constants';

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {};
  }

  return generatePageMetadata({
    title: post.metadata.title,
    description: post.metadata.description,
    keywords: [post.metadata.category, 'blog', 'music'],
    openGraph: generateOpenGraph(
      post.metadata.title,
      post.metadata.description,
      undefined,
      `${SITE_URL}/blog/${params.slug}`
    ),
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  const allPosts = await getAllBlogPosts();

  if (!post) {
    notFound();
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <section className="pt-20 pb-12 bg-gradient-to-b from-primary-800 to-primary-900">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-400 text-xs px-3 py-1 rounded-full capitalize mb-4">
              {post.metadata.category || 'General'}
            </span>
            <h1 className="section-heading mb-4">{post.metadata.title}</h1>
            <div className="flex items-center gap-4 text-primary-400 text-sm">
              <span>By {post.metadata.author || 'Professional Singer'}</span>
              <span>•</span>
              <span>
                {new Date(post.metadata.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-primary-900">
        <Container>
          <div className="max-w-3xl">
            <div className="prose prose-invert max-w-none">
              {/* Simple MDX rendering - in production, use actual MDX rendering library */}
              <div
                className="prose prose-invert max-w-none text-primary-200 [&>h2]:text-2xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-primary-50 [&>h2]:mt-12 [&>h2]:mb-4
                [&>h3]:text-xl [&>h3]:font-serif [&>h3]:font-bold [&>h3]:text-primary-50 [&>h3]:mt-8 [&>h3]:mb-3
                [&>p]:mb-4 [&>p]:leading-relaxed
                [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:mb-4
                [&>ul]:list-disc [&>ul]:list-inside [&>ul]:mb-4 [&>ul>li]:mb-2
                [&>blockquote]:border-l-4 [&>blockquote]:border-accent-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-4
                [&>code]:bg-primary-800 [&>code]:rounded [&>code]:px-2 [&>code]:py-1"
              >
                {/* This is a simplified rendering. Use next-mdx-remote in production */}
                <div dangerouslySetInnerHTML={{ __html: formatMDXContent(post.content) }} />
              </div>
            </div>

            {/* Navigation */}
            {(prevPost || nextPost) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 pt-16 border-t border-primary-700">
                {prevPost ? (
                  <Link href={`/blog/${prevPost.slug}`}>
                    <div className="card-dark card-hover group">
                      <p className="text-sm text-primary-400 mb-2">← Previous Post</p>
                      <p className="text-lg font-semibold text-primary-50 group-hover:text-accent-400 transition-colors">
                        {prevPost.metadata.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link href={`/blog/${nextPost.slug}`}>
                    <div className="card-dark card-hover group text-right md:text-left">
                      <p className="text-sm text-primary-400 mb-2">Next Post →</p>
                      <p className="text-lg font-semibold text-primary-50 group-hover:text-accent-400 transition-colors">
                        {nextPost.metadata.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}

// Simple MDX content formatter
function formatMDXContent(content: string): string {
  let html = content;

  // Convert headings
  html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
  html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
  html = html.replace(/^#### (.*?)$/gm, '<h4>$1</h4>');

  // Convert paragraphs
  html = html
    .split('\n\n')
    .map((para) => {
      if (!para.match(/^<[h|u|o]/)) {
        return `<p>${para}</p>`;
      }
      return para;
    })
    .join('');

  // Convert bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convert italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Convert links
  html = html.replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2" class="text-accent-400 hover:text-accent-300">$1</a>'
  );

  // Convert lists
  html = html.replace(/^\* (.*?)$/gm, '<li>$1</li>');

  return html;
}
