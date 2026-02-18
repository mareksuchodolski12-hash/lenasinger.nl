// src/components/common/StickyCtaButton.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { trackCtaClick } from '@/utils/conversion-tracking';

interface StickyCtaButtonProps {
  /** Custom text for the button (default: "Check Availability") */
  text?: string;
  /** Show after N milliseconds (default: 2000) */
  showDelay?: number;
  /** Hide if user scrolls back to top within N px (default: 100) */
  hideThreshold?: number;
  /** Custom className for styling */
  className?: string;
  /** Variant for different styles */
  variant?: 'primary' | 'accent' | 'ghost';
}

/**
 * Sticky CTA Button Component
 *
 * Displays a persistent "Call to Action" button that:
 * - Appears after user scrolls down
 * - Tracks conversion events via Google Analytics
 * - Persists across scrolling
 * - Can be dismissed by user
 * - Responsive design (hidden on mobile by default)
 *
 * Usage:
 * ```tsx
 * <StickyCtaButton
 *   text="Book Now"
 *   showDelay={3000}
 *   variant="accent"
 * />
 * ```
 */
export function StickyCtaButton({
  text = 'Check Availability',
  showDelay = 2000,
  hideThreshold = 100,
  className = '',
  variant = 'primary',
}: StickyCtaButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Variant color classes
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white',
    ghost: 'bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  };

  // Initialize after client-side mount
  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let showAfterDelay = false;

    const handleScroll = () => {
      // Show after user scrolls down past threshold and delay has passed
      if (window.scrollY > hideThreshold) {
        if (!showAfterDelay) {
          showTimer = setTimeout(() => {
            setIsVisible(true);
            showAfterDelay = true;
          }, showDelay);
        }
      } else {
        // Hide if user scrolls back to top
        setIsVisible(false);
        if (showTimer) clearTimeout(showTimer);
        showAfterDelay = false;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (showTimer) clearTimeout(showTimer);
    };
  }, [showDelay, hideThreshold]);

  const handleCtaClick = () => {
    trackCtaClick(text, 'sticky-bottom');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Sticky Button - Hidden on mobile, shows on larger screens */}
      <Link
        href="/contact"
        onClick={handleCtaClick}
        className={`
          fixed bottom-6 right-6 z-40
          hidden lg:block
          px-6 py-3 rounded-lg
          font-semibold text-sm
          transition-all duration-300
          shadow-lg hover:shadow-xl
          transform hover:scale-105
          ${variantClasses[variant] || variantClasses.primary}
          ${className}
        `}
        title={text}
      >
        {text}
      </Link>

      {/* Mobile Bar - Shows on mobile instead of floating button */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 lg:hidden z-40
          bg-white border-t border-gray-200
          shadow-lg
          animate-slideUp
          transition-all duration-300
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-800">Ready to book?</p>
            <p className="text-xs text-gray-600">
              Available for events this {new Date().getMonth() === 11 ? 'holiday season' : 'season'}
            </p>
          </div>
          <Link
            href="/contact"
            onClick={handleCtaClick}
            className={`
              flex-shrink-0 ml-4
              px-4 py-2 rounded-md whitespace-nowrap
              font-semibold text-sm
              transition-all duration-200
              ${variantClasses[variant] || variantClasses.primary}
            `}
          >
            {text}
          </Link>
        </div>
      </div>
    </>
  );
}

/**
 * Variant: Mobile-only sticky bar
 * Use this if you want CTA visible only on mobile
 */
export function MobileCtaBar({
  text = 'Check Availability',
  subtitle = 'Available for events this season',
}: {
  text?: string;
  subtitle?: string;
}) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-800">{text}</p>
            <p className="text-xs text-gray-600">{subtitle}</p>
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Variant: Announcement banner (above sticky button)
 * Use this for limited-time offers
 */
export function CtaAnnouncement({
  text = '🎉 Book now and get 10% off!',
  expiresAt,
}: {
  text?: string;
  expiresAt?: Date;
}) {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (!expiresAt) return;

    const checkExpiry = () => {
      if (new Date() > expiresAt) {
        setIsExpired(true);
      }
    };

    checkExpiry();
    const timer = setInterval(checkExpiry, 60000); // Check every minute

    return () => clearInterval(timer);
  }, [expiresAt]);

  if (isExpired) return null;

  return (
    <div className="bg-accent-50 border-b border-accent-200 px-4 py-3 text-center">
      <p className="text-sm font-medium text-accent-900">{text}</p>
      {expiresAt && (
        <p className="text-xs text-accent-700 mt-1">
          Offer expires {expiresAt.toLocaleDateString()}
        </p>
      )}
    </div>
  );
}
