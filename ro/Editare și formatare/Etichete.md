---
permalink: tags
aliases:
  - Tags
---
Etichetele sunt cuvinte-cheie sau subiecte care vă ajută să găsiți rapid notele pe care le doriți.

## Adăugați o etichetă la o notă

Pentru a crea o etichetă, introduceți un simbol diez (`#`) în editor, urmat de un cuvânt-cheie. De exemplu, `#meeting`.

Puteți adăuga etichete și folosind [[Proprietăți|proprietatea]] `tags`. Etichetele în YAML trebuie formatate întotdeauna ca o listă:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Găsiți note folosind etichete

Pentru a găsi note folosind modulul [[Caută|Căutare]], folosiți [[Caută#Search operators|operatorul de căutare]] `tag` în termenul dvs. de căutare, de exemplu `tag:#meeting`.

Puteți căuta etichete și făcând clic pe ele în notele dvs.

Pentru a găsi note folosind modulul [[Panoul cu etichete|Etichete]], selectați **Tags: Show tags** din [[Paleta de comenzi|Paleta de comenzi]], apoi selectați eticheta pe care doriți să o căutați.

## Etichete imbricate

Etichetele imbricate definesc ierarhii de etichete care fac mai ușoară găsirea și filtrarea etichetelor înrudite.

Creați etichete imbricate folosind bare oblice (`/`) în numele etichetei, de exemplu `#inbox/to-read` și `#inbox/processing`.

- În [[Caută|Căutare]], `tag:inbox` se va potrivi cu `#inbox`, precum și cu toate etichetele imbricate, precum `#inbox/to-read`.  
- În [[Panoul cu etichete|modul de vizualizare a etichetelor]], etichetele imbricate sunt afișate ca aparținând etichetei părinte.  
- În [[Introducere în Baze|Baze]], etichetele imbricate sunt recunoscute de funcția [[Funcții#hasTag|`hasTag`]], astfel încât `file.hasTag("a")` se va potrivi atât cu `#a`, cât și cu `#a/b`.  

## Formatul etichetelor

Puteți folosi oricare dintre următoarele caractere în etichetele dvs.:

- Litere alfabetice
- Numere
- Liniuță de subliniere (`_`)
- Cratimă (`-`)
- Bară oblică (`/`) pentru [[#Nested tags|etichete imbricate]]
- Caractere Unicode acceptate în mod obișnuit, inclusiv emoji și alte simboluri

Etichetele trebuie să conțină cel puțin un caracter nenumeric. De exemplu, #1984 nu este o etichetă validă, dar #y1984 este.

Etichetele nu țin cont de majuscule și minuscule. De exemplu, #tag și #TAG vor fi tratate ca identice.

> [!note] 
> Etichetele vor fi afișate cu forma de scriere (majuscule/minuscule) cu care au fost create prima dată, în [[Panoul cu etichete|modul de vizualizare a etichetelor]]. 
> De exemplu, crearea #Tag și apoi #TAG va afișa #Tag pentru ambele. 

Etichetele nu pot conține spații goale. Pentru a separa două sau mai multe cuvinte, puteți folosi în schimb următoarele formate:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
