---
permalink: web-clipper/highlight
aliases:
  - Weboldalak kiemelése
---
Az [[Bevezetés az Obsidian Web Clipper használatába|Web Clipper]] lehetővé teszi szöveg kiemelését weboldalakon, és kiválaszthatja az Obsidianbe menteni kívánt elemeket. A kiemelések mentésre kerülnek, így megtekintheti őket, amikor visszatér egy oldalra.

A kiemelések a bővítmény segítségével menthetők az Obsidianbe. A kiemelő beállításait a bővítmény beállításaiban adhatja meg.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## A kiemelő használata

A kiemelő élő weboldalakon vagy az [[Olvasó|Olvasó]] nézetben használható. Az Olvasó nézetben a szöveg kijelölése lehetőséget ad annak kiemelésére.

A kijelöléseket automatikusan is hozzáadhatja a kiemelésekhez a kiemelő aktiválásával:

- A kiemelő ikon a bővítmény paneljén vagy az Olvasó eszköztárán.
- Gyorsbillentyűk, a bővítmény beállításaiban testreszabható.
- Helyi menü, a meglátogatott weboldal jobb kattintásával.

A kiemelő bekapcsolása után minden kijelölt szöveg, kép és elem hozzáadódik a kiemelésekhez. A fenti módszerek mindegyike lehetővé teszi a kiemelőből való kilépést is.

## Kiemelések hozzáadása jegyzetekhez

Három lehetőség van arra, hogyan kerüljenek a kiemelések a kivágott jegyzetekbe:

- **Oldal tartalmának kiemelése** — közvetlenül a szöveghez adja a kiemeléseket az `==kiemelés==` [[Obsidian Flavored Markdown|szintaxissal]].
- **Oldal tartalmának cseréje** — a kiemelések listáját adja vissza, az oldal tartalma nélkül.
- **Ne tegyen semmit** — az eredeti tartalmat adja vissza kiemelések nélkül.
 
Ezek a beállítások a sablon `{{content}}` [[Változók|változóját]] módosítják. A kiemeléseket közvetlenül is hozzáadhatja a sablonhoz a `{{highlights}}` változó használatával, például:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Kiemelések megtekintése és keresése

Az összes létrehozott kiemelés megtekinthető a Kiemelések oldalon. Ezt az oldalt a **Beállítások** → **Kiemelő** menüpontban nyithatja meg.

## Kiemelések exportálása

A kiemelések `.json` fájlba exportálhatók, akár a Beállítások oldalon, akár a Kiemelések oldalon.
