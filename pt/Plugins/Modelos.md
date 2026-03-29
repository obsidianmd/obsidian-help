---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Modelos é um plugin principal que permite inserir trechos de texto predefinidos na sua nota ativa.
---
Modelos é um [[Plugins Base|plugin principal]] que permite inserir excertos de texto predefinidos na nota ativa.

## Definir a pasta de modelos

1. No canto inferior esquerdo, clique em **[[Definições]]** ![[lucide-cog.svg#icon]].
2. Em **Plugins Base → Modelos → Localização da pasta de templates**, introduza a pasta que contém os seus modelos.

## Variáveis de modelo

Pode adicionar informação dinâmica aos seus modelos utilizando _variáveis de modelo_. Quando insere um modelo que contém uma variável de modelo, o plugin Modelos substitui-a pelo valor correspondente.

| Variável    | Descrição                                              |
|-------------|--------------------------------------------------------|
| `{{title}}` | Título da nota ativa.                                  |
| `{{date}}`  | Data de hoje. **Formato predefinido:** `YYYY-MM-DD`.   |
| `{{time}}`  | Hora atual. **Formato predefinido:** `HH:mm`.          |

Tanto `{{date}}` como `{{time}}` permitem alterar o formato predefinido usando uma _cadeia de formato_.

Para definir uma cadeia de formato, adicione dois pontos (`:`) seguidos de uma cadeia de [tokens de formato Moment.js](https://momentjs.com/docs/#/displaying/format/), por exemplo `{{date:YYYY-MM-DD}}`.

Pode usar `{{date}}` e `{{time}}` de forma intercambiável com cadeias de formato, por exemplo `{{time:YYYY-MM-DD}}`.

Pode alterar os formatos predefinidos de data e hora em **[[Definições]] → Modelos → Formato da data** e **[[Definições]] → Modelos → Formato do horário**. ^template-settings-date-time-formatting

> [!tip] Dica
> Também pode usar as variáveis de modelo `{{date}}` e `{{time}}` nos plugins [[Notas diárias]] e [[Criador de notas únicas]].

## Criar um modelo

Na [[#Definir a pasta de modelos|pasta de modelos]], [[Gerir notas#Criar uma nova nota|crie uma nota]] com o texto que pretende que apareça quando utilizar o modelo. Pode usar [[#Variáveis de modelo|variáveis de modelo]] para texto dinâmico como a data atual.

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


## Perguntas
- 

## Resumo


## Tópicos Relacionados
- [[]]
```

## Inserir um modelo na nota ativa

**Importante:** Para inserir um modelo, primeiro precisa de [[#Definir a pasta de modelos]].

1. Na barra de ferramentas, clique em **Inserir templates**.
2. Selecione o modelo a inserir na posição do cursor na nota ativa.

Para inserir um modelo usando a [[Paleta de comando]] ou [[Atalhos de teclado#Definir um atalho de teclado|um atalho de teclado personalizado]], use o comando `Modelos: Inserir templates`.

O conteúdo do modelo é inserido na posição atual do cursor. Se o cursor não estiver no corpo da nota, o conteúdo é inserido na última posição do cursor.

### Propriedades do modelo

![[Propriedades#^templates-properties]]

## Inserir data e hora atuais na nota ativa

Use os comandos `Modelos: Inserir data atual` e `Modelos: Inserir hora atual` para inserir a data e hora atuais na posição atual do cursor. Tal como o comando `Inserir templates`, isto pode ser feito com a [[Paleta de comando]] ou [[Atalhos de teclado#Definir um atalho de teclado|um atalho de teclado personalizado]].

A data e hora inseridas utilizam a [[#^template-settings-date-time-formatting|formatação definida nas definições do plugin]].
