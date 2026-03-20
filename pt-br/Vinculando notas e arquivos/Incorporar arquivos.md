---
permalink: embeds
cssclasses:
  - soft-embed
aliases:
  - Vinculando notas e arquivos/Incorporando arquivos
---
DESCRIPTION: Aprenda como você pode incorporar outras notas e mídias em suas notas. Ao incorporar arquivos em suas notas, você pode reutilizar conteúdo em todo o seu cofre.

Para incorporar um arquivo no seu cofre, adicione um ponto de exclamação (`!`) na frente de um [[Links internos|Link interno]]. Você pode incorporar arquivos em qualquer um dos [[Formatos de arquivo aceitos]].

> [!tip] Incorporar ao arrastar e soltar
> No desktop, você também pode arrastar e soltar arquivos suportados diretamente na sua nota para incorporá-los automaticamente.

## Incorporar uma nota em outra nota

Para incorporar uma nota:

```md
![[Links internos]]
```

Você também pode incorporar links para [[Links internos#Link para um cabeçalho em uma nota|cabeçalhos]] e [[Links internos#Link para um bloco em uma nota|blocos]].

```md
![[Links internos#^b15695]]
```

O texto abaixo é um exemplo de um bloco incorporado:

![[Links internos#^b15695]]

## Incorporar uma imagem em uma nota

Para incorporar uma imagem:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Você pode alterar as dimensões da imagem adicionando `|640x480` ao destino do link, onde 640 é a largura e 480 é a altura.

```md
![[Engelbart.jpg|100x145]]
```

Se você especificar apenas a largura, a imagem será redimensionada de acordo com sua proporção original. Por exemplo, `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Você também pode incorporar uma imagem hospedada externamente usando um link Markdown. Você pode controlar a largura e a altura da mesma forma que um link wiki.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Incorporar um arquivo de áudio em uma nota

Para incorporar um arquivo de áudio:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Incorporar um PDF em uma nota

Para incorporar um PDF:

```md
![[Document.pdf]]
```

Você também pode abrir uma página específica no PDF adicionando `#page=N` ao destino do link, onde `N` é o número da página:

```md
![[Document.pdf#page=3]]
```

Você também pode especificar a altura em pixels para o visualizador de PDF incorporado, adicionando `#height=[number]` ao link. Por exemplo:

```md
![[Document.pdf#height=400]]
```

## Incorporar uma lista em uma nota

Para incorporar uma lista de uma nota diferente, primeiro adicione um [[Links internos#Link para um bloco em uma nota|identificador de bloco]] à sua lista:

```md

- item da lista 1
- item da lista 2

^my-list-id
```

Em seguida, vincule à lista usando o identificador de bloco:

```md
![[Minha nota#^my-list-id]]
```

## Incorporar resultados de pesquisa

![[Pesquisa#Incorporar resultados de pesquisa em uma nota]]
