---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Sposta la tua cassaforte Sync in una regione diversa.
aliases:
  - Sync regions
---
Quando crei un [[Vault locali e remoti|caveau remoto]] tramite [[Introduzione a Obsidian Sync|Obsidian Sync]], i tuoi dati vengono crittografati e archiviati su uno dei server Sync regionali di Obsidian. Questa guida spiega come spostare la tua cassaforte Sync su un server regionale diverso.

## Regioni disponibili

Le seguenti regioni sono disponibili con Obsidian Sync. Raccomandiamo di utilizzare **Automatica** o di scegliere una posizione vicina a te per ridurre la latenza e rendere il processo di sincronizzazione più veloce.

![[Obsidian Sync/Sicurezza e privacy#^sync-geo-regions]]

## Annotare le proprie impostazioni

Quando colleghi un dispositivo al nuovo vault remoto, Sync può utilizzare le impostazioni che hai attivato in quel momento. Se mantieni impostazioni diverse su dispositivi diversi, annotale prima di iniziare. Ad esempio, potresti non sincronizzare file multimediali di grandi dimensioni sul telefono.

Su ogni dispositivo che utilizza il vault remoto, apri **[[Impostazioni]] → Sync** e annota queste impostazioni. Uno screenshot è un buon metodo.

- **Sincronizzazione selettiva**
- **Configurazione sincronizzazione del vault**
- **Cartelle escluse**
- Impostazioni specifiche del dispositivo, come **Nome dispositivo** e **Risoluzione dei conflitti**

Consulta [[Impostazioni di Sync e sincronizzazione selettiva]] per sapere cosa fa ogni impostazione e quali sono attive per impostazione predefinita.

## Modificare la regione Sync

Per cambiare la regione del tuo caveau remoto, dovrai ricreare la tua cassaforte su un server Sync diverso. Nota che puoi anche cambiare regione utilizzando l'assistente alla migrazione [[Aggiornare la crittografia di Sync]], se il tuo caveau remoto è su una versione precedente.

> [!danger] Le migrazioni sono distruttive
> 
> **Esegui sempre un [[Backup dei file di Obsidian|backup]] della tua cassaforte prima di procedere con una migrazione.**
> 
> Quando migri un caveau remoto, i tuoi dati verranno sostituiti. Questo significa che:
> 
> 1. I dati remoti verranno rimossi dai server Obsidian e i dati della cassaforte verranno ricaricati al loro posto.
> 2. Tutta la [[Cronologia versioni|cronologia versioni]] della cassaforte andrà persa.

![[Configurare Obsidian Sync#Disconnettersi da un caveau remoto]]

Se sei sul [[Piani e limiti di archiviazione|Piano Standard]], dovrai anche [[#Eliminare un caveau remoto|eliminare il tuo caveau remoto]] prima di procedere.

![[Configurare Obsidian Sync#Creare un nuovo caveau remoto]]

## Ricollegare gli altri dispositivi

Dopo che il nuovo vault remoto ha terminato la sincronizzazione sul primo dispositivo, passa a ogni altro dispositivo che utilizzava il vecchio vault remoto. Lavora su un dispositivo alla volta.

1. Sul dispositivo, [[Configurare Obsidian Sync#Disconnettersi da un caveau remoto|disconnettiti dal vecchio vault remoto]].
2. [[Configurare Obsidian Sync#Sincronizzare un vault remoto su un altro dispositivo|Collegati al nuovo vault remoto]]. Non selezionare ancora **Avvia sincronizzazione**.
3. Imposta **Sincronizzazione selettiva**, **Configurazione sincronizzazione del vault** e **Cartelle escluse** in modo che corrispondano alle impostazioni annotate per questo dispositivo.
4. Riavvia Obsidian. Su mobile o tablet, potrebbe essere necessario forzare la chiusura dell'app.
5. Seleziona **Avvia sincronizzazione** o **Riprendi**, e attendi che Sync termini prima di passare al dispositivo successivo.

Inoltre, puoi [[#Eliminare un caveau remoto|eliminare il tuo vecchio caveau remoto]] una volta confermata la transizione al nuovo caveau remoto e alla sua regione.
