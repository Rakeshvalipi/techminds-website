import { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Tech Minds IT Solutions | IT company in Nellore, software company in Nellore',
  description:
    'Tech Minds IT Solutions - Best IT company in Nellore offering best IT services in Nellore, web development company in Nellore, app development company in Nellore. IT company in Nellore location Srinivasa Agraharam.',
  keywords: [
    'Tech Minds IT Solutions',
    'IT company in Nellore',
    'software company in Nellore',
    'best IT services in Nellore',
    'web development company in Nellore',
    'app development company in Nellore',
    'digital marketing company Nellore',
    'custom software solutions',
    'professional developers Nellore',
    'internship for students Nellore',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://techmindsit.com',
    title: 'Tech minds IT Solutions — Web, App, CRM & Digital Marketing',
    description:
      'Premium web development, mobile app development, CRM products, and digital marketing services in Nellore, Andhra Pradesh.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech minds IT Solutions — Your Trusted IT Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech minds IT Solutions — Web, App, CRM & Digital Marketing',
    description:
      'Premium web development, mobile app development, CRM products, and digital marketing services in Nellore, Andhra Pradesh.',
    images: ['/og-image.jpg'],
  },
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tech minds IT Solutions — Home',
  url: 'https://techmindsit.com',
  description:
    'Premium web development, mobile app development, CRM products, and digital marketing services in Nellore, Andhra Pradesh.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Tech minds IT Solutions',
    url: 'https://techmindsit.com',
    logo: 'https://techmindsit.com/images/logo.png',
    sameAs: [
      'https://twitter.com/TechMindsIT',
      'https://www.linkedin.com/company/techmindsit',
      'https://www.instagram.com/techmindsit',
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <HomeContent />
    </>
  );
}

