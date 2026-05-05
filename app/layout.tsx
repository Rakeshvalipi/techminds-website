import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Providers from './components/Providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://techsparkignite.com'),
  title: {
    default: 'Tech Minds IT Solutions | IT company in Nellore - Software company in Nellore',
    template: '%s | Tech Minds IT Solutions',
  },
  description:
    'Tech Minds IT Solutions - Best IT company in Nellore, software company in Nellore offering best IT services in Nellore, web development company in Nellore, app development company in Nellore.',
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
    'SEO services in Nellore',
    'website design services Nellore',
    'ecommerce website development Nellore',
    'mobile app developers Nellore',
    'IT internships Nellore',
    'fresher jobs Nellore',
  ],
  authors: [{ name: 'Tech minds IT Solutions', url: 'https://techsparkignite.com' }],
  creator: 'Tech minds IT Solutions',
  publisher: 'Tech minds IT Solutions',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://techsparkignite.com',
    siteName: 'Tech minds IT Solutions',
    title: 'Tech minds IT Solutions — Web, App, CRM & Digital Marketing',
    description:
      'Premium web development, mobile app development, CRM products, and digital marketing services in Nellore, Andhra Pradesh.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech minds IT Solutions — Your Trusted IT Partner in Nellore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TechSparkIgnite',
    creator: '@TechSparkIgnite',
    title: 'Tech minds IT Solutions — Web, App, CRM & Digital Marketing',
    description:
      'Premium web development, mobile app development, CRM products, and digital marketing services in Nellore, Andhra Pradesh.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'gzMpXhswPnfVKz5Kwnyl95OSu3AAFEpozdmyeA3K9tE',
  },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://techsparkignite.com/#organization',
      name: 'Tech Minds IT Solutions',
      alternateName: 'Tech Minds IT Solutions',
      url: 'https://techsparkignite.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://techsparkignite.com/images/logo.png',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://twitter.com/TechSparkIgnite',
        'https://www.linkedin.com/company/techsparkignite',
        'https://www.instagram.com/techsparkignite',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-88862-69665',
        contactType: 'sales',
        email: 'info@techmindsit.com',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Telugu'],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://techsparkignite.com/#localbusiness',
      name: 'Tech Minds IT Solutions',
      image: 'https://techsparkignite.com/images/logo.png',
      url: 'https://techsparkignite.com',
      telephone: '+91-88862-69665',
      email: 'info@techmindsit.com',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Srinivasa Agraharam',
        addressLocality: 'Nellore',
        addressRegion: 'Andhra Pradesh',
        postalCode: '524002',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 14.4508553,
        longitude: 79.9880129,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      areaServed: {
        '@type': 'Place',
        name: 'Nellore, Andhra Pradesh, India',
      },
      serviceType: [
        'Web Development',
        'Mobile App Development',
        'CRM Software Development',
        'Digital Marketing',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://techsparkignite.com/#website',
      url: 'https://techsparkignite.com',
      name: 'Tech minds IT Solutions',
      publisher: {
        '@id': 'https://techsparkignite.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://techsparkignite.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <Providers>{children}</Providers>
        {/* Google Analytics & Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RXLVRTJHP1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RXLVRTJHP1');
            gtag('config', 'AW-14581145887');
          `}
        </Script>
      </body>
    </html>
  );
}


