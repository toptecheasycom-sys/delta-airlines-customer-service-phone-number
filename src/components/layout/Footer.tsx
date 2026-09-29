import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-white">{SITE_CONFIG.name}</h2>
            <p className="mb-4 text-sm font-medium text-blue-200">{SITE_CONFIG.tagline}</p>
            <p className="text-sm">{SITE_CONFIG.description}</p>
          </div>

          {/* Flight Help */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Flight Help</h3>
            <ul className="space-y-2">
              {SITE_CONFIG.footerFlightHelp.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Guides */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Travel Guides</h3>
            <ul className="space-y-2">
              {SITE_CONFIG.footerTravelGuides.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {SITE_CONFIG.footerCompany.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Phone CTA Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="mb-4 text-lg font-medium text-white">Need immediate assistance?</p>
          <a
            href={SITE_CONFIG.phoneHref}
            className="inline-block rounded-md bg-[#2563eb] px-6 py-3 text-base font-bold text-white shadow hover:bg-blue-600 transition-colors"
          >
            Call {SITE_CONFIG.phoneNumber}
          </a>
          <p className="mt-6 mx-auto max-w-4xl text-xs text-gray-400 leading-relaxed">
            {SITE_CONFIG.disclosure}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center md:flex md:items-center md:justify-between md:text-left">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="mt-4 text-sm text-gray-400 md:mt-0">
            {SITE_CONFIG.shortDisclosure}
          </p>
        </div>
      </div>
    </footer>
  );
}
