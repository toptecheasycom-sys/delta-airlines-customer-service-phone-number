import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer & Independent Service Disclosure | Flight Travel Assistance",
  description:
    "Official disclaimer and business disclosure for Flight Travel Assistance. We provide independent flight information and phone-based assistance.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-6">
        Disclaimer &amp; Business Model Disclosure
      </h1>

      <div className="prose prose-lg text-gray-700 space-y-6 mb-12">
        <div className="bg-blue-50 border-l-4 border-blue-accent p-6 rounded-r-lg">
          <p className="text-lg font-medium text-navy">
            This website provides independent travel information and assistance. It is not owned, operated, endorsed, sponsored or affiliated with Delta Air Lines unless explicitly stated. Airline names and trademarks belong to their respective owners.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          Independent Business Model
        </h2>
        <p>
          Flight Travel Assistance operates as an independent travel assistance desk and informational publisher. We provide travelers with research guides, airline policy summaries, airport navigation help, and live telephone assistance via independent travel specialists.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          Changing Airline Information
        </h2>
        <p>
          Commercial aviation is highly dynamic. Airline policies, baggage allowances, fare rules, flight schedules, and airport operations can change rapidly due to operational requirements, regulatory directives, or weather conditions:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Fares &amp; Availability:</strong> Airline ticket prices, seat inventory, and award redemptions fluctuate dynamically based on real-time market demand and carrier revenue management.</li>
          <li><strong>Schedules &amp; Routes:</strong> Flight departure times, flight frequencies, equipment types, and connecting cities are subject to change by the operating carrier.</li>
          <li><strong>Airport Terminals &amp; Concourses:</strong> Terminal assignments, gate areas, and security checkpoints may change due to airport maintenance, runway operations, or air traffic control management. Travelers should always re-verify terminal information prior to departure.</li>
          <li><strong>Baggage &amp; Seating Policies:</strong> Dimensional limits, excess weight charges, carry-on allowances, and fare-class seat selection rules are established by the airline and are subject to change.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          Service Fees &amp; Transactions
        </h2>
        <p>
          When you contact our phone assistance desk at <strong>{SITE_CONFIG.phoneNumber}</strong>, you will speak with an independent travel specialist. While general flight guidance is provided freely, independent service fees may apply for flight booking transactions, itinerary modifications, ticket issuances, or specialized travel coordination. Any applicable service fees will be clearly disclosed to you before any transaction is finalized.
        </p>
        <p>
          Customers must carefully review all booking details, passenger names, flight dates, routing, fare restrictions, and cancellation rules before confirming any purchase.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          Official Carrier Channels
        </h2>
        <p>
          For travelers wishing to contact Delta Air Lines directly, official customer support is available via delta.com, the Fly Delta mobile application, or Delta&apos;s published telephone channels (1-800-221-1212).
        </p>
      </div>

      <Disclosure variant="full" />
    </div>
  );
}
