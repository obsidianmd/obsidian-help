---
permalink: import/apple-notes
aliases:
  - Import from Apple Notes
cssclasses:
  - soft-embed
---
Obsidian îți permite să îți migrezi cu ușurință notele din Apple Notes folosind [[Importator|modulul Importer]]. Acest lucru îți va converti datele din Apple Notes în fișiere Markdown durabile pe care le poți folosi cu Obsidian și cu multe alte aplicații.

În prezent, Importer acceptă doar migrarea din Apple Notes pe macOS. Nu este încă disponibil pe iOS.

## Importă datele din Apple Notes în Obsidian

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier** alege **Apple Notes**.
6. Selectează **Importă**.
7. Selectează **Open** în fereastra pop-up intitulată `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Revizuiește șablonul generat și previzualizează exemple din notele tale.
9. Selectează **Importă** și așteaptă finalizarea importului.

## Personalizează notele importate

Înainte de începerea importului, Importer afișează o previzualizare generată din selecția ta Apple Notes. Poți edita șablonul generat, proprietățile și numele notei, sau poți alege un șablon Markdown din seiful tău. Vezi [[Șabloane pentru importator]].

## Conținut acceptat

Modulul Obsidian Importer acceptă aproape toate tipurile de conținut din Apple Notes. Aceasta include tabele, imagini, desene, scanări, PDF-uri și legături introduse în iOS 17.

> [!Warning] Avertisment
> Notele protejate prin parolă sunt criptate de Apple, așa că trebuie deblocate înainte de a fi importate. Orice notă blocată va fi omisă.

### Scanări

Apple stochează scanările în diverse formate, în funcție de modul în care au fost create. Pentru a păstra datele originale, acestea vor fi exportate diferit.

* Scanările create sau vizualizate pe versiuni mai vechi de macOS sau iOS vor fi exportate ca o serie de imagini netăiate.
* Scanările create sau vizualizate pe versiuni mai noi de macOS sau iOS vor fi de obicei exportate ca imagini decupate.
* Scanările editate folosind funcțiile introduse în iOS 17 vor fi de obicei exportate ca PDF-uri.

## Șabloane

Folosește [[Șabloane pentru importator|șabloanele Importer]] pentru a configura complet modul în care sunt importate datele tale din Apple Notes.

![[Șabloane pentru importator#Variables]]

În plus, Apple Notes oferă următoarea variabilă.

| Variabilă      | Descriere                            |
| -------------- | ------------------------------------ |
| `{{isPinned}}` | Dacă nota este fixată sau nu.        |
