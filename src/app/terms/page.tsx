import { SITE_CONFIG } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Flight Travel Assistance",
  description:
    "Terms of service governing the use of Flight Travel Assistance, including independent service disclosures and booking conditions.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: October 4, 2026</p>

      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>
          Please review these Terms of Service carefully before utilizing the website, travel guides, or telephone assistance services provided by Flight Travel Assistance (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing our website or contacting our phone assistance desk, you agree to be bound by these terms.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          1. Independent Service Nature
        </h2>
        <p>
          Flight Travel Assistance is an independent travel information and telephone support desk. We are not an airline and have no corporate affiliation, endorsement, sponsorship, or operational relationship with Delta Air Lines or any other commercial airline. Airline names, trademarks, and brand assets are referenced solely for descriptive, informational purposes.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          2. Informational Guides &amp; Accuracy
        </h2>
        <p>
          All editorial content, baggage summaries, terminal guides, and flight reviews published on this website are provided in good faith for general educational purposes. Because airline tariffs, security rules, and airport terminal arrangements are subject to immediate revision by operating carriers and government authorities, we cannot guarantee that all published data is perpetually current. Travelers must confirm all travel details through official carrier sources prior to trip departure.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          3. Telephone Assistance &amp; Service Fees
        </h2>
        <p>
          When calling our telephone assistance desk at <strong>{SITE_CONFIG.phoneNumber}</strong>, travelers may discuss flight options with independent travel specialists. While general advice is provided, specialized reservation services, ticket modifications, complex itinerary coordination, and flight bookings may incur independent service fees. All applicable fees, carrier ticket rules, and refund restrictions will be disclosed verbally prior to the confirmation of any paid transaction.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          4. Carrier Contracts of Carriage
        </h2>
        <p>
          All air transportation is governed exclusively by the operating airline&apos;s Contract of Carriage, fare rules, and baggage tariffs. Operating carriers retain sole authority over flight cancellations, schedule changes, delays, baggage handling, and denied boarding compensation under applicable federal aviation regulations.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          5. Limitation of Liability
        </h2>
        <p>
          In no event shall Flight Travel Assistance, its officers, or its partners be liable for any indirect, incidental, punitive, or consequential damages resulting from flight delays, weather disruptions, missed connections, or reliance on information provided on this website.
        </p>
      </div>
    </div>
  );
}
