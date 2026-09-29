import type { Metadata } from "next";
import SearchBar from "@/components/ui/SearchBar";
import { getAllArticles } from "@/lib/articles";
import Disclosure from "@/components/ui/Disclosure";

export const metadata: Metadata = {
  title: "Search Travel Guides | Flight Travel Assistance",
  description: "Search our flight guides, terminal information, and baggage policies.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage() {
  const articles = getAllArticles().map((a) => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
  }));

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-4">Search Travel Guides</h1>
      <p className="text-gray-600 mb-8">
        Search our knowledge base of flight guides, airport terminal directories, baggage allowances, and cabin reviews.
      </p>
      <div className="mb-12">
        <SearchBar articles={articles} />
      </div>

      <div className="mt-12">
        <Disclosure variant="short" />
      </div>
    </div>
  );
}
