---
permalink: skills
cssclasses: null
description: Obsidian Skills învață agenții AI cum să lucreze cu seiful tău și cu formatele de fișiere Obsidian.
---
Obsidian Skills sunt instrucțiuni care învață agenții AI cum să lucreze cu Obsidian. Ele respectă formatul deschis [Agent Skills](https://agentskills.io/specification), astfel încât funcționează cu orice agent care suportă abilități, inclusiv Claude Code, Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes Agent, OpenCode și [mulți alții](https://agentskills.io/clients).

Cu Obsidian Skills, un agent poate:

- Scrie notițe în [[Markdown specific Obsidian]], cu [[Legături interne|linkuri wiki]], încorporări, explicații și [[Proprietăți|proprietăți]].
- Crea și edita fișiere [[Introducere în Baze|Baze]] și [[Canvas]].
- Căuta, citi și gestiona notițe în aplicația care rulează cu [[Obsidian CLI]].
- Sincroniza și publica seifuri fără aplicația desktop folosind [[Obsidian Headless]].

Abilitățile sunt open source la [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instalare

Obsidian este un modul oficial pentru Claude, ChatGPT, Dots, Cursor, Grok Bot și Hermes. Majoritatea celorlalți agenți pot instala abilitățile de pe GitHub.

### Claude

Adaugă [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) din directorul oficial de module Claude.

Pentru Claude Code CLI, folosește:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Pentru a obține abilități noi ulterior, rulează `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Adaugă [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) din directorul de module ChatGPT. Modulul funcționează în ChatGPT, Codex și Dots.

### Antigravity

În CLI-ul Antigravity, rulează:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Deschide [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) și selectează **Add to Grok Bot**.

### Cursor

Instalează [Obsidian](https://cursor.com/marketplace/obsidian) din Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### GitHub Copilot, OpenCode și alți agenți

Instalează cu [npx skills](https://github.com/vercel-labs/skills), care întreabă în ce agenți să instaleze:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Pentru a instala manual, copiază directoarele din `plugins/obsidian/skills/` în directorul de abilități al agentului tău, de ex. `~/.copilot/skills/` pentru GitHub Copilot.

## Abilități incluse

| Abilitate           | Ce face                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Creează și editează notițe în [[Markdown specific Obsidian]].                                                                 |
| `obsidian-bases`    | Creează și editează [[Sintaxă Baze|Baze]] cu vizualizări, filtre, formule și rezumate.                                        |
| `json-canvas`       | Creează și editează fișiere [[Canvas]] folosind formatul [JSON Canvas](https://jsoncanvas.org/).                               |
| `obsidian-cli`      | Interacționează cu seiful tău prin [[Obsidian CLI]], inclusiv dezvoltarea de module și teme.                                   |
| `obsidian-headless` | Sincronizează și publică seifuri din linia de comandă cu [[Obsidian Headless]].                                               |
| `defuddle`          | Extrage Markdown curat din pagini web folosind [Defuddle](https://github.com/kepano/defuddle).                                |
| `knap`              | Redă șabloane Markdown din date JSON sau CSV folosind [Knap](https://github.com/obsidianmd/knap).                             |

## Cerințe

Abilitatea `obsidian-cli` necesită ca aplicația desktop Obsidian să ruleze cu [[Obsidian CLI#Instalare Obsidian CLI|Obsidian CLI activat]], și un agent care poate rula comenzi pe computerul tău.

Abilitățile Markdown, Baze și Canvas descriu doar formate de fișiere, deci funcționează cu orice agent care poate citi și scrie fișiere în seiful tău.

Defuddle, Knap și Obsidian Headless sunt instrumente separate care nu sunt incluse în abilități. Când unul lipsește, abilitatea întreabă înainte de a-l instala din npm.

## Confidențialitate

Obsidian Skills nu trimit nimic de la sine. Când un agent le folosește, notițele pe care le citește devin parte din conversație și sunt procesate de modelul AI pe care îl utilizezi. Verifică politica de confidențialitate a agentului tău înainte de a-l direcționa spre un seif cu notițe sensibile.
