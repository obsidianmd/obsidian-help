---
permalink: import/apple-notes
---
Obsidian îți permite să îți migrezi cu ușurință notele din Apple Notes folosind [[Importer|modulul Importer]]. Acest lucru îți va converti datele din Apple Notes în fișiere Markdown durabile, pe care le poți folosi cu Obsidian și cu multe alte aplicații.

În prezent, Importer acceptă doar migrarea din Apple Notes pe macOS. Nu este încă disponibil pe iOS.

## Importă datele din Apple Notes în Obsidian

Vei avea nevoie de modulul oficial Obsidian [[Importer]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Settings]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier** alege **Apple Notes**.
6. Apasă **Importă**.
7. Apasă **Open** în fereastra pop-up care apare, intitulată `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Așteaptă până când importul este finalizat. 
9. Ai terminat!

## Conținut acceptat

Modulul Obsidian Importer acceptă aproape toate tipurile de conținut din Apple Notes. Aceasta include tabele, imagini, desene, scanări, PDF-uri și legături introduse în iOS 17.

> [!Warning] Avertisment
> Notele protejate prin parolă sunt criptate de Apple, așa că trebuie deblocate înainte de a fi importate. Orice notă blocată va fi omisă.

### Scanări

Apple stochează scanările în diverse formate, în funcție de modul în care au fost create. Pentru a păstra datele originale, acestea vor fi exportate diferit.

* Scanările create sau vizualizate pe versiuni mai vechi de macOS sau iOS vor fi exportate ca o serie de imagini netăiate.
* Scanările create sau vizualizate pe versiuni mai noi de macOS sau iOS vor fi de obicei exportate ca imagini decupate.
* Scanările editate folosind funcțiile introduse în iOS 17 vor fi de obicei exportate ca PDF-uri.

## Metode alternative de export

Apple nu oferă o opțiune nativă de export al notelor. Totuși, există mai multe instrumente terțe, precum [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) de Chintan Ghate. Ține cont de faptul că majoritatea instrumentelor sunt limitate în ceea ce privește datele pe care le pot exporta din Apple Notes și s-ar putea să nu ofere cele mai compatibile date de ieșire. Aceste instrumente funcționează cel mai bine dacă notele tale din Apple Notes conțin în principal text și au puține atașamente sau funcții speciale precum desene și scanări.

În funcție de instrumentul folosit, exportul poate fi în format Markdown sau HTML. Urmează instrucțiunile potrivite formatului de fișier exportat: 

- [[Import HTML files]]
- [[Import Markdown files]]
