// src/components/home/HeroSection.tsx
import Image from 'next/image';
import { CTAButton } from '../common/CTAButton';
import { Container } from '../common/Container';

export const HeroSection: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-b from-primary-800 via-primary-900 to-primary-900 pt-20 flex items-center">
    <Container className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fadeIn">
          <div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary-50 mb-4 leading-tight">
              Premium Live Entertainment
            </h1>
            <p className="text-xl text-primary-300 leading-relaxed">
              Professional vocal performances for weddings, corporate events, and exceptional live
              concerts. Personalized music that creates unforgettable moments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/contact" size="lg">
              Book Your Event
            </CTAButton>
            <CTAButton href="/services" variant="outline" size="lg">
              Explore Services
            </CTAButton>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-700">
            <div>
              <p className="text-3xl font-bold text-accent-500">100+</p>
              <p className="text-sm text-primary-300">Events Performed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-500">50+</p>
              <p className="text-sm text-primary-300">5★ Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-500">10+</p>
              <p className="text-sm text-primary-300">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="animate-slideUp">
          <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-accent-500/30 bg-primary-800 shadow-2xl">
            <Image
              src="/images/hero/hero-1.svg"
              alt="Professional vocalist performing on stage"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </Container>
  </div>
);
