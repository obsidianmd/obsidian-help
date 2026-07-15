---
permalink: manage-vaults
---
Un **seif** este un director din sistemul dumneavoastră de fișiere care conține notele, [[attachments|atașamentele]] și [[configuration folder|directorul de configurare]] cu setările specifice Obsidian. Pentru mai multe informații despre seifuri, consultați [[How Obsidian stores data]].

Puteți gestiona seifurile folosind **comutatorul de seifuri**. *Profilul seifului* se deschide prima dată când deschideți Obsidian.

Pentru a deschide comutatorul de seifuri dintr-un seif existent, selectați **Profilul seifului** ![[lucide-chevrons-up-down.svg#icon]] din partea de jos a [[Sidebar|barei laterale stângi]]. Sau, selectați **Deschide alt seif** din [[command palette|paleta de comenzi]].

## Creați un seif nou

1. Pe computerul dumneavoastră, deschideți Obsidian.
2. În partea din stânga jos, selectați **Profilul seifului** ![[lucide-chevrons-up-down.svg#icon]].
3. Va apărea un meniu contextual. Selectați **Gestionează seifurile...**.
3. În dreapta opțiunii **Creează seif nou**, selectați **Creează**.
4. La **Numele seifului**, introduceți numele seifului dumneavoastră.
5. Faceți clic pe **Răsfoiește** pentru a selecta locul unde va fi creat noul seif.
6. Faceți clic pe **Creează**.

## Creați un seif dintr-un director existent

1. Pe computerul dumneavoastră, deschideți Obsidian.
2. În partea din stânga jos, selectați **Profilul seifului** ![[lucide-chevrons-up-down.svg#icon]].
3. Va apărea un meniu contextual. Selectați **Gestionează seifurile...**.
3. În dreapta opțiunii **Deschide directorul ca seif**, faceți clic pe **Deschide**.
4. În navigatorul de fișiere, selectați directorul pe care doriți să-l folosiți ca seif.
5. Faceți clic pe **Deschide**.

> [!tip] Deschideți un seif din Obsidian Sync
> Dacă doriți să deschideți un seif la distanță folosind Obsidian Sync, consultați [[Set up Obsidian Sync]].

## Redenumiți seiful

Deoarece numele unui seif și directorul subiacent sunt identice, redenumirea unui seif redenumește și directorul.

1. Pe computerul dumneavoastră, deschideți Obsidian.
2. În partea din stânga jos, selectați **Profilul seifului** ![[lucide-chevrons-up-down.svg#icon]].
3. Va apărea un meniu contextual. Selectați **Gestionează seifurile...**.
4. În lista de seifuri, selectați **Mai multe opțiuni** ![[lucide-more-horizontal.svg#icon]] lângă seiful pe care doriți să-l redenumiți.
5. Selectați **Redenumește seiful**.
6. Introduceți noul nume pentru seif și apăsați `Enter`.

## Mutați seiful într-un alt director

1. Pe computerul dumneavoastră, deschideți Obsidian.
2. În partea din stânga jos, selectați **Profilul seifului** ![[lucide-chevrons-up-down.svg#icon]].
3. Va apărea un meniu contextual. Selectați **Gestionează seifurile...**.
4. Închideți fereastra seifului curent, lăsând deschisă fereastra **Gestionează seifurile**.
5. În lista de seifuri, selectați **Mai multe opțiuni** ![[lucide-more-horizontal.svg#icon]] lângă seiful pe care doriți să-l mutați.
6. Selectați **Mută seiful**, apoi selectați noua locație.

Unele sisteme de operare nu permit mutarea seifului cu ajutorul comutatorului de seifuri. În aceste cazuri, va trebui să mutați seiful manual:

1. Închideți Obsidian.
2. Mutați directorul seifului într-o nouă locație, evitând directoarele sincronizate de alte servicii.
3. Redeschideți Obsidian.
4. Faceți clic pe pictograma **Profilul seifului** din partea din stânga jos ![[lucide-chevrons-up-down.svg#icon]].
5. Din meniul contextual, selectați **Gestionează seifurile...**.
6. Lângă **Deschide directorul ca seif**, faceți clic pe **Deschide**.
7. Navigați la noul director al seifului și selectați-l.
8. Faceți clic pe **Deschide**.
9. Verificați dacă conținutul seifului este neschimbat. Dacă este necesar, reactivați modulele comunitare navigând la **[[Settings]] → Module comunitare → Dezactivează modul restricționat**.

## Eliminați seiful

Eliminarea unui seif doar îl elimină din lista de seifuri.

1. Pe computerul dumneavoastră, deschideți Obsidian.
2. În partea din stânga jos, selectați **Profilul seifului** ![[lucide-chevrons-up-down.svg#icon]].
3. Va apărea un meniu contextual. Selectați **Gestionează seifurile...**.
4. În lista de seifuri, selectați **Mai multe opțiuni** ![[lucide-more-horizontal.svg#icon]] lângă seiful pe care doriți să-l mutați.
5. Selectați **Elimină din listă**.

## Transferați setările către un alt seif

Pentru a folosi aceleași setări pentru un alt seif, folosiți managerul de fișiere preferat (sau terminalul) pentru a copia directorul `.obsidian` din rădăcina seifului sursă în rădăcina seifului destinație.

Este posibil să fie necesar să reporniți Obsidian pentru a aplica modificările.

> [!note] Unde găsesc directorul `.obsidian`?
> Implicit, majoritatea sistemelor de operare ascund directoarele care încep cu un punct (`.`). Pentru mai multe informații despre directorul `.obsidian` și cum să-l accesați, consultați [[How Obsidian stores data#Setările seifului|setările seifului]] și [[Configuration folder|directoarele de configurare]].
