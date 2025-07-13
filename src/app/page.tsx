export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Eterna Teknik Servis
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Beyaz eşyalarınız için güvenilir, hızlı ve profesyonel teknik servis
          hizmeti.
        </p>
        <a
          href="tel:+908502324567"
          className="mt-6 inline-block bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-300 transition"
        >
          Hemen Servis Çağır
        </a>
      </section>

      {/* Hakkımızda */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Hakkımızda</h2>
        <p className="text-gray-300">
          Eterna Teknoloji A.Ş., beyaz eşya teknik servis alanında yılların
          deneyimiyle hizmet vermektedir. Eğitimli teknisyen kadrosu, yedek
          parça garantisi ve müşteri memnuniyeti odaklı yaklaşımıyla öne çıkar.
        </p>
      </section>

      {/* Hizmetler */}
      <section className="bg-gray-950 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Hizmetlerimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Buzdolabı Tamiri',
                desc: 'Tüm marka ve modellerde hızlı arıza giderimi.',
              },
              {
                title: 'Çamaşır Makinesi',
                desc: 'Sorunsuz çalışan makineler için profesyonel destek.',
              },
              {
                title: 'Bulaşık Makinesi',
                desc: 'Temiz sonuçlar için doğru teknik müdahale.',
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-gray-900 p-6 rounded shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Servis Talebi Oluşturmak Çok Kolay
        </h2>
        <p className="mb-6 text-gray-300">
          Bir telefon kadar yakınız. Hemen iletişime geçin.
        </p>
        <a
          href="https://wa.me/908502324567"
          className="inline-block bg-emerald-700 text-white py-2 px-6 rounded hover:bg-emerald-800 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp’tan Ulaş
        </a>
      </section>
    </main>
  );
}
