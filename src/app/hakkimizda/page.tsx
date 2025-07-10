import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Eterna Teknik Servis',
  description:
    'Eterna Teknik Servis’in tecrübesi, misyonu ve müşteri memnuniyeti anlayışı hakkında detaylı bilgi alın.',
};

export default function Hakkimizda() {
  return (
    <main className="bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Hakkımızda</h1>
        <p className="text-gray-300 mb-4">
          Eterna Teknik Servis, beyaz eşya alanında uzmanlaşmış, güvenilir ve
          deneyimli bir servis sağlayıcısıdır. Misyonumuz, müşterilerimize
          hızlı, etkili ve ekonomik çözümler sunarak günlük yaşamlarındaki
          konforu kesintisiz hale getirmektir.
        </p>
        <p className="text-gray-300 mb-4">
          Sektördeki 10 yılı aşkın tecrübemizle, farklı marka ve modeldeki
          cihazlara bakım, onarım ve montaj hizmetleri vermekteyiz. İstanbul
          merkezli yapımızla birlikte, müşteri memnuniyetini temel ilke olarak
          benimseyen bir anlayışla çalışıyoruz.
        </p>
        <p className="text-gray-300 mb-4">
          Ekip olarak teknolojiye hâkimiyetimiz, çağın ihtiyaçlarını
          karşılayabilen altyapımız ve eğitimli teknisyen kadromuzla birlikte
          hizmet vermekteyiz. Her servis talebinde şeffaf fiyatlandırma,
          orijinal yedek parça kullanımı ve zamanında çözüm ilkelerimizle fark
          yaratmayı sürdürüyoruz.
        </p>
        <p className="text-gray-300">
          Bizimle iletişime geçerek güvenli, garantili ve profesyonel teknik
          destek alabilirsiniz.
        </p>
      </div>
    </main>
  );
}
