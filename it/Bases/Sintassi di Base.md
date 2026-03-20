---
permalink: bases/syntax
publish: true
mobile: true
description: Questa pagina fornisce un'introduzione alla sintassi di Base in Obsidian.
aliases:
  - Bases syntax
---
Quando [[Create a base|crei una base]] in Obsidian, viene salvata come file `.base`. Le basi vengono tipicamente modificate utilizzando l'interfaccia dell'app, ma la sintassi può anche essere modificata manualmente e incorporata in un blocco di codice.

La sintassi delle [[Introduction to Bases|Base]] definisce [[Views|Viste]], filtri e [[formulas|formule]]. Le basi devono essere YAML valido conforme allo schema definito di seguito.

## Esempio

Ecco un esempio di un file base. Esamineremo ogni sezione in dettaglio.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Filtri

Per impostazione predefinita una base include ogni file nella cassaforte. Non esiste un `from` o `source` come in SQL o Dataview. La sezione `filters` consente di definire condizioni per restringere il set di dati.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Ci sono due opportunità per applicare i filtri:

1. A livello globale `filters` (mostrato sopra) dove si applicano a tutte le viste nella base.
2. A livello di `view` dove si applicano solo a una vista specifica.

Queste due sezioni sono funzionalmente equivalenti e quando vengono valutate per una vista vengono concatenate con un `AND`.

La sezione `filters` contiene una singola istruzione di filtro come stringa, oppure un oggetto filtro definito ricorsivamente. Gli oggetti filtro possono contenere uno tra `and`, `or` o `not`. Queste chiavi sono un elenco eterogeneo di altri oggetti filtro o istruzioni di filtro sotto forma di stringhe. Un'istruzione di filtro è una riga che restituisce un valore vero o falso quando applicata a una nota. Può essere una delle seguenti:

- Un confronto di base che utilizza operatori aritmetici standard.
- Una funzione. Diverse [[Functions|Funzioni]] sono integrate, e i plugin possono aggiungere funzioni aggiuntive.

La sintassi e le funzioni disponibili per filtri e formule sono le stesse.

### Formule

La sezione `formulas` definisce le [[Formulas|proprietà formula]] che possono essere visualizzate in tutte le viste del file base.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Le proprietà formula supportano operatori aritmetici di base e una varietà di [[Functions|Funzioni]] integrate. In futuro, i plugin potranno aggiungere funzioni da utilizzare nelle formule.

Puoi fare riferimento alle proprietà in modi diversi a seconda del loro tipo:

- **Proprietà della nota** sono proprietà definite nei metadati iniziali della nota. Ad esempio `note.price` o `note["price"]`.
  Se non viene specificato alcun prefisso, la proprietà viene considerata una proprietà `note`.
- **Proprietà del file** descrivono il file stesso.
  Ad esempio `file.size` o `file.ext`. Puoi anche fare riferimento direttamente all'oggetto file, ad esempio `file.hasLink()`.
- **Proprietà formula** sono altre formule nella base.
  Esempio `formula.formatted_price`.

Una formula può utilizzare valori di altre proprietà formula, purché non ci siano riferimenti circolari.

Le proprietà formula vengono sempre memorizzate come stringhe in YAML, ma il loro **tipo di dato in output** effettivo è determinato dal tipo dei dati sottostanti e dal valore di ritorno delle funzioni utilizzate.

Nota che l'uso di virgolette annidate è necessario per includere letterali di testo nel campo YAML. I letterali di testo devono essere racchiusi tra virgolette singole o doppie.

### Proprietà

La sezione `properties` consente di memorizzare informazioni di configurazione su ogni proprietà. Spetta alla singola vista come utilizzare questi valori di configurazione. Ad esempio, nelle tabelle il nome visualizzato viene utilizzato per le intestazioni delle colonne.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

I nomi visualizzati non vengono utilizzati nei filtri o nelle formule.

### Riepiloghi

La sezione `summaries` può essere utilizzata per definire formule di riepilogo personalizzate. Oltre a definire formule di riepilogo qui, sono disponibili diverse formule di riepilogo predefinite.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

In questo esempio, la formula `customAverage` è uguale alla formula predefinita `Average`, tranne che il valore viene arrotondato a un numero diverso di cifre decimali. Nelle formule di riepilogo, la parola chiave `values` è un elenco contenente tutti i valori per quella proprietà in tutte le note nel set di risultati. La formula di riepilogo dovrebbe restituire un singolo `Value`.

Nota che questa sezione `summaries` è diversa dalla sezione `summaries` nella configurazione della vista (spiegata di seguito) dove le formule di riepilogo vengono assegnate a proprietà specifiche.

#### Formule di riepilogo predefinite

| Nome      | Tipo di input | Descrizione                                                             |
| --------- | ------------- | ----------------------------------------------------------------------- |
| Average   | Numero        | La media matematica di tutti i numeri dai valori di input.              |
| Min       | Numero        | Il numero più piccolo dai valori di input.                              |
| Max       | Numero        | Il numero più grande dai valori di input.                               |
| Sum       | Numero        | La somma di tutti i numeri nell'input.                                  |
| Range     | Numero        | La differenza tra `Max` e `Min`.                                        |
| Median    | Numero        | La mediana matematica di tutti i numeri dai valori di input.            |
| Stddev    | Numero        | La deviazione standard di tutti i numeri dai valori di input.           |
| Earliest  | Data          | La data più antica dai valori di input.                                 |
| Latest    | Data          | La data più recente dai valori di input.                                |
| Range     | Data          | La differenza tra `Latest` e `Earliest`.                                |
| Checked   | Booleano      | Il numero di valori `true`.                                             |
| Unchecked | Booleano      | Il numero di valori `false`.                                            |
| Empty     | Qualsiasi     | Il numero di valori nell'input che sono vuoti.                          |
| Filled    | Qualsiasi     | Il numero di valori nell'input che non sono vuoti.                      |
| Unique    | Qualsiasi     | Il numero di valori univoci nell'input.                                 |

### Viste

La sezione `views` definisce come i dati possono essere visualizzati. Ogni voce nell'elenco `views` definisce una vista separata degli stessi dati, e possono esserci tante viste diverse quante necessario.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` seleziona tra i tipi di vista integrati e quelli aggiunti dai plugin.
- `name` è il nome visualizzato, e può essere utilizzato per definire la vista predefinita.
- `filters` sono esattamente come descritto sopra, ma si applicano solo alla vista.
- `groupBy` specifica una proprietà e una direzione di ordinamento. Il valore della proprietà specificata per ogni riga viene utilizzato per inserire la riga in gruppi.
- `summaries` mappa i nomi delle proprietà a un riepilogo con nome. I riepiloghi eseguono un'aggregazione sulla proprietà in tutte le righe.

Le [[Views|Viste]] possono aggiungere dati aggiuntivi per memorizzare qualsiasi informazione necessaria a mantenere lo stato o a visualizzare correttamente, tuttavia gli autori di plugin dovrebbero fare attenzione a non utilizzare chiavi già in uso dal plugin principale Base. Ad esempio, una vista tabella può utilizzare questo per limitare il numero di righe o per selezionare quale colonna viene utilizzata per ordinare le righe e in quale direzione. Un tipo di vista diverso come una mappa potrebbe utilizzare questo per mappare quale proprietà nella nota corrisponde a latitudine e longitudine e quale proprietà dovrebbe essere visualizzata come titolo del segnaposto.

In futuro, le API consentiranno alle viste di leggere e scrivere questi valori, permettendo alla vista di costruire la propria interfaccia per la configurazione.

## Proprietà

Ci sono tre tipi di proprietà utilizzate nelle basi:

1. **Proprietà della nota**, memorizzate nei metadati iniziali dei file Markdown.
2. **Proprietà del file**, accessibili per tutti i tipi di file.
3. **Proprietà formula**, definite nel file `.base` stesso (vedi sopra).

### Proprietà della nota

Le [[Properties|proprietà della nota]] sono disponibili solo per i file Markdown e sono memorizzate nei metadati iniziali YAML di ogni nota. Queste proprietà possono essere accessibili utilizzando il formato `note.author` o semplicemente `author` come abbreviazione.

### Proprietà del file

Le proprietà del file si riferiscono al file attualmente in fase di test o valutazione. Le proprietà del file sono disponibili per tutti i [[Accepted file formats|tipi di file]], inclusi gli allegati.

Ad esempio, un filtro `file.ext == "md"` sarà vero per tutti i file Markdown e falso altrimenti.

| Proprietà          | Tipo   | Descrizione                                                   |
| ------------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`    | Elenco | Elenco dei file con backlink. Nota: Questa proprietà ha un impatto elevato sulle prestazioni. Quando possibile, inverti la ricerca e utilizza `file.links`. Non aggiorna automaticamente i risultati quando la cassaforte viene modificata. |
| `file.ctime`        | Data   | Data di creazione                                             |
| `file.embeds`       | Elenco | Elenco di tutti gli incorporamenti nella nota                 |
| `file.ext`          | Stringa| Estensione del file                                           |
| `file.file`         | File   | Oggetto file, utilizzabile solo in funzioni specifiche        |
| `file.folder`       | Stringa| Percorso della cartella del file                              |
| `file.links`        | Elenco | Elenco di tutti i collegamenti interni nella nota, inclusi i metadati iniziali |
| `file.mtime`        | Data   | Data di modifica                                              |
| `file.name`         | Stringa| Nome del file                                                 |
| `file.path`         | Stringa| Percorso del file                                             |
| `file.properties`   | Oggetto| Tutte le proprietà del file. Nota: Non aggiorna automaticamente i risultati quando la cassaforte viene modificata. |
| `file.size`         | Numero | Dimensione del file                                           |
| `file.tags`         | Elenco | Elenco di tutte le etichette nel contenuto del file e nei metadati iniziali |

### Accedere alle proprietà con `this`

Usa l'oggetto `this` per accedere alle proprietà del file. A cosa si riferisce `this` dipenderà da dove viene visualizzata la base.

Quando la base viene aperta nell'area di contenuto principale, `this` punta alle proprietà del file base stesso. Ad esempio, utilizzando `this.file.folder` si ottiene il percorso della cartella dove si trova la base.

Quando la base è incorporata in un altro file, `this` punta alle proprietà del file che _incorpora_ (la nota o il Canvas che contiene la base). Ad esempio, utilizzando `this.file.name` si ottiene il nome del file che incorpora, non della base.

Quando la base è in una barra laterale, `this` si riferisce al file attivo nell'area di contenuto principale. Questo ti consente di creare query basate sul file attivo. Ad esempio, puoi usare `file.hasLink(this.file)` per replicare il pannello dei backlink.

## Operatori

### Operatori aritmetici

Gli operatori aritmetici eseguono operazioni aritmetiche sui numeri. Ad esempio, `radius * (2 * 3.14)`.

| Operatore | Descrizione  |
| --------- | ------------ |
| `+`       | più          |
| `-`       | meno         |
| `*`       | moltiplica   |
| `/`       | dividi       |
| `%`       | modulo       |
| `( )`     | parentesi    |

### Aritmetica delle date

Le date possono essere modificate aggiungendo e sottraendo durate. Le unità di durata accettano formati multipli:

| Unità                    | Durata  |
| ------------------------ | ------- |
| `y`, `year`, `years`     | anno    |
| `M`, `month`, `months`   | mese    |
| `d`, `day`, `days`       | giorno  |
| `w`, `week`, `weeks`     | settimana |
| `h`, `hour`, `hours`     | ora     |
| `m`, `minute`, `minutes` | minuto  |
| `s`, `second`, `seconds` | secondo |

Per modificare o spostare oggetti Date, usa l'operatore `+` o `-` con una stringa di durata. Ad esempio, `date + "1M"` aggiunge 1 mese alla data, mentre `date - "2h"` sottrae 2 ore dalla data.

La [[Functions|funzione]] globale `today()` può essere utilizzata per ottenere la data corrente, e `now()` può essere utilizzata per ottenere la data corrente con l'ora.

- `now() + "1 day"` restituisce un datetime esattamente 24 ore dal momento dell'esecuzione.
- `file.mtime > now() - "1 week"` restituisce `true` se il file è stato modificato nell'ultima settimana.
- `date("2024-12-01") + "1M" + "4h" + "3m"` restituisce un oggetto Date che rappresenta `2025-01-01 04:03:00`.
- Sottrai due date per ottenere la differenza in millisecondi tra le due, ad esempio, `now() - file.ctime`.
- Per ottenere la parte data di una Date con ora, usa `datetime.date()`.
- Per formattare un oggetto Date, usa la funzione `format()`, ad esempio `datetime.format("YYYY-MM-DD")`.

### Operatori di confronto

Gli operatori di confronto possono essere utilizzati per confrontare numeri o oggetti Date. Uguale e diverso possono essere utilizzati con qualsiasi tipo di valore, non solo numeri e date.

| Operatore | Descrizione              |
| --------- | ------------------------ |
| `==`      | uguale                   |
| `!=`      | diverso                  |
| `>`       | maggiore di              |
| `<`       | minore di                |
| `>=`      | maggiore o uguale a      |
| `<=`      | minore o uguale a        |

### Operatori booleani

Gli operatori booleani possono essere utilizzati per combinare o invertire valori logici, producendo un valore vero o falso.

| Operatore | Descrizione |
| --------- | ----------- |
| `!`       | NOT logico  |
| `&&`      | AND logico  |
| \|\|      | OR logico   |

## Funzioni

Consulta l'[[Functions|elenco delle funzioni]] che possono essere utilizzate nelle formule e nei [[Views|filtri]].

## Tipi

Le basi hanno un sistema di tipi che viene utilizzato da formule e filtri per applicare funzioni alle proprietà.

### Stringhe, numeri e booleani

Stringhe, numeri e booleani sono valori "primitivi" che non richiedono una funzione per essere creati.

- Le stringhe sono racchiuse tra virgolette singole o doppie, ad esempio `"message"`.
- I numeri sono scritti come cifre e possono opzionalmente essere racchiusi tra parentesi per chiarezza. Ad esempio, `1` o `(2.5)`.
- I booleani sono scritti come `true` o `false` senza virgolette.

### Date e durate

Le date rappresentano una data specifica, o una data e un'ora a seconda della funzione utilizzata per crearle, o del tipo che è stato assegnato alla [[Properties|proprietà]].

- Per costruire una data, usa la funzione `date`, ad esempio `date("2025-01-01 12:00:00")`
- Per modificare una data, aggiungi o rimuovi una durata, ad esempio `now() + "1 hour"` o `today() + "7d"`
- Confronta le date usando operatori di confronto (ad esempio `>` o `<`) e operatori aritmetici (ad esempio, `(now() + "1d") - now()` restituisce `86400000` millisecondi.)
- Per estrarre porzioni di una data, usa i campi disponibili (`now().hour`), o una funzione di comodo (`now.time()`).
- Molti altri [[Functions|campi e funzioni]] sono disponibili sugli oggetti data.

### Oggetti ed elenchi

- Trasforma un singolo elemento in un elenco usando la funzione `list()`. Questo è particolarmente utile per proprietà che possono contenere una combinazione di elenchi o valori singoli.
- Accedi agli elementi dell'elenco usando parentesi quadre e un indice basato su 0. Ad esempio, `property[0]` restituisce il primo elemento dall'elenco.
- Accedi agli elementi dell'oggetto usando parentesi quadre e il nome dell'elemento o la notazione con punto. Ad esempio, `property.subprop` o `property["subprop"]`.

### File e collegamenti

I [[Link notes|collegamenti wiki]] nelle [[Properties|proprietà dei metadati iniziali]] vengono automaticamente riconosciuti come oggetti Link. I collegamenti verranno visualizzati come collegamento cliccabile nella [[Views|vista]].

- Per costruire un collegamento, usa la [[Functions|funzione]] globale `link`, ad esempio `link("filename")` o `link("https://obsidian.md")`.
- Puoi creare un collegamento da qualsiasi stringa, ad esempio `link(file.ctime.date().toString())`.
- Per impostare il testo visualizzato, passa una stringa opzionale o un'icona come secondo parametro, ad esempio `link("filename", "display")` o `link("filename", icon("plus"))`.

Un oggetto File può essere trasformato in un collegamento usando `file.asLink()` con un testo visualizzato opzionale.

I collegamenti possono essere confrontati con `==` e `!=`. Sono equivalenti finché puntano allo stesso file, o se il file non esiste quando viene cercato, il loro testo del collegamento deve essere identico.

I collegamenti possono essere confrontati con file come `file` o `this`. Risulteranno uguali se il collegamento si risolve nel file. Ad esempio, `author == this`.

I collegamenti possono anche essere verificati nell'operazione contains di un elenco, ad esempio `authors.contains(this)`.
