import { BreadcrumbItem, FAQ } from '@/types';
import { SITE_CONFIG } from '@/lib/config';

type SchemaMarkupProps =
  | { type: 'Organization' }
  | { type: 'WebSite' }
  | { type: 'Article'; data: { title: string; description: string; slug: string; publishedAt: string; updatedAt: string; author: string; image?: string } }
  | { type: 'BreadcrumbList'; data: { items: BreadcrumbItem[] } }
  | { type: 'FAQPage'; data: { faq: FAQ[] } }
  | { type: 'WebPage'; data: { title: string; description: string; url: string } };

export default function SchemaMarkup(props: SchemaMarkupProps) {
  let schema = {};

  switch (props.type) {
    case 'Organization':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/images/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE_CONFIG.phoneNumber,
          contactType: 'customer service',
          availableLanguage: ['English']
        }
      };
      break;
    case 'WebSite':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      };
      break;
    case 'Article':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: props.data.title,
        description: props.data.description,
        image: props.data.image ? [props.data.image] : [SITE_CONFIG.ogImage],
        datePublished: props.data.publishedAt,
        dateModified: props.data.updatedAt,
        author: [{
          '@type': 'Person',
          name: props.data.author
        }],
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_CONFIG.url}/images/logo.png`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE_CONFIG.url}/${props.data.slug}`
        }
      };
      break;
    case 'BreadcrumbList':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: props.data.items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          item: `${SITE_CONFIG.url}${item.href}`
        }))
      };
      break;
    case 'FAQPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: props.data.faq.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };
      break;
    case 'WebPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: props.data.title,
        description: props.data.description,
        url: props.data.url
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
