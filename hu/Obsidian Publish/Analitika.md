---
permalink: publish/analytics
---
## Előfeltételek

Az analitika használatához az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] webhelyeden [[Egyedi tartományok|egyedi tartományra]] van szükséged.

> [!important] Fontos
> Mielőtt engedélyeznéd az analitikát, győződj meg arról, hogy a helyi törvények és szabályozások lehetővé teszik a látogatók nyomon követését. Az általad használt eszközöktől függően előfordulhat, hogy hozzájárulási bannert kell hozzáadnod a webhelyedhez.

## Google Analytics

A Google Analytics engedélyezése az Obsidian Publish webhelyeden:

1. A szalagon, az alkalmazásablak bal oldalán kattints a **Változások publikálása** ![[lucide-send.svg#icon]] gombra.
2. A **Változások publikálása** párbeszédablakban kattints a **Webhely beállításainak módosítása** ![[lucide-cog.svg#icon]] gombra.
3. A **Google Analytics követőkód** mezőbe írd be a követőkódodat.

Ha a Google Analytics helyett a Google Tag Managert szeretnéd használni, egyéni JavaScript segítségével adhatsz hozzá saját szkripteket.

## Plausible, Fathom és egyéb analitikai szolgáltatások

A legtöbb analitikai szolgáltatást hozzáadhatod a webhelyedhez a [[Webhely testreszabása|publish.js]] fájlon keresztül. Ügyelj arra, hogy a `yourdomain.com` részt cseréld le a saját tartományodra, a szkript `src` értékét pedig az analitikai szolgáltatód által megadott szkriptre.

Íme egy példa a [Plausible Analytics](https://plausible.io/) használatára:

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

Ugyanez a megközelítés használható a [Fathom Analytics](https://usefathom.com/) esetében is. Figyelj a `data-domain` és `data-site` közötti eltérésre — a különböző analitikai szolgáltatók eltérő formátumot használhatnak a szkript beszúrásához.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Hibaelhárítás

Annak ellenőrzéséhez, hogy a webhelyed használja-e az analitikai szolgáltatást, tiltsd le a hirdetésblokkoló böngészőbővítményeket, például a uBlock Origint, amelyek megakadályozhatják a követőszkript futtatását.
