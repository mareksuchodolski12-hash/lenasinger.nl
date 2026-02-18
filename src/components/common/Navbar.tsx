// src/components/common/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CTAButton } from './CTAButton';
import { NAVIGATION_LINKS, SITE_NAME } from '@/lib/constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-primary-900/95 backdrop-blur-md border-b border-primary-800">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-primary-50">
            {SITE_NAME}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive(link.href) ? 'text-accent-500' : 'text-primary-200 hover:text-accent-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <CTAButton href="/contact" size="sm">
              Book Now
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary-800">
            <div className="flex flex-col gap-4 mt-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'bg-accent-500/20 text-accent-400'
                      : 'text-primary-200 hover:text-accent-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <CTAButton
                href="/contact"
                className="w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </CTAButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
