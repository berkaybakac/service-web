// src/app/hizmetler/head.tsx
import company from '@/config/company';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Hizmetlerimiz | ${company.name}`,
  description: `Beyaz eşya, buzdolabı, klima ve daha fazlası için ${company.name} tarafından sunulan profesyonel teknik hizmetleri keşfedin.`,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${company.url}/hizmetler`,
  },
  openGraph: {
    title: `Hizmetlerimiz | ${company.name}`,
    description: `Beyaz eşya, buzdolabı, klima ve daha fazlası için ${company.name} tarafından sunulan profesyonel teknik hizmetleri keşfedin.`,
    url: `${company.url}/hizmetler`,
    siteName: company.name,
    locale: 'tr_TR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hizmetlerimiz | ${company.name}`,
    description: `Beyaz eşya, buzdolabı, klima ve daha fazlası için ${company.name} tarafından sunulan profesyonel teknik hizmetleri keşfedin.`,
  },
};
