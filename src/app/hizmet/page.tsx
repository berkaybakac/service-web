'use client';

import { fakeReviews } from '@/data/fakeReviews';
import dynamic from 'next/dynamic';
// import Head from 'next/head'; // Next.js App Router'da next/head yerine Metadata veya direkt script tagleri kullanılır
import company from '@/config/company'; // company bilgilerini import et
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Lazy-load markdown içeriği
const LazyArticleContent = dynamic(
  () => import('@/components/ArticleContent'),
  {
    ssr: false,
  }
);

const services = {
  'Beyaz Eşya Servisi': {
    title: 'Beyaz Eşya Servisi',
    description:
      'Beyaz eşyaların tamiri, bakımı ve kurulumu için profesyonel servis.',
  },
  Buzdolabı: {
    title: 'Buzdolabı Tamiri',
    description:
      'Soğutmayan, ses yapan veya su akıtan buzdolapları için hızlı servis.',
  },
  'Çamaşır Makinesi': {
    title: 'Çamaşır Makinesi Tamiri',
    description:
      'Sıkma, su alma veya titreşim problemleri için güvenilir tamir hizmeti.',
  },
  'Bulaşık Makinesi': {
    title: 'Bulaşık Makinesi Tamiri',
    description:
      'Yıkama sorunları veya su sızdırma problemleri için teknik destek.',
  },
  Fırın: {
    title: 'Fırın & Ocak Tamiri',
    description:
      'Isıtma, pişirme ve elektronik arızalar için uzman fırın onarımı.',
  },
  Klima: {
    title: 'Klima Servisi',
    description:
      'Klima montajı, bakımı ve tamiri ile yaz sıcaklarında serin kalın.',
  },
  Kombi: {
    title: 'Kombi Bakımı & Onarımı',
    description: 'Kış hazırlıkları için kombi bakımı ve arıza giderme hizmeti.',
  },
  Televizyon: {
    title: 'Televizyon Tamiri',
    description: 'Görüntü, ses veya bağlantı sorunları için TV teknik desteği.',
  },
};

export default function ServiceDetailPage() {
  const searchParams = useSearchParams();
  const serviceNameParam = searchParams.get('service');

  // URL'deki service parametresini temizle ve başlık için kullan
  const displayServiceName = serviceNameParam
    ? decodeURIComponent(serviceNameParam.replace(/\+/g, ' ')) // URL'deki + işaretlerini boşluk yap
    : '';

  const service = services[displayServiceName as keyof typeof services];

  // H1 başlığı ve açıklama için dinamik değerler
  const pageTitle = service
    ? service.title
    : displayServiceName
    ? `${displayServiceName} Servisi`
    : 'Genel Teknik Servis Hizmetleri';

  const pageDescription = service
    ? service.description
    : 'Profesyonel teknik servis hizmetlerimizle tanışın.'; // Varsayılan açıklama

  // JSON-LD schema
  const jsonLd = service
    ? {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `Eterna Teknik Servis - ${service.title}`,
        description: service.description,
        url: `${company.url}/hizmet?service=${encodeURIComponent(
          displayServiceName
        )}`,
        telephone: company.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.address.street,
          addressLocality: company.address.city,
          addressCountry: 'TR',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          reviewCount: '3',
        },
        review: fakeReviews.map((r) => ({
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: r.stars,
            bestRating: 5,
          },
          reviewBody: r.text,
        })),
      }
    : {
        // Eğer belirli bir hizmet bulunamazsa, genel şirket bilgilerini kullan
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: company.name,
        legalName: company.legalName,
        description: company.slogan,
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
        aggregateRating: {
          // Genel sayfa için de yorumları gösterebiliriz
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          reviewCount: fakeReviews.length.toString(),
        },
        review: fakeReviews.map((r) => ({
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: r.stars,
            bestRating: 5,
          },
          reviewBody: r.text,
        })),
      };

  return (
    <>
      {/* Head import'unu kaldırdığımız için script tag'ini doğrudan render ediyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-black text-white px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Makale içeriği her zaman gösterilecek */}
          <Suspense fallback={<div>Makale içeriği yükleniyor...</div>}>
            <LazyArticleContent />
          </Suspense>

          {/* Dinamik başlık ve açıklama */}
          <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-gray-300 mb-8">{pageDescription}</p>

          <h2 className="text-xl font-semibold mb-4">Müşteri Yorumları</h2>
          <ul className="space-y-4">
            {fakeReviews.map((review, index) => (
              <li key={index} className="text-left">
                <div className="text-yellow-400">
                  {'★'.repeat(review.stars)}
                  {'☆'.repeat(5 - review.stars)}
                </div>
                <p className="text-gray-300">{review.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
