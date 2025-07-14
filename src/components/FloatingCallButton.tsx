'use client';

import company from '@/config/company';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FloatingCallButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;
      setVisible(!nearBottom);
    };

    handleScroll(); // sayfa ilk yüklendiğinde kontrol et

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (pathname === '/') return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 sm:hidden transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Link
        href={`tel:${company.phone.replace(/\s/g, '')}`}
        className="flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 text-white w-14 h-14 shadow-lg transition-all duration-300"
        aria-label={`Ara: ${company.phone}`}
      >
        <PhoneIcon className="h-6 w-6" />
      </Link>
    </div>
  );
}
