// src/app/services/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { CTAButton } from '@/components/common/CTAButton';
import { getServiceBySlug, getServices } from '@/lib/content';
import { generatePageMetadata, generateOpenGraph } from '@/lib/metadata';
import { SITE_URL } from '@/lib/constants';

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return generatePageMetadata({
    title: service.title,
    description: service.longDescription,
    keywords: [service.title, 'booking', 'event'],
    openGraph: generateOpenGraph(
      service.title,
      service.longDescription,
      undefined,
      `${SITE_URL}/services/${service.slug}`
    ),
  });
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="pt-20 pb-12 bg-gradient-to-b from-primary-800 to-primary-900">
        <Container>
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="section-heading mb-4">{service.title}</h1>
            <p className="text-xl text-primary-200">{service.description}</p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-primary-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary-50 mb-4">Overview</h2>
                <p className="text-primary-200 leading-relaxed mb-4">{service.longDescription}</p>
              </div>

              {service.features.length > 0 && (
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary-50 mb-4">Features</h2>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent-500 text-xl flex-shrink-0">✓</span>
                        <span className="text-primary-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.includes.length > 0 && (
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary-50 mb-4">
                    What's Included
                  </h2>
                  <ul className="space-y-3">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent-500 text-xl flex-shrink-0">•</span>
                        <span className="text-primary-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside>
              <div className="card-dark sticky top-32">
                {service.price && (
                  <div className="mb-6">
                    <p className="text-sm text-primary-400 mb-2">Price</p>
                    <p className="text-3xl font-bold text-accent-500">{service.price}</p>
                  </div>
                )}

                {service.duration && (
                  <div className="mb-6 pb-6 border-b border-primary-700">
                    <p className="text-sm text-primary-400 mb-2">Duration</p>
                    <p className="text-lg text-primary-50">{service.duration}</p>
                  </div>
                )}

                <CTAButton href="/contact" className="w-full text-center">
                  {service.cta}
                </CTAButton>

                <p className="text-sm text-primary-400 text-center mt-4">
                  Questions?{' '}
                  <a href="/contact" className="text-accent-400 hover:text-accent-300">
                    Get in touch
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
