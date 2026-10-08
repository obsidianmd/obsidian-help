---
permalink: publish/collaborate
publish: true
mobile: true
description: Află cum să colaborezi cu alți utilizatori Obsidian pe site-ul tău Obsidian Publish.
aliases:
  - Collaborate on a Publish site
---
Află cum să colaborezi pe site-ul tău [[Introducere în Obsidian Publish|Obsidian Publish]] cu alți utilizatori Obsidian. Adăugându-ți prietenii și colegii ca și colaboratori, aceștia pot publica schimbări pe site-ul tău.

Doar proprietarul site-ului are nevoie de un abonament activ pentru Obsidian Publish. Colaboratorii au nevoie doar de un [cont Obsidian](https://obsidian.md/account).

> [!warning] Înainte de a publica schimbări pe un site partajat, asigură-te că ai [[#Sync changes between collaborators|sincronizat schimbările între colaboratori]]. În caz contrar, riști să suprascrii schimbările altor colaboratori.

## Adaugă un colaborator la un site

1. În [[Panglică|Panglică]], selectează **Publică schimbările** ![[lucide-send.svg#icon]] sau deschide [[Paleta de comenzi|Paleta de comenzi]] și scrie **Publish: Publish changes...**
2. În fereastra de dialog **Publică schimbările**, apasă pe **Schimbă opțiunile siteului** ![[lucide-cog.svg#icon]].
3. Lângă **Colaborare pe site**, selectează **Gestionează**.
4. La **Invită utilizator**, introdu adresa de e-mail a colaboratorului.
5. Selectează **Adăugați**.

## Elimină un colaborator dintr-un site

1. În [[Panglică|Panglică]], selectează **Publică schimbările** ![[lucide-send.svg#icon]] sau deschide [[Paleta de comenzi|Paleta de comenzi]] și scrie **Publish: Publish changes...**
2. În fereastra de dialog **Publică schimbările**, apasă pe **Schimbă opțiunile siteului** ![[lucide-cog.svg#icon]].
3. Lângă **Colaborare pe site**, selectează **Gestionează**.
4. Lângă colaboratorul pe care vrei să-l elimini, selectează **Elimină utilizatorul** ![[lucide-x.svg#icon]].

## Sincronizează schimbările între colaboratori

Obsidian Publish nu sincronizează automat schimbările publicate între seifurile locale. În schimb, colaboratorii trebuie să sincronizeze manual schimbările făcute de ceilalți colaboratori.

Pentru a actualiza o notă locală cu schimbările de pe siteul live:

1. În [[Panglică|Panglică]], selectează **Publică schimbările** ![[lucide-send.svg#icon]] sau deschide [[Paleta de comenzi|Paleta de comenzi]] și scrie **Publish: Publish changes...**
2. Apasă click-dreapta sau apasă lung pe schimbarea pe care vrei să o sincronizezi, apoi selectează **Folosește versiunea live**. **Acest lucru va suprascrie nota din seiful tău local.**

> [!tip] Îți recomandăm să folosești un alt instrument pentru a sincroniza schimbările între seifuri, cum ar fi [[Introducere în Obsidian Sync|Obsidian Sync]] sau [git](https://git-scm.com/).

## Permisiuni

Tabelul următor listează permisiunile disponibile pentru proprietari și colaboratori:

| Acțiune                                     | Colaborator | Proprietar |
|----------------------------------------------|:------------:|:-----:|
| Publică pagini noi                          | ✓            | ✓     |
| Publică schimbări pe paginile publicate     | ✓            | ✓     |
| Anulează publicarea paginilor               | ✓            | ✓     |
| Configurează opțiunile siteului             |              | ✓     |
| Gestionează permisiunile                    |              | ✓     |

