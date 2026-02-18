# Photo Import Pipeline - Verification Checklist

## Implementation Status

Use this checklist to verify the photo import pipeline has been properly installed.

### Files Created ✅

- [x] `scripts/import-photos.mjs` - Main import script (580 lines)
- [x] `src/components/gallery/types.ts` - TypeScript types
- [x] `src/components/Gallery.tsx` - Gallery component with lightbox
- [x] `content/gallery.json` - Generated manifest (initially empty)
- [x] `docs/PHOTO_IMPORT_PIPELINE.md` - Detailed documentation

### Files Updated ✅

- [x] `package.json` - Added sharp dependency + "import:photos" script
- [x] `README.md` - Added photo import section
- [x] `.gitignore` - Added photo pipeline notes

### Directory Structure ✅

```bash
# These directories will be created by the import script:
public/images/
├── gallery/      # (1200×1500 - 4:5 portrait)
├── hero/         # (1600×900 - 16:9 landscape)
└── square/       # (1200×1200 - 1:1 square)
```

---

## Pre-Flight Checks

### 1. Dependencies Installed

```bash
npm list sharp
# Should show: sharp@^0.33.0
```

If not:

```bash
npm install
```

### 2. Script Accessible

```bash
npm run import:photos
# Should show error about PHOTO_SOURCE (expected if not yet set)
# If error: "command not found" → run npm install
```

### 3. TypeScript Compiles

```bash
npm run type-check
# Should complete without errors
```

If errors appear:

- Check Gallery.tsx syntax
- Verify types.ts exports match usage

### 4. Build Succeeds

```bash
npm run build
# Should complete: "✓ Compiled successfully"
```

If build fails:

- Check for TypeScript errors: `npm run type-check`
- Verify all imports resolve

### 5. Dev Server Starts

```bash
npm run dev
# Should show: ▲ Next.js 14.0.4 - http://localhost:3000
```

Navigate to the app and verify no console errors.

---

## First Import Test

### Step 1: Create Test Folder

```bash
# Windows
mkdir "C:\Users\%USERNAME%\Desktop\lenafotki"
```

### Step 2: Add Sample Images

Copy 3-5 test images to:

```
C:\Users\{YourName}\Desktop\lenafotki\
├── test-1.jpg
├── test-2.jpg
└── test-3.png
```

### Step 3: Run Import

```bash
set PHOTO_SOURCE=C:\Users\{YourName}\Desktop\lenafotki
npm run import:photos
```

Expected output:

```
================================================
  📸 Photo Import Pipeline
================================================

📁 Source folder: C:\Users\marek\Desktop\lenafotki
📁 Output root: c:\Users\marek\OneDrive\Pulpit\lenaspiew

🔍 Scanning for images...
Found 3 images

⚙️  Processing images...
[1/3] test-1.jpg ...
  ✓ gallery: lena-0001.webp (4:5)
  ✓ hero: lena-0001.webp (16:9)
  ✓ square: lena-0001.webp (1:1)

[2/3] test-2.jpg ...
  ✓ gallery: lena-0002.webp (4:5)
  ✓ hero: lena-0002.webp (16:9)
  ✓ square: lena-0002.webp (1:1)

[3/3] test-3.png ...
  ✓ gallery: lena-0003.webp (4:5)
  ✓ hero: lena-0003.webp (16:9)
  ✓ square: lena-0003.webp (1:1)

================================================
  ✅ Import Complete
================================================
Imported:  3
Skipped:   0
Featured:  3
Gallery:   3
Square:    3
================================================
```

### Step 4: Verify Outputs

```bash
# Check directories were created
ls public/images/gallery/
ls public/images/hero/
ls public/images/square/

# Should show: lena-0001.webp, lena-0002.webp, lena-0003.webp

# Check manifest
cat content/gallery.json
# Should show array of images with src, alt, width, height
```

### Step 5: View in App

```bash
npm run dev
# Open http://localhost:3000
# Navigate to any page using Gallery component
# Should see image grid with tiles
```

---

## Integration Checklist

### Using Gallery on a Page

To display the gallery on a Next.js page:

```typescript
// app/gallery/page.tsx
import Gallery from '@/components/Gallery';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Gallery />
      </div>
    </main>
  );
}
```

Or for featured images on homepage:

```typescript
// app/page.tsx (excerpt)
import Gallery from '@/components/Gallery';

export default function HomePage() {
  return (
    <section className="py-16">
      <Gallery
        featured={true}
        columns={{ mobile: 1, tablet: 2, desktop: 3 }}
        showMetadata={false}
      />
    </section>
  );
}
```

### Using Individual Images

If you want to reference images programmatically:

```typescript
// Direct JSON import (static, type-safe)
import galleryManifest from '@/content/gallery.json';

export default function SomeComponent() {
  const images = galleryManifest.gallery;

  return (
    <div>
      {images.map((img) => (
        <img key={img.galleryId} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
}
```

---

## Known Limitations & Assumptions

| Item                | Status            | Notes                                        |
| ------------------- | ----------------- | -------------------------------------------- |
| Windows paths       | ✅ Tested         | Handles `\` and `/` correctly                |
| Large images        | ✅ Handled        | Sharp processes files 10MB+ (slow but works) |
| Duplicate detection | ✅ Implemented    | Content hash, not filename                   |
| EXIF rotation       | ✅ Fixed          | Auto-normalizes all orientations             |
| Alt text            | ⚠️ Auto-generated | May need manual refinement                   |
| WebP format         | ✅ Universal      | 99%+ browser support                         |
| Next.js 14          | ✅ Compatible     | Uses App Router, React 18 features           |
| TypeScript 5.3+     | ✅ Compatible     | Strict mode enabled                          |

---

## Troubleshooting Quick Reference

| Problem                                     | Solution                                          |
| ------------------------------------------- | ------------------------------------------------- |
| "Command not found: import-photos"          | Run `npm install` first                           |
| "PHOTO_SOURCE environment variable not set" | Set env var: `set PHOTO_SOURCE=C:\path\to\folder` |
| "Source folder does not exist"              | Check path is correct, folder exists              |
| "No image files found"                      | Check file extensions (.jpg, .png, .gif)          |
| "Failed to process image"                   | Image may be corrupted - try another image        |
| "TypeScript compile error"                  | Run `npm run type-check` to see full error        |
| Build fails                                 | Ensure all dependencies installed: `npm install`  |
| Gallery not showing images                  | Check gallery.json has items, manifest imported   |

---

## What Gets Deployed

### Production Bundle Should Include:

✅ `public/images/gallery/*.webp` - Gallery tiles
✅ `public/images/hero/*.webp` - Hero images
✅ `public/images/square/*.webp` - Square thumbnails
✅ `content/gallery.json` - Manifest
✅ Build artifact (next/image optimizations)

### What NOT to Deploy:

❌ Source images (Desktop folder)
❌ `.env` files with paths
❌ `scripts/import-photos.mjs` (for build servers, only needed locally)
❌ Node modules

---

## Performance Validation

### Check Image Formats

```bash
# Verify all are WebP:
file public/images/gallery/*.webp
# Should show: WebP image data, 1200 x 1500

file public/images/hero/*.webp
# Should show: WebP image data, 1600 x 900

file public/images/square/*.webp
# Should show: WebP image data, 1200 x 1200
```

### Check File Sizes

```bash
# Windows:
dir public\images\gallery\
# Should show ~800 KB - 1.5 MB per file

# macOS/Linux:
ls -lh public/images/gallery/
# 800K-1.5M per file is normal
```

### Lighthouse Audit

```bash
npm run build
npm run start
# Open http://localhost:3000
# Run Lighthouse in DevTools (⚡ icon)
# Should see: Performance 85+, LCP < 2.5s
```

---

## Next Steps After Setup

1. **Import your real photos** (not test images)

   ```bash
   set PHOTO_SOURCE=C:\Users\{name}\Desktop\lenafotki
   npm run import:photos
   ```

2. **Refine alt text** in `content/gallery.json` (auto-generated but should be meaningful)

3. **Add Gallery to your templates** (see Integration Checklist above)

4. **Test on mobile** (ensure responsive grid looks good)

5. **Deploy to production** (images are static files, no special handling needed)

6. **Monitor performance** (1% slower load = 7% lost conversions)

---

## Success Criteria

✅ All files created and updated
✅ npm run type-check passes
✅ npm run build succeeds
✅ npm run dev starts without errors
✅ Gallery renders with sample images
✅ Lightbox opens on image click
✅ All images are WebP format
✅ No console errors in DevTools

**If all above are true → You're ready to import real photos!** 🚀

---

## Questions?

- Detailed docs: See `docs/PHOTO_IMPORT_PIPELINE.md`
- Component API: See `src/components/gallery/types.ts`
- Import script details: See comments in `scripts/import-photos.mjs`
- README reference: See README.md's "Photo Import Pipeline" section
