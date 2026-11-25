---
permalink: skills
cssclasses: null
description: 'Obsidian Skills bringen KI-Agenten bei, wie sie mit deinem Vault und den Obsidian-Dateiformaten arbeiten können.'
---
Obsidian Skills sind Anweisungen, die KI-Agenten beibringen, wie sie mit Obsidian arbeiten können. Sie folgen dem offenen [Agent Skills](https://agentskills.io/specification)-Format und funktionieren daher mit jedem Agenten, der Skills unterstützt, darunter Claude Code, Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes Agent, Kiro, Muse, OpenCode und [viele mehr](https://agentskills.io/clients).

Mit Obsidian Skills kann ein Agent:

- Notizen in [[Obsidian Flavored Markdown]] schreiben, mit [[Interne Links|Wiki-Links]], Einbettungen, Hinweisblöcken und [[Eigenschaften|Eigenschaften]].
- [[Einführung in Bases|Bases]]- und [[Canvas|Canvas]]-Dateien erstellen und bearbeiten.
- Notizen in der laufenden App mit [[Obsidian CLI]] suchen, lesen und verwalten.
- Vaults ohne die Desktop-App mit [[Obsidian Headless]] synchronisieren und veröffentlichen.

Die Skills sind Open Source unter [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installieren

Obsidian ist ein offizielles Plugin für Claude, ChatGPT, Dots, Cursor, Grok Bot, Hermes und Kiro. Die meisten anderen Agenten können die Skills von GitHub installieren.

### Claude

Füge [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) aus dem offiziellen Claude-Plugin-Verzeichnis hinzu.

Für die Claude Code CLI verwende:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Um später neue Skills zu erhalten, führe `claude plugin update obsidian@obsidian-skills` aus.

### ChatGPT

Füge [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) aus dem ChatGPT-Plugin-Verzeichnis hinzu. Das Plugin funktioniert in ChatGPT, Codex und Dots.

### Antigravity

Führe in der Antigravity CLI folgenden Befehl aus:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Öffne [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) und wähle **Add to Grok Bot**.

### Muse

Bitte Muse, die Skills von https://github.com/obsidianmd/obsidian-skills zu installieren.

Muse läuft in Metas Cloud, daher funktioniert der `obsidian-cli`-Skill dort nicht. Wenn du Obsidian Headless in Muse verwendest, meldest du dich an und synchronisierst deinen Vault in Metas Cloud.

### Cursor

Installiere [Obsidian](https://cursor.com/marketplace/obsidian) aus dem Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode und andere Agenten

Installiere mit [npx skills](https://github.com/vercel-labs/skills), das fragt, in welche Agenten installiert werden soll:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Für eine manuelle Installation kopiere die Ordner in `plugins/obsidian/skills/` in den Skills-Ordner deines Agenten, z. B. `~/.copilot/skills/` für GitHub Copilot.

## Enthaltene Skills

| Skill               | Funktion                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Erstelle und bearbeite [[Obsidian Flavored Markdown]]-Notizen.                                                                |
| `obsidian-bases`    | Erstelle und bearbeite [[Bases-Syntax\|Bases]] mit Ansichten, Filtern, Formeln und Zusammenfassungen.                         |
| `json-canvas`       | Erstelle und bearbeite [[Canvas]]-Dateien im [JSON Canvas](https://jsoncanvas.org/)-Format.                                   |
| `obsidian-cli`      | Interagiere mit deinem Vault über [[Obsidian CLI]], einschließlich Erweiterungs- und Thema-Entwicklung.                       |
| `obsidian-headless` | Synchronisiere und veröffentliche Vaults über die Kommandozeile mit [[Obsidian Headless]].                                    |
| `defuddle`          | Extrahiere sauberes Markdown aus Webseiten mit [Defuddle](https://github.com/kepano/defuddle).                                |
| `knap`              | Rendere Markdown-Vorlagen aus JSON- oder CSV-Daten mit [Knap](https://github.com/obsidianmd/knap).                            |

## Voraussetzungen

Der `obsidian-cli`-Skill benötigt die laufende Obsidian-Desktop-App mit [[Obsidian CLI#Obsidian CLI installieren|aktivierter Obsidian CLI]] und einen Agenten, der Befehle auf deinem Computer ausführen kann.

Die Markdown-, Bases- und Canvas-Skills beschreiben nur Dateiformate und funktionieren daher in jedem Agenten, der Dateien in deinem Vault lesen und schreiben kann.

Defuddle, Knap und Obsidian Headless sind separate Tools, die nicht mit den Skills gebündelt sind. Wenn eines fehlt, fragt der Skill nach, bevor er es über npm installiert.

## Datenschutz

Obsidian Skills senden von sich aus nichts. Wenn ein Agent sie verwendet, werden die gelesenen Notizen Teil der Konversation und vom verwendeten KI-Modell verarbeitet. Lies die Datenschutzrichtlinie deines Agenten, bevor du ihn auf einen Vault mit sensiblen Notizen richtest.
