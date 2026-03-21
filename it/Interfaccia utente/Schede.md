---
permalink: tabs
publish: true
mobile: true
description: Scopri come aprire, organizzare e gestire le schede in Obsidian, inclusi l'appuntamento, la sovrapposizione e le viste collegate.
aliases:
  - Tabs
---
Le schede in Obsidian funzionano in modo molto simile alle schede di altre app, come i browser web.

Puoi aprire quante schede desideri in Obsidian. Puoi anche disporre le schede per creare layout personalizzati che persistono fino alla prossima volta che apri l'app.

> [!note] Schede su mobile
> Su mobile, puoi gestire le schede aperte dal contatore delle schede nella [[App mobile#Barra di navigazione|Barra di navigazione]].

## Aprire una nuova scheda

Nella parte superiore della finestra dell'applicazione, accanto all'ultima scheda a destra, seleziona **Nuova scheda** ( ![[lucide-plus.svg#icon]] ). Oppure, usa una scorciatoia da tastiera:

- **Windows e Linux:** `Ctrl+t`
- **macOS:** `Cmd+t`

## Aprire un collegamento

Seleziona un collegamento in Obsidian per aprirlo nella scheda attiva.

Per aprire un collegamento in una nuova scheda, premi `Ctrl` (o `Cmd` su macOS) e seleziona il collegamento.

Di seguito sono riportati tutti i tasti modificatori che puoi usare per aprire i collegamenti in vari modi:

|Azione|MacOS|Windows/Linux|
|---|---|---|
|**Naviga**|_Nessuno_|_Nessuno_|
|**Nuova scheda**|`⌘` (+ `Shift` in modalità sorgente)|`Ctrl` (+ `Shift` in modalità sorgente)|
|**Nuovo gruppo di schede**|`⌘` `⌥`| `Ctrl` `Alt`|
|**Nuova finestra**|`⌘` `⌥` `Shift`|`Ctrl` `Alt` `Shift`|

## Organizzare schede e finestre

Ogni scheda appartiene a un _gruppo di schede_. Puoi trascinare e rilasciare le schede per riordinarle all'interno di un gruppo di schede, spostarle in un gruppo di schede diverso o creare un nuovo gruppo di schede. Su desktop, puoi trascinare le schede fuori dalla finestra per aprirle in una [[Finestre pop-out|finestra pop-out]] separata.

Le schede nelle barre laterali mostrano solo l'icona. Passa il mouse sull'icona per visualizzare un suggerimento con il titolo della scheda.

### Disporre le schede

Per cambiare l'ordine delle schede, trascina la scheda lungo le schede nel gruppo di schede.

Mentre trascini una scheda, le _zone di rilascio_—aree in cui puoi spostare la scheda—vengono evidenziate. La zona di rilascio determina dove inserire la scheda. Alcune schede possono trovarsi solo in una delle barre laterali.

### Dividere un gruppo di schede

Fai clic destro su una scheda e seleziona **Dividi a destra** o **Dividi sotto** per creare un nuovo gruppo di schede con quella scheda.

Puoi anche dividere un gruppo di schede trascinando una scheda nella parte inferiore di un'altra scheda.

### Ridimensionare un gruppo di schede

Per ridimensionare un gruppo di schede, posiziona il cursore su un bordo del gruppo di schede. Il bordo viene evidenziato quando può essere trascinato per ridimensionare.

Puoi ridimensionare le barre laterali in modo simile per creare più spazio per i gruppi di schede al centro.

### Spostare una scheda in una nuova finestra

**Trascina e rilascia:**

- Seleziona e trascina la scheda fuori dalla finestra dell'applicazione per aprirla in una nuova finestra.

**Tavolozza dei comandi:**

- Apri la tavolozza dei comandi e seleziona **Sposta pannello in nuova finestra**.

### Spostare una scheda in una finestra diversa

Per spostare una scheda in un'altra finestra esistente, trascina la scheda nella finestra in cui desideri spostarla.

### Appuntare una scheda

Per appuntare una scheda nell'editor principale, fai clic destro sulla scheda e seleziona **Appunta**. I collegamenti in una scheda appuntata si aprono sempre in una scheda separata.

Per sbloccare una scheda appuntata nell'editor principale, fai clic destro sulla scheda e seleziona **Sblocca**.

Per appuntare o sbloccare una scheda nella barra laterale, consulta [[Barra laterale#Appuntare le schede|appuntare le schede nella barra laterale]].

## Passare a una scheda diversa

Seleziona una scheda per passare ad essa. Oppure, usa una scorciatoia da tastiera:

| Passa a                         | MacOS            | Windows/Linux        |
|---------------------------------|------------------|----------------------|
| **Scheda successiva**           | `⌃`+`⇥`         | `Ctrl`+`Tab`         |
| **Scheda precedente**           | `⌃`+`⇧`+`⇥`    | `Ctrl`+`Shift`+`Tab` |
| **Prima scheda a sinistra**     | `⌘`+`1`          | `Ctrl`+`1`           |
| **Dalla 2ª all'8ª scheda**      | `⌘`+`2`..`8`     | `Ctrl`+`2`..`8`      |
| **Ultima scheda a destra**      | `⌘`+`9`          | `Ctrl`+`9`           |
| **Scheda chiusa di recente**    | `⌘`+`⇧`+`t`     | `Ctrl`+`Shift`+`t`   |

## Sovrapporre gruppi di schede

Puoi sovrapporre le schede per farle scorrere sopra altre schede nello stesso gruppo di schede.

Per sovrapporre le note, seleziona la freccia in basso nell'angolo superiore destro del gruppo di schede, quindi seleziona **Sovrapponi schede**.

![tab-stacks](https://user-images.githubusercontent.com/693981/188205363-0f24b2a5-3706-4a8c-b38b-7a66baa68ce6.gif)

La sovrapposizione delle schede è ispirata alle [note scorrevoli di Andy Matuschak](https://notes.andymatuschak.org/).

## Viste collegate

Le _viste collegate_ sono schede che fanno riferimento a una scheda diversa. Quando il contenuto della scheda di riferimento cambia, anche la vista collegata cambia.

Per le schede delle note, puoi usare i seguenti plugin come viste collegate:

- [[Vista grafo]] (locale)
- [[Riferimenti]]
- [[Struttura]]

Per aprire una vista collegata per una scheda nota:

1. Seleziona **Altre opzioni** ( ![[lucide-more-horizontal.svg#icon]] ) nell'angolo superiore destro della nota.
2. Sotto **Apri vista collegata**, seleziona la vista collegata che desideri aprire.

## Salvare i layout

Puoi salvare e ripristinare i layout delle finestre usando il plugin [[Aree di lavoro]].
