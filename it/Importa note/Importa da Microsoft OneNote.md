---
permalink: import/onenote
aliases:
  - Import from Microsoft OneNote
---
Obsidian ti permette di migrare facilmente le tue note da Microsoft OneNote utilizzando il [[Importer|plugin Importer]]. Questo convertirà i tuoi dati di OneNote in file Markdown durevoli, che puoi utilizzare con Obsidian e molte altre app.

> [!Warning]
> Possono essere importati solo i taccuini di proprietà del tuo account personale. Le note condivise o gli account di lavoro e scolastici non sono supportati.

## Importa i tuoi dati di OneNote in Obsidian

Avrai bisogno del plugin ufficiale di Obsidian [[Importer]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri **[[Settings|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** utilizzando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. In **Formato file** scegli **Microsoft OneNote**.
6. Clicca su **Accedi** per aprire il browser web alla pagina di accesso Microsoft. Inserisci le credenziali del tuo account Microsoft che contiene i tuoi taccuini OneNote. Ulteriori informazioni sul processo di accesso Microsoft sono disponibili di seguito.
7. Clicca su **Accetta** per concedere a Obsidian il permesso di visualizzare i tuoi taccuini OneNote.
8. Clicca su **Apri collegamento** per consentire al browser di reindirizzarti all'app Obsidian.
9. Nell'app Obsidian, la finestra di dialogo di Importer mostrerà ora che hai effettuato l'accesso e elencherà i tuoi taccuini e sezioni di OneNote. Seleziona le sezioni che desideri importare.

![[OneNote-Importer-Select-Sections.png]]

10. Clicca su **Importa** e attendi il completamento dell'importazione.
11. Fatto!

## Risoluzione dei problemi

### Non appaiono sezioni o taccuini

Assicurati che i taccuini che stai cercando di importare siano sincronizzati su OneDrive e visibili in OneNote Web. Devono essere di tua proprietà (i taccuini condivisi scritti da altri non sono supportati).

Se manca una sezione specifica, assicurati che non sia una sezione bloccata — queste sono invisibili senza prima rimuovere il blocco.

### Le note importate sono vuote o mancano di contenuto

Questo problema può verificarsi con i taccuini che usi raramente. Per risolvere il problema segui questi passaggi:

1. Apri [OneNote Web](https://onenote.com/notebooks) nel tuo browser.
2. **Fai clic destro** sui taccuini a cui manca contenuto.
3. Seleziona **Esporta taccuino** dal menu.
4. **Decomprimi** il file che hai appena scaricato in una cartella.
5. Carica i tuoi taccuini OneNote [qui](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Apri **Obsidian Importer** e prova a importare di nuovo.

Se hai seguito questi suggerimenti e il problema rimane irrisolto, è possibile che ci sia un problema temporaneo con i server Microsoft. In tal caso, attendi qualche minuto e riprova. Se il problema persiste, apri una segnalazione nel [repository GitHub di Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Privacy

Il plugin Obsidian Importer utilizza [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) per autenticarsi con il tuo account Microsoft e importare i tuoi taccuini OneNote. Questo concede un token di accesso a breve termine al tuo account che viene utilizzato solo dal tuo computer e non viene mai memorizzato. Dopo il completamento dell'importazione puoi opzionalmente revocare il token dalla [pagina app e servizi Microsoft](https://account.live.com/consent/Manage).
