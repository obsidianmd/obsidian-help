## Skills
A skill is a set of local instructions to follow that is stored in a `SKILL.md` file. Below is the list of skills that can be used. Each entry includes a name, description, and file path so you can open the source for full instructions when using a specific skill.

### Available skills
- obsidian-ko-style: Apply or review Obsidian Korean style guide for the `ko` locale, including voice, register, tone, terminology, and surface-specific rules. Use when editing, reviewing, or auditing Korean copy. (file: /obsidian-help/.claude/skills/obsidian-ko-style/SKILL.md)
- obsidian-localize-new: Create a new `obsidian-help` locale by syncing English source files, translating stubs, validating links and terminology, and preparing publish assets. Use when creating a brand-new locale. (file: /obsidian-help/.claude/skills/obsidian-localize-new/SKILL.md)
- obsidian-localize-update: Sync recent English source changes into an existing `obsidian-help` locale, translate new stubs or flagged pages, and validate the locale. Use when updating an existing locale. (file: /obsidian-help/.claude/skills/obsidian-localize-update/SKILL.md)
- obsidian-publish-all: Publish all locale sites for `obsidian-help` using the repo’s publish workflow. Use when the user wants to publish one or more locales. (file: /obsidian-help/.claude/skills/obsidian-publish-all/SKILL.md)

### How to use skills
- Discovery: The list above is the skills available in this session (name + description + file path). Skill bodies live on disk at the listed paths.
- Trigger rules: If the user names a skill (with `$SkillName` or plain text) OR the task clearly matches a skill's description shown above, you must use that skill for that turn. Multiple mentions mean use them all. Do not carry skills across turns unless re-mentioned.
- Missing/blocked: If a named skill isn't in the list or the path can't be read, say so briefly and continue with the best fallback.
- How to use a skill (progressive disclosure):
  1. After deciding to use a skill, open its `SKILL.md`. Read only enough to follow the workflow.
  2. When `SKILL.md` references relative paths (e.g., `scripts/foo.py`), resolve them relative to the skill directory listed above first, and only consider other paths if needed.
  3. If `SKILL.md` points to extra folders such as `references/`, load only the specific files needed for the request; don't bulk-load everything.
  4. If `scripts/` exist, prefer running or patching them instead of retyping large code blocks.
  5. If `assets/` or templates exist, reuse them instead of recreating from scratch.
- Coordination and sequencing:
  - If multiple skills apply, choose the minimal set that covers the request and state the order you'll use them.
  - Announce which skill(s) you're using and why (one short line). If you skip an obvious skill, say why.
- Context hygiene:
  - Keep context small: summarize long sections instead of pasting them; only load extra files when needed.
  - Avoid deep reference-chasing: prefer opening only files directly linked from `SKILL.md` unless you're blocked.
  - When variants exist (frameworks, providers, domains), pick only the relevant reference file(s) and note that choice.
- Safety and fallback: If a skill can't be applied cleanly (missing files, unclear instructions), state the issue, pick the next-best approach, and continue.
