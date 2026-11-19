---
permalink: plugins/format-converter
publish: true
mobile: true
description: O Conversor de formato é um plugin nativo que permite converter Markdown de outros aplicativos para o formato do Obsidian.
aliases:
  - Plugins/Conversor de formatos
---
O Conversor de formato migra [[Propriedades#Propriedades descontinuadas|formatos de propriedades descontinuadas]] para o formato atual usado pelo Obsidian.

> [!warning] Faça backup do seu cofre
> A conversão se aplica a todo o seu cofre. [[Fazer backup dos seus arquivos do Obsidian|Faça backup dos seus arquivos do Obsidian]] antes de começar.

Para converter as propriedades nas suas notas:

1. Abra a [[Paleta de comandos]].
2. Selecione **Format converter: Frontmatter migration**.
3. Selecione **Começar conversão**.

## Formatos de propriedades suportados

O conversor atualiza apelidos, etiquetas e classes CSS de formatos descontinuados:

**Apelidos**

```yaml
# Antes

alias: My Note Title

# Depois

aliases:
  - My Note Title
```

**Etiquetas**

```yaml
# Antes

tag: project, important

# Depois

tags:
  - project
  - important
```

**Classes CSS**

```yaml
# Antes

cssclass: custom-style

# Depois

cssclasses:
  - custom-style
```
