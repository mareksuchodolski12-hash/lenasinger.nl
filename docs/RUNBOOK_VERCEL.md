# Vercel Deploy Runbook

## Root directory
- Root Directory: `/` (repository root).

## Required environment variables
- `CORS_ALLOWED_ORIGINS` (optional; defaults to `*` in production if unset).

## Local reproduction
1. Install dependencies:
   - `npm ci`
2. Run tests:
   - `npm test`
3. Build production bundle:
   - `npm run build`
4. Optional local prod start:
   - `npm start`

## Vercel build settings (configured in `vercel.json`)
- Framework Preset: `nextjs`
- Install Command: `npm ci`
- Build Command: `npm run build`
