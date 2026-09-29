'use client';

import { SITE_CONFIG } from '@/lib/config';
import { trackPhoneClick } from '@/lib/analytics';

export default function MobileStickyCTA() {
  const handleClick = () => {
    trackPhoneClick('mobile_sticky', 'global');
  };

  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 z-40 w-full shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <a
        href={SITE_CONFIG.phoneHref}
        onClick={handleClick}
        className="flex h-16 w-full items-center justify-center bg-[#2563eb] text-white hover:bg-blue-700 transition-colors"
      >
        <svg className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold leading-tight">Call Travel Assistance</span>
          <span className="text-xs opacity-90 leading-tight">{SITE_CONFIG.phoneNumber}</span>
        </div>
      </a>
    </div>
  );
}
