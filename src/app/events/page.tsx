import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { siteContent } from '@/content/siteContent';

export const metadata = {
  title: 'Events | Lena Singer',
  description:
    'Upcoming performances and archive of past events. Corporate galas, weddings, venues, festival appearances.',
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Events & Performances
            </h1>
            <p className="text-xl text-text-secondary">
              Upcoming shows and a look back at memorable moments.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-12">Upcoming Performances</h2>

            {siteContent.events.upcoming.length > 0 ? (
              <div className="space-y-6">
                {siteContent.events.upcoming.map((event, idx) => (
                  <div
                    key={idx}
                    className="bg-dark-primary border border-dark-tertiary p-8 rounded hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-text-primary mb-2">{event.title}</h3>
                        <p className="text-text-secondary mb-2">{event.venue}</p>
                        <p className="text-accent-500 font-bold">{event.date}</p>
                      </div>
                      <a
                        href={event.ticketsUrl}
                        className="px-6 py-3 bg-accent-500 text-white font-bold rounded hover:bg-accent-700 transition-all whitespace-nowrap"
                      >
                        Get Tickets
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-dark-primary border border-dark-tertiary p-12 rounded text-center">
                <p className="text-text-secondary text-lg">
                  No upcoming events scheduled at the moment.
                </p>
                <p className="text-text-muted mt-2">
                  Check back soon or follow Instagram for announcements.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Past Events Archive */}
        {siteContent.events.archive.length > 0 && (
          <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-primary">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-text-primary mb-12">Past Events</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {siteContent.events.archive.map((event, idx) => (
                  <div
                    key={idx}
                    className="bg-dark-secondary border border-dark-tertiary rounded overflow-hidden hover:shadow-lg transition-all"
                  >
                    {/* Image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-accent-500/20 to-accent-500/10 flex items-center justify-center text-text-muted">
                      Event Image
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-lg font-bold text-text-primary flex-1">
                          {event.title}
                        </h3>
                        <span className="text-xs font-bold uppercase px-3 py-1 bg-accent-500/20 text-accent-500 rounded flex-shrink-0">
                          {event.type}
                        </span>
                      </div>

                      <p className="text-text-secondary mb-1">{event.venue}</p>
                      <p className="text-text-muted text-sm">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Book Next Event CTA */}
        <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-secondary text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Ready to Book?</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Check my availability and let's create your next unforgettable moment.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-500 text-white font-bold rounded hover:bg-accent-700 transition-all"
          >
            Check Availability
          </a>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
