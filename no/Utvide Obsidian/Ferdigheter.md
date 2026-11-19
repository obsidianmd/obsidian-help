---
permalink: skills
cssclasses: null
description: Obsidian Skills lærer AI-agenter hvordan de kan jobbe med hvelvet ditt og Obsidians filformater.
---
Obsidian Skills er instruksjoner som lærer AI-agenter hvordan de skal jobbe med Obsidian. De følger det åpne [Agent Skills](https://agentskills.io/specification)-formatet, slik at de fungerer med enhver agent som støtter ferdigheter, inkludert Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, OpenCode, og [mange flere](https://agentskills.io/clients).

Med Obsidian Skills kan en agent:

- Skrive notater i [[Obsidian Flavored Markdown]], med [[Interne lenker|wiki-lenker]], innebygginger, uthevede blokker og [[Egenskaper|egenskaper]].
- Opprette og redigere [[Introduksjon til Bases|Bases]]- og [[Canvas|Canvas]]-filer.
- Søke, lese og administrere notater i den kjørende appen med [[Obsidian CLI]].
- Synkronisere og publisere hvelv uten skrivebordsappen ved hjelp av [[Obsidian Headless]].

Ferdighetene er åpen kildekode på [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installer

Obsidian er en offisiell utvidelse for ChatGPT, Codex, Cursor og Grok Bot. Andre agenter installerer ferdighetene fra GitHub.

### ChatGPT og Codex

Legg til [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) fra ChatGPT-utvidelseskatalogen. Utvidelsen fungerer i både ChatGPT og Codex.

### Cursor

Installer [Obsidian](https://cursor.com/marketplace/obsidian) fra Cursor Marketplace.

### Grok Bot

Åpne [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) og velg **Legg til i Grok Bot**.

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

For å hente nye ferdigheter senere, kjør `claude plugin update obsidian@obsidian-skills`.

### Claude

Claude laster opp hver ferdighet som en ZIP-fil, så legg kun til ferdighetene du trenger:

1. Last ned [obsidian-skills](https://github.com/obsidianmd/obsidian-skills/archive/refs/heads/main.zip) og pakk den ut.
2. I `plugins/obsidian/skills/`, komprimer mappen for hver ferdighet du ønsker til en ZIP-fil, f.eks. `obsidian-markdown.zip`.
3. I Claude, gå til **Tilpass** → **Ferdigheter**, velg **+** → **Opprett ferdighet** → **Last opp en ferdighet**, og velg ZIP-filen.

Se [Bruke ferdigheter i Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) for hvilke planer som støtter ferdigheter.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
```

### GitHub Copilot, OpenCode og andre agenter

Installer med [npx skills](https://github.com/vercel-labs/skills), som spør hvilke agenter det skal installeres i:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

For å installere manuelt, kopier mappene i `plugins/obsidian/skills/` til agentens ferdighetsmappe, f.eks. `~/.copilot/skills/` for GitHub Copilot.

## Inkluderte ferdigheter

| Ferdighet           | Hva den gjør                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Opprett og rediger [[Obsidian Flavored Markdown]]-notater.                                                                    |
| `obsidian-bases`    | Opprett og rediger [[Bases-syntaks|Bases]] med visninger, filtre, formler og sammendrag.                                      |
| `json-canvas`       | Opprett og rediger [[Canvas]]-filer ved hjelp av [JSON Canvas](https://jsoncanvas.org/)-formatet.                             |
| `obsidian-cli`      | Samhandle med hvelvet ditt gjennom [[Obsidian CLI]], inkludert utvidelse- og temautvikling.                                    |
| `obsidian-headless` | Synkroniser og publiser hvelv fra kommandolinjen med [[Obsidian Headless]].                                                   |
| `defuddle`          | Trekk ut ren Markdown fra nettsider ved hjelp av [Defuddle](https://github.com/kepano/defuddle).                              |
| `knap`              | Generer Markdown-maler fra JSON- eller CSV-data ved hjelp av [Knap](https://github.com/obsidianmd/knap).                      |

## Krav

Ferdigheten `obsidian-cli` krever at Obsidian-skrivebordsappen kjører med [[Obsidian CLI#Installer Obsidian CLI|Obsidian CLI slått på]], og en agent som kan kjøre kommandoer på datamaskinen din.

Markdown-, Bases- og Canvas-ferdighetene beskriver kun filformater, så de fungerer i enhver agent som kan lese og skrive filer i hvelvet ditt.

Defuddle, Knap og Obsidian Headless er separate verktøy som ikke er inkludert med ferdighetene. Når et verktøy mangler, spør ferdigheten før den installerer det fra npm.

## Personvern

Obsidian Skills sender ingenting på egenhånd. Når en agent bruker dem, blir notatene den leser en del av samtalen og behandles av AI-modellen du bruker. Gjennomgå agentens personvernregler før du peker den mot et hvelv med sensitive notater.
