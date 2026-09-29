import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import CTABlock from "@/components/sections/CTABlock";
import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/articles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delta Airlines Booking, Check-In & Travel Management | Flight Travel Assistance",
  description:
    "Guides for booking Delta flights, 24-hour check-in rules, printing boarding passes, name corrections, receipts, and flight insurance.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/delta-airlines/booking`,
  },
};

export default function DeltaBookingPage() {
  const bookingArticles = getArticlesByCategory("booking");

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-4">
        Delta Flight Booking &amp; Travel Management
      </h1>
      <p className="mb-4 text-lg text-gray-700 leading-relaxed">
        Managing your flight itinerary from initial reservation to airport boarding requires clear understanding of airline deadlines, ticket policies, and digital check-in tools. Whether you need to fix a misspelled name, retrieve an itemized business receipt, or navigate flight changes, our independent guides provide clear, actionable steps.
      </p>
      <p className="mb-8 text-gray-600 leading-relaxed">
        Our travel specialists are also available by telephone to assist travelers with itinerary questions, complex bookings, and rebooking needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {bookingArticles.map((article) => (
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
        headline="Need help with a flight booking or itinerary change?"
        subtext="Speak with an independent travel specialist to review fare rules, change options, or booking assistance."
        pageSlug="delta-airlines/booking"
      />

      <div className="mt-8">
        <Disclosure variant="short" />
      </div>
    </div>
  );
}
