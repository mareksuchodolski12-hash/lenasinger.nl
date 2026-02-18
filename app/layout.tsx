import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lena Singer | Oprawa muzyczna ślubów i eventów',
  description:
    'Wokalistka na śluby, eventy firmowe i koncerty. Profesjonalna oprawa muzyczna na żywo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
