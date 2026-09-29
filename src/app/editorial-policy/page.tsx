import { SITE_CONFIG } from "@/lib/config";
import Disclosure from "@/components/ui/Disclosure";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy & Research Standards | Flight Travel Assistance",
  description:
    "Learn about our editorial standards, research methodology, source verification, and policy review process for travel guides.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/editorial-policy`,
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-6">
        Editorial Policy &amp; Research Standards
      </h1>

      <div className="prose prose-lg text-gray-700 space-y-6 mb-12">
        <p className="text-xl leading-relaxed text-navy font-medium">
          At Flight Travel Assistance, our mission is to deliver accurate, objective, and practical travel guides that help air passengers make informed choices before and during their trips.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          1. Research Methodology &amp; Source Verification
        </h2>
        <p>
          Our editorial team relies exclusively on authoritative primary and regulatory sources when compiling airline guides:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Official Airline Tariffs &amp; Contracts of Carriage:</strong> We consult publicly published rules directly from operating carriers.</li>
          <li><strong>Airport Authority Portals:</strong> We verify terminal assignments, gate numbers, and ground transit through official airport operating authorities.</li>
          <li><strong>Regulatory Agencies:</strong> We reference official guidelines from the Federal Aviation Administration (FAA), Transportation Security Administration (TSA), and U.S. Department of Transportation (DOT).</li>
          <li><strong>Consumer Reports:</strong> On-time arrival metrics, delay statistics, and consumer satisfaction data are drawn from DOT Air Travel Consumer Reports and verified industry analyses.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          2. Independent Perspective
        </h2>
        <p>
          Flight Travel Assistance is completely independent. We are not owned by, operated by, or affiliated with Delta Air Lines or any other carrier. Our editorial coverage is never influenced by airline commercial relationships. When comparing airlines or reviewing cabin products, we provide balanced, truthful assessments highlighting both advantages and trade-offs.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          3. How Policy Updates Are Handled
        </h2>
        <p>
          Airlines routinely update baggage fees, boarding procedures, loyalty program rules, and fare restrictions. Our editorial team conducts regular content audits to verify that published information reflects current carrier policies. When carriers announce tariff revisions or terminal relocations, our team updates the corresponding guides promptly.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          4. Policy Caveats &amp; Traveler Due Diligence
        </h2>
        <p>
          Despite our commitment to accuracy, commercial aviation operations are subject to sudden operational changes. Airport construction, security directives, weather emergencies, and carrier operational changes can alter flight schedules and gate assignments without prior notice.
        </p>
        <p>
          We strongly advise all passengers to cross-reference travel guidelines with their operating airline and local airport authority within 24 to 48 hours of scheduled departure.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          5. Corrections &amp; Editorial Feedback
        </h2>
        <p>
          We welcome reader inquiries and feedback. If you notice any outdated information or have suggestions for our editorial team, please contact our team via our contact page.
        </p>
      </div>

      <Disclosure variant="short" />
    </div>
  );
}
