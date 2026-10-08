---
permalink: plugins/canvas
mobile: true
---
A Canvas egy [[Alap bővítmények|alap bővítmény]] a vizuális jegyzeteléshez. Végtelen teret biztosít jegyzetek elrendezéséhez, valamint más jegyzetekhez, mellékletekhez és weboldalakhoz való kapcsolásukhoz.

A vizuális jegyzetelés segít megérteni jegyzeteidet azáltal, hogy 2D térben rendezed el őket. Kösd össze a jegyzeteket vonalakkal, és csoportosítsd az összetartozó jegyzeteket, hogy jobban megértsd a köztük lévő kapcsolatokat.

Az Obsidianban létrehozott Canvas adatok `.canvas` fájlokként kerülnek mentésre a nyílt [JSON Canvas](https://jsoncanvas.org/) fájlformátum használatával.

## Új vászon létrehozása

A Canvas használatának megkezdéséhez először létre kell hoznod egy fájlt a vászon számára. Új vásznat az alábbi módszerekkel hozhatsz létre.

**Parancspaletta:**

1. Nyisd meg a [[Parancspaletta|parancspalettát]].
2. Válaszd a **Canvas: Új vászon létrehozása** lehetőséget, hogy az aktív fájllal azonos mappában hozz létre egy vásznat.

**Fájlkezelő:**

- A [[Fájlkezelő|fájlkezelőben]] kattints jobb gombbal arra a mappára, amelyben a vásznat létre szeretnéd hozni.
- Válaszd az **Új vászon** lehetőséget.

**Szalag:**

- A függőleges szalagmenüben válaszd az **Új vászon létrehozása** ![[lucide-layout-dashboard.svg#icon]] lehetőséget, hogy az aktív fájllal azonos mappában hozz létre egy vásznat.

> [!note] A .canvas kiterjesztés
> Az Obsidian a vászon adatait `.canvas` fájlokként tárolja egy [JSON Canvas](https://jsoncanvas.org/) nevű nyílt fájlformátum használatával.

## Kártyák hozzáadása

Fájlokat húzhatsz a vásznedre az Obsidianból vagy más alkalmazásokból. Például Markdown fájlokat, képeket, hangfájlokat, PDF-eket, vagy akár nem felismert fájltípusokat is.

### Szöveges kártyák hozzáadása

Hozzáadhatsz csak szöveget tartalmazó kártyákat, amelyek nem hivatkoznak fájlra. Használhatsz Markdown-t, hivatkozásokat és kódblokkokat, akárcsak egy jegyzetben.

Új szöveges kártya hozzáadása a vászonhoz:

- Válaszd ki vagy húzd az üres fájl ikont a vászon alján.

Szöveges kártyákat a vászonra dupla kattintással is hozzáadhatsz.

Szöveges kártya átalakítása fájllá:

1. Kattints jobb gombbal a szöveges kártyára, majd válaszd az **Átalakítás fájlra...** lehetőséget.
2. Add meg a jegyzet nevét, majd válaszd a **Mentés** lehetőséget.

> [!note] Megjegyzés
> A csak szöveget tartalmazó kártyák nem jelennek meg a [[Visszahivatkozások|visszahivatkozásokban]]. Ahhoz, hogy megjelenjenek, fájllá kell konvertálnod őket.

### Kártyák hozzáadása jegyzetekből

Jegyzet hozzáadása a széfedből a vászonhoz:

1. Válaszd ki vagy húzd a dokumentum ikont a vászon alján.
2. Válaszd ki a hozzáadni kívánt jegyzetet.

Jegyzeteket a vászon helyi menüjéből is hozzáadhatsz:

1. Kattints jobb gombbal a vászonra, majd válaszd a **Jegyzet hozzáadása széfből** lehetőséget.
2. Válaszd ki a hozzáadni kívánt jegyzetet.

A fájlt a [[Fájlkezelő|fájlkezelőből]] a vászonra húzva is hozzáadhatod.

Ha csak egy jegyzet egy részét szeretnéd megjeleníteni egy kártyában, kattints jobb gombbal a kártyára, majd válaszd a **Szűkítés címre...** vagy a **Szűkítés blokkra...** lehetőséget. Ezután válaszd ki a kívánt fejlécet vagy blokkot.

### Kártyák hozzáadása médiából

Média hozzáadása a széfedből a vászonhoz:

1. Válaszd ki vagy húzd a képfájl ikont a vászon alján.
2. Válaszd ki a hozzáadni kívánt médiafájlt.

Médiát a vászon helyi menüjéből is hozzáadhatsz:

1. Kattints jobb gombbal a vászonra, majd válaszd a **Média hozzáadása széfből** lehetőséget.
2. Válaszd ki a hozzáadni kívánt médiafájlt.

A fájlt a [[Fájlkezelő|fájlkezelőből]] a vászonra húzva is hozzáadhatod.

### Kártyák hozzáadása weboldalakból

Weboldal beágyazása a vásznodba:

1. Kattints jobb gombbal a vászonra, majd válaszd a **Weboldal hozzáadása** lehetőséget.
2. Add meg a weboldal URL-jét, majd válaszd a **Mentés** lehetőséget.

A böngésződben kijelölhetsz egy URL-t, majd a vászonra húzva beágyazhatod egy kártyába.

A weboldal böngészőben való megnyitásához nyomd meg a `Ctrl` (vagy `Cmd` macOS-en) billentyűt, és kattints a kártya címkéjére. Vagy kattints jobb gombbal a kártyára, és válaszd a **Külső hivatkozás megnyitása** lehetőséget.

Kattints jobb gombbal egy weboldal kártyára a további lehetőségekért.

- Az **URL másolása** másolja a weboldal címét.
- Az **URL módosítása...** megváltoztatja a kártyán megjelenített címet.
- Az **Oldal újratöltése** újra betölti a weboldalt.

### Kártyák hozzáadása bázisokból

Ha egy [[Bevezetés a Bázisokba|bázist]] szeretnél megjeleníteni a vásznon, húzd a bázisfájlt a fájlkezelőből a vászonra. A kártya megjeleníti a bázist.

A báziskártya a bázis alapértelmezett nézetét mutatja. Másik nézet megjelenítéséhez:

1. Kattints jobb gombbal a kártyára, majd válaszd a **Nézet rögzítése...** lehetőséget.
2. Válaszd ki a kívánt nézetet.

Az alapértelmezett nézethez való visszatéréshez válaszd ismét a **Nézet rögzítése...** lehetőséget, majd válaszd az **Alapért. nézet megjelenítése** lehetőséget.

### Kártyák hozzáadása mappákból

Húzz egy mappát a fájlkezelőből a vászonra, hogy a mappa összes fájlját hozzáadd.

### Kártya szerkesztése

Kattints duplán egy szöveges vagy jegyzetkártyára a szerkesztés megkezdéséhez. Kattints a kártyán kívülre a szerkesztés befejezéséhez. A szerkesztést az `Escape` billentyűvel is befejezheted.

A kártyát jobb gombbal kattintva, majd a **Szerkesztés** lehetőséget választva is szerkesztheted. Vagy jelöld ki a kártyát, majd válaszd a **Szerkesztés** ![[lucide-square-pen.svg#icon]] lehetőséget a kijelölés vezérlőiben.

### Kártya törlése

A kijelölt kártyákat eltávolíthatod úgy, hogy jobb gombbal kattintasz bármelyikre, majd az **Eltávolítás** lehetőséget választod. Vagy nyomd meg a `Backspace` (vagy `Delete` macOS-en) billentyűt.

A kijelölés feletti vezérlőkben az **Eltávolítás** ![[lucide-trash-2.svg#icon]] lehetőséget is választhatod.

### Kártyák cseréje

Egy jegyzet- vagy médiakártyát kicserélhetsz egy másik, azonos típusú kártyára.

Jegyzetkártya cseréje:

1. Kattints jobb gombbal a cserélni kívánt kártyára.
2. Válaszd a **Fájl cseréje** lehetőséget.
3. Válaszd ki a jegyzetet, amelyre cserélni szeretnéd.

## Kártyák kijelölése

Jelölj ki kártyákat a vásznon rájuk kattintva. Több kártyát is kijelölhetsz úgy, hogy kijelölést húzol köréjük.

Meglévő kijelöléshez hozzáadhatsz vagy eltávolíthatsz kártyákat a `Shift` billentyű lenyomásával és a kártyákra kattintással.

Nyomd meg a `Ctrl+a` (vagy `Cmd+a` macOS-en) billentyűkombinációt az összes kártya kijelöléséhez a vásznon.

Egy kártya tartalmának görgetéséhez először ki kell jelölnöd azt.

### Kártyák elrendezése

Húzd a kijelölt kártyát a mozgatáshoz.

Nyomd meg az `Alt` (vagy `Option` macOS-en) billentyűt, és húzd a kijelölés duplikálásához.

A `Shift` billentyű lenyomva tartásával húzás közben csak egy irányba mozgathatod.

Nyomd meg a `Space` billentyűt mozgatás közben az illeszkedés letiltásához.

Egy kártya kijelölése az előtérbe helyezi azt.

### Kártya átméretezése

Húzd a kártya bármelyik szélét az átméretezéshez.

Nyomd meg a `Space` billentyűt átméretezés közben az illeszkedés letiltásához.

Az oldalarány megtartásához átméretezés közben tartsd lenyomva a `Shift` billentyűt.

### Kártyák igazítása és elrendezése

Több kártya sorakoztatásához jelölj ki kettő vagy több kártyát. A kijelölés vezérlőiben válaszd az **Igazítás** lehetőséget, majd válassz egy opciót.

- A **Balra igazítás**, **Középre igazítás** és **Jobbra igazítás** a kártyákat függőleges vonalra igazítja.
- A **Fentre igazítás**, **Középre igazítás** és **Lentre igazítás** a kártyákat vízszintes vonalra igazítja.
- Az **Elrendezés sorban**, **Elrendezés oszlopban** és **Elrendezés rácsban** a kártyákat az adott elrendezésbe mozgatja.
- A **Vízszintes távolság elosztása** és **Függőleges távolság elosztása** egyenletesen helyezi el a kártyákat.
- A **Vízszintes sorkizárás** és **Függőleges sorkizárás** minden kártyát átméretez, hogy a kijelölés teljes szélességéhez vagy magasságához igazodjon.

## Kártyák összekapcsolása

Rajzolj vonalakat kártyák között, hogy kapcsolatokat hozz létre közöttük. Használj színeket és címkéket annak leírásához, hogyan kapcsolódnak egymáshoz.

### Két kártya összekapcsolása

Két kártya irányított vonallal történő összekapcsolása:

1. Vidd az egérmutatót a kártya egyik széle fölé, amíg egy kitöltött kör meg nem jelenik.
2. Húzd a kört egy másik kártya szélére az összekapcsoláshoz.

> [!tip] Tipp
> Ha a vonalat húzod anélkül, hogy egy másik kártyához csatlakoztatnád, utána hozzáadhatod azt a kártyát, amelyhez csatlakoztatni szeretnéd.

### Két kártya szétkapcsolása

Két kártya közötti kapcsolat eltávolítása:

1. Vidd az egérmutatót a kapcsolódási vonal fölé, amíg két kis kör meg nem jelenik a vonalon.
2. Húzd az egyik kört el a kártyától anélkül, hogy egy másikhoz csatlakoztatnád.

Két kártyát úgy is szétkapcsolhatsz, hogy jobb gombbal kattintasz a köztük lévő vonalra, majd az **Eltávolítás** lehetőséget választod. Vagy kijelölöd a vonalat, majd megnyomod a `Backspace` (vagy `Delete` macOS-en) billentyűt.

### Kártya csatlakoztatása egy másik kártyához

Kapcsolódási vonal egyik végének áthelyezése:

1. Vidd az egérmutatót a kapcsolódási vonal fölé, amíg két kis kör meg nem jelenik a vonalon.
2. Húzd a kört az újracsatlakoztatni kívánt végén egy másik kártyára.

### Kapcsolat mentén navigálás

Ha két összekapcsolt kártya messze van egymástól, a kapcsolat másik végén lévő kártyához ugorhatsz. Kattints jobb gombbal a vonalra az egyik vége közelében, majd válaszd a **Kapcsolat követése** lehetőséget. A vászon a másik végén lévő kártyához ugrik.

### Címke hozzáadása egy kapcsolathoz

Címkét adhatsz egy vonalhoz, hogy leírd két kártya közötti kapcsolatot.

Kapcsolat felcímkézése:

1. Kattints duplán a vonalra.
2. Add meg a címkét, majd nyomd meg az `Escape` billentyűt, vagy kattints a vászon bármely pontjára.

A kapcsolatot úgy is felcímkézheted, hogy kijelölöd, majd a kijelölés vezérlőiben a **Címke szerkesztése** lehetőséget választod.

Kapcsolat címkéjének szerkesztéséhez kattints duplán a vonalra, vagy kattints jobb gombbal a vonalra, majd válaszd a **Címke szerkesztése** lehetőséget.

Címke eltávolításához jelöld ki a kapcsolatot, majd válaszd a **Címke eltávolítása** lehetőséget a kijelölés vezérlőiben.

### Kapcsolat irányának módosítása

Alapértelmezés szerint egy kapcsolat nyíllal rendelkezik a végén, amely a második kártyára mutat. Ennek módosításához:

1. Jelöld ki a kapcsolatot.
2. A kijelölés vezérlőiben válaszd a **Vonal iránya** lehetőséget.
3. Válaszd az **Irányfüggetlen**, **Egyirányú** vagy **Kétirányú** lehetőséget.

### Kártya vagy kapcsolat színének módosítása

1. Jelöld ki a színezni kívánt kártyákat vagy kapcsolatokat.
2. A kijelölés vezérlőiben válaszd a **Szín beállítása** ![[lucide-palette.svg#icon]] lehetőséget.
3. Válassz egy színt.

## Kártyák csoportosítása

### Kijelölt kártyák csoportosítása

Üres csoport létrehozása:

- Kattints jobb gombbal a vászonra, majd válaszd a **Csoport létrehozása** lehetőséget.

Összetartozó kártyák csoportosítása:

1. Jelöld ki a kártyákat.
2. Kattints jobb gombbal bármelyik kijelölt kártyára, majd válaszd a **Csoport létrehozása** lehetőséget.

**Csoport átnevezése:** Kattints duplán a csoport nevére a szerkesztéshez, majd nyomd meg az `Enter` billentyűt a mentéshez.

### Háttér hozzáadása egy csoporthoz

Megjeleníthetsz egy képet a csoport kártyái mögött.

1. Jelöld ki a csoportot.
2. A kijelölés vezérlőiben válaszd a **Háttér beállítása** lehetőséget.
3. Válassz egy képet a széfedből.

A háttér módosításához jelöld ki a csoportot, majd válaszd a **Háttér szerkesztése** lehetőséget.

- A **Háttér cseréje** másik képet választ.
- A **Háttér eltávolítása** eltávolítja a képet.
- A **Borító** a képet a csoport teljes területére kiterjeszti.
- A **Képarány megtartása** megőrzi a kép arányait.
- Az **Ismétlés** a képet a csoport egész területén csempézi.

## Navigálás a vásznon

Ahhoz, hogy a vásznon mozogj, használd a nézet mozgatását és a nagyítást.

### Nézet mozgatása a vásznon

A vászon függőleges és vízszintes mozgatásához, más néven _nézet mozgatásához_, az alábbi módszerek bármelyikét használhatod:

- Nyomd meg a `Space` billentyűt, és húzd a vásznat.
- Húzd a vásznat az egér középső gombjával.
- Görgess az egérrel a függőleges mozgatáshoz, és nyomd meg a `Shift` billentyűt görgetés közben a vízszintes mozgatáshoz.

### Nagyítás a vásznon

A vászon nagyításához nyomd meg a `Space` vagy `Ctrl` (vagy `Cmd` macOS-en) billentyűt, és görgess az egér görgőjével. Vagy válaszd a **Nagyítás** ![[lucide-plus.svg#icon]] és **Kicsinyítés** ![[lucide-minus.svg#icon]] lehetőségeket a jobb felső sarokban található nagyítás vezérlőkben.

#### Nagyítás illeszkedésre

A vászon olyan mértékű nagyításához, hogy minden elem látható legyen, válaszd a **Nagyítás illeszkedésre** ![[lucide-maximize.svg#icon]] lehetőséget. Vagy használd a `Shift+1` billentyűparancsot.

#### Nagyítás kijelölésre

A vászon olyan mértékű nagyításához, hogy az összes kijelölt elem látható legyen, kattints jobb gombbal egy kijelölt kártyára, majd válaszd a **Nagyítás kijelölésre** lehetőséget. Vagy használd a `Shift+2` billentyűparancsot.

#### Alapértelmezett nagyítás

A nagyítási szint alapértelmezetthez való visszaállításához válaszd az **Alapértelmezett nagyítás** lehetőséget a jobb felső sarokban található nagyítás vezérlőkben.


### Ugrás csoportba

Ha nagy vásznon egy csoporthoz szeretnél közvetlenül ugrani, nyisd meg a parancspalettát, és válaszd a **Canvas: Ugrás csoportba** lehetőséget. Megjelenik a vásznon található csoportok listája. Válaszd ki azt a csoportot, amelyhez navigálni szeretnél, és a vászon középre igazítja azt.

## Vászon beállítások

Válaszd a **Vászon beállítások** ![[lucide-settings.svg#icon]] lehetőséget a vászon vezérlői felett, hogy módosítsd a vászon viselkedését.

- A **Rácshoz illesztés** a kártyákat a háttér rácsához illeszti mozgatáskor és átméretezéskor.
- Az **Objektumokhoz illesztés** a kártyákat a közeli kártyákhoz illeszti mozgatáskor és átméretezéskor.
- Az **Írásvédetté tétel** megakadályozza a vászon módosítását.

## Vászon exportálása képként

A vásznat PNG képként exportálhatod asztali gépen. A képként való exportálás nem érhető el az Obsidian mobil alkalmazásban.

1. Nyisd meg az exportálni kívánt vásznat.
2. Nyisd meg a parancspalettát, és válaszd a **Canvas: Exportálás képként** lehetőséget.
3. Válaszd ki a beállításokat.
    - A **Keret** beállítja, mit exportáljon. Válaszd a **Teljes vászon** lehetőséget az egész vászonhoz, vagy a **Csak a nézet** lehetőséget a jelenleg látható részhez.
    - A **Nagyítás** beállítja a képminőséget. Magasabb nagyítás nagyobb, élesebb képet eredményez. A párbeszédablak mutatja a becsült képméretet.
    - A **Logó megjelenítése** egy Obsidian logót ad a bal alsó sarokba. Alapértelmezés szerint be van kapcsolva.
    - A **Magán mód** elrejti a vásznon található szövegeket. Alapértelmezés szerint ki van kapcsolva.
4. Válaszd a **Mentés** lehetőséget.
5. Válaszd ki, hová mentse a fájlt. A fájlnév alapértelmezés szerint a vászon neve, `.png` kiterjesztéssel.

Üres vásznat nem lehet exportálni.

## Visszavonás és újra

Az utolsó módosítás visszavonásához válaszd a **Visszavonás** lehetőséget a vászon jobb oldalán található vászon vezérlőkben. Vagy nyomd meg a `Ctrl+Z` (Windows és Linux) vagy `Command+Z` (macOS) billentyűkombinációt.

Egy módosítás újra végrehajtásához válaszd az **Újra** lehetőséget. Vagy nyomd meg a `Ctrl+Y` vagy `Ctrl+Shift+Z` (Windows és Linux), illetve `Command+Y` vagy `Command+Shift+Z` (macOS) billentyűkombinációt.

## Vászon súgó

Asztali gépen válaszd a **Vászon súgó** ![[lucide-help-circle.svg#icon]] lehetőséget a vászon vezérlők alatt, hogy megtekinthesd a nézet mozgatása, nagyítás, kijelölés és kártyák mozgatása billentyűparancsainak listáját.

## Vászon beágyazása

A vásznat beágyazhatod egy jegyzetbe a szabványos beágyazási szintaxis használatával. További információkért lásd: [[Fájlok beágyazása#Embed a canvas in a note|Vászon beágyazása egy jegyzetbe]].

## A Canvas használata mobilon

Amikor megnyitsz egy vásznat telefonon vagy táblagépen, az Obsidian három tippet jelenít meg.

- **Húzza a mozgatáshoz**
- **Többujjas nagyítás**
- **Érintse meg és tartsa lenyomva a hozzáadáshoz / mozgatáshoz / kijelöléshez**

### A vászon menü megnyitása

Érintsd meg és tartsd lenyomva a vászon egy üres területét. A menü az alábbi elemeket tartalmazza.

- **Kártya hozzáadása** szöveges kártyát ad hozzá.
- **Jegyzet hozzáadása széfből** jegyzetet ad hozzá a széfedből.
- **Média hozzáadása széfből** médiát ad hozzá a széfedből.
- **Weboldal hozzáadása** weboldalt ágyaz be.
- **Csoport létrehozása** üres csoportot hoz létre.
- A **Rácshoz illesztés**, **Objektumokhoz illesztés** és **Írásvédetté tétel** ugyanazok a beállítások, mint a **Vászon beállításokban**.

### Kártyák hozzáadása

Kártyákat a vászon menüből adhatsz hozzá. A vászon alján található ikonokra koppintva is hozzáadhatsz.

- Az üres fájl ikon szöveges kártyát ad hozzá.
- A dokumentum ikon jegyzetet ad hozzá a széfedből.
- A kép ikon médiát ad hozzá a széfedből.

### Kijelölt kártyával végzett műveletek

Koppints egy kártyára a kijelöléséhez. Egy eszköztár jelenik meg a kártya felett.

- Az **Eltávolítás** ![[lucide-trash-2.svg#icon]] törli a kártyát.
- A **Szín beállítása** ![[lucide-palette.svg#icon]] megváltoztatja a kártya színét.
- A **Nagyítás kijelölésre** a vásznat a kártyára nagyítja.
- A **Szerkesztés** ![[lucide-square-pen.svg#icon]] szerkeszti a kártyát.

### Kártya mozgatása

1. Koppints a kártyára a kijelöléséhez.
2. Érintsd meg és tartsd lenyomva a kijelölt kártyát, majd húzd egy új pozícióba.

### Kártya átméretezése

1. Koppints a kártyára a kijelöléséhez.
2. Húzd a kártya oldalait a nagyításhoz vagy kicsinyítéshez.

### A kártya menü megnyitása

Érintsd meg és tartsd lenyomva a kártyát. A menü az alábbi elemeket tartalmazza.

- A **Nagyítás kijelölésre** a vásznat a kártyára nagyítja.
- A **Szerkesztés** szerkeszti a kártyát.
- Az **Átalakítás fájlra...** szöveges kártyát jegyzetté alakít.
- A **Duplikálás** másolatot készít a kártyáról.
- Az **Eltávolítás** törli a kártyát.

### Kártya szerkesztése

Szöveges vagy jegyzetkártya szerkesztéséhez az alábbi módszerek bármelyikét használhatod.

- Koppints a kártyára a kijelöléséhez, majd koppints rá duplán. A billentyűzet megnyílik.
- Koppints a kártyára a kijelöléséhez, majd válaszd a **Szerkesztés** ![[lucide-square-pen.svg#icon]] lehetőséget a kártya feletti eszköztárban.

### Kapcsolat felcímkézése

1. Koppints a vonalra a kijelöléséhez.
2. Az eszköztárban válaszd a **Címke szerkesztése** ![[lucide-square-pen.svg#icon]] lehetőséget. A billentyűzet megnyílik.
3. Add meg a címkét.

Címke eltávolításához koppints a vonalra, majd válaszd a **Címke eltávolítása** lehetőséget az eszköztárban.

### Kapcsolat irányának módosítása

1. Koppints a vonalra a kijelöléséhez.
2. Az eszköztárban válaszd a **Vonal iránya** lehetőséget.
3. Válaszd az **Irányfüggetlen**, **Egyirányú** vagy **Kétirányú** lehetőséget.

### A vonal menü megnyitása

Érintsd meg és tartsd lenyomva a két kártyát összekötő vonalat. A menü az alábbi elemeket tartalmazza.

- A **Címke szerkesztése** hozzáadja vagy módosítja a vonal címkéjét.
- A **Kapcsolat követése** a vászon nézetet a vonal másik végén lévő kártyára mozgatja.
- Az **Eltávolítás** törli a kapcsolatot.

### Kártyák összekapcsolása

1. Koppints egy kártyára a kijelöléséhez.
2. Húzd a kártya szélein lévő körök egyikét egy másik kártyára.

Ha a vonalat húzod és egy üres területen engeded el, egy menü jelenik meg a **Kártya hozzáadása** és **Jegyzet hozzáadása széfből** lehetőségekkel. Válassz egyet, hogy egy kártyát adj a vonal végéhez.

### Kártyák szétkapcsolása

Kapcsolat eltávolításához az alábbi módszerek bármelyikét használhatod.

- Koppints a vonalra, majd válaszd az **Eltávolítás** ![[lucide-trash-2.svg#icon]] lehetőséget.
- Húzd a vonal nyíl végét vissza arra a kártyára, ahonnan indult. A vonal eltűnik.

### Kártyák csoportosítása

Csoport létrehozása:

1. Érintsd meg és tartsd lenyomva a vászon egy üres területét.
2. Válaszd a **Csoport létrehozása** lehetőséget.
3. Húzd a csoport széleit a méretének módosításához.

Kártyák csoporthoz adásához húzd őket a csoport területére. Amikor a csoportot mozgatod, a benne lévő kártyák is vele mozognak.

Csoport átnevezéséhez koppints duplán a nevére. A billentyűzet megnyílik. Add meg az új nevet.

### Vászon vezérlők

A vászon jobb oldalán található vezérlők a nézetet és a beállításokat módosítják.

- A **Nagyítás** és **Kicsinyítés** a nagyítási szintet változtatja.
- Az **Alapértelmezett nagyítás** visszaállítja a vásznat az alapértelmezett nagyítási szintre.
- A **Nagyítás illeszkedésre** a vászon minden kártyáját megjeleníti.
- A **Visszavonás** és **Újra** visszavonja vagy megismétli az utolsó módosítást.
- A **Vászon beállítások** tartalmazza a **Rácshoz illesztés**, **Objektumokhoz illesztés** és **Írásvédetté tétel** beállításokat.

## Haladó tippek

Készítettünk néhány rövid videót a Canvas néhány haladó felhasználási esetének bemutatásához.

[Itt megtekintheted mind a 72 tippet](https://obsidian.md/canvas#protips). Kérjük, vedd figyelembe, hogy a tipp videók csak asztali számítógépen láthatók.
