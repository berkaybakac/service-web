import company from '@/config/company';
import { DEFAULT_DESCRIPTION } from '@/config/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Sık Sorulan Sorular | ${company.name}`,
  description: DEFAULT_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${company.url}/sss`,
  },
  openGraph: {
    title: `Sık Sorulan Sorular | ${company.name}`,
    description: DEFAULT_DESCRIPTION,
    url: `${company.url}/sss`,
    siteName: company.name,
    locale: 'tr_TR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Sık Sorulan Sorular | ${company.name}`,
    description: DEFAULT_DESCRIPTION,
    images: [`${company.url}/service-web-og.webp`],
  },
};
