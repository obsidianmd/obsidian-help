---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Modelos é um plugin nativo que permite inserir trechos de texto pré-definidos na sua nota ativa.
aliases:
  - Plugins/Modelos
---
Modelos é um [[Plugins nativos|plugin nativo]] que permite inserir trechos de texto pré-definidos na sua nota ativa.

## Defina sua pasta de modelos

1. No canto inferior esquerdo, selecione **[[Configurações]]** ![[lucide-cog.svg#icon]].
2. Em **Plugins nativos → Modelos → Localização da pasta de modelos**, insira a pasta que contém seus modelos.

## Variáveis de modelo

Você pode adicionar informações dinâmicas aos seus modelos, usando _variáveis de modelo_. Quando você insere um modelo contendo uma variável de modelo, o plugin Modelos a substitui pelo seu valor correspondente.

| Variável    | Descrição                                             |
|-------------|-------------------------------------------------------|
| `{{title}}` | Título da nota ativa.                                 |
| `{{date}}`  | Data de hoje. **Formato padrão:** `YYYY-MM-DD`.       |
| `{{time}}`  | Horário atual. **Formato padrão:** `HH:mm`.           |

Tanto `{{date}}` quanto `{{time}}` permitem que você altere o formato padrão usando uma _string de formato_.

Para definir uma string de formato, adicione dois-pontos (`:`) seguidos de uma string de [tokens de formato do Moment.js](https://momentjs.com/docs/#/displaying/format/), por exemplo `{{date:YYYY-MM-DD}}`.

Você pode usar `{{date}}` e `{{time}}` com strings de formato da mesma maneira, por exemplo `{{time:YYYY-MM-DD}}`.

Você pode alterar os formatos padrão de data e hora em **[[Configurações]] → Plugins nativos → Modelos → Formato da data** e **[[Configurações]] → Plugins nativos → Modelos → Formato do horário**. ^template-settings-date-time-formatting

> [!tip]- Usar variáveis de data e hora em outros plugins
> Você também pode usar as variáveis de modelo `{{date}}` e `{{time}}` nos plugins [[Notas diárias]] e [[Criador de nota única]].

## Criar um modelo

Na [[#Defina sua pasta de modelos|pasta de modelos]], [[Gerenciar notas#Criar uma nova nota|crie uma nota]] contendo o texto que você deseja que apareça quando usar o modelo. Você pode usar [[#Variáveis de modelo|variáveis de modelo]] para texto dinâmico como a data atual.

Por exemplo, aqui está um modelo para notas de estudo:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Conceitos-Chave


## Detalhes Importantes


## Exemplos


## Questões
- 

## Resumo


## Tópicos Relacionados
- [[]]
```

> [!warning]+ Edite modelos no modo Código-fonte
> No [[Visualizações e modo de edição#Live Preview|Live Preview]], o painel **Propriedades no documento** pode sobrescrever variáveis de modelo que não possuem aspas.
>
> Para evitar isso, edite modelos no [[Visualizações e modo de edição#Modo código-fonte|modo Código-fonte]], ou defina **[[Configurações]] → Editor → [[Configurações#Propriedades no documento|Propriedades no documento]]** para **Código-fonte**.

## Inserir um modelo na nota ativa

> [!todo] [[#Defina sua pasta de modelos]] antes de inserir um modelo.

1. No menu lateral, selecione **Inserir modelo**.
2. Selecione o modelo para inserir na posição do cursor na nota ativa.

Para inserir um modelo usando a [[Paleta de comandos]] ou [[Atalhos#Definir um atalho|um atalho de teclado personalizado]], use o comando `Modelos: Inserir modelo`.

O conteúdo do modelo é inserido na posição atual do cursor. Se o cursor não estiver no corpo da nota, o conteúdo é inserido na última posição do cursor.

### Propriedades de modelo

![[Propriedades#^templates-properties]]

## Inserir data e hora atuais na nota ativa

Use os comandos `Modelos: Inserir a data atual` e `Modelos: Inserir a hora atual` para inserir a data e hora atuais na posição atual do cursor. Assim como o comando `Inserir modelo`, você também pode executá-los com a Paleta de comandos ou um atalho de teclado personalizado.

A data e hora inseridas utilizam a [[#^template-settings-date-time-formatting|formatação definida nas configurações do plugin]].
