// src/app/hizmetler/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz - Eterna Teknik Servis',
  description:
    'Eterna Teknik Servis olarak sunduğumuz tüm beyaz eşya, kombi, klima ve televizyon tamir, bakım ve montaj hizmetlerini keşfedin.',
  openGraph: {
    title: 'Hizmetlerimiz - Eterna Teknik Servis',
    description:
      'Eterna Teknik Servis olarak sunduğumuz tüm beyaz eşya, kombi, klima ve televizyon tamir, bakım ve montaj hizmetlerini keşfedin.',
    url: 'https://eternateknikservis.com/hizmetler', // Kendi domaininizi buraya yazın
    siteName: 'Eterna Teknik Servis',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary', // Görsel olmadığı için summary kart tipi uygun
    title: 'Hizmetlerimiz - Eterna Teknik Servis',
    description:
      'Eterna Teknik Servis olarak sunduğumuz tüm beyaz eşya, kombi, klima ve televizyon tamir, bakım ve montaj hizmetlerini keşfedin.',
  },
};

export default function HizmetlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
