'use client';

import { Suspense } from 'react';
import ServiceDetailPage from './ServiceDetailPage';

export default function PageWrapper() {
  return (
    <Suspense
      fallback={<div className="text-center text-gray-500">Yükleniyor...</div>}
    >
      <ServiceDetailPage />
    </Suspense>
  );
}
