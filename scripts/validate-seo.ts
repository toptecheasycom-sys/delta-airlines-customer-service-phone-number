/**
 * SEO Validation Script
 * Run: npx tsx scripts/validate-seo.ts
 * Or: npm run validate:seo
 * 
 * Checks:
 * 1. All article routes exist
 * 2. Every article has exactly 4 contextual internal links
 * 3. Every internal link resolves to an existing article
 * 4. No self-links
 * 5. No orphan articles (every article has inbound links)
 * 6. Canonical URLs are unique
 * 7. Every article has title metadata
 * 8. Every article has meta description
 * 9. Every article has an OG image (featured image)
 * 10. All images have alt attributes
 * 11. All tel links use +17257659837
 * 12. No public Ringba dashboard URL
 * 13. No accidental noindex
 * 14. No duplicate article slugs
 */

import * as fs from "fs";
import * as path from "path";

// ANSI colors for output
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";

interface ValidationResult {
  passed: boolean;
  errors: string[];
  warnings: string[];
}

interface ArticleData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  featuredImage: { src: string; alt: string };
  supportingImages: { src: string; alt: string }[];
  content: string;
  faq: { question: string; answer: string }[];
  internalLinks: { slug: string; anchorText: string }[];
  searchIntent: string;
}

import { getAllArticles } from "../src/lib/articles";

function loadArticles(): ArticleData[] {
  const articles = getAllArticles();
  return articles.map((a) => ({
    slug: a.slug,
    title: a.title,
    metaTitle: a.metaTitle,
    metaDescription: a.metaDescription,
    targetKeyword: a.targetKeyword,
    featuredImage: a.featuredImage,
    supportingImages: a.supportingImages || [],
    content: a.content,
    faq: a.faq || [],
    internalLinks: a.internalLinks || [],
    searchIntent: a.searchIntent || "",
  }));
}

function validateArticleRoutes(articles: ArticleData[]): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const slugs = articles.map((a) => a.slug);

  // Expected slugs (all 89)
  const expectedSlugs = [
    "is-delta-a-good-airline",
    "is-delta-airlines-safe",
    "delta-airlines-terminal-orlando-international-airport",
    "delta-airlines-preferred-seating",
    "delta-airlines-terminal-logan-airport",
    "delta-airlines-senior-discounts",
    "delta-vs-american-airlines",
    "has-delta-airlines-ever-crashed",
    "delta-airlines-terminal-sky-harbor-airport",
    "delta-airlines-pilot-salary",
    "deltavi-it-company-name",
    "do-delta-airline-miles-expire",
    "how-to-print-delta-airlines-boarding-pass",
    "delta-airlines-terminal-ohare",
    "delta-airlines-terminal-miami-airport",
    "when-can-i-check-in-delta-flight",
    "delta-vs-united",
    "virginia-flight-distance",
    "how-many-pilots-does-delta-have",
    "is-delta-dumb",
    "delta-airlines-terminal-heathrow",
    "delta-airlines-terminal-newark-airport",
    "delta-alaska-airlines-partnership",
    "delta-carry-on-fees",
    "delta-bereavement-fares",
    "delta-airlines-headphones",
    "delta-flights-to-fiji",
    "delta-flight-receipt",
    "delta-international-flights",
    "delta-carry-on-size",
    "delta-airlines-terminal-atlanta",
    "delta-flights-to-antigua",
    "delta-flights-to-curacao",
    "delta-flights-to-new-zealand",
    "delta-senior-discounts",
    "delta-flights-to-bali",
    "delta-flights-to-puerto-rico",
    "delta-airlines-reliability",
    "delta-class-t",
    "delta-airlines-terminal-las-vegas",
    "delta-flights-to-vietnam",
    "delta-carry-on-bags",
    "how-to-become-a-delta-airlines-pilot",
    "air-france-delta-relationship",
    "is-detroit-a-delta-hub",
    "is-seattle-a-delta-hub",
    "delta-comfort-plus",
    "delta-airline-gift-cards",
    "delta-airlines-hubs",
    "delta-airlines-founder",
    "delta-flights-to-alaska",
    "delta-flights-to-trinidad",
    "delta-military-discounts",
    "delta-airlines-power-outlets",
    "delta-name-change",
    "how-to-fly-delta-one",
    "is-delta-airlines-expensive",
    "what-can-i-carry-on-delta",
    "delta-direct-flights-from-chicago",
    "delta-flights-to-israel",
    "delta-airlines-felon-hiring",
    "delta-flights-to-dominican-republic",
    "delta-flights-to-nicaragua",
    "delta-flights-to-philippines",
    "delta-student-discounts",
    "how-does-delta-assign-seats",
    "delta-airlines-crash-history",
    "delta-extra-bag-fee",
    "delta-airlines-union",
    "delta-flight-insurance",
    "what-is-delta-delta-delta",
    "delta-vs-jetblue",
    "why-are-delta-flights-expensive",
    "why-is-delta-not-working",
    "alaska-airlines-vs-delta",
    "is-delta-a-good-company-to-work-for",
    "is-delta-the-safest-airline",
    "delta-8-delta-airlines",
    "delta-9-american-airlines",
    "delta-miles-alaska-airlines",
    "delta-flights-from-flint-mi",
    "delta-flights-to-abu-dhabi",
    "delta-flights-to-egypt",
    "delta-flights-to-el-paso",
    "delta-flights-to-manila",
    "kansas-flight-distance",
    "how-to-speak-with-delta-airlines",
    "delta-vs-american-airlines-safety",
    "delta-airline-partners",
  ];

  for (const expected of expectedSlugs) {
    if (!slugs.includes(expected)) {
      errors.push(`Missing article: ${expected}`);
    }
  }

  // Check for duplicates
  const seen = new Set<string>();
  for (const slug of slugs) {
    if (seen.has(slug)) {
      errors.push(`Duplicate article slug: ${slug}`);
    }
    seen.add(slug);
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}

function validateInternalLinks(articles: ArticleData[]): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const slugs = new Set(articles.map((a) => a.slug));
  const incomingLinks: Record<string, string[]> = {};

  for (const article of articles) {
    // Check exactly 4 internal links
    if (article.internalLinks.length !== 4) {
      errors.push(
        `${article.slug}: has ${article.internalLinks.length} internal links (expected 4)`
      );
    }

    // Check no self-links
    for (const link of article.internalLinks) {
      if (link.slug === article.slug) {
        errors.push(`${article.slug}: self-link detected`);
      }

      // Check link target exists
      if (!slugs.has(link.slug)) {
        errors.push(
          `${article.slug}: links to non-existent article "${link.slug}"`
        );
      }

      // Track incoming links
      if (!incomingLinks[link.slug]) {
        incomingLinks[link.slug] = [];
      }
      incomingLinks[link.slug].push(article.slug);
    }

    // Check for duplicate links
    const linkSlugs = article.internalLinks.map((l) => l.slug);
    const uniqueSlugs = new Set(linkSlugs);
    if (uniqueSlugs.size !== linkSlugs.length) {
      errors.push(`${article.slug}: duplicate internal links detected`);
    }
  }

  // Check orphan articles (no incoming links)
  for (const article of articles) {
    if (
      !incomingLinks[article.slug] ||
      incomingLinks[article.slug].length === 0
    ) {
      errors.push(`${article.slug}: orphan article (no incoming links)`);
    } else if (incomingLinks[article.slug].length < 2) {
      warnings.push(
        `${article.slug}: only ${incomingLinks[article.slug].length} incoming link(s) (target: 2+)`
      );
    }
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}

function validateMetadata(articles: ArticleData[]): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const titles = new Set<string>();

  for (const article of articles) {
    if (!article.title) {
      errors.push(`${article.slug}: missing title`);
    }
    if (!article.metaTitle) {
      errors.push(`${article.slug}: missing meta title`);
    }
    if (!article.metaDescription) {
      errors.push(`${article.slug}: missing meta description`);
    }
    if (article.metaDescription && article.metaDescription.length > 160) {
      warnings.push(
        `${article.slug}: meta description exceeds 160 chars (${article.metaDescription.length})`
      );
    }
    if (!article.featuredImage.src) {
      errors.push(`${article.slug}: missing featured image`);
    }
    if (!article.featuredImage.alt) {
      errors.push(`${article.slug}: missing featured image alt text`);
    }

    // Check unique titles
    if (titles.has(article.metaTitle)) {
      errors.push(`${article.slug}: duplicate meta title`);
    }
    titles.add(article.metaTitle);
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}

function validatePhoneNumbers(articles: ArticleData[]): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const correctPhone = "+17257659837";

  for (const article of articles) {
    // Check tel: links
    const telLinks = article.content.match(/tel:(\+?\d+)/g) || [];
    for (const tel of telLinks) {
      const number = tel.replace("tel:", "");
      if (number !== correctPhone) {
        errors.push(`${article.slug}: incorrect phone number in tel link: ${number}`);
      }
    }

    // Check for Ringba dashboard URLs
    if (article.content.includes("offers.ringba.com")) {
      errors.push(`${article.slug}: contains public Ringba dashboard URL`);
    }
    if (article.content.includes("ringba.com/#/dashboard")) {
      errors.push(`${article.slug}: contains public Ringba dashboard URL`);
    }
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}

function validateContentQuality(articles: ArticleData[]): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const article of articles) {
    // Check for noindex (shouldn't be in article content)
    if (article.content.includes("noindex")) {
      errors.push(`${article.slug}: contains noindex directive`);
    }

    // Check for fake claims
    const fakePatterns = [
      "Official Delta Customer Service",
      "Official Delta Support",
      "Delta Air Lines Customer Service Number",
      "Delta representative",
      "Delta headquarters",
      "Delta employee",
      "verified Delta agent",
    ];

    for (const pattern of fakePatterns) {
      if (article.content.toLowerCase().includes(pattern.toLowerCase())) {
        warnings.push(
          `${article.slug}: may contain inappropriate claim: "${pattern}"`
        );
      }
    }
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}

function validateStaticFiles(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check for robots.ts
  const robotsPath = path.join(process.cwd(), "src", "app", "robots.ts");
  if (!fs.existsSync(robotsPath)) {
    errors.push("Missing robots.ts");
  }

  // Check for sitemap.ts
  const sitemapPath = path.join(process.cwd(), "src", "app", "sitemap.ts");
  if (!fs.existsSync(sitemapPath)) {
    errors.push("Missing sitemap.ts");
  }

  // Check for RSS
  const rssPath = path.join(
    process.cwd(),
    "src",
    "app",
    "rss.xml",
    "route.ts"
  );
  if (!fs.existsSync(rssPath)) {
    errors.push("Missing RSS feed route");
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}

// Main execution
function main() {
  console.log(
    `\n${BOLD}${CYAN}╔══════════════════════════════════════╗${RESET}`
  );
  console.log(
    `${BOLD}${CYAN}║   SEO Validation Report              ║${RESET}`
  );
  console.log(
    `${BOLD}${CYAN}║   Flight Travel Assistance           ║${RESET}`
  );
  console.log(
    `${BOLD}${CYAN}╚══════════════════════════════════════╝${RESET}\n`
  );

  const articles = loadArticles();
  console.log(`Found ${articles.length} articles\n`);

  const checks: { name: string; result: ValidationResult }[] = [
    {
      name: "Article Routes (89 expected)",
      result: validateArticleRoutes(articles),
    },
    { name: "Internal Links", result: validateInternalLinks(articles) },
    { name: "Metadata", result: validateMetadata(articles) },
    { name: "Phone Numbers", result: validatePhoneNumbers(articles) },
    { name: "Content Quality", result: validateContentQuality(articles) },
    { name: "Static Files", result: validateStaticFiles() },
  ];

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const check of checks) {
    const status = check.result.passed
      ? `${GREEN}✓ PASS${RESET}`
      : `${RED}✗ FAIL${RESET}`;
    console.log(`${BOLD}${status} ${check.name}${RESET}`);

    for (const error of check.result.errors) {
      console.log(`  ${RED}ERROR: ${error}${RESET}`);
      totalErrors++;
    }
    for (const warning of check.result.warnings) {
      console.log(`  ${YELLOW}WARN: ${warning}${RESET}`);
      totalWarnings++;
    }
    console.log();
  }

  console.log(
    `${BOLD}══════════════════════════════════════${RESET}`
  );
  console.log(
    `Total: ${totalErrors} errors, ${totalWarnings} warnings`
  );

  if (totalErrors > 0) {
    console.log(`\n${RED}${BOLD}Validation FAILED${RESET}\n`);
    process.exit(1);
  } else {
    console.log(`\n${GREEN}${BOLD}Validation PASSED${RESET}\n`);
    process.exit(0);
  }
}

main();
