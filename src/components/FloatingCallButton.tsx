'use client';

import { PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const updateVisibility = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      const nearBottom = scrollTop + windowHeight >= documentHeight - 100;

      // Ekran çok kısa bile olsa ilk başta göster, sadece footer’a çarpınca gizle
      setIsVisible(!nearBottom);
    };

    // İlk render'da çalıştır
    updateVisibility();

    // Scroll ve resize olaylarını dinle
    window.addEventListener('scroll', updateVisibility);
    window.addEventListener('resize', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  if (pathname === '/') return null; // ✅ Anasayfada gösterme

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } group`}
    >
      <Link
        href="tel:+908501234567"
        className="flex items-center space-x-2 rounded-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 shadow-lg transition-all duration-300 hover:scale-105"
        aria-label="Hemen Ara"
      >
        <PhoneIcon className="h-6 w-6 text-white" />
        <span className="hidden sm:inline font-semibold">Hemen Ara</span>
      </Link>
    </div>
  );
}
