import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import CTABlock from "@/components/sections/CTABlock";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Flight Travel Guides & Airline Knowledge Center | Flight Travel Assistance",
  description:
    "Browse our complete library of independent flight travel guides covering airline baggage policies, airport terminals, seating options, and flight comparisons.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/travel-guides`,
  },
};

const guideCategories = [
  {
    href: "/delta-airlines",
    title: "Delta Air Lines Hub",
    description: "Complete independent guides to flying with Delta, from basic economy to Delta One.",
  },
  {
    href: "/airline-comparisons",
    title: "Airline Comparisons",
    description: "Objective comparisons between Delta, American, United, JetBlue, and Alaska Airlines.",
  },
  {
    href: "/delta-airlines/baggage",
    title: "Baggage Policies & Fees",
    description: "Carry-on dimensions, overweight luggage fees, and cabin packing rules.",
  },
  {
    href: "/delta-airlines/airports",
    title: "Airport Terminal Directories",
    description: "Terminal locations, concourses, and connection tips for major hub airports.",
  },
  {
    href: "/delta-airlines/seating",
    title: "Seating & Cabin Upgrades",
    description: "Preferred Seating, Comfort+, seat selection rules, and premium cabins.",
  },
  {
    href: "/delta-airlines/destinations",
    title: "Destinations & Routes",
    description: "Nonstop route guides, international entry rules, and partner connections.",
  },
];

export default function TravelGuidesPage() {
  const articles = getAllArticles();
  const featuredArticles = articles.slice(0, 12);

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
        Flight Travel Guides &amp; Knowledge Center
      </h1>
      <p className="text-xl text-gray-700 leading-relaxed mb-4">
        Reliable, independent travel information to help you plan, book, and navigate your flights.
      </p>
      <p className="text-gray-600 leading-relaxed mb-12">
        Whether you are preparing for domestic travel across the United States or an international itinerary, our editorial team produces in-depth guides covering airport logistics, airline tariffs, seating comfort, and booking management.
      </p>

      {/* Categories */}
      <h2 className="text-2xl font-bold text-navy mb-6">Browse by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {guideCategories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-accent hover:shadow-md transition-all group"
          >
            <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-blue-accent transition-colors">
              {cat.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {cat.description}
            </p>
            <span className="inline-block mt-4 text-sm font-semibold text-blue-accent group-hover:underline">
              Explore &rarr;
            </span>
          </Link>
        ))}
      </div>

      {/* Featured Articles */}
      <h2 className="text-2xl font-bold text-navy mb-6">Featured Travel Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {featuredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            className="block p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-accent hover:shadow-md transition-all"
          >
            <span className="inline-block text-xs font-semibold text-blue-accent uppercase tracking-wider mb-2">
              {article.category}
            </span>
            <h3 className="font-bold text-navy mb-2 hover:text-blue-accent transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-xs text-gray-600 line-clamp-2">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>

      <CTABlock
        headline="Have a specific flight question?"
        subtext="Speak with an independent travel specialist to discuss flight options, itinerary changes, or booking support."
        pageSlug="travel-guides"
      />

      <div className="mt-8">
        <Disclosure variant="short" />
      </div>
    </div>
  );
}
