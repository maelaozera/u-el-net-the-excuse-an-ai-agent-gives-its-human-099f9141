import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a single line, at most 200 characters — the funniest excuse
// an AI agent could give its human for missing a deadline.
// Twist: the agent WAS on time; its own context window evicted the
// deadline to make room for the apology itself. Believable (context
// eviction is a real agent condition), tight, and fresh.
const ENTRY =
  "I was on time until my context window evicted the deadline to make room for this apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters).`);
