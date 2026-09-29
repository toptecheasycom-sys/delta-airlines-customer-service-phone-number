import { getAllArticles } from "../src/lib/articles";

const articles = getAllArticles();
const incoming: Record<string, string[]> = {};
for (const a of articles) {
  incoming[a.slug] = [];
}

for (const a of articles) {
  for (const l of a.internalLinks) {
    if (incoming[l.slug]) {
      incoming[l.slug].push(a.slug);
    } else {
      console.log(`Unknown target ${l.slug} from ${a.slug}`);
    }
  }
}

console.log("=== INCOMING LINKS COUNT ===");
const underTwo: { slug: string; count: number; incoming: string[] }[] = [];
for (const [slug, list] of Object.entries(incoming)) {
  if (list.length < 2) {
    underTwo.push({ slug, count: list.length, incoming: list });
  }
}

underTwo.sort((a, b) => a.count - b.count);
console.log(`Articles with < 2 incoming links: ${underTwo.length}`);
for (const item of underTwo) {
  console.log(`${item.slug}: ${item.count} incoming (from: ${item.incoming.join(", ") || "none"})`);
}
