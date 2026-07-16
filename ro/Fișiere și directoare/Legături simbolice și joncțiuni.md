---
permalink: symlinks
aliases:
  - Symbolic links and junctions
---
Puteți folosi [legături simbolice](https://en.wikipedia.org/wiki/Symbolic_link) (symlinks) și [joncțiuni](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) în seiful dumneavoastră pentru a stoca fișiere în afara seifului și a [[Cum stochează Obsidian datele#Setări globale|directorului de sistem]].

> [!danger] Folosiți pe propriul risc
> Vă sfătuim ferm să nu folosiți legături simbolice. Folosind legături simbolice și joncțiuni în seiful dumneavoastră, riscați să vă pierdeți sau să vă corupeți datele, ori să blocați Obsidian. Asigurați-vă că faceți copii de siguranță regulate ale seifului și setărilor dumneavoastră.

Mai jos sunt câteva limitări sau probleme cunoscute pe care ați putea dori să le aveți în vedere:

- Buclele de legături simbolice nu sunt permise, pentru a preveni blocarea Obsidian din cauza unei bucle infinite.
- Țintele legăturilor simbolice trebuie să fie complet disjuncte de rădăcina seifului sau de orice altă țintă a unei legături simbolice. Disjunct înseamnă că un director nu conține un altul, sau invers. Obsidian ignoră orice legătură simbolică către un director părinte al seifului, sau dintr-un director al seifului către un alt director din același seif. Aceasta este o măsură de siguranță pentru a vă asigura că nu ajungeți cu fișiere duplicate în seiful dumneavoastră, ceea ce ar putea face ca legăturile să devină ambigue.
- Legăturile simbolice pot să nu funcționeze bine cu Obsidian Sync, sau _cu orice alt tip de sincronizare_. Dacă ținta unei legături simbolice este ea însăși un director sincronizat de un alt seif Obsidian, ați putea (posibil) ajunge cu conflicte de sincronizare sau pierderi de date. Unele instrumente de sincronizare, precum Git, nu urmăresc legăturile simbolice, ci sincronizează _calea_ către care indică legătura simbolică, ceea ce poate produce rezultate nedorite dacă vă partajați seiful cu alte persoane în acest mod.
- Managerul de fișiere al Obsidian nu poate muta fișiere între limite de dispozitive, așa că dacă creați o legătură simbolică către un director de pe o altă unitate decât seiful dumneavoastră, nu veți putea trage fișiere între acel director și alte directoare folosind exploratorul de fișiere al Obsidian. (Va trebui să folosiți exploratorul sistemului dumneavoastră de operare pentru astfel de mutări, iar Obsidian va vedea mutarea ca o ștergere și crearea unui fișier nou. De asemenea, acesta _nu_ va actualiza legăturile care depindeau de calea acelui fișier.)
- Legăturile simbolice de fișiere (spre deosebire de cele de directoare) _pot_ funcționa, dar nu sunt susținute oficial în acest moment. Modificările efectuate în afara Obsidian nu sunt monitorizate, așa că dacă modificați fișierul direct, Obsidian nu va detecta modificarea, nu va actualiza indexurile de căutare etc.
- Crearea de legături simbolice pentru elemente din directorul `.obsidian/` pentru a le partaja între seifuri **are șanse mari să vă corupă setările**, cu excepția cazului în care știți _foarte bine_ ce faceți. Dacă totuși decideți să procedați astfel, măcar aveți copii de siguranță.
