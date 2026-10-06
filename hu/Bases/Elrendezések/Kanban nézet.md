---
permalink: bases/views/kanban
---
A Kanban egy [[Nézetek|nézet]] típus, amelyet a [[Bevezetés a Bázisokba|Bázisokban]] használhatsz.

Válaszd a ![[lucide-kanban-square.svg#icon]] **Kanban** lehetőséget a nézet menüből, hogy a fájlokat oszlopokba rendezett kártyákként jelenítsd meg. Minden oszlop az eredmények csoportosításához használt tulajdonság egy-egy értékét jelöli.


> [!note] Obsidian 1.14+ szükséges
> A Kanban nézetek az Obsidian 1.14-es és újabb verzióiban érhetők el.


## Kártyák csoportosítása oszlopokba

A Kanban nézethez szükséges egy tulajdonság az eredmények csoportosításához.

1. Válaszd a **Csoport** lehetőséget az eszköztáron. Telefonon válaszd a **Megjelenítés → Csoport** lehetőséget.
2. A **Csoportosítás** alatt válassz egy tulajdonságot.

Azok a fájlok, amelyeknek nincs értékük a kiválasztott tulajdonságnál, a **Nincs érték** oszlopban jelennek meg.

> [!info] 
> Ha képlet vagy a `file.folder`-től eltérő fájl tulajdonság szerint csoportosítasz, nem tudod mozgatni a kártyákat vagy oszlopokat, és nem hozhatsz létre jegyzeteket az oszlopokból. A csoportok sorrendjét és láthatóságát továbbra is [[Nézetek#Csoportok átrendezése, elrejtése és hozzáadása|kezelheted]] a **Csoport** menüben.

## Munka kártyákkal és oszlopokkal

- Húzz egy kártyát egy másik oszlopba a csoportosított tulajdonság frissítéséhez az adott jegyzetben. Csak Markdown jegyzeteket lehet oszlopok között mozgatni, kivéve ha `file.folder` szerint csoportosítasz – ebben az esetben a kártya mozgatása a fájlt az adott mappába helyezi át.
- Válaszd a plusz ikont egy oszlop fejlécében, vagy a ![[lucide-plus.svg#icon]] **Új** gombot egy oszlop alján egy jegyzet létrehozásához az adott oszlop értékével.
- Húzd az oszlop fejlécét az oszlop sorrendjének módosításához. Az automatikus sorrend visszaállításához nyisd meg a **Csoport** menüt, és válassz automatikus rendezési sorrendet a **Kézi** helyett.
- Használd a **Csoport** menüt az [[Nézetek#Csoportok átrendezése, elrejtése és hozzáadása|oszlopok átrendezéséhez, elrejtéséhez vagy hozzáadásához]].
- Használd a ![[lucide-list.svg#icon]] **Tulajdonságok** menüt az egyes kártyákon megjelenített tulajdonságok kiválasztásához. Az első tulajdonság jelenik meg a kártya címeként.

## Beállítások

A Kanban nézet beállításai a [[Nézetek#Nézet beállítások|Nézet beállításokban]] konfigurálhatók.

- Üres oszlopok elrejtése
- Oszlop szélessége
- Kép tulajdonság
- Illesztés
- Képarány

### Üres oszlopok elrejtése

Elrejti azokat az oszlopokat, amelyek nem tartalmaznak kártyákat.

### Oszlop szélessége

Meghatározza az egyes oszlopok és kártyáik szélességét.

### Kép tulajdonság

A Kanban kártyák támogatnak egy opcionális borítóképet, amely a kártya tetején jelenik meg. A támogatott tulajdonságértékek megegyeznek a [[Kártyák nézet#Kép tulajdonság|Kártyák nézet kép tulajdonságával]].

### Illesztés

Ha van beállított kép tulajdonság, ez a beállítás határozza meg, hogyan jelenik meg a kép a kártyán.

- **Fedés:** A kép kitölti a kártya tartalmi területét. Ha nem fér el, a kép levágásra kerül.
- **Tartalmazás:** A kép addig lesz méretezve, amíg bele nem fér a kártya tartalmi területébe. A kép nem kerül levágásra.

### Képarány

A borítókép magasságát a képarány határozza meg. Módosítsd ezt a beállítást, hogy a képet alacsonyabbá vagy magasabbá tedd.
