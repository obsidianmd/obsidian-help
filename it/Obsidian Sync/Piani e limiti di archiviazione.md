---
permalink: sync/plans
publish: true
mobile: true
description: Scopri le diverse opzioni di piano disponibili per Obsidian Sync.
aliases:
  - Plans and storage limits
---
## Piani

Per sincronizzare le tue note con [[Introduzione a Obsidian Sync|Obsidian Sync]] hai bisogno di un piano in abbonamento. Puoi acquistare un piano Sync accedendo al [tuo account](https://obsidian.md/account/sync). Consulta la [pagina di Sync](https://obsidian.md/sync) per i prezzi.

Di seguito un confronto tra il piano Standard e il piano Plus:

|                                                  | Sync Standard | Sync Plus       |
| ------------------------------------------------ | ------------- | --------------- |
| Vault sincronizzati                              | 1             | 10              |
| Dimensione massima file                          | 5 MB          | 200 MB          |
| Spazio di archiviazione totale                   | 1 GB          | Da 10 GB a 100 GB |
| [[Cronologia versioni]]                          | 1 mese        | 12 mesi         |
| Dispositivi                                      | Illimitati    | Illimitati      |
| [[Collaborare su un vault condiviso\|Cassaforti condivise]] | Sì            | Sì              |

## Limiti di archiviazione

La quantità di dati che puoi archiviare utilizzando [[Introduzione a Obsidian Sync|Obsidian Sync]] dipende dal tuo piano di abbonamento. Con il piano Sync Plus puoi acquistare spazio di archiviazione aggiuntivo fino a 100 GB tramite la [dashboard del tuo account](https://obsidian.md/account/sync). Consulta le [[Domande frequenti]] per maggiori dettagli.

Esiste un unico limite di archiviazione a livello di account per tutte le note in tutte le cassaforti. Anche la [[Cronologia versioni|cronologia versioni]] e gli [[Allegati|allegati]] vengono conteggiati nel limite di archiviazione del tuo account.

Quando raggiungi il limite di archiviazione del tuo account, il plugin Sync cesserà di sincronizzare i file e ti verrà chiesto di ripulire il/i tuo/i caveau remoto/i.

### Identificare ed eliminare file di grandi dimensioni

Per identificare ed eliminare file di grandi dimensioni dalla cassaforte:

1. Apri **[[Impostazioni]] → Sync**.
2. Seleziona **Mostra i file più grandi** accanto a **Limite di spazio del vault superato**.
	1. Se non vedi **Limite di spazio del vault superato**, significa che ==non hai ancora raggiunto il limite di spazio==.
3. Chiudi la finestra **Mostra i file più grandi**.
4. Elimina alcuni dei file di grandi dimensioni di cui non hai più bisogno.
5. Attendi che Obsidian Sync completi l'operazione. Potrebbe richiedere un po' di tempo.
6. Apri **[[Impostazioni]] → Sync**.
7. Seleziona **Ripulisci** accanto a **Limite di spazio del vault superato**. Questo rimuoverà i file eliminati dal caveau remoto per liberare spazio.

Dopo che la pulizia viene sincronizzata con il server, Obsidian Sync dovrebbe riprendere a funzionare.

### Creare un nuovo caveau remoto

Puoi **creare un nuovo caveau remoto** per escludere i file di grandi dimensioni prima della sincronizzazione. La cronologia versioni dei tuoi file verrà reimpostata se crei un nuovo caveau remoto. Assicurati di non aver bisogno della cronologia versioni dei file più vecchi prima di procedere.

Per sincronizzare con un nuovo caveau remoto, segui questi passaggi:

1. Apri **[[Impostazioni]] → Sync**.
2. Seleziona **Gestisci** accanto a **Caveau remoto**.
3. Scegli **Crea nuovo vault** e segui i passaggi per crearlo. Se hai esaurito i vault disponibili, potresti dover prima [[Configurare Obsidian Sync#Disconnettersi da un caveau remoto|disconnetterti]] dal caveau remoto attuale e [[Configurare Obsidian Sync#Eliminare un caveau remoto|eliminarlo]].
4. Configura i file esclusi prima di avviare la sincronizzazione con il nuovo caveau remoto.
5. Riavvia Obsidian per applicare le modifiche.
6. Apri **[[Impostazioni]] → Sync**.
7. Seleziona Riprendi per avviare la sincronizzazione con il nuovo caveau remoto.

Il nuovo caveau remoto dovrebbe essere più piccolo del precedente, grazie all'assenza della cronologia versioni e dei file esclusi.

## Aggiornare il piano

Puoi aggiornare il tuo piano accedendo alla [dashboard del tuo account](https://obsidian.md/account/sync). Da lì potrai passare da Sync Standard a Sync Plus e aumentare lo spazio di archiviazione fino a 100 GB.

## Declassare il piano

Se desideri declassare il tuo piano Sync ma il tuo utilizzo dello spazio di archiviazione supera il limite del nuovo piano, dovrai liberare spazio nel tuo caveau remoto. Attualmente, non esiste un metodo diretto per rimuovere rapidamente file specifici da un caveau remoto esistente. Questo perché gli allegati vengono conservati nella cronologia versioni per un massimo di due settimane, e la cronologia versioni viene conteggiata nel limite di archiviazione.

Il modo più rapido per ridurre l'utilizzo dello spazio di archiviazione di Sync è creare un nuovo caveau remoto con gli allegati disabilitati, quindi eliminare il vecchio caveau remoto che supera i limiti di archiviazione. Tieni presente che così facendo perderai la cronologia versioni.

Se stai passando da Sync Plus a Sync Standard, dovrai anche ridurre il numero di vault presenti a uno prima che il declassamento venga consentito.

### Preservare la cronologia versioni

Gli allegati vengono conservati nella tua [[Cronologia versioni|cronologia versioni]] per un massimo di due settimane. Se prevedi di declassare il piano nel prossimo futuro, puoi iniziare rimuovendo gli allegati dalla tua cassaforte locale.

Dopo due settimane questi verranno eliminati dal caveau remoto e non verranno più conteggiati nel limite di archiviazione. A quel punto potrai declassare il tuo piano preservando la cronologia versioni per altri tipi di file, come i file Markdown.
