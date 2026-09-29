import React from 'react';
import type { FAQ } from '@/types';

export default function FAQSection({ faq }: { faq: FAQ[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  return (
    <section className="w-full max-w-4xl mx-auto my-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="space-y-4">
        {faq.map((item, index) => (
          <details 
            key={index} 
            className="group border-b border-gray-200 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between py-4 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
              <span>{item.question}</span>
              <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-gray-500 group-open:bg-blue-50 group-open:text-blue-600 group-open:border-blue-100 transition-colors">
                <svg className="w-4 h-4 group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <svg className="w-4 h-4 hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </span>
            </summary>
            <div className="pb-4 text-gray-600 pr-12">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
