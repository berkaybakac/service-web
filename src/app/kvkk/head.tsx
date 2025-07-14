// src/app/kvkk/head.tsx
import company from '@/config/company';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `KVKK Aydınlatma Metni | ${company.name}`,
  description:
    'Kişisel verilerin korunmasına dair yasal sorumluluklarımız hakkında bilgi edinin.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${company.url}/kvkk`,
  },
  openGraph: {
    title: `KVKK Aydınlatma Metni | ${company.name}`,
    description:
      'Kişisel verilerin korunmasına dair yasal sorumluluklarımız hakkında bilgi edinin.',
    url: `${company.url}/kvkk`,
    siteName: company.name,
    type: 'article',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `KVKK Aydınlatma Metni | ${company.name}`,
    description:
      'Kişisel verilerin korunmasına dair yasal sorumluluklarımız hakkında bilgi edinin.',
  },
};
