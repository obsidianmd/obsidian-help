---
permalink: publish/analytics
aliases:
  - Analytics
---
## Cerințe prealabile

Pentru a folosi analitice pe site-ul tău [[Introducere în Obsidian Publish|Obsidian Publish]], ai nevoie de un [[Domenii personalizate|domeniu personalizat]].

> [!important] Important
> Înainte de a activa analiticele, asigură-te că legile și reglementările locale îți permit să urmărești vizitatorii. În funcție de instrumentele folosite, s-ar putea să fie nevoie să adaugi un banner de consimțământ pe site-ul tău.

## Google Analytics

Pentru a activa Google Analytics pentru site-ul tău Obsidian Publish:

1. În panglică, în partea stângă a ferestrei aplicației, apasă pe **Publică schimbările** ![[lucide-send.svg#icon]].
2. În fereastra de dialog **Publică schimbările**, apasă pe **Schimbă opțiunile siteului** ![[lucide-cog.svg#icon]].
3. La **Cod de tracking Google Analytics**, introdu codul tău de tracking.

Pentru a folosi Google Tag Manager în locul Google Analytics, folosește JavaScript personalizat pentru a-ți adăuga propriile scripturi.

## Plausible, Fathom și alte servicii de analitice

Poți adăuga majoritatea serviciilor de analitice pe site-ul tău prin fișierul [[Personalizează-ți site-ul|publish.js]]. Asigură-te că înlocuiești `yourdomain.com` cu domeniul tău, iar `src`-ul scriptului cu scriptul primit de la furnizorul tău de analitice.

Iată un exemplu folosind [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

 Aceeași abordare poate fi folosită pentru [Fathom Analytics](https://usefathom.com/). Observă schimbarea de la `data-domain` la `data-site` — furnizori diferiți de analitice pot avea un format diferit pentru modul în care scriptul trebuie inserat.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Depanare

Pentru a verifica dacă site-ul tău folosește serviciul tău de analitice, dezactivează orice extensie de blocare a reclamelor din browser, cum ar fi uBlock Origin, care ar putea împiedica rularea scriptului de urmărire.
