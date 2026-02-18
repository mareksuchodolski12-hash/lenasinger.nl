import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { MediaSection } from '@/components/MediaSection';
import { Story } from '@/components/Story';
import { BookingSection } from '@/components/BookingSection';
import { LocalSection } from '@/components/LocalSection';
import { LegalSection } from '@/components/LegalSection';
import { FloatingWhatsAppButton } from '@/components/FloatingWhatsAppButton';
import { Footer } from '@/components/Footer';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';

export const metadata = {
  title: 'Lena Singer | Premium Live Performances for Events & Weddings',
  description:
    'Hire Lena for corporate galas, premium weddings, and private events. 21 years of live performance. Emotional, professional, unforgettable.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <MediaSection />
        <section className="bg-dark-primary px-6 sm:px-8 lg:px-12 pb-20 lg:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 h-[300px] sm:h-[420px] lg:h-[520px]">
              <Image
                src="/images/lena/lena001.jpg"
                alt="Lena portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 1280px"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </section>
        <Story />
        <BookingSection />
        <LocalSection />
        <LegalSection />
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingWhatsAppButton />
    </>
  );
}
