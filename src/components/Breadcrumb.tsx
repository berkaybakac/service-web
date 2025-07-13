'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Breadcrumb() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { name: string; href: string }[]
  >([]);

  useEffect(() => {
    if (!pathname) return;

    const pathParts = pathname.split('/').filter(Boolean);
    const pathArray = pathParts.map((part, index) => {
      return {
        name: decodeURIComponent(part),
        href: '/' + pathParts.slice(0, index + 1).join('/'),
      };
    });

    setBreadcrumbs([{ name: 'Ana Sayfa', href: '/' }, ...pathArray]);
  }, [pathname]);

  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="breadcrumb">
      {breadcrumbs.map((crumb, index) => (
        <span key={crumb.href}>
          <Link href={crumb.href} className="text-blue-600 hover:underline">
            {crumb.name.charAt(0).toUpperCase() + crumb.name.slice(1)}
          </Link>
          {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
}
