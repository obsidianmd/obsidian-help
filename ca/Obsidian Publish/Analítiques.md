---
permalink: publish/analytics
---
## Prerequisits

Per utilitzar analítiques al vostre lloc d'[[Introducció a Obsidian Publish|Obsidian Publish]], necessiteu un [[Dominis personalitzats|domini personalitzat]].

> [!important] Important
> Abans d'habilitar les analítiques, assegureu-vos que les lleis i regulacions locals us permeten fer seguiment dels vostres visitants. Depenent de les eines que utilitzeu, és possible que hàgiu d'afegir un bàner de consentiment al vostre lloc.

## Google Analytics

Per habilitar Google Analytics al vostre lloc d'Obsidian Publish:

1. A la cinta, a l'esquerra de la finestra de l'aplicació, feu clic a **Publica canvis** ![[lucide-send.svg#icon]].
2. Al diàleg **Publica canvis**, feu clic a **Canvia les opcions del lloc** ![[lucide-cog.svg#icon]].
3. A **Codi de seguiment de Google Analytics**, introduïu el vostre codi de seguiment.

Per utilitzar Google Tag Manager en lloc de Google Analytics, feu servir JavaScript personalitzat per afegir els vostres propis scripts.

## Plausible, Fathom i altres serveis d'analítiques

Podeu afegir la majoria de serveis d'analítiques al vostre lloc mitjançant el fitxer [[Personalitza el teu lloc|publish.js]]. Assegureu-vos de substituir `yourdomain.com` pel vostre domini, i l'`src` de l'script per l'script del vostre proveïdor d'analítiques.

Aquí teniu un exemple usant [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

El mateix enfocament es pot utilitzar per a [Fathom Analytics](https://usefathom.com/). Observeu el canvi de `data-domain` a `data-site` — diferents proveïdors d'analítiques poden tenir un format diferent per a com s'ha d'inserir l'script.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Resolució de problemes

Per verificar que el vostre lloc està utilitzant el vostre servei d'analítiques, desactiveu qualsevol extensió de navegador de bloqueig de publicitat, com ara uBlock Origin, que pugui impedir l'execució de l'script de seguiment.
