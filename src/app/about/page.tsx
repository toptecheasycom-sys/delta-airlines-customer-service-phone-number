import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import CTABlock from "@/components/sections/CTABlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Flight Travel Assistance",
  description:
    "Learn about Flight Travel Assistance, an independent travel assistance desk helping passengers navigate flight bookings, changes, baggage rules, and travel policies.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-6">
        About Flight Travel Assistance
      </h1>

      <div className="prose prose-lg text-gray-700 space-y-6 mb-12">
        <p className="text-xl leading-relaxed text-navy font-medium">
          Flight Travel Assistance is an independent travel assistance service and information resource dedicated to helping passengers navigate the complexities of commercial air travel.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Our Mission</h2>
        <p>
          Airline policies, fare structures, baggage restrictions, and airport logistics change constantly. Travelers often find themselves facing automated telephone menus, confusing fare class restrictions, or complex rules during schedule disruptions. Our mission is to provide clear, human-centered travel guides and accessible telephone assistance to help travelers make informed decisions.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          Independent Service Status
        </h2>
        <p>
          We are an <strong>independent travel assistance desk</strong>. We are not an airline, and we are not affiliated with, endorsed by, sponsored by, or operated by Delta Air Lines or any other commercial carrier. We discuss airlines such as Delta purely as the subject of our editorial research and informational content.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">What We Do</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Flight Research &amp; Guides:</strong> Comprehensive information covering baggage allowances, terminal locations, seating tiers, and loyalty programs.
          </li>
          <li>
            <strong>Phone-Based Assistance:</strong> Live travel specialists available to discuss flight options, itinerary changes, and rebooking alternatives.
          </li>
          <li>
            <strong>Independent Guidance:</strong> Objective reviews and balanced airline comparisons to help you choose the best carrier for your route.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          Editorial Accuracy &amp; Disclosures
        </h2>
        <p>
          Our editorial team consults official airline tariffs, airport authority notices, and Department of Transportation reports when compiling guides. Because airline policies, fares, and terminal assignments can change without notice, we strongly recommend travelers confirm current requirements with their carrier before departure.
        </p>
      </div>

      <CTABlock
        headline="Need help with your upcoming flight?"
        subtext="Speak directly with an independent travel specialist to review your travel options, baggage rules, or booking questions."
        pageSlug="about"
      />

      <div className="mt-8">
        <Disclosure variant="full" />
      </div>
    </div>
  );
}
