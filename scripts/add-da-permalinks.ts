#!/usr/bin/env tsx
/**
 * One-time migration: adds permalink frontmatter to da/ files that have none.
 * Maps each file to the corresponding EN permalink.
 *
 * Usage:
 *   npx tsx scripts/add-da-permalinks.ts [--apply]
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const DA_DIR = path.join(ROOT, "da");
const APPLY = process.argv.includes("--apply");

// ─── Explicit mapping: DA relative path → EN permalink (or null to skip) ──
const MAP: Record<string, string | null> = {
  "Hjælp og support.md":                                                  "resources",
  "Import af noter/Import af HTML filer.md":                              "import/html",
  "Import af noter/Import af Markdown filer.md":                          "import/markdown",
  "Import af noter/Import af Textbundle filer.md":                        "import/textbundle",
  "Import af noter/Import af Zettelkasten noter.md":                      "import/zettelkasten",
  "Import af noter/Import fra Apple Notes.md":                            "import/apple-notes",
  "Import af noter/Import fra Bear.md":                                   "import/bear",
  "Import af noter/Import fra Craft.md":                                  "import/craft",
  "Import af noter/Import fra Evernote.md":                               "import/evernote",
  "Import af noter/Import fra Google Keep.md":                            "import/google-keep",
  "Import af noter/Import fra Microsoft OneNote.md":                      "import/onenote",
  "Import af noter/Import fra Notion.md":                                 "import/notion",
  "Import af noter/Import fra Roam Research.md":                          "import/roam",
  "Import af noter/Importer.md":                                          "plugins/importer",
  "Licenser og betaling/Kommerciel licens.md":                            "teams/license",
  "Licenser og betaling/Obsidian Publish.md":                             null, // old, no EN equivalent
  "Licenser og betaling/Obsidian Sync.md":                                null, // old, no EN equivalent
  "Licenser og betaling/Obsidian Unlimited.md":                           "credit",
  "Licenser og betaling/Refunderingspolitik.md":                          "refunds",
  "Obsidian Publish/Administration af websteder.md":                      "publish/sites",
  "Obsidian Publish/Deling af bokse.md":                                  "publish/collaborate",
  "Obsidian Publish/Hosting af mediefiler.md":                            "publish/media",
  "Obsidian Publish/Introduktion til Obsidian Publish.md":                "publish",
  "Obsidian Publish/Opsætning af Google Analytics.md":                    "publish/analytics",
  "Obsidian Publish/Opsætning af Obsidian Publish.md":                    "publish/setup",
  "Obsidian Publish/Opsætning på eget domæne.md":                        "publish/domains",
  "Obsidian Publish/Publicer og håndter udgivelser af noter.md":          "publish/publish",
  "Obsidian Publish/Sikkerhed og privatliv.md":                           "publish/security",
  "Obsidian Publish/Tilpas dit websted.md":                               "publish/customize",
  "Obsidian Sync/Begrænsninger.md":                                       "sync/plans",
  "Obsidian Sync/Deling af fjernbokse.md":                                "sync/collaborate",
  "Obsidian Sync/Fejlsøg Obsidian Sync.md":                               "sync/troubleshoot",
  "Obsidian Sync/Introduktion til Obsidian Sync.md":                      "sync",
  "Obsidian Sync/Lokal- og fjernbokse.md":                                "sync/vault-types",
  "Obsidian Sync/Obsidian Sync og tredjeparts services.md":               null, // removed from EN
  "Obsidian Sync/Opsætning af Obsidian Sync på en anden enhed.md":        "sync/switch",
  "Obsidian Sync/Opsætning af Obsidian Sync.md":                          "sync/setup",
  "Obsidian Sync/Sikkerhed og privatliv.md":                              "sync/security",
  "Obsidian Sync/Versionshistorik.md":                                    "sync/version-history",
  "Obsidian Sync/Vælge filer og indstillinger til Sync.md":               "sync/settings",
};

let applied = 0, skipped = 0;

for (const [relPath, permalink] of Object.entries(MAP)) {
  const fullPath = path.join(DA_DIR, relPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`  MISSING  ${relPath}`);
    continue;
  }

  if (permalink === null) {
    console.log(`  SKIP  ${relPath}  (no EN equivalent)`);
    skipped++;
    continue;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(raw);

  if (parsed.data?.permalink) {
    console.log(`  ALREADY  ${relPath}  (${parsed.data.permalink})`);
    continue;
  }

  console.log(`  ADD  ${relPath}  → permalink: ${permalink}`);

  if (APPLY) {
    const newFm: Record<string, unknown> = { permalink, ...parsed.data as Record<string, unknown> };
    fs.writeFileSync(fullPath, matter.stringify(parsed.content, newFm, { lineWidth: -1 }), "utf8");
  }
  applied++;
}

console.log(`\nApplied: ${applied}  Skipped: ${skipped}`);
if (!APPLY) console.log("[DRY RUN] Run with --apply to write changes.");
