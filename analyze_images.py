import os
from PIL import Image
import json

def assess_quality(width, height, file_size_kb):
    """Assess quality level based on resolution and file size."""
    megapixels = (width * height) / 1_000_000
    
    if megapixels < 1 and file_size_kb < 50:
        return 'low'
    elif megapixels < 2 and file_size_kb < 100:
        return 'low-medium'
    elif megapixels < 4 and file_size_kb < 200:
        return 'medium'
    elif megapixels < 12 and file_size_kb < 500:
        return 'high'
    else:
        return 'premium'

def get_recommended_uses(width, height, orientation, quality):
    """Suggest ideal web uses based on technical properties."""
    uses = []
    
    if orientation == 'Landscape':
        uses.append('hero_banner')
        uses.append('featured_content_background')
    elif orientation == 'Portrait':
        uses.append('mobile_featured_image')
        uses.append('testimonial_avatar')
    elif orientation == 'Square':
        uses.append('gallery_grid')
        uses.append('social_media')
    
    if width >= 1920 or height >= 1920:
        uses.append('hero_section_full_hd')
    elif width >= 1200 or height >= 1200:
        uses.append('medium_featured_image')
    
    if quality in ['high', 'premium']:
        uses.append('above_the_fold_content')
    
    if quality in ['low', 'low-medium']:
        uses.append('thumbnail')
        uses.append('small_gallery')
    
    return uses if uses else ['general_use']

folder_path = r"C:\Users\marek\OneDrive\Pulpit\lena fotki"

images_data = []

for filename in sorted(os.listdir(folder_path)):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        filepath = os.path.join(folder_path, filename)
        try:
            img = Image.open(filepath)
            width, height = img.size
            file_size_kb = os.path.getsize(filepath) / 1024
            aspect_ratio = width / height if height > 0 else 0
            megapixels = (width * height) / 1_000_000
            
            # Determine orientation
            if width > height:
                orientation = "Landscape"
            elif height > width:
                orientation = "Portrait"
            else:
                orientation = "Square"
            
            quality = assess_quality(width, height, file_size_kb)
            recommended_uses = get_recommended_uses(width, height, orientation, quality)
            
            images_data.append({
                "filename": filename,
                "dimensions": {
                    "width": width,
                    "height": height,
                    "display": f"{width}x{height}"
                },
                "megapixels": round(megapixels, 2),
                "file_size": {
                    "kb": round(file_size_kb, 2),
                    "bytes": os.path.getsize(filepath)
                },
                "aspect_ratio": round(aspect_ratio, 2),
                "aspect_ratio_display": f"{width}:{height}",
                "orientation": orientation,
                "quality_assessment": quality,
                "format": img.format,
                "recommended_uses": recommended_uses
            })
        except Exception as e:
            print(f"Error processing {filename}: {str(e)}")

# Print results
print("=" * 80)
print("IMAGE ANALYSIS REPORT")
print("=" * 80)

for img in images_data:
    print(f"\n📄 {img['filename']}")
    print(f"   Dimensions: {img['dimensions']['display']}")
    print(f"   Megapixels: {img['megapixels']}")
    print(f"   Aspect Ratio: {img['aspect_ratio_display']} ({img['aspect_ratio']})")
    print(f"   Orientation: {img['orientation']}")
    print(f"   File Size: {img['file_size']['kb']} KB ({img['file_size']['bytes']} bytes)")
    print(f"   Quality: {img['quality_assessment']}")
    print(f"   Recommended Uses: {', '.join(img['recommended_uses'])}")

print(f"\n{'=' * 80}")
print(f"Total images found: {len(images_data)}")

# Export to JSON
output_file = 'image_analysis_report.json'
report = {
    "summary": {
        "total_images": len(images_data),
        "source_directory": folder_path
    },
    "images": images_data
}

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(report, f, indent=2, ensure_ascii=False)

print(f"✅ Report saved to: {output_file}")
