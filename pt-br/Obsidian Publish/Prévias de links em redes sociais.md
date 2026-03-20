---
permalink: publish/social-share
---
Muitas redes sociais exibem uma prévia rica do seu site quando um usuário compartilha um link para ele. Usando [[Propriedades]], você pode personalizar como suas notas aparecem na prévia.

> [!warning] Aviso
> As tags substituídas nesta seção são **apenas** visíveis por rastreadores web. Navegadores web comuns recebem a página não modificada por questões de desempenho.

## Descrição

O Obsidian gera automaticamente uma descrição com base no conteúdo da nota, mas você pode fornecer a sua própria usando `description`.

```yaml
---
description: Uma introdução ao nosso sistema solar.
---
```

> [!note] Meta tags
> `description` substitui a descrição gerada automaticamente em `<meta name="description" content="...">` e os equivalentes para `og:description` e `twitter:description`.

## Imagem

Você pode usar uma imagem personalizada para a prévia do link, adicionando `image` ou `cover` com um caminho para a imagem. A imagem deve estar enviada ao Publish.

O caminho pode ser um caminho absoluto a partir da raiz do seu cofre:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

O caminho para a imagem diferencia letras maiúsculas de minúsculas. No nosso exemplo anterior, temos um caminho para uma imagem chamada `Cover image.png`. O caminho abaixo não funcionará, porque está usando letras maiúsculas e minúsculas incorretamente.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

No lugar de um caminho absoluto no seu cofre, você também pode usar uma url externa:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` e `cover` são idênticos. Use apenas um deles.

> [!note] Meta tags
> `image` e `cover` substituem a imagem gerada automaticamente em `<meta property="og:image" content="...">`.
