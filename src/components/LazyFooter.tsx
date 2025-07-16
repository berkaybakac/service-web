'use client';

import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'), {
  ssr: false,
  loading: () => <div style={{ height: 280 }} />, // CLS koruması için yer tutucu
});

export default function LazyFooter() {
  return <Footer />;
}
