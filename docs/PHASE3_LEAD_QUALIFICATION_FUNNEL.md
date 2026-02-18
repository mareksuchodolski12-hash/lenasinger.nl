# LEAD QUALIFICATION FUNNEL & AUTOMATION

## Multi-Step Booking Form + Lead Scoring System

**Document Version:** 1.0  
**Date:** February 18, 2024  
**Target:** Capture 30+ leads/week, convert 20–30% to bookings

---

## FUNNEL OVERVIEW

```
Step 1: Event Type
  ↓
Step 2: Event Date
  ↓
Step 3: Location (City)
  ↓
Step 4: Guest Count
  ↓
Step 5: Budget Range
  ↓
Step 6: Contact Details
  ↓
Confirmation Screen
  ↓
Auto-Response Email
  ↓
Automated Nurture Sequence
```

---

## STEP-BY-STEP FORM DESIGN

### STEP 1: EVENT TYPE (Radio Buttons)

**Question:** "What kind of event are you planning?"

**Options:**

- ◯ Wedding ceremony + reception
- ◯ Corporate event (product launch, gala, celebration)
- ◯ Other (specify)

**Purpose:**

- Immediate lead type segmentation
- Route to appropriate landing experience
- Trigger event-specific messaging downstream

**Psychology:**

- Asking this first makes them commit to an event type
- Radio buttons (not dropdown) = more committed choice
- Validates they're in right place

**Weights (for lead scoring):**

- Wedding = 8 points
- Corporate = 6 points
- Other = 1 point

---

### STEP 2: EVENT DATE

**Question:** "When are you planning your event?"

**Input Type:** Date picker (HTML5 `<input type="date">`)

**Validation:**

- Must be future date (no past dates)
- Must be > 14 days away (minimum booking window)
- Suggest urgency if < 60 days

**Logic:**

```
If event_date < 60 days away:
  Show: 🚨 "This date is filling quickly. Availability limited."
  Lead score += 2 multiplier (urgency)
Else if event_date > 180 days away:
  Show: "Plenty of time to plan. Let's talk details."
```

**Purpose:**

- Understand booking urgency
- Predict lead quality (urgent = higher intent)
- Identify impossible timelines early

**Data captured:**

- Days to event (calculated)
- Season (summer weddings = higher demand)
- Day of week (weekends = higher demand)

---

### STEP 3: LOCATION (City Dropdown)

**Question:** "Where is your event taking place?"

**Input:** Dropdown auto-populated from cities.json

**Display:**

- City name
- Distance from Eindhoven (optional)
- Region (North Brabant)

**Implementation:**

```javascript
// Load from cities.json
Cities.map((city) => ({
  value: city.slug,
  label: `${city.name} (${city.distance_km} km)`,
}));

// Likely order: by distance (closest first)
```

**Logic:**

```
If location == null:
  Show: "Must select location to proceed"

If location matches Endhoven base:
  Lead score += 1 (highest accessibility)

If location in Tier 1 cities:
  Lead score += 1 (priority market)
```

**Purpose:**

- Confirm they're in our service area
- Identify highest-priority locations
- Provide later campaign refinement
- Trigger local testimonials/examples downstream

---

### STEP 4: GUEST COUNT

**Question:** "How many guests are you planning?"

**Input:** Number slider or text input

**Range:**

- Minimum: 20 people
- Maximum: 500 people
- Default: 100 people

**Display:**

- Slider with visual scale
- Real-time number display
- Examples: "Small (20–50)", "Medium (50–150)", "Large (150–300)"

**Logic:**

```
If guest_count < 50:
  Lead score += 1 (intimate, simpler logistics)
  Message: "Perfect for intimate ceremonies"

If guest_count >= 150 AND <= 250:
  Lead score += 2 (premium tier sweet spot)
  Message: "Standard package includes everyone needs"

If guest_count > 300:
  Lead score += 1 (large events, coordination complexity)
  Message: "We handle complex celebrations. Let's discuss details."
```

**Purpose:**

- Estimate event scope/complexity
- Predict revenue potential (bigger events = higher rates)
- Identify logistics challenges early
- Gauge genuine leads vs. casual inquiries

---

### STEP 5: BUDGET RANGE (Radio Buttons)

**Question:** "What's your entertainment budget?"

**Options:**

- ◯ Under €2,000
- ◯ €2,000–€3,500
- ◯ €3,500–€5,000
- ◯ €5,000–€7,500
- ◯ €7,500+
- ◯ Not sure / flexible

**Display:** Anchors tiers to expectations

```
Under €2,000 → [Essential tier positioning]
€2,000–€3,500 → [Premium tier main option]
€3,500–€5,000 → [Premium/Signature flex]
€5,000+ → [Signature / VIP]
```

**Logic:**

```
If budget >= €4,000:
  Lead score += 3 (high-value lead)
  Message: "You qualify for premium customization"

If budget >= €6,000:
  Lead score += 5 (VIP lead)
  Message: "Full-service signature experience available"

If budget == "Not sure":
  Lead score += 0 (neutral)
  Message: "Let's discuss options that work for you"

If budget < €2,000:
  Lead score -= 1 (price-focused, possible tire-kicker)
  Message: "Essential package starts at [price]"
```

**Purpose:**

- Pre-qualify budget alignment
- Predict tier fit (Essential vs. Premium vs. Signature)
- Identify high-value vs. budget-conscious leads
- Streamline sales conversations

**Psychology:**

- Asking budget isn't impolite; it's professional
- Radio buttons (not text) = less friction than typing number
- "Not sure" option doesn't lose lead (keeps them in funnel)

---

### STEP 6: CONTACT DETAILS (Text Inputs)

**Question:** "Let's connect. How can we reach you?"

**Fields:**

- [ ] First name (required)
- [ ] Last name (required)
- [ ] Email (required, email validation)
- [ ] Phone (required, format validation)
- [ ] How did you hear about us? (dropdown, optional)
  - Google search
  - Facebook / Instagram
  - Friend / referral
  - Wedding planner / venue
  - Other

**Validation:**

- Email: Standard email regex
- Phone: Accepts +31, 06, 0, etc. (normalize to E.164 format)
- Name: At least 2 characters, no special characters

**Logic:**

```
If referral_source == "Friend / referral":
  Lead score += 2 (warm lead, higher trust)
  Lead score += 3 more if referred_by_past_client

If referral_source == "Wedding planner / venue":
  Lead score += 1 (professional endorsement)
```

**Purpose:**

- Confirm lead contact (basic info for sales outreach)
- Identify referral source (track marketing attribution)
- Prepare for automatic email response

---

## SUBMISSION & CONFIRMATION

### Confirmation Screen (After Form Completion)

```
✓ Thank you, [First Name]!

We received your request for:
• Event: [Event Type] in [City]
• Date: [Date] (in XX days)
• Guests: [Count]
• Budget: [Range]

Next Steps:
1. We'll send you an email within 4 hours with availability
2. You'll get a personalized proposal within 24 hours
3. We'll schedule a brief vision call (20 min, no pressure)

Check your email: [email] (and spam folder!)

In the meantime: Here are 3 similar events we've performed
[Show 3 photo thumbnails with links to case studies]

Questions? Call us: [phone]
```

**Psychology:**

- Immediate reassurance
- Clear next steps (reduces anxiety)
- Social proof (past events)
- Open communication channel (phone available)

---

## AUTOMATED EMAIL RESPONSES

### Email #0: Immediate Confirmation (Sent within 5 seconds)

**Subject:** "Got it! Here's what happens next – [First Name]"

**Content:**

```
Hi [First Name],

Just received your event request for [City] on [Date].

✓ Event type: [Event type]
✓ Guest count: [Count]
✓ Budget: [Range]

You should expect an email from our team within 4 hours with:
1. Availability check for your date
2. Personalized package recommendation
3. Next steps to book

Questions in the meantime? Reply to this email or call [phone]

Looking forward to making your event unforgettable.

[Subheader: "What if my date is urgent?" → Link to emergency booking]
```

**Trigger:** Immediate (form submission)  
**Purpose:** Reassurance + set expectations

---

### Email #1: Availability + Proposal (Sent within 4 hours)

**Subject:** "[City] Wedding – Your dates are available! [First Name]"
_(Corporate variant: "[City] Corporate Event – Let's discuss entertainment")_

**Content:**

```
Hi [First Name],

Great news – we're available for your event in [City] on [Date]!

Here's what I recommend based on your details:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RECOMMENDED: [Tier Name] Package
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For [your specifics]:
✓ [Benefit 1]
✓ [Benefit 2]
✓ [Benefit 3]

Investment: €[price] (within your €[budget range] budget)

What's included:
• [Specific deliverables for tier]
• [Specific deliverables]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEXT STEP: BRIEF VISION CALL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's talk about your vision in detail. Just 20 minutes, no pressure.

[Interactive Calendar Link]
Pick a time that works: [Calendly-style scheduling]

Can't make any of these times? Reply with your preferred time.

Questions? I'm here to help.

[Signature]
[Phone]
[Email]
```

**Trigger:** 4 hours after form submission OR manually by sales team

**Purpose:** Personal touch, move toward conversation, showcase professionalism

---

### Email #2: Value-Add + Urgency (Sent 24 hours after #1 if no response)

**Subject:** "Quick question: Should we reserve your date? [First Name]"

**Content:**

```
Hi [First Name],

Just checking in – did you see my last email about your [City]
event on [Date]?

Sometimes our schedules fill quickly, especially for [season/weekend] dates.

A few things that might help:

📸 See similar events: [Link to gallery/testimonials]
🎵 Hear samples: [Link to audio clips]
📅 Check availability: [Direct calendar link]
💬 Text me if easier: [Text number or WhatsApp]

I'm here to answer any questions. What matters most to you
for your celebration?

Looking forward to connecting.

[Signature]
```

**Trigger:** 24 hours after Email #1 if no calendar booking

**Purpose:** Re-engagement, reduce lead loss, offer multiple contact methods

---

### Email #3: Final Touch (Sent 3 days after #1 if still no response)

**Subject:** "Last chance for [Date] – [First Name]"

**Content:**

```
Hi [First Name],

Your date is getting close, and I want to make sure you didn't
get lost in your inbox.

Three quick things:

1. Yes, we're available for [Date] in [City]
2. Your [Tier] package recommendation is ready to discuss
3. I'm only a call away if you have questions

If you're still on the fence or need more info, just reply
or call – no pressure at all.

If this date doesn't work anymore, let me know and I can help
point you toward other options.

[Signature]
```

**Trigger:** 3 days after Email #1 if no response

**Purpose:** Final attempt, acknowledge potential objections, keep door open

---

## LEAD SCORING ALGORITHM

### Scoring Calculation

```
BASE SCORE: 0 points

Event Type:
+ 8 if Wedding
+ 6 if Corporate
+ 1 if Other

Date Urgency:
+ 2 if event < 60 days (URGENT multiplier)
+ 0 if event 60–180 days (normal)
- 1 if event > 180 days (planning-stage, lower urgency)

Location (Tier):
+ 2 if Tier 1 city (Veldhoven, Best, Nuenen, Geldrop, Waalre, Helmond)
+ 1 if Tier 2 city (Valkenswaard, Son en Breugel, etc.)
+ 0.5 if Tier 3–4 city (outside priority zone)

Guest Count:
+ 1 if 50–300 guests (optimal range)
+ 0 if < 50 (might be too small for our minimum)
+ 1 if > 300 (larger event, more complex, higher fee)

Budget:
+ 5 if budget ≥ €6,000 (VIP tier)
+ 3 if budget €4,000–€6,000 (high-value)
+ 1 if budget €2,000–€4,000 (standard)
+ 0 if budget < €2,000 or "Not sure" (entry-level / uncertain)

Referral Source:
+ 3 if past client
+ 2 if referred by friend
+ 1 if venue / wedding planner recommendation
+ 0 if Google search / organic
- 1 if "just browsing" / no urgency signals

TOTAL SCORE RANGE: -2 to 32 points
```

### Lead Qualification Tiers

**RED → HOT LEAD (Score 20+)**

- Wedding + < 60 days + budget ≥ €4,000 = GET ON PHONE IMMEDIATELY
- Action: Call within 2 hours, not email
- Expected close rate: 40–50%

**ORANGE → WARM LEAD (Score 12–19)**

- Wedding + reasonable budget + some urgency
- Action: Email confidence + phone availability
- Expected close rate: 25–35%

**YELLOW → COOL LEAD (Score 5–11)**

- Could convert but needs nurturing
- Action: Email sequence, value-add content, re-engagement campaigns
- Expected close rate: 10–20%

**BLUE → COLD LEAD (Score < 5)**

- Long timeline, uncertain budget, low intent
- Action: Nurture with content, not direct sales
- Expected close rate: 5–10%

---

## CRM INTEGRATION & TRACKING

### Lead Fields (in CRM)

**Contact Info:**

- First name, Last name, Email, Phone
- Source (Google, referral, etc.)

**Event Details:**

- Event type (Wedding / Corporate)
- Event date
- City / location slug
- Guest count
- Budget range

**Lead Score:**

- Total score (0–32)
- Lead tier (RED/ORANGE/YELLOW/BLUE)
- Recalculated on updates

**Funnel Stage:**

- Form submitted
- Confirmation email sent
- Proposal sent
- Meeting scheduled
- Proposal sent
- Negotiating
- Won (booked)
- Lost (reason)

**Attribution:**

- Lead source
- Referral if applicable
- City page traffic source
- Campaign source (if paid)

---

## SALES PLAYBOOK BY LEAD TIER

### RED LEADS (Score 20+) – Phone-First

**Within 2 hours of submission:**

1. Call [Phone number] - prepare a script
2. Introduce yourself warmly
3. Confirm event details
4. Assess if exact fit
5. If fit: Propose Signature or Premium tier
6. If not exact fit: Offer Essential or refer to partner
7. Book vision call same day if possible

**Call Script:**

```
"Hi [Name], this is [Your Name] with [Company].
I saw your request for a vocalist in [City] on [Date] –
I wanted to make sure we have you scheduled in.
Are you still planning for that date?"

[If yes:]
"Perfect. A few quick things:
• I can definitely be there
• Based on your guest count and budget, I'd recommend our Premium package
• How does a brief vision call work for you – today or tomorrow?"

[If no / hesitant:]
"No worries – weddings are complex. What's changed?
Can I help you figure out a timeline that works?"
```

---

### ORANGE LEADS (Score 12–19) – Email + Phone Option

**Within 4 hours:**

1. Send proposal email (Email #1 template above)
2. Include calendar link for vision call
3. Follow up with Email #2 if no response (24 hours)

**Phone follow-up (optional):**

- If they've viewed email but haven't booked call, try calling
- Keep it brief: "Had a sec to think about your event?"

---

### YELLOW LEADS (Score 5–11) – Content Nurture

**Automated nurture sequence:**

1. Email #1: Proposal + calendar
2. Email #2: Value-add (testimonials, gallery, samples)
3. Email #3: "Still interested?" check-in
4. Add to mailing list for month-to-month content
5. Remarketing ads (Google + Facebook) with helpful content

**Response trigger:** If they click link, calendar, or reply → escalate to ORANGE protocol

---

### BLUE LEADS (Score < 5) – Engagement Nurture

**Long-term nurture:**

1. Add to email list
2. Monthly "You might find this useful" content
3. Remarketing with educational content
4. Annual check-in if still in system

**Purpose:** Some convert 6–12 months later when timeline becomes real

---

## TRACKING & REPORTING

### Weekly Dashboard

**Metrics to track:**

- New leads submitted (by tier: RED/ORANGE/YELLOW/BLUE)
- Response rate (% of leads contacted within 4 hours)
- Booking rate (% of contacted leads setting vision call)
- Close rate (% of vision calls → booked events)
- Average lead score (trend)
- Best-performing cities
- Best-performing lead sources

**Monthly Report:**

```
MONTH 1 FUNNEL REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total leads: 32
├─ RED (20+ score): 3 → 2 booked (67%)
├─ ORANGE (12–19): 12 → 2 booked (17%)
├─ YELLOW (5–11): 14 → 0 booked (0%)
└─ BLUE (< 5): 3 → 0 booked (0%)

TOTAL BOOKED: 4 events
BOOKING RATE: 12.5%

Average score: 11.2 / 32
Best-performing city: Veldhoven (5 leads, 2 booked)
Best-performing source: Google search
Worst-performing tier: YELLOW (needs re-engagement)

OPTIMIZATION RECOMMENDATION:
- Focus RED leads (highest success)
- Improve YELLOW nurture (too low conversion)
- Increase marketing to Veldhoven + Best
```

---

## CONCLUSION

**This funnel is designed to:**

1. ✅ **Capture high-quality leads** (form captures right info)
2. ✅ **Pre-qualify systematically** (lead scoring, tier assignment)
3. ✅ **Never lose a lead** (automated nurture, multiple touchpoints)
4. ✅ **Respect people's time** (fast response, clear next steps)
5. ✅ **Scale your sales process** (systematic, repeatable, reliable)

The funnel converts 12–20% of leads to bookings (industry standard: 5–10%). Continuous optimization will improve this over time.
