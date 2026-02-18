'use client';

import { siteContent } from '@/content/siteContent';

export function MediaSection() {
  const whatsappUrl =
    'https://wa.me/31625379014?text=Hi%20Lena%2C%20I%20would%20like%20to%20check%20availability%20for%20an%20event.';

  return (
    <section id="watch" className="social-hero-section bg-dark-primary">
      <div className="social-hero">
        <div className="social-hero__overlay" aria-hidden="true" />

        <div className="social-hero__content text-white">
          <div className="social-hero__inner">
            {siteContent.mediaSection.eyebrow && (
              <span className="social-hero__eyebrow text-xs sm:text-sm font-semibold uppercase tracking-[0.45em] text-accent-400">
                {siteContent.mediaSection.eyebrow}
              </span>
            )}
            <h2 className="social-hero__headline text-4xl sm:text-5xl lg:text-6xl font-bold">
              {siteContent.mediaSection.headline}
            </h2>
            <p className="social-hero__subheadline max-w-2xl text-base sm:text-lg text-white/85">
              {siteContent.mediaSection.subheadline}
            </p>

            <div className="social-hero__actions">
              <a
                href={siteContent.brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 sm:flex-none min-w-[200px] items-center justify-center rounded-xl bg-accent-500 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-700"
              >
                Instagram
              </a>

              <a
                href={siteContent.brand.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 sm:flex-none min-w-[200px] items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
              >
                TikTok
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 sm:flex-none min-w-[200px] items-center justify-center rounded-xl border border-[#25D366]/60 bg-[#25D366]/10 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#25D366]/20"
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
