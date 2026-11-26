---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: 'Verbind Obsidian met AI-agenten, zodat ze met je kluis en Obsidian-bestandsformaten kunnen werken.'
---
Connectors stellen je in staat om je agents eenvoudig toegang te geven tot Obsidian, terwijl je volledig eigenaar blijft van je gegevens. Obsidian Connectors zijn beschikbaar voor apps waaronder Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode en [nog veel meer](https://agentskills.io/clients).

Dat betekent dat je agents kunnen leren om:

- Notities te schrijven in [[Obsidian Flavored Markdown]], met [[Interne koppelingen|wiki-links]], insluitingen, infoblokken en [[Eigenschappen|eigenschappen]].
- [[Introductie tot Bases|Bases]]- en [[Doek|Canvas]]-bestanden te maken en te bewerken.
- Notities te zoeken, lezen en beheren in de draaiende app met [[Obsidian CLI]].
- Kluizen te synchroniseren en publiceren zonder de desktop-app via [[Obsidian Headless]].

De vaardigheden zijn open source op [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installeren

Je vindt Obsidian door te zoeken in de plug-inslijst van Claude, ChatGPT, Dots, Cursor, Grok Bot, Hermes en Kiro. De meeste andere agents kunnen de vaardigheden installeren als je ze een link naar deze pagina stuurt.

### Claude

Voeg [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) toe vanuit het officiële Claude plug-inoverzicht.

Voor de Claude Code CLI gebruik je:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Om later nieuwe vaardigheden te krijgen, voer je `claude plugin update obsidian@obsidian-skills` uit.

### ChatGPT

Voeg [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) toe vanuit het ChatGPT plug-inoverzicht. De plug-in werkt in ChatGPT, Codex en Dots.

### Antigravity

Voer in de Antigravity CLI het volgende uit:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Open [Obsidian voor Grok Bot](https://x.ai/bot/plugin/88871845) en selecteer **Add to Grok Bot**.

### Muse

Vraag Muse om de vaardigheden te installeren vanaf https://github.com/obsidianmd/obsidian-skills.

Muse draait in de cloud van Meta, dus de `obsidian-cli`-vaardigheid werkt daar niet. Als je Obsidian Headless in Muse gebruikt, log je in en synchroniseer je je kluis in de cloud van Meta.

### Cursor

Installeer [Obsidian](https://cursor.com/marketplace/obsidian) vanuit de Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode en andere agents

Installeer met [npx skills](https://github.com/vercel-labs/skills), dat vraagt bij welke agents je wilt installeren:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Om handmatig te installeren, kopieer je de mappen in `plugins/obsidian/skills/` naar de vaardighedenmap van je agent, bijv. `~/.copilot/skills/` voor GitHub Copilot.

## Inbegrepen vaardigheden

| Vaardigheid         | Wat het doet                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | [[Obsidian Flavored Markdown]]-notities aanmaken en bewerken.                                                                 |
| `obsidian-bases`    | [[Bases-syntaxis|Bases]] aanmaken en bewerken met weergaven, filters, formules en samenvattingen.                              |
| `json-canvas`       | [[Doek|Canvas]]-bestanden aanmaken en bewerken met het [JSON Canvas](https://jsoncanvas.org/)-formaat.                        |
| `obsidian-cli`      | Communiceren met je kluis via [[Obsidian CLI]], inclusief plug-in- en thema-ontwikkeling.                                      |
| `obsidian-headless` | Kluizen synchroniseren en publiceren vanaf de opdrachtregel met [[Obsidian Headless]].                                         |
| `defuddle`          | Schone Markdown uit webpagina's extraheren met [Defuddle](https://github.com/kepano/defuddle).                                |
| `knap`              | Markdown-sjablonen renderen vanuit JSON- of CSV-gegevens met [Knap](https://github.com/obsidianmd/knap).                      |

## Vereisten

De `obsidian-cli`-vaardigheid vereist dat de Obsidian desktop-app draait met [[Obsidian CLI#Obsidian CLI installeren|Obsidian CLI ingeschakeld]], en een agent die opdrachten op je computer kan uitvoeren.

De Markdown-, Bases- en Canvas-vaardigheden beschrijven alleen bestandsformaten, dus ze werken in elke agent die bestanden in je kluis kan lezen en schrijven.

Defuddle, Knap en Obsidian Headless zijn aparte tools die niet bij de vaardigheden zijn meegeleverd. Wanneer er een ontbreekt, vraagt de vaardigheid toestemming voordat deze via npm wordt geïnstalleerd.

## Privacy

Obsidian-connectors versturen zelf niets. Wanneer een agent ze gebruikt, worden de notities die het leest onderdeel van het gesprek en worden ze verwerkt door het AI-model dat je gebruikt. Bekijk het privacybeleid van je agent voordat je het naar een kluis met gevoelige notities verwijst.
