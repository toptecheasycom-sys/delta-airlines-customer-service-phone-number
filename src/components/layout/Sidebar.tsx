import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';

interface SidebarProps {
  relatedArticles?: { slug: string; title: string }[];
}

export default function Sidebar({ relatedArticles }: SidebarProps) {
  // Use provided related articles, or fallback to first 4 from flight help links
  const popularArticles = relatedArticles || SITE_CONFIG.footerFlightHelp.slice(0, 4).map(link => ({
    slug: link.href,
    title: link.label
  }));

  return (
    <aside className="sticky top-24 w-full space-y-6">
      {/* Assistance Card */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-3 text-lg font-bold text-[#1e3a5f]">Need Flight Assistance?</h3>
        <p className="mb-4 text-sm text-gray-600">
          Our travel experts are available to help you with flight bookings, changes, cancellations, and more.
        </p>
        <a
          href={SITE_CONFIG.phoneHref}
          className="flex w-full items-center justify-center rounded-md bg-[#2563eb] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call {SITE_CONFIG.phoneNumber}
        </a>
      </div>

      {/* Popular Help Links */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-[#1e3a5f]">Popular Flight Help</h3>
        <ul className="space-y-3">
          {popularArticles.map((article) => (
            <li key={article.slug}>
              <Link href={article.slug.startsWith('/') ? article.slug : `/${article.slug}`} className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors">
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Travel Information Categories */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-[#1e3a5f]">Travel Information</h3>
        <ul className="space-y-3">
          {SITE_CONFIG.footerTravelGuides.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
