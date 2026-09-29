import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import CTABlock from "@/components/sections/CTABlock";
import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/articles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delta SkyMiles, Fares & Discounts | Flight Travel Assistance",
  description:
    "Learn about Delta SkyMiles expiration rules, senior and military discounts, student fares, gift cards, and partner airline mileage.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/delta-airlines/skymiles`,
  },
};

export default function DeltaSkyMilesPage() {
  const loyaltyArticles = getArticlesByCategory("loyalty");

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-4">
        Delta SkyMiles, Special Fares &amp; Discounts
      </h1>
      <p className="mb-4 text-lg text-gray-700 leading-relaxed">
        Delta Air Lines offers several programs designed for frequent travelers, seniors, active-duty military, and students. Understanding loyalty policies — such as whether SkyMiles expire, how partner reciprocal earnings operate, and how special discount fares are structured — can help you extract maximum value from your travel bookings.
      </p>
      <p className="mb-8 text-gray-600 leading-relaxed">
        Our guides explain eligibility guidelines, booking procedures, and documentation requirements for bereavement fares, military discounts, gift cards, and SkyTeam partner flights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {loyaltyArticles.map((article) => (
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
        headline="Questions about special fares or loyalty tickets?"
        subtext="Speak with an independent travel specialist to discuss award flight alternatives, fare classes, or ticket assistance."
        pageSlug="delta-airlines/skymiles"
      />

      <div className="mt-8">
        <Disclosure variant="short" />
      </div>
    </div>
  );
}
