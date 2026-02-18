export function LocalSection() {
  return (
    <section id="local" className="py-16 px-6 sm:px-8 lg:px-12 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2 text-center">
          Available for Local & Destination Events
        </h2>
        <p className="text-text-secondary text-center mb-12">
          Professional coordination, fast response, real presence.
        </p>

        {/* Three Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Point 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-accent-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">
              Local Events & Destination Bookings
            </h3>
            <p className="text-text-secondary text-sm">
              Ready for your local celebration or traveling to your destination—wherever your event
              is, we make it happen.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-accent-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">
              Fast Response via Email & WhatsApp
            </h3>
            <p className="text-text-secondary text-sm">
              Quick availability checks, flexible communication, and seamless coordination to make
              booking stress-free.
            </p>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-accent-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">
              Professional Setup & Coordination
            </h3>
            <p className="text-text-secondary text-sm">
              Full technical support, clear communication, and a calm presence from initial contact
              through your event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
