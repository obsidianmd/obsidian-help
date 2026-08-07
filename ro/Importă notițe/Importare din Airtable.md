---
permalink: import/airtable
---
Obsidian îți permite să migrezi datele din Airtable folosind [[Importator|modulul Importator]]. Acesta va converti bazele tale Airtable în fișiere Markdown durabile pe care le poți folosi offline cu Obsidian și multe alte aplicații.

Fiecare tabel devine un director de notițe cu o notiță per înregistrare, plus un fișier [[Introducere în Baze|Bază]] care recreează tabelul și vizualizările sale. Deoarece folosește API-ul Airtable, importul necesită un token de acces personal și o conexiune la internet.

## Creează un token de acces personal Airtable

Pentru a accesa datele tale Airtable prin API, ai nevoie de un token de acces personal. Acest pas durează aproximativ două minute.

Tokenul este un șir lung de numere și litere care începe de obicei cu `pat...` și care îți va permite să descarci datele din Airtable.

1. Autentifică-te în Airtable și mergi la pagina [Tokeni de acces personal](https://airtable.com/create/tokens) din setările contului tău.
2. Alege **Create new token**.
3. Dă tokenului un nume, de ex. „Obsidian". Poate fi folosit orice nume.
4. La **Scopes**, adaugă `data.records:read` și `schema.bases:read`.
5. La **Access**, adaugă bazele pe care vrei să le importi sau alege toate bazele dintr-un spațiu de lucru.
6. Alege **Create token**, apoi **Copy** pentru a copia tokenul.
7. Salvează tokenul într-un loc sigur, cum ar fi managerul tău de parole.

Airtable afișează tokenul o singură dată. Dacă îl pierzi, creează unul nou.

## Importă datele tale Airtable

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala de aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importator](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importator.
4. Deschide modulul **Importator** folosind paleta de comenzi sau pictograma din panglică.
5. La **File format** selectează **Airtable**.
6. La **Airtable Personal Access Token**, dă clic pe **Link...** pentru a adăuga un secret nou. Pentru **ID**, dă-i un nume precum `airtable`, iar pentru **Secret** lipește tokenul tău de acces personal.
7. Dă clic pe **Încarcă** pentru a naviga prin bazele tale, apoi selectează tabelele pe care vrei să le importi.
8. Revizuiește și editează opțiunile de import.
9. Selectează **Import** pentru a configura cum vor fi convertite câmpurile tale în notițe cu [[Proprietăți|proprietăți]].
10. Dă clic pe **Continuă** și așteaptă până când importul este complet.
11. Gata!

### Opțiuni de import

- **Convert formulas** — alege dacă câmpurile de tip formulă, lookup, rollup și count sunt rescrise ca [[Formule|formule Baze]], cu revenire la valoarea calculată de Airtable când nu există un echivalent, sau importate doar ca valori statice.
- **Descarcă atașamentele** — salvează fișierele atașate în seiful tău, folosind setările tale pentru directorul de atașamente și formatul legăturilor. Când este dezactivat, sau când descărcarea eșuează, notița face legătura către URL-ul fișierului de pe Airtable.
- **View property name** — proprietatea care înregistrează căror vizualizări Airtable aparține o înregistrare. Fiecare vizualizare din Baza generată filtrează pe baza acestei proprietăți. Implicit este `base`.
- **Incremental import** — adaugă o proprietate `airtable-id` fiecărei notițe, astfel încât un import ulterior poate sări peste înregistrările deja importate. La un import complet, această proprietate este eliminată din nou.

## Configurează cum sunt importate câmpurile Airtable

În al doilea pas al importului, poți alege cum este importat fiecare câmp.

Fiecărui câmp din tabelele tale i se atribuie o variabilă numită `{{field_name}}`. Implicit, fiecare câmp devine o proprietate, iar tu poți folosi aceste variabile pentru a redenumi proprietăți, a le schimba valorile sau a scrie conținut în corpul fiecărei notițe.

Câmpul primar al fiecărui tabel este folosit întotdeauna ca titlu al notiței, iar înregistrările sunt întotdeauna plasate într-un director denumit după tabelul lor, deci aceste opțiuni nu sunt configurabile.

## Ce se importă

Pentru o bază numită `Projects` cu un tabel `Tasks`, importatorul creează:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- O notiță per înregistrare, cu câmpul primar ca titlu al notiței și celelalte câmpuri ale înregistrării ca [[Proprietăți|proprietăți]].
- Un fișier `.base` per tabel, cu fiecare vizualizare Airtable mapată la o [[Afișaje|vizualizare Baze]]:
	- **Grid** devine un [[Afișaj tabel]].
	- **Gallery** devine [[Afișaj carduri]].
	- **List** devine un [[Afișaj listă]].
	- Toate celelalte tipuri de vizualizări sunt convertite în afișaj tabel.
- Tipurile de câmpuri Airtable sunt mapate la tipuri de proprietăți Obsidian, fără a suprascrie tipurile pe care le-ai setat deja.
- Înregistrările legate devin legături către notițele corespunzătoare.
- Atașamentele sunt descărcate în seiful tău folosind setările seifului.

## Limitări

> [!info] Importul Airtable este nou
> Importatorul Airtable este nou. Dacă întâmpini probleme cu conversia, [trimite un raport de eroare](https://github.com/obsidianmd/obsidian-importer/issues) pentru ca noi să îl putem îmbunătăți.

Din cauza limitărilor de rată ale API-ului Airtable, importul bazelor mari poate dura un timp considerabil. Te rugăm să ai răbdare.

Din cauza limitărilor API-ului Airtable, unele date nu sunt disponibile sau nu pot fi convertite:

- Valorile rollup nu sunt importate. API-ul nu expune agregarea folosită pentru valoarea calculată a unui rollup, deci doar numele proprietății este scris, împreună cu o formulă Baze acolo unde schema câmpului expune o expresie.
- Formulele care folosesc funcții pentru care Obsidian nu are echivalent, cum ar fi `SWITCH`, `FIND`, `REGEX_EXTRACT` și `SQRT`, revin la valoarea statică din Airtable.
- Doar vizualizările grid, gallery și list sunt importate. Alte tipuri de vizualizări, cum ar fi calendar, kanban, timeline și Gantt, sunt ignorate.
- Legăturile către înregistrări din tabelele pe care nu le-ai selectat devin titlul simplu al înregistrării în loc de o legătură.
- Designurile de interfață, automatizările, comentariile și istoricul revizuirilor nu sunt importate.
