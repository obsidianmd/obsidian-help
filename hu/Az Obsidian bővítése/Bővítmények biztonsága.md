---
permalink: plugin-security
---
Az Obsidian csapata komolyan veszi a biztonságot. Ez az oldal ismerteti a közösségi bővítmények telepítésével járó kockázatokat, és azt, hogy az Obsidian csapata hogyan kezeli ezeket.

## Korlátozott mód

Alapértelmezés szerint az Obsidian korlátozott módban fut, hogy megakadályozza harmadik féltől származó kód futtatását. Csak akkor kapcsolja ki a korlátozott módot, ha megbízik a telepített bővítmények szerzőiben.

A korlátozott mód kikapcsolása:

1. Nyissa meg a **[[Beállítások]]** menüt.
2. Az oldalsó menüben válassza a **Közösségi bővítmények** lehetőséget.
3. Válassza a **Közösségi bővítmények engedélyezése** lehetőséget.

A korlátozott mód bekapcsolása:

1. Nyissa meg a **[[Beállítások]]** menüt.
2. Az oldalsó menüben válassza a **Közösségi bővítmények** lehetőséget.
3. A **Korlátozott mód** mellett válassza a **Bekapcsolás** lehetőséget.

A telepített bővítmények a széfben maradnak akkor is, ha bekapcsolja a korlátozott módot, de az Obsidian figyelmen kívül hagyja őket.

## Bővítmények képességei

Technikai korlátok miatt az Obsidian nem tudja megbízhatóan korlátozni a bővítményeket meghatározott engedélyekre vagy hozzáférési szintekre. Ez azt jelenti, hogy a bővítmények öröklik az Obsidian hozzáférési szintjeit. Ennek eredményeként vegye figyelembe az alábbi példákat arra, hogy mire képesek a közösségi bővítmények:

- A közösségi bővítmények hozzáférhetnek a számítógépén lévő fájlokhoz.
- A közösségi bővítmények csatlakozhatnak az internethez.
- A közösségi bővítmények további programokat telepíthetnek.

> [!tip] 
> Ha érzékeny adatokkal dolgozik és közösségi bővítményt szeretne telepíteni, javasoljuk, hogy használat előtt végezzen független biztonsági auditot a bővítményen.

## Bővítmények felülvizsgálati folyamata

A közösségi bővítmények a bővítménytárba való beküldéskor esnek át egy kezdeti felülvizsgálaton. Minden bővítménynek meg kell felelnie az [Obsidian fejlesztői irányelveknek](https://docs.obsidian.md/Developer+policies).

Az Obsidian csapata kicsi, és nem tudja manuálisan felülvizsgálni a közösségi bővítmények minden új kiadását. Ehelyett a közösség segítségére támaszkodunk a bővítményekkel kapcsolatos problémák azonosításában és jelentésében.

- Ha kisebb biztonsági sebezhetőséget fedez fel egy közösségi bővítményben, tekintse meg a bővítmény szerzőjének `security.md` vagy `readme.md` fájlját a jelentés módjáról. Kritikus kategóriájú hibák esetén kérjük, jelezze a problémát az [[Súgó és támogatás#Kapcsolatfelvétel az Obsidian támogatással|Obsidian támogatásnak]] is.
- Ha azt gyanítja, hogy egy közösségi bővítmény rosszindulatú, jelentse az [[Súgó és támogatás#Kapcsolatfelvétel az Obsidian támogatással|Obsidian támogatásnak]], vagy küldjön privát üzenetet moderátorainknak.
