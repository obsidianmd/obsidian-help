---
permalink: plugins/format-converter
publish: true
mobile: true
description: El Conversor de formato es un complemento principal que te permite convertir Markdown de otras aplicaciones al formato de Obsidian.
aliases:
  - Plugins/Convertidor de formato Markdown
---
El Conversor de formato es un [[Complementos principales|complemento principal]] que te permite convertir Markdown de otras aplicaciones al formato de Obsidian. También te permite convertir ciertas [[Propiedades]] a los nuevos formatos requeridos.

> [!warning] Advertencia
> El Conversor de formato convierte toda tu bóveda según tus ajustes. [[Respaldar tus archivos de Obsidian|Respalda tus archivos de Obsidian]] antes de realizar la conversión.

Para convertir todas las notas en tu bóveda:

1. En la [[Paleta de comandos]], selecciona **Abrir el importador de Markdown**. También se puede encontrar en la [[Menú de cinta]] con el icono **Abrir el importador de Markdown** ( ![[lucide-binary.svg#icon]] ).
2. Activa los formatos que deseas convertir.
3. Haz clic en **Empezar la conversión**.

Para más información, consulta [[Sintaxis de formato básico]].

## Formatos compatibles

### Roam Research

El Conversor de formato puede convertir la siguiente sintaxis de Roam Research:

- **Etiquetas**: Convierte `#tag` y `#[[tag]]` a `[[tag]]`
- **Resaltados**: Convierte `^^highlight^^` a `==highlight==`
- **Elementos TODO**: Convierte `{{[[TODO]]}}` a `[ ]`

### Bear

El Conversor de formato puede convertir la siguiente sintaxis de Bear:

- **Resaltados**: Convierte `::highlight::` a `==highlight==`

### Zettelkasten

El Conversor de formato puede convertir la siguiente sintaxis de Zettelkasten:

- **Enlaces completos**: Convierte `[[UID]]` a `[[UID File Name]]`
- **Enlaces legibles**: Convierte `[[UID]]` a `[[UID File Name|File Name]]`

### [[Propiedades]]

A partir de Obsidian `1.9.3`, el Conversor de formato puede convertir formatos de [[Propiedades#Propiedades obsoletas|propiedades obsoletas]] al formato actual:

**Alias**

```yaml
# Antes

alias: My Note Title

# Después

aliases:
  - My Note Title
```

**Etiquetas**

```yaml
# Antes

tag: project, important

# Después

tags:
  - project
  - important
```

**Clases CSS**

```yaml
# Antes

cssclass: custom-style

# Después

cssclasses:
  - custom-style
```
