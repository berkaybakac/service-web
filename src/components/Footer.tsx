import company from '@/config/company';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 text-sm px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        <div>
          <p>{company.copyright}</p>
          <p className="text-gray-300 text-xs mt-2 max-w-md mx-auto">
            Bu web sitesi <strong>resmi yetkili servis</strong> değildir.
            Yalnızca <strong>garantisi sona ermiş</strong> cihazlar için teknik
            servis hizmeti sunmaktadır.
          </p>
        </div>

        <nav aria-label="Alt menü">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-center">
            <li>
              <Link href="/" className="hover:underline">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/hizmetler" className="hover:underline">
                Hizmetler
              </Link>
            </li>
            <li>
              <Link href="/hakkimizda" className="hover:underline">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:underline">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/gizlilik" className="hover:underline">
                Gizlilik
              </Link>
            </li>
            <li>
              <Link href="/kvkk" className="hover:underline">
                KVKK
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
            className="hover:opacity-80 transition"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className="text-white"
              viewBox="0 0 24 24"
            >
              <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.1v-2.9h2.34V9.41c0-2.3 1.37-3.58 3.47-3.58.7 0 1.43.12 1.43.12v1.98h-.8c-.79 0-1.04.49-1.04 1v1.2h2.08l-.33 2.9h-1.75v7.03C18.34 21.2 22 17.06 22 12.07z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Twitter (X)"
            className="hover:opacity-80 transition"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className="text-white"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.71 1.04 4.27 4.27 0 0 0-7.28 3.9A12.11 12.11 0 0 1 3.16 4.9a4.27 4.27 0 0 0 1.32 5.7 4.27 4.27 0 0 1-1.93-.54v.05a4.28 4.28 0 0 0 3.42 4.19 4.3 4.3 0 0 1-1.12.15c-.28 0-.55-.03-.81-.08a4.27 4.27 0 0 0 3.99 2.96A8.57 8.57 0 0 1 2 19.54a12.08 12.08 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 24 5.64a8.42 8.42 0 0 1-2.54.7z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="hover:opacity-80 transition"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className="text-white"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.77 0 5-2.24 5-5v-14c0-2.76-2.23-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.96 0-1.72-.79-1.72-1.75s.76-1.75 1.72-1.75 1.72.79 1.72 1.75-.77 1.75-1.72 1.75zm13.5 10.28h-3v-4.74c0-1.13-.02-2.58-1.57-2.58-1.58 0-1.83 1.23-1.83 2.5v4.82h-3v-9h2.88v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.98 3.58 4.56v4.77z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
