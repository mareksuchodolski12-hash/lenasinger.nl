# Vercel Deploy Runbook

## Root directory
- Root Directory: `/` (repository root).

## Required environment variables
- `CORS_ALLOWED_ORIGINS` (optional; defaults to `*` in production if unset).

# codex/fix-vercel-404-error-and-stabilize-deploy-o9hcum
## Hard deployment requirements
- Production branch must point to the branch that contains this config and `app/` routes.
- Domain `lenasinger.nl` must be attached to this exact Vercel project.
- A successful Production deployment must exist after push.

## Local reproduction
1. Install dependencies:
   - `npm ci`
2. Run Vercel preflight checks:
   - `npm run check:vercel`
3. Run tests:
   - `npm test`
4. Build production bundle:
   - `npm run build`
5. Optional local prod start:
#
## Local reproduction
1. Install dependencies:
   - `npm ci`
2. Run tests:
   - `npm test`
3. Build production bundle:
   - `npm run build`
4. Optional local prod start:
# main
   - `npm start`

## Vercel build settings (configured in `vercel.json`)
- Framework Preset: `nextjs`
- Install Command: `npm ci`
- Build Command: `npm run build`
# codex/fix-vercel-404-error-and-stabilize-deploy-o9hcum

## Why platform-level `404: NOT_FOUND` can still happen
- If domain is attached to a different project/team, Vercel returns platform `NOT_FOUND` before app code runs.
- If there is no successful production deployment on the selected production branch, Vercel returns `NOT_FOUND`.
=======
# main
