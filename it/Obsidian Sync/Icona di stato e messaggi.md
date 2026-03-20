---
permalink: sync/messages
publish: true
mobile: true
description: >-
  Questa pagina spiega le icone di stato di Obsidian Sync e fornisce dettagli
  sul registro attività di sincronizzazione.
aliases:
  - Status icon and messages
---
Obsidian Sync fornisce diversi elementi per indicare lo stato della sincronizzazione, principalmente l'[[#Icona di stato di Sync]] e il [[#Registro attività di Sync]]. I dettagli sul controllo delle versioni in Obsidian Sync sono trattati nella pagina [[Cronologia versioni]].

## Icona di stato di Sync

L'icona di stato di Sync si trova nella [[Barra di stato]] nella versione desktop e nella [[Barra laterale#Aprire le barre laterali nascoste|barra laterale destra]] su mobile e tablet. L'icona riflette diversi stati di sincronizzazione:

- ![[obsidian-icon-sync-synced.svg#icon]] **Sincronizzato**: Obsidian Sync ha sincronizzato completamente i tuoi file. Questa icona è tipicamente verde.
- ![[obsidian-icon-sync-syncing.svg#icon]] **In sincronizzazione**: Obsidian sta attualmente aggiornando il caveau remoto. Questa icona è solitamente viola.
- ![[obsidian-icon-sync-paused.svg#icon]] **In pausa**: La sincronizzazione è stata messa in pausa, ma Obsidian è ancora connesso al caveau remoto. L'icona è tipicamente viola.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Disconnesso**: Il plugin principale Sync è attivo, ma la [[Local and remote vaults|cassaforte locale]] non è connessa a un caveau remoto. Questa icona è tipicamente rossa.

Cliccando o toccando l'icona si apre un menu contestuale con le seguenti opzioni:
- ![[obsidian-icon-sync-paused.svg#icon]] Pausa (o ![[lucide-circle-play.svg#icon]] Riprendi se in pausa)
- ![[lucide-history.svg#icon]] [[Cronologia versioni]] (Disattivato se non si sta visualizzando una nota)
- ![[lucide-align-left.svg#icon]] Apri [[#Registro attività di Sync|Registro di Sync]]
- ![[lucide-trash-2.svg#icon]] [[Cronologia versioni#Ripristinare un file eliminato|File eliminati]]
- ![[lucide-cog.svg#icon]] [[Sync settings and selective syncing|Impostazioni sincronizzazione]]

## Registro attività di Sync

Obsidian Sync include un registro di sincronizzazione dettagliato che traccia tutte le interazioni tra i file locali e il caveau remoto. Il registro mostra caricamenti, scaricamenti, eliminazioni e qualsiasi problema come conflitti di unione o problemi di connettività.

**Accedere al registro attività:**
- Clicca sull'icona di stato della sincronizzazione nella barra di stato
- Vai su **[[Impostazioni]] → Sync → Attività di Sync**
- Usa **Tavolozza dei comandi → Sync: Apri registro attività**

Il registro fornisce timestamp e dettagli per ogni operazione di sincronizzazione, rendendolo utile per la risoluzione dei problemi di sincronizzazione.

> [!warning] Il registro di Sync non viene conservato dopo la chiusura di Obsidian. Se riscontri un problema, assicurati di copiare il registro _prima_ di chiudere l'app.

Il registro categorizza i messaggi nei seguenti tipi:

- [[#Messaggi generali]]
- [[#Messaggi di errore]]
- [[#Messaggi di elementi saltati]]
- [[#Messaggi dell'account]]

Puoi filtrare il registro di Sync per **Tutti**, **Errori**, **Saltati** e **Unisci conflitti**. Inoltre, puoi cercare nel registro di Sync utilizzando la casella di ricerca nella finestra di Sync.

> [!summary] Abbiamo incluso di seguito alcuni dei messaggi più comuni che potresti aver incontrato. L'elenco non è esaustivo. Se stai riscontrando un problema e hai un messaggio del registro di sincronizzazione di cui non sei sicuro, [[Help and support#Contattare il supporto Obsidian|contatta il supporto Obsidian]].

### Messaggi generali

Questi sono messaggi comuni che potresti incontrare quotidianamente.

**Connecting to server**
Obsidian sta tentando di connettersi al [[Obsidian Sync/Security and privacy#Dove posso trovare il mio server Sync attuale e dove è ospitato?|server Sync]] del tuo caveau remoto.

**Connected to server. Detecting changes...**
Obsidian ha stabilito una connessione e sta confrontando la cassaforte locale con il caveau remoto per determinare se sono necessarie modifiche.

> [!info] Questo messaggio può anche indicare altri potenziali problemi di Sync. Se lo vedi ripetutamente e ritieni che ci siano ancora elementi da sincronizzare, [[Help and support#Contattare il supporto Obsidian|contatta il supporto Obsidian]].

**Fully synced**
- La cassaforte locale e il caveau remoto sono completamente sincronizzati.

**Merging conflicted file**
È stato rilevato un conflitto durante la sincronizzazione e il file è stato unito anziché sovrascritto. Consulta [[Troubleshoot Obsidian Sync#Risoluzione dei conflitti|risoluzione dei conflitti]] per maggiori informazioni. Se l'unione non è desiderata, puoi ripristinare versioni precedenti tramite la [[Cronologia versioni]] o il [[Recupero file]].

**Rejected server change**
Le modifiche sul caveau remoto sono più vecchie della versione sul tuo dispositivo locale, quindi la versione locale viene mantenuta e la modifica remota viene ignorata.

### Messaggi di errore

Questi sono messaggi che descrivono un errore nella sincronizzazione di un file.

**Out of memory**
Questo problema si verifica tipicamente sui dispositivi mobile quando non c'è abbastanza spazio di archiviazione o memoria disponibile per scaricare un file. È più comune con file di grandi dimensioni, come i video.

### Messaggi di elementi saltati

Questi sono messaggi che descrivono cosa è stato saltato, e potenzialmente perché.

**Unable to download file with illegal name**

Il file contiene un [carattere speciale o una convenzione di denominazione](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) non consentiti dal sistema operativo ricevente. Per semplicità, puoi rinominare il file sul dispositivo di origine rimuovendo tutti i caratteri speciali tranne `-` e `_`.

Nota che questo include anche file con più punti `.` nel nome sui dispositivi Android.

### Messaggi dell'account

Questi sono messaggi relativi a una modifica nel tuo abbonamento o account.

**Vault limit exceeded**
Il tuo account ha superato la [[Frequently asked questions#Quanto può essere grande ogni caveau remoto|dimensione massima di archiviazione]]. Gli allegati e la cronologia delle versioni contribuiscono a questa dimensione. Anche se la tua cassaforte sembra più piccola del limite, versioni e file più vecchi possono farlo superare.

Per ridurre la dimensione della cassaforte:
1. Apri **[[Impostazioni]] → Sync**.
2. Usa le opzioni sotto **Limite di spazio del vault superato** per rimuovere i file di grandi dimensioni.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Questo errore può verificarsi in questi casi:

1. La cassaforte è stata eliminata da un altro dispositivo.
2. L'abbonamento a Sync è stato inattivo per oltre 30 giorni, causando la rimozione del caveau remoto.
3. L'abbonamento è stato cancellato o rimborsato, risultando nell'eliminazione del caveau remoto.

In questi casi, dovrai [[Set up Obsidian Sync#Disconnettersi da un caveau remoto|disconnetterti dal caveau remoto]] e [[Set up Obsidian Sync#Creare un nuovo caveau remoto|creare un nuovo caveau remoto]], assicurandoti che i tuoi dati locali siano preservati.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
Il tuo account è ora in stato di scadenza completa poiché non è stato possibile elaborare il pagamento registrato.

Per continuare a utilizzare Obsidian Sync, dovrai riabbonarti dal [tuo account](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync ha rilevato che non sei attualmente connesso. Dovrai accedere nuovamente nell'app nella sezione [[Impostazioni#Generale#Account|Account]] delle **[[Impostazioni]]**.

In alcuni casi, un plugin della community può anche impedire a Obsidian Sync di confermare lo stato di accesso del tuo account. Entra in **[[Plugin security#Modalità con restrizioni|Modalità con restrizioni]]** e riprova.

### Messaggi di rete

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync si è disconnesso dal server Sync per un motivo sconosciuto. Sync tenterà di riconnettersi al server periodicamente.

Su iOS, questo messaggio viene visualizzato come il seguente errore:
`Null is not an object (evaluating 'this.socket.send')`

Significa esattamente la stessa cosa del messaggio `Unable to connect to server` e non è in alcun modo un'indicazione che ci sia qualcos'altro che non va.
