'use client';

import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import serviceSubLinks from '../data/serviceLinks';
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0f1117] py-4 px-6 shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-base md:text-lg">
            Eterna Teknik Servis
          </Link>

          {/* Desktop Menü */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {navItems.map((item) =>
              item.name === 'Hizmetler' ? (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 ${
                        pathname === item.href
                          ? 'text-white underline underline-offset-4'
                          : 'text-gray-400 hover:text-white transition'
                      }`}
                    >
                      {item.name}
                      <ChevronDownIcon className="w-4 h-4" />
                    </Link>
                    {isDropdownOpen && (
                      <ul className="absolute left-0 mt-2 w-56 rounded border border-gray-700 bg-[#1a1d29] shadow-lg z-50">
                        {serviceSubLinks.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ) : (
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
              )
            )}
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
              <div key={item.name}>
                <Link
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
                {item.name === 'Hizmetler' &&
                  serviceSubLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-6 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        )}
      </header>

      {pathname !== '/' && <FloatingCallButton />}
    </>
  );
}
