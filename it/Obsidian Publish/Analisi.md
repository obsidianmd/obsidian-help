---
permalink: publish/analytics
aliases:
  - Analytics
---
## Prerequisiti

Per utilizzare le analisi sul tuo sito [[Introduction to Obsidian Publish|Obsidian Publish]], è necessario un [[Custom domains|dominio personalizzato]].

> [!important] Importante
> Prima di abilitare le analisi, assicurati che le leggi e i regolamenti locali ti consentano di tracciare i visitatori. A seconda degli strumenti che utilizzi, potrebbe essere necessario aggiungere un banner per il consenso al tuo sito.

## Google Analytics

Per abilitare Google Analytics per il tuo sito Obsidian Publish:

1. Nella barra degli strumenti, a sinistra della finestra dell'applicazione, fai clic su **Pubblica modifiche** ![[lucide-send.svg#icon]].
2. Nella finestra di dialogo **Pubblica modifiche**, fai clic su **Modifica le opzioni del sito** ![[lucide-cog.svg#icon]].
3. In **Codice di monitoraggio Google Analytics**, inserisci il tuo codice di monitoraggio.

Per utilizzare Google Tag Manager al posto di Google Analytics, usa JavaScript personalizzato per aggiungere i tuoi script.

## Plausible, Fathom e altri servizi di analisi

Puoi aggiungere la maggior parte dei servizi di analisi al tuo sito tramite il file [[Customize your site|publish.js]]. Assicurati di sostituire `yourdomain.com` con il tuo dominio e lo `src` dello script con lo script del tuo fornitore di analisi.

Ecco un esempio utilizzando [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

Lo stesso approccio può essere utilizzato per [Fathom Analytics](https://usefathom.com/). Nota il cambiamento da `data-domain` a `data-site` — diversi fornitori di analisi possono avere un formato differente per l'inserimento dello script.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Risoluzione dei problemi

Per verificare che il tuo sito stia utilizzando il servizio di analisi, disabilita eventuali estensioni del browser per il blocco degli annunci, come uBlock Origin, che potrebbero impedire l'esecuzione dello script di tracciamento.
