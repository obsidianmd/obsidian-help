---
permalink: import/google-keep
aliases:
  - Import from Google Keep
---
Obsidian ti permette di migrare facilmente le tue note da Google Keep utilizzando il [[Importer|plugin Importer]]. Questo convertirà i tuoi dati di Google Keep in file Markdown durevoli, che puoi utilizzare con Obsidian e molte altre app.

## Esporta i tuoi dati da Google Keep

1. Vai su [Google Takeout](https://takeout.google.com/settings/takeout) e accedi al tuo account Google.
2. Fai clic su **Deseleziona tutto** nell'angolo in alto a destra.
3. Scorri verso il basso e seleziona **Keep** dall'elenco.
4. Scorri fino in fondo alla pagina e fai clic su **Successivo**.
5. Nella schermata successiva, fai clic sul pulsante **Crea esportazione**.
6. Scarica il file `.zip` una volta disponibile.

## Importa i tuoi dati di Google Keep in Obsidian

Avrai bisogno del plugin ufficiale Obsidian [[Importer]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri **[[Settings|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** utilizzando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. In **Formattazione file** scegli **Google Keep (.zip).**
6. Seleziona la posizione del tuo file `.zip`.
7. Fai clic su **Importa** e attendi il completamento dell'importazione.
8. Hai finito!

### Funzionalità supportate

- Tutte le liste di controllo verranno importate come elementi di primo livello perché Google Keep non esporta le informazioni di indentazione.
- I promemoria e le assegnazioni utente nelle note non verranno importati perché queste funzionalità non sono supportate da Obsidian.
- Tutte le altre informazioni dovrebbero essere importate come combinazione di contenuto ed etichette.
