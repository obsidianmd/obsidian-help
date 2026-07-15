---
permalink: plugins/graph
publish: true
mobile: true
description: Graph view este un modul integrat care îți permite să vizualizezi relațiile dintre notele din seiful tău.
---
Graph view este un [[Core plugins|modul integrat]] care îți permite să vizualizezi relațiile dintre notele din seiful tău.

Pentru a deschide Afișajul grafic, dă clic pe **Open graph view** din [[Ribbon|Panglică]].

- Cercurile reprezintă notele, sau _nodurile_.
- Liniile reprezintă [[Internal links|legăturile interne]] dintre două noduri.

Cu cât mai multe noduri fac referire la un anumit nod, cu atât acesta devine mai mare.

Pentru a interacționa cu notele din grafic:

- Plasează cursorul deasupra fiecărui cerc pentru a evidenția conexiunile acelei note.
- Dă clic pe o notă din grafic pentru a o deschide.
- Dă clic dreapta pe o notă pentru a deschide un meniu contextual cu acțiunile disponibile pentru acea notă.

Pentru a naviga în jurul graficului:

- Mărește și micșorează folosind rotița mouse-ului, sau folosind tastele `+` și `-`.
- Mută graficul trăgându-l cu cursorul mouse-ului, sau folosind săgețile de la tastatură.

Poți ține apăsat Shift în timp ce folosești tastatura pentru a accelera mișcările.

## Setări

Pentru a deschide setările graficului, dă clic pe pictograma roată dințată din colțul din dreapta sus al afișajului grafic.

Dă clic pe **Restore default settings** în colțul din dreapta sus al panoului de setări pentru a reseta orice modificări făcute.

### Filtre

Această secțiune controlează ce noduri sunt afișate în grafic.

- **Search files** îți permite să filtrezi notele pe baza unui termen de căutare. Pentru a afla cum poți scrie termeni de căutare mai avansați, consultă [[Search|Caută]].
- **Tags** comută afișarea etichetelor în grafic.
- **Attachments** comută afișarea atașamentelor în grafic.
- **Existing files only** comută afișarea notelor care există în seiful tău. Deoarece o notă nu trebuie să existe pentru a face legătura către ea, acest lucru te poate ajuta să limitezi graficul la notele pe care le ai efectiv în seiful tău.
- **Orphans** comută afișarea notelor fără nicio legătură.

> [!info] Fișiere excluse
> Fișierele care corespund tiparelor tale de [[Settings#Excluded files|Fișiere excluse]] nu vor apărea în Afișajul grafic.

### Grupuri

Creează grupuri de note pentru a le distinge unele de altele folosind culoarea.

Pentru a crea un grup nou:

1. Dă clic pe **New group**.
2. În câmpul de căutare, scrie un termen de căutare pentru notele pe care vrei să le adaugi în grup.
3. Dă clic pe cercul colorat pentru a da o culoare grupului.

Pentru a afla cum poți scrie termeni de căutare mai avansați, consultă [[Search|Caută]].

### Afișare

Această secțiune controlează cum sunt vizualizate nodurile și legăturile în grafic.

- **Arrows** comută afișarea direcției fiecărei legături.
- **Text fade threshold** controlează transparența textului pentru numele fiecărei note.
- **Node size** controlează mărimea cercului care reprezintă fiecare notă.
- **Link thickness** controlează grosimea liniei pentru fiecare legătură.
- **Animate** pornește o [[#Pornește o animație de tip time-lapse|animație de tip time-lapse]].

### Forțe

Această secțiune controlează forțele care acționează asupra fiecărui nod din grafic.

- **Center force** controlează cât de compact este graficul. O valoare mai mare creează un grafic mai circular.
- **Repel force** controlează cât de mult respinge un nod celelalte noduri.
- **Link force** controlează tracțiunea pe fiecare legătură. Dacă legătura ar fi o bandă de cauciuc, forța legăturii controlează cât de strânsă sau de lejeră este banda.
- **Link distance** controlează lungimea liniilor dintre fiecare notă.

## Pornește o animație de tip time-lapse

Notele și atașamentele apar în ordine cronologică, pe baza momentului creării lor.

![[obsidian-graph-view.png#interface]]

## Afișaj grafic local

Pentru a deschide un afișaj grafic local, folosește comanda **Open local graph**. În timp ce afișajul grafic arată toate notele din seiful tău, un afișaj grafic local îți arată notele conectate la nota activă.

Afișajul grafic local poate folosi toate [[#Setări|setările]] disponibile pentru afișajul grafic global. În plus, poți schimba adâncimea graficului local. Fiecare nivel de adâncime va afișa notele conectate la notele dezvăluite la nivelul anterior. Pentru a controla adâncimea afișajului grafic local, folosește cursorul din partea de sus a panoului de filtre al afișajului grafic local.
