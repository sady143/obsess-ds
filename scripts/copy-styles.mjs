import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const stylesDir = path.join(root, "src", "styles");
const distDir = path.join(root, "dist");

fs.mkdirSync(distDir, { recursive: true });

const fonts = fs.readFileSync(path.join(stylesDir, "fonts.css"), "utf8").trim();
const tokens = fs.readFileSync(path.join(stylesDir, "tokens.css"), "utf8").trim();
const grid = fs.readFileSync(path.join(stylesDir, "grid.css"), "utf8").trim();
const baseAndPatterns = fs.readFileSync(path.join(stylesDir, "patterns.css"), "utf8").trim();

fs.writeFileSync(path.join(distDir, "fonts.css"), `${fonts}\n`);
fs.writeFileSync(path.join(distDir, "tokens.css"), `${tokens}\n`);
fs.writeFileSync(path.join(distDir, "grid.css"), `${grid}\n`);
fs.writeFileSync(
  path.join(distDir, "styles.css"),
  `${fonts}\n\n${tokens}\n\n${grid}\n\n${baseAndPatterns}\n`,
);

console.log("Copied CSS bundles to dist/{styles,tokens,fonts,grid}.css");
