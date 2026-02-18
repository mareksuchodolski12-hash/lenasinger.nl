# 30-DAY EXECUTION PLAN: Eindhoven Local SEO Domination

## Week-by-Week Tactical Roadmap

**Document Version:** 1.0  
**Date:** February 18, 2024  
**Duration:** 4 weeks (28 days)  
**Outcome:** Foundation for 90-day domination strategy

---

## WEEK 1: FOUNDATION & TIER 1 SETUP

### Primary Objective

Deploy the first 6 city pages (Tier 1 cities) + environment config + Google Business Profile optimization.

### Team Tasks

#### Developer (Est. 15 hours)

- [ ] Review cities.json structure and verify all 23 cities present
- [ ] Create `src/app/locations/` directory structure
- [ ] Build CITIES_MAPPER.ts utility (load + filter cities by tier)
- [ ] Build schema-generator.ts (LocalBusiness + Breadcrumb JSON-LD)
- [ ] Create `src/app/locations/[city]/wedding-singer/page.tsx` template
- [ ] Create `src/app/locations/[city]/corporate-event-singer/page.tsx` template
- [ ] Test page generation and routing for Tier 1 cities (6 cities = 12 pages)
- [ ] Validate schema markup using schema.org validator
- [ ] Update sitemap.ts to include all city pages

**Definition of Done:**

- All 12 Tier 1 pages load without errors
- Schema validates perfectly
- Mobile responsive ✓
- Lighthouse Core Web Vitals > 90
- Internal links working

#### Marketer/Growth Lead (Est. 8 hours)

- [ ] Access and claim Google Business Profile for Eindhoven base
- [ ] Update GBP with:
  - Service areas (select all 23 cities if platform allows, or top 10)
  - Business hours
  - Photos (professional vocalist headshots, performance photos)
  - Services offered (wedding ceremony, reception, corporate events)
  - Description optimized for local keywords
- [ ] Verify phone + email
- [ ] Create backup GBP checklist for verification
- [ ] Research top 3 highest-priority keywords for each Tier 1 city
  - E.g., "wedding singer Veldhoven", "wedding ceremony vocalist Veldhoven", etc.

**Definition of Done:**

- GBP fully verified and optimized
- 5+ high-quality photos uploaded
- Service areas configured
- Keyword list created for Weeks 3–4

#### Content (Est. 5 hours)

- [ ] Write intro copy for each Tier 1 city wedding page
  - Personalize with city name, distance, key details
  - 250–300 words unique per city
- [ ] Review and adapt FAQ section for each city context
- [ ] Collect 2–3 testimonial quotes from past clients (can reference region)
- [ ] Create list of "common venues in each Tier 1 city" for research

**Definition of Done:**

- Unique copy written for 6 cities
- FAQ adapted for local context
- Testimonial quotes ready for integration

#### QA/Testing (Est. 4 hours)

- [ ] Test all 12 Tier 1 pages on:
  - Desktop (Chrome, Firefox, Safari)
  - Mobile iOS (Safari)
  - Mobile Android (Chrome)
- [ ] Check for broken links, 404s, image issues
- [ ] Verify form submissions work
- [ ] Load test (page speed on 4G)
- [ ] Create bug report if issues found

**Definition of Done:**

- All pages tested across devices
- No critical bugs
- Performance acceptable

### Week 1 Deliverables

- ✅ 12 live Tier 1 city pages (6 wedding + 6 corporate)
- ✅ Updated sitemap with all city URLs
- ✅ GBP fully optimized
- ✅ Tier 1 keywords documented
- ✅ Testing report completed

### Week 1 Success Metrics

- Pages go live without errors
- Schema validates 100%
- Lighthouse score > 90
- GBP verified and complete

---

## WEEK 2: EXPANSION & SEARCH CONSOLE SUBMISSION

### Primary Objective

Deploy Tier 2 city pages + submit all URLs to Google Search Console + begin first blog post.

### Team Tasks

#### Developer (Est. 12 hours)

- [ ] Deploy Tier 2 city pages (7 cities = 14 new pages)
- [ ] Add internal linking between related cities
- [ ] Update sitemap to include new URLs
- [ ] Implement breadcrumb navigation on all pages
- [ ] Create link structure:
  - Each city page links to companion service (wedding ↔ corporate)
  - Each city links to related nearby cities (distance-based)
  - All pages link back to main service pages

**Definition of Done:**

- 26 total pages live (12 + 14)
- All internal links working
- Breadcrumb navigation visible
- Updated sitemap

#### Marketer/Growth Lead (Est. 10 hours)

- [ ] Submit Tier 1 + Tier 2 URLs to Google Search Console:
  - Inspect each URL to trigger indexing
  - Request indexing for all 26 new pages
- [ ] Create monthly tracking spreadsheet:
  - City name, keyword, current position, target position
  - Track week-by-week changes
- [ ] Set up Google Analytics 4 event tracking for:
  - Form submissions (lead capture)
  - CTA clicks (booking interest)
  - City page visits (traffic source)
- [ ] Create first month's keyword target list:
  - Focus on high-intent keywords (wedding ceremony, pricing, booking)
  - Avoid generic keywords initially

**Definition of Done:**

- All 26 URLs submitted to GSC
- Tracking spreadsheet created
- GA4 event tracking configured
- Keyword priority list documented

#### Content (Est. 6 hours)

- [ ] Write 300-word intro copy for Tier 2 cities (7 cities × 2 service types, but shorter)
- [ ] Begin drafting first blog post:
  - Title: "5 Things to Consider When Booking a Wedding Singer in North Brabant"
  - Target keywords: "wedding singer North Brabant", "hire vocalist ceremony"
  - Structure: Introduction, 5 tips, CTA to booking form
  - Length: 1,200–1,500 words
  - Links to 3–4 city pages and main service pages
- [ ] Research top 3 local blogs for potential guest post opportunities

**Definition of Done:**

- Tier 2 city copy written
- Blog post drafted and ready for review
- Guest post opportunities identified

### Week 2 Deliverables

- ✅ 26 total city pages live (all Tier 1 + Tier 2)
- ✅ Internal linking structure implemented
- ✅ All URLs submitted to Google Search Console
- ✅ GA4 event tracking active
- ✅ First blog post drafted

### Week 2 Success Metrics

- Pages indexed by Google (within 48 hours of submission)
- 0 crawl errors in GSC
- GA4 showing traffic to city pages
- Blog post ready for publication

---

## WEEK 3: CONVERSION FUNNEL & CONTENT MOMENTUM

### Primary Objective

Deploy booking form + publish first blog post + collect testimonials + deploy Tier 3–4 city pages.

### Team Tasks

#### Developer (Est. 14 hours)

- [ ] Build multi-step booking form:
  - Step 1: Event type (Wedding / Corporate)
  - Step 2: Event date (date picker)
  - Step 3: City (dropdown from cities.json)
  - Step 4: Guest count (number input)
  - Step 5: Budget range (radio buttons)
  - Step 6: Contact details (name, email, phone)
  - Confirmation screen with auto-response email trigger
- [ ] Implement lead scoring logic:
  - Wedding event + 100+ guests + budget > €4,000 = HIGH
  - Event < 60 days away = +2 urgency multiplier
  - Existing client or referral = +5
- [ ] Add "Urgency notice" if event < 60 days:
  - Modal: "This date is filling up quickly. Check availability soon."
- [ ] Deploy remaining city pages (Tier 3 + 4, 11 cities = 22 pages)
- [ ] Update sitemap with final 22 URLs

**Definition of Done:**

- Form captures all required fields
- Confirmation email sends automatically
- Lead scoring calculates correctly
- All 46 city pages live
- Final sitemap updated

#### Marketer/Growth Lead (Est. 12 hours)

- [ ] Set up email automation:
  - Confirmation email (auto-triggered from form)
  - Follow-up email #1 (24 hours later): "Here's what happens next"
  - Follow-up email #2 (3 days): "Questions about your event?"
  - Follow-up email #3 (7 days): "Last chance to book your date"
- [ ] Create lead scoring dashboard in CRM
- [ ] Publish first blog post
- [ ] Set up internal linking from blog post to city pages
- [ ] Begin outbound outreach to past clients for testimonials:
  - Email template: "Would you share 2 sentences about your experience?"
  - Offer: Gift card or free song for referral credit
- [ ] Create "Testimonials" section on homepage (3–4 initial quotes)

**Definition of Done:**

- Email sequences automated
- First blog post published and indexed
- Testimonial collection campaign launched
- Internal links from blog to city pages working

#### Content (Est. 8 hours)

- [ ] Finalize + edit first blog post
- [ ] Draft second blog post:
  - Title: "Corporate Event Entertainment in Eindhoven: What Tech Companies Really Want"
  - Target keywords: "corporate event singer", "professional entertainment"
  - Length: 1,500 words
  - Link to corporate city pages
- [ ] Write 2–3 email testimonial request messages (personalized)
- [ ] Create internal linking map:
  - Which blogs should link to which city pages?
  - Create spreadsheet for Week 4 implementation

**Definition of Done:**

- Blog post #1 published
- Blog post #2 drafted
- Testimonial outreach emails sent
- Internal linking strategy documented

#### Operations/Sales (Est. 6 hours)

- [ ] Establish lead response protocol:
  - Who responds to form submissions?
  - Response time SLA (target: within 4 hours)
  - Follow-up sequence if no response?
- [ ] Create CRM template for lead data
- [ ] Set up weekly review meeting (lead quality, conversion rate)
- [ ] Document first week of form submissions and responses

**Definition of Done:**

- Lead response protocol documented
- CRM template created
- First week data collected and reviewed

### Week 3 Deliverables

- ✅ Multi-step booking form live
- ✅ All 46 city pages live (complete geographic coverage)
- ✅ First blog post published
- ✅ Email automation active
- ✅ Testimonial collection campaign launched
- ✅ Initial lead scoring active

### Week 3 Success Metrics

- Form generating 10+ leads/week
- 30%+ email open rate (confirmation sequence)
- First blog post getting 20+ organic visits
- Some Tier 1 keywords showing movement in search results

---

## WEEK 4: OPTIMIZATION & MONTH 2 PLANNING

### Primary Objective

Analyze first 3 weeks of data + optimize conversion + plan Month 2 content + collect testimonials.

### Team Tasks

#### Marketer/Growth Lead (Est. 14 hours)

- [ ] Data analysis (comprehensive):
  - Which city pages receiving most traffic?
  - Which cities converting best?
  - Form abandon rate + optimization opportunities
  - Email open/click rates by sequence
  - Google Search Console: impressions, CTR, average position
  - Create "Month 1 Performance Report"
- [ ] Optimization recommendations:
  - Test CTA button text A/B variations (if possible)
  - Analyze form field abandon patterns
  - Identify lowest-performing cities (deprioritize in Month 2)
  - Identify highest-performing keywords (double down)
- [ ] Plan Month 2 content calendar:
  - 4 more blog posts (targeting high-intent keywords from GSC data)
  - Testimonial video collection plan
  - Social media / email campaign around blog posts
- [ ] Create paid advertising brief (optional for Month 2):
  - Budget: €1,000–€2,000
  - Targeting: High-intent keywords (wedding, corporate, Eindhoven region)
  - Channels: Google Search + Facebook/Instagram

**Definition of Done:**

- Month 1 performance report completed
- Optimization recommendations documented
- Month 2 content plan created
- Paid advertising brief ready (if approved)

#### Content (Est. 10 hours)

- [ ] Collect testimonials:
  - Follow up on Week 3 outreach (phone calls if needed)
  - Aim for 5+ new testimonials
  - Video testimonials (if clients willing, even just iPhone videos)
- [ ] Publish second blog post (drafted Week 3)
- [ ] Create Month 2 blog topics:
  - Blog #3: "VenueGuide: Best Venues in [City] for Wedding Ceremonies"
  - Blog #4: "Corporate Event Entertainment Trends in 2024"
  - Blog #5: "North Brabant Wedding Budget Guide"
  - Blog #6: "Tech Company Events in Eindhoven: What Music Works"

**Definition of Done:**

- 5+ testimonials collected
- Blog post #2 published
- Month 2 topics scoped and ready
- Content calendar created

#### Developer (Est. 6 hours)

- [ ] Implement testimonial section on homepage
- [ ] Add testimonial feature to relevant city pages
- [ ] Implement A/B testing framework (if not already in place)
- [ ] Performance optimization:
  - Review Core Web Vitals
  - Improve image loading/compression
  - Cache optimization
- [ ] Prepare for Week 1 Month 2 roadmap (content automation, advanced linking)

**Definition of Done:**

- Testimonials displayed on website
- Performance optimizations completed
- A/B testing framework ready

#### Operations/Sales (Est. 8 hours)

- [ ] Weekly lead review summary:
  - How many qualified leads? Conversion rate?
  - Any patterns in lead quality by city?
  - Response time analysis
- [ ] Create Month 2 sales focus areas:
  - Which cities should we prioritize support for?
  - Marketing budget allocation recommendation
- [ ] Develop case study from Year 1 clients (if available)
  - Couple testimonial + photos + song selection story
  - Corporate client case study (event impact, attendee satisfaction)

**Definition of Done:**

- Lead analysis completed
- Sales focus areas defined
- Case study drafted (if possible)

### Week 4 Deliverables

- ✅ Month 1 performance report
- ✅ Optimization recommendations documented
- ✅ Month 2 content calendar planned
- ✅ 5+ new testimonials collected + integrated
- ✅ Blog post #2 published
- ✅ Month 2 roadmap prepared

### Week 4 Success Metrics

- 30+ leads captured in 4 weeks
- 20%+ conversion rate on qualified leads
- 5+ blog visits/day (organic)
- Tier 1 cities showing page 2 Google positions (target: page 1 by end of Month 2)
- 2–3 bookings attributed to local SEO efforts

---

## 30-DAY SUMMARY: KEY METRICS TO TRACK

### Traffic & Visibility

- **Target Day 30:** 100+ organic sessions/week to city pages
- **Target Day 30:** 3–5 Tier 1 cities ranking top 10 for primary keyword
- **Target Day 30:** 500+ organic impressions in Google Search Console

### Leads & Conversion

- **Target Day 30:** 30+ form submissions
- **Target Day 30:** 10+ qualified = high-intent leads
- **Target Day 30:** 2–3 booked events from local SEO

### Content & Authority

- **Target Day 30:** 2 blog posts published (1,500+ words each)
- **Target Day 30:** 5+ integrated testimonials
- **Target Day 30:** Internal linking structure complete (all pages linked)

### Search Performance

- **Target Day 30:** All 46 city pages indexed in Google
- **Target Day 30:** Schema markup validation: 100%
- **Target Day 30:** Sitemap submitted + crawl errors = 0

---

## BUDGET & RESOURCE SUMMARY

### Team Hours (4 weeks)

- Developer: 47 hours
- Marketer/Growth Lead: 44 hours
- Content Creator: 24 hours
- QA/Operations: 14 hours
- **Total: 129 hours (~3.2 hours/day for team of 4)**

### Budget Allocation

- Development: €1,500–€2,000 (contractor if needed)
- Content creation: €800–€1,200 (freelance writer if needed)
- Tools: €200–€300 (analytics, CRM premium, email automation)
- **Total Month 1: €2,500–€3,500** (assuming internal team)

### Optional Paid Advertising

- Google Search Ads: €0–€500 (can start Week 2)
- Facebook/Instagram: €0–€500 (remarketing)
- **Recommended:** Start with organic, add paid in Week 3–4 if ROI promising

---

## CRITICAL SUCCESS FACTORS

✅ **Unique, geo-optimized copy** on every city page (no duplication)  
✅ **Schema validation** (LocalBusiness + Breadcrumb perfect)  
✅ **Internal linking** (city pages ↔ blog ↔ main services)  
✅ **Form captures lead source** (attribute bookings to channels)  
✅ **Quick lead response** (< 4 hours to inquiries)  
✅ **Consistent messaging** (positioning reflected across all pages)

---

## IF YOU GET BEHIND

**Week 1 critical (no extensions):**

- Must have Tier 1 pages live + tested

**Week 2–3 flexible:**

- Can delay Tier 3–4 pages to Week 4 if needed
- Can delay blog post #2 if content stretched
- Can use template testimonials while collecting real ones

**Week 4 critical:**

- Must have Month 1 data analyzed
- Must have Month 2 plan ready
- Cannot move forward without this analysis

---

## NEXT TEAM SYNC: END OF WEEK 1

**Agenda (30 min):**

- [ ] Share Tier 1 pages live URL
- [ ] Review GBP optimization
- [ ] Troubleshoot any dev/technical issues
- [ ] Plan Week 2 sprint
- [ ] Confirm content timeline

**Attendees:** Dev lead, Growth lead, Content, Operations

---

**This 30-day plan is your executable roadmap. Every team member knows their exact tasks and deadlines. Adjust only if you have clear, documented reason. Otherwise, follow the plan with precision.**

**Week 1 starts NOW. Good luck! 🚀**
