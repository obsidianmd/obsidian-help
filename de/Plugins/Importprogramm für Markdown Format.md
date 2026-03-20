---
permalink: plugins/format-converter
publish: true
mobile: true
description: >-
  Das Importprogramm für Markdown Format ist eine integrierte Erweiterung, mit
  der du Markdown aus anderen Anwendungen in das Obsidian-Format konvertieren
  kannst.
---
Das Importprogramm für Markdown Format ist eine [[Obsidian-Erweiterungen|integrierte Erweiterung]], mit der du Markdown aus anderen Anwendungen in das Obsidian-Format konvertieren kannst. Außerdem ermöglicht es dir, bestimmte [[Eigenschaften]] in neue erforderliche Formate zu konvertieren.

> [!warning] Warnung
> Das Importprogramm für Markdown Format konvertiert deinen gesamten Vault basierend auf deinen Einstellungen. [[Obsidian-Dateien sichern|Sichere deine Obsidian-Dateien]], bevor du die Konvertierung durchführst.

Um alle Notizen in deinem Vault zu konvertieren:

1. Wähle in der [[Befehlspalette]] **Markdown Importprogramm öffnen** aus. Dies ist auch in der [[Menüband|Werkzeugleiste]] über das Symbol **Markdown Importprogramm öffnen** ( ![[lucide-binary.svg#icon]] ) erreichbar.
2. Aktiviere die Formate, die du konvertieren möchtest.
3. Klicke auf **Konvertierung starten**.

Weitere Informationen findest du unter [[Grundlegende Formatierungssyntax]].

## Unterstützte Formate

### Roam Research

Das Importprogramm für Markdown Format kann die folgende Roam-Research-Syntax konvertieren:

- **Tags**: Konvertiert `#tag` und `#[[tag]]` zu `[[tag]]`
- **Hervorhebungen**: Konvertiert `^^highlight^^` zu `==highlight==`
- **TODO-Elemente**: Konvertiert `{{[[TODO]]}}` zu `[ ]`

### Bear

Das Importprogramm für Markdown Format kann die folgende Bear-Syntax konvertieren:

- **Hervorhebungen**: Konvertiert `::highlight::` zu `==highlight==`

### Zettelkasten

Das Importprogramm für Markdown Format kann die folgende Zettelkasten-Syntax konvertieren:

- **Vollständige Links**: Konvertiert `[[UID]]` zu `[[UID File Name]]`
- **Hübsche Links**: Konvertiert `[[UID]]` zu `[[UID File Name|File Name]]`

### [[Eigenschaften]]

Seit Obsidian `1.9.3` kann das Importprogramm für Markdown Format [[Eigenschaften#Veraltete Eigenschaften|veraltete Eigenschaftsformate]] in das aktuelle Format konvertieren:

**Aliasse**

```yaml
# Vorher

alias: My Note Title

# Nachher

aliases:
  - My Note Title
```

**Tags**

```yaml
# Vorher

tag: project, important

# Nachher

tags:
  - project
  - important
```

**CSS-Klassen**

```yaml
# Vorher

cssclass: custom-style

# Nachher

cssclasses:
  - custom-style
```
