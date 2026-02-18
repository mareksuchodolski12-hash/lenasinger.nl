'use client';

import { useEffect, useState } from 'react';
import { siteContent } from '@/content/siteContent';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(true);

  // Hide on desktop (breakpoint >= 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) return null;

  const whatsappUrl =
    'https://wa.me/31625379014?text=Hi%20Lena%2C%20I%20would%20like%20to%20check%20availability%20for%20an%20event.';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-primary/95 backdrop-blur-sm border-t border-dark-tertiary z-50 md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full px-4 py-3 flex items-center justify-between gap-3 transition-all active:opacity-75"
      >
        <span className="flex-1 text-left">
          <p className="text-text-primary font-bold text-sm">{siteContent.hero.ctaPrimary}</p>
          <p className="text-text-muted text-xs">Chat on WhatsApp</p>
        </span>
        <div className="bg-[#25D366] text-white rounded flex items-center justify-center px-4 py-3 font-bold hover:bg-[#20BA5A]">
          💬
        </div>
      </a>
    </div>
  );
}
