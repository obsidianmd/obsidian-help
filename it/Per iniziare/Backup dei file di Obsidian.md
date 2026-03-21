---
permalink: backup
aliases:
  - Back up your Obsidian files
---
Se non hai ancora eseguito il backup del tuo computer, inizia ora! Il plugin [[Recupero file]] di Obsidian è utile ma limitato. Può recuperare solo una certa quantità di dati e memorizza le informazioni di recupero per dispositivo. Per una protezione più robusta, raccomandiamo di implementare un sistema di backup appropriato.

**Perché eseguire il backup dei tuoi dati?**

Per impostazione predefinita, Obsidian memorizza le tue note **localmente** sul tuo dispositivo, non nel cloud. Questo significa che i [dati sono completamente tuoi](https://obsidian.md/it/about), dandoti il controllo su di essi. Tuttavia, l'archiviazione locale può essere soggetta a problemi come corruzione o perdita di dati. Non è mai una questione di se, ma di quando. Eseguire il backup dei tuoi dati protegge da queste inevitabilità e garantisce che tu mantenga il controllo delle tue note.

## La sincronizzazione non è un backup

Servizi come [[Introduzione a Obsidian Sync|Obsidian Sync]], iCloud, OneDrive e Dropbox ti aiutano a sincronizzare le tue note su diversi dispositivi. Sebbene possano offrire funzionalità come il [[Cronologia versioni|ripristino delle note]], **non sono progettati per i backup**. La sincronizzazione mantiene le tue note aggiornate, ma non protegge dalla perdita di dati.

- **Sync:** La sincronizzazione garantisce che i tuoi file siano gli stessi su tutti i dispositivi. Quando modifichi un file su un dispositivo, viene aggiornato su tutti i dispositivi sincronizzati. I servizi di sincronizzazione non hanno un dispositivo "principale".
- **Backup:** Un backup salva una copia dei tuoi dati in una posizione diversa per aiutarti a recuperarli in caso di perdita di dati o corruzione. I backup non sono pensati per aggiornamenti in tempo reale o collaborazione.

Per eseguire correttamente il backup della tua cassaforte, usa uno strumento di backup dedicato che crea una copia unidirezionale dei tuoi dati. Questo strumento invierà i tuoi dati in una posizione di backup sicura senza modificare i dati sul tuo dispositivo.

Se usi più dispositivi con la sincronizzazione, scegli **un dispositivo** come dispositivo di backup. Di solito è il tuo dispositivo principale, quello che usi di più. Nota che la maggior parte dei servizi di sincronizzazione non riconosce alcun dispositivo come "principale"; questo è solo un concetto per aiutarti a gestire i backup.

> [!Example] Usi Obsidian Sync sul tuo laptop, tablet, telefono e desktop di lavoro. Usi la tua cassaforte principalmente sul desktop di lavoro, a volte sul laptop, e raramente sul tablet o sul telefono. In questo caso, il tuo desktop di lavoro sarebbe il tuo "dispositivo principale" per il backup.

## Usa plugin della community

Sebbene il Team di Obsidian non possa ufficialmente raccomandare alcun plugin specifico, riconosciamo due plugin della community che sono diventati popolari tra gli utenti per il backup dei loro file:

- **[Obsidian Git](https://obsidian.md/it/plugins?id=obsidian-git):** Usa questo plugin per eseguire il backup della tua cassaforte effettuando il commit dei suoi contenuti in un [Repository Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). È un modo efficace per controllare le versioni delle tue note e garantire la loro sicurezza su un server remoto. Tuttavia, tieni presente che i tuoi dati potrebbero essere memorizzati su una [[#Usa servizi basati sul cloud|piattaforma di hosting esterna]] con questo metodo.
- **[Local Backup](https://obsidian.md/it/plugins?id=local-backup):** Questo plugin ti permette di creare copie locali della tua cassaforte in una cartella a tua scelta, con opzioni per l'archiviazione. Puoi persino usare una cartella di sincronizzazione, come una cartella Dropbox, per combinare backup locali e nel cloud. Questo metodo **si abbina bene** con le opzioni di backup descritte di seguito.

## Usa servizi basati sul cloud

> [!info] Non è consigliato mantenere la posizione della tua cassaforte nel servizio di backup scelto.

Mantenere il backup nel cloud è un'alternativa e un complemento all'archiviazione fisica dei dati, al posto di un disco rigido esterno o una chiavetta USB. Un disco rigido esterno o una chiavetta USB possono essere persi o danneggiati. Il più grande vantaggio di archiviare file nel cloud è che sono disponibili sempre e ovunque. Lo svantaggio è che la maggior parte dei servizi di backup è di proprietà di un'azienda privata.

In termini di sicurezza, dovresti sempre prestare molta attenzione all'accesso e alla sicurezza con i backup nel cloud. [Worldbackupday](https://www.worldbackupday.com/en) mantiene un elenco aggiornato di servizi di backup online da considerare.

## Usa unità esterne

**Dischi rigidi e unità SSD**
I backup su disco rigido esterno sono ancora preziosi in un mondo sempre più basato sul cloud, e sono utilizzati principalmente per l'archiviazione dei dati e i backup del computer. Il più grande svantaggio di un'unità esterna è che il disco può guastarsi o andare perso. Il più grande vantaggio è che lo spazio di archiviazione deve essere acquistato una sola volta. L'uso di un disco rigido esterno è spesso combinato con un [[#Usa i backup del computer|backup del computer]].

**Chiavette USB**
Le chiavette USB (chiamate anche pen drive o memory stick) sono un metodo semplice ed efficace per backup rapidi.

1. Inserisci la chiavetta USB nel tuo computer o laptop.
2. Assicurati che il dispositivo sia riconosciuto e montato nel tuo file system. Se necessario, formatta la chiavetta USB per renderla compatibile con il tuo filesystem.
3. Copia la cartella della tua cassaforte dalla sua posizione attuale sulla chiavetta USB.
4. Smonta in modo sicuro la chiavetta USB.
5. Rimuovi la chiavetta USB dal tuo dispositivo.

**Backup NAS**
Per utenti esperti, eseguire il backup dei dati su un server NAS (Network Attached Storage) è un metodo valido e sicuro, poiché dispone di più dischi rigidi e meccanismi di recupero aggiuntivi.

> [!tip] Se la tua unità esterna contiene informazioni sensibili, è consigliato tenere l'unità esterna al sicuro, ad esempio in una stanza protetta.

## Usa i backup del computer

Il tuo sistema operativo stesso offre la possibilità di creare backup, sia online nel cloud, sia su un'unità esterna.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Backup con OneDrive o un'unità esterna.
- **[Mac](https://support.apple.com/en-us/104984)**: Backup su un dispositivo esterno con Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` verso una directory o unità a scelta.

## Prossimi passi

Questa pagina di aiuto fornisce una breve panoramica delle opzioni di backup, ma non è esaustiva. Per informazioni più approfondite, visita [Worldbackupday.com](https://www.worldbackupday.com/en) o chiedi ad altri utenti di Obsidian nella [nostra community](https://obsidian.md/it/community) le loro strategie di backup!
