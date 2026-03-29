---
permalink: publish/limitations
---
> [!tip] Nagyszerű közösségünk tagjai megoldásokat dolgoztak ki ezen korlátozások némelyikére. További információkért látogassa meg ezt: [Publish források](https://forum.obsidian.md/t/obsidian-publish-resources/74582) szál az Obsidian fórumon.

## Közösségi bővítmények

Az Obsidian Publish minimális támogatást nyújt a [[Közösségi bővítmények|közösségi bővítményekhez]].

Azok a bővítmények, amelyek nyers Markdown kimenetet generálnak, mint például a Waypoint bővítmény, kompatibilisek a Publish-sel, mivel nem igénylik az alkalmazást az adataik megjelenítéséhez.

Ezzel szemben azok a bővítmények, amelyek bővítmény-kódblokkot igényelnek a megjelenítéshez, mint például a Dataview vagy a Fantasy Statblocks, alapértelmezetten nem működnek a Publish-ben.

## Gráf

A Publish alapszintű színtestreszabást kínál a gráf nézetéhez CSS segítségével. A csomópontok színeit a `publish.css` fájlban módosíthatja a [Gráf nézet CSS-változók](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph) felhasználásával.

Vegye figyelembe, hogy a publikált gráf nem támogatja az alkalmazás [[Gráf nézet|gráf nézetében]] elérhető átfogó rendezési és megjelenítési lehetőségeket.

## Médiafájlok

Az Obsidian Publish nem videó- vagy nagy hangfájlok streamelésére van optimalizálva. Néhány bevált gyakorlatot adunk a [[Médiafájlok|médiafájlok]] kezeléséhez ezekben a dokumentumokban.

A látogatói élmény javítása érdekében javasoljuk, hogy inkább videóhoszting szolgáltatást használjon, például a YouTube-ot vagy a Vimeót.

**Legfeljebb 50 MB** méretű fájlokat tölthet fel a Publish webhelyére. ^publish-media-limit

## PDF-ek

Mobileszközökön, táblagépeken és kis képernyős számítógépeken előfordulhat, hogy egy beágyazott PDF nem töltődik be, vagy csak az első oldal jelenik meg. Ezt a mobileszközök PDF-megjelenítőjének korlátai okozzák.

A mobilfelhasználóknak szánt tartalom esetén javasoljuk, hogy külsőleg hosztolt PDF-ekre mutató hivatkozásokat adjon meg, vagy belső hivatkozásokat biztosítson, amelyekkel a felhasználók közvetlenül az eszközükre tölthetik le a PDF-et.

## Keresés

A Publish alapszintű támogatást nyújt az egyszerű szöveg kereséséhez a publikált tartalomban. A keresési eredmények sorrendjében előnyt élveznek:

- Fájlnevek
- Alternatív nevek
- Fejléc nevek

A fentiek egyezéseinek keresése után a keresés a publikált jegyzetek egyszerű szövegét is átvizsgálja.

A publikált webhely kereshetőségének javítása érdekében ajánlott leíró fájlneveket használni, több alternatív nevet megadni, és olyan fejlécneveket választani, amelyek pontosan tükrözik a tartalmat.

Emellett a Publish jelenleg nem támogatja az alkalmazás [[Keresés#Keresési eredmények beágyazása egy jegyzetbe|beágyazott keresési eredmények]] funkcióját.
