# Lena Singer Website | Premium CRO Redesign Strategy

**Status:** Design Brief v1  
**Date:** February 18, 2026  
**Designer Role:** Senior Product Designer + CRO Specialist  
**Primary Goal:** Inbound bookings for premium/corporate events  
**Secondary Goals:** Build authority, foster emotional connection, drive social engagement

---

## EXECUTIVE SUMMARY

**Current State Problem:**

- Generic "Professional Singer" template feel
- Weak trust signals
- Unclear booking process
- No differentiation from wedding DJ sites

**Redesign Thesis:**
Reposition Lena as a **premium live performance artist**—not a service provider. Emphasize 21 years of credibility, emotional authenticity, and professional polish. Site becomes a **portfolio that books**, with clear, non-intrusive CTAs at every conversion moment.

**Design Pillars:**

1. **Photo/Video-First** — Real performance imagery dominates over illustrations
2. **Dark Premium** — Charcoal/black + single accent (copper/amber/magenta), aggressive whitespace
3. **Cinematic Tone** — Emotional, real, raw—no cheesy stock music feeling
4. **Conversion-Focused** — Clear booking funnel; sticky CTA on mobile; multiple contact entry points
5. **Trust-Heavy** — Testimonials, venue logos, specific stats (21 years, X shows, rating)

---

## INFORMATION ARCHITECTURE

### Site Structure

```
/                          [Homepage – one-page scroll]
├── /services              [Package details + pricing + tech specs]
├── /media                 [Press kit, bio, downloadable assets]
├── /events                [Upcoming shows + past events archive]
└── /contact               [Contact form + booking request]

Homepage sections (scroll):
1. Hero + CTAs + Trust Signals (21 yrs / # shows / ⭐ rating)
2. "Hear Lena" – Media (video + audio embeds)
3. Services – 3 tier packages (Corporate / Weddings / Club & Private)
4. "Why Lena" – 4 proof points with testimonial snippets
5. Testimonials – 6+ quotes + venue logos
6. Gallery – 8–12 images (photos + behind-the-scenes)
7. Short Bio – Punchy story (6–8 sentences)
8. Final CTA – "Let's work together"
9. Contact + FAQ (collapsible)
```

---

## HERO SECTION | Two Variants

### VARIANT 1: Cinematic Artist (Recommended Default)

**Layout:** Full-height (hero + below-fold hint)

```
.hero-bg
│
├─ [LARGE STAGED PHOTO | Cinematic color grade, Lena mid-performance]
│  └─ [Video loop fallback: 15s loop of live performance, no sound auto-play]
│
├─ .hero-overlay [Gradient: transparent → dark at bottom]
│
└─ .hero-content [Positioned bottom-left, 12-16% from bottom]
   ├─ .hero-eyebrow
   │  └─ Text: "21 Years. 400+ Shows. Raw Emotion."
   │
   ├─ .hero-headline
   │  └─ "The Voice Your Event\nWill Remember"
   │
   ├─ .hero-subheading [Single line, 80% opacity]
   │  └─ "Live performances that move audiences. From intimate weddings to corporate galas."
   │
   └─ .hero-cta-group
      ├─ [Primary CTA Button] "Check Availability"
      │  └─ Link to #contact / Open modal
      │  └─ Style: Solid accent color (copper/amber), white text
      │
      └─ [Secondary CTA Button] "Watch Recent Show"
         └─ Link to embedded video or YouTube
         └─ Style: Outline (white/accent), transparent bg
```

**Trust Strip (Below Hero, sticky scroll trigger):**

```
.trust-strip [Dark bg, light text, 60px height]
├─ Icon + Stat: "21 Years" + "Singing since age 7"
├─ Icon + Stat: "400+ Shows" + "Corporate to intimate"
└─ Icon + Stat: "⭐ 4.9/5" + "100+ verified reviews"
```

---

### VARIANT 2: Booking/Pro (Alt: Use on /services page or A/B test)

**Layout:** 60/40 split (image left, content right)

```
.hero-split
├─ .hero-image [60%]
│  └─ [Large staged photo of Lena, professional lighting]
│     └─ Overlay badge: "Available for bookings"
│
└─ .hero-content [40%, vertically centered]
   ├─ .headline
   │  └─ "Premium Live Entertainment\nfor Every Occasion"
   │
   ├─ .subheading
   │  └─ "21 years of stage experience. Corporate events, weddings, private shows."
   │
   ├─ .stats-grid [2 columns]
   │  ├─ "21 Years" / "Stage Experience"
   │  ├─ "400+ Shows" / "Corporate to Intimate"
   │  ├─ "⭐ 4.9/5" / "Client Reviews"
   │  └─ "%50 Repeat" / "Client Rate"
   │
   └─ .cta-group
      ├─ [Primary] "Check Availability"
      └─ [Secondary] "View Services"
```

**When to use Variant 2:**

- /services hero
- Page reloads (test engagement lift)
- Desktop-first audiences (B2B)

---

## SECTION-BY-SECTION WIREFRAME OUTLINE

### 1. HERO SECTION (Variant 1: Cinematic)

**Height:** 100vh on desktop; 80vh on mobile  
**CTA Priority:** High  
**Microcopy Style:** Punchy, emotional, specific

| Element     | Desktop                                                                                   | Mobile                                                           |
| ----------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| BG Image    | Full cinematic photo (1920×1080+)                                                         | Cropped to face/shoulders (1080×1440+)                           |
| Headline    | "The Voice Your Event\nWill Remember"                                                     | "The Voice Your\nEvent Remembers"                                |
| Subheading  | Full: "Live performances that move audiences. From intimate weddings to corporate galas." | "Premium live performances. Weddings. Corporate. Private shows." |
| CTA #1      | "Check Availability" (solid, accent)                                                      | "Check Availability" (full-width, sticky at bottom)              |
| CTA #2      | "Watch Recent Show" (outline)                                                             | Hidden (secondary in sticky footer)                              |
| Trust Stats | 3-column (21 yrs / 400+ shows / ⭐4.9)                                                    | Stacked, revealed on scroll                                      |

**Mobile Sticky Footer:**

```css
Fixed bottom: 0;
Height: 70px;
BG: Dark (90% opacity)
CTA: "Check Availability" 100% width
Secondary text: "Live Performances. Premium Service."
```

---

### 2. HEAR LENA | Media Section

**Purpose:** Proof of quality + emotional hook  
**CTA Priority:** Medium (social follow)  
**Microcopy:** "Listen to real performances. Watch live."

```
.media-section
├─ .section-header
│  ├─ Headline: "Hear Lena Live"
│  └─ Subheading: "Raw emotion. Real performances. No backing tracks—just voice, presence, and connection."
│
├─ .featured-video [60% width on desktop, full on mobile]
│  ├─ Thumbnail: Still frame from performance
│  ├─ Embed: YouTube / Vimeo (15–30 sec highlight reel)
│  └─ Overlay badge: "Recent Performance • Dec 2025"
│
├─ .audio-grid [3 columns, 2 rows on desktop; stacked on mobile]
│  ├─ .audio-card [Each one: title, platform badge, play icon]
│  │  ├─ Card 1: "Original - 'Neon Nights'" / SoundCloud embed
│  │  ├─ Card 2: "Cover - 'Hallelujah'" / Spotify embed
│  │  └─ Card 3: "Studio Session" / Soundcloud embed
│  │
│  └─ CTA: "Follow @lena_streetartist" [Badge linking to Instagram]
│
└─ .social-cta
   ├─ "Stay connected:"
   ├─ [Instagram icon] @lena_streetartist
   ├─ [TikTok icon] @_lena_singer_
   └─ Copy: "Live clips, behind-the-scenes, and booking updates"
```

**Spacing:**

- Section padding: 120px (top/bottom)
- Video to audio grid: 60px gap
- Audio cards: 20px gap (desktop), 16px (mobile)

---

### 3. SERVICES | 3-Tier Packages

**Purpose:** Show range + set pricing expectations + drive high-intent CTAs  
**CTA Priority:** Highest (direct booking)  
**Microcopy:** "Each performance is custom. Here's what's included in each tier."

```
.services-section
├─ .section-header
│  ├─ Headline: "Services & Packages"
│  └─ Subheading: "I work with you to create a performance that fits your vision, budget, and venue. Every show is unique."
│
├─ .package-grid [3 columns on desktop; stacked on mobile]
│  │
│  ├─ .package-card [CORPORATE EVENTS]
│  │  ├─ .badge "Most Popular"
│  │  ├─ .title "Corporate Events"
│  │  ├─ .subtitle "Galas, product launches, conferences"
│  │  ├─ .price "$XXXX" / "from"
│  │  ├─ .description "Perfect for creating a memorable moment at your professional event."
│  │  ├─ .includes [Check marks]
│  │  │  ├─ "30–60 min performance"
│  │  │  ├─ "Custom setlist (your vibe, my voice)"
│  │  │  ├─ "Professional audio setup (or use yours)"
│  │  │  ├─ "Sound check + rehearsal"
│  │  │  └─ "Video recording included"
│  │  ├─ .addons [Expandable]
│  │  │  ├─ "Extended set (+30 min)"
│  │  │  ├─ "Custom acoustic arrangement"
│  │  │  └─ "Live band backup"
│  │  └─ [CTA] "Inquire for Rates"
│  │     └─ opens contact form with pre-filled "Corporate Event"
│  │
│  ├─ .package-card [PREMIUM WEDDINGS]
│  │  ├─ .badge "Most Booked"
│  │  ├─ .title "Premium Weddings"
│  │  ├─ .subtitle "Ceremony, reception, intimate dinners"
│  │  ├─ .price "$XXXX" / "from"
│  │  ├─ .description "A voice that makes guests cry. Ceremony performances, cocktail hour, or full entertainment."
│  │  ├─ .includes [Check marks]
│  │  │  ├─ "45–90 min performance"
│  │  │  ├─ "Setlist consultation (I suggest some classics, you choose mood)"
│  │  │  ├─ "Full tech + backup music (if needed)"
│  │  │  ├─ "2 rehearsals (remote + on-site)"
│  │  │  └─ "4K video recording"
│  │  ├─ .addons [Expandable]
│  │  │  ├─ "Ceremony solo (bride's song)"
│  │  │  ├─ "Live band or string quartet backup"
│  │  │  └─ "Photo/video edit highlight reel (7 min)"
│  │  └─ [CTA] "Check My Calendar"
│  │     └─ opens availability checker or contact form
│  │
│  └─ .package-card [CLUB & PRIVATE SHOWS]
│     ├─ .badge "Flexible"
│     ├─ .title "Club & Private Shows"
│     ├─ .subtitle "Bars, venues, private parties"
│     ├─ .price "$XXXX" / "from"
│     ├─ .description "High-energy performances or intimate vibes. Let's build a show that fits your space."
│     ├─ .includes [Check marks]
│     │  ├─ "60–120 min performance"
│     │  ├─ "Custom setlist (originals + covers)"
│     │  ├─ "Sound engineer coordination"
│     │  ├─ "Tech rider specs (lighting, audio, space)"
│     │  └─ "Full recording rights (per agreement)"
│     ├─ .addons [Expandable]
│     │  ├─ "DJ + full production"
│     │  ├─ "Backup band or karaoke tracks"
│     │  └─ "Extended show (up to 4 hours)"
│     └─ [CTA] "Discuss Your Vision"
│        └─ opens contact form with "Club/Private Show"
│
├─ [NOTE: Each CTA pre-fills contact form with package type]
│
└─ .cta-full-width
   ├─ Headline: "Not sure which package is right for you?"
   ├─ Subheading: "Let's talk. I'll help you build the perfect performance for your event."
   └─ [CTA] "Schedule a Free Consultation"
      └─ 15 min call or email intro
```

**Pricing Note:**

- Placeholder pricing for now: "$2,500 from" (adjust per actual)
- Show range to avoid sticker shock
- Emphasize "custom pricing" for larger events

**Spacing:**

- Section: 120px top/bottom padding
- Cards: 30px gap (desktop), 24px (mobile)
- Card internal padding: 40px

---

### 4. WHY LENA | Proof Points (4 reasons)

**Purpose:** Differentiation + emotional validation  
**CTA Priority:** Low (trust-building)  
**Microcopy:** Real, not generic

```
.why-section
├─ .section-header
│  ├─ Headline: "Why Clients Book Lena"
│  └─ Subheading: "Not just vocals. Connection."
│
├─ .proof-grid [2x2 on desktop; stacked on mobile]
│  │
│  ├─ .proof-card [SOUND & PRESENCE]
│  │  ├─ .icon [Musical note or stage silhouette, accent color]
│  │  ├─ .title "Raw, Unrehearsed Sound"
│  │  ├─ .description "No backing tracks. No lip-sync. Just voice, presence, and 21 years of learning to move people. Every performance is different—because it's real."
│  │  └─ .proof-point "Spotify: [X listeners] | SoundCloud: [X followers]"
│  │
│  ├─ .proof-card [EMOTIONAL INTELLIGENCE]
│  │  ├─ .icon [Heart or person, accent color]
│  │  ├─ .title "I Read the Room"
│  │  ├─ .description "A great performer adapts. Your wedding needs tenderness. Your corporate event needs energy. I deliver what the moment demands."
│  │  └─ .proof-point "98% say 'Exceeded expectations' (Testimonials)"
│  │
│  ├─ .proof-card [PROFESSIONALISM & LOGISTICS]
│  │  ├─ .icon [Checkmark or gear, accent color]
│  │  ├─ .title "You Can Rely On Me"
│  │  ├─ .description "Sound checks, tech riders, backup plans, communication every step of the way. 400+ shows means I've solved every problem before it happens."
│  │  └─ .proof-point "0 cancellations. 100% on-time."
│  │
│  └─ .proof-card [COLLABORATION]
│     ├─ .icon [Handshake or people, accent color]
│     ├─ .title "Your Vision, My Voice"
│     ├─ .description "I work *with* you, not *for* you. Setlist consultation, custom arrangements, specific mood. Your event, your rules."
│     └─ .proof-point "50% of bookings are repeat clients or referrals"
│
└─ .proof-cta [Centered, below grid]
   └─ "Ready to book? Let's talk."
      └─ Link to #contact or /contact
```

**Spacing:**

- Section: 120px top/bottom
- Grid gap: 40px (desktop), 24px (mobile)
- Card internal padding: 32px
- Cards have subtle border-top in accent color

---

### 5. TESTIMONIALS + VENUE LOGOS

**Purpose:** Social proof + trust scaling  
**CTA Priority:** Medium (builds confidence before contacting)  
**Microcopy:** Specific, emotional quotes (include client title/event type)

```
.testimonials-section
├─ .section-header
│  ├─ Headline: "Trusted by 100+ Event Organizers"
│  └─ Subheading: "Here's what they say."
│
├─ .testimonial-carousel [6+ slides | Autoplay: 5s, manual swipe/desktop arrows]
│  │
│  ├─ .testimonial-card [Each: quote + author + event type + photo]
│  │  ├─ .quote-text [24px, serif or high-contrast sans, italicized]
│  │  │  └─ "Lena brought tears to my mother's eyes. A moment no one will forget."
│  │  ├─ .author-info
│  │  │  ├─ Name: "Sarah M."
│  │  │  └─ Event: "Wedding • June 2025"
│  │  └─ .author-photo [60x60px, round]
│  │
│  └─ [Repeat 6+ times with varied quotes]
│     Examples (adjust with real testimonials):
│     - "Professional, beautiful, unforgettable. Highest recommendation." — Marcus T., Corporate Gala
│     - "My guests asked for her contact info before I even did. That says everything." — Emma S., Private Dinner
│     - "She doesn't just sing. She *connects*." — David K., Wedding Ceremony
│
├─ .venue-logos [Horizontal scroll or grid below testimonials]
│  ├─ Headline: "Featured At"
│  ├─ Logo grid: [4–6 venue/venue logos, grayscale, clickable]
│  │  ├─ [Logo placeholder: "Venue Name"]
│  │  └─ [Repeat 5 more]
│  └─ Note: "Plus 100+ private events"
│
└─ .cta-centered
   └─ "Still deciding? Book a call with Lena"
      └─ 15 min free consultation link
```

**Carousel Settings:**

- Mobile: snap scrolling, swipe-enabled
- Desktop: 1 card full-width or 2-up layout
- Autoplay pause on hover

**Spacing:**

- Section: 120px top/bottom
- Carousel top margin: 60px
- Logo grid margin: 60px top

---

### 6. GALLERY | Images + Behind-the-Scenes

**Purpose:** Artistic credibility + visual proof  
**CTA Priority:** Low (visual engagement)  
**Microcopy:** Minimal (let images speak)

```
.gallery-section
├─ .section-header
│  ├─ Headline: "Gallery"
│  └─ Subheading: "On stage, behind the scenes, connecting with audiences."
│
├─ .image-grid [Grid layout: masonry or 3-col on desktop; 2-col mobile]
│  │
│  └─ [8–12 images, alt text for each]
│     Examples:
│     - Close-up: singing on stage (dramatic lighting)
│     - Wide: full stage performance (venue visible)
│     - Candid: talking with guests at event
│     - Behind-the-scenes: rehearsal, soundcheck
│     - Detail: hands on microphone (emotion)
│     - Audience reaction (if permission given)
│     - Band/collaboration shot
│     - Acoustic setup (intimate setting)
│
├─ .image-lightbox
│  └─ Click any image → fullscreen, swipeable, caption overlay
│
└─ .cta-gallery-end
   └─ "See more on Instagram"
      └─ @lena_streetartist
```

**Image Specs:**

- Minimum 1200px width (high-quality)
- Mood: Professional concert lighting + intimate moments
- Color: Align with accent color grading (minimal, let natural tones shine)

**Spacing:**

- Section: 120px top/bottom
- Grid gap: 20px
- Images: 16:9 or 4:3 aspect ratio (consistent)
- Lightbox: Full viewport

---

### 7. BIO & STORY | Short, Punchy

**Purpose:** Brand narrative + humanize  
**CTA Priority:** Low (brand building)  
**Microcopy:** 6–8 sentences, conversational

```
.bio-section
├─ .content-wrapper [Max 700px width, centered, set in 18px serif or high-quality sans]
│
├─ .section-header
│  ├─ Headline: "Lena's Story"
│  └─ [No subheading—let bio speak]
│
├─ .bio-text [Read like an artist statement, not a resume]
│  └─ Example (replace with real):
│     "I was 7 years old when I first stepped on stage. Since then, I've sung at 400+ events—weddings in rain, corporate stages under spotlights, intimate dinners where I could see tears form. Music found me through cello and piano lessons as a kid. But singing? That's where my voice learned to say things words can't.
│
│     I'm not here to be background music. I'm here to create a *moment*—the kind of performance your guests won't forget. Every show is different because every room, every occasion, every audience is different. That's what keeps me coming back.
│
│     When you book me, you're not hiring entertainment. You're inviting someone who cares deeply about making your event matter."
│
└─ .bio-cta [Soft CTA at end]
   └─ "Let's create your moment."
      └─ Link to #contact
```

**Spacing:**

- Section: 120px top/bottom
- Text line-height: 1.8
- Paragraph spacing: 24px

**Typography:**

- Font: Options—Georgia (serif) or system sans-serif (Segoe, -apple-system)
- Size: 18–20px
- Color: High contrast (dark text on white/light)

---

### 8. CONTACT & FINAL CTA

**Purpose:** Conversion funnel endpoint  
**CTA Priority:** HIGHEST (main conversion)  
**Microcopy:** Action-oriented, no friction

```
.contact-section
├─ .section-header
│  ├─ Headline: "Let's Work Together"
│  └─ Subheading: "Check availability. Discuss your vision. Book your moment."
│
├─ .contact-container [2-column on desktop: form + quick contact; stacked mobile]
│  │
│  ├─ .contact-form [60% desktop; full mobile]
│  │  ├─ Fields:
│  │  │  ├─ Name [Text input]
│  │  │  ├─ Email [Email input] ← Required
│  │  │  ├─ Phone [Tel input]
│  │  │  ├─ Event Type [Dropdown: Corporate / Wedding / Club/Private / Other]
│  │  │  ├─ Event Date [Date picker]
│  │  │  ├─ Venue/Location [Text input]
│  │  │  ├─ Message [Textarea]
│  │  │  │  └─ Placeholder: "Tell me about your vision. Music style? Vibe? Budget? Anything helps!"
│  │  │  └─ Consent [Checkbox]
│  │  │     └─ "I'd like to receive occasional updates about new performances and availability"
│  │  │
│  │  ├─ [CTA Button] "Send Inquiry"
│  │  │  └─ Submit to /api/contact or email service
│  │  │  └─ Success message: "Thank you! I'll be in touch within 24 hours."
│  │  │
│  │  └─ Assurance text [Small, below button, 14px]
│  │     └─ "Usually reply within 24 hours. I read every message personally."
│  │
│  └─ .quick-contact [40% desktop; stacked below form mobile]
│     ├─ Headline: "Or reach out directly:"
│     ├─ .contact-method [Each with icon]
│     │  ├─ [Phone icon] Call/Text
│     │  │  └─ "+1 (XXX) XXX-XXXX"
│     │  │  └─ "Available most days 10am–6pm"
│     │  │
│     │  ├─ [Email icon] Email
│     │  │  └─ "lena@example.com"
│     │  │  └─ "Preferred for event details"
│     │  │
│     │  ├─ [Instagram icon] Instagram
│     │  │  └─ "@lena_streetartist"
│     │  │  └─ "DM for quick questions"
│     │  │
│     │  └─ [Calendar icon] Book a Call
│     │     └─ "Free 15-min consultation"
│     │     └─ Calendly embed or button
│     │
│     └─ [Social icons]
│        ├─ Instagram button
│        ├─ TikTok button
│        └─ YouTube button

├─ .faq-section [Expandable accordion, below contact form]
│  ├─ Headline: "Frequently Asked Questions"
│  ├─ .faq-item
│  │  ├─ Q: "What's your availability?"
│  │  └─ A: "I book 2–3 months out. Last-minute bookings possible (ask). Check my calendar in the form above."
│  │
│  ├─ Q: "Do you do backing tracks or live band?"
│  │  └─ A: "Both. I prefer live instrumentation (piano, strings, full band), but can work with backing tracks if your budget/space requires."
│  │
│  ├─ Q: "Can I request specific songs?"
│  │  └─ A: "Absolutely. We'll discuss your setlist together. I do originals, covers, and custom arrangements."
│  │
│  ├─ Q: "What's your tech setup?"
│  │  └─ A: "Full specs available in my tech rider (downloadable on /media). I'm flexible and work with your venue's equipment."
│  │
│  ├─ Q: "Do you offer refunds if I need to reschedule?"
│  │  └─ A: "Yes. Full refund if you cancel >30 days before. Partial (80%) refund 15–30 days. Non-refundable <15 days (but let's reschedule together)."
│  │
│  └─ Q: "Do you sell audio or merchandise?"
│     └─ A: "Not yet, but available on streaming platforms (Spotify, SoundCloud). Always exploring merchandise. Ask to be notified!"
│
└─ .footer-cta [Sticky on mobile, full-width visible at all times]
   └─ "Let's Make This Happen — Check Availability"
      └─ Scroll to form or open modal
```

**Form Behavior:**

- Form should be sticky on mobile (always accessible)
- Submit redirects to thank-you page or success modal
- Email confirmation sent to user
- Alert sent to Lena's email inbox

**Spacing:**

- Section: 120px top/bottom
- Form margin: 60px top
- FAQs: 60px top, 32px between items
- Mobile sticky footer: 70px height, with padding

---

### 9. FOOTER (Implied across all pages)

**Purpose:** Navigation, credibility, legal  
**CTA Priority:** Medium (secondary discovery)

```
.footer
├─ .footer-links [3 columns: Services | Media | About]
│  ├─ Quick Nav
│  ├─ /services
│  ├─ /media
│  ├─ /events
│  └─ /contact
│
├─ .footer-social
│  ├─ Instagram
│  ├─ TikTok
│  └─ Spotify
│
├─ .footer-legal [Small text]
│  ├─ Copyright [Year]
│  ├─ Privacy Policy
│  ├─ Terms of Service
│  └─ Tech Rider PDF
│
└─ .footer-tagline
   └─ "Lena Singer • Premium Live Performances • Events & Booking"
```

---

## DEDICATED PAGES (Brief Outlines)

### `/services` – Package Deep Dive

- Hero (Variant 2: Booking/Pro emphasis)
- Full package details (3-tier, expanded)
- Add-ons & customization
- Pricing & payment terms
- Tech rider (collapsible, downloadable PDF)
- FAQ (booking-specific)
- Final CTA: "Schedule Consultation"

### `/media` – Press Kit

- High-res photos (downloadable)
- Bio (full + short versions)
- Tech rider PDF
- Press kit PDF
- Logos (black + white versions)
- Fact sheet (age, experience, stats)
- Quote sheet (pull quotes from testimonials)
- Links to streaming platforms

### `/events` – Upcoming & Archive

- **Upcoming Shows** (if public): List upcoming performances
  - Event name, date, venue, link (if public)
  - "Get tickets" CTA if applicable
- **Archive**: Grid of past events (no dates necessary, just visual proof)
  - Event type badges (Corporate / Wedding / Club)
  - Venue name
  - Optional: performance video or image

### `/contact` – Dedicated Contact Page

- Hero: Minimal (just headline)
- Full contact form (same as homepage)
- Maps embed (if location-relevant)
- Response time guarantee
- Social links (prominent)

---

## COMPONENT LIBRARY & MINI DESIGN SYSTEM

### COLOR PALETTE

```
Primary Dark:        #1a1a1a (charcoal)  — Site background
Secondary Dark:      #2d2d2d (dark gray) — Sections, cards
Accent Color:        #C67C4E (copper) OR #D4AF37 (amber) OR #E91E63 (magenta)
                     → Choose ONE. Recommend copper for warmth/maturity.
Text Primary:        #FFFFFF or #f5f5f5  — On dark
Text Secondary:      #b0b0b0             — Muted text
Success/Trust:       #4CAF50             — Checkmarks, positive signals
Warning:             #FFC107             — Alerts (if needed)
```

**Usage:**

- Dark backgrounds: Primary Dark
- Cards/sections: Secondary Dark
- CTAs: Accent color (solid bg, white text)
- Highlights/borders: Accent color
- Links: Accent color (underline on hover)

### TYPOGRAPHY

**Font Families:**

- **Headlines** (h1–h4): System sans-serif or _Poppins_ (Google Fonts)
  - h1: 64px (desktop), 40px (mobile) | Bold/700 | Leading: 1.2
  - h2: 48px (desktop), 32px (mobile) | Bold/700 | Leading: 1.3
  - h3: 36px (desktop), 24px (mobile) | Semi-bold/600 | Leading: 1.4
  - h4: 24px (desktop), 20px (mobile) | Semi-bold/600 | Leading: 1.4

- **Body Text**: System sans-serif or _Inter_ (Google Fonts)
  - Base: 16px | Regular/400 | Leading: 1.6
  - Large: 20px | Regular/400 | Leading: 1.8
  - Small: 14px | Regular/400 | Leading: 1.5

- **Accents** (quotes, bio): Optional serif (_Georgia_ or _Crimson Text_)
  - 18–20px | Regular/400 | Italicized
  - Used sparingly for testimonials, bio

### SPACING SYSTEM (8px base unit)

```
xs:      8px   (gaps between inline elements)
sm:     16px   (tight component spacing)
md:     24px   (standard paragraph spacing)
lg:     40px   (section elements)
xl:     60px   (between major sections)
xxl:   120px   (section padding top/bottom)
```

**Application:**

- Hero padding: `xxl` (120px top/bottom)
- Section padding: `xxl` (120px)
- Card padding: `lg` (40px)
- Text element gaps: `md` (24px)
- Inline gaps: `xs` (8px)

### BUTTONS

**Primary CTA**

```css
Background:  Accent color (#C67C4E copper)
Text:        White (#FFFFFF)
Padding:     16px 32px (vertical × horizontal)
Border:      None
Border-radius: 4px (subtle, not rounded)
Font:        16px, Bold/700
Hover:       Darken accent by 20%, scale 1.02
Focus:       Outline in white, 2px
States:      :hover, :focus, :disabled (opacity 0.5)
```

**Secondary CTA (Outline)**

```css
Background:  Transparent
Border:      2px solid accent or white
Text:        Accent color or white
Padding:     16px 32px
Font:        16px, Semi-bold/600
Hover:       Inverse (accent bg, white text)
Focus:       Blue outline, 2px
```

**Tertiary CTA (Ghost / Minimal)**

```css
Background:  Transparent
Border:      None
Text:        Accent color, underlined
Padding:     0 (inline element)
Font:        16px, Regular/400
Hover:       Opacity 0.7
Underline:   On hover
```

### CARDS & CONTAINERS

**Service Card**

```css
Background:  Secondary Dark (#2d2d2d)
Padding:     40px
Border:      1px solid #444
Border-top:  4px solid accent color
Border-radius: 0
Box-shadow:  0 8px 32px rgba(0, 0, 0, 0.3)
Hover:       Scale 1.02, shadow increase
```

**Testimonial Card**

```css
Background:  Secondary Dark (#2d2d2d)
Padding:     32px
Border:      None
Quote text:  24px, italic, serif
Author info: 14px, gray
Photo:       60px square, round
```

**Gallery Image**

```css
Aspect-ratio: 16:9 or 4:3 (consistent)
Border:      None
Overlay:     Subtle gradient on hover (darken)
Cursor:      pointer
```

### SPACING & LAYOUT

**Full-Width Section**

```css
Max-width:   100%
Padding:     120px (top/bottom) 40px (left/right, desktop)
Mobile:      120px (top/bottom) 20px (left/right)
Internal max-width: 1200px (for content centering)
```

**Sticky Mobile Footer**

```css
Position:    fixed
Bottom:      0
Width:       100%
Height:      70px
Background:  #1a1a1a (primary dark), 90% opacity
Z-index:     100
Padding:     12px 20px (vertical × horizontal)
Content:     Single CTA button (full-width - 20px padding)
```

**Grid System**

```
Desktop (3 columns):   calc((100% - 60px) / 3)  [gap: 30px]
Tablet (2 columns):    calc((100% - 30px) / 2)  [gap: 30px]
Mobile (1 column):     100%                      [gap: 24px]
```

### INTERACTIVE ELEMENTS

**Hover States**

- Buttons: Scale 1.02 + shadow increase
- Links: Underline + opacity 0.8
- Cards: Scale 1.02 + shadow increase
- Images: Opacity 0.9 (slight darken)

**Focus States (Accessibility)**

- Outline: 2px solid #CCCCCC or accent color
- Offset: 4px from element

**Mobile Touch States**

- Hold/press: Slight scale decrease (0.98)
- Active: Darker bg or outline

---

## MICROCOPY GUIDELINES

### Tone & Voice

- **Emotional but professional.** Not cheesy, not cold.
- **Specific beats generic.** "4 years" not "extensive experience."
- **First-person where appropriate.** "I read the room" not "The performer reads the room."
- **Action-forward CTAs.** "Check Availability" not "Submit Inquiry."

### CTA Microcopy

| Context       | Primary                    | Secondary           | Tertiary           |
| ------------- | -------------------------- | ------------------- | ------------------ |
| Hero          | "Check Availability"       | "Watch Recent Show" | —                  |
| Services      | "Inquire for Rates"        | —                   | "View Details"     |
| Testimonial   | —                          | —                   | "See More Reviews" |
| Bio           | "Let's Create Your Moment" | —                   | —                  |
| Contact       | "Send Inquiry"             | —                   | "Schedule a Call"  |
| Mobile Sticky | "Check Availability"       | —                   | —                  |

### Section Subheadings (Consistency)

| Section      | Subheading Style                                                              |
| ------------ | ----------------------------------------------------------------------------- |
| Hero         | Two sentences. Specific, emotional. Focus on outcome.                         |
| Services     | One sentence. Problem-solving angle.                                          |
| Testimonials | Minimal. "Here's what they say."                                              |
| Contact      | Action-oriented. "Check availability. Discuss your vision. Book your moment." |

### Form Language

**Placeholder Text:**

- Name: "Your name"
- Email: "you@example.com"
- Phone: "(555) 000-0000"
- Message: "Tell me about your vision. Music style? Vibe? Budget? Anything helps!"

**Validation:**

- Required: "This field is required."
- Email: "Please enter a valid email."
- Success: "Thank you! I'll be in touch within 24 hours."

---

## DESIGN TOKENS (Build & Implementation Reference)

### CSS Variables (if using Tailwind or custom CSS)

```css
:root {
  /* Colors */
  --color-dark-primary: #1a1a1a;
  --color-dark-secondary: #2d2d2d;
  --color-accent: #c67c4e; /* Or #D4AF37, #E91E63 */
  --color-text-light: #ffffff;
  --color-text-muted: #b0b0b0;

  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --font-serif: 'Georgia', serif;

  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 40px;
  --spacing-xl: 60px;
  --spacing-xxl: 120px;

  /* Shadows */
  --shadow-sm: 0 4px 16px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 12px 48px rgba(0, 0, 0, 0.4);

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 300ms ease-in-out;
}
```

---

## DEFINITION OF DONE (v1)

### Feature Completeness ✓

- [ ] **Hero Section**
  - [ ] Image/video background (cinematic variant)
  - [ ] Headline, subheading, eyebrow
  - [ ] 2 CTAs ("Check Availability", "Watch" or secondary)
  - [ ] Trust strip (21 yrs / 400+ shows / 4.9 rating) — visible on scroll
  - [ ] Mobile: responsive, sticky footer CTA

- [ ] **Hear Lena Section**
  - [ ] Featured video embed (YouTube/Vimeo)
  - [ ] 3 audio embeds (Spotify/SoundCloud placeholders)
  - [ ] Social follow CTA (Instagram/TikTok icons)

- [ ] **Services Section**
  - [ ] 3 package cards (Corporate / Wedding / Club)
  - [ ] Pricing placeholder, package includes, add-ons (collapsible)
  - [ ] "Inquire" CTAs (form pre-fill logic)
  - [ ] Responsive grid (3-col desktop → stacked mobile)

- [ ] **Why Lena Section**
  - [ ] 4 proof-point cards (Sound / Emotion / Professionalism / Collaboration)
  - [ ] Icons, titles, descriptions, proof points
  - [ ] Responsive grid (2x2 desktop → stacked mobile)

- [ ] **Testimonials Section**
  - [ ] Carousel/slider (6+ testimonials)
  - [ ] Quote, author, event type, photo
  - [ ] Autoplay (5s) + manual controls
  - [ ] Venue logos below (4–6 grayscale placeholder logos)

- [ ] **Gallery Section**
  - [ ] Masonry or grid layout (8–12 images)
  - [ ] Lightbox/modal on click (swipeable)
  - [ ] Instagram link CTA

- [ ] **Bio Section**
  - [ ] 6–8 sentence punchy story
  - [ ] Serif typography, centered, readable
  - [ ] Soft CTA ("Let's create your moment")

- [ ] **Contact Section**
  - [ ] Form (Name, Email, Phone, Event Type, Date, Venue, Message)
  - [ ] Form submission logic (email service integration)
  - [ ] Success message/redirect
  - [ ] Quick contact options (Phone, Email, Instagram, Calendar link)
  - [ ] FAQ accordion (5–6 common questions) collapsible
  - [ ] Mobile sticky footer (always visible)

### Design System ✓

- [ ] Color palette defined & applied consistently
- [ ] Typography hierarchy (h1–h4, body, small) implemented
- [ ] Spacing system (xs–xxl) applied to all sections
- [ ] Button states (primary, secondary, tertiary) with hover/focus
- [ ] Card components (service, testimonial, gallery) consistent
- [ ] Shadow & border treatments applied
- [ ] Responsive breakpoints tested (mobile, tablet, desktop)

### SEO & Performance ✓

- [ ] Title tag optimized ("Lena Singer | Premium Live Performances | Bookings")
- [ ] Meta description (150 chars)
- [ ] Heading hierarchy (h1 once, h2 for sections)
- [ ] Alt text on all images
- [ ] Open Graph tags (OG image, description)
- [ ] Canonical URL set
- [ ] Lazy-loading on images
- [ ] Next/Image component for optimization (if Next.js)
- [ ] Lighthouse score: >80 (Performance, Accessibility, Best Practices)

### Accessibility ✓

- [ ] Contrast ratio: 4.5:1 on text (WCAG AA)
- [ ] All buttons/CTAs keyboard accessible (Tab, Enter)
- [ ] Focus states visible (outline, 2px)
- [ ] Form labels associated with inputs
- [ ] Links underlined or clearly distinguishable
- [ ] Video captions (if applicable)
- [ ] ARIA labels where needed
- [ ] Screen-reader tested (at least basic flow)

### Mobile & Responsiveness ✓

- [ ] Viewport meta tag set
- [ ] Mobile-first CSS (mobile layout first, then breakpoints)
- [ ] Sticky CTA footer on mobile (70px, always visible)
- [ ] Touch targets: 44px minimum
- [ ] Form inputs: 16px font (prevents iOS auto-zoom)
- [ ] Tested on real devices (iPhone, Android)
- [ ] Horizontal scroll/overflow avoided
- [ ] Image scaling: no stretched/distorted images

### Conversion Funnel ✓

- [ ] 3+ "Check Availability" CTAs visible (hero, sticky, contact)
- [ ] Form pre-fills with event type (services cards → form)
- [ ] Success metric: Form submission tracking (Google Analytics or Mixpanel)
- [ ] Thank-you page or modal post-submission
- [ ] Email follow-up: confirmation to user + alert to Lena
- [ ] No friction: minimal required fields (Name, Email required; others optional)

### Content ✓

- [ ] All placeholder text replaced with real copy
- [ ] Testimonials: 6+ real quotes (with permission)
- [ ] Venue logos: 4–6 real venue/client logos (if available)
- [ ] Gallery: 8–12 real performance images (high-res)
- [ ] Featured video: real recent performance (15–30 sec)
- [ ] Audio embeds: real Spotify/SoundCloud links
- [ ] Bio: finalized story (6–8 sentences)
- [ ] Social links: real Instagram/TikTok URLs

### Technical Implementation ✓

- [ ] Codebase: React/Next.js components modular
- [ ] No console errors
- [ ] No unused CSS/JS
- [ ] Responsive images (srcset, sizes)
- [ ] CSS architecture: BEM or similar naming
- [ ] Build process: Minified, optimized
- [ ] Deployment: Live on production domain
- [ ] DNS, SSL configured
- [ ] 404 page customized

### Testing ✓

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Form submission tested (success + error states)
- [ ] Video/audio playback tested
- [ ] Carousel/slider tested (mobile & desktop)
- [ ] Lightbox tested
- [ ] Sticky footer tested (mobile only)
- [ ] Mobile breakpoints tested (320px, 768px, 1024px+)
- [ ] Load time: <3 seconds (Google PageSpeed Insights)

### Analytics & Tracking ✓

- [ ] Google Analytics 4 (GA4) installed
- [ ] Form submission event tracked
- [ ] CTA click tracking (Check Availability, Watch, etc.)
- [ ] Scroll depth tracking (sections)
- [ ] Social link clicks tracked
- [ ] Video play/engagement tracked (if embedded)
- [ ] Conversion funnels defined (e.g., Hero CTA → Form → Submit)

### Launch Readiness ✓

- [ ] GDPR consent modal (if EU traffic)
- [ ] Privacy policy page created
- [ ] Terms of service page created
- [ ] Contact email functional (test sending)
- [ ] Calendly/scheduling tool integrated (if using)
- [ ] Email service provider active (Nodemailer, SendGrid, etc.)
- [ ] Backup plan: manual email notification (to Lena)
- [ ] 404/error pages customized
- [ ] Favicon + site icon set
- [ ] Social share preview tested (OG tags)

---

## HERO VARIANTS DETAILED SPECS

### Variant 1: Cinematic Artist (Default Hero)

**Desktop Layout:**

```
┌─────────────────────────────────────────────────┐
│                                                   │
│       [LARGE PERFORMANCE PHOTO/VIDEO LOOP]       │
│       [Full viewport, 1920x1080+]                │
│                                                   │
│           [Dark Gradient Overlay › Bottom]        │
│                                                   │
│       .hero-content [Bottom-left, 12% from end]  │
│       ├─ Eyebrow: "21 Years. 400+ Shows..."      │
│       ├─ Headline: "The Voice Your Event..."     │
│       ├─ Subheading: "Live performances..."      │
│       └─ CTA Group                               │
│          ├─ [Primary] "Check Availability"       │
│          └─ [Secondary] "Watch Recent Show"      │
│                                                   │
│       [Trust Strip Below, sticky on scroll]      │
│       21 Yrs | 400+ Shows | ⭐ 4.9              │
│                                                   │
└─────────────────────────────────────────────────┘
```

**Mobile Layout:**

```
┌────────────────────────┐
│  [CROPPED PHOTO/VIDEO] │ 80vh
│  [Face + shoulders]    │
│                        │
│ [Gradient overlay]     │
│                        │
│ Eyebrow (small)        │
│ "21 Years. 400+ Shows" │
│                        │
│ Headline               │
│ "The Voice Your Event" │
│                        │
│ Subheading             │
│ "Premium performances" │
│                        │
│ [Sticky Footer]        │
│ [Availabilty CTA]      │ 70px
│                        │
└────────────────────────┘
```

**Image Specs:**

- Aspect: 16:9 (desktop), 9:16 (mobile crop)
- Color grading: Warm, slightly lifted shadows, natural skin tones
- Emotion: Mid-performance, eyes engaged, presence felt
- Size: 1920×1080 (desktop), 1080×1440 (mobile)
- Fallback: Video loop (15s, silent, autplay, muted, loop)

**Overlay Gradient:**

```css
background: linear-gradient(
  180deg,
  rgba(26, 26, 26, 0) 0%,
  rgba(26, 26, 26, 0.5) 70%,
  rgba(26, 26, 26, 0.95) 100%
);
```

**Text Positioning:**

- bottom: 60–80px (desktop), 40–50px (mobile)
- left: 40px (desktop), 20px (mobile)
- right: 40px (for max-width constraint)

---

### Variant 2: Booking/Pro (60-40 Split)

**Desktop Layout:**

```
┌─────────────────────────────────────────────────┐
│                                                   │
│  [IMG 60%]  │  [Content 40%]  │                 │
│  Stunning   │  Headline                          │
│  photo of   │  "Premium Live Ent..."             │
│  Lena,      │                                    │
│  professional│ Subheading                        │
│  lighting   │ "21 years of stage..."             │
│             │                                    │
│             │ Stats Grid (2×2)                   │
│             │ 21 Years | 400+ Shows             │
│             │ ⭐ 4.9    | 50% Repeat            │
│             │                                    │
│             │ CTA Group                          │
│             │ [Primary] "Check Availability"     │
│             │ [Secondary] "View Services"        │
│                                                   │
│ "Available for Bookings"                        │
│           [Badge overlay]                        │
│                                                   │
└─────────────────────────────────────────────────┘
```

**Mobile Layout:**

```
┌────────────────────────┐
│  [IMG - Full Width]    │ 400px
│                        │
│  "Available for        │
│   Bookings" [badge]    │
│                        │
│  Headline              │
│  "Premium Live Ent..." │
│                        │
│  Subheading            │
│  "21 years of stage..."│
│                        │
│  Stats (stacked)       │
│  21 Years              │
│  400+ Shows            │
│  ⭐ 4.9               │
│  50% Repeat            │
│                        │
│  CTA Group             │
│  [Primary] "Check..."  │
│  [Secondary] "View..." │
│                        │
└────────────────────────┘
```

**When to Use:**

- /services hero (sets booking context)
- A/B test on homepage (measure CTR)
- Desktop-first audiences (B2B leads)

---

## FOOTER DETAILED SPECS

```
.footer
├─ .footer-inner [Dark primary bg, 60px padding top/bottom]
│
├─ .footer-content [3-column grid: desktop, stacked: mobile]
│  │
│  ├─ .footer-col [Quick Links]
│  │  ├─ Headline: "Menu"
│  │  ├─ Nav items (4–5 links)
│  │  │  ├─ Services
│  │  │  ├─ Media
│  │  │  ├─ Events
│  │  │  ├─ Contact
│  │  │  └─ Press Kit
│  │
│  ├─ .footer-col [Social & Contact]
│  │  ├─ Headline: "Get in Touch"
│  │  ├─ Email: lena@example.com
│  │  ├─ Phone: +1 (XXX) XXX-XXXX
│  │  ├─ Social Icons (Instagram, TikTok, Spotify)
│  │
│  └─ .footer-col [Newsletter / Legal]
│     ├─ Headline: "Updates"
│     ├─ "Subscribe for updates" (optional email signup)
│     ├─ Or: "Follow for behind-the-scenes + new performances"
│     ├─ Legal links below
│     │  ├─ Privacy Policy
│     │  ├─ Terms of Service
│     │  └─ Tech Rider PDF
│
├─ .footer-divider [Subtle line, accent color]
│
└─ .footer-bottom [Centered, small text]
   ├─ "© 2026 Lena Singer. All rights reserved."
   ├─ "Designed for premium live performances."
   └─ "Built with ❤️ for memorable moments."
```

---

## MOBILE EXPERIENCE DETAILS

### Sticky CTA Footer (Always Visible)

```css
position: fixed;
bottom: 0;
left: 0;
right: 0;
height: 70px;
background: rgba(26, 26, 26, 0.95);
border-top: 1px solid #444;
z-index: 999;
padding: 12px 20px;
display: flex;
align-items: center;
justify-content: center;

button {
  width: 100%;
  max-width: calc(100% - 40px);
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 700;
}
```

**Text Inside Button:**

- Primary (hero): "Check Availability"
- Alternate (scrolled): "Let's Work Together" or "Check Availability"

### Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Lazy loading */
img[loading='lazy'] {
  background: #2d2d2d;
}
```

### Form on Mobile

```css
input,
textarea,
select {
  font-size: 16px; /* Prevents auto-zoom on iOS */
  padding: 12px;
  border: 1px solid #444;
  border-radius: 0;
  background: #1a1a1a;
  color: #fff;
}

input:focus,
textarea:focus {
  outline: 2px solid #c67c4e;
  outline-offset: 2px;
}
```

### Touch Targets

- All buttons/links: minimum 44×44px
- Padding: 12px top/bottom, 16px left/right
- Spacing between clickables: 12px minimum

---

## ANALYTICS & TRACKING EVENTS

### GA4 Events to Track

```javascript
// Hero CTAs
gtag('event', 'cta_click', {
  event_category: 'hero',
  event_label: 'check_availability',
  value: 1,
});

// Form submission
gtag('event', 'form_submit', {
  event_category: 'contact',
  event_label: event_type, // 'corporate', 'wedding', etc.
  value: 1,
});

// Social link clicks
gtag('event', 'social_click', {
  event_category: 'social',
  event_label: 'instagram', // or 'tiktok', 'spotify'
  value: 1,
});

// Video play
gtag('event', 'video_play', {
  event_category: 'media',
  event_label: 'hero_video',
  value: 1,
});

// Carousel interaction
gtag('event', 'carousel_interact', {
  event_category: 'testimonials',
  event_label: 'slide_' + slide_number,
  value: 1,
});
```

---

## SUCCESS METRICS (KPIs)

**Primary:** Form submissions (booking inquiries)

- Target: 2+ submissions/week (after launch + content)

**Secondary:**

- Email opens (follow-up rate): >40%
- Social clicks: 5–10% of traffic
- Video plays: 15–25% of visitors
- Testimonial carousel swipes: 40%+ of visitors

**Vanity Metrics (Monitor):**

- Time on page: >2 min (good engagement)
- Scroll depth: 50%+ of visitors reach contact
- Bounce rate: <50%
- Mobile vs. desktop: 60/40 split (mobile heavier)

---

## DESIGN HANDOFF CHECKLIST

When handing off to development:

- [ ] Figma file (or design system tool) exported
  - [ ] All components in a shared library
  - [ ] Responsive variants (mobile, tablet, desktop)
  - [ ] Component spec: colors, fonts, spacing, states
- [ ] Content audit
  - [ ] Copy finalized & approved by Lena
  - [ ] Images sourced (or placeholder specs noted)
  - [ ] Video sourced (or recording plan in place)
  - [ ] Audio/Spotify links ready
  - [ ] Social URLs confirmed
- [ ] Assets prepared
  - [ ] Hero images (desktop + mobile crop)
  - [ ] Gallery images (8–12, high-res)
  - [ ] Logos (venue + service icons)
  - [ ] Video file (or embed link)
  - [ ] Audio files/embeds ready
- [ ] Technical specs
  - [ ] API endpoint for form submission
  - [ ] Email service provider chosen (SendGrid, Nodemailer, etc.)
  - [ ] Analytics service configured (GA4)
  - [ ] Calendar integration (Calendly API or embed)
  - [ ] CMS requirements (if needed for blog/events)
- [ ] Approved by stakeholder (Lena)
  - [ ] Design reviewed
  - [ ] Copy reviewed
  - [ ] Initial feedback incorporated

---

## NEXT STEPS (Implementation Roadmap)

### Phase 1: Build Core (Week 1–2)

- [ ] Design system (components, colors, spacing)
- [ ] Layout structure (sections, responsive)
- [ ] Hero section (image/video, CTAs)
- [ ] Services section (cards, grid)
- [ ] Contact form (basic, no submission yet)

### Phase 2: Media & Trust (Week 2–3)

- [ ] Hear Lena section (embeds, audio)
- [ ] Testimonials carousel (6+ quotes)
- [ ] Gallery (lightbox, grid)
- [ ] Trust signals (stats, logos)

### Phase 3: Polish & Integration (Week 3–4)

- [ ] Bio section (copy, typography)
- [ ] Email integration (contact form submission)
- [ ] Analytics setup (GA4, events)
- [ ] Mobile refinement (sticky CTA, responsive)
- [ ] Testing (cross-browser, mobile, forms)

### Phase 4: Launch Prep (Week 4)

- [ ] Content finalization
- [ ] SEO optimization (meta tags, headings)
- [ ] Performance audit (images, load time)
- [ ] Accessibility audit (contrast, focus, a11y)
- [ ] Pre-launch testing

### Phase 5: Go Live (Week 5)

- [ ] Deploy to production
- [ ] DNS/CDN setup
- [ ] SSL verification
- [ ] Google Search Console setup
- [ ] Monitor for issues (analytics, uptime)

---

## DESIGN PRINCIPLES (Reference)

1. **Photo-first, not illustration-heavy.** Real moments sell authenticity.
2. **Dark + minimal.** Whitespace is your friend. Let images breathe.
3. **One accent color.** No more. Copper/amber is warm and mature.
4. **Typography hierarchy.** Bold headlines, light body. High contrast.
5. **CTA clarity.** Multiple pathways to "Check Availability." No ambiguity.
6. **Mobile-obsessed.** Sticky footer CTA. Touch-friendly. 16px form inputs.
7. **Trust-heavy.** Stats, testimonials, logos, real proof. No vague claims.
8. **Emotion + Professionalism.** Cinematic tone, but structured like a B2B site.
9. **Performance matters.** Fast load, lazy images, optimized video. Respect time.
10. **Test & iterate.** A/B test hero variants, CTA copy, form fields. Data drives decisions.

---

## FINAL NOTES

This redesign positions Lena not as a "service provider" but as a **premium live performance artist**. The site is a portfolio that books—it's built for people who already _want_ live entertainment and are looking for a professional, emotionally intelligent performer.

**Red flags to avoid:**

- ❌ Generic wedding template vibes (too cheesy)
- ❌ Unclear booking process (too many clicks)
- ❌ Auto-playing audio/video (ruins UX)
- ❌ Overloaded copy (keep it punchy)
- ❌ Cheap-looking designs (dark + whitespace wins)
- ❌ Mobile-second thinking (should be mobile-first)

**Green flags to maintain:**

- ✅ Real performance images (not stock)
- ✅ Specific, provable stats (21 years, 400+ shows)
- ✅ Emotional testimonials (with author context)
- ✅ Clear CTAs (3+ entry points per page)
- ✅ Fast load, clean code, accessible
- ✅ Professional but warm tone

---

**Document Version:** 1.0  
**Last Updated:** February 18, 2026  
**Designer Notes:** This strategy prioritizes conversion without sacrificing artistry. The design should feel like a premium artist, not a wedding DJ site. Every pixel should earn its place.
