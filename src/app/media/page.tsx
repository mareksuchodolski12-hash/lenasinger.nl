import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { siteContent } from '@/content/siteContent';

export const metadata = {
  title: 'Press Kit | Lena Singer',
  description:
    "Download Lena's press kit: high-res photos, bio, tech rider PDF, fact sheet. For media inquiries, reviews, and collaboration.",
};

export default function MediaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              {siteContent.pressKit.headline}
            </h1>
            <p className="text-xl text-text-secondary">{siteContent.pressKit.subheadline}</p>
          </div>
        </section>

        {/* Press Kit Content */}
        <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-secondary">
          <div className="max-w-4xl mx-auto">
            {/* Bio Section */}
            <div className="mb-16 bg-dark-primary border border-dark-tertiary p-8 lg:p-12 rounded">
              <h2 className="text-3xl font-bold text-text-primary mb-6">About Lena</h2>
              <div className="font-serif text-lg leading-relaxed">
                {siteContent.story.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-text-secondary mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Downloadable Files */}
            {siteContent.pressKit.sections.map((section, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl font-bold text-text-primary mb-6">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.files.map((file, fileIdx) => (
                    <a
                      key={fileIdx}
                      href="#"
                      className="block p-6 bg-dark-primary border border-dark-tertiary rounded hover:bg-dark-tertiary transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-bold text-text-primary group-hover:text-accent-500 transition-colors">
                            {file.name}
                          </p>
                          <p className="text-text-muted text-sm">{file.size}</p>
                        </div>
                        <svg
                          className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Facts */}
            <div className="bg-dark-primary border border-dark-tertiary p-8 lg:p-12 rounded">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Quick Facts</h2>
              <ul className="space-y-3 text-text-secondary">
                <li>
                  <strong className="text-text-primary">Experience:</strong> 21 years of
                  professional singing, starting age 7
                </li>
                <li>
                  <strong className="text-text-primary">Musical Background:</strong> Formally
                  trained in cello and piano
                </li>
                <li>
                  <strong className="text-text-primary">Performance Count:</strong> 400+ live events
                  (corporate, weddings, private, venues)
                </li>
                <li>
                  <strong className="text-text-primary">Rating:</strong> 4.9/5 from 100+ verified
                  client reviews
                </li>
                <li>
                  <strong className="text-text-primary">Specialties:</strong> Corporate events,
                  premium weddings, clubs, festivals, private performances
                </li>
                <li>
                  <strong className="text-text-primary">Services:</strong> Solo vocals, backing
                  music, custom arrangements, acoustic, full production coordination
                </li>
                <li>
                  <strong className="text-text-primary">Guarantee:</strong> 0 cancellations, 100%
                  on-time delivery
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact for Inquiries */}
        <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-primary text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Media Inquiries?</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            For press features, interviews, or collaboration opportunities, reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${siteContent.brand.email}`}
              className="px-8 py-3 bg-accent-500 text-white font-bold rounded hover:bg-accent-700 transition-all"
            >
              Email
            </a>
            <a
              href={siteContent.brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-accent-500 text-accent-500 font-bold rounded hover:bg-accent-500 hover:text-white transition-all"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
