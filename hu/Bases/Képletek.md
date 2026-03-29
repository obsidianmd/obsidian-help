---
permalink: formulas
description: 'A képletek lehetővé teszik számított tulajdonságok létrehozását más tulajdonságok adatainak felhasználásával. Számításokat végezhet, szöveget manipulálhat, dátumokkal dolgozhat és még sok mást tehet.'
---
A képletek lehetővé teszik számított tulajdonságok létrehozását a [[Bevezetés a Bázisokba|Bázisokban]] más [[Tulajdonságok|tulajdonságok]] adatainak felhasználásával. Számításokat végezhet, szöveget kezelhet, dátumokkal dolgozhat és még sok mást tehet.

## Mire képesek a képletek

A képletek a következőkben segíthetnek:

- **Értékek kiszámítása**, árak összeadása, összegek kiszámítása vagy matematikai műveletek végrehajtása.
- **Szöveg kezelése**, karakterláncok kombinálása, kis- és nagybetűk módosítása vagy részláncok kinyerése.
- **Dátumokkal való munka**, időkülönbségek kiszámítása, dátumok formázása vagy határidők meghatározása.
- **Logika alkalmazása**, feltételes utasítások használata különböző értékek megjelenítésére.
- **Listák feldolgozása**, listadatok szűrése, rendezése, leképezése vagy összesítése.

## Képlet tulajdonság létrehozása

Képlet tulajdonság létrehozásához:

1. A bázisban kattintson a **Tulajdonságok** elemre az eszköztárban.
2. Kattintson az **Új képlet** elemre a menü alján.
3. Adjon nevet a képlet tulajdonságnak.
4. Írja be a képletet a **Képlet** mezőbe.
5. Zárja be a párbeszédablakot.

A képletszerkesztő automatikusan kiegészíti a [[Függvények|függvények]] és tulajdonságok neveit gépelés közben, és ellenőrzi a képlet szintaxisát. Zöld pipa jelenik meg, ha a képlet érvényes.

A létrehozás után a képlet tulajdonságot bármely más tulajdonsághoz hasonlóan használhatja a bázisban. Hozzáadhatja [[Nézetek|nézetekhez]], használhatja szűrőkben, rendezhet vele és még sok mást tehet.

## Képlet írása

A képletszerkesztőben írjon be egy kifejezést tulajdonságok, operátorok és függvények használatával.

### Tulajdonságok hivatkozása

Különböző típusú tulajdonságokra hivatkozhat a képletekben:

- **Jegyzet tulajdonságok** — A jegyzet [[Tulajdonságok|metaadataiból]] származó tulajdonságok.
- **Fájl tulajdonságok** — Beépített tulajdonságok, mint a `file.name`, `file.size` vagy `file.mtime`.
- **Képlet tulajdonságok** — Más képletek a `formula.képlet_neve` formátummal.

**Példák:**

- `price * quantity` — két jegyzet tulajdonság szorzása
- `file.name + " - " + description` — fájlnév kombinálása egy jegyzet tulajdonsággal
- `formula.price_per_unit * 1.1` — egy másik képlet tulajdonság használata

### Operátorok használata

**Aritmetikai operátorok** matematikai műveleteket végeznek számokon:

- `price + tax` — összeadás
- `price - discount` — kivonás
- `price * quantity` — szorzás
- `price / quantity` — osztás
- `(part / whole) * 100` — zárójelek használata a műveleti sorrend meghatározásához

**Összehasonlító operátorok** értékeket hasonlítanak össze:

- `price > 100` — nagyobb mint
- `age < 18` — kisebb mint
- `status == "Done"` — egyenlő
- `status != "Done"` — nem egyenlő
- `file.mtime > now() - '7d'` — dátumok összehasonlítása

**Logikai operátorok** logikai feltételeket kombinálnak:

- `!completed` — tagadás
- `price > 0 && quantity > 0` — és
- `urgent || important` — vagy

További információk: [[Bázisok szintaxisa#Operátorok|Bázisok szintaxisa]].

### Függvények használata

A függvények műveleteket végeznek értékeken. Az elérhető függvények az adott érték típusától függenek. Tekintse meg a [[Függvények]] teljes listáját.

**Gyakori függvénykategóriák:**

- **Globális függvények** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Karakterlánc-függvények** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Szám-függvények** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Dátum-függvények** — `format()`, `relative()`, `date()`, `time()`
- **Lista-függvények** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Példák:**

- `if(price, "$" + price.toFixed(2), "")` feltételes meghatározása számformázással.
- `file.name.lower()` kisbetűssé alakítás.
- `tags.contains("urgent")` annak ellenőrzése, hogy a címkelista tartalmaz-e egy értéket.
- `due_date.format("YYYY-MM-DD")` dátum formázása.

## Képlet példák

### Határidő kiszámítása

Projekt esedékességi dátumának beállítása a kezdő dátum utáni 2 hétre:

```js
start_date + "2w"
```

### Késedelmes állapot megjelenítése

„Overdue" megjelenítése, ha az esedékességi dátum elmúlt és az állapot nem „Done":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Pénznem formázása

Ár megjelenítése 2 tizedesjeggyel és pénznem szimbólummal:

```js
if(price, "$" + price.toFixed(2), "")
```

### Listaelemek számlálása

Egy lista tulajdonság elemeinek megszámlálása:

```js
tasks.length
```

### Prioritási pontszám kiszámítása

Több tényező kombinálása prioritási pontszámmá:

```js
(impact * urgency) / effort
```

### Szöveges mezők kombinálása

Teljes név létrehozása vezetéknévből és keresztnévből:

```js
first_name + " " + last_name
```

### Összköltség kiszámítása

Havi költség szorzása a birtokolt hónapok számával:

```js
monthlyUses * formula.Owned.round()
```

## Adattípusok

A képletek különböző adattípusokkal működnek:

- **Karakterláncok** — Idézőjelek közé zárt szöveg: `"hello"` vagy `'world'`
- **Számok** — Numerikus értékek: `42`, `3.14`, `(2 + 2)`
- **Logikai értékek** — Igaz vagy hamis: `true`, `false`
- **Dátumok** — A `date()`, `today()` vagy `now()` függvényekkel létrehozva
- **Listák** — Értékek gyűjteményei: `[1, 2, 3]`
- **Objektumok** — Kulcs-érték párok: `{"name": "value"}`

A képlet kimeneti típusát a felhasznált adatok és függvények határozzák meg.

## Más képletek hivatkozása

A képletek hivatkozhatnak más képletekre, származtatott számításokat hozva létre. Például, ha van egy `price_per_unit` nevű képlete:

```js
price / quantity
```

Hivatkozhat rá egy másik képletben:

```js
formula.price_per_unit * 1.1
```

> [!warning] Kerülje a körkörös hivatkozásokat
> Egy képlet nem hivatkozhat önmagára közvetlenül vagy közvetve más képleteken keresztül.
