// src/components/testimonials/TestimonialCard.tsx
import { Testimonial } from '@/types/index';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="card-dark flex flex-col h-full">
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <span key={i} className="text-accent-500">
          ★
        </span>
      ))}
    </div>

    {/* Quote */}
    <p className="text-primary-100 italic mb-6 flex-grow">"{testimonial.content}"</p>

    {/* Author */}
    <div className="border-t border-primary-700 pt-4">
      <p className="font-semibold text-primary-50">{testimonial.author}</p>
      <p className="text-primary-400 text-sm">{testimonial.role}</p>
      {testimonial.type && (
        <p className="text-accent-400 text-xs mt-2">
          {testimonial.type.charAt(0).toUpperCase() + testimonial.type.slice(1)}
        </p>
      )}
    </div>
  </div>
);
