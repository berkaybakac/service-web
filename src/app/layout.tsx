import company from '@/config/company';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '@/config/seo';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import FloatingCallButton from '../components/FloatingCallButton';
import Header from '../components/Header';
import LazyFooter from '../components/LazyFooter'; // SSR: false burada devreye girecek
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${company.name}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: company.url,
    siteName: company.name,
    images: [
      {
        url: `${company.url}/service-web-og.webp`,
        width: 1200,
        height: 630,
        alt: company.name,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [`${company.url}/service-web-og.webp`],
  },
  alternates: {
    canonical: company.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    legalName: company.legalName,
    description: company.slogan,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.district,
      addressRegion: company.address.city,
      postalCode: company.address.zip,
      addressCountry: 'TR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    url: company.url,
  };

  return (
    <html lang="tr">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <LazyFooter /> {/* SSR false burada aktif */}
        <FloatingCallButton />
      </body>
    </html>
  );
}
