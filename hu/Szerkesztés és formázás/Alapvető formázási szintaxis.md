---
permalink: syntax
publish: true
mobile: true
description: 'Ismerd meg, hogyan alkalmazhatsz alapvető formázást a jegyzeteidben az Obsidianban Markdown használatával.'
---
Ismerje meg, hogyan alkalmazhat alapvető formázást a jegyzeteihez [Markdown](https://daringfireball.net/projects/markdown/) használatával. Haladóbb formázási szintaxisért tekintse meg a [[Haladó formázási szintaxis]] oldalt.

## Bekezdések

Bekezdések létrehozásához Markdown-ban használjon **üres sort** a szövegblokkok elválasztásához. Minden üres sorral elválasztott szövegblokk külön bekezdésként jelenik meg.

```md
Ez egy bekezdés.

Ez egy másik bekezdés.
```

Ez egy bekezdés.

Ez egy másik bekezdés.

A szövegsorok közötti üres sor külön bekezdéseket hoz létre. Ez az alapértelmezett viselkedés a Markdown-ban.

> [!tip]- Többszörös szóközök
> Az egymás melletti többszörös szóközök a bekezdéseken belül és között egyetlen szóközzé olvadnak össze az [[Nézetek és szerkesztési mód#Olvasási nézet|Olvasási nézetben]] vagy az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] webhelyeken.
> 
> ```md
> Többszörös          egymás melletti          szóközök
> 
> 
> 
> és többszörös üres sorok bekezdések között.
> ```
> 
> > Többszörös          egymás melletti          szóközök
> > 
> > 
> > 
> > és többszörös üres sorok bekezdések között.
> 
> Ha meg szeretné akadályozni a szóközök összeolvadását, vagy több üres szóközt szeretne hozzáadni, használja az `&nbsp;` (nem törhető szóköz) vagy `<br>` (sortörés) HTML-címkéket.

### Sortörések

Alapértelmezés szerint az Obsidian-ban az `Enter` egyszeri megnyomása új sort hoz létre a jegyzetben, de ez a megjelenített kimenetben ugyanannak a bekezdésnek a *folytatásaként* kezelődik, a tipikus Markdown viselkedésnek megfelelően. Ha sortörést szeretne beszúrni egy bekezdésen *belül* anélkül, hogy új bekezdést kezdene, az alábbi lehetőségek közül választhat:

- Adjon hozzá **két szóközt** a sor végéhez az `Enter` megnyomása előtt, vagy
- Használja a `Shift+Enter` billentyűkombinációt a sortörés közvetlen beszúrásához.

> [!question]- Miért nem hoz létre több sortörést az `Enter` többszöri megnyomása olvasási nézetben?
> A Markdown-ban egyetlen `Enter` figyelmen kívül marad, és az egymás utáni többszörös `Enter` lenyomás csupán egy új bekezdést eredményez. Ez a viselkedés a Markdown lágy tördelési szabályával összhangban van, ahol a további üres sorok nem generálnak további sortöréseket vagy bekezdéseket – egyetlen bekezdéselválasztóvá olvadnak össze. Így kezeli a Markdown alapértelmezés szerint a szöveget, biztosítva, hogy a bekezdések természetesen folyjanak váratlan törések nélkül.

Az Obsidian tartalmaz egy **[[Beállítások#Szigorú sortörés|Szigorú sortörés]]** beállítást, amely az Obsidian-t a szabványos Markdown specifikáció szerinti sortörés-kezelésre állítja.

A funkció engedélyezéséhez:

1. Nyissa meg a **[[Beállítások]]** menüt.
2. Lépjen a **Szerkesztő** fülre.
3. Engedélyezze a **Szigorú sortörés** beállítást.

Amikor a **Szigorú sortörés** engedélyezve van az Obsidian-ban, a sortörések háromféle viselkedést mutatnak attól függően, hogyan vannak a sorok elválasztva:

**Egyetlen Enter szóközök nélkül**: Egyetlen `Enter` záró szóközök nélkül a két külön sort egyetlen sorrá egyesíti a megjelenítéskor.

```md
első sor
második sor
```

Megjelenítve:

első sor második sor

**Egyetlen Enter két vagy több záró szóközzel**: Ha két vagy több szóközt ad a első sor végéhez az `Enter` megnyomása előtt, a két sor ugyanannak a bekezdésnek a része marad, de sortöréssel (HTML `<br>` elem) vannak elválasztva. Ebben a példában két aláhúzásjelet használunk a szóközök jelölésére.

```md
harmadik sor__  
negyedik sor
```

Megjelenítve:

harmadik sor<br>
negyedik sor

**Dupla Enter (záró szóközökkel vagy anélkül)**: Az `Enter` kétszeri (vagy többszöri) megnyomása két különálló bekezdésre (HTML `<p>` elemek) választja szét a sorokat, függetlenül attól, hogy ad-e szóközöket az első sor végéhez.

```md
ötödik sor

hatodik sor
```

Megjelenítve:

<p>ötödik sor</p>
<p>hatodik sor</p>

## Fejlécek

Fejléc létrehozásához adjon hozzá legfeljebb hat `#` szimbólumot a fejléc szövege elé. A `#` szimbólumok száma határozza meg a fejléc szintjét (ahogy a [[Vázlat]] mutatja).

```md
# Ez egy 1. szintű fejléc
## Ez egy 2. szintű fejléc
### Ez egy 3. szintű fejléc
#### Ez egy 4. szintű fejléc
##### Ez egy 5. szintű fejléc
###### Ez egy 6. szintű fejléc
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Ez egy 1. szintű fejléc</h1>
<h2>Ez egy 2. szintű fejléc</h2>
<h3>Ez egy 3. szintű fejléc</h3>
<h4>Ez egy 4. szintű fejléc</h4>
<h5>Ez egy 5. szintű fejléc</h5>
<h6>Ez egy 6. szintű fejléc</h6>

## Félkövér, dőlt, kiemelés

Szövegformázás alkalmazható a [[Szerkesztési gyorsbillentyűk]] segítségével is.

| Stílus | Szintaxis | Példa | Kimenet |
|-|-|-|-|
| Félkövér | `** **` vagy `__ __` | `**Félkövér szöveg**` | **Félkövér szöveg** |
| Dőlt | `* *` vagy `_ _`  | `*Dőlt szöveg*` | *Dőlt szöveg* |
| Áthúzott | `~~ ~~` |  `~~Áthúzott szöveg~~` | ~~Áthúzott szöveg~~ |
| Kiemelés | `== ==` |  `==Kiemelt szöveg==` | ==Kiemelt szöveg== |
| Félkövér és beágyazott dőlt | `** **` és `_ _`  | `**Félkövér és _beágyazott dőlt_ szöveg**` | **Félkövér és _beágyazott dőlt_ szöveg** |
| Félkövér és dőlt | `*** ***` vagy `___ ___` |  `***Félkövér és dőlt szöveg***` | ***Félkövér és dőlt szöveg*** |

A formázás egyszerű szövegként való megjelenítéséhez helyezzen egy fordított perjelet `\` elé.

\*\*Ez a sor nem lesz félkövér\*\*

```markdown
\*\*Ez a sor nem lesz félkövér\*\*
```

\**Ez a sor dőlt lesz és mutatja a csillagokat*\*

```markdown
\**Ez a sor dőlt lesz és mutatja a csillagokat*\*
```

## Belső hivatkozások

Az Obsidian két formátumot támogat a [[Belső hivatkozások|belső hivatkozásokhoz]] a jegyzetek között:

- Wikihivatkozás: `[[A mozgás három törvénye]]`
- Markdown: `[A mozgás három törvénye](A%20mozgás%20három%20törvénye.md)`

## Külső hivatkozások

Ha külső URL-re szeretne hivatkozni, létrehozhat egy beágyazott hivatkozást úgy, hogy a hivatkozás szövegét szögletes zárójelbe (`[ ]`), majd az URL-t kerek zárójelbe (`( )`) helyezi.

```md
[Obsidian Súgó](https://help.obsidian.md)
```

[Obsidian Súgó](https://help.obsidian.md)

Külső hivatkozásokat is létrehozhat más széfek fájljaihoz egy [[Obsidian URI|Obsidian URI]] segítségével.

```md
[Jegyzet](obsidian://open?vault=MainVault&file=Note.md)
```

### Szóközök elkerülése hivatkozásokban

Ha az URL szóközöket tartalmaz, azokat `%20`-szal kell helyettesítenie.

```md
[Jegyzetem](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Az URL-t szögletes zárójelekbe (`< >`) is becsomagolhatja.

```md
[Jegyzetem](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Külső képek

Képeket adhat hozzá külső URL-ekkel úgy, hogy egy `!` szimbólumot helyez egy [[#Külső hivatkozások|külső hivatkozás]] elé.

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Módosíthatja a kép méreteit úgy, hogy `|640x480`-at ad a hivatkozás célhelyéhez, ahol 640 a szélesség és 480 a magasság.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Ha csak a szélességet adja meg, a kép az eredeti képarányának megfelelően méreteződik. Például:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Tipp
> Ha a széfen belülről szeretne képet hozzáadni, [[Fájlok beágyazása#Kép beágyazása egy jegyzetbe|beágyazhat egy képet a jegyzetbe]].

## Idézetek

Szöveget idézhet úgy, hogy `>` szimbólumot helyez a szöveg elé.

```md
> Az emberiség egyre összetettebb és sürgősebb problémákkal szembesül, és az ezekkel való megbirkózás hatékonysága kritikus fontosságú a társadalom stabilitása és folyamatos fejlődése szempontjából.

\- Doug Engelbart, 1961
```

> Az emberiség egyre összetettebb és sürgősebb problémákkal szembesül, és az ezekkel való megbirkózás hatékonysága kritikus fontosságú a társadalom stabilitása és folyamatos fejlődése szempontjából.

\- Doug Engelbart, 1961

> [!tip]- Tipp
> Az idézetet [[Felhívások|felhívássá]] alakíthatja, ha `[!info]`-t ad hozzá az idézet első soraként.

## Listák

Rendezetlen listát a `-`, `*` vagy `+` karakterek szöveg elé helyezésével hozhat létre.

```md
- Első listaelem
- Második listaelem
- Harmadik listaelem
```

- Első listaelem
- Második listaelem
- Harmadik listaelem

Rendezett lista létrehozásához kezdje minden sort egy számmal, amelyet `.` vagy `)` szimbólum követ.

```md
1. Első listaelem
2. Második listaelem
3. Harmadik listaelem
```

1. Első listaelem
2. Második listaelem
3. Harmadik listaelem

```md
1) Első listaelem
2) Második listaelem
3) Harmadik listaelem
```

1) Első listaelem
2) Második listaelem
3) Harmadik listaelem

Használhatja a `Shift+Enter` billentyűkombinációt [[#Sortörések|sortörés]] beszúrásához egy rendezett listán belül a számozás megváltoztatása nélkül.

```md
1. Első listaelem
   
2. Második listaelem
3. Harmadik listaelem
   
4. Negyedik listaelem
5. Ötödik listaelem
6. Hatodik listaelem
```

### Teendőlisták

Teendőlista létrehozásához kezdje minden listaelemet egy kötőjellel és szóközzel, amelyet `[ ]` követ.

```md
- [x] Ez egy befejezett feladat.
- [ ] Ez egy befejezetlen feladat.
```

- [x] Ez egy befejezett feladat.
- [ ] Ez egy befejezetlen feladat.

Olvasási nézetben a jelölőnégyzetre kattintva válthatja a feladat állapotát.

> [!tip]- Tipp
> Bármilyen karaktert használhat a zárójeleken belül a befejezettség jelölésére.
>
> ```md
> - [x] Tej
> - [?] Tojás
> - [-] Tojás
> ```
>
> - [x] Tej
> - [?] Tojás
> - [-] Tojás

### Beágyazott listák

Bármilyen típusú listát – rendezett, rendezetlen vagy teendőlistát – beágyazhat bármilyen más típusú lista alá.

Beágyazott lista létrehozásához húzzon be egy vagy több listaelemet. A listatípusokat keverheti a beágyazott struktúrán belül:

```md
1. Első listaelem
   1. Rendezett beágyazott listaelem
2. Második listaelem
   - Rendezetlen beágyazott listaelem
```

1. Első listaelem
   1. Rendezett beágyazott listaelem
2. Második listaelem
   - Rendezetlen beágyazott listaelem

Hasonlóképpen, beágyazott teendőlistát hozhat létre egy vagy több listaelem behúzásával:

```md
- [ ] Feladat 1
	- [ ] Alfeladat 1
- [ ] Feladat 2
	- [ ] Alfeladat 1
```

- [ ] Feladat 1
	- [ ] Alfeladat 1
- [ ] Feladat 2
	- [ ] Alfeladat 1

Használja a `Tab` vagy `Shift+Tab` billentyűt a kijelölt listaelemek behúzásához vagy behúzásának csökkentéséhez az egyszerű rendezéshez.

## Vízszintes elválasztó

Három vagy több csillagot `***`, kötőjelet `---` vagy aláhúzásjelet `___` használhat önálló sorban vízszintes vonal hozzáadásához. A szimbólumokat szóközökkel is elválaszthatja.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Kód

A kódot formázhatja beágyazottan egy mondaton belül, vagy önálló blokkban.

### Beágyazott kód

A kódot egy mondaton belül egyszeres visszaidézőjelekkel formázhatja.

```md
A `visszaidézőjelek` közötti szöveg kódként jelenik meg.
```

A `visszaidézőjelek` közötti szöveg kódként jelenik meg.

Ha visszaidézőjelet szeretne elhelyezni egy beágyazott kódblokkban, vegye körül dupla visszaidézőjelekkel, így: beágyazott ``kód visszaidézőjellel ` belül``.

### Kódblokkok

Kód blokkként való formázásához zárja három vagy több visszaidézőjel vagy három vagy több tilde közé.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

Kódblokkot úgy is létrehozhat, hogy a szöveget `Tab` billentyűvel vagy 4 szóközzel húzza be.
`````md
    cd ~/Desktop
`````

Szintaxiskiemelést adhat a kódblokkhoz, ha nyelvkódot ír az első visszaidézőjel-sor után.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

Az Obsidian a Prism-et használja szintaxiskiemeléshez. További információkért tekintse meg a [Támogatott nyelvek](https://prismjs.com/#supported-languages) oldalt.

> [!info]+ PrismJS és szerkesztési nézetek
> A [[Nézetek és szerkesztési mód#Forrás mód|Forrás mód]] és az [[Nézetek és szerkesztési mód#Élő előnézet|Élő előnézet]] nem támogatja a PrismJS-t, és eltérően jelenítheti meg a szintaxiskiemelést.

#### Beágyazott kódblokkok

Amikor egy kódblokkot kell elhelyeznie egy másik kódblokkon belül (például amikor a kódblokkok használatát dokumentálja), a külső kódblokkhoz három-nál több visszaidézőjelet vagy tildét használhat.

Beágyazott kódblokkok létrehozásához használjon négy vagy több visszaidézőjelet (vagy tildét) a külső blokkhoz, míg a belső blokk hármat használ:
`````md
````md
Így hozhat létre kódblokkot:
```js
console.log("Hello world")
```
````
`````

Visszaidézőjeleket és tildéket is keverhet. Ez különösen hasznos, amikor olyan kóddal dolgozik, amely más kódblokkokat generál:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

A fő elv az, hogy a külső kódblokknak **több** kerítés-karaktert (visszaidézőjelet vagy tildét) kell használnia, mint bármely belső kódblokknak, vagy más kerítés-karakter típust kell használnia.

## Lábjegyzetek

Lábjegyzeteket[^footnote] adhat jegyzeteihez az alábbi szintaxissal:

[^footnote]: Ez egy lábjegyzet.

```md
Ez egy egyszerű lábjegyzet[^1].

[^1]: Ez a hivatkozott szöveg.
[^2]: Adjon hozzá 2 szóközt minden új sor elejéhez.
  Így írhat több sorra kiterjedő lábjegyzeteket.
[^note]: A megnevezett lábjegyzetek továbbra is számokként jelennek meg, de megkönnyítik a hivatkozások azonosítását és összekapcsolását.
```

Beágyazott lábjegyzeteket is használhat egy mondaton belül. Vegye figyelembe, hogy a kalap jel a zárójeleken kívülre kerül.

```md
Beágyazott lábjegyzeteket is használhat. ^[Ez egy beágyazott lábjegyzet.]
```

> [!note] Megjegyzés
> A beágyazott lábjegyzetek csak olvasási nézetben működnek, élő előnézetben nem.

Használja a [[Lábjegyzetek nézet]]et a jegyzetben található összes lábjegyzet megtekintéséhez.

## Megjegyzések

Megjegyzéseket adhat hozzá úgy, hogy a szöveget `%%` közé zárja. A megjegyzések csak szerkesztési nézetben láthatók.

```md
Ez egy %%beágyazott%% megjegyzés.

%%
Ez egy blokk megjegyzés.

A blokk megjegyzések több sorra is kiterjedhetnek.
%%
```

## Markdown szintaxis elkerülése

Bizonyos esetekben szükség lehet speciális Markdown karakterek megjelenítésére, például `*`, `_` vagy `#`, a formázás aktiválása nélkül. Ezen karakterek szó szerinti megjelenítéséhez helyezzen fordított perjelet (`\`) eléjük.

> [!example] Gyakran elkerülendő karakterek
> 
> - Csillag: `\*`
> - Aláhúzásjel: `\_`
> - Kettős kereszt: `\#`
> - Visszaidézőjel: `` \` ``
> - Függőleges vonal (táblázatokban): `\|`
> - Tilde: `\~`

```md
\*Ez a szöveg nem lesz dőlt\*.
```

\*Ez a szöveg nem lesz dőlt\*.

Számozott listák esetén szükség lehet a szám utáni pont elkerülésére az automatikus listaformázás megakadályozásához. Helyezze a fordított perjelet (`\`) a pont elé, **nem** a szám elé.

```md
1\. Ez nem lesz listaelem.
```

1\. Ez nem lesz listaelem.

## További információk

A haladóbb formázási szintaxisról, például táblázatokról, diagramokról és matematikai kifejezésekről a [[Haladó formázási szintaxis]] oldalon olvashat.

Az Obsidian Markdown-értelmezéséről bővebben az [[Obsidian Flavored Markdown]] oldalon tájékozódhat.
