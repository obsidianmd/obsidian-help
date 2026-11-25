---
description: Obsidian Skills teach AI agents how to work with your vault and Obsidian file formats.
permalink: skills
aliases:
  - Obsidian Skills
  - Agent Skills
cssclasses:
---
Obsidian Skills are instructions that teach AI agents how to work with Obsidian. They follow the open [Agent Skills](https://agentskills.io/specification) format, so they work with any agent that supports skills, including Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, Hermes Agent, OpenCode, and [many more](https://agentskills.io/clients).

With Obsidian Skills an agent can:

- Write notes in [[Obsidian Flavored Markdown]], with [[Internal links|wikilinks]], embeds, callouts, and [[Properties|properties]].
- Create and edit [[Introduction to Bases|Bases]] and [[Canvas|Canvas]] files.
- Search, read, and manage notes in the running app with [[Obsidian CLI]].
- Sync and publish vaults without the desktop app using [[Obsidian Headless]].

The skills are open source at [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Install

Obsidian is an official plugin for Claude, ChatGPT, Codex, Cursor, Grok Bot, and Hermes Agent. Other agents install the skills from GitHub.

### ChatGPT and Codex

Add [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) from the ChatGPT plugin directory. The plugin works in both ChatGPT and Codex.

### Cursor

Install [Obsidian](https://cursor.com/marketplace/obsidian) from the Cursor Marketplace.

### Grok Bot

Open [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) and select **Add to Grok Bot**.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

To get new skills later, run `claude plugin update obsidian@obsidian-skills`.

### Claude

Add [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) from the Claude plugin directory.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
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

Obsidian Skills don't send anything by themselves. When an agent uses them, the notes it reads become part of the conversation and are processed by the AI model you use. Review your agent's privacy policy before you point it at a vault with sensitive notes.
