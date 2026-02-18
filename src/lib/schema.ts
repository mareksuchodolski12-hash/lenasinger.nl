// src/lib/schema.ts
import { SITE_NAME, SITE_URL, SINGER_INFO } from './constants';

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SINGER_INFO.name,
    jobTitle: SINGER_INFO.title,
    url: SITE_URL,
    image: `${SITE_URL}${SINGER_INFO.image}`,
    sameAs: Object.values(SINGER_INFO.socialLinks),
    email: SINGER_INFO.email,
    telephone: SINGER_INFO.phone,
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: SINGER_INFO.bio,
    url: SITE_URL,
    telephone: SINGER_INFO.phone,
    email: SINGER_INFO.email,
    image: `${SITE_URL}${SINGER_INFO.image}`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      // Update with actual address
    },
    priceRange: '$$',
    sameAs: Object.values(SINGER_INFO.socialLinks),
  };
}

export function generateServiceSchema(name: string, description: string, priceRange: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${SITE_NAME} - ${name}`,
    description,
    url: SITE_URL,
    priceRange,
    areaServed: {
      '@type': 'City',
      name: 'Local City & Region',
    },
  };
}

export function generateEventSchema(
  title: string,
  date: string,
  location: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: title,
    description,
    startDate: date,
    location: {
      '@type': 'Place',
      name: location,
    },
    organizer: {
      '@type': 'Person',
      name: SINGER_INFO.name,
      url: SITE_URL,
    },
    performer: {
      '@type': 'Person',
      name: SINGER_INFO.name,
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
}
