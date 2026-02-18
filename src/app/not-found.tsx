// src/app/not-found.tsx
import Link from 'next/link';
import { Container } from '@/components/common/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-900 pt-20 flex items-center">
      <Container>
        <div className="text-center py-20">
          <p className="text-6xl font-bold text-accent-500 mb-4">404</p>
          <h1 className="text-4xl font-serif font-bold text-primary-50 mb-4">Page Not Found</h1>
          <p className="text-xl text-primary-300 mb-8 max-w-xl mx-auto">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/contact" className="btn-primary-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
