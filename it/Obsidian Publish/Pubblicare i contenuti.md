---
permalink: publish/publish
publish: true
mobile: true
description: Scopri come pubblicare i tuoi contenuti utilizzando Obsidian Publish
aliases:
  - Publish your content
---
Questa pagina spiega come gestire i contenuti pubblicati. Per scoprire come personalizzare lo stile del tuo sito, consulta [[Personalizzare il sito|Personalizzare il sito]].

## Prerequisiti

- Un account Obsidian. Se non ne hai uno, [iscriviti ora](https://obsidian.md/it/auth?returnto=%2Faccount%2Fpublish#signup).
- Un abbonamento attivo a Obsidian Publish. Se non ne hai uno, sottoscrivi un abbonamento dalla [dashboard del tuo account](https://obsidian.md/it/account/publish).
- Il plugin principale **Pubblica** è [[Configurare Obsidian Publish#Abilita Obsidian Publish|abilitato]].
- Un [[Gestione siti#Creare un nuovo sito|sito Publish]] è stato creato.

## Pubblicare le note

1. Nella **barra degli strumenti**, seleziona **Pubblica modifiche** ![[lucide-send.svg#icon]].
2. Nella finestra di dialogo **Pubblica modifiche**, seleziona **NUOVO** per visualizzare tutte le note non pubblicate.
3. Seleziona le note che desideri pubblicare.
4. Seleziona **Pubblica**.

## Annullare la pubblicazione delle note

Le note rimangono nella cassaforte locale anche dopo aver annullato la loro pubblicazione.

1. Nella **barra degli strumenti**, seleziona **Pubblica modifiche** ![[lucide-send.svg#icon]].
2. Nella finestra di dialogo **Pubblica modifiche**, seleziona **PUBBLICATO** per visualizzare tutte le note pubblicate.
3. Seleziona le note di cui desideri annullare la pubblicazione.
4. Seleziona **Pubblica**.

## Aggiornare una nota pubblicata

1. Nella **barra degli strumenti**, seleziona **Pubblica modifiche** ![[lucide-send.svg#icon]].
2. Nella finestra di dialogo **Pubblica modifiche**, seleziona **MODIFICHE** per visualizzare tutte le note modificate dall'ultima pubblicazione.
3. Seleziona le note che desideri aggiornare.
4. Seleziona **Pubblica**.

> [!hint] L'eliminazione delle note rinominate o rimosse e delle immagini da Publish avviene in questo passaggio. È necessario selezionare manualmente la casella di controllo per eliminare questi dati, poiché per sicurezza non viene selezionata automaticamente.

## Pubblicare i dati collegati

Quando si pubblicano note contenenti collegamenti ad altre note o immagini incorporate, possono verificarsi collegamenti interrotti a meno che anche le note collegate non vengano pubblicate. **Obsidian Publish** aiuta a prevenire questo problema selezionando automaticamente i media collegati dalle note già scelte.

Per includere tutte le note collegate, seleziona **Aggiungi collegamenti** nella finestra di dialogo **Pubblica modifiche**.

Prima di pubblicare, controlla la selezione aggiornata per assicurarti che non includa dati che non sei pronto a pubblicare.

> [!tip] La funzione **Aggiungi collegamenti** rispetta tutte le esclusioni definite in [[#Ignorare i dati]].

## Selezionare automaticamente i dati da pubblicare

Imposta `publish: true` nelle [[Proprietà|Proprietà]] di una nota per includerla automaticamente nella pubblicazione come nota nuova o modificata.

Puoi anche selezionare automaticamente note e immagini collegate in cartelle specifiche aggiungendole come cartelle **Incluse**:

1. Nella **barra degli strumenti**, seleziona **Pubblica modifiche** ![[lucide-send.svg#icon]] oppure apri la [[Riquadro comandi|tavolozza dei comandi]] e digita **Publish: Publish changes...**.
2. Seleziona l'icona **Gestisci filtri di pubblicazione** ![[lucide-filter.svg#icon]].
3. Nella sezione **Cartelle incluse**, seleziona **Gestisci**.
4. Scegli le cartelle che desideri includere dal suggeritore.
5. La cartella viene aggiunta all'elenco delle incluse.
6. Seleziona **Fatto** al termine.

### Ignorare i dati

Per ignorare una nota in Obsidian Publish, imposta `publish: false` nelle [[Proprietà|Proprietà]] della nota. La nota non apparirà più nell'elenco delle note da pubblicare.

Puoi anche ignorare automaticamente note e immagini in cartelle specifiche aggiungendole come cartelle **Escluse**:

1. Nella **barra degli strumenti**, seleziona **Pubblica modifiche** ![[lucide-send.svg#icon]] oppure apri la [[Riquadro comandi|tavolozza dei comandi]] e digita **Publish: Publish changes...**.
2. Seleziona l'icona **Gestisci filtri di pubblicazione** ![[lucide-filter.svg#icon]].
3. Nella sezione **Cartelle escluse**, seleziona **Gestisci**.
4. Scegli le cartelle che desideri escludere dal suggeritore.
5. La cartella viene aggiunta all'elenco delle escluse.
6. Seleziona **Fatto** al termine.

> [!note] `publish: true` sovrascrive le cartelle escluse
> Se un file ha `publish: true`, verrà comunque pubblicato anche se si trova in una cartella o un filtro escluso. Questo perché `publish: true` offre un controllo più specifico.
