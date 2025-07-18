// src/app/hizmet/[slug]/head.tsx
import type { Metadata } from 'next';
import company from '@/config/company';
import { DEFAULT_DESCRIPTION } from '@/config/seo';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const decodedSlug = decodeURIComponent(params.slug);
  const title = `${decodedSlug} | ${company.name}`;
  const description = `${decodedSlug} servisi hakkında detaylı bilgi alın. ${DEFAULT_DESCRIPTION}`;
  const url = `${company.url}/hizmet/${encodeURIComponent(decodedSlug)}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: 'tr_TR',
      type: 'article',
      images: [
        {
          url: `${company.url}/service-web-og.webp`,
          width: 1200,
          height: 630,
          alt: `${company.name} ${decodedSlug}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${company.url}/service-web-og.webp`],
    },
  };
}
