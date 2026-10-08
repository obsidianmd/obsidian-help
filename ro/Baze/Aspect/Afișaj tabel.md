---
permalink: bases/views/table
aliases:
  - Table view
---
Table este un tip de [[Afișaje|vizualizare]] pe care îl poți folosi în [[Introducere în Baze|Baze]].

Selectează ![[lucide-table.svg#icon]]  **Tabel** din meniul de vizualizare pentru a afișa fișierele ca un tabel cu un rând pentru fiecare fișier și coloane pentru [[Proprietăți|proprietățile]] acelui fișier.

![Exemplu de bază care afișează o vizualizare de tip tabel cu o listă de cărți](bases-noshadow.png#interface)

## Setări

Setările vizualizării de tip tabel pot fi configurate în [[Afișaje#View settings|Setările vizualizării]].

### Înălțimea rândului

Înălțimea rândului îți permite să afișezi mai multe informații. Alege între **scurtă**, **medie**, **înaltă** și **extra înaltă**.

## Rezumate

Poți adăuga rezumate unei coloane din tabel pentru a calcula rapid valori precum totaluri, medii sau numărători pentru rândurile vizibile în prezent în vizualizare.

Rezumatele sunt asociate vizualizării, nu bazei. Fiecare vizualizare poate afișa rezumate diferite pentru aceeași coloană.

### Adaugă un rezumat

1. Dă clic dreapta pe antetul coloanei într-o vizualizare de tip tabel.
2. Selectează ![[lucide-calculator.svg#icon]] **Rezumă…**.
3. Alege una dintre funcțiile de rezumat incluse implicit, sau selectează ![[lucide-square-function.svg#icon]] **Adaugă rezumat** pentru a-ți defini propria funcție.

Rezumatul apare în partea de jos a coloanei. Când rezultatele sunt [[Afișaje#Sort and group results|grupate]], rezumatul pentru fiecare grup este afișat în partea de sus a grupului.

Odată adăugată bara de rezumat, poți adăuga mai multe rezumate pentru alte coloane dând clic pe celula de rezumat. Bara de rezumat este ascunsă dacă toate rezumatele sunt eliminate.

### Rezumate incluse implicit

Următoarele rezumate sunt disponibile implicit. Opțiunile pot varia în funcție de tipul proprietății.

#### Toate tipurile de proprietăți

- **Empty**: numărul de rânduri fără valoare.
- **Filled**: numărul de rânduri cu o valoare.
- **Unique**: numărul de valori distincte.

#### Numere

- **Average**: media tuturor valorilor numerice.
- **Max**: cea mai mare valoare.
- **Median**: valoarea mediană.
- **Min**: cea mai mică valoare.
- **Range**: diferența dintre valoarea maximă și cea minimă.
- **Stddev**: deviația standard.
- **Sum**: totalul tuturor valorilor.

#### Date calendaristice

- **Earliest**: cea mai mică/veche dată.
- **Latest**: cea mai mare/recentă dată.
- **Range**: diferența dintre cea mai timpurie și cea mai recentă dată.

#### Casetă de bifat

- **Checked**: numărul de rânduri unde caseta de bifat este activată.
- **Unchecked**: numărul de rânduri unde caseta de bifat este dezactivată.

### Rezumate personalizate

Poți defini propriul rezumat folosind o formulă:

1. În meniul ![[lucide-calculator.svg#icon]] **Rezumă…**, alege ![[lucide-square-function.svg#icon]] **Adaugă rezumat**.
2. Dă un nume rezumatului.
3. Introdu o formulă. Formula rulează asupra listei de valori din acea coloană (de exemplu, folosind o [[Funcții|funcție]] precum `values.reduce(...)`).
4. Salvează rezumatul.

Rezumatele personalizate sunt utile când ai nevoie de un calcul care nu este acoperit de opțiunile incluse implicit.

## Comenzi rapide

Te poți deplasa rapid într-o vizualizare de tip tabel folosind următoarele [[Comenzi rapide de editare|combinații de mouse și taste]].

- Shift-clic creează o selecție de celule.
- Clic dreapta pe o selecție de celule pentru a accesa acțiuni suplimentare pentru acele fișiere.

| Acțiune                                                                                                          | Combinație            | macOS              |
| --------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ |
| Copiază celulele selectate                                                                                         | `Ctrl+C`            | `Cmd+C`            |
| Lipește celulele selectate                                                                                        | `Ctrl+V`            | `Cmd+V`            |
| Anulează modificările proprietăților                                                                                      | `Ctrl+Z`            | `Cmd+Z`            |
| Refă modificările proprietăților                                                                                      | `Ctrl+Shift+Z`      | `Cmd+Shift+Z`      |
| Selectează toate celulele din grupul curent                                                                           | `Ctrl+A`            | `Cmd+A`            |
| Selectează toate celulele într-o direcție dată                                                                           | `Ctrl+Shift+Arrow`  | `Ctrl+Shift+Arrow` |
| Selectează coloana                                                                                               | `Ctrl+Space`        |                    |
| Selectează rândul                                                                                                  | `Shift+Space`       |                    |
| Focalizează celula curentă — pentru casete de bifat, comută caseta de bifat, pentru formule, deschide editorul de formule | `Enter`             |                    |
| Mergi la prima coloană                                                                                          | `Home`              |                    |
| Mergi la ultima coloană                                                                                           | `End`               |                    |
| Navighează în sus și în jos cu o pagină                                                                             | `PageUp`,`PageDown` |                    |
| Elimină selecția de celule curentă                                                                                | `Esc`               |                    |
| Golește celulele curente                                                                                         | `Backspace`         |                    |
| Mergi la celula următoare                                                                                             | `Tab`               |                    |
| Mergi la celula anterioară                                                                                         | `Shift-Tab`         |                    |
