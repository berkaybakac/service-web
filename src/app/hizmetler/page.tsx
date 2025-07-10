'use client';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Beyaz Eşya Servisi',
      desc: 'Tüm cihazlarda genel bakım ve teknik servis hizmeti.',
    },
    {
      title: 'Buzdolabı',
      desc: 'Soğutma sorunları ve termostat arızaları için servis.',
    },
    {
      title: 'Çamaşır Makinesi',
      desc: 'Sıkma, su alma ve titreşim gibi arızalara çözüm.',
    },
    {
      title: 'Bulaşık Makinesi',
      desc: 'Yıkama problemleri ve su boşaltma sorunları için destek.',
    },
    {
      title: 'Fırın',
      desc: 'Isınmama ve sıcaklık dengesizlikleri için servis.',
    },
    {
      title: 'Klima',
      desc: 'Klima bakımı, gaz dolumu ve tamir hizmeti.',
    },
    {
      title: 'Kombi',
      desc: 'Kışa hazırlık için kombi bakım ve onarım hizmetleri.',
    },
    {
      title: 'Televizyon',
      desc: 'Görüntü, ses ve bağlantı sorunlarında teknik destek.',
    },
  ];

  return (
    <main className="bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Hizmetlerimiz</h1>
        <p className="text-gray-300 mb-8 text-center">
          Beyaz eşyalarınız için sunduğumuz profesyonel teknik servis
          hizmetlerimiz aşağıda listelenmiştir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ title, desc }) => (
            <Link
              key={title}
              href={`/hizmet?service=${encodeURIComponent(title)}`}
              className="bg-gray-900 p-6 rounded shadow hover:shadow-lg transition block hover:bg-gray-800"
            >
              <h2 className="text-xl font-semibold mb-2">{title} Servisi</h2>
              <p className="text-gray-400 text-sm">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
