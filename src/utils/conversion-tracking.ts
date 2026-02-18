// src/utils/conversion-tracking.ts
// Conversion tracking utility
// Works with Google Analytics, Facebook Pixel, custom tracking

/**
 * Track specific conversion events
 * Designed to work with:
 * - Google Analytics 4
 * - Facebook Pixel
 * - Custom backend tracking
 */

export type ConversionEvent =
  | 'view_service'
  | 'view_testimonial'
  | 'contact_form_view'
  | 'contact_form_submit'
  | 'phone_call'
  | 'email_click'
  | 'read_blog_post'
  | 'check_availability'
  | 'view_event';

export interface ConversionData {
  event: ConversionEvent;
  value?: number;
  currency?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track conversion event with Google Analytics 4
 */
export function trackGA4Event(data: ConversionData) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', data.event, {
      value: data.value,
      currency: data.currency,
      ...data,
    });
  }
}

/**
 * Track conversion event with Facebook Pixel
 */
export function trackFacebookPixel(event: ConversionEvent, value?: number) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', event.toUpperCase(), {
      value: value,
      currency: 'USD',
    });
  }
}

/**
 * Main tracking function - dispatches to all configured trackers
 */
export function trackConversion(data: ConversionData) {
  // Google Analytics
  trackGA4Event(data);

  // Facebook Pixel
  trackFacebookPixel(data.event, data.value);

  // Log for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Conversion tracked:', data);
  }
}

/**
 * Track page view with service context
 */
export function trackPageView(
  pageName: string,
  pageType: 'service' | 'blog' | 'event' | 'testimonial' | 'home',
  additionalData?: Record<string, string | number>
) {
  trackConversion({
    event: 'view_service',
    ...additionalData,
  });
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(serviceType?: string, formData?: Record<string, string>) {
  trackConversion({
    event: 'contact_form_submit',
    serviceType: serviceType || 'general',
    ...formData,
  });
}

/**
 * Track CTA button click
 */
export function trackCtaClick(ctaText: string, location: string) {
  trackConversion({
    event: 'check_availability',
    ctaText,
    location,
  });
}

/**
 * Track phone call intent
 */
export function trackPhoneCall(fromElement: string) {
  trackConversion({
    event: 'phone_call',
    source: fromElement,
  });
}

/**
 * Track email click
 */
export function trackEmailClick(fromElement: string) {
  trackConversion({
    event: 'email_click',
    source: fromElement,
  });
}

/**
 * Track blog post read (time-based)
 * Should be called after user has spent X seconds on page
 */
export function trackBlogEngagement(slug: string, timeSpent: number) {
  trackConversion({
    event: 'read_blog_post',
    slug: slug,
    timeSpentSeconds: timeSpent,
  });
}

/**
 * Setup automatic conversion tracking on page load
 * Call this once in your layout.tsx
 */
export function setupConversionTracking() {
  if (typeof window !== 'undefined') {
    // Track page view with custom context
    window.addEventListener('load', () => {
      const pageTitle = document.title;
      const pageUrl = window.location.pathname;

      trackPageView(pageUrl, 'home', {
        pageTitle,
      });
    });

    // Track when user is about to leave (exit intent)
    document.addEventListener('mouseleave', () => {
      // Could trigger exit intent modal
      // trackConversion({ event: 'exit_intent' });
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        // Track engagement milestones
        if (scrollPercent > 25 && !sessionStorage.getItem('scroll_25')) {
          sessionStorage.setItem('scroll_25', 'true');
        }
        if (scrollPercent > 50 && !sessionStorage.getItem('scroll_50')) {
          sessionStorage.setItem('scroll_50', 'true');
        }
      }
    });
  }
}
