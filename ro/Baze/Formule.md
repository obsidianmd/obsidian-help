---
permalink: formulas
description: 'Formulele îți permit să creezi proprietăți calculate folosind date din alte proprietăți. Poți efectua calcule, poți manipula text, poți lucra cu date calendaristice și multe altele.'
aliases:
  - Formulas
---
Formulele îți permit să creezi proprietăți calculate în [[Introducere în Baze|Baze]], folosind date din alte [[Proprietăți|proprietăți]]. Poți efectua calcule, poți manipula text, poți lucra cu date calendaristice și multe altele.

## Ce pot face formulele

Formulele te pot ajuta să:

- **Calculezi valori**, adaugi prețuri, calculezi totaluri sau efectuezi operații matematice.
- **Manipulezi text**, combini stringuri, schimbi tipul de literă sau extragi substringuri.
- **Lucrezi cu date calendaristice**, calculezi diferențe de timp, formatezi date sau determini termene limită.
- **Aplici logică**, folosești instrucțiuni condiționale pentru a afișa valori diferite.
- **Procesezi liste**, filtrezi, sortezi, mapezi sau agregi date sub formă de listă.

## Creează o proprietate de tip formulă

Pentru a crea o proprietate de tip formulă:

1. În baza ta, dă clic pe **Proprietăți** din bara de instrumente.
2. Dă clic pe **Adaugă formulă** din partea de jos a meniului.
3. Introdu un nume pentru proprietatea ta de tip formulă.
4. Scrie formula ta în câmpul **Formulă**.
5. Închide dialogul.

Editorul de formule va completa automat numele [[Funcții|funcțiilor]] și ale proprietăților pe măsură ce scrii, pentru a valida sintaxa formulei tale. O bifă verde apare atunci când formula ta este validă.

Odată creată, poți folosi o proprietate de tip formulă la fel ca orice altă proprietate din baza ta. Adaug-o la [[Afișaje|vizualizări]], folosește-o în filtre, sortează după ea și multe altele.

## Scrie o formulă

În editorul de formule, scrie o expresie folosind proprietăți, operatori și funcții.

### Fă referire la proprietăți

Poți face referire la diferite tipuri de proprietăți în formulele tale:

- **Proprietățile notei** — Proprietăți din [[Proprietăți|antetul (frontmatter)]] unei note.
- **Proprietățile fișierului** — Proprietăți incluse implicit, precum `file.name`, `file.size` sau `file.mtime`.
- **Proprietățile de tip formulă** — Alte formule, folosind `formula.formula_name`.

**Exemple:**

- `price * quantity` — înmulțește două proprietăți ale notei
- `file.name + " - " + description` — combină numele fișierului cu o proprietate a notei
- `formula.price_per_unit * 1.1` — folosește o altă proprietate de tip formulă

### Folosește operatori

**Operatorii aritmetici** efectuează operații matematice pe numere:

- `price + tax` — adunare
- `price - discount` — scădere
- `price * quantity` — înmulțire
- `price / quantity` — împărțire
- `(part / whole) * 100` — folosește paranteze pentru ordinea operațiilor

**Operatorii de comparație** compară valori:

- `price > 100` — mai mare decât
- `age < 18` — mai mic decât
- `status == "Done"` — egal
- `status != "Done"` — diferit
- `file.mtime > now() - '7d'` — compară date calendaristice

**Operatorii booleeni** combină condiții logice:

- `!completed` — negație
- `price > 0 && quantity > 0` — și
- `urgent || important` — sau

Află mai multe în [[Sintaxă Baze#Operators|Sintaxa Bases]].

### Folosește funcții

Funcțiile efectuează operații pe valori. Funcțiile disponibile depind de tipul valorii cu care lucrezi. Consultă lista completă de [[Funcții|funcții]].

**Categorii comune de funcții:**

- **Funcții globale** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Funcții pentru stringuri** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Funcții pentru numere** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Funcții pentru date calendaristice** — `format()`, `relative()`, `date()`, `time()`
- **Funcții pentru liste** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Exemple:**

- `if(price, "$" + price.toFixed(2), "")` pentru a defini o condiție cu formatare numerică.
- `file.name.lower()` pentru a converti la litere mici.
- `tags.contains("urgent")` pentru a verifica dacă lista de etichete conține o valoare.
- `due_date.format("YYYY-MM-DD")` pentru a formata o dată.

## Exemple de formule

### Calculează un termen limită

Stabilește data scadentă a unui proiect ca fiind 2 săptămâni după data de început:

```js
start_date + "2w"
```

### Afișează statusul de întârziere

Afișează „Overdue” dacă data scadentă a trecut, iar statusul nu este „Done”:

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Formatează moneda

Afișează un preț cu 2 zecimale și simbolul monedei:

```js
if(price, "$" + price.toFixed(2), "")
```

### Numără elementele dintr-o listă

Numără câte elemente sunt într-o proprietate de tip listă:

```js
tasks.length
```

### Calculează un scor de prioritate

Combină mai mulți factori într-un scor de prioritate:

```js
(impact * urgency) / effort
```

### Combină câmpuri de text

Creează un nume complet din prenume și nume de familie:

```js
first_name + " " + last_name
```

### Calculează costul total

Înmulțește costul lunar cu numărul de luni deținute:

```js
monthlyUses * formula.Owned.round()
```

## Tipuri de date

Formulele lucrează cu diferite tipuri de date:

- **Stringuri** — Text încadrat în ghilimele: `"hello"` sau `'world'`
- **Numere** — Valori numerice: `42`, `3.14`, `(2 + 2)`
- **Valori booleene** — Adevărat sau fals: `true`, `false`
- **Date calendaristice** — Create cu `date()`, `today()` sau `now()`
- **Liste** — Colecții de valori: `[1, 2, 3]`
- **Obiecte** — Perechi cheie-valoare: `{"name": "value"}`

Tipul rezultatului unei formule este determinat de datele și funcțiile folosite.

## Fă referire la alte formule

Formulele pot face referire la alte formule, creând calcule derivate. De exemplu, dacă ai o formulă numită `price_per_unit`:

```js
price / quantity
```

Poți face referire la ea într-o altă formulă:

```js
formula.price_per_unit * 1.1
```

> [!warning] Evită referințele circulare
> O formulă nu poate face referire la ea însăși, direct sau indirect, prin intermediul altor formule.
