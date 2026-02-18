# Local Development Startup Guide

This guide walks you through setting up and running the Next.js development server on **port 3002** with safety checks.

---

## Prerequisites

- **Node.js 18.x or 20.x** (LTS recommended)
  - Check version: Open PowerShell and run:
    ```powershell
    node --version
    ```
  - If you don't have Node.js installed, download from [nodejs.org](https://nodejs.org)

- **npm** (comes with Node.js)
  - Check version:
    ```powershell
    npm --version
    ```

---

## Quick Start (Windows PowerShell)

### Step 1: Prepare Environment File

Copy the environment template to create your local configuration:

```powershell
# Navigate to project root (if not already there)
cd C:\Users\marek\OneDrive\Pulpit\lenaspiew

# Copy the example to .env.local
Copy-Item .env.local.example .env.local
```

### Step 2: Configure Required Variables

Edit `.env.local` to add your personalization:

```powershell
# Open with Notepad (or your editor)
notepad .env.local
```

**At minimum, update these REQUIRED variables:**

```dotenv
NEXT_PUBLIC_SINGER_NAME=Your Name
NEXT_PUBLIC_PRIMARY_CITY=Your City
NEXT_PUBLIC_SITE_URL=http://localhost:3002
```

**Other recommended updates:**

- `NEXT_PUBLIC_SINGER_TITLE` - Your title/profession
- `NEXT_PUBLIC_SINGER_BIO` - Your professional bio
- `NEXT_PUBLIC_PRIMARY_REGION` - Your region/state

**Social media links** (optional):

- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_FACEBOOK_URL`
- `NEXT_PUBLIC_YOUTUBE_URL`

**Email** (only if contact form enabled):

- `SINGER_CONTACT_EMAIL` - Where inquiries will be sent

Save the file (Ctrl+S in Notepad).

### Step 3: Install Dependencies

Install npm packages:

```powershell
npm install
```

This downloads all project dependencies (React, Next.js, Tailwind, etc.).

### Step 4: Run Preflight Check

Validate your environment before starting:

```powershell
npm run preflight
```

**Expected output:**

```
✓ Node.js Version
✓ Environment Configuration (.env.local found)
✓ Environment Variables (All required env vars loaded)
✓ Security Validation (NEXT_PUBLIC_ prefixes are safe)
✓ Port Configuration (Port 3002 ready)

All checks passed! (5/5)

Local URL: http://localhost:3002
Alt URL:   http://127.0.0.1:3002
```

If you see errors, fix them based on the error message and re-run.

### Step 5: Start Development Server

Use the safe startup command (includes automatic preflight check):

```powershell
npm run dev:safe
```

**Expected output:**

```
✓ Node.js Version
✓ Environment Configuration
✓ Environment Variables
✓ Security Validation
✓ Port Configuration

All checks passed!

Local URL: http://localhost:3002

> next dev -p 3002

  ▲ Next.js 14.0.4
  - Local:        http://localhost:3002
  - Environments: .env.local

 ✓ Ready in 2.3s
 ✓ Compiled client and server successfully
```

### Step 6: Open in Browser

Visit: **http://localhost:3002**

Your site is now running locally with hot-reload enabled. Changes to files automatically refresh the browser.

---

## Development Commands

### Start Development Server (with safety checks)

```powershell
npm run dev:safe
```

Includes preflight validation before starting. **Recommended for local development.**

### Start Development Server (skip checks)

```powershell
npm run dev
```

Starts on port 3002 without validation. Fast but less safe.

### Run Preflight Checks Only

```powershell
npm run preflight
```

Validates Node version, environment variables, and security settings without starting the server.

### Build for Production

```powershell
npm run build
```

Creates optimized production build in `.next/` directory.

### Start Production Build Locally

```powershell
npm run start
```

Runs the production build on port 3002 (useful for testing production-like behavior).

### Lint Code

```powershell
npm run lint
```

Checks code for errors and style issues using ESLint.

### Type Check

```powershell
npm run type-check
```

Validates TypeScript types without building.

---

## Troubleshooting

### Port 3002 Already in Use

If you see `Error: listen EADDRINUSE: address already in use :::3002`:

**Find what's using the port:**

```powershell
netstat -ano | findstr :3002
```

This shows the Process ID (PID). For example: `PID 12345`

**Stop the process:**

```powershell
# Kill by PID (replace 12345 with your actual PID)
taskkill /PID 12345 /F

# Or wait 30 seconds and try again
```

Then re-run:

```powershell
npm run dev:safe
```

### Node Version Mismatch

If preflight fails with `Node 18+ required`:

```powershell
node --version
```

**Install Node 18+ or 20+:**

1. Go to [nodejs.org/download](https://nodejs.org/download)
2. Download **LTS version** (18.x or 20.x)
3. Run the installer
4. **Restart PowerShell** after installation
5. Verify:
   ```powershell
   node --version  # Should show v18.x.x or v20.x.x
   ```

### Missing Required Environment Variables

If `npm run preflight` shows missing variables:

```powershell
# Edit .env.local
notepad .env.local

# Make sure these are filled in:
# NEXT_PUBLIC_SITE_URL=...
# NEXT_PUBLIC_SINGER_NAME=...
```

Save and run again:

```powershell
npm run preflight
```

### Build Fails / Dependencies Missing

Clear cache and reinstall:

```powershell
# Remove node_modules directory
Remove-Item node_modules -Recurse -Force

# Clear npm cache
npm cache clean --force

# Reinstall
npm install
```

### Hot Reload Not Working

If your changes aren't reflecting in the browser:

1. **Check the terminal** – Are there TypeScript errors?
2. **Hard refresh browser** – Ctrl+Shift+R (or Cmd+Shift+R on Mac)
3. **Restart dev server** – Stop (Ctrl+C) and re-run `npm run dev:safe`

---

## Environment Variables Reference

### Required for Local Dev

| Variable                  | Example                 | Purpose                        |
| ------------------------- | ----------------------- | ------------------------------ |
| `NEXT_PUBLIC_SITE_URL`    | `http://localhost:3002` | Site identity & canonical URLs |
| `NEXT_PUBLIC_SINGER_NAME` | `Your Name`             | Personalization, headers, SEO  |

### Recommended for Full Features

| Variable                     | Example            | Purpose                    |
| ---------------------------- | ------------------ | -------------------------- |
| `NEXT_PUBLIC_PRIMARY_CITY`   | `Eindhoven`        | Local SEO, city pages      |
| `NEXT_PUBLIC_PRIMARY_REGION` | `North Brabant`    | Location targeting         |
| `NEXT_PUBLIC_SINGER_TITLE`   | `Vocalist & Coach` | Professional title display |

### Optional (Can be Empty for Local Dev)

| Variable                     | Purpose                         |
| ---------------------------- | ------------------------------- |
| `NEXT_PUBLIC_GA_ID`          | Google Analytics tracking       |
| `NEXT_PUBLIC_INSTAGRAM_URL`  | Social media links              |
| `SMTP_HOST`, `SMTP_PASSWORD` | Email sending (production only) |
| `NEXT_PUBLIC_MAILCHIMP_*`    | Newsletter integration          |

---

## Security Notes

⚠️ **Never commit `.env.local` to Git!**

- `.env.local` is in `.gitignore` (safe)
- `.env.local.example` is version-controlled (template only)
- Secrets like `SMTP_PASSWORD` only go in `.env.local`
- `NEXT_PUBLIC_*` vars are exposed in browser (never put secrets there)

---

## Production Deployment

When deploying to production:

1. Use `.env.production` with real credentials
2. Set secure HTTPS URLs
3. Add analytics IDs (GA, Vercel, etc.)
4. Configure email (SMTP, Mailchimp)
5. Test with `npm run build && npm run start`

For more details, see the project README.md.

---

## Getting Help

If you encounter issues:

1. **Check preflight output** – `npm run preflight` gives diagnostic info
2. **Review error messages** – Usually in the terminal where you ran the command
3. **Check `.env.local`** – Verify required variables are set
4. **Restart everything** – Sometimes a fresh terminal helps

Happy coding! 🎉
