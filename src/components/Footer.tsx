// src/components/Footer.tsx
'use client';

import company from '@/config/company';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 text-sm py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left">{company.copyright}</p>
        <p className="text-center sm:text-right">{company.legalName}</p>
      </div>
    </footer>
  );
}
