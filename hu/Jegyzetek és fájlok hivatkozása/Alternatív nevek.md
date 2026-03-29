---
permalink: aliases
cssclasses:
  - soft-embed
---
Ha egy fájlra különböző nevekkel szeretnél hivatkozni, fontold meg _alternatív nevek_ hozzáadását a jegyzethez. Az alternatív név egy jegyzet másodlagos neve.

Használj alternatív neveket olyan dolgokhoz, mint rövidítések, becenevek, vagy ha más nyelven szeretnél hivatkozni egy jegyzetre.

Ha csak egy adott helyen szeretnéd megváltoztatni egy hivatkozás megjelenését, nézd meg hogyan tudod [[Belső hivatkozások#A hivatkozás megjelenített szövegének módosítása|módosítani a hivatkozás megjelenített szövegét]].

![[Belső hivatkozások#^callout-internal-links-link-text]]

## Alternatív név hozzáadása egy jegyzethez

Egy jegyzethez alternatív név hozzáadásához add meg az `aliases` tulajdonságot a jegyzet [[Tulajdonságok]]-ban. Az alternatív neveket mindig listaként kell formázni YAML-ben.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Hivatkozás egy jegyzetre alternatív név használatával

Alternatív név használatával történő hivatkozáshoz:

1. Kezdd el beírni az alternatív nevet egy [[Belső hivatkozások|belső hivatkozásban]]. Minden alternatív név megjelenik a javaslatok listájában, mellette egy ívelt nyíl ikonnal.
2. Nyomd meg az `Enter` billentyűt az alternatív név kiválasztásához.

Az Obsidian létrehozza a hivatkozást az alternatív névvel mint egyéni megjelenített szöveggel, például `[[Artificial Intelligence|AI]]`.

> [!note] Megjegyzés
> Ahelyett, hogy az alternatív nevet használná hivatkozási célként (`[[AI]]`), az Obsidian a `[[Artificial Intelligence|AI]]` hivatkozásformátumot használja, hogy biztosítsa a más wikihivatkozás-formátumot használó alkalmazásokkal való együttműködést.

## Nem kapcsolt említések keresése alternatív névhez

A [[Visszahivatkozások]] használatával megtalálhatod az alternatív nevek nem kapcsolt említéseit.

Például, miután beállítottad az „AI"-t az „Artificial intelligence" alternatív neveként, láthatod az „AI" említéseit más jegyzetekben.

Ha egy nem kapcsolt említést egy alternatív névhez kapcsolsz, az Obsidian az említést [[Belső hivatkozások|belső hivatkozássá]] alakítja az alternatív névvel mint megjelenített szöveggel.
