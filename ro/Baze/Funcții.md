---
permalink: bases/functions
publish: true
mobile: true
description: 'Această pagină detaliază funcțiile folosite în Obsidian Bases pentru a manipula datele din proprietăți, în filtre și formule.'
aliases:
  - Functions
---

Funcțiile sunt folosite în [[Introducere în Baze|Baze]] pentru a manipula date din [[Proprietăți|proprietăți]] în [[Afișaje#Filters|filtre]] și [[Formule|formule]]. Consultă referința [[Sintaxă Baze|sintaxa bases]] pentru a afla mai multe despre cum poți folosi funcțiile.

Funcțiile Bases urmează comportamentul JavaScript. Pentru documentație de referință completă, consultă [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).

Pe lângă funcțiile [[Funcții#Global|Global]], majoritatea funcțiilor depind de tipul valorii pe care vrei să o modifici:

- [[Funcții#Any type|Any]]
- [[Funcții#Date type|Date]]
- [[Funcții#String type|String]]
- [[Funcții#Number type|Number]]
- [[Funcții#List type|List]]
- [[Funcții#Link type|Link]]
- [[Funcții#File type|File]]
- [[Funcții#Object type|Object]]
- [[Funcții#Regular expression type|Regular expression]]

## Global

Funcțiile globale sunt folosite fără un tip.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Escapează caracterele speciale dintr-un string pentru a-l face sigur pentru includerea în HTML.

### `date()`

`date(date: string): date`

- `date(string): date` analizează stringul furnizat și returnează un obiect de tip dată.
- Stringul `date` trebuie să fie în formatul `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Analizează un string ca o durată. Consultă secțiunea [[Sintaxă Baze#Date arithmetic|aritmetica datelor calendaristice]] pentru formatul stringului `value`.
- Analizarea explicită nu este necesară pentru aritmetica datelor calendaristice (de exemplu, `now() + '1d'`), dar este necesară atunci când efectuezi operații aritmetice pe durate (de exemplu, `now() + (duration('1d') * 2)`).
- Când efectuezi operații aritmetice pe durate cu scalari, durata trebuie să fie în stânga. De exemplu `duration('5h') * 2`, în loc de `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Returnează un obiect de tip fișier pentru fișierul sau calea specificată.
- Exemplu: `file(link("[[filename]]"))` sau `file("path to file")`.

### `html()`

`html(html: string): html`

- Convertește un string într-un fragment de cod care se afișează ca HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` este expresia de evaluat.
- `trueResult` este rezultatul dacă `condition` este adevărată.
- `falseResult` este rezultatul opțional dacă `condition` este falsă. Dacă este omis, valoarea implicită este `null`.
- Returnează `trueResult` dacă `condition` este adevărată (true) sau truthy, altfel returnează `falseResult`.
- Exemplu: `if(isModified, "Modified", "Unmodified")`

### `image()`

`image(path: string | file | url): image`

- Returnează un obiect de tip imagine care afișează imaginea în vizualizare.
- Exemplu: `image(image-property)` sau `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`.

### `icon()`

`icon(name: string): icon`

- Returnează o valoare care se va afișa ca o iconiță într-o vizualizare. Numele iconiței trebuie să corespundă unei iconițe Lucide acceptate.
- Exemplu: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Analizează un string `path` și returnează un obiect Link care se afișează ca o legătură către calea dată.
- Opțional, furnizează parametrul `display` pentru a stabili textul de afișare al legăturii.

### `list()`

`list(element: any): List`

- Dacă elementul furnizat este o listă, o returnează nemodificată.
- Altfel, încadrează elementul `element` furnizat într-o listă, creând o listă cu un singur element.
- Folosește această funcție când o proprietate conține un amestec de stringuri sau liste în cadrul seifului.
- Exemplu: `list("value")` returnează `["value"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Returnează cel mai mare dintre toate numerele furnizate.

### `min()`

`min(value1: number, value2: number...): number`

- Returnează cel mai mic dintre toate numerele furnizate.

### `now()`

`now(): date`

- Returnează un obiect de tip dată pentru momentul curent.

### `number()`

`number(input: any): number`

- Încearcă să returneze valoarea furnizată ca un număr.
- Returnează obiectele de tip dată ca milisecunde de la epoca Unix.
- Returnează valorile booleene ca `1` sau `0`.
- Analizează stringurile ca numere și returnează o eroare dacă stringul nu este un număr valid.
- Exemplu: `number("3.4")` returnează `3.4`.

### `today()`

`today(): date`

- Returnează un obiect de tip dată pentru data curentă. Porțiunea de oră este setată la miezul nopții.

### `random()`

`random(): number`

- Returnează un număr aleatoriu între 0 și 1.
- Generarea numărului se reîmprospătează de fiecare dată când o vizualizare este încărcată. Navigarea între vizualizări schimbă numărul aleatoriu.

## Any type

Funcții pe care le poți folosi cu orice valoare. Aceasta include stringuri (de exemplu, `"hello"`), numere (de exemplu, `42`), liste (de exemplu, `[1,2,3]`), obiecte și multe altele.

### `isTruthy()`

`any.isTruthy(): boolean`

- Returnează valoarea convertită într-un boolean.
- Exemplu: `1.isTruthy()` returnează `true`.

### `isType()`

`any.isType(type: string): boolean`

- Returnează true dacă valoarea este de tipul furnizat.
- Exemplu: `"example".isType("string")` și `true.isType("boolean")` returnează amândouă true.

### `toString()`

`any.toString(): string`

- Returnează reprezentarea sub formă de string a oricărei valori.
- Exemplu: `123.toString()` returnează `"123"`.

## Date type

Funcții pe care le poți folosi cu o dată și oră, precum `date("2025-05-27")`. Comparațiile de date pot fi efectuate folosind [[Sintaxă Baze#Date arithmetic|aritmetica datelor calendaristice]].

### Câmpuri

Următoarele câmpuri sunt disponibile pentru datele calendaristice:

| Câmp              | Tip     | Descriere                  |
| ------------------ | -------- | ---------------------------- |
| `date.year`        | `number` | Anul datei         |
| `date.month`       | `number` | Luna datei (1–12) |
| `date.day`         | `number` | Ziua din lună         |
| `date.hour`        | `number` | Ora (0–23)              |
| `date.minute`      | `number` | Minutul (0–59)              |
| `date.second`      | `number` | Secunda (0–59)              |
| `date.millisecond` | `number` | Milisecunda (0–999)      |

### `date()`

`date.date(): date`

- Returnează un obiect de tip dată cu ora eliminată.
- Exemplu: `now().date().format("YYYY-MM-DD HH:mm:ss")` returnează un string precum "2025-12-31 00:00:00".

### `format()`

`date.format(format: string): string`

- `format` este stringul de format (de exemplu, `"YYYY-MM-DD"`).
- Returnează data formatată conform unui string de format Moment.js.
- Exemplu: `date.format("YYYY-MM-DD")` returnează `"2025-05-27"`.

### `time()`

`date.time(): string`

- Returnează porțiunea de oră sub formă de string.
- Exemplu: `now().time()` returnează un string precum "23:59:59".

### `relative()`

`date.relative(): string`

- Returnează o comparație lizibilă a datei cu data și ora curente.
- Exemplu: `file.mtime.relative()` returnează o valoare precum `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Returnează false.

## String type

Funcții pe care le poți folosi cu o secvență de caractere, precum `"hello"`.

### Câmpuri

| Câmp           | Tip     | Descriere                            |
| --------------- | -------- | --------------------------------------- |
| `string.length` | `number` | Numărul de caractere din string |

### `contains()`

`string.contains(value: string): boolean`

- `value` este substringul căutat.
- Returnează true dacă stringul conține `value`.
- Exemplu: `"hello".contains("ell")` returnează `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` sunt unul sau mai multe substringuri căutate.
- Returnează true dacă stringul conține toate valorile `values`.
- Exemplu: `"hello".containsAll("h", "e")` returnează `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` sunt unul sau mai multe substringuri căutate.
- Returnează true dacă stringul conține cel puțin una dintre valorile `values`.
- Exemplu: `"hello".containsAny("x", "y", "e")` returnează `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` este stringul de verificat la final.
- Returnează true dacă acest string se termină cu `query`.
- Exemplu: `"hello".endsWith("lo")` returnează `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Returnează true dacă stringul nu are caractere sau nu este prezent.
- Exemplu: `"Hello world".isEmpty()` returnează `false`.
- Exemplu: `"".isEmpty()` returnează `true`.

### `lower()`

`string.lower(): string`

- Returnează stringul convertit la litere mici.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` este valoarea căutată în stringul țintă.
- `replacement` este valoarea cu care sunt înlocuite tiparele găsite. Când `pattern` este un Regexp, poți face referire la grupurile de captură din `replacement` folosind `$1`, `$2` și așa mai departe.
- Dacă `pattern` este un string, toate aparițiile tiparului vor fi înlocuite.
- Dacă `pattern` este un Regexp, marcajul `g` determină dacă este înlocuită doar prima apariție sau toate aparițiile.
- Exemplu: `"a:b:c:d".replace(/:/, "-")` returnează `"a-b:c:d"`, în timp ce `"a:b:c:d".replace(/:/g, "-")` returnează `"a-b-c-d"`.
- Exemplu cu grupuri de captură: `"John Smith".replace(/(\w+) (\w+)/, "$2, $1")` returnează `"Smith, John"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` este numărul de repetări ale stringului.
- Exemplu: `"123".repeat(2)` returnează `"123123"`.

### `reverse()`

`string.reverse(): string`

- Inversează stringul.
- Exemplu: `"hello".reverse()` returnează `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` este indexul de început, inclusiv.
- `end` este indexul opțional de sfârșit, exclusiv.
- Returnează un substring de la `start` (inclusiv) până la `end` (exclusiv).
- Exemplu: `"hello".slice(1, 4)` returnează `"ell"`.
- Dacă `end` este omis, se extrage până la sfârșitul stringului.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` este delimitatorul folosit pentru a împărți stringul.
- `n` este un număr opțional. Dacă este furnizat, rezultatul va avea primele `n` elemente.
- Returnează o listă de substringuri.
- Exemplu: `"a,b,c,d".split(",", 3)` sau `"a,b,c,d".split(/,/, 3)` returnează `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` este stringul de verificat la început.
- Returnează true dacă acest string începe cu `query`.
- Exemplu: `"hello".startsWith("he")` returnează `true`.

### `title()`

`string.title(): string`

- Convertește stringul la formatul „Title Case” (prima literă a fiecărui cuvânt scrisă cu majusculă).
- Exemplu: `"hello world".title()` returnează `"Hello World"`.

### `trim()`

`string.trim(): string`

- Elimină spațiile albe de la ambele capete ale stringului.
- Exemplu: `"  hi  ".trim()` returnează `"hi"`.

## Number type

Funcții pe care le poți folosi cu valori numerice, precum `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Returnează valoarea absolută a numărului.
- Exemplu: `(-5).abs()` returnează `5`.

### `ceil()`

`number.ceil(): number`

- Rotunjește numărul la cel mai apropiat număr întreg superior.
- Exemplu: `(2.1).ceil()` returnează `3`.

### `floor()`

`number.floor(): number`

- Rotunjește numărul la cel mai apropiat număr întreg inferior.
- Exemplu: `(2.9).floor()` returnează `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Returnează true dacă numărul nu este prezent.
- Exemplu: `5.isEmpty()` returnează `false`.

### `round()`

`number.round(digits: number): number`

- Rotunjește numărul la cel mai apropiat număr întreg.
- Opțional, furnizează un parametru `digits` pentru a rotunji la acel număr de zecimale.
- Exemplu: `(2.5).round()` returnează `3`, iar `(2.3333).round(2)` returnează `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` este numărul de zecimale.
- Returnează un string cu numărul în notație cu punct fix.
- Exemplu: `(3.14159).toFixed(2)` returnează `"3.14"`.

## List type

Funcții pe care le poți folosi cu o listă ordonată de elemente, precum `[1, 2, 3]`.

### Câmpuri

| Câmp         | Tip     | Descriere                        |
| ------------- | -------- | ----------------------------------- |
| `list.length` | `number` | Numărul de elemente din listă |

### `contains()`

`list.contains(value: any): boolean`

- `value` este elementul căutat.
- Returnează true dacă lista conține `value`.
- Exemplu: `[1,2,3].contains(2)` returnează `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` sunt unul sau mai multe elemente căutate.
- Returnează true dacă lista conține toate valorile `values`.
- Exemplu: `[1,2,3].containsAll(2,3)` returnează `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` sunt unul sau mai multe elemente căutate.
- Returnează true dacă lista conține cel puțin una dintre valorile `values`.
- Exemplu: `[1,2,3].containsAny(3,4)` returnează `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtrează lista și păstrează doar elementele pentru care expresia este adevărată.
- `value` este valoarea unui element din listă.
- `index` este indexul valorii curente.
- Exemplu: `[1,2,3,4].filter(value > 2)` returnează `[3,4]`.

### `flat()`

`list.flat(): list`

- Aplatizează o listă imbricată într-o singură listă.
- Exemplu: `[1,[2,3]].flat()` returnează `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Returnează true dacă lista nu are elemente.
- Exemplu: `[1,2,3].isEmpty()` returnează `false`.

### `join()`

`list.join(separator: string): string`

- `separator` este stringul de inserat între elemente.
- Combină toate elementele listei într-un singur string.
- Exemplu: `[1,2,3].join(",")` returnează `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Transformă fiecare element al listei folosind o expresie.
- `value` este valoarea unui element din listă.
- `index` este indexul valorii curente.
- Exemplu: `[1,2,3,4].map(value + 1)` returnează `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Reduce lista la o singură valoare, rulând o expresie pentru fiecare element. Expresia trebuie să returneze următoarea valoare a lui `acc`. Folosește `value` pentru elementul curent, `index` pentru poziția lui și `acc` pentru rezultatul acumulat până în acel moment.
- `expression` este evaluată pentru fiecare element din listă.
- `value` este valoarea elementului curent din listă.
- `index` este indexul elementului curent.
- `acc` este valoarea acumulată până în acel moment.
- Exemplu (sumă): `[1,2,3].reduce(acc + value, 0)` returnează `6`.
- Exemplu (maxim): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` returnează cel mai mare număr, sau `null` dacă nu există niciunul.

### `reverse()`

`list.reverse(): list`

- Inversează lista în același loc.
- Exemplu: `[1,2,3].reverse()` returnează `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` este indexul de început, inclusiv.
- `end` este indexul opțional de sfârșit, exclusiv.
- Returnează o copie superficială a unei porțiuni din listă, de la `start` (inclusiv) până la `end` (exclusiv).
- Exemplu: `[1,2,3,4].slice(1,3)` returnează `[2,3]`.
- Dacă `end` este omis, se extrage până la sfârșitul listei.

### `sort()`

`list.sort(): list`

- Sortează elementele listei de la cel mai mic la cel mai mare.
- Exemplu: `[3, 1, 2].sort()` returnează `[1, 2, 3]`.
- Exemplu: `["c", "a", "b"].sort()` returnează `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Elimină elementele duplicate.
- Exemplu: `[1,2,2,3].unique()` returnează `[1,2,3]`.

## Link type

Funcții pe care le poți folosi pe o legătură. Legăturile pot fi create dintr-un fișier (`file.asLink()`) sau dintr-o cale (`link("path")`).

### `asFile()`

`link.asFile(): file`

- Returnează un obiect de tip fișier dacă legătura face referire la un fișier local valid.
- Exemplu: `link("[[filename]]").asFile()`.

### `linksTo()`

`link.linksTo(file): boolean`

- Returnează `true` dacă fișierul reprezentat de `link` are o legătură către `file`.

## File type

Funcții pe care le poți folosi cu un fișier din seif.

### Câmpuri

Următoarele câmpuri sunt disponibile pentru fișiere:

| Câmp             | Tip     | Descriere                                             |
| ----------------- | -------- | --------------------------------------------------------- |
| `file.name`       | `string` | Numele acestui fișier.                                  |
| `file.basename`   | `string` | Numele acestui fișier fără extensie.       |
| `file.path`       | `string` | Calea completă către acest fișier, relativă la rădăcina seifului. |
| `file.folder`     | `string` | Calea completă către directorul părinte.                     |
| `file.ext`        | `string` | Extensia acestui fișier.                       |
| `file.size`       | `number` | Dimensiunea acestui fișier, în octeți.                        |
| `file.properties` | `object` | Proprietățile notei pentru acest fișier.                      |
| `file.tags`       | `list`   | Etichetele acestui fișier. Include etichetele din text.           |
| `file.links`      | `list`   | Legăturile interne din acest fișier.                    |
| `file.ctime`      | `date`   | Marcajul de timp al creării acestui fișier.                |
| `file.mtime`      | `date`   | Marcajul de timp al ultimei modificări a acestui fișier.          |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` este textul de afișare opțional pentru legătură.
- Returnează un obiect Link care se afișează ca o legătură funcțională.
- Exemplu: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` este un alt obiect de tip fișier sau cale de tip string de verificat.
- Returnează true dacă `file` face legătura către `otherFile`.
- Exemplu: `file.hasLink(otherFile)` returnează `true` dacă există o legătură de la `file` la `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Returnează `true` dacă fișierul are proprietatea dată.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` sunt unul sau mai multe nume de etichete.
- Returnează true dacă fișierul are oricare dintre etichetele din `values`.
- Exemplu: `file.hasTag("tag1", "tag2")` returnează `true` dacă fișierul are eticheta `#tag1` sau `#tag2`. Include și orice [[Etichete#Nested tags|etichete imbricate]], precum `#tag1/a` sau `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` este numele directorului de verificat.
- Returnează true dacă fișierul se află în directorul specificat sau într-unul dintre subdirectoarele sale.
- Exemplu: `file.inFolder("notes")` returnează `true`.

## Object type

Funcții pe care le poți folosi cu o colecție de perechi cheie-valoare, precum `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Returnează true dacă obiectul nu are proprietăți proprii.
- Exemplu: `{}.isEmpty()` returnează `true`.

### `keys()`

`object.keys(): list`

- Returnează o listă care conține cheile obiectului.

### `values()`

`object.values(): list`

- Returnează o listă care conține valorile obiectului.

## Regular expression type

Funcții pe care le poți folosi cu un tipar de expresie regulată. Exemplu: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` este stringul de testat.
- Returnează true dacă expresia regulată se potrivește cu `value`.
- Exemplu: `/abc/.matches("abcde")` returnează `true`.
