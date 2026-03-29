---
permalink: plugins/format-converter
publish: true
mobile: true
description: Formaatconverter is een kernplug-in waarmee je Markdown van andere applicaties kunt converteren naar Obsidian-formaat.
---
Markdown-indeling importeren is een [[Ingebouwde plug-ins|kernplug-in]] waarmee je Markdown van andere applicaties kunt converteren naar Obsidian-formaat. Het laat je ook bepaalde [[Eigenschappen]] converteren naar nieuwe vereiste formaten.

> [!warning] Waarschuwing
> Markdown-indeling importeren converteert je hele kluis op basis van je instellingen. [[Back-up maken van je Obsidian-bestanden]] voordat je de conversie uitvoert.

Om alle notities in je kluis te converteren:

1. Selecteer in het [[Opdrachtenpaneel]] de opdracht **Open Markdown-importeur**. Dit is ook te vinden in de [[Werkbalk]] met het **Open Markdown-importeur** ![[lucide-binary.svg#icon]] pictogram.
2. Activeer de formaten die je wilt converteren.
3. Klik op **Conversie starten**.

Voor meer informatie, zie [[Basis opmaaksyntaxis]].

## Ondersteunde formaten

### Roam Research

Markdown-indeling importeren kan de volgende Roam Research-syntaxis converteren:

- **Labels**: Converteert `#tag` en `#[[tag]]` naar `[[tag]]`
- **Markeringen**: Converteert `^^highlight^^` naar `==highlight==`
- **TODO-items**: Converteert `{{[[TODO]]}}` naar `[ ]`

### Bear

Markdown-indeling importeren kan de volgende Bear-syntaxis converteren:

- **Markeringen**: Converteert `::highlight::` naar `==highlight==`

### Zettelkasten

Markdown-indeling importeren kan de volgende Zettelkasten-syntaxis converteren:

- **Volledige koppelingen**: Converteert `[[UID]]` naar `[[UID Bestandsnaam]]`
- **Mooie koppelingen**: Converteert `[[UID]]` naar `[[UID Bestandsnaam|Bestandsnaam]]`

### [[Eigenschappen]]

Vanaf Obsidian `1.9.3` kan Markdown-indeling importeren [[Eigenschappen#Verouderde eigenschappen|verouderde eigenschap]]-formaten converteren naar het huidige formaat:

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
