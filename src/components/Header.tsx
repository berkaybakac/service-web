export default function Header() {
  return (
    <header className="bg-gray-950 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Eterna Teknik Servis</h1>
        <nav className="space-x-4 text-sm hidden sm:block">
          <a href="#" className="hover:underline">
            Anasayfa
          </a>
          <a href="#" className="hover:underline">
            Hizmetler
          </a>
          <a href="#" className="hover:underline">
            İletişim
          </a>
        </nav>
      </div>
    </header>
  );
}
