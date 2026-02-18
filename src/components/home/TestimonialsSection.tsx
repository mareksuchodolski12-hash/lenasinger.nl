// src/components/home/TestimonialsSection.tsx
import { Container } from '../common/Container';
import { TestimonialCard } from '../testimonials/TestimonialCard';
import { Testimonial } from '@/types/index';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => (
  <section className="py-20 bg-primary-900">
    <Container>
      <div className="text-center mb-16">
        <h2 className="section-heading">What Clients Say</h2>
        <p className="section-subheading text-center mx-auto">
          Real feedback from real clients who trusted us with their events
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Container>
  </section>
);
