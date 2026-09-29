import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Flight Travel Assistance",
  description: "The page you are looking for cannot be found. Explore our flight travel guides or speak with a specialist.",
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center max-w-3xl">
      <p className="text-sm font-bold text-blue-accent uppercase tracking-widest mb-2">
        Error 404
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
        Looking for flight information?
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
        The page you requested may have moved or no longer exists. Use our navigation guides below or speak directly with an independent travel specialist.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <Link
          href="/travel-guides"
          className="px-6 py-3 bg-navy text-white rounded-lg font-semibold hover:bg-opacity-90 transition shadow"
        >
          Travel Guides
        </Link>
        <Link
          href="/delta-airlines"
          className="px-6 py-3 bg-blue-accent text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow"
        >
          Delta Guides
        </Link>
        <Link
          href="/delta-airlines/booking"
          className="px-6 py-3 bg-gray-100 text-navy font-semibold rounded-lg hover:bg-gray-200 transition border border-gray-300"
        >
          Flight Assistance
        </Link>
        <a
          href={SITE_CONFIG.phoneHref}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Travel Specialist ({SITE_CONFIG.phoneNumber})
        </a>
      </div>

      <p className="text-xs text-gray-500">
        {SITE_CONFIG.shortDisclosure}
      </p>
    </div>
  );
}
