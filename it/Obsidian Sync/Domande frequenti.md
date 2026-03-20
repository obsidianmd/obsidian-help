---
permalink: sync/faq
publish: true
mobile: true
description: Questa pagina elenca alcune delle domande comuni relative a domande e limitazioni di Obsidian Sync.
aliases:
  - Frequently asked questions
---
Questa pagina elenca alcune delle domande comuni relative a domande e limitazioni di [[Introduzione a Obsidian Sync|Obsidian Sync]].

## Generale

### Quali sistemi operativi supporta Obsidian Sync?

Obsidian Sync supporta ogni piattaforma su cui Obsidian può funzionare. Attualmente ciò significa Windows, macOS, Linux, Android e iOS.

### Obsidian funziona con la Modalità di isolamento di Apple?

Obsidian può essere utilizzato in [Modalità di isolamento](https://support.apple.com/en-us/105120) a condizione che Obsidian sia aggiunto come eccezione.

### Che tipo di dati vengono sincronizzati?

Per impostazione predefinita vengono sincronizzate le note di Obsidian, le immagini e la [[Cartella di configurazione|cartella di configurazione]].

È possibile aggiungere opzioni di sincronizzazione aggiuntive per PDF, file audio, file video e altri file tramite [[Impostazioni di sincronizzazione e sincronizzazione selettiva|Impostazioni sincronizzazione e sincronizzazione selettiva]].

### Quanto spazio di archiviazione ho a disposizione?

Il limite di archiviazione dipende dal [[Piani e limiti di archiviazione#Piani|piano Sync]] di Obsidian. La quantità massima di archiviazione è 100 GB. Questo limite include la [[Cronologia delle versioni|cronologia versioni]].

È possibile visualizzare la **Dimensione vault** nell'app Obsidian andando su **[[Impostazioni]] → Sync**.

### Quanti caveau remoti posso avere?

Il numero di caveau remoti che è possibile avere è determinato in base al [[Piani e limiti di archiviazione#Piani|piano Sync]]. Il piano Standard include 1 cassaforte, il piano Plus include 10 cassaforti. Le cassaforti condivise con te non contano ai fini del limite di cassaforti.

### Quanto può essere grande ciascun caveau remoto?

Non esiste un limite per singola cassaforte. Il limite di archiviazione è legato all'account utilizzato e può essere applicato su tutte le cassaforti.

### Con quante persone posso condividere un caveau remoto?

È possibile [[Collaborare su una cassaforte condivisa|condividere un caveau remoto]] con un massimo di 20 persone.

### Quanto può essere grande ciascun file?

La dimensione massima del file dipende dal [[Piani e limiti di archiviazione|piano Obsidian Sync]]. Per il piano Standard il limite è 5 MB. Per il piano Plus il limite è 200 MB per file.

### I miei dati vengono sincronizzati in background?

No, i file vengono sincronizzati solo quando Obsidian è in esecuzione.

### Obsidian Sync ricarica le impostazioni in tempo reale?

Obsidian Sync può ricaricare automaticamente alcune impostazioni, ma ci sono delle limitazioni. Per maggiori dettagli, consulta [[Impostazioni di sincronizzazione e sincronizzazione selettiva#Ricaricamento delle impostazioni|Ricaricamento delle impostazioni]].

### Posso usare un sync di terze parti con Obsidian Sync?

Non raccomandiamo l'uso di un servizio di sync di terze parti insieme a Obsidian Sync. L'utilizzo di un servizio di terze parti e Obsidian Sync su più dispositivi può causare conflitti, risultando in file duplicati o corrotti.

I servizi di archiviazione cloud come OneDrive e Dropbox offrono funzionalità "File su richiesta" o "File solo online", che scaricano i file solo quando necessario e li rimuovono localmente per risparmiare spazio. Tuttavia, poiché questi file non sono sempre disponibili localmente, Obsidian Sync li interpreterà come eliminati, causandone la rimozione dal caveau remoto.

Per evitare questi problemi, disabilita i download su richiesta quando utilizzi Obsidian Sync con servizi come OneDrive o Dropbox. Dovrai assicurarti che le impostazioni del servizio di terze parti siano configurate per mantenere sempre i file sul dispositivo.

## Conservazione dei dati

Queste sono domande frequenti sulla conservazione dei dati di Obsidian. Per risposte più approfondite, consulta [[Obsidian Sync/Sicurezza e privacy|Sicurezza e privacy]].

### Per quanto tempo conservate la cronologia delle versioni?

La [[Cronologia delle versioni]] dipende dal [[Piani e limiti di archiviazione|piano Obsidian Sync]]. Con il piano Standard le note vengono conservate per 1 mese. Con il piano Plus le note vengono conservate per 12 mesi. Dopo questo periodo di tempo le versioni più vecchie vengono eliminate.

Le versioni più vecchie degli [[Allegati|allegati]] vengono conservate per due settimane.

### Per quanto tempo conservate i miei dati dopo la scadenza dell'abbonamento?

Conserviamo i dati nei caveau remoti, inclusa la cronologia delle versioni, per un mese dopo la scadenza dell'abbonamento. Le cassaforti locali sui dispositivi non vengono influenzate.

A condizione che il rinnovo avvenga entro un mese, non dovrebbero esserci impatti sull'utilizzo. Se si rinnova dopo un mese, quando i caveau remoti sono stati rimossi, è possibile [[Configurare Obsidian Sync|creare un nuovo caveau remoto]] e collegare la cassaforte locale.

### Conservate i miei dati se richiedo un rimborso dell'abbonamento?

No. I dati vengono eliminati immediatamente dai server di Obsidian Sync. I dati nella [[Cassaforti locali e remote|cassaforte locale]] non vengono influenzati.
