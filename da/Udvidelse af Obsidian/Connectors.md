---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: 'Forbind Obsidian med AI-agenter, så de kan arbejde med din vault og Obsidians filformater.'
---
Connectors lader dig nemt give agenter adgang til Obsidian, samtidig med at du bevarer fuldt ejerskab over dine data. Obsidian Connectors er tilgængelige til applikationer som Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode og [mange flere](https://agentskills.io/clients).

Det betyder, at dine agenter kan lære at:

- Skrive noter i [[Obsidian Flavored Markdown]], med [[Interne links|wikilinks]], indlejringer, bobler og [[Egenskaber|egenskaber]].
- Oprette og redigere [[Introduktion til Baser|Baser]] og [[Canvas]]-filer.
- Søge, læse og administrere noter i den kørende applikation med [[Obsidian CLI]].
- Synkronisere og udgive bokse uden desktop-applikationen ved hjælp af [[Obsidian Headless]].

Obsidian Connectors og open source-færdigheder er tilgængelige på [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installer

Du finder Obsidian Connectors ved at søge i markedspladsen eller pluginbiblioteket i din agents applikation. Du kan også sende din agent et link til denne side.

### Claude

Tilføj [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) fra det officielle Claude-pluginbibliotek.

Til Claude Code CLI brug:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

For at få nye færdigheder senere, kør `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Tilføj [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) fra ChatGPT-pluginbiblioteket. Pluginet virker i ChatGPT, Codex og Dots.

### Antigravity

I Antigravity CLI, kør:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Åbn [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) og vælg **Add to Grok Bot**.

### Muse

Bed Muse om at installere færdighederne fra https://github.com/obsidianmd/obsidian-skills.

Muse kører i Metas cloud, så `obsidian-cli`-færdigheden virker ikke der. Hvis du bruger Obsidian Headless i Muse, logger du ind og synkroniserer din boks i Metas cloud.

### Cursor

Installer [Obsidian](https://cursor.com/marketplace/obsidian) fra Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode og andre agenter

Installer med [npx skills](https://github.com/vercel-labs/skills), som spørger, hvilke agenter der skal installeres til:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

For at installere manuelt, kopiér mapperne i `plugins/obsidian/skills/` til din agents færdighedsmappe, f.eks. `~/.copilot/skills/` for GitHub Copilot.

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

`obsidian-cli`-færdigheden kræver, at Obsidian desktop-applikationen kører med [[Obsidian CLI#Installér Obsidian CLI|Obsidian CLI slået til]], og en agent der kan køre kommandoer på din computer.

Markdown-, Baser- og Canvas-færdighederne beskriver kun filformater, så de virker i enhver agent, der kan læse og skrive filer i din boks.

Defuddle, Knap og Obsidian Headless er separate værktøjer, der ikke er bundtet med færdighederne. Når et mangler, spørger færdigheden, før den installerer det fra npm.

## Privatliv

Obsidian Connectors sender ikke noget af sig selv. Når en agent bruger dem, bliver de noter, den læser, en del af samtalen og behandles af den AI-model, du bruger. Gennemgå din agents privatlivspolitik, før du peger den mod en boks med følsomme noter.
