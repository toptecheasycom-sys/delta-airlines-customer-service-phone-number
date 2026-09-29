import React from 'react';
import { SITE_CONFIG } from '@/lib/config';

interface DisclosureProps {
  variant?: 'full' | 'short' | 'inline';
}

export default function Disclosure({ variant = 'short' }: DisclosureProps) {
  if (variant === 'full') {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Important Disclosure</h4>
        <p className="text-xs text-gray-600 leading-relaxed">
          {SITE_CONFIG.disclosure}
        </p>
      </div>
    );
  }

  if (variant === 'short') {
    return (
      <div className="bg-gray-50 border border-gray-100 p-4 rounded-md">
        <p className="text-xs text-gray-500 text-center leading-normal">
          {SITE_CONFIG.shortDisclosure}
        </p>
      </div>
    );
  }

  return (
    <span className="text-[10px] text-gray-400 italic">
      {SITE_CONFIG.shortDisclosure}
    </span>
  );
}
