---
permalink: bases/views/kanban
---
Kanban è un tipo di [[Viste|vista]] utilizzabile in [[Introduzione a Base|Base]].

Seleziona ![[lucide-kanban-square.svg#icon]] **Kanban** dal menu delle viste per visualizzare i file come schede organizzate in colonne. Ogni colonna rappresenta un valore della proprietà utilizzata per raggruppare i risultati.


> [!note] Richiede Obsidian 1.14+
> Le viste Kanban sono disponibili in Obsidian 1.14 e versioni successive.


## Raggruppare le schede in colonne

Una vista Kanban richiede una proprietà per raggruppare i risultati.

1. Seleziona **Gruppo** nella barra degli strumenti. Sui telefoni, seleziona **Visualizzazione → Gruppo**.
2. In **Raggruppa per**, scegli una proprietà.

I file senza un valore per la proprietà selezionata appaiono nella colonna **Nessun valore**.

> [!info] 
> Se si raggruppa per formula o per una proprietà del file diversa da `file.folder`, non è possibile spostare le schede o le colonne, né creare note dalle colonne. È comunque possibile [[Viste#Riordinare, nascondere e aggiungere gruppi|gestire l'ordine e la visibilità dei gruppi]] nel menu **Gruppo**.

## Lavorare con schede e colonne

- Trascina una scheda in un'altra colonna per aggiornare la proprietà raggruppata in quella nota. Solo le note Markdown possono essere spostate tra le colonne, tranne quando si raggruppa per `file.folder`, dove spostare una scheda sposta il file in quella cartella.
- Seleziona l'icona più nell'intestazione di una colonna o ![[lucide-plus.svg#icon]] **Nuovo** in fondo a una colonna per creare una nota con il valore di quella colonna.
- Trascina l'intestazione di una colonna per cambiare l'ordine delle colonne. Per ripristinare l'ordine automatico, apri **Gruppo** e scegli un ordinamento automatico invece di **Manuale**.
- Usa **Gruppo** per [[Viste#Riordinare, nascondere e aggiungere gruppi|riordinare, nascondere o aggiungere colonne]].
- Usa il menu ![[lucide-list.svg#icon]] **Proprietà** per scegliere le proprietà mostrate su ogni scheda. La prima proprietà viene visualizzata come titolo della scheda.

## Impostazioni

Le impostazioni della vista Kanban possono essere configurate in [[Viste#Impostazioni della vista|Impostazioni della vista]].

- Nascondi colonne vuote
- Larghezza colonna
- Proprietà immagine
- Adattamento immagine
- Proporzioni immagine

### Nascondi colonne vuote

Nasconde le colonne che non contengono schede.

### Larghezza colonna

Definisce la larghezza di ogni colonna e delle relative schede.

### Proprietà immagine

Le schede Kanban supportano un'immagine di copertina opzionale visualizzata nella parte superiore della scheda. I valori di proprietà supportati sono gli stessi della [[Vista schede#Proprietà immagine|proprietà immagine nella Vista schede]].

### Adattamento immagine

Se è configurata una proprietà immagine, questa opzione determina come l'immagine viene visualizzata nella scheda.

- **Riempi:** L'immagine riempie il riquadro del contenuto della scheda. Se non si adatta, l'immagine viene ritagliata.
- **Contieni:** L'immagine viene ridimensionata fino a rientrare nel riquadro del contenuto della scheda. L'immagine non viene ritagliata.

### Proporzioni immagine

L'altezza dell'immagine di copertina è determinata dalle sue proporzioni. Regola questa opzione per rendere l'immagine più bassa o più alta.
