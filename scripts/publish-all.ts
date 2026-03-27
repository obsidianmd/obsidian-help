#!/usr/bin/env tsx
/**
 * publish-all.ts
 * Usage: npx tsx scripts/publish-all.ts [--dry-run] [locale ...]
 *
 * Publishes all active locales (or the ones specified) via `ob publish`,
 * then syncs site options (nav order, display flags, etc.) for each non-EN locale.
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

// ─── Auto-link publish sites ──────────────────────────────────────────────────

{
  const setupArgs = dryRun ? "--dry-run" : "";
  const setupCmd = `npx tsx ${path.join(SCRIPTS_DIR, "setup-sites.ts")} ${setupArgs}`.trim();
  console.log(`Setup: ${setupCmd}\n`);
  try {
    const out = execSync(setupCmd, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });
    if (out.trim()) for (const line of out.trim().split("\n")) console.log(`  ${line}`);
    console.log();
  } catch (err: unknown) {
    const e = err as { stdout?: string; stderr?: string; message?: string };
    console.warn(`  Warning: setup-sites failed — ${(e.stdout ?? e.stderr ?? e.message ?? "").trim().split("\n")[0]}`);
    console.warn("  Continuing anyway — sites that were already linked will still publish.\n");
  }
}

// ─── Publish ──────────────────────────────────────────────────────────────────

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
      const siteArgs = [locale, ...(dryRun ? ["--dry-run"] : [])].join(" ");
      const siteCmd = `npx tsx ${path.join(SCRIPTS_DIR, "sync-site-options.ts")} ${siteArgs}`;
      console.log(`   ${siteCmd}`);
      const siteOut = execSync(siteCmd, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });
      if (siteOut.trim()) {
        for (const line of siteOut.trim().split("\n")) {
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
