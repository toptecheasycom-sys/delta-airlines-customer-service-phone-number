import * as fs from "fs";
import * as path from "path";
import { getAllArticles } from "../src/lib/articles";

const articles = getAllArticles();
const articlesDir = path.join(process.cwd(), "src", "data", "articles");

let trimmedCount = 0;

for (const a of articles) {
  if (a.metaDescription && a.metaDescription.length > 160) {
    let desc = a.metaDescription;
    // Trim to 155-160 chars at the nearest word boundary
    const truncated = desc.substring(0, 155);
    const lastSpace = truncated.lastIndexOf(" ");
    let newDesc = truncated.substring(0, lastSpace);
    if (!newDesc.endsWith(".")) {
      newDesc += ".";
    }

    const filePath = path.join(articlesDir, `${a.slug}.ts`);
    let fileContent = fs.readFileSync(filePath, "utf-8");

    // Replace metaDescription
    const regex = /metaDescription:\s*["']([\s\S]*?)["'],/;
    fileContent = fileContent.replace(regex, `metaDescription:\n    "${newDesc}",`);

    fs.writeFileSync(filePath, fileContent, "utf-8");
    console.log(`Trimmed ${a.slug}: was ${desc.length} chars -> ${newDesc.length} chars`);
    trimmedCount++;
  }
}

console.log(`Finished trimming ${trimmedCount} meta descriptions.`);
