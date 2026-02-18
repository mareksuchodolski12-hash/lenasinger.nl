'use client';

import { useState } from 'react';
import { siteContent } from '@/content/siteContent';

export function ContactForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked ? 'on' : 'off',
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({
          type: 'success',
          text: siteContent.contact.successMessage,
        });
        setFormData({});
      } else {
        setMessage({
          type: 'error',
          text: 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to send inquiry. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-dark-primary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          {siteContent.contact.headline}
        </h2>
        <p className="text-lg text-text-secondary mb-12">{siteContent.contact.subheadline}</p>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`mb-8 p-4 rounded ${
              message.type === 'success'
                ? 'bg-semantic-success/10 border border-semantic-success text-semantic-success'
                : 'bg-semantic-error/10 border border-semantic-error text-semantic-error'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-dark-secondary border border-dark-tertiary p-8 lg:p-12 rounded"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-text-primary font-semibold mb-2">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded text-text-primary focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-text-primary font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded text-text-primary focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Phone */}
            <div>
              <label className="block text-text-primary font-semibold mb-2">Phone (optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded text-text-primary focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-text-primary font-semibold mb-2">Event Type *</label>
              <select
                name="eventType"
                value={formData.eventType || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded text-text-primary focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
              >
                <option value="">Select an event type</option>
                <option value="Corporate">Corporate</option>
                <option value="Wedding">Wedding</option>
                <option value="Club/Private">Club/Private</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Event Date */}
            <div>
              <label className="block text-text-primary font-semibold mb-2">Proposed Date *</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded text-text-primary focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-text-primary font-semibold mb-2">
                City / Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded text-text-primary focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
              />
            </div>
          </div>

          {/* Venue Name */}
          <div className="mb-6">
            <label className="block text-text-primary font-semibold mb-2">
              Venue Name (if known)
            </label>
            <input
              type="text"
              name="venueName"
              value={formData.venueName || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded text-text-primary focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-text-primary font-semibold mb-2">
              Tell Me About Your Vision *
            </label>
            <textarea
              name="message"
              value={formData.message || ''}
              onChange={handleChange}
              required
              placeholder="What's the vibe? Music style? Budget? Anything helps!"
              rows={6}
              className="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded text-text-primary focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 resize-none"
            />
          </div>

          {/* Set Length */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-text-primary font-semibold mb-2">
                Set Length (optional)
              </label>
              <select
                name="setLength"
                value={formData.setLength || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded text-text-primary focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
              >
                <option value="">Select duration</option>
                <option value="30 min">30 minutes</option>
                <option value="45 min">45 minutes</option>
                <option value="60 min">60 minutes</option>
                <option value="90 min">90 minutes</option>
                <option value="120 min+">120 minutes or more</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
          </div>

          {/* Newsletter Opt-in */}
          <div className="mb-8">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="newsletterOptIn"
                checked={formData.newsletterOptIn === 'on'}
                onChange={handleChange}
                className="w-5 h-5 accent-accent-500 cursor-pointer"
              />
              <span className="text-text-secondary">I'd like updates about new performances</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-accent-500 text-white font-bold rounded hover:bg-accent-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </button>

          {/* Assurance Text */}
          <p className="text-text-muted text-sm text-center mt-4">
            Usually reply within 24 hours. I read every message personally.
          </p>
        </form>

        {/* Quick Contact */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-dark-secondary border border-dark-tertiary p-6 rounded text-center">
            <h4 className="text-text-primary font-bold mb-2">Call or Text</h4>
            <p className="text-accent-500 font-bold mb-2">{siteContent.brand.phone}</p>
            <p className="text-text-muted text-sm">Available 10am–6pm</p>
          </div>

          <div className="bg-dark-secondary border border-dark-tertiary p-6 rounded text-center">
            <h4 className="text-text-primary font-bold mb-2">Email</h4>
            <p className="text-accent-500 font-bold mb-2">{siteContent.brand.email}</p>
            <p className="text-text-muted text-sm">Preferred for details</p>
          </div>

          <div className="bg-dark-secondary border border-dark-tertiary p-6 rounded text-center">
            <h4 className="text-text-primary font-bold mb-2">Instagram</h4>
            <a
              href={siteContent.brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-500 font-bold hover:text-accent-400 transition-colors"
            >
              @lena_streetartist
            </a>
            <p className="text-text-muted text-sm">DM for quick questions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
