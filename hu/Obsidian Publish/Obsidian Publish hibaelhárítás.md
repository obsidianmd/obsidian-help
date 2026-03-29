---
permalink: publish/troubleshoot
publish: true
mobile: true
description: 'Ez az oldal néhány gyakori problémát ismertet, amelyekkel az Obsidian Publish használata során találkozhatsz.'
---
Ez az oldal az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] használata során felmerülő gyakori problémákat és azok megoldásait sorolja fel.

Először mindenképpen tekintsd át a [[Médiafájlok]] és a [[Publish korlátozások|Publish korlátozások]] oldalakat.

## Általános

### Jegyzetek publikálása

**Hash hibát kapok, amikor megpróbálok publikálni egy jegyzetet.**

Használsz olyan [[Közösségi bővítmények|közösségi bővítményt]], amely frissítéskor módosítja a fájl módosítási idejét? Ha igen, ez a bővítmény ütközhet a Publish szolgáltatással. Kérjük, jelezd a hibát a bővítmény fejlesztőjének a probléma megoldása érdekében.

**Furcsa hálózati hibát kapok, és nagyon nagy a Publish webhelyem.**

Valószínűleg meg kell vizsgálnunk az adatbázisodat. Kérjük, [[Súgó és támogatás#Kapcsolatfelvétel az Obsidian ügyfélszolgálatával|vedd fel a kapcsolatot az Obsidian ügyfélszolgálatával]] segítségért.

## CSS és témák

**A [[Konfigurációs mappa|konfigurációs mappámban]] lévő CSS nem működik a Publish-en. Miért?**

A Publish nem olvassa a konfigurációs mappát. Ehelyett létre kell hoznod egy `publish.css` fájlt a publikáló széfed legfelső szintű könyvtárában. Erről bővebben a [[Webhely testreszabása]] oldalon olvashatsz.

**A CSS-em nem úgy néz ki a Publish-en, mint az alkalmazásban. Miért?**

Az Obsidian Publish CSS-e nem teljesen azonos az alkalmazáséval. Javasoljuk, hogy [a CSS-t és témákat kifejezetten a Publish számára fejleszd](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) az alapoktól kezdve.

_Általánosságban_ elmondható, hogy ami az [[Nézetek és szerkesztési mód#Olvasási nézet|olvasási nézetben]] működik, az nagy valószínűséggel a Publish-en is működni fog.
