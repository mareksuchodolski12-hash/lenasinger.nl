// src/lib/content.ts
import * as fs from 'fs';
import * as path from 'path';
import { Service, Event, Testimonial, FAQ } from '@/types/index';

const CONTENT_DIR = path.join(process.cwd(), 'src/content');

export async function getServices(): Promise<Service[]> {
  const filePath = path.join(CONTENT_DIR, 'services.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const services = await getServices();
  return services.find((service) => service.slug === slug);
}

export async function getEvents(): Promise<Event[]> {
  const filePath = path.join(CONTENT_DIR, 'events.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const events: Event[] = JSON.parse(fileContents);
  return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export async function getUpcomingEvents(limit?: number): Promise<Event[]> {
  const events = await getEvents();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= today)
    .slice(0, limit || 5);

  return upcomingEvents;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const filePath = path.join(CONTENT_DIR, 'testimonials.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getFAQ(): Promise<FAQ[]> {
  const filePath = path.join(CONTENT_DIR, 'faq.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getFAQByCategory(category: string): Promise<FAQ[]> {
  const faqs = await getFAQ();
  return faqs.filter((faq) => faq.category === category);
}

export async function getBlogSlugs(): Promise<string[]> {
  const blogDir = path.join(CONTENT_DIR, 'blog');
  const files = fs.readdirSync(blogDir);
  return files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace('.mdx', ''));
}

export async function getBlogPost(
  slug: string
): Promise<{ metadata: any; content: string } | null> {
  try {
    const filePath = path.join(CONTENT_DIR, 'blog', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Simple MDX parsing - extract metadata and content
    const metadataMatch = fileContents.match(/export const metadata = ({[\s\S]*?});/);
    let metadata = {};

    if (metadataMatch) {
      // This is a simplified parser - in production, use proper MDX library
      const metadataStr = metadataMatch[1];
      try {
        // Extract individual properties for safe evaluation
        metadata = {
          title: metadataStr.match(/title:\s*['"]([^'"]+)['"]/)?.[1] || '',
          description: metadataStr.match(/description:\s*['"]([^'"]+)['"]/)?.[1] || '',
          date: metadataStr.match(/date:\s*['"]([^'"]+)['"]/)?.[1] || '',
          author: metadataStr.match(/author:\s*['"]([^'"]+)['"]/)?.[1] || '',
          category: metadataStr.match(/category:\s*['"]([^'"]+)['"]/)?.[1] || '',
        };
      } catch (e) {
        console.warn(`Failed to parse metadata for ${slug}`);
      }
    }

    const content = fileContents.replace(/export const metadata[\s\S]*?};/, '').trim();

    return { metadata, content };
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    return null;
  }
}

export async function getAllBlogPosts(): Promise<Array<{ slug: string; metadata: any }>> {
  const slugs = await getBlogSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getBlogPost(slug);
      return post ? { slug, metadata: post.metadata } : null;
    })
  );

  return posts
    .filter(Boolean)
    .sort(
      (a, b) => new Date(b!.metadata.date).getTime() - new Date(a!.metadata.date).getTime()
    ) as Array<{ slug: string; metadata: any }>;
}
