---
permalink: plugins/canvas
aliases:
  - Canvas
---
Canvas è un [[Plugin principali|plugin principale]] per prendere appunti in modo visuale. Ti offre spazio infinito per disporre le note e collegarle ad altre note, allegati e pagine web.

Prendere appunti visivamente ti aiuta a dare un senso alle tue note organizzandole in uno spazio 2D. Collega le note con linee e raggruppa quelle correlate per comprendere meglio le relazioni tra di esse.

I dati Canvas che crei in Obsidian vengono salvati come file `.canvas` utilizzando il formato di file aperto [JSON Canvas](https://jsoncanvas.org/).

## Creare una nuova lavagna

Per iniziare a usare Canvas, devi prima creare un file che contenga la tua lavagna. Puoi creare una nuova lavagna utilizzando i seguenti metodi.

**Tavolozza dei comandi:**

1. Apri la [[Riquadro comandi|tavolozza dei comandi]].
2. Seleziona **Canvas: Crea nuova lavagna** per creare una lavagna nella stessa cartella del file attivo.

**Esplora file:**

- Nell'[[Esplora file|esplora file]], fai clic destro sulla cartella in cui vuoi creare la lavagna.
- Seleziona **Nuova lavagna**.

**Barra degli strumenti:**

- Nella barra degli strumenti verticale, seleziona **Crea nuova lavagna** ![[lucide-layout-dashboard.svg#icon]] per creare una lavagna nella stessa cartella del file attivo.

> [!note] L'estensione .canvas
> Obsidian memorizza i dati della tua lavagna come file `.canvas` utilizzando un formato di file aperto chiamato [JSON Canvas](https://jsoncanvas.org/).

## Aggiungere schede

Puoi trascinare file nella tua lavagna da Obsidian o da altre applicazioni. Ad esempio, file Markdown, immagini, audio, PDF o anche tipi di file non riconosciuti.

### Aggiungere schede di testo

Puoi aggiungere schede di solo testo che non fanno riferimento a un file. Puoi usare Markdown, collegamenti e blocchi di codice proprio come in una nota.

Per aggiungere una nuova scheda di testo alla tua lavagna:

- Seleziona o trascina l'icona del file vuoto nella parte inferiore della lavagna.

Puoi anche aggiungere schede di testo facendo doppio clic sulla lavagna.

Per convertire una scheda di testo in un file:

1. Fai clic destro sulla scheda di testo e poi seleziona **Converti in file...**.
2. Inserisci il nome della nota e poi seleziona **Salva**.

> [!note] Nota
> Le schede di solo testo non compaiono nei [[Riferimenti|Riferimenti]]. Per farle comparire, devi convertirle in un file.

### Aggiungere schede da note

Per aggiungere una nota dalla tua cassaforte alla lavagna:

1. Seleziona o trascina l'icona del documento nella parte inferiore della lavagna.
2. Seleziona la nota che vuoi aggiungere.

Puoi anche aggiungere note dal menu contestuale della lavagna:

1. Fai clic destro sulla lavagna e poi seleziona **Aggiungi nota dal vault**.
2. Seleziona la nota che vuoi aggiungere.

Oppure, puoi aggiungerle alla lavagna trascinando il file dall'[[Esplora file|esplora file]].

### Aggiungere schede da media

Per aggiungere media dalla tua cassaforte alla lavagna:

1. Seleziona o trascina l'icona del file immagine nella parte inferiore della lavagna.
2. Seleziona il file multimediale che vuoi aggiungere.

Puoi anche aggiungere media dal menu contestuale della lavagna:

1. Fai clic destro sulla lavagna e poi seleziona **Aggiungi file multimediale dal vault**.
2. Seleziona il file multimediale che vuoi aggiungere.

Oppure, puoi aggiungerli alla lavagna trascinando il file dall'[[Esplora file|esplora file]].

### Aggiungere schede da pagine web

Per incorporare una pagina web nella tua lavagna:

1. Fai clic destro sulla lavagna e poi seleziona **Aggiungi pagina web**.
2. Inserisci l'URL della pagina web e poi seleziona **Salva**.

Puoi anche selezionare un URL nel tuo browser e poi trascinarlo nella lavagna per incorporarlo in una scheda.

Per aprire la pagina web nel tuo browser, premi `Ctrl` (o `Cmd` su macOS) e seleziona l'etichetta della scheda. Oppure, fai clic destro sulla scheda e seleziona **Apri nel browser**.

### Aggiungere schede da cartelle

Trascina una cartella dall'esplora file per aggiungere tutti i file di quella cartella alla lavagna.

### Modificare una scheda

Fai doppio clic su una scheda di testo o nota per iniziare a modificarla. Fai clic fuori dalla scheda per interrompere la modifica. Puoi anche premere `Escape` per interrompere la modifica di una scheda.

Puoi anche modificare una scheda facendo clic destro su di essa e selezionando **Modifica**.

### Eliminare una scheda

Rimuovi le schede selezionate facendo clic destro su una qualsiasi di esse, e poi selezionando **Elimina**. Oppure, premi `Backspace` (o `Delete` su macOS).

Puoi anche selezionare **Rimuovi** ![[lucide-trash-2.svg#icon]] nei controlli di selezione sopra la tua selezione.

### Sostituire le schede

Puoi sostituire una scheda nota o media con un'altra scheda dello stesso tipo.

Per sostituire una scheda nota:

1. Fai clic destro sulla scheda che vuoi sostituire.
2. Seleziona **Sostituisci file**.
3. Seleziona la nota con cui vuoi sostituirla.

## Selezionare le schede

Seleziona le schede nella lavagna facendo clic su di esse. Puoi selezionare più schede trascinando una selezione intorno ad esse.

Puoi anche aggiungere e rimuovere schede da una selezione esistente premendo `Shift` e selezionandole.

Premi `Ctrl+a` (o `Cmd+a` su macOS) per selezionare tutte le schede nella lavagna.

Per scorrere il contenuto di una scheda, devi prima selezionarla.

### Disporre le schede

Trascina una scheda selezionata per spostarla.

Premi `Alt` (o `Option` su macOS) e trascina per duplicare la selezione.

Puoi premere `Shift` mentre trascini per spostare in una sola direzione.

Premi `Space` mentre sposti una selezione per disattivare l'aggancio alla griglia.

Selezionando una scheda la si porta in primo piano.

### Ridimensionare una scheda

Trascina uno qualsiasi dei bordi di una scheda per ridimensionarla.

Puoi premere `Space` durante il ridimensionamento per disattivare l'aggancio alla griglia.

Per mantenere le proporzioni durante il ridimensionamento, premi `Shift` mentre ridimensioni.

## Collegare le schede

Disegna linee tra le schede per creare relazioni tra di esse. Usa colori ed etichette per descrivere come sono correlate tra loro.

### Collegare due schede

Per collegare due schede con una linea direzionale:

1. Passa il cursore su uno dei bordi di una scheda finché non vedi un cerchio pieno.
2. Trascina il cerchio fino al bordo di un'altra scheda per collegarle.

> [!tip] Suggerimento
> Se trascini la linea senza collegarla a un'altra scheda, puoi poi aggiungere la scheda a cui vuoi collegarla.

### Scollegare due schede

Per rimuovere la connessione tra due schede:

1. Passa il cursore su una linea di connessione finché non appaiono due piccoli cerchi sulla linea.
2. Trascina uno dei cerchi lontano dalla scheda senza collegarlo a un'altra.

Puoi anche scollegare due schede facendo clic destro sulla linea tra di esse, e poi selezionando **Rimuovi**. Oppure, selezionando la linea e poi premendo `Backspace` (o `Delete` su macOS).

### Collegare una scheda a una scheda diversa

Per spostare una delle estremità di una linea di connessione:

1. Passa il cursore su una linea di connessione finché non appaiono due piccoli cerchi sulla linea.
2. Trascina il cerchio sull'estremità che vuoi ricollegare, verso un'altra scheda.

### Navigare una connessione

Se due schede collegate sono distanti tra loro, puoi navigare verso la sorgente o la destinazione della connessione facendo clic destro sulla linea e poi selezionando **Vai alla destinazione** o **Vai alla sorgente**.

### Aggiungere un'etichetta a una connessione

Puoi aggiungere un'etichetta a una linea per descrivere la relazione tra due schede.

Per etichettare una connessione:

1. Fai doppio clic sulla linea.
2. Inserisci l'etichetta e poi premi `Escape` o fai clic in un punto qualsiasi della lavagna.

Puoi anche etichettare una connessione selezionandola e poi selezionando **Modifica etichetta** dai controlli di selezione.

Per modificare l'etichetta di una connessione, fai doppio clic sulla linea, oppure fai clic destro sulla linea e poi seleziona **Modifica etichetta**.

### Cambiare il colore di una scheda o connessione

1. Seleziona le schede o le connessioni a cui vuoi assegnare un colore.
2. Nei controlli di selezione, seleziona **Imposta colore** ![[lucide-palette.svg#icon]].
3. Seleziona un colore.

## Raggruppare le schede

### Raggruppare le schede selezionate

Per creare un gruppo vuoto:

- Fai clic destro sulla lavagna e poi seleziona **Crea gruppo**.

Per raggruppare schede correlate:

1. Seleziona le schede.
2. Fai clic destro su una qualsiasi delle schede selezionate e poi seleziona **Crea gruppo**.

**Rinominare un gruppo:** Fai doppio clic sul nome del gruppo per modificarlo, e poi premi `Enter` per salvare.

## Navigare nella lavagna

Man mano che aggiungi più schede alla tua lavagna, vorrai capire come navigare nella lavagna per visualizzarne una parte. Scopri come effettuare panoramiche e zoom per spostarti nella lavagna con facilità.

### Panoramica della lavagna

Per spostare la lavagna verticalmente e orizzontalmente, operazione nota anche come _panoramica_, puoi utilizzare uno qualsiasi dei seguenti approcci:

- Premi `Space` e trascina la lavagna.
- Trascina la lavagna usando il pulsante centrale del mouse.
- Scorri con il mouse per la panoramica verticale, e premi `Shift` mentre scorri per la panoramica orizzontale.

### Zoom della lavagna

Per fare lo zoom della lavagna, premi `Space` o `Ctrl` (o `Cmd` su macOS) e scorri con la rotella del mouse. Oppure, seleziona **Ingrandisci** ![[lucide-plus.svg#icon]] e **Riduci zoom** ![[lucide-minus.svg#icon]] dai controlli zoom nell'angolo in alto a destra.

#### Adatta alla finestra

Per fare lo zoom della lavagna in modo che ogni elemento sia visibile, seleziona **Adatta alla finestra** ![[lucide-maximize.svg#icon]]. Oppure, usa la scorciatoia da tastiera `Shift+1`.

#### Zoom selezione

Per fare lo zoom della lavagna in modo che tutti gli elementi selezionati siano visibili, fai clic destro su una scheda selezionata e poi seleziona **Zoom selezione**. Oppure, usa una scorciatoia da tastiera premendo `Shift+2`.

#### Reimposta zoom

Per riportare il livello di zoom al valore predefinito, seleziona **Reimposta zoom** nei controlli zoom nell'angolo in alto a destra.

## Suggerimenti avanzati

Abbiamo realizzato alcuni brevi video per dimostrare alcuni casi d'uso avanzati di Canvas.

Puoi [consultare tutti i 72 suggerimenti qui](https://obsidian.md/it/canvas#protips). Tieni presente che i video dei suggerimenti sono visibili solo su desktop.
