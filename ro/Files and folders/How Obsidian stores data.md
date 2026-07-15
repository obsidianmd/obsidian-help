---
permalink: data-storage
publish: true
mobile: true
description: Această pagină explică modul în care Obsidian stochează datele pe dispozitivul dumneavoastră.
---

Obsidian stochează notele dumneavoastră sub formă de fișiere text simplu [[Basic formatting syntax|formatate în Markdown]] într-un _seif_. Un seif este un director din sistemul dumneavoastră de fișiere local, inclusiv orice subdirectoare.

Deoarece notele sunt fișiere text simplu, puteți folosi alte editoare de text și manageri de fișiere pentru a edita și gestiona notele. Obsidian actualizează automat seiful dumneavoastră pentru a ține pasul cu orice modificări externe.

Puteți crea un seif oriunde vă permite sistemul de operare. Obsidian se sincronizează cu [[Introduction to Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git și multe alte servicii terțe.

Puteți deschide mai multe directoare ca seifuri individuale, de exemplu pentru a separa notele pentru muncă și pentru școală.

> [!warning] Seifuri în interiorul seifurilor
> Deoarece [[Internal links|legăturile interne]] sunt locale unui seif, vă recomandăm să nu creați seifuri în interiorul altor seifuri. Este posibil ca legăturile să nu fie actualizate corect.

## Setările seifului

Obsidian creează un [[configuration folder|director de configurare]] `.obsidian` în directorul rădăcină al seifului, care conține preferințele specifice acelui seif, precum [[hotkeys|combinațiile de taste]], [[themes|temele]] și [[community plugins|modulele comunitare]].

Implicit, majoritatea sistemelor de operare ascund directoarele care încep cu un punct (`.`), așa că este posibil să trebuiască să actualizați setările managerului de fișiere pentru a-l vedea.

- **macOS**: În Finder, apăsați `Cmd+Shift+.` (punct) pentru a afișa fișierele ascunse.
- **Windows**: [Afișați fișierele ascunse](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** În majoritatea managerilor de fișiere, apăsați `Ctrl + h` pentru a afișa fișierele ascunse.

> [!tip] Adăugarea `.obsidian` în Git
> Fișierele `.obsidian/workspace.json` și `.obsidian/workspaces.json` stochează configurația curentă a spațiului de lucru și se actualizează de fiecare dată când deschideți un fișier nou. Dacă folosiți [Git](https://git-scm.com) pentru a gestiona seiful dumneavoastră, ați putea dori să adăugați aceste fișiere în `.gitignore`.

## Setări globale

Obsidian stochează setările globale într-un director de sistem. Locația directorului de sistem depinde de sistemul de operare pe care îl folosiți.

- **macOS**: `/Users/yourusername/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` sau `~/.config/obsidian/`

> [!warning] Nu creați un seif în directorul de sistem. Acest lucru poate duce la coruperea sau pierderea datelor.

## IndexedDB

IndexedDB este o bază de date de nivel scăzut, de tip client, pe care Obsidian o folosește pentru stocarea din spate (backend). Aceasta ajută la menținerea stării conexiunilor [[Introduction to Obsidian Sync|Obsidian Sync]] și păstrează [[#Cache-ul de metadate|cache-ul de metadate]] atunci când aplicația este închisă.

> [!warning] Dacă [modul Lockdown](<https://support.apple.com/en-us/105120>) al Apple este activat și Obsidian nu este exclus, aceste fișiere de bază de date nu se vor salva, ceea ce va necesita reindexare de fiecare dată când aplicația pornește.

### Cache-ul de metadate

Pentru a oferi o experiență rapidă în timpul utilizării aplicației, Obsidian menține o evidență locală a metadatelor despre fișierele din seiful dumneavoastră, numită **cache-ul de metadate**. Aceste metadate alimentează multe funcții din aplicație, de la afișajul grafic până la sumar.

Obsidian menține acest cache sincronizat cu fișierele din seiful dumneavoastră, dar este posibil ca datele să se desincronizeze de fișierele subiacente. În cazul în care acest lucru se întâmplă în seiful dumneavoastră, puteți reconstrui cache-ul de metadate din setările aplicației, în secțiunea *Fișiere și legături*.

