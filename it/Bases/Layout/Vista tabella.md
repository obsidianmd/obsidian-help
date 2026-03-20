---
permalink: bases/views/table
aliases:
  - Table view
---
Tabella è un tipo di [[Views|vista]] che puoi usare in [[Introduction to Bases|Base]].

Seleziona ![[lucide-table.svg#icon]]  **Tabella** dal menu delle viste per visualizzare i file come una tabella con una riga per ogni file e colonne per le [[Properties|proprietà]] di quel file.

![Esempio di una base che mostra una vista tabella con un elenco di libri](bases-noshadow.png#interface)

## Impostazioni

Le impostazioni della vista tabella possono essere configurate nelle [[Views#Impostazioni della vista|Impostazioni della vista]].

### Altezza riga

L'altezza riga ti permette di visualizzare più informazioni. Scegli tra **bassa**, **media**, **alta** e **molto alta**.

## Riepiloghi

Puoi aggiungere riepiloghi a una colonna della tabella per calcolare rapidamente valori come totali, medie o conteggi per le righe attualmente visibili nella vista.

I riepiloghi sono legati alla vista, non alla base. Ogni vista può mostrare riepiloghi diversi per la stessa colonna.

### Aggiungere un riepilogo

1. Fai clic destro sull'intestazione della colonna in una vista tabella.
2. Seleziona ![[lucide-calculator.svg#icon]] **Riepiloga…**.
3. Scegli una delle funzioni di riepilogo integrate, oppure seleziona ![[lucide-square-function.svg#icon]] **Aggiungi riepilogo** per definirne una personalizzata.

Il riepilogo appare nella parte inferiore della colonna. Quando i risultati sono [[Views#Ordinare e raggruppare i risultati|raggruppati]], il riepilogo per ogni gruppo viene mostrato nella parte superiore del gruppo.

Una volta aggiunta la barra di riepilogo, puoi aggiungere altri riepiloghi per altre colonne facendo clic sulla cella di riepilogo. La barra di riepilogo viene nascosta se tutti i riepiloghi vengono rimossi.

### Riepiloghi integrati

I seguenti riepiloghi sono disponibili per impostazione predefinita. Le opzioni possono variare a seconda del tipo di proprietà.

#### Tutti i tipi di proprietà

- **Nessun valore**: conteggio delle righe senza valore.
- **Con valore**: conteggio delle righe con un valore.
- **Univoche**: numero di valori distinti.

#### Numeri

- **Media**: media di tutti i valori numerici.
- **Massimo**: valore più grande.
- **Mediana**: valore mediano.
- **Minimo**: valore più piccolo.
- **Intervallo**: differenza tra massimo e minimo.
- **Deviazione standard**: deviazione standard.
- **Somma**: totale di tutti i valori.

#### Date

- **Più antica**: la data più piccola/più vecchia.
- **Più recente**: la data più grande/più recente.
- **Intervallo**: differenza tra la più antica e la più recente.

#### Casella di controllo

- **Selezionate**: numero di righe in cui la casella di controllo è attiva.
- **Non selezionate**: numero di righe in cui la casella di controllo è disattiva.

### Riepiloghi personalizzati

Puoi definire il tuo riepilogo utilizzando una formula:

1. Nel menu ![[lucide-calculator.svg#icon]] **Riepiloga…**, scegli ![[lucide-square-function.svg#icon]] **Aggiungi riepilogo**.
2. Assegna un nome al riepilogo.
3. Inserisci una formula. La formula viene eseguita sull'elenco di valori in quella colonna (ad esempio, utilizzando una [[Functions|funzione]] come `values.reduce(...)`).
4. Salva il riepilogo.

I riepiloghi personalizzati sono utili quando hai bisogno di un calcolo non coperto dalle opzioni integrate.

## Scorciatoie

Puoi muoverti rapidamente in una vista tabella utilizzando le seguenti scorciatoie del mouse e della [[Editing shortcuts|tastiera]].

- Shift-clic crea una selezione di celle.
- Fai clic destro su una selezione di celle per accedere ad azioni aggiuntive per quei file.

| Azione                                                                                                                                     | Scorciatoia          | macOS               |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- | ------------------- |
| Copia le celle selezionate                                                                                                                 | `Ctrl+C`             | `Cmd+C`             |
| Incolla le celle selezionate                                                                                                               | `Ctrl+V`             | `Cmd+V`             |
| Annulla le modifiche alle proprietà                                                                                                        | `Ctrl+Z`             | `Cmd+Z`             |
| Ripeti le modifiche alle proprietà                                                                                                         | `Ctrl+Shift+Z`       | `Cmd+Shift+Z`       |
| Seleziona tutte le celle nel gruppo corrente                                                                                               | `Ctrl+A`             | `Cmd+A`             |
| Seleziona tutte le celle in una direzione data                                                                                             | `Ctrl+Shift+Freccia` | `Ctrl+Shift+Freccia` |
| Seleziona la colonna                                                                                                                       | `Ctrl+Spazio`        |                     |
| Seleziona la riga                                                                                                                          | `Shift+Spazio`       |                     |
| Attiva la cella corrente — per le caselle di controllo, questo attiva/disattiva la casella, per le formule, apre l'editor delle formule    | `Invio`              |                     |
| Vai alla prima colonna                                                                                                                     | `Home`               |                     |
| Vai all'ultima colonna                                                                                                                     | `Fine`               |                     |
| Naviga su e giù per altezza della pagina                                                                                                   | `PagSu`,`PagGiù`    |                     |
| Cancella la selezione corrente delle celle                                                                                                 | `Esc`                |                     |
| Cancella le celle correnti                                                                                                                 | `Backspace`          |                     |
| Vai alla cella successiva                                                                                                                  | `Tab`                |                     |
| Vai alla cella precedente                                                                                                                  | `Shift-Tab`          |                     |
