---
permalink: plugins/format-converter
publish: true
mobile: true
description: Convertidor de format és un connector bàsic que us permet convertir Markdown d'altres aplicacions al format d'Obsidian.
---
L'Importador de format Markdown migra els [[Propietats#Propietats obsoletes|formats de propietats obsoletes]] al format actual utilitzat per Obsidian.

> [!warning] Fes còpia de seguretat de la teva cambra forta
> La conversió s'aplica a tota la teva cambra forta. [[Fes còpia de seguretat dels fitxers d'Obsidian]] abans de començar.

Per convertir les propietats de les teves notes:

1. Obre la [[Paleta d'ordres]].
2. Selecciona **Importador de format Markdown: Migració de metadades inicials**.
3. Selecciona **Inicia la conversió**.

## Formats de propietats compatibles

El convertidor actualitza àlies, etiquetes i classes CSS des de formats obsolets:

**Àlies**

```yaml
# Abans

alias: My Note Title

# Després

aliases:
  - My Note Title
```

**Etiquetes**

```yaml
# Abans

tag: project, important

# Després

tags:
  - project
  - important
```

**Classes CSS**

```yaml
# Abans

cssclass: custom-style

# Després

cssclasses:
  - custom-style
```
