'use client';

import Image from 'next/image';
import { siteContent } from '@/content/siteContent';

export function Hero() {
  const whatsappUrl =
    'https://wa.me/31625379014?text=Hi%20Lena%2C%20I%20would%20like%20to%20check%20availability%20for%20an%20event.';

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-end justify-start overflow-hidden pt-20">
      {/* Background Image */}
      <Image
        src="/images/lena/lena003.jpg"
        alt="Lena - Singer"
        fill
        priority
        sizes="100vw"
        className="object-cover z-0"
      />

      {/* Backdrop Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] z-10" />

      {/* Brightness Reduction Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Gradient Overlay - Top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 to-transparent z-10" />

      {/* Gradient Overlay - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark-primary/90 via-dark-primary/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative px-6 sm:px-8 lg:px-12 pb-16 lg:pb-20 max-w-3xl w-full z-20">
        {/* Eyebrow */}
        <div className="text-sm font-semibold uppercase letter-spacing-widest text-accent-500 mb-4">
          {siteContent.hero.eyebrow}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight max-w-2xl">
          {siteContent.hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed max-w-xl">
          {siteContent.hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent-500 text-white font-bold rounded hover:bg-accent-700 transition-all hover:scale-105 sm:w-auto text-center"
          >
            {siteContent.hero.ctaPrimary}
          </a>
          <button
            onClick={() => handleScroll('watch')}
            className="px-8 py-4 border-2 border-accent-500 text-text-primary font-bold rounded hover:bg-accent-500 hover:text-white transition-all sm:w-auto"
          >
            {siteContent.hero.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block animate-bounce z-20">
        <svg
          className="w-6 h-6 text-text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
