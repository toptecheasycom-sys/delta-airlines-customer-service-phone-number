/**
 * Dynamic article page template.
 * Statically generates all article pages at build time.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQSection from "@/components/ui/FAQSection";
import Sidebar from "@/components/layout/Sidebar";
import Disclosure from "@/components/ui/Disclosure";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Link from "next/link";

// Generate static paths for all articles
export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [
        {
          url: article.featuredImage.src,
          width: article.featuredImage.width,
          height: article.featuredImage.height,
          alt: article.featuredImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.featuredImage.src],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/${article.slug}`,
    },
  };
}

/**
 * Render markdown content to HTML.
 * Simple markdown-to-HTML for article content.
 */
function renderContent(content: string, slug: string): string {
  let html = content;

  // Convert headings
  html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");

  // Convert bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Convert italic
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Convert links
  html = html.replace(
    /\[([^\]]+)\]\(tel:(\+?\d+)\)/g,
    `<a href="tel:$2" class="text-blue-accent font-semibold hover:underline phone-link" data-location="article" data-slug="${slug}">$1</a>`
  );
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
    '<a href="$2" class="text-blue-accent hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  html = html.replace(
    /\[([^\]]+)\]\(\/([^\)]+)\)/g,
    '<a href="/$2" class="text-blue-accent hover:underline">$1</a>'
  );

  // Convert unordered lists
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul class="list-disc pl-6 space-y-2 my-4">${match}</ul>`);

  // Convert ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");

  // Convert tables (simple)
  html = html.replace(/\|(.+)\|/g, (match) => {
    const cells = match
      .split("|")
      .filter((c) => c.trim())
      .map((c) => c.trim());
    if (cells.every((c) => /^[-:]+$/.test(c))) return ""; // separator row
    const isHeader = match.includes("---");
    const tag = "td";
    return `<tr>${cells.map((c) => `<${tag} class="border border-gray-200 px-4 py-2">${c}</${tag}>`).join("")}</tr>`;
  });

  // Wrap table rows
  if (html.includes("<tr>")) {
    html = html.replace(
      /(<tr>.*<\/tr>\n?)+/g,
      (match) =>
        `<div class="overflow-x-auto my-6"><table class="min-w-full border-collapse border border-gray-200">${match}</table></div>`
    );
  }

  // Convert CTA blocks
  html = html.replace(
    /<div class="cta-block">\n?([\s\S]*?)\n?<\/div>/g,
    `<div class="bg-blue-light border border-blue-200 rounded-xl p-6 my-8">$1</div>`
  );

  // Convert paragraphs (lines not already wrapped)
  const lines = html.split("\n");
  const processed = lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return "";
    if (
      trimmed.startsWith("<h") ||
      trimmed.startsWith("<ul") ||
      trimmed.startsWith("<ol") ||
      trimmed.startsWith("<li") ||
      trimmed.startsWith("</") ||
      trimmed.startsWith("<div") ||
      trimmed.startsWith("<tr") ||
      trimmed.startsWith("<table") ||
      trimmed.startsWith("<img") ||
      trimmed.startsWith("📞")
    ) {
      return line;
    }
    return `<p class="mb-4 leading-relaxed">${trimmed}</p>`;
  });

  return processed.join("\n");
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);
  const sidebarRelated = getRelatedArticles(article.slug, 4).map((a) => ({
    slug: a.slug,
    title: a.title,
  }));

  const contentHtml = renderContent(article.content, article.slug);

  return (
    <>
      {/* Article Schema */}
      <SchemaMarkup
        type="Article"
        data={{
          title: article.title,
          description: article.metaDescription,
          image: article.featuredImage.src,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
          author: article.author,
          slug: article.slug,
        }}
      />

      {/* Breadcrumb Schema */}
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          items: article.breadcrumbs,
        }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={article.breadcrumbs} />

        <div className="lg:grid lg:grid-cols-3 lg:gap-12 mt-6">
          {/* Article Content */}
          <article className="lg:col-span-2">
            {/* Featured Image */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8 bg-gray-100">
              <img
                src={article.featuredImage.src}
                alt={article.featuredImage.alt}
                width={article.featuredImage.width}
                height={article.featuredImage.height}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span>By {article.author}</span>
                <span>•</span>
                <time dateTime={article.updatedAt}>
                  Updated{" "}
                  {new Date(article.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </header>

            {/* Top Article Call-to-Action Banner */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50/60 border-2 border-blue-200/80 rounded-2xl p-6 sm:p-7 shadow-md mb-10 transition-all hover:border-blue-400">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wide uppercase mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live Travel Specialist Available
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">
                    Need Help With Your Flight Plans?
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Skip long hold queues. Speak directly with an independent travel specialist for flight bookings, ticket changes, seat upgrades, and baggage assistance.
                  </p>
                </div>
                
                <div className="flex flex-col items-center sm:items-end w-full md:w-auto shrink-0">
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-lg px-7 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-102"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call {SITE_CONFIG.phoneNumber}</span>
                  </a>
                  <p className="text-xs text-gray-500 mt-2 text-center md:text-right">
                    Toll-Free • Available 24/7 • Independent Desk
                  </p>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-a:text-blue-accent"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Supporting Images */}
            {article.supportingImages.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {article.supportingImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-100"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* FAQ Section */}
            {article.faq.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Frequently Asked Questions
                </h2>
                <FAQSection faq={article.faq} />
              </section>
            )}

            {/* Sources */}
            {article.sourceLinks.length > 0 && (
              <section className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-navy mb-3">
                  Sources & Further Reading
                </h3>
                <ul className="space-y-2">
                  {article.sourceLinks.map((source, i) => (
                    <li key={i}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-accent hover:underline text-sm"
                      >
                        {source.title} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Disclosure */}
            <div className="mt-8">
              <Disclosure variant="short" />
            </div>

            {/* Continue Reading */}
            {relatedArticles.length > 0 && (
              <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-navy mb-6">
                  Continue Reading
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/${related.slug}`}
                      className="block p-4 rounded-lg border border-gray-200 hover:border-blue-accent hover:shadow-md transition-all"
                    >
                      <h3 className="font-semibold text-navy text-sm mb-2">
                        {related.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <Sidebar relatedArticles={sidebarRelated} />
          </aside>
        </div>

        {/* Mobile CTA Block */}
        <div className="lg:hidden mt-8 p-6 bg-blue-light rounded-xl text-center">
          <h3 className="font-bold text-navy mb-2">Need Flight Assistance?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Speak with an independent travel specialist about your trip.
          </p>
          <a
            href={SITE_CONFIG.phoneHref}
            className="inline-block bg-blue-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Call {SITE_CONFIG.phoneNumber}
          </a>
        </div>
      </main>
    </>
  );
}
