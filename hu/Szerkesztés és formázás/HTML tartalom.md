---
permalink: html
publish: true
mobile: true
description: 'Ismerje meg, hogyan használható a HTML az Obsidianben, beleértve a Markdown renderelés korlátait és a HTML-blokkok követelményeit.'
---
Az Obsidian támogatja a HTML-t, hogy a jegyzeteidet a kívánt módon jeleníthesd meg, vagy akár [[Weboldalak beágyazása|weboldalakat ágyazhass be]]. A HTML engedélyezése a jegyzeteken belül kockázatokkal jár. A rosszindulatú kódok okozta károk megelőzése érdekében az Obsidian _szanálást_ végez a jegyzeteidben található összes HTML-en.

> [!example]
> A `<script>` elem normális esetben lehetővé teszi JavaScript futtatását betöltéskor. Ha az Obsidian nem szanálná a HTML-t, egy támadó rávehetnéd, hogy egy olyan szöveget illessz be, amely JavaScriptet tartalmaz, ami érzékeny információkat nyer ki a számítógépedről és visszaküldi azokat.

Mindazonáltal, mivel a Markdown szintaxis nem támogat minden formázási lehetőséget, a szanált HTML használata egy újabb módja lehet a jegyzeteid minőségének javításának. Az alábbiakban bemutatunk néhány gyakoribb HTML-felhasználást.

## HTML korlátozások

Az Obsidian specifikus korlátozásokkal rendelkezik a HTML használatakor a jegyzeteidben:

### Nincs Markdown a HTML-en belül

Az Obsidian nem rendereli a Markdown szintaxist a HTML elemeken belül. Ez egy szándékos tervezési döntés a teljesítmény optimalizálása és az értelmező bonyolultságának alacsonyan tartása érdekében nagy dokumentumok kezelésekor.

Például ez nem fog a várt módon működni:

```md
<div>
Ez **nem lesz** félkövér és ez `nem lesz` kód.
</div>
```

### A HTML blokkok önállóak kell legyenek

A HTML blokkoknak teljesnek kell lenniük, és nem tartalmazhatnak üres sorokat. Az üres sorok megszakítják a HTML blokkot.

Ez működni fog:

```md
<table>
<tr>
<td>Tartalom itt</td>
</tr>
</table>
```

Ez nem fog helyesen működni:

```md
<table>

<tr>

<td>Tartalom itt</td>

</tr>

</table>
```

### Amikor úgy tűnik, hogy a Markdown működik a HTML-ben

Egyes inline HTML címkék, mint a `<span>` vagy az `<a>`, korlátozott funkcionalitással rendelkeznek, és úgy tűnhet, hogy renderelnek Markdownt, de valójában nem ez történik. A Markdown a HTML kontextuson kívül kerül feldolgozásra.

A Markdown Obsidian általi kezelésével kapcsolatos további részletekért lásd: [[Obsidian Flavored Markdown]].

## Gyakori HTML-használat

> [!info] Az `<iframe>` használatáról további részletek a [[Weboldalak beágyazása]] oldalon találhatók.

### Megjegyzések

Az [[Alapvető formázási szintaxis#Megjegyzések|Markdown megjegyzések]] az előnyben részesített módja a rejtett megjegyzések hozzáadásának a jegyzeteidben. Azonban a Markdown jegyzetek konvertálásának egyes módszerei, mint például a [Pandoc](https://pandoc.org), korlátozottan támogatják a Markdown megjegyzéseket. Ezekben az esetekben használhatsz `<!-- HTML Megjegyzés -->` formátumot!

### Aláhúzás

Ha gyorsan alá kell húznod egy elemet a jegyzeteidben, használhatod az `<u>Példa</u>` formátumot az <u>aláhúzott szöveg</u> létrehozásához.

### Span/Div

A span és div címkék használhatók egyéni osztályok alkalmazására egy [[CSS kódrészletek|CSS kódrészletből]], vagy egyénileg definiált formázás alkalmazására a szöveg kijelölt területén. Például a `<span style="font-family: cursive">a szöveged</span>` használatával gyorsan <span style="font-family: cursive">megváltoztathatod a betűtípust</span>.

## Áthúzás

Szükséged van <s>szöveg</s> áthúzására? Használd az `<s>ezt</s>` az áthúzáshoz.
