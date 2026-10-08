---
permalink: plugins/search
publish: true
mobile: true
description: 'Search este un modul integrat care te ajută să găsești date în seiful tău Obsidian, folosind termeni de căutare și operatori pentru a restrânge rezultatele.'
aliases:
  - Search
---

Search este un [[Module de bază|modul integrat]] care te ajută să găsești date în seiful tău Obsidian, folosind termeni de căutare și operatori pentru a restrânge rezultatele.

Implicit, poți găsi Caută în bara laterală stângă ![[lucide-search.svg#icon]]. Poți deschide și Caută apăsând `Ctrl+Shift+F` (Windows/Linux) sau `Command+Shift+F` (macOS).

- **Caută textul selectat**: Dacă selectezi text în editor și deschizi Caută cu combinația de taste, Caută îți arată rezultatele căutării pentru textul selectat.
- **Caută termeni de căutare recenți**: Deschide Caută cu un termen de căutare gol pentru a lista termenii de căutare recenți. Dă clic pe oricare dintre ei pentru a-l folosi din nou.

> [!info] Fișiere excluse
> Fișierele care corespund tiparelor tale de [[Setări#Excluded files|Fișiere excluse]] nu vor apărea în rezultatele căutării.

## Termeni de căutare

Un termen de căutare este cuvântul sau fraza pe care o introduci în câmpul de căutare. Să înveți cum să scrii termeni de căutare eficient te poate ajuta să găsești rapid ceea ce cauți, chiar și în seifuri mari. Obsidian caută doar în conținutul notelor și al pânzelor.

> [!tip]- Căutarea căilor și numelor de fișiere
> Implicit, poți căuta doar căile și numele de fișiere ale notelor și pânzelor. Pentru a căuta o cale sau un nume de fișier al oricărui fișier din seif, folosește operatorul `path` sau `file`.

Fiecare cuvânt din termenul de căutare este potrivit independent în fiecare fișier. Pentru a căuta o frază exactă, încadreaz-o cu ghilimele, de exemplu `"star wars"`. Pentru a căuta text cu ghilimele în interiorul unei fraze exacte, poți _evada_ ghilimelele adăugând o bară oblică inversă (`\`) în fața ghilimelei, de exemplu `"they said \"hello\" to each other"`.

Poți controla dacă se returnează fișierele care conțin _toate_ cuvintele din termenul de căutare, sau _oricare_ dintre cuvinte:

- `meeting work` returnează fișierele care conțin atât `meeting`, cât și `work`.
- `meeting OR work` returnează fișierele care conțin fie `meeting`, fie `work`.

Poți combina chiar și cele două în același termen de căutare.

- `meeting work OR meetup personal` returnează fișierele pentru întâlniri de lucru și întâlniri personale.

Poți folosi paranteze pentru a controla prioritatea fiecărei expresii.

- `meeting (work OR meetup) personal` returnează fișierele care conțin `meeting`, `personal` și fie `work`, fie `meetup`.

Pentru a exclude, sau a nega, un cuvânt din rezultatele căutării, adaugă o cratimă (`-`) în fața lui:

- `meeting -work` returnează fișierele care conțin `meeting`, dar nu `work`.

Poți exclude mai multe expresii:

- `meeting -work -meetup` returnează fișierele care conțin `meeting`, dar nu `work` sau `meetup`.

Poți exclude o combinație de expresii folosind paranteze:

- `meeting -(work meetup)` returnează fișierele care conțin `meeting`, dar nu _ambele_ `work` și `meetup`.

Pentru a filtra rezultatele folosind operatorii mai mic decât (`<`) și mai mare decât (`>`), încadrează-i cu paranteze pătrate (`[]`) sau ghilimele (`""`):

- `meeting [duration:<5]` returnează fișierele în care apare meeting, iar durata este mai mică de 5.
- `meeting [duration:>5]` returnează fișierele în care apare meeting, iar durata este mai mare de 5.

> [!tip]- Explică termenul de căutare
> Dacă trebuie să depanezi un termen de căutare complex, poți da clic pe **Explain search term** în Caută pentru o explicație a termenului tău de căutare.

## Operatori de căutare

Operatorii de căutare permit termeni de căutare mai precisi, pentru a-ți filtra rezultatele și mai mult.

Unii operatori îți permit chiar să adaugi un termen de căutare imbricat între paranteze, de exemplu: `task:(call OR email)`.

| Operator de căutare | Descriere                                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`         | Găsește text în numele fișierului. Se potrivește cu orice fișier din seif.<p/>Exemplu: `file:.jpg` sau `file:202209`.                                                                                                                                                                                                                    |
| `path:`         | Găsește text în calea fișierului. Se potrivește cu orice fișier din seif.<p/>Exemplu: `path:"Daily notes/2022-07"`.                                                                                                                                                                                                                   |
| `content:`      | Găsește text în conținutul fișierului.<p/>Exemplu: `content:"happy cat"`.                                                                                                                                                                                                                                                      |
| `match-case:`   | Potrivire sensibilă la majuscule/minuscule.<p/>Exemplu: `match-case:HappyCat`.                                                                                                                                                                                                                                                           |
| `ignore-case:`  | Potrivire insensibilă la majuscule/minuscule.<p/>Exemplu: `ignore-case:ikea`.                                                                                                                                                                                                                                                          |
| `tag:`          | Găsește eticheta într-un fișier.<p/>Exemplu: `tag:#work`.<p/>Ține minte că a căuta `tag:#work` nu va returna rezultate pentru `#myjob/work`.<br /><br />**Notă**: Deoarece `tag:` ignoră potrivirile din blocurile de cod și din conținutul non-Markdown, este adesea mai rapid și mai precis decât o căutare obișnuită a textului complet pentru `#work`. |
| `line:`         | Găsește fișierele care conțin cel puțin o linie ce se potrivește cu `x`.<p/>Exemplu: `line:(mix flour)`.<p/><br>**Notă:** Folosirea `-line` neagă căutarea, adică va găsi fișierele în care nicio linie nu se potrivește cu `x`.                                                                                                                   |
| `block:`        | Găsește potriviri în același bloc.<p/>Exemplu: `block:(dog cat)`.<p/>**Notă**: Deoarece `block:` necesită ca Caută să analizeze conținutul Markdown din fiecare fișier, poate face ca termenul tău de căutare să dureze mai mult să se finalizeze.                                                                                               |
| `section:`      | Găsește potriviri în aceeași secțiune (textul dintre două titluri).<p/>Exemplu: `section:(dog cat)`.                                                                                                                                                                                                                     |
| `task:`         | Găsește potriviri într-o [[Sintaxă de bază pentru formatare#Task lists\|sarcină]], analizate bloc cu bloc.<p/>Exemplu: `task:call`.                                                                                                                                                                                                 |
| `task-todo:`    | Găsește potriviri într-o [[Sintaxă de bază pentru formatare#Task lists\|sarcină]] *neterminată*, analizate bloc cu bloc.<p/>Exemplu: `task-todo:call`.                                                                                                                                                                             |
| `task-done:`    | Găsește potriviri într-o [[Sintaxă de bază pentru formatare#Task lists\|sarcină]] *terminată*, analizate bloc cu bloc.<p/>Exemplu: `task-done:call`.                                                                                                                                                                                |

## Caută proprietăți

Poți folosi datele stocate în [[Proprietăți|Proprietăți]] în termenii tăi de căutare.

Folosește paranteze pătrate în jurul unui nume de proprietate `[property]` pentru a returna fișierele cu acea proprietate:

- `[aliases]` returnează fișierele care conțin proprietatea `aliases`

Folosește paranteze pătrate și două puncte `[property:value]` pentru a returna fișierele cu acea proprietate și valoare:

- `[aliases:Name]` returnează fișierele în care valoarea proprietății `aliases` este `Name`

Folosește `null` ca valoare pentru a găsi proprietățile care nu au nicio valoare:

- `[aliases:null]` returnează fișierele în care proprietatea `aliases` există, dar nu are nicio valoare

> [!info]+ Valori goale
> Operatorul `null` funcționează atunci când o proprietate este goală (de ex., `aliases: `), dar nu și atunci când proprietatea conține ghilimele goale (`""`) sau paranteze pătrate goale (`[]`).

Atât proprietatea, cât și valoarea permit subinterogări, precum paranteze pentru grupare, operatorul `OR`, ghilimele duble pentru potrivire exactă și expresii regulate.

- `[status:Draft OR Published]` returnează fișierele în care valoarea proprietății `status` este `Draft` sau `Published`

## Schimbă sensibilitatea la majuscule/minuscule

Implicit, termenii de căutare nu sunt sensibili la majuscule/minuscule. Dacă vrei să cauți exact cu majusculele/minusculele termenului tău de căutare, selectează **Match case** ![[obsidian-icon-upper-lowercase.svg#icon]] în interiorul barei de căutare.

Această setare poate fi comutată. Dacă pictograma **Match case** este evidențiată, înseamnă că faci în prezent o căutare sensibilă la majuscule/minuscule.

## Schimbă ordinea de sortare a rezultatelor

1. Introdu un [[#Termeni de căutare|termen de căutare]].
2. Sub câmpul de căutare, selectează meniul derulant din dreapta.
3. Selectează ordinea de sortare dorită. Implicit este „File name (A to Z)”.

Sunt disponibile următoarele opțiuni:

- File name (A to Z)
- File name (Z to A)
- Modified time (new to old)
- Modified time (old to new)
- Created time (new to old)
- Created time (old to new)

## Copiază rezultatele căutării

1. Introdu un [[#Termeni de căutare|termen de căutare]].
2. Sub câmpul de căutare, selectează pictograma cu trei puncte de lângă numărul de rezultate.
3. Selectează **Copy search results**.

## Folosește expresii regulate

O expresie regulată este un set de caractere care descrie un tipar de text. Pentru a folosi expresii regulate în termenul tău de căutare, încadrează expresia cu bare oblice (`/`).

- `/\d{4}-\d{2}-\d{2}/` se potrivește cu o dată în format ISO 8601, precum 2022-01-01.

Poți combina chiar și expresii regulate cu operatori de căutare:

- `path:/\d{4}-\d{2}-\d{2}/` returnează fișierele cu o dată în calea fișierului.

Pentru mai multe informații despre cum să scrii expresii regulate, consultă ghidul [Practical Regex guide](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) de la FreeCodeCamp sau pagina [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) de la Mozilla.

> [!info]+ Expresii regulate în stil JavaScript
> Expresiile regulate vin în diferite variante care pot arăta diferit unele față de altele. Obsidian folosește expresii regulate în stil JavaScript.

## Configurează setările de căutare

Pentru a configura Caută, selectează **Search settings** ![[lucide-sliders-horizontal.svg#icon]] în partea dreaptă a barei de căutare pentru a vedea comutatoarele.

| Setare                 | Descriere                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Explain search term** | Descompune termenii de căutare și îi explică în text simplu.                 |
| **Collapse results**    | Comută afișarea contextului căutării.                                 |
| **Show more context**   | Extinde rezultatul căutării pentru a arăta mai mult text în jurul potrivirii.               |

## Încorporează rezultatele căutării într-o notă

Pentru a încorpora rezultatele căutării într-o notă, adaugă un bloc de cod `query`:

````
```query
embed OR search
```
````

[[Introducere în Obsidian Publish|Obsidian Publish]] nu acceptă [[Limitări Publish#Caută|rezultate de căutare]] încorporate. Pentru a vedea un exemplu live, folosește blocul de cod de mai sus în interiorul seifului tău.

![[search-query-rendered.png]]
