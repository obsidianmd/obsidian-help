---
permalink: bases/views
aliases:
  - Views
---
Le viste ti permettono di organizzare le informazioni in una [[Introduction to Bases|Base]] in diversi modi. Una base può contenere diverse viste, e ciascuna vista può avere una configurazione unica per visualizzare, ordinare e filtrare i file.

Ad esempio, potresti voler creare una base chiamata "Libri" con viste separate per "Lista di lettura" e "Finiti di recente".

## Barra degli strumenti

In cima a una base c'è una barra degli strumenti che ti permette di interagire con le viste e i loro risultati.

- ![[lucide-table.svg#icon]] **Menu vista** — crea, modifica e passa da una vista all'altra.
- **Risultati** — limita, copia ed esporta file.
- ![[lucide-arrow-up-down.svg#icon]] **Ordina** — ordina e raggruppa file.
- ![[lucide-list-filter.svg#icon]] **Filtro** — filtra file.
- ![[lucide-list.svg#icon]] **Proprietà** — scegli le proprietà da visualizzare e crea [[formulas|formule]].
- ![[lucide-search.svg#icon]] **Cerca** — cerca elementi usando le proprietà visualizzate.
- ![[lucide-plus.svg#icon]] **Nuovo** — crea un nuovo file nella vista corrente.

## Aggiungere e cambiare vista

Ci sono due modi per aggiungere una vista a una base:

- Fai clic sul nome della vista in alto a sinistra e seleziona ![[lucide-plus.svg#icon]] **Aggiungi vista**.
- Usa la [[command palette|tavolozza dei comandi]] e seleziona **Base: Aggiungi vista**.

La prima vista nel tuo elenco di viste verrà caricata per impostazione predefinita. Trascina le viste tramite la loro icona per cambiarne l'ordine.

## Impostazioni della vista

Ogni vista ha le proprie opzioni di configurazione. Per modificare le impostazioni della vista:

1. Fai clic sul nome della vista in alto a sinistra.
2. Fai clic sulla freccia destra accanto alla vista che vuoi configurare.

In alternativa, fai *clic destro* sul nome della vista nella barra degli strumenti della base per accedere rapidamente alle impostazioni della vista.

## Layout

Le viste possono essere visualizzate con diversi layout, tra cui ![[lucide-table.svg#icon]] **tabella**, ![[lucide-list.svg#icon]] **elenco**, ![[lucide-layout-grid.svg#icon]] **schede**, e ![[lucide-map.svg#icon]] **mappa**. Layout aggiuntivi possono essere aggiunti tramite [[Community plugins|Plugin della comunità]]. Alcuni layout sono ancora in fase di sviluppo e richiedono le [[early access versions|versioni ad accesso anticipato]] di Obsidian.

| Layout                          | Descrizione                                                                                                                        | Versione&nbsp;app |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [[Table view\|Tabella]]         | Visualizza i file come righe in una tabella. Le colonne vengono popolate dalle [[Properties\|proprietà]] nelle tue note.           | 1.9               |
| [[Cards view\|Schede]]          | Visualizza i file come una griglia di schede. Ti permette di creare viste simili a gallerie con immagini.                          | 1.9               |
| [[List view\|Elenco]]           | Visualizza i file come un [[Basic formatting syntax#Lists\|elenco]] con marcatori puntati o numerati.                             | 1.10              |
| [[Map view\|Mappa]]             | Visualizza i file come segnaposti su una mappa interattiva. Richiede il plugin Mappe.                                             | 1.10              |


## Filtri

Apri il menu ![[lucide-list-filter.svg#icon]] **Filtro** in cima a una base per aggiungere filtri.

Una base senza filtri mostra tutti i file nella tua cassaforte. I filtri restringono i risultati per mostrare solo i file che soddisfano criteri specifici. Ad esempio, puoi usare i filtri per visualizzare solo i file con una specifica [[Tags|etichetta]] o all'interno di una cartella specifica. Sono disponibili molti tipi di filtro.

I filtri possono essere applicati a tutte le viste in una base, o solo a una singola vista scegliendo tra le due sezioni nel menu ![[lucide-list-filter.svg#icon]] **Filtro**.

- **Tutte le viste** applica i filtri a tutte le viste nella base.
- **Questa vista** applica i filtri alla vista attiva.

#### Componenti di un filtro

I filtri hanno tre componenti:

1. **Proprietà** — ti permette di scegliere una [[Properties|proprietà]] nella tua cassaforte, incluse le [[Bases syntax#Proprietà del file|proprietà file]].
2. **Operatore** — ti permette di scegliere come confrontare le condizioni. L'elenco degli operatori disponibili dipende dal tipo di proprietà (testo, data, numero, ecc.)
3. **Valore** — ti permette di scegliere il valore con cui stai confrontando. I valori possono includere operazioni matematiche e [[Functions|funzioni]].

#### Congiunzioni

- **Tutte le seguenti condizioni sono vere** è un'istruzione `e` — i risultati verranno mostrati solo se *tutte* le condizioni nel gruppo di filtri sono soddisfatte.
- **Qualsiasi delle seguenti condizioni è vera** è un'istruzione `o` — i risultati verranno mostrati se *qualsiasi* delle condizioni nel gruppo di filtri è soddisfatta.
- **Nessuna delle seguenti condizioni è vera** è un'istruzione `non` — i risultati non verranno mostrati se *qualsiasi* delle condizioni nel gruppo di filtri è soddisfatta.

#### Gruppi di filtri

I gruppi di filtri ti permettono di creare logiche più complesse creando combinazioni di congiunzioni.

#### Editor filtro avanzato

Fai clic sul pulsante codice ![[lucide-code-xml.svg#icon]] per usare l'editor **filtro avanzato**. Questo mostra la [[Bases syntax|sintassi]] grezza del filtro e può essere usato con [[Functions|funzioni]] più complesse che non possono essere visualizzate tramite l'interfaccia punta e clicca.

## Ordinare e raggruppare i risultati

Apri il menu ![[lucide-arrow-up-down.svg#icon]] **Ordina** per ordinare e raggruppare i risultati in una vista.

Puoi disporre i risultati per una o più proprietà in ordine crescente o decrescente. Questo rende facile elencare le note per nome, data di ultima modifica o qualsiasi altra proprietà — incluse le formule.

Puoi anche raggruppare i risultati per una proprietà per organizzare elementi simili in sezioni visivamente distinte. Attualmente, Obsidian supporta il raggruppamento per una sola proprietà.

### Aggiungere un ordinamento

1. Apri il menu ![[lucide-arrow-up-down.svg#icon]] **Ordina** in cima alla vista.
2. Scegli la proprietà per cui vuoi ordinare (o raggruppare).
3. Se hai più ordinamenti, trascinali su o giù usando la maniglia ![[lucide-grip-vertical.svg#icon]] per cambiarne la priorità.

Le opzioni per l'ordinamento dei risultati dipendono dal tipo di proprietà:

- **Testo**: ordina in *ordine alfabetico* (A→Z) o in *ordine alfabetico inverso* (Z→A).
- **Numero**: ordina dal *più piccolo al più grande* (0→1) o dal *più grande al più piccolo* (1→0).
- **Data e ora**: ordina *dal più vecchio al più recente*, o *dal più recente al più vecchio*.

### Rimuovere un ordinamento

1. Apri il menu ![[lucide-arrow-up-down.svg#icon]] **Ordina** in cima alla vista.
2. Fai clic sul pulsante cestino ![[lucide-trash-2.svg#icon]] accanto all'ordinamento o raggruppamento che vuoi rimuovere.

## Limitare, copiare ed esportare i risultati

### Limitare i risultati

Il menu *risultati* mostra il numero di risultati nella vista. Fai clic sul pulsante dei risultati per limitare il numero di risultati e accedere ad azioni aggiuntive.

### Copia negli Appunti

Questa azione copia la vista negli appunti. Una volta negli appunti puoi incollarla in un file Markdown o in altre app per documenti, inclusi fogli di calcolo come Google Sheets, Excel e Numbers.

### Esporta CSV

Questa azione salva un CSV della tua vista corrente.

## Incorporare una vista

Puoi incorporare file base in [[Embed files|qualsiasi altro file]] usando la sintassi `![[File.base]]`. Verrà usata la prima vista nell'elenco. Puoi cambiare l'ordine trascinando le viste nel menu vista.

Per specificare la vista predefinita per un incorporamento usa `![[File.base#Vista]]`.
