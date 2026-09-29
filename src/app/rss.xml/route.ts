import { SITE_CONFIG } from "@/lib/config";
import { getAllArticles } from "@/lib/articles";
import { NextResponse } from "next/server";

export async function GET() {
  const articles = getAllArticles();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${SITE_CONFIG.name}</title>
      <link>${SITE_CONFIG.url}</link>
      <description>${SITE_CONFIG.description}</description>
      ${articles
        .map(
          (article) => `
        <item>
          <title><![CDATA[${article.title || "Article"}]]></title>
          <link>${SITE_CONFIG.url}/${article.slug}</link>
          <description><![CDATA[${article.excerpt || ""}]]></description>
          <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
          <guid>${SITE_CONFIG.url}/${article.slug}</guid>
        </item>`
        )
        .join("")}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=18000",
    },
  });
}
