---
permalink: import/google-keep
aliases:
  - Import from Google Keep
cssclasses:
  - soft-embed
---
Obsidian îți permite să îți migrezi cu ușurință notele din Google Keep folosind [[Importator|modulul Importer]]. Acest lucru îți convertește datele din Google Keep în fișiere Markdown durabile, pe care le poți folosi cu Obsidian și cu multe alte aplicații.

## Exportă-ți datele din Google Keep

1. Mergi la [Google Takeout](https://takeout.google.com/settings/takeout) și conectează-te la contul tău Google.
2. Apasă **Deselectează tot** în colțul din dreapta sus.
3. Derulează în jos și selectează **Keep** din listă. 
4. Derulează până la finalul paginii și apasă **Pasul următor**.
5. Pe ecranul următor, apasă butonul **Creează export**.
6. Descarcă fișierul `.zip` odată ce este disponibil.

## Importă-ți datele din Google Keep în Obsidian

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier** alege **Google Keep (.zip).**
6. Selectează locația fișierului tău `.zip`.
7. Selectează **Importă** pentru a revizui șablonul generat și a previzualiza exemple din notele tale.
8. Selectează **Importă** din nou și așteaptă finalizarea importului.

## Limitări

- Toate listele de verificare vor fi importate ca elemente de nivel superior, deoarece Google Keep nu exportă informații despre indentare.
- Mementourile și atribuirile către utilizatori de pe note nu vor fi importate, deoarece aceste funcții nu sunt acceptate de Obsidian.


## Șabloane

Folosește [[Șabloane pentru importator|șabloanele Importer]] pentru a configura complet modul în care sunt importate datele tale din Google Keep.

![[Șabloane pentru importator#Variables]]

În plus, Google Keep oferă variabile pentru textul original, liste, etichete, atașamente, culori, date de partajare, sarcini, adnotări și starea notei.

| Variabilă          | Descriere                                         |
| ----------------- | ------------------------------------------------- |
| `{{isArchived}}`  | Dacă nota este arhivată.                          |
| `{{isPinned}}`    | Dacă nota este fixată.                            |
| `{{isTrashed}}`   | Dacă nota este în coșul de gunoi.                 |
| `{{color}}`       | Numele culorii din Google Keep.                    |
| `{{labels}}`      | Matrice de înregistrări de etichete.               |
| `{{sharees}}`     | Matrice de persoane cu care a fost partajată nota. |
| `{{annotations}}` | Matrice de înregistrări de adnotări de linkuri.    |

Titlul original din Google Keep este disponibil ca `{{source.title}}`. Variabila partajată `{{title}}` conține titlul notei importate.
