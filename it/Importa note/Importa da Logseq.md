---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian permette di migrare le note da un grafo Logseq basato su file (ora chiamato "Logseq OG") utilizzando il [[Importatore|plugin Importatore]] ufficiale. L'Importatore legge direttamente i file Markdown di Logseq e converte la formattazione specifica di Logseq in file durevoli che è possibile utilizzare offline con Obsidian e altre app.

## Prima di iniziare

- Esegui il backup del grafo Logseq e del vault di Obsidian.
- Individua la cartella radice del grafo Logseq. Normalmente contiene cartelle denominate `pages`, `journals`, `assets` e `logseq`.
- Assicurati di utilizzare un grafo Logseq basato su file. I grafi database di Logseq non sono ancora supportati.

## Importare il grafo Logseq

È necessario il plugin ufficiale [[Importatore]] di Obsidian, che puoi [installare qui](obsidian://show-plugin?id=obsidian-importer).

1. Apri **[[Impostazioni]] → Plugin della comunità** e [installa l'Importatore](obsidian://show-plugin?id=obsidian-importer).
2. Abilita il plugin Importatore.
3. Apri l'**Importatore** utilizzando il [[Riquadro comandi]] o l'icona nella barra multifunzione.
4. In **Formattazione file**, seleziona **Logseq**.
5. In **Scegli cartella**, seleziona la cartella radice del grafo. Seleziona la cartella che contiene `pages` e `journals`, non una di queste cartelle singolarmente.
6. Rivedi le cartelle rilevate ed escludi quelle che non desideri importare.
7. Scegli una cartella di destinazione e dove archiviare gli allegati importati.
8. Rivedi le opzioni di importazione e visualizza in anteprima gli esempi delle note convertite.
9. Seleziona **Importa** e attendi il completamento dell'importazione.

## Limitazioni

- Le lavagne non vengono importate.
- Le query vengono preservate come blocchi di codice se si sceglie di mantenerle.
- Le macro dei modelli dinamici di Logseq rimangono come testo letterale.
- La pianificazione delle flashcard di Logseq, le annotazioni PDF e altri dati specifici dell'app non vengono migrati.

## Impostazioni

L'Importatore converte le convenzioni comuni di Logseq, tra cui:

- Proprietà delle pagine in [[Proprietà]] di Obsidian.
- Alias delle pagine, etichette, namespace e collegamenti.
- Stati del flusso di lavoro in marcatori di liste con caselle di controllo, con priorità e date preservate come testo leggibile.
- ID dei blocchi, riferimenti ai blocchi e incorporamenti di blocchi in collegamenti e incorporamenti di Obsidian.
- Nomi dei file del diario e collegamenti alle date.
- Evidenziazioni, elenchi numerati, blocchi Org, incorporamenti multimediali e file collegati dalla cartella `assets` del grafo.

### Diari

Per impostazione predefinita, **Usa impostazioni delle note giornaliere** è abilitato. I diari importati utilizzano la cartella e il formato data configurati dal plugin principale [[Note del giorno]]. Questo potrebbe posizionare i diari al di fuori della cartella di destinazione selezionata nell'Importatore.

Se disabiliti questa opzione, i diari vengono scritti in una cartella `Journals` all'interno della cartella di destinazione selezionata e utilizzano il formato nome nota `YYYY-MM-DD`.

### Appiattisci le strutture

Logseq utilizza punti elenco annidati come struttura di una pagina. Per impostazione predefinita, l'Importatore preserva questa struttura a schema. Abilita **Appiattisci le strutture** per convertire i blocchi dello schema in una combinazione di paragrafi, intestazioni ed elenchi convenzionali. Le attività e i gruppi di elementi simili a elenchi rimangono elementi di elenco, ma la conversione è euristica. Rivedi diversi esempi nell'anteprima prima di importare un grafo di grandi dimensioni.

### Preserva i dati incompatibili

Le query, le flashcard e le voci di tracciamento del tempo di Logseq non hanno equivalenti diretti in Obsidian. Le opzioni di importazione permettono di scegliere se mantenere ogni tipo di contenuto. Quando mantenuto, rimane come testo normale.

- **Mantieni le query** preserva le query come blocchi di codice delimitati o codice inline.
- **Mantieni le flashcard** preserva i marcatori `#card` e i wrapper cloze come testo normale.
- **Mantieni il tracciamento del tempo** preserva le voci `LOGBOOK` e `CLOCK` come testo normale.

## Modelli

Usa i [[Modelli per l'importazione|Modelli per l'importazione]] per configurare completamente come vengono importati i dati di Logseq.

![[Modelli per l'importazione#Variabili]]

## Risoluzione dei problemi

Se l'Importatore non trova alcuna nota, assicurati di aver selezionato la cartella radice del grafo e che le cartelle delle pagine o dei diari configurate contengano file Markdown.

Se un allegato viene segnalato come mancante, verifica che il file referenziato esista ancora nella cartella `assets` del grafo.

Per altri problemi, cerca nel [tracker dei problemi dell'Importatore](https://github.com/obsidianmd/obsidian-importer/issues) o invia una segnalazione di bug con un piccolo grafo di esempio.
