---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: Le Competenze Obsidian insegnano agli agenti AI come lavorare con il tuo vault e i formati di file di Obsidian.
---
I connettori permettono di collegare Obsidian a qualsiasi agente AI, inclusi Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode e [molti altri](https://agentskills.io/clients).

Ciò significa che i tuoi agenti possono imparare a:

- Scrivere note in [[Markdown stile Obsidian]], con [[Collegamenti interni|collegamenti wiki]], incorporamenti, callout e [[Proprietà|proprietà]].
- Creare e modificare file [[Introduzione a Base|Base]] e [[Lavagna|Canvas]].
- Cercare, leggere e gestire note nell'app in esecuzione con [[Obsidian CLI]].
- Sincronizzare e pubblicare vault senza l'app desktop usando [[Obsidian Headless]].

Le skill sono open source su [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installa

Puoi trovare Obsidian cercando nella lista dei plugin in Claude, ChatGPT, Dots, Cursor, Grok Bot, Hermes e Kiro. La maggior parte degli altri agenti può installare le skill inviando loro un collegamento a questa pagina.

### Claude

Aggiungi [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) dalla directory ufficiale dei plugin di Claude.

Per la CLI di Claude Code usa:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Per ottenere nuove skill in seguito, esegui `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Aggiungi [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) dalla directory dei plugin di ChatGPT. Il plugin funziona in ChatGPT, Codex e Dots.

### Antigravity

Nella CLI di Antigravity, esegui:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Apri [Obsidian per Grok Bot](https://x.ai/bot/plugin/88871845) e seleziona **Add to Grok Bot**.

### Muse

Chiedi a Muse di installare le skill da https://github.com/obsidianmd/obsidian-skills.

Muse viene eseguito nel cloud di Meta, quindi la skill `obsidian-cli` non funziona lì. Se usi Obsidian Headless in Muse, accedi e sincronizzi il tuo vault nel cloud di Meta.

### Cursor

Installa [Obsidian](https://cursor.com/marketplace/obsidian) dal Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode e altri agenti

Installa con [npx skills](https://github.com/vercel-labs/skills), che chiede in quali agenti installare:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Per installare manualmente, copia le cartelle in `plugins/obsidian/skills/` nella cartella delle skill del tuo agente, ad es. `~/.copilot/skills/` per GitHub Copilot.

## Skill incluse

| Skill               | Cosa fa                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Crea e modifica note in [[Markdown stile Obsidian]].                                                                          |
| `obsidian-bases`    | Crea e modifica [[Sintassi di Base|Base]] con viste, filtri, formule e riepiloghi.                                            |
| `json-canvas`       | Crea e modifica file [[Lavagna|Canvas]] usando il formato [JSON Canvas](https://jsoncanvas.org/).                             |
| `obsidian-cli`      | Interagisci con il tuo vault tramite [[Obsidian CLI]], incluso lo sviluppo di plugin e temi.                                  |
| `obsidian-headless` | Sincronizza e pubblica vault dalla riga di comando con [[Obsidian Headless]].                                                 |
| `defuddle`          | Estrai Markdown pulito da pagine web usando [Defuddle](https://github.com/kepano/defuddle).                                   |
| `knap`              | Renderizza modelli Markdown da dati JSON o CSV usando [Knap](https://github.com/obsidianmd/knap).                             |

## Requisiti

La skill `obsidian-cli` richiede l'app desktop Obsidian in esecuzione con [[Obsidian CLI#Installa Obsidian CLI|Obsidian CLI attivato]] e un agente in grado di eseguire comandi sul tuo computer.

Le skill Markdown, Base e Canvas descrivono solo formati di file, quindi funzionano in qualsiasi agente che può leggere e scrivere file nel tuo vault.

Defuddle, Knap e Obsidian Headless sono strumenti separati non inclusi nelle skill. Quando uno manca, la skill chiede conferma prima di installarlo da npm.

## Privacy

I connettori di Obsidian non inviano nulla autonomamente. Quando un agente li utilizza, le note che legge diventano parte della conversazione e vengono elaborate dal modello AI che utilizzi. Consulta l'informativa sulla privacy del tuo agente prima di indirizzarlo verso un vault con note sensibili.
