/**
 * One-time migration script: generates zh/filenames.txt and adds permalink
 * frontmatter to existing zh files by matching them to EN via aliases.
 */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const zhDir = path.join(ROOT, "zh");

// Build EN index: basename (lower) and permalink (lower) → EN info
const enByBasename = new Map<string, {permalink:string, relPath:string, folder:string, basename:string}>();
const enByPermalink = new Map<string, {permalink:string, relPath:string, folder:string, basename:string}>();

function walkEn(dir: string, base = "") {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) walkEn(full, rel);
    else if (entry.name.endsWith(".md")) {
      const fm = matter(fs.readFileSync(full, "utf8")).data;
      const basename = entry.name.slice(0, -3);
      const folder = base;
      const info = { permalink: fm.permalink, relPath: rel, folder, basename };
      enByBasename.set(basename.toLowerCase(), info);
      if (fm.permalink) enByPermalink.set(fm.permalink, info);
    }
  }
}
walkEn(path.join(ROOT, "en"));

// Manual matches for files whose aliases don't auto-resolve
const MANUAL_PERMALINK: Record<string, string> = {
  "Obsidian/iOS 应用.md": "ios",
  "Obsidian/关于 Obsidian.md": "obsidian",
  "Obsidian/安卓端应用.md": "android",
  "Obsidian 发布服务/发布笔记与取消发布.md": "publish/publish",
  "Obsidian 发布服务/启用谷歌分析.md": "publish/analytics",
  "Obsidian 发布服务/自定义域名.md": "publish/domains",
  "Obsidian 同步服务/同步常见问题.md": "sync/faq",
  "Obsidian 同步服务/同步文件和设置.md": "sync/settings",
  "Obsidian 同步服务/订阅计划与容量限制.md": "sync/plans",
  "快速入门/移动端应用.md": "mobile",
  "核心插件/核心插件.md": "plugins",
  "编辑与格式化/编辑与预览笔记.md": "edit-and-read",
};

// Build matches
interface Match {
  zhRel: string;
  zhBasename: string;
  zhFolder: string;
  permalink: string;
  enBasename: string;
  enFolder: string;
}

const matches: Match[] = [];
const orphans: string[] = [];

function walkZh(dir: string, base = "") {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) walkZh(full, rel);
    else if (entry.name.endsWith(".md")) {
      const fm = matter(fs.readFileSync(full, "utf8")).data;
      const zhBasename = entry.name.slice(0, -3);
      const zhFolder = base;
      const aliases: string[] = (fm.aliases || []).map((a: string) => a.toLowerCase());

      let permalink: string | null = fm.permalink || null;
      let enInfo: typeof enByBasename extends Map<string, infer V> ? V : never | undefined;

      // Try auto-match via aliases
      if (!permalink) {
        for (const alias of aliases) {
          const simple = alias.split("/").pop()!;
          if (enByBasename.has(alias)) { enInfo = enByBasename.get(alias)!; break; }
          if (enByBasename.has(simple)) { enInfo = enByBasename.get(simple)!; break; }
        }
        if (enInfo) permalink = enInfo.permalink;
      }

      // Try manual match
      if (!permalink && MANUAL_PERMALINK[rel]) {
        permalink = MANUAL_PERMALINK[rel];
        enInfo = enByPermalink.get(permalink);
      }

      if (permalink && enByPermalink.has(permalink)) {
        const en = enInfo || enByPermalink.get(permalink)!;
        matches.push({ zhRel: rel, zhBasename, zhFolder, permalink, enBasename: en.basename, enFolder: en.folder });
      } else {
        orphans.push(rel);
      }
    }
  }
}
walkZh(zhDir);

console.log(`Matched: ${matches.length}, Orphans: ${orphans.length}`);
console.log("Orphans (EN source deleted):", orphans);

// --- Generate filenames.txt ---

// Build folder mapping via majority vote (handles cases where one file has an
// unexpected zh folder, e.g. 迁移助手 is in 核心插件/ but its EN source is in Import notes/)
const folderVotes = new Map<string, Map<string, number>>(); // EN folder → (zh folder → count)
for (const m of matches) {
  if (!m.enFolder || !m.zhFolder || m.enFolder === m.zhFolder) continue;
  if (!folderVotes.has(m.enFolder)) folderVotes.set(m.enFolder, new Map());
  const votes = folderVotes.get(m.enFolder)!;
  votes.set(m.zhFolder, (votes.get(m.zhFolder) ?? 0) + 1);
}
const folderMap = new Map<string, string>();
for (const [enFolder, votes] of folderVotes) {
  const winner = [...votes.entries()].sort((a, b) => b[1] - a[1])[0][0];
  folderMap.set(enFolder, winner);
}

// Sort entries by permalink for readability
const sorted = [...matches].sort((a, b) => a.permalink.localeCompare(b.permalink));

let txt = "";
for (const m of sorted) {
  txt += `[file.${m.permalink}]\n`;
  txt += `original=${m.enBasename}\n`;
  txt += `translation=${m.zhBasename}\n`;
  txt += "\n";
}
for (const [enFolder, zhFolder] of [...folderMap.entries()].sort()) {
  txt += `[folder.${enFolder}]\n`;
  txt += `original=${enFolder}\n`;
  txt += `translation=${zhFolder}\n`;
  txt += "\n";
}

fs.writeFileSync(path.join(zhDir, "filenames.txt"), txt.trimEnd() + "\n", "utf8");
console.log(`\nWrote zh/filenames.txt (${matches.length} files, ${folderMap.size} folders)`);

// --- Add permalink + path alias + localized date to existing zh files ---
// The current zh file path (e.g. "助力 Obsidian/开发者") serves as the
// published URL in Obsidian Publish. After adding a permalink, the URL
// changes to the permalink value. Adding the old path as an alias tells
// Publish to redirect the old URL → new URL.
//
// We set `localized` to the zh file's last git commit date so that:
// - translate-locale skips files whose EN hasn't changed since then
// - --verify can detect which files are stale and apply diff/patch only
// - Only truly new stubs (no commit history) get full re-translation
// The "Initial sync" commit bulk-imported all zh files today, masking per-file history.
// We look up dates from the parent of that commit to get the real last-translation dates.
const INITIAL_SYNC = "1fb5c6ff"; // parent of "Initial sync" — last real zh history

function getLastCommitDate(absPath: string): string | null {
  try {
    const rel = path.relative(ROOT, absPath);
    const result = execSync(`git log -1 --format="%cs" ${INITIAL_SYNC} -- "${rel}"`, { cwd: ROOT }).toString().trim();
    return result || null;
  } catch {
    return null;
  }
}

let updated = 0;
for (const m of matches) {
  const absPath = path.join(zhDir, m.zhRel);
  const raw = fs.readFileSync(absPath, "utf8");
  const parsed = matter(raw);
  const localizedVal = parsed.data.localized instanceof Date
    ? parsed.data.localized.toISOString().slice(0, 10)
    : String(parsed.data.localized ?? "");
  if (parsed.data.permalink && localizedVal && localizedVal !== "2026-03-18") continue; // already fully migrated

  parsed.data.permalink = m.permalink;

  // Add current zh path (without .md) as alias for URL redirect
  const zhPathAlias = m.zhRel.replace(/\.md$/, "");
  const existingAliases: string[] = parsed.data.aliases || [];
  if (!existingAliases.includes(zhPathAlias)) {
    parsed.data.aliases = [...existingAliases, zhPathAlias];
  }

  // Set localized date only for files with actual translated content (Chinese characters).
  // Stubs created by sync-locale contain EN content — leave them as null so
  // translate-locale queues them for full translation.
  if (!localizedVal || localizedVal === "2026-03-18") {
    const hasTranslatedContent = /[\u4E00-\u9FFF\u3040-\u30FF\uAC00-\uD7AF]/.test(parsed.content);
    parsed.data.localized = hasTranslatedContent ? (getLastCommitDate(absPath) ?? null) : null;
  }

  const out = matter.stringify(parsed.content, parsed.data)
    .replace(/^localized: null$/m, "localized:")
    .replace(/^localized: '(\d{4}-\d{2}-\d{2})'$/m, "localized: $1");
  fs.writeFileSync(absPath, out, "utf8");
  updated++;
}
console.log(`Updated ${updated} zh files with permalink + path alias + localized date`);
