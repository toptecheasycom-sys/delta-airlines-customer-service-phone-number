import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';

const services = [
  {
    icon: "✈️",
    title: "Flight Booking Assistance",
    description: "Get help finding and booking flights. Learn about available options and fares.",
    href: "/delta-airlines/booking"
  },
  {
    icon: "🔄",
    title: "Flight Changes",
    description: "Information about changing your flight, including name changes and date adjustments.",
    href: "/delta-name-change"
  },
  {
    icon: "❌",
    title: "Cancellation Assistance",
    description: "Understand cancellation policies, refund processes, and rebooking options.",
    href: "/travel-guides"
  },
  {
    icon: "💺",
    title: "Seat Selection Information",
    description: "Learn about seat types, preferred seating, and selection options.",
    href: "/delta-airlines-preferred-seating"
  },
  {
    icon: "🧳",
    title: "Baggage Information",
    description: "Carry-on sizes, checked bag allowances, and baggage fee information.",
    href: "/delta-carry-on-size"
  },
  {
    icon: "✅",
    title: "Check-In Assistance",
    description: "When to check in, how to check in, and what to do if you have issues.",
    href: "/when-can-i-check-in-delta-flight"
  },
  {
    icon: "🏢",
    title: "Airport & Terminal Information",
    description: "Terminal maps, gate information, and airport navigation help.",
    href: "/delta-airlines/airports"
  },
  {
    icon: "🌍",
    title: "International Travel Questions",
    description: "Passport requirements, international destinations, and travel tips.",
    href: "/delta-airlines/destinations"
  }
];

export default function ServiceCards() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-6 flex flex-col h-full">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
            <div className="mt-auto flex flex-col gap-3">
              <Link href={service.href} className="text-[#2563eb] font-semibold hover:underline">
                Learn More &rarr;
              </Link>
              <a href={SITE_CONFIG.phoneHref} className="text-sm text-gray-500 hover:text-[#1e3a5f]">
                Or call {SITE_CONFIG.phoneNumber}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
