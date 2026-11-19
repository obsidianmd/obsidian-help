---
permalink: plugins/file-explorer
aliases:
  - plugins/stifinder
  - Stifinder
  - Plugins/Stifinder
publish: true
mobile: true
---
Med stifinderen kan du håndtere filer og mapper i din boks. Du kan gennemse noter og andre [[Accepterede filformater|accepterede filformater]] i din boks og udføre mange almindelige filoperationer:

- Oprette, slette og omdøbe filer og mapper
- Flytte filer og mapper med træk og slip med musen
- Benytte [[#Brug popupmenuen|popupmenuen]] for at få adgang til alle tilgængelige operationer

> [!tip]- Træk og slip filer
> Du kan trække en fil fra stifinderen ind i din note for at oprette et link til det, eller trække en fil ind i en mappe for at kopiere den.

## Opret en ny note

For at oprette en ny note i standardplaceringen for nye noter:

1. Vælg **Ny note** ![[lucide-pen-line.svg#icon]] i toppen af stifinderen
2. Skriv navnet på noten og tryk derefter `Enter`

> [!tip]- Ændr standardplacering
> Du kan ændre standardplaceringen for nye noter under **[[Indstillinger|Indstillinger]]** → **[[Indstillinger#Filer og links|Filer og links]]** → **[[Indstillinger#Standardplacering for nye noter|Standardplacering for nye noter]]**.

For at oprette en ny note i en specifik mappe skal du:

1. Højreklikke med musen på en mappe og vælge **Ny note**
2. Skrive navnet på noten og tryk derefter `Enter`

## Opret en ny mappe

Sådan opretter du en ny mappe i roden af din boks:

1. Vælg **Ny mappe** ![[lucide-folder-plus.svg#icon]] i toppen af stifinderen
2. Skriv navnet på mappen og tryk derefter `Enter`

For at oprette en undermappe:

1. Højreklikke med musen på en mappe og vælge **Ny mappe**
2. Skrive navnet på mappen og tryk derefter `Enter`

## Ændr sorteringsrækkefølge

Sådan ændrer du sorteringsrækkefølgen for dine filer:

1. Vælg **Skift sorteringsrækkefølge** ![[lucide-arrow-up-narrow-wide.svg#icon]] i toppen af stifinderen
2. Vælg, hvordan du vil sortere dine filer. Du kan sortere i stigende eller faldende rækkefølge efter filnavn, ændringstidspunkt eller oprettelsestidspunkt.

## Vis automatisk aktiv fil

Når du åbner en note, kan stifinderen automatisk rulle til og fremhæve den pågældende note i mappetræet. Det hjælper dig med at holde styr på, hvor din aktive note er placeret i din boks.

Sådan slår du automatisk visning til/fra:

- Vælg **Vis automatisk nuværende fil** ![[lucide-gallery-vertical.svg#icon]] i toppen af stifinderen.

Når det er aktiveret, vil stifinderen automatisk følge og vise den aktive note.

## Udvid eller skjul alle mapper

Du kan udvide eller skjule alle mapper i stifinderen på én gang.

For at udvide alle mapper:

- Vælg **Udvid alle** ![[lucide-chevrons-up-down.svg#icon]] i toppen af stifinderen.

For at skjule alle mapper:

- Vælg **Skjul alle** ![[lucide-chevrons-down-up.svg#icon]] i toppen af stifinderen.

## Slet en fil eller en mappe

1. Højreklik med musen på en fil eller en mappe og vælg **Slet**
2. Hvis du bliver bedt om at bekræfte sletningen, så vælg **Slet**

Læs mere i [[Administrer noter#Delete a note|Slet en note]].

## Omdøb en fil eller en mappe

1. Højreklik med musen på en fil eller en mappe og vælg **Omdøb**
2. Skriv det nye navn og tryk derefter `Enter`

Læs mere i [[Administrer noter#Rename a note|Omdøb en note]].

## Flyt en fil eller en mappe

For at flytte en fil eller en mappe kan du benytte træk og slip eller popupmenuen med musen.

**Træk og slip:**

- Træk en fil eller en mappe til den mappe, som du ønsker den flyttet til
- Du kan vælge flere filer og mapper med `Alt-Klik` (Windows/Linux) eller `Opt-Klik` (macOS) og trække dem til en anden mappe. Hvis de alle valgte er på række kan du benytte `Shift-Klik` for at vælge dem

**Popupmenuen:**

1. Højreklik på en fil og vælg **Flyt fil til...**
2. Søg efter navnet på den mappe, som du vil flytte filen til og vælg den fra listen

## Brug popupmenuen

Popupmenuen viser de handlinger, der er tilgængelige for en fil eller mappe. Mange af filhandlingerne findes også i [[Flere muligheder-menu|menuen Flere muligheder]].

### Desktop

Højreklik på en fil eller mappe i stifinderen.

**Filer**

- **Åbn i ny fane** og **Åbn til højre** åbner filen i en ny fane eller i et panel til højre.
- **Åbn i nyt vindue** åbner filen i sit eget vindue. Se [[Pop ud-vinduer|Pop-ud vinduer]].
- **Dupliker** opretter en kopi af filen.
- **Flyt fil til...** flytter filen til en anden mappe. Se [[#Flyt en fil eller en mappe]].
- **Bogmærk...** tilføjer filen til dine bogmærker. Kræver Bogmærker-pluginet. Se [[Bogmærker#Add a bookmark|Bogmærker]].
- **Flet hele filen med...** kombinerer noten med en anden. Kræver Notekomponist-pluginet. Se [[Notekomponist#Merge notes|Notekomponist]].
- **Udgiv nuværende fil** udgiver noten til din side. Kræver Obsidian Publish. Se [[Introduktion til Obsidian Publish|Publish]].
- **Kopiér sti** kopierer filens placering som en Obsidian-URL, fra boksmappen eller fra systemets rodmappe.
- **Åbn versionshistorik** viser tidligere versioner af filen. Kræver et aktivt Obsidian Sync-abonnement. Se [[Versionshistorik|Versionshistorik]].
- **Åbn i standardapp** åbner filen i den app, din computer bruger til den pågældende filtype.
- **Vis i filsystemet** viser filen i din filhåndtering. På macOS hedder punktet **Vis i Finder**. På Windows og Linux hedder det **Vis i systemets stifinder**.
- **Omdøb...** ændrer filnavnet. Se [[#Omdøb en fil eller en mappe]].
- **Slet** sletter filen. Se [[#Slet en fil eller en mappe]].

**Mapper**

- **Ny note** og **Ny mappe** opretter en note eller en mappe inde i mappen. Se [[#Opret en ny note]] og [[#Opret en ny mappe]].
- **Nyt lærred** opretter et lærred i mappen. Se [[Canvas|Lærred]].
- **Ny base** opretter en base i mappen. Se [[Introduktion til Baser|Introduktion til Baser]].
- **Dupliker** opretter en kopi af mappen.
- **Flyt mappe til...** flytter mappen til en anden mappe.
- **Søg i mappe** søger kun i filerne i mappen. Se [[Søg|Søg]].
- **Bogmærk...** tilføjer mappen til dine bogmærker.
- **Kopiér sti** kopierer mappens placering fra boksmappen eller fra systemets rodmappe.
- **Vis i filsystemet** viser mappen i din filhåndtering og hedder det samme som for filer.
- **Omdøb...** og **Slet** ændrer mappenavnet eller sletter mappen.

### Mobil

Tryk og hold på en mappe i stifinderen. Menuen har de samme punkter som desktop-mappemenuen, undtagen **Bogmærk...** og **Vis i filsystemet**.
