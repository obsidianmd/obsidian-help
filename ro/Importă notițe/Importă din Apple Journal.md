---
permalink: import/apple-journal
aliases:
  - Import from Apple Journal
cssclasses:
  - soft-embed
---
Obsidian îți permite să îți migrezi cu ușurință însemnările din jurnalul Apple Journal folosind [[Importator|modulul Importer]]. Acest lucru îți va converti jurnalele în fișiere Markdown durabile, pe care le poți folosi cu Obsidian și cu multe alte aplicații.

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

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier**, alege **Apple Journal (export HTML)**.
6. La **Fișiere de importat**, selectează directorul cu datele exportate, de obicei _AppleJournalEntries_, sau fișiere individuale din _Entries_.
7. Revizuiește și modifică celelalte opțiuni de import.
8. Selectează **Importă** pentru a revizui șablonul generat și a previzualiza exemple din însemnările tale.
9. Selectează **Importă** din nou și așteaptă finalizarea importului.

## Șabloane

Folosește [[Șabloane pentru importator|șabloanele Importer]] pentru a configura complet modul în care sunt importate datele din Apple Journal.

![[Șabloane pentru importator#Variables]]

Când opțiunea **Adaugă metadate ca antet YAML** este activată, metadatele din Apple Journal sunt convertite în [[Proprietăți|proprietăți]]. În funcție de însemnare, acestea pot include `state-of-mind`, `contact`, `location`, `motion-activity`, `third-party-media` și `workout-route`.

Folosește variabila `properties` pentru a accesa aceste metadate. De exemplu, folosește `{{properties.location}}` pentru o locație sau `{{properties["state-of-mind"]}}` pentru o stare de spirit.
