import { SITE_CONFIG } from "@/lib/config";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCards from "@/components/sections/ServiceCards";
import CTABlock from "@/components/sections/CTABlock";
import HowItWorks from "@/components/sections/HowItWorks";
import Disclosure from "@/components/ui/Disclosure";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delta Airlines Customer Service Phone Number & Flight Support",
  description: SITE_CONFIG.description,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    google: "AVsppepH27PkSgEWoHAUQ4eTTzkmgub-w0DAazhq2eo",
  },
  openGraph: {
    title: "Delta Airlines Customer Service Phone Number & Flight Support",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Airlines Customer Service Phone Number & Flight Support",
    description: SITE_CONFIG.description,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ServiceCards />

      <CTABlock
        headline="Have a flight question?"
        subtext="Talk through your travel situation with an independent travel specialist."
        variant="secondary"
        pageSlug="homepage"
      />

      <HowItWorks />

      <CTABlock
        headline="Ready to discuss your travel plans?"
        subtext="Our independent travel specialists can help with booking questions, itinerary changes, and common travel needs."
        variant="primary"
        pageSlug="homepage"
      />

      <section className="max-w-4xl mx-auto px-4 py-12">
        <Disclosure variant="short" />
      </section>
    </>
  );
}
