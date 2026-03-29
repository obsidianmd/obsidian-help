---
permalink: aliases
cssclasses:
  - soft-embed
---
Se pretende referenciar um ficheiro utilizando nomes diferentes, considere adicionar _alcunhas_ à nota. Uma alcunha é um nome alternativo para uma nota.

Utilize alcunhas para coisas como acrónimos, apelidos, ou para se referir a uma nota num idioma diferente.

Se está apenas a tentar alterar a aparência de uma ligação num local específico, veja como [[Ligações internas#Alterar o texto de apresentação da ligação|Alterar o texto de apresentação da ligação]].

![[Ligações internas#^callout-internal-links-link-text]]

## Adicionar uma alcunha a uma nota

Para adicionar uma alcunha a uma nota, adicione a propriedade `aliases` na nota [[Propriedades]]. As alcunhas devem ser sempre formatadas como uma lista em YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Ligar a uma nota usando uma alcunha

Para ligar a uma nota usando uma alcunha:

1. Comece a escrever a alcunha numa [[Ligações internas|ligação interna]]. Qualquer alcunha aparece na lista de sugestões, com um ícone de seta curva ao lado.
2. Prima `Enter` para selecionar a alcunha.

O Obsidian cria a ligação com a alcunha como texto de apresentação personalizado, por exemplo `[[Artificial Intelligence|AI]]`.

> [!note] Nota
> Em vez de apenas usar a alcunha como destino da ligação (`[[AI]]`), o Obsidian utiliza o formato de ligação `[[Artificial Intelligence|AI]]` para garantir a interoperabilidade com outras aplicações que utilizam o formato Wikilink.

## Encontrar menções sem link para uma alcunha

Ao utilizar [[Links inversos]], pode encontrar menções sem link de alcunhas.

Por exemplo, depois de definir "AI" como alcunha para "Artificial intelligence", pode ver menções de "AI" noutras notas.

Se ligar uma menção sem link a uma alcunha, o Obsidian transforma a menção numa [[Ligações internas|ligação interna]] com a alcunha como texto de apresentação.
