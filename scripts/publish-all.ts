#!/usr/bin/env tsx
/**
 * publish-all.ts
 * Usage: npx tsx scripts/publish-all.ts [--dry-run] [locale ...]
 *
 * Publishes all active locales (or the ones specified) via `ob publish`,
 * then syncs nav order for each non-EN locale.
 * Runs each locale sequentially and reports success/failure per locale.
 */

import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCRIPTS_DIR = import.meta.dirname;

type LocaleDef = { code: string; dir?: string; label: string; base: string };
const localeDefs: LocaleDef[] = JSON.parse(fs.readFileSync(path.join(SCRIPTS_DIR, "locales.json"), "utf8"));
const ACTIVE_LOCALES = localeDefs.map(l => l.dir ?? l.code);

const cliArgs = process.argv.slice(2);
const dryRun = cliArgs.includes("--dry-run");
const rest = cliArgs.filter(a => a !== "--dry-run");
const locales = rest.length > 0 ? rest : ACTIVE_LOCALES;

console.log(`Publishing ${locales.join(", ")}${dryRun ? " [DRY RUN]" : ""}\n`);

let ok = 0;
let failed = 0;

for (const locale of locales) {
  const localePath = path.join(ROOT, locale);
  const publishFlags = ["--path", localePath, "--all", dryRun ? "--dry-run" : "--yes"].join(" ");
  const publishCmd = `ob publish ${publishFlags}`;

  console.log(`── ${locale}`);
  console.log(`   ${publishCmd}`);

  try {
    const out = execSync(publishCmd, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });
    if (out.trim()) {
      for (const line of out.trim().split("\n")) {
        console.log(`   ${line}`);
      }
    }

    if (locale !== "en") {
      const navArgs = [locale, ...(dryRun ? ["--dry-run"] : [])].join(" ");
      const navCmd = `npx tsx ${path.join(SCRIPTS_DIR, "sync-nav-order.ts")} ${navArgs}`;
      console.log(`   ${navCmd}`);
      const navOut = execSync(navCmd, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });
      if (navOut.trim()) {
        for (const line of navOut.trim().split("\n")) {
          console.log(`   ${line}`);
        }
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
