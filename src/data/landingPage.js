export const siteData = {
  brand: 'PRISM',
  navLinks: [
    { label: 'Speakers', href: '#speakers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Venue', href: '#venue' },
    { label: 'Tickets', href: '#pricing' },
  ],
  hero: {
    heading: 'PRISM 2026',
    subheading: 'The Future of Technology - Decoded',
    targetDate: '2026-09-15T09:00:00+08:00',
    countdownLabels: ['DAYS', 'HOURS', 'MINS', 'SECS'],
    pass: {
      label: 'VIP ACCESS PASS',
      name: 'PRISM',
      edition: '2026 EDITION',
      type: 'ALL ACCESS',
      ticketNumber: 'PX-26024-88',
      date: 'September 15-17',
      venue: 'Singapore Tech District',
    },
  },
  features: {
    title: 'WHY PRISM?',
    subtitle: 'More than just a conference',
    items: [
      {
        title: 'Cutting-Edge\nContent',
        description: '50+ sessions on AI, quantum computing, and future tech',
        icon: 'zap',
      },
      {
        title: 'Elite Network',
        description: 'Connect with 2,500+ C-suite executives and innovators',
        icon: 'users',
      },
      {
        title: 'World-Class\nSpeakers',
        description: "Learn from pioneers shaping tomorrow's technology",
        icon: 'award',
      },
      {
        title: 'Global Impact',
        description: 'Be part of a movement transforming industries worldwide',
        icon: 'globe',
      },
    ],
  },
  speakers: {
    title: 'SPEAKER LINEUP',
    subtitle: 'Industry pioneers sharing breakthrough insights',
    items: [
      {
        name: 'Sarah Chen',
        image: '/media/photo-1668605335601-ef8d8b875a4f.jpg',
      },
      {
        name: 'Jordan Taylor',
        image: '/media/photo-1583062434105-9bef71509685.jpg',
      },
      {
        name: 'Priya Sharma',
        image: '/media/photo-1752952952773-80378cefc23d.jpg',
      },
      {
        name: 'Marcus Rodriguez',
        image: '/media/photo-1689600944138-da3b150d9cb8.jpg',
      },
    ],
  },
  schedule: {
    title: 'SCHEDULE',
    subtitle: 'Three days of immersive learning',
    days: [
      {
        day: 'Day 1',
        date: 'September 15',
        events: [
          { icon: 'coffee', time: '09:00 AM', title: 'Registration & Welcome Coffee' },
          { icon: 'mic', time: '10:00 AM', title: 'Keynote: The Future of AI', speaker: 'Dr. Sarah Chen' },
          { icon: 'users', time: '11:30 AM', title: 'Panel: Quantum Computing Breakthroughs' },
        ],
      },
      {
        day: 'Day 2',
        date: 'September 16',
        events: [
          { icon: 'mic', time: '09:30 AM', title: 'Morning Keynote: Design Systems at Scale', speaker: 'Jordan Taylor' },
          { icon: 'code', time: '11:00 AM', title: 'Breakout Sessions' },
          { icon: 'coffee', time: '01:00 PM', title: 'Lunch & Expo Hall' },
        ],
      },
      {
        day: 'Day 3',
        date: 'September 17',
        events: [
          { icon: 'mic', time: '09:00 AM', title: 'Startup Pitch Competition' },
          { icon: 'mic', time: '11:00 AM', title: 'Final Keynote: Looking Ahead', speaker: 'Marcus Rodriguez' },
          { icon: 'mic', time: '12:30 PM', title: 'Closing Ceremony & Awards' },
        ],
      },
    ],
  },
  venue: {
    title: 'THE VENUE',
    subtitle: 'State-of-the-art facility in the heart of the tech district',
    images: [
      '/media/photo-1760386129113-6e20e3b59731.jpg',
      '/media/photo-1588178454780-441fa5b99fa5.jpg',
    ],
  },
  pricing: {
    title: 'PRICING',
    subtitle: 'Choose the experience that fits your goals',
    items: [
      {
        name: 'Virtual Pass',
        price: '$299',
        features: [
          'Live streaming access',
          'On-demand replay for 30 days',
          'Virtual networking lounge',
          'Digital swag bag',
          'Community Discord access',
        ],
      },
      {
        name: 'Standard Pass',
        price: '$699',
        features: [
          'Full 3-day access',
          'All sessions & workshops',
          'Networking events',
          'Conference materials',
          'Lunch included',
        ],
      },
      {
        name: 'VIP Pass',
        price: '$1,000',
        badge: 'MOST POPULAR',
        features: [
          'Premium seating',
          'VIP lounge access',
          'Private speaker meet & greets',
          'Exclusive dinner events',
          '1-on-1 consultation slots',
        ],
      },
    ],
  },
  partners: {
    title: 'OUR PARTNERS',
    subtitle: 'Supported by industry leaders',
    items: ['TechCorp', 'InnovateLabs', 'FutureSync', 'QuantumEdge', 'NeuralNet', 'CloudFirst', 'DataPrime', 'CodeForge'],
  },
  testimonials: {
    title: 'TESTIMONIALS',
    subtitle: 'What past attendees are saying',
    items: [
      {
        quote: '"PRISM 2025 completely transformed how I think about AI integration. The networking alone was worth the ticket price."',
        name: 'Emily Zhang',
        role: 'CTO, InnovateCorp',
      },
      {
        quote: '"Best tech conference I\'ve attended in 10 years. The speakers delivered actionable insights, not just theory."',
        name: 'David Park',
        role: 'VP Engineering, TechFlow',
      },
      {
        quote: '"The VIP pass gave me access to incredible one-on-one sessions. Made three partnership deals at the event!"',
        name: 'Priya Sharma',
        role: 'Founder, StartupLab',
      },
    ],
  },
  stats: [
    { value: '50+', label: 'World-Class Speakers', accent: 'cyan' },
    { value: '100+', label: 'Interactive Sessions', accent: 'pink' },
    { value: '2.5K+', label: 'Tech Leaders', accent: 'cyan' },
    { value: '85%', label: 'Would Recommend', accent: 'pink' },
  ],
  finalCta: {
    title: "DON'T MISS OUT",
    description: 'Secure your spot at the most anticipated tech event of 2026. Limited VIP passes remaining.',
    primaryCta: 'Register Now',
    secondaryCta: 'Download Brochure',
  },
  footer: {
    description: 'The premier technology conference for forward-thinking leaders.',
    quickLinks: ['About', 'Speakers', 'Schedule', 'Tickets'],
    resources: ['FAQ', 'Travel Info', 'Sponsors', 'Contact'],
  },
}
