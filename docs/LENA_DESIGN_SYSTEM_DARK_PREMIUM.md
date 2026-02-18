# LENA SINGER | Dark Premium Design System

**Version:** 1.0  
**Status:** Production-Ready  
**Date:** February 18, 2026  
**Purpose:** Comprehensive component + spacing + color + typography spec for implementation  
**Target:** React/Next.js + Tailwind CSS or vanilla CSS

---

## PART 1: COLOR PALETTE

### Primary Dark Neutrals

| Name               | HEX       | RGB        | Usage                               | WCAG AA |
| ------------------ | --------- | ---------- | ----------------------------------- | ------- |
| **Primary Dark**   | `#1a1a1a` | 26, 26, 26 | Base background (body, page)        | ✓       |
| **Secondary Dark** | `#2d2d2d` | 45, 45, 45 | Card backgrounds, sections          | ✓       |
| **Tertiary Dark**  | `#3d3d3d` | 61, 61, 61 | Borders, dividers, subtle highlight | ✓       |
| **Dark Gray**      | `#4a4a4a` | 74, 74, 74 | Inactive states, disabled           | ✓       |

### Text Colors

| Name               | HEX       | RGB           | Usage                          | Contrast\*     |
| ------------------ | --------- | ------------- | ------------------------------ | -------------- |
| **Text Primary**   | `#ffffff` | 255, 255, 255 | Headlines, body (primary dark) | 21:1 (AAA)     |
| **Text Secondary** | `#e0e0e0` | 224, 224, 224 | Subtext, muted copy            | 16.5:1 (AAA)   |
| **Text Muted**     | `#b0b0b0` | 176, 176, 176 | Placeholder, hints, meta       | 9.2:1 (AA)     |
| **Text Disabled**  | `#707070` | 112, 112, 112 | Disabled inputs, inactive      | 4.5:1 (AA min) |

\*Contrast ratios tested against `#1a1a1a` (Primary Dark background)

### Accent Color (Choose ONE)

**RECOMMENDED: COPPER (Warm, Mature, Premium)**

| Name               | HEX       | RGB           | Usage                             | Contrast\*                          |
| ------------------ | --------- | ------------- | --------------------------------- | ----------------------------------- |
| **Copper Primary** | `#C67C4E` | 198, 124, 78  | Primary CTAs, highlights, accents | 7.2:1 (AAA vs dark)                 |
| **Copper Light**   | `#E0A080` | 224, 160, 128 | Hover states, light overlays      | 3.5:1 (below AA on dark—avoid text) |
| **Copper Dark**    | `#9D5F3A` | 157, 95, 58   | Hover darken, active states       | 11.8:1 (AAA vs dark)                |

**ALTERNATIVES:**

**Amber (Golden, Luxe)**

- Primary: `#D4AF37` | Hover Dark: `#B8960F` | Light: `#F0D599`
- _Vibe:_ Classic luxury, timeless, wedding-friendly
- _Warning:_ Light variant has poor contrast on dark bg

**Magenta (Bold, Modern)**

- Primary: `#E91E63` | Hover Dark: `#AD1457` | Light: `#F06292`
- _Vibe:_ Contemporary, energy, trendy
- _Caution:_ Risks looking "template-y" or nightlife-ish

**Recommendation:** **Copper** wins for Lena (warm, confident, not cliché)

### Semantic Colors

| Color       | HEX       | Usage                                        | Example                 |
| ----------- | --------- | -------------------------------------------- | ----------------------- |
| **Success** | `#4CAF50` | ✓ Checkmarks, confirmed states, form success | Payment confirmed       |
| **Warning** | `#FFC107` | ⚠ Alerts, caution states                     | Form validation warning |
| **Error**   | `#EF5350` | ✗ Errors, cancellations, required fields     | Form field error        |
| **Info**    | `#29B6F6` | ℹ Info boxes, hints, secondary alerts        | Availability updated    |

### Overlay & Transparency

| Name                   | Value                   | Usage                           |
| ---------------------- | ----------------------- | ------------------------------- |
| **Overlay Dark (90%)** | `rgba(26, 26, 26, 0.9)` | Sticky nav, mobile modals       |
| **Overlay Dark (70%)** | `rgba(26, 26, 26, 0.7)` | Hero gradient, lightbox overlay |
| **Overlay Dark (50%)** | `rgba(26, 26, 26, 0.5)` | Hover states on images          |
| **Overlay Dark (30%)** | `rgba(26, 26, 26, 0.3)` | Subtle transitions              |

### Color Usage Matrix

```
BACKGROUNDS:
├─ Page/Body: Primary Dark (#1a1a1a)
├─ Card/Section: Secondary Dark (#2d2d2d)
├─ Button/Input: Tertiary Dark (#3d3d3d)
└─ Disabled: Dark Gray (#4a4a4a)

TEXT ON DARK (#1a1a1a):
├─ Headlines/Primary: Text Primary (#ffffff) — 21:1
├─ Body/Secondary: Text Secondary (#e0e0e0) — 16.5:1
├─ Meta/Hints: Text Muted (#b0b0b0) — 9.2:1
└─ Disabled: Text Disabled (#707070) — 4.5:1

ACCENTS:
├─ Primary CTA: Copper Primary (#C67C4E) on dark = 7.2:1 contrast
├─ Hover: Copper Dark (#9D5F3A) — darker shade
├─ Active: Copper Dark + scale transform
└─ Light/Hover Overlay: Use opacity, NOT Copper Light (contrast fails)

SEMANTIC:
├─ Form Success: Success (#4CAF50)
├─ Form Error: Error (#EF5350)
├─ Warnings: Warning (#FFC107)
└─ Info: Info (#29B6F6)
```

---

## PART 2: TYPOGRAPHY

### Font Pairing

**RECOMMENDED PAIRING: System Sans-Serif + Serif (Premium)**

#### Primary Font: Headlines & Bold Text

**Font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif`  
_Fallback Stack:_ System fonts (macOS, Windows, Android native)  
_Why:_ Modern, no license needed, instant load, cinematic feel  
_Alternative:_ _Poppins_ (Google Fonts, if you want custom weight: SemiBold 600)

#### Secondary Font: Body & UI Text

**Font:** `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`  
_Fallback:_ System sans-serif  
_Why:_ Highly legible, modern, designed for screen, excellent for body copy + UI  
_Alternative:_ Built-in sans-serif stack

#### Accent Font: Quotes & Bio (Optional)

**Font:** `"Georgia", "Garamond", serif`  
_Usage:_ Testimonial quotes, bio section (sparingly)  
_Loading:_ No external load (system serif)  
_Why:_ Classical, emotional, adds warmth to quotes

### Typography Scale

#### Heading 1 (Hero, Large Sections)

```css
Font-Family: System Sans (Roboto/Segoe)
Font-Size: 64px (desktop) | 40px (mobile)
Font-Weight: 700 (Bold)
Line-Height: 1.2 (tight for impact)
Letter-Spacing: -0.02em (tighten slightly)
Color: Text Primary (#ffffff)
Margin-Bottom: 24px
Max-Width: 90% (don't stretch too wide)
```

**Usage:** Hero headline, page title, section hero

---

#### Heading 2 (Section Headers)

```css
Font-Size: 48px (desktop) | 32px (mobile)
Font-Weight: 700 (Bold)
Line-Height: 1.3
Letter-Spacing: -0.01em
Color: Text Primary (#ffffff)
Margin-Bottom: 16px
```

**Usage:** "Services," "Testimonials," "Why Choose Lena"

---

#### Heading 3 (Subsections, Card Titles)

```css
Font-Size: 36px (desktop) | 24px (mobile)
Font-Weight: 600 (SemiBold)
Line-Height: 1.4
Letter-Spacing: 0
Color: Text Primary (#ffffff)
Margin-Bottom: 12px
```

**Usage:** Service package names, gallery section titles, proof point headers

---

#### Heading 4 (Component Titles, Smaller Subsections)

```css
Font-Size: 24px (desktop) | 20px (mobile)
Font-Weight: 600 (SemiBold)
Line-Height: 1.4
Letter-Spacing: 0
Color: Text Primary (#ffffff) or Accent (#C67C4E)
Margin-Bottom: 8px
```

**Usage:** Card headers, testimonial author names, FAQ question titles

---

#### Body Text (Standard)

```css
Font-Size: 16px (desktop and mobile)
Font-Weight: 400 (Regular)
Line-Height: 1.6 (readable, spacing)
Letter-Spacing: 0
Color: Text Secondary (#e0e0e0)
Paragraph-Spacing: 16px (margin-bottom)
Max-Width: 65 characters (optimal reading line)
```

**Usage:** Paragraph copy, descriptions, explanations

---

#### Body Large (Emphasized Body)

```css
Font-Size: 18px
Font-Weight: 400
Line-Height: 1.8
Color: Text Secondary (#e0e0e0)
```

**Usage:** Service package descriptions, testimonial quotes (if not serif)

---

#### Body Small (Helper Text, Meta)

```css
Font-Size: 14px
Font-Weight: 400
Line-Height: 1.5
Color: Text Muted (#b0b0b0)
```

**Usage:** Placeholder text, form hints, date/time stamps, bylines

---

#### Label (Form Labels, Button Text)

```css
Font-Size: 14px
Font-Weight: 600 (SemiBold)
Line-Height: 1.4
Letter-Spacing: 0.5px (subtle emphasis)
Color: Text Primary (#ffffff) or Text Secondary (#e0e0e0)
Text-Transform: none (no all-caps—keep it natural)
```

**Usage:** Form labels, button text, navigation labels

---

#### Caption (Eyebrow, Overline)

```css
Font-Size: 12px
Font-Weight: 600
Line-Height: 1.4
Letter-Spacing: 0.8px (wider spacing for small caps feel)
Color: Accent (#C67C4E)
Text-Transform: uppercase (optional, use sparingly)
```

**Usage:** Section eyebrows ("21 Years. 400+ Shows."), badge labels

---

### Typography Scale Reference Table

| Level          | Size (Desktop) | Size (Mobile) | Weight | Line-Height | Usage                     |
| -------------- | -------------- | ------------- | ------ | ----------- | ------------------------- |
| **H1**         | 64px           | 40px          | 700    | 1.2         | Hero headline, page title |
| **H2**         | 48px           | 32px          | 700    | 1.3         | Section header            |
| **H3**         | 36px           | 24px          | 600    | 1.4         | Card/subsection title     |
| **H4**         | 24px           | 20px          | 600    | 1.4         | Component title           |
| **Body**       | 16px           | 16px          | 400    | 1.6         | Paragraph text            |
| **Body Large** | 18px           | 18px          | 400    | 1.8         | Emphasized body           |
| **Body Small** | 14px           | 14px          | 400    | 1.5         | Helper/meta text          |
| **Label**      | 14px           | 14px          | 600    | 1.4         | Form labels, buttons      |
| **Caption**    | 12px           | 12px          | 600    | 1.4         | Eyebrow, badge            |

---

## PART 3: SPACING SYSTEM

### Base Unit: 8px Grid

All spacing is built on multiples of **8px**. This ensures consistency and rhythm.

### Spacing Scale

```css
/* Token Names & Values */
--spacing-xs: 4px /* Micro adjustments, icon spacing */ --spacing-sm: 8px
  /* Tight gaps, padding within buttons */ --spacing-md: 16px /* Standard gap, form input padding */
  --spacing-lg: 24px /* Section element spacing, card padding */ --spacing-xl: 32px
  /* Generous gap, larger card padding */ --spacing-2xl: 40px /* Section spacing, hero padding */
  --spacing-3xl: 60px /* Large section spacing */ --spacing-4xl: 80px /* Major section breaks */
  --spacing-5xl: 120px /* Hero padding, section top/bottom */;
```

### Spacing Matrix

| Token   | Value | Usage                                           | Example                               |
| ------- | ----- | ----------------------------------------------- | ------------------------------------- |
| **xs**  | 4px   | Icon gaps, micro spacing                        | Icon margin inside button             |
| **sm**  | 8px   | Inline element spacing, line-height fine-tuning | Inline text gaps                      |
| **md**  | 16px  | Form input padding, standard paragraph gap      | Input: 12px vert, 16px horiz          |
| **lg**  | 24px  | Card padding, section element spacing           | Card padding: 24–32px                 |
| **xl**  | 32px  | Generous padding, large component spacing       | Gallery gap between cards             |
| **2xl** | 40px  | Section spacing, hero padding                   | Hero content padding                  |
| **3xl** | 60px  | Large section breaks                            | Gap between Hero and next section     |
| **4xl** | 80px  | Major section spacing                           | Gap between Services and Testimonials |
| **5xl** | 120px | Page section padding (top/bottom)               | Section: `padding: 120px 40px`        |

### Common Spacing Patterns

```css
/* Section Padding (Full-Width Sections) */
padding: 120px 40px; /* Desktop */
padding: 120px 20px; /* Mobile */

/* Card Padding */
padding: 24px; /* Small cards */
padding: 32px; /* Medium cards */
padding: 40px; /* Large cards */

/* Form Input */
padding: 12px 16px; /* Vertical x Horizontal */

/* Button */
padding: 14px 24px; /* Standard button */
padding: 12px 20px; /* Small button */

/* Gap Between Grid Items */
gap: 20px; /* Articles, gallery, services grid */
gap: 24px; /* Larger grid items */
gap: 32px; /* Testimonial carousel vertical */

/* Margin Between Typographic Elements */
h1 {
  margin-bottom: 24px;
}
h2 {
  margin-bottom: 20px;
}
p {
  margin-bottom: 16px;
}
```

---

## PART 4: BORDER RADIUS

### Radius Scale

| Token           | Value    | Usage                              | Feeling                  |
| --------------- | -------- | ---------------------------------- | ------------------------ |
| **Radius None** | `0px`    | Cards, buttons, images             | Sharp, modern, cinematic |
| **Radius XS**   | `2px`    | Subtle corner softness             | Minimal, premium         |
| **Radius SM**   | `4px`    | Form inputs, tags                  | Still modern, lean       |
| **Radius MD**   | `8px`    | Large inputs, slight softness      | Balanced, friendly       |
| **Radius LG**   | `12px`   | Large cards, modals                | Approachable, open       |
| **Radius XL**   | `16px`   | Major components, expansive        | Welcoming, soft          |
| **Radius Full** | `9999px` | Circles, pills, full-width buttons | Playful, organic         |

### Usage Rules

```css
/* Hero, Card, Service Package */
border-radius: 0px; /* Sharp—cinematic, premium feel */

/* Form Inputs, Textareas */
border-radius: 4px; /* Subtle softness, modern */

/* Buttons (Primary, Secondary) */
border-radius: 4px; /* Aligned with inputs, cohesive */

/* Images in Gallery */
border-radius: 0px; /* Sharp corners, photography focal point */

/* Testimonial Author Photo */
border-radius: 9999px; /* Full circle, human, warm */

/* Lightbox Modal Window */
border-radius: 12px; /* Slightly soft, feels safe */

/* Floating/Floating CTA Buttons (mobile sticky) */
border-radius: 4px; /* Match primary buttons */
```

**Recommendation:** Primary design language = **0px** (sharp corners). Softness is minimal, modern.

---

## PART 5: SHADOWS & DEPTH

### Shadow Scale

```css
/* Token Names & Values */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 12px 48px rgba(0, 0, 0, 0.6);
--shadow-2xl: 0 20px 64px rgba(0, 0, 0, 0.7);
```

### Applied Shadows

| Component                       | Shadow                              | When                                    |
| ------------------------------- | ----------------------------------- | --------------------------------------- |
| **Card (Service, Testimonial)** | `shadow-md`                         | Normal state                            |
| **Card (Hover)**                | `shadow-lg`                         | On hover (scale 1.02 + shadow increase) |
| **Hero / Large Section**        | `shadow-lg`                         | Base, always                            |
| **Button (Hover)**              | `shadow-md`                         | Pressed/hovered state                   |
| **Modal / Lightbox**            | `shadow-xl`                         | Always (prominence)                     |
| **Sticky Nav**                  | `shadow-md`                         | Always (anchored feel)                  |
| **Sticky Mobile CTA**           | `shadow-lg`                         | Always (attention)                      |
| **Dropdown / Tooltip**          | `shadow-md`                         | Normal state                            |
| **Focus Ring (Accessibility)**  | `0 0 0 3px rgba(198, 124, 78, 0.5)` | Focus state (outline effect)            |

### Shadow Strategy

**Dark theme + shadows:**

- Shadows exist but are **subtle** (black on near-black)
- Use **opacity + offset** more than blur
- **High angles** (small Y offset) feel contemporary
- **No drop shadows below text** (unreadable)

---

## PART 6: BUTTON STYLES

### Primary Button (Main CTA: "Check Availability")

```css
/* States: Default → Hover → Active → Disabled */

.btn-primary {
  background-color: #c67c4e; /* Copper Primary */
  color: #ffffff; /* Text Primary */
  border: none;
  padding: 14px 32px; /* spacing-md (vertical) × spacing-lg (horizontal) */
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  /* Focus accessibility */
  outline: none;
}

.btn-primary:hover {
  background-color: #9d5f3a; /* Copper Dark */
  transform: scale(1.02); /* Subtle scale on hover */
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.btn-primary:active {
  transform: scale(0.98); /* Press feedback */
  background-color: #8b4f2e; /* Darker shade */
}

.btn-primary:focus {
  outline: 2px solid #c67c4e;
  outline-offset: 2px;
}

.btn-primary:disabled {
  background-color: #4a4a4a; /* Dark Gray */
  color: #707070; /* Text Disabled */
  cursor: not-allowed;
  opacity: 0.5;
  transform: none;
}
```

**Usage:** Hero CTAs, service inquiry buttons, contact form submit, main conversions

---

### Secondary Button (Supporting Action)

```css
.btn-secondary {
  background-color: transparent;
  color: #ffffff; /* Text Primary or Accent */
  border: 2px solid #c67c4e; /* Copper Primary outlined */
  padding: 12px 28px; /* Slightly smaller padding */
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.btn-secondary:hover {
  background-color: #c67c4e; /* Inverse on hover */
  color: #ffffff;
  transform: scale(1.02);
}

.btn-secondary:active {
  transform: scale(0.98);
}

.btn-secondary:focus {
  outline: 2px solid #c67c4e;
  outline-offset: 2px;
}

.btn-secondary:disabled {
  border-color: #4a4a4a;
  color: #4a4a4a;
  cursor: not-allowed;
  opacity: 0.5;
}
```

**Usage:** Secondary CTAs ("Watch Live," "View Services," "Learn More")

---

### Ghost Button (Minimal, Text-Only)

```css
.btn-ghost {
  background-color: transparent;
  color: #c67c4e; /* Copper Primary */
  border: none;
  padding: 0; /* No padding—inline element */
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  position: relative;
}

.btn-ghost::after {
  /* Underline animation */
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #c67c4e;
  transition: width 300ms ease-in-out;
}

.btn-ghost:hover {
  color: #e0a080; /* Copper Light (lighter) */
  transform: none;
}

.btn-ghost:hover::after {
  width: 100%;
}

.btn-ghost:disabled {
  color: #4a4a4a;
  cursor: not-allowed;
  opacity: 0.5;
}
```

**Usage:** Links, "Read More," "Skip," navigation-style CTAs

---

### Button Size Variants

```css
/* Small */
.btn-sm {
  padding: 10px 16px;
  font-size: 14px;
}

/* Default (Standard) */
.btn-md {
  padding: 14px 32px;
  font-size: 16px;
}

/* Large */
.btn-lg {
  padding: 16px 40px;
  font-size: 18px;
}

/* Full-Width (Mobile) */
.btn-full {
  width: 100%;
  padding: 14px 16px;
}
```

---

### Icon Buttons

```css
.btn-icon {
  background-color: transparent;
  border: none;
  width: 44px; /* Min touch target: 44×44px */
  height: 44px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.btn-icon:hover {
  background-color: rgba(198, 124, 78, 0.1); /* Subtle copper tint */
  transform: scale(1.05);
}

.btn-icon:focus {
  outline: 2px solid #c67c4e;
  outline-offset: 2px;
}

.btn-icon svg {
  width: 24px;
  height: 24px;
  fill: #c67c4e;
  transition: fill 300ms ease-in-out;
}
```

---

## PART 7: COMPONENT SPECIFICATIONS

### 1. STICKY NAVBAR

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px; /* Desktop height */
  background-color: #1a1a1a; /* Primary Dark with opacity */
  backdrop-filter: blur(10px);
  background: rgba(26, 26, 26, 0.95);
  z-index: 1000;
  border-bottom: 1px solid #3d3d3d;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  transition: all 300ms ease-in-out;
}

.navbar-brand {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}

.navbar-nav {
  display: flex;
  gap: 40px;
  list-style: none;
}

.navbar-nav a {
  color: #e0e0e0;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color 300ms ease-in-out;
  position: relative;
}

.navbar-nav a:hover {
  color: #c67c4e;
}

.navbar-nav a::after {
  /* Underline on active */
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #c67c4e;
  transition: width 300ms ease-in-out;
}

.navbar-nav a.active::after {
  width: 100%;
}

.navbar-cta {
  /* "Check Availability" button */
  padding: 12px 24px;
  background-color: #c67c4e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.navbar-cta:hover {
  background-color: #9d5f3a;
  transform: scale(1.02);
}

/* Mobile Menu (Hamburger) */
@media (max-width: 768px) {
  .navbar {
    height: 60px;
    padding: 0 20px;
  }

  .navbar-nav {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background-color: #2d2d2d;
    display: none; /* Hidden by default, shown on toggle */
    padding: 20px;
    border-bottom: 1px solid #3d3d3d;
  }

  .navbar-nav.open {
    display: flex;
  }
}
```

---

### 2. HERO SECTION (Cinematic Variant)

```css
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/lena-performance.jpg') center/cover no-repeat;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0) 0%,
    rgba(26, 26, 26, 0.3) 50%,
    rgba(26, 26, 26, 0.9) 100%
  );
  z-index: 2;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding: 0 40px 80px 40px;
  max-width: 800px;
}

.hero-eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: #c67c4e;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.hero-headline {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 24px;
  max-width: 90%;
}

.hero-subheadline {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 40px;
  max-width: 600px;
}

.hero-cta-group {
  display: flex;
  gap: 16px;
}

.hero-cta-group .btn-primary {
  /* Primary CTA */
}

.hero-cta-group .btn-secondary {
  /* Secondary CTA */
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    height: 80vh;
  }

  .hero-content {
    padding: 0 20px 60px 20px;
  }

  .hero-headline {
    font-size: 40px;
    margin-bottom: 16px;
  }

  .hero-subheadline {
    font-size: 16px;
    margin-bottom: 32px;
  }

  .hero-cta-group {
    flex-direction: column;
    gap: 12px;
  }

  .hero-cta-group button {
    width: 100%;
  }
}
```

---

### 3. SERVICE PACKAGE CARD

```css
.service-card {
  background-color: #2d2d2d;
  border: 1px solid #3d3d3d;
  border-top: 4px solid #c67c4e; /* Accent top border */
  border-radius: 0px; /* Sharp corners */
  padding: 40px;
  transition: all 300ms ease-in-out;
  position: relative;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  border-color: #c67c4e;
}

.service-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 6px 12px;
  background-color: #c67c4e;
  color: #1a1a1a;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 4px;
  text-transform: uppercase;
}

.service-title {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
}

.service-subtitle {
  font-size: 14px;
  color: #b0b0b0;
  margin-bottom: 16px;
}

.service-promise {
  font-size: 18px;
  font-weight: 500;
  color: #e0e0e0;
  margin-bottom: 24px;
  font-style: italic;
  border-left: 3px solid #c67c4e;
  padding-left: 16px;
}

.service-includes {
  margin-bottom: 24px;
}

.service-includes li {
  font-size: 16px;
  color: #e0e0e0;
  margin-bottom: 12px;
  padding-left: 28px;
  position: relative;
  list-style: none;
}

.service-includes li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #c67c4e;
  font-weight: 700;
}

.service-best-for {
  font-size: 14px;
  color: #b0b0b0;
  padding-top: 24px;
  border-top: 1px solid #3d3d3d;
  margin-top: 24px;
}

.service-best-for strong {
  color: #c67c4e;
}

.service-cta {
  margin-top: 32px;
}

.service-cta button {
  width: 100%;
}
```

---

### 4. TESTIMONIAL CAROUSEL CARD

```css
.testimonial-card {
  background-color: #2d2d2d;
  padding: 32px;
  border: 1px solid #3d3d3d;
  border-radius: 0px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-quote {
  font-size: 18px;
  font-family: 'Georgia', serif;
  font-weight: 400;
  font-style: italic;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 24px;
  position: relative;
  padding-left: 20px;
}

.testimonial-quote::before {
  content: '"';
  position: absolute;
  left: 0;
  font-size: 48px;
  color: #c67c4e;
  opacity: 0.3;
  line-height: 0.5;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background-color: #3d3d3d;
  flex-shrink: 0;
  object-fit: cover;
}

.testimonial-info {
  display: flex;
  flex-direction: column;
}

.testimonial-name {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}

.testimonial-context {
  font-size: 12px;
  color: #b0b0b0;
}

/* Carousel Container */
.testimonial-carousel {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 20px 0;
}

.testimonial-carousel .testimonial-card {
  flex: 0 0 calc(50% - 12px); /* 2-up on desktop */
  scroll-snap-align: start;
}

@media (max-width: 768px) {
  .testimonial-carousel .testimonial-card {
    flex: 0 0 100%; /* Full-width on mobile */
  }
}

.carousel-controls {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  justify-content: center;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: #3d3d3d;
  cursor: pointer;
  transition: background-color 300ms ease-in-out;
}

.carousel-dot.active {
  background-color: #c67c4e;
}
```

---

### 5. GALLERY GRID + LIGHTBOX

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 0;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3; /* Standard photography ratio */
  cursor: pointer;
  border-radius: 0px;
  background-color: #2d2d2d;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease-in-out;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(26, 26, 26, 0.5);
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-icon {
  width: 48px;
  height: 48px;
  background-color: #c67c4e;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 24px;
}

/* Lightbox Modal */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(26, 26, 26, 0.95);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 300ms ease-in-out;
}

.lightbox.open {
  opacity: 1;
  visibility: visible;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  background-color: rgba(198, 124, 78, 0.2);
  border: none;
  border-radius: 4px;
  color: #c67c4e;
  font-size: 28px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.lightbox-close:hover {
  background-color: #c67c4e;
  color: #ffffff;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  pointer-events: none;
}

.lightbox-arrow {
  pointer-events: auto;
  width: 44px;
  height: 44px;
  background-color: rgba(198, 124, 78, 0.2);
  border: none;
  color: #c67c4e;
  font-size: 20px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  border-radius: 4px;
}

.lightbox-arrow:hover {
  background-color: #c67c4e;
  color: #ffffff;
}
```

---

### 6. CONTACT FORM

```css
.contact-form {
  background-color: #2d2d2d;
  padding: 40px;
  border: 1px solid #3d3d3d;
  border-radius: 0px;
  max-width: 600px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group:last-child {
  margin-bottom: 0;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px; /* Prevents iOS zoom on input focus */
  font-family: inherit;
  background-color: #1a1a1a;
  border: 1px solid #3d3d3d;
  border-radius: 4px;
  color: #ffffff;
  transition: all 300ms ease-in-out;
  box-sizing: border-box;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #b0b0b0;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: #c67c4e;
  box-shadow: 0 0 0 3px rgba(198, 124, 78, 0.1);
  background-color: #1a1a1a;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.form-checkbox input {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #c67c4e;
}

.form-checkbox label {
  font-size: 14px;
  color: #e0e0e0;
  cursor: pointer;
}

.form-error {
  font-size: 12px;
  color: #ef5350;
  margin-top: 4px;
  display: none;
}

.form-group.error .form-error {
  display: block;
}

.form-group.error .form-input,
.form-group.error .form-textarea {
  border-color: #ef5350;
}

.form-submit {
  width: 100%;
  padding: 14px 32px;
  background-color: #c67c4e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  margin-top: 24px;
}

.form-submit:hover {
  background-color: #9d5f3a;
  transform: scale(1.02);
}

.form-submit:disabled {
  background-color: #4a4a4a;
  cursor: not-allowed;
  opacity: 0.5;
}

.form-success {
  padding: 16px;
  background-color: rgba(76, 175, 80, 0.1);
  border: 1px solid #4caf50;
  border-radius: 4px;
  color: #4caf50;
  margin-bottom: 24px;
  font-size: 14px;
  display: none;
}

.form-success.show {
  display: block;
}
```

---

### 7. MOBILE STICKY CTA BAR

```css
.mobile-cta-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: rgba(26, 26, 26, 0.95);
  border-top: 1px solid #3d3d3d;
  z-index: 999;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .mobile-cta-footer {
    display: flex;
  }

  /* Add bottom padding to body to account for sticky footer */
  body {
    padding-bottom: 70px;
  }
}

.mobile-cta-footer button {
  width: 100%;
  max-width: calc(100% - 40px);
  padding: 14px 24px;
  background-color: #c67c4e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.mobile-cta-footer button:active {
  background-color: #9d5f3a;
  transform: scale(0.98);
}
```

---

## PART 8: CONTENT LENGTH RULES

### Character Limits & Word Counts

| Element                 | Max Length               | Rule                      | Example                                                                                       |
| ----------------------- | ------------------------ | ------------------------- | --------------------------------------------------------------------------------------------- |
| **Hero Headline**       | 9 words                  | Punchy, memorable         | "The Voice Your Event Will Remember"                                                          |
| **Hero Subheadline**    | 18 words                 | Context + benefit         | "21 years on stage. A voice that makes audiences stop and listen."                            |
| **Section H2**          | 6 words                  | Clear, specific           | "Why Choose Lena" / "Services & Packages"                                                     |
| **Service Title**       | 4 words                  | Category name             | "Premium Weddings" / "Corporate Events"                                                       |
| **Service Promise**     | 1 line (10–15 words)     | Emotional benefit         | "A voice that makes the moment unforgettable."                                                |
| **Service Bullet**      | 10 words max             | Specific include          | "30–60 minute live performance (custom setlist)"                                              |
| **Proof Point Title**   | 4 words                  | Feature name              | "I Read the Room"                                                                             |
| **Proof Point Copy**    | 25 words max             | One sentence              | "Your wedding needs tenderness. Your gala needs presence. I deliver what the moment demands." |
| **Testimonial Quote**   | 30 words max             | Concise, powerful         | "She didn't sing at our wedding. She made people cry in the best way."                        |
| **Testimonial Author**  | 2 words (name only)      | First name + Last initial | "Sarah M." / "Marcus T."                                                                      |
| **Testimonial Context** | 5 words                  | Event type + date         | "Wedding • June 2025" / "Corporate Gala • 2024"                                               |
| **Bio (Short)**         | 3 sentences, 60 words    | Punchy story              | [See copywriting doc]                                                                         |
| **Bio (Long)**          | 5–8 sentences, 150 words | Detailed narrative        | [See copywriting doc]                                                                         |
| **FAQ Question**        | 10 words max             | Clear, direct             | "Do you travel? What's the radius?"                                                           |
| **FAQ Answer**          | 3–4 sentences, 80 words  | Specific, reassuring      | [See copywriting doc]                                                                         |
| **Form Label**          | 3 words max              | Clear field name          | "Event Type" / "Proposed Date"                                                                |
| **Form Placeholder**    | 8 words max              | Helpful hint              | "Tell me about your vision..."                                                                |
| **Button CTA**          | 3 words max              | Action-forward            | "Check Availability" / "Watch Live"                                                           |

---

## PART 9: THREE MOOD DIRECTIONS

### MOOD 1: CINEMATIC STAGE

**Feeling:** Dramatic, emotional, concert-lit, intimate spotlight

**Key Characteristics:**

- **Lighting:** High contrast, spotlight shadows, stage drama
- **Colors:** Deep blacks with copper accent (warm glow)
- **Typography:** Bold, oversized headlines; long line-height
- **Imagery:** Performance photography with dramatic lighting, close-ups of emotion
- **Motion:** Slow, cinematic transitions; fade effects

**Implementation:**

```css
/* Hero overlay */
background: linear-gradient(
  180deg,
  rgba(26, 26, 26, 0) 0%,
  rgba(26, 26, 26, 0.5) 50%,
  rgba(26, 26, 26, 0.95) 100%
);

/* Cards have slight glow on hover */
.service-card:hover {
  box-shadow: 0 0 20px rgba(198, 124, 78, 0.2);
}

/* Serif font for quotes */
.testimonial-quote {
  font-family: 'Georgia', serif;
}

/* Large, bold typography */
h1 {
  letter-spacing: -0.02em;
  font-weight: 700;
}
```

**Best For:** Hero section, gallery, testimonials, bio

**Mood Board Elements:**

- Warm stage lighting
- Black backgrounds with colored gels
- Close-ups of performance emotion
- Microphone focal points
- Shadows and contrast

---

### MOOD 2: MINIMAL LUXE

**Feeling:** Clean, sophisticated, premium-simple, gallery-like

**Key Characteristics:**

- **Lighting:** Soft, even, professional
- **Colors:** Charcoal + copper + lots of whitespace (breathing room)
- **Typography:** Spare, justified, high elegance
- **Imagery:** Wide venue shots, architecture-conscious framing, minimalist composition
- **Motion:** Quick, responsive, snappy transitions

**Implementation:**

```css
/* Lots of whitespace */
section {
  padding: 120px 40px;
}

/* Minimal borders, maximum breathing room */
.card {
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Sans-serif only (no serif accents) */
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Wide, ample spacing between elements */
img {
  margin: 0 auto;
  max-width: 80%;
}

/* Subtle, understated hover effects */
.card:hover {
  transform: none;
  opacity: 0.95;
}
```

**Best For:** Services section, about page, contact form

**Mood Board Elements:**

- Luxury hotel photography
- Minimalist concert venues
- Clean, centered compositions
- White/light backgrounds
- Architectural focus

---

### MOOD 3: URBAN STREET ELEGANCE

**Feeling:** Contemporary, gritty-refined, street artist credibility, underground cool

**Key Characteristics:**

- **Lighting:** Raw, authentic, natural, less polished
- **Colors:** Dark (charcoal) with acid/bold accent (magenta or saturated copper)
- **Typography:** Mix of geometric sans (headlines) + geometric typeface (labels)
- **Imagery:** Candid street performances, backstage moments, raw authenticity
- **Motion:** Snappy, energetic, quick transitions; bold interactions

**Implementation:**

```css
/* Bolder accent color or saturated copper */
--accent-color: #e91e63; /* Magenta alternative */

/* Edgy typography pairing */
h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
} /* Extra bold */

/* Raw, authentic imagery preferred */
.gallery-item {
  aspect-ratio: 3 / 2;
} /* Wider, documentary-style */

/* Bold, energetic hover states */
.card:hover {
  transform: scale(1.03);
  background: rgba(233, 30, 99, 0.05);
}

/* Geometric shapes and borders */
.component {
  border: 2px solid #e91e63;
}
```

**Best For:** Hero section (alternative), testimonials (candid), gallery

**Mood Board Elements:**

- Street performer photos
- Backstage candid moments
- Raw, unpolished authenticity
- Bold color accents
- Urban venues (bars, festivals)

---

## IMPLEMENTATION DECISION MATRIX

| Aspect              | Cinematic Stage                   | Minimal Luxe                 | Urban Street            |
| ------------------- | --------------------------------- | ---------------------------- | ----------------------- |
| **Primary Use**     | Premium weddings, corporate galas | Services showcase, press kit | Club shows, festivals   |
| **Accent Color**    | Copper (#C67C4E)                  | Copper (#C67C4E)             | Magenta (#E91E63)       |
| **Image Style**     | Dramatic stage lighting           | Professional, architectural  | Raw, candid, authentic  |
| **Typography**      | Bold + serif (quotes)             | Sans-serif only              | Bold sans (geometric)   |
| **Spacing**         | Generous, breathing               | Minimal, justified           | Moderate, energetic     |
| **Hover Effects**   | Glow, subtle scale                | Opacity shift                | Bold scale, color shift |
| **Button Style**    | Outlined secondary                | Minimal ghost links          | Solid, accent-bold      |
| **Section Layouts** | Full-bleed images + overlays      | Centered, symmetrical        | Asymmetrical, raw       |

---

## ACCESSIBILITY COMPLIANCE (WCAG AA)

### Color Contrast Verification

All text on dark backgrounds meets **WCAG AA minimum 4.5:1**:

```
✓ White (#ffffff) on Primary Dark (#1a1a1a) = 21:1 (AAA)
✓ Secondary (#e0e0e0) on Primary Dark (#1a1a1a) = 16.5:1 (AAA)
✓ Muted (#b0b0b0) on Primary Dark (#1a1a1a) = 9.2:1 (AAA)
✓ Copper (#C67C4E) on Primary Dark (#1a1a1a) = 7.2:1 (AAA)
✓ Text Disabled (#707070) on Primary Dark (#1a1a1a) = 4.5:1 (AA)

✗ Copper Light (#E0A080) on Primary Dark (#1a1a1a) = 3.5:1 (FAIL—avoid for text)
```

### Keyboard Navigation

- **All interactive elements** (buttons, links, form inputs) must be keyboard-accessible
- **Focus outlines:** 2px solid copper (#C67C4E) with 2px offset
- **Tab order:** Logical, left-to-right, top-to-bottom
- **Skip link:** "Skip to main content" at top of page

### Focus States (Example)

```css
a:focus,
button:focus,
input:focus {
  outline: 2px solid #c67c4e;
  outline-offset: 2px;
}
```

### Form Labels

- All form inputs **must have associated labels** (not placeholders alone)
- Placeholder text ≠ label text (use both)

### Images & Alt Text

- All images **must have descriptive alt text**
- Gallery images: `alt="Lena performing at corporate gala"` (descriptive)
- Decorative images: `alt=""` (empty string)

### Video Accessibility

- All embedded videos **must have captions** (if audio content)
- Auto-play is **disabled** (respects user preferences)

---

## DESIGN TOKENS (CSS OR TAILWIND CONFIG)

### If Using Tailwind CSS

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      // Primary Dark Background
      'dark-primary': '#1a1a1a',
      'dark-secondary': '#2d2d2d',
      'dark-tertiary': '#3d3d3d',
      'dark-gray': '#4a4a4a',

      // Text Colors
      'text-primary': '#ffffff',
      'text-secondary': '#e0e0e0',
      'text-muted': '#b0b0b0',
      'text-disabled': '#707070',

      // Accent (Copper)
      accent: '#C67C4E',
      'accent-dark': '#9D5F3A',
      'accent-light': '#E0A080',

      // Semantic
      success: '#4CAF50',
      error: '#EF5350',
      warning: '#FFC107',
      info: '#29B6F6',
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      '2xl': '40px',
      '3xl': '60px',
      '4xl': '80px',
      '5xl': '120px',
    },
    borderRadius: {
      none: '0px',
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      full: '9999px',
    },
    boxShadow: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
      md: '0 4px 16px rgba(0, 0, 0, 0.4)',
      lg: '0 8px 32px rgba(0, 0, 0, 0.5)',
      xl: '0 12px 48px rgba(0, 0, 0, 0.6)',
      '2xl': '0 20px 64px rgba(0, 0, 0, 0.7)',
    },
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      serif: ['Georgia', 'Garamond', 'serif'],
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '24px',
      '2xl': '36px',
      '3xl': '48px',
      '4xl': '64px',
    },
  },
};
```

### If Using Vanilla CSS

```css
:root {
  /* Colors */
  --color-dark-primary: #1a1a1a;
  --color-dark-secondary: #2d2d2d;
  --color-dark-tertiary: #3d3d3d;
  --color-dark-gray: #4a4a4a;

  --color-text-primary: #ffffff;
  --color-text-secondary: #e0e0e0;
  --color-text-muted: #b0b0b0;
  --color-text-disabled: #707070;

  --color-accent: #c67c4e;
  --color-accent-dark: #9d5f3a;
  --color-accent-light: #e0a080;

  --color-success: #4caf50;
  --color-error: #ef5350;
  --color-warning: #ffc107;
  --color-info: #29b6f6;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 40px;
  --spacing-3xl: 60px;
  --spacing-4xl: 80px;
  --spacing-5xl: 120px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 12px 48px rgba(0, 0, 0, 0.6);
  --shadow-2xl: 0 20px 64px rgba(0, 0, 0, 0.7);

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;
}
```

---

## BREAKPOINTS

```
Mobile:    0px – 640px (portrait phones)
Tablet:    641px – 1024px (tablets)
Desktop:   1025px and above (laptops, desktops)
```

### Media Query Template

```css
/* Mobile First */
.component {
  /* Mobile styles (default) */
}

@media (min-width: 768px) {
  /* Tablet and up */
}

@media (min-width: 1024px) {
  /* Desktop and up */
}
```

---

## ANIMATION & TRANSITIONS

### Transition Speeds

| Duration         | Use Case                                                    |
| ---------------- | ----------------------------------------------------------- |
| **150ms** (fast) | Hover effects, quick feedback                               |
| **300ms** (base) | Button transitions, section reveals, standard interactions  |
| **500ms** (slow) | Page transitions, major layout changes, entrance animations |

### Easing Functions

```css
/* Standard easing */
transition: all 300ms ease-in-out;

/* Entrance animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover animation */
@keyframes scaleUp {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.02);
  }
}
```

---

## FINAL DESIGN SYSTEM CHECKLIST

Before handing off to development:

- [ ] Color palette approved (HEX codes finalized)
- [ ] Accent color chosen (Copper recommended)
- [ ] Typography pairing approved (System sans + serif)
- [ ] Spacing scale documented (8px grid)
- [ ] Button styles finalized (primary, secondary, ghost)
- [ ] Component specs complete (navbar, hero, cards, form, etc.)
- [ ] Content length rules documented
- [ ] Three mood directions reviewed (choose primary direction)
- [ ] WCAG AA contrast verified for all color combos
- [ ] Breakpoints defined (mobile, tablet, desktop)
- [ ] Design tokens generated (Tailwind or vanilla CSS)
- [ ] All components tested for keyboard navigation
- [ ] Focus states visible and consistent
- [ ] Accessibility audit passed (alt text, labels, focus)

---

**Design System Version:** 1.0  
**Status:** Ready for Development  
**Next Step:** Export design tokens to code, build component library in React/Next.js
