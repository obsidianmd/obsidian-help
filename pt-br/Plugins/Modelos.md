---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: >-
  Modelos é um plugin nativo que permite inserir trechos de texto pré-definidos
  na sua nota ativa.
aliases:
  - Plugins/Modelos
---
Modelos é um [[Plugins nativos|plugin nativo]] que permite inserir trechos de texto pré-definidos na sua nota ativa.

## Defina sua pasta de modelos

1. No canto inferior esquerdo, clique em **[[Configurações]]** ( ![[lucide-cog.svg#icon]] ).
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

Você pode usar `{{date}}` e `{{time}}` de forma intercambiável com strings de formato, por exemplo `{{time:YYYY-MM-DD}}`.

Você pode alterar os formatos padrão de data e hora em **[[Configurações]] → Modelos → Formato da data** e **[[Configurações]] → Modelos → Formato do horário**.

> [!tip] Dica
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

## Inserir um modelo na nota ativa

**Importante:** Para inserir um modelo, você precisa primeiro [[#Defina sua pasta de modelos]].

1. No menu lateral, clique em **Inserir modelo**.
2. Selecione o modelo para inserir na posição do cursor na nota ativa.

## Propriedades de modelo

![[Propriedades#^templates-properties]]
