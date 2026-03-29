---
permalink: plugins/format-converter
publish: true
mobile: true
description: Formatkonverterer er en kjerneplugin som lar deg konvertere Markdown fra andre applikasjoner til Obsidian-format.
---
Markdown-importør er en [[Kjerneutvidelser|kjerneutvidelse]] som lar deg konvertere Markdown fra andre applikasjoner til Obsidian-format. Den lar deg også konvertere visse [[Egenskaper]] til nye påkrevde formater.

> [!warning] Advarsel
> Markdown-importøren konverterer hele hvelvet ditt basert på innstillingene dine. [[Sikkerhetskopier Obsidian-filene dine]] før du utfører konverteringen.

For å konvertere alle notater i hvelvet ditt:

1. I [[Kommandovelger|kommandopaletten]], velg **Åpne Markdown-importør**. Denne kan også finnes i [[Verktøylinje|verktøylinjen]] med **Åpne Markdown-importør** ![[lucide-binary.svg#icon]]-ikonet.
2. Aktiver formatene du vil konvertere.
3. Klikk **Start konvertering**.

For mer informasjon, se [[Grunnleggende formateringssyntaks]].

## Støttede formater

### Roam Research

Markdown-importøren kan konvertere følgende Roam Research-syntaks:

- **Tagger**: Konverterer `#tag` og `#[[tag]]` til `[[tag]]`
- **Uthevinger**: Konverterer `^^highlight^^` til `==highlight==`
- **TODO-elementer**: Konverterer `{{[[TODO]]}}` til `[ ]`

### Bear

Markdown-importøren kan konvertere følgende Bear-syntaks:

- **Uthevinger**: Konverterer `::highlight::` til `==highlight==`

### Zettelkasten

Markdown-importøren kan konvertere følgende Zettelkasten-syntaks:

- **Fullstendige lenker**: Konverterer `[[UID]]` til `[[UID File Name]]`
- **Pene lenker**: Konverterer `[[UID]]` til `[[UID File Name|File Name]]`

### [[Egenskaper]]

Fra og med Obsidian `1.9.3` kan Markdown-importøren konvertere [[Egenskaper#Utdaterte egenskaper|utdaterte egenskaps]]-formater til gjeldende format:

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
