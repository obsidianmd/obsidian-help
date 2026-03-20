---
permalink: import/csv
aliases:
  - Import CSV files
---
Obsidian consente di importare dati da file CSV utilizzando il plugin ufficiale [[Importer|plugin Importer]]. Questo è utile se hai dati tabulari archiviati in app come Excel, Google Sheets, Numbers, Notion o Airtable.

L'importazione CSV genera file Markdown per ogni riga e un file [[Introduction to Bases|Base]] che visualizza tutti i file importati come tabella.

Se stai importando note da un'app specifica, potresti voler prima consultare l'elenco delle app supportate dal [[Importer|plugin Importer]] per verificare se esiste un convertitore specifico che preserverà meglio i dati che stai migrando.

## Creare note da dati CSV in Obsidian

Avrai bisogno del plugin ufficiale Obsidian [[Importer]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri **[[Settings|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** usando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. Sotto **Formattazione file** scegli **CSV (.csv).**
6. Seleziona la posizione del tuo file CSV.
7. Fai clic su **Importa** per configurare come i dati nel tuo file CSV saranno convertiti in note con [[Properties|Proprietà]].
8. Fai clic su **Continua** e attendi il completamento dell'importazione.
9. Fatto!

## Configurare come vengono importati i campi CSV

Nel secondo passaggio dell'importazione CSV, puoi scegliere come vengono importati i dati utilizzando un modello.

A ogni colonna nel tuo file CSV viene attribuita una variabile chiamata `{{nome_colonna}}` che rappresenta il nome dell'intestazione nel tuo file. Puoi usare questa variabile per definire il titolo, la posizione, il contenuto e le [[Properties|proprietà]] della nota.
