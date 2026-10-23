---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian îți permite să migrezi notițe dintr-un graf Logseq bazat pe fișiere (numit acum „Logseq OG") folosind modulul oficial [[Importator|Importator]]. Importatorul citește fișierele Markdown ale Logseq direct și convertește formatarea specifică Logseq în fișiere durabile pe care le poți folosi offline cu Obsidian și alte aplicații.

## Înainte de a începe

- Fă o copie de rezervă a grafului Logseq și a seifului Obsidian.
- Localizează directorul rădăcină al grafului tău Logseq. De obicei, acesta conține directoare numite `pages`, `journals`, `assets` și `logseq`.
- Asigură-te că folosești un graf Logseq bazat pe fișiere. Grafurile de tip bază de date Logseq nu sunt încă acceptate.

## Importă graful tău Logseq

Ai nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala de aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]] → Module comunitare** și [instalează Importatorul](obsidian://show-plugin?id=obsidian-importer).
2. Activează modulul Importator.
3. Deschide **Importatorul** folosind [[Paleta de comenzi|paleta de comenzi]] sau pictograma din panglică.
4. La **Formatare fișier**, selectează **Logseq**.
5. La **Alegeți directorul**, selectează directorul rădăcină al grafului tău. Selectează directorul care conține `pages` și `journals`, nu unul dintre aceste directoare individual.
6. Verifică directoarele detectate și exclude-le pe cele pe care nu dorești să le importi.
7. Alege un director de ieșire și locul unde ar trebui stocate atașamentele importate.
8. Verifică opțiunile de import și previzualizează exemple de notițe convertite.
9. Selectează **Importă** și așteaptă finalizarea importului.

## Limitări

- Tablele albe (whiteboards) nu sunt importate.
- Interogările sunt păstrate ca blocuri de cod dacă alegi să le păstrezi.
- Macrourile dinamice de șabloane Logseq rămân ca text literal.
- Programarea cardurilor de învățare (flashcards), adnotările PDF și alte date specifice aplicației Logseq nu sunt migrate.

## Setări

Importatorul convertește convențiile comune Logseq, inclusiv:

- Proprietățile paginilor în [[Proprietăți]] Obsidian.
- Pseudonimele paginilor, etichetele, spațiile de nume și legăturile.
- Stările de flux de lucru în marcatori de liste cu casete de selectare, cu priorități și date păstrate ca text lizibil.
- ID-urile de bloc, referințele de bloc și încorporările de bloc în legături și încorporări Obsidian.
- Numele fișierelor de jurnal și legăturile de dată.
- Evidențierile, listele cu marcator numeric, blocurile Org, încorporările media și fișierele legate din directorul `assets` al grafului.

### Jurnale

Implicit, opțiunea **Folosește setările notelor zilnice** este activată. Jurnalele importate folosesc directorul și formatul datei configurate de modulul integrat [[Note zilnice]]. Aceasta poate plasa jurnalele în afara directorului de ieșire selectat în Importator.

Dacă dezactivezi această opțiune, jurnalele sunt scrise într-un director `Journals` în interiorul directorului de ieșire selectat și folosesc formatul de nume `YYYY-MM-DD`.

### Aplatizează structurile ierarhice

Logseq folosește marcatoare imbricate ca structură a unei pagini. Implicit, Importatorul păstrează această structură ierarhică. Activează **Aplatizează structurile ierarhice** pentru a converti blocurile ierarhice într-o combinație de paragrafe, titluri și liste convenționale. Sarcinile și grupurile de elemente de tip listă rămân elemente de listă, dar conversia este euristică. Verifică mai multe exemple în previzualizare înainte de a importa un graf mare.

### Păstrează datele incompatibile

Interogările, cardurile de învățare și înregistrările de urmărire a timpului din Logseq nu au echivalente directe în Obsidian. Opțiunile de import îți permit să alegi dacă păstrezi fiecare tip de conținut. Când este păstrat, acesta rămâne ca text simplu.

- **Păstrează interogările** conservă interogările ca blocuri de cod delimitate sau cod inline.
- **Păstrează cardurile de învățare** conservă marcatorii `#card` și ambalajele cloze ca text simplu.
- **Păstrează urmărirea timpului** conservă intrările `LOGBOOK` și `CLOCK` ca text simplu.

## Șabloane

Folosește [[Șabloane pentru importator|Șabloane pentru importator]] pentru a configura complet modul în care sunt importate datele tale din Logseq.

![[Șabloane pentru importator#Variabile]]

## Depanare

Dacă Importatorul nu găsește nicio notiță, asigură-te că ai selectat directorul rădăcină al grafului și că directoarele configurate pentru pagini sau jurnale conțin fișiere Markdown.

Dacă un atașament este raportat ca lipsă, confirmă că fișierul referit există încă în directorul `assets` al grafului.

Pentru alte probleme, caută în [registrul de probleme al Importatorului](https://github.com/obsidianmd/obsidian-importer/issues) sau trimite un raport de eroare cu un graf exemplu de dimensiuni mici.
