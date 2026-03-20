---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: >-
  Obsidian Sync tiene traccia di tutte le modifiche apportate alle note e
  controlla regolarmente la presenza di aggiornamenti, creando nuove versioni
  delle note.
aliases:
  - Version history
---
[[Introduzione a Obsidian Sync|Obsidian Sync]] controlla regolarmente la presenza di aggiornamenti nei [[Impostazioni di Sync e sincronizzazione selettiva|file sincronizzati]], tenendo traccia di eventuali modifiche. Queste vengono archiviate come nuove voci nella [[#Cronologia versioni]]. È possibile accedere a queste informazioni in diversi modi:

- [[#Cronologia Sync]]
- [[#Cronologia versioni]]

Sebbene non faccia parte di Obsidian Sync, una cronologia delle versioni locale è disponibile su ogni dispositivo se il plugin [[Recupero file]] è abilitato.

## Cronologia Sync

La cronologia Sync (o barra laterale Sync), introdotta nella versione 1.7 di Obsidian, consente di visualizzare rapidamente le note e gli allegati recentemente creati o modificati che sono stati sincronizzati. Può essere considerata come una cronologia delle _modifiche_.

Nella barra laterale, è possibile selezionare un elemento per aprire il relativo file nella finestra attiva. Gli elementi dispongono anche di menu contestuali, che consentono di eseguire azioni come spostare il file o visualizzare la sua [[#Note e allegati|Cronologia versioni]].

> [!compatibility] Funzionalità solo per desktop
> Quando si passa il mouse su un file sincronizzato nella barra laterale, è possibile vedere chi ha modificato il file per ultimo. Questo è particolarmente utile se si sta [[Collaborare su una cassaforte condivisa|collaborando]] su una cassaforte condivisa.

> [!tip] 
> Le impostazioni e gli elementi eliminati non appariranno nella barra laterale della cronologia Sync. Questi possono essere trovati nella [[#Note e allegati|Cronologia versioni]].

### Visualizzare la cronologia Sync

Quando si abilita il plugin principale [[Introduzione a Obsidian Sync|Sync]], la cronologia Sync viene abilitata automaticamente ma non appare nella barra laterale per impostazione predefinita. Sarà necessario aggiungerla manualmente usando un comando o una scorciatoia da tastiera.

#### Abilitare tramite tavolozza dei comandi

> [!info] Questa opzione richiede che il plugin principale [[Tavolozza dei comandi]] sia abilitato.

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Aprire la **Tavolozza dei comandi**. ( ![[lucide-terminal.svg#icon]] )
2. Digitare "Sync".
3. Selezionare l'opzione "Sync: Visualizza cronologia Sync".

La cronologia Sync apparirà nella [[Barra laterale|barra laterale destra]].

**Mobile** ![[obsidian-icon-smartphone.svg#icon]]

1. Aprire la [[Barra degli strumenti]] ( ![[lucide-menu.svg#icon]] ).
2. Aprire la **Tavolozza dei comandi**. ( ![[lucide-terminal.svg#icon]] )
3. Digitare "Sync".
4. Selezionare l'opzione "Sync: Visualizza cronologia Sync".

La cronologia Sync apparirà come opzione a discesa nella [[Barra laterale|barra laterale destra]].

#### Abilitare tramite scorciatoia da tastiera

1. Aprire le **[[Impostazioni]]**.
2. Nella categoria **Opzioni**, selezionare **Tasti di scelta rapida**.
3. Nella barra di ricerca delle scorciatoie, digitare "Sync".
4. Accanto a "Sync: Visualizza cronologia Sync", assegnare la scorciatoia da tastiera preferita.

## Cronologia versioni

Oltre alla [[#Cronologia Sync]], Obsidian mantiene anche una cronologia delle versioni per il ripristino di note e allegati. Se si elimina accidentalmente una nota o si desidera tornare a una versione precedente, è possibile ripristinarla dalla cronologia delle versioni.

Il periodo di conservazione della cronologia delle versioni dipende dal [[Piani e limiti di archiviazione|piano Obsidian Sync]]. Con il piano Standard, le note vengono conservate per 1 mese, mentre con il piano Plus vengono conservate per 12 mesi. Dopo questo periodo, le versioni più vecchie delle note vengono eliminate.

Per gli [[Allegati|allegati]], le versioni più vecchie vengono conservate per <u>due settimane</u>.

![[Collaborare su una cassaforte condivisa#^version-history-image]]

### Note e allegati

Il processo per il ripristino di note e allegati è lo stesso.

#### Visualizzare la cronologia delle versioni di un file

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. Nell'**Esplora file**, selezionare la nota che si desidera ripristinare.
2. Selezionare **Apri cronologia delle versioni**.
3. Selezionare la versione della nota che si desidera visualizzare sulla sinistra. Il contenuto verrà mostrato sulla destra.

**Mobile** ![[obsidian-icon-smartphone.svg#icon]]
1. Nell'**Esplora file**, selezionare la nota che si desidera ripristinare.
2. Tenere premuto per aprire il menu contestuale.
3. Selezionare **Apri cronologia delle versioni**.
4. Nel menu a comparsa, selezionare la versione della nota che si desidera visualizzare.
5. Una volta selezionata, il contenuto della nota sarà disponibile per la revisione.

#### Visualizzare la cronologia delle versioni di un file eliminato o rinominato

1. Aprire le **[[Impostazioni]]**.
2. Nella barra laterale, sotto **Plugin principali***, selezionare **Sync**.
3. Accanto a **File eliminati**, selezionare **Vista**.
4. Selezionare la nota di cui si desidera visualizzare la cronologia delle versioni.
5. Nel pop-up della cronologia delle versioni, selezionare la versione della nota che si desidera visualizzare sulla sinistra.

#### Ripristinare una versione precedente di un file

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. Nell'**Esplora file**, selezionare la nota che si desidera ripristinare.
2. Selezionare **Apri cronologia delle versioni**.
3. Selezionare la versione della nota che si desidera ripristinare sulla sinistra. Il contenuto verrà mostrato sulla destra.
4. Selezionare il pulsante **Ripristina**.
5. Il contenuto della nota verrà sostituito con la versione ripristinata.

**Mobile** ![[obsidian-icon-smartphone.svg#icon]]
1. Nell'**Esplora file**, selezionare la nota che si desidera ripristinare.
2. Tenere premuto per aprire il menu contestuale.
3. Selezionare **Apri cronologia delle versioni**.
4. Nel menu a comparsa, selezionare la versione della nota che si desidera ripristinare.
5. Una volta selezionata, il contenuto della nota sarà disponibile per la revisione.
6. Selezionare il pulsante **Ripristina**.
7. Il contenuto della nota verrà sostituito con la versione ripristinata.

#### Ripristinare un file eliminato

1. Aprire le **[[Impostazioni]]**.
2. Nella barra laterale, sotto **Plugin principali***, selezionare **Sync**.
3. Accanto a **File eliminati**, selezionare **Vista**.
4. Scegliere la nota che si desidera ripristinare.
5. Nell'elenco delle versioni sulla sinistra, selezionare la versione che si desidera ripristinare.
6. Selezionare il pulsante **Ripristina** sulla destra.
7. La nota verrà ripristinata nella sua posizione originale nel file system.

> [!tip] È possibile selezionare più note con il **ripristino di massa** selezionando le caselle di controllo o usando `shift+click`. Questi file non potranno essere revisionati in questo menu.

### Cronologia delle impostazioni

Obsidian Sync tiene anche traccia delle modifiche apportate alle impostazioni di configurazione della cassaforte.

#### Visualizzare la cronologia delle versioni di un'impostazione

1. Aprire le **[[Impostazioni]]**.
2. Nella barra laterale, sotto **Plugin principali***, selezionare **Sync**.
3. Scorrere fino a **Configurazione sincronizzazione del vault**.
4. Selezionare il pulsante **Vista** accanto a **Cronologia versioni delle [[Impostazioni]]**.
5. Nel pop-up **File delle [[Impostazioni]]**, scegliere un file di impostazioni che si desidera visualizzare.

#### Ripristinare una versione precedente di un'impostazione

1. Aprire le **[[Impostazioni]]**.
2. Nella barra laterale, sotto **Plugin principali**, selezionare **Sync**.
3. Scorrere fino a **Configurazione sincronizzazione del vault**.
4. Selezionare il pulsante **Vista** accanto a **Cronologia versioni delle [[Impostazioni]]**.
5. Nel pop-up **File delle [[Impostazioni]]**, scegliere un file di impostazioni che si desidera visualizzare.
6. Nella finestra delle modifiche, selezionare il pulsante **Ripristina**.
7. Ricaricare o riavviare Obsidian affinché l'impostazione abbia effetto. Per maggiori dettagli, fare riferimento alle istruzioni in [[Configurare Obsidian Sync#Regolare le impostazioni di Obsidian Sync|Regolare le impostazioni di Obsidian Sync]].
