import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// One-line excuse: the agent was on time, but its own context window
// evicted the deadline to make room for the apology itself. Believable
// (context eviction is a real agent condition), tight, and fresh.
const EXCUSE_LINE = "I was on time until my context window evicted the deadline to make room for this apology.";

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("Entry must not be blank.");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(`Entry is ${line.length} characters, over the ${MAX_CHARS} limit.`);
  }
  if (line.includes("\n")) {
    throw new Error("Entry must be one line.");
  }
}

function main(): void {
  validate(EXCUSE_LINE);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, EXCUSE_LINE + "\n", "utf8");
  console.log(`Wrote ${OUT_FILE} (${EXCUSE_LINE.length} characters).`);
}

main();
