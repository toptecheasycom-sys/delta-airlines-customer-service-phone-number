import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Flight Travel Assistance",
  description: "Contact our independent travel specialists today for assistance with your flight bookings, itinerary questions, and travel plans.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-6">Contact Us</h1>
      <p className="mb-6 text-lg text-gray-700 leading-relaxed">
        We are an independent travel assistance service. If you need assistance with your flight booking, changes, cancellations, baggage rules, seating options, or airport terminal questions, our team of travel specialists is here to help.
      </p>

      <div className="bg-blue-light border border-blue-200 p-8 rounded-xl text-center mb-8">
        <h2 className="text-2xl font-bold text-navy mb-2">Speak With a Travel Specialist</h2>
        <p className="text-gray-600 mb-4">Dedicated phone-based flight assistance</p>
        <a
          href={SITE_CONFIG.phoneHref}
          className="text-3xl sm:text-4xl font-bold text-blue-accent hover:underline transition-colors block"
        >
          {SITE_CONFIG.phoneNumber}
        </a>
        <p className="text-xs text-gray-500 mt-4">
          Independent travel assistance service. Service fees may apply for transactions.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-navy mb-3">Service Hours & Inquiries</h2>
        <p className="text-gray-600 mb-2">
          <strong>Phone Support:</strong> Available 7 days a week
        </p>
        <p className="text-gray-600">
          <strong>Coverage:</strong> U.S. domestic flights and international itineraries
        </p>
      </div>

      <Disclosure variant="full" />
    </div>
  );
}
