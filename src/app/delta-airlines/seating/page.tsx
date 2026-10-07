import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import CTABlock from "@/components/sections/CTABlock";
import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/articles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delta Airlines Seating Options & Cabin Classes | Flight Travel Assistance",
  description:
    "Explore Delta Air Lines cabin options from Basic Economy and Preferred Seating to Delta Comfort+ and Delta One lie-flat suites.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/delta-airlines/seating`,
  },
};

export default function DeltaSeatingPage() {
  const seatingArticles = getArticlesByCategory("seating");

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-4">
        Delta Airlines Seating &amp; Cabin Guides
      </h1>
      <p className="mb-4 text-lg text-gray-700 leading-relaxed">
        Delta Air Lines offers a wide variety of cabin products and seating options across its domestic and international fleets. From budget-conscious Basic Economy to luxury Delta One suites featuring lie-flat beds and direct aisle access, understanding each tier helps you choose the right seat for your comfort and budget.
      </p>
      <p className="mb-8 text-gray-600 leading-relaxed">
        Our independent guides explain seat pitch, legroom differences, boarding priority, fare class restrictions (including Class T), and how Delta assigns seats at check-in.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {seatingArticles.map((article) => (
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
        headline="Need help selecting the best seat for your flight?"
        subtext="Speak with an independent travel specialist to compare cabin upgrades, seat pitch, or exit row options for your aircraft."
        pageSlug="delta-airlines/seating"
      />

      <div className="mt-8">
        <Disclosure variant="short" />
      </div>
    </div>
  );
}
