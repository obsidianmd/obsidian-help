---
permalink: import/textbundle
aliases:
  - Import Textbundle files
cssclasses:
  - soft-embed
---
Obsidian ti permette di importare facilmente file [Textbundle](https://textbundle.org/) utilizzando il [[Importatore|plugin Importer]] ufficiale.

Se stai importando note da un'app specifica, potresti voler prima consultare l'elenco delle app supportate dal [[Importatore|plugin Importer]] per verificare se esiste un convertitore specifico che preserverà meglio i dati che stai migrando.

Il formato Textbundle raggruppa testo Markdown e tutte le immagini referenziate in un unico file, fornendo un modo più fluido per esportare da un'applicazione sandboxed. L'esportazione Textbundle è supportata da [molte app](https://textbundle.org/), tra cui Agenda, Craft, Taio, Ulysses, Zettlr e altre.

## Importare file Textbundle in Obsidian

Avrai bisogno del plugin ufficiale di Obsidian [[Importatore]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri le **[[Impostazioni|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** utilizzando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. In **Formattazione file** scegli **Textbundle (.textbundle, .textpack).**
6. Seleziona la posizione dei tuoi file Textbundle o Textpack. Sono supportati anche i file zip.
7. Seleziona **Importa** per rivedere il modello generato e visualizzare l'anteprima degli esempi dalle tue note.
8. Seleziona **Importa** di nuovo e attendi il completamento dell'importazione.

## Personalizzare le note importate

Prima dell'inizio dell'importazione, Importer mostra un'anteprima generata dai file Textbundle selezionati. Puoi modificare il modello generato o scegliere un modello Markdown dal tuo vault. Vedi [[Modelli per l'importazione]].

## Risoluzione dei problemi

### Nessun file selezionato per l'importazione

L'importazione Textbundle può importare solo un file Textbundle alla volta, e solo su dispositivi Mac. In alternativa, puoi comprimere tutti i file Textbundle che desideri importare in un unico file .zip e importare quest'ultimo da qualsiasi dispositivo.

## Modelli

Usa i [[Modelli per l'importazione|modelli di Importer]] per configurare completamente come vengono importati i tuoi dati.

![[Modelli per l'importazione#Variables]]
