// src/components/common/Footer.tsx
import Link from 'next/link';
import { SITE_NAME, SINGER_INFO, NAVIGATION_LINKS } from '@/lib/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 border-t border-primary-700 mt-20">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary-50 mb-3">{SITE_NAME}</h3>
            <p className="text-primary-300 text-sm mb-4">{SINGER_INFO.bio}</p>
            <div className="flex gap-3">
              {Object.entries(SINGER_INFO.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-accent-500 transition-colors"
                  aria-label={platform}
                >
                  <span className="capitalize text-sm">{platform}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-50 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-primary-50 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/weddings"
                  className="text-primary-300 hover:text-accent-400 transition-colors"
                >
                  Wedding Music
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate-events"
                  className="text-primary-300 hover:text-accent-400 transition-colors"
                >
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link
                  href="/services/workshops"
                  className="text-primary-300 hover:text-accent-400 transition-colors"
                >
                  Vocal Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-primary-50 mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-300">
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${SINGER_INFO.email}`}
                  className="text-accent-400 hover:text-accent-300"
                >
                  {SINGER_INFO.email}
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a
                  href={`tel:${SINGER_INFO.phone}`}
                  className="text-accent-400 hover:text-accent-300"
                >
                  {SINGER_INFO.phone}
                </a>
              </p>
              <p>
                <strong>Location:</strong> {SINGER_INFO.location}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-400">
            <p>
              &copy; {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-accent-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
