---
aliases:
- pseudônimo
- apelido
- Como/Adicionar aliases à nota
---

Se quiser fazer referência a um arquivo usando nomes diferentes, considere adicionar _aliases_ à nota. Um alias é um nome alternativo para uma nota.

Use pseudônimos para coisas como acrônimos, apelidos ou para se referir a uma nota em um idioma diferente.

## Adicione um alias a uma nota

Para adicionar um alias para uma nota, adicione uma propriedade `alias`, ou `aliases`, na nota [[Metadata|início]]:

```md
---
aliases: Doggo
---

# Cachorro
```

Você pode adicionar vários aliases usando vírgulas:

```md
---
pseudônimos: Doggo, Woofer, Yapper
---

# Cachorro
```

Ou você também pode adicionar vários aliases usando uma matriz YAML:

```md
---
aliases:
   - Cachorro
   - Woofer
   - Yapper
---

# Cachorro
```

## Link para uma nota usando um alias

Para vincular a uma nota usando um alias:

1. Comece digitando o alias em um [[Links internos|link interno]]. Qualquer alias aparece na lista de sugestões, com um ícone de seta curva ao lado dele.
2. Pressione `Enter` para selecionar o alias.

Obsidian cria o link com o alias como seu texto de exibição personalizado, por exemplo `[[Artificial Intelligence|AI]]`.

> [!nota]
> Em vez de apenas usar o alias como o destino do link (`[[AI]]`), a Obsidian usa o formato de link `[[Inteligência Artificial|AI]]` para garantir a interoperabilidade com outros aplicativos usando o formato Wikilink.

## Encontre menções não vinculadas para um alias

Ao usar [[Backlinks]], você pode encontrar menções não vinculadas de pseudônimos.

Por exemplo, depois de definir "AI" como um alias para "Inteligência artificial", você pode ver menções a "AI" em outras notas.

Se você vincular uma menção não vinculada a um alias, o Obsidian transforma a menção em um [[Links internos|link interno]] com o alias como texto de exibição.