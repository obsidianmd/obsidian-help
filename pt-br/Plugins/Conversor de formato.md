---
permalink: plugins/format-converter
publish: true
mobile: true
description: O Conversor de formato é um plugin nativo que permite converter Markdown de outros aplicativos para o formato do Obsidian.
aliases:
  - Plugins/Conversor de formatos
---
O Conversor de formato é um [[Plugins nativos|plugin nativo]] que permite converter Markdown de outros aplicativos para o formato do Obsidian. Ele também permite converter certas [[Propriedades]] para novos formatos obrigatórios.

> [!warning] Aviso
> O Conversor de formato converte todo o seu cofre com base nas suas configurações. [[Fazer backup dos seus arquivos do Obsidian|Faça backup dos seus arquivos do Obsidian]] antes de realizar a conversão.

Para converter todas as notas no seu cofre:

1. Na [[Paleta de comandos]], selecione **Abrir importador Markdown**. Isso também pode ser encontrado no [[Faixa de opções|Menu lateral]] com o ícone **Abrir importador Markdown** ![[lucide-binary.svg#icon]].
2. Ative os formatos que deseja converter.
3. Clique em **Começar conversão**.

Para mais informações, consulte [[Sintaxe de formatação básica]].

## Formatos suportados

### Roam Research

O Conversor de formato pode converter a seguinte sintaxe do Roam Research:

- **Etiquetas**: Converte `#tag` e `#[[tag]]` para `[[tag]]`
- **Destaques**: Converte `^^highlight^^` para `==highlight==`
- **Itens TODO**: Converte `{{[[TODO]]}}` para `[ ]`

### Bear

O Conversor de formato pode converter a seguinte sintaxe do Bear:

- **Destaques**: Converte `::highlight::` para `==highlight==`

### Zettelkasten

O Conversor de formato pode converter a seguinte sintaxe do Zettelkasten:

- **Links completos**: Converte `[[UID]]` para `[[UID File Name]]`
- **Links formatados**: Converte `[[UID]]` para `[[UID File Name|File Name]]`

### [[Propriedades]]

A partir do Obsidian `1.9.3`, o Conversor de formato pode converter formatos de [[Propriedades#Propriedades descontinuadas|propriedades descontinuadas]] para o formato atual:

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
