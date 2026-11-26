---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: 'Conectează Obsidian la agenți AI, ca să poată lucra cu seiful tău și cu formatele de fișiere Obsidian.'
---
Conectorii îți permit să oferi cu ușurință agenților acces la Obsidian, păstrând în același timp controlul total asupra datelor tale. Conectorii Obsidian sunt disponibili pentru aplicații precum Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode și [mulți alții](https://agentskills.io/clients).

Aceasta înseamnă că agenții tăi pot învăța cum să:

- Scrie notițe în [[Markdown specific Obsidian]], cu [[Legături interne|linkuri wiki]], încorporări, explicații și [[Proprietăți|proprietăți]].
- Creeze și editeze fișiere [[Introducere în Baze|Baze]] și [[Canvas]].
- Caute, citească și gestioneze notițe în aplicația activă cu [[Obsidian CLI]].
- Sincronizeze și publice seifuri fără aplicația desktop folosind [[Obsidian Headless]].

Conectorii Obsidian și abilitățile cu sursă liberă sunt disponibile la [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instalare

Poți găsi Conectorii Obsidian căutând în marketplace-ul sau directorul de module al aplicației agentului tău. De asemenea, poți trimite agentului tău un link către această pagină.

### Claude

Adaugă [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) din directorul oficial de module Claude.

Pentru CLI-ul Claude Code folosește:

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

Deschide [Obsidian pentru Grok Bot](https://x.ai/bot/plugin/88871845) și selectează **Add to Grok Bot**.

### Muse

Cere-i lui Muse să instaleze abilitățile de la https://github.com/obsidianmd/obsidian-skills.

Muse rulează în cloud-ul Meta, așa că abilitatea `obsidian-cli` nu funcționează acolo. Dacă folosești Obsidian Headless în Muse, te autentifici și sincronizezi seiful în cloud-ul Meta.

### Cursor

Instalează [Obsidian](https://cursor.com/marketplace/obsidian) din Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode și alți agenți

Instalează cu [npx skills](https://github.com/vercel-labs/skills), care te întreabă în ce agenți să instaleze:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Pentru a instala manual, copiază directoarele din `plugins/obsidian/skills/` în directorul de abilități al agentului tău, de ex. `~/.copilot/skills/` pentru GitHub Copilot.

## Abilități incluse

| Abilitate           | Ce face                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Creează și editează notițe în [[Markdown specific Obsidian]].                                                                 |
| `obsidian-bases`    | Creează și editează [[Sintaxă Baze|Baze]] cu vizualizări, filtre, formule și sumarizări.                                      |
| `json-canvas`       | Creează și editează fișiere [[Canvas]] folosind formatul [JSON Canvas](https://jsoncanvas.org/).                               |
| `obsidian-cli`      | Interacționează cu seiful tău prin [[Obsidian CLI]], inclusiv dezvoltarea de module și teme.                                   |
| `obsidian-headless` | Sincronizează și publică seifuri din linia de comandă cu [[Obsidian Headless]].                                               |
| `defuddle`          | Extrage Markdown curat din pagini web folosind [Defuddle](https://github.com/kepano/defuddle).                                |
| `knap`              | Redă șabloane Markdown din date JSON sau CSV folosind [Knap](https://github.com/obsidianmd/knap).                             |

## Cerințe

Abilitatea `obsidian-cli` necesită aplicația desktop Obsidian activă cu [[Obsidian CLI#Install Obsidian CLI|Obsidian CLI activat]] și un agent care poate rula comenzi pe computerul tău.

Abilitățile Markdown, Baze și Canvas descriu doar formate de fișiere, așa că funcționează în orice agent care poate citi și scrie fișiere în seiful tău.

Defuddle, Knap și Obsidian Headless sunt instrumente separate care nu sunt incluse în pachetul de abilități. Când unul lipsește, abilitatea întreabă înainte de a-l instala din npm.

## Confidențialitate

Conectorii Obsidian nu trimit nimic de la sine. Când un agent îi folosește, notițele pe care le citește devin parte din conversație și sunt procesate de modelul AI pe care îl utilizezi. Verifică politica de confidențialitate a agentului tău înainte de a-l direcționa către un seif cu notițe sensibile.
