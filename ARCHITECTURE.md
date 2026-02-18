# Architecture Documentation

## System Overview

This is a **production-grade Next.js application** designed as a professional website for a local vocalist. The architecture prioritizes:

1. **Simplicity** - Easy content management without code changes
2. **Performance** - Lighthouse 90+, Core Web Vitals optimized
3. **SEO** - Comprehensive metadata, schema, sitemap
4. **Conversion** - Clear CTAs, contact form, booking integration
5. **Security** - Headers, CORS, input validation

## Technology Stack

### Frontend Framework

- **Next.js 14** with App Router - Server-first rendering, optimal performance
- **React 18** - UI component library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling, dark theme

### Content Management

- **JSON files** - Simple, version-controlled data storage
- **MDX** - Markdown with embedded React for blog posts
- **File-based** - No database required initially

### Backend / API

- **Next.js API Routes** - Serverless functions for contact form
- **Nodemailer** - SMTP integration (configured but not required initially)

### Deployment

- **Vercel** - Primary deployment platform (Next.js native)
- **Docker** - Self-hosted fallback option
- **GitHub Actions** - CI/CD pipeline

### Testing

- **Vitest** - Unit testing
- **Playwright** - E2E testing
- **ESLint** - Code quality
- **Prettier** - Code formatting

## Key Architectural Decisions

### 1. File-Based Content, Not Database

**Decision**: Store services, events, testimonials, FAQ in JSON files in `/src/content/`

**Rationale**:

- ✅ **Simple to maintain** - Edit files directly
- ✅ **Version controlled** - Track changes in Git
- ✅ **Host anywhere** - No database setup needed
- ✅ **Fast to deploy** - All content bundled with app
- ⚠️ **Trade-off**: Not suitable for thousands of items

**Alternative Considered**: Database (PostgreSQL/MongoDB)

- Would support more complex features (user accounts, payments)
- Adds deployment complexity
- Unnecessary for current scope

**Future Migration Path**: If content scales, migrate JSON → Database without changing UI

### 2. MDX for Blog Posts

**Decision**: Use MDX (Markdown + JSX) for blog posts

**Rationale**:

- ✅ **Readable format** - Write content easily
- ✅ **Flexible** - Embed React components if needed
- ✅ **Version control** - Git history of all posts
- ✅ **No admin panel needed** - Just edit files

**Implementation**:

- Files in `src/content/blog/*.mdx`
- Metadata in exported object
- Simple parsing in `lib/content.ts`
- Renders at `/blog/[slug]`

### 3. Static Generation with ISR

**Decision**: Use Static Site Generation (SSG) + Incremental Static Regeneration (ISR)

```
- Homepage: pre-built at build time, revalidate every 1 hour
- Service pages: static params generated, revalidate every 24 hours
- Blog posts: dynamic routes with fallback, revalidate on content changes
```

**Rationale**:

- ✅ **Fastest possible performance** - Pre-rendered HTML
- ✅ **Cheap to host** - Minimal server computation
- ✅ **SEO friendly** - Static HTML crawlable by bots
- ⚠️ **Trade-off**: Need to rebuild for real-time updates

**Fallback**: If real-time updates needed, switch to dynamic rendering

### 4. Tailwind CSS with Dark Theme

**Decision**: Use Tailwind CSS with custom dark theme

**Design**:

```
Primary colors: Dark grays (primary-900: #1c1917 to primary-50: #fafaf9)
Accent color: Burnt orange/gold (accent-500: #ea580c)
Fonts: Inter (sans) + Merriweather (serif)
```

**Rationale**:

- ✅ **Elegant, professional look** - Dark theme is premium
- ✅ **Fast to style** - Tailwind utility classes
- ✅ **Maintainable** - Centralized Tailwind config
- ✅ **Customizable** - Easy color/spacing adjustments

### 5. Component-Driven Architecture

**Structure**:

```
components/
├── common/          # Layout: Navbar, Footer, CTAButton
├── home/           # Homepage sections
├── services/       # Service cards, details
├── events/         # Event listings
├── testimonials/   # Review cards
├── blog/           # Blog listing, navigation
├── media/          # Gallery
└── forms/          # Contact form
```

**Benefits**:

- ✅ **Reusable** - Use components across pages
- ✅ **Testable** - Smaller, focused units
- ✅ **Scalable** - Easy to add new features

### 6. Metadata-Driven SEO

**Approach**: Dynamic metadata for every page

```typescript
// Example: Service page automatically gets metadata from service.json
export async function generateMetadata({ params }) {
  const service = await getServiceBySlug(params.slug);
  return {
    title: service.title,
    description: service.longDescription,
    // ... OG tags, structured data
  };
}
```

**Benefits**:

- ✅ **One source of truth** - Metadata comes from content
- ✅ **Automatic sitemap** - Generated from file structure
- ✅ **Schema.org compliance** - Automatic JSON-LD

### 7. Minimal API Surface

**Current API Routes**:

- `POST /api/contact` - Contact form submission
- `GET /api/og/image` - Dynamic OG images (optional)

**Rationale**:

- ✅ **Security** - Minimal attack surface
- ✅ **Simplicity** - Just what's needed
- ✅ **Stateless** - Easy to scale

**Future**: Could add payment processing, user accounts, etc.

### 8. Security Headers via Middleware

**Implemented Headers**:

```
Content-Security-Policy - Script/style source restrictions
X-Content-Type-Options: nosniff - Prevent MIME sniffing
X-Frame-Options: SAMEORIGIN - Prevent clickjacking
X-XSS-Protection: 1; mode=block - Legacy XSS protection
Referrer-Policy: strict-origin-when-cross-origin - Privacy
Permissions-Policy: Disable geolocation, camera, mic
HSTS: Enforce HTTPS (production only)
```

## Data Flow

### Content to Display

```
User visits /services/weddings
    ↓
App checks if static page exists (from build time)
    ↓
If found, serves pre-rendered HTML (fastest)
    ↓
If not found, falls back to dynamic generation
    ↓
Fetches service from services.json
    ↓
Renders ServicePage component
    ↓
Sets metadata dynamically
```

### Blog Post Loading

```
User visits /blog/my-post
    ↓
App checks static params (pre-generated slugs)
    ↓
If found, serves pre-rendered page
    ↓
Otherwise, trigger ISR (fallback mode)
    ↓
Load my-post.mdx from disk
    ↓
Parse metadata and content
    ↓
Render blog layout + formatted content
```

### Contact Form Submission

```
User submits contact form
    ↓
Client-side validation (React Hook Form)
    ↓
POST /api/contact with form data
    ↓
Server-side validation
    ↓
Send email via Nodemailer (configured)
    ↓
Return success/error response
    ↓
Show toast message to user
```

## Performance Optimizations

### Image Optimization

- Next.js Image component for responsive images
- Automatic WebP/AVIF conversion
- Lazy loading, LQIP (Low Quality Image Placeholder)

### Code Splitting

- Next.js automatic code splitting per page
- Dynamic imports for heavy components

### Caching Strategy

```
Static assets (images, fonts): 1 year CDN cache
HTML pages: Revalidate hourly (ISR)
Dynamic pages: On-demand fallback with revalidation
```

### Font Loading

- Web fonts optimized with `next/font`
- Prevents layout shift (CLS improvement)

### CSS Optimization

- Tailwind purges unused CSS
- Resulting bundle ~40KB uncompressed

## Deployment Architecture

### Vercel (Recommended)

```
GitHub Push
    ↓
GitHub Actions: Lint, Test, Build
    ↓
On 'main' branch: Auto-deploy to Vercel
    ↓
Vercel:
  - Builds Next.js app
  - Deploys to CDN edge network
  - Automatic HTTPS, bandwidth, metrics
    ↓
User requests → Edge location (geographically close)
```

### Docker (Self-Hosted)

```
Build Docker image (multi-stage, optimized)
    ↓
Push to registry (Docker Hub, ECR, etc.)
    ↓
Deploy container to hosting (AWS, DigitalOcean, etc.)
    ↓
Nginx reverse proxy (optional) for SSL, compression
    ↓
Container exposes :3000
```

## Monitoring & Observability

### Current Setup

- GitHub Actions logs for CI/CD
- Vercel dashboard for deployment metrics
- Error logs in server console

### Future Improvements

- Sentry for error tracking
- LogRocket for session replay
- Datadog/New Relic for APM
- Google Analytics for user behavior

## Scaling Considerations

### Current Capacity

- ✅ Works great for 1-100 pages
- ✅ Supports 1000s of blog posts (with pagination)
- ✅ No database, so minimal infrastructure

### When to Refactor

**Add a Database When**:

- Need user accounts or authentication
- Want real-time content updates
- Expect high-frequency content changes
- Need complex querying/filtering

**Add a CMS When**:

- Non-technical users need to manage content
- Need rich media management
- Want workflow/approval process

**Add Message Queue When**:

- Email sending becomes bottleneck
- Need async processing
- Multiple services to coordinate

## Security Best Practices Implemented

✅ **Input Validation** - All form inputs validated
✅ **CORS Protection** - API routes check origin
✅ **Security Headers** - Via Next.js middleware
✅ **HTTPS Only** - Enforced in production
✅ **CSP Headers** - Restrict script sources
✅ **Env Secrets** - Sensitive data in environment
✅ **Dependency Scanning** - Dependabot enabled
✅ **Type Safety** - TypeScript prevents runtime errors

## Trade-offs Summary

| Feature    | Choice            | Why                                  |
| ---------- | ----------------- | ------------------------------------ |
| Content    | JSON/MDX          | Simple, version control, no database |
| Rendering  | SSG+ISR           | Performance, cost, SEO               |
| Styling    | Tailwind          | Speed, maintainability, dark theme   |
| Database   | None              | Overhead not justified initially     |
| CMS        | None              | Edit files directly for now          |
| Auth       | None              | No user accounts needed              |
| Testing    | Vitest+Playwright | Fast, covers unit and E2E            |
| Deployment | Vercel            | Native support, zero-config          |

---

**Document Version**: 1.0  
**Last Updated**: February 2024  
**Architecture Status**: Stable and production-ready
