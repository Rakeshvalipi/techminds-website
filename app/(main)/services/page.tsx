import { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Web Development Company in Nellore | App Development | SEO Services',
  description:
    'Web development company in Nellore, app development company in Nellore, digital marketing services Nellore, SEO services in Nellore. Website design services Nellore.',
  keywords: [
    'web development company in Nellore',
    'app development company in Nellore',
    'digital marketing services Nellore',
    'SEO services in Nellore',
    'website design services Nellore',
    'ecommerce website development Nellore',
    'mobile app developers Nellore',
    'React development',
    'Flutter apps',
    'React Native',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    url: 'https://techmindsit.com/services',
    title: 'Our Services — Tech minds IT Solutions',
    description:
      'Explore our comprehensive IT services: Web Development, App Development, Digital Marketing, and CRM Products.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech minds IT Solutions Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services — Tech minds IT Solutions',
    description:
      'Explore our comprehensive IT services: Web Development, App Development, Digital Marketing, and CRM Products.',
    images: ['/og-image.jpg'],
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tech minds IT Solutions Services',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Web Development',
        description:
          'Custom, responsive websites and web applications built with cutting-edge technologies.',
        provider: { '@id': 'https://techmindsit.com/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'App Development',
        description:
          'Native and cross-platform mobile apps that deliver exceptional user experiences.',
        provider: { '@id': 'https://techmindsit.com/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Digital Marketing',
        description:
          'Strategic digital marketing that drives traffic, engagement, and conversions.',
        provider: { '@id': 'https://techmindsit.com/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'CRM Products',
        description:
          'Custom CRM solutions that streamline your sales pipeline and customer management.',
        provider: { '@id': 'https://techmindsit.com/#organization' },
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <ServicesContent />
    </>
  );
}

