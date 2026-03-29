---
permalink: embeds
cssclasses:
  - soft-embed
---
Ismerje meg, hogyan ágyazhat be más jegyzeteket és médiát a jegyzeteibe. A fájlok beágyazásával tartalmakat használhat újra a széfjében.

Egy fájl beágyazásához a széfben adjon hozzá egy felkiáltójelet (`!`) egy [[Belső hivatkozások|belső hivatkozás]] elé. Bármely [[Elfogadott fájlformátumok|elfogadott fájlformátumban]] beágyazhat fájlokat.

> [!tip] Fogd és vidd beágyazás
> Asztali gépen a támogatott fájlokat közvetlenül a jegyzetbe húzva automatikusan beágyazhatja őket.

## Jegyzet beágyazása egy másik jegyzetbe

Jegyzet beágyazásához:

```md
![[Belső hivatkozások]]
```

Beágyazhat hivatkozásokat [[Belső hivatkozások#Hivatkozás egy jegyzet fejlécére|fejlécekre]] és [[Belső hivatkozások#Hivatkozás egy jegyzet blokkjára|blokkokra]] is.

```md
![[Belső hivatkozások#^b15695]]
```

Az alábbi szöveg egy beágyazott blokk példája:

![[Belső hivatkozások#^b15695]]

## Kép beágyazása egy jegyzetbe

Kép beágyazásához:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

A kép méreteit megváltoztathatja, ha a hivatkozás célhelyéhez hozzáadja a `|640x480` értéket, ahol 640 a szélesség és 480 a magasság.

```md
![[Engelbart.jpg|100x145]]
```

Ha csak a szélességet adja meg, a kép az eredeti képarányának megfelelően méreteződik. Például: `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Külső helyen tárolt képet is beágyazhat Markdown hivatkozás használatával. A szélességet és magasságot ugyanúgy szabályozhatja, mint wikihivatkozásnál.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Hangfájl beágyazása egy jegyzetbe

Hangfájl beágyazásához:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## PDF beágyazása egy jegyzetbe

PDF beágyazásához:

```md
![[Document.pdf]]
```

A PDF egy adott oldalát is megnyithatja, ha a hivatkozás célhelyéhez hozzáadja a `#page=N` értéket, ahol `N` az oldal száma:

```md
![[Document.pdf#page=3]]
```

A beágyazott PDF-megjelenítő magasságát pixelben is megadhatja a `#height=[number]` hozzáadásával a célhelyhez. Például:

```md
![[Document.pdf#height=400]]
```

## Lista beágyazása egy jegyzetbe

Egy lista beágyazásához egy másik jegyzetből először adjon hozzá egy [[Belső hivatkozások#Hivatkozás egy jegyzet blokkjára|blokk-azonosítót]] a listához:

```md

- listaelem 1
- listaelem 2

^my-list-id
```

Ezután hivatkozzon a listára a blokk-azonosító használatával:

```md
![[Jegyzetem#^my-list-id]]
```

## Keresési eredmények beágyazása

![[Keresés#Keresési eredmények beágyazása egy jegyzetbe]]
