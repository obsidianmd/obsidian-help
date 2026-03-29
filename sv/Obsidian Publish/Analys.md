---
permalink: publish/analytics
---
## Förutsättningar

För att använda analys på din [[Introduktion till Obsidian Publish|Obsidian Publish]]-webbplats behöver du en [[Anpassade domäner|anpassad domän]].

> [!important] Viktigt
> Innan du aktiverar analys, se till att dina lokala lagar och regler tillåter dig att spåra dina besökare. Beroende på vilka verktyg du använder kan du behöva lägga till en samtyckesbanner på din webbplats.

## Google Analytics

För att aktivera Google Analytics för din Obsidian Publish-webbplats:

1. I ribbon, till vänster om programfönstret, klicka på **Publicera ändringar** ![[lucide-send.svg#icon]].
2. I dialogrutan **Publicera ändringar**, klicka på **Ändra webbplatsalternativ** ![[lucide-cog.svg#icon]].
3. I **Google Analytics spårningskod**, ange din spårningskod.

För att använda Google Tag Manager istället för Google Analytics, använd anpassat JavaScript för att lägga till dina egna skript.

## Plausible, Fathom och andra analystjänster

Du kan lägga till de flesta analystjänster på din webbplats via din [[Anpassa din webbplats|publish.js]]-fil. Se till att ersätta `yourdomain.com` med din domän, och skriptets `src` med skriptet från din analysleverantör.

Här är ett exempel med [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

 Samma tillvägagångssätt kan användas för [Fathom Analytics](https://usefathom.com/). Observera ändringen från `data-domain` till `data-site` — olika analysleverantörer kan ha olika format för hur skriptet ska infogas.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Felsökning

För att verifiera att din webbplats använder din analystjänst, inaktivera eventuella annonsblockerande webbläsartillägg, såsom uBlock Origin, som kan hindra spårningsskriptet från att köras.
