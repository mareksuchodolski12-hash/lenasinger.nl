// src/lib/seo-helpers.ts
// Dynamic SEO helpers for location-based metadata and content

import { singer } from '@/config/singer';
import { keywords } from '@/config/keywords';

/**
 * Generate location-aware page title
 * Examples: "Wedding Singer in Nashville" vs "Wedding Singer"
 */
export function createPageTitle(
  baseName: string,
  service?: 'wedding' | 'corporate' | 'workshop' | 'about' | 'blog' | 'events'
): string {
  if (singer.city === 'Local City') {
    return baseName;
  }

  const locationTitles: Record<string, string> = {
    wedding: `Wedding Singer in ${singer.city} | ${singer.name}`,
    corporate: `Corporate Event Music ${singer.region} | ${singer.name}`,
    workshop: `Vocal Coaching in ${singer.city} | ${singer.name}`,
    about: `About ${singer.name} - Professional Vocalist`,
    blog: `Music Tips & Vocal Coaching Blog - ${singer.city}`,
    events: `Upcoming Performances ${singer.region}`,
  };

  return service ? locationTitles[service] : baseName;
}

/**
 * Generate location-aware meta description
 */
export function createPageDescription(baseDescription: string, includeLocation = true): string {
  if (!includeLocation || singer.city === 'Local City') {
    return baseDescription;
  }

  // Add location suffix if not already present
  if (baseDescription.toLowerCase().includes(singer.city.toLowerCase())) {
    return baseDescription;
  }

  return `${baseDescription} Serving ${singer.city} and ${singer.region}.`;
}

/**
 * Get location-aware keywords for a page
 */
export function getPageKeywords(
  page: 'home' | 'services' | 'about' | 'blog' | 'contact'
): string[] {
  return keywords.getKeywordsForPage(page);
}

/**
 * Generate dynamic breadcrumb items with location awareness
 */
export function generateBreadcrumbs(
  currentPage: string,
  currentTitle: string,
  parentPages?: Array<{ title: string; slug: string }>
): Array<{ name: string; url: string }> {
  const breadcrumbs: Array<{ name: string; url: string }> = [{ name: 'Home', url: '/' }];

  // Add parent pages if provided
  if (parentPages) {
    breadcrumbs.push(
      ...parentPages.map((p) => ({
        name: p.title,
        url: `/${p.slug}`,
      }))
    );
  }

  // Add current page
  breadcrumbs.push({
    name: currentTitle,
    url: `/${currentPage}`,
  });

  return breadcrumbs;
}

/**
 * Create high-intent H1 tags with location awareness
 */
export function createH1(primary: string, service?: string, includeCity = true): string {
  if (!includeCity || singer.city === 'Local City') {
    return primary;
  }

  const h1s: Record<string, string> = {
    wedding: `${primary} in ${singer.city}`,
    corporate: `${primary} for ${singer.region}`,
    coaching: `${primary} in ${singer.city}`,
    events: `${primary} - ${singer.city}`,
  };

  return service ? h1s[service] || primary : primary;
}

/**
 * Generate dynamic schema-enhanced metadata
 * Includes location data for local SEO
 */
export function createLocalMetadata() {
  return {
    location: {
      city: singer.city,
      region: singer.region,
      state: singer.state,
      serviceRadius: `${singer.serviceRadius} miles`,
    },
    serviceArea: `${singer.city}, ${singer.region}, ${singer.state}`,
    keywords: keywords.local.cities.join(', '),
    searchTerms: [
      `professional singer near me`,
      `${singer.city} event entertainment`,
      `hire vocalist in ${singer.region}`,
    ],
  };
}

/**
 * Generate internal linking suggestions
 * Helps distribute link equity across related pages
 */
export function suggestInternalLinks(
  currentPage: 'services' | 'blog' | 'events',
  currentSlug?: string
): Array<{ title: string; url: string; reason: string }> {
  const links: Array<{ title: string; url: string; reason: string }> = [];

  if (currentPage === 'services' && currentSlug === 'weddings') {
    links.push(
      {
        title: 'Wedding Tips Blog Post',
        url: '/blog/post-1-wedding-music-tips',
        reason: 'Related service',
      },
      { title: 'Corporate Events', url: '/services/corporate-events', reason: 'Related service' },
      { title: 'Testimonials', url: '/testimonials', reason: 'Social proof' }
    );
  }

  if (currentPage === 'blog') {
    links.push(
      { title: 'View Services', url: '/services', reason: 'Call to action' },
      { title: 'Book Now', url: '/contact', reason: 'Conversion' }
    );
  }

  if (currentPage === 'events') {
    links.push(
      { title: 'Services Overview', url: '/services', reason: 'Related' },
      { title: 'Check Availability', url: '/contact', reason: 'Booking' }
    );
  }

  return links;
}

/**
 * Check if location is properly configured
 */
export function isLocationConfigured(): boolean {
  return singer.city !== 'Local City' && singer.region !== 'Local Region';
}
