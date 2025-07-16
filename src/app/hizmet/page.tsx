'use client';

import { useEffect, useMemo, Suspense } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import company from '@/config/company';
import { fakeReviews } from '@/data/fakeReviews';
import faqList from '@/data/faqList';
import qaList from '@/data/qaList';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

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
} as const;

type ServiceKey = keyof typeof services;

export default function ServiceDetailPage() {
  const searchParams = useSearchParams();
  const serviceNameParam = searchParams.get('service');
  const displayServiceName = serviceNameParam
    ? decodeURIComponent(serviceNameParam.replace(/\+/g, ' '))
    : '';

  const matchedServiceKey = Object.keys(services).find(
    key =>
      key.localeCompare(displayServiceName, 'tr', { sensitivity: 'base' }) === 0
  ) as ServiceKey | undefined;

  const service = matchedServiceKey
    ? services[matchedServiceKey]
    : undefined;

  const pageTitle = service?.title || displayServiceName || 'Teknik Servis';
  const pageDescription =
    service?.description || 'Profesyonel teknik servis hizmetleri.';

  const qaData = matchedServiceKey ? qaList[matchedServiceKey] : undefined;
  const faqData = faqList;

  useEffect(() => {
    if (pageTitle) document.title = `${pageTitle} | ${company.name}`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = pageDescription;
      document.head.appendChild(meta);
    }
  }, [pageTitle, pageDescription]);

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `${company.name} - ${pageTitle}`,
      description: pageDescription,
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
      review: fakeReviews.map(r => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: r.stars,
          bestRating: 5,
        },
        reviewBody: r.text,
      })),
    }),
    [pageTitle, pageDescription, displayServiceName]
  );

  const qaJson = qaData
    ? {
        '@context': 'https://schema.org',
        '@type': 'QAPage',
        mainEntity: {
          '@type': 'Question',
          name: qaData.question,
          text: qaData.question,
          answerCount: 1,
          dateCreated: qaData.date,
          author: { '@type': 'Person', name: qaData.author },
          acceptedAnswer: {
            '@type': 'Answer',
            text: qaData.answer,
            datePublished: qaData.date,
            author: { '@type': 'Person', name: qaData.author },
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
      {qaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaJson) }}
        />
      )}

      <main className="bg-black text-white px-4 sm:px-6 py-12">
        <Breadcrumb />

        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{pageTitle}</h1>
          <p className="text-gray-300">{pageDescription}</p>

          <a
            href={`tel:${company.phone}`}
            className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            📞 Hemen Servis Çağır
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <Suspense
            fallback={
              <div className="text-center">Makale içeriği yükleniyor...</div>
            }
          >
            <LazyArticleContent />
          </Suspense>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">
            Müşteri Yorumları
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {fakeReviews.map((review, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-[300px] bg-[#1e1f25] rounded-lg p-4 shadow snap-center"
              >
                <div className="text-yellow-400 text-xl mb-1">
                  {'★'.repeat(review.stars)}
                  {'☆'.repeat(5 - review.stars)}
                </div>
                <p className="text-gray-200 text-sm">{review.text}</p>
                <p className="text-gray-500 text-xs mt-2 italic">
                  – {review.author}
                </p>
              </div>
            ))}
          </div>

          {faqData?.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mt-12 mb-4 text-center">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details
                    key={i}
                    className="bg-[#1e1f25] rounded-md px-4 py-3"
                  >
                    <summary className="cursor-pointer font-semibold">
                      {faq.question}
                    </summary>
                    <p className="text-gray-400 mt-2">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </>
          )}

          {qaData && (
            <div className="bg-[#1e1f25] rounded-xl p-4 mt-12">
              <h3 className="text-xl font-bold mb-2">Soru-Cevap</h3>
              <p className="font-semibold mb-1">❓ {qaData.question}</p>
              <p className="text-gray-300">✅ {qaData.answer}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
