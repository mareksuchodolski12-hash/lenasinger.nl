import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import Link from 'next/link';
import { siteContent } from '@/content/siteContent';

export const metadata = {
  title: 'Services & Packages | Lena Singer',
  description:
    'Explore 3 performance packages: Corporate Events, Premium Weddings, Club & Private Shows. Custom setlist, professional audio, full collaboration.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Services & Packages
            </h1>
            <p className="text-xl text-text-secondary">
              I work with you to create a performance that fits your vision, budget, and venue.
              Every show is unique.
            </p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {siteContent.services.map((service) => (
                <div
                  key={service.id}
                  className="relative bg-dark-primary border border-dark-tertiary p-8 rounded hover:shadow-lg transition-all hover:-translate-y-2"
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-6 right-6 bg-accent-500 text-dark-primary px-3 py-1 rounded text-xs font-bold uppercase">
                      {service.badge}
                    </div>
                  )}

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-text-primary mb-1">{service.title}</h3>
                  <p className="text-text-muted text-sm mb-4">{service.subtitle}</p>

                  {/* Promise */}
                  <p className="text-lg italic text-text-secondary border-l-4 border-accent-500 pl-4 mb-6">
                    {service.promise}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-text-muted text-sm mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-accent-500">
                      ${service.basePrice.toLocaleString()}
                    </p>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="text-text-primary font-bold mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="text-text-secondary text-sm flex gap-3">
                          <span className="text-accent-500 font-bold flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Add-ons */}
                  <details className="mb-6 cursor-pointer">
                    <summary className="text-text-primary font-bold py-2 hover:text-accent-500">
                      Add-ons →
                    </summary>
                    <ul className="space-y-2 mt-3 border-t border-dark-tertiary pt-3">
                      {service.addOns.map((addon, idx) => (
                        <li key={idx} className="text-text-muted text-sm">
                          • {addon}
                        </li>
                      ))}
                    </ul>
                  </details>

                  {/* Best For */}
                  <p className="text-text-muted text-sm mb-6 border-t border-dark-tertiary pt-4">
                    <strong className="text-text-primary">Best for:</strong> {service.bestFor}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/contact?type=${service.id}`}
                    className="block w-full px-6 py-3 bg-accent-500 text-white font-bold text-center rounded hover:bg-accent-700 transition-all"
                  >
                    Inquire
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
