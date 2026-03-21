---
permalink: plugins/graph
publish: true
mobile: true
description: La vista grafo è un plugin principale che consente di visualizzare le relazioni tra le note nella cassaforte.
aliases:
  - Graph view
---
La vista grafo è un [[Plugin principali|plugin principale]] che consente di visualizzare le relazioni tra le note nella cassaforte.

Per aprire la vista grafo, fare clic su **Apri vista grafo** nella [[Barra multifunzione]].

- I cerchi rappresentano le note, o _nodi_.
- Le linee rappresentano i [[Collegamenti interni]] tra due nodi.

Più nodi fanno riferimento a un determinato nodo, più grande diventa.

Per interagire con le note nel grafo:

- Passare il mouse su ogni cerchio per evidenziare le connessioni di quella nota.
- Fare clic su una nota nel grafo per aprirla.
- Fare clic con il pulsante destro su una nota per aprire un menu contestuale con le azioni disponibili per quella nota.

Per navigare nel grafo:

- Ingrandire e ridurre lo zoom utilizzando la rotellina del mouse o i tasti `+` e `-`.
- Spostare il grafo trascinandolo con il cursore del mouse o utilizzando i tasti freccia.

È possibile tenere premuto Maiusc durante l'uso della tastiera per velocizzare i movimenti.

## Impostazioni

Per aprire le impostazioni del grafo, fare clic sull'icona dell'ingranaggio nell'angolo in alto a destra della vista grafo.

Fare clic su **Ripristina impostazioni predefinite** nell'angolo in alto a destra del riquadro delle impostazioni per annullare eventuali modifiche apportate.

### Filtri

Questa sezione controlla quali nodi mostrare nel grafo.

- **Cerca file** consente di filtrare le note in base a un termine di ricerca. Per informazioni su come scrivere termini di ricerca più avanzati, consultare [[Search]].
- **Etichetta** attiva o disattiva la visualizzazione delle etichette nel grafo.
- **Allegati** attiva o disattiva la visualizzazione degli allegati nel grafo.
- **Solo file esistenti** attiva o disattiva la visualizzazione delle sole note che esistono nella cassaforte. Poiché una nota non deve necessariamente esistere per poterla collegare, questa opzione può aiutare a limitare il grafo alle note effettivamente presenti nella cassaforte.
- **Orfani** attiva o disattiva la visualizzazione delle note senza alcun collegamento.

> [!info] File esclusi
> I file corrispondenti ai pattern dei [[Settings#File esclusi|File esclusi]] non appariranno nella vista grafo.

### Gruppi

Creare gruppi di note per distinguerle tra loro utilizzando i colori.

Per creare un nuovo gruppo:

1. Fare clic su **Nuovo gruppo segnalibri**.
2. Nella casella di ricerca, digitare un termine di ricerca per le note da aggiungere al gruppo.
3. Fare clic sul cerchio colorato per assegnare un colore al gruppo.

Per informazioni su come scrivere termini di ricerca più avanzati, consultare [[Search]].

### Aspetto

Questa sezione controlla come visualizzare nodi e collegamenti nel grafo.

- **Frecce** attiva o disattiva la visualizzazione della direzione di ogni collegamento.
- **Soglia dissolvenza testo** controlla la trasparenza del testo per il nome di ogni nota.
- **Dimensione nodo** controlla la dimensione del cerchio che rappresenta ogni nota.
- **Spessore linea** controlla la larghezza della linea per ogni collegamento.
- **Animazione** avvia un'[[#Avviare un'animazione time-lapse|animazione time-lapse]].

### Forze

Questa sezione controlla le forze che agiscono su ogni nodo nel grafo.

- **Forza di centratura** controlla la compattezza del grafo. Un valore più alto crea un grafo più circolare.
- **Forza di repulsione** controlla quanto un nodo spinge gli altri nodi lontano da sé.
- **Forza collegamenti** controlla la trazione su ogni collegamento. Se il collegamento fosse un elastico, la forza collegamenti controlla quanto l'elastico è teso o allentato.
- **Distanza collegamenti** controlla la lunghezza delle linee tra ogni nota.

## Avviare un'animazione time-lapse

Le note e gli allegati appaiono in ordine cronologico in base alla data di creazione.

![[obsidian-graph-view.png#interface]]

## Grafo locale

Per aprire una vista grafo locale, utilizzare il comando **Apri grafo locale**. Mentre la vista grafo mostra tutte le note nella cassaforte, una vista grafo locale mostra le note collegate alla nota attiva.

La vista grafo locale può utilizzare tutte le [[#Impostazioni]] disponibili per la vista grafo globale. Inoltre, è possibile modificare la profondità del grafo locale. Ogni livello di profondità mostrerà le note collegate alle note rivelate al livello di profondità precedente. Per controllare la profondità del grafo locale, utilizzare il cursore nella parte superiore del pannello Filtri del grafo locale.
