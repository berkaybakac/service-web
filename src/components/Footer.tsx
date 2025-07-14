import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 text-sm px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        <div>
          <p>
            © {new Date().getFullYear()} Eterna Teknik Servis. Tüm hakları
            saklıdır.
          </p>
          <p className="text-gray-300 text-xs mt-2 max-w-md mx-auto">
            Bu web sitesi <strong>resmi yetkili servis</strong> değildir.
            Yalnızca <strong>garantisi sona ermiş</strong> cihazlar için teknik
            servis hizmeti sunmaktadır.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-center">
          <Link href="/" className="hover:underline">
            Anasayfa
          </Link>
          <Link href="/hizmetler" className="hover:underline">
            Hizmetler
          </Link>
          <Link href="/hakkimizda" className="hover:underline">
            Hakkımızda
          </Link>
          <Link href="/iletisim" className="hover:underline">
            İletişim
          </Link>
          <Link href="/gizlilik" className="hover:underline">
            Gizlilik
          </Link>
          <Link href="/kvkk" className="hover:underline">
            KVKK
          </Link>
        </div>
      </div>
    </footer>
  );
}
