'use client';

import { trackPhoneClick } from '@/lib/analytics';
import { SITE_CONFIG } from '@/lib/config';

interface CTABlockProps {
  headline?: string;
  title?: string;
  subtext?: string;
  variant?: 'primary' | 'secondary' | 'minimal';
  pageSlug?: string;
}

export default function CTABlock({ headline, title, subtext, variant = 'primary', pageSlug = 'homepage' }: CTABlockProps) {
  const headingText = headline || title || 'Need Flight Assistance?';
  const handleClick = () => {
    trackPhoneClick('cta_block', pageSlug);
  };

  if (variant === 'minimal') {
    return (
      <div className="bg-white border-2 border-[#2563eb] rounded-xl p-6 text-center shadow-sm">
        <h3 className="text-xl font-bold text-[#2563eb] mb-2">{headingText}</h3>
        {subtext && <p className="text-gray-600 mb-4">{subtext}</p>}
        <a 
          href={SITE_CONFIG.phoneHref}
          onClick={handleClick}
          className="inline-flex items-center justify-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Call {SITE_CONFIG.phoneNumber}
        </a>
      </div>
    );
  }

  if (variant === 'secondary') {
    return (
      <div className="bg-[#2563eb] rounded-xl p-8 text-center text-white shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{headingText}</h2>
        {subtext && <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">{subtext}</p>}
        <a 
          href={SITE_CONFIG.phoneHref}
          onClick={handleClick}
          className="inline-flex items-center justify-center gap-2 bg-white text-[#2563eb] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow"
        >
          Call {SITE_CONFIG.phoneNumber}
        </a>
      </div>
    );
  }

  // Primary variant
  return (
    <div className="bg-[#1e3a5f] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{headingText}</h2>
      {subtext && <p className="text-gray-200 mb-8 text-xl max-w-3xl mx-auto">{subtext}</p>}
      <a 
        href={SITE_CONFIG.phoneHref}
        onClick={handleClick}
        className="inline-flex items-center justify-center gap-3 bg-white text-[#1e3a5f] px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-lg mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        Call a Travel Specialist {SITE_CONFIG.phoneNumber}
      </a>
      <p className="text-xs text-gray-400 max-w-4xl mx-auto">
        {SITE_CONFIG.disclosure}
      </p>
    </div>
  );
}
