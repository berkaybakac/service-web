// src/app/hizmet/[slug]/head.tsx

import company from '@/config/company';
import { DEFAULT_DESCRIPTION } from '@/config/seo';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const decoded = decodeURIComponent(params.slug);
  const title = `${decoded} | ${company.name}`;
  const canonical = `${company.url}/hizmet/${encodeURIComponent(decoded)}`;

  return {
    title,
    description: DEFAULT_DESCRIPTION,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: DEFAULT_DESCRIPTION,
      url: canonical,
      siteName: company.name,
      locale: 'tr_TR',
      type: 'article',
      images: [
        {
          url: `${company.url}/service-web-og.webp`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: DEFAULT_DESCRIPTION,
      images: [`${company.url}/service-web-og.webp`],
    },
  };
}
