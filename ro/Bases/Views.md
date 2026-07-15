---
permalink: bases/views
---
Vizualizările îți permit să organizezi informațiile dintr-o [[Introduction to Bases|Bază]] în mai multe moduri. O bază poate conține mai multe vizualizări, iar fiecare vizualizare poate avea o configurație unică pentru afișarea, sortarea și filtrarea fișierelor.

De exemplu, poate vrei să creezi o bază numită „Books” care are vizualizări separate pentru „Reading list” și „Recently finished”.

## Bara de instrumente

În partea de sus a unei baze se află o bară de instrumente care îți permite să interacționezi cu vizualizările și rezultatele lor.

- ![[lucide-table.svg#icon]] **Meniul vizualizare** — creează, editează și comută între vizualizări.
- **Rezultate** — limitează, copiază și exportă fișiere.
- ![[lucide-arrow-up-down.svg#icon]] **Sortare** — sortează și grupează fișiere.
- ![[lucide-list-filter.svg#icon]] **Filtru** — filtrează fișiere.
- ![[lucide-list.svg#icon]] **Proprietăți** — alege proprietățile de afișat și creează [[formulas|formule]].
- ![[lucide-search.svg#icon]] **Caută** — caută elemente folosind proprietățile lor afișate.
- ![[lucide-plus.svg#icon]] **Nou** — creează un fișier nou în vizualizarea curentă.

## Adăugarea și comutarea vizualizărilor

Există două moduri de a adăuga o vizualizare la o bază:

- Dă clic pe numele vizualizării din partea stângă sus și selectează ![[lucide-plus.svg#icon]] **Adaugă vizualizare**.
- Folosește [[command palette|paleta de comenzi]] și selectează **Bases: Add view**.

Prima vizualizare din lista ta de vizualizări se va încărca implicit. Trage vizualizările de iconița lor pentru a le schimba ordinea.

## Setările vizualizării

Fiecare vizualizare are propriile opțiuni de configurare. Pentru a edita setările unei vizualizări:

1. Dă clic pe numele vizualizării din partea stângă sus.
2. Dă clic pe săgeata dreapta de lângă vizualizarea pe care vrei să o configurezi.

Alternativ, dă *clic dreapta* pe numele vizualizării din bara de instrumente a bazei pentru a accesa rapid setările vizualizării.

## Aspect

Vizualizările pot fi afișate cu aspecte diferite, inclusiv ca ![[lucide-table.svg#icon]] **tabel**, ![[lucide-list.svg#icon]] **listă**, ![[lucide-layout-grid.svg#icon]] **carduri** și ![[lucide-map.svg#icon]] **hartă**. Aspecte suplimentare pot fi adăugate prin [[Community plugins|module comunitare]]. Unele aspecte sunt încă în dezvoltare și necesită [[early access versions|versiuni cu acces timpuriu]] ale Obsidian.

| Aspect                | Descriere                                                                                   | Versiune&nbsp;aplicație |
| --------------------- | --------------------------------------------------------------------------------------------- | ---------------- |
| [[Table view\|Tabel]] | Afișează fișierele ca rânduri într-un tabel. Coloanele sunt populate din [[properties|proprietăți]] din notele tale.    | 1.9              |
| [[Cards view\|Carduri]] | Afișează fișierele ca o grilă de carduri. Îți permite să creezi vizualizări de tip galerie cu imagini.             | 1.9              |
| [[List view\|Listă]]   | Afișează fișierele ca o [[Basic formatting syntax#Lists\|listă]] cu marcaje sub formă de puncte sau numere. | 1.10             |
| [[Map view\|Hartă]]     | Afișează fișierele ca pini pe o hartă interactivă. Necesită modulul Maps.                        | 1.10             |


## Filtre

Deschide meniul ![[lucide-list-filter.svg#icon]] **Filtru** din partea de sus a unei baze pentru a adăuga filtre.

O bază fără filtre afișează toate fișierele din seiful tău. Filtrele restrâng rezultatele pentru a afișa doar fișierele care îndeplinesc criterii specifice. De exemplu, poți folosi filtre pentru a afișa doar fișierele cu o anumită [[Tags|etichetă]] sau dintr-un anumit director. Sunt disponibile multe tipuri de filtre.

Filtrele pot fi aplicate tuturor vizualizărilor dintr-o bază, sau doar unei singure vizualizări, alegând din cele două secțiuni ale meniului ![[lucide-list-filter.svg#icon]] **Filtru**.

- **Toate vizualizările** aplică filtre tuturor vizualizărilor din bază.
- **Această vizualizare** aplică filtre vizualizării active.

#### Componentele unui filtru

Filtrele au trei componente:

1. **Proprietate** — îți permite să alegi o [[Properties|proprietate]] din seiful tău, inclusiv [[Bases syntax#File properties|proprietăți ale fișierului]].
2. **Operator** — îți permite să alegi cum să compari condițiile. Lista operatorilor disponibili depinde de tipul proprietății (text, dată, număr etc.)
3. **Valoare** — îți permite să alegi valoarea cu care compari. Valorile pot include calcule matematice și [[Functions|funcții]].

#### Conjuncții

- **Toate cele următoare sunt adevărate** este o instrucțiune `and` — rezultatele vor fi afișate doar dacă *toate* condițiile din grupul de filtre sunt îndeplinite.
- **Oricare dintre cele următoare este adevărată** este o instrucțiune `or` — rezultatele vor fi afișate dacă *oricare* dintre condițiile din grupul de filtre este îndeplinită.
- **Niciuna dintre cele următoare nu este adevărată** este o instrucțiune `not` — rezultatele nu vor fi afișate dacă *oricare* dintre condițiile din grupul de filtre este îndeplinită.

#### Grupuri de filtre

Grupurile de filtre îți permit să creezi o logică mai complexă, creând combinații de conjuncții.

#### Editorul avansat de filtre

Dă clic pe butonul de cod ![[lucide-code-xml.svg#icon]] pentru a folosi editorul **filtru avansat**. Acesta afișează sintaxa brută [[Bases syntax|sintaxa]] a filtrului și poate fi folosit împreună cu [[Functions|funcții]] mai complexe care nu pot fi afișate folosind interfața de tip point-and-click.

## Sortarea și gruparea rezultatelor

Deschide meniul ![[lucide-arrow-up-down.svg#icon]] **Sortare** pentru a sorta și grupa rezultatele dintr-o vizualizare.

Poți aranja rezultatele după una sau mai multe proprietăți, în ordine crescătoare sau descrescătoare. Acest lucru face ușoară listarea notelor după nume, data ultimei editări sau orice altă proprietate — inclusiv formule.

Poți grupa și rezultatele după o proprietate, pentru a organiza elemente similare în secțiuni distincte vizual. În prezent, Obsidian acceptă gruparea după o singură proprietate.

### Adaugă o sortare

1. Deschide meniul ![[lucide-arrow-up-down.svg#icon]] **Sortare** din partea de sus a vizualizării.
2. Alege proprietatea după care vrei să sortezi (sau să grupezi).
3. Dacă ai mai multe sortări, trage-le în sus sau în jos folosind mânerul ![[lucide-grip-vertical.svg#icon]] pentru a le schimba prioritatea.

Opțiunile pentru ordonarea rezultatelor depind de tipul proprietății:

- **Text**: sortare *alfabetică* (A→Z) sau în *ordine alfabetică inversă* (Z→A).
- **Număr**: sortare de la *cel mai mic la cel mai mare* (0→1) sau de la *cel mai mare la cel mai mic* (1→0).
- **Dată și oră**: sortare de la *cel mai vechi la cel mai nou*, sau de la *cel mai nou la cel mai vechi*.

### Elimină o sortare

1. Deschide meniul ![[lucide-arrow-up-down.svg#icon]] **Sortare** din partea de sus a vizualizării.
2. Dă clic pe butonul ![[lucide-trash-2.svg#icon]] coș de gunoi de lângă sortarea sau gruparea pe care vrei să o elimini.

## Limitarea, copierea și exportarea rezultatelor

### Limitează rezultatele

Meniul *rezultate* afișează numărul de rezultate din vizualizare. Dă clic pe butonul rezultate pentru a limita numărul de rezultate și pentru a accesa acțiuni suplimentare.

### Copiază în clipboard

Această acțiune copiază vizualizarea în clipboard-ul tău. Odată aflată în clipboard, o poți lipi într-un fișier Markdown, sau în alte aplicații de documente, inclusiv foi de calcul precum Google Sheets, Excel și Numbers.

### Exportă CSV

Această acțiune salvează un CSV al vizualizării tale curente.

## Încorporează o vizualizare

Poți încorpora fișiere bază în [[Embed files|orice alt fișier]] folosind sintaxa `![[File.base]]`. Va fi folosită prima vizualizare din listă. Poți schimba ordinea trăgând vizualizările din meniul de vizualizare.

Pentru a specifica vizualizarea implicită pentru o încorporare, folosește `![[File.base#View]]`.
