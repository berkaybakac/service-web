'use client';

import Warning from '@/components/Warning';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';

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

import { fakeReviews } from '@/data/fakeReviews';

export default function ServiceDetailPage() {
  const searchParams = useSearchParams();
  const serviceName = searchParams.get('service') || '';
  const service = services[serviceName as keyof typeof services];

  const jsonLd = service
    ? {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `Eterna Teknik Servis - ${service.title}`,
        description: service.description,
        url: `https://example.com/hizmet?service=${encodeURIComponent(
          serviceName
        )}`,
        telephone: '+908502324567',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'İstanbul, Türkiye',
          addressLocality: 'İstanbul',
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
    : null;

  if (!service) {
    return (
      <main className="bg-black text-white p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Hizmet Bulunamadı</h1>
        <p>Lütfen geçerli bir hizmet adı girin.</p>
      </main>
    );
  }

  return (
    <>
      {jsonLd && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head>
      )}
      <main className="bg-black text-white px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          <p className="text-gray-300 mb-8">{service.description}</p>

          {/* 🚨 Uyarı Bileşeni */}
          <Warning />

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
