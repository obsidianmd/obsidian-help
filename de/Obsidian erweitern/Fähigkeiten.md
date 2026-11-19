---
permalink: skills
cssclasses: null
description: 'Obsidian Skills bringen KI-Agenten bei, wie sie mit Ihrem Vault und den Obsidian-Dateiformaten arbeiten können.'
---
Obsidian Skills sind Anweisungen, die KI-Agenten beibringen, wie sie mit Obsidian arbeiten können. Sie folgen dem offenen [Agent Skills](https://agentskills.io/specification)-Format und funktionieren daher mit jedem Agenten, der Skills unterstützt, darunter Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, OpenCode und [viele mehr](https://agentskills.io/clients).

Mit Obsidian Skills kann ein Agent:

- Notizen in [[Obsidian Flavored Markdown]] schreiben, mit [[Interne Links|Wiki-Links]], Einbettungen, Hinweisblöcken und [[Eigenschaften|Eigenschaften]].
- [[Einführung in Bases|Bases]]- und [[Canvas|Canvas]]-Dateien erstellen und bearbeiten.
- Notizen in der laufenden App mit [[Obsidian CLI]] suchen, lesen und verwalten.
- Vaults ohne die Desktop-App mit [[Obsidian Headless]] synchronisieren und veröffentlichen.

Die Skills sind Open Source unter [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installieren

Obsidian ist ein offizielles Plugin für ChatGPT, Codex, Cursor und Grok Bot. Andere Agenten installieren die Skills von GitHub.

### ChatGPT und Codex

Füge [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) aus dem ChatGPT-Plugin-Verzeichnis hinzu. Das Plugin funktioniert sowohl in ChatGPT als auch in Codex.

### Cursor

Installiere [Obsidian](https://cursor.com/marketplace/obsidian) aus dem Cursor Marketplace.

### Grok Bot

Öffne [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) und wähle **Add to Grok Bot**.

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Um später neue Skills zu erhalten, führe `claude plugin update obsidian@obsidian-skills` aus.

### Claude

Claude lädt jeden Skill als ZIP-Datei hoch, daher füge nur die Skills hinzu, die du brauchst:

1. Lade [obsidian-skills](https://github.com/obsidianmd/obsidian-skills/archive/refs/heads/main.zip) herunter und entpacke es.
2. Komprimiere in `plugins/obsidian/skills/` den Ordner jedes gewünschten Skills zu einer ZIP-Datei, z. B. `obsidian-markdown.zip`.
3. Gehe in Claude zu **Customize** → **Skills**, wähle **+** → **Create skill** → **Upload a skill** und wähle die ZIP-Datei aus.

Siehe [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) für die Tarife, die Skills unterstützen.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
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
