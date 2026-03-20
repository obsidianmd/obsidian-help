#!/usr/bin/env tsx
/**
 * publish-all.ts
 * Usage: npx tsx scripts/publish-all.ts [--dry-run] [locale ...]
 *
 * Publishes all active locales (or the ones specified) via `ob publish`.
 * Runs each locale sequentially and reports success/failure per locale.
 */

import { execSync } from "child_process";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");

const ACTIVE_LOCALES = ["en", "ja", "pt-br", "es", "zh", "fr"];

const cliArgs = process.argv.slice(2);
const dryRun = cliArgs.includes("--dry-run");
const rest = cliArgs.filter(a => a !== "--dry-run");
const locales = rest.length > 0 ? rest : ACTIVE_LOCALES;

console.log(`Publishing ${locales.join(", ")}${dryRun ? " [DRY RUN]" : ""}\n`);

let ok = 0;
let failed = 0;

for (const locale of locales) {
  const localePath = path.join(ROOT, locale);
  const flags = ["--path", localePath, "--all", dryRun ? "--dry-run" : "--yes"].join(" ");
  const cmd = `ob publish ${flags}`;

  console.log(`── ${locale}`);
  console.log(`   ${cmd}`);

  try {
    const out = execSync(cmd, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });
    if (out.trim()) {
      for (const line of out.trim().split("\n")) {
        console.log(`   ${line}`);
      }
    }
    console.log(`   ✓ done\n`);
    ok++;
  } catch (err: unknown) {
    const e = err as { stdout?: string; stderr?: string; message?: string };
    const detail = (e.stdout ?? "") + (e.stderr ?? e.message ?? "");
    for (const line of detail.trim().split("\n")) {
      if (line.trim()) console.error(`   ${line}`);
    }
    console.error(`   ✗ failed\n`);
    failed++;
  }
}

console.log(`--- Summary ---`);
console.log(`  OK:     ${ok}`);
if (failed > 0) console.log(`  Failed: ${failed}`);
if (dryRun) console.log("\n[DRY RUN] No changes were published.");

if (failed > 0) process.exit(1);
