---
permalink: embeds
cssclasses:
  - soft-embed
---
Saiba como pode incorporar outras notas e ficheiros multimédia nas suas notas. Ao incorporar ficheiros nas suas notas, pode reutilizar conteúdo no seu cofre.

Para incorporar um ficheiro no seu cofre, adicione um ponto de exclamação (`!`) à frente de uma [[Ligações internas|Ligação interna]]. Pode incorporar ficheiros em qualquer um dos [[Formatos de ficheiro aceites]].

> [!tip] Incorporar por arrastar e largar
> No ambiente de trabalho, também pode arrastar e largar ficheiros suportados diretamente na sua nota para os incorporar automaticamente.

## Incorporar uma nota noutra nota

Para incorporar uma nota:

```md
![[Ligações internas]]
```

Também pode incorporar ligações para [[Ligações internas#Ligar a um cabeçalho numa nota|cabeçalhos]] e [[Ligações internas#Ligar a um bloco numa nota|blocos]].

```md
![[Ligações internas#^b15695]]
```

O texto abaixo é um exemplo de um bloco incorporado:

![[Ligações internas#^b15695]]

## Incorporar uma imagem numa nota

Para incorporar uma imagem:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Pode alterar as dimensões da imagem, adicionando `|640x480` ao destino da ligação, onde 640 é a largura e 480 é a altura.

```md
![[Engelbart.jpg|100x145]]
```

Se especificar apenas a largura, a imagem é redimensionada de acordo com a sua proporção original. Por exemplo, `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Também pode incorporar uma imagem alojada externamente utilizando uma ligação Markdown. Pode controlar a largura e a altura da mesma forma que com um link wiki.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Incorporar um ficheiro de áudio numa nota

Para incorporar um ficheiro de áudio:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Incorporar um PDF numa nota

Para incorporar um PDF:

```md
![[Document.pdf]]
```

Também pode abrir uma página específica no PDF, adicionando `#page=N` ao destino da ligação, onde `N` é o número da página:

```md
![[Document.pdf#page=3]]
```

Também pode especificar a altura em píxeis para o visualizador de PDF incorporado, adicionando `#height=[number]` à ligação. Por exemplo:

```md
![[Document.pdf#height=400]]
```

## Incorporar uma lista numa nota

Para incorporar uma lista de uma nota diferente, primeiro adicione um [[Ligações internas#Ligar a um bloco numa nota|identificador de bloco]] à sua lista:

```md

- item da lista 1
- item da lista 2

^my-list-id
```

Depois, ligue à lista utilizando o identificador de bloco:

```md
![[My note#^my-list-id]]
```

## Incorporar resultados de pesquisa

![[Pesquisar#Incorporar resultados de pesquisa numa nota]]
