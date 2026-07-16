---
permalink: import/csv
aliases:
  - Import CSV files
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
7. Apasă **Importă** pentru a configura modul în care datele din fișierul tău CSV vor fi convertite în note cu [[Proprietăți]].
8. Apasă **Continuă** și așteaptă până când importul este finalizat.
9. Ai terminat!

## Configurează modul în care sunt importate câmpurile CSV

În a doua etapă a importului CSV, poți alege cum sunt importate datele folosind un șablon.

Fiecărei coloane din fișierul tău CSV îi este atribuită o variabilă numită `{{column_name}}`, care reprezintă numele antetului din fișierul tău. Poți folosi această variabilă pentru a defini titlul, locația, conținutul și [[Proprietăți]] notei.
