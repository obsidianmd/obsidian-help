---
permalink: import/apple-journal
---
Obsidian îți permite să îți migrezi cu ușurință însemnările din jurnalul Apple Journal folosind [[Importer|modulul Importer]]. 
Acest lucru îți va converti jurnalele în fișiere Markdown durabile, pe care le poți folosi cu Obsidian și cu multe alte aplicații.

## Exportă-ți datele din Apple Journal

### Pe iPhone
Urmează instrucțiunile pentru [Print and export entries in Journal on iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Deschide aplicația Journal de pe iPhone.
2. Alege un jurnal sau atinge All Entries.
3. Atinge butonul More din partea de sus a ecranului.
4. Atinge Export, apoi alege Export.
5. Alege o locație, apoi atinge butonul Selected.

### Pe Mac (Tahoe)
Urmează instrucțiunile pentru [Print and export entries in Journal on Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Deschide aplicația Journal de pe Mac.
2. Mergi la File > Export, apoi alege Export.

## Importă datele din Apple Journal în Obsidian

Vei avea nevoie de modulul oficial Obsidian [[Importer]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Settings]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier**, alege **Apple Journal (export HTML)**.
6. La **Fișiere de importat**, selectează directorul cu datele exportate, de obicei _AppleJournalEntries_, sau fișiere individuale din _Entries_.
7. Revizuiește și modifică celelalte opțiuni de import.
8. Selectează Importă și așteaptă până când importul este finalizat
9. Ai terminat!


## Conținut acceptat

Modulul poate importa metadatele din Journal ca antet YAML, precum _state-of-mind_, _contacts_, _location_ și _workout-route_.

> [!note] Notă
> Modulul nu importă resurse. Atașamentele precum fotografii, videoclipuri și înregistrări audio sunt ignorate.
