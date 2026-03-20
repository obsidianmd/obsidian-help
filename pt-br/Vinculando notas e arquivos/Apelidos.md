---
permalink: aliases
cssclasses:
  - soft-embed
aliases:
  - Vinculando notas e arquivos/Apelidos
---
Se você deseja referenciar um arquivo usando nomes diferentes, considere adicionar _apelidos_ à nota. Um apelido é um nome alternativo para uma nota.

Use apelidos para coisas como acrônimos, abreviações, ou para se referir a uma nota em um idioma diferente.

Se você está apenas tentando mudar a aparência de um link em um lugar específico, veja como [[Links internos#Alterar o texto de exibição do link|Alterar o texto de exibição do link]].

![[Links internos#^callout-internal-links-link-text]]

## Adicionar um apelido a uma nota

Para adicionar um apelido a uma nota, adicione a propriedade `aliases` nas [[Propriedades]] da nota. Os apelidos devem sempre ser formatados como uma lista em YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Vincular a uma nota usando um apelido

Para vincular a uma nota usando um apelido:

1. Comece a digitar o apelido em um [[Links internos|link interno]]. Qualquer apelido aparecerá na lista de sugestões, com um ícone de seta curva ao lado.
2. Pressione `Enter` para selecionar o apelido.

O Obsidian cria o link com o apelido como seu texto de exibição personalizado, por exemplo `[[Inteligência Artificial|IA]]`.

> [!note] Nota
> Em vez de apenas usar o apelido como destino do link (`[[IA]]`), o Obsidian usa o formato de link `[[Inteligência Artificial|IA]]` para garantir a interoperabilidade com outros aplicativos que usam o formato de link wiki.

## Encontrar menções desvinculadas de um apelido

Usando [[Links inversos]], você pode encontrar menções desvinculadas de apelidos.

Por exemplo, após definir "IA" como um apelido para "Inteligência artificial", você pode ver menções de "IA" em outras notas.

Se você vincular uma menção desvinculada a um apelido, o Obsidian transforma a menção em um [[Links internos|link interno]] com o apelido como seu texto de exibição.
