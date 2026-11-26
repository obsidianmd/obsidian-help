---
description: 'Connect Obsidian to AI agents so they can work with your vault and Obsidian file formats.'
permalink: connectors
cover: "Attachments/Connectors cover.jpg"
aliases:
  - Obsidian Skills
  - Agent Skills
  - skills
  - /skills
cssclasses:
---
Connectors let you easily give your agents access to Obsidian, while keeping total ownership of your data. Obsidian Connectors are available for apps including Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode, and [many more](https://agentskills.io/clients).

That means your agents can learn how to:

- Write notes in [[Obsidian Flavored Markdown]], with [[Internal links|wikilinks]], embeds, callouts, and [[Properties|properties]].
- Create and edit [[Introduction to Bases|Bases]] and [[Canvas|Canvas]] files.
- Search, read, and manage notes in the running app with [[Obsidian CLI]].
- Sync and publish vaults without the desktop app using [[Obsidian Headless]].

The skills are open source at [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Install

You find Obsidian by searching in the plugins list in Claude, ChatGPT, Dots, Cursor, Grok Bot, Hermes, and Kiro. Most other agents can install the skills if you send them a link to this page.

### Claude

Add [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) from the official Claude plugin directory.

For the Claude Code CLI use:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

To get new skills later, run `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Add [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) from the ChatGPT plugin directory. The plugin works in ChatGPT, Codex, and Dots.

### Antigravity

In the Antigravity CLI, run:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Open [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) and select **Add to Grok Bot**.

### Muse

Ask Muse to install the skills from https://github.com/obsidianmd/obsidian-skills.

Muse runs in Meta's cloud, so the `obsidian-cli` skill doesn't work there. If you use Obsidian Headless in Muse, you sign in and sync your vault in Meta's cloud.

### Cursor

Install [Obsidian](https://cursor.com/marketplace/obsidian) from the Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode, and other agents

Install with [npx skills](https://github.com/vercel-labs/skills), which asks which agents to install into:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

To install by hand, copy the folders in `plugins/obsidian/skills/` into your agent's skills folder, e.g. `~/.copilot/skills/` for GitHub Copilot.

## Included skills

| Skill               | What it does                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Create and edit [[Obsidian Flavored Markdown]] notes.                                                                         |
| `obsidian-bases`    | Create and edit [[Bases syntax\|Bases]] with views, filters, formulas, and summaries.                                         |
| `json-canvas`       | Create and edit [[Canvas]] files using the [JSON Canvas](https://jsoncanvas.org/) format.                                     |
| `obsidian-cli`      | Interact with your vault through [[Obsidian CLI]], including plugin and theme development.                                    |
| `obsidian-headless` | Sync and publish vaults from the command line with [[Obsidian Headless]].                                                     |
| `defuddle`          | Extract clean Markdown from web pages using [Defuddle](https://github.com/kepano/defuddle).                                   |
| `knap`              | Render Markdown templates from JSON or CSV data using [Knap](https://github.com/obsidianmd/knap).                             |

## Requirements

The `obsidian-cli` skill needs the Obsidian desktop app running with [[Obsidian CLI#Install Obsidian CLI|Obsidian CLI turned on]], and an agent that can run commands on your computer.

The Markdown, Bases, and Canvas skills only describe file formats, so they work in any agent that can read and write files in your vault.

Defuddle, Knap, and Obsidian Headless are separate tools that aren't bundled with the skills. When one is missing, the skill asks before installing it from npm.

## Privacy

Obsidian connectors don't send anything by themselves. When an agent uses them, the notes it reads become part of the conversation and are processed by the AI model you use. Review your agent's privacy policy before you point it at a vault with sensitive notes.
