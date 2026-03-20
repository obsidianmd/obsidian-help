---
permalink: tags
aliases:
  - Plugins/Tags
---
Etiquetas são palavras-chave ou tópicos que ajudam você a encontrar rapidamente as notas que deseja.

## Adicionar uma etiqueta a uma nota

Para criar uma etiqueta, digite um símbolo de cerquilha (`#`) no editor, seguido de uma palavra-chave. Por exemplo, `#reunião`.

Você também pode adicionar etiquetas usando a [[Propriedades|propriedade]] `tags`. Etiquetas em YAML devem sempre ser formatadas como uma lista:

```yaml
---
tags:
  - receita
  - culinária
---
```

## Encontrar notas usando etiquetas

Para encontrar notas usando o plugin [[Pesquisa]], use o [[Pesquisa#Operadores de pesquisa|operador de pesquisa]] `tag` no seu termo de busca, por exemplo `tag:#reunião`.

Você também pode buscar tags clicando nelas em suas notas.

Para encontrar notas usando o plugin [[Visão de tags|Painel de etiquetas]], selecione **Etiquetas: Mostrar painel de etiquetas** na [[Paleta de comandos]], e então selecione a etiqueta que deseja buscar.

## Etiquetas aninhadas

Etiquetas aninhadas definem hierarquias de etiquetas que facilitam encontrar e filtrar etiquetas relacionadas.

Crie etiquetas aninhadas usando barras (`/`) no nome da etiqueta, por exemplo `#caixa-entrada/para-ler` e `#caixa-entrada/processando`.

- Na [[Pesquisa]], `tag:caixa-entrada` corresponderá a `#caixa-entrada` bem como a todas as etiquetas aninhadas, como `#caixa-entrada/para-ler`.
- No [[Visão de tags|Painel de etiquetas]], etiquetas aninhadas são exibidas como pertencentes à sua etiqueta pai.
- No [[Introdução ao Bases|Bases]], etiquetas aninhadas são reconhecidas pela função [[Funções#hasTag|`hasTag`]], então `file.hasTag("a")` corresponderá tanto a `#a` quanto a `#a/b`.

## Formato de etiqueta

Você pode usar qualquer um dos seguintes caracteres em suas etiquetas:

- Letras alfabéticas
- Números
- Sublinhado (`_`)
- Hífen (`-`)
- Barra (`/`) para [[#Etiquetas aninhadas]]

Etiquetas devem conter pelo menos um caractere não numérico. Por exemplo, #1984 não é uma etiqueta válida, mas #y1984 é.

Etiquetas não diferenciam maiúsculas de minúsculas. Por exemplo, #etiqueta e #ETIQUETA serão tratadas como idênticas.

> [!note]
> As etiquetas serão exibidas com a capitalização com que foram criadas pela primeira vez no [[Visão de tags|Painel de etiquetas]].
> Por exemplo, criar #Etiqueta e depois #ETIQUETA exibirá #Etiqueta para ambas.

Etiquetas não podem conter espaços em branco. Para separar duas ou mais palavras, você pode usar os seguintes formatos:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
