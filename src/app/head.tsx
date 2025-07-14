import company from '@/config/company';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eterna Teknik Servis | Beyaz Eşya Teknik Servisi',
  description:
    'Garantisi bitmiş beyaz eşyalar için profesyonel ve ekonomik teknik servis hizmeti. Buzdolabı, çamaşır makinesi, bulaşık makinesi ve daha fazlası.',
  alternates: {
    canonical: company.url,
  },
  openGraph: {
    title: 'Eterna Teknik Servis | Beyaz Eşya Teknik Servisi',
    description:
      'Profesyonel beyaz eşya teknik servis hizmeti. Hemen arayın, hızlıca destek alarak cihazınızı eski haline getirin.',
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
    title: 'Eterna Teknik Servis | Beyaz Eşya Teknik Servisi',
    description:
      'Buzdolabı, çamaşır ve bulaşık makineleri için garantisi bitmiş cihazlara özel hızlı teknik servis.',
    images: [`${company.url}/service-web-og.webp`],
  },
};
