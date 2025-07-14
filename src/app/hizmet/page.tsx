import Breadcrumb from '@/components/Breadcrumb';
import { fakeReviews } from '@/data/fakeReviews';
import fs from 'fs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

export const metadata: Metadata = {
  title: 'Hizmet',
  description: 'Servis detayları ve müşteri yorumları',
};

export default function ServiceDetailPage({
  searchParams,
}: {
  searchParams: { service?: string };
}) {
  const displayServiceName = searchParams.service
    ? decodeURIComponent(searchParams.service.replace(/\+/g, ' '))
    : '';

  const service = services[displayServiceName as keyof typeof services];

  const pageTitle = service
    ? service.title
    : displayServiceName || 'Genel Teknik Servis Hizmetleri';

  const pageDescription = service
    ? service.description
    : 'Profesyonel teknik servis hizmetlerimizle tanışın.';

  const articlePath = path.join(process.cwd(), 'public/article.md');
  const articleContent = fs.readFileSync(articlePath, 'utf8');

  if (!service) return notFound();

  return (
    <main className="bg-black text-white px-6 py-12">
      <Breadcrumb />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">{pageTitle}</h1>
        <p className="text-gray-300 mb-6 text-center">{pageDescription}</p>

        <div className="bg-[#12141c] p-4 rounded mb-6 transition-all duration-300">
          <ReactMarkdown
            className="prose prose-invert max-w-none"
            remarkPlugins={[remarkGfm]}
          >
            {articleContent}
          </ReactMarkdown>
        </div>

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
  );
}
