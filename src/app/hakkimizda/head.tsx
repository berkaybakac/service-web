import company from '@/config/company';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Hakkımızda | ${company.name}`,
  description: `${company.name}’in tecrübesi, misyonu ve müşteri memnuniyeti anlayışı hakkında detaylı bilgi alın.`,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${company.url}/hakkimizda`,
  },
  openGraph: {
    title: `Hakkımızda | ${company.name}`,
    description: `${company.name}’in tecrübesi, misyonu ve müşteri memnuniyeti anlayışı hakkında detaylı bilgi alın.`,
    url: `${company.url}/hakkimizda`,
    siteName: company.name,
    type: 'article',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hakkımızda | ${company.name}`,
    description: `${company.name}’in tecrübesi, misyonu ve müşteri memnuniyeti anlayışı hakkında detaylı bilgi alın.`,
  },
};
