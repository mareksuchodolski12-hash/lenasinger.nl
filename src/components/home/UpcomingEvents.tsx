// src/components/home/UpcomingEvents.tsx
import { Container } from '../common/Container';
import { EventCard } from '../events/EventCard';
import { Event } from '@/types/index';
import { CTAButton } from '../common/CTAButton';

interface UpcomingEventsProps {
  events: Event[];
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => (
  <section className="py-20 bg-primary-800">
    <Container>
      <div className="text-center mb-16">
        <h2 className="section-heading">Upcoming Events</h2>
        <p className="section-subheading text-center mx-auto">
          Find me performing at local venues this season
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {events.slice(0, 4).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div className="text-center">
        <CTAButton href="/events" variant="outline">
          View All Events →
        </CTAButton>
      </div>
    </Container>
  </section>
);
