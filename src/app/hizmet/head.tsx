import company from '@/config/company';
import { DEFAULT_DESCRIPTION } from '@/config/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Hizmet Detayları | ${company.name}`,
  description: DEFAULT_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${company.url}/hizmet`,
  },
  openGraph: {
    title: `Hizmet Detayları | ${company.name}`,
    description: DEFAULT_DESCRIPTION,
    url: `${company.url}/hizmet`,
    siteName: company.name,
    type: 'article',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hizmet Detayları | ${company.name}`,
    description: DEFAULT_DESCRIPTION,
    images: [`${company.url}/service-web-og.webp`],
  },
};
