import { Metadata } from 'next';
import company from '@/config/company';
import { DEFAULT_DESCRIPTION } from '@/config/seo';

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const decodedSlug = decodeURIComponent(params.slug || '');
  const pageTitle = `${decodedSlug} | ${company.name}`;
  const pageDescription = `${decodedSlug} hizmeti hakkında detaylı bilgi alın. ${DEFAULT_DESCRIPTION}`;
  const canonicalUrl = `${company.url}/hizmet/${encodeURIComponent(
    decodedSlug
  )}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
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
      title: pageTitle,
      description: pageDescription,
      images: [`${company.url}/service-web-og.webp`],
    },
  };
}
