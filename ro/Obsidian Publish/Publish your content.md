---
permalink: publish/publish
publish: true
mobile: true
description: Află cum să-ți publici conținutul folosind Obsidian Publish
---

Această pagină explică cum să-ți administrezi conținutul publicat. Pentru a afla cum să personalizezi stilul site-ului tău, vezi [[Customize your site|Personalizează-ți site-ul]].

## Cerințe prealabile

- Un cont Obsidian. Dacă nu ai unul, [înscrie-te acum](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Un abonament activ Obsidian Publish. Dacă nu ai unul, abonează-te din [tabloul de bord al contului tău](https://obsidian.md/account/publish).
- Modulul integrat **Publish** este [[Set up Obsidian Publish#Enable Obsidian Publish|activat]].
- Un [[Manage sites#Create a new site|site Publish]] este creat.

## Publică note

1. În **Panglică**, selectează **Publică schimbările** ![[lucide-send.svg#icon]].
2. În fereastra de dialog **Publică schimbările**, selectează **NOU** pentru a vedea toate notele nepublicate.
3. Selectează notele pe care vrei să le publici.
4. Selectează **Publică**.

## Anulează publicarea notelor

Notele rămân în seiful tău local chiar și după ce anulezi publicarea lor.

1. În **Panglică**, selectează **Publică schimbările** ![[lucide-send.svg#icon]].
2. În fereastra de dialog **Publică schimbările**, selectează **NESCHIMBAT** pentru a vedea toate notele publicate.
3. Selectează notele a căror publicare vrei să o anulezi.
4. Selectează **Publică**.

## Actualizează o notă publicată

1. În **Panglică**, selectează **Publică schimbările** ![[lucide-send.svg#icon]].
2. În fereastra de dialog **Publică schimbările**, selectează **SCHIMBAT** pentru a vedea toate notele modificate de la ultima publicare.
3. Selectează notele pe care vrei să le actualizezi.
4. Selectează **Publică**.

> [!hint] Ștergerea notelor și imaginilor redenumite sau eliminate din Publish se întâmplă la acest pas. Trebuie să bifezi manual căsuța pentru a șterge aceste date, deoarece nu este selectată automat din motive de siguranță.

## Publică date conectate

Când publici note care conțin legături către alte note sau imagini încorporate, pot apărea legături întrerupte, cu excepția cazului în care sunt publicate și notele conectate. **Obsidian Publish** ajută la prevenirea acestui lucru, selectând automat fișierele media conectate la notele pe care le-ai ales deja.

Pentru a include toate notele conectate, selectează **Adaugă legătură** în fereastra de dialog **Publică schimbările**.

Înainte de a publica, revizuiește selecția actualizată pentru a te asigura că nu include date pe care nu ești pregătit să le publici.

> [!tip] Funcția **Adaugă legătură** respectă orice excludere definită în [[#Ignoră date]].

## Selectează automat datele de publicat

Setează `publish: true` în [[Properties|Proprietățile]] unei note pentru a o include automat pentru publicare, fie ca notă nouă, fie ca notă schimbată.

Poți selecta automat și note și imagini conectate din directoare specifice, adăugându-le ca directoare **Incluse**:

1. În **Panglică**, selectează **Publică schimbările** ![[lucide-send.svg#icon]] sau deschide [[Command palette|Paleta de comenzi]] și scrie **Publish: Publish changes...**.
2. Selectează pictograma **Gestionează filtrele de publicare** ![[lucide-filter.svg#icon]].
3. În secțiunea **Directoare incluse**, selectează **Gestionează**.
4. Alege directoarele pe care vrei să le incluzi din sugestii.
5. Directorul este adăugat la lista de includere.
6. Selectează **Gata** când ai terminat.

### Ignoră date

Pentru a ignora o notă în Obsidian Publish, setează `publish: false` în [[Properties|Proprietățile]] notei. Nota nu va mai apărea în lista notelor de publicat.

Poți ignora automat și note și imagini din directoare specifice, adăugându-le ca directoare **Excluse**:

1. În **Panglică**, selectează **Publică schimbările** ![[lucide-send.svg#icon]] sau deschide [[Command palette|Paleta de comenzi]] și scrie **Publish: Publish changes...**.
2. Selectează pictograma **Gestionează filtrele de publicare** ![[lucide-filter.svg#icon]].
3. În secțiunea **Directoare excluse**, selectează **Gestionează**.
4. Alege directoarele pe care vrei să le excluzi din sugestii.
5. Directorul este adăugat la lista de excludere.
6. Selectează **Gata** când ai terminat.

> [!note] `publish: true` are prioritate față de directoarele excluse
> Dacă un fișier are `publish: true`, va fi publicat totuși chiar dacă se află într-un director sau filtru exclus. Acest lucru se întâmplă deoarece `publish: true` oferă un control mai specific.
