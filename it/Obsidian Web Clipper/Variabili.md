---
permalink: web-clipper/variables
aliases:
  - Variables
---
I [[Modelli|modelli di Web Clipper]] possono utilizzare variabili per pre-popolare automaticamente i dati dalla pagina in un modello. Le variabili possono essere utilizzate nel **nome della nota**, nella **posizione della nota**, nelle **proprietà** e nel **contenuto della nota**. Le variabili possono anche essere modificate utilizzando i [[Filtri|filtri]].

Usa l'icona `...` nell'estensione [[Introduzione a Obsidian Web Clipper|Web Clipper]] per accedere alle variabili della pagina corrente da utilizzare nei modelli. Ci sono cinque tipi di variabili utilizzabili:

- [[Variabili#Variabili preset|Variabili preset]]
- [[Variabili#Variabili prompt|Variabili prompt]]
- [[Variabili#Variabili meta|Variabili meta]]
- [[Variabili#Variabili selettore|Variabili selettore]]
- [[Variabili#Variabili Schema.org|Variabili Schema.org]]

## Variabili preset

Le variabili preset vengono generate automaticamente in base al contenuto della pagina. Generalmente funzionano per la maggior parte dei siti web.

La variabile principale per il contenuto è `{{content}}`, che contiene il contenuto dell'articolo, o le [[Evidenziatore|evidenziazioni]], o la selezione se è presente del testo selezionato nella pagina. Nota che `{{content}}` tenta di estrarre il contenuto principale della pagina, che potrebbe non essere sempre ciò che desideri. In tal caso, puoi utilizzare altre variabili preset o variabili selettore per estrarre il contenuto necessario.

| Variabile            | Descrizione                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Autore della pagina                                                                     |
| `{{content}}`       | Contenuto dell'articolo, [[Highlighter\|evidenziazioni]] o selezione, in formato Markdown |
| `{{contentHtml}}`   | Contenuto dell'articolo, [[Highlighter\|evidenziazioni]] o selezione, in formato HTML     |
| `{{date}}`          | Data corrente, può essere formattata utilizzando il filtro `date`                                 |
| `{{description}}`   | Descrizione o estratto                                                                 |
| `{{domain}}`        | Dominio                                                                                 |
| `{{favicon}}`       | URL della favicon                                                                            |
| `{{fullHtml}}`      | HTML non elaborato per il contenuto completo della pagina                                             |
| `{{highlights}}`    | [[Highlighter\|Evidenziazioni]] con testo e marcature temporali                           |
| `{{image}}`         | URL dell'immagine di condivisione social                                                                 |
| `{{published}}`     | Data di pubblicazione, può essere formattata utilizzando il filtro `date`                               |
| `{{selection}}`     | Selezione in formato Markdown                                                           |
| `{{selectionHtml}}` | Selezione in formato HTML                                                               |
| `{{site}}`          | Nome del sito o editore                                                                 |
| `{{title}}`         | Titolo della pagina                                                                      |
| `{{time}}`          | Data e ora correnti                                                                  |
| `{{url}}`           | URL corrente                                                                            |
| `{{words}}`         | Conteggio parole                                                                             |

## Variabili prompt

Le variabili prompt sfruttano i modelli linguistici per estrarre e modificare i dati utilizzando il linguaggio naturale. Le variabili prompt richiedono che l'[[Interprete|Interprete]] sia abilitato e configurato.

Le variabili prompt utilizzano la sintassi `{{"un riepilogo della pagina"}}`. Le virgolette doppie attorno al prompt sono importanti e distinguono i prompt dalle variabili preset. Le risposte dei prompt possono essere post-elaborate con i [[Filtri|filtri]], ad esempio `{{"un riepilogo della pagina"|blockquote}}`.

### Quando utilizzare le variabili prompt

Le variabili prompt hanno il vantaggio di essere estremamente flessibili e facili da scrivere, tuttavia presentano diversi compromessi: sono più lente da eseguire e possono avere considerazioni di costo e privacy a seconda del [[Interprete#Modelli|fornitore]] scelto.

A differenza di altri tipi di variabili, le variabili prompt devono essere elaborate da un modello linguistico esterno, quindi vengono sostituite solo dopo che l'[[Interprete|Interprete]] è stato eseguito.

È preferibile *non* utilizzare le variabili prompt se i dati che si desidera estrarre sono in un formato coerente che potrebbe essere estratto con altri tipi di variabili.

D'altra parte, le variabili prompt possono essere utili se i dati che si desidera estrarre sono in un formato *incoerente* tra i siti web. Ad esempio, puoi creare un [[Modelli|modello]] per salvare libri che sia indipendente dal sito del libro. Variabili prompt come `{{"autore del libro"}}` funzioneranno su qualsiasi sito di libri, mentre le variabili selettore funzionano tipicamente solo per un singolo sito.

### Esempi

I prompt possono utilizzare quasi qualsiasi query in linguaggio naturale. A seconda del modello utilizzato, i prompt possono interrogare o tradurre dati tra lingue diverse.

- `{{"un riepilogo in tre punti elenco, tradotto in francese"}}` per estrarre punti elenco sulla pagina e tradurli in francese.
- `{{"un resumé de la page en trois points"}}` per estrarre tre punti elenco utilizzando un prompt in francese.

I prompt possono trasformare il contenuto della pagina in JSON manipolabile con i [[Filtri|filtri]]. Ad esempio:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Variabili meta

Le variabili meta permettono di estrarre dati dagli [elementi meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) nella pagina, inclusi i dati [Open Graph](https://ogp.me/) utilizzati per popolare le anteprime di condivisione social.

- `{{meta:name}}` restituisce il contenuto del tag meta name con il nome specificato, ad esempio `{{meta:name:description}}` per il tag meta `description`.
- `{{meta:property}}` restituisce il contenuto del tag meta property con la proprietà specificata, ad esempio `{{meta:property:og:title}}` per il tag meta `og:title`.

## Variabili selettore

Le variabili selettore permettono di estrarre il contenuto testuale dagli elementi della pagina utilizzando i [selettori CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

La sintassi è `{{selector:selettoreCss?attributo}}`, dove `?attributo` è opzionale. Se non viene specificato alcun attributo, viene restituito il contenuto testuale dell'elemento. Puoi anche utilizzare `{{selectorHtml:selettoreCss}}` per ottenere il contenuto HTML dell'elemento. Le variabili selettore tendono a funzionare meglio su un sito web specifico o un insieme di siti web con struttura HTML coerente.

- `{{selector:h1}}` restituisce il contenuto testuale di qualsiasi elemento `h1` nella pagina.
- `{{selector:.author}}` restituisce il contenuto testuale di qualsiasi elemento `.author` nella pagina.
- `{{selector:img.hero?src}}` restituisce l'attributo `src` dell'immagine con classe `hero`.
- `{{selector:a.main-link?href}}` restituisce l'attributo `href` del tag anchor con classe `main-link`.
- `{{selectorHtml:body|markdown}}` restituisce l'intero HTML dell'elemento `body`, convertito in Markdown utilizzando il [[Filtri#Elaborazione HTML|filtro]] `markdown`.
- I selettori CSS annidati e i combinatori sono supportati se è necessaria maggiore specificità.
- Se più elementi corrispondono al selettore, viene restituito un array, che puoi elaborare con i [[Filtri#Array e oggetti|filtri per array e oggetti]] come `join` o `map`.

Le variabili selettore possono anche essere utilizzate direttamente nella [[Logica|logica dei modelli]]:

- Nei cicli: `{% for comment in selector:.comment %}...{% endfor %}`
- Nelle condizioni: `{% if selector:.premium-badge %}...{% endif %}`
- Nell'assegnazione di variabili: `{% set items = selector:.list-item %}`

## Variabili Schema.org

Le variabili schema permettono di estrarre dati da [schema.org](https://schema.org/) JSON-LD nella pagina. I dati schema.org possono anche essere utilizzati per [[Modelli#Schema.org matching|attivare automaticamente un modello]].

- `{{schema:@Tipo:chiave}}` restituisce il valore della chiave dallo schema.
- `{{schema:@Tipo:genitore.figlio}}` restituisce il valore di una proprietà annidata.
- `{{schema:@Tipo:chiaveArray}}` restituisce il primo elemento di un array.
- `{{schema:@Tipo:chiaveArray[indice].proprietà}}` restituisce l'elemento all'indice specificato in un array.
- `{{schema:@Tipo:chiaveArray[*].proprietà}}` restituisce una proprietà specifica da tutti gli elementi in un array.

Puoi anche utilizzare una notazione abbreviata senza specificare il tipo di schema:

- `{{schema:author}}` corrisponderà alla prima proprietà `author` trovata in qualsiasi tipo di schema.
- `{{schema:name}}` corrisponderà alla prima proprietà `name` trovata in qualsiasi tipo di schema.

Questa notazione abbreviata è particolarmente utile quando non si conosce o non importa il tipo di schema specifico, ma si conosce il nome della proprietà che si sta cercando.

Le proprietà annidate e l'accesso agli array funzionano ugualmente, sia con che senza il `@Tipo` dello schema specificato:

- `{{schema:author.name}}` troverà la prima proprietà `author` e poi accederà alla sua sotto-proprietà `name`.
- `{{schema:author[0].name}}` accederà al `name` del primo autore in un array di autori.
- `{{schema:author[*].name}}` restituirà un array di tutti i nomi degli autori.
