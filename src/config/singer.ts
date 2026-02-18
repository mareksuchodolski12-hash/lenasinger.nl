// src/config/singer.ts
// Central configuration for singer profile
// All references across the site use these values

export const singer = {
  // Basic Info
  name: process.env.NEXT_PUBLIC_SINGER_NAME || 'Professional Singer',
  title: process.env.NEXT_PUBLIC_SINGER_TITLE || 'Vocal Performer & Coach',
  bio:
    process.env.NEXT_PUBLIC_SINGER_BIO ||
    'Professional vocal performer specializing in weddings, corporate events, live concerts, and vocal coaching.',

  // Location
  city: process.env.NEXT_PUBLIC_SINGER_CITY || 'Local City',
  region: process.env.NEXT_PUBLIC_SINGER_REGION || 'Local Region',
  state: process.env.NEXT_PUBLIC_SINGER_STATE || 'State',
  serviceRadius: parseInt(process.env.NEXT_PUBLIC_SINGER_SERVICE_RADIUS || '50'), // miles

  // Contact
  email: process.env.SINGER_CONTACT_EMAIL || process.env.CONTACT_EMAIL_FROM || 'hello@yoursite.com',
  phone: process.env.NEXT_PUBLIC_SINGER_PHONE || '+1 (555) 123-4567',

  // Brand
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com',
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Professional Singer',

  // Social Media
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com',
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || '',
  },

  // Professional Details
  yearsExperience: parseInt(process.env.NEXT_PUBLIC_YEARS_EXPERIENCE || '10'),
  eventsPerformed: parseInt(process.env.NEXT_PUBLIC_EVENTS_PERFORMED || '100'),
  clientsReviews: parseInt(process.env.NEXT_PUBLIC_CLIENTS_REVIEWS || '50'),
  averageRating: parseFloat(process.env.NEXT_PUBLIC_AVERAGE_RATING || '4.9'),

  // Business Settings
  defaultServicesCopy: {
    wedding: 'Premium live entertainment for your special day',
    corporate: 'Sophisticated entertainment for your corporate event',
    workshop: 'Expert vocal training for all levels',
  },
};

// Validation - ensure critical values are set
export function validateSingerConfig() {
  const required = ['name', 'city', 'email', 'phone'];
  const missing = required.filter((key) => !singer[key as keyof typeof singer]);

  if (missing.length > 0) {
    console.warn(`⚠️  Singer config missing: ${missing.join(', ')}. Using defaults.`);
  }

  return missing.length === 0;
}
