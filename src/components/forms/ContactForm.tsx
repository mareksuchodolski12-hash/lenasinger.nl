// src/components/forms/ContactForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '@/types/index';

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      serviceType: '',
      honeypot: '', // Anti-spam field (hidden from users)
    },
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setSuccess(false);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {success && (
        <div className="p-4 bg-green-900/30 border border-green-600 rounded-lg text-green-300">
          ✓ Message sent successfully! We'll be in touch soon.
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-900/30 border border-red-600 rounded-lg text-red-300">
          ✗ {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-primary-200 mb-2">
            Full Name *
          </label>
          <input
            id="name"
            {...register('name', { required: 'Name is required' })}
            type="text"
            className={errors.name ? 'border-red-500' : ''}
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-primary-200 mb-2">
            Email Address *
          </label>
          <input
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="email"
            className={errors.email ? 'border-red-500' : ''}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-primary-200 mb-2">
            Phone Number
          </label>
          <input id="phone" {...register('phone')} type="tel" placeholder="(555) 123-4567" />
        </div>

        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-semibold text-primary-200 mb-2"
          >
            Service Type
          </label>
          <select {...register('serviceType')} defaultValue="">
            <option value="">Select a service...</option>
            <option value="wedding">Wedding Music</option>
            <option value="corporate">Corporate Event</option>
            <option value="workshop">Vocal Coaching</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-primary-200 mb-2">
          Subject *
        </label>
        <input
          id="subject"
          {...register('subject', { required: 'Subject is required' })}
          type="text"
          className={errors.subject ? 'border-red-500' : ''}
          placeholder="Event details"
        />
        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
      </div>

      {/* Honeypot field - hidden from users, catches spam bots */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="honeypot">Website</label>
        <input
          id="honeypot"
          {...register('honeypot')}
          type="text"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary-200 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          className={`min-h-32 ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Tell us about your event..."
        />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};
