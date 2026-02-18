# 🚀 Go-Live Checklist

Complete this checklist before launching your website to production.

## 📋 Pre-Launch Verification (1-2 weeks before)

### Content Configuration

- [ ] Update singer name in `src/lib/constants.ts` (SINGER_INFO)
- [ ] Update actual phone number (not placeholder)
- [ ] Update email address for contact form
- [ ] Add social media links (Instagram, Facebook, YouTube)
- [ ] Write or customize "About Me" section
- [ ] Location set correctly in constants
- [ ] Service descriptions reflect actual offerings
- [ ] Prices updated or removed if not fixed

### Content Creation

- [ ] Add 5+ blog posts (included: 5 sample posts)
- [ ] Add upcoming events (included: 5 sample events)
- [ ] Add testimonials from real clients (included: 5 samples)
- [ ] Review and update FAQ section
- [ ] Add professional photos (replace emoji placeholders)
  - [ ] Hero image for homepage
  - [ ] About page photo
  - [ ] Portfolio/media gallery images
  - [ ] Email signature image

### Brand Assets

- [ ] Professional logo/branding (if applicable)
- [ ] OG image for social sharing (`public/og-image.jpg`)
- [ ] Favicon updated (`public/favicon.ico`)
- [ ] Brand colors verified in Tailwind config
- [ ] Font selections finalized (currently Inter + Merriweather)

## 🔐 Security Configuration

### Environment Setup

- [ ] Create `.env.local` with production values
- [ ] Verify `NEXT_PUBLIC_SITE_URL` is correct production URL
- [ ] SMTP credentials configured and tested:
  - [ ] `SMTP_HOST` set correctly
  - [ ] `SMTP_PORT` verified (usually 587)
  - [ ] `SMTP_USER` (email address)
  - [ ] `SMTP_PASSWORD` (app-specific password for Gmail)
  - [ ] `CONTACT_EMAIL_TO` is monitoring account
  - [ ] `CONTACT_EMAIL_FROM` is replyable address

### Security Headers

- [ ] Middleware.ts security headers enabled
- [ ] CSP (Content Security Policy) reviewed and adjusted
- [ ] HSTS (Strict-Transport-Security) enabled for production
- [ ] CORS origins configured correctly
- [ ] No sensitive data in client-side code

### Third-Party Services

- [ ] SSL/HTTPS certificate configured (Vercel does this)
- [ ] Domain SSL certificate valid (expires date checked)
- [ ] Cloudflare or CDN configured (optional)
- [ ] DNS records pointing to correct server

## 🌐 SEO & Discoverability

### Metadata Completeness

- [ ] Homepage meta description updated
- [ ] All service pages have unique descriptions
- [ ] Blog posts have SEO-friendly titles
- [ ] OG tags populated with images
- [ ] Twitter Card tags added

### Technical SEO

- [ ] `sitemap.xml` generating correctly:
  ```
  curl https://yoursite.com/sitemap.xml
  ```
- [ ] `robots.txt` allows search engines:
  ```
  curl https://yoursite.com/robots.txt
  ```
- [ ] Structured data (Schema.org) included:
  - [ ] Person schema on homepage
  - [ ] LocalBusiness schema present
  - [ ] Event schema for performances
  - [ ] FAQ schema implemented

### Search Console Setup

- [ ] Google Search Console verified (use HTML tag)
- [ ] Bing Webmaster Tools added
- [ ] Sitemap submitted to search engines
- [ ] Mobile-friendly test passed

### Local SEO

- [ ] Business appears in Google Business Profile
- [ ] Google Business Profile linked from site
- [ ] Local keywords in title/description
- [ ] Service area cities mentioned

## 🎨 Quality Assurance

### Functionality Testing

- [ ] Homepage loads without errors
- [ ] All navigation links work
- [ ] All pages load within 3 seconds
- [ ] Contact form submits successfully
- [ ] Contact form receives email confirmation
- [ ] Blog posts render correctly with formatting
- [ ] Event dates display correctly
- [ ] Testimonials show correctly

### Responsive Design

- [ ] Mobile view looks good (test on real device):
  - [ ] iPhone 12/13
  - [ ] Android (Samsung Galaxy)
  - [ ] Tablet (iPad)

- [ ] Desktop view is optimized (test on 1920x1080)
- [ ] Hamburger menu works on mobile
- [ ] All buttons clickable on touchscreen
- [ ] Images don't overflow on small screens

### Browser Compatibility

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (Safari iOS, Chrome Android)

### Performance Testing

- [ ] Google Lighthouse score 90+ (Desktop)
- [ ] Google Lighthouse score 85+ (Mobile)
- [ ] Core Web Vitals passed:
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] PageSpeed Insights recommendations addressed
- [ ] Time to First Byte (TTFB) < 600ms

### Accessibility (a11y)

- [ ] WAVE accessibility checker passes
- [ ] Axe DevTools scan passes
- [ ] Keyboard navigation works (Tab through pages)
- [ ] Color contrast meets WCAG AA standards
- [ ] Images have alt text
- [ ] Form labels associated with inputs
- [ ] Focus indicators visible

## 🚀 Deployment Ready

### Build & Deploy

- [ ] Local build succeeds: `npm run build`
- [ ] No build warnings/errors
- [ ] Test build runs: `npm start`
- [ ] GitHub Actions CI/CD pipeline passes
- [ ] All tests passing: `npm run test`

### Vercel Configuration (if using Vercel)

- [ ] GitHub repository connected to Vercel
- [ ] Environment variables set in Vercel dashboard
- [ ] Build settings correct:
  - [ ] Build Command: `npm run build`
  - [ ] Output Directory: `.next`
  - [ ] Install Command: `npm ci`
- [ ] Production domain configured
- [ ] Auto-deploy on push enabled
- [ ] Preview deployments working

### Docker Configuration (if self-hosting)

- [ ] Docker image builds successfully: `docker build -t singer-website .`
- [ ] Container runs: `docker run -p 3000:3000 singer-website`
- [ ] docker-compose.yml tested locally
- [ ] Container environment variables set
- [ ] Volume mounts configured correctly

### DNS & Domain

- [ ] Domain registered and active
- [ ] DNS records point to hosting provider:
  - [ ] Vercel: CNAME to vercel.app domain
  - [ ] Self-hosted: A record to server IP
- [ ] SSL certificate valid (HTTPS enabled)
- [ ] Redirect www → non-www (or vice versa, consistent)

## 📊 Monitoring & Analytics Setup

### Error Tracking

- [ ] Sentry configured (optional but recommended)
- [ ] Error alerting enabled
- [ ] Error log accessible

### Performance Monitoring

- [ ] Google Analytics configured (optional):
  - [ ] Tracking code added: `NEXT_PUBLIC_GA_ID`
  - [ ] Page views tracking working
  - [ ] Events tracking configured
- [ ] Vercel Analytics enabled
- [ ] Core Web Vitals monitoring active

### Uptime Monitoring (if critical)

- [ ] Uptime Robot or similar configured
- [ ] Alert email configured (if down)
- [ ] Monthly uptime review scheduled

## 🎯 Business Setup

### Contact System

- [ ] Email account receives contact form submissions
- [ ] Email forwarding set up (if needed)
- [ ] Auto-response email template ready
- [ ] Support email address defined
- [ ] Phone number voicemail configured

### Booking System (Optional Future)

- [ ] Calendar/booking system identified (Calendly, etc.)
- [ ] Booking link added to CTA buttons
- [ ] Availability calendar configured
- [ ] Reminder emails enabled

### Social Media Integration

- [ ] Social links added to footer
- [ ] Share buttons configured (optional)
- [ ] Instagram/Facebook links verified
- [ ] Social handles consistent across platforms

### Terms & Privacy (Legal)

- [ ] Privacy Policy created
- [ ] Terms of Service created
- [ ] Links added to footer
- [ ] Legal review completed (if required)

## 🔄 Post-Launch Tasks (Day 1)

### Immediately After Go-Live

- [ ] Site loads correctly (check from multiple locations)
- [ ] Contact form receives test submission
- [ ] Email notification sends
- [ ] Monitor error logs for issues
- [ ] Check Vercel/hosting dashboard for errors

### First Week Monitoring

- [ ] Monitor contact form submissions (daily)
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor Core Web Vitals (weekly)
- [ ] Respond to initial contact inquiries quickly
- [ ] Fix any reported bugs immediately

### First Month Tasks

- [ ] Get website indexed by search engines
- [ ] Add to Google Business Profile
- [ ] Collect and add real testimonials
- [ ] Monitor analytics for popular pages
- [ ] Update blog with new posts
- [ ] Request link exchanges with local businesses

## 📚 Documentation & Handoff

### Documentation Complete

- [ ] README.md reviewed and updated
- [ ] ARCHITECTURE.md reviewed
- [ ] RUNBOOK.md bookmarked and understood
- [ ] GO_LIVE_CHECKLIST.md (this doc) completed
- [ ] Team trained on content updates

### Backup & Disaster Recovery

- [ ] GitHub repository backed up
- [ ] Database backups configured (if applicable)
- [ ] Disaster recovery plan documented
- [ ] Emergency contact procedure defined

### Maintenance Schedule

- [ ] Monthly content updates scheduled
- [ ] Monthly performance review date set
- [ ] Security update schedule defined
- [ ] Blog posting schedule defined

## ✅ Final Sign-Off

Before launching, ensure:

- [ ] **Technical Lead**: Build, deploy, and monitoring verified
- [ ] **Content Manager**: All content reviewed and finalized
- [ ] **Stakeholder**: Design, messaging, and brand approved
- [ ] **QA**: Full testing completed and passed

### Launch Approval

**Project Name**: Professional Singer Website  
**Target URL**: https://yoursite.com  
**Launch Date**: ******\_\_\_******  
**Approved by**: ******\_\_\_******  
**Date**: ******\_\_\_******

---

## 🆘 If Issues Arise Before Launch

**Go-live not ready?** Don't panic. Common delays:

1. **Waiting for content** → Publish with sample content, update later
2. **Email not working** → Test SMTP credentials, use fallback
3. **Performance issues** → Often Cache or build problems, clear and rebuild
4. **Missing images** → Use high-quality placeholders temporarily
5. **SEO concerns** → Post-launch optimization is fine, focus on basics

**Remember**: Perfect is the enemy of good. Launch with 80% perfection, iterate after.

---

**Checklist Version**: 1.0  
**Last Updated**: February 2024  
**Status**: Ready for use
