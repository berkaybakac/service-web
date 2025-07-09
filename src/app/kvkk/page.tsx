export default function KVKKPage() {
  return (
    <main className="bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Kişisel Verilerin Korunması Kanunu (KVKK)
        </h1>

        <p className="text-gray-300 mb-4">
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kişisel
          verilerinizi nasıl topladığımız, işlediğimiz ve sakladığımız hakkında
          sizi bilgilendirmek istiyoruz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Veri Sorumlusu</h2>
        <p className="text-gray-300 mb-6">
          Veri sorumlusu olarak Eterna Teknik Servis, tarafınıza ait kişisel
          verileri yasal çerçevede işlemektedir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          İşlenen Kişisel Veriler
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>İsim, soyisim</li>
          <li>Telefon numarası, e-posta adresi</li>
          <li>Adres bilgileri</li>
          <li>IP ve cihaz bilgileri</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          Verilerin İşlenme Amaçları
        </h2>
        <p className="text-gray-300 mb-6">
          Kişisel verileriniz, servis hizmetlerinin sunulması, iletişim
          kurulması ve yasal yükümlülüklerin yerine getirilmesi amacıyla
          işlenmektedir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Haklarınız</h2>
        <p className="text-gray-300 mb-6">
          KVKK kapsamında, verilerinize erişim, düzeltme, silme ve işlenmesini
          durdurma gibi birçok hakkınız bulunmaktadır. Taleplerinizi bize
          iletebilirsiniz.
        </p>

        <p className="text-gray-400 text-sm mt-8">
          Son güncelleme: Temmuz 2025
        </p>
      </div>
    </main>
  );
}
