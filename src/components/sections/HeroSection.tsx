import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 text-white text-center bg-[#00182f]">
      {/* Background Image with Layer Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/hero-flight.jpg"
          alt="Commercial Flight in the Sky"
          className="w-full h-full object-cover object-center scale-110 filter blur-[4px]"
        />
        {/* Layer Blur & Gradient Overlay for Contrast & Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00182f]/85 via-[#001f3f]/75 to-[#00182f]/90 backdrop-blur-[1px]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <span className="inline-block py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
          Independent Flight Support Desk
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-md leading-tight">
          Need Help With Your Flight Plans?
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl text-gray-200 font-normal leading-relaxed drop-shadow-sm">
          Get independent travel assistance for flight bookings, changes, cancellations, and more. Speak with a travel specialist today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto justify-center">
          <a 
            href={SITE_CONFIG.phoneHref}
            className="flex items-center justify-center gap-3 bg-white text-[#00182f] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl hover:shadow-2xl hover:scale-102 transform duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#2563eb]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <span>Call a Travel Specialist {SITE_CONFIG.phoneNumber}</span>
          </a>
          
          <Link 
            href="/travel-guides"
            className="flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/80 text-white bg-white/10 hover:bg-white/20 transition backdrop-blur-sm"
          >
            Explore Flight Help &rarr;
          </Link>
        </div>
        
        <p className="text-xs text-gray-300 max-w-2xl opacity-80 leading-normal">
          {SITE_CONFIG.shortDisclosure}
        </p>
      </div>
    </section>
  );
}
