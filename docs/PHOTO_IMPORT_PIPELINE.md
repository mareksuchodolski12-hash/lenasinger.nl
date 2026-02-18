# Photo Import Pipeline - Implementation Guide

## Overview

This document explains the **Premium Photo Import Pipeline** - a production-grade system for importing, optimizing, and serving gallery images in a Next.js website.

**Design principles**:

- ✅ One-time import (not continuous scanning)
- ✅ Static manifest (no runtime filesystem access)
- ✅ Deterministic output (reproducible builds)
- ✅ Premium optimization (WebP, smart crop, multiple ratios)
- ✅ Production-ready (error handling, duplicate detection, summaries)

---

## Architecture

### Components

```
┌─────────────────────────────────────────────────────────┐
│                  Photo Import Pipeline                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. Source Folder Detection (Desktop/lenafotki)        │
│              ↓                                          │
│  2. Image File Scanning (filter by extension)          │
│              ↓                                          │
│  3. Duplicate Detection (SHA256 hash)                  │
│              ↓                                          │
│  4. EXIF Normalization (rotation, orientation)         │
│              ↓                                          │
│  5. Smart Cropping (attention-based, 3 ratios)         │
│         ├─→ Gallery: 1200×1500 (4:5 portrait)         │
│         ├─→ Hero: 1600×900 (16:9 landscape)           │
│         └─→ Square: 1200×1200 (1:1)                    │
│              ↓                                          │
│  6. WebP Encoding (quality 82, ~40% smaller)          │
│              ↓                                          │
│  7. Manifest Generation (gallery.json)                 │
│              ↓                                          │
│  8. Summary Report (import count, errors)              │
│                                                          │
└─────────────────────────────────────────────────────────┘

Runtime (at build/serve time):
  gallery.json → Gallery.tsx → next/image → User
```

### File Structure

```
project-root/
│
├── scripts/
│   └── import-photos.mjs               ← Photo import script
│
├── public/images/
│   ├── gallery/                        ← 4:5 portrait crops
│   │   ├── lena-0001.webp
│   │   ├── lena-0002.webp
│   │   └── ...
│   ├── hero/                           ← 16:9 landscape crops
│   │   ├── lena-0001.webp
│   │   └── ...
│   └── square/                         ← 1:1 square crops
│       ├── lena-0001.webp
│       └── ...
│
├── content/
│   └── gallery.json                    ← Auto-generated manifest
│
├── src/components/
│   ├── Gallery.tsx                     ← Gallery component (reads manifest)
│   └── gallery/
│       └── types.ts                    ← TypeScript types
│
├── package.json                        ← Shows "import:photos" script

└── README.md                           ← Import instructions
```

---

## How It Works

### 1. Image Source (Windows Desktop)

Photos are placed in a standard Windows location:

```
C:\Users\{YourUsername}\Desktop\lenafotki\
```

The path is provided via environment variable:

```bash
set PHOTO_SOURCE=C:\Users\marek\Desktop\lenafotki
npm run import:photos
```

### 2. File Detection & Filtering

The script scans the folder and:

- ✅ Includes: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.heic`, `.tiff`
- ❌ Excludes: `thumbs.db`, `.DS_Store`, `.ini` (junk files)
- 🔄 Sorts alphabetically (deterministic order)

### 3. Duplicate Detection

Uses SHA256 content hash to detect identical images:

```javascript
const hash = crypto.createHash('sha256').update(buffer).digest('hex');
if (seenHashes.has(hash)) {
  console.log('⊘ skipped (duplicate)');
  continue;
}
```

This prevents accidentally importing the same image twice.

### 4. EXIF & Orientation Normalization

Sharp normalizes image orientation:

```javascript
let orientedImage = image.rotate(); // auto-rotate from EXIF
orientedImage = orientedImage.withMetadata(false); // remove EXIF
```

Ensures consistent output regardless of source rotation metadata.

### 5. Smart Crop (Attention-Based)

Each image is cropped to 3 aspect ratios using attention detection:

```javascript
await orientedImage
  .resize(width, height, {
    fit: 'cover', // Crop to exact dimensions
    position: 'attention', // Smart crop (keeps main subject)
  })
  .webp({ quality: 82 })
  .toFile(outputPath);
```

**Key idea**: "Attention" mode analyzes the image and keeps the most interesting/important area in frame (usually the main subject).

### 6. Aspect Ratios Generated

| Type        | Dims      | Ratio | Use Case                           |
| ----------- | --------- | ----- | ---------------------------------- |
| **Gallery** | 1200×1500 | 4:5   | Main grid tiles (portrait focus)   |
| **Hero**    | 1600×900  | 16:9  | Homepage banners, featured section |
| **Square**  | 1200×1200 | 1:1   | Thumbnails, social metadata        |

All at **quality 82** (~92% perceived quality, 40% file size savings vs JPEG).

### 7. Stable Naming

Files are named deterministically:

```
lena-0001.webp
lena-0002.webp
lena-0003.webp
...
```

Not based on original filename or import order (ensures reproducibility).

### 8. Manifest Generation

Creates `content/gallery.json`:

```json
{
  "featured": [
    {
      "src": "/images/hero/lena-0001.webp",
      "alt": "Wedding ceremony",
      "width": 1600,
      "height": 900,
      "galleryId": "lena-0001"
    }
  ],
  "gallery": [
    {
      "src": "/images/gallery/lena-0001.webp",
      "alt": "Wedding ceremony",
      "width": 1200,
      "height": 1500,
      "orientation": "portrait",
      "galleryId": "lena-0001"
    }
  ],
  "square": [
    {
      "src": "/images/square/lena-0001.webp",
      "alt": "Wedding ceremony",
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

This manifest is **statically imported** by Gallery.tsx at build-time (no runtime filesystem access).

### 9. Component Rendering

Gallery.tsx imports and reads the manifest:

```typescript
import galleryManifest from '@/content/gallery.json';

export default function Gallery(props: GalleryProps) {
  const manifest = galleryManifest as GalleryManifest;
  const images = manifest.gallery;
  // Render grid...
}
```

**Key benefit**: Zero filesystem operations at runtime. Everything is built-in.

---

## Key Design Decisions

### Why One-Time Import (Not Continuous)?

**Continuous scanning** (reading Desktop folder at runtime):

- ❌ Slow (every request scans filesystem)
- ❌ Unpredictable (OS directory order varies)
- ❌ Complex deployment (must have Desktop access)
- ❌ Hard to test/debug

**One-time import** (run script when adding photos):

- ✅ Fast (no runtime scanning)
- ✅ Reproducible (deterministic output)
- ✅ Simple deployment (copy .webp files only)
- ✅ Easy to test

### Why Static Manifest (Not Dynamic Load)?

**Dynamic code**:

```javascript
// BAD: Runtime filesystem scan
const files = fs.readdirSync('/public/images/gallery');
const images = files.map(f => ({...}));
```

**Static manifest**:

```typescript
// GOOD: Import at build-time, frozen at runtime
import galleryManifest from '@/content/gallery.json';
```

Benefits:

- ✅ Build-time optimization (manifest is baked into binary)
- ✅ Zero runtime cost
- ✅ Type-safe (TypeScript schema validation)
- ✅ Easy to test (just JSON)

### Why WebP?

- **40% smaller** than JPEG at same perceived quality
- **Faster loading** (critical for image-heavy galleries)
- **Modern browsers** all support it (99%+)
- **Fallback**: next/image automatically converts for older browsers

### Why Smart Crop (Position: Attention)?

**Simple crop** (center crop):

- ❌ May cut off main subject if off-center
- ❌ Generic, loses context

**Attention-based crop**:

- ✅ Analyzes image using entropy detection
- ✅ Keeps main subject in frame
- ✅ Professional result with minimal config

Example:

```
Center crop: Just middle 1200×1500 pixels ❌
Attention crop: Analyzes image, crops around subject ✅
```

---

## What Gets Committed to Git

### ✅ COMMIT (checked in)

- `public/images/gallery/*.webp`
- `public/images/hero/*.webp`
- `public/images/square/*.webp`
- `content/gallery.json`
- `scripts/import-photos.mjs`
- `src/components/Gallery.tsx`
- `src/components/gallery/types.ts`

### ❌ DO NOT COMMIT

- Desktop source folder (`C:/Users/.../Desktop/lenafotki/`)
- `.env` files
- `node_modules/`
- `.next/` build artifacts

**Philosophy**: Repository contains **optimized outputs** (WebP images + manifest), not source photos. This ensures:

- Smaller repository size
- Reproducible builds
- No Desktop path hardcoding

---

## Usage Examples

### Basic Import

```bash
# Set source folder path
set PHOTO_SOURCE=C:\Users\marek\Desktop\lenafotki

# Run import
npm run import:photos

# Output:
# [1/15] wedding.jpg ... ✓
# [2/15] concert.png ... ✓
# ...
# ✅ Import Complete
# Imported:  15
# Featured:  5
```

### Regenerate (New Photos)

Add new photos to `C:\Users\marek\Desktop\lenafotki\` and run:

```bash
npm run import:photos
```

The script:

- Scans for new files
- Skips duplicates (by content hash)
- Adds new entries to gallery.json
- Keeps old images intact

### Custom Gallery Display

```typescript
// Featured images only (homepage hero)
<Gallery featured={true} columns={{ mobile: 1, tablet: 2, desktop: 3 }} />

// Portraits only
<Gallery filterOrientation="portrait" />

// Show import date
<Gallery showMetadata={true} />

// Custom grid
<Gallery columns={{ mobile: 2, tablet: 3, desktop: 5 }} />
```

---

## Troubleshooting

### "PHOTO_SOURCE environment variable not set"

```bash
# Make sure to SET the env var before running
set PHOTO_SOURCE=C:\Users\YourName\Desktop\lenafotki
npm run import:photos
```

### "Source folder does not exist"

```bash
# Check path is correct and folder exists
# Use backslashes OR forward slashes:
set PHOTO_SOURCE=C:\Users\marek\Desktop\lenafotki
# OR
set PHOTO_SOURCE=C:/Users/marek/Desktop/lenafotki
```

### "No image files found"

- Check file extensions (.jpg, .jpeg, .png, etc.)
- Remove non-image files (documents, Word files, etc.)
- Ensure folder isn't empty: `dir C:\Users\marek\Desktop\lenafotki`

### "Failed to process image: EXIF data not found"

- Some images may have corruption
- Try opening in Windows Photo Viewer
- Try re-saving the JPEG/PNG
- Check file isn't truncated

### "Duplicate detected - skipped"

- Same image added twice to folder
- This is good (prevents duplicates!)
- Remove old version if not needed
- Or keep both if different crops are desired

---

## Performance Characteristics

### Import Time

- ~2-5 seconds per image
- 15 images ≈ 30-75 seconds total
- Depends on: image size, disk speed, CPU

### File Size Reduction

- JPEG source: 2-5 MB each
- WebP output: 600-1500 KB each
- Typical ratio: **40% smaller**

### Build Size Impact

```
15 images × 3 crops × 1 MB avg = 45 MB per gallery
```

This is added to the deployed bundle. Consider:

- Deploy to CDN for image assets
- Use Next.js Image Optimization API
- Set Cache-Control headers

### Runtime Cost

- **Zero** - images are static files and manifest is baked in
- next/image handles responsive loading
- Lazy loading by default

---

## Future Enhancements

### Possible additions (not implemented):

1. **Batch orientation flip** - Rotate multiple images at once
2. **Password-protected upload** - Web form for client uploads
3. **Dynamic aspect ratios** - Change 4:5/16:9/1:1 by config
4. **Cache-busting** - Hash filenames for CDN
5. **Image metadata** - Extract camera, location from EXIF
6. **AI-powered selection** - Auto-select featured images
7. **Watermarking** - Add logo to images

### Why not included now?

- **YAGNI** (You Aren't Gonna Need It)
- Keep it simple and focused
- Add complexity only when needed
- Current system is MVP-complete

---

## Testing

### Manual verification:

```bash
# 1. Run import
set PHOTO_SOURCE=C:\Users\marek\Desktop\test-photos
npm run import:photos

# 2. Check outputs exist
ls public/images/gallery/
ls public/images/hero/
ls public/images/square/

# 3. Check manifest was created
cat content/gallery.json

# 4. Check component renders
npm run dev
# Navigate to gallery page

# 5. Inspect images
# Right-click → Inspect element → check src= paths
# Verify WebP format (not JPEG/PNG)
```

### Build verification:

```bash
# TypeScript check
npm run type-check

# Production build
npm run build

# Should succeed with no errors
```

---

## Security & Best Practices

### ✅ DO:

- Keep desktop path in `.env` (not hardcoded)
- Use descriptive filenames (helps alt text generation)
- Optimize before import (resize to ~2000px max)
- Review generated alt text (edit if needed)
- Use HTTPS when serving images
- Set proper Cache-Control headers

### ❌ DON'T:

- Store customer/private photos (privacy)
- Import files from untrusted sources (malware)
- Commit raw JPEG images (bloats repo)
- Use extremely large images (>10 MB)
- Hardcode absolute Windows paths
- Skip EXIF normalization (orientation issues)

---

## References

- **Sharp docs**: https://sharp.pixelplano.org/
- **Next.js Image**: https://nextjs.org/docs/app/api-reference/components/image
- **WebP format**: https://developers.google.com/speed/webp/
- **EXIF orientation**: https://www.daveperrett.com/articles/2012/07/28/exif-orientation-handling-is-a-ghetto/

---

**Questions?** Check the main README.md's "Photo Import Pipeline" section, or review the comments in `scripts/import-photos.mjs`.
