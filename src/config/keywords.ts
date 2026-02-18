// src/config/keywords.ts
// Local SEO keywords configuration
// Dynamically generates keywords based on singer location

import { singer } from './singer';

export const keywords = {
  // Core brand keywords
  brand: ['professional singer', 'vocal performer', 'live vocalist', 'event entertainment'],

  // Service-specific keywords (with location injection)
  services: {
    wedding: [
      `wedding singer in ${singer.city}`,
      `professional wedding singer ${singer.region}`,
      `wedding ceremony music ${singer.city}`,
      `live wedding vocals near me`,
      `wedding reception entertainment`,
      `professional vocalist for weddings`,
      `romantic wedding songs performer`,
    ],
    corporate: [
      `corporate event entertainment ${singer.city}`,
      `live vocalist for corporate events`,
      `gala singer ${singer.region}`,
      `professional corporate entertainment`,
      `live music for business events`,
      `event singer for hire`,
      `background music performer`,
    ],
    workshop: [
      `vocal coaching ${singer.city}`,
      `singing lessons near me`,
      `vocal training professional`,
      `voice lessons for adults`,
      `singing workshop ${singer.region}`,
      `how to improve singing voice`,
    ],
  },

  // Long-tail intent keywords
  intentKeywords: {
    booking: [
      `book a singer for wedding`,
      `hire live vocalist`,
      `professional singer near me`,
      `where to find event entertainment`,
      `how to book a performer`,
    ],
    comparison: [
      `best wedding singers near me`,
      `professional vs amateur singer`,
      `why hire live music`,
      `benefits of live entertainment`,
    ],
    validation: [
      `experienced vocalist`,
      `verified event performer`,
      `award winning singer`,
      `5 star rated entertainer`,
    ],
  },

  // Local SEO keywords
  local: {
    cities: [singer.city],
    region: singer.region,
    state: singer.state,
    serviceArea: `within ${singer.serviceRadius} miles of ${singer.city}`,
  },

  // Getter function for dynamic keyword generation
  getKeywordsForPage(page: 'home' | 'services' | 'about' | 'blog' | 'contact'): string[] {
    const baseKeywords = keywords.brand;

    switch (page) {
      case 'home':
        return [
          ...baseKeywords,
          `${singer.city} event entertainment`,
          `hire a professional singer ${singer.region}`,
          ...keywords.intentKeywords.validation,
        ];

      case 'services':
        return [
          ...baseKeywords,
          ...keywords.services.wedding.slice(0, 3),
          ...keywords.services.corporate.slice(0, 3),
        ];

      case 'about':
        return [
          `about ${singer.name}`,
          `professional singer biography`,
          `experienced vocalist`,
          ...keywords.intentKeywords.validation,
        ];

      case 'blog':
        return [
          `vocal tips and techniques`,
          `wedding music guide`,
          `event planning advice`,
          `performance coaching`,
        ];

      case 'contact':
        return [
          `contact ${singer.name}`,
          `book ${singer.city} singer`,
          `hire event entertainment`,
          ...keywords.intentKeywords.booking,
        ];

      default:
        return baseKeywords;
    }
  },
};

// Generate dynamic title variations based on location
export function generateTitle(base: string, includeLocation = true, includeCity = true): string {
  if (!includeLocation) return base;

  if (includeCity && singer.city !== 'Local City') {
    return `${base} in ${singer.city}`;
  }

  if (singer.region !== 'Local Region') {
    return `${base} - ${singer.region}`;
  }

  return base;
}
