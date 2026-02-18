# Lena Singer Website - Implementation Guide

## Overview

This is a premium Next.js 14 website for Lena, a professional vocalist. The site features a dark luxe aesthetic with copper accents, showcasing her services, testimonials, media, and booking capabilities.

**Current Status:** ✅ Phase 3 Complete - All pages, components, and routes implemented and ready for content finalization.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3002 in your browser
```

The site will be live at [http://localhost:3002](http://localhost:3002)

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage (all components)
│   ├── services/page.tsx         # Services & packages
│   ├── media/page.tsx            # Press kit & downloads
│   ├── events/page.tsx           # Upcoming & past events
│   ├── contact/page.tsx          # Contact form & FAQ
│   ├── api/contact/route.ts      # Contact form submission API
│   └── layout.tsx                # Root layout (no global nav/footer)
│
├── components/                   # React components
│   ├── Navbar.tsx                # Fixed sticky navigation
│   ├── Hero.tsx                  # Full-screen cinematic hero
│   ├── Stats.tsx                 # Trust strip (21 years / 400+ shows / 4.9 rating)
│   ├── MediaSection.tsx          # Video + audio embeds + socials
│   ├── ServicesGrid.tsx          # 3 service packages
│   ├── WhyLena.tsx               # 4 proof points / differentiators
│   ├── Testimonials.tsx          # Carousel with 6 testimonials
│   ├── Gallery.tsx               # Image lightbox gallery
│   ├── Story.tsx                 # Bio section
│   ├── ContactForm.tsx           # 13-field booking form
│   ├── Footer.tsx                # 3-column footer
│   ├── MobileStickyCTA.tsx       # Fixed mobile bottom CTA bar
│   └── common/                   # Legacy shared components
│
├── content/
│   └── siteContent.ts            # Single source of truth for all copy
│
├── lib/
│   ├── constants.ts              # App constants
│   ├── content.ts                # Content helpers (deprecated - use siteContent.ts)
│   ├── metadata.ts               # SEO metadata helper
│   ├── rate-limit.ts             # API rate limiting
│   └── schema.ts                 # Structured data (JSON-LD)
│
├── styles/
│   └── globals.css               # Tailwind + custom styles
│
└── types/
    └── index.ts                  # TypeScript interfaces
```

---

## 🎨 Design System

### Colors (Tailwind Configured)

- **Primary Dark:** `#1a1a1a` (dark-primary)
- **Secondary Dark:** `#2d2d2d` (dark-secondary)
- **Tertiary Dark:** `#3a3a3a` (dark-tertiary)
- **Accent Copper:** `#C67C4E` (accent-500)
- **Text Primary:** `#ffffff`
- **Text Secondary:** `#e0e0e0`
- **Text Muted:** `#a0a0a0`

### Spacing Scale (8px grid)

- `xs`: 4px | `sm`: 8px | `md`: 16px | `lg`: 24px | `xl`: 32px | `2xl`: 48px | `3xl`: 64px | `4xl`: 80px | `5xl`: 120px

### Typography

- **Sans-serif:** System font stack (Inter)
- **Serif:** Georgia (for luxury feel)
- **Base:** 16px | Adjusted per section

---

## 📄 Pages

### 1. Homepage (`/page.tsx`)

**Sections:**

1. Navbar (sticky) + Hero (full-screen cinematic)
2. Stats strip (21 years / 400+ shows / 4.9 rating)
3. Media section (featured video + 3 audio tracks + social CTAs)
4. Services grid (3 packages)
5. Why Lena (4 proof points)
6. Testimonials carousel
7. Gallery (image lightbox)
8. Story/Bio section
9. Contact form (13 fields)
10. Footer

**Purpose:** Complete overview of Lena's offerings and conversion path

### 2. Services Page (`/services/page.tsx`)

**Features:**

- Hero headline + subheadline
- 3 expandable service cards (Corporate / Wedding / Club)
- Each card includes: title, subtitle, promise, price, includes (✓ list), add-ons (collapsible), best for, Inquire CTA
- Contact form below

**Purpose:** Deep-dive into service packages with expandable add-ons

### 3. Press Kit / Media Page (`/media/page.tsx`)

**Features:**

- Press kit headline
- Full bio section
- Downloadable sections (HD photos, tech rider, logos, fact sheet)
- Quick facts highlight
- Media inquiry email/Instagram CTAs

**Purpose:** Journalist/media resources and professional assets

### 4. Events Page (`/events/page.tsx`)

**Features:**

- Upcoming events list (with ticket links)
- Past events archive (grid with images, type badges)
- Book CTA below

**Purpose:** Show schedule and past venues for social proof

### 5. Contact Page (`/contact/page.tsx`)

**Features:**

- FAQ accordion (8 common questions from siteContent.faq)
- Full contact form below
- Responsive layout

**Purpose:** Answer questions + drive bookings via form

---

## 📋 Content Management

### Single Source of Truth: `siteContent.ts`

All copy, URLs, structured data, and metadata are stored in `/src/content/siteContent.ts`. This file exports a `siteContent` object with:

```typescript
{
  brand: { name, email, phone, instagram, tiktok },
  hero: { eyebrow, headline, subheadline, cta1, cta2 },
  stats: { items[] },
  mediaSection: { ... },
  services: [
    { id, badge, title, subtitle, promise, basePrice, includes[], addOns[], bestFor }
  ],
  whyLena: [
    { icon, title, description, proof }
  ],
  testimonials: [
    { quote, author, context, avatar }
  ],
  gallery: [
    { src, alt, title }
  ],
  story: { content (bio) },
  faq: [
    { question, answer }
  ],
  pressKit: {
    headline, subheadline,
    sections: [
      { title, files: [{ name, size }] }
    ]
  },
  events: {
    upcoming: [{ title, venue, date, ticketsUrl }],
    archive: [{ title, venue, date, type }]
  },
  contactForm: {
    fields: [{ name, label, type, required, ... }]
  }
}
```

**To Update Content:**

1. Edit `/src/content/siteContent.ts`
2. All pages automatically pull from this file
3. No page edits needed for content changes

---

## 🔌 API Routes

### POST `/api/contact`

**Purpose:** Contact form submission

**Request Body:**

```typescript
{
  name: string (required)
  email: string (required, validated as email)
  phone?: string
  eventType: string (required, e.g., "corporate", "wedding", "club")
  eventDate: string (required, e.g., "2024-05-15")
  location: string (required)
  venueName?: string
  message: string (required)
  setLength?: string
  newsletterOptIn?: boolean
  honeypot?: string (spam trap - should stay empty)
}
```

**Response:**

```json
{
  "success": true,
  "message": "Inquiry received. We'll contact you within 24 hours."
}
```

**Features:**

- ✅ Rate limiting (5 requests per hour per IP)
- ✅ CORS protection
- ✅ Honeypot spam prevention
- ✅ Email validation
- ✅ Input sanitization (XSS prevention)
- ⏳ TODO: Connect actual email service (SendGrid / Nodemailer)

---

## ✅ TODO: Pre-Launch Checklist

### Content Replacement

- [ ] **Hero Image:** Replace `/public/images/hero-lena.jpg` with real performance photo
- [ ] **Real Bio:** Update `siteContent.ts` → `story.content` with your actual bio
- [ ] **Photo Gallery:** Add 10+ real photos to `siteContent.ts` → `gallery[]`
- [ ] **Testimonials:** Replace placeholder testimonials with real client quotes + names
- [ ] **Audio Embeds:** Update Spotify/SoundCloud URLs in `mediaSection`
- [ ] **Video:** Update YouTube/Vimeo URL in `mediaSection.featuredVideoUrl`
- [ ] **Venue Logos:** Add 6-8 real venue logos to testimonials section

### Contact & Booking

- [ ] **Phone Number:** Add to `siteContent.ts` → `brand.phone`
- [ ] **Email Address:** Configure in `siteContent.ts` → `brand.email` & `.env`
- [ ] **Email Service:** Choose & integrate (SendGrid, Nodemailer, AWS SES)
  - Edit `/src/app/api/contact/route.ts` to uncomment SMTP section
  - Add `.env` variables: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`
- [ ] **Social Links:** Update Instagram/TikTok URLs in `siteContent.brand`

### Press Kit Downloads

- [ ] **Bio PDF:** Create high-res bio PDF, save to `/public/downloads/bio.pdf`
- [ ] **Tech Rider:** Create tech rider PDF, save to `/public/downloads/tech-rider.pdf`
- [ ] **Logos:** Add HD logo files to `/public/downloads/logos/`
- [ ] **Fact Sheet:** Create fact sheet, save to `/public/downloads/fact-sheet.pdf`
- [ ] **Update Paths:** Reference new PDFs in `siteContent.pressKit.sections`

### Event Management

- [ ] **Upcoming Events:** Add to `siteContent.events.upcoming[]`
- [ ] **Past Events:** Add to `siteContent.events.archive[]`
- [ ] **Event Images:** Store in `/public/images/events/`

### SEO & Analytics

- [ ] **Meta Titles:** Verify all page titles in metadata configs
- [ ] **Meta Descriptions:** Update in `/src/lib/metadata.ts`
- [ ] **Open Graph Images:** Create OG images, reference in metadata
- [ ] **Sitemap:** Verify `/sitemap.ts` includes all routes
- [ ] **Robots.txt:** Check robots.ts for crawler rules
- [ ] **GA4 Setup:** Install Google Analytics 4 tag
- [ ] **Structured Data:** Verify `/src/lib/schema.ts` Person schema

### Performance

- [ ] **Image Optimization:** Use Next.js Image component for all photos
- [ ] **Lighthouse Audit:** Run & fix any issues
- [ ] **Mobile Testing:** Test on iOS & Android devices
- [ ] **Form Testing:** Test submission & email delivery
- [ ] **Accessibility:** Test with screen reader (WAVE, axe DevTools)

### Deployment

- [ ] **Environment Variables:** Set `.env.local` with email credentials
- [ ] **Vercel Deploy:** Push to GitHub, deploy to Vercel
- [ ] **Domain Setup:** Configure custom domain (DNS)
- [ ] **SSL Certificate:** Verify HTTPS enabled
- [ ] **Analytics:** Confirm GA4 tracking working
- [ ] **Email Delivery Test:** Submit test form, verify email received

### Optional Enhancements

- [ ] **Booking System:** Integrate Calendly or custom booking
- [ ] **Payment:** Add Stripe for premium packages
- [ ] **Newsletter:** Connect email marketing (Mailchimp, ConvertKit)
- [ ] **Blog:** Add `/blog` section for SEO content
- [ ] **Testimonial Video:** Embed client video testimonials
- [ ] **Live Chat:** Add Intercom or similar for real-time inquiries

---

## 🛠 Development Commands

```bash
# Dev server (http://localhost:3002)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check

# Run tests (if configured)
npm test
```

---

## 🔐 Security Checklist

- ✅ **Rate Limiting:** 5 requests/hour per IP (API)
- ✅ **CORS:** Origin validation on POST
- ✅ **Honeypot:** Spam trap field
- ✅ **Email Validation:** Client & server-side
- ✅ **Input Sanitization:** HTML entity encoding
- ✅ **Headers:** Security headers configured
- ⏳ **HTTPS:** Ensure all URLs use https://

---

## 📱 Responsive Design

- **Desktop:** Full component widths, multi-column layouts
- **Tablet (768px):** 2-column grids, adjusted padding
- **Mobile (640px):** Single-column, sticky bottom CTA bar (MobileStickyCTA)
- **Touch-friendly:** 48px+ tap targets, 16px+ text

---

## 🎯 Conversion Optimization

### CTA Hierarchy

1. **Primary CTA:** "Check Availability" (accent-500 copper)
2. **Secondary CTA:** "Watch Live" (ghost outline)
3. **Mobile CTA:** Sticky bottom "Check Availability" bar
4. **Service CTA:** "Inquire" on each package card

### Form Strategy

- **13 Smart Fields:** Captures event details without overwhelming
- **Auto-scroll:** Form scrolls into view on CTA click
- **Error States:** Real-time validation feedback
- **Success Message:** Reassures user of submission

### Social Proof

- **Stats Strip:** 21 years / 400+ shows / 4.9 rating
- **Testimonials:** 6 client quotes with context
- **Venue Logos:** Trust signals below testimonials
- **Past Events:** Grid of successful implementations

---

## 📧 Email Integration Setup

### Option 1: SendGrid (Recommended)

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Add to `.env.local`:

```
SENDGRID_API_KEY=your_api_key_here
CONTACT_EMAIL_TO=your_email@example.com
```

4. Update `/src/app/api/contact/route.ts`:

```typescript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// In POST handler:
await sgMail.send({
  to: process.env.CONTACT_EMAIL_TO,
  from: 'noreply@lenasinger.com',
  subject: `New booking inquiry from ${name}`,
  html: `...`,
});
```

### Option 2: Nodemailer (for SMTP)

```bash
npm install nodemailer
```

Add to `.env.local`:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
CONTACT_EMAIL_FROM=noreply@lenasinger.com
CONTACT_EMAIL_TO=your_email@gmail.com
```

---

## 🤝 Support

For questions about Next.js, Tailwind, or TypeScript, refer to:

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React TypeScript](https://react-typescript-cheatsheet.netlify.app/)

---

## 📄 License

This website is custom-built for Lena Singer. All rights reserved.

---

**Last Updated:** February 2026  
**Status:** Phase 3 Implementation Complete ✅
