---
permalink: bases/syntax
publish: true
mobile: true
description: Această pagină oferă o introducere în sintaxa Bases din Obsidian.
aliases:
  - Bases syntax
---

Când [[Creează o bază|creezi o bază]] în Obsidian, aceasta este salvată ca fișier `.base`. Bazele sunt de obicei editate folosind interfața aplicației, dar sintaxa poate fi editată și manual, și încorporată într-un bloc de cod.

Sintaxa [[Introducere în Baze|Baze]] definește [[Afișaje|vizualizări]], filtre și [[Formule|formule]]. Bazele trebuie să fie YAML valid, conform schemei definite mai jos.

## Exemplu

Iată un exemplu de fișier bază. Vom parcurge fiecare secțiune în detaliu.

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

### Filtre

Implicit, o bază include toate fișierele din seif. Nu există `from` sau `source` ca în SQL sau Dataview. Secțiunea `filters` îți permite să definești condiții pentru a restrânge setul de date.

```yaml
# Filtru simplu:
filters:
  and:
    - file.hasTag("tag")

# Filtru complex:
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

Există două locuri unde poți aplica filtre:

1. La nivelul global `filters` (arătat mai sus), unde se aplică tuturor vizualizărilor din bază.
2. La nivelul `view`, unde se aplică doar unei anumite vizualizări.

Aceste două secțiuni sunt echivalente din punct de vedere funcțional și, la evaluarea pentru o vizualizare, vor fi concatenate cu un `AND`.

Secțiunea `filters` conține fie o singură instrucțiune de filtrare sub formă de string, fie un obiect de filtrare definit recursiv. Obiectele de filtrare pot conține unul dintre `and`, `or` sau `not`. Aceste chei sunt o listă eterogenă de alte obiecte de filtrare sau instrucțiuni de filtrare sub formă de stringuri. O instrucțiune de filtrare este o linie care se evaluează ca adevărată sau falsă atunci când este aplicată unei note. Poate fi una dintre următoarele:

- O comparație de bază folosind operatori aritmetici standard.
- O funcție. O varietate de [[Funcții|funcții]] sunt incluse implicit, iar modulele pot adăuga funcții suplimentare.

Sintaxa și funcțiile disponibile pentru filtre și formule sunt aceleași.

### Formule

Secțiunea `formulas` definește [[Formule|proprietăți de tip formulă]] care pot fi afișate în toate vizualizările din fișierul bază.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Proprietățile de tip formulă acceptă operatori aritmetici de bază și o varietate de [[Funcții|funcții]] incluse implicit. Pe viitor, modulele vor putea adăuga funcții pentru a fi utilizate în formule.

Poți face referire la proprietăți în moduri diferite, în funcție de tipul lor:

- **Proprietățile notei** sunt proprietăți definite în antetul notei (frontmatter). De exemplu `note.price` sau `note["price"]`.
  Dacă nu este specificat niciun prefix, se presupune că proprietatea este o proprietate `note`.
- **Proprietățile fișierului** descriu fișierul în sine.
  De exemplu `file.size` sau `file.ext`. Poți face referire și direct la obiectul fișier, de exemplu, `file.hasLink()`.
- **Proprietățile de tip formulă** sunt alte formule din bază.
  Exemplu `formula.formatted_price`.

O formulă poate folosi valori din alte proprietăți de tip formulă, atât timp cât nu există o referință circulară.

Proprietățile de tip formulă sunt întotdeauna stocate ca stringuri în YAML, dar **tipul de date al rezultatului** este determinat de tipul datelor subiacente și de valoarea returnată de orice funcții utilizate.

Reține că utilizarea ghilimelelor imbricate este necesară pentru a include literali de text în câmpul YAML. Literalii de text trebuie să fie încadrați între ghilimele simple sau duble.

### Proprietăți

Secțiunea `properties` permite stocarea informațiilor de configurare despre fiecare proprietate. Rămâne la latitudinea fiecărei vizualizări cum să folosească aceste valori de configurare. De exemplu, în tabele, numele afișat este folosit pentru anteturile coloanelor.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Numele afișate nu sunt folosite în filtre sau formule.

### Rezumate

Secțiunea `summaries` poate fi folosită pentru a defini formule de rezumat personalizate. Pe lângă definirea formulelor de rezumat aici, sunt disponibile mai multe formule de rezumat implicite.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

În acest exemplu, formula `customAverage` este identică cu formula implicită `Average`, cu excepția faptului că valoarea este rotunjită la un alt număr de zecimale. În formulele de rezumat, cuvântul cheie `values` este o listă care conține toate valorile pentru acea proprietate, în fiecare notă din setul de rezultate. Formula de rezumat trebuie să returneze o singură `Value` (valoare).

Reține că această secțiune `summaries` este diferită de secțiunea `summaries` din configurația vizualizării (explicată mai jos), unde formulele de rezumat sunt asociate unor proprietăți specifice.

#### Formule de rezumat implicite

| Nume      | Tip de intrare | Descriere                                                   |
| --------- | ---------- | ------------------------------------------------------------- |
| Average   | Number     | Media matematică a tuturor numerelor din valorile de intrare.   |
| Min       | Number     | Cel mai mic număr din valorile de intrare.                    |
| Max       | Number     | Cel mai mare număr din valorile de intrare.                    |
| Sum       | Number     | Suma tuturor numerelor din intrare.                          |
| Range     | Number     | Diferența dintre `Max` și `Min`.                       |
| Median    | Number     | Mediana matematică a tuturor numerelor din valorile de intrare. |
| Stddev    | Number     | Deviația standard a tuturor numerelor din valorile de intrare.  |
| Earliest  | Date       | Cea mai timpurie dată din valorile de intrare.                      |
| Latest    | Date       | Cea mai recentă dată din valorile de intrare.                      |
| Range     | Date       | Diferența dintre `Latest` și `Earliest`.               |
| Checked   | Boolean    | Numărul valorilor `true`.                                  |
| Unchecked | Boolean    | Numărul valorilor `false`.                                  |
| Empty     | Any        | Numărul valorilor din intrare care sunt goale.             |
| Filled    | Any        | Numărul valorilor din intrare care nu sunt goale.         |
| Unique    | Any        | Numărul valorilor unice din intrare.                        |

### Vizualizări

Secțiunea `views` definește modul în care datele pot fi afișate. Fiecare intrare din lista `views` definește o vizualizare separată a acelorași date, și pot exista oricâte vizualizări diferite ai nevoie.

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

- `type` selectează dintre tipurile de vizualizare incluse implicit și cele adăugate de module.
- `name` este numele afișat și poate fi folosit pentru a defini vizualizarea implicită.
- `filters` sunt exact la fel ca cele descrise mai sus, dar se aplică doar vizualizării respective.
- `groupBy` specifică o proprietate și o direcție de sortare. Valoarea proprietății specificate pentru fiecare rând este folosită pentru a plasa rândul în grupuri.
- `summaries` asociază numele proprietăților cu un rezumat denumit. Rezumatele efectuează o agregare a proprietății pentru toate rândurile.

[[Afișaje|Vizualizările]] pot adăuga date suplimentare pentru a stoca orice informație necesară pentru menținerea stării sau pentru afișarea corectă, însă autorii de module trebuie să aibă grijă să nu folosească chei deja utilizate de modulul de bază Bases. De exemplu, o vizualizare de tip tabel poate folosi acest lucru pentru a limita numărul de rânduri sau pentru a selecta ce coloană este folosită pentru sortarea rândurilor și în ce direcție. Un alt tip de vizualizare, precum o hartă, ar putea folosi acest lucru pentru a stabili ce proprietate din notă corespunde latitudinii și longitudinii și ce proprietate ar trebui afișată ca titlu al pinului.

Pe viitor, un API va permite vizualizărilor să citească și să scrie aceste valori, permițându-le să își construiască propria interfață de configurare.

## Proprietăți

Există trei tipuri de proprietăți folosite în baze:

1. **Proprietățile notei**, stocate în antetul (frontmatter) fișierelor Markdown.
2. **Proprietățile fișierului**, accesibile pentru toate tipurile de fișiere.
3. **Proprietățile de tip formulă**, definite chiar în fișierul `.base` (vezi mai sus).

### Proprietățile notei

[[Proprietăți|Proprietățile notei]] sunt disponibile doar pentru fișierele Markdown și sunt stocate în antetul YAML (frontmatter) al fiecărei note. Aceste proprietăți pot fi accesate folosind formatul `note.author` sau, prescurtat, simplu `author`.

### Proprietățile fișierului

Proprietățile fișierului se referă la fișierul testat sau evaluat în acel moment. Proprietățile fișierului sunt disponibile pentru toate [[Formate de fișiere acceptate|tipurile de fișiere]], inclusiv atașamentele.

De exemplu, un filtru `file.ext == "md"` va fi adevărat pentru toate fișierele Markdown și fals în rest.

| Proprietate      | Tip   | Descriere                                                   |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | List   | Lista fișierelor cu referințe. Notă: Această proprietate solicită intens performanța. Când este posibil, inversează căutarea și folosește `file.links`. Nu reîmprospătează automat rezultatele când seiful este modificat. |
| `file.ctime`  | Date   | Data creării                                                  |
| `file.embeds` | List   | Lista tuturor încorporărilor din notă                                |
| `file.ext`    | String | Extensia fișierului                                                |
| `file.file`   | File   | Obiectul fișier, utilizabil doar în funcții specifice                |
| `file.folder` | String | Calea directorului fișierului                                       |
| `file.links`  | List   | Lista tuturor legăturilor interne din notă, inclusiv din antet (frontmatter) |
| `file.mtime`  | Date   | Data modificării                                                  |
| `file.name`   | String | Numele fișierului                                                   |
| `file.path`   | String | Calea fișierului                                                |
| `file.properties`   | Object | Toate proprietățile fișierului. Notă: Nu reîmprospătează automat rezultatele când seiful este modificat. |
| `file.size`   | Number | Dimensiunea fișierului                                                     |
| `file.tags`   | List   | Lista tuturor etichetelor din conținutul și antetul fișierului          |

### Accesarea proprietăților cu `this`

Folosește obiectul `this` pentru a accesa proprietățile fișierului. Ceea ce reprezintă `this` depinde de locul în care este afișată baza.

Când baza este deschisă în zona principală de conținut, `this` indică proprietățile fișierului bază însuși. De exemplu, folosind `this.file.folder` se returnează calea directorului în care se află baza.

Când baza este încorporată într-un alt fișier, `this` indică proprietățile fișierului care _încorporează_ baza (nota sau Pânza care conține baza). De exemplu, folosind `this.file.name` se returnează numele fișierului care încorporează baza, nu al bazei.

Când baza este într-o bară laterală, `this` face referire la fișierul activ din zona principală de conținut. Acest lucru îți permite să creezi interogări bazate pe fișierul activ. De exemplu, poți folosi `file.hasLink(this.file)` pentru a replica panoul de referințe.

## Operatori

### Operatori aritmetici

Operatorii aritmetici efectuează operații aritmetice pe numere. De exemplu, `radius * (2 * 3.14)`.

| Operator | Descriere |
| -------- | ----------- |
| `+`      | plus        |
| `-`      | minus       |
| `*`      | înmulțire    |
| `/`      | împărțire      |
| `%`      | modulo      |
| `( )`    | paranteză |

### Aritmetica datelor calendaristice

Datele calendaristice pot fi modificate prin adunarea și scăderea unor durate. Unitățile de durată acceptă formate multiple:

| Unitate                     | Durată |
| ------------------------ | -------- |
| `y`, `year`, `years`     | an     |
| `M`, `month`, `months`   | lună    |
| `d`, `day`, `days`       | zi     |
| `w`, `week`, `weeks`     | săptămână     |
| `h`, `hour`, `hours`     | oră     |
| `m`, `minute`, `minutes` | minut   |
| `s`, `second`, `seconds` | secundă   |

Pentru a modifica sau decala obiectele Date, folosește operatorul `+` sau `-` împreună cu un string de durată. De exemplu, `date + "1M"` adaugă 1 lună la dată, în timp ce `date - "2h"` scade 2 ore din dată.

[[Funcții|Funcția]] globală `today()` poate fi folosită pentru a obține data curentă, iar `now()` poate fi folosită pentru a obține data curentă împreună cu ora.

- `now() + "1 day"` returnează un datetime exact 24 de ore de la momentul execuției.
- `file.mtime > now() - "1 week"` returnează `true` dacă fișierul a fost modificat în ultima săptămână.
- `date("2024-12-01") + "1M" + "4h" + "3m"` returnează un obiect Date reprezentând `2025-01-01 04:03:00`.
- Scade două date pentru a obține diferența în milisecunde dintre ele, de exemplu, `now() - file.ctime`.
- Pentru a obține doar porțiunea de dată dintr-un obiect Date cu oră, folosește `datetime.date()`.
- Pentru a formata un obiect Date, folosește funcția `format()`, de exemplu `datetime.format("YYYY-MM-DD")`.

### Operatori de comparație

Operatorii de comparație pot fi folosiți pentru a compara numere sau obiecte Date. Egal și diferit pot fi folosiți cu orice tip de valoare, nu doar cu numere și date.

| Operator | Descriere              |
| -------- | ------------------------ |
| `==`     | egal                   |
| `!=`     | diferit                |
| `>`      | mai mare decât             |
| `<`      | mai mic decât             |
| `>=`     | mai mare sau egal cu |
| `<=`     | mai mic sau egal cu    |

### Operatori booleeni

Operatorii booleeni pot fi folosiți pentru a combina sau inversa valori logice, rezultând o valoare adevărată sau falsă.

| Operator | Descriere |
| -------- | ----------- |
| `!`      | negație logică |
| `&&`     | și logic |
| \|\|     | sau logic  |

## Funcții

Consultă [[Funcții|lista de funcții]] care pot fi folosite în formule și [[Afișaje|filtre]].

## Tipuri

Bazele au un sistem de tipuri care este folosit de formule și filtre pentru a aplica funcții proprietăților.

### Stringuri, numere și valori booleene

Stringurile, numerele și valorile booleene sunt valori „primitive” care nu necesită o funcție pentru a fi create.

- Stringurile sunt încadrate între ghilimele simple sau duble, de exemplu `"message"`.
- Numerele sunt scrise ca cifre și pot fi opțional încadrate între paranteze pentru claritate. De exemplu, `1` sau `(2.5)`.
- Valorile booleene sunt scrise ca `true` sau `false`, fără ghilimele.

### Date calendaristice și durate

Datele calendaristice reprezintă o dată specifică, sau o dată și o oră, în funcție de funcția folosită pentru a le crea, sau de tipul care a fost atribuit [[Proprietăți|proprietății]].

- Pentru a construi o dată, folosește funcția `date`, de exemplu `date("2025-01-01 12:00:00")`
- Pentru a modifica o dată, adaugă sau elimină o durată, de exemplu `now() + "1 hour"` sau `today() + "7d"`
- Compară datele folosind operatori de comparație (de exemplu `>` sau `<`) și operatori aritmetici (de exemplu, `(now() + "1d") - now()` returnează `86400000` milisecunde.)
- Pentru a extrage porțiuni dintr-o dată, folosește câmpurile disponibile (`now().hour`), sau o funcție convenabilă (`now.time()`).
- Multe alte [[Funcții|câmpuri și funcții]] sunt disponibile pe obiectele de tip dată.

### Obiecte și liste

- Transformă un singur element într-o listă folosind funcția `list()`. Acest lucru este util în special pentru proprietățile care pot conține fie liste, fie valori simple.
- Accesează elementele listei folosind paranteze pătrate și un index bazat pe 0. De exemplu, `property[0]` returnează primul element din listă.
- Accesează elementele obiectului folosind paranteze pătrate și numele elementului sau notația cu punct. De exemplu, `property.subprop` sau `property["subprop"]`.

### Fișiere și legături

[[Leagă notițe|Wikilinkurile]] din [[Proprietăți|proprietățile din antet (frontmatter)]] sunt recunoscute automat ca obiecte Link. Legăturile vor fi afișate ca o legătură pe care se poate face clic în [[Afișaje|vizualizare]].

- Pentru a construi o legătură, folosește [[Funcții|funcția]] globală `link`, de exemplu `link("filename")` sau `link("https://obsidian.md")`.
- Poți crea o legătură din orice string, de exemplu, `link(file.ctime.date().toString())`.
- Pentru a stabili textul afișat, transmite un string opțional sau o iconiță ca al doilea parametru, de exemplu `link("filename", "display")` sau `link("filename", icon("plus"))`.

Un obiect File poate fi transformat într-o legătură folosind `file.asLink()` cu un text de afișare opțional.

Legăturile pot fi comparate cu `==` și `!=`. Ele sunt echivalente atât timp cât indică spre același fișier, sau, dacă fișierul nu există la momentul căutării, textul lor de legătură trebuie să fie identic.

Legăturile pot fi comparate cu fișiere, precum `file` sau `this`. Ele vor fi considerate egale dacă legătura se rezolvă la acel fișier. De exemplu, `author == this`.

Legăturile pot fi verificate și în conținutul unei liste, de exemplu, `authors.contains(this)`.
