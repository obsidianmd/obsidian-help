---
permalink: skills
cssclasses: null
description: 'Obsidian Skills lærer AI-agenter, hvordan de skal arbejde med din vault og Obsidians filformater.'
---
Obsidian Skills er instruktioner, der lærer AI-agenter at arbejde med Obsidian. De følger det åbne [Agent Skills](https://agentskills.io/specification)-format, så de fungerer med enhver agent, der understøtter færdigheder, herunder Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, Hermes Agent, OpenCode og [mange flere](https://agentskills.io/clients).

Med Obsidian Skills kan en agent:

- Skrive noter i [[Obsidian Flavored Markdown]] med [[Interne links|wikilinks]], indlejringer, bobler og [[Egenskaber|egenskaber]].
- Oprette og redigere [[Introduktion til Baser|Baser]] og [[Canvas]]-filer.
- Søge, læse og administrere noter i den kørende applikation med [[Obsidian CLI]].
- Synkronisere og udgive bokse uden desktop-applikationen ved hjælp af [[Obsidian Headless]].

Færdighederne er open source på [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installer

Obsidian er et officielt plugin til Claude, ChatGPT, Codex, Cursor, Grok Bot og Hermes Agent. Andre agenter installerer færdighederne fra GitHub.

### ChatGPT og Codex

Tilføj [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) fra ChatGPTs plugin-bibliotek. Pluginet fungerer i både ChatGPT og Codex.

### Cursor

Installer [Obsidian](https://cursor.com/marketplace/obsidian) fra Cursor Marketplace.

### Grok Bot

Åbn [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) og vælg **Add to Grok Bot**.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

For at hente nye færdigheder senere, kør `claude plugin update obsidian@obsidian-skills`.

### Claude

Tilføj [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) fra Claudes plugin-bibliotek.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
```

### GitHub Copilot, OpenCode og andre agenter

Installer med [npx skills](https://github.com/vercel-labs/skills), som spørger, hvilke agenter der skal installeres til:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

For at installere manuelt kopiér mapperne i `plugins/obsidian/skills/` til din agents færdighedsmappe, f.eks. `~/.copilot/skills/` for GitHub Copilot.

## Inkluderede færdigheder

| Færdighed           | Hvad den gør                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Opret og rediger [[Obsidian Flavored Markdown]]-noter.                                                                        |
| `obsidian-bases`    | Opret og rediger [[Baser-syntaks\|Baser]] med visninger, filtre, formler og opsummeringer.                                    |
| `json-canvas`       | Opret og rediger [[Canvas]]-filer ved hjælp af [JSON Canvas](https://jsoncanvas.org/)-formatet.                               |
| `obsidian-cli`      | Interagér med din boks gennem [[Obsidian CLI]], herunder plugin- og temaudvikling.                                            |
| `obsidian-headless` | Synkroniser og udgiv bokse fra kommandolinjen med [[Obsidian Headless]].                                                      |
| `defuddle`          | Udtræk ren Markdown fra websider ved hjælp af [Defuddle](https://github.com/kepano/defuddle).                                 |
| `knap`              | Rendér Markdown-skabeloner fra JSON- eller CSV-data ved hjælp af [Knap](https://github.com/obsidianmd/knap).                  |

## Krav

Færdigheden `obsidian-cli` kræver, at Obsidian desktop-applikationen kører med [[Obsidian CLI#Installer Obsidian CLI|Obsidian CLI slået til]], og en agent, der kan køre kommandoer på din computer.

Markdown-, Baser- og Canvas-færdighederne beskriver kun filformater, så de fungerer i enhver agent, der kan læse og skrive filer i din boks.

Defuddle, Knap og Obsidian Headless er separate værktøjer, der ikke er inkluderet med færdighederne. Når et værktøj mangler, spørger færdigheden, før den installerer det fra npm.

## Privatliv

Obsidian Skills sender ikke noget af sig selv. Når en agent bruger dem, bliver de noter, den læser, en del af samtalen og behandles af den AI-model, du bruger. Gennemgå din agents privatlivspolitik, før du peger den mod en boks med følsomme noter.
