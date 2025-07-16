'use client';

import Link from 'next/link';
import serviceLinks from '@/data/serviceLinks';

export default function ServiceDropdown({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  return (
    <ul className="dropdown-content bg-[#1a1d29] border border-gray-700 rounded w-56 shadow-lg z-50">
      {serviceLinks.map(({ name, href }) => (
        <li key={name}>
          <Link
            href={href}
            onClick={onNavigate}
            className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
