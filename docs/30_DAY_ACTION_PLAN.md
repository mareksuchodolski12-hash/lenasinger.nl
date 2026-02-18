# 30-DAY ACTION EXECUTION PLAN

## OVERVIEW: FROM STRATEGY TO EXECUTION

This is your **tactical roadmap for Month 1** of Phase 3. Each week has specific, achievable tasks that build toward the strategic frameworks we've created.

**Philosophy:**

- Week 1: Foundation & Setup (do everything once)
- Week 2: Content & Optimization (quality over quantity)
- Week 3: Launch & Testing (go live)
- Week 4: Monitoring & Iteration (optimize based on data)

**Time Commitment:** 5-7 hours/week (mostly technical/administrative, not performing)
**Revenue Impact:** Not expected in Month 1 (setup month); expect impact starting Month 2

---

## WEEK 1: FOUNDATION & TECHNICAL SETUP

### GOAL: Get technical infrastructure in place so you can execute strategy

---

### TASK 1.1: Google Business Profile Optimization (1 hour)

**What is it?**
Your Google Business Profile is how you appear in Google Search and Maps for location-based searches. It's CRITICAL for local SEO.

**Action Steps:**

**Step 1: Claim/Verify Profile**

1. Go to [google.com/business](https://google.com/business)
2. Sign in with your business email
3. Search for your business name
4. If not found: "Create a business listing"
   - Business name: "[Your Name] - Wedding Singer"
   - Address: Your primary location
   - Category: "Singer" or "Event Entertainer"
   - Service area: Select primary city + all 40 km radius cities (if available)
5. Verify (usually by postcard from Google)

**Step 2: Complete Business Information**

- [ ] Business name (your full professional name)
- [ ] Business description (2-3 sentences explaining what you do)
  - Example: "Professional wedding and event singer serving [City] and surrounding areas. Personalized ceremony and reception music. 15+ years experience, 4.9★ rating."
- [ ] Categories: "Singer," "Event Entertainer," "Vocal Coach" (select all that apply)
- [ ] Address: Your primary location
- [ ] Phone: Your business phone
- [ ] Website: Your website URL
- [ ] Service area: Select all cities within 40 km radius
- [ ] Hours: Your availability
- [ ] Service areas: Multiple locations (if applicable)

**Step 3: Upload Media**

- [ ] Profile photo (professional headshot)
- [ ] Cover photo (you performing or event photo)
- [ ] 3-5 service photos (wedding, corporate, coaching)
- [ ] Video (if available): 10-15 sec performance clip

**Step 4: Add Special Offers (Optional)**

- [ ] "Free consultation for wedding couples"
- [ ] "10% off early spring bookings" (seasonal messaging)

**Why This Matters:**

- Local searches see your profile first
- "Wedding singer [City]" search → your business card appears
- Photos + reviews = 40%+ higher click-through rate
- Service area selection = geographically targeted visibility

**Tool:** Google My Business (free)

---

### TASK 1.2: Set Up Local Citation Consistency (1.5 hours)

**What is it?**
Local citations = mentions of your business name, address, phone (NAP) across directories.
Google uses citations to verify you exist and are legitimate.

**Why This Matters:**

- Consistent NAP across citations = stronger local SEO signal
- Incomplete citations = weak local authority
- You should appear in 20-30+ directories

**Action Steps:**

**Major Directories to Claim (free):**

1. [ ] Google My Business (just completed above)
2. [ ] Yelp (yelp.com/biz)
   - Title: "[Your Name] - Wedding Singer & Event Entertainer"
   - Category: "Singer & Musicians"
   - Description: 2-3 sentences
   - Hours, phone, website
3. [ ] Apple Maps (go to applesmaps.com, claim location)
4. [ ] Facebook Business Page (facebook.com/business)
   - Page title: "[Your Name]"
   - Category: "Local Service" or "Musician"
   - Complete all information
5. [ ] Better Business Bureau ([bbb.org](https://bbb.org))
   - Register your business
   - Get BBB accreditation (builds trust)
6. [ ] The Knot ([theknot.com](https://theknot.com)) — Wedding-specific
   - Profile: Photos, reviews, services, pricing
   - 80%+ of engaged couples use The Knot
7. [ ] WeddingWire ([weddingwire.com](https://weddingwire.com)) — Wedding-specific
   - Similar to The Knot, major directory
8. [ ] GigSalad ([gigsalad.com](https://gigsalad.com)) — Entertainment directory
   - Profile, services, rates
9. [ ] Thumbtack ([thumbtack.com](https://thumbtack.com)) — Local services
   - Leads-based platform
   - Can generate proposals

**Each Citation Should Have:**

- [ ] Consistent business name
- [ ] Consistent phone number
- [ ] Consistent address
- [ ] Business description
- [ ] Categories
- [ ] Website link
- [ ] At least 3 photos

**Tracking Spreadsheet:**

```
Directory | Claimed | Info Complete | Reviews | Status
Google My Business | Y | Y | - | ✅
Yelp | Y | Y | 0 | ✅
Facebook | Y | Y | - | ✅
The Knot | Y | Y | 0 | ⏳
WeddingWire | Y | Y | 0 | ⏳
Thumbtack | Y | Y | 0 | ⏳
BBB | Y | Y | 0 | ⏳
```

**Time Saver:** Use tools like Yext ($500+/year) or Local Falcon (tracks citations) to manage. For Month 1, do it manually.

**Tool:** Google Sheets (track) + individual directory sites

---

### TASK 1.3: Set Up Form Submission System (1.5 hours)

**What is it?**
Replace your current contact form with the multi-step booking form we designed. This is critical for lead qualification.

**Recommendation:** Use Tally ([tally.so](https://tally.so)) - free, simple, beautiful.

**Action Steps:**

**Step 1: Create Form in Tally**

1. Go to [tally.so](https://tally.so)
2. Create new form
3. Form name: "Booking Inquiry Form"
4. Build form following our template:
   - Step 1: Event type (radio select)
   - Step 2: Event date (date picker)
   - Step 3: Location (text input with autocomplete helper)
   - Step 4: Guest count (number) + Venue type (dropdown)
   - Step 5: Budget range (radio select) + Contact info
   - Hidden field: Timestamp, form ID (for tracking)

**Step 2: Configure Notifications**

- [ ] Email notification when form submitted (goes to your email)
- [ ] Set up automated respondent email (they get confirmation)
- [ ] Include booking link in autoresponse

**Step 3: Embed on Website**

1. Get embed code from Tally
2. Go to your website code (src/app/contact page or similar)
3. Embed form widget or link
4. Test form on mobile and desktop
5. Verify response emails are working

**Step 4: Create Lead Tracking Document**
Spreadsheet with columns:

- Date submitted
- Name
- Email
- Event type
- Date
- Location
- Budget
- Lead score
- Follow-up date
- Notes
- Status (new / contacted / scheduled / booked / lost)

**Tool:** Tally (free form builder) + Google Sheets (tracking)

---

### TASK 1.4: Email Automation Setup (1 hour)

**What is it?**
Automated emails triggered by form submission. Critical for lead nurturing when you can't respond immediately.

**Recommendation:** Use ConvertKit (free tier) or Mailchimp (free tier).

**Action Steps:**

**Step 1: Create Email Autoresponder**
When someone submits form → they receive email within 5 minutes:

**Email Subject:** "You're on! Here's what happens next..."

**Email Body:**

```
Hi [Name],

Thank you for reaching out! I'm excited to help plan your [EVENT TYPE]
on [DATE] in [LOCATION].

HERE'S WHAT HAPPENS NEXT:

Within 24 hours, I'll reach out to confirm availability and answer
any questions. You'll also receive a consultation package with details
about my services, pricing options, and what to expect.

NEXT STEPS:
1. Schedule a time to chat: [CALENDLY LINK]
2. Or reply to this email and let me know your availability
3. I'll send you a custom quote within 24 hours

QUICK FACTS:
- 15+ years of experience
- 4.9/5 rating from [X] couples
- Personalized ceremony & reception music
- Flexible packages starting at [PRICE]

Can't wait to help make your event unforgettable!

[Your Name]
[Phone]
[Website]
```

**Step 2: Create Follow-Up Sequence** (if they don't respond)

- Day 1: Autoresponse (above)
- Day 3: Follow-up email ("Check in — did you see my message?")
  - Re-include Calendly link
  - Add social proof testimonial
- Day 7: Final email ("Last chance to schedule your consultation")
  - Different angle (mention what they're missing)
  - Direct phone call option

**Step 3: Segment by Event Type** (optional)

- Wedding inquiries get wedding-focused emails
- Coaching inquiries get coaching-focused emails
- Corporate get corporate email

**Tool:** ConvertKit (free) or Mailchimp (free tier)

---

### TASK 1.5: Create cities.json File (1.5 hours)

**What is it?**
The data file that powers your 40 km city page generation system. Every city gets its own pages.

**Action Steps:**

**Step 1: Identify Cities Within 40 KM Radius**
Using Google Maps:

1. Mark your primary location (e.g., Nashville, TN)
2. Search for nearby cities: "[Primary City] cities nearby"
3. Manually check distance for each (Google Maps → "Distance")
4. List all cities within 40 km (you should have 30-50 cities)

**Step 2: Create cities.json File**
Create file: `src/config/cities.json`

**Basic Structure:**

```json
{
  "primary_city": {
    "name": "Nashville",
    "slug": "nashville",
    "state": "TN",
    "lat": 36.1627,
    "lng": -86.7816,
    "distance_km": 0,
    "tier": "primary_city",
    "population": 715000,
    "search_volume_monthly": 2800
  },
  "surrounding_cities": [
    {
      "name": "Brentwood",
      "slug": "brentwood",
      "state": "TN",
      "lat": 36.033,
      "lng": -86.7828,
      "distance_km": 15,
      "tier": "major_city",
      "population": 188000,
      "search_volume_monthly": 450,
      "notable_venues": ["The Hermitage", "Waltz Inn"]
    },
    {
      "name": "Franklin",
      "slug": "franklin",
      "state": "TN",
      "lat": 35.917,
      "lng": -86.869,
      "distance_km": 22,
      "tier": "major_city",
      "population": 87000,
      "search_volume_monthly": 320,
      "notable_venues": ["Southfork", "Thistle Farm", "The Venue Franklin"]
    }
    // ... add 30+ more cities
  ]
}
```

**Get Data From:**

- Google Maps (distances, coordinates)
- Wikipedia (population)
- Google Keyword Planner (search volume estimates)
- Local business directories (venue lists)

**Step 3: Create locations/ Directory Structure**

```
src/app/locations/
├── page.tsx (locations hub)
└── [city-slug]/
    ├── page.tsx (city page)
    ├── weddings/
    │   └── page.tsx (city + service page)
    ├── corporate/
    │   └── page.tsx
    └── coaching/
        └── page.tsx
```

**Step 4: Build Dynamic Location Page Template**
Create reusable component that:

- Takes city slug from URL: `/locations/franklin`
- Looks up city in cities.json
- Generates meta tags (title, description)
- Populates content (h1, venue lists, testimonials)
- Builds internal links

**Time Saver:** Build one city page fully, then duplicate and change city-specific content.

**Tool:** Code editor (VS Code), Google Maps, Wikipedia

---

### TASK 1.6: Calendar Sync & Availability System (30 min)

**What is it?**
Link your calendar (Google Calendar, Outlook, etc.) to Calendly so booking link only shows available times.

**Action Steps:**

**Step 1: Set Up Calendly**

1. Go to [calendly.com](https://calendly.com)
2. Create account
3. "Create event type" → "15-Minute Consultation Call"
   - Duration: 15 minutes
   - Location: "Zoom video call" or "Phone call"
4. Set availability (when you're free for calls)
5. Buffer time: Add 30-60 min buffer between calls

**Step 2: Connect Your Calendar**

1. Calendly settings → "Integrations"
2. Connect Google Calendar (or Outlook)
3. Select which calendar to sync with (e.g., "Business")
4. Calendly copies your "busy" times → doesn't show those slots

**Step 3: Customize Booking Link**

- Branding: Add your logo
- Confirmation: Set email confirmation
- Reminder: Automatic reminder 24hr before call

**Step 4: Add to Website**

1. Get booking URL: calendly.com/yourusername
2. Add to:
   - Website footer
   - Contact page
   - Form confirmation email
   - Proposal template

**Important:** Manually block times you're performing (not available for consultation).

**Tool:** Calendly (free tier), Google Calendar

---

## WEEK 2: CONTENT & OPTIMIZATION

### GOAL: Prepare your web presence for launch (improve quality, set foundation for organic growth)

---

### TASK 2.1: Create First Location Pages (2 hours)

**What is it?**
Build 3-5 location pages for your biggest target cities. These will be your SEO foundation.

**Action Steps:**

**Step 1: Prioritize Top Cities**
Based on population + search volume, create pages for:

1. Primary city (Nashville example)
2. 2-4 major surrounding cities (Brentwood, Franklin, etc.)

Example: Nashville + Franklin + Brentwood + Smyrna + Gallatin = 5 cities

**Step 2: Write Content for Each City**
For each city, you need:

**Header Content (150-200 words):**

```
H1: "Wedding Singer in [City], TN"

Opening paragraph (emotional + local):
"If you're planning a wedding in [City], you're in the right place.
I've performed at [X] weddings across [Region], from intimate
ceremonies at [Venue] to celebrations at [Venue].

Why choose a local wedding singer? Connection. I know [City]'s
venues intimately — their acoustics, their styles, their expectations.
That means zero surprises on your big day.

For [City] couples planning in 2026-2027, I have [X] premium dates
available. Limited spots, so let's talk soon."
```

**Venue Name-Drops (100 words):**

```
## Venues I've Performed in [City]

🎵 Venue Name 1 — [X] ceremonies
🎵 Venue Name 2 — [X] receptions
🎵 Venue Name 3 — [X] events

I work with [City]'s best venues to deliver seamless entertainment...
```

**Testimonials (200-300 words):**

```
Include 2-3 testimonials from couples who had weddings in this city.
Tag them: "[Couple Name], [City], TN - [Date]"

If you don't have city-specific testimonials yet, take any wedding
testimonials and note the city: "This feedback is from Sarah & David,
who had their wedding in Franklin, TN."
```

**FAQ (200-300 words):**

```
Q: What's your typical timeline in [City]?
A: I arrive [time] before ceremony. Here's what to expect...

Q: Have you worked at [big local venue]?
A: Yes! I've performed there for [X] events...

Q: Do you offer [City]-specific packages?
A: I offer service across [Region], with special rates for...
```

**CTA Section:**

```
## Ready to Book Your [City] Wedding?

"Let's chat about your vision. Schedule a 15-minute consultation
→ [Calendly link]"

Or: "Tell me about your event → [Form link]"
```

**Step 3: Create Pages in CMS**

1. Go to your website admin
2. Create new page: `/locations/franklin`
3. Populate with content above
4. Set meta tags:
   - Title: "Wedding Singer in Franklin, TN | [Your Name]"
   - Description: "Professional wedding singer for Franklin, TN. Personalized ceremonies & entertainment. Limited 2026 dates available."
5. Add image: Wedding photo or performer shot
6. Internal links: Link to main services, pricing, testimonials
7. Publish & test on mobile

**Step 4: Repeat for 4-5 Major Cities**
Each city page follows same template, with city-specific content.

**Tool:** Website CMS (WordPress, Webflow, etc.), text editor

---

### TASK 2.2: Optimize Existing Website Pages (2 hours)

**What is it?**
Improve your current website pages to be more conversion-optimized and SEO-friendly.

**FocusPages:** Services, Pricing, About, Testimonials

**Action Steps:**

**Page 1: Services Page**
Review & improve:

- [ ] H1 clear (what services do you offer?)
- [ ] Service descriptions include benefit + price range
- [ ] Images for each service (wedding, corporate, coaching)
- [ ] Internal links to related content
- [ ] CTA button (book now / contact)
- [ ] Meta description includes target keywords

**Page 2: Pricing Page**
Review & improve:

- [ ] 4-tier pricing clearly displayed
- [ ] What's included in each tier
- [ ] Charm pricing ($X,995 not $X,000)
- [ ] "Starting from" messaging
- [ ] Payment options explained (full, 50/50 split, payment plan)
- [ ] FAQ (Why this price? What if I'm over/under?)
- [ ] CTA: "Check availability" or "Schedule consultation"
- [ ] No hidden fees (transparency builds trust)

**Page 3: About/Bio Page**
Review & improve:

- [ ] Professional photo (headshot recommended)
- [ ] Your story (credentials, experience, personality)
- [ ] Why people trust you (years of experience, education, awards)
- [ ] Social proof (review count, rating)
- [ ] What makes you different (from competitors)
- [ ] Personal touch (hobbies, values, why you do this)
- [ ] CTA: "Let's work together"

**Page 4: Testimonials Page**
Review & improve:

- [ ] Group testimonials by service (wedding/corporate/coaching)
- [ ] Include couple names, dates, cities (specificity = trust)
- [ ] High-res photos if possible (couple photo builds trust 40% more)
- [ ] Client ratings/scores (4.9/5 ⭐⭐⭐⭐⭐)
- [ ] Video testimonials (if available)
- [ ] Number of happy clients (social proof: "200+ weddings")
- [ ] CTA: "Read more reviews" or "Book now"

**Page 5: Contact/Booking Page**
Review & improve:

- [ ] Multi-step form in place (from Task 1.3)
- [ ] Calendly link visible
- [ ] Phone number prominent
- [ ] Email address visible
- [ ] Hours available
- [ ] What to expect after submitting form
- [ ] Trust badges (Google reviews, ratings, awards)

**Optimization Checklist for All Pages:**

- [ ] Mobile responsive (test on phone)
- [ ] Page loads fast (<2 seconds)
- [ ] Headings clear (someone skimming understands value in 5 seconds)
- [ ] Images optimized (compressed, includes alt text)
- [ ] Internal links (3-5 per page to other relevant pages)
- [ ] External links (1-2 to authority sites)
- [ ] Meta tags: Title (60 chars), Description (160 chars)
- [ ] CTA buttons colored (stand out from background)
- [ ] Contact info visible (phone/email top or bottom)

**Tool:** Website CMS, Lighthouse (free Google tool for page speed)

---

### TASK 2.3: Plan First 4 Blog Posts (1 hour)

**What is it?**
Schedule and prepare outline for your first blog posts. You'll write them in Week 3.

**Action Steps:**

**Select First 4 Posts** (from our 16-post roadmap):

1. CLUSTER 1 Pillar: "Complete Guide to Wedding Entertainment" (3,200 words) — **Do this first**
2. Post 1.1: "Wedding Ceremony Music" (1,200 words)
3. Post 1.2: "Cocktail Hour Music" (1,100 words)
4. CLUSTER 3 Pillar: "Learn to Sing Well" (3,000 words) — **Or do this instead of #2-3**

**For Each Post, Create Outline:**

```
TITLE: [Blog Post Title]
KEYWORD: [Primary keyword target]
OUTLINE:
  - Introduction (hook, problem, why care?)
    - Example story or statistic
  - Section 1: [Subheading]
    - Bullet points
    - Why this matters
  - Section 2: [Subheading]
    - Practical advice
    - Real example
  - Section 3: [Subheading]
  - Conclusion
    - Summary
    - CTA (Schedule consultation? Book now?)
  - FAQ Section
    - 3-5 common questions

INTERNAL LINKS:
  - Link to [page] with anchor "..."
  - Link to [page] with anchor "..."

IMAGES NEEDED:
  - Hero image (event/performer)
  - Section images (2-3)
```

**Create Content Calendar in Spreadsheet:**

```
Post | Week | Status | Word Count | Internal Links | SEO Score
1. Wedding Entertainment | Wk 3 | Outline | 3,200 | TBD | TBD
2. Ceremony Music | Wk 4 | TBD | 1,200 | TBD | TBD
3. Cocktail Hour | Wk 5 | TBD | 1,100 | TBD | TBD
4. Vocal Coaching | Wk 4 | TBD | 3,000 | TBD | TBD
```

**Tool:** Google Docs (outlining), Notion (content calendar), Google Sheets

---

### TASK 2.4: Prepare Social Media Content (1 hour)

**What is it?**
Create 2 weeks of social content to post during launch phase. Shows activity & builds audience.

**Action Steps:**

**Create Social Content Calendar:**

```
Date | Platform | Content Type | Topic | CTA | Status
3/1 | Instagram | Photo + Caption | "Getting Ready for [Event]" | "See more tips on blog" | Draft
3/1 | TikTok | Short Video | "Wedding Music Tip" | "Follow for more" | Record
3/2 | Facebook | Post | Blog launch announcement | "Read the full guide" | Draft
3/3 | Instagram | Story | Behind-the-scenes | "Tap to schedule" | Record
...
```

**Content Ideas (Low Effort, High Value):**

1. **Tip Posts** (1 image + caption)
   - "3 Signs Your Venue Needs a Sound Check"
   - "How to Choose Your First Dance Song"
   - "What to Expect During a Vocal Lesson"

2. **Before/After** (2 images)
   - "Same couple, totally different mood with different music"
   - Show transformation through music choice

3. **Behind-the-Scenes** (Story/Reel)
   - Setup before event
   - Soundcheck
   - Event highlights
   - Client reactions

4. **FAQ Answers** (Carousel)
   - Common questions as slides
   - "The top 5 questions couples ask me..."
   - Drives engagement

5. **Blog Announcements** (Link post)
   - "NEW: Complete guide to wedding entertainment"
   - Excerpt + link
   - Drives traffic

6. **Client Wins** (Testimonial)
   - Quote graphic
   - Couple name, date, city
   - "So grateful to work with amazing couples"

7. **Educational Content** (Video)
   - Singing tips (for coaching audience)
   - Music selection process (for wedding couples)
   - "Today's lesson: proper vocal breathing"

**Batch Create Posts:**
Instead of daily stress, batch create:

- Sunday evening: Write 10 captions
- Monday: Design 10 graphics (Canva template)
- Tuesday-Sunday: Schedule posts (Buffer or Meta scheduler)

**Tool:** Canva (graphics), Buffer (scheduling), TikTok/Instagram/Facebook editors

---

## WEEK 3: LAUNCH & TESTING

### GOAL: Go live with new content and systems. Test everything. Gather launch data.

---

### TASK 3.1: Write & Publish First Blog Post (3-4 hours)

**What is it?**
Write your first comprehensive pillar post. This is your SEO foundation post.

**Action Steps:**

**Select Pillar Post:** "Complete Guide to Wedding Entertainment"

**Structure:**

1. **Hook/Introduction** (200 words)
   - Problem: "Planning a wedding and confused about entertainment choices?"
   - Emotional trigger: "The right music sets the entire mood"
   - Promise: "In this guide, I'll walk you through every decision"

2. **What is Wedding Entertainment?** (300 words)
   - Define it
   - Types (DJ vs. live singer, band vs. solo)
   - Why couples choose each
   - Your recommendation

3. **Types of Entertainment** (600 words)
   - DJ (pros/cons)
   - Live singer (pros/cons)
   - Band (pros/cons)
   - Comparison table

4. **The Entertainment Timeline** (500 words)
   - Ceremony music
   - Cocktail hour entertainment
   - Reception music
   - When to hire each
   - Coordination tips

5. **Budget Considerations** (400 words)
   - Cost range ($500-$5,000+)
   - What affects price
   - ROI of professional entertainment
   - Budget allocation recommendations

6. **How to Choose Your Entertainer** (500 words)
   - Questions to ask
   - Red flags
   - Vetting process
   - Contract review

7. **Real Wedding Examples** (400 words)
   - 2-3 case studies
   - What worked
   - Lessons learned
   - Before/after comparison

8. **Conclusion + CTA** (200 words)
   - Recap key points
   - Next steps: Schedule consultation
   - Add booking link + form link

9. **FAQ Section** (500 words)
   - 5-8 common questions
   - Answers from your perspective

**Total: ~3,600 words**

**Writing Tips:**

- Write in your voice (conversational, helpful)
- Use subheadings to break up text
- Include 3-5 images (venue, event, couple, you)
- Use bullet points for lists
- Bold key phrases
- Include a downloadable checklist (optional, helps SEO)

**Before Publishing Checklist:**

- [ ] Proofread (Grammarly free tool)
- [ ] Fact-check claims
- [ ] Verify links work
- [ ] Add internal links (3-5 links to other pages)
- [ ] Set featured image
- [ ] Write compelling meta description
- [ ] Add schema markup (Article, FAQ)
- [ ] Test on mobile view
- [ ] Schedule social promotion

**Publish & Promote:**

1. Publish on website (date: today)
2. Share on Instagram (photo + caption + link)
3. Share on Facebook (full excerpt + link)
4. Share on TikTok (video clip + link in bio)
5. Send email (if you have list)
6. Reply to comments in first 24 hours (boosts engagement)

**Tool:** WordPress (if using WP), or your CMS

---

### TASK 3.2: Publish Location Pages (1.5 hours)

**What is it?**
Go live with your first 5 city pages (`/locations/franklin`, `/locations/nashville`, etc.)

**Action Steps:**

**Step 1: Review Quality**
For each of the 5 cities:

- [ ] Content is unique (not copy-paste template)
- [ ] Venue names are real and local
- [ ] City-specific testimonials present
- [ ] Local FAQ answers included
- [ ] Meta tags are optimized
- [ ] Images relevant
- [ ] Internal links added

**Step 2: Create Locations Hub**
Create `/locations` page that:

- [ ] Lists all 5 cities
- [ ] Groups by distance/tier
- [ ] Includes local map (optional)
- [ ] CTA: "Select your city for details"
- [ ] SEO-friendly title/description

**Step 3: Submit to Google**

1. Go to Google Search Console
2. Submit each new URL:
   - `/locations`
   - `/locations/franklin`
   - `/locations/nashville`
   - `/locations/brentwood`
   - `/locations/smyrna`
3. Request "Index these URLs"

**Step 4: Test Each Page**

- [ ] Mobile responsive?
- [ ] Links work?
- [ ] Form works?
- [ ] Calendly link works?
- [ ] Images load?
- [ ] No spelling errors?

**Publish & Promote:**

1. Share on social: "Now serving [City]! #LocalPride"
2. Share to local Facebook groups
3. Mention local venues (tag them)

**Tool:** Google Search Console, CMS

---

### TASK 3.3: Go Live with Email Autoresponder (30 min)

**What is it?**
Switch on your automated email sequences so form submissions trigger proper responses.

**Action Steps:**

**Step 1: Test Email Sequence**

1. Submit test form with your email
2. Verify autoresponse arrives in 5 minute
3. Check all links work (Calendly, website links)
4. Check formatting looks good on mobile

**Step 2: Monitor Submissions**

- [ ] Forms are being submitted (check backend)
- [ ] Autoresponses are being sent
- [ ] Responses are coming to your email
- [ ] Leads are being tracked in spreadsheet

**Step 3: Start Rapid Response Protocol**
When you get a form submission:

1. **Within 30 min:** Respond to thank you email from form
2. **Within 2 hours:** If high-quality lead, cold call or send booking link
3. **Within 24 hours:** For all leads, second email if no response
4. **Update lead tracking:** Add to spreadsheet, assign score

**Tool:** Email service (ConvertKit, Mailchimp) + form service (Tally)

---

### TASK 3.4: Create Google Analytics Conversion Tracking (1 hour)

**What is it?**
Set up tracking so you can measure which marketing efforts lead to bookings.

**Action Steps:**

**Step 1: Set Up GA4 Events**
In Google Analytics 4:

1. [ ] Event: "Form Submission" (when form submitted)
2. [ ] Event: "Contact Button Clicked" (CTA button)
3. [ ] Event: "Book Consultation" (Calendly link clicked)
4. [ ] Event: "View Pricing" (pricing page view)
5. [ ] Event: "View Testimonials"

**Step 2: Create Conversion Goals**

- Goal 1: Form Submission (high intent)
- Goal 2: Calendly Booking (very high intent)
- Goal 3: Return Visitor (loyalty signal)

**Step 3: Create Dashboard**
Create dashboard view showing:

- Sessions/day
- Form submissions/week
- Conversions/week
- Top pages
- Traffic sources

**Step 4: Weekly Monitoring**
Every Monday morning, check:

- Total traffic last week?
- Form submissions last week?
- Top traffic source?
- What pages got most visits?
- Bounce rate on key pages?

**This Data Will Show:**

- Which marketing efforts drive traffic
- Which pages convert best
- Where people drop off
- What to optimize next

**Tool:** Google Analytics 4 (free)

---

### TASK 3.5: Create Weekly Tracking Spreadsheet (30 min)

**What is it?**
Master dashboard tracking all your Phase 3 progress (leads, revenue, metrics).

**Action Steps:**

**Create Google Sheet with Tabs:**

**Tab 1: Weekly Metrics**

```
Week | Visitors | Form Subs | High-Q Leads | Consultations | Bookings | Revenue
Wk 1 | 450 | 2 | 1 | 0.5 | 0.2 | $240
Wk 2 | 510 | 3 | 1.5 | 0.8 | 0.3 | $360
Wk 3 | 580 | 4 | 2 | 1.2 | 0.4 | $480
Wk 4 | 650 | 5 | 2.5 | 1.5 | 0.5 | $600
```

**Tab 2: Lead Pipeline**

```
Lead Name | Date | Event Type | Date | Budget | Status | Follow-Up | Notes
Jane Smith | 3/1 | Wedding | 6/15 | $3,000 | Consultation scheduled | 3/5 | High quality
...
```

**Tab 3: Content Published**

```
Title | Publish Date | Word Count | Traffic | Links Shared | Status
Complete Guide to Wedding Entertainment | 3/10 | 3,600 | 45 | 12 | ✅ Published
...
```

**Tab 4: Social Media**

```
Platform | Followers (Start) | Followers (Now) | Posts | Engagement % | Top Post
Instagram | 200 | 215 | 8 | 3.2% | [Post title]
TikTok | 0 | 45 | 5 | 8% | [Video title]
...
```

**Review Weekly Every Monday:**

- Are metrics moving in right direction?
- Are conversions improving?
- What's working? What's not?
- Adjust strategy based on data

**Tool:** Google Sheets

---

## WEEK 4: MONITORING & ITERATION

### GOAL: Collect data. Learn what works. Plan improvements. Set Phase 2 (Month 2) priorities.

---

### TASK 4.1: Weekly Traffic & Lead Analysis (1 hour)

**What is it?**
Analyze Week 1-4 data to understand what's working and what needs adjustment.

**Action Steps:**

**Data to Review:**

1. **Traffic:** Where did visitors come from? (top pages, top channels)
2. **Forms:** Which type of leads submitted? (best quality?)
3. **Consultations:** What % of leads scheduled calls?
4. **Bookings:** Did anyone convert to customer yet?
5. **Content:** Which blog post got most traffic?
6. **Local SEO:** Any city pages ranking yet?

**Questions to Answer:**

- Was blog post effective? (Did it get traffic?)
- Which location pages got traffic?
- Did form submissions come in? (What type?)
- Did email autoresponders work?
- Anything breaking on website? (High bounce rate?)
- Are social shares driving traffic?

**Action Items from Analysis:**

- If traffic is low: Blog post, wait 2 weeks (SEO takes time) OR promote more socially
- If form submissions are low: Check if form is obvious OR adjust messaging
- If consultations aren't scheduled: Re-examine follow-up email OR call high-quality leads directly
- If any page has high bounce rate: Review content quality OR make CTA more obvious

**Document Findings:**
Create brief report:

```
WEEK 1-4 LAUNCH ANALYSIS

WHAT WORKED:
- [Blog post gained 120 views] → Great content
- [Instagram gained 30 followers] → Social content resonating
- [Form submissions: 4 in Week 3] → Positioning attracts interest

WHAT NEEDS IMPROVEMENT:
- [Traffic still low] → Local SEO takes 2-3 months to show
- [Mobile page slow] → Need to optimize images
- [Franklin page not ranking] → Add more internal links

NEXT ACTIONS:
1. [Specific action] by [date]
2. [Specific action] by [date]
```

**Tool:** Google Analytics, Google Search Console, spreadsheet

---

### TASK 4.2: Gather Testimonials & Case Studies (2 hours)

**What is it?**
Actively collect feedback from recent clients. Use this for future marketing.

**Action Steps:**

**Outreach to Recent Clients:**
Create email template:

```
Subject: "Could you help me with a testimonial?"

Hi [Name],

I hope you're enjoying [event/coaching sessions]! I loved working
with you on [specific detail].

I'm building out more case studies for my website to help other
couples/students understand what working together is like. Would
you be willing to share:

1. A quick testimonial (2-3 sentences about the experience)?
2. A rating/review (5 stars if happy!)?
3. A photo from the event (if available)?
4. Permission to mention your first names & city?

This helps couples in your area see what's possible!

Thanks so much,
[Your Name]
```

**Send to:**

- Last 10 clients
- Everyone from your target cities (Franklin, Nashville, etc.)
- Mix of all three services (wedding, corporate, coaching)

**Follow-Up:**

- If no response in 1 week, send follow-up: "Just checking if you got my email..."
- If still no response: Try calling directly
- Goal: Gather 5-10 testimonials this month

**Document Testimonials:**
For each, record:

- [ ] Client name
- [ ] Event type (wedding/corporate/coaching)
- [ ] Date of event
- [ ] City
- [ ] Testimonial text
- [ ] Photo (if available)
- [ ] Permission granted? (Yes/No)

**Add to Website:**

- Create "Testimonials by City" section on location pages
- Add photos where available
- Refresh testimonials page with new ones

**Expected Impact:**

- Social proof increases lead quality
- City-specific testimonials increase local conversions
- Photos increase trust (40%+ higher click-through)

**Tool:** Email, spreadsheet, website CMS

---

### TASK 4.3: Plan Month 2 Priorities (1 hour)

**What is it?**
Based on Month 1 results, plan which initiatives to prioritize in Month 2.

**Action Steps:**

**Scoring System:**
Rate each remaining initiative on 3 criteria:

1. **Effort:** How much time/money? (1-5 scale, 5=hardest)
2. **Impact:** How much will it improve business? (1-5 scale, 5=biggest impact)
3. **Urgency:** How soon does it need to happen? (1-5 scale, 5=most urgent)

**Score = Impact × Urgency ÷ Effort**

**Possible Month 2 Tasks:**

```
Task | Effort | Impact | Urgency | Score | Priority
Publish 4 more blog posts | 4 | 5 | 4 | 5.0 | ⭐⭐⭐⭐⭐ HIGH
Launch 10 more location pages | 3 | 4 | 4 | 5.3 | ⭐⭐⭐⭐⭐ HIGH
Run Google Ads (PPC) | 3 | 3 | 3 | 3.0 | MEDIUM
Create YouTube testimonials | 5 | 4 | 2 | 1.6 | LOW
Create email nurture sequence | 2 | 4 | 4 | 8.0 | ⭐⭐⭐⭐⭐ URGENT
```

**Month 2 Recommended Priorities:**

1. **Publish 4+ blog posts** (continue content cluster strategy)
2. **Launch 10+ more location pages** (double your city coverage)
3. **Send email nurture sequence** (stay in front of form submitters)
4. **Gather more testimonials** (social proof compounds)
5. **Monitor & optimize** (based on Month 1 data)

**Document Decision:**

```
MONTH 2 EXECUTION PLAN

Priority 1: Content Publishing
- Publish Post 1.1, 1.2, 1.3, 3.1 (4 posts)
- Timeline: Week 1 (1 post), Week 2 (1 post), etc.
- Expected impact: +25% organic traffic

Priority 2: Expand Location Pages
- Launch pages for: [10 city names]
- Timeline: Week 2-3 (batch creation)
- Expected impact: New ranks for all 10 cities

Priority 3: Email Nurture
- Create sequence: Day 1, 3, 5, 7 follow-up
- Test with existing form submissions
- Expected impact: +20% conversion rate

Priority 4: Testimonial Collection
- Send outreach to 15+ clients
- Expected impact: Higher conversion on landing pages
```

**Tool:** Spreadsheet, project management tool

---

### TASK 4.4: Set Up Monthly Reporting Rhythm (30 min)

**What is it?**
Establish routine for tracking progress, so you can measure improvement month-over-month.

**Action Steps:**

**Create Monthly Report Template:**

```
MONTH [#] PERFORMANCE REPORT
Date: [Month]

TOP-LINE METRICS:
— Total Visitors: ___
— Form Submissions: ___
— Proposed Sent: ___
— Bookings: ___
— Revenue: $___

TRAFFIC BREAKDOWN:
— Organic: __% (from Google/SEO)
— Direct: __% (typing URL)
— Social: __% (Instagram, Facebook, etc.)
— Referral: __% (other websites)

CONVERSION FUNNEL:
— Visitors → Form: __%
— Form → Consultation: __%
— Consultation → Proposal: __%
— Proposal → Booking: __%

TOP PAGES:
1. [page] - ___ visits
2. [page] - ___ visits
3. [page] - ___ visits

TOP TRAFFIC SOURCES:
1. [source] - ___ visits
2. [source] - ___ visits

SEO RANKINGS:
— New keywords ranking: ___
— Keywords in top 10: ___
— Keywords in top 3: ___

CONTENT PUBLISHED:
— Blog posts: ___
— Pages: ___
— Words: ___

KEY WINS:
- [What went well?]
- [What exceeded expectations?]

CHALLENGES:
- [What needs improvement?]
- [What under-performed?]

NEXT MONTH PRIORITIES:
1. [Action item]
2. [Action item]
3. [Action item]
```

**Schedule Monthly Review:**

- Calendar event: First Monday of each month
- Time: 1-2 hours
- Activity: Review last month, plan next month
- Document: Save report for future reference

**Longer-Term Goal:**
By Month 6, look back and see:

- "We grew from $960 revenue (Month 1) to $16,380 (Month 6)"
- "We got from 500 visitors to 2,500 visitors"
- "We have 30+ location pages ranked"
- "We've published 16 blog posts"
- Track your progress month-by-month

**Tool:** Google Sheets (template), Google Calendar (recurring reminder)

---

## FINAL CHECKLIST: END OF MONTH 1

### Technical (Should be Live):

- [ ] Google My Business optimized
- [ ] Citations claimed in 8+ directories
- [ ] Multi-step booking form live
- [ ] Email autoresponse sequence working
- [ ] cities.json created (30+ cities)
- [ ] 5 location pages live
- [ ] Calendly booking system live
- [ ] Google Analytics tracking configured
- [ ] Lead scoring system started

### Content (Should be Published):

- [ ] 1 pillar blog post published (3,200+ words)
- [ ] 5 location pages optimized
- [ ] Website pages optimized (Services, Pricing, About, Testimonials)
- [ ] 2 weeks of social media content created/posted
- [ ] First testimonials gathered (5+)

### Tracking (Should be in Place):

- [ ] Weekly metrics spreadsheet
- [ ] Lead pipeline spreadsheet
- [ ] Weekly social media tracking
- [ ] Monthly performance report template

### Performance Targets (Realistic for Month 1):

- [ ] 1,500-2,500 total visitors
- [ ] 4-8 form submissions
- [ ] 1-2 high-quality leads
- [ ] 0.5-1 consultation scheduled
- [ ] $500-1,500 tentative revenue (bookings may not land in Month 1)

---

## MONTH 2 PREVIEW (What's Next)

Once Month 1 launches, you'll move to **Month 2: Content Acceleration**

**Month 2 Focus:**

1. Publish 4-6 blog posts (continue content cluster)
2. Add 10-20 more location pages
3. Build email nurture sequences
4. First organic leads should start coming in
5. Expect first 2-3 bookings from Month 1 visibility
6. Revenue: $1,500-3,000

**Month 3-6:**
Repeat process of content publishing + SEO optimization. By Month 6, you should see:

- 10,000+ monthly impressions from local SEO
- 3,000+ monthly website visitors
- 30+ monthly form submissions
- 15+ consultations scheduled
- 8-12 monthly bookings
- $16,000-25,000 monthly revenue

---

## KEY REMINDERS FOR SUCCESS

1. **Follow the exact 30-day plan** — Don't skip ahead or try to do everything at once. Each week builds on the last.

2. **Content takes time** — Blog posts won't rank for 4-6 weeks. Location pages might take 2-3 months. Trust the process.

3. **Respond faster than your competitors** — When someone fills out your form, call them within 2 hours. Response speed = conversion.

4. **Track everything** — The data tells you what's working. Make decisions based on metrics, not gut feeling.

5. **Iterate and improve** — Your first blog post won't be perfect. Your first location page won't rank immediately. Test, measure, refine.

6. **This is a marathon** — Month 1 is foundation. Month 6 is profitability. Stay committed to the system.

**You've got this. Let's dominate your local market.**
