'use client';

import company from '@/config/company';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 text-sm px-6 py-8 mt-12 pb-24">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        <div>
          <p>{company.copyright}</p>
          <p className="text-gray-300 text-xs mt-2 max-w-md mx-auto">
            {company.supportNote}
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

        <div className="flex justify-center gap-4 mt-6 text-white text-[24px]">
          {company.social?.facebook && (
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="hover:opacity-80 transition"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.675 0H1.325C.593 0 0 .594 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.794.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .594 23.407 0 22.675 0z" />
              </svg>
            </a>
          )}
          {company.social?.twitter && (
            <a
              href={company.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
              className="hover:opacity-80 transition"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.003.974-3.127 1.195-.896-.959-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.416-1.68 1.32-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21-.004-.423-.015-.637.962-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
          )}
          {company.social?.linkedin && (
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="hover:opacity-80 transition"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8.5 8h3.6v2.15h.05c.5-.95 1.75-1.95 3.6-1.95 3.85 0 4.55 2.5 4.55 5.75V24h-4V14.25c0-2.25-.05-5.15-3.15-5.15s-3.65 2.45-3.65 5v9.9h-4V8z" />
              </svg>
            </a>
          )}
          {company.social?.whatsapp && (
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="hover:opacity-80 transition"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16.01 2.003C8.82 2.003 2.94 7.892 2.94 15.078c0 2.596.698 5.128 2.02 7.35L2.01 30l7.77-2.03a13.045 13.045 0 0 0 6.22 1.57h.01c7.18 0 13.06-5.89 13.06-13.078.01-7.186-5.88-13.065-13.06-13.065zm7.57 18.514c-.316.88-1.84 1.68-2.51 1.79-.642.1-1.452.15-2.342-.15-.542-.17-1.23-.4-2.123-.78-3.737-1.61-6.173-5.36-6.357-5.61-.184-.25-1.52-2.02-1.52-3.86 0-1.84.966-2.75 1.308-3.13.34-.38.74-.47.99-.47.25 0 .5.01.72.01.23 0 .54-.09.85.64.316.75 1.08 2.58 1.18 2.76.1.18.17.4.03.65-.13.25-.2.4-.38.61-.18.21-.4.47-.57.63-.19.2-.38.42-.16.82.22.4.96 1.59 2.07 2.58 1.43 1.28 2.64 1.68 3.04 1.86.39.18.62.15.85-.08.23-.23.98-1.14 1.24-1.53.25-.39.5-.32.84-.18.34.14 2.15 1.02 2.52 1.2.37.18.62.27.72.42.1.15.1.87-.22 1.74z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
