import { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Tech Minds IT Solutions | Trusted IT company Nellore',
  description:
    'About Tech Minds IT Solutions - Trusted software company Nellore, professional developers Nellore, Andhra Pradesh tech company. Company background, mission vision.',
  keywords: [
    'IT company in Nellore',
    'trusted software company Nellore',
    'professional developers Nellore',
    'Andhra Pradesh tech company',
    'Tech Minds IT Solutions about',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: 'https://techsparkignite.com/about',
    title: 'About Us — Tech minds IT Solutions',
    description:
      'Learn about Tech minds IT Solutions — a fresh IT company in Nellore delivering modern digital solutions with startup energy.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Tech minds IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us — Tech minds IT Solutions',
    description:
      'Learn about Tech minds IT Solutions — a fresh IT company in Nellore delivering modern digital solutions with startup energy.',
    images: ['/og-image.jpg'],
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Tech minds IT Solutions',
  url: 'https://techsparkignite.com/about',
  description:
    'Learn about Tech minds IT Solutions — a fresh IT company in Nellore, Andhra Pradesh delivering web development, app development, CRM products, and digital marketing.',
  mainEntity: {
    '@id': 'https://techsparkignite.com/#organization',
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <AboutContent />
    </>
  );
}


