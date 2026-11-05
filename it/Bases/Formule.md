---
permalink: formulas
description: 'Le formule consentono di creare proprietà calcolate utilizzando dati da altre proprietà. È possibile eseguire calcoli, manipolare testo, lavorare con le date e altro ancora.'
aliases:
  - Formulas
---
Le formule consentono di creare proprietà calcolate nelle [[Introduzione a Base|Base]] utilizzando dati da altre [[Proprietà|proprietà]]. È possibile eseguire calcoli, manipolare testo, lavorare con le date e altro ancora.

## Cosa possono fare le formule

Le formule possono aiutarti a:

- **Calcolare valori**, sommare prezzi, calcolare totali o eseguire operazioni matematiche.
- **Manipolare testo**, combinare stringhe, modificare le maiuscole/minuscole o estrarre sottostringhe.
- **Lavorare con le date**, calcolare differenze temporali, formattare date o determinare scadenze.
- **Applicare logica**, utilizzare istruzioni condizionali per mostrare valori diversi.
- **Elaborare elenchi**, filtrare, ordinare, mappare o aggregare dati da elenchi.
- **Utilizzare note collegate**, cercare o riepilogare proprietà dalle note a cui una nota è collegata. Vedi [[#Utilizzare proprietà dalle note collegate]].

## Creare una proprietà formula

Per creare una proprietà formula:

1. Nella tua base, fai clic su **Proprietà** nella barra degli strumenti.
2. Fai clic su **Aggiungi formula** in fondo al menu.
3. Inserisci un nome per la proprietà formula.
4. Digita la formula nel campo **Formula**.
5. Chiudi la finestra di dialogo.

L'editor di formule completerà automaticamente i nomi delle [[Funzioni|funzioni]] e delle proprietà durante la digitazione per validare la sintassi della formula. Un segno di spunta verde appare quando la formula è valida.

Una volta creata, puoi utilizzare una proprietà formula come qualsiasi altra proprietà nella tua base. Aggiungila alle [[Viste|viste]], usala nei filtri, ordina in base ad essa e altro ancora.

## Scrivere una formula

Nell'editor di formule, digita un'espressione utilizzando proprietà, operatori e funzioni.

### Riferimenti alle proprietà

Puoi fare riferimento a diversi tipi di proprietà nelle formule:

- **Proprietà delle note** — Proprietà dai [[Proprietà|metadati iniziali]] di una nota.
- **Proprietà file** — Proprietà integrate come `file.name`, `file.size` o `file.mtime`.
- **Proprietà formula** — Altre formule usando `formula.nome_formula`.

**Esempi:**

- `price * quantity` — moltiplicare due proprietà della nota
- `file.name + " - " + description` — combinare il nome del file con una proprietà della nota
- `formula.price_per_unit * 1.1` — utilizzare un'altra proprietà formula

### Utilizzare gli operatori

**Operatori aritmetici** eseguono operazioni matematiche sui numeri:

- `price + tax` — addizione
- `price - discount` — sottrazione
- `price * quantity` — moltiplicazione
- `price / quantity` — divisione
- `(part / whole) * 100` — usare le parentesi per l'ordine delle operazioni

**Operatori di confronto** confrontano valori:

- `price > 100` — maggiore di
- `age < 18` — minore di
- `status == "Done"` — uguale a
- `status != "Done"` — diverso da
- `file.mtime > now() - '7d'` — confrontare date

**Operatori booleani** combinano condizioni logiche:

- `!completed` — non
- `price > 0 && quantity > 0` — e
- `urgent || important` — o

Scopri di più in [[Sintassi di Base#Operatori|Sintassi delle Base]].

### Utilizzare le funzioni

Le funzioni eseguono operazioni sui valori. Le funzioni disponibili dipendono dal tipo di valore con cui stai lavorando. Consulta l'elenco completo delle [[Funzioni]].

**Categorie di funzioni comuni:**

- **Funzioni globali** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Funzioni stringa** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Funzioni numeriche** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Funzioni data** — `format()`, `relative()`, `date()`, `time()`
- **Funzioni elenco** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Esempi:**

- `if(price, "$" + price.toFixed(2), "")` per definire una condizionale con formattazione numerica.
- `file.name.lower()` per convertire in minuscolo.
- `tags.contains("urgent")` per verificare se l'elenco delle etichette contiene un valore.
- `due_date.format("YYYY-MM-DD")` per formattare una data.

## Utilizzare proprietà dalle note collegate

Le formule possono leggere le proprietà dalle note a cui una nota è collegata. Puoi cercare un singolo valore da una nota collegata, oppure riepilogare i valori da più note collegate in un totale, un conteggio o un elenco.

Per leggere le proprietà di una nota collegata, trasforma il collegamento in un file con `asFile()`, quindi usa `properties`. I collegamenti memorizzati nelle proprietà, come `project: "[[Redesign sito web]]"`, funzionano direttamente in questo modo.

> [!warning] I risultati si aggiornano quando la nota nella riga cambia
> Se modifichi solo una nota collegata, le ricerche e i riepiloghi nella base potrebbero non aggiornarsi fino alla riapertura della base.

### Cercare un valore

Mostrare lo `status` della nota collegata nella proprietà `project`:

```js
project.asFile().properties.status
```

Se la proprietà può contenere un singolo collegamento o un elenco di collegamenti, racchiudila in `list()` e prendi il primo collegamento:

```js
list(project)[0].asFile().properties.status
```

### Riepilogare valori

Sommare le `hours` di ogni nota collegata nella proprietà `tasks`:

```js
tasks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

Contare le note collegate il cui `status` non è "Done":

```js
tasks.filter(value.asFile().properties.status != "Done").length
```

Elencare gli stati delle note collegate, senza duplicati:

```js
tasks.map(value.asFile().properties.status).unique()
```

### Riepilogare valori dalle note che collegano qui

Per riepilogare i valori dalle note che collegano a una nota, come attività che collegano ciascuna al proprio progetto, usa `file.backlinks`:

```js
file.backlinks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

`file.backlinks` è lento nei vault di grandi dimensioni. Quando possibile, memorizza i collegamenti nella nota stessa e riepilogali con `map()` e `reduce()`, come mostrato sopra.

## Esempi di formule

### Calcolare una scadenza

Impostare la data di scadenza di un progetto a 2 settimane dopo la data di inizio:

```js
start_date + "2w"
```

### Mostrare lo stato di ritardo

Mostrare "In ritardo" se la data di scadenza è passata e lo stato non è "Fatto":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Formattare la valuta

Mostrare un prezzo con 2 cifre decimali e il simbolo della valuta:

```js
if(price, "$" + price.toFixed(2), "")
```

### Contare gli elementi di un elenco

Contare il numero di elementi in una proprietà elenco:

```js
tasks.length
```

### Calcolare un punteggio di priorità

Combinare più fattori in un punteggio di priorità:

```js
(impact * urgency) / effort
```

### Combinare campi di testo

Creare un nome completo da nome e cognome:

```js
first_name + " " + last_name
```

### Calcolare il costo totale

Moltiplicare il costo mensile per il numero di mesi di possesso:

```js
monthlyUses * formula.Owned.round()
```

## Tipi di dati

Le formule funzionano con diversi tipi di dati:

- **Stringhe** — Testo racchiuso tra virgolette: `"hello"` o `'world'`
- **Numeri** — Valori numerici: `42`, `3.14`, `(2 + 2)`
- **Booleani** — Vero o falso: `true`, `false`
- **Date** — Create con `date()`, `today()` o `now()`
- **Elenchi** — Collezioni di valori: `[1, 2, 3]`
- **Oggetti** — Coppie chiave-valore: `{"name": "value"}`

Il tipo di output di una formula è determinato dai dati e dalle funzioni utilizzate.

## Fare riferimento ad altre formule

Le formule possono fare riferimento ad altre formule, creando calcoli derivati. Ad esempio, se hai una formula chiamata `price_per_unit`:

```js
price / quantity
```

Puoi farvi riferimento in un'altra formula:

```js
formula.price_per_unit * 1.1
```

> [!warning] Evitare riferimenti circolari
> Una formula non può fare riferimento a sé stessa direttamente o indirettamente attraverso altre formule.
