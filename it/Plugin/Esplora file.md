---
permalink: plugins/file-explorer
publish: true
mobile: true
description: Esplora file è un plugin principale che consente di gestire file e cartelle all'interno della cassaforte.
aliases:
  - File explorer
---
Esplora file è un [[Plugin principali|plugin principale]] che consente di gestire file e cartelle all'interno della cassaforte. È possibile sfogliare le note e altri [[Formati di file accettati|formati di file accettati]] nella cassaforte ed eseguire molte operazioni comuni sui file:

- Creare, eliminare e rinominare file e cartelle.
- Spostare file e cartelle con il trascinamento.
- Utilizzare il [[#Utilizzare il menu contestuale|menu contestuale]] per accedere a tutte le operazioni disponibili.

> [!tip]- Trascinare e rilasciare file
> È possibile trascinare un file dall'Esplora file nella nota per creare un collegamento ad esso, oppure trascinare un file in una cartella nell'Esplora file per copiarlo.

## Creare una nuova nota

Per creare una nuova nota nella posizione predefinita per le nuove note:

1. Selezionare **Nuova nota** ![[lucide-pen-line.svg#icon]] nella parte superiore dell'Esplora file.
2. Digitare il nome della nota e premere `Invio`.

> [!tip]- Modificare la posizione predefinita
> È possibile modificare la posizione predefinita per le nuove note in **[[Impostazioni|Impostazioni]] → [[Impostazioni#File e collegamenti|File e collegamenti]] → [[Impostazioni#Posizione predefinita delle note|Posizione predefinita delle note]]**.

Per creare una nuova nota in una cartella specifica:

1. Fare clic con il tasto destro sulla cartella e poi selezionare **Nuova nota**.
2. Digitare il nome della nota e premere `Invio`.

## Creare una nuova cartella

Per creare una nuova cartella nella radice della cassaforte:

1. Selezionare **Nuova cartella** ![[lucide-folder-plus.svg#icon]] nella parte superiore dell'Esplora file.
2. Digitare il nome della cartella e premere `Invio`.

Per creare una sottocartella:

1. Fare clic con il tasto destro sulla cartella in cui si desidera creare la sottocartella, quindi selezionare **Nuova cartella**.
2. Digitare il nome della cartella e premere `Invio`.

## Modificare l'ordinamento

Per modificare l'ordinamento dei file:

1.  Selezionare **Ordinamento** ![[lucide-arrow-up-narrow-wide.svg#icon]] nella parte superiore dell'Esplora file.
2. Scegliere come ordinare i file. È possibile ordinare in modo crescente o decrescente per nome del file, data modifica o data creazione.

## Rivelare automaticamente il file attivo

Quando si apre una nota, l'Esplora file può scorrere automaticamente fino a quella nota ed evidenziarla nell'albero delle cartelle. Questo aiuta a tenere traccia della posizione della nota attiva all'interno della cassaforte.

Per attivare o disattivare la rivelazione automatica:

- Selezionare **Rivela automaticamente il file attivo** ![[lucide-gallery-vertical.svg#icon]] nella parte superiore dell'Esplora file.

Quando abilitato, l'Esplora file seguirà e rivelerà automaticamente la nota attiva.

## Espandere o comprimere tutte le cartelle

È possibile espandere o comprimere tutte le cartelle nell'Esplora file contemporaneamente.

Per espandere tutte le cartelle:

- Selezionare **Espandi tutto** ![[lucide-chevrons-up-down.svg#icon]] nella parte superiore dell'Esplora file.

Per comprimere tutte le cartelle:

- Selezionare **Comprimi tutto** ![[lucide-chevrons-down-up.svg#icon]] nella parte superiore dell'Esplora file.

## Eliminare un file o una cartella

1. Fare clic con il tasto destro sul file da eliminare, quindi selezionare **Elimina**.
2. Se viene richiesto di confermare l'eliminazione del file, selezionare **Elimina**.

Per ulteriori informazioni, consultare [[Gestisci le note#Eliminare una nota|Eliminare una nota]].

## Rinominare un file o una cartella

1. Fare clic con il tasto destro sul file da rinominare, quindi selezionare **Rinomina**.
2. Digitare il nuovo nome e premere `Invio`.

Per ulteriori informazioni, consultare [[Gestisci le note#Rinominare una nota|Rinominare una nota]].

## Spostare un file o una cartella

Per spostare un file o una cartella, è possibile utilizzare il trascinamento o il menu contestuale.

**Trascinamento:**

- Trascinare un file o una cartella nella cartella di destinazione.
- Con `Alt-Clic` (Windows/Linux) o `Opt-Clic` (macOS) è possibile selezionare più file singoli e trascinarli in un'altra cartella. Se sono tutti in fila, è possibile utilizzare `Shift-Clic`.

**Menu contestuale:**

1. Fare clic con il tasto destro su un file, quindi selezionare **Sposta file in...**.
2. Cercare il nome della cartella in cui spostare il file, quindi selezionarla dall'elenco.

## Utilizzare il menu contestuale

Il menu contestuale elenca le azioni disponibili per un file o una cartella. Molte delle voci relative ai file appaiono anche nel [[Menu Altre opzioni]].

### Desktop

Fare clic con il tasto destro su un file o una cartella nell'Esplora file.

**File**

- **Apri in nuova scheda** e **Apri a destra** aprono il file in una nuova scheda o in un pannello a destra.
- **Apri in nuova finestra** apre il file nella propria finestra. Vedi [[Finestre pop-out]].
- **Duplica** crea una copia del file.
- **Sposta file in...** sposta il file in un'altra cartella. Vedi [[#Spostare un file o una cartella]].
- **Segnalibro...** aggiunge il file ai segnalibri. Richiede il plugin Segnalibri. Vedi [[Segnalibri#Aggiungere un segnalibro]].
- **Unisci intero file con...** combina la nota con un'altra. Richiede il plugin Gestione note. Vedi [[Gestione note#Unire le note]].
- **Pubblica file attuale** pubblica la nota sul sito. Richiede Obsidian Publish. Vedi [[Introduzione a Obsidian Publish|Publish]].
- **Copia percorso** copia la posizione del file come URL Obsidian, dalla cartella del vault o dalla radice di sistema.
- **Apri cronologia delle versioni** mostra le versioni precedenti del file. Richiede un abbonamento attivo a Obsidian Sync. Vedi [[Cronologia delle versioni]].
- **Apri con l'app predefinita** apre il file nell'app che il computer utilizza per quel tipo di file.
- **Mostra nel file system** mostra il file nel gestore di file. Su macOS la voce è **Mostra nel Finder**. Su Windows e Linux è **Mostra in Esplora file di sistema**.
- **Rinomina...** modifica il nome del file. Vedi [[#Rinominare un file o una cartella]].
- **Elimina** elimina il file. Vedi [[#Eliminare un file o una cartella]].

**Cartelle**

- **Nuova nota** e **Nuova cartella** creano una nota o una cartella all'interno della cartella. Vedi [[#Creare una nuova nota]] e [[#Creare una nuova cartella]].
- **Nuova lavagna** crea una lavagna nella cartella. Vedi [[Lavagna]].
- **Nuova Base** crea una base nella cartella. Vedi [[Introduzione alle Basi]].
- **Duplica** crea una copia della cartella.
- **Sposta cartella in...** sposta la cartella in un'altra cartella.
- **Cerca nella cartella** cerca solo i file nella cartella. Vedi [[Ricerca]].
- **Segnalibro...** aggiunge la cartella ai segnalibri.
- **Copia percorso** copia la posizione della cartella dalla cartella del vault o dalla radice di sistema.
- **Mostra nel file system** mostra la cartella nel gestore di file, con la stessa dicitura usata per i file.
- **Rinomina...** e **Elimina** modificano il nome della cartella o eliminano la cartella.

### Mobile

Tenere premuto su una cartella nell'Esplora file. Il menu contiene le stesse voci del menu cartelle su desktop, tranne **Segnalibro...** e **Mostra nel file system**.
