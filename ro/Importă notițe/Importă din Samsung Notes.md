---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian îți permite să migrezi notițele din Samsung Notes folosind [[Importator|modulul Importator]]. Acesta convertește notițele tale în fișiere Markdown durabile pe care le poți folosi cu Obsidian și multe alte aplicații.

## Exportă notițele din Samsung Notes

Samsung Notes salvează fiecare notiță ca fișier Samsung Notes (`.sdocx`).

1. Deschide Samsung Notes pe telefonul sau tableta ta.
2. Apasă lung pe o notiță, apoi selectează fiecare notiță pe care vrei să o exporți.
3. Apasă pe **Salvează ca fișier**, apoi alege **Samsung Notes file**.
4. Alege un director și apasă **Salvează**.
5. Mută fișierele `.sdocx` pe dispozitivul unde folosești Obsidian, de exemplu cu un cablu USB, Quick Share sau un serviciu de stocare în cloud.

Dacă ai multe fișiere, le poți pune într-un fișier `.zip` și să-l importezi pe acesta. Samsung Notes nu include directoarele sale în fișierele pe care le salvează, dar Importatorul păstrează directoarele din interiorul fișierului `.zip`. Pentru a-ți menține notițele organizate, salvează notițele din fiecare director Samsung Notes într-un director cu același nume înainte de a le arhiva.

## Importă datele din Samsung Notes în Obsidian

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala de aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importator](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importator.
4. Deschide modulul **Importator** folosind paleta de comenzi sau pictograma din panglică.
5. La **Format fișier**, alege **Samsung Notes (.sdocx)**.
6. Selectează fișierele `.sdocx` sau un fișier `.zip` care le conține.
7. Selectează **Importă** pentru a revizui șablonul generat și a previzualiza exemple din notițele tale.
8. Selectează **Importă** din nou și așteaptă finalizarea importului.

## Limitări

- Scrisul de mână și formele desenate se importă ca imagine SVG la sfârșitul notiței. Trasările își păstrează forma și culoarea, dar nu și lățimea variabilă a unui stilou sensibil la presiune. Formele și liniile se importă în negru.
- Casetele de text, imaginile plasate pe pagină și PDF-urile adnotate nu sunt încă importate.
- Elementele din listele de verificare se importă ca nebifate.
- Culorile textului, fonturile și dimensiunile fonturilor nu sunt păstrate.
- Deblochează notițele blocate în Samsung Notes înainte de a le exporta.

## Șabloane

Folosește [[Șabloane pentru importator|șabloanele pentru importator]] pentru a configura complet modul în care sunt importate datele din Samsung Notes.

![[Șabloane pentru importator#Variabile]]
