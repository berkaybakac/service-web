export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Gizlilik Politikası
        </h1>

        <p className="text-gray-300 mb-4">
          Eterna Teknik Servis olarak, kullanıcılarımızın gizliliğine önem
          veriyoruz. Bu gizlilik politikası, sitemizi kullandığınızda hangi
          bilgileri topladığımızı ve bu bilgileri nasıl kullandığımızı açıklar.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Toplanan Bilgiler</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Ad, soyad, iletişim bilgileri (telefon, e-posta)</li>
          <li>IP adresi ve tarayıcı bilgileri</li>
          <li>Servis talep geçmişi</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          Bilgilerin Kullanımı
        </h2>
        <p className="text-gray-300 mb-6">
          Toplanan bilgiler; hizmet sunmak, iletişim kurmak, yasal
          yükümlülükleri yerine getirmek ve hizmet kalitemizi artırmak amacıyla
          kullanılmaktadır.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Çerezler</h2>
        <p className="text-gray-300 mb-6">
          Web sitemiz, kullanıcı deneyimini geliştirmek için çerezlerden
          faydalanmaktadır. Tarayıcı ayarlarından çerezleri devre dışı
          bırakabilirsiniz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          Gizlilik Politikası Değişiklikleri
        </h2>
        <p className="text-gray-300 mb-6">
          Politikamız zaman zaman güncellenebilir. Güncel bilgileri bu sayfadan
          takip edebilirsiniz.
        </p>

        <p className="text-gray-400 text-sm mt-8">
          Son güncelleme: Temmuz 2025
        </p>
      </div>
    </main>
  );
}
