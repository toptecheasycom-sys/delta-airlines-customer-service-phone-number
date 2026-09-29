import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import CTABlock from "@/components/sections/CTABlock";
import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/articles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delta Airlines Airport Terminals & Hub Guides | Flight Travel Assistance",
  description:
    "Find Delta Air Lines terminal locations, concourses, check-in desks, and connection guides for Atlanta, Orlando, Boston, O'Hare, Miami, Heathrow, and more.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/delta-airlines/airports`,
  },
};

export default function DeltaAirportsPage() {
  const airportArticles = getArticlesByCategory("airports");

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-4">
        Delta Airlines Airport Terminals &amp; Hub Guides
      </h1>
      <p className="mb-4 text-lg text-gray-700 leading-relaxed">
        Navigating busy hub airports can be stressful, especially when catching tight connecting flights. Delta Air Lines operates out of distinct terminals and concourses across major domestic and international airports, with dedicated baggage claim areas, automated transit trains, and Sky Club lounges.
      </p>
      <p className="mb-8 text-gray-600 leading-relaxed">
        Terminal assignments can change due to airport construction, seasonal shifts, or operational adjustments. Our comprehensive airport guides detail gate locations, inter-terminal transit options, and check-in procedures to ensure a smooth airport experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {airportArticles.map((article) => (
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
        headline="Need help navigating your airport connection?"
        subtext="Speak with an independent travel specialist to verify minimum connection times, terminal transfers, or flight check-in requirements."
        pageSlug="delta-airlines/airports"
      />

      <div className="mt-8">
        <Disclosure variant="short" />
      </div>
    </div>
  );
}
