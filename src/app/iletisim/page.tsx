// src/app/iletisim/page.tsx
'use client';

import company from '@/config/company';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          İletişim
        </h1>
        <p className="text-gray-300 mb-8 text-center">
          Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.
        </p>
        <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Adresimiz
            </h2>
            <p className="text-gray-300">
              {company.address.street}, {company.address.district},{' '}
              {company.address.city} {company.address.zip}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-white">Telefon</h2>
            <p className="text-gray-300">
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="text-blue-400 hover:underline"
              >
                {company.phone}
              </a>
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-white">E-posta</h2>
            <p className="text-gray-300">
              <a
                href={`mailto:${company.email}`}
                className="text-blue-400 hover:underline"
              >
                {company.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Çalışma Saatleri
            </h2>
            <p className="text-gray-300">
              Pazartesi - Cuma: {company.workingHours.weekdays}
            </p>
            <p className="text-gray-300">
              Cumartesi: {company.workingHours.saturday}
            </p>
            <p className="text-gray-300">
              Pazar: {company.workingHours.sunday}
            </p>
          </div>
        </div>

        <p className="text-gray-300 text-center mt-8">
          En kısa sürede size geri dönüş yapacağız.
        </p>

        <p className="text-gray-300 text-xs text-center mt-4">
          Bilgilendirme: Bu web sitesi{' '}
          <strong className="text-white">resmi yetkili servis</strong>{' '}
          değildir. Teknik destek yalnızca{' '}
          <strong className="text-white">garantisi sona ermiş</strong> cihazlar
          içindir.
        </p>
      </div>
    </main>
  );
}
