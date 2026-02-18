// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { getServices, getBlogSlugs } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  // Static routes list
  const staticRoutesList = [
    '',
    '/about',
    '/services',
    '/events',
    '/blog',
    '/testimonials',
    '/media',
    '/contact',
  ];

  const staticRoutes = staticRoutesList.map((route) => {
    const freq = (route === '/blog' || route === '/events' ? 'weekly' : 'monthly') as
      | 'weekly'
      | 'monthly';
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: freq,
      priority: route === '' ? 1 : 0.8,
    };
  });

  // Dynamic service routes
  const services = await getServices();
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic blog routes
  const blogSlugs = await getBlogSlugs();
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
