import company from '@/config/company';
import { DEFAULT_DESCRIPTION } from '@/config/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Hizmetlerimiz | ${company.name}`,
  description: DEFAULT_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${company.url}/hizmetler`,
  },
  openGraph: {
    title: `Hizmetlerimiz | ${company.name}`,
    description: DEFAULT_DESCRIPTION,
    url: `${company.url}/hizmetler`,
    siteName: company.name,
    locale: 'tr_TR',
    type: 'article',
    images: [
      {
        url: `${company.url}/service-web-og.webp`,
        width: 1200,
        height: 630,
        alt: `${company.name} Hizmetler`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hizmetlerimiz | ${company.name}`,
    description: DEFAULT_DESCRIPTION,
    images: [`${company.url}/service-web-og.webp`],
  },
};
