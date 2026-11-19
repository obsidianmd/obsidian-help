---
permalink: plugins/file-explorer
publish: true
mobile: true
description: File explorer este un modul integrat care îți permite să gestionezi fișiere și directoare în seiful tău.
aliases:
  - File explorer
---
File explorer este un [[Module de bază|modul integrat]] care îți permite să gestionezi fișiere și directoare în seiful tău. Poți răsfoi note și alte [[Formate de fișiere acceptate|formate de fișiere acceptate]] din seiful tău și poți efectua multe operațiuni comune cu fișierele:

- Creează, șterge și redenumește fișiere și directoare.
- Mută fișiere și directoare prin tragere și plasare.
- Folosește [[#Folosește meniul contextual|meniul contextual]] pentru a accesa toate operațiunile disponibile.

> [!tip]- Tragere și plasare a fișierelor
> Poți trage un fișier din Exploratorul de fișiere în nota ta pentru a crea o legătură către el, sau poți trage un fișier într-un director din Exploratorul de fișiere pentru a-l copia.

## Creează o notă nouă

Pentru a crea o notă nouă în locația implicită pentru note noi:

1. Selectează **New note** ![[lucide-pen-line.svg#icon]] în partea de sus a Exploratorului de fișiere.
2. Scrie numele notei, apoi apasă `Enter`.

> [!tip]- Schimbă locația implicită
> Poți schimba locația implicită pentru note noi sub **[[Setări|Setări]] → [[Setări#Files and links|Fișiere și legături]] → [[Setări#Default location for new notes|Locația implicită pentru note noi]]**.

Pentru a crea o notă nouă într-un director anume:

1. Dă clic dreapta pe director, apoi selectează **New note**.
2. Scrie numele notei, apoi apasă `Enter`.

## Creează un director nou

Pentru a crea un director nou în rădăcina seifului tău:

1. Selectează **New folder** ![[lucide-folder-plus.svg#icon]] în partea de sus a Exploratorului de fișiere.
2. Scrie numele directorului, apoi apasă `Enter`.

Pentru a crea un subdirector:

1. Dă clic dreapta pe directorul în care vrei să creezi subdirectorul, apoi selectează **New folder**.
2. Scrie numele directorului, apoi apasă `Enter`.

## Schimbă ordinea de sortare

Pentru a schimba ordinea de sortare a fișierelor tale:

1.  Selectează **Change sort order** ![[lucide-arrow-up-narrow-wide.svg#icon]] în partea de sus a Exploratorului de fișiere.
2. Alege cum vrei să-ți sortezi fișierele. Poți sorta în ordine crescătoare sau descrescătoare după numele fișierului, ora modificării sau ora creării.

## Dezvăluie automat fișierul activ

Când deschizi o notă, Exploratorul de fișiere poate derula automat la acea notă și o poate evidenția în structura de directoare. Acest lucru te ajută să urmărești unde se află nota ta activă în seiful tău.

Pentru a comuta dezvăluirea automată:

- Selectează **Auto-reveal active file** ![[lucide-gallery-vertical.svg#icon]] în partea de sus a Exploratorului de fișiere.

Când este activată, Exploratorul de fișiere va urmări automat și va dezvălui nota activă.

## Extinde sau restrânge toate directoarele

Poți extinde sau restrânge toate directoarele din Exploratorul de fișiere deodată.

Pentru a extinde toate directoarele:

- Selectează **Expand all** ![[lucide-chevrons-up-down.svg#icon]] în partea de sus a Exploratorului de fișiere.

Pentru a restrânge toate directoarele:

- Selectează **Collapse all** ![[lucide-chevrons-down-up.svg#icon]] în partea de sus a Exploratorului de fișiere.

## Șterge un fișier sau un director

1. Dă clic dreapta pe fișierul pe care vrei să-l ștergi, apoi selectează **Delete**.
2. Dacă ți se cere să confirmi că vrei să ștergi fișierul, selectează **Delete**.

Pentru mai multe informații, consultă [[Gestionează notițele#Delete a note|Șterge o notă]].

## Redenumește un fișier sau un director

1. Dă clic dreapta pe fișierul pe care vrei să-l redenumești, apoi selectează **Rename**.
2. Scrie noul nume, apoi apasă `Enter`.

Pentru mai multe informații, consultă [[Gestionează notițele#Rename a note|Redenumește o notă]].

## Mută un fișier sau un director

Pentru a muta un fișier sau un director, poți folosi tragere și plasare sau meniul contextual.

**Tragere și plasare:**

- Trage un fișier sau un director în directorul în care vrei să-l muți.
- Cu `Alt-Click` (Windows/Linux) sau `Opt-Click` (macOS) poți selecta mai multe fișiere individuale și le poți trage într-un alt director. Dacă sunt toate consecutive, poți folosi `Shift-Click` pentru asta.

**Meniul contextual:**

1. Dă clic dreapta pe un fișier, apoi selectează **Move file to...**.
2. Caută numele directorului în care vrei să muți fișierul, apoi selectează-l din listă.

## Folosește meniul contextual

Meniul contextual listează acțiunile disponibile pentru un fișier sau un director. Multe dintre elementele pentru fișiere apar și în [[Meniul Mai multe opțiuni]].

### Desktop

Dă clic dreapta pe un fișier sau un director din Exploratorul de fișiere.

**Fișiere**

- **Open in new tab** și **Open to the right** deschid fișierul într-o filă nouă sau într-un panou în dreapta.
- **Open in new window** deschide fișierul în propria fereastră. Vezi [[Ferestre pop-out]].
- **Duplicate** creează o copie a fișierului.
- **Move file to...** mută fișierul într-un alt director. Vezi [[#Mută un fișier sau un director]].
- **Bookmark...** adaugă fișierul la marcajele tale. Necesită modulul Bookmarks. Vezi [[Marcaje#Add a bookmark]].
- **Merge entire file with...** combină nota cu alta. Necesită modulul Note composer. Vezi [[Compozitor de notițe#Merge notes]].
- **Publish current file** publică nota pe site-ul tău. Necesită Obsidian Publish. Vezi [[Introducere în Obsidian Publish|Publish]].
- **Copy path** copiază locația fișierului ca URL Obsidian, din directorul seifului sau din rădăcina sistemului.
- **Open version history** afișează versiunile anterioare ale fișierului. Necesită un abonament activ Obsidian Sync. Vezi [[Istoricul versiunilor]].
- **Open in default app** deschide fișierul în aplicația pe care computerul tău o folosește pentru acel tip de fișier.
- **Reveal in Filesystem** afișează fișierul în managerul de fișiere. Pe macOS, elementul se numește **Reveal in Finder**. Pe Windows și Linux, se numește **Show in system explorer**.
- **Rename...** schimbă numele fișierului. Vezi [[#Redenumește un fișier sau un director]].
- **Delete** șterge fișierul. Vezi [[#Șterge un fișier sau un director]].

**Directoare**

- **New note** și **New folder** creează o notă sau un director în interiorul directorului. Vezi [[#Creează o notă nouă]] și [[#Creează un director nou]].
- **New canvas** creează o pânză în director. Vezi [[Canvas]].
- **New base** creează o bază în director. Vezi [[Introducere în Baze]].
- **Duplicate** creează o copie a directorului.
- **Move folder to...** mută directorul într-un alt director.
- **Search in folder** caută doar în fișierele din director. Vezi [[Caută]].
- **Bookmark...** adaugă directorul la marcajele tale.
- **Copy path** copiază locația directorului din directorul seifului sau din rădăcina sistemului.
- **Reveal in Filesystem** afișează directorul în managerul de fișiere și se numește la fel ca pentru fișiere.
- **Rename...** și **Delete** schimbă numele directorului sau șterg directorul.

### Mobil

Apasă și menține apăsat pe un director din Exploratorul de fișiere. Meniul are aceleași elemente ca meniul de directoare de pe desktop, cu excepția **Bookmark...** și **Reveal in Filesystem**.
