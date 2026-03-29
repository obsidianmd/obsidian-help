---
permalink: plugins/format-converter
publish: true
mobile: true
description: O Conversor de formato é um plugin principal que permite converter Markdown de outros aplicativos para o formato do Obsidian.
---
O [[Importador de formato Markdown]] é um [[Plugins Base|plugin principal]] que permite converter Markdown de outras aplicações para o formato Obsidian. Também permite converter certas [[Propriedades]] para os novos formatos requeridos.

> [!warning] Aviso
> O Importador de formato Markdown converte todo o seu cofre com base nas suas definições. [[Fazer cópia de segurança dos ficheiros do Obsidian|Faça cópia de segurança dos seus ficheiros do Obsidian]] antes de realizar a conversão.

Para converter todas as notas no seu cofre:

1. Na [[Paleta de comando]], selecione **Importador de Open Markdown**. Também pode ser encontrado na [[Barra de ferramentas]] com o ícone **Importador de Open Markdown** ![[lucide-binary.svg#icon]].
2. Ative os formatos que pretende converter.
3. Clique em **Começar a conversão**.

Para mais informações, consulte [[Sintaxe de formatação básica]].

## Formatos suportados

### Roam Research

O Importador de formato Markdown pode converter a seguinte sintaxe do Roam Research:

- **Etiquetas**: Converte `#tag` e `#[[tag]]` para `[[tag]]`
- **Realces**: Converte `^^highlight^^` para `==highlight==`
- **Itens TODO**: Converte `{{[[TODO]]}}` para `[ ]`

### Bear

O Importador de formato Markdown pode converter a seguinte sintaxe do Bear:

- **Realces**: Converte `::highlight::` para `==highlight==`

### Zettelkasten

O Importador de formato Markdown pode converter a seguinte sintaxe Zettelkasten:

- **Ligações completas**: Converte `[[UID]]` para `[[UID File Name]]`
- **Ligações formatadas**: Converte `[[UID]]` para `[[UID File Name|File Name]]`

### [[Propriedades]]

A partir do Obsidian `1.9.3`, o Importador de formato Markdown pode converter formatos de [[Propriedades#Propriedades descontinuadas|propriedades descontinuadas]] para o formato atual:

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
