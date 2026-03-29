---
permalink: publish/analytics
---
## Vereisten

Om analyses te gebruiken op je [[Inleiding tot Obsidian Publish|Obsidian Publish]]-site, heb je een [[Aangepaste domeinen|aangepast domein]] nodig.

> [!important] Belangrijk
> Controleer voordat je analyses inschakelt of je lokale wet- en regelgeving het toestaat om je bezoekers te volgen. Afhankelijk van de tools die je gebruikt, moet je mogelijk een toestemmingsbanner aan je site toevoegen.

## Google Analytics

Om Google Analytics in te schakelen voor je Obsidian Publish-site:

1. Klik in de werkbalk, aan de linkerkant van het toepassingsvenster, op **Wijzigingen publiceren** ![[lucide-send.svg#icon]].
2. Klik in het dialoogvenster **Wijzigingen publiceren** op **Verander site-opties** ![[lucide-cog.svg#icon]].
3. Voer in **Google Analytics traceringscode** je traceringscode in.

Om Google Tag Manager te gebruiken in plaats van Google Analytics, gebruik je aangepast JavaScript om je eigen scripts toe te voegen.

## Plausible, Fathom en andere analysediensten

Je kunt de meeste analysediensten aan je site toevoegen via je [[Je site aanpassen|publish.js]]-bestand. Zorg ervoor dat je `yourdomain.com` vervangt door je domein, en de script-`src` door het script van je analyseprovider.

Hier is een voorbeeld met [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

Dezelfde aanpak kan worden gebruikt voor [Fathom Analytics](https://usefathom.com/). Let op de wijziging van `data-domain` naar `data-site` — verschillende analyseproviders kunnen een ander formaat hebben voor hoe het script moet worden ingevoegd.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Problemen oplossen

Om te verifiëren dat je site je analysedienst gebruikt, schakel je eventuele advertentieblokkerende browserextensies uit, zoals uBlock Origin, die het volgscript mogelijk blokkeren.
