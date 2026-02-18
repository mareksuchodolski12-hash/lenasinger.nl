import { siteContent } from '@/content/siteContent';

export function Stats() {
  return (
    <section className="bg-dark-secondary py-12 lg:py-16 border-b border-dark-tertiary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {siteContent.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent-500 mb-2">
                {stat.number}
              </div>
              <div className="text-text-primary font-semibold mb-1">{stat.label}</div>
              <div className="text-text-muted text-sm">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
