// src/app/iletisim/head.tsx
import company from '@/config/company';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `İletişim | ${company.name}`,
  description: `${company.name} ile hemen iletişime geçin. Hızlı ve güvenilir teknik servis için bize ulaşın.`,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${company.url}/iletisim`,
  },
  openGraph: {
    title: `İletişim | ${company.name}`,
    description: `${company.name} ile hemen iletişime geçin. Hızlı ve güvenilir teknik servis için bize ulaşın.`,
    url: `${company.url}/iletisim`,
    siteName: company.name,
    type: 'article',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `İletişim | ${company.name}`,
    description: `${company.name} ile hemen iletişime geçin. Hızlı ve güvenilir teknik servis için bize ulaşın.`,
  },
};
