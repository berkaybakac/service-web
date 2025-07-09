'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const services = {
  'Beyaz Eşya Servisi': {
    title: 'Beyaz Eşya Servisi',
    description:
      'Beyaz eşyalarınızın tamiri, bakımı ve kurulumu için profesyonel servis.',
  },
  Buzdolabı: {
    title: 'Buzdolabı Tamiri',
    description:
      'Soğutmayan, ses yapan veya su akıtan buzdolaplarınız için hızlı servis.',
  },
  'Çamaşır Makinesi': {
    title: 'Çamaşır Makinesi Tamiri',
    description:
      'Sıkma, su alma veya titreşim problemleri için güvenilir tamir hizmeti.',
  },
  'Bulaşık Makinesi': {
    title: 'Bulaşık Makinesi Tamiri',
    description:
      'Yıkama problemleri, deterjan almama gibi sorunlar için teknik destek.',
  },
  Fırın: {
    title: 'Fırın Tamiri',
    description:
      'Isıtma, pişirme ve elektronik arızalar için uzman fırın onarımı.',
  },
  Klima: {
    title: 'Klima Servisi',
    description:
      'Klima montajı, bakımı ve tamiri ile yaz sıcaklarında serin kalın.',
  },
  Kombi: {
    title: 'Kombi Bakım & Onarım',
    description:
      'Kışa hazır olmak için periyodik bakım ve arıza giderme hizmetleri.',
  },
  Televizyon: {
    title: 'Televizyon Tamiri',
    description: 'Görüntü, ses veya bağlantı sorunları için TV teknik desteği.',
  },
};

export default function HizmetPage() {
  const searchParams = useSearchParams();
  const [service, setService] = useState<string | null>(null);

  useEffect(() => {
    const s = searchParams.get('service');
    setService(s);
  }, [searchParams]);

  const serviceData = service
    ? services[service as keyof typeof services]
    : null;

  return (
    <main className="bg-black text-white px-6 py-12 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        {serviceData ? (
          <>
            <h1 className="text-3xl font-bold mb-4">{serviceData.title}</h1>
            <p className="text-gray-300 mb-8">{serviceData.description}</p>

            <h2 className="text-xl font-semibold mb-2">Müşteri Yorumları</h2>
            <ul className="space-y-4 text-left text-sm text-gray-400">
              <li>
                ⭐️⭐️⭐️⭐️⭐️ Çok memnun kaldım, ekip çok hızlıydı. – Ayşe K.
              </li>
              <li>
                ⭐️⭐️⭐️⭐️ Kombi bakımı titizlikle yapıldı. Tavsiye ederim. –
                Mehmet D.
              </li>
              <li>
                ⭐️⭐️⭐️⭐️⭐️ Buzdolabı aynı gün tamir edildi, teşekkürler. –
                Emre S.
              </li>
            </ul>
          </>
        ) : (
          <p className="text-gray-400">
            Hizmet bulunamadı veya geçersiz parametre.
          </p>
        )}
      </div>
    </main>
  );
}
