/**
 * Gallery Data Types
 *
 * Defines the shape of gallery.json and component props
 */

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  galleryId: string;
}

export interface GalleryImageWithOrientation extends GalleryImage {
  orientation?: 'portrait' | 'landscape' | 'square';
}

export interface GalleryManifest {
  featured: GalleryImage[];
  gallery: GalleryImageWithOrientation[];
  square: GalleryImage[];
  metadata?: {
    importedAt: string;
    sourceFolder: string;
    totalCount: number;
  };
}

export interface GalleryProps {
  /**
   * Filter gallery to specific orientation
   * If undefined, show all
   */
  filterOrientation?: 'portrait' | 'landscape' | 'square';

  /**
   * Show only featured images (hero section)
   */
  featured?: boolean;

  /**
   * Grid columns (mobile responsive)
   */
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };

  /**
   * Show metadata (import date, count)
   */
  showMetadata?: boolean;
}
