import company from '@/config/company';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Gizlilik Politikası | ${company.name}`,
  description:
    'Kullanıcı gizliliğine verdiğimiz önemi ve kişisel verilerin nasıl korunduğunu öğrenin.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${company.url}/gizlilik`,
  },
  openGraph: {
    title: `Gizlilik Politikası | ${company.name}`,
    description:
      'Kullanıcı gizliliğine verdiğimiz önemi ve kişisel verilerin nasıl korunduğunu öğrenin.',
    url: `${company.url}/gizlilik`,
    siteName: company.name,
    type: 'article',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Gizlilik Politikası | ${company.name}`,
    description:
      'Kullanıcı gizliliğine verdiğimiz önemi ve kişisel verilerin nasıl korunduğunu öğrenin.',
  },
};
