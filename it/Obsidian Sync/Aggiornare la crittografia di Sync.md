---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Sposta il tuo vault Sync in una regione diversa ed esegui un aggiornamento della crittografia.
aliases:
  - Upgrade Sync encryption
---
Per impostazione predefinita, Obsidian Sync utilizza la [[Obsidian Sync/Sicurezza e privacy#Crittografia|crittografia end-to-end]] per tutti i tuoi dati. Questo garantisce che nessuno — nemmeno il team di Obsidian — possa accedere alle tue note.

Obsidian aggiorna occasionalmente la crittografia di Sync per mantenere i più elevati standard di [[Obsidian Sync/Sicurezza e privacy|sicurezza]]. Se è disponibile un aggiornamento della crittografia, vedrai un'opzione intitolata **Aggiorna crittografia vault** in **Impostazioni di Obsidian → Sync**. Questo processo consente anche di cambiare la propria [[Regioni di Sync|regione Sync]].

## Versioni della crittografia

Tutti i nuovi vault utilizzano automaticamente la crittografia più recente. I vault esistenti possono essere aggiornati utilizzando l'assistente alla migrazione. Nota che tutti i dispositivi devono utilizzare una versione dell'app Obsidian che supporti la versione della crittografia Sync a cui si sta migrando.

| Data di rilascio                                                        | Versione Sync | Versione minima dell'app |
| ----------------------------------------------------------------------- | ------------- | ------------------------ |
| [2025-08-22](https://obsidian.md/it/changelog/2025-08-22-sync/)            | 3             | 1.8.3                    |
| [2020-12-07](https://obsidian.md/it/changelog/2020-12-07-desktop-v0.9.21/) | 0             | 0.9.21                   |

## Aggiornare la crittografia con l'assistente alla migrazione

Prima di procedere, crea un [[Backup dei file di Obsidian|backup]] della tua cassaforte per prevenire qualsiasi potenziale perdita di dati. Questo processo eliminerà definitivamente tutti i dati nel tuo caveau remoto con la vecchia crittografia, inclusa la cronologia versioni.

> [!danger] Le migrazioni sono distruttive
> 
> **Esegui sempre il [[Backup dei file di Obsidian|backup]] della tua cassaforte prima di procedere con una migrazione.**
> 
> Quando migri un caveau remoto, i tuoi dati verranno sostituiti. Questo significa che:
> 
> 1. I dati remoti verranno rimossi dai server di Obsidian, e i dati della cassaforte verranno ricaricati al loro posto.
> 2. Tutta la [[Cronologia versioni|cronologia versioni]] della cassaforte andrà persa.

1. Apri **[[Impostazioni]]**.
2. Nella barra laterale, seleziona **Sync**.
3. Fai clic su **Aggiorna vault**. Questa opzione sarà visibile solo se è disponibile un aggiornamento per il tuo caveau remoto.
4. Verifica nuovamente i tuoi backup e fai clic su **Continua**.
5. In **Nome vault**, inserisci il nome del caveau remoto.
6. In **Regione**, scegli la [[#Server sync regionali|regione]] del server per il tuo caveau remoto.
7. In **Password di crittografia**, scegli una password per la tua cassaforte. Questo crea una cassaforte con crittografia end-to-end. La password della cassaforte è separata dal tuo account Obsidian e può essere diversa per ciascuna delle tue cassaforti. Per maggiori informazioni, consulta [[Sicurezza e privacy]].
8. Una volta ricaricati i dati con la nuova crittografia, riconnettiti al nuovo vault Sync sugli altri dispositivi.
