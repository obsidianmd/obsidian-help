---
permalink: import/evernote
aliases:
  - Import from Evernote
---
Obsidian ti permette di migrare facilmente le tue note da Evernote usando il [[Importatore|plugin Importer]]. Questo convertirà i tuoi dati di Evernote in file Markdown durevoli, che puoi usare con Obsidian e molte altre app.

## Esporta i tuoi dati da Evernote

Obsidian utilizza il formato di esportazione di Evernote, i file `.enex`.

Puoi trovare le istruzioni di Evernote per esportare i tuoi dati [sul sito web di Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Questo metodo ti permette di esportare interi taccuini nel client desktop.

1. Vai alla schermata Taccuini.
2. Fai clic su **Altre azioni** ( `•••` ) e scegli **Esporta taccuino...**
3. Seleziona **ENEX** come formato file.
3. Scegli una posizione per il tuo file `.enex` esportato.

## Importa i tuoi dati Evernote in Obsidian

Avrai bisogno del plugin ufficiale di Obsidian [[Importatore]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri le **[[Impostazioni|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** usando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. Sotto **Formattazione file** scegli **Evernote (.enex)**.
6. Seleziona la posizione del tuo file di backup di Evernote.
7. Fai clic su **Importa** e attendi il completamento dell'importazione.
8. Fatto!

## Opzioni di importazione avanzate

### Mantenere la gerarchia delle etichette

L'esportazione di Evernote non mantiene la gerarchia delle etichette. Per mantenere la gerarchia delle etichette, puoi "appiattire" le etichette separandole con "/". Ad esempio, supponendo di avere la seguente struttura di etichette:

```
ParentTag
    ChildTag
```

Quello che devi fare per mantenere le etichette correlate in Obsidian è:

1. Fai clic con il tasto destro su ChildTag.
2. Seleziona "Rinomina."
3. Rinominala come `ParentTag/ChildTag`.

### Gestione degli stack di taccuini

Poiché il processo di esportazione è limitato a singoli taccuini, il file di esportazione predefinito non contiene informazioni sugli stack di taccuini. Tuttavia, l'importer può riconoscere pattern nel nome del file enex per ricreare gli stack di taccuini come cartelle.

Supponendo di avere un taccuino chiamato ```NotebookA``` in uno stack chiamato ```Stack1```, puoi ricreare uno stack di taccuini rinominando il file enex in ```Stack1@@@NotebookA```.

Questo fa sì che le note convertite vengano generate all'interno della cartella Stack1/NotebookA.

### Altre opzioni

Per opzioni di importazione più avanzate da Evernote puoi anche provare [l'importazione tramite Yarle](https://github.com/akosbalasko/yarle).
