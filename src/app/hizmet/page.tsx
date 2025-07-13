'use client';

import Breadcrumb from '@/components/Breadcrumb';
import company from '@/config/company';
import { fakeReviews } from '@/data/fakeReviews';
import qaList from '@/data/qaList'; // ← QAPage için import
import dynamic from 'next/dynamic';
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

  const displayServiceName = serviceNameParam
    ? decodeURIComponent(serviceNameParam.replace(/\+/g, ' '))
    : '';

  const service = services[displayServiceName as keyof typeof services];

  const pageTitle = service
    ? service.title
    : displayServiceName
    ? `${displayServiceName} Servisi`
    : 'Genel Teknik Servis Hizmetleri';

  const pageDescription = service
    ? service.description
    : 'Profesyonel teknik servis hizmetlerimizle tanışın.';

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Ana Sayfa',
                item: `${company.url}/`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Hizmetler',
                item: `${company.url}/hizmet`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: pageTitle,
                item: `${company.url}/hizmet?service=${encodeURIComponent(
                  displayServiceName
                )}`,
              },
            ],
          }),
        }}
      />

      {qaList[displayServiceName] && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'QAPage',
              mainEntity: {
                '@type': 'Question',
                name: qaList[displayServiceName].question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: qaList[displayServiceName].answer,
                },
              },
            }),
          }}
        />
      )}

      <main className="bg-black text-white px-6 py-12">
        <Breadcrumb />

        <div className="max-w-3xl mx-auto text-center">
          <Suspense fallback={<div>Makale içeriği yükleniyor...</div>}>
            <LazyArticleContent />
          </Suspense>

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
