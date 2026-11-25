---
permalink: skills
cssclasses: null
description: Obsidian Skills insegnano agli agenti AI come lavorare con il tuo vault e i formati di file di Obsidian.
---
Obsidian Skills sono istruzioni che insegnano agli agenti AI come lavorare con Obsidian. Seguono il formato aperto [Agent Skills](https://agentskills.io/specification), quindi funzionano con qualsiasi agente che supporti le competenze, tra cui Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, Hermes Agent, OpenCode e [molti altri](https://agentskills.io/clients).

Con Obsidian Skills un agente può:

- Scrivere note in [[Markdown stile Obsidian]], con [[Collegamenti interni|wikilink]], incorporamenti, callout e [[Proprietà|proprietà]].
- Creare e modificare file [[Introduzione a Base|Base]] e [[Lavagna|Canvas]].
- Cercare, leggere e gestire le note nell'app in esecuzione con [[Obsidian CLI]].
- Sincronizzare e pubblicare vault dalla riga di comando con [[Obsidian Headless]].

Le competenze sono open source su [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installa

Obsidian è un plugin ufficiale per Claude, ChatGPT, Codex, Cursor, Grok Bot e Hermes Agent. Gli altri agenti installano le competenze da GitHub.

### ChatGPT e Codex

Aggiungi [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) dalla directory dei plugin di ChatGPT. Il plugin funziona sia in ChatGPT che in Codex.

### Cursor

Installa [Obsidian](https://cursor.com/marketplace/obsidian) dal Marketplace di Cursor.

### Grok Bot

Apri [Obsidian per Grok Bot](https://x.ai/bot/plugin/88871845) e seleziona **Aggiungi a Grok Bot**.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Per ottenere nuove competenze in seguito, esegui `claude plugin update obsidian@obsidian-skills`.

### Claude

Aggiungi [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) dalla directory dei plugin di Claude.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
```

### GitHub Copilot, OpenCode e altri agenti

Installa con [npx skills](https://github.com/vercel-labs/skills), che chiede in quali agenti installare:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Per installare manualmente, copia le cartelle in `plugins/obsidian/skills/` nella cartella delle competenze del tuo agente, ad es. `~/.copilot/skills/` per GitHub Copilot.

## Competenze incluse

| Competenza          | Cosa fa                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Crea e modifica note in [[Markdown stile Obsidian]].                                                                          |
| `obsidian-bases`    | Crea e modifica [[Sintassi di Base\|Base]] con viste, filtri, formule e riepiloghi.                                           |
| `json-canvas`       | Crea e modifica file [[Lavagna|Canvas]] utilizzando il formato [JSON Canvas](https://jsoncanvas.org/).                        |
| `obsidian-cli`      | Interagisci con il tuo vault tramite [[Obsidian CLI]], incluso lo sviluppo di plugin e temi.                                  |
| `obsidian-headless` | Sincronizza e pubblica vault dalla riga di comando con [[Obsidian Headless]].                                                 |
| `defuddle`          | Estrai Markdown pulito dalle pagine web usando [Defuddle](https://github.com/kepano/defuddle).                                |
| `knap`              | Renderizza modelli Markdown da dati JSON o CSV usando [Knap](https://github.com/obsidianmd/knap).                             |

## Requisiti

La competenza `obsidian-cli` richiede l'app desktop di Obsidian in esecuzione con [[Obsidian CLI#Installa Obsidian CLI|Obsidian CLI attivato]] e un agente che possa eseguire comandi sul tuo computer.

Le competenze Markdown, Base e Canvas descrivono solo formati di file, quindi funzionano in qualsiasi agente che possa leggere e scrivere file nel tuo vault.

Defuddle, Knap e Obsidian Headless sono strumenti separati non inclusi nelle competenze. Quando uno di essi manca, la competenza chiede conferma prima di installarlo da npm.

## Privacy

Obsidian Skills non inviano nulla autonomamente. Quando un agente le utilizza, le note che legge diventano parte della conversazione e vengono elaborate dal modello AI che utilizzi. Consulta l'informativa sulla privacy del tuo agente prima di indirizzarlo verso un vault con note sensibili.
