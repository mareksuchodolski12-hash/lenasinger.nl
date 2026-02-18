# LEAD QUALIFICATION FUNNEL

## 1. MULTI-STEP BOOKING FORM ARCHITECTURE

### Design Philosophy:

**Traditional Single-Page Form Problems:**
❌ Overwhelming (too many fields at once)
❌ High abandonment (people don't know what to expect)
❌ No qualification (capture tire-kickers)
❌ Can't adapt messaging based on answers
❌ No psychological progression (commitment building)

**Multi-Step Form Benefits:**
✅ Progressive disclosure (one question at a time)
✅ Psychological commitment (each step = more invested)
✅ Data insights (see where people drop off)
✅ Adaptive experience (tailor questions based on answers)
✅ Lower abandonment (feels less overwhelming)
✅ Smart qualification (filter out bad-fit leads early)

---

## 2. FIVE-STEP FORM FLOW

### STEP 1: EVENT TYPE SELECTION (Qualification Gate)

**Question:** "What brings you here?"
**Options (Radio Buttons):**

- [ ] Wedding ceremony & reception
- [ ] Corporate event or private party
- [ ] Cocktail hour / ceremony only
- [ ] Vocal coaching lessons
- [ ] Other (specify)

**Qualification Logic:**

- Vocal coaching → route to coaching funnel (different conversion path)
- Wedding → route to wedding funnel (highest value)
- Corporate → route to corporate funnel (recurring potential)
- Each gets customized messaging moving forward

**Psychology:**

- Let them self-identify first
- Signals you understand different needs
- Builds toward commitment (they've declared intention)

**Error Handling:**

- Required field (can't proceed without selecting)
- Shows error: "Please tell us what you're planning"

---

### STEP 2: EVENT DATE (Urgency + Scarcity)

**Question:** "When is your event?"
**Input Type:** Date picker calendar

**Follow-up Logic:**
IF date is within 60 days:

- Show: "⚠️ Short Timeline Alert: We have limited availability for events within 60 days. Let's talk quickly!"
- Adjust messaging tone to urgency
- Copy: "Availability is limited — let's confirm your date immediately"

IF date is 6+ months away:

- Show: "Great! We have excellent availability for [Month Year]"
- Tone: Relaxed, planning-focused

**Qualification Rule:**

- If date is >18 months away OR past date → warning message
- Past date: "Did you mean [date from previous year]?"

**Psychology:**

- Date picker feels interactive/modern
- Shows calendar preference visual
- Urgency messaging triggered by timing
- Start building scarcity perception

**Validation:**

- Must be within 7-365 days
- Required field

---

### STEP 3: LOCATION (Geo-Targeting + Service Radius)

**Question:** "Where will your event be?"
**Input Type:** Autocomplete/select dropdown

**Smart Autocomplete Logic:**

1. Show user's current city (geolocation)
2. As they type, show suggestions:
   - Exact match first
   - Cities within 40 km radius
   - Sorted by distance
3. Show distance if outside primary service area

**Data Structure:**

```json
{
  "city": "City Name",
  "slug": "city-name",
  "distance_km": 12,
  "type": "major_city" | "town" | "venue_hub",
  "service_available": true
}
```

**Qualification Rule:**

- If location is within 40 km radius: Green light ✅ "We service this area"
- If location is outside 40 km: Yellow warning ⚠️ "Outside standard service area. Please ask about availability."
- Don't reject, but flag it

**Psychology:**

- Builds toward local positioning
- Autocomplete is modern/convenient
- Showing distance = transparency
- Signals you're local (not traveling national)

**Copy Variations:**

- Within radius: "Perfect! We regularly perform in [City]."
- Outside radius: "We primarily service [Region]. Let's discuss if [City] is possible."

---

### STEP 4: GUEST COUNT + VENUE TYPE (Budget Indicator)

**Question 1:** "How many guests are you expecting?"
**Input:** Number input or slider (25-500+)

**Question 2:** "What type of venue?"
**Options (Dropdown):**

- [ ] Intimate home / backyard (25-50 people)
- [ ] Small event space (50-100 people)
- [ ] Restaurant / lounge (100-200)
- [ ] Banquet hall / hotel (200-400)
- [ ] Large venue / outdoor (400+)
- [ ] Not sure yet

**Qualification Logic:**

- 25-50 guests = intimate (might budget less, but premium quality seekers)
- 100-200 guests = standard wedding (core market, mid-to-premium budget)
- 200+ guests = large event (either high-budget wedding or corporate, facilities needed)
- Venue type signals budget capability

**Psychology:**

- Guest count anchors budget expectations
- Venue type shows experience/sophistication
- Moving forward = more committed

**Copy Variations:**

- Intimate: "Perfect for a personalized, intimate experience"
- Standard: "Our most common booking size — great for full ceremony, cocktail, and reception"
- Large: "Exciting! We'll need to coordinate with your venue's technical team"

---

### STEP 5: BUDGET RANGE + CONTACT INFO (Disqualification + Close)

**Question 1:** "What's your entertainment budget range?"
**Options (Radio Buttons):**

- [ ] Under $1,000 (budget-conscious)
- [ ] $1,000-2,000 (starter tier)
- [ ] $2,000-4,000 (middle tier)
- [ ] $4,000-7,000 (premium)
- [ ] $7,000+ (luxury)
- [ ] Not sure / flexible

**Budget Qualification Matrix:**
| Budget | Event Type | Package | Recommendation |
|--------|-----------|---------|-----------------|
| <$1,000 | Wedding | Ceremony only | $1,497 cocktail hour |
| $1,000-2,000 | Wedding | Cocktail + ceremony | $1,497 cocktail |
| $2,000-4,000 | Wedding | Full event | $2,995 full |
| $4,000-7,000 | Wedding | Luxury + extras | $4,995 luxury |
| $7,000+ | Wedding | Full band | $5,500+ band |

**Disqualification Logic:**

- IF budget <$1,000 AND event is wedding: Show "Our packages start at $1,497. Interested in learning more?"
- Don't reject, but set expectations

**Question 2:** Contact Information
**Required Fields:**

- Name (text)
- Email (email validation)
- Phone (tel with formatting)
- Timeframe to hear back: (options)
  - [ ] As soon as possible
  - [ ] Within 24 hours
  - [ ] Within 48 hours

**Optional Field:**

- Additional notes / questions (textarea)

**Psychology:**

- Budget conversation comes when they're invested (Step 5)
- "Not sure/flexible" respects budget flexibility
- Contact info captured = lead qualified
- Timeframe preference = urgency indicator

---

## 3. FORM DISPLAY & UX CONSIDERATIONS

### Progressive Disclosure:

```
Step 1: Event type? (95% complete button)
Step 2: When? (80% complete button)
Step 3: Where? (65% complete button)
Step 4: How many? (40% complete button)
Step 5: Budget + Contact (10% complete button)
SUBMIT
```

### Mobile Optimization:

- Full-width inputs
- Large tap targets (buttons 44px minimum)
- Date picker = native mobile calendar
- Autocomplete = native search
- Number inputs = native spinners

### Progress Messaging:

- "Step X of 5"
- Progress bar visual
- "Almost there!" at step 4+
- Green checkmark on completed steps if going back

### Visual Feedback:

- Selected option highlighted (green background)
- Required fields marked with asterisk
- Helpful text under each question
- Error messages in red, helpful tone

---

## 4. CONDITIONAL LOGIC & SMART ROUTING

### If Event Type = Vocal Coaching:

- Skip to coaching-specific questions:
  - "What's your singing goal?" (Hobby / Audition / Performance)
  - "Experience level?" (Beginner / Intermediate / Advanced)
  - "Preferred schedule?" (Weekly / Biweekly / Monthly)
  - Show: "First lesson consultation is FREE"
- Route to coaching-focused response

### If Event Type = Wedding:

- Show all 5 steps
- Final message: "Perfect! We'll send you a free consultation package"

### If Event Type = Corporate:

- Modify Step 3 to ask: "Is this a recurring event?"
- Show: "Many companies book us for multiple events"
- Offer discount for 3+ events /year

### If Date is within 60 days:

- Emphasize urgency
- Suggest scheduling call immediately
- Message: "Let's confirm availability NOW"

### If Budget <$1,000:

- Show: "Our packages start at $1,200. Many couples do cocktail hour only for budget reasons. Let's explore options that fit."
- Don't reject, but manage expectations

---

## 5. URGENCY & SCARCITY MESSAGING

### Implemented Throughout Form:

**Urgency Triggers:**

- Date within 60 days: "⚠️ Short timeline — limited availability"
- Date within 30 days: "🚨 Very limited. Call us immediately: [PHONE]"
- Any form submission: "We typically book 2-3 months out. Let's secure your date."

**Scarcity Messaging:**

- "We book 2-4 weddings per weekend during peak season"
- "Only [X] dates left in [Month]"
- "Early booking discount: 10% off if confirmed this month"

**Social Proof:**

- "Trusted by [X]+ couples in [Region]"
- "4.9/5 rating from [X] reviews"

---

## 6. THANK YOU PAGE & AUTORESPONSE LOGIC

### Immediate Post-Submission (Thank You Page):

**Visible Message:**
"✅ Got it! Here's what happens next..."

**Next Steps:**

1. "We'll call/email within [24] hours to confirm availability"
2. "You'll receive a consultation package with pricing details"
3. "Let's discuss your vision and create unforgettable entertainment"

**CTA:**

- "Schedule a Call Now" (Calendly link)
- "Send me info via email" (pre-filled)
- "Not urgent — just checking availability" (lowers pressure)

### Automated Email Response:

**Subject:** "You're on! Let's Plan Your [Event]"

**Body:**

1. Thank you for choosing us
2. What to expect from consultation
3. Pricing tiers overview (brief)
4. "Book a call at [Calendly link]"
5. FAQ link
6. Phone number for urgent

**Send to:** Email provided in form

---

## 7. BACKEND LEAD SCORING

### Qualify leads based on answers:

**High-Value Leads (Score 90+):**

- Event type: Wedding
- Date: 60-180 days out (optimal planning window)
- Location: Within 20 km (local)
- Guest count: 75-200 (standard wedding)
- Budget: $2,000-5,000 (core pricing tier)
- **Action:** Call within 4 hours

**Medium-Value Leads (Score 60-89):**

- Corporate events
- Coaching inquiries
- Date: 30-60 days out (some urgency)
- Budget: $1,000-2,000 (lower tier)
- **Action:** Email within 24 hours + soft phone call

**Low-Value Leads (Score <60):**

- Date way out (12+ months): May not actually book
- Budget <$1,000: Unlikely to convert at our prices
- Outside service radius: Requires special handling
- **Action:** Nurture via email, no immediate call pressure

**Automatic Disqualification:**

- Explicitly looking for "very cheap DJ" in notes
- Budget <$500
- Date in past
- Location >100 km away

---

## 8. FORM IMPLEMENTATION CHECKLIST

### Frontend:

- [ ] Multi-step form component built
- [ ] Progress bar visual
- [ ] Conditional logic routing complete
- [ ] Mobile responsive tested
- [ ] Form validation (required fields)
- [ ] Accessibility (ARIA labels, keyboard nav)
- [ ] Loading state during submission

### Backend:

- [ ] Form submission API endpoint
- [ ] Database storage for leads
- [ ] Lead scoring algorithm
- [ ] Autoresponder email trigger
- [ ] SMS notification to admin (optional)
- [ ] Error handling & logging

### Integration:

- [ ] CRM integration (if applicable)
- [ ] Email automation setup
- [ ] Calendar sync (Calendly)
- [ ] Conversion tracking (GA4 events)
- [ ] Slack notification of new leads

### Testing:

- [ ] Test all conditional logic paths
- [ ] Mobile device testing
- [ ] Email delivery verification
- [ ] Lead database population
- [ ] Calendar sync working
- [ ] Thank you page displays correctly

---

## 9. SAMPLE FORM RESPONSES TO DIFFERENT INPUTS

### High-Quality Lead (Fast Track):

```
Event Type: Wedding
Date: July 15, 2026 (150 days out)
Location: Nashville (5 km from primary)
Guests: 120
Venue: Banquet hall (standard)
Budget: $3,500-4,000 (premium tier)
Contact: Jane Smith, jane@email.com

Score: 95/100
Recommended Package: Full Wedding Premium
Next Step: Schedule call within 4 hours
```

### Coaching Inquiry:

```
Event Type: Vocal Coaching
Date: ASAP (ongoing)
Singing Goal: Prepare for auditions
Experience: Intermediate
Schedule: Weekly
Contact: Michael, michael@email.com

Score: 70/100 (different funnel)
Recommended: Free consultation call
Next Step: Email coaching details + Calendly link
```

### Budget-Conscious Wedding (Opportunity):

```
Event Type: Wedding
Date: September 2026 (200 days out)
Location: Outside 40 km radius
Budget: $800-1000
Contact: Sarah, sarah@email.com

Score: 35/100 (requires qualification)
Issue: Budget below minimum
Next Step: Email with "cocktail hour only" option ($1,497)
Message: "Let's explore options that fit your vision and budget"
```

---

## 10. EXPECTED CONVERSION FLOW

```
Visitor lands on contact/booking page
    ↓
Step 1: Selects event type (commitment building)
    ↓
Steps 2-4: Provides event details
    - Small mental commitments at each step
    - Personalized messaging kicks in
    ↓
Step 5: Budget conversation
    - Already invested 2+ minutes
    - Likely to be honest about budget
    ↓
Submit contact info
    ↓
Immediate thank you page
    ↓
Autoresponse email within 5 min
    ↓
First human contact within 24 hours
    ↓
Scheduled consultation call
    ↓
Package recommendation based on answers
    ↓
Proposal delivery
    ↓
Booking confirmation
```

**Expected Conversion Metrics:**

- Form start to completion: 70% (progressive disclosure improves this)
- Completion to consultation call scheduled: 60% (high value)
- Consultation call to booking: 40-50% (depends on positioning)
- **Overall: Contact page → Booking: 20-25% conversion**

This multi-step approach qualifies leads while building psychological commitment and providing personalized experience.
