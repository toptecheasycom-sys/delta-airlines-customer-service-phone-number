import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import CTABlock from "@/components/sections/CTABlock";
import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/articles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Airline Comparisons: Delta vs American, United, JetBlue & Alaska | Travel Support",
  description:
    "Objective, balanced airline comparisons examining routes, fleet comfort, loyalty rewards, baggage fees, and reliability between Delta and major competitors.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/airline-comparisons`,
  },
};

export default function AirlineComparisonsPage() {
  const comparisonArticles = getArticlesByCategory("comparisons");

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-4">
        Airline Comparisons: Delta vs. Major Competitors
      </h1>
      <p className="mb-4 text-lg text-gray-700 leading-relaxed">
        Choosing the best airline for your itinerary is rarely a simple one-size-fits-all decision. The optimal carrier depends on your departure airport, flight schedule, fare class, baggage needs, and loyalty program preferences.
      </p>
      <p className="mb-8 text-gray-600 leading-relaxed">
        Our editorial team maintains balanced, objective comparison guides that avoid declaring artificial &quot;winners.&quot; Instead, we analyze real-world factors including hub coverage, fleet modernization, in-flight amenities, baggage policies, and historical on-time performance so you can make the right choice for your journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {comparisonArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            className="block p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-accent hover:shadow-md transition-all"
          >
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
        headline="Comparing flight options across multiple airlines?"
        subtext="Speak with an independent travel specialist to compare routes, schedules, and fares across Delta, American, United, and other major carriers."
        pageSlug="airline-comparisons"
      />

      <div className="mt-8">
        <Disclosure variant="short" />
      </div>
    </div>
  );
}
