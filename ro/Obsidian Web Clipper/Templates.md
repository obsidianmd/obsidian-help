---
permalink: web-clipper/templates
description: Învață să creezi șabloane care captează și organizează automat metadatele paginilor web cu Web Clipper.
---
[[Introduction to Obsidian Web Clipper|Web Clipper]] îți permite să creezi șabloane care captează și organizează automat metadate din paginile web. Șabloane exemplu sunt disponibile în [repozitoriul clipper-templates](https://github.com/kepano/clipper-templates). 

## Creează sau editează un șablon

Pentru a **crea** un șablon, mergi la setările Web Clipper și dă clic pe butonul **Șablon nou** din bara laterală. Poți de asemenea **duplica** un șablon din meniul de acțiuni **Mai multe**, din colțul din dreapta sus.

Pentru a **edita** un șablon, alege un șablon din bara laterală. Modificările tale vor fi salvate automat.

Șabloanele folosesc [[Variables|variabile]] și [[Filters|filtre]], care îți permit să adaptezi modul în care va fi salvat conținutul.

## Importă și exportă șabloane Web Clipper

Pentru a importa un șablon:

1. Deschide extensia și dă clic pe pictograma roată dințată **[[Settings|Setări]]**.
2. Mergi la orice șablon din listă.
3. Dă clic pe **Importă** din colțul din dreapta sus sau trage și plasează fișierul (fișierele) `.json` cu șablonul oriunde în zona șablonului.

Pentru a exporta un șablon, dă clic pe **Exportă** din colțul din dreapta sus. Aceasta va descărca fișierul `.json` al șablonului. Poți de asemenea copia datele șablonului în clipboard prin meniul **Mai multe**.

## Setările șablonului

### Comportament

Definește modul în care conținutul din Web Clipper va fi adăugat în Obsidian:

- **Creează o notă nouă**
- **Adaugă la o notă existentă**, la început sau la sfârșit
- **Adaugă la nota zilnică**, la început sau la sfârșit (necesită ca modulul [[daily notes|note zilnice]] să fie activ)

### Declanșează automat un șablon

Declanșatoarele de șablon îți permit să selectezi automat un șablon în funcție de adresa URL a paginii curente sau de datele [schema.org](https://schema.org/). Poți defini mai multe reguli pentru fiecare șablon, separate printr-o linie nouă.

Prima potrivire din lista ta de șabloane determină ce șablon este folosit. Poți trage șabloanele în sus și în jos în setările Web Clipper pentru a schimba ordinea în care sunt potrivite.

> [!tip]- Setează un șablon de rezervă
> Dacă o pagină nu se potrivește cu nicio regulă de declanșare, Web Clipper folosește primul șablon din lista ta. Păstrează șablonul pe care îl vrei ca rezervă în partea de sus a listei pentru a te asigura că este folosit pentru pagini fără o potrivire specifică.

#### Potrivire simplă a URL-ului

Potrivirea simplă declanșează un șablon dacă adresa URL a paginii curente *începe cu* modelul dat. De exemplu:

- `https://obsidian.md` se va potrivi cu orice URL care începe cu acest text.

#### Potrivire cu expresii regulate

Poți declanșa șabloane pe baza unor modele de URL mai complexe folosind expresii regulate. Încadrează-ți modelul regex între bare oblice (`/`). Nu uita să pui o bară oblică inversă (`\`) înaintea caracterelor speciale din modelele regex (precum `.` și `/`). De exemplu:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` se va potrivi cu orice pagină de referință IMDB.

#### Potrivire schema.org

Poți declanșa șabloane pe baza datelor [schema.org](https://schema.org/) prezente pe pagină. Folosește prefixul `schema:` urmat de cheia de schemă pe care vrei să o potrivești. Poți specifica opțional o valoare așteptată. De exemplu:

- `schema:@Recipe` se va potrivi cu paginile unde tipul de schemă este „Recipe”.
- `schema:@Recipe.name` se va potrivi cu paginile unde `@Recipe.name` este prezent.
- `schema:@Recipe.name=Cookie` se va potrivi cu paginile unde `@Recipe.name` este „Cookie”.

Valorile schema.org pot fi de asemenea folosite pentru a [[Variables#Schema.org variables|popula automat date în șabloane]].

### Contextul Interpreter

Când [[Interpreter|Interpreter]] este activat, poți folosi [[Variables#Prompt variables|variabile prompt]] pentru a extrage conținutul paginii folosind limbaj natural. Pentru fiecare șablon poți defini [[Interpreter#Context|contextul]] la care Interpreter are acces. 
