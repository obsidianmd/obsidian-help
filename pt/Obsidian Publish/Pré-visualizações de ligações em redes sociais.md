---
permalink: publish/social-share
---
Muitas redes sociais apresentam uma pré-visualização rica do seu site quando um utilizador partilha uma ligação para o mesmo. Utilizando [[Propriedades]], pode personalizar como as suas notas aparecem na pré-visualização.

> [!warning] Aviso
> As etiquetas substituídas nesta secção são **apenas** visíveis por rastreadores web. Os navegadores web normais recebem a página não modificada por razões de desempenho.

## Descrição

O Obsidian gera automaticamente uma descrição com base no conteúdo da nota, mas pode fornecer a sua própria utilizando `description`.

```yaml
---
description: Uma introdução ao nosso sistema solar.
---
```

> [!note] Meta tags
> `description` substitui a descrição gerada automaticamente em `<meta name="description" content="...">` e os equivalentes para `og:description` e `twitter:description`.

## Imagem

Pode usar uma imagem personalizada para a pré-visualização da ligação, adicionando `image` ou `cover` com um caminho para a imagem. A imagem deve ser carregada para o Publish.

O caminho pode ser um caminho absoluto a partir da raiz do seu cofre:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

O caminho para a imagem diferencia maiúsculas de minúsculas. No nosso exemplo anterior, temos um caminho para uma imagem chamada `Cover image.png`. O caminho abaixo não funcionará, porque está a usar maiúsculas/minúsculas incorretamente.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

Em vez de um caminho absoluto no seu cofre, também pode usar um URL externo:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` e `cover` são idênticos. Use apenas um deles.

> [!note] Meta tags
> `image` e `cover` substituem a imagem gerada automaticamente em `<meta property="og:image" content="...">`.
