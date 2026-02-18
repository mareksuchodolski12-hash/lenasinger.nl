// src/lib/constants.ts
import { singer } from '@/config/singer';

export const SITE_NAME = 'Professional Singer';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
export const BRAND_EMAIL = process.env.CONTACT_EMAIL_FROM || 'hello@yoursite.com';
export const BRAND_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (555) 123-4567';

export const SINGER_INFO = {
  name: singer.name,
  title: singer.title,
  bio: singer.bio,
  image: '/images/hero/profile.jpg',
  email: singer.email,
  phone: singer.phone,
  location: `${singer.city}${singer.region ? ', ' + singer.region : ''}`,
  socialLinks: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com',
  },
};

export const SEO_KEYWORDS = [
  'professional singer',
  'wedding singer',
  'live entertainment',
  'corporate event music',
  'vocal coach',
  'singing lessons',
  'wedding music',
  'local performer',
  'event entertainment',
];

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];
