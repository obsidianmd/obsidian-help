---
permalink: import/csv
aliases:
  - Import CSV files
cssclasses:
  - soft-embed
---
Obsidian consente di importare dati da file CSV utilizzando il plugin ufficiale [[Importatore|plugin Importer]]. Questo è utile se hai dati tabulari archiviati in app come Excel, Google Sheets, Numbers, Notion o Airtable.

L'importazione CSV genera file Markdown per ogni riga e un file [[Introduzione a Base|Base]] che visualizza tutti i file importati come tabella.

Se stai importando note da un'app specifica, potresti voler prima consultare l'elenco delle app supportate dal [[Importatore|plugin Importer]] per verificare se esiste un convertitore specifico che preserverà meglio i dati che stai migrando.

## Creare note da dati CSV in Obsidian

Avrai bisogno del plugin ufficiale Obsidian [[Importatore]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri **[[Impostazioni|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** usando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. Sotto **Formattazione file** scegli **CSV (.csv).**
6. Seleziona la posizione del tuo file CSV.
7. Seleziona **Importa** per configurare come i dati nel tuo file CSV saranno convertiti in note con [[Proprietà|Proprietà]].
8. Seleziona **Continua** per rivedere il modello generato e visualizzare in anteprima gli esempi dalle tue righe.
9. Seleziona **Importa** e attendi il completamento dell'importazione.

## Configurare come vengono importati i campi CSV

Nel passaggio di configurazione dei campi, puoi scegliere come vengono importati i dati. Importer genera un modello dalle intestazioni del CSV, utilizza la prima colonna per il nome iniziale della nota e crea una proprietà per ogni colonna.

## Modelli

Usa i [[Modelli per l'importazione|modelli di Importer]] per configurare completamente come vengono importati i tuoi dati.

Ogni colonna CSV è disponibile tramite la sua intestazione. Se una colonna non ha intestazione, Importer utilizza il nome di colonna generato.

Usa la notazione tra parentesi quadre per gestire in modo sicuro spazi e punteggiatura:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Modelli per l'importazione#Variabili]]
