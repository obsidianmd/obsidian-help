---
permalink: publish/analytics
---
## Predpoklady

Na použitie analytiky na vašej stránke [[Úvod do Obsidian Publish|Obsidian Publish]] potrebujete [[Vlastné domény|vlastnú doménu]].

> [!important] Dôležité
> Pred zapnutím analytiky sa uistite, že vaše miestne zákony a predpisy umožňujú sledovanie návštevníkov. V závislosti od nástrojov, ktoré používate, môže byť potrebné pridať na vašu stránku banner so súhlasom.

## Google Analytics

Ak chcete zapnúť Google Analytics pre vašu stránku Obsidian Publish:

1. Na paneli nástrojov v ľavej časti okna aplikácie kliknite na **Publikovať zmeny** ![[lucide-send.svg#icon]].
2. V dialógovom okne **Publikovať zmeny** kliknite na **Zmeniť možnosti stránky** ![[lucide-cog.svg#icon]].
3. Do poľa **Sledovací kód Google Analytics** zadajte váš sledovací kód.

Ak chcete namiesto Google Analytics použiť Google Tag Manager, použite vlastný JavaScript na pridanie vlastných skriptov.

## Plausible, Fathom a ďalšie analytické služby

Väčšinu analytických služieb môžete pridať na svoju stránku prostredníctvom súboru [[Prispôsobenie stránky|publish.js]]. Uistite sa, že nahradíte `yourdomain.com` vašou doménou a atribút `src` skriptu skriptom od vášho poskytovateľa analytiky.

Tu je príklad použitia [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

Rovnaký prístup je možné použiť pre [Fathom Analytics](https://usefathom.com/). Všimnite si zmenu z `data-domain` na `data-site` — rôzni poskytovatelia analytiky môžu mať odlišný formát pre vloženie skriptu.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Riešenie problémov

Ak chcete overiť, či vaša stránka používa vašu analytickú službu, vypnite všetky rozšírenia prehliadača na blokovanie reklám, ako napríklad uBlock Origin, ktoré môžu blokovať spustenie sledovacieho skriptu.
