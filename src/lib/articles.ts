/**
 * Article data access layer.
 * Statically imports all article data files.
 * This approach works with Next.js static generation.
 */

import type { Article, ArticleCategory, Airline } from "@/types";

// ============================================================
// ARTICLE REGISTRY
// Import every article module here.
// When adding a new article, add an import and push to registry.
// ============================================================

// Cluster A - Delta Basics
import isGoodAirline from "@/data/articles/is-delta-a-good-airline";
import isSafe from "@/data/articles/is-delta-airlines-safe";
import reliability from "@/data/articles/delta-airlines-reliability";
import isExpensive from "@/data/articles/is-delta-airlines-expensive";
import isSafest from "@/data/articles/is-delta-the-safest-airline";

// Cluster B - Baggage
import carryOnSize from "@/data/articles/delta-carry-on-size";
import carryOnBags from "@/data/articles/delta-carry-on-bags";
import extraBagFee from "@/data/articles/delta-extra-bag-fee";
import whatCarryOn from "@/data/articles/what-can-i-carry-on-delta";
import carryOnFees from "@/data/articles/delta-carry-on-fees";

// Cluster C - Seats & Cabins
import preferredSeating from "@/data/articles/delta-airlines-preferred-seating";
import comfortPlus from "@/data/articles/delta-comfort-plus";
import deltaOne from "@/data/articles/how-to-fly-delta-one";
import assignSeats from "@/data/articles/how-does-delta-assign-seats";
import classT from "@/data/articles/delta-class-t";

// Cluster D - Airport Terminals
import terminalAtlanta from "@/data/articles/delta-airlines-terminal-atlanta";
import terminalOrlando from "@/data/articles/delta-airlines-terminal-orlando-international-airport";
import terminalLogan from "@/data/articles/delta-airlines-terminal-logan-airport";
import terminalSkyHarbor from "@/data/articles/delta-airlines-terminal-sky-harbor-airport";
import terminalOhare from "@/data/articles/delta-airlines-terminal-ohare";
import terminalMiami from "@/data/articles/delta-airlines-terminal-miami-airport";
import terminalLasVegas from "@/data/articles/delta-airlines-terminal-las-vegas";
import terminalHeathrow from "@/data/articles/delta-airlines-terminal-heathrow";
import terminalNewark from "@/data/articles/delta-airlines-terminal-newark-airport";

// Cluster E - Destinations
import flightsFiji from "@/data/articles/delta-flights-to-fiji";
import flightsBali from "@/data/articles/delta-flights-to-bali";
import flightsVietnam from "@/data/articles/delta-flights-to-vietnam";
import flightsNZ from "@/data/articles/delta-flights-to-new-zealand";
import flightsPR from "@/data/articles/delta-flights-to-puerto-rico";
import flightsAntigua from "@/data/articles/delta-flights-to-antigua";
import flightsCuracao from "@/data/articles/delta-flights-to-curacao";
import flightsAlaska from "@/data/articles/delta-flights-to-alaska";
import flightsTrinidad from "@/data/articles/delta-flights-to-trinidad";
import flightsIsrael from "@/data/articles/delta-flights-to-israel";
import flightsDR from "@/data/articles/delta-flights-to-dominican-republic";
import flightsNicaragua from "@/data/articles/delta-flights-to-nicaragua";
import flightsPhilippines from "@/data/articles/delta-flights-to-philippines";
import flightsAbuDhabi from "@/data/articles/delta-flights-to-abu-dhabi";
import flightsEgypt from "@/data/articles/delta-flights-to-egypt";
import flightsManila from "@/data/articles/delta-flights-to-manila";
import flightsElPaso from "@/data/articles/delta-flights-to-el-paso";
import flightsFlint from "@/data/articles/delta-flights-from-flint-mi";
import directChicago from "@/data/articles/delta-direct-flights-from-chicago";
import internationalFlights from "@/data/articles/delta-international-flights";

// Cluster F - Loyalty & Discounts
import milesExpire from "@/data/articles/do-delta-airline-miles-expire";
import seniorDiscountsHow from "@/data/articles/delta-airlines-senior-discounts";
import seniorDiscounts from "@/data/articles/delta-senior-discounts";
import militaryDiscounts from "@/data/articles/delta-military-discounts";
import studentDiscounts from "@/data/articles/delta-student-discounts";
import giftCards from "@/data/articles/delta-airline-gift-cards";
import milesAlaska from "@/data/articles/delta-miles-alaska-airlines";
import airlinePartners from "@/data/articles/delta-airline-partners";
import bereavementFares from "@/data/articles/delta-bereavement-fares";

// Cluster G - Booking & Travel
import checkIn from "@/data/articles/when-can-i-check-in-delta-flight";
import boardingPass from "@/data/articles/how-to-print-delta-airlines-boarding-pass";
import receipt from "@/data/articles/delta-flight-receipt";
import nameChange from "@/data/articles/delta-name-change";
import flightInsurance from "@/data/articles/delta-flight-insurance";
import speakDelta from "@/data/articles/how-to-speak-with-delta-airlines";
import notWorking from "@/data/articles/why-is-delta-not-working";

// Cluster H - Comparisons
import vsAmerican from "@/data/articles/delta-vs-american-airlines";
import vsUnited from "@/data/articles/delta-vs-united";
import vsJetblue from "@/data/articles/delta-vs-jetblue";
import vsAlaska from "@/data/articles/alaska-airlines-vs-delta";
import vsAmericanSafety from "@/data/articles/delta-vs-american-airlines-safety";

// Safety
import crashed from "@/data/articles/has-delta-airlines-ever-crashed";
import crashHistory from "@/data/articles/delta-airlines-crash-history";

// Hubs
import hubs from "@/data/articles/delta-airlines-hubs";
import detroitHub from "@/data/articles/is-detroit-a-delta-hub";
import seattleHub from "@/data/articles/is-seattle-a-delta-hub";

// Careers & Company
import pilotSalary from "@/data/articles/delta-airlines-pilot-salary";
import howManyPilots from "@/data/articles/how-many-pilots-does-delta-have";
import becomePilot from "@/data/articles/how-to-become-a-delta-airlines-pilot";
import goodCompany from "@/data/articles/is-delta-a-good-company-to-work-for";
import felonHiring from "@/data/articles/delta-airlines-felon-hiring";
import union from "@/data/articles/delta-airlines-union";
import founder from "@/data/articles/delta-airlines-founder";

// Partners & International
import alaskaPartnership from "@/data/articles/delta-alaska-airlines-partnership";
import airFrance from "@/data/articles/air-france-delta-relationship";

// Misc
import deltaviIt from "@/data/articles/deltavi-it-company-name";
import triDelta from "@/data/articles/what-is-delta-delta-delta";
import isDumb from "@/data/articles/is-delta-dumb";
import virginiaDistance from "@/data/articles/virginia-flight-distance";
import kansasDistance from "@/data/articles/kansas-flight-distance";
import delta8 from "@/data/articles/delta-8-delta-airlines";
import delta9 from "@/data/articles/delta-9-american-airlines";
import expensive from "@/data/articles/why-are-delta-flights-expensive";
import headphones from "@/data/articles/delta-airlines-headphones";
import powerOutlets from "@/data/articles/delta-airlines-power-outlets";

// ============================================================
// ARTICLE COLLECTION
// ============================================================

const allArticles: Article[] = [
  isGoodAirline, isSafe, reliability, isExpensive, isSafest,
  carryOnSize, carryOnBags, extraBagFee, whatCarryOn, carryOnFees,
  preferredSeating, comfortPlus, deltaOne, assignSeats, classT,
  terminalAtlanta, terminalOrlando, terminalLogan, terminalSkyHarbor,
  terminalOhare, terminalMiami, terminalLasVegas, terminalHeathrow, terminalNewark,
  flightsFiji, flightsBali, flightsVietnam, flightsNZ, flightsPR,
  flightsAntigua, flightsCuracao, flightsAlaska, flightsTrinidad,
  flightsIsrael, flightsDR, flightsNicaragua, flightsPhilippines,
  flightsAbuDhabi, flightsEgypt, flightsManila, flightsElPaso, flightsFlint,
  directChicago, internationalFlights,
  milesExpire, seniorDiscountsHow, seniorDiscounts, militaryDiscounts,
  studentDiscounts, giftCards, milesAlaska, airlinePartners, bereavementFares,
  checkIn, boardingPass, receipt, nameChange, flightInsurance, speakDelta, notWorking,
  vsAmerican, vsUnited, vsJetblue, vsAlaska, vsAmericanSafety,
  crashed, crashHistory,
  hubs, detroitHub, seattleHub,
  pilotSalary, howManyPilots, becomePilot, goodCompany, felonHiring, union, founder,
  alaskaPartnership, airFrance,
  deltaviIt, triDelta, isDumb, virginiaDistance, kansasDistance,
  delta8, delta9, expensive, headphones, powerOutlets,
].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

// ============================================================
// ACCESS FUNCTIONS
// ============================================================

/**
 * Get all articles sorted by published date (newest first).
 */
export function getAllArticles(): Article[] {
  return allArticles;
}

/**
 * Get a single article by slug.
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

/**
 * Get all unique slugs for static generation.
 */
export function getAllSlugs(): string[] {
  return allArticles.map((a) => a.slug);
}

/**
 * Get articles by category.
 */
export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return allArticles.filter((a) => a.category === category);
}

/**
 * Get articles by airline.
 */
export function getArticlesByAirline(airline: Airline): Article[] {
  return allArticles.filter((a) => a.airline === airline);
}

/**
 * Get related articles for a given slug.
 */
export function getRelatedArticles(slug: string, count: number = 3): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];

  const sameCategory = allArticles.filter(
    (a) => a.category === article.category && a.slug !== slug
  );
  const linkedSlugs = article.internalLinks.map((l) => l.slug);
  const linkedArticles = allArticles.filter((a) => linkedSlugs.includes(a.slug));

  const combined = [...linkedArticles, ...sameCategory];
  const unique = Array.from(new Map(combined.map((a) => [a.slug, a])).values());
  return unique.filter((a) => a.slug !== slug).slice(0, count);
}

/**
 * Search articles by query string.
 */
export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return allArticles.filter((article) => {
    const searchable = [
      article.title,
      article.targetKeyword,
      ...article.secondaryKeywords,
      article.category,
      article.excerpt,
    ].join(" ").toLowerCase();
    return searchable.includes(q);
  });
}

/**
 * Get popular articles for sidebar.
 */
export function getPopularArticles(currentSlug?: string, count: number = 4): Article[] {
  const popular = [
    "delta-carry-on-size",
    "when-can-i-check-in-delta-flight",
    "delta-airlines-preferred-seating",
    "delta-comfort-plus",
    "is-delta-a-good-airline",
    "delta-airlines-terminal-atlanta",
    "delta-vs-united",
    "how-to-print-delta-airlines-boarding-pass",
  ];

  return popular
    .filter((slug) => slug !== currentSlug)
    .slice(0, count)
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== undefined);
}

/**
 * Get category metadata.
 */
export function getCategoryInfo(category: ArticleCategory): {
  label: string;
  slug: string;
  description: string;
} {
  const categories: Record<ArticleCategory, { label: string; slug: string; description: string }> = {
    basics: { label: "Delta Basics", slug: "/delta-airlines", description: "General information about Delta Air Lines" },
    baggage: { label: "Baggage", slug: "/delta-airlines/baggage", description: "Delta baggage policies, carry-on rules, and fees" },
    seating: { label: "Seats & Cabins", slug: "/delta-airlines/seating", description: "Delta seating options, cabin classes, and upgrades" },
    airports: { label: "Airport Terminals", slug: "/delta-airlines/airports", description: "Delta terminal locations at major airports" },
    destinations: { label: "Destinations", slug: "/delta-airlines/destinations", description: "Where Delta flies and route information" },
    loyalty: { label: "SkyMiles & Discounts", slug: "/delta-airlines/skymiles", description: "Delta SkyMiles, discounts, and loyalty programs" },
    booking: { label: "Booking & Travel", slug: "/delta-airlines/booking", description: "Booking, check-in, boarding passes, and travel management" },
    comparisons: { label: "Airline Comparisons", slug: "/airline-comparisons", description: "Delta compared to other major airlines" },
    safety: { label: "Safety", slug: "/delta-airlines", description: "Delta safety record and aviation safety information" },
    careers: { label: "Careers & Company", slug: "/delta-airlines", description: "Working at Delta and company information" },
    misc: { label: "Travel Information", slug: "/travel-guides", description: "General travel questions and information" },
  };
  return categories[category];
}
