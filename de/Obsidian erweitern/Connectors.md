---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: 'Verbinde Obsidian mit KI-Agenten, damit sie mit deinem Vault und den Obsidian-Dateiformaten arbeiten können.'
---
Connectors ermöglichen es dir, Obsidian mit jedem AI-Agenten zu verbinden, darunter Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode und [viele mehr](https://agentskills.io/clients).

Das bedeutet, deine Agenten können lernen, wie man:

- Notizen in [[Obsidian Flavored Markdown]] schreibt, mit [[Interne Links|Wiki-Links]], Einbettungen, Hinweisblöcken und [[Eigenschaften|Eigenschaften]].
- [[Einführung in Bases|Basen]]- und [[Canvas|Canvas]]-Dateien erstellt und bearbeitet.
- Notizen in der laufenden App mit [[Obsidian CLI]] sucht, liest und verwaltet.
- Vaults ohne die Desktop-App mit [[Obsidian Headless]] synchronisiert und veröffentlicht.

Die Skills sind Open Source unter [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installieren

Du findest Obsidian, indem du in der Erweiterungsliste in Claude, ChatGPT, Dots, Cursor, Grok Bot, Hermes und Kiro suchst. Die meisten anderen Agenten können die Skills installieren, wenn du ihnen einen Link zu dieser Seite sendest.

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

Führe in der Antigravity CLI aus:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Öffne [Obsidian für Grok Bot](https://x.ai/bot/plugin/88871845) und wähle **Add to Grok Bot**.

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

Um manuell zu installieren, kopiere die Ordner in `plugins/obsidian/skills/` in den Skills-Ordner deines Agenten, z. B. `~/.copilot/skills/` für GitHub Copilot.

## Enthaltene Skills

| Skill               | Was er tut                                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | [[Obsidian Flavored Markdown]]-Notizen erstellen und bearbeiten.                                                              |
| `obsidian-bases`    | [[Bases-Syntax|Basen]] mit Ansichten, Filtern, Formeln und Zusammenfassungen erstellen und bearbeiten.                        |
| `json-canvas`       | [[Canvas]]-Dateien im [JSON Canvas](https://jsoncanvas.org/)-Format erstellen und bearbeiten.                                 |
| `obsidian-cli`      | Über [[Obsidian CLI]] mit deinem Vault interagieren, einschließlich Erweiterungs- und Themenentwicklung.                      |
| `obsidian-headless` | Vaults über die Kommandozeile mit [[Obsidian Headless]] synchronisieren und veröffentlichen.                                  |
| `defuddle`          | Sauberes Markdown aus Webseiten extrahieren mit [Defuddle](https://github.com/kepano/defuddle).                               |
| `knap`              | Markdown-Vorlagen aus JSON- oder CSV-Daten rendern mit [Knap](https://github.com/obsidianmd/knap).                            |

## Voraussetzungen

Der `obsidian-cli`-Skill benötigt die laufende Obsidian Desktop-App mit [[Obsidian CLI#Obsidian CLI installieren|aktiviertem Obsidian CLI]] und einen Agenten, der Befehle auf deinem Computer ausführen kann.

Die Markdown-, Bases- und Canvas-Skills beschreiben nur Dateiformate und funktionieren daher in jedem Agenten, der Dateien in deinem Vault lesen und schreiben kann.

Defuddle, Knap und Obsidian Headless sind separate Tools, die nicht mit den Skills gebündelt sind. Wenn eines fehlt, fragt der Skill nach, bevor er es von npm installiert.

## Datenschutz

Obsidian-Connectors senden von sich aus nichts. Wenn ein Agent sie verwendet, werden die gelesenen Notizen Teil der Konversation und vom verwendeten AI-Modell verarbeitet. Prüfe die Datenschutzrichtlinie deines Agenten, bevor du ihn auf einen Vault mit sensiblen Notizen richtest.
