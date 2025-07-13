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
    const pathArray = pathParts.map((part, index) => ({
      name: decodeURIComponent(part),
      href: '/' + pathParts.slice(0, index + 1).join('/'),
    }));

    setBreadcrumbs([{ name: 'Ana Sayfa', href: '/' }, ...pathArray]);
  }, [pathname]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="text-sm text-gray-400 mb-8" aria-label="breadcrumb">
      <ol className="flex flex-wrap items-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            <Link
              href={crumb.href}
              className="hover:text-white transition-colors duration-150"
            >
              {crumb.name.charAt(0).toUpperCase() + crumb.name.slice(1)}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="mx-1 text-gray-500">›</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
