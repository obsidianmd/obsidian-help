---
permalink: skills
cssclasses: null
description: Obsidian Skills leren AI-agenten hoe ze met je kluis en Obsidian-bestandsformaten kunnen werken.
---
Obsidian Skills zijn instructies die AI-agents leren hoe ze met Obsidian kunnen werken. Ze volgen het open [Agent Skills](https://agentskills.io/specification)-formaat, waardoor ze werken met elke agent die vaardigheden ondersteunt, waaronder Claude Code, Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes Agent, OpenCode, en [nog veel meer](https://agentskills.io/clients).

Met Obsidian Skills kan een agent:

- Notities schrijven in [[Obsidian Flavored Markdown]], met [[Interne koppelingen|wiki-links]], insluitingen, infoblokken en [[Eigenschappen|eigenschappen]].
- [[Introductie tot Bases|Bases]]- en [[Doek|Canvas]]-bestanden aanmaken en bewerken.
- Notities zoeken, lezen en beheren in de draaiende app met [[Obsidian CLI]].
- Kluizen synchroniseren en publiceren zonder de desktop-app via [[Obsidian Headless]].

De vaardigheden zijn open source op [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installeren

Obsidian is een officiële plug-in voor Claude, ChatGPT, Dots, Cursor, Grok Bot en Hermes. De meeste andere agents kunnen de vaardigheden vanuit GitHub installeren.

### Claude

Voeg [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) toe vanuit de officiële Claude-plug-inlijst.

Voor de Claude Code CLI gebruik je:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Om later nieuwe vaardigheden op te halen, voer je `claude plugin update obsidian@obsidian-skills` uit.

### ChatGPT

Voeg [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) toe vanuit de ChatGPT-plug-inlijst. De plug-in werkt in ChatGPT, Codex en Dots.

### Antigravity

Voer in de Antigravity CLI het volgende uit:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Open [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) en selecteer **Add to Grok Bot**.

### Cursor

Installeer [Obsidian](https://cursor.com/marketplace/obsidian) vanuit de Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### GitHub Copilot, OpenCode en andere agents

Installeer met [npx skills](https://github.com/vercel-labs/skills), dat vraagt in welke agents je wilt installeren:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Om handmatig te installeren, kopieer je de mappen in `plugins/obsidian/skills/` naar de vaardighedenmap van je agent, bijv. `~/.copilot/skills/` voor GitHub Copilot.

## Meegeleverde vaardigheden

| Vaardigheid         | Wat het doet                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Notities aanmaken en bewerken in [[Obsidian Flavored Markdown]].                                                              |
| `obsidian-bases`    | [[Bases-syntaxis|Bases]] aanmaken en bewerken met weergaven, filters, formules en samenvattingen.                              |
| `json-canvas`       | [[Doek|Canvas]]-bestanden aanmaken en bewerken met het [JSON Canvas](https://jsoncanvas.org/)-formaat.                        |
| `obsidian-cli`      | Interactie met je kluis via [[Obsidian CLI]], inclusief plug-in- en thema-ontwikkeling.                                       |
| `obsidian-headless` | Kluizen synchroniseren en publiceren vanaf de opdrachtregel met [[Obsidian Headless]].                                        |
| `defuddle`          | Schone Markdown extraheren uit webpagina's met [Defuddle](https://github.com/kepano/defuddle).                                |
| `knap`              | Markdown-sjablonen renderen vanuit JSON- of CSV-gegevens met [Knap](https://github.com/obsidianmd/knap).                      |

## Vereisten

De `obsidian-cli`-vaardigheid vereist dat de Obsidian desktop-app draait met [[Obsidian CLI#Obsidian CLI installeren|Obsidian CLI ingeschakeld]], en een agent die opdrachten op je computer kan uitvoeren.

De Markdown-, Bases- en Canvas-vaardigheden beschrijven alleen bestandsformaten, dus ze werken in elke agent die bestanden in je kluis kan lezen en schrijven.

Defuddle, Knap en Obsidian Headless zijn aparte tools die niet bij de vaardigheden worden meegeleverd. Wanneer er een ontbreekt, vraagt de vaardigheid om toestemming voordat deze via npm wordt geïnstalleerd.

## Privacy

Obsidian Skills versturen zelf niets. Wanneer een agent ze gebruikt, worden de notities die het leest onderdeel van het gesprek en worden ze verwerkt door het AI-model dat je gebruikt. Bekijk het privacybeleid van je agent voordat je het naar een kluis met gevoelige notities verwijst.
