---
permalink: connectors
cssclasses: null
description: Obsidian Skills lär AI-agenter hur de ska arbeta med ditt valv och Obsidians filformat.
---
Connectors låter dig ansluta Obsidian till vilken AI-agent som helst, inklusive Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode och [många fler](https://agentskills.io/clients).

Det innebär att dina agenter kan lära sig att:

- Skriva anteckningar i [[Obsidian Flavored Markdown]], med [[Interna länkar|wikilänkar]], inbäddningar, notiser och [[Egenskaper|egenskaper]].
- Skapa och redigera [[Introduktion till baser|Bases]]- och [[Canvas]]-filer.
- Söka, läsa och hantera anteckningar i den körande appen med [[Obsidian CLI]].
- Synkronisera och publicera valv utan skrivbordsappen med [[Obsidian Headless]].

Färdigheterna är öppen källkod på [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installera

Du hittar Obsidian genom att söka i tilläggslistan i Claude, ChatGPT, Dots, Cursor, Grok Bot, Hermes och Kiro. De flesta andra agenter kan installera färdigheterna om du skickar dem en länk till denna sida.

### Claude

Lägg till [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) från den officiella Claude-tilläggskatalogen.

För Claude Code CLI, använd:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

För att hämta nya färdigheter senare, kör `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Lägg till [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) från ChatGPT-tilläggskatalogen. Tillägget fungerar i ChatGPT, Codex och Dots.

### Antigravity

I Antigravity CLI, kör:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Öppna [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) och välj **Add to Grok Bot**.

### Muse

Be Muse att installera färdigheterna från https://github.com/obsidianmd/obsidian-skills.

Muse körs i Metas moln, så färdigheten `obsidian-cli` fungerar inte där. Om du använder Obsidian Headless i Muse loggar du in och synkroniserar ditt valv i Metas moln.

### Cursor

Installera [Obsidian](https://cursor.com/marketplace/obsidian) från Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode och andra agenter

Installera med [npx skills](https://github.com/vercel-labs/skills), som frågar vilka agenter som ska installeras till:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

För att installera manuellt, kopiera mapparna i `plugins/obsidian/skills/` till din agents färdighetsmapp, t.ex. `~/.copilot/skills/` för GitHub Copilot.

## Inkluderade färdigheter

| Färdighet           | Vad den gör                                                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Skapa och redigera [[Obsidian Flavored Markdown]]-anteckningar.                                                               |
| `obsidian-bases`    | Skapa och redigera [[Baser-syntax\|Bases]] med vyer, filter, formler och sammanfattningar.                                    |
| `json-canvas`       | Skapa och redigera [[Canvas]]-filer med formatet [JSON Canvas](https://jsoncanvas.org/).                                      |
| `obsidian-cli`      | Interagera med ditt valv via [[Obsidian CLI]], inklusive tilläggs- och temautveckling.                                        |
| `obsidian-headless` | Synkronisera och publicera valv från kommandoraden med [[Obsidian Headless]].                                                 |
| `defuddle`          | Extrahera ren Markdown från webbsidor med [Defuddle](https://github.com/kepano/defuddle).                                    |
| `knap`              | Rendera Markdown-mallar från JSON- eller CSV-data med [Knap](https://github.com/obsidianmd/knap).                            |

## Krav

Färdigheten `obsidian-cli` kräver att Obsidian-skrivbordsappen körs med [[Obsidian CLI#Install Obsidian CLI|Obsidian CLI aktiverat]], och en agent som kan köra kommandon på din dator.

Färdigheterna för Markdown, Bases och Canvas beskriver bara filformat, så de fungerar i vilken agent som helst som kan läsa och skriva filer i ditt valv.

Defuddle, Knap och Obsidian Headless är separata verktyg som inte medföljer färdigheterna. När ett verktyg saknas frågar färdigheten innan den installerar det från npm.

## Integritet

Obsidian-connectors skickar ingenting på egen hand. När en agent använder dem blir anteckningarna den läser en del av konversationen och bearbetas av den AI-modell du använder. Granska din agents integritetspolicy innan du pekar den mot ett valv med känsliga anteckningar.
