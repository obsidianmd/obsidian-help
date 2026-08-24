---
permalink: import/csv
aliases:
  - Import CSV files
cssclasses:
  - soft-embed
---
Obsidian îți permite să imporți date din fișiere CSV folosind [[Importator|modulul Importer]] oficial. Acest lucru este util dacă ai date tabelare stocate în aplicații precum Excel, Google Sheets, Numbers, Notion sau Airtable.

Importul CSV generează fișiere Markdown pentru fiecare rând și un fișier [[Introducere în Baze|Bază]] care afișează toate fișierele importate sub formă de tabel.

Dacă imporți note dintr-o aplicație anume, s-ar putea să vrei să consulți mai întâi lista aplicațiilor acceptate de [[Importator|modulul Importer]] pentru a verifica dacă există un convertor specific care va păstra mai bine datele pe care le migrezi.

## Creează note din date CSV în Obsidian

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier** alege **CSV (.csv).**
6. Selectează locația fișierului tău CSV.
7. Selectează **Importă** pentru a configura modul în care datele din fișierul tău CSV vor fi convertite în note cu [[Proprietăți]].
8. Selectează **Continuă** pentru a revizui șablonul generat și a previzualiza exemple din rândurile tale.
9. Selectează **Importă** și așteaptă finalizarea importului.

## Configurează modul în care sunt importate câmpurile CSV

În etapa de configurare a câmpurilor, poți alege cum sunt importate datele. Importer generează un șablon din anteturile CSV, folosește prima coloană pentru numele inițial al notei și creează o proprietate pentru fiecare coloană.

## Șabloane

Folosește [[Șabloane Importer|Șabloanele Importer]] pentru a configura complet modul în care sunt importate datele tale.

Fiecare coloană CSV este disponibilă folosind antetul său. Dacă o coloană nu are antet, Importer folosește numele de coloană generat.

Folosește notația cu paranteze pătrate pentru ca spațiile și semnele de punctuație să fie gestionate în siguranță:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Șabloane Importer#Variabile]]
