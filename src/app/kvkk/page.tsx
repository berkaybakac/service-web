// src/app/kvkk/page.tsx
'use client';

import company from '@/config/company';

export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto min-h-[1000px] py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Kişisel Verilerin Korunması Kanunu (KVKK) Politikası
        </h1>
        <p className="text-gray-300 leading-relaxed mb-4">
          {company.name} olarak, Kişisel Verilerin Korunması Kanunu (KVKK)
          kapsamında, kişisel verilerinizin gizliliğine ve güvenliğine büyük
          önem vermekteyiz. Bu politika, veri sorumlusu sıfatıyla kişisel
          verilerinizi nasıl topladığımızı, işlediğimizi, sakladığımızı,
          aktardığımızı ve ilgili haklarınızı açıklamaktadır.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Kişisel Verilerin Toplanması ve İşlenmesi
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Hizmetlerimizden yararlandığınızda veya web sitemizi ziyaret
          ettiğinizde, aşağıda belirtilen türde kişisel verilerinizi
          toplayabiliriz:
        </p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4">
          <li className="mb-2">Kimlik Bilgileri (Ad, Soyad)</li>
          <li className="mb-2">
            İletişim Bilgileri (Telefon Numarası, E-posta Adresi, Adres)
          </li>
          <li className="mb-2">
            Hizmet Talebi Bilgileri (Talep edilen hizmetin türü, cihaz
            bilgileri)
          </li>
          <li>İşlem Güvenliği Bilgileri (IP adresi, log kayıtları)</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-4">
          Kişisel verileriniz, aşağıda belirtilen amaçlar doğrultusunda
          işlenmektedir:
        </p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4">
          <li className="mb-2">
            Hizmetlerimizi sunmak ve taleplerinizi yerine getirmek.
          </li>
          <li className="mb-2">
            Müşteri memnuniyetini sağlamak ve geri bildirimleri değerlendirmek.
          </li>
          <li className="mb-2">Yasal yükümlülüklerimizi yerine getirmek.</li>
          <li>
            Pazarlama ve tanıtım faaliyetleri yürütmek (ilgili yasalara uygun
            olarak).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Kişisel Verilerin Aktarılması
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Kişisel verileriniz, yasal düzenlemelerin öngördüğü durumlarda veya
          açık rızanızla sınırlı olarak, hizmet sağlayıcılarımıza (örneğin kargo
          şirketleri, ödeme sistemleri) veya yetkili kamu kurum ve kuruluşlarına
          aktarılabilir.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Kişisel Verilerin Saklanması ve Güvenliği
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Toplanan kişisel verileriniz, ilgili yasal mevzuatta belirtilen veya
          işlendiği amaç için gerekli olan süre kadar muhafaza edilir.
          Verilerinizin güvenliğini sağlamak amacıyla gerekli teknik ve idari
          tedbirler alınmaktadır.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          İlgili Kişinin Hakları
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          KVKK&#39;nın 11. maddesi uyarınca, kişisel verilerinizle ilgili olarak
          aşağıdaki haklara sahipsiniz:
        </p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4">
          <li className="mb-2">
            Kişisel verilerinizin işlenip işlenmediğini öğrenme.
          </li>
          <li className="mb-2">
            Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme.
          </li>
          <li className="mb-2">
            Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp
            kullanılmadığını öğrenme.
          </li>
          <li className="mb-2">
            Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü
            kişileri öğrenme.
          </li>
          <li className="mb-2">
            Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların
            düzeltilmesini isteme.
          </li>
          <li className="mb-2">
            KVKK şartları çerçevesinde kişisel verilerin silinmesini veya yok
            edilmesini isteme.
          </li>
          <li className="mb-2">
            Aktarıldığı üçüncü kişilere eksik veya yanlış verilerin
            bildirilmesini isteme.
          </li>
          <li>
            İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz
            edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya
            çıkmasına itiraz etme.
          </li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          Bu haklarınızı kullanmak için lütfen bizimle iletişime geçin.
        </p>
      </div>
    </main>
  );
}
