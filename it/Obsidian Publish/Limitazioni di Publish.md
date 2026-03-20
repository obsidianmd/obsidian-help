---
permalink: publish/limitations
aliases:
  - Publish limitations
---
> [!tip] I membri della nostra fantastica community hanno ideato soluzioni alternative per alcune di queste limitazioni. Per maggiori informazioni, Per favore visita il nostro thread [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) sui forum di Obsidian.

## Plugin della community

Obsidian Publish offre un supporto minimo per i [[Community plugins|Plugin della comunità]].

I plugin che producono output in Markdown grezzo, come il plugin Waypoint, sono compatibili con Publish perché non richiedono l'app per visualizzare i loro dati.

Invece, un plugin che richiede un blocco di codice specifico per la visualizzazione, come Dataview o Fantasy Statblocks, non funzionerà per impostazione predefinita in Publish.

## Grafo

Publish offre una personalizzazione basilare dei colori per la sua vista grafo tramite CSS. Puoi modificare i colori dei nodi nel tuo file `publish.css` utilizzando le [variabili CSS della Vista Grafo](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Nota che il grafo pubblicato non supporta le opzioni complete di ordinamento e visualizzazione disponibili nella [[Graph view|vista grafo]] dell'app.

## File multimediali

Obsidian Publish non è ottimizzato per lo streaming video o per file audio di grandi dimensioni. Includiamo alcune buone pratiche per la gestione dei tuoi [[Media files|file multimediali]] in questa documentazione.

Per migliorare l'esperienza dei tuoi visitatori, ti consigliamo di utilizzare invece un servizio di hosting video, come YouTube o Vimeo.

Puoi caricare file di dimensioni **fino a 50 MB** sul tuo sito Publish. ^publish-media-limit

## PDF

Su dispositivi mobile, tablet e computer con schermi piccoli, potresti riscontrare problemi in cui un PDF incorporato non viene caricato o viene visualizzata solo la prima pagina. Questo è dovuto a limitazioni del renderer PDF sui dispositivi mobile.

Per i contenuti destinati agli utenti mobile, suggeriamo di fornire collegamenti a PDF ospitati esternamente o di includere collegamenti interni che consentano agli utenti di scaricare il PDF direttamente sul proprio dispositivo.

## Cerca

Publish offre un supporto basilare per la ricerca di testo normale nei contenuti pubblicati. La priorità nei risultati di ricerca viene data a:

- Nomi dei file
- Alias
- Nomi delle intestazioni

Dopo aver cercato corrispondenze nei campi sopra indicati, la ricerca includerà il testo normale delle note pubblicate.

Per migliorare la ricercabilità del tuo sito pubblicato, si consiglia di utilizzare nomi di file descrittivi, incorporare più alias e selezionare nomi di intestazione che riflettano accuratamente il contenuto.

Inoltre, Publish attualmente non supporta la funzionalità dei [[Search#Incorporare i risultati di ricerca in una nota|risultati di ricerca incorporati]] dell'app.
