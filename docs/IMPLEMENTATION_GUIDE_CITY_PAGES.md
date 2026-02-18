# IMPLEMENTATION GUIDE: Dynamic City Pages & Local SEO Routes

## Eindhoven 40 km Radius Domination

**Document Version:** 1.0  
**Date:** February 18, 2024  
**Status:** Ready for Implementation  
**Priority:** Phase 3, Weeks 1–2

---

## OVERVIEW

This guide implements dynamic city pages for local SEO domination:

- ✅ **Dynamic routes:** `/locations/[city]/wedding-singer` and `/locations/[city]/corporate-event-singer`
- ✅ **23 city pages** generated from `data/cities.json`
- ✅ **Geo-optimized content** with realistic local details
- ✅ **Automatic sitemap generation** for all city pages
- ✅ **Structured data** (LocalBusiness + Breadcrumb JSON-LD)
- ✅ **Internal linking** to main services and other city pages
- ✅ **Unique H1 + copy** to avoid duplication penalties

---

## DIRECTORY STRUCTURE

```
src/app/locations/
├── [city]/
│   ├── wedding-singer/
│   │   └── page.tsx
│   ├── corporate-event-singer/
│   │   └── page.tsx
│   └── layout.tsx (shared city layout)
├── CITIES_MAPPER.ts (utility to load + map cities.json)
└── CityPageTemplate.tsx (reusable component)

data/
└── cities.json (already created with 23 cities)

lib/
├── schema-generator.ts (LocalBusiness + Breadcrumb JSON-LD)
└── seo-utils.ts (meta tags, canonical URLs)
```

---

## QUICK START IMPLEMENTATION

**Phase 3, Week 1 Actions:**

1. Create `src/app/locations/` directory structure
2. Add CITIES_MAPPER.ts utility
3. Create schema generator
4. Deploy wedding-singer template to Tier 1 cities (6 cities)
5. Test and iterate

**Estimated Time:** 4–6 hours for initial setup

---

## ROLLOUT SCHEDULE

**Week 1:**

- Deploy Tier 1 cities only (6 cities): Veldhoven, Best, Nuenen, Geldrop, Waalre, Helmond
- Test thoroughly, submit to Google Search Console

**Week 2:**

- Deploy Tier 2 cities (7 cities), add internal linking

**Week 3–4:**

- Deploy remaining cities (Tier 3 + 4), begin blog content

**Key Metrics to Track:**

- Click-through rate (CTR) from search
- Average position (should improve weekly)
- Conversion rate (leads from city pages)
- Most converting locations (prioritize future content)

---

## SUCCESS METRICS

- **Month 1:** 3–5 city pages ranking top 10 for local keywords
- **Month 3:** 15+ city pages on first page of Google
- **Month 6:** Eindhoven region dominance - multiple positions per city (wedding + corporate)
