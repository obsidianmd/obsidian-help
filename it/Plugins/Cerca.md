---
permalink: plugins/search
publish: true
mobile: true
description: >-
  La Ricerca è un plugin principale che ti aiuta a trovare dati nella tua
  cassaforte Obsidian utilizzando termini di ricerca e operatori per restringere
  i risultati.
aliases:
  - Search
---
La Ricerca è un [[Plugin principali|plugin principale]] che ti aiuta a trovare dati nella tua cassaforte Obsidian utilizzando termini di ricerca e operatori per restringere i risultati.

Per impostazione predefinita, puoi trovare la Ricerca nella barra laterale sinistra ( ![[lucide-search.svg#icon]] ). Puoi anche aprire la Ricerca premendo `Ctrl+Shift+F` (Windows/Linux) o `Command+Shift+F` (macOS).

- **Cerca il testo selezionato**: Se selezioni del testo nell'editor e apri la Ricerca con la scorciatoia da tastiera, la Ricerca ti mostra i risultati per il testo selezionato.
- **Cerca termini di ricerca recenti**: Apri la Ricerca con un termine di ricerca vuoto per elencare i termini di ricerca recenti. Fai clic su uno qualsiasi di essi per utilizzare nuovamente il termine di ricerca.

> [!info] File esclusi
> I file che corrispondono ai tuoi pattern [[Impostazioni#File esclusi|File esclusi]] non appariranno nei risultati della Ricerca.

## Termini di ricerca

Un termine di ricerca è la parola o la frase che inserisci nel campo di ricerca. Imparare a scrivere termini di ricerca in modo efficace può aiutarti a trovare rapidamente ciò che stai cercando, anche in cassaforti di grandi dimensioni. Obsidian cerca solo nei contenuti delle note e dei canvas.

> [!tip]- Ricerca di percorsi e nomi di file
> Per impostazione predefinita, puoi cercare solo nei percorsi e nei nomi di file delle note e dei canvas. Per cercare un percorso o un nome di file di qualsiasi file nella cassaforte, usa l'operatore `path` o `file`.

Ogni parola nel termine di ricerca viene confrontata indipendentemente all'interno di ciascun file. Per cercare una frase esatta, racchiudila tra virgolette, ad esempio `"star wars"`. Per cercare testo tra virgolette all'interno di una frase esatta, puoi _fare l'escape_ delle virgolette aggiungendo una barra rovesciata (`\`) davanti alla virgoletta, ad esempio `"they said \"hello\" to each other"`.

Puoi controllare se restituire file che contengono _tutte_ le parole nel tuo termine di ricerca, o _qualsiasi_ delle parole:

- `meeting work` restituisce file che contengono sia `meeting` che `work`.
- `meeting OR work` restituisce file che contengono `meeting` o `work`.

Puoi anche combinare le due modalità nello stesso termine di ricerca.

- `meeting work OR meetup personal` restituisce file per riunioni di lavoro e incontri personali.

Puoi usare le parentesi per controllare la priorità di ogni espressione.

- `meeting (work OR meetup) personal` restituisce file che contengono `meeting`, `personal`, e `work` o `meetup`.

Per escludere, o negare, una parola dai risultati di ricerca, aggiungi un trattino (`-`) davanti ad essa:

- `meeting -work` restituisce file che contengono `meeting` ma non `work`.

Puoi escludere più espressioni:

- `meeting -work -meetup` restituisce file che contengono `meeting` ma non `work` o `meetup`.

Puoi escludere una combinazione di espressioni usando le parentesi:

- `meeting -(work meetup)` restituisce file che contengono `meeting` ma non _entrambi_ `work` e `meetup`.

Per filtrare i risultati usando gli operatori minore di (`<`) e maggiore di (`>`), racchiudili tra parentesi quadre (`[]`) o virgolette (`""`):

- `meeting [duration:<5]` restituisce file dove è presente meeting e la durata è inferiore a 5.
- `meeting [duration:>5]` restituisce file dove è presente meeting e la durata è superiore a 5.

> [!tip]- Spiegazione del termine di ricerca
> Se hai bisogno di risolvere problemi con un termine di ricerca complesso, puoi fare clic su **Spiegazione del termine di ricerca** nella Ricerca per ottenere una spiegazione del tuo termine di ricerca.

## Operatori di ricerca

Gli operatori di ricerca consentono termini di ricerca più dettagliati per filtrare ulteriormente i risultati.

Alcuni operatori consentono anche di aggiungere un termine di ricerca annidato tra parentesi, ad esempio: `task:(call OR email)`.

| Operatore di ricerca | Descrizione                                                                                                                                                                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`              | Trova testo nel nome del file. Corrisponde a qualsiasi file nella cassaforte.<p/>Esempio: `file:.jpg` o `file:202209`.                                                                                                                                                                                             |
| `path:`              | Trova testo nel percorso del file. Corrisponde a qualsiasi file nella cassaforte.<p/>Esempio: `path:"Daily notes/2022-07"`.                                                                                                                                                                                        |
| `content:`           | Trova testo nel contenuto del file.<p/>Esempio: `content:"happy cat"`.                                                                                                                                                                                                                                             |
| `match-case:`        | Corrispondenza con distinzione maiuscole/minuscole.<p/>Esempio: `match-case:HappyCat`.                                                                                                                                                                                                                            |
| `ignore-case:`       | Corrispondenza senza distinzione maiuscole/minuscole.<p/>Esempio: `ignore-case:ikea`.                                                                                                                                                                                                                             |
| `tag:`               | Trova etichetta nel file.<p/>Esempio: `tag:#work`.<p/>Tieni presente che cercare `tag:#work` non restituirà risultati per `#myjob/work`.<br /><br />**Nota**: Poiché `tag:` ignora le corrispondenze nei blocchi di codice e nel contenuto non-Markdown, è spesso più veloce e preciso di una normale ricerca a testo completo per `#work`. |
| `line:`              | Trova file che contengono almeno una riga corrispondente a `x`.<p/>Esempio: `line:(mix flour)`.<p/><br>**Nota:** Usare `-line` nega la ricerca, il che significa che troverà file dove nessuna riga corrisponde a `x`.                                                                                             |
| `block:`             | Trova corrispondenze nello stesso blocco.<p/>Esempio: `block:(dog cat)`.<p/>**Nota**: Poiché `block:` richiede alla Ricerca di analizzare il contenuto Markdown in ogni file, può far richiedere più tempo al termine di ricerca per completarsi.                                                                   |
| `section:`           | Trova corrispondenze nella stessa sezione (testo tra due intestazioni).<p/>Esempio: `section:(dog cat)`.                                                                                                                                                                                                           |
| `task:`              | Trova corrispondenze in un'[[Basic formatting syntax#Task lists\|attività]] blocco per blocco.<p/>Esempio: `task:call`.                                                                                                                                                                                            |
| `task-todo:`         | Trova corrispondenze in un'[[Basic formatting syntax#Task lists\|attività]] *non completata* blocco per blocco.<p/>Esempio: `task-todo:call`.                                                                                                                                                                      |
| `task-done:`         | Trova corrispondenze in un'[[Basic formatting syntax#Task lists\|attività]] *completata* blocco per blocco.<p/>Esempio: `task-done:call`.                                                                                                                                                                          |

## Ricerca nelle proprietà

Puoi usare i dati memorizzati nelle [[Properties|Proprietà]] nei tuoi termini di ricerca.

Usa le parentesi quadre attorno al nome di una proprietà `[property]` per restituire file con quella proprietà:

- `[aliases]` restituisce file che contengono la proprietà `aliases`

Usa le parentesi quadre e i due punti `[property:value]` per restituire file con quella proprietà e quel valore:

- `[aliases:Name]` restituisce file dove il valore della proprietà `aliases` è `Name`

Usa `null` come valore per trovare proprietà che non hanno valore:

- `[aliases:null]` restituisce file dove la proprietà `aliases` esiste ma non ha valore

> [!info]+ Valori vuoti
> L'operatore `null` funziona quando una proprietà è vuota (es., `aliases: `), ma non quando la proprietà contiene virgolette vuote (`""`) o parentesi quadre vuote (`[]`).

Sia la proprietà che il valore consentono sotto-query, come le parentesi per il raggruppamento, l'operatore `OR`, le virgolette doppie per la corrispondenza esatta e le espressioni regolari.

- `[status:Draft OR Published]` restituisce file dove il valore della proprietà `status` è `Draft` o `Published`

## Cambiare la distinzione maiuscole/minuscole

Per impostazione predefinita, i termini di ricerca non distinguono tra maiuscole e minuscole. Se vuoi cercare con la distinzione esatta delle maiuscole/minuscole del tuo termine di ricerca, seleziona **Maiuscole/minuscole** ( ![[obsidian-icon-upper-lowercase.svg#icon]] ) all'interno della barra di ricerca.

Questa impostazione può essere attivata e disattivata. Se l'icona **Maiuscole/minuscole** è evidenziata, significa che stai effettuando una ricerca con distinzione maiuscole/minuscole.

## Cambiare l'ordine dei risultati

1. Inserisci un [[#Termini di ricerca|termine di ricerca]].
2. Sotto il campo di ricerca, seleziona il menu a tendina sulla destra.
3. Seleziona l'ordine desiderato. L'impostazione predefinita è "Nome file (dalla A alla Z)".

Le seguenti opzioni sono disponibili:

- Nome file (dalla A alla Z)
- Nome file (dalla Z alla A)
- Data di modifica (più recente)
- Data di modifica (meno recente)
- Data di creazione (più recente)
- Data di creazione (meno recente)

## Copiare i risultati di ricerca

1. Inserisci un [[#Termini di ricerca|termine di ricerca]].
2. Sotto il campo di ricerca, seleziona l'icona dei tre punti accanto al numero di risultati.
3. Seleziona **Copia risultati della ricerca**.

## Usare le espressioni regolari

Un'espressione regolare è un insieme di caratteri che descrivono un modello di testo. Per usare le espressioni regolari nel tuo termine di ricerca, racchiudi l'espressione tra barre oblique (`/`).

- `/\d{4}-\d{2}-\d{2}/` corrisponde a una data ISO 8601, come 2022-01-01.

Puoi anche combinare le espressioni regolari con gli operatori di ricerca:

- `path:/\d{4}-\d{2}-\d{2}/` restituisce file con una data nel percorso del file.

Per maggiori informazioni su come scrivere espressioni regolari, consulta la [guida pratica alle Regex](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) di FreeCodeCamp o le [Espressioni regolari](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) di Mozilla.

> [!info]+ Espressioni regolari in formato JavaScript
> Le espressioni regolari esistono in diversi formati che possono apparire diversi l'uno dall'altro. Obsidian usa espressioni regolari in formato JavaScript.

## Configurare le impostazioni di ricerca

Per configurare la Ricerca, seleziona **Impostazioni ricerca** ( ![[lucide-sliders-horizontal.svg#icon]] ) sul lato destro della barra di ricerca per vedere le opzioni.

| Impostazione                     | Descrizione                                                                   |
|----------------------------------|-------------------------------------------------------------------------------|
| **Spiegazione del termine di ricerca** | Scompone i termini di ricerca e li spiega in testo normale.            |
| **Comprimi risultati**           | Attiva o disattiva la visualizzazione del contesto di ricerca.                |
| **Mostra più contesto**          | Espande il risultato di ricerca per mostrare più testo attorno alla corrispondenza. |

## Incorporare i risultati di ricerca in una nota

Per incorporare i risultati di ricerca in una nota, aggiungi un blocco di codice `query`:

````
```query
embed OR search
```
````

[[Introduction to Obsidian Publish|Obsidian Publish]] non supporta i [[Publish limitations#Cerca|risultati di ricerca]] incorporati. Per vedere un esempio renderizzato dal vivo, usa il blocco di codice sopra all'interno della tua cassaforte.

![[search-query-rendered.png]]
