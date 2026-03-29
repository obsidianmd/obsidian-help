---
permalink: snippets
publish: true
mobile: true
description: 'Ismerje meg, hogyan módosíthatja az Obsidian alkalmazás megjelenésének egyes részeit teljes téma létrehozása nélkül.'
---
Ismerje meg, hogyan módosíthatja az Obsidian alkalmazás megjelenésének egyes aspektusait anélkül, hogy [témát kellene készítenie](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Ha az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] CSS kezelésével kapcsolatos útmutatást keres, feltétlenül tekintse át a [[Webhely testreszabása]] oldalt.

A CSS egy nyelv, amely a HTML megjelenését vezérli. CSS kódrészletek hozzáadásával módosíthatja az Obsidian felhasználói felületének egyes részeit, például a fejlécek méretét és színét. Az Obsidian [CSS-változókkal](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) rendelkezik, amelyek segítségével könnyedén testreszabhatja a felületet.

Az Obsidian a CSS kódrészleteket a széf [[Konfigurációs mappa|konfigurációs mappájában]] keresi.

## Kódrészlet hozzáadása

CSS kódrészlet hozzáadásához **Asztali gépen** ![[lucide-monitor-check.svg#icon]] kövesse az alábbi lépéseket:

1. Nyissa meg a **[[Beállítások]]t** ![[lucide-settings.svg#icon]].
2. A **Megjelenés → CSS kódrészletek** alatt válassza a **Kódrészletek mappa megnyitása** ![[lucide-folder-open.svg#icon]] lehetőséget.
3. A kódrészletek mappában hozzon létre egy CSS fájlt, amely tartalmazza a kódrészletét.
4. Az Obsidianban a **Megjelenés → CSS kódrészletek** alatt válassza a **Kódrészletek újratöltése** ![[lucide-refresh-cw.svg#icon]] lehetőséget, hogy a kódrészlet megjelenjen a listában.
5. Engedélyezze a kódrészletet a kapcsolóra kattintva.

CSS kódrészlet hozzáadásához **Mobilon/Tableten** ![[obsidian-icon-smartphone.svg#icon]] kövesse az alábbi lépéseket:

1. Nyisson meg egy fájlkezelőt, és keresse meg a széfjét. A széf helyét a _Széfek kezelése…_ menüben ellenőrizheti a széfre koppintva és az útvonalat megtekintve.
2. Nyissa meg a [[Konfigurációs mappa|konfigurációs mappát]], és hozzon létre egy `snippets` nevű mappát, ha még nem létezik.
3. Adja hozzá a CSS kódrészletét ehhez a mappához.
4. Nyissa meg az Obsidian **[[Beállítások]]t** ![[lucide-settings.svg#icon]].
5. Válassza a bal oldalon a **Megjelenés** menüpontot.
6. Görgessen le a **CSS kódrészletek** szakaszhoz.
7. Koppintson a **Kódrészletek újratöltése** ![[lucide-refresh-cw.svg#icon]] gombra a lista frissítéséhez.
8. Koppintson a kapcsolóra a kódrészlet engedélyezéséhez.

Alternatívaként:
- [[Jegyzetek szinkronizálása eszközök között|Szinkronizálhat]] bármilyen változást a szinkronizálási szolgáltatásával.
- Használhat egy közösségi bővítményt kódrészlet létrehozásához közvetlenül az Obsidianból.

Az engedélyezés után az Obsidian automatikusan érzékeli a CSS kódrészletek módosításait, és alkalmazza azokat a fájl mentésekor.

> [!tip] Nem kell újraindítania az Obsidiant a változások érvényesítéséhez. Azonban szükség lehet a [[Parancspaletta]] parancs használatára az Obsidian újratöltéséhez mentés nélkül, hogy lássa a jelenlegi téma vagy jegyzet változásait.

## CSS írása az Obsidianhoz

Az Obsidian számos módszert kínál, amelyek megkönnyítik és hatékonyabbá teszik a CSS írását.

Számos [CSS-változóval](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) rendelkezik az Obsidian egyes részeinek egyszerű módosításához, valamint beépített [[Tulajdonságok#Tulajdonságtípusok|tulajdonságtípussal]] egy vagy több jegyzet megjelenésének megváltoztatásához.

> [!example] Változók
> Hozzon létre egy `headers.css` nevű fájlt az alábbi tartalommal, hogy a hat [[Alapvető formázási szintaxis#Fejlécek|fejlécszint]] színét szivárványszínűre változtassa:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS osztályok
> Rendeljen egy egyéni CSS osztály nevét (vagy CSS osztályok listáját) az előre definiált [[Tulajdonságok|tulajdonság]] `cssclasses` értékéhez, hogy egy vagy több jegyzet eltérően nézzen ki a többitől.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Tulajdonságok**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> Minden olyan jegyzetben, amely a `cssclasses` tulajdonságban tartalmazza a `red-border` értéket, a képek piros szegéllyel jelennek meg.

A CSS fájl érvényességének és helyes formázásának biztosítása érdekében javasoljuk, hogy ellenőrizze egy olyan eszközzel, mint a [CSS Validation Service](https://jigsaw.w3.org/css-validator/), mivel az érvénytelen CSS nem fog működni.

## További információk

- Ha még új a CSS-ben, tekintse meg a Mozilla [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) útmutatóját.
- Az Obsidian stílusozásáról további információkért lásd:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
