---
permalink: plugins/daily-notes
---
A Napi jegyzetek egy [[Alap bővítmények|alap bővítmény]], amely megnyit egy jegyzetet a mai dátum alapján, vagy létrehozza, ha még nem létezik. Használd a napi jegyzeteket naplók, teendőlisták vagy napi feljegyzések készítésére a nap során felfedezett dolgokról.

A mai napi jegyzet megnyitásához tedd a következők egyikét:

- Kattints a **Mai jegyzet megnyitása** ![[lucide-calendar.svg#icon]] gombra a [[Szalag|szalagon]].
- Futtasd a **Mai jegyzet megnyitása** parancsot a [[Parancspaletta|parancspalettából]].
- [[Gyorsbillentyűk#Gyorsbillentyű beállítása|Használj gyorsbillentyűt]] a **Mai jegyzet megnyitása** parancshoz.

Alapértelmezés szerint az Obsidian egy új üres jegyzetet hoz létre a mai dátum nevével ÉÉÉÉ-HH-NN formátumban.

> [!tip] Ha a napi jegyzeteidet külön mappában szeretnéd tárolni, a bővítmény beállításaiban az <u>Új fájl helye</u> opcióval megadhatod, hogy az Obsidian hol hozza létre az új napi jegyzeteket.

> [!example]- Automatikus almappák
> A napi jegyzeteidet automatikusan mappákba rendezheted a **Dátumformátum** funkció segítségével.
> 
> Például, ha a dátumformátumot `YYYY/MMMM/YYYY-MMM-DD` értékre állítod, a jegyzeteid a következőképpen jönnek létre: `2023/January/2023-Jan-01`. 
> 
> További formázási lehetőségeket a [momentJS](https://momentjs.com/docs/#/displaying/format/) dokumentációs oldalon fedezhetsz fel.

## Napi jegyzet létrehozása sablonból

Ha a napi jegyzeteid azonos szerkezetűek, használhatsz [[Sablonok|sablont]], hogy előre meghatározott tartalmat adj a napi jegyzeteidhez létrehozásukkor.

1. Hozz létre egy új jegyzetet „Napi sablon" névvel az alábbi szöveggel (vagy bármivel, ami számodra értelmes!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Feladatok

   - [ ]
   ```

2. Nyisd meg a **[[Beállítások|Beállításokat]]**.
3. Az oldalsávban kattints a **Napi jegyzetek** elemre a **Bővítmény beállítások** alatt.
4. A **Sablonfájl helye** melletti szövegmezőben válaszd ki a „Napi sablon" jegyzetet.

Az Obsidian a sablont fogja használni, amikor legközelebb új napi jegyzetet hozol létre.

## Napi jegyzetek és tulajdonságok

Amikor a Napi jegyzetek bővítmény aktiválva van és bármely jegyzetben található dátum tulajdonság, az Obsidian automatikusan megpróbál létrehozni egy hivatkozást az adott nap napi jegyzetéhez. Például, ha egy `example.md` című jegyzet tartalmaz egy `2023-01-01` dátum tulajdonságot, ez a dátum kattintható hivatkozássá alakul az [[Nézetek és szerkesztési mód#Élő előnézet|élő előnézet]] nézetben.

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
