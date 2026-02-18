// src/components/common/TrustBadges.tsx
'use client';

import { ReactNode } from 'react';
import { singer } from '@/config/singer';

interface BadgeConfig {
  icon: ReactNode;
  number: number;
  label: string;
  suffix?: string;
  description?: string;
}

interface TrustBadgesProps {
  /** Layout style */
  layout?: 'row' | 'grid';
  /** Badge color variant */
  variant?: 'light' | 'dark' | 'accent';
  /** Show badges in a card wrapper */
  showCard?: boolean;
  /** Custom className */
  className?: string;
}

/**
 * Trust Badges Component
 *
 * Displays professional credibility indicators such as:
 * - Years of experience
 * - Number of events performed
 * - Client testimonial count
 * - Average rating
 *
 * Uses data from singer config for real stats
 *
 * Usage:
 * ```tsx
 * <TrustBadges layout="row" variant="accent" />
 * <TrustBadges layout="grid" showCard />
 * ```
 */
export function TrustBadges({
  layout = 'row',
  variant = 'dark',
  showCard = false,
  className = '',
}: TrustBadgesProps) {
  // Default stats from config, with fallbacks
  const stats: BadgeConfig[] = [
    {
      icon: '🎤',
      number: singer.yearsExperience,
      label: 'Years',
      suffix: 'of Experience',
      description: 'Professional singing career',
    },
    {
      icon: '🎉',
      number: singer.eventsPerformed,
      label: 'Events',
      suffix: 'Performed',
      description: 'Weddings, corporate, festivals',
    },
    {
      icon: '⭐',
      number: singer.averageRating,
      label: 'Star',
      suffix: 'Rating',
      description: `Based on ${singer.clientsReviews} reviews`,
    },
    {
      icon: '👥',
      number: singer.clientsReviews,
      label: 'Clients',
      suffix: 'Reviewed',
      description: 'Average 4.8/5 stars',
    },
  ];

  const variantClasses = {
    light: 'bg-gray-50 border border-gray-200 text-gray-900',
    dark: 'bg-primary-900 border border-primary-800 text-white',
    accent: 'bg-accent-50 border border-accent-200 text-accent-900',
  };

  const containerClasses = {
    row: 'flex flex-wrap items-center justify-around gap-4',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-4',
  };

  const cardContent = (
    <div className={containerClasses[layout]}>
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          {/* Large icon/emoji */}
          <div className="text-3xl mb-2">{stat.icon}</div>

          {/* Number display */}
          <div className="flex items-baseline gap-1">
            <span className="text-2xl md:text-3xl font-bold">{stat.number}</span>
            {stat.suffix && (
              <span className="text-xs md:text-sm font-medium opacity-75">{stat.suffix}</span>
            )}
          </div>

          {/* Label and description */}
          <p className="text-xs md:text-sm font-semibold mt-1">{stat.label}</p>
          {stat.description && <p className="text-xs opacity-60 mt-1">{stat.description}</p>}
        </div>
      ))}
    </div>
  );

  if (showCard) {
    return (
      <div
        className={`
          rounded-xl p-6 md:p-8
          ${variantClasses[variant]}
          ${className}
        `}
      >
        {cardContent}
      </div>
    );
  }

  return <div className={className}>{cardContent}</div>;
}

/**
 * Simpler variant: Just display 2-3 key stats inline
 */
export function InlineTrustBadges() {
  return (
    <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-primary-600">{singer.eventsPerformed}+</span>
        <span className="text-sm text-gray-600">events performed</span>
      </div>
      <div className="h-6 w-px bg-gray-300 hidden md:block" />
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-primary-600">{singer.averageRating}⭐</span>
        <span className="text-sm text-gray-600">from {singer.clientsReviews} clients</span>
      </div>
      <div className="h-6 w-px bg-gray-300 hidden md:block" />
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-primary-600">{singer.yearsExperience}+</span>
        <span className="text-sm text-gray-600">years of experience</span>
      </div>
    </div>
  );
}

/**
 * Section wrapper with heading and trust badges
 * Use this to add credibility section to any page
 */
export function TrustBadgesSection({
  title = 'Why Choose Me?',
  subtitle = 'Trusted by hundreds of satisfied clients',
  layout = 'grid' as const,
}: {
  title?: string;
  subtitle?: string;
  layout?: 'row' | 'grid';
}) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Badges */}
        <TrustBadges layout={layout} showCard variant="light" />
      </div>
    </section>
  );
}

/**
 * Compact version for homepage hero section
 */
export function HeroTrustBadges() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-8">
      {/* Experience badge */}
      <div className="flex items-center gap-3 border-l-4 border-accent-500 pl-4">
        <div className="text-2xl font-bold text-accent-600">{singer.yearsExperience}+</div>
        <div className="text-sm text-gray-600">
          <div className="font-semibold">Years</div>
          <div className="opacity-75">Experience</div>
        </div>
      </div>

      {/* Events badge */}
      <div className="flex items-center gap-3 border-l-4 border-accent-500 pl-4">
        <div className="text-2xl font-bold text-accent-600">{singer.eventsPerformed}+</div>
        <div className="text-sm text-gray-600">
          <div className="font-semibold">Events</div>
          <div className="opacity-75">Performed</div>
        </div>
      </div>

      {/* Rating badge */}
      <div className="flex items-center gap-3 border-l-4 border-accent-500 pl-4">
        <div className="text-2xl font-bold text-accent-600">{singer.averageRating} ⭐</div>
        <div className="text-sm text-gray-600">
          <div className="font-semibold">Client</div>
          <div className="opacity-75">Rating</div>
        </div>
      </div>
    </div>
  );
}
