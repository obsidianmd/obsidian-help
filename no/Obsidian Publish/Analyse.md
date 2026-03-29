---
permalink: publish/analytics
---
## Forutsetninger

For å bruke analyse på [[Introduksjon til Obsidian Publish|Obsidian Publish]]-nettstedet ditt, trenger du et [[Egendefinerte domener|egendefinert domene]].

> [!important] Viktig
> Før du aktiverer analyse, sørg for at lokale lover og forskrifter tillater deg å spore besøkende. Avhengig av verktøyene du bruker, kan det hende du må legge til et samtykkebanner på nettstedet ditt.

## Google Analytics

For å aktivere Google Analytics for Obsidian Publish-nettstedet ditt:

1. I verktøylinjen til venstre i programvinduet, klikk **Publiser endringer** ![[lucide-send.svg#icon]].
2. I dialogboksen **Publiser endringer**, klikk **Endre nettstedsalternativer** ![[lucide-cog.svg#icon]].
3. I **Google Analytics-sporingskode**, skriv inn sporingskoden din.

For å bruke Google Tag Manager i stedet for Google Analytics, bruk egendefinert JavaScript for å legge til dine egne skript.

## Plausible, Fathom og andre analysetjenester

Du kan legge til de fleste analysetjenester på nettstedet ditt via [[Tilpass nettstedet ditt|publish.js]]-filen din. Sørg for å erstatte `yourdomain.com` med ditt domene, og skriptets `src` med skriptet fra din analyseleverandør.

Her er et eksempel med [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

 Den samme tilnærmingen kan brukes for [Fathom Analytics](https://usefathom.com/). Merk endringen fra `data-domain` til `data-site` — ulike analyseleverandører kan ha et annet format for hvordan skriptet skal settes inn.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Feilsøking

For å bekrefte at nettstedet ditt bruker analysetjenesten din, deaktiver eventuelle annonseblokkerende nettleserutvidelser, som uBlock Origin, som kan hindre sporingsskriptet fra å kjøre.
