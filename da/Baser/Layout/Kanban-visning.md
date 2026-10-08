---
permalink: bases/views/kanban
---
Kanban er en type [[Visninger|visning]], du kan bruge i [[Introduktion til Baser|Baser]].

Vælg ![[lucide-kanban-square.svg#icon]] **Kanban** fra visningsmenuen for at vise filer som kort organiseret i kolonner. Hver kolonne repræsenterer en værdi af den egenskab, der bruges til at gruppere resultater.


> [!note] Kræver Obsidian 1.14+
> Kanban-visninger er tilgængelige i Obsidian 1.14 og senere.


## Gruppér kort i kolonner

En Kanban-visning kræver en egenskab til at gruppere resultater efter.

1. Vælg **Gruppe** i værktøjslinjen. På telefoner vælg **Visning → Gruppe**.
2. Under **Gruppér efter** vælg en egenskab.

Filer uden en værdi for den valgte egenskab vises i kolonnen **Ingen**.

> [!info] 
> Hvis du grupperer efter en formel eller en filegenskab ud over `file.folder`, kan du ikke flytte kort eller kolonner eller oprette noter fra kolonnerne. Du kan stadig [[Visninger#Omarranger, skjul og tilføj grupper|administrere grupperækkefølge og synlighed]] i menuen **Gruppe**.

## Arbejd med kort og kolonner

- Træk et kort til en anden kolonne for at opdatere den grupperede egenskab i den pågældende note. Kun Markdown-noter kan flyttes mellem kolonner, undtagen ved gruppering efter `file.folder`, hvor flytning af et kort flytter filen til den pågældende mappe.
- Vælg plus-ikonet i en kolonneoverskrift eller ![[lucide-plus.svg#icon]] **Ny** i bunden af en kolonne for at oprette en note med den pågældende kolonnes værdi.
- Træk en kolonneoverskrift for at ændre kolonnerækkefølgen. For at gendanne automatisk rækkefølge skal du åbne **Gruppe** og vælge en automatisk sorteringsrækkefølge i stedet for **Manuel**.
- Brug **Gruppe** til at [[Visninger#Omarranger, skjul og tilføj grupper|omarrangere, skjule eller tilføje kolonner]].
- Brug menuen ![[lucide-list.svg#icon]] **Egenskaber** til at vælge, hvilke egenskaber der vises på hvert kort. Den første egenskab vises som kortets titel.

## Indstillinger

Kanban-visningsindstillinger kan konfigureres i [[Visninger#Visningsindstillinger|Visningsindstillinger]].

- Skjul tomme kolonner
- Kolonnebredde
- Billedegenskab
- Billedtilpasning
- Billedformat

### Skjul tomme kolonner

Skjuler kolonner, der ikke indeholder nogen kort.

### Kolonnebredde

Definerer bredden af hver kolonne og dens kort.

### Billedegenskab

Kanban-kort understøtter et valgfrit forsidebillede, der vises øverst på kortet. De understøttede egenskabsværdier er de samme som for [[Galleri#Billedegenskab|billedegenskaben i Galleri-visning]].

### Billedtilpasning

Hvis du har konfigureret en billedegenskab, bestemmer denne indstilling, hvordan billedet vises på kortet.

- **Udfyld:** Billedet fylder kortets indholdsområde. Hvis det ikke passer, beskæres billedet.
- **Tilpas:** Billedet skaleres, indtil det passer inden for kortets indholdsområde. Billedet beskæres ikke.

### Billedformat

Højden af forsidebilledet bestemmes af dets billedformat. Justér denne indstilling for at gøre billedet kortere eller højere.
