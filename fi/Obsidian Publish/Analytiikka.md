---
permalink: publish/analytics
---
## Vaatimukset

Jotta voit käyttää analytiikkaa [[Johdanto Obsidian Publishiin|Obsidian Publish]] -sivustollasi, tarvitset [[Mukautetut verkkotunnukset|mukautetun verkkotunnuksen]].

> [!important] Tärkeää
> Ennen kuin otat analytiikan käyttöön, varmista, että paikalliset lakisi ja säädöksesi sallivat kävijöiden seurannan. Käyttämistäsi työkaluista riippuen saatat joutua lisäämään suostumuspalkkin sivustollesi.

## Google Analytics

Google Analyticsin ottaminen käyttöön Obsidian Publish -sivustollasi:

1. Napsauta nauhavalikossa sovellusikkunan vasemmalla puolella **Julkaise muutokset** ![[lucide-send.svg#icon]].
2. Napsauta **Julkaise muutokset** -valintaikkunassa **Muuta sivuston asetuksia** ![[lucide-cog.svg#icon]].
3. Kirjoita seurantakoodisi kenttään **Google Analytics -seurantakoodi**.

Jos haluat käyttää Google Tag Manageria Google Analyticsin sijaan, lisää omat skriptisi mukautetulla JavaScriptillä.

## Plausible, Fathom ja muut analytiikkapalvelut

Voit lisätä useimmat analytiikkapalvelut sivustollesi [[Mukauta sivustoasi|publish.js]]-tiedoston kautta. Muista korvata `yourdomain.com` omalla verkkotunnuksellasi ja skriptin `src` analytiikkapalveluntarjoajasi skriptillä.

Tässä on esimerkki [Plausible Analyticsin](https://plausible.io/) käyttämisestä:

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

Samaa lähestymistapaa voidaan käyttää [Fathom Analyticsin](https://usefathom.com/) kanssa. Huomaa muutos `data-domain`-attribuutista `data-site`-attribuuttiin — eri analytiikkapalveluntarjoajilla voi olla erilainen muoto skriptin lisäämiselle.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Vianmääritys

Varmistaaksesi, että sivustosi käyttää analytiikkapalveluasi, poista käytöstä kaikki mainosten estoon tarkoitetut selainlaajennukset, kuten uBlock Origin, jotka saattavat estää seurantaskriptin suorittamisen.
