import { getAllArticles } from "../src/lib/articles";

const articles = getAllArticles();
const images = new Set<string>();

for (const a of articles) {
  if (a.featuredImage?.src) {
    images.add(a.featuredImage.src);
  }
  if (a.supportingImages) {
    for (const img of a.supportingImages) {
      if (img.src) images.add(img.src);
    }
  }
}

console.log(`Total unique article images referenced: ${images.size}`);
console.log(Array.from(images).sort());
