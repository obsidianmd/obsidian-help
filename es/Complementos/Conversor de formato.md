---
permalink: plugins/format-converter
publish: true
mobile: true
description: El Conversor de formato es un complemento principal que te permite convertir Markdown de otras aplicaciones al formato de Obsidian.
aliases:
  - Plugins/Convertidor de formato Markdown
---
El Conversor de formato migra [[Propiedades#Propiedades obsoletas|formatos de propiedades obsoletas]] al formato actual utilizado por Obsidian.

> [!warning] Respalda tu bóveda
> La conversión se aplica a toda tu bóveda. [[Respaldar tus archivos de Obsidian|Respalda tus archivos de Obsidian]] antes de comenzar.

Para convertir las propiedades en tus notas:

1. Abre la [[Paleta de comandos]].
2. Selecciona **Conversor de formato: Migración de metadatos**.
3. Selecciona **Empezar la conversión**.

## Formatos de propiedades compatibles

El conversor actualiza alias, etiquetas y clases CSS desde formatos obsoletos:

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
