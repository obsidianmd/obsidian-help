---
permalink: plugins/format-converter
publish: true
mobile: true
description: Formatkonverterare är ett kärntillägg som låter dig konvertera Markdown från andra applikationer till Obsidian-format.
---
Markdown-formatimportör är ett [[Kärntillägg|kärntillägg]] som låter dig konvertera Markdown från andra applikationer till Obsidian-format. Det låter dig också konvertera vissa [[Egenskaper]] till nya obligatoriska format.

> [!warning] Varning
> Markdown-formatimportören konverterar hela ditt valv baserat på dina inställningar. [[Säkerhetskopiera dina Obsidian-filer]] innan du utför konverteringen.

För att konvertera alla anteckningar i ditt valv:

1. I [[Kommandopalett]], välj **Öppna Markdown-importör**. Den kan också hittas i [[Ribbon]] med ikonen **Öppna Markdown-importör** ![[lucide-binary.svg#icon]].
2. Aktivera de format du vill konvertera.
3. Klicka på **Starta konvertering**.

För mer information, se [[Grundläggande formateringssyntax]].

## Format som stöds

### Roam Research

Markdown-formatimportören kan konvertera följande Roam Research-syntax:

- **Taggar**: Konverterar `#tag` och `#[[tag]]` till `[[tag]]`
- **Markeringar**: Konverterar `^^highlight^^` till `==highlight==`
- **TODO-objekt**: Konverterar `{{[[TODO]]}}` till `[ ]`

### Bear

Markdown-formatimportören kan konvertera följande Bear-syntax:

- **Markeringar**: Konverterar `::highlight::` till `==highlight==`

### Zettelkasten

Markdown-formatimportören kan konvertera följande Zettelkasten-syntax:

- **Fullständiga länkar**: Konverterar `[[UID]]` till `[[UID File Name]]`
- **Snygga länkar**: Konverterar `[[UID]]` till `[[UID File Name|File Name]]`

### [[Egenskaper]]

Från och med Obsidian `1.9.3` kan Markdown-formatimportören konvertera [[Egenskaper#Föråldrade egenskaper|föråldrade egenskapsformat]] till det aktuella formatet:

**Aliaser**

```yaml
# Före

alias: My Note Title

# Efter

aliases:
  - My Note Title
```

**Taggar**

```yaml
# Före

tag: project, important

# Efter

tags:
  - project
  - important
```

**CSS-klasser**

```yaml
# Före

cssclass: custom-style

# Efter

cssclasses:
  - custom-style
```
