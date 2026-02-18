// src/types/index.ts
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  price?: string;
  duration?: string;
  features: string[];
  includes: string[];
  cta: string;
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'wedding' | 'corporate' | 'festival' | 'workshop' | 'concert';
  description: string;
  bookingUrl?: string;
  status: 'upcoming' | 'past';
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  type?: 'wedding' | 'corporate' | 'workshop' | 'coaching';
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  category: string;
  content: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceType?: string;
  honeypot?: string; // Anti-spam field (hidden from users)
}

export interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
}
