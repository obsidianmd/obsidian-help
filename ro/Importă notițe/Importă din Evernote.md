---
permalink: import/evernote
aliases:
  - Import from Evernote
---
Obsidian îți permite să îți migrezi cu ușurință notele din Evernote folosind [[Importator|modulul Importer]]. Acest lucru îți va converti datele din Evernote în fișiere Markdown durabile, pe care le poți folosi cu Obsidian și cu multe alte aplicații.

## Exportă-ți datele din Evernote

Obsidian folosește formatul de export al Evernote, fișiere `.enex`.

Poți găsi instrucțiunile Evernote pentru exportul datelor tale [pe site-ul Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Această metodă îți permite să exporți notebook-uri întregi din clientul desktop.

1. Mergi la ecranul Notebooks.
2. Apasă pe **More actions** ( `•••` ) și alege **Export Notebook...**
3. Selectează **ENEX** ca format de fișier.
3. Alege o locație pentru fișierul `.enex` exportat.

## Importă-ți datele din Evernote în Obsidian

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier** alege **Evernote (.enex)**.
6. Selectează locația fișierului tău de rezervă Evernote.
7. Apasă **Importă** și așteaptă până când importul este finalizat.
8. Ai terminat!

## Opțiuni avansate de import

### Menține ierarhia etichetelor

Exportul din Evernote nu păstrează ierarhia etichetelor. Pentru a păstra ierarhia etichetelor tale, poți „aplatiza” etichetele separate prin „/”. De exemplu, presupunând că ai următoarea structură de etichete: 

```
ParentTag
    ChildTag
```

Ce trebuie să faci pentru a păstra etichetele asociate în Obsidian este:

1. Apasă clic dreapta pe ChildTag.
2. Selectează „Rename.”
3. Redenumește-o `ParentTag/ChildTag`.

### Gestionarea stivelor de notebook-uri

Deoarece procesul de export este limitat la notebook-uri individuale, fișierul de export implicit nu conține informații despre stivele de notebook-uri. Totuși, modulul de import poate recunoaște tipare în numele fișierului enex pentru a recrea stivele de notebook-uri sub formă de directoare.

Presupunând că ai un notebook numit ```NotebookA``` într-o stivă numită ```Stack1```, poți recrea o stivă de notebook-uri redenumind fișierul enex în ```Stack1@@@NotebookA```.

Rezultatul este că notele convertite vor fi generate în directorul Stack1/NotebookA.

### Mai multe opțiuni

Pentru opțiuni de import mai avansate din Evernote, poți încerca și [importul prin Yarle](https://github.com/akosbalasko/yarle).
