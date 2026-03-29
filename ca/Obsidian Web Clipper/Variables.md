---
permalink: web-clipper/variables
---
Les [[Obsidian Web Clipper/Plantilles|plantilles del Web Clipper]] poden utilitzar variables per omplir automàticament dades de la pàgina en una plantilla. Les variables es poden utilitzar al **nom de la nota**, la **ubicació de la nota**, les **propietats** i el **contingut de la nota**. Les variables també es poden modificar utilitzant [[Filtres|filtres]].

Utilitzeu la icona `...` a l'extensió [[Introducció a Obsidian Web Clipper|Web Clipper]] per accedir a les variables de la pàgina actual per utilitzar-les en plantilles. Hi ha cinc tipus de variables que podeu utilitzar:

- [[Variables#Variables preestablertes|Variables preestablertes]]
- [[Variables#Variables de sol·licitud|Variables de sol·licitud]]
- [[Variables#Variables meta|Variables meta]]
- [[Variables#Variables de selector|Variables de selector]]
- [[Variables#Variables Schema.org|Variables Schema.org]]

## Variables preestablertes

Les variables preestablertes es generen automàticament basant-se en el contingut de la pàgina. Normalment funcionen per a la majoria de llocs web.

La variable de contingut principal és `{{content}}`, que conté el contingut de l'article, o els [[Ressaltar pàgines web|ressaltats]], o la selecció si hi ha text seleccionat a la pàgina. Tingueu en compte que `{{content}}` intenta extreure el contingut principal de la pàgina, que pot no ser sempre el que voleu. En aquest cas, podeu utilitzar altres variables preestablertes o variables de selector per extreure el contingut que necessiteu.

| Variable            | Descripció                                                                             |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Autor de la pàgina                                                                     |
| `{{content}}`       | Contingut de l'article, [[Ressaltar pàgines web\|ressaltats]], o selecció, en format Markdown |
| `{{contentHtml}}`   | Contingut de l'article, [[Ressaltar pàgines web\|ressaltats]], o selecció, en format HTML     |
| `{{date}}`          | Data actual, es pot formatar utilitzant el filtre `date`                                |
| `{{description}}`   | Descripció o extracte                                                                  |
| `{{domain}}`        | Domini                                                                                 |
| `{{favicon}}`       | URL del favicon                                                                        |
| `{{fullHtml}}`      | HTML sense processar del contingut complet de la pàgina                                 |
| `{{highlights}}`    | [[Ressaltar pàgines web\|Ressaltats]] amb text i marques de temps                      |
| `{{image}}`         | URL de la imatge de compartició social                                                  |
| `{{published}}`     | Data de publicació, es pot formatar utilitzant el filtre `date`                         |
| `{{selection}}`     | Selecció en format Markdown                                                            |
| `{{selectionHtml}}` | Selecció en format HTML                                                                |
| `{{site}}`          | Nom del lloc o editor                                                                  |
| `{{title}}`         | Títol de la pàgina                                                                     |
| `{{time}}`          | Data i hora actuals                                                                    |
| `{{url}}`           | URL actual                                                                             |
| `{{words}}`         | Comptador de paraules                                                                  |

## Variables de sol·licitud

Les variables de sol·licitud aprofiten models de llenguatge per extreure i modificar dades utilitzant llenguatge natural. Les variables de sol·licitud requereixen que l'[[Interpretar pàgines web|Intèrpret]] estigui activat i configurat.

Les variables de sol·licitud utilitzen la sintaxi `{{"un resum de la pàgina"}}`. Les cometes dobles al voltant de la sol·licitud són importants i distingeixen les sol·licituds de les variables preestablertes. Les respostes de les sol·licituds es poden postprocessar amb [[Filtres|filtres]], p. ex. `{{"un resum de la pàgina"|blockquote}}`.

### Quan utilitzar variables de sol·licitud

Les variables de sol·licitud tenen l'avantatge de ser extremadament flexibles i fàcils d'escriure, però comporten diversos compromisos: són més lentes d'executar i poden tenir consideracions de cost i privacitat depenent del [[Interpretar pàgines web#Models|proveïdor]] que trieu.

A diferència d'altres tipus de variables, les variables de sol·licitud necessiten ser processades per un model de llenguatge extern, de manera que es substitueixen només un cop l'[[Interpretar pàgines web|Intèrpret]] s'ha executat.

És millor *no* utilitzar variables de sol·licitud si les dades que voleu extreure estan en un format consistent que es podria extreure amb altres tipus de variables.

D'altra banda, les variables de sol·licitud poden ser útils si les dades que voleu extreure estan en un format *inconsistent* entre llocs web. Per exemple, podeu crear una [[Obsidian Web Clipper/Plantilles|plantilla]] per desar llibres que sigui agnòstica del lloc web de llibres. Variables de sol·licitud com `{{"autor del llibre"}}` funcionaran en qualsevol lloc de llibres, mentre que les variables de selector normalment només funcionen per a un lloc.

### Exemples

Les sol·licituds poden utilitzar gairebé qualsevol consulta en llenguatge natural. Depenent del model que utilitzeu, les sol·licituds poden consultar o traduir dades entre idiomes.

- `{{"un resum en tres punts, traduït al francès"}}` per extreure punts sobre la pàgina i traduir-los al francès.
- `{{"un resumé de la page en trois points"}}` per extreure tres punts utilitzant una sol·licitud en francès.

Les sol·licituds poden transformar el contingut de la pàgina en JSON que es pot manipular amb [[Filtres|filtres]]. Per exemple:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Variables meta

Les variables meta permeten extreure dades d'[elements meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) a la pàgina, incloent dades [Open Graph](https://ogp.me/) utilitzades per omplir les previsualitzacions de compartició social.

- `{{meta:name}}` retorna el contingut de l'etiqueta meta name amb el nom donat, p. ex. `{{meta:name:description}}` per a l'etiqueta meta `description`.
- `{{meta:property}}` retorna el contingut de l'etiqueta meta property amb la propietat donada, p. ex. `{{meta:property:og:title}}` per a l'etiqueta meta `og:title`.

## Variables de selector

Les variables de selector permeten extreure contingut de text d'elements de la pàgina utilitzant [selectors CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

La sintaxi és `{{selector:selectorCss?atribut}}`, on `?atribut` és opcional. Si no s'especifica cap atribut, es retorna el contingut de text de l'element. També podeu utilitzar `{{selectorHtml:selectorCss}}` per obtenir el contingut HTML de l'element. Les variables de selector tendeixen a funcionar millor en un lloc web específic o un conjunt de llocs web que tenen una estructura HTML consistent.

- `{{selector:h1}}` retorna el contingut de text de qualsevol element `h1` a la pàgina.
- `{{selector:.author}}` retorna el contingut de text de qualsevol element `.author` a la pàgina.
- `{{selector:img.hero?src}}` retorna l'atribut `src` de la imatge amb classe `hero`.
- `{{selector:a.main-link?href}}` retorna l'atribut `href` de l'etiqueta d'ancoratge amb classe `main-link`.
- `{{selectorHtml:body|markdown}}` retorna tot l'HTML de l'element `body`, convertit a Markdown utilitzant el [[Filtres#Processament d'HTML|filtre]] `markdown`.
- Els selectors CSS imbricats i combinadors són compatibles si necessiteu més especificitat.
- Si múltiples elements coincideixen amb el selector, es retorna una matriu, que podeu processar amb [[Filtres#Matrius i objectes|filtres de matrius i objectes]] com `join` o `map`.

Les variables de selector també es poden utilitzar directament en la [[Lògica|lògica de plantilles]]:

- En bucles: `{% for comment in selector:.comment %}...{% endfor %}`
- En condicionals: `{% if selector:.premium-badge %}...{% endif %}`
- En assignació de variables: `{% set items = selector:.list-item %}`

## Variables Schema.org

Les variables d'esquema permeten extreure dades de [schema.org](https://schema.org/) JSON-LD a la pàgina. Les dades de schema.org també es poden utilitzar per [[Obsidian Web Clipper/Plantilles#Coincidència amb Schema.org|activar automàticament una plantilla]].

- `{{schema:@Tipus:clau}}` retorna el valor de la clau de l'esquema.
- `{{schema:@Tipus:pare.fill}}` retorna el valor d'una propietat imbricada.
- `{{schema:@Tipus:clauMatriu}}` retorna el primer element d'una matriu.
- `{{schema:@Tipus:clauMatriu[índex].propietat}}` retorna l'element a l'índex especificat d'una matriu.
- `{{schema:@Tipus:clauMatriu[*].propietat}}` retorna una propietat específica de tots els elements d'una matriu.

També podeu utilitzar una notació abreujada sense especificar el tipus d'esquema:

- `{{schema:author}}` coincidirà amb la primera propietat `author` trobada en qualsevol tipus d'esquema.
- `{{schema:name}}` coincidirà amb la primera propietat `name` trobada en qualsevol tipus d'esquema.

Aquesta notació abreujada és especialment útil quan no coneixeu o no us importa el tipus d'esquema específic, però coneixeu el nom de la propietat que esteu cercant.

Les propietats imbricades i l'accés a matrius funcionen igualment, tant amb com sense l'`@Tipus` d'esquema especificat:

- `{{schema:author.name}}` trobarà la primera propietat `author` i després accedirà a la seva subpropietat `name`.
- `{{schema:author[0].name}}` accedirà al `name` del primer autor en una matriu d'autors.
- `{{schema:author[*].name}}` retornarà una matriu de tots els noms d'autors.
