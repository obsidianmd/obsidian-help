---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian îți permite să migrezi notițe din Tomboy și Gnote folosind [[Importator|modulul oficial Importator]]. Importatorul citește direct fișierele `.note` ale aplicațiilor și convertește conținutul lor XML în Markdown.

## Localizează fișierele cu notițe

Tomboy și Gnote stochează în mod normal notițele în aceste directoare:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` sau `~/.local/share/gnote`

Locația exactă poate diferi dacă ai mutat directorul de date sau folosești o versiune diferită a aplicației.

## Importă notițele din Tomboy sau Gnote

1. Deschide **[[Setări]] → Module comunitare** și [instalează Importatorul](obsidian://show-plugin?id=obsidian-importer).
2. Activează modulul Importator.
3. Deschide **Importatorul** folosind [[Paleta de comenzi|paleta de comenzi]] sau pictograma din panglică.
4. La **Formatare fișier**, selectează **Tomboy/Gnote (.note)**.
5. Alege fișiere `.note` individuale sau directorul care le conține.
6. Examinează opțiunile de import, șablonul generat și exemplele de previzualizare.
7. Selectează **Import** și așteaptă finalizarea importului.

## Șabloane

Folosește [[Șabloane pentru importator|Șabloane pentru importator]] pentru a configura complet modul în care sunt importate datele tale.

![[Șabloane pentru importator#Variabile]]
