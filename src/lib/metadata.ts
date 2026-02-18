// src/lib/metadata.ts
import { Metadata } from 'next';
import { SITE_NAME, SITE_URL, SINGER_INFO, SEO_KEYWORDS } from './constants';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SINGER_INFO.name} - ${SINGER_INFO.title}`,
  },
  description: SINGER_INFO.bio,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SINGER_INFO.name }],
  creator: SINGER_INFO.name,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: `${SINGER_INFO.name} - ${SINGER_INFO.title}`,
    description: SINGER_INFO.bio,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SINGER_INFO.name} - ${SINGER_INFO.title}`,
    description: SINGER_INFO.bio,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
};

export function generatePageMetadata(overrides: Metadata): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
  };
}

export function generateOpenGraph(
  title: string,
  description: string,
  image?: string,
  url?: string
) {
  return {
    title,
    description,
    url: url || SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: image || `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };
}
