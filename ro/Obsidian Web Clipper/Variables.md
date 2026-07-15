---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Templates|Șabloanele Web Clipper]] pot folosi variabile pentru a popula automat date de pe pagină într-un șablon. Variabilele pot fi folosite în **numele notei**, **locația notei**, **proprietăți** și **conținutul notei**. Variabilele pot fi de asemenea modificate folosind [[filters|filtre]].

Folosește pictograma `...` din extensia [[Introduction to Obsidian Web Clipper|Web Clipper]] pentru a accesa variabilele paginii curente, pe care le poți folosi în șabloane. Există cinci tipuri de variabile pe care le poți folosi:

- [[Variables#Preset variables|Variabile prestabilite]]
- [[Variables#Prompt variables|Variabile prompt]]
- [[Variables#Meta variables|Variabile meta]]
- [[Variables#Selector variables|Variabile selector]]
- [[Variables#Schema.org variables|Variabile Schema.org]]

## Variabile prestabilite

Variabilele prestabilite sunt generate automat pe baza conținutului paginii. Acestea funcționează de obicei pentru majoritatea site-urilor web.

Variabila principală de conținut este `{{content}}`, care conține conținutul articolului, [[Highlighter|evidențierile]] sau selecția, dacă există text selectat pe pagină. Reține că `{{content}}` încearcă să extragă conținutul principal al paginii, ceea ce nu este întotdeauna ceea ce îți dorești. În acest caz, poți folosi alte variabile prestabilite sau variabile selector pentru a extrage conținutul de care ai nevoie.

| Variabilă            | Descriere                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Autorul paginii                                                                     |
| `{{content}}`       | Conținutul articolului, [[Highlighter\|evidențierile]] sau selecția, în format Markdown |
| `{{contentHtml}}`   | Conținutul articolului, [[Highlighter\|evidențierile]] sau selecția, în format HTML     |
| `{{date}}`          | Data curentă, poate fi formatată folosind filtrul `date`                                 |
| `{{description}}`   | Descriere sau rezumat                                                                 |
| `{{domain}}`        | Domeniu                                                                                 |
| `{{favicon}}`       | Adresa URL a favicon-ului                                                                            |
| `{{fullHtml}}`      | HTML neprocesat pentru întregul conținut al paginii                                             |
| `{{highlights}}`    | [[Highlighter\|Evidențieri]] cu text și marcaje de timp                           |
| `{{image}}`         | Adresa URL a imaginii pentru partajare pe rețele sociale                                                                 |
| `{{published}}`     | Data publicării, poate fi formatată folosind filtrul `date`                               |
| `{{selection}}`     | Selecția în format Markdown                                                           |
| `{{selectionHtml}}` | Selecția în format HTML                                                               |
| `{{site}}`          | Numele site-ului sau al editorului                                                                 |
| `{{title}}`         | Titlul paginii                                                                      |
| `{{time}}`          | Data și ora curente                                                                  |
| `{{url}}`           | Adresa URL curentă                                                                            |
| `{{words}}`         | Numărul de cuvinte                                                                             |

## Variabile prompt

Variabilele prompt folosesc modele de limbaj pentru a extrage și modifica date folosind limbaj natural. Variabilele prompt necesită ca [[Interpreter|Interpreter]] să fie activat și configurat.

Variabilele prompt folosesc sintaxa `{{"a summary of the page"}}`. Ghilimelele duble din jurul prompt-ului sunt importante și disting prompturile de variabilele prestabilite. Răspunsurile la prompturi pot fi procesate ulterior cu [[filters|filtre]], de ex. `{{"a summary of the page"|blockquote}}`.

### Când să folosești variabile prompt

Variabilele prompt au avantajul de a fi extrem de flexibile și ușor de scris, dar vin cu mai multe compromisuri: rulează mai lent și pot avea implicații de cost și confidențialitate, în funcție de [[Interpreter#Models|furnizorul]] pe care îl alegi.

Spre deosebire de alte tipuri de variabile, variabilele prompt trebuie să fie procesate de un model de limbaj extern, deci sunt înlocuite doar după ce [[Interpreter|Interpreter]] a rulat.

Este mai bine să *nu* folosești variabile prompt dacă datele pe care vrei să le extragi sunt într-un format consecvent care ar putea fi extras cu alte tipuri de variabile. 

Pe de altă parte, variabilele prompt pot fi utile dacă datele pe care vrei să le extragi au un format *inconsecvent* pe diferite site-uri web. De exemplu, poți crea un [[Obsidian Web Clipper/Templates|șablon]] pentru a salva cărți care este independent de site-ul de cărți. Variabilele prompt precum `{{"author of the book"}}` vor funcționa pe orice site de cărți, în timp ce variabilele selector funcționează de obicei doar pentru un singur site.

### Exemple

Prompturile pot folosi aproape orice interogare în limbaj natural. În funcție de modelul pe care îl folosești, prompturile pot interoga sau traduce date în diferite limbi.

- `{{"a three bullet point summary, translated to French"}}` pentru a extrage puncte cheie despre pagină și a le traduce în franceză.
- `{{"un resumé de la page en trois points"}}` pentru a extrage trei puncte cheie folosind un prompt în franceză.

Prompturile pot transforma conținutul paginii în JSON, care poate fi manipulat cu [[Filters|filtre]]. De exemplu:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Variabile meta

Variabilele meta îți permit să extragi date din [elementele meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) ale paginii, inclusiv datele [Open Graph](https://ogp.me/) folosite pentru a popula previzualizările de partajare pe rețele sociale.

- `{{meta:name}}` returnează conținutul etichetei meta name cu numele dat, de ex. `{{meta:name:description}}` pentru eticheta meta `description`.
- `{{meta:property}}` returnează conținutul etichetei meta property cu proprietatea dată, de ex. `{{meta:property:og:title}}` pentru eticheta meta `og:title`.

## Variabile selector

Variabilele selector îți permit să extragi conținut text din elementele paginii folosind [selectori CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

Sintaxa este `{{selector:cssSelector?attribute}}`, unde `?attribute` este opțional. Dacă nu este specificat niciun atribut, este returnat conținutul text al elementului. Poți de asemenea folosi `{{selectorHtml:cssSelector}}` pentru a obține conținutul HTML al elementului. Variabilele selector tind să funcționeze cel mai bine pe un site web specific sau pe un set de site-uri web cu structură HTML consecventă.

- `{{selector:h1}}` returnează conținutul text al oricăror elemente `h1` de pe pagină.
- `{{selector:.author}}` returnează conținutul text al oricăror elemente `.author` de pe pagină.
- `{{selector:img.hero?src}}` returnează atributul `src` al imaginii cu clasa `hero`.
- `{{selector:a.main-link?href}}` returnează atributul `href` al etichetei ancoră cu clasa `main-link`.
- `{{selectorHtml:body|markdown}}` returnează întregul HTML al elementului `body`, convertit în Markdown folosind [[Filters#HTML processing|filtrul]] `markdown`.
- Selectorii CSS imbricați și combinatorii sunt acceptați dacă ai nevoie de mai multă specificitate.
- Dacă mai multe elemente se potrivesc cu selectorul, este returnat un array, pe care îl poți procesa cu [[Filters#Arrays and objects|filtre pentru array-uri și obiecte]] precum `join` sau `map`.

Variabilele selector pot fi de asemenea folosite direct în [[Logic|logica șablonului]]:

- În bucle: `{% for comment in selector:.comment %}...{% endfor %}`
- În condiționale: `{% if selector:.premium-badge %}...{% endif %}`
- În atribuirea variabilelor: `{% set items = selector:.list-item %}`

## Variabile Schema.org

Variabilele schema îți permit să extragi date din JSON-LD [schema.org](https://schema.org/) prezent pe pagină. Datele schema.org pot fi de asemenea folosite pentru a [[Obsidian Web Clipper/Templates#Schema.org matching|declanșa automat un șablon]].

- `{{schema:@Type:key}}` returnează valoarea cheii din schemă.
- `{{schema:@Type:parent.child}}` returnează valoarea unei proprietăți imbricate.
- `{{schema:@Type:arrayKey}}` returnează primul element dintr-un array.
- `{{schema:@Type:arrayKey[index].property}}` returnează elementul de la indexul specificat dintr-un array.
- `{{schema:@Type:arrayKey[*].property}}` returnează o proprietate specifică din toate elementele unui array.

Poți de asemenea folosi o notație prescurtată fără a specifica tipul de schemă:

- `{{schema:author}}` se va potrivi cu prima proprietate `author` găsită în orice tip de schemă.
- `{{schema:name}}` se va potrivi cu prima proprietate `name` găsită în orice tip de schemă.

Această prescurtare este utilă în special atunci când nu știi sau nu îți pasă de tipul specific de schemă, dar știi numele proprietății pe care o cauți.

Proprietățile imbricate și accesul la array-uri funcționează la fel de bine, atât cu, cât și fără tipul de schemă `@Type` specificat:

- `{{schema:author.name}}` va găsi prima proprietate `author` și apoi va accesa sub-proprietatea `name` a acesteia.
- `{{schema:author[0].name}}` va accesa `name`-ul primului autor dintr-un array de autori.
- `{{schema:author[*].name}}` va returna un array cu toate numele autorilor.
