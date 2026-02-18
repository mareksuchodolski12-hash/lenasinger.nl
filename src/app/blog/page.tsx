// src/app/blog/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { getAllBlogPosts } from '@/lib/content';
import { generatePageMetadata, generateOpenGraph } from '@/lib/metadata';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog - Music Tips, Technique & Event Ideas',
  description:
    'Read articles about vocal technique, event planning, and performance tips from a professional singer.',
  openGraph: generateOpenGraph(
    'Blog',
    'Articles about music, performance, and vocal coaching',
    undefined,
    `${SITE_URL}/blog`
  ),
});

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <section className="pt-20 pb-12 bg-gradient-to-b from-primary-800 to-primary-900">
        <Container>
          <h1 className="section-heading">Blog</h1>
          <p className="section-subheading text-center mx-auto">
            Tips, techniques, and insights from a professional singer
          </p>
        </Container>
      </section>

      <section className="py-20 bg-primary-900">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="card-dark card-hover h-full">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block bg-accent-500/20 text-accent-400 text-xs px-3 py-1 rounded-full capitalize">
                        {post.metadata.category || 'General'}
                      </span>
                      <span className="text-sm text-primary-400">
                        {new Date(post.metadata.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <h2 className="text-2xl font-serif font-bold text-primary-50 mb-3 line-clamp-2">
                      {post.metadata.title}
                    </h2>

                    <p className="text-primary-300 line-clamp-3 mb-6">
                      {post.metadata.description}
                    </p>

                    <div className="flex items-center text-accent-400 hover:text-accent-300 transition-colors">
                      Read More →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-primary-300">More blog posts coming soon!</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
