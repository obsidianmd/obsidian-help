#!/usr/bin/env tsx
/**
 * publish-all.ts
 * Usage: npx tsx scripts/publish-all.ts [--dry-run] [locale ...]
 *
 * Publishes all active locales (or the ones specified) via `ob publish`,
 * then syncs site options (nav order, display flags, etc.) for each non-EN locale.
 * Runs all locales in parallel and reports success/failure per locale.
 */

import { execSync, spawn } from "child_process";
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

// ─── Helpers ──────────────────────────────────────────────────────────────────

function run(cmd: string, args: string[]): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const errChunks: Buffer[] = [];
    const child = spawn(cmd, args, { stdio: ["ignore", "pipe", "pipe"] });
    child.stdout.on("data", (d: Buffer) => chunks.push(d));
    child.stderr.on("data", (d: Buffer) => errChunks.push(d));
    child.on("close", code => {
      const stdout = Buffer.concat(chunks).toString();
      const stderr = Buffer.concat(errChunks).toString();
      if (code === 0) resolve(stdout);
      else reject(new Error((stdout + stderr).trim() || `exit code ${code}`));
    });
  });
}

// ─── Publish ──────────────────────────────────────────────────────────────────

console.log(`Publishing ${locales.join(", ")}${dryRun ? " [DRY RUN]" : ""}\n`);

const results = await Promise.all(locales.map(async locale => {
  const localePath = path.join(ROOT, locale);
  const lines: string[] = [];
  const log = (s: string) => lines.push(s);

  try {
    const publishArgs = ["publish", "--path", localePath, "--all", dryRun ? "--dry-run" : "--yes"];
    log(`ob ${publishArgs.join(" ")}`);
    const out = await run("ob", publishArgs);
    if (out.trim()) for (const line of out.trim().split("\n")) log(line);

    if (locale !== "en") {
      const siteArgs = ["tsx", path.join(SCRIPTS_DIR, "sync-site-options.ts"), locale, ...(dryRun ? ["--dry-run"] : [])];
      log(`npx ${siteArgs.join(" ")}`);
      const siteOut = await run("npx", siteArgs);
      if (siteOut.trim()) for (const line of siteOut.trim().split("\n")) log(line);
    }

    return { locale, ok: true, lines };
  } catch (err: unknown) {
    const e = err as { message?: string };
    for (const line of (e.message ?? "").split("\n")) {
      if (line.trim()) log(line);
    }
    return { locale, ok: false, lines };
  }
}));

// ─── Print results in locale order ────────────────────────────────────────────

let ok = 0, failed = 0;
for (const { locale, ok: success, lines } of results) {
  console.log(`── ${locale}`);
  for (const line of lines) console.log(`   ${line}`);
  if (success) { console.log(`   ✓ done\n`); ok++; }
  else { console.error(`   ✗ failed\n`); failed++; }
}

console.log(`--- Summary ---`);
console.log(`  OK:     ${ok}`);
if (failed > 0) console.log(`  Failed: ${failed}`);
if (dryRun) console.log("\n[DRY RUN] No changes were published.");

if (failed > 0) process.exit(1);
