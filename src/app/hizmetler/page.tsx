'use client';

import company from '@/config/company';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Beyaz Eşya Servisi',
      desc: 'Tüm beyaz eşyalarınız için genel bakım ve hızlı teknik müdahale.',
    },
    {
      title: 'Buzdolabı',
      desc: 'Soğutmayan veya ses yapan buzdolapları için yerinde teknik destek.',
    },
    {
      title: 'Çamaşır Makinesi',
      desc: 'Su almayan, sıkmayan veya sallanan makineler için profesyonel çözüm.',
    },
    {
      title: 'Bulaşık Makinesi',
      desc: 'Yıkama, su boşaltma ve deterjan alma sorunları için teknik destek.',
    },
    {
      title: 'Fırın',
      desc: 'Isınmayan, dengesiz pişiren veya koku yapan fırınlar için onarım.',
    },
    {
      title: 'Klima',
      desc: 'Soğutmayan, su damlatan veya sesli çalışan klimalar için servis.',
    },
    {
      title: 'Kombi',
      desc: 'Sıcak su vermeyen, ses yapan veya devreye girmeyen kombiler için bakım.',
    },
    {
      title: 'Televizyon',
      desc: 'Görüntü gitmesi, ses problemi veya bağlantı sorunları için destek.',
    },
  ];

  return (
    <main className="bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Hizmetlerimiz</h1>
        <p className="text-gray-300 mb-8 text-center">
          {company.name} olarak sunduğumuz profesyonel teknik servis
          hizmetlerimiz aşağıda listelenmiştir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ title, desc }) => (
            <Link
              key={title}
              href={`/hizmet?service=${encodeURIComponent(title)}`}
              aria-label={`${title} sayfasına git`}
              className="bg-gray-900 p-6 rounded shadow hover:shadow-lg transition block hover:bg-gray-800"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm">{desc}</p>
            </Link>
          ))}
        </div>

        <div className="h-32" />
      </div>
    </main>
  );
}
