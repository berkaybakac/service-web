'use client';

import { PhoneIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-xl">
          Eterna Teknik Servis
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
          Beyaz eşyalarınız için güvenilir, hızlı ve profesyonel teknik servis
          hizmeti.
        </p>

        <a
          href="tel:+908502324567"
          className="mt-6 inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-slate-900 via-neutral-300 to-slate-900 text-white text-lg font-semibold tracking-wide shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 text-shadow"
        >
          <PhoneIcon className="w-6 h-6 text-white" />
          Hemen Servis Çağır
        </a>

        <p className="mt-5 text-gray-400 text-sm md:text-base max-w-md mx-auto">
          En hızlı şekilde teknik destek almak için hemen arayın.
        </p>
      </section>

      {/* Neden Bizi Tercih Etmelisiniz */}
      <section className="bg-black text-white px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: '📞',
                title: '7/24 Hizmet',
                desc: 'Günün her saati kesintisiz teknik servis desteği.',
              },
              {
                icon: '🛡️',
                title: '1 Yıl Garanti',
                desc: 'Tüm servis işlemlerimizde 1 yıl garanti sunuyoruz.',
              },
              {
                icon: '⚡',
                title: 'Hızlı Müdahale',
                desc: '20 dakika içinde geri dönüş ve randevu imkanı.',
              },
              {
                icon: '😊',
                title: '%100 Memnuniyet',
                desc: 'Müşteri odaklı yaklaşım ve güler yüzlü hizmet.',
              },
              {
                icon: '💸',
                title: 'En Uygun Fiyat',
                desc: 'Kaliteli hizmeti en ekonomik fiyatlarla sunarız.',
              },
              {
                icon: '✅',
                title: '%100 Güvenilir',
                desc: 'Belgeli, eğitimli ve uzman teknik kadro.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="text-3xl">{icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="bg-[#0d111a] px-6 py-16 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
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

          <a
            href="/hizmetler"
            className="inline-block mt-10 text-sm text-gray-300 hover:text-white border border-gray-600 px-5 py-2 rounded transition"
          >
            Tüm Hizmetleri Gör →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d111a] px-6 py-16 text-center text-white">
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
