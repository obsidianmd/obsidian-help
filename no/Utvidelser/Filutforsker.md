---
permalink: plugins/file-explorer
publish: true
mobile: true
description: Filutforsker er et innebygd programtillegg som lar deg administrere filer og mapper i hvelvet ditt.
---
Filutforsker er en [[Kjerneutvidelser|kjerneutvidelse]] som lar deg administrere filer og mapper i hvelvet ditt. Du kan bla gjennom notater og andre [[Aksepterte filformater]] i hvelvet ditt og utføre mange vanlige filoperasjoner:

- Opprette, slette og gi nytt navn til filer og mapper.
- Flytte filer og mapper med dra og slipp.
- Bruke [[#Bruk kontekstmenyen|kontekstmenyen]] for å få tilgang til alle tilgjengelige operasjoner.

> [!tip]- Dra og slipp filer
> Du kan dra en fil fra filutforskeren inn i notatet ditt for å opprette en lenke til den, eller dra en fil inn i en mappe i filutforskeren for å kopiere den.

## Opprett et nytt notat

For å opprette et nytt notat i standardplasseringen for nye notater:

1. Velg **Nytt notat** ![[lucide-pen-line.svg#icon]] øverst i filutforskeren.
2. Skriv inn navnet på notatet, og trykk deretter `Enter`.

> [!tip]- Endre standardplassering
> Du kan endre standardplasseringen for nye notater under **[[Innstillinger]] → [[Innstillinger#Filer og lenker|Files & Links]] → [[Innstillinger#Standard plassering av nytt notat|Standard plassering av nytt notat]]**.

For å opprette et nytt notat i en bestemt mappe:

1. Høyreklikk på mappen og velg deretter **Nytt notat**.
2. Skriv inn navnet på notatet, og trykk deretter `Enter`.

## Opprett en ny mappe

For å opprette en ny mappe i roten av hvelvet ditt:

1. Velg **Ny mappe** ![[lucide-folder-plus.svg#icon]] øverst i filutforskeren.
2. Skriv inn navnet på mappen, og trykk deretter `Enter`.

For å opprette en undermappe:

1. Høyreklikk på mappen du vil opprette undermappen i, og velg deretter **Ny mappe**.
2. Skriv inn navnet på mappen, og trykk deretter `Enter`.

## Endre sorteringsrekkefølge

For å endre sorteringsrekkefølgen på filene dine:

1.  Velg **Endre sorteringsrekkefølge** ![[lucide-arrow-up-narrow-wide.svg#icon]] øverst i filutforskeren.
2. Velg hvordan du vil sortere filene dine. Du kan sortere i stigende eller synkende rekkefølge etter filnavn, endringstid eller opprettelsestid.

## Automatisk avdekking av aktiv fil

Når du åpner et notat, kan filutforskeren automatisk rulle til og utheve det notatet i mappetreet. Dette hjelper deg med å holde oversikt over hvor det aktive notatet ditt befinner seg i hvelvet.

For å veksle automatisk avdekking:

- Velg **Automatisk avdekk aktiv fil** ![[lucide-gallery-vertical.svg#icon]] øverst i filutforskeren.

Når dette er aktivert, vil filutforskeren automatisk følge og vise det aktive notatet.

## Utvid eller skjul alle mapper

Du kan utvide eller skjule alle mapper i filutforskeren på én gang.

For å utvide alle mapper:

- Velg **Utvid alle** ![[lucide-chevrons-up-down.svg#icon]] øverst i filutforskeren.

For å skjule alle mapper:

- Velg **Skjul alle** ![[lucide-chevrons-down-up.svg#icon]] øverst i filutforskeren.

## Slett en fil eller mappe

1. Høyreklikk på filen du vil slette, og velg deretter **Slett**.
2. Hvis du blir bedt om å bekrefte at du vil slette filen, velg **Slett**.

For mer informasjon, se [[Administrer notater#Slett et notat|Slett et notat]].

## Gi nytt navn til en fil eller mappe

1. Høyreklikk på filen du vil gi nytt navn, og velg deretter **Gi nytt navn**.
2. Skriv inn det nye navnet, og trykk deretter `Enter`.

For mer informasjon, se [[Administrer notater#Gi nytt navn til et notat|Gi nytt navn til et notat]].

## Flytt en fil eller mappe

For å flytte en fil eller mappe kan du bruke dra og slipp eller kontekstmenyen.

**Dra og slipp:**

- Dra en fil eller mappe til mappen du vil flytte den til.
- Med `Alt-klikk` (Windows/Linux) eller `Opt-klikk` (macOS) kan du velge flere individuelle filer og dra dem til en annen mappe. Hvis de er på rad, kan du bruke `Shift-klikk` for dette.

**Kontekstmeny:**

1. Høyreklikk på en fil, og velg deretter **Flytt fil til...**.
2. Søk etter navnet på mappen du vil flytte filen til, og velg den fra listen.

## Bruk kontekstmenyen

Kontekstmenyen viser handlingene som er tilgjengelige for en fil eller mappe. Mange av filelementene vises også i [[Flere valg-menyen]].

### Skrivebord

Høyreklikk på en fil eller mappe i filutforskeren.

**Filer**

- **Åpne i ny fane** og **Åpne til høyre** åpner filen i en ny fane eller i et panel til høyre.
- **Åpne i nytt vindu** åpner filen i sitt eget vindu. Se [[Pop-ut-vinduer]].
- **Dupliser** lager en kopi av filen.
- **Flytt fil til...** flytter filen til en annen mappe. Se [[#Flytt en fil eller mappe]].
- **Bokmerke...** legger filen til i bokmerkene dine. Den krever Bokmerker-tillegget. Se [[Bokmerker#Legg til et bokmerke]].
- **Slå sammen hele filen med...** kombinerer notatet med et annet. Den krever Notatkomponist-tillegget. Se [[Notatkomponist#Slå sammen notater]].
- **Publiser gjeldende fil** publiserer notatet til nettstedet ditt. Den krever Obsidian Publish. Se [[Introduksjon til Obsidian Publish|Publish]].
- **Kopier sti** kopierer filens plassering som en Obsidian-URL, fra hvelvmappen eller fra systemroten.
- **Åpne versjonshistorikk** viser tidligere versjoner av filen. Den krever et aktivt Obsidian Sync-abonnement. Se [[Versjonshistorikk]].
- **Åpne i standardapp** åpner filen i appen datamaskinen bruker for den filtypen.
- **Vis i filsystemet** viser filen i filbehandleren din. På macOS står det **Vis i Finder**. På Windows og Linux står det **Vis i systemutforsker**.
- **Gi nytt navn...** endrer filnavnet. Se [[#Gi nytt navn til en fil eller mappe]].
- **Slett** sletter filen. Se [[#Slett en fil eller mappe]].

**Mapper**

- **Nytt notat** og **Ny mappe** oppretter et notat eller en mappe inne i mappen. Se [[#Opprett et nytt notat]] og [[#Opprett en ny mappe]].
- **Ny Canvas** oppretter en canvas i mappen. Se [[Canvas]].
- **Ny base** oppretter en base i mappen. Se [[Introduksjon til Bases]].
- **Dupliser** lager en kopi av mappen.
- **Flytt mappe til...** flytter mappen inn i en annen mappe.
- **Søk i mappe** søker bare i filene i mappen. Se [[Søk]].
- **Bokmerke...** legger mappen til i bokmerkene dine.
- **Kopier sti** kopierer mappens plassering fra hvelvmappen eller fra systemroten.
- **Vis i filsystemet** viser mappen i filbehandleren din, og har samme tekst som for filer.
- **Gi nytt navn...** og **Slett** endrer mappenavnet eller sletter mappen.

### Mobil

Trykk og hold på en mappe i filutforskeren. Menyen har de samme elementene som skrivebordets mappemeny, bortsett fra **Bokmerke...** og **Vis i filsystemet**.
