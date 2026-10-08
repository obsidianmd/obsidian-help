---
permalink: plugins/format-converter
publish: true
mobile: true
description: O Conversor de formato é um plugin principal que permite converter Markdown de outros aplicativos para o formato do Obsidian.
---
O Importador de formato Markdown migra [[Propriedades#Propriedades descontinuadas|formatos de propriedades descontinuadas]] para o formato atual utilizado pelo Obsidian.

> [!warning] Faça cópia de segurança do seu cofre
> A conversão aplica-se a todo o seu cofre. [[Fazer cópia de segurança dos ficheiros do Obsidian|Faça cópia de segurança dos seus ficheiros do Obsidian]] antes de começar.

Para converter as propriedades nas suas notas:

1. Abra a [[Paleta de comando]].
2. Selecione **Importador de formato Markdown: Migração de metadados iniciais**.
3. Selecione **Começar a conversão**.

## Formatos de propriedades suportados

O conversor atualiza alcunhas, etiquetas e classes CSS a partir de formatos descontinuados:

**Alcunhas**

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
