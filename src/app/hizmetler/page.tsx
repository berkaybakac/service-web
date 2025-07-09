export default function ServicesPage() {
  return (
    <main className="bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Hizmetlerimiz</h1>

        <p className="text-gray-300 mb-8 text-center">
          Beyaz eşyalarınız için sunduğumuz profesyonel teknik servis
          hizmetlerimiz aşağıda listelenmiştir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Buzdolabı Tamiri',
              desc: 'Tüm marka ve modeller için hızlı ve garantili tamir hizmeti.',
            },
            {
              title: 'Çamaşır Makinesi Tamiri',
              desc: 'Su alma, sıkma ve ses sorunlarına kalıcı çözümler.',
            },
            {
              title: 'Bulaşık Makinesi Tamiri',
              desc: 'Yıkama problemleri ve su kaçakları için servis.',
            },
            {
              title: 'Fırın & Ocak Tamiri',
              desc: 'Elektrikli ve gazlı cihazlarda arıza tespiti ve onarım.',
            },
            {
              title: 'Klima Bakımı & Onarımı',
              desc: 'Yaz aylarında kesintisiz serinlik için klima servisi.',
            },
            {
              title: 'Kombi Bakımı & Onarımı',
              desc: 'Kış hazırlıkları için periyodik kombi kontrolü.',
            },
            {
              title: 'Televizyon Tamiri',
              desc: 'Görüntü, ses ve bağlantı problemlerinde uzman destek.',
            },
            {
              title: 'Genel Bakım Hizmetleri',
              desc: 'Periyodik kontrollerle arızaların önüne geçin.',
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-gray-900 p-6 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
