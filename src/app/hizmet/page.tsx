'use client';

import Breadcrumb from '@/components/Breadcrumb';
import company from '@/config/company';
import { fakeReviews } from '@/data/fakeReviews';
import qaList from '@/data/qaList';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const LazyArticleContent = dynamic(
  () => import('@/components/ArticleContent'),
  { ssr: false }
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
    : displayServiceName || 'Genel Teknik Servis Hizmetleri';

  const pageDescription = service
    ? service.description
    : 'Profesyonel teknik servis hizmetlerimizle tanışın.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: service ? `Eterna Teknik Servis - ${service.title}` : company.name,
    description: service ? service.description : company.slogan,
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
      reviewCount: fakeReviews.length.toString(),
    },
    review: fakeReviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.stars,
        bestRating: 5,
      },
      reviewBody: r.text,
    })),
  };

  const breadcrumbJson = {
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
        item: `${company.url}/hizmetler`,
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
  };

  const qaJson = qaList[displayServiceName]
    ? {
        '@context': 'https://schema.org',
        '@type': 'QAPage',
        mainEntity: {
          '@type': 'Question',
          name: qaList[displayServiceName].question,
          text: qaList[displayServiceName].question,
          answerCount: 1,
          dateCreated: qaList[displayServiceName].date,
          author: {
            '@type': 'Person',
            name: qaList[displayServiceName].author,
          },
          acceptedAnswer: {
            '@type': 'Answer',
            text: qaList[displayServiceName].answer,
            datePublished: qaList[displayServiceName].date,
            author: {
              '@type': 'Person',
              name: qaList[displayServiceName].author,
            },
          },
        },
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      {qaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaJson) }}
        />
      )}

      <main className="bg-black text-white px-6 py-12">
        <Breadcrumb />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">{pageTitle}</h1>
          <p className="text-gray-300 mb-6 text-center">{pageDescription}</p>

          {/* ✅ Sadece yeni toggle kart gösteriliyor */}
          <Suspense
            fallback={
              <div className="text-center">Makale içeriği yükleniyor...</div>
            }
          >
            <LazyArticleContent />
          </Suspense>

          <h2 className="text-xl font-semibold mb-4">Müşteri Yorumları</h2>
          <ul className="space-y-6 text-left">
            {fakeReviews.map((review, index) => (
              <li key={index}>
                <div className="text-yellow-400 leading-none text-lg">
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
