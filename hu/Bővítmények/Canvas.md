---
permalink: plugins/canvas
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

A weboldal böngészőben való megnyitásához nyomd meg a `Ctrl` (vagy `Cmd` macOS-en) billentyűt, és kattints a kártya címkéjére. Vagy kattints jobb gombbal a kártyára, és válaszd a **Megnyitás böngészőben** lehetőséget.

### Kártyák hozzáadása mappákból

Húzz egy mappát a fájlkezelőből a vászonra, hogy a mappa összes fájlját hozzáadd.

### Kártya szerkesztése

Kattints duplán egy szöveges vagy jegyzetkártyára a szerkesztés megkezdéséhez. Kattints a kártyán kívülre a szerkesztés befejezéséhez. A szerkesztést az `Escape` billentyűvel is befejezheted.

A kártyát jobb gombbal kattintva, majd a **Szerkesztés** lehetőséget választva is szerkesztheted.

### Kártya törlése

A kijelölt kártyákat eltávolíthatod úgy, hogy jobb gombbal kattintasz bármelyikre, majd a **Törlés** lehetőséget választod. Vagy nyomd meg a `Backspace` (vagy `Delete` macOS-en) billentyűt.

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

Ha két összekapcsolt kártya messze van egymástól, a kapcsolat forrásához vagy céljához navigálhatsz úgy, hogy jobb gombbal kattintasz a vonalra, majd az **Ugrás a célra** vagy **Ugrás a forrásra** lehetőséget választod.

### Címke hozzáadása egy kapcsolathoz

Címkét adhatsz egy vonalhoz, hogy leírd két kártya közötti kapcsolatot.

Kapcsolat felcímkézése:

1. Kattints duplán a vonalra.
2. Add meg a címkét, majd nyomd meg az `Escape` billentyűt, vagy kattints a vászon bármely pontjára.

A kapcsolatot úgy is felcímkézheted, hogy kijelölöd, majd a kijelölés vezérlőiben a **Címke szerkesztése** lehetőséget választod.

Kapcsolat címkéjének szerkesztéséhez kattints duplán a vonalra, vagy kattints jobb gombbal a vonalra, majd válaszd a **Címke szerkesztése** lehetőséget.

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

## Navigálás a vásznon

Ahogy egyre több kártyát adsz hozzá a vásznodhoz, meg kell ismerned, hogyan navigálhatsz a vásznon, hogy annak egy adott részét megtekintsd. Tanuld meg, hogyan mozgathatod a nézetet és nagyíthatsz, hogy könnyedén mozogj a vásznon.

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

## Haladó tippek

Készítettünk néhány rövid videót a Canvas néhány haladó felhasználási esetének bemutatásához.

[Itt megtekintheted mind a 72 tippet](https://obsidian.md/canvas#protips). Kérjük, vedd figyelembe, hogy a tipp videók csak asztali számítógépen láthatók.
