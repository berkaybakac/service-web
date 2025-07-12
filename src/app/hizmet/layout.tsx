// src/app/hizmet/layout.tsx
import { Suspense } from 'react';

export default function HizmetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Sayfa yükleniyor...</div>}>{children}</Suspense>
  );
}
