'use client';

import React from 'react';
import { SITE_CONFIG } from '@/lib/config';
import { trackPhoneClick } from '@/lib/analytics';
import type { PhoneClickEvent } from '@/types';

interface PhoneCTAProps {
  variant: 'hero' | 'inline' | 'card' | 'compact';
  headline: string;
  subtext?: string;
  buttonText?: string;
  location: PhoneClickEvent['location'];
  pageSlug: string;
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

export default function PhoneCTA({
  variant,
  headline,
  subtext,
  buttonText = 'Call Travel Assistance',
  location,
  pageSlug,
}: PhoneCTAProps) {
  const handleClick = () => {
    trackPhoneClick(location, pageSlug);
  };

  if (variant === 'hero') {
    return (
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] text-white p-8 md:p-12 rounded-2xl text-center shadow-lg">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{headline}</h2>
        {subtext && <p className="text-lg md:text-xl mb-8 opacity-90">{subtext}</p>}
        <a
          href={SITE_CONFIG.phoneHref}
          onClick={handleClick}
          className="inline-flex items-center justify-center bg-white text-[#1e3a5f] hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-xl transition-colors duration-200"
        >
          <PhoneIcon />
          {buttonText}: {SITE_CONFIG.phoneNumber}
        </a>
        <p className="mt-6 text-sm opacity-75 max-w-2xl mx-auto">{SITE_CONFIG.shortDisclosure}</p>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="bg-blue-50 border-l-4 border-[#2563eb] p-6 my-8 rounded-r-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-[#1e3a5f]">{headline}</h3>
          {subtext && <p className="text-gray-600 mt-1">{subtext}</p>}
        </div>
        <a
          href={SITE_CONFIG.phoneHref}
          onClick={handleClick}
          className="inline-flex items-center justify-center bg-[#2563eb] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap"
        >
          <PhoneIcon />
          {buttonText}
        </a>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{headline}</h3>
        {subtext && <p className="text-gray-600 text-sm mb-4">{subtext}</p>}
        <a
          href={SITE_CONFIG.phoneHref}
          onClick={handleClick}
          className="inline-flex items-center justify-center bg-[#2563eb] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors duration-200"
        >
          <PhoneIcon />
          {SITE_CONFIG.phoneNumber}
        </a>
        <p className="mt-4 text-xs text-gray-500">{SITE_CONFIG.shortDisclosure}</p>
      </div>
    );
  }

  // Compact variant
  return (
    <div className="inline-block">
      <a
        href={SITE_CONFIG.phoneHref}
        onClick={handleClick}
        className="inline-flex items-center text-[#2563eb] hover:text-[#1e3a5f] font-bold transition-colors"
      >
        <PhoneIcon />
        {SITE_CONFIG.phoneNumber}
      </a>
    </div>
  );
}
