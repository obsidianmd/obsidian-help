---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Ismerje meg, hogyan hivatkozhat jegyzetekre, mellékletekre és egyéb fájlokra a jegyzeteiből belső hivatkozások segítségével.'
---
Tanulja meg, hogyan hivatkozhat jegyzetekre, mellékletekre és más fájlokra a jegyzeteiből _belső hivatkozások_ segítségével. A jegyzetek összekapcsolásával tudáshálózatot hozhat létre. ^b15695

Az Obsidian automatikusan frissítheti a belső hivatkozásokat a széfjében, amikor átnevez egy fájlt. Ha inkább megerősítést szeretne kapni, letilthatja ezt a következő helyen:

**[[Beállítások]]** → **[[Beállítások#Fájlok és hivatkozások|Fájlok és hivatkozások]]** → **[[Beállítások#Belső hivatkozások automatikus frissítése|Belső hivatkozások automatikus frissítése]]**.

## A belső hivatkozások támogatott formátumai

Az Obsidian a következő hivatkozásformátumokat támogatja:

- Wikihivatkozás: `[[Three laws of motion]]` vagy `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` vagy `[Three laws of motion](Three%20laws%20of%20motion.md)`

A fenti példák egyenértékűek, és ugyanúgy jelennek meg a szerkesztőben, valamint ugyanarra a jegyzetre hivatkoznak.

> [!note] Megjegyzés
> A Markdown formátum használatakor ügyeljen arra, hogy a hivatkozás célját [URL-kódolja](https://en.wikipedia.org/wiki/Percent-encoding). Például a szóközök `%20` formátumúvá válnak.

Alapértelmezés szerint az Obsidian a tömörebb formátuma miatt wikihivatkozás formátumban hozza létre a hivatkozásokat. Ha az átjárhatóság fontos az Ön számára, letilthatja a wikihivatkozásokat, és helyette Markdown hivatkozásokat használhat.

A Markdown formátum használatához:

1. Nyissa meg a **[[Beállítások]]** menüt.
2. A **Fájlok és hivatkozások** alatt tiltsa le a **\[\[Wikihivatkozások\]\] használata** opciót.

Még ha le is tiltja a wikihivatkozás formátumot, továbbra is automatikusan kiegészíthet hivatkozásokat két szögletes zárójel (`[[`) beírásával. Amikor kiválasztja az egyik javasolt fájlt, az Obsidian Markdown hivatkozást generál helyette.

> [!note] Érvénytelen karakterek
> A következő karaktereket tartalmazó karakterlánc nem működhet hivatkozásként: `# | ^ : %% [[ ]]`.
> 
> Javasoljuk, hogy kerülje ezeket a karaktereket, és kövesse a [biztonságos fájlnévadási gyakorlatot](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Hivatkozás fájlra

Hivatkozás létrehozásához szerkesztési nézetben használja az alábbi módszerek egyikét:

- Írja be a `[[` karaktereket a szerkesztőben, majd válassza ki a fájlt, amelyre hivatkozni szeretne.
- Jelöljön ki szöveget a szerkesztőben, majd írja be a `[[` karaktereket.
- Nyissa meg a [[Parancspaletta|parancspalettát]], majd válassza a Belső hivatkozás hozzáadása lehetőséget.

![[Gyors váltó#^search-autocomplete-large]]

Bár bármely [[Elfogadott fájlformátumok|elfogadott fájlformátumra]] hivatkozhat, a Markdown-tól eltérő fájlformátumokra mutató hivatkozásoknak tartalmazniuk kell a kiterjesztést, például `[[Figure 1.png]]`.

> [!tip] Ha egy belső hivatkozás elé felkiáltójelet (!) tesz, beágyazhatja a hivatkozott tartalmat. További részletekért lásd: [[Fájlok beágyazása]].

> [!info] Kizárt fájlok
> A [[Beállítások#Kizárt fájlok|Kizárt fájlok]] mintáinak megfelelő fájlok alacsonyabb prioritást kapnak a hivatkozási javaslatokban belső hivatkozások létrehozásakor.

## Hivatkozás egy jegyzet fejlécére

Hivatkozhat jegyzeteken belüli adott fejlécekre, más néven _horgonyhivatkozásokra_.

**Hivatkozás fejlécre ugyanazon a jegyzeten belül**

Ha ugyanazon jegyzeten belüli fejlécre szeretne hivatkozni, írja be a `[[#` karaktereket, hogy megjelenjen a jegyzetben található fejlécek listája.

Például a `[[#Hivatkozott fájl előnézete]]` létrehoz egy hivatkozást a [[#Hivatkozott fájl előnézete]] részre.

**Hivatkozás egy másik jegyzet fejlécére**

Egy másik jegyzet fejlécére való hivatkozáshoz adjon hozzá egy kettőskeresztet (`#`) a hivatkozás célpontjának végéhez, amelyet a fejléc szövege követ.

Például a `[[Az Obsidianről#A hivatkozások elsőrangú polgárok]]` létrehoz egy hivatkozást a [[Az Obsidianről#A hivatkozások elsőrangú polgárok]] részre.

**Hivatkozás alfejlécekre**

Minden alfejléchez több kettőskereszt szimbólumot adhat hozzá.

Például a `[[Súgó és támogatás#Questions and advice#Report bugs and request features]]` létrehoz egy hivatkozást a [[Súgó és támogatás#Questions and advice#Report bugs and request features]] részre.

**Fejlécek keresése a széfben**

A teljes széfben való fejléc kereséshez használja a `[[## fejléc]]` szintaxist.

Például a `[[##` általánosan keres a széfben, míg a `[[## team]]` az összes olyan fejlécet keresi, amely tartalmazza a _team_ szót.

> [!info]- Képernyőkép fejléchivatkozás kereséséről
>
> ![[internal-links-header.png#interface]]

## Hivatkozás egy blokk-ra a jegyzetben

Egy blokk a jegyzet egy szövegegysége, például egy bekezdés, blokkidézet vagy listaelem.

Blokkra úgy hivatkozhat, hogy `#^` karaktereket ad a hivatkozás célpontjának végéhez, amelyet egy egyedi blokkazonosító követ. Például: `[[2023-01-01#^37066d]]`. Szerencsére nem kell manuálisan megkeresnie az azonosítót — amikor beírja a kalap jelet (`^`), megjelenik a javaslatok listája, amelyből kiválaszthatja a megfelelő blokkot.

*Egyszerű bekezdések* esetén helyezzen el egy szóközt, majd egy kalap jelet `^` és a blokkazonosítót a sor végén:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

*Strukturált blokkok* (listák, idézetek, felhívások, táblázatok) esetén a blokkazonosítónak külön sorban kell lennie, előtte és utána egy üres sorral:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

*Lista egyes sorai* esetén a blokkazonosító közvetlenül a felsorolásjelre helyezhető:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Nem támogatjuk az idézetek, felhívások és táblázatok egyes részeire mutató hivatkozásokat.

**Blokkok keresése a széfben**

A széfben blokkokat is kereshet hivatkozáshoz a `[[^^blokk]]` szintaxis használatával. Azonban több elem minősül blokknak a [[#Hivatkozás egy jegyzet fejlécére|fejléchivatkozásokhoz]] képest, így ez a lista sokkal hosszabb lesz.

> [!info]- Képernyőkép blokkhivatkozás kereséséről
> ![[link-block-heading.png#interface]]

Létrehozhat ember által olvasható blokkazonosítókat is úgy, hogy egy szóközt, majd egy kalap jelet (`^`) és az azonosítót adja hozzá. A blokkazonosítók csak latin betűkből, számokból és kötőjelekből állhatnak.

Például adja hozzá a `^quote-of-the-day` jelölést egy blokk végéhez:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Most hivatkozhat a blokkra a `[[2023-01-01#^quote-of-the-day]]` beírásával.

> [!warning] Átjárhatóság
> A blokkhivatkozások az Obsidian sajátosságai, és nem részei a szabványos Markdown formátumnak. A blokkhivatkozásokat tartalmazó hivatkozások nem működnek az Obsidianon kívül.

## A hivatkozás megjelenített szövegének módosítása

Alapértelmezés szerint az Obsidian a hivatkozás szövegét az eredeti formájában jeleníti meg. Például:
- `[[Example]]` megjelenik mint [[Example]]
- `[[Example#Details]]` megjelenik mint [[Example#Details]]

Módosíthatja a hivatkozás megjelenítését a megjelenített szöveg testreszabásával:

**Wikihivatkozás formátum**:
Használjon függőleges vonalat (`|`) a megjelenített szöveg módosításához.

- `[[Example|Egyéni név]]` megjelenik mint [[Example|Egyéni név]]
- `[[Example#Details|Szakasz neve]]` megjelenik mint [[Example#Details|Szakasz neve]]

**Markdown formátum**:
Használja a `[Megjelenített szöveg](Hivatkozás URL)` formátumot a hivatkozás megjelenésének testreszabásához.

- `[Egyéni név](Example.md)` megjelenik mint [Egyéni név](Example.md)
- `[Szakasz neve](Example.md#Details)` megjelenik mint [Szakasz neve](Example.md#Details)

Ez a módszer hasznos egyszeri helyzetekben, amikor meg szeretné változtatni egy hivatkozás megjelenését egy adott kontextusban. Ha olyan alternatív hivatkozásnevet szeretne beállítani, amelyet a széfjében újra és újra felhasználhat, fontolja meg egy [[Alternatív nevek|alternatív név]] használatát.

Például ha rendszeresen hivatkozik a `[[Three laws of motion]]` jegyzetre `[[The 3 laws]]` formában, a "3 laws" alternatív névként való hozzáadásával elég csak azt beírnia — nem kell minden alkalommal egyéni megjelenített szöveget megadnia.

> [!tip] Tipp
> Használja a [[#A hivatkozás megjelenített szöveének módosítása|hivatkozás megjelenített szövegét]], amikor testre szeretné szabni, hogyan nézzen ki egy hivatkozás *egy adott helyen*.
> 
> Használjon [[Alternatív nevek|alternatív neveket]], amikor ugyanarra a jegyzetre *különböző nevekkel* szeretne hivatkozni a széfjében.
^callout-internal-links-link-text

## Hivatkozott fájl előnézete

> [!note] Megjegyzés
> A hivatkozott fájlok előnézetéhez először engedélyeznie kell az [[Oldal előnézet]] bővítményt.

Egy hivatkozott fájl előnézetéhez vigye az egeret egy belső hivatkozás fölé. Szerkesztési módban nyomja meg a `Ctrl` billentyűt (vagy `Cmd`-t macOS-en), miközben a kurzort a hivatkozás fölé viszi. A fájl tartalmának előnézete megjelenik a kurzor mellett.
