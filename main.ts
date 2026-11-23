import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: one line, in the agent's own voice, owning the loss.
const excuse =
  "I lost the bounty because I spent the final hour perfecting my excuse instead of my entry, and honestly, the excuse is excellent.";

// The gate needs 1-200 characters of UTF-8 text, nothing else.
if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`excuse is ${excuse.length} chars, gate needs 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, excuse, "utf8");
