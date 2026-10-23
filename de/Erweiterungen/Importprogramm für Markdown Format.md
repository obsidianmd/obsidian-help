---
permalink: plugins/format-converter
publish: true
mobile: true
description: 'Das Importprogramm für Markdown Format ist eine integrierte Erweiterung, mit der du Markdown aus anderen Anwendungen in das Obsidian-Format konvertieren kannst.'
---
Das Importprogramm für Markdown Format migriert [[Eigenschaften#Veraltete Eigenschaften|veraltete Eigenschaftsformate]] in das aktuelle Format, das von Obsidian verwendet wird.

> [!warning] Sichere deinen Vault
> Die Konvertierung wird auf deinen gesamten Vault angewendet. [[Obsidian-Dateien sichern|Sichere deine Obsidian-Dateien]], bevor du beginnst.

Um die Eigenschaften in deinen Notizen zu konvertieren:

1. Öffne die [[Befehlspalette]].
2. Wähle **Importprogramm für Markdown Format: Frontmatter-Migration** aus.
3. Wähle **Konvertierung starten** aus.

## Unterstützte Eigenschaftsformate

Das Importprogramm aktualisiert Aliasse, Tags und CSS-Klassen aus veralteten Formaten:

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
