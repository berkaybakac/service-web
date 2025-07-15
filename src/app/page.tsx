'use client';

import company from '@/config/company';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href={company.url} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className="flex flex-col min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center px-6 pt-16 pb-10 md:pt-24 md:pb-16 min-h-[60vh]">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl break-words">
            {company.name} | Beyaz Eşya Tamiri, Onarım ve Teknik Servis Desteği
          </h1>
          <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl">
            {company.name}, garantisi bitmiş beyaz eşyalarınız için hızlı, ekonomik ve güvenilir teknik servis hizmeti sunar. Buzdolabı, çamaşır makinesi, bulaşık makinesi ve diğer beyaz eşya ürünlerinizde yaşadığınız arızalara karşı, uzman teknik kadromuzla aynı gün içinde yerinde çözüm sunuyoruz. Servis çağırma süreci son derece kolay ve hızlıdır. Bizimle iletişime geçtiğinizde, kısa sürede adresinize en yakın teknik servis yönlendirilir. Parça değişimi, bakım, temizlik ve arıza tespiti dahil olmak üzere tüm işlemler şeffaf fiyatlandırma ile yapılır. {company.name} olarak müşteri memnuniyetini esas alıyor ve işlemlerimize 1 yıl garanti sunuyoruz. Güvenilir, zamanında ve kaliteli bir teknik servis deneyimi için şimdi arayın.
          </p>

          <a
            href={`tel:${company.phone.replace(/\s/g, '')}`}
            className="mt-4 inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-slate-900 via-neutral-300 to-slate-900 text-white text-base md:text-lg font-semibold tracking-wide shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 text-shadow"
          >
            <PhoneIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            Hemen Servis Çağır
          </a>

          <p className="mt-4 text-gray-400 text-sm md:text-base max-w-xs md:max-w-md mx-auto">
            En hızlı şekilde teknik destek almak için hemen arayın.
          </p>
        </section>

        {/* Neden Bizi Tercih Etmelisiniz */}
        <section className="bg-black text-white px-6 py-14 md:py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
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
                  <div className="text-2xl mt-0.5">{icon}</div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hizmetler */}
        <section className="bg-[#0d111a] px-6 py-14 md:py-20 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Hizmetlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
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
                  className="bg-gray-900 p-5 rounded shadow hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
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
        <section className="bg-gradient-to-t from-[#0d111a] to-black px-6 py-16 text-center text-white">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Servis Talebi Oluşturmak Çok Kolay
          </h2>
          <p className="mb-6 text-gray-300 text-sm md:text-base max-w-sm mx-auto">
            Bir telefon kadar yakınız. Hemen iletişime geçin.
          </p>
          <a
            href={`https://wa.me/${company.phone.replace(/\s|\+|-/g, '')}`}
            className="inline-block bg-emerald-700 text-white py-2 px-6 rounded hover:bg-emerald-800 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp’tan Ulaş
          </a>
        </section>
      </main>
    </>
  );
}
