# Versioning Strategy

This document outlines the versioning and release strategy for the website.

## Semantic Versioning

This project follows [Semantic Versioning 2.0.0](https://semver.org/).

**Version Format**: `MAJOR.MINOR.PATCH-PRERELEASE+BUILD`

- **MAJOR**: Breaking changes or major feature releases
- **MINOR**: New backwards-compatible features
- **PATCH**: Bug fixes and small improvements
- **PRERELEASE**: Pre-release versions (alpha, beta, rc)
- **BUILD**: Build metadata for internal tracking

### Examples

- `1.0.0` - Initial stable release
- `1.1.0` - New features added (backward compatible)
- `1.1.1` - Bug fixes
- `1.2.0-beta.1` - Beta version of v1.2
- `2.0.0` - Major overhaul with breaking changes

## Release Timeline

### Development Phase

- Code → Feature branch (`feature/*`)
- Testing → `develop` branch
- Release candidate → `rc/*` branch
- **Prerelease**: `X.Y.Z-rc.1`, `rc.2`, etc.

### Staging Phase

- Code merged to `staging` branch
- User acceptance testing
- Final validation
- **Prerelease**: `X.Y.Z-beta.1`, `beta.2`, etc.

### Production Phase

- Merge to `main` branch (production-ready)
- Tag with version: `vX.Y.Z`
- Deploy to production
- **Release**: `X.Y.Z` (stable)

## When to Increment Versions

### MAJOR Version (X.0.0)

When you make incompatible API changes or major architectural changes.

**Examples:**

- Complete redesign of website layout
- Removing core functionality
- Major change in how singer profile is configured
- Database migration with breaking changes
- Significant performance overhaul

### MINOR Version (X.Y.0)

When you add new functionality in a backwards-compatible manner.

**Examples:**

- New service type added to services list
- New component library introduced
- New integration (e.g., payment processing)
- Expanded FAQ section
- New blog posts

### PATCH Version (X.Y.Z)

When you make backwards-compatible bug fixes or small improvements.

**Examples:**

- Fixing typos or grammar
- Improving colors/styling
- Fixing broken links
- Performance optimizations
- Security patches

## Pre-Release Versions

### Alpha (-alpha)

Internal testing, features may be incomplete, breaking changes possible.

**When to use:**

- Very early stage feature development
- Not for public use
- Example: `1.2.0-alpha.1`

### Beta (-beta)

Feature-complete but with known issues, testing in controlled environment.

**When to use:**

- Ready for extended testing
- Can be shared with select users
- Example: `1.1.0-beta.2`

### Release Candidate (-rc)

Final testing before release, production-ready pending verification.

**When to use:**

- Final bug fixing
- Ready for limited public testing
- Example: `1.0.0-rc.1`

## Stable Release (No Suffix)

Fully tested, production-ready, API stable.

**Example:** `1.0.0`

## Current Version

Current version: **1.1.0**

### Version History

- **1.0.0** (Initial Release)
  - All 11 core pages
  - Services, events, testimonials
  - Contact form with validation
  - SEO optimization
  - Blog with MDX support
  - Testing setup (Vitest + Playwright)
  - DevOps pipeline (GitHub Actions)
  - Docker support

- **1.1.0** (Phase 2: Client Optimization)
  - Personalization config layer
  - Conversion optimization (StickyCtaButton, TrustBadges, ExitIntentModal)
  - Security hardening (rate limiting, honeypot, input sanitization)
  - Conversion tracking utility
  - High-intent content (10+ FAQ entries, 3 long-form blog posts)
  - Repository improvements (this versioning document)
  - 40+ configuration variables

## Release Checklist

Before releasing a new version:

### Code

- [ ] All features complete
- [ ] All tests passing (`npm test`)
- [ ] No console errors or warnings
- [ ] Code reviewed and approved
- [ ] Linter passing (`npm run lint`)
- [ ] Type checking clean (`npm run type-check`)

### Documentation

- [ ] README.md updated
- [ ] CHANGELOG.md updated
- [ ] PHASE_2_IMPROVEMENTS.md updated if applicable
- [ ] Code comments updated
- [ ] API documentation updated if changed

### Testing

- [ ] Unit tests for new features
- [ ] E2E tests updated
- [ ] Manual QA complete
- [ ] Cross-browser testing done
- [ ] Mobile responsiveness verified
- [ ] Accessibility check (WCAG 2.1 AA)
- [ ] SEO meta tags verified

### DevOps

- [ ] Environment variables documented
- [ ] Secrets not committed
- [ ] `.env.example` updated
- [ ] Deployment process tested
- [ ] Rollback plan documented
- [ ] Monitoring configured

### Security

- [ ] Security audit passed
- [ ] Dependencies up to date (`npm audit`)
- [ ] No known vulnerabilities
- [ ] Secrets properly managed
- [ ] CORS properly configured
- [ ] Rate limiting tested

### Performance

- [ ] Lighthouse score > 90
- [ ] Bundle size monitored
- [ ] Page load times acceptable
- [ ] Image optimization verified
- [ ] Caching strategy working

## Deployment by Version

### Patch Releases (1.0.1 → 1.0.2)

Can typically be deployed immediately after release checklist. Low risk, usually just bug fixes.

### Minor Releases (1.0.0 → 1.1.0)

Require more testing but can still be deployed relatively quickly. New features need validation.

### Major Releases (1.0.0 → 2.0.0)

Require extensive testing, stakeholder approval, and may need migration planning.

## Support Policy

- **Current Version**: Full support
- **Previous Version**: Bug fixes only (if critical)
- **Older Versions**: Security patches only (if critical)

## Communication

- **Release Notes**: Published in CHANGELOG.md
- **Major Releases**: Announce to stakeholders via email
- **Breaking Changes**: Include migration guide in release notes
- **Security Fixes**: Tag as security in CHANGELOG

## Tools & Commands

### View Current Version

```bash
cat package.json | grep version
```

### Create Release Tag

```bash
git tag -a v1.1.0 -m "Release version 1.1.0: Phase 2 optimizations"
git push origin v1.1.0
```

### View All Tags

```bash
git tag -l
git show v1.1.0
```

### Create Release Branch

```bash
git checkout -b release/1.1.0
```

## Questions

For questions about versioning strategy, see RUNBOOK.md for deployment procedures or README.md for project overview.
