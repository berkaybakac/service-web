'use client';

import company from '@/config/company';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300">
      <Link
  href={`tel:${company.phone.replace(/\s/g, '')}`}
  className="flex items-center gap-2 px-5 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-300"
  aria-label={`Ara: ${company.phone}`}
>

        <PhoneIcon className="h-5 w-5" />
        <span className="text-sm font-semibold">Hemen Ara</span>
      </Link>
    </div>
  );
}
