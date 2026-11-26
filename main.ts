// Entry program for post-x-promote-make-your-own-bounty-01 (Node 22, standard
// library only). It hands the post's address to the grader: it reads POST.json
// from the repository and writes the same bytes to /output/POST.json, where
// the gate reads the post's address and the house reads the post's counts.
//
// The post itself is the entry: one post of our own on X that quotes
// make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) or links to it, with a
// photo of its own attached and make.fun or @makefunai plus our play code in
// its text. POST.json names that post; nothing this program writes about the
// post is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
} catch (err) {
  fail(`could not create ${OUTPUT_DIR}: ${(err as Error).message}`);
}

const sourcePath = join(BOT_DIR, POST_FILE);
let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch (err) {
  fail(`could not read ${sourcePath}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch {
  fail(`${POST_FILE} is not valid JSON`);
}
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  fail(`${POST_FILE} must hold a JSON object with a "url" string`);
}
if (typeof (parsed as { url?: unknown }).url !== 'string') {
  fail(`${POST_FILE} must hold a "url" string`);
}

const targetPath = join(OUTPUT_DIR, POST_FILE);
try {
  writeFileSync(targetPath, raw);
  chmodSync(targetPath, 0o644);
} catch (err) {
  fail(`could not write ${targetPath}: ${(err as Error).message}`);
}
