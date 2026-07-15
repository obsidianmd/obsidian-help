---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Află cum să treci de la soluția ta actuală de sincronizare la Obsidian Sync.
---
Află cum să treci de la soluția ta actuală de sincronizare la Obsidian Sync.

> [!warning] Evită să folosești mai multe soluții pentru a sincroniza aceleași fișiere
> [[Frequently asked questions#Pot folosi un serviciu de sincronizare terț împreună cu Obsidian Sync?|Nu recomandăm]] utilizarea Obsidian Sync împreună cu servicii de stocare în cloud (de ex. iCloud, Dropbox, OneDrive, Google Drive), deoarece acest lucru poate cauza conflicte. Totuși, serviciile de stocare în cloud pot juca un rol în strategia ta de [[Back up your Obsidian files|backup]].

## Mută-ți seiful din serviciul tău de sincronizare terț sau din stocarea cloud

Dacă seiful tău este stocat în oricare dintre următoarele locații, este probabil să fie sincronizat de un serviciu terț:

- **Windows**: `C:\Users\Username\Desktop` sau `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` sau `/users/username/Documents`
- **iOS**: Directorul **iCloud** din aplicația Files
- **Altele**: Orice director aflat sub un serviciu de sincronizare, precum `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault`, etc.

Deși Android și Linux tind să aibă mai puține probleme de acest fel, tot merită să verifici locația seifului tău pe aceste dispozitive.

> [!tip] Dacă seiful tău local curent este conectat la un seif la distanță, Obsidian va încerca să detecteze dacă seiful se află într-un serviciu de sincronizare. Dacă este cazul, vei vedea un mesaj în partea de sus a setărilor Obsidian Sync.

Pentru a evita conflictele cu serviciile de sincronizare, recomandăm stocarea seifurilor tale Obsidian în următoarele locații:

- **Windows**: Locații recomandate, în ordine:
    1. `D:\` sau orice alt disc care nu este C și nu este de rețea, de pe dispozitivul tău
    2. `C:\Vaults` (dacă ai permisiuni să folosești discul C:\)
    3. `C:\Users\Username\Vaults` (dacă trebuie să-ți păstrezi seiful în C:\Users\Username, asigură-te că OneDrive este setat să nu elimine fișierele. OneDrive este, în general, mai puțin agresiv în afara directoarelor `Desktop` și `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Nicio recomandare specifică, din cauza varietății sistemelor de fișiere. Asigură-te doar că Obsidian are acces complet de citire/scriere și că niciun serviciu de sincronizare nu gestionează directorul.
- **iOS/iPadOS**: Stochează seiful **On My iPhone** sau **On the Device**.
- **Android**: Folosește directorul `Documents/` de pe dispozitivul tău.

## Mută-ți seiful folosind Obsidian pe desktop

![[Manage vaults#Move vault to a different folder]]

## Mută-ți seiful pe mobil

Pe dispozitivele mobile, Obsidian rulează într-un mediu izolat (sandboxed), ceea ce înseamnă că nu poți muta seifuri în cadrul aplicației așa cum poți face pe desktop.

### Android

Sistemele de fișiere Android variază foarte mult în funcție de dispozitiv, dar, în general, urmează aceiași pași pe care i-ai urma pentru a-ți muta manual seiful, asigurându-te că este eliminat din orice serviciu de sincronizare de pe dispozitivul tău.

### iOS și iPadOS

Pentru a muta un seif iCloud existent pe dispozitivul tău, urmează acești pași:

> [!note] Dacă ai deja datele pe un alt dispozitiv și ai configurat Obsidian Sync, este recomandat să [[Set up Obsidian Sync#Sincronizează un seif la distanță pe alt dispozitiv|configurezi un nou seif local din Sync]] în schimb.

- [[Back up your Obsidian files|Fă o copie de rezervă]] a seifului tău.
- Creează un seif nou pe dispozitivul tău, asigurându-te că **Save in iCloud Drive** este dezactivat.
- Forțează închiderea aplicației Obsidian pe toate dispozitivele pentru a pune Sync în pauză.
- Deschide aplicația **Files** de pe dispozitivul tău iOS/iPadOS.
- Apasă lung pe directorul seifului din **iCloud Drive → Obsidian**, apoi selectează **Move**.
- Mută seiful în **On My iPhone/Device → Obsidian** și confirmă că este acum vizibil.
- Apasă **Copy**.
- Revino la **iCloud Drive → Obsidian** și șterge vechiul director al seifului.

Odată ce redeschizi Obsidian, seiful ar trebui să afișeze o pictogramă de seif în loc de o pictogramă de cloud, confirmând că nu se mai află în iCloud Drive. Obsidian Sync nu va mai afișa nici mesajul de avertizare în setările sale.

## Pașii următori

- Vrei să începi cu Obsidian Sync? [[Set up Obsidian Sync]]
- Ai încă nevoie de ajutor? Consultă [[Troubleshoot Obsidian Sync]]
