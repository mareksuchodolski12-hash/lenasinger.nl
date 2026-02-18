'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteContent } from '@/content/siteContent';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-1000 bg-dark-primary/95 backdrop-blur-sm border-b border-dark-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-2xl text-text-primary hover:text-accent-500 transition-colors"
          >
            Lena
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => handleScroll('contact')}
              className="text-text-secondary hover:text-accent-500 transition-colors"
            >
              Booking
            </button>
            <button
              onClick={() => handleScroll('legal')}
              className="text-text-secondary hover:text-accent-500 transition-colors"
            >
              Legal
            </button>
          </div>

          {/* Desktop CTA Button */}
          <button
            onClick={() => handleScroll('contact')}
            className="hidden md:block px-6 py-2 bg-accent-500 text-white font-bold rounded hover:bg-accent-700 transition-all hover:scale-105"
          >
            {siteContent.hero.ctaPrimary}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-secondary border-t border-dark-tertiary py-4">
            <div className="flex flex-col gap-4 px-4">
              <button
                onClick={() => handleScroll('contact')}
                className="text-text-secondary hover:text-accent-500 text-left"
              >
                Booking
              </button>
              <button
                onClick={() => handleScroll('legal')}
                className="text-text-secondary hover:text-accent-500 text-left"
              >
                Legal
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="w-full px-6 py-2 bg-accent-500 text-white font-bold rounded hover:bg-accent-700 transition-all"
              >
                {siteContent.hero.ctaPrimary}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
