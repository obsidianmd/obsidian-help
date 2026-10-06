---
permalink: plugins/format-converter
publish: true
mobile: true
description: Strumento importazione Markdown è un plugin principale che consente di convertire il Markdown da altre applicazioni al formato Obsidian.
aliases:
  - Format converter
---
Lo Strumento importazione Markdown migra i [[Proprietà#Proprietà deprecate|formati delle proprietà deprecate]] nel formato attuale utilizzato da Obsidian.

> [!warning] Esegui un backup della cassaforte
> La conversione si applica all'intera cassaforte. [[Backup dei file di Obsidian|Esegui un backup dei file di Obsidian]] prima di iniziare.

Per convertire le proprietà nelle note:

1. Apri il [[Riquadro comandi|riquadro comandi]].
2. Seleziona **Strumento importazione Markdown: Migrazione del frontmatter**.
3. Seleziona **Avvia conversione**.

## Formati delle proprietà supportati

Lo strumento aggiorna alias, etichette e classi CSS dai formati deprecati:

**Alias**

```yaml
# Prima

alias: My Note Title

# Dopo

aliases:
  - My Note Title
```

**Etichette**

```yaml
# Prima

tag: project, important

# Dopo

tags:
  - project
  - important
```

**Classi CSS**

```yaml
# Prima

cssclass: custom-style

# Dopo

cssclasses:
  - custom-style
```
