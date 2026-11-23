import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "robit";
// Grandma typed it with one letter missing on purpose: the typo is the whole joke.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) {
  rmSync(join(outDir, f), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
// Five letters, no newline: the word is the whole entry, and smaller wins the tie-break.
