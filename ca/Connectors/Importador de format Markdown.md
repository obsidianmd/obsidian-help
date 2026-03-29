---
permalink: plugins/format-converter
publish: true
mobile: true
description: Convertidor de format és un connector bàsic que us permet convertir Markdown d'altres aplicacions al format d'Obsidian.
---
L'Importador de format Markdown és un [[Connectors principals|connector principal]] que permet convertir Markdown d'altres aplicacions al format d'Obsidian. També permet convertir certes [[Propietats]] a nous formats requerits.

> [!warning] Advertència
> L'Importador de format Markdown converteix tota la teva cambra forta segons la teva configuració. [[Fes còpia de seguretat dels fitxers d'Obsidian]] abans de realitzar la conversió.

Per convertir totes les notes de la teva cambra forta:

1. A la [[Paleta d'ordres]], selecciona **Obre l'importador Markdown**. També es pot trobar a la [[Cinta]] amb la icona **Obre l'importador Markdown** ![[lucide-binary.svg#icon]].
2. Activa els formats que vols convertir.
3. Fes clic a **Inicia la conversió**.

Per a més informació, consulta [[Sintaxi de format bàsic]].

## Formats compatibles

### Roam Research

L'Importador de format Markdown pot convertir la següent sintaxi de Roam Research:

- **Etiquetes**: Converteix `#tag` i `#[[tag]]` a `[[tag]]`
- **Ressaltats**: Converteix `^^highlight^^` a `==highlight==`
- **Elements TODO**: Converteix `{{[[TODO]]}}` a `[ ]`

### Bear

L'Importador de format Markdown pot convertir la següent sintaxi de Bear:

- **Ressaltats**: Converteix `::highlight::` a `==highlight==`

### Zettelkasten

L'Importador de format Markdown pot convertir la següent sintaxi de Zettelkasten:

- **Enllaços complets**: Converteix `[[UID]]` a `[[UID File Name]]`
- **Enllaços bonics**: Converteix `[[UID]]` a `[[UID File Name|File Name]]`

### [[Propietats]]

A partir d'Obsidian `1.9.3`, l'Importador de format Markdown pot convertir formats de [[Propietats#Propietats obsoletes|propietats obsoletes]] al format actual:

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
