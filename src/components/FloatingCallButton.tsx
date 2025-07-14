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
      const nearBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 100;
      setIsVisible(!nearBottom);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility);
    window.addEventListener('resize', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  if (pathname === '/') return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 sm:hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Link
        href="tel:+908501234567"
        className="flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 text-white w-14 h-14 shadow-lg transition-all duration-300"
        aria-label="Hemen Ara"
      >
        <PhoneIcon className="h-6 w-6" />
      </Link>
    </div>
  );
}
