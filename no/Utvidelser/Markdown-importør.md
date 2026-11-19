---
permalink: plugins/format-converter
publish: true
mobile: true
description: Formatkonverterer er en kjerneplugin som lar deg konvertere Markdown fra andre applikasjoner til Obsidian-format.
---
Markdown-importør migrerer [[Egenskaper#Utdaterte egenskaper|utdaterte egenskapsformater]] til gjeldende format brukt av Obsidian.

> [!warning] Sikkerhetskopier hvelvet ditt
> Konverteringen gjelder hele hvelvet ditt. [[Sikkerhetskopier Obsidian-filene dine]] før du starter.

For å konvertere egenskapene i notatene dine:

1. Åpne [[Kommandovelger|kommandopaletten]].
2. Velg **Markdown-importør: Migrering av startmetadata**.
3. Velg **Start konvertering**.

## Støttede egenskapsformater

Importøren oppdaterer aliaser, tagger og CSS-klasser fra utdaterte formater:

**Aliaser**

```yaml
# Før

alias: My Note Title

# Etter

aliases:
  - My Note Title
```

**Tagger**

```yaml
# Før

tag: project, important

# Etter

tags:
  - project
  - important
```

**CSS-klasser**

```yaml
# Før

cssclass: custom-style

# Etter

cssclasses:
  - custom-style
```
