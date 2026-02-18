import { siteContent } from '@/content/siteContent';

export function Story() {
  return (
    <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-primary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-12 text-center">
          {siteContent.story.headline}
        </h2>

        <div className="prose prose-invert max-w-none font-serif text-lg leading-relaxed">
          {siteContent.story.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-text-secondary mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-12 pt-8 border-t border-dark-tertiary text-center">
          <p className="text-2xl font-serif italic text-accent-500">
            "In a voice you can hear your own heart."
          </p>
        </div>
      </div>
    </section>
  );
}
