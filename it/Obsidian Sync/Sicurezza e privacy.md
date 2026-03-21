---
permalink: sync/security
publish: true
mobile: false
description: Scopri le considerazioni su sicurezza e privacy per Obsidian Sync.
aliases:
  - Security and privacy
---
## Crittografia

Per la tua sicurezza, [[Introduzione a Obsidian Sync|Obsidian Sync]] crittografa il tuo [[Vault locali e remoti|caveau remoto]] e tutte le comunicazioni con i server di Obsidian.

Quando crei un nuovo caveau remoto, hai due opzioni:

- **Crittografia end-to-end (predefinita)** Offre la massima sicurezza, ma richiede di conservare in modo sicuro la password di crittografia. Questo garantisce che nessuno — nemmeno il team di Obsidian — possa accedere alle tue note.
- **Crittografia standard** utilizza una chiave di crittografia gestita da Obsidian per proteggere i tuoi dati in transito e sul nostro server.

Raccomandiamo la crittografia end-to-end per tutti gli utenti poiché è l'opzione più privata e sicura. Tuttavia, tieni presente che se dimentichi o perdi la password di crittografia, i tuoi dati rimarranno crittografati e inutilizzabili per sempre. Non siamo in grado di recuperare la tua password né alcun dato crittografato.

La tua scelta riguarda solo il caveau remoto. Obsidian non crittografa la cassaforte locale.

### Cosa significa crittografia end-to-end?

La crittografia end-to-end significa che i dati vengono crittografati dal momento in cui lasciano il tuo dispositivo e possono essere decrittografati solo utilizzando la tua chiave di crittografia una volta tornati su uno dei tuoi dispositivi.

Non possiamo leggere i tuoi dati. Nemmeno eventuali intercettatori, come il tuo fornitore di servizi internet.

Nel raro caso di una violazione completa del server, i tuoi dati rimangono crittografati — nessuno può decrittografare i tuoi file senza conoscere la tua password.

### Quali sono i rischi dell'utilizzo della crittografia standard?

La crittografia standard è fondamentalmente meno sicura della crittografia end-to-end, ma può essere un'opzione comoda se non ti aspetti che i dati sincronizzati siano completamente privati. Ad esempio, se la cassaforte sincronizzata è [[Introduzione a Obsidian Publish|pubblicata]] su un sito web pubblico come questo sito di aiuto, allora la crittografia end-to-end non è necessaria.

La crittografia standard è lo stesso metodo di crittografia utilizzato dalle aziende di archiviazione cloud e dalle piattaforme software-as-a-service, come Google Docs, Dropbox e iCloud (senza Protezione avanzata dei dati). La chiave di crittografia viene generata dall'app e utilizzata per proteggere i tuoi dati in transito e sul server. Poiché la chiave di crittografia è memorizzata sui server dell'azienda, può essere utilizzata per decrittografare i tuoi dati, ad esempio nel caso in cui l'azienda sia soggetta a un mandato di perquisizione, o nel caso in cui tu voglia accedere ai tuoi dati tramite un browser web.

La crittografia end-to-end garantisce che Obsidian non possa mai accedere ai tuoi dati e dovrebbe essere sempre utilizzata per sincronizzare dati che desideri mantenere completamente privati e sicuri.

### Quale crittografia utilizzate?

Per la sicurezza dei dati, implementiamo protocolli di crittografia standard del settore. Nello specifico, utilizziamo [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), lo standard di crittografia più robusto, ampiamente impiegato in contesti come l'online banking. Il processo di crittografia prevede i seguenti dettagli tecnici:

- **Funzione di derivazione della chiave:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) con salt
- **Algoritmo di crittografia:** AES-256 con [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Posso verificare che i miei dati siano crittografati end-to-end?

Sì. Consulta la nostra guida, [come verificare la crittografia end-to-end di Obsidian Sync](https://obsidian.md/it/blog/verify-obsidian-sync-encryption/). Questa guida fornisce istruzioni passo-passo per verificare in modo trustless la crittografia end-to-end dei tuoi dati quando vengono inviati e ricevuti tramite i server Sync.

### Obsidian ha completato un audit di sicurezza di terze parti?

Sì. Obsidian è stato sottoposto a un audit indipendente. Visita la nostra [pagina Sicurezza](https://obsidian.md/it/security) per consultare i rapporti di audit. Gli audit regolari da parte di aziende di sicurezza di terze parti garantiscono che il codice e le procedure di Obsidian soddisfino i più alti standard di sicurezza.

### Cosa succede se dimentico la password di crittografia?

Se perdi o dimentichi la password di crittografia, non potrai connettere ulteriori cassaforti al tuo caveau remoto. Poiché la password di crittografia non è salvata da nessuna parte, è perduta per sempre.

I tuoi dati, tuttavia, sono generalmente conservati in modo sicuro localmente su ciascuno dei tuoi dispositivi.

Per continuare a utilizzare Obsidian Sync, ti suggeriamo di eseguire una ri-configurazione completa per poter aggiungere nuovi dispositivi al tuo sistema Sync:

1. Esegui un backup completo della cassaforte sul tuo dispositivo principale, nel caso qualcosa vada storto. Può essere semplice come fare una copia della cartella della cassaforte o creare un file zip dalla cassaforte.
2. Disconnetti il caveau remoto da ciascuno dei tuoi dispositivi. Puoi farlo andando in **[[Impostazioni]] → Sync → Scegli caveau remoto → Disconnetti**.
3. [[Configurare Obsidian Sync#Creare un nuovo caveau remoto|Crea un nuovo caveau remoto]] sul tuo dispositivo principale dalla stessa pagina delle Impostazioni. Facoltativamente, puoi eliminare il caveau remoto precedente dato che comunque non hai la password. (Potresti dover eliminare il caveau remoto precedente se hai raggiunto il [[Domande frequenti#Quanti caveau remoti posso avere?|limite di caveau]])
4. Attendi che il tuo dispositivo principale si sincronizzi. Osserva l'indicatore di sincronizzazione in basso a destra dello schermo fino a quando non mostra un segno di spunta verde.
5. Connetti ciascuno dei tuoi dispositivi allo stesso caveau remoto appena creato. Durante la connessione, verrà mostrato un avviso riguardo all'unione delle cassaforti; questo è previsto e puoi procedere. Attendi che ogni dispositivo si sincronizzi completamente prima di passare al successivo. Questo riduce le possibilità di problemi.
6. Ora tutti i tuoi dispositivi dovrebbero essere connessi al nuovo caveau remoto.

## Hosting

### Dove sono ospitati i server di Obsidian Sync?

I nostri data center, alimentati da [DigitalOcean](https://www.digitalocean.com), offrono opzioni di hosting geo-regionale per i caveau remoti nelle seguenti posizioni:

> [!abstract] Regioni Sync
> **Automatica**: Il tuo data center viene scelto in base alla posizione del tuo IP al momento della prima configurazione.
> 
> **Asia**: Singapore
> **Europa**: Francoforte, Germania
> **Nord America**: San Francisco, USA 
> **Oceania**: Sydney, Australia
^sync-geo-regions

### Dove posso trovare il mio attuale server Sync e dove è ospitato?

Per individuare il tuo server Obsidian Sync, segui questi passaggi:
1. Vai in **[[Impostazioni]]** → **Sync** → **Copia informazioni di debug**.
2. Incolla le informazioni copiate in una nota o file.
3. Cerca una riga simile a questa: `Host server: wss://sync-xx.obsidian.md`

Questa riga indica il server dove è ospitato il tuo caveau remoto. Per maggiori dettagli sulle posizioni del server e sulla disponibilità, visita la nostra [pagina di stato](https://status.obsidian.md/).

## Rete e accesso

### Gestire l'accesso a Obsidian Sync sulla tua rete

Per regolare l'accesso a Obsidian Sync sulla tua rete, devi gestire i seguenti domini:

`sync-xx.obsidian.md`

Il `xx` in questo caso rappresenta un numero che va da `1 - 100`.

> [!tip] Se il tuo sistema firewall lo supporta, raccomandiamo di inserire nella whitelist `sync-*.obsidian.md` per tenere conto della crescita continua dei numeri di sottodominio.

## Limitazioni

Obsidian Sync è progettato per mantenere le tue note private e sicure. Per offrire una sincronizzazione veloce e affidabile e un'archiviazione efficiente tra i dispositivi, facciamo alcuni compromessi deliberati nel modo in cui viene applicata la crittografia.

### Crittografia deterministica dell'hash dei file

Crittografiamo gli hash dei file in modo deterministico: lo stesso contenuto di file, utilizzando la stessa chiave di crittografia e lo stesso salt, produce sempre lo stesso hash crittografato sul server. Questo aiuta Sync a rilevare i duplicati ed evitare di ricaricare o riarchiviare dati identici, risparmiando banda e spazio di archiviazione remoto, specialmente nella cronologia versioni o quando file di grandi dimensioni si ripetono.

Tuttavia, se un attaccante compromettesse un server Sync e avesse un modo separato per forzare un utente a caricare file a sua scelta, potrebbe forzare l'utente a caricare file specifici e determinare se il file corrisponde a un file che l'utente ha precedentemente caricato.

### Nessun legame crittografico tra percorso e contenuto

Alcuni metadati non sono crittografati end-to-end: quale dispositivo ha caricato o eliminato un file, quando è stato caricato e la *mappatura* tra percorsi dei file crittografati e contenuto crittografato. Questi dati sono leggibili dal server in modo che possa instradare le modifiche, determinare la cronologia versioni di un file e mantenere i dispositivi sincronizzati.

Se un server Sync venisse compromesso, un attaccante potrebbe manomettere tale mappatura, facendo sì che il contenuto di un file crittografato venga consegnato sotto un percorso file diverso. Questo non rivela i tuoi dati in testo normale, che rimangono crittografati.
