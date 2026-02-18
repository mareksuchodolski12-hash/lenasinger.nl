// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types/index';
import { rateLimit, getClientIp, createRateLimitHeaders } from '@/lib/rate-limit';

const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
];

export async function POST(request: NextRequest) {
  try {
    // CORS check
    const origin = request.headers.get('origin');
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: 'CORS policy violation' }, { status: 403 });
    }

    // Rate limiting - 5 requests per hour per IP
    const clientIp = getClientIp(request);
    const { allowed, remaining, resetTime, retryAfter } = rateLimit(
      clientIp,
      5, // max 5 requests
      60 * 60 * 1000 // per hour
    );

    if (!allowed) {
      const headers = createRateLimitHeaders(remaining, resetTime);
      if (retryAfter) {
        headers['Retry-After'] = retryAfter.toString();
      }

      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: retryAfter,
        },
        {
          status: 429,
          headers,
        }
      );
    }

    // Parse and validate request
    const data: ContactFormData = await request.json();
    const { name, email, phone, subject, message, serviceType, honeypot } = data;

    // Honeypot validation - if filled in, it's a bot
    if (honeypot && honeypot.trim() !== '') {
      // Silently fail - don't reveal that we have a honeypot
      console.warn('Spam submission detected (honeypot filled):', { ip: clientIp });
      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for your message. We will get back to you soon!',
        },
        { status: 200 }
      );
    }

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Sanitize message (prevent injection attacks)
    const sanitizeInput = (input: string) => {
      return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
    };

    const sanitizedName = sanitizeInput(name);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    // For now, just simulate success
    // In production, integrate with Nodemailer, SendGrid, or similar
    /*
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL_FROM,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `New Contact: ${sanitizedSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${serviceType ? `<p><strong>Service:</strong> ${serviceType}</p>` : ''}
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <h3>Message:</h3>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    const headers = createRateLimitHeaders(remaining - 1, resetTime);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
      },
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

// Preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');

  if (!origin) {
    return new NextResponse(null, { status: 200 });
  }

  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
