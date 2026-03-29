---
permalink: web-clipper/capture
---
Miután telepíted a [[Bevezetés az Obsidian Web Clipper használatába|Web Clipper]] böngészőbővítményt, többféleképpen is elérheted, a böngésződtől függően:

1. Az Obsidian ikon a böngésző eszköztárán.
2. Gyorsbillentyűk, a bővítmény aktiválásához a billentyűzetről.
3. Helyi menü, a meglátogatott weboldal jobb kattintásával.

Egy oldal Obsidianbe mentéséhez kattints a **Hozzáadás az Obsidianhez** gombra.

## Oldal rögzítése

A bővítmény megnyitásakor a Web Clipper az aktuális weboldalról kinyeri az adatokat a [[Obsidian Web Clipper/Sablonok|sablonod]] beállításai szerint. Saját sablonokat hozhatsz létre, és testreszabhatod a kimenetet [[Változók|változók]] és [[Szűrők|szűrők]] használatával.

Alapértelmezés szerint a Web Clipper intelligensen megkísérli kizárólag a fő cikktartalmat kinyerni, kizárva az oldal egyéb elemeit. Ezt a viselkedést azonban a következő módokon felülírhatod:

- Ha egyéni sablon van megadva, a sablonodat használja.
- Ha van kijelölés, a kijelölést használja. A `Ctrl/Cmd+A` billentyűkombinációval kijelölheted a teljes oldalt.
- Ha vannak [[Weboldalak kiemelése|kiemelések]], a kiemeléseket használja.

## Képek letöltése

A képek nem töltődnek le automatikusan a Web Clipper használatakor. Ehelyett a képek a webes URL-jükre hivatkoznak. Ez helyet takarít meg a széfedben, de azt jelenti, hogy a képek nem lesznek elérhetők offline, vagy ha az URL megszűnik működni.

A képeket bármelyik fájlhoz letöltheted az Obsidianben a [[Parancspaletta|parancspaletta]] **Aktuális fájl csatolmányainak letöltése** nevű parancsával. Ezt a parancsot gyorsbillentyűhöz is rendelheted az Obsidianben.

## Gyorsbillentyűk

A Web Clipper billentyűparancsokat tartalmaz, amelyekkel felgyorsíthatod a munkafolyamatodat. A billentyűkiosztás módosításához lépj a **Web Clipper beállítások** → **Általános** menübe, és kövesd a böngésződhöz tartozó utasításokat. A kiosztás minden böngészőben módosítható, kivéve a Safarit, amely nem támogatja a gyorsbillentyűk szerkesztését.

| Művelet                 | macOS         | Windows/Linux  |
| ----------------------- | ------------- | -------------- |
| Clipper megnyitása       | `Cmd+Shift+O` | `Ctrl+Shift+O` |
| Gyors kivágás           | `Opt+Shift+O` | `Alt+Shift+O`  |
| Kiemelő mód ki/be       | `Opt+Shift+H` | `Alt+Shift+H`  |

## Felület funkciói

A Web Clipper felülete négy részre oszlik:

1. **Fejléc**, ahol sablonokat válthatsz, bekapcsolhatod a [[Weboldalak kiemelése|kiemelést]], az [[Olvasó|olvasási módot]], és elérheted a beállításokat.
2. **Tulajdonságok** mutatja az oldalból kinyert [[Tulajdonságok|metaadatokat]], amelyek [[Tulajdonságok|tulajdonságokként]] kerülnek mentésre az Obsidianben.
3. **Jegyzet tartalom**, amely az Obsidianbe kerül mentésre.
4. **Lábléc**, ahol kiválaszthatod a széfet és mappát, és hozzáadhatod az Obsidianhez.

A fejléc funkciói:

- **Sablon** legördülő menü a Web Clipper beállításaiban mentett [[Obsidian Web Clipper/Sablonok|sablonok]] közötti váltáshoz.
- **Továbbiak (...)** gomb az oldal változóinak megjelenítéséhez, amelyeket sablonokban használhatsz.
- **Kiemelő** gomb a [[Weboldalak kiemelése|kiemelés]] bekapcsolásához.
- **Fogaskerék** gomb a Web Clipper beállítások megnyitásához.

A lábléc funkciói:

- **Hozzáadás az Obsidianhez** gomb az adatok Obsidianbe mentéséhez.
- **Széf** legördülő menü a Web Clipper beállításaiban mentett széfek közötti váltáshoz.
- **Mappa** mező a mentési mappa megadásához.
- **Értelmező** [[Weboldalak értelmezése|természetes nyelvű promptok]] futtatásához az oldalon.
