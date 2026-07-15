---
permalink: import/google-keep
---
Obsidian îți permite să îți migrezi cu ușurință notele din Google Keep folosind [[Importer|modulul Importer]]. Acest lucru îți va converti datele din Google Keep în fișiere Markdown durabile, pe care le poți folosi cu Obsidian și cu multe alte aplicații.

## Exportă-ți datele din Google Keep

1. Mergi la [Google Takeout](https://takeout.google.com/settings/takeout) și conectează-te la contul tău Google.
2. Apasă **Deselectează tot** în colțul din dreapta sus.
3. Derulează în jos și selectează **Keep** din listă. 
4. Derulează până la finalul paginii și apasă **Pasul următor**.
5. Pe ecranul următor, apasă butonul **Creează export**.
6. Descarcă fișierul `.zip` odată ce este disponibil.

## Importă-ți datele din Google Keep în Obsidian

Vei avea nevoie de modulul oficial Obsidian [[Importer]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Settings]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier** alege **Google Keep (.zip).**
6. Selectează locația fișierului tău `.zip`.
7. Apasă **Importă** și așteaptă până când importul este finalizat.
8. Ai terminat!

### Funcții acceptate

- Toate listele de verificare vor fi importate ca elemente de nivel superior, deoarece Google Keep nu exportă informații despre indentare.
- Mementourile și atribuirile către utilizatori de pe note nu vor fi importate, deoarece aceste funcții nu sunt acceptate de Obsidian.
- Toate celelalte informații ar trebui importate ca o combinație de conținut și etichete.
