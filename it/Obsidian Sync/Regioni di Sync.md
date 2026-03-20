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
Quando crei un [[Cassaforti locali e remote|caveau remoto]] tramite [[Introduzione a Obsidian Sync|Obsidian Sync]], i tuoi dati vengono crittografati e archiviati su uno dei server Sync regionali di Obsidian. Questa guida spiega come spostare la tua cassaforte Sync su un server regionale diverso.

## Regioni disponibili

Le seguenti regioni sono disponibili con Obsidian Sync. Raccomandiamo di utilizzare **Automatica** o di scegliere una posizione vicina a te per ridurre la latenza e rendere il processo di sincronizzazione più veloce.

![[Obsidian Sync/Security and privacy#^sync-geo-regions]]

## Modificare la regione Sync

Per cambiare la regione del tuo caveau remoto, dovrai ricreare la tua cassaforte su un server Sync diverso. Nota che puoi anche cambiare regione utilizzando l'assistente alla migrazione [[Aggiornare la crittografia di Sync]], se il tuo caveau remoto è su una versione precedente.

> [!danger] Le migrazioni sono distruttive
> 
> **Esegui sempre un [[Eseguire il backup dei file di Obsidian|backup]] della tua cassaforte prima di procedere con una migrazione.**
> 
> Quando migri un caveau remoto, i tuoi dati verranno sostituiti. Questo significa che:
> 
> 1. I dati remoti verranno rimossi dai server Obsidian e i dati della cassaforte verranno ricaricati al loro posto.
> 2. Tutta la [[Cronologia versioni|cronologia versioni]] della cassaforte andrà persa.

![[Configurare Obsidian Sync#Disconnettersi da un caveau remoto]]

Se sei sul [[Piani e limiti di archiviazione|Piano Standard]], dovrai anche [[#Eliminare un caveau remoto|eliminare il tuo caveau remoto]] prima di procedere.

![[Configurare Obsidian Sync#Creare un nuovo caveau remoto]]

Inoltre, puoi [[#Eliminare un caveau remoto|eliminare il tuo vecchio caveau remoto]] una volta confermata la transizione al nuovo caveau remoto e alla sua regione.
