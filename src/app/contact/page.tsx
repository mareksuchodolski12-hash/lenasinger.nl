import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { siteContent } from '@/content/siteContent';

export const metadata = {
  title: 'Contact | Lena Singer',
  description:
    'Book Lena for your event. Check availability, discuss your vision, book your moment.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* FAQ Section */}
        <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {siteContent.faq.map((item, idx) => (
                <details
                  key={idx}
                  className="bg-dark-primary border border-dark-tertiary rounded cursor-pointer group"
                >
                  <summary className="flex items-center justify-between w-full p-6 font-bold text-text-primary hover:text-accent-500 select-none transition-colors">
                    <span>{item.question}</span>
                    <svg
                      className="w-5 h-5 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </summary>

                  <div className="px-6 pb-6 pt-0 border-t border-dark-tertiary">
                    <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
