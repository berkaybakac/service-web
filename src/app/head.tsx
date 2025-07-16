import company from '@/config/company';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${company.name} | Beyaz Eşya Tamiri & Teknik Servis Desteği`,
  description:
    'Beyaz eşyalar için ekonomik ve güvenilir teknik servis. Buzdolabı, çamaşır ve bulaşık makinesi için hızlı, garantili destek alın.',
  keywords: [
    'beyaz eşya servisi',
    'buzdolabı tamiri',
    'çamaşır makinesi teknik servis',
    'bulaşık makinesi onarımı',
    'yetkili servis dışı hizmet',
    'servis çağır',
    'teknik destek',
    company.name,
  ],
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  applicationName: company.name,
  authors: [{ name: company.name, url: company.url }],
  publisher: company.name,
  themeColor: '#0f1117',
  alternates: {
    canonical: company.url,
  },
  openGraph: {
    title: `${company.name} | Beyaz Eşya Tamiri & Teknik Servis Desteği`,
    description:
      'Beyaz eşyalarınız için hızlı, garantili ve profesyonel teknik servis hizmeti. Hemen arayın, cihazınızı eski haline getirelim.',
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
    title: `${company.name} | Beyaz Eşya Tamiri & Teknik Servis Desteği`,
    description:
      'Garantisi bitmiş beyaz eşyalarınız için hızlı teknik destek. Hemen arayın, yerinde çözüm alın.',
    images: [`${company.url}/service-web-og.webp`],
    site: company.name,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function Head() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    legalName: company.legalName,
    url: company.url,
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
  };

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: company.name,
    url: company.url,
    description: company.slogan,
  };

  return (
    <>
      <link rel="preconnect" href={company.url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
    </>
  );
}
