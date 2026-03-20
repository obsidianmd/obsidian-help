---
permalink: plugins/file-recovery
publish: true
mobile: true
description: Recupero file aiuta a proteggere il tuo lavoro dalla perdita involontaria di dati salvando automaticamente istantanee delle tue note a intervalli regolari.
aliases:
  - File recovery
---
Recupero file è un [[Plugin principali|plugin principale]] che protegge il tuo lavoro da eliminazioni accidentali, corruzione dei file o modifiche indesiderate salvando automaticamente istantanee complete delle tue note a intervalli regolari. Recupero file non è una soluzione di backup completa, e raccomandiamo anche di [[Back up your Obsidian files|eseguire il backup]] dei tuoi file di Obsidian separatamente.

Per evitare di occupare [[#Archiviazione e prestazioni|troppo spazio]], Obsidian conserva le istantanee per un certo numero di giorni prima di eliminarle. Le istantanee catturano il contenuto completo dei tuoi file, non solo le modifiche, permettendoti di ripristinare qualsiasi versione precedente.

> [!info]+ Info
> Per impostazione predefinita, le istantanee vengono salvate a un intervallo minimo di 5 minuti l'una dall'altra e conservate per 7 giorni. Puoi configurare entrambi gli intervalli in **[[Settings|Impostazioni]] → Plugin principali → Recupero file**.

Le istantanee sono conservate nelle [[How Obsidian stores data#Impostazioni globali|Impostazioni globali]], al di fuori della cassaforte, per far fronte alla perdita di dati legata alla cassaforte. Questo significa che le istantanee sono memorizzate con il percorso assoluto della nota. Se hai spostato la tua cassaforte di recente, potresti dover riportarla nella posizione in cui si trovava quando l'istantanea è stata scattata.

> [!tip] Se stai utilizzando [[Introduction to Obsidian Sync|Obsidian Sync]] o [[Sync your notes across devices|altri servizi di sincronizzazione]], le istantanee di Recupero file non verranno sincronizzate tra i dispositivi. Le istantanee sono specifiche per ogni dispositivo e rimangono locali su ciascun dispositivo.

## Recuperare un'istantanea

1. Apri **[[Settings|Impostazioni]]**.
2. Nella barra laterale, seleziona **Recupero file** sotto **Plugin principali**.
3. Sotto **Istantanee**, seleziona **Vista**.
4. Nel campo del nome file, inizia a digitare il nome del file che vuoi recuperare e vedrai un elenco di suggerimenti.
5. Seleziona il file, premi Invio e vedrai un elenco di istantanee disponibili.
6. Seleziona l'istantanea che vuoi recuperare.
    1. Se desideri copiare e incollare in una nuova nota, seleziona il pulsante **Copia**.
    2. Se desideri ripristinare completamente il file, seleziona il pulsante **Ripristina**.
7. Puoi opzionalmente mostrare le differenze tra le istantanee attivando **Mostra differenze**. Questo visualizza quale contenuto è stato aggiunto, rimosso o modificato tra le versioni delle istantanee.

## Cancellare la cronologia delle istantanee

> [!danger] La cancellazione della cronologia delle istantanee elimina irreversibilmente tutte le istantanee nella tua cassaforte.

1. Apri **[[Settings|Impostazioni]]**.
2. Nella barra laterale, seleziona **Recupero file** sotto **Plugin principali**.
3. Sotto **Cancella cronologia**, seleziona **Cancella**.
4. Conferma di voler eliminare tutte le istantanee, cliccando **Cancella**.

## Archiviazione e prestazioni

Le istantanee di Recupero file utilizzano tipicamente uno spazio su disco minimo, poiché memorizzano solo i file modificati. Tuttavia, nelle casseforti con molti file di grandi dimensioni o modifiche frequenti, le istantanee possono accumularsi nel tempo. Monitora l'utilizzo dello spazio di archiviazione e regola il periodo di conservazione se necessario.

## Limitazioni

- **Modalità di blocco Apple**: Questa funzionalità non è disponibile sui dispositivi Apple con la [Modalità di blocco](https://support.apple.com/en-us/105120) abilitata, a meno che Obsidian non sia esonerato.
- **Tipi di file**: Solo i file `.md` e `.canvas` possono essere ripristinati utilizzando Recupero file.
- **Posizione della cassaforte**: Se sposti la tua cassaforte in una posizione diversa senza utilizzare il [[Manage vaults#Spostare una cassaforte in una cartella diversa|selettore delle casseforti]], le istantanee esistenti potrebbero non essere accessibili.
