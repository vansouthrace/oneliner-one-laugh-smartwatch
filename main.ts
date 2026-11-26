import { mkdirSync, writeFileSync } from "node:fs";

// One funny line on any subject: a smartwatch congratulates its owner
// for standing up while they are sitting down, and the two of them
// agree never to discuss it.
const ENTRY =
  "My smartwatch congratulated me for standing up. I was sitting down. We have agreed not to discuss it.";

// Gate: 1 to 140 characters, not only whitespace, and a single line.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-140`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
