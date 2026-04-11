export interface Role {
  company: string;
  title: string;
  dates: string;
  blurb: string;
  logoSrc: string;
}

export const experience: Role[] = [
  {
    company: 'Wildfire Systems',
    title: 'Senior Software Engineer',
    dates: 'Oct 2023 – Present',
    blurb:
      'Leading development on a white-label loyalty platform at a Series B fintech startup. Delivered cashback extensions for Citi, RBC, HP, and Acorns serving 6M+ users and driving $15M+ in annualized revenue. Re-architected the delivery pipeline to cut ship times by 90% and built a DSL-driven extension system that ships behavior changes without releases.',
    logoSrc: '/images/logos/wildfire.png',
  },
  {
    company: 'Altair Engineering',
    title: 'Software Engineer',
    dates: 'Feb 2021 – Oct 2023',
    blurb:
      'Sole architect of a TypeScript/React IoT building controls app. Built an interactive floorplan system with real-time sensor visualization using Google Maps API, migrated a React Native app to a new platform, and wrote the Python/Lambda API powering both clients.',
    logoSrc: '/images/logos/altair.png',
  },
  {
    company: 'Member Splash',
    title: 'Software Engineer',
    dates: 'Apr 2020 – Feb 2021',
    blurb:
      'Full-stack SaaS work on a sport club management platform processing millions of weekly transactions. Built and shipped a COVID-19 reservations product in under a month.',
    logoSrc: '/images/logos/membersplash.png',
  },
  {
    company: 'Shift Agency',
    title: 'Junior Software Engineer',
    dates: 'Nov 2019 – Apr 2020',
    blurb:
      'Built websites, services, and apps for Fortune 500 clients. Modernized legacy CakePHP, WordPress, and Shopify codebases.',
    logoSrc: '/images/logos/shift.jpeg',
  },
  {
    company: 'Independent Consultant',
    title: 'Web Developer',
    dates: 'Nov 2018 – Apr 2020',
    blurb:
      'Freelance web development. Built apps with React, Python, Next.js, and GraphQL. Managed client relationships end to end.',
    logoSrc: '/images/logos/independent.jpg',
  },
];
