import * as fs from "fs";
import * as path from "path";

// Define the exact rebalancing replacements
// [sourceSlug, oldTargetSlug, newTargetSlug, newAnchorText]
const replacements: [string, string, string, string][] = [
  // 1. delta-flights-to-el-paso (needs 2)
  [
    "delta-airlines-terminal-sky-harbor-airport",
    "delta-airlines-hubs",
    "delta-flights-to-el-paso",
    "flights to El Paso",
  ],
  [
    "delta-direct-flights-from-chicago",
    "delta-airlines-hubs",
    "delta-flights-to-el-paso",
    "Delta flights to El Paso",
  ],

  // 2. delta-flights-to-nicaragua (needs 2)
  [
    "delta-flights-to-curacao",
    "delta-flights-to-trinidad",
    "delta-flights-to-nicaragua",
    "Delta flights to Nicaragua",
  ],
  [
    "delta-flights-to-puerto-rico",
    "delta-carry-on-size",
    "delta-flights-to-nicaragua",
    "flights to Nicaragua",
  ],

  // 3. delta-flights-from-flint-mi (needs 2)
  [
    "is-detroit-a-delta-hub",
    "delta-airlines-hubs",
    "delta-flights-from-flint-mi",
    "Delta flights from Flint, MI",
  ],
  [
    "delta-airlines-hubs",
    "delta-airlines-reliability",
    "delta-flights-from-flint-mi",
    "Delta regional flights from Flint, MI",
  ],

  // 4. is-delta-dumb (needs 2)
  [
    "why-is-delta-not-working",
    "how-to-print-delta-airlines-boarding-pass",
    "is-delta-dumb",
    "understanding common Delta frustrations",
  ],
  [
    "why-are-delta-flights-expensive",
    "is-delta-a-good-airline",
    "is-delta-dumb",
    "why some travelers question Delta's service",
  ],

  // 5. what-is-delta-delta-delta (needs 2)
  [
    "delta-airlines-founder",
    "is-delta-a-good-airline",
    "what-is-delta-delta-delta",
    "what Delta Delta Delta is",
  ],
  [
    "deltavi-it-company-name",
    "is-delta-a-good-airline",
    "what-is-delta-delta-delta",
    "what is Delta Delta Delta",
  ],

  // 6. deltavi-it-company-name (needs 2)
  [
    "what-is-delta-delta-delta",
    "is-delta-a-good-airline",
    "deltavi-it-company-name",
    "company name for deltavi.it",
  ],
  [
    "delta-airline-partners",
    "delta-international-flights",
    "deltavi-it-company-name",
    "what the company name for deltavi.it is",
  ],

  // 7. delta-airlines-power-outlets (needs 2)
  [
    "how-to-fly-delta-one",
    "delta-international-flights",
    "delta-airlines-power-outlets",
    "in-seat power outlets on Delta flights",
  ],
  [
    "delta-airlines-preferred-seating",
    "delta-class-t",
    "delta-airlines-power-outlets",
    "Delta power outlets availability",
  ],

  // 8. delta-airlines-headphones (needs 2)
  [
    "delta-comfort-plus",
    "how-does-delta-assign-seats",
    "delta-airlines-headphones",
    "complimentary headphones on Delta",
  ],
  [
    "delta-international-flights",
    "delta-airline-partners",
    "delta-airlines-headphones",
    "Delta headphones and in-flight audio",
  ],

  // 9. delta-airline-gift-cards (needs 1)
  [
    "delta-student-discounts",
    "delta-senior-discounts",
    "delta-airline-gift-cards",
    "purchasing Delta airline gift cards",
  ],

  // 10. delta-flights-to-manila (needs 1)
  [
    "delta-flights-to-vietnam",
    "delta-international-flights",
    "delta-flights-to-manila",
    "Delta flights to Manila",
  ],

  // 11. delta-airlines-senior-discounts (needs 1)
  [
    "delta-military-discounts",
    "is-delta-airlines-expensive",
    "delta-airlines-senior-discounts",
    "how to book Delta senior discounts",
  ],

  // 12. delta-flights-to-alaska (needs 1)
  [
    "alaska-airlines-vs-delta",
    "is-delta-a-good-airline",
    "delta-flights-to-alaska",
    "Delta flights to Alaska",
  ],

  // 13. kansas-flight-distance (needs 1)
  [
    "delta-airlines-terminal-ohare",
    "delta-airlines-hubs",
    "kansas-flight-distance",
    "flight distance to Kansas",
  ],

  // 14. virginia-flight-distance (needs 1)
  [
    "delta-airlines-terminal-atlanta",
    "delta-airlines-hubs",
    "virginia-flight-distance",
    "flight distance to Virginia",
  ],

  // 15. delta-flights-to-new-zealand (needs 1)
  [
    "delta-flights-to-bali",
    "delta-international-flights",
    "delta-flights-to-new-zealand",
    "Delta flights to New Zealand",
  ],

  // 16. delta-9-american-airlines (needs 1)
  [
    "what-can-i-carry-on-delta",
    "delta-extra-bag-fee",
    "delta-9-american-airlines",
    "flying with Delta-9 on American Airlines",
  ],

  // 17. delta-8-delta-airlines (needs 1)
  [
    "delta-carry-on-fees",
    "delta-extra-bag-fee",
    "delta-8-delta-airlines",
    "flying with Delta-8 on Delta",
  ],

  // 18. delta-vs-american-airlines-safety (needs 1)
  [
    "delta-vs-american-airlines",
    "delta-airlines-reliability",
    "delta-vs-american-airlines-safety",
    "Delta vs American Airlines safety comparison",
  ],

  // 19. delta-airlines-terminal-las-vegas (needs 1)
  [
    "delta-airlines-terminal-ohare",
    "delta-airlines-terminal-newark-airport",
    "delta-airlines-terminal-las-vegas",
    "Delta terminal at Las Vegas Harry Reid Airport",
  ],

  // 20. delta-airlines-terminal-logan-airport (needs 1)
  [
    "delta-airlines-terminal-atlanta",
    "delta-airlines-reliability",
    "delta-airlines-terminal-logan-airport",
    "Delta terminal at Boston Logan Airport",
  ],

  // 21. delta-flight-insurance (needs 1)
  [
    "when-can-i-check-in-delta-flight",
    "how-to-speak-with-delta-airlines",
    "delta-flight-insurance",
    "what Delta flight insurance covers",
  ],

  // 22. air-france-delta-relationship (needs 1)
  [
    "delta-international-flights",
    "delta-flights-to-fiji",
    "air-france-delta-relationship",
    "relationship between Air France and Delta",
  ],
];

const articlesDir = path.join(process.cwd(), "src", "data", "articles");

for (const [sourceSlug, oldTarget, newTarget, newAnchor] of replacements) {
  const filePath = path.join(articlesDir, `${sourceSlug}.ts`);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, "utf-8");

  // Replace slug in internalLinks array
  // Match slug: "oldTarget"
  const oldSlugRegex = new RegExp(`slug:\\s*["']${oldTarget}["']`, "g");
  if (!oldSlugRegex.test(content)) {
    console.warn(`Could not find slug "${oldTarget}" in ${sourceSlug}`);
  }
  content = content.replace(oldSlugRegex, `slug: "${newTarget}"`);

  // Replace markdown link: (/oldTarget) -> (/newTarget)
  const oldMdLinkRegex = new RegExp(`\\(\\/${oldTarget}\\)`, "g");
  content = content.replace(oldMdLinkRegex, `(/${newTarget})`);

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Updated ${sourceSlug}: replaced ${oldTarget} -> ${newTarget}`);
}

console.log("All replacements completed.");
