---
permalink: tags
---
A címkék kulcsszavak vagy témák, amelyek segítenek gyorsan megtalálni a keresett jegyzeteket.

## Címke hozzáadása egy jegyzethez

Címke létrehozásához írjon be egy kettős keresztet (`#`) a szerkesztőben, amelyet egy kulcsszó követ. Például: `#meeting`.

Címkéket a `tags` [[Tulajdonságok|tulajdonság]] használatával is hozzáadhat. A YAML-ben a címkéket mindig listaként kell formázni:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Jegyzetek keresése címkék alapján

A [[Keresés]] bővítmény használatával a `tag` [[Keresés#Keresési operátorok|keresési operátor]] segítségével kereshet jegyzeteket, például `tag:#meeting`.

Címkékre kereshet úgy is, hogy rájuk kattint a jegyzeteiben.

A [[Címke panel|Címke panel]] bővítmény használatával válassza a **Címkék: Címke panel megjelenítése** lehetőséget a [[Parancspaletta|parancspalettán]], majd válassza ki a keresni kívánt címkét.

## Beágyazott címkék

A beágyazott címkék címkehierarchiákat határoznak meg, amelyek megkönnyítik a kapcsolódó címkék keresését és szűrését.

Hozzon létre beágyazott címkéket perjel (`/`) használatával a címke nevében, például `#inbox/to-read` és `#inbox/processing`.

- A [[Keresés|Keresésben]] a `tag:inbox` megtalálja az `#inbox` címkét, valamint az összes beágyazott címkét, például az `#inbox/to-read` címkét is.
- A [[Címke panel|Címke panelben]] a beágyazott címkék a szülő címkéjük alatt jelennek meg.
- A [[Bevezetés a Bázisokba|Bázisokban]] a beágyazott címkéket a [[Függvények#hasTag|`hasTag`]] függvény felismeri, így a `file.hasTag("a")` egyaránt megfelel az `#a` és az `#a/b` címkéknek.

## Címkeformátum

A címkékben az alábbi karaktereket használhatja:

- Betűk
- Számok
- Aláhúzás (`_`)
- Kötőjel (`-`)
- Perjel (`/`) a [[#Beágyazott címkék|beágyazott címkékhez]]
- Általánosan elfogadott Unicode karakterek, beleértve az emojikat és egyéb szimbólumokat

A címkéknek legalább egy nem numerikus karaktert kell tartalmazniuk. Például a #1984 nem érvényes címke, de a #y1984 igen.

A címkék nem különböztetik meg a kis- és nagybetűket. Például a #tag és a #TAG azonosként lesz kezelve.

> [!note]
> A címkék azzal az írásmóddal jelennek meg a [[Címke panel|Címke panelben]], amellyel először lettek létrehozva.
> Például ha létrehozza a #Tag címkét, majd a #TAG címkét, mindkettő #Tag formában jelenik meg.

A címkék nem tartalmazhatnak szóközöket. Két vagy több szó elválasztásához az alábbi formátumokat használhatja:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
