import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lena Singer',
  description: 'Lena Singer website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
