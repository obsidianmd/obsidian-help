---
permalink: import/bear
aliases:
  - Import from Bear
cssclasses:
  - soft-embed
---
Obsidian îți permite să îți migrezi cu ușurință notele din Bear folosind [[Importator|modulul Importer]]. Acest lucru îți va converti datele din Bear în fișiere Markdown durabile pe care le poți folosi cu Obsidian și cu multe alte aplicații.

## Exportă-ți datele din Bear

Obsidian poate folosi formatele de copie de rezervă ale Bear, `.bear2bk` sau `ApplicationData.zip`.

### iOS

1. Deschide Bear.
2. Mergi la **Settings** → **Advanced** → **Share Application Data**.
3. Alege o locație pentru fișierul copiei de rezervă.
4. Ar trebui să ai acum un fișier `ApplicationData.zip` care conține toate notele tale.

### macOS

1. Deschide Bear.
2. Mergi la **File** → **Backup notes**.
3. Alege o locație pentru fișierul copiei de rezervă.
4. Apasă **Export notes**.
5. Ar trebui să ai acum un fișier `.bear2bk` care conține toate notele tale.

## Importă-ți datele din Bear în Obsidian

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier** alege **Bear (.bear2bk, .zip)**.
6. Selectează locația fișierului tău de rezervă Bear.
7. Selectează **Importă** pentru a revizui șablonul generat și a previzualiza exemple din notele tale.
8. Selectează **Importă** din nou și așteaptă până când importul este finalizat.

## Șabloane

Folosește [[Șabloane pentru importator|șabloanele Importer]] pentru a configura complet modul în care sunt importate datele tale din Bear.

![[Șabloane pentru importator#Variables]]
