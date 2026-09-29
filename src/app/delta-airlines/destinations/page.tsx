import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import CTABlock from "@/components/sections/CTABlock";
import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/articles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delta Airlines Destinations & Flight Routes | Flight Travel Assistance",
  description:
    "Explore Delta Air Lines domestic and international destinations across the Caribbean, Latin America, Europe, Asia-Pacific, and the Middle East.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/delta-airlines/destinations`,
  },
};

export default function DeltaDestinationsPage() {
  const destinationArticles = getArticlesByCategory("destinations");

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-4">
        Delta Airlines Flight Destinations &amp; Routes
      </h1>
      <p className="mb-4 text-lg text-gray-700 leading-relaxed">
        Delta Air Lines connects travelers to hundreds of cities worldwide through its primary U.S. hubs and SkyTeam global alliance partnerships. Whether you are planning a direct domestic getaway or an international journey across the Pacific or Atlantic, understanding nonstop vs. connecting routes is essential.
      </p>
      <p className="mb-8 text-gray-600 leading-relaxed">
        Our destination guides analyze nonstop flight schedules, partner connection points (such as Korean Air, Air France, and KLM), international document requirements, and seasonal route variations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {destinationArticles.map((article) => (
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
        headline="Planning an international or multi-city trip?"
        subtext="Talk through your route options, flight schedules, and connection alternatives with an independent travel specialist."
        pageSlug="delta-airlines/destinations"
      />

      <div className="mt-8">
        <Disclosure variant="short" />
      </div>
    </div>
  );
}
