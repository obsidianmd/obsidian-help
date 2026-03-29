---
permalink: glossary
---
Ez a szószedet tartalmazza a gyakori Obsidian-terminológiát.

## Alternatív név

Az **alternatív név** egy olyan [[#tulajdonság]], amely egy [[#jegyzet]] másodlagos neveit határozza meg.

## Melléklet

A **melléklet** egy [[Elfogadott fájlformátumok|elfogadott fájlformátumú]] fájl, amelyet a széfen kívül hoztak létre, és később adtak hozzá.

## Parancs

A **parancs** egy művelet, amelyet a [[Parancspaletta|Parancspalettából]] választva vagy egy [[#gyorsbillentyű]]höz rendelve lehet végrehajtani.

## Beágyazás

A **beágyazás** egy külső tartalomra való hivatkozás helyettesítését jelenti magával a tartalommal, például egy kép beszúrásához a jegyzetbe. Lásd még: [[Fájlok beágyazása]].

## Metaadatok

A metaadatok a [[#tulajdonság|tulajdonságok]] meghatározásának egy módja, amelynél [YAML](https://yaml.org/) vagy [JSON](https://www.json.org/) formátumot adunk a jegyzet elejéhez. Lásd még: [[Tulajdonságok#Tulajdonság formátum|Tulajdonság formátum]].

## Gráf

A **gráf** egy vizualizáció, amely kiemeli a [[#jegyzet|jegyzetek]] közötti kapcsolatokat. Lásd még: [[Gráf nézet]].

## Gyorsbillentyű

A **gyorsbillentyű** egy billentyűkombináció egy [[#parancs]] végrehajtásához. Lásd még: [[Gyorsbillentyűk]] és [[Gyorsbillentyűk|Útmutató/Gyorsbillentyűk használata]].

## Hivatkozás

A **hivatkozás** egy másik jegyzetre vagy fájlra mutat. Egy [[Belső hivatkozások|belső hivatkozás]] az aktuális széfben található fájlra mutat. Egy [[Alapvető formázási szintaxis#Külső hivatkozások|külső hivatkozás]] a széfen kívüli helyre mutat, jellemzően egy weboldalra.

## Fő terület

A **fő terület** az Obsidian alkalmazás központi területe, ahol elsősorban a [[#jegyzet|jegyzetek]] szerkesztése történik.

## Markdown

A Markdown egy jelölőnyelv szöveg formázásához, és az Obsidianban a jegyzetek elsődleges fájlformátuma (`.md` fájlok). Lásd még: [[Alapvető formázási szintaxis]].

## Jegyzet

A **jegyzet** egy Markdown fájl a [[#széf]]en belül.

## Bővítmény

A **bővítmény** további funkciókkal bővíti az Obsidiant.

- Az [[Alap bővítmények]]et az Obsidian csapata fejleszti, és alapértelmezetten elérhetők.
- A [[Közösségi bővítmények]]et külső fejlesztők készítik, és használatuk előtt [[Közösségi bővítmények#Közösségi bővítmény telepítése|telepíteni]] kell őket.

[Saját bővítményt is készíthetsz](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin).

## Kiugró ablak

Alapértelmezés szerint egy széf összes jegyzete ugyanabban az alkalmazásablakban nyílik meg. A **kiugró ablak** lehetővé teszi, hogy ugyanabból a széfből származó jegyzeteket külön ablakban nyiss meg, például egy második képernyőn való megjelenítéshez.

Lásd még: [[Kiugró ablakok]].

## Tulajdonság

A [[Tulajdonságok]] további információkat határoznak meg egy jegyzetről, például határidőt vagy szerzőt.

## Szalag

A **szalag** a gyakran használt műveletikonok tárolójaként szolgál.

Az asztali verzióban ez a bal szélső függőleges sáv.

A mobil verzióban egy menügomb ![[lucide-menu.svg#icon]] jelöli az [[#állapotsor|állapotsoron]].

## Oldalsáv

Egy terület, amely támogató [[#nézet|nézeteket]] tartalmaz [[#lap|lapokként]] rendezve. Az oldalsáv több [[#lapcsoport|lapcsoportra]] osztható.

Az Obsidian asztali verziójában két oldalsáv található, egy-egy a [[#fő terület]] mindkét oldalán. Mindkét oldalsáv elérhető a bal felső és jobb felső sarokban lévő ikonokkal, valamint balra vagy jobbra húzással. A jobb felső ikont nyomva kell tartani az ablak megnyitásához.

## Kódrészlet

A **kódrészlet**, vagyis [[CSS kódrészletek|CSS kódrészlet]], megváltoztatja az Obsidian megjelenését, akárcsak egy [[#téma]]. A témákkal ellentétben egyszerre több kódrészletet is alkalmazhatsz.

## Állapotsor

Az **állapotsor** az Obsidian alkalmazásban lényeges statisztikákat és állapotokat jelenít meg. Az asztali verzióban a jobb alsó sarokban található, míg mobileszközökön az alkalmazás alján helyezkedik el.

## Lap

A **lap** egy [[#nézet]]et tartalmaz. A lapok áthelyezhetők a [[#fő terület]]en és az [[#oldalsáv|oldalsávokon]] belül. Lásd még: [[Lapok]].

## Lapcsoport

A **lapcsoport** [[#lap|lapok]] gyűjteménye a [[#fő terület]]en. A lapcsoportban lévő lapok egymásra helyezhetők.

## Címke

A **címke** egy kettőskereszttel (`#`) kezdődő szó, például `#könyv`. A címkéket elsősorban kapcsolódó [[#jegyzet|jegyzetek]] megtalálásához használják.

## Téma

A **téma** megváltoztatja az Obsidian alkalmazás megjelenését [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) segítségével. A téma egyes részeit [[#kódrészlet|kódrészletekkel]] felülírhatod.

## Széf

`Alternatív nevek: helyi széf, helyi adatok`

A **széf** egy mappa a fájlrendszereden, amely [[#jegyzet|jegyzeteket]] és egy `.obsidian` mappát tartalmaz az Obsidian-specifikus konfigurációval. Lásd még: [[Hogyan tárolja az Obsidian az adatokat]].

### Távoli trezor

`Alternatív nevek: Távoli adatok`

A [[Helyi és távoli széfek|távoli trezor]] a helyi széfed másolata, amelyet az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] tart karban. A távoli trezor adatai a helyi adatok változásai alapján frissülnek.

## Nézet

A **nézet** információkat jelenít meg, például a [[Keresés|Keresés nézet]].
