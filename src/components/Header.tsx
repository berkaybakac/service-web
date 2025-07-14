'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import FloatingCallButton from './FloatingCallButton';

const navItems = [
  { name: 'Anasayfa', href: '/' },
  { name: 'Hizmetler', href: '/hizmetler' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0f1117] py-4 px-6 shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-base md:text-lg">
            Eterna Teknik Servis
          </Link>

          {/* Desktop Menü */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? 'text-white underline underline-offset-4'
                      : 'text-gray-400 hover:text-white transition'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobil Menü Butonu */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobil Menü Açılır */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 px-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded text-sm font-medium ${
                  pathname === item.href
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {pathname !== '/' && <FloatingCallButton />}
    </>
  );
}
