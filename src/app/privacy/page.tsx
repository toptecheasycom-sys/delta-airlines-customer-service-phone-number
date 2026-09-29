import { SITE_CONFIG } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Flight Travel Assistance",
  description:
    "Learn about our privacy practices, data handling, analytics disclosure, and phone call tracking policies.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: January 2025</p>

      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>
          Flight Travel Assistance (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as an independent travel assistance and flight information resource. This Privacy Policy details the types of information we collect when you visit our website, how that data is used, and how your privacy is safeguarded.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p>
          We do not require users to create accounts or submit personal profiles to browse our informational guides. We collect limited usage data:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Website Analytics:</strong> Standard server logs and privacy-conscious analytics tracking anonymous page views, referral URLs, device types, browser versions, and interaction timestamps.</li>
          <li><strong>Phone Interaction Data:</strong> When you click or tap on telephone links ({SITE_CONFIG.phoneNumber}) on our website, we log click events (such as header, article, or mobile sticky CTA location) to evaluate conversion performance. We do not record or harvest personal financial details via our website.</li>
          <li><strong>Telephone Inquiries:</strong> When you call our telephone assistance line, our independent travel service providers may collect necessary passenger information (such as passenger names, dates of birth, contact details, and payment information) strictly to execute flight reservations or modifications requested by you.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          2. Cookies &amp; Tracking Technologies
        </h2>
        <p>
          We may use standard HTTP cookies and local storage tokens to remember user preferences (such as mobile view options) and evaluate aggregate website performance through analytics platforms. You can configure your browser to reject cookies without losing access to our articles.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          3. How We Use Information
        </h2>
        <p>
          Collected aggregate data is utilized solely to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maintain website performance and optimize Core Web Vitals</li>
          <li>Analyze search intent and produce more relevant travel guides</li>
          <li>Improve user navigation and telephone assistance accessibility</li>
          <li>Comply with applicable legal and regulatory requirements</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          4. Third-Party Sharing
        </h2>
        <p>
          We do not sell, rent, or trade your personal information to third-party data brokers. Data is shared only with trusted technology infrastructure providers (such as hosting and analytics networks) under strict confidentiality agreements, or when required by law enforcement under lawful process.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
          5. Contact Information
        </h2>
        <p>
          For privacy-related inquiries or questions regarding our data practices, please reach out via our contact page.
        </p>
      </div>
    </div>
  );
}
