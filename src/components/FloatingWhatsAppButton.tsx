'use client';

import { useEffect, useState } from 'react';

export function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  const whatsappUrl =
    'https://wa.me/31625379014?text=Hi%20Lena%2C%20I%20would%20like%20to%20check%20availability%20for%20an%20event.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 md:bottom-8 md:right-8"
      aria-label="Chat with Lena on WhatsApp"
      title="Chat with Lena on WhatsApp"
    >
      <svg
        className="w-7 h-7 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.325 0-2.591.516-3.532 1.446-.941.93-1.458 2.19-1.458 3.512 0 1.33.517 2.59 1.458 3.52.941.93 2.206 1.447 3.532 1.447h.006c1.326 0 2.592-.517 3.533-1.447.941-.93 1.458-2.19 1.458-3.52 0-1.322-.517-2.582-1.458-3.512-.94-.93-2.206-1.446-3.531-1.446zm5.616-9.913C6.033 2.065 0 8.066 0 15.483 0 22.9 6.033 24 12.055 24 19.076 24 24 18.976 24 12c0-6.052-4.924-11.618-11.945-11.618zm0 20.992c-5.513 0-9.979-4.466-9.979-9.979 0-5.514 4.466-9.98 9.979-9.98 5.514 0 9.48 4.467 9.48 9.98 0 5.513-3.966 9.979-9.48 9.979z" />
      </svg>
    </a>
  );
}
