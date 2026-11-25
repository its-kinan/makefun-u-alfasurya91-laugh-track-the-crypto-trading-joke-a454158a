// Laugh Track: The Crypto Trading Joke Contest
// (make.fun — program/v1)
//
// The program writes exactly one joke about crypto and trading life to
// /output/entry.txt. The gate allows 1 to 200 characters of UTF-8 text.
// The judge reads entries two at a time and picks the funnier one, weighing
// a clear setup and turn first, then the laugh, then how true the line feels
// to trading life, then tight phrasing with the punchline at the end.
//
// The joke: the oldest advice in trading ("buy the dip") meets the oldest
// experience in trading (the dip keeps dipping). The turn escalates the dip
// into architecture — basement, sub-basement, parking garage — and lands the
// punchline on the last image, where every bag-holder has lived.
//
// Deterministic: one fixed string, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Buy the dip, they said. Nobody said the dip had a basement, a sub-basement, and a parking garage.";

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} characters; the gate allows 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote /output/entry.txt (${JOKE.length} chars)`);
