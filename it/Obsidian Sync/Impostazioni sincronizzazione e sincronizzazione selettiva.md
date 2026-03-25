---
permalink: sync/settings
publish: true
mobile: true
description: Questa pagina spiega le impostazioni di Sync e guida nella selezione dei file da sincronizzare.
aliases:
  - Sync settings and selective syncing
---
Quando [[Piani e limiti di archiviazione#Creare un nuovo caveau remoto|crei un caveau remoto]] e ti [[Configurare Obsidian Sync#Connettersi a un caveau remoto|connetti ad esso]], il plugin principale Sync diventa il punto di gestione del tuo caveau remoto.

## Impostazioni di Sync

**Caveau remoto**
Questa sezione mostra il caveau remoto attualmente connesso. Include un pulsante **Disconnetti** per disconnettersi dal caveau remoto e un pulsante **Gestisci** per visualizzare tutti i caveau remoti a cui il tuo account ha accesso (inclusi i caveau condivisi tramite [[Collaborare su un vault condiviso|collaborazione]]).

> [!warning]+ Caveau remoto in un servizio di sync di terze parti
> Se il tuo caveau remoto si trova in un servizio di sync di terze parti, vedrai un messaggio di errore rosso. Segui i passaggi in [[Passare a Obsidian Sync]] per risolvere il problema.

**Stato di Sync**
Mostra lo stato di sincronizzazione attuale del caveau remoto. Questa sezione include un pulsante **Pausa** o **Riprendi**, a seconda dello stato.

**Nome dispositivo**
Assegna un nome univoco al dispositivo attualmente in sincronizzazione. Questo aiuta a monitorare l'attività nel [[Icona di stato e messaggi#Registro di attività di Sync|registro di Sync]]. Questa impostazione è specifica per il dispositivo, proprio come la [[#Sincronizzazione selettiva]].

**[[#Risoluzione dei conflitti]]**
Scegli come risolvere i conflitti quando modifichi un file su più dispositivi. Questa impostazione è specifica per il dispositivo, proprio come la [[#Sincronizzazione selettiva]].

**File eliminati**
Contiene un pulsante per **Visualizzare** o **Ripristinare** i file eliminati. Per maggiori dettagli, consulta [[Cronologia versioni]].

**Dimensione vault**
Mostra una barra di avanzamento che indica quanto spazio di archiviazione di sync è stato utilizzato.

> [!tip]- Tempo di elaborazione del server
> Potrebbero essere necessari fino a 30 minuti affinché l'utilizzo attuale si aggiorni a causa dell'elaborazione lato server.

**Contatta il supporto**
Fornisce istruzioni su come [[Aiuto e supporto#Contattare il supporto Obsidian|contattare il supporto Obsidian]], incluse le opzioni per **Copiare le informazioni di debug** e **Email di supporto**.

### Risoluzione dei conflitti

Scegli come risolvere i conflitti quando modifichi un file su più dispositivi prima della sincronizzazione. Puoi unire automaticamente le modifiche o creare file di conflitto separati per la revisione manuale. Consulta [[Risoluzione problemi di Obsidian Sync#Risoluzione dei conflitti|Risoluzione dei conflitti]] per dettagli su come funzionano i conflitti e come configurare questa impostazione.

> [!warning]+ Configura su ogni dispositivo
> Questa impostazione deve essere configurata separatamente su ogni dispositivo.

---

Puoi anche scegliere cosa sincronizzare nelle impostazioni del plugin principale Sync. Questa sezione tratta la **sincronizzazione selettiva** e la **configurazione sincronizzazione del vault**, insieme alle relative avvertenze.

## Sincronizzazione selettiva

I file sincronizzati nel tuo [[Vault locali e remoti|caveau remoto]] contribuiscono al tuo [[Domande frequenti#Quanto può essere grande ogni caveau remoto|limite di archiviazione]]. Per impostazione predefinita, Obsidian Sync attiva la **sincronizzazione selettiva** per i seguenti tipi di file:
- Immagini
- Audio
- Video
- PDF

Per sincronizzare tipi di file aggiuntivi, attiva l'opzione `Sincronizza tutti gli altri tipi`.

Le impostazioni predefinite della **configurazione sincronizzazione del vault** includono:
- Altri tipi di file
- Impostazioni principali
- Aspetto
- Temi e snippet
- Tasti di scelta rapida
- Lista plugin principali attivi
- Impostazioni plugin principali

Per sincronizzare i plugin della community, abilita manualmente **Lista plugin della comunità attivi** e **Lista plugin della comunità installati**.

### Modificare i tipi di file da sincronizzare

1. Apri **[[Impostazioni|Impostazioni]] → Sync**.
2. Sotto **Sincronizzazione selettiva**, abilita i tipi di file che desideri sincronizzare.
3. Riavvia l'applicazione per applicare le nuove impostazioni. Su mobile o tablet, potrebbe essere necessaria una chiusura forzata.

Nota che il tuo [[Piani e limiti di archiviazione|piano Sync]] definisce la dimensione massima dei file sincronizzabili. Il piano Standard consente la sincronizzazione di file fino a 5 MB, mentre il piano Plus supporta file fino a 200 MB.

> [!info]+ I file esclusi rimangono nel caveau remoto
> Aggiungere un file alla lista dei **File esclusi** non lo rimuove dal caveau remoto se è già stato sincronizzato. Configura le impostazioni di Sync prima della sincronizzazione per evitare di utilizzare spazio di archiviazione non necessario.

### Escludere una cartella dalla sincronizzazione

Per impostazione predefinita, Obsidian sincronizza tutti i file e le cartelle nella tua cassaforte. Per escludere una cartella specifica dalla sincronizzazione:
1. Apri **[[Impostazioni|Impostazioni]] → Sync**.
2. Accanto a **Cartelle escluse**, seleziona **Gestisci**.
3. Seleziona la cartella che desideri escludere dall'elenco.
4. Seleziona **Fatto**.

Per rimuovere una cartella dall'elenco di esclusione, seleziona il pulsante ![[lucide-x.svg#icon]] accanto al nome della cartella.

#### Sempre esclusi dalla sincronizzazione

##### Istantanee di recupero file

Le istantanee nel plugin [[Recupero file]] non vengono sincronizzate tramite Obsidian Sync, poiché le istantanee sono conservate nelle [[Come Obsidian archivia i dati#Impostazioni globali|Impostazioni globali]].

##### File e cartelle nascoste

I file e le cartelle che iniziano con `.` sono trattati come nascosti ed esclusi dalla sincronizzazione. L'unica eccezione è la [[Cartella di configurazione|cartella di configurazione]] della cassaforte (`.obsidian`), che viene sincronizzata.

Esempi comuni di file e cartelle nascoste che non vengono sincronizzati:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Impostazioni di Sync

Le impostazioni di Sync non si sincronizzano tra i dispositivi. Devi configurarle separatamente su ogni dispositivo secondo necessità.

## Aggiornare le impostazioni della cassaforte sincronizzata

Per modificare le impostazioni di sincronizzazione su più dispositivi, segui questi passaggi:

> [!tip]- Dispositivi primari e secondari
> I termini "primario" e "secondario" sono utilizzati solo per chiarezza. Sync non fa distinzione tra di essi.

### Dispositivo primario

Il dispositivo primario funge da fonte di verità. Le modifiche effettuate qui vengono sincronizzate su tutti gli altri dispositivi.

1. Vai a **[[Impostazioni|Impostazioni]] → Sync**.
2. Attiva le impostazioni desiderate sotto **Configurazione sincronizzazione del vault**.
3. Ricarica o riavvia Obsidian. Su mobile o tablet, potrebbe essere necessaria una chiusura forzata.
4. Attendi che le impostazioni si sincronizzino con il caveau remoto.

### Dispositivo/i secondario/i

I dispositivi secondari (come il tuo telefono) ricevono gli aggiornamenti dal dispositivo primario.

1. Vai a **[[Impostazioni|Impostazioni]] → Sync**.
2. Abilita le impostazioni necessarie sotto **Configurazione sincronizzazione del vault**.
3. Attendi che le modifiche vengano scaricate dal caveau remoto.
4. Ricarica o riavvia l'app per applicare le impostazioni sincronizzate. Su mobile o tablet, potrebbe essere necessaria una chiusura forzata.

### Ricaricamento delle impostazioni

Alcune impostazioni possono essere ricaricate a caldo, mentre altre richiedono un riavvio:

- **Ricaricabili a caldo**: La maggior parte delle configurazioni di Obsidian, incluse scorciatoie da tastiera e proprietà, impostazioni dell'aspetto e configurazioni per i plugin principali già abilitati.
- **Richiedono il ricaricamento**: Modifiche CSS (ad es., [[Snippet CSS]], [[Temi]]), configurazioni della vista grafo e stati dei plugin principali (ad es., abilitazione/disabilitazione delle Note del giorno).

I plugin della community generalmente non supportano il ricaricamento a caldo e richiedono un riavvio quando vengono applicate nuove impostazioni.

> [!info]+ Per gli sviluppatori di plugin
> Scopri come [integrare la funzionalità di ricaricamento a caldo con Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Profili delle impostazioni

Obsidian Sync può sincronizzare più [[Cartella di configurazione|cartelle di configurazione]] nello stesso caveau remoto, permettendoti di creare profili separati (ad es., uno per il mobile, un altro per il laptop).

### Creare un profilo delle impostazioni

Per creare un nuovo profilo delle impostazioni:

1. Apri **[[Impostazioni|Impostazioni]] → File e collegamenti**.
2. Sotto **Cambia cartella di configurazione**, inserisci un nome per il tuo profilo, che inizi con un punto (`.`), ad es., `.obsidian-mobile`.
3. Riavvia Obsidian per applicare le modifiche.

> [!info]+ Evitare di scaricare nuovamente plugin e temi
> La modifica del profilo delle impostazioni richiederà la riconfigurazione delle impostazioni di sincronizzazione. Per evitare di scaricare nuovamente plugin e temi, copia la cartella `.obsidian` esistente e rinominala in modo che corrisponda al tuo nuovo profilo (ad es., `.obsidian-mobile`) prima di effettuare le modifiche.
