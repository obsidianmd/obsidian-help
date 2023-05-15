Muitas redes sociais exibem uma visualização avançada do seu site quando um usuário compartilha um link para ele. Usando [[Metadata]], você pode personalizar como suas notas aparecem na visualização.

## Descrição

Obsidian gera automaticamente uma descrição com base no conteúdo da nota, mas você pode fornecer sua própria descrição usando `description`.

```yaml
---
descrição: Uma introdução ao nosso sistema solar.
---
```

> [!nota] Meta tags
> `description` substitui a descrição gerada automaticamente em `<meta name="description" content="...">` e os equivalentes para `og:description` e `twitter:description`.

## Imagem

Você pode usar uma imagem personalizada para a visualização do link, adicionando `image` ou `cover` com um caminho para a imagem.

O caminho pode ser um caminho absoluto da raiz do seu cofre:

```yaml
---
capa: "Anexos/imagem da capa.png"
---
```

Ou, um URL externo:

```yaml
---
imagem: "https://example.com/cover%20image.png"
---
```

`image` e `cover` são idênticos. Use apenas um deles.

> [!nota] Meta tags
> `image` e `cover` substitui a imagem gerada automaticamente em `<meta property="og:image" content="...">`.