/**
 * Core type definitions for the Flight Travel Assistance website.
 * Designed to support multiple airlines in the future.
 */

export type Airline =
  | "delta"
  | "american"
  | "united"
  | "jetblue"
  | "alaska"
  | "southwest"
  | "frontier"
  | "spirit"
  | "hawaiian"
  | "allegiant";

export type ArticleCategory =
  | "basics"
  | "baggage"
  | "seating"
  | "airports"
  | "destinations"
  | "loyalty"
  | "booking"
  | "comparisons"
  | "safety"
  | "careers"
  | "misc";

export type SearchIntent =
  | "informational"
  | "navigational"
  | "commercial"
  | "transactional";

export interface FAQ {
  question: string;
  answer: string;
}

export interface ArticleImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface InternalLink {
  slug: string;
  anchorText: string;
}

export interface SourceLink {
  title: string;
  url: string;
}

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  category: ArticleCategory;
  airline: Airline;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  featuredImage: ArticleImage;
  supportingImages: ArticleImage[];
  content: string;
  faq: FAQ[];
  internalLinks: InternalLink[];
  sourceLinks: SourceLink[];
  searchIntent: SearchIntent;
  breadcrumbs: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface CategoryPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  airline?: Airline;
  articleSlugs: string[];
}

export interface AirlineData {
  id: Airline;
  name: string;
  fullName: string;
  iata: string;
  website: string;
  description: string;
  hubs: string[];
  alliance?: string;
}

export interface PhoneClickEvent {
  location:
    | "header"
    | "hero"
    | "article"
    | "sidebar"
    | "footer"
    | "mobile_sticky"
    | "cta_block";
  pageSlug: string;
  timestamp: number;
}

export interface NavItem {
  label: string;
  href: string;
}
