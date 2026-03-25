---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Come sincronizzare le note di Obsidian tra dispositivi e piattaforme.
---
Obsidian archivia le note localmente sul dispositivo, così sono sempre accessibili, anche offline. Per accedere alle note su più dispositivi è necessario configurare un metodo di sincronizzazione.

Questa guida illustra i metodi di sincronizzazione più comuni, inclusi suggerimenti per evitare la perdita di dati e garantire un'esperienza fluida.

Si consiglia anche di leggere la [[Backup dei file di Obsidian|guida al backup]] per proteggere i propri dati.

## Metodi di sincronizzazione

Con Obsidian i dati sono semplicemente archiviati come file in una cartella chiamata [[Vault locali e remoti|cassaforte]]. Questo significa che esistono molti modi per sincronizzare i dati.

Ecco alcuni metodi di sincronizzazione comunemente utilizzati, segnalati dai membri della [community di Obsidian](https://obsidian.md/it/community):

1. **Sincronizzazione proprietaria**: [[#Obsidian Sync]]
2. **Sincronizzazione cloud di terze parti**: [[#iCloud]], [[#OneDrive]] e [[#Google Drive]]
3. **Sincronizzazione locale**: [[#Syncthing]]
4. **Controllo di versione**: [[#Git]] e [[#Working Copy]]

## Obsidian Sync

**Sistemi consigliati**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Il metodo di sincronizzazione più diretto e ufficialmente supportato è la soluzione proprietaria: [[Introduzione a Obsidian Sync|Obsidian Sync]].

Obsidian Sync mantiene le casseforti sincronizzate su tutti i dispositivi utilizzando un caveau remoto esterno per creare copie dei dati. Una copia locale rimane sempre sui dispositivi.

Seguire la [[Configurare Obsidian Sync|guida alla configurazione]] per configurare Obsidian Sync.

## iCloud

**Sistemi consigliati**: `macOS`, `iOS`, `iPadOS`

iCloud può essere utilizzato per sincronizzare le casseforti tra iOS e macOS. Tuttavia, **iCloud Drive su Windows** può causare duplicazione o corruzione dei file.

**Come creare e archiviare la cassaforte in iCloud Drive**:

- **Abilitare iCloud Drive**:
    - Su macOS: Andare in **Preferenze di Sistema → ID Apple → iCloud → iCloud Drive**.
    - Su iOS: Andare in **Impostazioni → [Il proprio nome] → iCloud → iCloud Drive**.
- **Creare una nuova cassaforte in iCloud**:
    - Su macOS:
        1. Aprire **Obsidian** e selezionare **Crea nuovo vault**.
        2. Nel selettore file, navigare fino a **iCloud Drive → Obsidian**.
        3. Creare una cartella per la cassaforte e assegnarle un nome.
        4. Selezionare **Crea** per completare.
    - Su iOS:
        1. Aprire **Obsidian** e toccare **Crea nuovo vault**.
        2. Inserire un nome per la cassaforte.
        3. Attivare **Archivia in iCloud**.
        4. Toccare **Crea**.
- **Aprire la cassaforte su un altro dispositivo Apple**:
    - Su un altro dispositivo macOS o iOS, aprire **Obsidian**, andare al [[Gestisci casseforti|Selettore cassaforti]] e selezionare **Apri cartella come vault**. Navigare fino a **iCloud Drive → Obsidian**.

> [!warning]+ Posizione della cartella su iOS e iPadOS
> Quando si utilizza iCloud sui dispositivi mobile, assicurarsi che la cassaforte sia archiviata nella posizione corretta: `iCloud Drive/Obsidian/[Nome della cassaforte]`.
> 
> Le casseforti devono trovarsi all'interno della cartella **Obsidian** in iCloud Drive. La cartella a destra con l'icona di Obsidian è quella corretta. Non utilizzare la cartella semplice senza l'icona dell'app.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Per verificare la posizione della cassaforte, aprire l'app **File**, toccare **Sfoglia**, selezionare **iCloud Drive** sotto **Posizioni** e confermare che la cassaforte si trovi all'interno della cartella **Obsidian**. Se la cassaforte si trova in una posizione diversa, si potrebbero riscontrare problemi di sincronizzazione.

> [!tip] Buone pratiche
> - Per **macOS 14 (Sonoma) e precedenti**: Disabilitare **Ottimizza archiviazione Mac** nelle impostazioni di iCloud per evitare che i file vengano scaricati dal dispositivo. Questa impostazione influisce su tutto lo spazio di archiviazione iCloud sul dispositivo, non solo su Obsidian.
> - Per **macOS 15 (Sequoia)**: Fare clic destro sulla cartella **Obsidian** in iCloud Drive e selezionare **Mantieni scaricato**.

## OneDrive

**Sistemi consigliati**: `Windows`, `macOS` (funzionalità limitata su Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) è un'opzione di archiviazione cloud popolare per gli utenti Windows e macOS. Tuttavia, presenta limitazioni su Android e non è ufficialmente supportato per la sincronizzazione delle casseforti di Obsidian su iOS.

> [!info] Mantenere i file disponibili offline
> Prima di utilizzare OneDrive per la sincronizzazione, assicurarsi che la cartella della cassaforte sia contrassegnata come **Mantieni sempre su questo dispositivo**. Questo impedisce a OneDrive di scaricare i file dal dispositivo, facendo credere a Obsidian che siano mancanti.

**Come creare e archiviare la cassaforte in OneDrive**:

1. **Configurare OneDrive**:
   - Su Windows: Accedere tramite l'app OneDrive o il proprio account Microsoft.
   - Su macOS: Scaricare l'app OneDrive e accedere.
2. **Creare una nuova cassaforte in OneDrive**:
   - Su Windows/macOS:
     1. Aprire **Esplora File** (Windows) o **Finder** (macOS) e navigare fino a **OneDrive → Documenti**.
     2. Creare una nuova cartella (es. \"Obsidian Vault\").
     3. Aprire **Obsidian**, selezionare **Crea nuovo vault** e selezionare la cartella di OneDrive.
3. **Aprire la cassaforte su un altro dispositivo**:
   - Su un altro dispositivo, aprire **Obsidian**, andare al [[Gestisci casseforti|Selettore cassaforti]] e selezionare **Apri cartella come vault**. Navigare fino a **OneDrive → Documenti**.

> [!info] Sincronizzazione su Android
> OneDrive potrebbe non funzionare bene per la sincronizzazione su Android. Considerare l'utilizzo di app come [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) o [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Buone pratiche
> - Mantenere sempre i file della cassaforte **Disponibili offline** facendo clic destro sulla cartella e selezionando **Mantieni sempre su questo dispositivo**.
> - Evitare di utilizzare la funzione **File su richiesta** di OneDrive per le casseforti, per prevenire problemi di sincronizzazione.

## Google Drive

**Sistemi consigliati**: `Windows`, `macOS`, `Android` (funzionalità limitata su iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) è un'altra soluzione di archiviazione cloud popolare. Sebbene non sia ufficialmente supportato per la sincronizzazione delle casseforti di Obsidian, è possibile utilizzare app e plugin di terze parti per sincronizzare tra dispositivi.

> [!info] Supporto iOS
> Google Drive non è ufficialmente supportato per la sincronizzazione delle casseforti di Obsidian su iOS. Considerare l'utilizzo di una soluzione o plugin di terze parti per sincronizzare su iOS.

**Come creare e archiviare la cassaforte in Google Drive**:

1. **Configurare Google Drive**:
    - Su Windows o macOS: Scaricare l'app Google Drive e accedere.
    - Su Android: Assicurarsi che Google Drive sia abilitato e che l'accesso sia effettuato.
2. **Creare una nuova cassaforte in Google Drive**:
    - Su Windows/macOS:
        1. Aprire **Esplora File** (Windows) o **Finder** (macOS) e navigare fino a **Google Drive**.
        2. Creare una nuova cartella (es. \"Obsidian Vault\").
        3. Aprire **Obsidian**, selezionare **Crea nuovo vault** e selezionare la cartella di Google Drive.
3. **Aprire la cassaforte su un altro dispositivo**:
    - Su un altro dispositivo, aprire **Obsidian**, andare al [[Gestisci casseforti|Selettore cassaforti]] e selezionare **Apri cartella come vault**. Navigare fino alla propria cartella Google Drive.

> [!tip] Buone pratiche
> - Impostare i file della cassaforte come **Disponibili offline** in Google Drive per evitare problemi di sincronizzazione dovuti allo scaricamento dei file.
> - Per iOS, considerare metodi alternativi come [[Introduzione a Obsidian Sync|Obsidian Sync]], [[#iCloud]], o utilizzare il plugin **Remotely Save**.

## Syncthing

**Sistemi consigliati**: `Windows`, `macOS`, `Linux`

Syncthing è uno strumento di sincronizzazione file decentralizzato che non si basa sull'archiviazione cloud. Sincronizza la cassaforte direttamente tra dispositivi tramite rete locale o internet.

> [!info]+ Supporto Android
> L'app ufficiale Syncthing per Android non è più mantenuta. Tuttavia, un fork della community chiamato [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) continua lo sviluppo attivo e può essere utilizzato sui dispositivi Android.

**Come creare e archiviare la cassaforte utilizzando Syncthing**:

1. **Configurare Syncthing**:
   - Installare Syncthing su ogni dispositivo. Consultare il [sito web di Syncthing](https://syncthing.net/) per le guide di installazione.
   - Su Android, installare [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) dalle release di GitHub o da F-Droid.
2. **Creare e configurare una cartella condivisa**:
   - Su tutti i dispositivi:
     1. Aprire Syncthing e creare una cartella condivisa. Impostare il percorso della cartella sulla cassaforte di Obsidian.
     2. Assicurarsi che la stessa cartella sia selezionata su tutti i dispositivi.
     3. Configurare le preferenze di sincronizzazione della cartella (es. **Invio e ricezione** per la sincronizzazione bidirezionale).
3. **Aprire la cassaforte in Obsidian**:
   - Una volta che la cartella è sincronizzata tra i dispositivi, aprire **Obsidian**, andare al [[Gestisci casseforti|Selettore cassaforti]] e selezionare **Apri cartella come vault**.

> [!info] Disponibilità dei dispositivi
> Syncthing funziona meglio quando almeno un dispositivo è sempre acceso per garantire una sincronizzazione continua.

> [!tip] Buone pratiche
> - Per la sincronizzazione locale, assicurarsi che tutti i dispositivi siano connessi alla stessa rete.
> - Escludere `.obsidian` dalla sincronizzazione se si desiderano impostazioni separate su ogni dispositivo.
> - Utilizzare pattern di esclusione per evitare la sincronizzazione di file temporanei o di backup.

## Git

**Sistemi consigliati**: `Windows`, `macOS`, `Linux`

**Git** è un sistema di controllo di versione che permette di tracciare le modifiche, collaborare con altri e sincronizzare le casseforti tramite repository come GitHub, GitLab o un server self-hosted.

**Come sincronizzare la cassaforte utilizzando Git**:

1. **Configurare un repository remoto**:
    - Creare un repository su una piattaforma di hosting Git (es. GitHub, GitLab o un server self-hosted).
2. **Sincronizzare la cassaforte**:
    1. Aprire un terminale o una GUI Git (es. GitKraken, Sourcetree).
    2. Inizializzare un repository Git nella cartella della cassaforte utilizzando `git init`.
    3. Aggiungere il repository remoto: `git remote add origin [URL]`.
    4. Effettuare il commit delle modifiche: `git add .` e `git commit -m "Il tuo messaggio"`.
    5. Eseguire il push delle modifiche: `git push origin main`.
3. **Scaricare le modifiche su altri dispositivi**:
    - Clonare il repository su un altro dispositivo e scaricare le modifiche utilizzando `git pull origin main`.

> [!info] Sincronizzazione manuale necessaria
> Git offre un forte controllo di versione, ma la sincronizzazione non è automatica. È necessario eseguire manualmente push e pull delle modifiche.

## Sincronizzazione iPhone e iPad

**Opzioni consigliate**:
- [[Introduzione a Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Evitare di combinare servizi di sincronizzazione
> Evitare di sincronizzare la stessa cassaforte con più servizi (es. utilizzare contemporaneamente Obsidian Sync e iCloud) per prevenire conflitti di dati o corruzione.

**Opzioni non supportate**:
I seguenti servizi non sono ufficialmente supportati su iOS, ma gli utenti hanno trovato soluzioni alternative utilizzando strumenti o plugin di terze parti:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Alcuni utenti hanno utilizzato con successo plugin come **Remotely Save** o **LiveSync** per sincronizzare le casseforti su iOS. Tuttavia, questi metodi non sono ufficialmente supportati e i risultati possono variare.

### Working Copy

**Sistemi consigliati**: `iOS`
**Richiede**: [[#Git]]

**Working Copy** è un client Git per iOS che permette di clonare, effettuare commit e push delle modifiche su un repository Git. Funziona bene per sincronizzare le casseforti di Obsidian tramite Git, anche se alcune funzionalità richiedono un acquisto in-app.

**Come sincronizzare la cassaforte utilizzando Working Copy**:

1. **Installare Working Copy**:
    - Scaricare l'app **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** sul proprio iPhone o iPad.
2. **Clonare il repository Git**:
    - Aprire Working Copy, toccare **Aggiungi repository** e inserire l'URL del repository (es. GitHub, GitLab).
3. **Collegare il repository a Obsidian**:
    - Collegare la cartella del repository clonato a una cassaforte vuota in **Obsidian**.
4. **Effettuare commit e push delle modifiche**:
    - Dopo aver modificato le note in Obsidian, utilizzare Working Copy per effettuare **Commit** e **Push** delle modifiche al repository remoto.
    - Sugli altri dispositivi, scaricare le modifiche utilizzando Git per sincronizzare la cassaforte.

> [!info] Utilizzo dalla community
> Sebbene Working Copy non sia ufficialmente supportato, molti utenti lo hanno utilizzato con successo per sincronizzare le casseforti con Git.

## Domande frequenti

**Perché il mio servizio di sincronizzazione preferito non è ufficialmente supportato?**

A differenza di alcune app per appunti che accedono a un file alla volta, Obsidian richiede l'accesso all'intera cassaforte per le sue funzionalità (es. aggiornamento dei collegamenti quando si rinomina un file). Questo rende difficile per alcuni servizi funzionare in modo affidabile con Obsidian.

**Perché devo mantenere i file "Disponibili offline"?**

Se servizi come OneDrive o iCloud scaricano i file dal dispositivo (es. utilizzando **File su richiesta** o **Ottimizza archiviazione Mac**), Obsidian non può accedervi, causando problemi di sincronizzazione. Contrassegnare la cartella della cassaforte come **Mantieni sempre su questo dispositivo** (OneDrive) o assicurarsi che **Mantieni scaricato** sia abilitato (iCloud).

**Come posso gestire configurazioni diverse per le mie casseforti?**

Obsidian permette di personalizzare la cartella di configurazione per dispositivo utilizzando la funzionalità [[Cartella di configurazione|Cartelle di configurazione]].
