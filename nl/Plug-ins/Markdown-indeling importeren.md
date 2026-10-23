---
permalink: plugins/format-converter
publish: true
mobile: true
description: Formaatconverter is een kernplug-in waarmee je Markdown van andere applicaties kunt converteren naar Obsidian-formaat.
---
Markdown-indeling importeren migreert [[Eigenschappen#Verouderde eigenschappen|verouderde eigenschapformaten]] naar het huidige formaat dat door Obsidian wordt gebruikt.

> [!warning] Maak een back-up van je kluis
> De conversie wordt toegepast op je hele kluis. [[Back-up maken van je Obsidian-bestanden]] voordat je begint.

Om de eigenschappen in je notities te converteren:

1. Open het [[Opdrachtenpaneel]].
2. Selecteer **Markdown-indeling importeren: Migratie van voormetadata**.
3. Selecteer **Conversie starten**.

## Ondersteunde eigenschapformaten

De converter werkt aliassen, labels en CSS-klassen bij vanuit verouderde formaten:

**Aliassen**

```yaml
# Voor

alias: My Note Title

# Na

aliases:
  - My Note Title
```

**Labels**

```yaml
# Voor

tag: project, important

# Na

tags:
  - project
  - important
```

**CSS-klassen**

```yaml
# Voor

cssclass: custom-style

# Na

cssclasses:
  - custom-style
```
