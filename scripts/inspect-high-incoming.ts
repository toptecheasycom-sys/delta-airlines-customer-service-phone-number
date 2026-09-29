import { getAllArticles } from "../src/lib/articles";

const articles = getAllArticles();
const incoming: Record<string, string[]> = {};
for (const a of articles) incoming[a.slug] = [];
for (const a of articles) {
  for (const l of a.internalLinks) {
    if (incoming[l.slug]) {
      incoming[l.slug].push(a.slug);
    }
  }
}

const sorted = Object.entries(incoming).sort((a, b) => b[1].length - a[1].length);
console.log("Articles with highest incoming links:");
for (const [slug, list] of sorted.slice(0, 15)) {
  console.log(`${slug}: ${list.length} incoming (${list.join(", ")})`);
}
