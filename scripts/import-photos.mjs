#!/usr/bin/env node

/**
 * Photo Import Pipeline
 *
 * One-time import script that:
 * 1. Reads images from a Windows Desktop folder
 * 2. Optimizes and crops into multiple aspect ratios (4:5, 16:9, 1:1)
 * 3. Generates deterministic WebP outputs
 * 4. Produces static gallery.json manifest
 *
 * USAGE:
 *   PHOTO_SOURCE="C:\Users\{user}\Desktop\lenafotki" npm run import:photos
 *
 * DESIGN:
 * - No runtime Desktop access (one-time import)
 * - Deterministic output (sorted by filename)
 * - Smart crop using attention detection
 * - Duplicate detection via content hash
 * - WebP only for performance
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================================
// CONFIG
// ============================================================================

const PHOTO_SOURCE = process.env.PHOTO_SOURCE || null;
const PROJECT_ROOT = path.resolve(__dirname, '..');

const OUTPUT_DIRS = {
  gallery: path.join(PROJECT_ROOT, 'public/images/gallery'),
  hero: path.join(PROJECT_ROOT, 'public/images/hero'),
  square: path.join(PROJECT_ROOT, 'public/images/square'),
  originals: path.join(PROJECT_ROOT, 'public/images/originals'),
};

const MANIFEST_PATH = path.join(PROJECT_ROOT, 'content/gallery.json');

// Aspect ratio specs: { width, height, quality, fit }
const ASPECT_RATIOS = {
  gallery: { width: 1200, height: 1500, quality: 82, label: 'portrait (4:5)' },
  hero: { width: 1600, height: 900, quality: 82, label: 'landscape (16:9)' },
  square: { width: 1200, height: 1200, quality: 82, label: 'square (1:1)' },
};

// Image extensions to process
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.heic', '.tiff'];

// Junk files to skip
const SKIP_FILENAMES = /^(thumbs\.db|\.ds_store|desktop\.ini)$/i;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Normalize a Windows or Unix path to forward slashes
 */
function normalizePath(inputPath) {
  return inputPath.replace(/\\/g, '/');
}

/**
 * Calculate SHA256 hash of file buffer for duplicate detection
 */
function calculateHash(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

/**
 * Check if file is likely an image
 */
function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext) && !SKIP_FILENAMES.test(filename);
}

/**
 * Generate stable filename: lena-0001.webp, lena-0002.webp, etc.
 */
function generateStableFilename(index) {
  return `lena-${String(index + 1).padStart(4, '0')}.webp`;
}

/**
 * Process a single image into all aspect ratios
 */
async function processImage(inputBuffer, filename, index) {
  const stableFilename = generateStableFilename(index);
  const results = {};
  const errors = [];

  try {
    // Step 1: Compute input dimensions and EXIF data
    let image = sharp(inputBuffer);
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height) {
      throw new Error(`No dimensions detected for ${filename}`);
    }

    // Step 2: Normalize orientation (remove EXIF, rotate if needed)
    // If image has rotation metadata, apply it
    let orientedImage = image.rotate(); // auto-rotate based on EXIF
    orientedImage = orientedImage.withMetadata(false); // remove EXIF to ensure consistency

    // Step 3: Generate each aspect ratio
    for (const [type, spec] of Object.entries(ASPECT_RATIOS)) {
      try {
        const outputDir = OUTPUT_DIRS[type];
        const outputPath = path.join(outputDir, stableFilename);

        // Create directory if not exists
        fs.mkdirSync(outputDir, { recursive: true });

        // Resize with smart crop (position: "attention" uses entropy detection)
        // This keeps the "main subject" in frame
        await orientedImage
          .resize(spec.width, spec.height, {
            fit: 'cover', // crop to exact dimensions
            position: 'attention', // smart crop to interesting area
          })
          .webp({ quality: spec.quality })
          .toFile(outputPath);

        results[type] = {
          src: `/images/${type}/${stableFilename}`,
          path: outputPath,
          width: spec.width,
          height: spec.height,
        };

        console.log(`  ✓ ${type}: ${stableFilename} (${spec.label})`);
      } catch (err) {
        errors.push(`  ✗ ${type}: ${err.message}`);
      }
    }

    return { stableFilename, results, errors };
  } catch (err) {
    throw new Error(`Failed to process ${filename}: ${err.message}`);
  }
}

/**
 * Extract basic alt text from filename
 * E.g., "lena-singing-at-wedding.jpg" -> "Singing at wedding"
 */
function generateAltText(filename) {
  return filename
    .replace(/\.(jpg|jpeg|png|gif|webp|heic|tiff)$/i, '') // remove extension
    .replace(/^[^-]*-/, '') // remove lena prefix if exists
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ============================================================================
// MAIN IMPORT LOGIC
// ============================================================================

async function importPhotos() {
  console.log('================================================');
  console.log('  📸 Photo Import Pipeline');
  console.log('================================================\n');

  // Validate input
  if (!PHOTO_SOURCE) {
    console.error('❌ Error: PHOTO_SOURCE environment variable not set');
    console.error('Usage: PHOTO_SOURCE="C:\\Users\\...\\Desktop\\lenafotki" npm run import:photos');
    process.exit(1);
  }

  if (!fs.existsSync(PHOTO_SOURCE)) {
    console.error(`❌ Error: Source folder does not exist: ${PHOTO_SOURCE}`);
    process.exit(1);
  }

  console.log(`📁 Source folder: ${normalizePath(PHOTO_SOURCE)}`);
  console.log(`📁 Output root: ${normalizePath(PROJECT_ROOT)}\n`);

  // Step 1: List all files
  console.log('🔍 Scanning for images...');
  const allFiles = fs.readdirSync(PHOTO_SOURCE).sort();
  const imageFiles = allFiles.filter(isImageFile);

  if (imageFiles.length === 0) {
    console.log('⚠️  No image files found. Supported: ' + IMAGE_EXTENSIONS.join(', '));
    process.exit(0);
  }

  console.log(`Found ${imageFiles.length} images\n`);

  // Step 2: Process each image
  console.log('⚙️  Processing images...\n');
  const manifest = {
    featured: [],
    gallery: [],
    square: [],
    metadata: {
      importedAt: new Date().toISOString(),
      sourceFolder: normalizePath(PHOTO_SOURCE),
      totalCount: imageFiles.length,
    },
  };

  const seenHashes = new Set(); // For duplicate detection
  let imported = 0;
  let skipped = 0;
  let errors = [];

  for (let i = 0; i < imageFiles.length; i++) {
    const filename = imageFiles[i];
    const fullPath = path.join(PHOTO_SOURCE, filename);

    process.stdout.write(`[${i + 1}/${imageFiles.length}] ${filename} ... `);

    try {
      // Read file
      const buffer = fs.readFileSync(fullPath);
      const hash = calculateHash(buffer);

      // Check for duplicates
      if (seenHashes.has(hash)) {
        console.log('⊘ skipped (duplicate)');
        skipped++;
        continue;
      }
      seenHashes.add(hash);

      // Process image
      const {
        stableFilename,
        results,
        errors: processErrors,
      } = await processImage(
        buffer,
        filename,
        imported // use imported count as index, not i
      );

      if (processErrors.length > 0) {
        console.log('\n' + processErrors.join('\n'));
        errors.push(`${filename}: ${processErrors.join(', ')}`);
      }

      // Build manifest entries
      const alt = generateAltText(filename);
      const galleryId = stableFilename.replace('.webp', '');

      if (results.gallery) {
        manifest.gallery.push({
          src: results.gallery.src,
          alt,
          width: results.gallery.width,
          height: results.gallery.height,
          orientation: 'portrait',
          galleryId,
        });
      }

      if (results.hero) {
        manifest.featured.push({
          src: results.hero.src,
          alt,
          width: results.hero.width,
          height: results.hero.height,
          galleryId,
        });
      }

      if (results.square) {
        manifest.square.push({
          src: results.square.src,
          alt,
          width: results.square.width,
          height: results.square.height,
          galleryId,
        });
      }

      console.log('✓');
      imported++;
    } catch (err) {
      console.log(`✗ ${err.message}`);
      errors.push(err.message);
      skipped++;
    }
  }

  // Step 3: Select featured images (first 5 or all if fewer)
  // Featured images are shown on homepage hero section
  const featuredCount = Math.min(5, manifest.featured.length);
  manifest.featured = manifest.featured.slice(0, featuredCount);

  // Step 4: Write manifest
  console.log('\n📝 Writing manifest...');
  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`   ✓ ${normalizePath(MANIFEST_PATH)}`);

  // Step 5: Summary
  console.log('\n================================================');
  console.log('  ✅ Import Complete');
  console.log('================================================');
  console.log(`Imported:  ${imported}`);
  console.log(`Skipped:   ${skipped}`);
  if (errors.length > 0) {
    console.log(`Errors:    ${errors.length}`);
    console.log('\nError details:');
    errors.forEach((err) => console.log(`  - ${err}`));
  }
  console.log(`Featured:  ${manifest.featured.length}`);
  console.log(`Gallery:   ${manifest.gallery.length}`);
  console.log(`Square:    ${manifest.square.length}`);
  console.log('================================================\n');

  if (errors.length > 0) {
    process.exit(1);
  }
}

// ============================================================================
// RUN
// ============================================================================

importPhotos().catch((err) => {
  console.error('💥 Fatal error:', err.message);
  process.exit(1);
});
