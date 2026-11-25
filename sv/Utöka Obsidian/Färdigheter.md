---
permalink: skills
cssclasses: null
description: Obsidian Skills lär AI-agenter hur de ska arbeta med ditt valv och Obsidians filformat.
---
Obsidian Skills är instruktioner som lär AI-agenter hur man arbetar med Obsidian. De följer det öppna [Agent Skills](https://agentskills.io/specification)-formatet, så de fungerar med alla agenter som stöder skills, inklusive Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, Hermes Agent, OpenCode och [många fler](https://agentskills.io/clients).

Med Obsidian Skills kan en agent:

- Skriva anteckningar i [[Obsidian Flavored Markdown]], med [[Interna länkar|wikilänkar]], inbäddningar, notiser och [[Egenskaper|egenskaper]].
- Skapa och redigera [[Introduktion till baser|Bases]]- och [[Canvas|Canvas]]-filer.
- Söka, läsa och hantera anteckningar i den körande appen med [[Obsidian CLI]].
- Synkronisera och publicera valv utan skrivbordsappen med [[Obsidian Headless]].

Skills-paketet har öppen källkod på [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installera

Obsidian är ett officiellt tillägg för Claude, ChatGPT, Codex, Cursor, Grok Bot och Hermes Agent. Andra agenter installerar skills från GitHub.

### ChatGPT och Codex

Lägg till [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) från ChatGPT:s tilläggskatalog. Tillägget fungerar i både ChatGPT och Codex.

### Cursor

Installera [Obsidian](https://cursor.com/marketplace/obsidian) från Cursor Marketplace.

### Grok Bot

Öppna [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) och välj **Add to Grok Bot**.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

För att hämta nya skills senare, kör `claude plugin update obsidian@obsidian-skills`.

### Claude

Lägg till [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) från Claudes tilläggskatalog.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
```

### GitHub Copilot, OpenCode och andra agenter

Installera med [npx skills](https://github.com/vercel-labs/skills), som frågar vilka agenter du vill installera till:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

För att installera manuellt, kopiera mapparna i `plugins/obsidian/skills/` till din agents skills-mapp, t.ex. `~/.copilot/skills/` för GitHub Copilot.

## Inkluderade skills

| Skill               | Vad den gör                                                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Skapa och redigera [[Obsidian Flavored Markdown]]-anteckningar.                                                               |
| `obsidian-bases`    | Skapa och redigera [[Baser-syntax|Bases]] med vyer, filter, formler och sammanfattningar.                                     |
| `json-canvas`       | Skapa och redigera [[Canvas]]-filer med [JSON Canvas](https://jsoncanvas.org/)-formatet.                                      |
| `obsidian-cli`      | Interagera med ditt valv via [[Obsidian CLI]], inklusive tilläggs- och temautveckling.                                        |
| `obsidian-headless` | Synkronisera och publicera valv från kommandoraden med [[Obsidian Headless]].                                                 |
| `defuddle`          | Extrahera ren Markdown från webbsidor med [Defuddle](https://github.com/kepano/defuddle).                                    |
| `knap`              | Rendera Markdown-mallar från JSON- eller CSV-data med [Knap](https://github.com/obsidianmd/knap).                            |

## Krav

Skillen `obsidian-cli` kräver att Obsidians skrivbordsapp körs med [[Obsidian CLI#Install Obsidian CLI|Obsidian CLI aktiverat]], samt en agent som kan köra kommandon på din dator.

Skills för Markdown, Bases och Canvas beskriver bara filformat, så de fungerar i alla agenter som kan läsa och skriva filer i ditt valv.

Defuddle, Knap och Obsidian Headless är separata verktyg som inte medföljer skills-paketet. När ett verktyg saknas frågar skillen innan den installerar det från npm.

## Integritet

Obsidian Skills skickar ingenting på egen hand. När en agent använder dem blir anteckningarna den läser en del av konversationen och bearbetas av den AI-modell du använder. Granska din agents integritetspolicy innan du pekar den mot ett valv med känsliga anteckningar.
