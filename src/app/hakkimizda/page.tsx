import company from '@/config/company';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Hakkımızda
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            {company.name} Kimdir?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {company.name} olarak, uzun yıllardır sektördeki tecrübemizle beyaz
            eşya, kombi, klima ve televizyon gibi ev aletlerinin bakım, onarım
            ve montaj hizmetlerini sunmaktayız. Müşteri memnuniyetini her zaman
            ön planda tutarak, hızlı, güvenilir ve kaliteli çözümler sunmayı
            hedefliyoruz.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Alanında uzman ve deneyimli teknik ekibimizle, cihazlarınızdaki
            sorunları en kısa sürede tespit edip, kalıcı çözümler üretiyoruz.
            Kullandığımız orijinal yedek parçalar ve modern ekipmanlar
            sayesinde, tamir ettiğimiz cihazların ömrünü uzatıyor ve maksimum
            verimlilikle çalışmalarını sağlıyoruz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            Misyonumuz
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Misyonumuz, sektördeki gelişmeleri yakından takip ederek,
            teknolojinin sunduğu en iyi imkanlarla müşterilerimize kesintisiz ve
            yüksek standartlarda hizmet sunmaktır. Her bir müşterimizin özel
            ihtiyaçlarına duyarlılıkla yaklaşarak, sorunlarına hızlı ve etkili
            çözümler getirmek, şirketimizin temel prensibidir. Çevreye duyarlı
            bir yaklaşımla, sürdürülebilir ve enerji verimli çözümler sunmayı da
            amaçlıyoruz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            Vizyonumuz
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Vizyonumuz, teknik servis sektöründe lider bir marka olmak,
            yenilikçi yaklaşımlarımızla standartları belirlemek ve müşteri
            tabanımızı sürekli genişleterek sektördeki öncü konumumuzu
            pekiştirmektir. Uzun vadeli müşteri ilişkileri kurarak, sadece arıza
            anında değil, düzenli bakım ve danışmanlık hizmetleriyle de
            müşterilerimizin yanında olmayı hedefliyoruz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            Neden {company.name}?
          </h2>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed">
            <li className="mb-2">Deneyimli ve Uzman Kadro</li>
            <li className="mb-2">Hızlı ve Güvenilir Hizmet</li>
            <li className="mb-2">Orijinal Yedek Parça Garantisi</li>
            <li className="mb-2">Uygun Fiyat Garantisi</li>
            <li className="mb-2">Geniş Hizmet Ağı</li>
            <li>Müşteri Memnuniyeti Odaklı Yaklaşım</li>
          </ul>
        </section>

        <p className="text-gray-400 text-sm mt-8">
          Not: Bu web sitesi <strong>resmi yetkili servis</strong> değildir.
          Sadece <strong>garantisi sona ermiş</strong> cihazlara teknik servis
          sağlamaktadır.
        </p>
      </div>
    </main>
  );
}
