'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';
import { trackPhoneClick } from '@/lib/analytics';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePhoneClick = () => {
    trackPhoneClick('header', 'global');
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#00182f] shadow-md border-b border-[#0a2745]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Mobile hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-300 focus:outline-none p-1.5 rounded-md"
              aria-label="Toggle menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-start items-center">
            <Link href="/" className="flex items-center group py-2" aria-label="Delta Travel Assistance Home">
              <img
                src="/images/delta-logo.png"
                alt="Delta Air Lines"
                width={180}
                height={48}
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-8">
            {SITE_CONFIG.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-gray-200 hover:text-white transition-colors py-2 tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA (Desktop & Mobile) */}
          <div className="flex items-center gap-3">
            {/* Desktop Button */}
            <a
              href={SITE_CONFIG.phoneHref}
              onClick={handlePhoneClick}
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#00182f] transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call {SITE_CONFIG.phoneNumber}</span>
            </a>

            {/* Mobile Phone Icon Button */}
            <a
              href={SITE_CONFIG.phoneHref}
              onClick={handlePhoneClick}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#2563eb] text-white hover:bg-blue-600 transition-colors shadow"
              aria-label={`Call ${SITE_CONFIG.phoneNumber}`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#0a2745] bg-[#001428] px-4 pt-3 pb-5 shadow-xl">
          <div className="space-y-1">
            {SITE_CONFIG.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-[#0a2745] hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-2">
              <a
                href={SITE_CONFIG.phoneHref}
                onClick={() => {
                  handlePhoneClick();
                  setIsMobileMenuOpen(false);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-4 py-3 text-base font-bold text-white hover:bg-blue-600 transition-colors shadow"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call {SITE_CONFIG.phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
