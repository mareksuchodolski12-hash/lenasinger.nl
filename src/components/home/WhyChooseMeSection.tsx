// src/components/home/WhyChooseMeSection.tsx
import { Container } from '../common/Container';

export const WhyChooseMeSection: React.FC = () => (
  <section className="py-20 bg-primary-800">
    <Container>
      <div className="text-center mb-16">
        <h2 className="section-heading">Why Choose Me?</h2>
        <p className="section-subheading text-center mx-auto">
          Professional excellence meets personal attention
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: '🎯',
            title: 'Personalized Experience',
            description:
              'Every event gets a customized setlist and approach tailored to your needs.',
          },
          {
            icon: '✅',
            title: 'Professional Quality',
            description:
              'Years of experience performing at weddings, corporate events, and concerts.',
          },
          {
            icon: '🔊',
            title: 'Full Technical Support',
            description: 'Professional sound system, microphone, and technical expertise included.',
          },
          {
            icon: '💬',
            title: 'Excellent Communication',
            description: 'Responsive, collaborative approach to planning your perfect event.',
          },
        ].map((item, idx) => (
          <div key={idx} className="card-dark text-center">
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-primary-50 mb-3">{item.title}</h3>
            <p className="text-primary-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
