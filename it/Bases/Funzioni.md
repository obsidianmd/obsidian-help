---
permalink: bases/functions
publish: true
mobile: true
description: Questa pagina descrive le funzioni utilizzate in Obsidian Base per manipolare i dati dalle proprietà nei filtri e nelle formule.
aliases:
  - Functions
---
Le funzioni vengono utilizzate in [[Introduzione a Base|Base]] per manipolare i dati dalle [[Proprietà|proprietà]] nei [[Viste#Filtri|filtri]] e nelle [[Formule|formule]]. Consulta il riferimento alla [[Sintassi di Base|sintassi delle Base]] per scoprire di più su come puoi utilizzare le funzioni.

Le funzioni di Base seguono il comportamento di JavaScript. Per la documentazione di riferimento completa, consulta [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).

Oltre alle funzioni [[Funzioni#Globali|Globali]], la maggior parte delle funzioni dipende dal tipo di valore che vuoi modificare:

- [[Funzioni#Tipo qualsiasi|Qualsiasi]]
- [[Funzioni#Tipo data|Data]]
- [[Funzioni#Tipo stringa|Stringa]]
- [[Funzioni#Tipo numero|Numero]]
- [[Funzioni#Tipo elenco|Elenco]]
- [[Funzioni#Tipo collegamento|Collegamento]]
- [[Funzioni#Tipo file|File]]
- [[Funzioni#Tipo oggetto|Oggetto]]
- [[Funzioni#Tipo espressione regolare|Espressione regolare]]

## Globali

Le funzioni globali vengono utilizzate senza un tipo.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Esegue l'escape dei caratteri speciali in una stringa per renderla sicura per l'inclusione in HTML.

### `date()`

`date(date: string): date`

- `date(string): date` analizza la stringa fornita e restituisce un oggetto data.
- La stringa `date` deve essere nel formato `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Analizza una stringa come durata. Consulta la [[Sintassi di Base#Aritmetica delle date|sezione sull'aritmetica delle date]] per il formato della stringa `value`.
- L'analisi esplicita non è necessaria per l'aritmetica delle date (ad esempio, `now() + '1d'`), ma è necessaria quando si eseguono operazioni aritmetiche sulle durate (ad esempio, `now() + (duration('1d') * 2)`).
- Quando si eseguono operazioni aritmetiche sulle durate con scalari, la durata deve essere a sinistra. Ad esempio `duration('5h') * 2`, anziché `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Restituisce un oggetto file per il file o percorso specificato.
- Esempio: `file(link("[[nome file]]"))` oppure `file("percorso del file")`.

### `html()`

`html(html: string): html`

- Converte una stringa in un frammento di codice che viene renderizzato come HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` è l'espressione da valutare.
- `trueResult` è il risultato se `condition` è vera.
- `falseResult` è il risultato opzionale se `condition` è falsa. Se omesso, il valore predefinito è `null`.
- Restituisce `trueResult` se `condition` è vera o truthy, altrimenti restituisce `falseResult`.
- Esempio: `if(isModified, "Modificato", "Non modificato")`

### `image()`

`image(path: string | file | url): image`

- Restituisce un oggetto immagine che renderizza l'immagine nella vista.
- Esempio: `image(proprietà-immagine)` oppure `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`.

### `icon()`

`icon(name: string): icon`

- Restituisce un valore che verrà renderizzato come icona in una vista. Il nome dell'icona deve corrispondere a un'icona Lucide supportata.
- Esempio: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Analizza una stringa `path` e restituisce un oggetto Link che viene renderizzato come collegamento al percorso specificato.
- Opzionalmente fornisci il parametro `display` per impostare il testo visualizzato dal collegamento.

### `list()`

`list(element: any): List`

- Se l'elemento fornito è un elenco, lo restituisce senza modifiche.
- Altrimenti, racchiude l'`element` fornito in un elenco, creando un elenco con un singolo elemento.
- Usa questa funzione quando una proprietà contiene un mix di stringhe o elenchi nel vault.
- Esempio: `list("valore")` restituisce `["valore"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Restituisce il più grande tra tutti i numeri forniti.

### `min()`

`min(value1: number, value2: number...): number`

- Restituisce il più piccolo tra tutti i numeri forniti.

### `now()`

`now(): date`

- Restituisce un oggetto data per il momento corrente.

### `number()`

`number(input: any): number`

- Tenta di restituire il valore fornito come numero.
- Restituisce gli oggetti data come millisecondi dall'epoca Unix.
- Restituisce i booleani come `1` o `0`.
- Analizza le stringhe come numeri e restituisce un errore se la stringa non è un numero valido.
- Esempio: `number("3.4")` restituisce `3.4`.

### `today()`

`today(): date`

- Restituisce un oggetto data per la data corrente. La parte relativa all'ora è impostata a mezzanotte.

### `random()`

`random(): number`

- Restituisce un numero casuale compreso tra 0 e 1.
- La generazione del numero viene aggiornata ogni volta che una vista viene caricata. Navigare tra le viste cambia il numero casuale.

## Tipo qualsiasi

Funzioni che puoi utilizzare con qualsiasi valore. Questo include stringhe (es. `"ciao"`), numeri (es. `42`), elenchi (es. `[1,2,3]`), oggetti e altro.

### `isTruthy()`

`any.isTruthy(): boolean`

- Restituisce il valore convertito in un booleano.
- Esempio: `1.isTruthy()` restituisce `true`.

### `isType()`

`any.isType(type: string): boolean`

- Restituisce true se il valore è del tipo fornito.
- Esempio: `"esempio".isType("string")` e `true.isType("boolean")` restituiscono entrambi true.

### `toString()`

`any.toString(): string`

- Restituisce la rappresentazione come stringa di qualsiasi valore.
- Esempio: `123.toString()` restituisce `"123"`.

## Tipo data

Funzioni che puoi utilizzare con una data e ora come `date("2025-05-27")`. I confronti tra date possono essere effettuati utilizzando l'[[Sintassi di Base#Aritmetica delle date|aritmetica delle date]].

### Campi

I seguenti campi sono disponibili per le date:

| Campo              | Tipo     | Descrizione                    |
| ------------------ | -------- | ------------------------------ |
| `date.year`        | `number` | L'anno della data              |
| `date.month`       | `number` | Il mese della data (1–12)      |
| `date.day`         | `number` | Il giorno del mese             |
| `date.hour`        | `number` | L'ora (0–23)                   |
| `date.minute`      | `number` | Il minuto (0–59)               |
| `date.second`      | `number` | Il secondo (0–59)              |
| `date.millisecond` | `number` | Il millisecondo (0–999)        |

### `date()`

`date.date(): date`

- Restituisce un oggetto data con l'ora rimossa.
- Esempio: `now().date().format("YYYY-MM-DD HH:mm:ss")` restituisce una stringa come "2025-12-31 00:00:00".

### `format()`

`date.format(format: string): string`

- `format` è la stringa di formato (es. `"YYYY-MM-DD"`).
- Restituisce la data formattata come specificato da una stringa di formato Moment.js.
- Esempio: `date.format("YYYY-MM-DD")` restituisce `"2025-05-27"`.

### `time()`

`date.time(): string`

- Restituisce la parte relativa all'ora come stringa.
- Esempio: `now().time()` restituisce una stringa come "23:59:59".

### `relative()`

`date.relative(): string`

- Restituisce un confronto leggibile della data rispetto alla data e ora corrente.
- Esempio: `file.mtime.relative()` restituisce un valore come `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Restituisce false.

## Tipo stringa

Funzioni che puoi utilizzare con una sequenza di caratteri come `"ciao"`.

### Campi

| Campo           | Tipo     | Descrizione                              |
| --------------- | -------- | ---------------------------------------- |
| `string.length` | `number` | Il numero di caratteri nella stringa     |

### `contains()`

`string.contains(value: string): boolean`

- `value` è la sottostringa da cercare.
- Restituisce true se la stringa contiene `value`.
- Esempio: `"hello".contains("ell")` restituisce `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` sono una o più sottostringhe da cercare.
- Restituisce true se la stringa contiene tutti i `values`.
- Esempio: `"hello".containsAll("h", "e")` restituisce `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` sono una o più sottostringhe da cercare.
- Restituisce true se la stringa contiene almeno uno dei `values`.
- Esempio: `"hello".containsAny("x", "y", "e")` restituisce `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` è la stringa da verificare alla fine.
- Restituisce true se questa stringa termina con `query`.
- Esempio: `"hello".endsWith("lo")` restituisce `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Restituisce true se la stringa non ha caratteri, o non è presente.
- Esempio: `"Hello world".isEmpty()` restituisce `false`.
- Esempio: `"".isEmpty()` restituisce `true`.

### `lower()`

`string.lower(): string`

- Restituisce la stringa convertita in minuscolo.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` è il valore da cercare nella stringa di destinazione.
- `replacement` è il valore con cui sostituire i pattern trovati. Quando `pattern` è una Regexp, è possibile fare riferimento ai gruppi di cattura in `replacement` usando `$1`, `$2` e così via.
- Se `pattern` è una stringa, tutte le occorrenze del pattern verranno sostituite.
- Se `pattern` è una Regexp, il flag `g` determina se vengono sostituite solo la prima o tutte le occorrenze.
- Esempio: `"a:b:c:d".replace(/:/, "-")` restituisce `"a-b:c:d"`, mentre `"a:b:c:d".replace(/:/g, "-")` restituisce `"a-b-c-d"`.
- Esempio con gruppi di cattura: `"John Smith".replace(/(\w+) (\w+)/, "$2, $1")` restituisce `"Smith, John"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` è il numero di volte in cui ripetere la stringa.
- Esempio: `"123".repeat(2)` restituisce `"123123"`.

### `reverse()`

`string.reverse(): string`

- Inverte la stringa.
- Esempio: `"hello".reverse()` restituisce `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` è l'indice iniziale inclusivo.
- `end` è l'indice finale esclusivo opzionale.
- Restituisce una sottostringa da `start` (inclusivo) a `end` (esclusivo).
- Esempio: `"hello".slice(1, 4)` restituisce `"ell"`.
- Se `end` viene omesso, taglia fino alla fine della stringa.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` è il delimitatore per dividere la stringa.
- `n` è un numero opzionale. Se fornito, il risultato conterrà i primi `n` elementi.
- Restituisce un elenco di sottostringhe.
- Esempio: `"a,b,c,d".split(",", 3)` oppure `"a,b,c,d".split(/,/, 3)` restituisce `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` è la stringa da verificare all'inizio.
- Restituisce true se questa stringa inizia con `query`.
- Esempio: `"hello".startsWith("he")` restituisce `true`.

### `title()`

`string.title(): string`

- Converte la stringa in title case (prima lettera di ogni parola maiuscola).
- Esempio: `"hello world".title()` restituisce `"Hello World"`.

### `trim()`

`string.trim(): string`

- Rimuove gli spazi bianchi da entrambe le estremità della stringa.
- Esempio: `"  hi  ".trim()` restituisce `"hi"`.

## Tipo numero

Funzioni che puoi utilizzare con valori numerici come `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Restituisce il valore assoluto del numero.
- Esempio: `(-5).abs()` restituisce `5`.

### `ceil()`

`number.ceil(): number`

- Arrotonda il numero per eccesso all'intero più vicino.
- Esempio: `(2.1).ceil()` restituisce `3`.

### `floor()`

`number.floor(): number`

- Arrotonda il numero per difetto all'intero più vicino.
- Esempio: `(2.9).floor()` restituisce `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Restituisce true se il numero non è presente.
- Esempio: `5.isEmpty()` restituisce `false`.

### `round()`

`number.round(digits: number): number`

- Arrotonda il numero all'intero più vicino.
- Opzionalmente, fornisci un parametro `digits` per arrotondare a quel numero di cifre decimali.
- Esempio: `(2.5).round()` restituisce `3`, e `(2.3333).round(2)` restituisce `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` è il numero di cifre decimali.
- Restituisce una stringa con il numero in notazione a virgola fissa.
- Esempio: `(3.14159).toFixed(2)` restituisce `"3.14"`.

## Tipo elenco

Funzioni che puoi utilizzare con un elenco ordinato di elementi come `[1, 2, 3]`.

### Campi

| Campo         | Tipo     | Descrizione                            |
| ------------- | -------- | -------------------------------------- |
| `list.length` | `number` | Il numero di elementi nell'elenco      |

### `contains()`

`list.contains(value: any): boolean`

- `value` è l'elemento da cercare.
- Restituisce true se l'elenco contiene `value`.
- Esempio: `[1,2,3].contains(2)` restituisce `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` sono uno o più elementi da cercare.
- Restituisce true se l'elenco contiene tutti i `values`.
- Esempio: `[1,2,3].containsAll(2,3)` restituisce `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` sono uno o più elementi da cercare.
- Restituisce true se l'elenco contiene almeno uno dei `values`.
- Esempio: `[1,2,3].containsAny(3,4)` restituisce `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtra l'elenco e mantiene solo gli elementi per cui l'espressione è vera.
- `value` è il valore di un elemento nell'elenco.
- `index` è l'indice del valore corrente.
- Esempio: `[1,2,3,4].filter(value > 2)` restituisce `[3,4]`.

### `flat()`

`list.flat(): list`

- Appiattisce un elenco annidato in un singolo elenco.
- Esempio: `[1,[2,3]].flat()` restituisce `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Restituisce true se l'elenco non ha elementi.
- Esempio: `[1,2,3].isEmpty()` restituisce `false`.

### `join()`

`list.join(separator: string): string`

- `separator` è la stringa da inserire tra gli elementi.
- Unisce tutti gli elementi dell'elenco in un'unica stringa.
- Esempio: `[1,2,3].join(",")` restituisce `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Trasforma ogni elemento dell'elenco utilizzando un'espressione.
- `value` è il valore di un elemento nell'elenco.
- `index` è l'indice del valore corrente.
- Esempio: `[1,2,3,4].map(value + 1)` restituisce `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Riduce l'elenco a un singolo valore eseguendo un'espressione per ogni elemento. L'espressione deve restituire il valore successivo di `acc`. Usa `value` per l'elemento corrente, `index` per la sua posizione e `acc` per il risultato accumulato finora.
- `expression` viene valutato per ogni elemento nell'elenco.
- `value` è il valore dell'elemento corrente nell'elenco.
- `index` è l'indice dell'elemento corrente.
- `acc` è il valore accumulato finora.
- Esempio (somma): `[1,2,3].reduce(acc + value, 0)` restituisce `6`.
- Esempio (massimo): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` restituisce il numero più grande, o `null` se non ce ne sono.

### `reverse()`

`list.reverse(): list`

- Inverte l'elenco.
- Esempio: `[1,2,3].reverse()` restituisce `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` è l'indice iniziale inclusivo.
- `end` è l'indice finale esclusivo opzionale.
- Restituisce una copia superficiale di una porzione dell'elenco da `start` (inclusivo) a `end` (esclusivo).
- Esempio: `[1,2,3,4].slice(1,3)` restituisce `[2,3]`.
- Se `end` viene omesso, taglia fino alla fine dell'elenco.

### `sort()`

`list.sort(): list`

- Ordina gli elementi dell'elenco dal più piccolo al più grande.
- Esempio: `[3, 1, 2].sort()` restituisce `[1, 2, 3]`.
- Esempio: `["c", "a", "b"].sort()` restituisce `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Rimuove gli elementi duplicati.
- Esempio: `[1,2,2,3].unique()` restituisce `[1,2,3]`.

## Tipo collegamento

Funzioni che puoi utilizzare su un collegamento. I collegamenti possono essere creati da un file (`file.asLink()`) o da un percorso (`link("percorso")`).

### `asFile()`

`link.asFile(): file`

- Restituisce un oggetto file se il collegamento si riferisce a un file locale valido.
- Esempio: `link("[[nome file]]").asFile()`.

### `linksTo()`

`link.linksTo(file): boolean`

- Restituisce `true` se il file rappresentato dal `link` ha un collegamento verso `file`.

## Tipo file

Funzioni che puoi utilizzare con un file nel vault.

### Campi

I seguenti campi sono disponibili per i file:

| Campo             | Tipo     | Descrizione                                                          |
| ----------------- | -------- | -------------------------------------------------------------------- |
| `file.name`       | `string` | Il nome di questo file.                                              |
| `file.basename`   | `string` | Il nome di questo file senza l'estensione.                           |
| `file.path`       | `string` | Il percorso completo di questo file, relativo alla radice del vault. |
| `file.folder`     | `string` | Il percorso completo della cartella principale.                      |
| `file.ext`        | `string` | L'estensione di questo file.                                         |
| `file.size`       | `number` | La dimensione di questo file, in byte.                               |
| `file.properties` | `object` | Le proprietà della nota per questo file.                             |
| `file.tags`       | `list`   | Le etichette di questo file. Include le etichette inline.            |
| `file.links`      | `list`   | I collegamenti interni all'interno di questo file.                   |
| `file.ctime`      | `date`   | Timestamp di quando questo file è stato creato.                      |
| `file.mtime`      | `date`   | Timestamp dell'ultima modifica di questo file.                       |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` è il testo di visualizzazione opzionale per il collegamento.
- Restituisce un oggetto Link che viene renderizzato come collegamento funzionante.
- Esempio: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` è un altro oggetto file o percorso stringa da verificare.
- Restituisce true se `file` ha un collegamento verso `otherFile`.
- Esempio: `file.hasLink(otherFile)` restituisce `true` se c'è un collegamento da `file` a `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Restituisce `true` se il file ha la proprietà specificata.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` sono uno o più nomi di etichette.
- Restituisce true se il file ha una qualsiasi delle etichette in `values`.
- Esempio: `file.hasTag("tag1", "tag2")` restituisce `true` se il file ha l'etichetta `#tag1` o `#tag2`. Include anche qualsiasi [[Etichette#Etichette annidate|etichetta annidata]], come `#tag1/a` o `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` è il nome della cartella da verificare.
- Restituisce true se il file si trova nella cartella specificata o in una delle sue sottocartelle.
- Esempio: `file.inFolder("notes")` restituisce `true`.

## Tipo oggetto

Funzioni che puoi utilizzare con una raccolta di coppie chiave-valore come `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Restituisce true se l'oggetto non ha proprietà proprie.
- Esempio: `{}.isEmpty()` restituisce `true`.

### `keys()`

`object.keys(): list`

- Restituisce un elenco contenente le chiavi dell'oggetto.

### `values()`

`object.values(): list`

- Restituisce un elenco contenente i valori dell'oggetto.

## Tipo espressione regolare

Funzioni che puoi utilizzare con un pattern di espressione regolare. Esempio: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` è la stringa da testare.
- Restituisce true se l'espressione regolare corrisponde a `value`.
- Esempio: `/abc/.matches("abcde")` restituisce `true`.
