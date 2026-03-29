---
permalink: tags
---
As etiquetas são palavras-chave ou tópicos que o ajudam a encontrar rapidamente as notas que procura.

## Adicionar uma etiqueta a uma nota

Para criar uma etiqueta, introduza um símbolo cardinal (`#`) no editor, seguido de uma palavra-chave. Por exemplo, `#reunião`.

Também pode adicionar etiquetas utilizando a [[Propriedades|propriedade]] `tags`. As etiquetas em YAML devem ser sempre formatadas como uma lista:

```yaml
---
tags:
  - receita
  - culinária
---
```

## Encontrar notas usando etiquetas

Para encontrar notas usando o plugin [[Pesquisar]], utilize o [[Pesquisar#Operadores de pesquisa|operador de pesquisa]] `tag` no seu termo de pesquisa, por exemplo `tag:#reunião`.

Também pode pesquisar etiquetas clicando nelas nas suas notas.

Para encontrar notas usando o plugin [[Painel de tags]], selecione **Tags: Mostrar painel de tags** na [[Paleta de comando]] e depois selecione a etiqueta que pretende pesquisar.

## Etiquetas aninhadas

As etiquetas aninhadas definem hierarquias de etiquetas que facilitam a localização e filtragem de etiquetas relacionadas.

Crie etiquetas aninhadas usando barras (`/`) no nome da etiqueta, por exemplo `#inbox/para-ler` e `#inbox/a-processar`.

- Na [[Pesquisar|Pesquisa]], `tag:inbox` corresponderá a `#inbox` bem como a todas as etiquetas aninhadas como `#inbox/para-ler`.  
- No [[Painel de tags]], as etiquetas aninhadas são mostradas como pertencentes à sua etiqueta principal.  
- No [[Introdução ao Bases|Bases]], as etiquetas aninhadas são reconhecidas pela função [[Funções#hasTag|`hasTag`]], pelo que `file.hasTag("a")` corresponderá tanto a `#a` como a `#a/b`.  

## Formato de etiquetas

Pode usar qualquer um dos seguintes caracteres nas suas etiquetas:

- Letras alfabéticas
- Números
- Underscore (`_`)
- Hífen (`-`)
- Barra (`/`) para [[#Etiquetas aninhadas]]
- Caracteres Unicode comummente aceites, incluindo emojis e outros símbolos

As etiquetas devem conter pelo menos um carácter não numérico. Por exemplo, #1984 não é uma etiqueta válida, mas #a1984 é.

As etiquetas não são sensíveis a maiúsculas e minúsculas. Por exemplo, #etiqueta e #ETIQUETA serão tratadas como idênticas.

> [!note] 
> As etiquetas são apresentadas com as maiúsculas e minúsculas com que foram criadas pela primeira vez no [[Painel de tags]]. 
> Por exemplo, criar #Etiqueta e depois #ETIQUETA apresentará #Etiqueta para ambas. 

As etiquetas não podem conter espaços em branco. Para separar duas ou mais palavras, pode usar os seguintes formatos:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
