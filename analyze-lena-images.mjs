#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const imageDir = 'C:\\Users\\marek\\OneDrive\\Pulpit\\lena fotki';
const imageFiles = ['lena001.jpg', 'lena002.jpg', 'lena003.jpg', 'lena004.jpg', 'lena005.jpg'];

function assessQuality(width, height, fileSizeKb) {
  const megapixels = (width * height) / 1_000_000;

  if (megapixels < 1 && fileSizeKb < 50) return 'low';
  if (megapixels < 2 && fileSizeKb < 100) return 'low-medium';
  if (megapixels < 4 && fileSizeKb < 200) return 'medium';
  if (megapixels < 12 && fileSizeKb < 500) return 'high';
  return 'premium';
}

function getRecommendedUses(width, height, orientation, quality) {
  const uses = [];

  // Orientation-based recommendations
  if (orientation === 'Landscape') {
    uses.push('hero_banner');
    uses.push('featured_content_background');
  } else if (orientation === 'Portrait') {
    uses.push('mobile_featured_image');
    uses.push('testimonial_avatar');
  } else if (orientation === 'Square') {
    uses.push('gallery_grid');
    uses.push('social_media');
  }

  // Resolution-based recommendations
  if (width >= 1920 || height >= 1920) {
    uses.push('hero_section_full_hd');
  } else if (width >= 1200 || height >= 1200) {
    uses.push('medium_featured_image');
  }

  // Quality-based recommendations
  if (['high', 'premium'].includes(quality)) {
    uses.push('above_the_fold_content');
  }

  if (['low', 'low-medium'].includes(quality)) {
    uses.push('thumbnail');
    uses.push('small_gallery');
  }

  return uses.length > 0 ? uses : ['general_use'];
}

async function analyzeImages() {
  console.log('═'.repeat(80));
  console.log('IMAGE ANALYSIS REPORT');
  console.log('═'.repeat(80));
  console.log(`\nAnalyzing images from: ${imageDir}\n`);

  const results = [];

  for (const filename of imageFiles) {
    const filepath = path.join(imageDir, filename);

    try {
      if (!fs.existsSync(filepath)) {
        console.log(`❌ ${filename}: File not found`);
        results.push({
          filename,
          status: 'not_found',
          error: 'File not found',
        });
        continue;
      }

      // Get file size
      const stats = fs.statSync(filepath);
      const fileSizeKb = stats.size / 1024;

      // Get image metadata
      const metadata = await sharp(filepath).metadata();
      const { width, height, format } = metadata;

      // Calculate metrics
      const megapixels = (width * height) / 1_000_000;
      const aspectRatio = (width / height).toFixed(2);

      // Determine orientation
      let orientation = 'Square';
      if (width > height) orientation = 'Landscape';
      else if (height > width) orientation = 'Portrait';

      const quality = assessQuality(width, height, fileSizeKb);
      const recommendedUses = getRecommendedUses(width, height, orientation, quality);

      // Print summary
      console.log(`📄 ${filename}`);
      console.log(`   Dimensions: ${width}x${height}`);
      console.log(`   Megapixels: ${megapixels.toFixed(2)}`);
      console.log(`   Aspect Ratio: ${width}:${height} (${aspectRatio})`);
      console.log(`   Orientation: ${orientation}`);
      console.log(`   File Size: ${fileSizeKb.toFixed(2)} KB (${stats.size} bytes)`);
      console.log(`   Format: ${format.toUpperCase()}`);
      console.log(`   Quality: ${quality}`);
      console.log(`   Recommended Uses: ${recommendedUses.join(', ')}`);
      console.log();

      results.push({
        filename,
        status: 'success',
        dimensions: {
          width,
          height,
          display: `${width}x${height}`,
        },
        megapixels: parseFloat(megapixels.toFixed(2)),
        aspect_ratio: parseFloat(aspectRatio),
        aspect_ratio_display: `${width}:${height}`,
        orientation,
        file_size: {
          kb: parseFloat(fileSizeKb.toFixed(2)),
          bytes: stats.size,
        },
        format: format.toUpperCase(),
        quality_assessment: quality,
        recommended_uses: recommendedUses,
        web_suitability: {
          hero_section: width >= 1920 && height >= 600,
          gallery_thumbnail: true,
          featured_image: width >= 800 && height >= 600,
          mobile_optimized: height <= 2000,
        },
      });
    } catch (error) {
      console.log(`❌ ${filename}: Error - ${error.message}`);
      results.push({
        filename,
        status: 'error',
        error: error.message,
      });
    }
  }

  console.log('═'.repeat(80));
  console.log(`Total images analyzed: ${results.length}`);
  console.log(`Successful: ${results.filter((r) => r.status === 'success').length}`);

  // Save JSON report
  const report = {
    summary: {
      total_images: results.length,
      successful: results.filter((r) => r.status === 'success').length,
      source_directory: imageDir,
      analysis_timestamp: new Date().toISOString(),
    },
    images: results,
  };

  const outputFile = path.join(__dirname, 'image_analysis_report.json');
  fs.writeFileSync(outputFile, JSON.stringify(report, null, 2), 'utf-8');

  console.log(`\n✅ Report saved to: ${outputFile}\n`);

  return report;
}

await analyzeImages().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
