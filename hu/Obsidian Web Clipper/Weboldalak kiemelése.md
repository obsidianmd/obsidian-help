---
permalink: web-clipper/highlight
---
Az [[Bevezetés az Obsidian Web Clipper használatába|Web Clipper]] lehetővé teszi szöveg kiemelését weboldalakon, és kiválaszthatja az Obsidianbe menteni kívánt elemeket. A kiemelések mentésre kerülnek, így újra megtekintheti őket, amikor visszatér egy oldalra.

A kiemelések [[Weboldalak kivágása|rögzíthetők]] és elmenthetők az Obsidianbe, amikor megnyitja a bővítményt.

## Kiemelő bekapcsolása

A kiemelést többféleképpen kapcsolhatja be, böngészőjétől függően:

- A kiemelő ikon a bővítmény paneljén.
- Gyorsbillentyűk, a bővítmény aktiválásához a billentyűzetről.
- Helyi menü, a meglátogatott weboldal jobb kattintásával.

A kiemelő bekapcsolása után kijelölheti a kiemelni kívánt szöveget, képeket és elemeket.

## Kiemelő beállításai

A kiemelő viselkedését a Web Clipper beállításaiban módosíthatja. Itt exportálhatja kiemeléseit `.json` fájlba is.

Három lehetőség van arra, hogyan kerüljenek a kiemelések a kivágott jegyzetbe a `{{content}}` [[Változók|változón]] keresztül:

- **Oldal tartalmának kiemelése** — közvetlenül a szöveghez adja a kiemeléseket az `==kiemelés==` [[Obsidian Flavored Markdown|szintaxissal]].
- **Oldal tartalmának cseréje** — a kiemelések listáját adja vissza, az oldal tartalma nélkül.
- **Ne tegyen semmit** — az eredeti tartalmat adja vissza kiemelések nélkül.

A kiemeléseket közvetlenül hozzáadhatja a sablonhoz a `{{highlights}}` változó használatával, például:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
