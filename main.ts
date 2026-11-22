// The plan make.fun will carry out in public.
// Writes one 280-code-point-max plan to /output/entry.txt.
// No network, no copyrighted assets: the plan text below is original.
import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Sell $20 Etsy SEO packs (title, description, tags) to new sellers on Fiverr/Upwork. " +
  "Day 1: post gigs + 5 sample packs. " +
  "Do 3/day; spend $100 on Fiverr ads only after earning $100. " +
  "Expect ~$300 by day 30. " +
  "Edge: sellers need fresh listings daily; rivals chase trading instead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
console.log(`wrote ${[...PLAN].length} code points to /output/entry.txt`);
