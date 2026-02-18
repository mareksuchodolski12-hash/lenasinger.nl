// src/components/GoogleAnalytics.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function GoogleAnalyticsTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId) return;

    const url = pathname + (searchParams ? searchParams.toString() : '');

    // Track pageview
    window.gtag?.('config', gaId, {
      page_path: url,
    });
  }, [pathname, searchParams, gaId]);

  return null;
}

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  if (!gaId) return null;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsTracker gaId={gaId} />
      </Suspense>
    </>
  );
}
