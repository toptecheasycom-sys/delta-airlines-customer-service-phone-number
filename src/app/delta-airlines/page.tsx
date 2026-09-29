import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import CTABlock from "@/components/sections/CTABlock";
import Link from "next/link";
import type { Metadata } from "next";
import { getPopularArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Delta Air Lines Information & Travel Guides | Flight Travel Assistance",
  description:
    "Independent travel guides covering Delta Air Lines baggage policies, airport terminals, seating options, destinations, check-in, and loyalty programs.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/delta-airlines`,
  },
};

const subcategories = [
  {
    slug: "baggage",
    title: "Baggage Information",
    description: "Carry-on dimensions, weight limits, extra baggage fees, and cabin packing guidelines.",
  },
  {
    slug: "seating",
    title: "Seats & Cabins",
    description: "Preferred Seating, Delta Comfort+, First Class, and Delta One lie-flat suites.",
  },
  {
    slug: "airports",
    title: "Airport Terminals",
    description: "Terminal directories, concourses, and connection tips for major Delta hubs.",
  },
  {
    slug: "destinations",
    title: "Flight Destinations",
    description: "Nonstop routes, partner connection guides, and international travel advice.",
  },
  {
    slug: "booking",
    title: "Booking & Travel Help",
    description: "24-hour check-in rules, boarding passes, name changes, and travel insurance.",
  },
  {
    slug: "skymiles",
    title: "SkyMiles & Discounts",
    description: "Mileage expiration, senior and military discounts, and partner earning.",
  },
];

export default function DeltaHubPage() {
  const popularArticles = getPopularArticles(undefined, 6);

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
        Delta Air Lines Travel Guides &amp; Assistance
      </h1>
      <p className="text-xl text-gray-700 leading-relaxed mb-4">
        Your independent guide to understanding Delta Air Lines policies, airport operations, and flight options.
      </p>
      <p className="text-gray-600 leading-relaxed mb-12">
        Delta Air Lines is one of the world&apos;s largest commercial carriers, serving hundreds of domestic and international destinations. Whether you are preparing for a flight, managing an existing reservation, or researching baggage rules, our editorial team provides thoroughly researched guides to help you navigate your journey.
      </p>

      {/* Subcategory Grid */}
      <h2 className="text-2xl font-bold text-navy mb-6">Explore by Topic</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {subcategories.map((sub) => (
          <Link
            key={sub.slug}
            href={`/delta-airlines/${sub.slug}`}
            className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-accent hover:shadow-md transition-all group"
          >
            <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-blue-accent transition-colors">
              {sub.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {sub.description}
            </p>
            <span className="inline-block mt-4 text-sm font-semibold text-blue-accent group-hover:underline">
              View Guides &rarr;
            </span>
          </Link>
        ))}
      </div>

      {/* Popular Guides Section */}
      <h2 className="text-2xl font-bold text-navy mb-6">Popular Delta Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {popularArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            className="block p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-accent hover:shadow-md transition-all"
          >
            <h3 className="font-bold text-navy mb-2 hover:text-blue-accent transition-colors">
              {article.title}
            </h3>
            <p className="text-xs text-gray-600 line-clamp-2">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>

      <CTABlock
        headline="Need personalized flight assistance?"
        subtext="Speak with an independent travel specialist about flight bookings, itinerary questions, or schedule changes."
        pageSlug="delta-airlines"
      />

      <div className="mt-8">
        <Disclosure variant="short" />
      </div>
    </div>
  );
}
