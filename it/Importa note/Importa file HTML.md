---
permalink: import/html
aliases:
  - Import HTML files
cssclasses:
  - soft-embed
---
Obsidian ti permette di importare facilmente singoli file HTML e intere cartelle di file HTML utilizzando il [[Importatore|plugin Importer]] ufficiale. Questo è utile se vuoi salvare interi siti web in formato [[Markdown stile Obsidian|Markdown]], o se vuoi importare dati da uno strumento che esporta in HTML.

Se stai importando note da un'app specifica, potresti voler prima consultare l'elenco delle app supportate dal [[Importatore|plugin Importer]] per verificare se esiste un convertitore specifico che preserverà meglio i dati che stai migrando.

## Importare dati HTML in Obsidian

Avrai bisogno del plugin ufficiale Obsidian [[Importatore]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri le **[[Impostazioni|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** usando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. Sotto **Formattazione file** scegli **HTML (.html).**
6. Seleziona la posizione dei tuoi file o cartelle HTML.
7. Seleziona **Importa** per rivedere il modello generato e visualizzare anteprime di esempio dai tuoi file.
8. Seleziona **Importa** di nuovo e attendi il completamento dell'importazione.

### Importa impostazioni

- **Limite dimensione allegati**: Salta l'importazione degli allegati più grandi della dimensione specificata.
- **Dimensione minima immagine**: Salta l'importazione delle immagini più piccole della dimensione specificata in una delle due dimensioni. Può essere usato per saltare icone e logo.

## Modelli

Usa i [[Modelli per l'importazione|modelli di Importer]] per configurare completamente come vengono importati i tuoi dati.

![[Modelli per l'importazione#Variables]]

Inoltre, le importazioni HTML forniscono molte delle stesse variabili di [[Introduzione a Obsidian Web Clipper|Web Clipper]]:

| Variabile | Descrizione |
| --- | --- |
| `{{author}}` | Autore della pagina. |
| `{{contentHtml}}` | Contenuto estratto della pagina in formato HTML. |
| `{{description}}` | Descrizione o estratto della pagina. |
| `{{domain}}` | Dominio della pagina. |
| `{{favicon}}` | URL della favicon. |
| `{{fullHtml}}` | HTML non elaborato dell'intera pagina. |
| `{{image}}` | URL dell'immagine di condivisione social. |
| `{{language}}` | Lingua della pagina. |
| `{{published}}` | Data di pubblicazione, che può essere formattata con il filtro `date`. |
| `{{site}}` | Nome del sito o editore. |
| `{{url}}` | URL sorgente trovato nel documento importato, quando disponibile. |
| `{{words}}` | Conteggio parole. |
