// src/components/common/ExitIntentModal.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { trackCtaClick } from '@/utils/conversion-tracking';

interface ExitIntentModalProps {
  /** Show the modal automatically on exit intent */
  enabled?: boolean;
  /** Custom heading text */
  heading?: string;
  /** Custom body text */
  bodyText?: string;
  /** Primary CTA text */
  ctaText?: string;
  /** Primary CTA link */
  ctaLink?: string;
  /** Secondary (dismiss) button text */
  dismissText?: string;
  /** How long to wait before showing modal (ms) */
  delay?: number;
  /** Show offer in modal */
  showOffer?: boolean;
  /** Offer text */
  offerText?: string;
  /** Track modal views */
  onModalShow?: () => void;
}

/**
 * Exit Intent Modal Component
 *
 * Triggers when user is about to leave the site (mouse leaves window).
 * Provides a final conversion opportunity with special offer.
 *
 * Features:
 * - Only shows once per session
 * - Tracks conversion event
 * - Dismissible
 * - Responsive design
 * - Accessible with proper ARIA labels
 *
 * Usage:
 * ```tsx
 * <ExitIntentModal
 *   enabled={true}
 *   heading="Wait! Don't miss out"
 *   offerText="Use code LIVE15 for 15% off"
 * />
 * ```
 */
export function ExitIntentModal({
  enabled = true,
  heading = "Don't miss out!",
  bodyText = 'Book a consultation before you go',
  ctaText = 'Check Availability',
  ctaLink = '/contact',
  dismissText = 'Maybe Later',
  delay = 500,
  showOffer = true,
  offerText = 'Limited time: Get 15% off your first consultation',
  onModalShow,
}: ExitIntentModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!enabled || !isClient || hasShown) return;

    let exitTimer: NodeJS.Timeout;
    let isMouseGoingOut = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is going out of top of page
      if (e.clientY < 0) {
        isMouseGoingOut = true;

        // Delay before showing to avoid janky UX
        exitTimer = setTimeout(() => {
          if (isMouseGoingOut && !hasShown) {
            setIsVisible(true);
            setHasShown(true);
            onModalShow?.();

            // Track event
            trackConversion({
              event: 'exit_intent',
              modalShown: true,
            });
          }
        }, delay);
      }
    };

    const handleMouseEnter = () => {
      isMouseGoingOut = false;
      if (exitTimer) clearTimeout(exitTimer);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, [enabled, hasShown, delay, onModalShow, isClient]);

  if (!isClient || !isVisible) {
    return null;
  }

  const handleCtaClick = () => {
    trackCtaClick('Exit Intent CTA', 'exit-modal');
  };

  const handleDismiss = () => {
    setIsVisible(false);
    trackConversion({
      event: 'exit_intent_dismissed',
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={handleDismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 animate-scaleIn"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-modal-heading"
      >
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Heading */}
            <h2
              id="exit-modal-heading"
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              {heading}
            </h2>

            {/* Offer badge */}
            {showOffer && (
              <div className="bg-accent-50 border-l-4 border-accent-500 px-4 py-3 mb-6 rounded">
                <p className="text-sm font-semibold text-accent-900">🎉 {offerText}</p>
              </div>
            )}

            {/* Body text */}
            <p className="text-gray-600 mb-6">{bodyText}</p>

            {/* Benefits list */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold mt-0.5">✓</span>
                <span className="text-sm text-gray-700">
                  Professional performance at your event
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold mt-0.5">✓</span>
                <span className="text-sm text-gray-700">Custom setlist tailored to your needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold mt-0.5">✓</span>
                <span className="text-sm text-gray-700">100+ satisfied clients trust us</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              {/* Primary CTA */}
              <Link
                href={ctaLink}
                onClick={handleCtaClick}
                className="w-full px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
              >
                {ctaText}
              </Link>

              {/* Dismiss button */}
              <button
                onClick={handleDismiss}
                className="w-full px-6 py-3 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-lg transition-colors duration-200"
              >
                {dismissText}
              </button>
            </div>

            {/* Trust indicator */}
            <p className="text-center text-xs text-gray-500 mt-4">
              ⭐ 4.9/5 rating from 250+ clients
            </p>
          </div>
        </div>
      </div>

      {/* Animation styles - add to globals.css or here as style tag */}
      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

/**
 * Alternative: Time-based modal (shows after N seconds on page)
 */
export function TimeBasedModal({
  showAfterSeconds = 15,
  heading = 'Ready to book?',
  bodyText = 'Contact us today to discuss your event',
  ctaText = 'Get Started',
  ctaLink = '/contact',
}: {
  showAfterSeconds?: number;
  heading?: string;
  bodyText?: string;
  ctaText?: string;
  ctaLink?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, showAfterSeconds * 1000);

    return () => clearTimeout(timer);
  }, [showAfterSeconds]);

  if (!isVisible) return null;

  return (
    <ExitIntentModal
      enabled={false}
      heading={heading}
      bodyText={bodyText}
      ctaText={ctaText}
      ctaLink={ctaLink}
    />
  );
}

/**
 * Helper: Import this in your conversion-tracking.ts if you need it
 */
interface ConversionEvent {
  event: 'exit_intent' | 'exit_intent_dismissed' | string;
  [key: string]: string | number | boolean;
}

function trackConversion(data: ConversionEvent) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', data.event, data);
  }
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Conversion tracked:', data);
  }
}
