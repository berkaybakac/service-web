import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Eterna Teknik Servis',
  description:
    'Eterna Teknik Servis ile hemen iletişime geçin. Hızlı ve güvenilir teknik servis için bize ulaşın.',
};
export default function ContactPage() {
  return (
    <main className="bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">İletişim</h1>

        <p className="text-gray-300 mb-8 text-center">
          Bize ulaşmak çok kolay. Aşağıdaki bilgilerden bizimle iletişime
          geçebilirsiniz.
        </p>

        <div className="grid gap-6 text-sm text-gray-200">
          <div>
            <h2 className="font-semibold mb-1 text-white">Telefon</h2>
            <a href="tel:+908502324567" className="hover:underline">
              +90 (850) 232 45 67
            </a>
          </div>

          <div>
            <h2 className="font-semibold mb-1 text-white">E-posta</h2>
            <a href="mailto:info@eternaservis.com" className="hover:underline">
              info@eternaservis.com
            </a>
          </div>

          <div>
            <h2 className="font-semibold mb-1 text-white">Adres</h2>
            <p>Toroslar / Mersin, Türkiye</p>
          </div>

          <div>
            <h2 className="font-semibold mb-1 text-white">Çalışma Saatleri</h2>
            <p>Hafta içi: 09:00 - 18:00</p>
            <p>Cumartesi: 10:00 - 16:00</p>
            <p>Pazar: Kapalı</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/908502324567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition"
          >
            WhatsApp’tan Ulaş
          </a>
        </div>
      </div>
    </main>
  );
}
