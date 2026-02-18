/**
 * LENA SINGER | Master Content File
 * Single source of truth for all website copy
 *
 * Update this file to change content across the entire site
 */

export const siteContent = {
  brand: {
    name: 'Lena',
    tagline: 'Premium Live Performances',
    description:
      'Vocalist & live performer — 21 years of stage experience. Emotional, professional, unforgettable.',
    email: 'hello@lenasinger.com',
    phone: '+31 6 25379014',
    whatsapp: '',
    instagram: 'https://www.instagram.com/lena_streetartist?igsh=MWhoYXBubXQwZmJucg==',
    tiktok: 'https://www.tiktok.com/@_lena_singer_?_r=1&_t=ZN-941R26Bfcms',
    location: '[Your City]',
  },

  hero: {
    eyebrow: '21 Years. 400+ Shows. Real Emotion.',
    headline: 'The Voice Your Event Will Remember',
    subheadline:
      'Live performances that connect. From intimate weddings to corporate galas. A voice, a presence, and genuine commitment to your moment.',
    ctaPrimary: 'Check Availability',
    ctaSecondary: 'Watch Live',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with real video
    imageUrl: '/images/hero-lena-performance.jpg', // Replace with real image
  },

  stats: [
    {
      number: '21',
      label: 'Years on Stage',
      detail: 'First performance at age 7',
    },
    {
      number: '400+',
      label: 'Live Performances',
      detail: 'Corporate • weddings • private',
    },
    {
      number: 'Fully Live',
      label: 'No Backing Tracks',
      detail: 'Just voice, presence, connection',
    },
  ],

  mediaSection: {
    eyebrow: 'LIVE HIGHLIGHTS',
    headline: 'Hear Lena Live',
    subheadline:
      'Raw emotion. Real performances. No backing tracks—just voice, presence, and connection.',
    featuredVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with real video
    featuredVideoCaption: 'Recent Performance • December 2025',
    audioTracks: [
      {
        title: "Original - 'Neon Nights'",
        platform: 'SoundCloud',
        embedUrl: 'https://soundcloud.com/artist/track', // Replace with real embed
      },
      {
        title: "Cover - 'Hallelujah'",
        platform: 'Spotify',
        embedUrl: 'https://open.spotify.com/track/...', // Replace with real embed
      },
      {
        title: 'Studio Session',
        platform: 'SoundCloud',
        embedUrl: 'https://soundcloud.com/artist/track', // Replace with real embed
      },
    ],
  },

  services: [
    {
      id: 'corporate',
      title: 'Corporate Events',
      subtitle: 'Galas, launches, conferences',
      badge: 'Most Popular',
      promise: 'The moment your guests talk about for years.',
      basePrice: 2500,
      includes: [
        '30–60 minute live performance',
        'Custom setlist (your vibe, my voice)',
        'Professional audio setup (or use yours)',
        'Sound check + technical rehearsal',
        'Video recording included',
      ],
      addOns: [
        'Extended set (+30 minutes)',
        'Custom acoustic arrangement',
        'Live band or string backup',
      ],
      bestFor:
        'Company milestones, executive galas, product launches, industry conferences—any event where you need a memorable opening or centerpiece.',
    },
    {
      id: 'wedding',
      title: 'Premium Weddings',
      subtitle: 'Ceremony, reception, intimate dinners',
      badge: 'Most Booked',
      promise: 'A voice that makes the moment unforgettable.',
      basePrice: 3500,
      includes: [
        '45–90 minute performance',
        'Setlist consultation (I suggest some classics, you choose the mood)',
        'Full tech + backup music (if needed)',
        '2 rehearsals (remote + on-site)',
        '4K video recording with highlight edit (7 min)',
      ],
      addOns: [
        'Ceremony solo (emotional opening for bride)',
        'Live band or string quartet backup',
        'Extended performance (full evening)',
      ],
      bestFor:
        'Couples who want live emotion in their ceremony, sophisticated entertainment during cocktail hour, or a stunning first dance moment they will replay forever.',
    },
    {
      id: 'club',
      title: 'Club & Private Shows',
      subtitle: 'Bars, venues, private parties',
      badge: 'Flexible',
      promise: 'High energy or intimate—whatever your space demands.',
      basePrice: 1800,
      includes: [
        '60–120 minute flexible performance',
        'Custom setlist (originals, covers, requests)',
        'Full technical coordination with your venue',
        'Sound engineer liaison',
        'Complete recording rights (per agreement)',
      ],
      addOns: [
        'DJ + full production backup',
        'Backup band or karaoke integration',
        'Extended show (up to 4 hours)',
      ],
      bestFor:
        'Jazz bars, private dinner parties, venue residencies, festival appearances, or any space where you need a performer who reads the room and delivers.',
    },
  ],

  whyLena: [
    {
      title: 'Raw, Unrehearsed Sound',
      description:
        'No backing tracks. No lip-sync. Just a live voice and a performance that feels personal—because it is.',
      proof: 'Fully live vocals • No backing tracks',
    },
    {
      title: 'I Read the Room',
      description:
        'I adapt in real time—soft when you want intimacy, strong when the moment needs lift.',
      proof: 'Flexible flow • Responsive to the vibe',
    },
    {
      title: 'You Can Rely on Me',
      description:
        'Clear communication, professional setup, and calm coordination—so you can stay present and enjoy the night.',
      proof: 'Soundcheck-ready • Smooth coordination',
    },
    {
      title: 'Your Vision, My Voice',
      description:
        'We shape the mood together—song choices, pacing, and the feel of the room. Your event, your rules.',
      proof: 'Custom setlist options • Event-first approach',
    },
  ],

  testimonials: [
    {
      quote:
        'We needed someone who could command a room and make our keynote moment unforgettable. Lena delivered both. Our CEO is still talking about it.',
      author: 'Marcus T.',
      context: 'Corporate Gala • 2025',
      avatar: '/images/avatar-1.jpg', // Replace with real avatar
    },
    {
      quote:
        "She didn't sing at our wedding. She made people cry in the best way. Honestly, best decision we made.",
      author: 'Sarah M.',
      context: 'Wedding • June 2025',
      avatar: '/images/avatar-2.jpg',
    },
    {
      quote:
        "Clients ask for her by name. She's that rare performer—technically brilliant but still completely human on stage. Books her if you can.",
      author: 'David K.',
      context: 'Venue Owner',
      avatar: '/images/avatar-3.jpg',
    },
    {
      quote:
        'For our 40th anniversary dinner, I wanted someone special. Lena transformed the evening. Our guests asked for her contact info before dessert.',
      author: 'Elena R.',
      context: 'Private Event Host',
      avatar: '/images/avatar-4.jpg',
    },
    {
      quote:
        "She brought this energy I can't describe. Professional, adaptable, and genuinely connected to the music and audience. Booking her again next year.",
      author: 'Miguel S.',
      context: 'Festival Curator',
      avatar: '/images/avatar-5.jpg',
    },
    {
      quote:
        'For my sister\'s wedding, I booked Lena. She was nervous it would feel "too much," but somehow Lena hit the perfect emotional note. Still talking about it.',
      author: 'Jennifer T.',
      context: 'Event Coordinator',
      avatar: '/images/avatar-6.jpg',
    },
  ],

  venueLogos: [
    { name: 'Venue 1', logo: '/images/logo-1.png' },
    { name: 'Venue 2', logo: '/images/logo-2.png' },
    { name: 'Venue 3', logo: '/images/logo-3.png' },
    { name: 'Venue 4', logo: '/images/logo-4.png' },
    { name: 'Venue 5', logo: '/images/logo-5.png' },
    { name: 'Venue 6', logo: '/images/logo-6.png' },
  ],

  gallery: [
    {
      url: '/images/gallery-1.jpg',
      alt: 'Lena performing on stage with dramatic lighting',
      category: 'Performance',
    },
    {
      url: '/images/gallery-2.jpg',
      alt: 'Close-up of Lena singing with emotion',
      category: 'Performance',
    },
    {
      url: '/images/gallery-3.jpg',
      alt: 'Full stage performance at corporate gala',
      category: 'Corporate',
    },
    {
      url: '/images/gallery-4.jpg',
      alt: 'Wedding ceremony performance',
      category: 'Wedding',
    },
    {
      url: '/images/gallery-5.jpg',
      alt: 'Candid moment with audience connection',
      category: 'Behind-the-scenes',
    },
    {
      url: '/images/gallery-6.jpg',
      alt: 'Studio recording session',
      category: 'Studio',
    },
    {
      url: '/images/gallery-7.jpg',
      alt: 'Band collaboration during performance',
      category: 'Collaboration',
    },
    {
      url: '/images/gallery-8.jpg',
      alt: 'Intimate venue performance',
      category: 'Club',
    },
    {
      url: '/images/gallery-9.jpg',
      alt: 'Sound check preparation',
      category: 'Behind-the-scenes',
    },
    {
      url: '/images/gallery-10.jpg',
      alt: 'Microphone moment on stage',
      category: 'Performance',
    },
  ],

  story: {
    headline: "Lena's Story",
    content: `I was seven years old the first time I stepped onto a stage. I didn't know the word "performance" yet—I only knew what it felt like to stand in front of people and offer something real. One breath. One note. One moment where everything else goes quiet.

Since then, life has led me through more than 400 events—weddings in the rain, corporate rooms lit by spotlights, and intimate dinners where I could literally see emotions rise to the surface. Those nights taught me something no rehearsal ever could: people don't remember perfect. They remember honest. They remember how you made them feel.

Music found me early—through cello and piano lessons, through discipline and repetition, through learning how to listen as much as I play. But singing… singing is where I learned how to say the things words can't hold. It's where joy becomes tangible. Where tenderness has a sound. Where courage shows up quietly, right in the middle of a song.

I'm not here to be background noise. I'm here to create a moment—something your guests will carry with them when the lights dim and the room empties. Every show is different because every room is different. Every couple. Every story. Every audience. And I take that personally—in the best way.

When you book me, you're not just hiring entertainment. You're inviting someone who cares deeply about getting it right: the pacing, the tone, the small details that make the whole night feel effortless. Someone who reads the room, protects the atmosphere, and brings a calm, steady presence to your biggest moments.

If you want a performance that feels human—alive—like it's happening just for you… then we'll make something unforgettable together.

In a voice you can hear your own heart.`,
  },

  faq: [
    {
      question: "Do you travel? What's the radius?",
      answer:
        "Yes, I travel regularly. I'm based in [Your City], but I've performed at events within 2–4 hours driving distance, and I'm open to longer distances for the right event. Travel costs (fuel, accommodation) can be discussed and added to the quote. For international work, let's talk separately.",
    },
    {
      question: "What's your technical setup? Do I need special equipment?",
      answer:
        "I'm flexible. I can perform completely acoustic (just a microphone) or with full backing music, piano, or a live band. I have a tech rider (downloadable on /media) with full specs for audio, lighting, and stage setup. Most venues have what I need, but I work with your team to coordinate. No surprises—just collaboration.",
    },
    {
      question: 'Can we customize my setlist? Do you take requests?',
      answer:
        "Absolutely. We'll discuss your music style, mood, and any special songs you want included. I do originals, covers (across genres), and custom arrangements. The setlist gets finalized 2 weeks before your event so I can prepare fully. If you have a favorite song, I'll do my best to learn it—just ask early.",
    },
    {
      question: 'Do you take breaks? How long do you perform?',
      answer:
        "Yes. For performances over 60 minutes, I typically take a 15-minute break every hour. Total performance time is flexible—30 minutes (cocktail opener) to 120+ minutes (full evening entertainment). We'll figure out what works for your event during our consultation.",
    },
    {
      question: "What if I want a special song that you don't usually sing?",
      answer:
        "Send me the song and I'll learn it. For requests submitted more than 4 weeks before your event, I'll have it performance-ready. Last-minute requests (under 2 weeks) are possible but might require backing music instead of live accompaniment. Let's see what's possible.",
    },
    {
      question: "What's the deposit & payment schedule?",
      answer:
        "I require a 50% non-refundable deposit to hold your date. Remaining balance due 2 weeks before the event. I accept wire transfer, credit card, and PayPal. Full refund if you cancel more than 30 days out; partial (50%) refund 15–30 days out; non-refundable within 15 days. If you need to reschedule, we'll work with you.",
    },
    {
      question: 'How far in advance should I book? What if I need this soon?',
      answer:
        "I book 2–3 months out on average, but I manage a waiting list for last-minute openings. If your date is soon, send an inquiry and we'll see what's possible. The sooner you book, the more time we have to perfect every detail.",
    },
    {
      question: 'How do you handle audio/video recordings & usage rights?',
      answer:
        "For performances I'm recording (as part of your package), you get an edited highlight video. You own the rights to use it on your website, social media, and personal archives. If you're recording and want to publish to YouTube or professionally, let's discuss licensing separately. Simple rule: everything's transparent, nothing's sneaky.",
    },
  ],

  contact: {
    headline: "Let's Work Together",
    subheadline: 'Check availability. Discuss your vision. Book your moment.',
    successMessage: "Thank you! I'll review your inquiry and be in touch within 24 hours.",
    formFields: [
      { name: 'name', label: 'Your Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Phone (optional)', type: 'tel', required: false },
      {
        name: 'eventType',
        label: 'Event Type',
        type: 'select',
        required: true,
        options: ['Corporate', 'Wedding', 'Club/Private', 'Other'],
      },
      { name: 'eventDate', label: 'Proposed Date', type: 'date', required: true },
      { name: 'location', label: 'City / Location', type: 'text', required: true },
      { name: 'venueName', label: 'Venue Name (if known)', type: 'text', required: false },
      {
        name: 'message',
        label: 'Tell Me About Your Vision',
        type: 'textarea',
        required: true,
        placeholder: "What's the vibe? Music style? Budget? Anything helps!",
      },
      {
        name: 'setLength',
        label: 'Set Length (optional)',
        type: 'select',
        required: false,
        options: ['30 min', '45 min', '60 min', '90 min', '120 min+', 'Flexible'],
      },
      {
        name: 'newsletterOptIn',
        label: "I'd like updates about new performances",
        type: 'checkbox',
        required: false,
      },
    ],
  },

  footer: {
    tagline: 'Lena Singer | Premium Live Performances | Events & Booking',
    quickLinks: [{ label: 'Legal', href: '#legal' }],
    legal: [
      { label: 'Privacy Policy', href: '#legal' },
      { label: 'Terms of Service', href: '#legal' },
    ],
  },

  pressKit: {
    headline: 'Press Kit & Media Assets',
    subheadline: 'Download high-resolution photos, bio, tech rider, and marketing materials.',
    sections: [
      {
        title: 'Photos',
        files: [
          { name: 'Lena_Headshot_HR.jpg', size: '5.2 MB' },
          { name: 'Lena_Performance_HR.jpg', size: '8.1 MB' },
          { name: 'Lena_Studio_HR.jpg', size: '6.7 MB' },
        ],
      },
      {
        title: 'Documents',
        files: [
          { name: 'Tech_Rider.pdf', size: '234 KB' },
          { name: 'Press_Kit.pdf', size: '1.2 MB' },
          { name: 'Bio_Short.docx', size: '45 KB' },
          { name: 'Bio_Long.docx', size: '67 KB' },
        ],
      },
    ],
  },

  events: {
    upcoming: [
      {
        title: 'Corporate Gala - Tech Conference 2026',
        date: 'March 15, 2026',
        venue: '[Venue Name]',
        ticketsUrl: '#',
      },
      {
        title: 'Jazz Lounge Monthly Performance',
        date: 'March 22, 2026',
        venue: '[Venue Name]',
        ticketsUrl: '#',
      },
    ],
    archive: [
      {
        title: 'Wedding Reception',
        date: 'December 2025',
        venue: '[Venue Name]',
        type: 'Wedding',
        image: '/images/event-1.jpg',
      },
      {
        title: 'Holiday Corporate Celebration',
        date: 'December 2025',
        venue: '[Venue Name]',
        type: 'Corporate',
        image: '/images/event-2.jpg',
      },
    ],
  },
};

export type SiteContent = typeof siteContent;
