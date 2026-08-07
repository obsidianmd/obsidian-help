---
permalink: import/notion
aliases:
  - Import from Notion
---
Obsidian ti permette di migrare facilmente le tue note da Notion utilizzando il [[Importatore|plugin Importer]]. Questo convertirà i tuoi dati di Notion in file Markdown durevoli che puoi usare offline con Obsidian e molte altre app.

Obsidian offre due modi per importare i tuoi dati da Notion:

1. **Importazione via API** preserva l'intero spazio di lavoro inclusi i Database e le formule che vengono convertiti in [[Introduzione a Base|Base]], ma richiede un token di integrazione Notion e una connessione internet.
2. **Importazione da file** non preserva i Database ma non richiede un token API o una connessione internet.

## Importazione via API

### Creare un token di accesso API di Notion

Per accedere ai tuoi dati Notion tramite l'API hai bisogno di un token di accesso. Questo passaggio richiede circa due minuti per essere completato.

Il token è una lunga stringa di numeri e lettere che tipicamente inizia con `ntn_...` e ti permetterà di scaricare i tuoi dati da Notion.

1. Accedi alla dashboard delle [Connessioni di Notion](https://app.notion.com/developers/connections).
2. Scegli **New connection**.
	1. Dai un nome alla tua connessione, ad esempio "Personal". Puoi usare qualsiasi nome.
	2. Scegli **Access token** come metodo di autenticazione.
	3. Scegli lo spazio di lavoro che vuoi esportare come **Installable in**.

![[notion-integration.png#interface]]

3. Fai clic su **Create connection**.
4. Nella scheda **Configuration** il tuo token API è accessibile nel campo **Access token**.
5. Seleziona **Show** e poi **Copy**.
6. Salva il token in un posto sicuro come il tuo gestore di password.

![[notion-token.png#interface]]

Successivamente, concedi alla tua connessione l'accesso alle pagine e ai database di Notion che vuoi importare.

1. Vai alla scheda **Content access** della connessione appena creata.
2. Aggiungi le pagine e i database che vuoi importare.

![[notion-content.png#interface]]

Ora puoi convertire i tuoi dati usando Obsidian Importer.

### Importare i dati da Notion tramite API

Avrai bisogno del plugin ufficiale Obsidian [[Importatore]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri le **[[Impostazioni|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** usando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. In **File format** seleziona **Notion (API)**
6. In **API token**, fai clic su **Link...** per aggiungere un nuovo segreto. Per l'**ID**, assegna un nome come `notion`, e per il **Segreto** incolla il tuo **Access token** da Notion.
7. Fai clic su **Carica** per scegliere i database e le pagine che vuoi importare.
8. Rivedi e modifica le opzioni di importazione.
9. Seleziona **Importa** e attendi il completamento dell'importazione
10. Hai finito!

### Limitazioni

> [!info] L'importazione via API è nuova
> L'importatore API di Notion è nuovo. A causa della complessità degli spazi di lavoro Notion, alcuni casi limite potrebbero non essere stati considerati. Se riscontri problemi con la conversione, [invia una segnalazione di bug](https://github.com/obsidianmd/obsidian-importer/issues) così possiamo migliorarlo.

A causa dei limiti di frequenza dell'API di Notion, l'importazione di spazi di lavoro di grandi dimensioni potrebbe richiedere un tempo considerevole. Ti preghiamo di essere paziente.

A causa di limitazioni nell'API di Notion, alcuni dati non sono disponibili o non possono essere convertiti:

- Viene importata solo la vista principale per ogni database.
- Le [origini dati collegate](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) non vengono importate: *"L'API di Notion attualmente non supporta le origini dati collegate. Quando condividi un database con la tua integrazione, assicurati che contenga l'origine dati originale!"*
- Funzioni `People`: `name()` e `email()`
- Funzioni `Text`: `style()` e `unstyle()`

Inoltre, Importer apporterà le seguenti modifiche:

- Le pagine senza sotto-pagine o database verranno importate come `[nome file].md` invece di `[nome file]/[nome file].md`.
- I database sono sempre rappresentati come cartelle denominate `[nome database]` con un file `[nome database].base` al loro interno.

## Importazione da file

L'importazione da file è un modo alternativo per importare i tuoi dati da Notion. Questo metodo non preserva i Database ma non richiede un token API o una connessione internet.

### Esportare i dati da Notion

Per preparare i tuoi dati all'importazione, dovrai esportare l'intero spazio di lavoro usando il formato di esportazione HTML di Notion. Ti consigliamo di non usare l'esportazione Markdown di Notion poiché omette dati importanti. Devi avere accesso da amministratore allo spazio di lavoro Notion per esportare tutto il contenuto.

1. Vai su **Impostazioni** nella parte superiore della barra laterale di Notion.
2. In **Workspace** seleziona **Generale**.
3. Trova e seleziona **Export all workspace content**.
4. In **Export format** seleziona **HTML**.
5. Scegli **Include everything**.
6. Abilita **Create folders for subpages**.
7. Riceverai un file `.zip` via email o direttamente nel browser.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Importare il file .zip di Notion

Avrai bisogno del plugin ufficiale Obsidian [[Importatore]], che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri le **[[Impostazioni|Impostazioni]]**.
2. Vai su **Plugin della comunità** e [installa Importer](obsidian://show-plugin?id=obsidian-importer).
3. Abilita il plugin Importer.
4. Apri il plugin **Importer** usando la tavolozza dei comandi o l'icona nella barra degli strumenti.
5. In **File format** seleziona **Notion (.zip)**
6. Scegli il file `.zip` con i file di Notion che vuoi importare. *Si consiglia di importare tutti i dati di Notion in una volta sola in modo che i collegamenti interni possano essere riconciliati correttamente.*
7. _Opzionalmente_, seleziona una cartella per l'importazione. Le tue pagine e i tuoi database di Notion saranno annidati all'interno di questa cartella.
8. Abilita **Save parent pages in subfolders** per mantenere la struttura di Notion. *Nota che in Notion puoi scrivere contenuto nelle Cartelle, questo non è possibile in Obsidian e queste pagine verranno aggiunte come sotto-pagina nella cartella.*
9. Seleziona **Importa** e attendi il completamento dell'importazione
10. Hai finito!

### Risoluzione dei problemi

Se riscontri problemi durante l'importazione da Notion:

- Assicurati di usare **HTML** come formato di esportazione in Notion, **non Markdown**.
- Se Obsidian sembra bloccarsi durante l'importazione, disabilita i plugin della community e riprova.

Hai riscontrato qualcos'altro? Cerca nel [repository di Importer](https://github.com/obsidianmd/obsidian-importer/issues) per vedere se altri hanno avuto lo stesso problema.

#### Importazione di spazi di lavoro di grandi dimensioni

Se stai importando uno spazio di lavoro con diversi gigabyte di dati, l'esportazione da Notion potrebbe contenere file `.zip` annidati. In questo caso potresti vedere un messaggio di errore di importazione simile a questo:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Se vedi questo errore, puoi decomprimere il file da Notion e poi importare i file annidati `Export-{id}-Part-1.zip`.
