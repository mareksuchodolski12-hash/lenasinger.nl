// src/components/home/ServicesOverview.tsx
import { Container } from '../common/Container';
import { ServiceCard } from '../services/ServiceCard';
import { Service } from '@/types/index';

interface ServicesOverviewProps {
  services: Service[];
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => (
  <section className="py-20 bg-primary-900">
    <Container>
      <div className="text-center mb-16">
        <h2 className="section-heading">Our Services</h2>
        <p className="section-subheading text-center mx-auto">
          Comprehensive music solutions for your most important moments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Container>
  </section>
);
