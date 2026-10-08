---
permalink: plugins/canvas
aliases:
  - Canvas
mobile: true
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

Per mostrare solo una parte di una nota in una scheda, fai clic destro sulla scheda e seleziona **Restringi all'intestazione...** o **Restringi al blocco...**. Poi scegli l'intestazione o il blocco.

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

Per aprire la pagina web nel tuo browser, premi `Ctrl` (o `Cmd` su macOS) e seleziona l'etichetta della scheda. Oppure, fai clic destro sulla scheda e seleziona **Apri collegamento esterno**.

Fai clic destro su una scheda di pagina web per ulteriori opzioni.

- **Copia URL** copia l'indirizzo della pagina web.
- **Cambia URL...** cambia l'indirizzo mostrato dalla scheda.
- **Ricarica pagina** carica nuovamente la pagina web.

### Aggiungere schede da basi

Per mostrare una [[Introduzione a Base|base]] nella tua lavagna, trascina il file base dall'esplora file nella lavagna. La scheda mostra la base.

Una scheda base mostra la vista predefinita della base. Per mostrare una vista diversa:

1. Fai clic destro sulla scheda e poi seleziona **Appunta vista...**.
2. Seleziona la vista desiderata.

Per tornare alla vista predefinita, seleziona **Appunta vista...** di nuovo, e poi seleziona **Mostra vista predefinita**.

### Aggiungere schede da cartelle

Trascina una cartella dall'esplora file per aggiungere tutti i file di quella cartella alla lavagna.

### Modificare una scheda

Fai doppio clic su una scheda di testo o nota per iniziare a modificarla. Fai clic fuori dalla scheda per interrompere la modifica. Puoi anche premere `Escape` per interrompere la modifica di una scheda.

Puoi anche modificare una scheda facendo clic destro su di essa e selezionando **Modifica**. Oppure, seleziona la scheda e poi seleziona **Modifica** ![[lucide-square-pen.svg#icon]] nei controlli di selezione.

### Eliminare una scheda

Rimuovi le schede selezionate facendo clic destro su una qualsiasi di esse, e poi selezionando **Rimuovi**. Oppure, premi `Backspace` (o `Delete` su macOS).

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

### Allineare e disporre le schede

Per allineare diverse schede, seleziona due o più schede. Nei controlli di selezione, seleziona **Allinea**, e poi scegli un'opzione.

- **Allinea a sinistra**, **Allinea al centro** e **Allinea a destra** allineano le schede lungo una linea verticale.
- **Allinea in alto**, **Allinea in mezzo** e **Allinea in basso** allineano le schede lungo una linea orizzontale.
- **Disponi in fila**, **Disponi in colonna** e **Disponi in griglia** spostano le schede in quel layout.
- **Distribuisci in orizzontale** e **Distribuisci in verticale** distribuiscono le schede in modo uniforme.
- **Giustifica in orizzontale** e **Giustifica in verticale** ridimensionano ogni scheda per adattarla alla larghezza o altezza totale della selezione.

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

Se due schede collegate sono distanti tra loro, puoi saltare alla scheda all'altra estremità della connessione. Fai clic destro sulla linea vicino a un'estremità, e poi seleziona **Segui connessione**. La lavagna si sposta verso la scheda all'estremità opposta.

### Aggiungere un'etichetta a una connessione

Puoi aggiungere un'etichetta a una linea per descrivere la relazione tra due schede.

Per etichettare una connessione:

1. Fai doppio clic sulla linea.
2. Inserisci l'etichetta e poi premi `Escape` o fai clic in un punto qualsiasi della lavagna.

Puoi anche etichettare una connessione selezionandola e poi selezionando **Modifica etichetta** dai controlli di selezione.

Per modificare l'etichetta di una connessione, fai doppio clic sulla linea, oppure fai clic destro sulla linea e poi seleziona **Modifica etichetta**.

Per rimuovere un'etichetta, seleziona la connessione e poi seleziona **Rimuovi etichetta** nei controlli di selezione.

### Cambiare la direzione di una connessione

Per impostazione predefinita, una connessione ha una freccia all'estremità che punta verso la seconda scheda. Per cambiarla:

1. Seleziona la connessione.
2. Nei controlli di selezione, seleziona **Direzione linea**.
3. Scegli **Senza direzione**, **Unidirezionale** o **Bidirezionale**.

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

### Aggiungere uno sfondo a un gruppo

Puoi mostrare un'immagine dietro le schede di un gruppo.

1. Seleziona il gruppo.
2. Nei controlli di selezione, seleziona **Imposta sfondo**.
3. Scegli un'immagine dal tuo vault.

Per cambiare lo sfondo, seleziona il gruppo e poi seleziona **Modifica sfondo**.

- **Sostituisci sfondo** sceglie un'immagine diversa.
- **Rimuovi sfondo** rimuove l'immagine.
- **Copertina** fa sì che l'immagine riempia il gruppo.
- **Mantieni proporzioni** mantiene le proporzioni dell'immagine.
- **Ripeti** affianca l'immagine nel gruppo.

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


### Saltare a un gruppo

Per spostarti direttamente a un gruppo in una lavagna grande, apri il riquadro comandi e seleziona **Canvas: Salta al gruppo**. Apparirà un elenco dei gruppi nella tua lavagna. Seleziona il gruppo a cui vuoi andare, e la lavagna si centrerà su di esso.

## Impostazioni della lavagna

Seleziona **Impostazioni lavagna** ![[lucide-settings.svg#icon]] sopra i controlli della lavagna per cambiare il comportamento della tua lavagna.

- **Aggancia alla griglia** aggancia le schede alla griglia di sfondo quando le sposti e le ridimensioni.
- **Aggancia agli oggetti** aggancia le schede agli oggetti vicini quando le sposti e le ridimensioni.
- **Sola lettura** impedisce le modifiche alla lavagna.

## Esportare una lavagna come immagine

Puoi esportare una lavagna come immagine PNG su desktop. L'esportazione di un'immagine non è disponibile nell'app Obsidian su mobile.

1. Apri la lavagna che vuoi esportare.
2. Apri il riquadro comandi e seleziona **Canvas: Esporta come immagine**.
3. Scegli le tue impostazioni.
    - **Area visibile** imposta cosa esportare. Seleziona **Tutta la lavagna** per l'intera lavagna, o **Solo area visibile** per la parte attualmente visibile.
    - **Zoom** imposta la qualità dell'immagine. Uno zoom maggiore produce un'immagine più grande e nitida. La finestra di dialogo mostra la dimensione stimata dell'immagine.
    - **Mostra logo** aggiunge il logo di Obsidian in basso a sinistra. Questa opzione è attiva per impostazione predefinita.
    - **Modalità privacy** nasconde tutto il testo sulla lavagna. Questa opzione è disattivata per impostazione predefinita.
4. Seleziona **Salva**.
5. Scegli dove salvare il file. Il nome del file è per impostazione predefinita il nome della tua lavagna, con l'estensione `.png`.

Non è possibile esportare una lavagna vuota.

## Annulla e ripeti

Per annullare l'ultima modifica, seleziona **Annulla** nei controlli della lavagna sul lato destro della lavagna. Oppure, premi `Ctrl+Z` (Windows e Linux) o `Command+Z` (macOS).

Per ripetere una modifica, seleziona **Ripeti**. Oppure, premi `Ctrl+Y` o `Ctrl+Shift+Z` (Windows e Linux), o `Command+Y` o `Command+Shift+Z` (macOS).

## Aiuto lavagna

Su desktop, seleziona **Aiuto lavagna** ![[lucide-help-circle.svg#icon]] sotto i controlli della lavagna per visualizzare un elenco delle scorciatoie per panoramica, zoom, selezione e spostamento delle schede.

## Incorporare una lavagna

Puoi incorporare una lavagna in una nota utilizzando la sintassi di incorporamento standard. Per maggiori informazioni, consulta [[Incorporare file#Embed a canvas in a note|Incorporare una lavagna in una nota]].

## Usare Canvas su mobile

Quando apri una lavagna su un telefono o tablet, Obsidian mostra tre suggerimenti.

- **Trascina per la panoramica**
- **Avvicina le dita per lo zoom**
- **Tocca e tieni premuto per aggiungere / spostare / selezionare**

### Aprire il menu della lavagna

Tocca e tieni premuto su un'area vuota della lavagna. Il menu contiene le seguenti voci.

- **Aggiungi annotazione** aggiunge una scheda di testo.
- **Aggiungi nota dal vault** aggiunge una nota dal tuo vault.
- **Aggiungi file multimediale dal vault** aggiunge media dal tuo vault.
- **Aggiungi pagina web** incorpora una pagina web.
- **Crea gruppo** crea un gruppo vuoto.
- **Aggancia alla griglia**, **Aggancia agli oggetti** e **Sola lettura** sono le stesse opzioni presenti in **Impostazioni lavagna**.

### Aggiungere schede

Puoi aggiungere schede dal menu della lavagna. Puoi anche selezionare un'icona nella parte inferiore della lavagna.

- L'icona del file vuoto aggiunge una scheda di testo.
- L'icona del documento aggiunge una nota dal tuo vault.
- L'icona dell'immagine aggiunge media dal tuo vault.

### Lavorare con una scheda selezionata

Tocca una scheda per selezionarla. Apparirà una barra degli strumenti sopra la scheda.

- **Rimuovi** ![[lucide-trash-2.svg#icon]] elimina la scheda.
- **Imposta colore** ![[lucide-palette.svg#icon]] cambia il colore della scheda.
- **Zoom selezione** fa lo zoom della lavagna sulla scheda.
- **Modifica** ![[lucide-square-pen.svg#icon]] modifica la scheda.

### Spostare una scheda

1. Tocca la scheda per selezionarla.
2. Tocca e tieni premuto sulla scheda selezionata, e poi trascinala nella nuova posizione.

### Ridimensionare una scheda

1. Tocca la scheda per selezionarla.
2. Trascina i lati della scheda per ingrandirla o rimpicciolirla.

### Aprire il menu della scheda

Tocca e tieni premuto su una scheda. Il menu contiene le seguenti voci.

- **Zoom selezione** fa lo zoom della lavagna sulla scheda.
- **Modifica** modifica la scheda.
- **Converti in file...** converte una scheda di testo in una nota.
- **Duplica** crea una copia della scheda.
- **Rimuovi** elimina la scheda.

### Modificare una scheda

Per modificare una scheda di testo o una scheda nota, usa uno dei due metodi.

- Tocca la scheda per selezionarla, e poi toccala due volte. Si apre la tastiera.
- Tocca la scheda per selezionarla, e poi seleziona **Modifica** ![[lucide-square-pen.svg#icon]] nella barra degli strumenti sopra la scheda.

### Etichettare una connessione

1. Tocca la linea per selezionarla.
2. Nella barra degli strumenti, seleziona **Modifica etichetta** ![[lucide-square-pen.svg#icon]]. Si apre la tastiera.
3. Inserisci l'etichetta.

Per rimuovere un'etichetta, tocca la linea e poi seleziona **Rimuovi etichetta** nella barra degli strumenti.

### Cambiare la direzione di una connessione

1. Tocca la linea per selezionarla.
2. Nella barra degli strumenti, seleziona **Direzione linea**.
3. Scegli **Senza direzione**, **Unidirezionale** o **Bidirezionale**.

### Aprire il menu della linea

Tocca e tieni premuto su una linea che collega due schede. Il menu contiene le seguenti voci.

- **Modifica etichetta** aggiunge o modifica l'etichetta della linea.
- **Segui connessione** sposta la lavagna verso la scheda all'estremità opposta della linea.
- **Rimuovi** elimina la connessione.

### Collegare le schede

1. Tocca una scheda per selezionarla.
2. Trascina uno dei cerchi sui suoi bordi verso un'altra scheda.

Se trascini la linea e la rilasci in un'area vuota, si apre un menu con **Aggiungi annotazione** e **Aggiungi nota dal vault**. Seleziona una voce per aggiungere una scheda all'estremità della linea.

### Scollegare le schede

Per rimuovere una connessione, usa uno dei due metodi.

- Tocca la linea, e poi seleziona **Rimuovi** ![[lucide-trash-2.svg#icon]].
- Trascina l'estremità con la freccia della linea verso la scheda da cui è partita. La linea scomparirà.

### Raggruppare le schede

Per creare un gruppo:

1. Tocca e tieni premuto su un'area vuota della lavagna.
2. Seleziona **Crea gruppo**.
3. Trascina i bordi del gruppo per cambiarne la dimensione.

Per aggiungere schede a un gruppo, trascinale nell'area del gruppo. Quando sposti il gruppo, le schede al suo interno si spostano insieme.

Per rinominare un gruppo, tocca due volte il suo nome. Si apre la tastiera. Inserisci il nuovo nome.

### Controlli della lavagna

I controlli sul lato destro della lavagna cambiano la vista e le impostazioni.

- **Ingrandisci** e **Riduci zoom** cambiano il livello di zoom.
- **Reimposta zoom** riporta la lavagna al livello di zoom predefinito.
- **Adatta alla finestra** mostra tutte le schede nella lavagna.
- **Annulla** e **Ripeti** annullano o ripetono l'ultima modifica.
- **Impostazioni lavagna** contiene le opzioni **Aggancia alla griglia**, **Aggancia agli oggetti** e **Sola lettura**.

## Suggerimenti avanzati

Abbiamo realizzato alcuni brevi video per dimostrare alcuni casi d'uso avanzati di Canvas.

Puoi [consultare tutti i 72 suggerimenti qui](https://obsidian.md/canvas#protips). Tieni presente che i video dei suggerimenti sono visibili solo su desktop.
