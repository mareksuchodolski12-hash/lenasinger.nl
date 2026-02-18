// src/app/layout.tsx
import type { Metadata } from 'next';
import { defaultMetadata } from '@/lib/metadata';
import { generatePersonSchema } from '@/lib/schema';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import '@/styles/globals.css';

export const metadata: Metadata = defaultMetadata;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = generatePersonSchema();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
