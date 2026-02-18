# Professional Singer Website

A production-grade Next.js website for a professional vocalist specializing in weddings, corporate events, vocal coaching, and live performances.

## 🎯 Features

- **Service Showcase**: Wedding music, corporate entertainment, vocal coaching
- **Event Listings**: Upcoming performances and past events
- **Client Testimonials**: 5-star reviews with filtering and management
- **Blog**: Professional articles on vocal technique, performance tips, and event planning
- **Live Contact Form**: SMTP-integrated booking inquiry system
- **SEO Optimized**: Dynamic metadata, JSON-LD schema, sitemap, robots.txt
- **Performance Focused**: Lighthouse 90+, Core Web Vitals optimized
- **Dark Theme**: Elegant design with premium accent color
- **Mobile Responsive**: Full mobile and tablet support
- **Google Analytics Integration**: Track visitors and conversions with GA4
- **MCP Server Support**: Query analytics data with AI assistants (Claude, etc.)

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18.x or 20.x
- **npm**: 9+ or yarn
- **Git**: for version control

### Installation

```bash
# Clone repository
git clone <your-repo-url>
cd singer-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Content Editing Guide

### Adding Blog Posts

1. Create new `.mdx` file in `src/content/blog/`
2. Follow this structure:

```mdx
export const metadata = {
  title: 'Post Title',
  description: 'Short description',
  date: '2024-01-15',
  author: 'Professional Singer',
  category: 'Category Name',
  image: 'optional-image-path',
};

# Main Heading

Your content here...
```

3. File will auto-appear at `/blog/[filename-without-mdx]`

### Managing Services

Edit `src/content/services.json`:

```json
{
  "id": "unique-id",
  "title": "Service Name",
  "slug": "service-slug",
  "description": "Short description",
  "longDescription": "Detailed description",
  "icon": "emoji",
  "price": "Custom pricing",
  "duration": "Duration details",
  "features": ["Feature 1", "Feature 2"],
  "includes": ["Included item 1"],
  "cta": "Call to action text"
}
```

### Managing Events

Edit `src/content/events.json`:

```json
{
  "id": "event-1",
  "title": "Event Name",
  "date": "2024-06-15",
  "time": "18:00",
  "location": "Venue Name",
  "type": "wedding|corporate|festival|workshop|concert",
  "description": "Event details",
  "status": "upcoming|past",
  "bookingUrl": "https://link-to-booking"
}
```

### Managing Testimonials

Edit `src/content/testimonials.json`:

```json
{
  "id": "testimonial-1",
  "author": "Client Name",
  "role": "Title / Relationship",
  "content": "Testimonial text",
  "rating": 5,
  "date": "2024-05-20",
  "type": "wedding|corporate|workshop|coaching"
}
```

### Updating FAQ

Edit `src/content/faq.json` - same structure as other content files.

### Site Configuration

Update `src/lib/constants.ts` for:

- Site name and URL
- Singer information (name, title, bio, contact)
- Navigation links
- Social media URLs

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_NAME=Professional Singer
NEXT_PUBLIC_SITE_URL=https://yoursite.com

# Contact Form - Email Setup
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=app-specific-password
CONTACT_EMAIL_TO=your-email@gmail.com
CONTACT_EMAIL_FROM=noreply@yoursite.com

# SEO Verification (Optional)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-id

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Google Analytics MCP Server

This project includes integration with the Google Analytics MCP (Model Context Protocol) server, which allows AI assistants like Claude to query and analyze your website's analytics data in real-time.

**Quick Setup:**

1. Install dependencies: `npm install` (MCP server already included)
2. Set up Google Cloud service account with Analytics Data API access
3. Configure Claude Desktop or other MCP client
4. Query your analytics data using natural language!

**Full documentation:** See [GOOGLE_ANALYTICS_MCP.md](./GOOGLE_ANALYTICS_MCP.md) for complete setup instructions.

**Example queries:**
- "Show me traffic for the last 7 days"
- "What are my top pages?"
- "How many contact form submissions this month?"

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Watch mode (development)
npm run test:watch

# UI mode for E2E tests
npm run test:e2e:ui
```

## 📊 Code Quality

```bash
# ESLint
npm run lint
npm run lint:fix

# Format code
npm run format
npm run format:check

# Type checking
npm run type-check

# Security audit
npm run security-check
```

## 🐳 Docker Deployment

### Build Image

```bash
docker build -t singer-website .
```

### Run Container

```bash
docker run -p 3000:3000 singer-website
```

### Using Docker Compose

```bash
docker-compose up -d
```

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Auto-deploy** on push to main branch

```bash
# Deploy with CLI
npm install -g vercel
vercel
```

### Docker / Self-Hosted

```bash
# Build image
docker build -t singer-website .

# Run container
docker run -d \
  -p 80:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_URL=https://yoursite.com \
  singer-website
```

### Manual (Node.js)

```bash
npm install
npm run build
npm start
```

## 📈 SEO & Performance

- **Dynamic Sitemap**: `sitemap.xml` auto-generated
- **Meta Tags**: Dynamic titles, descriptions, OG images
- **Schema.org**: Person, LocalBusiness, Event schemas
- **Mobile Optimized**: Responsive design, fast mobile speed
- **Image Optimization**: Next.js Image component
- **Core Web Vitals**: Optimized for LCP, FID, CLS

## 🔐 Security

- **Security Headers**: HSTS, CSP, X-Frame-Options
- **CORS Protection**: Configured for contact form
- **Input Validation**: Form validation on client and server
- **Environment Variables**: Sensitive data in .env.local
- **Dependabot**: Automated dependency updates (GitHub)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/            # Reusable React components
├── content/              # Static content (JSON, MDX)
├── lib/                  # Utility functions
├── styles/               # Global CSS
├── types/                # TypeScript types
└── middleware.ts         # Request middleware
```

## 🛠️ Troubleshooting

### Port 3000 Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Contact Form Not Sending

1. Check SMTP credentials in `.env.local`
2. Verify email app-specific password (Gmail)
3. Check server logs: `npm start` with debugging

### Blog Posts Not Appearing

1. Ensure file is in `src/content/blog/`
2. Check filename matches slug convention
3. Metadata export must be properly formatted

## � Photo Import Pipeline

This website includes a **production-grade photo import system** that optimizes images once, then serves static WebP files. This is the recommended approach for production performance and deployment simplicity.

### How It Works

1. **One-time import**: Photos are imported from a local Windows desktop folder
2. **Smart optimization**: Images are auto-cropped to 3 premium aspect ratios (4:5, 16:9, 1:1)
3. **Static manifest**: A `gallery.json` file replaces runtime filesystem scanning
4. **Deterministic output**: Same inputs always produce identical outputs (reproducible builds)

### Setup: Import Your Photos

#### Step 1: Prepare Your Photos

Create a folder on your desktop named `lenafotki`:

```
C:\Users\{YourUsername}\Desktop\lenafotki\
├── photo-1.jpg
├── photo-2.png
├── concert.jpeg
└── ... (more images)
```

**Supported formats**: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.heic`, `.tiff`

#### Step 2: Run the Import

```bash
# Set the source folder (Windows path)
set PHOTO_SOURCE=C:\Users\{YourUsername}\Desktop\lenafotki
npm run import:photos
```

**On macOS/Linux**:

```bash
export PHOTO_SOURCE=/path/to/lenafotki
npm run import:photos
```

**Output**:

```
================================================
  📸 Photo Import Pipeline
================================================

📁 Source folder: C:\Users\marek\Desktop\lenafotki
📁 Output root: c:\Users\marek\OneDrive\Pulpit\lenaspiew

🔍 Scanning for images...
Found 15 images

⚙️  Processing images...
[1/15] wedding-01.jpg ... ✓
[2/15] concert.png ... ✓
[3/15] headshot.jpeg ... ✓
...

================================================
  ✅ Import Complete
================================================
Imported:  15
Skipped:   0
Featured:  5
Gallery:   15
Square:    15
================================================
```

#### Step 3: View the Results

Import creates these directories (auto-created):

```
public/images/
├── gallery/        (1200x1500 - 4:5 portrait tiles)
├── hero/           (1600x900 - 16:9 hero banners)
└── square/         (1200x1200 - 1:1 thumbnails)

content/
└── gallery.json    (Static manifest - used by components)
```

### What Gets Optimized

For each image, the pipeline creates **3 optimized versions**:

| Format  | Dimensions | Aspect Ratio     | Use Case                   |
| ------- | ---------- | ---------------- | -------------------------- |
| Gallery | 1200×1500  | 4:5 (portrait)   | Main gallery grid tiles    |
| Hero    | 1600×900   | 16:9 (landscape) | Homepage banner/featured   |
| Square  | 1200×1200  | 1:1              | Thumbnails, social preview |

**All outputs**:

- WebP format (40% smaller than JPEG)
- Quality 82% (visually lossless)
- Smart crop with attention detection (keeps main subject in frame)
- Auto-rotated (EXIF orientation normalized)
- Duplicate detection (skips identical images)

### Using Images in Components

The photo import creates a static `content/gallery.json` manifest. Components read this manifest at build-time (no runtime filesystem access):

#### In Gallery Grid

```tsx
import Gallery from '@/components/Gallery';

export default function GalleryPage() {
  return <Gallery />;
}
```

#### Featured Images (Homepage)

```tsx
import Gallery from '@/components/Gallery';

export default function HomePage() {
  return <Gallery featured={true} columns={{ mobile: 1, tablet: 2, desktop: 3 }} />;
}
```

#### Custom Filtering

```tsx
import Gallery from '@/components/Gallery';

export default function PortraitsPage() {
  return <Gallery filterOrientation="portrait" showMetadata={true} />;
}
```

### Regenerating the Gallery

If you add new photos to `lenafotki/`:

```bash
set PHOTO_SOURCE=C:\Users\{YourUsername}\Desktop\lenafotki
npm run import:photos
```

This will:

- Import new photos
- Skip duplicates (by content hash)
- Generate new `gallery.json`
- Keep existing images safe

### What Gets Generated: gallery.json

```json
{
  "featured": [
    {
      "src": "/images/hero/lena-0001.webp",
      "alt": "Professional headshot",
      "width": 1600,
      "height": 900,
      "galleryId": "lena-0001"
    }
  ],
  "gallery": [
    {
      "src": "/images/gallery/lena-0001.webp",
      "alt": "Concert performance",
      "width": 1200,
      "height": 1500,
      "orientation": "portrait",
      "galleryId": "lena-0001"
    }
  ],
  "square": [
    {
      "src": "/images/square/lena-0001.webp",
      "alt": "Headshot",
      "width": 1200,
      "height": 1200,
      "galleryId": "lena-0001"
    }
  ],
  "metadata": {
    "importedAt": "2024-02-18T10:30:00.000Z",
    "sourceFolder": "C:/Users/marek/Desktop/lenafotki",
    "totalCount": 15
  }
}
```

### Optimizing Alt Text

The import script auto-generates alt text from filenames:

- `concert-at-philharmonic.jpg` → "Concert at Philharmonic"
- `wedding-ceremony-2024.png` → "Wedding Ceremony 2024"

For better SEO, rename photos before import:

- ✅ Good: `bride-singing-vows.jpg`
- ✅ Good: `corporate-gala-entertainment.jpg`
- ❌ Bad: `IMG_1234.png`

### Performance Notes

- **Build-time processing**: Images are optimized once (not repeatedly)
- **Static manifest**: No filesystem scanning at runtime
- **WebP format**: ~40% smaller files, fast loading
- **Smart crop**: Attention-based (keeps main subject in frame)
- **Responsive images**: Served at correct density via `next/image`

### Troubleshooting Photo Import

**"Source folder does not exist"**

```bash
# Check the path is correct
# Use forward slashes or escaped backslashes:
set PHOTO_SOURCE=C:\Users\YourName\Desktop\lenafotki
# OR
set PHOTO_SOURCE=C:/Users/YourName/Desktop/lenafotki
```

**"No image files found"**

- Check file extensions (.jpg, .png, .gif, .webp)
- Remove non-image files
- Avoid: thumbs.db, .DS_Store, .ini files

**"Failed to process image"**

- Image may be corrupted
- Try opening it in your default image viewer
- Try re-saving with JPG compression

**"Duplicate detected"**

- Same image added twice
- Import skips it automatically (good!)
- Update gallery.json to include both if different crops needed

## �📚 Additional Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical decisions and trade-offs
- **[RUNBOOK.md](./RUNBOOK.md)** - Troubleshooting and operational procedures
- **[GO_LIVE_CHECKLIST.md](./GO_LIVE_CHECKLIST.md)** - Pre-launch verification steps

## 🤝 Support & Maintenance

- **Dependencies**: Update monthly with `npm update`
- **Security**: Monitor Dependabot alerts
- **Content**: Regular blog posts and event updates
- **Performance**: Monthly Lighthouse audits

## 📄 License

This project is private. All rights reserved.

## 🎵 A Note on Content

Remember to:

- Keep all content in English for international audience
- Update "Professional Singer" with actual name
- Add real photos to replace emoji placeholders
- Configure email settings before launch
- Customize testimonials and past performance stories

---

**Ready to go live?** Check the [GO_LIVE_CHECKLIST.md](./GO_LIVE_CHECKLIST.md) for final steps.
