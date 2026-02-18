// src/components/services/ServiceCard.tsx
import { Service } from '@/types/index';
import { CTAButton } from '../common/CTAButton';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <div className="card-dark card-hover flex flex-col h-full">
    <div className="text-5xl mb-4">{service.icon}</div>

    <h3 className="text-2xl font-serif font-bold text-primary-50 mb-2">{service.title}</h3>

    <p className="text-primary-300 mb-4 flex-grow">{service.description}</p>

    {service.price && <p className="text-accent-400 font-semibold mb-4">{service.price}</p>}

    <ul className="text-primary-200 text-sm mb-6 space-y-2">
      {service.features.slice(0, 3).map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-accent-500 mt-1">✓</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <CTAButton href={`/services/${service.slug}`} size="sm">
      Learn More
    </CTAButton>
  </div>
);
