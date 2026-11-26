---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: Connecteu Obsidian amb agents d'IA perquè puguin treballar amb el vostre magatzem i els formats de fitxer d'Obsidian.
---
Els connectors et permeten donar accés fàcilment als agents a Obsidian, mantenint la propietat total de les teves dades. Els connectors d'Obsidian estan disponibles per a aplicacions com Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode i [molts més](https://agentskills.io/clients).

Això vol dir que els teus agents poden aprendre a:

- Escriure notes en [[Obsidian Flavored Markdown]], amb [[Enllaços interns|wikilinks]], incrustacions, blocs destacats i [[Propietats|propietats]].
- Crear i editar fitxers de [[Introducció a Bases|Bases]] i [[Canvas|Canvas]].
- Cercar, llegir i gestionar notes a l'aplicació en execució amb [[Obsidian CLI]].
- Sincronitzar i publicar cambres fortes sense l'aplicació d'escriptori amb [[Obsidian Headless]].

Els connectors d'Obsidian i les habilitats de codi obert estan disponibles a [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instal·lar

Pots trobar els connectors d'Obsidian cercant al marketplace o directori de connectors de l'aplicació del teu agent. També pots enviar al teu agent un enllaç a aquesta pàgina.

### Claude

Afegeix [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) des del directori oficial de connectors de Claude.

Per al CLI de Claude Code utilitza:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Per obtenir noves habilitats més endavant, executa `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Afegeix [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) des del directori de connectors de ChatGPT. El connector funciona a ChatGPT, Codex i Dots.

### Antigravity

Al CLI d'Antigravity, executa:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Obre [Obsidian per a Grok Bot](https://x.ai/bot/plugin/88871845) i selecciona **Afegir a Grok Bot**.

### Muse

Demana a Muse que instal·li les habilitats des de https://github.com/obsidianmd/obsidian-skills.

Muse s'executa al núvol de Meta, de manera que l'habilitat `obsidian-cli` no funciona allà. Si utilitzes Obsidian Headless a Muse, inicies la sessió i sincronitzes la teva cambra forta al núvol de Meta.

### Cursor

Instal·la [Obsidian](https://cursor.com/marketplace/obsidian) des del Marketplace de Cursor.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode i altres agents

Instal·la amb [npx skills](https://github.com/vercel-labs/skills), que et pregunta a quins agents vols instal·lar-ho:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Per instal·lar manualment, copia les carpetes de `plugins/obsidian/skills/` a la carpeta d'habilitats del teu agent, p. ex. `~/.copilot/skills/` per a GitHub Copilot.

## Habilitats incloses

| Habilitat           | Què fa                                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Crear i editar notes en [[Obsidian Flavored Markdown]].                                                                       |
| `obsidian-bases`    | Crear i editar [[Sintaxi de Bases\|Bases]] amb vistes, filtres, fórmules i resums.                                            |
| `json-canvas`       | Crear i editar fitxers [[Canvas]] amb el format [JSON Canvas](https://jsoncanvas.org/).                                       |
| `obsidian-cli`      | Interactuar amb la teva cambra forta a través d'[[Obsidian CLI]], incloent-hi el desenvolupament de connectors i temes.       |
| `obsidian-headless` | Sincronitzar i publicar cambres fortes des de la línia d'ordres amb [[Obsidian Headless]].                                    |
| `defuddle`          | Extreure Markdown net de pàgines web amb [Defuddle](https://github.com/kepano/defuddle).                                     |
| `knap`              | Renderitzar plantilles Markdown a partir de dades JSON o CSV amb [Knap](https://github.com/obsidianmd/knap).                 |

## Requisits

L'habilitat `obsidian-cli` necessita l'aplicació d'escriptori d'Obsidian en execució amb [[Obsidian CLI#Instal·lar Obsidian CLI|Obsidian CLI activat]], i un agent que pugui executar ordres al teu ordinador.

Les habilitats de Markdown, Bases i Canvas només descriuen formats de fitxer, de manera que funcionen amb qualsevol agent que pugui llegir i escriure fitxers a la teva cambra forta.

Defuddle, Knap i Obsidian Headless són eines separades que no estan incloses amb les habilitats. Quan en falta una, l'habilitat demana permís abans d'instal·lar-la des de npm.

## Privacitat

Els connectors d'Obsidian no envien res per si sols. Quan un agent els utilitza, les notes que llegeix passen a formar part de la conversa i són processades pel model d'IA que facis servir. Revisa la política de privacitat del teu agent abans d'apuntar-lo a una cambra forta amb notes sensibles.
