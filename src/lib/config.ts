/**
 * Global site configuration
 * All phone numbers and brand info are centralized here
 * to allow easy updates without editing individual pages.
 */

export const SITE_CONFIG = {
  // Brand
  name: "Flight Travel Assistance",
  tagline: "Independent Flight Booking & Travel Assistance",
  description:
    "Get independent travel assistance for flight bookings, changes, cancellations, baggage, seating and travel questions. Call our travel assistance desk.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://flighttravelassistance.com",

  // Phone
  phoneNumber: "+1 725 765 9837",
  phoneHref: "tel:+17257659837",
  phoneRaw: "+17257659837",

  // Disclosure
  disclosure:
    "We are an independent travel assistance service and are not affiliated with, endorsed by, sponsored by, or operated by Delta Air Lines. Delta Air Lines and related trademarks belong to their respective owners. We provide independent travel information and phone-based assistance. Airline policies, schedules, fares, baggage rules and availability can change, so travelers should verify current airline policies through official airline channels.",
  shortDisclosure:
    "Independent travel assistance service. Not affiliated with Delta Air Lines or any airline.",

  // Author
  author: "Travel Assistance Editorial Team",
  authorDescription:
    "Reviewed for travel-information accuracy by our editorial team.",

  // Social
  ogImage: "/images/og-default.jpg",

  // Navigation
  mainNav: [
    { label: "Flight Assistance", href: "/travel-guides" },
    { label: "Flight Booking", href: "/delta-airlines/booking" },
    { label: "Flight Changes", href: "/delta-name-change" },
    { label: "Travel Help", href: "/about" },
  ] as const,

  // Footer Navigation
  footerFlightHelp: [
    { label: "Flight Booking", href: "/delta-airlines/booking" },
    { label: "Flight Changes", href: "/delta-name-change" },
    { label: "Cancellation Assistance", href: "/travel-guides" },
    { label: "Baggage Help", href: "/delta-carry-on-size" },
    { label: "Seat Information", href: "/delta-airlines-preferred-seating" },
    { label: "Check-In Help", href: "/when-can-i-check-in-delta-flight" },
  ] as const,

  footerTravelGuides: [
    { label: "Airport Terminals", href: "/delta-airlines/airports" },
    { label: "Delta Travel Guides", href: "/delta-airlines" },
    { label: "Flight Destinations", href: "/delta-airlines/destinations" },
    { label: "Airline Comparisons", href: "/airline-comparisons" },
  ] as const,

  footerCompany: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ] as const,
} as const;

export type SiteConfig = typeof SITE_CONFIG;
