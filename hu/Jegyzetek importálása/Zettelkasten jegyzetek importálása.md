---
permalink: import/zettelkasten
---
Ha a Zettelkasten módszert használtad jegyzeteid elnevezéséhez és összekapcsolásához, szükséged lehet arra, hogy a hivatkozásokat `[[UID]]` formátumról `[[UID Jegyzetem címe]]` formátumra konvertáld.

Például, ha van egy `202301011230 Jegyzetem címe` nevű jegyzeted, és egy másik jegyzetből csak az UID-val hivatkozol rá: `[[202301011230]]`. Mivel az Obsidian a jegyzet teljes nevét használja a belső hivatkozások feloldásához, az ilyen hivatkozások nem fognak működni.

Az összes `[[UID]]` hivatkozás frissítéséhez a széfedben, hogy a jegyzet teljes nevét használják, használd a [[Formátum-konvertáló|Formátum-konvertálót]].

1. Nyisd meg a **[[Beállítások|Beállításokat]]**.
2. Az **Alap bővítmények** alatt engedélyezd a **Formátum-konvertáló** bővítményt, majd zárd be a Beállítások ablakot.
3. A szalagon, az alkalmazásablak bal oldalán válaszd a **Formátum-konvertáló megnyitása** ![[lucide-binary.svg#icon]] lehetőséget.
4. Engedélyezd a **Zettelkasten hivatkozás-javító** opciót.
5. Válaszd a **Konvertálás indítása** lehetőséget. Ez a teljes széfedben lévő összes jegyzetet konvertálni fogja.

> [!tip] Zettelkasten hivatkozás-szépítő
> A [[Formátum-konvertáló]] képes a hivatkozásaidat is szépíteni azáltal, hogy eltávolítja az UID-t a megjelenített névből. Például a `[[UID]]` hivatkozás `[[UID Jegyzetem címe|Jegyzetem címe]]` formátumra alakul.
>
> A Zettelkasten hivatkozások szépítéséhez engedélyezd a **Zettelkasten hivatkozás-szépítő** opciót a formátum-konvertáló ablakban.

Az [[Egyedi jegyzet készítő|Egyedi jegyzet készítőt]] is használhatod Zettelkasten jegyzetek létrehozásához az Obsidianben.
