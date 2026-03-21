---
permalink: plugins/format-converter
publish: true
mobile: true
description: Strumento importazione Markdown è un plugin principale che consente di convertire il Markdown da altre applicazioni al formato Obsidian.
aliases:
  - Format converter
---
Strumento importazione Markdown è un [[Plugin principali|plugin principale]] che consente di convertire il Markdown da altre applicazioni al formato Obsidian. Permette inoltre di convertire determinate [[Proprietà|Proprietà]] nei nuovi formati richiesti.

> [!warning] Avvertimento
> Lo Strumento importazione Markdown converte l'intera cassaforte in base alle impostazioni. [[Back up your Obsidian files|Esegui un backup dei file di Obsidian]] prima di effettuare la conversione.

Per convertire tutte le note nella cassaforte:

1. Nella [[Riquadro comandi|tavolozza dei comandi]], seleziona **Apri importazione Markdown**. È possibile accedervi anche dalla [[Ribbon|barra degli strumenti]] con l'icona **Apri importazione Markdown** ( ![[lucide-binary.svg#icon]] ).
2. Abilita i formati che desideri convertire.
3. Fai clic su **Avvia conversione**.

Per ulteriori informazioni, consulta [[Basic formatting syntax|Sintassi di formattazione di base]].

## Formati supportati

### Roam Research

Lo Strumento importazione Markdown può convertire la seguente sintassi di Roam Research:

- **Etichette**: Converte `#tag` e `#[[tag]]` in `[[tag]]`
- **Evidenziazioni**: Converte `^^highlight^^` in `==highlight==`
- **Elementi TODO**: Converte `{{[[TODO]]}}` in `[ ]`

### Bear

Lo Strumento importazione Markdown può convertire la seguente sintassi di Bear:

- **Evidenziazioni**: Converte `::highlight::` in `==highlight==`

### Zettelkasten

Lo Strumento importazione Markdown può convertire la seguente sintassi Zettelkasten:

- **Collegamenti completi**: Converte `[[UID]]` in `[[UID File Name]]`
- **Collegamenti leggibili**: Converte `[[UID]]` in `[[UID File Name|File Name]]`

### [[Proprietà]]

A partire da Obsidian `1.9.3`, lo Strumento importazione Markdown può convertire i formati delle [[Properties#Proprietà deprecate|proprietà deprecate]] nel formato attuale:

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
