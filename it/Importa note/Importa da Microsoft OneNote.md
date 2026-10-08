---
permalink: import/onenote
aliases:
  - Import from Microsoft OneNote
cssclasses:
  - soft-embed
---
Obsidian ti permette di migrare facilmente le tue note da Microsoft OneNote utilizzando il [[Importatore|plugin Importer]]. Questo convertirà i tuoi dati di OneNote in file Markdown durevoli, che puoi utilizzare con Obsidian e molte altre app.

Obsidian offre due modi per importare i tuoi dati di OneNote:

1. **Account Microsoft** accede al tuo account Microsoft e importa i taccuini sincronizzati su OneDrive. Richiede una connessione a Internet.
2. **Importazione file** utilizza i file di esportazione di OneNote (`.onepkg` e `.one`). Non richiede un account né una connessione a Internet, e funziona per i taccuini che non sono mai stati sincronizzati.

## Importa dal tuo account Microsoft

> [!Warning]
> Possono essere importati solo i taccuini di proprietà del tuo account. I taccuini condivisi da altre persone non sono supportati, e un account di lavoro o scolastico potrebbe richiedere l'approvazione della tua organizzazione per l'accesso.

Avrai bisogno del plugin ufficiale di Obsidian [[Importatore]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri **[[Impostazioni|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** utilizzando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. In **Formato file** scegli **Microsoft OneNote**.
6. Clicca su **Accedi** per aprire il browser web alla pagina di accesso Microsoft. Inserisci le credenziali del tuo account Microsoft che contiene i tuoi taccuini OneNote. Ulteriori informazioni sul processo di accesso Microsoft sono disponibili di seguito.
7. Clicca su **Accetta** per concedere a Obsidian il permesso di visualizzare i tuoi taccuini OneNote.
8. Clicca su **Apri collegamento** per consentire al browser di reindirizzarti all'app Obsidian.
9. Nell'app Obsidian, la finestra di dialogo di Importer mostrerà ora che hai effettuato l'accesso e elencherà i tuoi taccuini e sezioni di OneNote. Seleziona le sezioni che desideri importare.
10. Clicca su **Importa** e attendi il completamento dell'importazione.
11. Fatto!

Se i tuoi taccuini appartengono a un account di lavoro o scolastico, OneNote potrebbe negare l'accesso al plugin dopo l'accesso. In tal caso, apparirà un pulsante **Usa accesso aziendale o scolastico** accanto a **Disconnetti**. Usalo per accedere nuovamente con le autorizzazioni più ampie richieste da quegli account. La tua organizzazione potrebbe dover approvare tali autorizzazioni prima che funzionino.

### Risoluzione dei problemi

#### Non appaiono sezioni o taccuini

Assicurati che i taccuini che stai cercando di importare siano sincronizzati su OneDrive e visibili in OneNote Web. Devono essere di tua proprietà (i taccuini condivisi scritti da altri non sono supportati).

Se manca una sezione specifica, assicurati che non sia una sezione bloccata, poiché queste sono invisibili senza prima rimuovere il blocco.

Se si tratta di un taccuino aziendale o scolastico, consulta la nota su **Usa accesso aziendale o scolastico** qui sopra.

#### Le note importate sono vuote o mancano di contenuto

Questo problema può verificarsi con i taccuini che usi raramente. Per risolvere il problema segui questi passaggi:

1. Apri [OneNote Web](https://onenote.com/notebooks) nel tuo browser.
2. **Fai clic destro** sui taccuini a cui manca contenuto.
3. Seleziona **Esporta taccuino** dal menu.
4. **Decomprimi** il file che hai appena scaricato in una cartella.
5. Carica i tuoi taccuini OneNote [qui](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Apri **Obsidian Importer** e prova a importare di nuovo.

Se hai seguito questi suggerimenti e il problema rimane irrisolto, è possibile che ci sia un problema temporaneo con i server Microsoft. In tal caso, attendi qualche minuto e riprova. Se il problema persiste, apri una segnalazione nel [repository GitHub di Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Importa file OneNote (.one, .onepkg)

L'importazione file è un modo alternativo per importare i tuoi dati di OneNote. Legge i file di esportazione scritti da OneNote stesso, quindi non richiede un account Microsoft né una connessione a Internet. Usala per i taccuini memorizzati solo sul tuo computer, i taccuini che il tuo account non riesce a raggiungere, o quando preferisci non effettuare l'accesso.

### Esporta i tuoi taccuini da OneNote

Ti consigliamo di esportare ogni taccuino come **Pacchetto OneNote** (`.onepkg`). Un pacchetto contiene tutte le sezioni del taccuino, così puoi esportare e importare un taccuino in un solo passaggio, e Importer elencherà le sue sezioni per consentirti di scegliere.

L'esportazione è disponibile solo in **OneNote per Windows**, l'app desktop inclusa in Microsoft 365. L'app OneNote per Mac e la precedente app OneNote per Windows 10 non possono esportare in questi formati.

1. Apri il taccuino che vuoi esportare in OneNote per Windows.
2. Vai su **File → Esporta**.
3. In **Esporta corrente** scegli **Taccuino**.
4. In **Seleziona formato** scegli **Pacchetto OneNote (\*.onepkg)**.
5. Clicca su **Esporta** e scegli dove salvare il file.
6. Ripeti per ogni taccuino che vuoi importare.

Per esportare una singola sezione, scegli **Sezione** al passaggio 3 e **Sezione OneNote 2010-2016 (\*.one)** al passaggio 4.

Puoi anche importare i file di sezione che OneNote conserva già sul disco, senza esportare nulla:

- I taccuini memorizzati sul tuo computer si trovano in `Documenti\OneNote Notebooks`, un file `.one` per sezione.
- I backup dei taccuini sincronizzati si trovano in `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Importa i tuoi file OneNote

Avrai bisogno del plugin ufficiale di Obsidian [[Importatore]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri **[[Impostazioni|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** utilizzando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. In **Formato file** scegli **Microsoft OneNote (.one, .onepkg)**.
6. Scegli i file `.onepkg` e `.one` che vuoi importare. Puoi selezionare più di un file alla volta, così tutti i tuoi taccuini possono essere importati insieme.
7. In **Sezioni da importare** vengono elencate le sezioni trovate in quei file, tutte selezionate. Deseleziona quelle che non vuoi.
8. Opzionalmente, scegli una **Cartella di output** per l'importazione, dove salvare gli allegati, e cosa fare con le **Note esistenti** se importi lo stesso taccuino di nuovo.
9. Clicca su **Importa** e attendi il completamento dell'importazione.
10. Fatto!

Ogni sezione diventa una cartella, e ogni pagina al suo interno diventa una nota. Una sottopagina viene salvata in una cartella con il nome della pagina superiore, il che mantiene la struttura mostrata da OneNote e impedisce a due sottopagine con lo stesso nome di entrare in conflitto. Le pagine nel cestino del taccuino non vengono importate.

### Limitazioni

- Le sezioni protette da password sono memorizzate in forma crittografata, e le loro pagine vengono saltate. Rimuovi la password in OneNote ed esporta di nuovo per importarle.
- I file protetti da diritti possono essere aperti solo da un account consentito dalla policy, e non possono essere letti da Importer.

## Privacy

Se scegli di importare utilizzando il tuo account Microsoft, il plugin Obsidian Importer utilizza [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) per autenticarsi e importare i tuoi taccuini OneNote. Questo concede un token di accesso a breve termine al tuo account che viene utilizzato solo dal tuo computer e non viene mai memorizzato. Dopo il completamento dell'importazione puoi opzionalmente revocare il token dalla [pagina app e servizi Microsoft](https://account.live.com/consent/Manage).

L'importazione file non si connette mai a Microsoft: i file che selezioni vengono letti sul tuo computer, senza alcuna connessione di rete.
