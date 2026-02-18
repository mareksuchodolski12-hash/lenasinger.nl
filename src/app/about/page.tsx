// src/app/about/page.tsx
import { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { CTAButton } from '@/components/common/CTAButton';
import { generatePageMetadata, generateOpenGraph } from '@/lib/metadata';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Me - Professional Singer & Vocal Coach',
  description:
    'Learn about my background, experience, and approach to creating unforgettable musical experiences.',
  openGraph: generateOpenGraph(
    'About Me',
    'Learn more about the professional singer and vocal coach',
    undefined,
    `${SITE_URL}/about`
  ),
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-12 bg-gradient-to-b from-primary-800 to-primary-900">
        <Container>
          <h1 className="section-heading">About Me</h1>
        </Container>
      </section>

      <section className="py-20 bg-primary-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div>
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-accent-500/30 bg-primary-800 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl mb-4">🎤</p>
                  <p className="text-primary-400">Professional Photo</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-primary-50">
                Professional Vocalist & Coach
              </h2>

              <div className="space-y-4 text-primary-200">
                <p>
                  With over 10 years of professional experience, I've had the privilege of
                  performing at hundreds of weddings, corporate events, and intimate concerts. My
                  passion for music began in childhood and has evolved into a mission to create
                  unforgettable musical experiences.
                </p>

                <p>
                  I specialize in creating the perfect atmosphere for your event—whether that's
                  romantic elegance for a wedding ceremony, sophisticated entertainment for a
                  corporate gala, or energetic performance for a live concert.
                </p>

                <p>
                  Beyond performing, I'm dedicated to sharing my knowledge through vocal coaching
                  and workshops. I believe in a personalized approach that builds confidence and
                  technique from the ground up.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary-50 mb-3">Specialties</h3>
                <ul className="space-y-2">
                  {[
                    'Wedding Ceremonies & Receptions',
                    'Corporate Events & Galas',
                    'Jazz & Contemporary Music',
                    'Vocal Coaching for All Levels',
                    'Live Concert Performances',
                    'Event Music Consultation',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent-500 mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-50 mb-4">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-primary-200 mb-8 max-w-2xl mx-auto">
              Whether you're planning a wedding, corporate event, or looking for vocal coaching, I'm
              here to help.
            </p>
            <CTAButton href="/contact" size="lg">
              Get in Touch
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
