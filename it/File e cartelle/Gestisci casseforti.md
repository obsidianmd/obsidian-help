---
permalink: manage-vaults
aliases:
  - Manage vaults
---
Una **cassaforte** è una cartella nel tuo file system che contiene le tue note, gli [[Allegati|allegati]] e la [[configuration folder|cartella di configurazione]] con le impostazioni specifiche di Obsidian. Per ulteriori informazioni sulle casseforti, consulta [[How Obsidian stores data|Come Obsidian archivia i dati]].

Puoi gestire le tue casseforti utilizzando il **Selettore di casseforti**. Il *Profilo cassaforte* si apre la prima volta che avvii Obsidian.

Per aprire il selettore di casseforti da una cassaforte esistente, seleziona **Profilo cassaforte** ![[lucide-chevrons-up-down.svg#icon]] nella parte inferiore della [[Sidebar|barra laterale sinistra]]. Oppure, seleziona **Apri un altro vault** dalla [[command palette|tavolozza dei comandi]].

## Creare una nuova cassaforte

1. Sul tuo computer, apri Obsidian.
2. In basso a sinistra, seleziona il **Profilo cassaforte** ![[lucide-chevrons-up-down.svg#icon]].
3. Apparirà un menu contestuale. Seleziona **Gestisci vault...**.
3. A destra di **Crea nuovo vault**, seleziona **Crea**.
4. In **Nome vault**, inserisci il nome della tua cassaforte.
5. Fai clic su **Sfoglia** per selezionare dove verrà creata la nuova cassaforte.
6. Fai clic su **Crea**.

## Creare una cassaforte da una cartella esistente

1. Sul tuo computer, apri Obsidian.
2. In basso a sinistra, seleziona il **Profilo cassaforte** ![[lucide-chevrons-up-down.svg#icon]].
3. Apparirà un menu contestuale. Seleziona **Gestisci vault...**.
3. A destra di **Apri cartella come vault**, fai clic su **Apri**.
4. Nel browser dei file, seleziona la cartella che desideri utilizzare come cassaforte.
5. Fai clic su **Apri**.

> [!tip] Aprire una cassaforte da Obsidian Sync
> Se desideri aprire un caveau remoto utilizzando Obsidian Sync, consulta [[Set up Obsidian Sync|Configurare Obsidian Sync]].

## Rinominare una cassaforte

Poiché il nome della cassaforte e della cartella sottostante sono gli stessi, rinominare una cassaforte rinomina anche la cartella.

1. Sul tuo computer, apri Obsidian.
2. In basso a sinistra, seleziona il **Profilo cassaforte** ![[lucide-chevrons-up-down.svg#icon]].
3. Apparirà un menu contestuale. Seleziona **Gestisci vault...**.
4. Nell'elenco delle casseforti, seleziona **Altre opzioni** ![[lucide-more-horizontal.svg#icon]] accanto alla cassaforte che desideri rinominare.
5. Seleziona **Rinomina vault**.
6. Inserisci il nuovo nome per la cassaforte e premi `Invio`.

## Spostare una cassaforte in una cartella diversa

1. Sul tuo computer, apri Obsidian.
2. In basso a sinistra, seleziona il **Profilo cassaforte** ![[lucide-chevrons-up-down.svg#icon]].
3. Apparirà un menu contestuale. Seleziona **Gestisci vault...**.
4. Chiudi la finestra della cassaforte corrente, lasciando aperta la finestra **Gestisci casseforti**.
5. Nell'elenco delle casseforti, seleziona **Altre opzioni** ![[lucide-more-horizontal.svg#icon]] accanto alla cassaforte che desideri spostare.
6. Seleziona **Sposta vault**, quindi seleziona la nuova posizione.

Alcuni sistemi operativi non consentono di spostare la cassaforte con il Selettore di casseforti. In questi casi, dovrai spostare la cassaforte manualmente:

1. Chiudi Obsidian.
2. Sposta la cartella della cassaforte in una nuova posizione, evitando cartelle sincronizzate da altri servizi.
3. Riapri Obsidian.
4. Fai clic sull'icona **Profilo cassaforte** in basso a sinistra ![[lucide-chevrons-up-down.svg#icon]].
5. Dal menu a comparsa, seleziona **Gestisci vault...**.
6. Accanto a **Apri cartella come vault**, fai clic su **Apri**.
7. Naviga fino alla nuova cartella della cassaforte e selezionala.
8. Fai clic su **Apri**.
9. Verifica che il contenuto della cassaforte sia invariato. Se necessario, riabilita i plugin della community navigando su **[[Settings|Impostazioni]] → Plugin della comunità → Disattiva modalità con restrizioni**.

## Rimuovere una cassaforte

Rimuovere una cassaforte la rimuove solo dall'elenco delle casseforti.

1. Sul tuo computer, apri Obsidian.
2. In basso a sinistra, seleziona il **Profilo cassaforte** ![[lucide-chevrons-up-down.svg#icon]].
3. Apparirà un menu contestuale. Seleziona **Gestisci vault...**.
4. Nell'elenco delle casseforti, seleziona **Altre opzioni** ![[lucide-more-horizontal.svg#icon]] accanto alla cassaforte che desideri rimuovere.
5. Seleziona **Rimuovi dalla lista**.

## Trasferire le impostazioni a un'altra cassaforte

Per utilizzare le stesse impostazioni in un'altra cassaforte, usa il tuo file manager preferito (o il terminale) per copiare la cartella `.obsidian` dalla radice della cassaforte di origine alla radice della cassaforte di destinazione.

Potrebbe essere necessario riavviare Obsidian per applicare le modifiche.

> [!note] Dove si trova la cartella `.obsidian`?
> Per impostazione predefinita, la maggior parte dei sistemi operativi nasconde le cartelle che iniziano con un punto (`.`). Per ulteriori informazioni sulla cartella `.obsidian` e su come accedervi, consulta [[How Obsidian stores data#Impostazioni della cassaforte|impostazioni della cassaforte]] e [[Configuration folder|cartelle di configurazione]].
