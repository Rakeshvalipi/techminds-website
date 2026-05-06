import { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';
import CareersContent from './CareersContent';

export const metadata: Metadata = {
  title: 'IT Internships Nellore | Fresher Jobs | Student Platform Nellore',
  description:
    'Internship for students Nellore, IT internships Nellore, fresher jobs Nellore, IT training in Nellore. Student platform Nellore, coding classes in Nellore.',
  keywords: [
    'internship for students Nellore',
    'IT internships Nellore',
    'fresher jobs Nellore',
    'IT training in Nellore',
    'coding classes in Nellore',
    'full stack developer Nellore',
    'frontend developer Nellore',
    'backend developer Nellore',
    'Python developer Nellore',
  ],
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    url: 'https://techmindsit.com/careers',
    title: 'Careers & Internships — Tech minds IT Solutions',
    description:
      'Join Tech minds IT Solutions! Explore full-time jobs and internship programs in web development, app development, and more.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Careers at Tech minds IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers & Internships — Tech minds IT Solutions',
    description:
      'Join Tech minds IT Solutions! Explore full-time jobs and internship programs in web development, app development, and more.',
    images: ['/og-image.jpg'],
  },
};

const careersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Multiple Positions at Tech minds IT Solutions',
  description:
    'Join Tech minds IT Solutions and be part of a team shaping the future of IT in Nellore. We have openings for developers, marketers, and interns.',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Tech minds IT Solutions',
    sameAs: 'https://techmindsit.com',
    logo: 'https://techmindsit.com/images/logo.png',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Srinivasa Agraharam',
      addressLocality: 'Nellore',
      addressRegion: 'Andhra Pradesh',
      postalCode: '524002',
      addressCountry: 'IN',
    },
  },
  employmentType: ['FULL_TIME', 'INTERN'],
};

export default function CareersPage() {
  return (
    <>
      <JsonLd data={careersJsonLd} />
      <CareersContent />
    </>
  );
}

