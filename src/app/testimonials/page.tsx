// src/app/testimonials/page.tsx
import { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { getTestimonials } from '@/lib/content';
import { generatePageMetadata, generateOpenGraph } from '@/lib/metadata';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Testimonials - Client Reviews & Feedback',
  description:
    'See what clients say about our wedding music, corporate event entertainment, and vocal coaching.',
  openGraph: generateOpenGraph(
    'Testimonials',
    'See what our satisfied clients say',
    undefined,
    `${SITE_URL}/testimonials`
  ),
});

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      <section className="pt-20 pb-12 bg-gradient-to-b from-primary-800 to-primary-900">
        <Container>
          <h1 className="section-heading">Testimonials</h1>
          <p className="section-subheading text-center mx-auto">
            Real feedback from satisfied clients
          </p>
        </Container>
      </section>

      <section className="py-20 bg-primary-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {testimonials.length > 0 && (
            <div className="mt-16 pt-16 border-t border-primary-700 text-center">
              <h2 className="text-2xl font-serif font-bold text-primary-50 mb-4">
                Ready to Create Your Own Story?
              </h2>
              <p className="text-primary-300 mb-8 max-w-2xl mx-auto">
                Join the list of satisfied clients who've experienced professional entertainment at
                their most important events.
              </p>
              <a href="/contact" className="btn-primary">
                Get in Touch
              </a>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
