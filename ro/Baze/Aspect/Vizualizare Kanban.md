---
permalink: bases/views/kanban
---
Kanban este un tip de [[Afișaje|vizualizare]] pe care îl poți folosi în [[Introducere în Baze|Baze]].

Selectează ![[lucide-kanban-square.svg#icon]] **Kanban** din meniul de vizualizare pentru a afișa fișierele ca și carduri organizate în coloane. Fiecare coloană reprezintă o valoare a proprietății utilizate pentru a grupa rezultatele.


> [!note] Necesită Obsidian 1.14+
> Vizualizările Kanban sunt disponibile în Obsidian 1.14 și versiunile ulterioare.


## Grupează cardurile în coloane

O vizualizare Kanban necesită o proprietate pentru a grupa rezultatele.

1. Selectează **Grup** din bara de instrumente. Pe telefoane, selectează **Afișaj → Grup**.
2. Sub **Grupează după**, alege o proprietate.

Fișierele fără o valoare pentru proprietatea selectată apar în coloana **Niciunul**.

> [!info] 
> Dacă grupezi după o formulă sau o proprietate de fișier alta decât `file.folder`, nu poți muta carduri sau coloane, și nici crea notițe din coloane. Poți totuși [[Afișaje#Reordonează, ascunde și adaugă grupuri|gestiona ordinea și vizibilitatea grupurilor]] din meniul **Grup**.

## Lucrează cu carduri și coloane

- Trage un card într-o altă coloană pentru a actualiza proprietatea grupată în acea notiță. Doar notițele Markdown pot fi mutate între coloane, cu excepția grupării după `file.folder`, unde mutarea unui card mută fișierul în acel director.
- Selectează pictograma plus din antetul unei coloane sau ![[lucide-plus.svg#icon]] **Nou** în partea de jos a unei coloane pentru a crea o notiță cu valoarea acelei coloane.
- Trage un antet de coloană pentru a schimba ordinea coloanelor. Pentru a restaura ordinea automată, deschide **Grup** și alege o ordine de sortare automată în loc de **Manual**.
- Folosește **Grup** pentru a [[Afișaje#Reordonează, ascunde și adaugă grupuri|reordona, ascunde sau adăuga coloane]].
- Folosește meniul ![[lucide-list.svg#icon]] **Proprietăți** pentru a alege proprietățile afișate pe fiecare card. Prima proprietate este afișată ca titlu al cardului.

## Setări

Setările vizualizării Kanban pot fi configurate în [[Afișaje#Setări vizualizare|Setări vizualizare]].

- Ascunde coloanele goale
- Lățimea coloanei
- Proprietate imagine
- Încadrare imagine
- Raport de aspect imagine

### Ascunde coloanele goale

Ascunde coloanele care nu conțin niciun card.

### Lățimea coloanei

Definește lățimea fiecărei coloane și a cardurilor sale.

### Proprietate imagine

Cardurile Kanban suportă o imagine de acoperire opțională care este afișată în partea de sus a cardului. Valorile de proprietate acceptate sunt aceleași ca pentru [[Afișaj carduri#Proprietate imagine|proprietatea imagine din Afișaj carduri]].

### Încadrare imagine

Dacă ai o proprietate de imagine configurată, această opțiune determină modul în care imaginea este afișată în card.

- **Acoperire:** Imaginea umple zona de conținut a cardului. Dacă nu se potrivește, imaginea este decupată.
- **Încadrare:** Imaginea este scalată până se încadrează în zona de conținut a cardului. Imaginea nu este decupată.

### Raport de aspect imagine

Înălțimea imaginii de acoperire este determinată de raportul său de aspect. Ajustează această opțiune pentru a face imaginea mai scurtă sau mai înaltă.
