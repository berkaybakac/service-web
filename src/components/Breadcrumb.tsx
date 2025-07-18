'use client';

import company from '@/config/company';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export default function Breadcrumb() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { name: string; href: string }[]
  >([]);

  useEffect(() => {
    if (!pathname) return;

    const cleanPath = pathname.split('?')[0];
    const pathParts = cleanPath.split('/').filter(Boolean);

    const serviceTitleMap: Record<string, string> = {
      'Beyaz Eşya Servisi': 'Beyaz Eşya Servisi',
      Buzdolabı: 'Buzdolabı',
      'Çamaşır Makinesi': 'Çamaşır Makinesi',
      'Bulaşık Makinesi': 'Bulaşık Makinesi',
      Fırın: 'Fırın & Ocak Tamiri',
      Klima: 'Klima',
      Kombi: 'Kombi',
      Televizyon: 'Televizyon',
    };

    const pathArray = pathParts.map((part, index) => {
      const decoded = decodeURIComponent(part);
      let label;

      if (decoded === 'hizmet') {
        label = 'Hizmetler';
      } else {
        label = serviceTitleMap[decoded] || decoded;
      }

      return {
        name: label,
        href: '/' + pathParts.slice(0, index + 1).join('/'),
      };
    });

    setBreadcrumbs([{ name: 'Ana Sayfa', href: '/' }, ...pathArray]);
  }, [pathname]);

  const jsonLd = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: `${company.url}${b.href}`,
      })),
    };
  }, [breadcrumbs]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="breadcrumb" className="mb-8">
        <ol className="flex justify-center flex-wrap gap-2 text-gray-200 text-sm sm:text-base px-4 sm:px-0">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              <Link
                href={crumb.href}
                className="hover:text-white transition-colors duration-150"
              >
                {crumb.name}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2 text-gray-300">›</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
