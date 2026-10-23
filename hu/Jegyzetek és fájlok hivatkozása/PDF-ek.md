---
permalink: pdf
publish: true
mobile: true
description: 'Ismerje meg, hogyan tekintheti meg, keresheti és hivatkozhatja a PDF-eket az Obsidianban, valamint hogyan exportálhat egy jegyzetet PDF formátumba.'
---
Az Obsidian beépített megjelenítővel nyitja meg a PDF fájlokat. PDF-et jegyzetbe is beágyazhat, hivatkozhat egy szakaszra, és bármely jegyzetet exportálhat PDF-ként. Az Obsidian által támogatott fájltípusokról lásd: [[Elfogadott fájlformátumok]].

> [!info]+ Egyes funkciók csak asztali gépen érhetők el
> Az Obsidian mobilalkalmazásban nem lehet PDF-ben keresni, idézetet vagy hivatkozást másolni a kijelölésre, valamint jegyzetet PDF-be exportálni.

## PDF megnyitása

A [[Fájlkezelő|Fájlkezelőben]] válasszon ki egy PDF-et, hogy megnyissa egy lapon.

> [!info]+ Az annotációk nem támogatottak
> Az Obsidian nem támogatja annotációk vagy kiemelések hozzáadását PDF-hez. PDF jelöléseihez használjon másik alkalmazást, majd nyissa meg a frissített fájlt a széfjében.

A megjelenítő rendelkezik egy eszköztárral a következő vezérlőkkel. Az Obsidian mobilalkalmazásban ugyanez az eszköztár jelenik meg.

- Az **Oldalsáv ki/be** megjeleníti vagy elrejti az oldalsávot, az **Oldalsáv beállításai** pedig megváltoztatja, mit mutat az oldalsáv.
- A **Kicsinyítés** és **Nagyítás** megváltoztatja az oldal méretét.
- A **Megjelenítés beállításai** megváltoztatja az oldalak elrendezését.
- Az oldalszám mező mutatja az aktuális oldalt. Írjon be egy oldalszámot az adott oldalra ugráshoz.

Magával a PDF fájllal való munkához, például átnevezéshez vagy mozgatáshoz, válassza a **További lehetőségek** ![[lucide-more-horizontal.svg#icon]] lehetőséget. A PDF-eknek kevesebb elem jelenik meg ebben a menüben, mint a jegyzeteknél. Lásd: [[További lehetőségek menü]].

## Navigálás a PDF-ben

Válassza az **Oldalsáv beállításai** lehetőséget, majd válassza ki, mit szeretne megjeleníteni.

- Az **Előnézeti képek** minden oldal kis előnézetét mutatja.
- A **Tartalomjegyzék** a PDF vázlatát mutatja, ha rendelkezik ilyennel.
- Az **Oldal megjelenítése a tartalomjegyzékben** kiemeli az aktuális oldalt a tartalomjegyzékben.

Egy oldalra való hivatkozáshoz kattintson jobb gombbal az előnézeti képére, és válassza a **Copy link to page N** lehetőséget, ahol N az oldalszám. Illessze be a hivatkozást egy jegyzetbe.

Egy szakaszra való hivatkozáshoz kattintson jobb gombbal egy bejegyzésre a tartalomjegyzékben, és válassza a **Copy link to "Title"** lehetőséget, ahol a Title a bejegyzés neve. Mobilon tartsa nyomva a bejegyzést.

## A PDF megjelenésének módosítása

Válassza a **Megjelenítés beállításai** lehetőséget az elrendezés módosításához.

- A **Kitöltés lapszélesség alapján** és a **Kitöltés lapmagasság alapján** az oldalt a megjelenítőhöz igazítja.
- Az **Egyoldalas** egyszerre egy oldalt jelenít meg.
- A **Kétoldalas (páratlantól kezdve)** az oldalakat egymás mellett jeleníti meg, bal oldalon páratlan oldallal kezdve. Például az 1. és 2. oldal együtt jelenik meg, majd a 3. és 4. oldal.
- A **Kétoldalas (párostól kezdve)** az oldalakat egymás mellett jeleníti meg, bal oldalon páros oldallal kezdve. Például az 1. oldal egyedül jelenik meg, majd a 2. és 3. oldal együtt.
- Az **Adaptálás témához** sötétíti a PDF színeit, ha az Obsidian témája sötét.

## Keresés a PDF-ben

A PDF-ben való keresés csak asztali gépen érhető el. Az Obsidian mobilalkalmazásban a PDF megjelenítőben nincs keresés.

1. Nyomja meg a `Ctrl+F` (Windows és Linux) vagy a `Command+F` (macOS) billentyűkombinációt.
2. A **Keresés...** mezőbe írja be a keresett szöveget.
3. Válassza a felfelé vagy lefelé nyilat a találatok közötti navigáláshoz.

A keresés működésének módosításához használja az alábbi beállításokat.

- A **Kis- és nagybetű megkülönböztetése** pontosan megkülönbözteti a kis- és nagybetűket. Ez az **Aa** gomb a keresőmezőben.
- A **Mind kijelölése** minden találatot kiemel. Válassza a nyilak melletti beállítások gombot ennek eléréséhez.
- Az **Egyezés a diakritikus jelekkel** az ékezetes betűket különböző betűkként kezeli. Ugyanabban a beállítások menüben található.
- Az **Egész szavak** csak teljes szavakat keres. Ugyanabban a beállítások menüben található.

Válassza a bezárás gombot a keresésből való kilépéshez.

## Szöveg másolása PDF-ből

Asztali gépen jelöljön ki szöveget a PDF-ben, majd kattintson rá jobb gombbal.

- A **Másolás** másolja a szöveget.
- A **Másolás idézetként** idézetként másolja a szöveget, amelyet a szakaszra mutató hivatkozás követ.
- A **A kiválasztott szövegre mutató link másolása** hivatkozást másol az adott szakaszra, amelyet beilleszthet egy jegyzetbe.

Egy idézet így néz ki, amikor beilleszti egy jegyzetbe.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

A kijelölésre mutató hivatkozás önmagában ugyanazt a linket tartalmazza.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Mobilon a PDF-ben kijelölt szöveg az eszköz szabványos szöveg menüjét jeleníti meg. A **Másolás idézetként** és **A kiválasztott szövegre mutató link másolása** nem érhető el.

## PDF beágyazása

Ha PDF-et szeretne megjeleníteni egy jegyzetben, tekintse meg a [[Fájlok beágyazása#PDF beágyazása jegyzetbe|PDF beágyazása jegyzetbe]] részt. A beágyazott PDF ugyanazzal az eszköztárral rendelkezik, mint a megjelenítő. Válassza a **Blokk szerkesztése** lehetőséget a beágyazási hivatkozás módosításához.

## Jegyzet exportálása PDF-be

Bármely jegyzetet exportálhat PDF-ként asztali gépen. A PDF-be exportálás nem érhető el az Obsidian mobilalkalmazásban.

1. Nyissa meg az exportálni kívánt jegyzetet.
2. Nyissa meg a [[Parancspaletta|parancspalettát]], és válassza az **PDF exportálása...** lehetőséget. A jegyzetben a **További lehetőségek** ![[lucide-more-horizontal.svg#icon]] menüből is kiválaszthatja a **PDF exportálása...** lehetőséget.
3. Válassza ki a beállításokat.
    - A **Fájlnév használata címként** hozzáadja a fájlnevet a PDF tetejére.
    - Az **Oldalméret** beállítja a papírméretet. Választhat A3, A4, A5, Legal, Letter vagy Tabloid méretet.
    - A **Fekvő tájolás** oldalra fordítja az oldalakat.
    - A **Margó** az oldalmargót **Alapértelmezett**, **Minimális** vagy **Semelyik** értékre állítja.
    - A **Kicsinyítés százaléka** méretezi a tartalmat minden oldalon. 100-as értéknél a tartalom teljes méretű marad. Az alacsonyabb értékek kisebbé teszik a szöveget és a képeket, így több fér el minden oldalon.
4. Válassza az **Exportálás PDF-be** lehetőséget.
5. Válassza ki, hová szeretné menteni a fájlt.

> [!tip]- Jegyzet exportálása sötét témával
> Az exportálás mindig világos stílust használ, még akkor is, ha a téma sötét. Az exportálás megjelenésének módosításához használhat [[CSS kódrészletek|CSS kódrészletet]]. Az Obsidian fórumon találhat példákat nyomtatáshoz és exportáláshoz használható kódrészletekre.[^1]

[^1]: Lásd: [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) és [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
