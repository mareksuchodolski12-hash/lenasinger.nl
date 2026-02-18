# Runbook - Operations & Troubleshooting

## Overview

This runbook provides operational procedures for running, maintaining, and troubleshooting the Professional Singer website.

## 🚀 Startup Procedures

### Cold Start (First Time)

```bash
# 1. Clone repository
git clone <repo-url>
cd singer-website

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local
# Edit .env.local with your configuration

# 4. Development server
npm run dev
# Visit http://localhost:3000

# 5. Verify everything works
- Check homepage loads
- Click around all pages
- Test contact form (check server logs)
```

### Warm Start (Restart)

```bash
# If dev server is already running
npm run dev

# Clear cache if needed
rm -rf .next
npm run dev
```

## 🔧 Common Tasks

### Adding a New Blog Post

1. **Create file**: `src/content/blog/post-title-slug.mdx`
2. **Add metadata**:
   ```mdx
   export const metadata = {
     title: 'Post Title',
     description: 'Short description',
     date: '2024-02-18',
     author: 'Professional Singer',
     category: 'Category',
   };
   ```
3. **Write content** using Markdown
4. **Save file** - automatically appears at `/blog/post-title-slug`

### Adding a New Event

1. **Open**: `src/content/events.json`
2. **Add object**:
   ```json
   {
     "id": "event-unique-id",
     "title": "Event Name",
     "date": "2024-03-15",
     "time": "18:00",
     "location": "Venue Name",
     "type": "wedding|corporate|festival|workshop|concert",
     "description": "Event description",
     "status": "upcoming"
   }
   ```
3. **Save** - automatically appears on `/events`

### Adding a Testimonial

1. **Open**: `src/content/testimonials.json`
2. **Add**:
   ```json
   {
     "id": "unique-id",
     "author": "Client Name",
     "role": "Title",
     "content": "Testimonial text",
     "rating": 5,
     "date": "2024-02-15",
     "type": "wedding"
   }
   ```

### Updating Contact Email

1. **File**: `src/lib/constants.ts`
2. **Update**: `BRAND_EMAIL`, `SINGER_INFO.email`, `BRAND_PHONE`
3. **Also update**: `.env.local` for SMTP settings

## 🐛 Troubleshooting

### Development Server Won't Start

**Problem**: `Error: EADDRINUSE: address already in use :::3000`

**Solution**:

```bash
# Kill process using port 3000
lsof -i :3000  # List processes
kill -9 <PID>  # Kill process

# Or use different port
npm run dev -- -p 3001
```

---

### Build Fails

**Problem**: `Error: Failed to build`

**Steps**:

1. **Check Node version**: Should be 18+

   ```bash
   node --version
   ```

2. **Clear cache**:

   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

3. **Check for TypeScript errors**:

   ```bash
   npm run type-check
   ```

4. **Check ESLint**:
   ```bash
   npm run lint
   ```

---

### Contact Form Not Sending Emails

**Problem**: Form submits but no email received

**Diagnostic Checklist**:

```
☐ Check `.env.local` has SMTP settings
☐ Verify SMTP_USER and SMTP_PASSWORD are correct
☐ Check CONTACT_EMAIL_FROM and CONTACT_EMAIL_TO are set
☐ Look for errors in server logs (npm run dev)
☐ Test with simpler email (simple@gmail.com)
☐ Check spam folder for email
☐ Try sending test email from terminal:
```

```bash
node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD }
});
transporter.sendMail({
  from: process.env.CONTACT_EMAIL_FROM,
  to: process.env.CONTACT_EMAIL_TO,
  subject: 'Test',
  text: 'Test email'
}, (err, info) => console.log(err || info));
"
```

---

### Blog Post Not Appearing

**Problem**: Created `.mdx` file but post doesn't show

**Checks**:

```
☐ File is in `src/content/blog/` directory
☐ Filename is correct (no spaces, use hyphens)
☐ File has `.mdx` extension
☐ Metadata is properly formatted:
  export const metadata = { ... };
☐ Metadata has 'title' field
☐ Date format is YYYY-MM-DD
```

**Debug**:

```bash
# Rebuild to regenerate blog post list
rm -rf .next
npm run build

# Check if file is readable
head -n 20 src/content/blog/your-post.mdx
```

---

### Page Styling is Broken

**Problem**: CSS not loading, dark theme not applied

**Fixes**:

1. **Restart dev server**:

   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

2. **Clear browser cache**:
   - DevTools → Application → Clear storage
   - Or hard refresh: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

3. **Check Tailwind compilation**:
   ```bash
   # Rebuild CSS
   npm run build
   ```

---

### Performance Issues

**Problem**: Website is slow

**Diagnosis**:

```bash
# Check page speed
npm run build  # See output sizes

# Analyze bundle
npm install -g next-bundle-analyzer
npm run build
```

**Common Causes**:

- Large images without optimization → Use Next.js Image
- Unoptimized fonts → Use next/font
- Too much JavaScript → Code splitting helps
- Database queries → Not applicable (static site)

---

### Deployment Fails on Vercel

**Problem**: Deployment succeeds then fails on Vercel

**Checks**:

1. **Environment variables set**:
   - Vercel Dashboard → Project → Settings → Environment Variables
   - Add: NEXT*PUBLIC_SITE_URL, SMTP*\* (if needed)

2. **Build logs**:
   - Check Vercel deployment logs for specific error
   - Usually outputted to console

3. **Test locally**:

   ```bash
   npm run build
   npm start  # Should work before deploying
   ```

4. **Rebuild and redeploy**:
   - Vercel Dashboard → Deployments → Redeploy

---

## 📊 Monitoring

### Performance Checks

**Weekly**:

```bash
# Run Lighthouse
npm run build
npx lighthouse http://localhost:3000

# Check for unused dependencies
npm audit
```

**Monthly**:

- Review blog post analytics
- Check contact form submissions
- Monitor Vercel usage metrics

### Health Checks

**Daily** (if running self-hosted):

- Visit homepage - should load in <2s
- Check contact form works
- Verify no JavaScript errors (DevTools console)

**on Push**:

- GitHub Actions should pass: lint, test, build
- Check deployment logs on Vercel

## 🔄 Rollback Procedures

### If Latest Deploy is Broken

**On Vercel**:

1. Go to Deployments tab
2. Find previous working version
3. Click "Promote to Production"

**Manual Rollback**:

```bash
# Get commit hash of last working version
git log --oneline

# Revert to that commit
git revert <commit-hash>
git push origin main

# Vercel will auto-redeploy
```

**Docker/Self-Hosted**:

```bash
# Stop current container
docker ps
docker stop <container-id>

# Start previous version
docker run -d -p 3000:3000 singer-website:previous-tag
```

## 🔐 Security Health Checks

**Monthly**:

```bash
# Check for known vulnerabilities
npm audit

# View detailed audit report
npm audit report

# Fix automatically if possible
npm audit fix

# Type check for type-related vulnerabilities
npm run type-check
```

## 📝 Content Backup

**Local Backup**:

```bash
# Everything is in Git, but backup content folder
tar -czf backup-content-$(date +%Y%m%d).tar.gz src/content/
```

**Important**: Keep `.git` directory safe - it's your version history!

## 🚨 Emergency Procedures

### Site Down / Not Loading

1. **Check status**:
   - Vercel Status: https://www.vercel-status.com
   - GitHub Status check
   - Try from different device/network

2. **Quick recovery**:

   ```bash
   # Redeploy last working version
   git push origin main  # Triggers rebuild
   ```

3. **Roll back**:
   - See Rollback Procedures above

### Security Breach

1. **Immediate actions**:
   - Rotate SMTP password
   - Check GitHub access logs
   - Review recent deployments

2. **Update secrets**:

   ```bash
   # Rotate credentials
   SMTP_PASSWORD=<new-password>
   # Update in .env.local and Vercel dashboard
   ```

3. **Audit**:
   ```bash
   npm audit
   npm audit fix
   ```

---

## 📚 Additional Resources

- **README.md** - Setup and deployment
- **ARCHITECTURE.md** - Technical decisions
- **GO_LIVE_CHECKLIST.md** - Pre-launch verification

## Contact & Support

For issues:

1. Check this runbook
2. Review error messages carefully
3. Check GitHub issues
4. Review Next.js documentation

---

**Last Updated**: February 2024  
**Maintained By**: Development Team  
**Status**: Production Ready
