// src/app/gizlilik/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası - Eterna Teknik Servis',
  description:
    'Eterna Teknik Servis Gizlilik Politikası: Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin.',
  openGraph: {
    title: 'Gizlilik Politikası - Eterna Teknik Servis',
    description:
      'Eterna Teknik Servis Gizlilik Politikası: Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin.',
    url: 'https://eternateknikservis.com/gizlilik', // Kendi domaininizi buraya yazın
    siteName: 'Eterna Teknik Servis',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary', // Görsel olmadığı için summary kart tipi daha uygun
    title: 'Gizlilik Politikası - Eterna Teknik Servis',
    description:
      'Eterna Teknik Servis Gizlilik Politikası: Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto py-12">
        {/* Başlık rengi beyaza çevrildi */}
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Gizlilik Politikası
        </h1>
        <p className="text-gray-300 leading-relaxed mb-4">
          Bu Gizlilik Politikası, Eterna Teknik Servis web sitesi (bundan böyle
          &quot;Site&quot; olarak anılacaktır) aracılığıyla topladığımız kişisel
          verilerinizi nasıl kullandığımızı, koruduğumuzu ve ifşa ettiğimizi
          açıklamaktadır. Sitemizi kullanarak bu politikayı kabul etmiş
          olursunuz.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Topladığımız Bilgiler
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Sitemizi ziyaret ettiğinizde, iletişim formlarını doldurduğunuzda veya
          hizmetlerimizden yararlandığınızda adınız, e-posta adresiniz, telefon
          numaranız ve adres bilgileriniz gibi kişisel bilgiler toplayabiliriz.
          Ayrıca, IP adresiniz, tarayıcı türünüz, ziyaret tarih ve saatleriniz
          gibi otomatik olarak toplanan bilgileri de kaydedebiliriz.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Bilgileri Nasıl Kullanıyoruz?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:
        </p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4">
          <li className="mb-2">
            Hizmet taleplerinizi işlemek ve size yanıt vermek.
          </li>
          <li className="mb-2">
            Hizmetlerimizi geliştirmek ve kişiselleştirmek.
          </li>
          <li className="mb-2">Web sitesi deneyiminizi iyileştirmek.</li>
          <li className="mb-2">
            Pazarlama ve tanıtım faaliyetleri yürütmek (onayınızla).
          </li>
          <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Bilgilerin Paylaşılması
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Kişisel verilerinizi üçüncü taraflarla, yalnızca yasal gereklilikler
          veya açık rızanız doğrultusunda paylaşırız. Hizmet sağlayıcılarımızla
          (örneğin ödeme işlemcileri, hosting hizmetleri) gerektiğinde
          bilgilerinizi paylaşabiliriz, ancak bu paylaşımlar yalnızca hizmetin
          sağlanması amacıyla sınırlıdır.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Veri Güvenliği
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Kişisel verilerinizin güvenliğini sağlamak için çeşitli güvenlik
          önlemleri almaktayız. Ancak, internet üzerinden veri iletiminin %100
          güvenli olmadığını lütfen unutmayın.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Çerezler (Cookies)
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir.
          Çerezler, tarayıcınızda saklanan küçük metin dosyalarıdır. Tarayıcı
          ayarlarınızı değiştirerek çerezleri reddedebilirsiniz.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Haklarınız
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Kişisel verilerinizle ilgili olarak erişim, düzeltme, silme veya
          işlemeyi kısıtlama haklarına sahipsiniz. Bu haklarınızı kullanmak için
          lütfen bizimle iletişime geçin.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Politika Değişiklikleri
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler
          sitede yayımlandığı anda yürürlüğe girer.
        </p>
      </div>
    </main>
  );
}
