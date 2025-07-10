import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 text-sm px-6 py-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} Eterna Teknik Servis. Tüm hakları
          saklıdır.
        </div>
        <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
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
