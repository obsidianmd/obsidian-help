---
permalink: tags
---
Značky sú kľúčové slová alebo témy, ktoré vám pomáhajú rýchlo nájsť požadované poznámky.

## Pridanie značky do poznámky

Na vytvorenie značky zadajte v editore symbol mriežky (`#`), za ktorým nasleduje kľúčové slovo. Napríklad `#meeting`.

Značky môžete pridať aj pomocou [[Vlastnosti|vlastnosti]] `tags`. Značky v YAML by mali byť vždy formátované ako zoznam:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Vyhľadávanie poznámok pomocou značiek

Na vyhľadávanie poznámok pomocou pluginu [[Hľadať]] použite vo vyhľadávacom výraze [[Hľadať#Operátory vyhľadávania|operátor vyhľadávania]] `tag`, napríklad `tag:#meeting`.

Značky môžete vyhľadávať aj kliknutím na ne v poznámkach.

Na vyhľadávanie poznámok pomocou pluginu [[Panel značiek|Panel značiek]] vyberte v [[Paleta príkazov|palete príkazov]] **Tags: Show tags** a potom vyberte značku, ktorú chcete vyhľadať.

## Vnorené značky

Vnorené značky definujú hierarchie značiek, ktoré uľahčujú vyhľadávanie a filtrovanie súvisiacich značiek.

Vnorené značky vytvoríte pomocou lomiek (`/`) v názve značky, napríklad `#inbox/to-read` a `#inbox/processing`.

- Pri [[Hľadať|vyhľadávaní]] `tag:inbox` nájde `#inbox` aj všetky vnorené značky, napríklad `#inbox/to-read`.
- V [[Panel značiek|Paneli značiek]] sa vnorené značky zobrazujú ako patriace k nadradenej značke.
- V [[Úvod do Databáz|Databázach]] sú vnorené značky rozpoznávané funkciou [[Funkcie#hasTag|`hasTag`]], takže `file.hasTag("a")` nájde `#a` aj `#a/b`.

## Formát značiek

V značkách môžete použiť nasledujúce znaky:

- Písmená abecedy
- Čísla
- Podčiarkovník (`_`)
- Pomlčka (`-`)
- Lomka (`/`) pre [[#Vnorené značky]]
- Bežne akceptované znaky Unicode vrátane emoji a iných symbolov

Značky musia obsahovať aspoň jeden nečíselný znak. Napríklad #1984 nie je platná značka, ale #y1984 áno.

Značky nerozlišujú veľkosť písmen. Napríklad #tag a #TAG budú považované za identické.

> [!note]
> Značky sa zobrazujú s veľkosťou písmen, s akou boli prvýkrát vytvorené, v [[Panel značiek|Paneli značiek]].
> Napríklad ak vytvoríte #Tag a potom #TAG, obe sa zobrazia ako #Tag.

Značky nemôžu obsahovať medzery. Na oddelenie dvoch alebo viacerých slov môžete použiť nasledujúce formáty:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
