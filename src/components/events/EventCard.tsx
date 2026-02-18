// src/components/events/EventCard.tsx
import { Event } from '@/types/index';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const typeEmoji: Record<string, string> = {
    wedding: '💍',
    corporate: '🎤',
    festival: '🎵',
    workshop: '🎼',
    concert: '🎸',
  };

  return (
    <div className="card-dark">
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{typeEmoji[event.type] || '🎭'}</span>
        <span className="inline-block bg-accent-500/20 text-accent-400 text-xs px-3 py-1 rounded-full capitalize">
          {event.type}
        </span>
      </div>

      <h3 className="text-xl font-serif font-bold text-primary-50 mb-2">{event.title}</h3>

      <div className="space-y-2 text-sm text-primary-300 mb-4">
        <p className="flex items-center gap-2">
          <span>📅</span>
          {formattedDate} at {event.time}
        </p>
        <p className="flex items-center gap-2">
          <span>📍</span>
          {event.location}
        </p>
      </div>

      <p className="text-primary-200 text-sm mb-4">{event.description}</p>

      {event.bookingUrl && (
        <a
          href={event.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-400 hover:text-accent-300 text-sm font-semibold transition-colors"
        >
          View Details →
        </a>
      )}
    </div>
  );
};
