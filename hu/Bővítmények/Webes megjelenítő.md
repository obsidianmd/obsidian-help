---
permalink: plugins/web-viewer
---
A [[Alap bővítmények|Webes megjelenítő]] egy [[Alap bővítmények|alap bővítmény]], amellyel külső hivatkozásokat nyithatsz meg az Obsidianon belül asztali gépen. Így a hivatkozások tartalmát az alkalmazás elhagyása nélkül olvashatod, és könnyebbé válik a webes kutatási projektek során a többfeladatos munkavégzés.

A külső hivatkozások [[Lapok|lapként]] nyílnak meg, amelyeket átrendezhetsz, felosztathatsz, és [[Kiugró ablakok|kiugró ablakban]] is megnyithatsz. A [[Canvas]]-fájlokba beágyazott weboldal-kártyák szintén megnyithatók webes megjelenítő lapként.

A webes megjelenítő nem helyettesíti az elsődleges böngésződet. Gyors módot biztosít weboldalak elérésére kutatás céljából az Obsidianon belül. Azonban nem nyújtja egy dedikált böngésző teljes funkcionalitását, biztonsági vezérlőit vagy bővíthetőségét.

## Olvasó nézet

Kattints a szemüveg ikonra a weboldal egyszerű szöveges verziójának megtekintéséhez. Ez a funkció a Mozilla Firefox számára fejlesztett Readability könyvtárával tisztítja meg a tartalmat.

## Mentés a széfbe

Kattints a további műveletek ikonra a weboldal széfbe mentéséhez. A mentési hely testreszabásához lépj a **[[Beállítások]]** → **Webes megjelenítő** menüpontra.

## Reklámblokkolás

A webes megjelenítő alapértelmezetten blokkolja a reklámokat. A reklámblokkoló-szabályokat testreszabhatod listák hozzáadásával, például az [Easylist](https://easylist.to/) segítségével.

## Biztonság

Ha harmadik féltől származó Obsidian bővítményeket használsz, javasoljuk, hogy érzékeny feladatokhoz és jelszóval védett weboldalakhoz a webes megjelenítő helyett az elsődleges böngésződet használd.

A webes megjelenítő ugyanazon a [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) funkción alapul, amely lehetővé teszi weboldalak beágyazását a [[Canvas]]-ba. A webes megjelenítőt [független auditon](https://obsidian.md/blog/cure53-second-client-audit/) vizsgálták, hogy igazolják biztonságos megvalósítását.

Az Obsidian bővítmények [[Bővítmények biztonsága#Bővítmények képességei|nincsenek elszigetelve (sandboxolva)]], és mélyen képesek vezérelni az alkalmazást. Ez a kialakítás hatékony funkcionalitást tesz lehetővé, de biztonsági kompromisszumokkal is jár. Amíg az Obsidian fut, a harmadik féltől származó bővítmények teljes hozzáféréssel rendelkeznek a webes megjelenítő sütijihez.
