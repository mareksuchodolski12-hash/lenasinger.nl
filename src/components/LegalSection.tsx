'use client';

import { useState } from 'react';

export function LegalSection() {
  const [openSection, setOpenSection] = useState<'privacy' | 'terms' | null>(null);

  const toggleSection = (section: 'privacy' | 'terms') => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section
      id="legal"
      className="py-20 px-6 sm:px-8 lg:px-12 bg-dark-primary border-t border-dark-tertiary"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4 text-center">Legal</h2>
        <p className="text-lg text-text-secondary text-center mb-12">
          Transparency and respect for your data—that's our foundation.
        </p>

        {/* Legal Items */}
        <div className="space-y-4">
          {/* Privacy Policy */}
          <div className="border border-dark-tertiary rounded overflow-hidden">
            <button
              onClick={() => toggleSection('privacy')}
              className="w-full px-6 py-4 bg-dark-secondary hover:bg-dark-tertiary transition-colors flex justify-between items-center text-left"
            >
              <span className="text-lg font-bold text-text-primary">Privacy Policy</span>
              <svg
                className={`w-5 h-5 text-accent-500 transition-transform ${
                  openSection === 'privacy' ? 'rotate-180' : ''
                }`}
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
            </button>

            {openSection === 'privacy' && (
              <div className="px-6 py-6 bg-dark-primary border-t border-dark-tertiary space-y-4 text-text-secondary text-sm leading-relaxed">
                <p>
                  <strong>Data We Collect</strong>
                </p>
                <p>
                  When you contact us through our website (email form, WhatsApp, phone), we collect
                  the information you provide: name, email address, phone number, and details about
                  your event.
                </p>

                <p>
                  <strong>How We Use Your Data</strong>
                </p>
                <p>
                  We use this information solely to respond to your inquiry, provide quotes, and
                  coordinate your event. We do not sell, share, or use your data for marketing
                  unless you explicitly consent.
                </p>

                <p>
                  <strong>Cookies & Tracking</strong>
                </p>
                <p>
                  Our website uses only essential cookies necessary for basic functionality. We do
                  not use trackers or analytics that profile you. If this changes, we will update
                  this policy.
                </p>

                <p>
                  <strong>Data Storage & Security</strong>
                </p>
                <p>
                  We retain your contact information as long as necessary to handle your inquiry and
                  coordinate your event. After fulfillment, we may keep records for invoicing and
                  reference (with your consent). We do not guarantee absolute security but take
                  reasonable measures to protect your data.
                </p>

                <p>
                  <strong>Your Rights</strong>
                </p>
                <p>
                  You may request access to, correction of, or deletion of your personal data at any
                  time. Contact us at{' '}
                  <a
                    href="mailto:hello@lenasinger.com"
                    className="text-accent-500 hover:text-accent-700"
                  >
                    hello@lenasinger.com
                  </a>
                  .
                </p>

                <p>
                  <strong>Policy Changes</strong>
                </p>
                <p>We may update this policy. Changes will be posted here with an updated date.</p>
              </div>
            )}
          </div>

          {/* Terms of Service */}
          <div className="border border-dark-tertiary rounded overflow-hidden">
            <button
              onClick={() => toggleSection('terms')}
              className="w-full px-6 py-4 bg-dark-secondary hover:bg-dark-tertiary transition-colors flex justify-between items-center text-left"
            >
              <span className="text-lg font-bold text-text-primary">Terms of Service</span>
              <svg
                className={`w-5 h-5 text-accent-500 transition-transform ${
                  openSection === 'terms' ? 'rotate-180' : ''
                }`}
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
            </button>

            {openSection === 'terms' && (
              <div className="px-6 py-6 bg-dark-primary border-t border-dark-tertiary space-y-4 text-text-secondary text-sm leading-relaxed">
                <p>
                  <strong>Service Agreement</strong>
                </p>
                <p>
                  By booking Lena for your event, you agree to these terms. A contract will be
                  signed at the time of booking with specific details (date, time, venue,
                  performance length, payment terms).
                </p>

                <p>
                  <strong>Booking & Payment</strong>
                </p>
                <p>
                  A deposit is required to secure your date. Full payment is due by the agreed date
                  before your event. Accepted payment methods will be specified in your contract.
                  Invoices are issued upon booking.
                </p>

                <p>
                  <strong>Cancellation Policy</strong>
                </p>
                <p>
                  Cancellations more than 60 days before your event: full refund of deposit.
                  Cancellations 30–60 days: 50% of the deposit is non-refundable. Cancellations less
                  than 30 days: deposit is non-refundable. In case of performer emergency, we will
                  make good-faith efforts to reschedule or provide referrals.
                </p>

                <p>
                  <strong>Event Details & Responsibility</strong>
                </p>
                <p>
                  You are responsible for providing accurate event details (date, time, venue,
                  contact person, technical setup). Changes to the contract must be made in writing.
                  The client is responsible for providing a safe venue and following all local laws
                  and venue policies.
                </p>

                <p>
                  <strong>Performance Guarantee</strong>
                </p>
                <p>
                  We commit to delivering professional, high-quality live performance. If
                  performance is canceled due to performer illness or emergency, we will provide
                  referrals or reschedule at no additional cost.
                </p>

                <p>
                  <strong>Recording & Media Rights</strong>
                </p>
                <p>
                  Event recording (photos, video) may be used by either party for portfolio and
                  promotional purposes unless explicitly restricted in the contract. You own the
                  right to your event photos/video; we own the right to our performance footage.
                </p>

                <p>
                  <strong>Liability</strong>
                </p>
                <p>
                  The performer is not responsible for technical failures not caused by performer
                  error, venue issues, or third-party actions. The client assumes responsibility for
                  the safety of all attendees and the security of the venue.
                </p>

                <p>
                  <strong>Modifications to These Terms</strong>
                </p>
                <p>
                  These terms may be updated at any time. Clients will be notified of material
                  changes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
