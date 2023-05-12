---
aliases:
- Como/Trabalhar com tags
---

Tags são palavras-chave ou tópicos que ajudam você a encontrar rapidamente as notas que deseja.

## Adicione uma etiqueta a uma nota

Para criar uma tag, insira um símbolo de hashtag (#) no editor, seguido de uma palavra-chave. Por exemplo, `#reunião`.

Você também pode adicionar a tag ao [[metadata]]:

```yaml
---
etiqueta: reunião
---
```

Ou adicione várias tags:

```yaml
---
Tag:
   - receita
   - culinária
---
```

Você também pode adicionar várias tags em uma única linha, separando-as com vírgulas:

```yaml
---
tags: receita, cozinhar
---
```

## Encontre notas usando tags

Para encontrar notas usando o plug-in [[Search]], use a tag `[[Search#Search operator|search operator]] em seu termo de pesquisa, por exemplo `tag:#meeting`.

Você também pode pesquisar tags clicando nelas em suas anotações.

Para encontrar notas usando o plug-in [[Plugins/Tags|Tags]], selecione **Tags: Show tags** na [[Paleta de comandos]] e selecione a tag que deseja pesquisar.

## Tags aninhadas

Tags aninhadas definem hierarquias de tags que facilitam a localização e filtragem de tags relacionadas.

Crie tags aninhadas usando barras (`/`) no nome da tag, por exemplo `#inbox/to-read` e `#inbox/processing`.

Ambos os plugins [[Search]] e [[Plugins/Tags|Tags]] suportam tags aninhadas.

## Formato da etiqueta

Você pode usar qualquer um dos seguintes caracteres em suas tags:

- Letras alfabéticas
- Números
- Sublinhado (`_`)
- Hífen (`-`)
- Barra (`/`) para [[#Tags aninhadas]]

As tags devem conter pelo menos um caractere não numérico. Por exemplo, #1984 não é uma tag válida, mas #y1984 é.

As tags não podem conter espaços em branco. Para separar duas ou mais palavras, você pode usar os seguintes formatos:

- #CamelCase
- #PascalCase See More
- #snake_case
- #kebab-case