import Link from 'next/link';
import { siteContent } from '@/content/siteContent';

export function Footer() {
  const contactPhone = siteContent.brand.whatsapp || siteContent.brand.phone;
  const whatsappNumber = contactPhone.replace(/[^0-9+]/g, '').replace(/^\+/, '');

  return (
    <footer className="bg-dark-secondary border-t border-dark-tertiary py-12 px-6 sm:px-8 lg:px-12 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 justify-items-center">
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-text-primary font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="text-text-primary font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`}
                  className="text-text-secondary hover:text-accent-500 transition-colors"
                >
                  Call: {contactPhone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-500 transition-colors"
                >
                  WhatsApp: {contactPhone}
                </a>
              </li>
              <li className="text-text-muted text-xs pt-2">Fast response on WhatsApp</li>
              <li className="text-text-muted text-xs">
                I speak English & Polish (PL) — feel free to message in either language.
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center">
            <h4 className="text-text-primary font-bold mb-4">Follow</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteContent.brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-500 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteContent.brand.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-500 transition-colors"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-tertiary pt-8 mb-8">
          {/* Legal Links */}
          <ul className="flex justify-center gap-6 mb-6 flex-wrap">
            {siteContent.footer.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-muted hover:text-accent-500 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-text-muted text-sm text-center mb-2">
            © 2026 Lena Singer. All rights reserved.
          </p>
          <p className="text-text-muted text-sm text-center mb-4">{siteContent.footer.tagline}</p>

          {/* Website Credit */}
          <p className="text-text-muted text-xs text-center">
            Website by{' '}
            <a
              href="https://systempilot.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-500 transition-colors"
            >
              systempilot.nl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
