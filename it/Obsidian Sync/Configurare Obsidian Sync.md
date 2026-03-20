---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Hai acquistato Obsidian Sync e sei pronto per iniziare. Questa guida ti aiuterà a configurare e regolare le impostazioni di Obsidian Sync per l'uso quotidiano.
aliases:
  - Set up Obsidian Sync
---
Hai acquistato Obsidian Sync e sei pronto per iniziare. Questa guida ti aiuterà a configurare e regolare le impostazioni di Obsidian Sync per l'uso quotidiano.

- **Nuovo su Obsidian Sync?** Vedi: [[#Configurare Obsidian Sync per la prima volta]]
- **Collegare un secondo dispositivo?** Vedi: [[#Sincronizzare un caveau remoto su un altro dispositivo]]
- **Bisogno di apportare modifiche?** Vedi: [[#Gestire i caveau remoti]]

## Configurare Obsidian Sync per la prima volta

In questa sezione, creerai un nuovo [[Local and remote vaults|caveau remoto]] e lo collegherai a una cassaforte locale esistente. Non è necessario creare una nuova cassaforte locale vuota per utilizzare Obsidian Sync a questo scopo.

> [!info] La tua cassaforte attuale si trova in una cartella iCloud, OneDrive, Dropbox o di un altro servizio di sincronizzazione? Se **sì**, o **non sei sicuro**, leggi [[Frequently asked questions#Posso usare un sync di terze parti con Obsidian Sync?|questo]] e [[Switch to Obsidian Sync]] prima di procedere.

**Prerequisiti**

- Un account Obsidian. Se non ne hai uno, [iscriviti ora](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Un [[Plans and storage limits|abbonamento]] attivo a Obsidian Sync. Se non ne hai uno, abbonati dalla [dashboard del tuo account](https://obsidian.md/account/sync).
- **Consigliato**: un [[Back up your Obsidian files|sistema di backup]] attivo per i tuoi file Obsidian. Un servizio di sincronizzazione non è un backup.

### Accedere con il tuo account Obsidian

1. Apri le **[[Settings|Impostazioni]]**.
2. Nella barra laterale, seleziona **Generale**.
3. Sotto **Account → Il tuo account**, seleziona **Accesso**.
4. In **Email**, inserisci la tua email.
5. In **Password**, inserisci la tua password.
6. Seleziona **Accesso**.

### Abilitare Obsidian Sync

1. Apri le **[[Settings|Impostazioni]]**.
2. Nella barra laterale sotto **Opzioni**, seleziona **Plugin principali**.
3. Attiva **Sync**.

### Creare un nuovo caveau remoto

1. Apri le **[[Settings|Impostazioni]]**.
2. Nella barra laterale, seleziona **Sync**.
3. Accanto a **Vault remoto**, seleziona **Scegli**.
4. Seleziona **Crea nuovo vault**.
5. In **Nome vault**, inserisci il nome del caveau remoto.
6. In **Regione**, scegli la [[#Server di sincronizzazione regionali|regione]] del server per il tuo caveau remoto.
7. In **Password di crittografia**, scegli una password per il tuo vault. Questo crea un vault con crittografia end-to-end. La password del vault è separata dal tuo account Obsidian e può essere diversa per ciascuno dei tuoi vault. Per ulteriori informazioni, consulta [[Security and privacy]].
8. Seleziona **Crea**.

### Connettersi a un caveau remoto

1. Seleziona **Connetti** accanto al vault appena creato.
2. Inserisci la password configurata per il vault nel campo **Password di crittografia** se hai optato per la [[Obsidian Sync/Security and privacy#Cosa significa crittografia end-to-end?|crittografia end-to-end]].
3. Seleziona **Sblocca vault**.
4. **Non avviare ancora la sincronizzazione.** Controlla le impostazioni di sincronizzazione in [[#Regolare le impostazioni di Obsidian Sync|regolare le impostazioni di Obsidian Sync]].
    - Se desideri avviare la sincronizzazione immediatamente, passa a [[#Iniziare la sincronizzazione con Obsidian Sync|iniziare la sincronizzazione con Obsidian Sync]].
5. Se non l'hai già fatto, chiudi la finestra pop-up che ti chiede di **Escludere cartelle** e **Avviare la sincronizzazione**. Procedi al passaggio successivo.

#### Regolare le impostazioni di Obsidian Sync

1. Se necessario, vai su **[[Settings|Impostazioni]]** → **Sync**.
2. Se non è stato aggiunto un nome dispositivo, aggiungine uno per rendere più facile la lettura dei registri di Sync!
3. Attiva le impostazioni sotto **Sincronizzazione selettiva** e **Configurazione sincronizzazione del vault** per indicare quali elementi devono essere sincronizzati da e verso il caveau remoto.
    - **Nota**: se ti sei disconnesso di recente da un caveau remoto e ti stai riconnettendo senza aver riavviato l'applicazione, alcune impostazioni potrebbero essere già attivate.
4. Se apporti modifiche alle impostazioni, riavvia completamente Obsidian.
5. Una volta riavviato Obsidian, torna su **[[Settings|Impostazioni]]** → **Sync**.

#### Iniziare la sincronizzazione con Obsidian Sync

Se stai iniziando la sincronizzazione dopo esserti connesso a un caveau remoto, vedrai un pulsante **Avvia sincronizzazione**. Seleziona questo pulsante per iniziare la sincronizzazione.

Se stai iniziando la sincronizzazione dopo aver regolato le impostazioni di Obsidian Sync e riavviato l'applicazione, vedrai un pulsante **Riprendi** nelle impostazioni di Sync. Seleziona questo pulsante per iniziare la sincronizzazione.

> [!done] Stato della sincronizzazione
> Quando Obsidian Sync completa la sincronizzazione, un cerchio verde con un segno di spunta ( ![[obsidian-icon-sync-synced.svg#icon]] ) appare nell'angolo in basso a destra (desktop) o nella barra laterale destra (mobile). Il registro di Sync mostrerà anche "Completamente sincronizzato" come uno dei messaggi più recenti.
>
> Per maggiori dettagli sugli stati di sincronizzazione, consulta [[Status icon and messages]].
^obsidian-sync-status

Per collegare altri dispositivi al tuo caveau remoto appena creato e sincronizzato, passa a [[Set up Obsidian Sync#Sincronizzare un caveau remoto su un altro dispositivo|Sincronizzare un caveau remoto su un altro dispositivo]].

Per saperne di più su impostazioni e file, passa a [[Sync settings and selective syncing]].

## Sincronizzare un caveau remoto su un altro dispositivo

In questa sezione, hai già creato un caveau remoto e caricato dati su di esso. Ora vuoi collegare gli altri tuoi dispositivi ad esso.

**Prerequisiti**
- Un account Obsidian. Se non ne hai uno, [iscriviti ora](https://obsidian.md/account#mode=signup).
- Un abbonamento attivo a Obsidian Sync. Se non ne hai uno, abbonati dalla [dashboard del tuo account](https://obsidian.md/account).
- Sync abilitato nelle impostazioni dei [[Core plugins|Plugin principali]].
- Un caveau remoto attivo. Se non ne hai ancora creato uno, crea prima un [[Set up Obsidian Sync#Creare un nuovo caveau remoto|caveau remoto]].
- **Consigliato**: un [[Back up your Obsidian files|sistema di backup]] attivo per i tuoi file Obsidian sul dispositivo più utilizzato. Un servizio di sincronizzazione non è un backup.

### Sincronizzare la cassaforte dal selettore dei vault

Se hai appena installato Obsidian, quando apri il programma ti verrà presentato il [[Manage vaults|Selettore dei vault]]. Per creare una nuova cassaforte locale dal contenuto di un caveau remoto, dovrai eseguire i seguenti passaggi.

1. Apri Obsidian (supponendo che sia la prima volta che lo apri)
2. Seleziona una delle opzioni a seconda della tua installazione:
	1. **Desktop**: nella sezione che dice Connetti a Obsidian Sync, scegli **Installa**
	2. **Mobile/Tablet**: **Installa Obsidian Sync**
3. Accedi con il tuo account utente Obsidian
	1. Se l'[[2-factor authentication|autenticazione a due fattori]] è configurata, inserisci il codice 2FA.
4. Ti verrà chiesto di scegliere quale caveau remoto vuoi sincronizzare su questo dispositivo. Seleziona **Connetti**.
5. Ti verrà chiesto di scegliere un nome per la cassaforte locale che verrà creata sul dispositivo per contenere questi dati. Inserisci il nome che preferisci.
	1. Se utilizzi gli [[Obsidian URI]], è consigliabile usare lo stesso nome della cassaforte locale sull'altro dispositivo.
6. Seleziona **Crea**.
7. La finestra dei vault remoti apparirà momentaneamente mentre Obsidian Sync si connette al server e convalida l'abbonamento. Successivamente ti presenterà una finestra *Configura connessione*.
	1. È altamente consigliato chiudere o scorrere verso il basso da questa finestra e [[#Regolare le impostazioni di Obsidian Sync|regolare le impostazioni di Obsidian Sync]] prima.
	2. Se modifichi qualsiasi impostazione di Sync, ricarica o riavvia Obsidian.

### Sincronizzare la cassaforte dalle Impostazioni di Obsidian

Se hai già creato una cassaforte locale su questo dispositivo e vuoi collegare questa cassaforte locale a un caveau remoto, le istruzioni sono molto simili a [[#Configurare Obsidian Sync per la prima volta]].

![[Set up Obsidian Sync#Accedere con il tuo account Obsidian]]

![[Set up Obsidian Sync#Abilitare Obsidian Sync]]

#### Connettersi a un caveau remoto

1. Apri le **[[Settings|Impostazioni]]**.
2. Nella barra laterale, seleziona **Sync**.
3. Accanto a **Scegli vault remoto**, clicca **Scegli**.
4. Clicca **Connetti** accanto al caveau remoto a cui vuoi connetterti.
5. In **Password di crittografia**, inserisci la password del tuo vault, se ne hai una.
6. Ti verrà chiesto di avviare la sincronizzazione. Si consiglia di attendere e regolare prima le impostazioni di sincronizzazione. Se vuoi sincronizzare l'intero vault sul dispositivo così com'è, puoi **Avviare la sincronizzazione**.

> [!warning] Se la cassaforte sul tuo dispositivo contiene già alcune note (non consigliato), verrai avvisato che quelle note verranno unite prima di procedere. I conflitti verranno risolti tramite la [[Troubleshoot Obsidian Sync#Risoluzione dei conflitti|risoluzione dei conflitti di Sync]].

![[Set up Obsidian Sync#Regolare le impostazioni di Obsidian Sync]]

![[Set up Obsidian Sync#Iniziare la sincronizzazione con Obsidian Sync]]

## Gestire i caveau remoti

Hai creato e ti sei connesso a un caveau remoto. Potresti anche aver sincronizzato questo caveau remoto su più dispositivi. Questa sezione copre alcune delle altre istruzioni comuni di cui potresti aver bisogno nella gestione di questo caveau remoto.

### Disconnettersi da un caveau remoto

1. Apri le **[[Settings|Impostazioni]]** di Obsidian.
2. Seleziona **Sync** nella barra laterale.
3. Clicca il pulsante **Disconnetti** accanto a Vault remoti.

Ora sei disconnesso dal caveau remoto e non stai più sincronizzando su questo dispositivo.

### Eliminare un caveau remoto

> [!tip] L'eliminazione di un caveau remoto non eliminerà i dati locali sul tuo dispositivo.

1. Apri le **[[Settings|Impostazioni]]**.
2. Nella barra laterale, seleziona **Sync**.
3. Seleziona **Gestisci** accanto a Vault remoti. Si aprirà una finestra con l'elenco dei tuoi caveau remoti.
4. Seleziona l'icona del cestino ( ![[lucide-trash-2.svg#icon]] ) accanto al caveau remoto che vuoi eliminare.
5. Conferma l'eliminazione selezionando il pulsante rosso **Elimina**.
6. Il tuo caveau remoto è stato eliminato.

> [!info] Se non è visibile l'icona del cestino, potrebbe essere necessario prima disconnettersi dal caveau remoto. Una volta disconnesso, seleziona il pulsante **Scegli** per aprire l'elenco dei caveau remoti.

### Server di sincronizzazione regionali

Obsidian Sync ti permette di scegliere la posizione di hosting per il tuo caveau remoto. Se stai utilizzando la versione `1.4.16` o precedente di Obsidian, la posizione verrà scelta automaticamente per te.

Se non sei sicuro di quale sia la regione del tuo vault attuale, consulta [[Obsidian Sync/Security and privacy#Dove posso trovare il mio attuale server Sync e dove è ospitato?|Dove posso trovare il mio server Sync attuale e dove è ospitato?]] per una guida.

![[sync-regional-sync-servers.png#interface|300]]

Dopo aver selezionato una posizione, il tuo data center **non può** essere spostato su un server diverso senza ricaricare i tuoi dati. Per cambiare regione, segui la [[Sync regions|guida alle regioni Sync dei vault]].

![[Obsidian Sync/Security and privacy#^sync-geo-regions]]

## Passaggi successivi

Ecco alcuni documenti suggeriti da leggere successivamente.

- Scopri di più sulla [[Sync settings and selective syncing|selezione dei file e delle impostazioni da sincronizzare]].
- Scopri cosa succede se il tuo caveau remoto si [[Version history|riempie]].
- [[Collaborate on a shared vault|Collabora su una cassaforte condivisa]] con un altro utente di Obsidian Sync.
- Consulta le [[Frequently asked questions|FAQ di Sync]] per alcune risposte alle domande comuni.
