import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import CTABlock from "@/components/sections/CTABlock";
import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/articles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delta Airlines Baggage Information & Policies | Travel Guides",
  description:
    "Comprehensive guides to Delta Air Lines baggage allowances, carry-on dimensions, overweight bag fees, and packing rules.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/delta-airlines/baggage`,
  },
};

export default function DeltaBaggagePage() {
  const baggageArticles = getArticlesByCategory("baggage");

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-4">
        Delta Airlines Baggage Policy &amp; Guides
      </h1>
      <p className="mb-8 text-lg text-gray-700 leading-relaxed">
        Understanding Delta&apos;s baggage rules can save you time and money at the airport. Our independent guides break down carry-on sizing requirements, checked luggage weight limits, excess bag charges, and what items are permitted in the aircraft cabin.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {baggageArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            className="block p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-accent hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="inline-block text-xs font-semibold text-blue-accent uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h2 className="text-xl font-bold text-navy mb-2 hover:text-blue-accent transition-colors">
              {article.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-2">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>

      <CTABlock
        headline="Questions about your baggage allowance?"
        subtext="Speak with an independent travel specialist to verify baggage fees, aircraft restrictions, or connection rules for your specific itinerary."
        pageSlug="delta-airlines/baggage"
      />

      <div className="mt-8">
        <Disclosure variant="short" />
      </div>
    </div>
  );
}
