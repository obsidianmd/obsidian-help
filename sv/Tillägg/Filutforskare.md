---
permalink: plugins/file-explorer
publish: true
mobile: true
description: Filutforskaren är ett kärntillägg som låter dig hantera filer och mappar i ditt valv.
---
Filutforskare är ett [[Kärntillägg|kärntillägg]] som låter dig hantera filer och mappar i ditt valv. Du kan bläddra bland anteckningar och andra [[Accepterade filformat]] i ditt valv och utföra många vanliga filoperationer:

- Skapa, radera och byta namn på filer och mappar.
- Flytta filer och mappar med dra och släpp.
- Använd [[#Använda snabbmenyn|snabbmenyn]] för att komma åt alla tillgängliga operationer.

> [!tip]- Dra och släpp filer
> Du kan dra en fil från filutforskaren till din anteckning för att skapa en länk till den, eller dra en fil till en mapp i filutforskaren för att kopiera den.

## Skapa en ny anteckning

För att skapa en ny anteckning på standardplatsen för nya anteckningar:

1. Välj **Ny anteckning** ![[lucide-pen-line.svg#icon]] högst upp i filutforskaren.
2. Skriv namnet på anteckningen och tryck sedan på `Enter`.

> [!tip]- Ändra standardplats
> Du kan ändra standardplatsen för nya anteckningar under **[[Inställningar]] → [[Inställningar#Filer och länkar|Filer och länkar]] → [[Inställningar#Stället där nya anteckningar hamnar|Stället där nya anteckningar hamnar]]**.

För att skapa en ny anteckning i en specifik mapp:

1. Högerklicka på mappen och välj sedan **Ny anteckning**.
2. Skriv namnet på anteckningen och tryck sedan på `Enter`.

## Skapa en ny mapp

För att skapa en ny mapp i roten av ditt valv:

1. Välj **Ny mapp** ![[lucide-folder-plus.svg#icon]] högst upp i filutforskaren.
2. Skriv namnet på mappen och tryck sedan på `Enter`.

För att skapa en undermapp:

1. Högerklicka på mappen du vill skapa undermappen i och välj sedan **Ny mapp**.
2. Skriv namnet på mappen och tryck sedan på `Enter`.

## Ändra sorteringsordning

För att ändra sorteringsordningen för dina filer:

1.  Välj **Ändra sorteringsordning** ![[lucide-arrow-up-narrow-wide.svg#icon]] högst upp i filutforskaren.
2. Välj hur du vill sortera dina filer. Du kan sortera i stigande eller fallande ordning efter filnamn, ändrad tid eller skapad tid.

## Visa aktiv fil automatiskt

När du öppnar en anteckning kan filutforskaren automatiskt rulla till och markera den anteckningen i mappträdet. Detta hjälper dig att hålla koll på var din aktiva anteckning finns i ditt valv.

För att växla automatisk visning:

- Välj **Visa aktiv fil automatiskt** ![[lucide-gallery-vertical.svg#icon]] högst upp i filutforskaren.

När funktionen är aktiverad kommer filutforskaren automatiskt att följa och visa den aktiva anteckningen.

## Expandera eller vik in alla mappar

Du kan expandera eller vika in alla mappar i filutforskaren på en gång.

För att expandera alla mappar:

- Välj **Expandera alla** ![[lucide-chevrons-up-down.svg#icon]] högst upp i filutforskaren.

För att vika in alla mappar:

- Välj **Kollapsa alla** ![[lucide-chevrons-down-up.svg#icon]] högst upp i filutforskaren.

## Radera en fil eller mapp

1. Högerklicka på filen du vill radera och välj sedan **Radera**.
2. Om du uppmanas att bekräfta att du vill radera filen, välj **Radera**.

För mer information, se [[Hantera anteckningar#Radera en anteckning|Radera en anteckning]].

## Byta namn på en fil eller mapp

1. Högerklicka på filen du vill byta namn på och välj sedan **Byt namn**.
2. Skriv det nya namnet och tryck sedan på `Enter`.

För mer information, se [[Hantera anteckningar#Byta namn på en anteckning|Byta namn på en anteckning]].

## Flytta en fil eller mapp

För att flytta en fil eller mapp kan du använda dra och släpp eller snabbmenyn.

**Dra och släpp:**

- Dra en fil eller mapp till mappen du vill flytta den till.
- Med `Alt-klick` (Windows/Linux) eller `Opt-klick` (macOS) kan du välja flera enskilda filer och dra dem till en annan mapp. Om de är i rad kan du använda `Shift-klick` för detta.

**Snabbmeny:**

1. Högerklicka på en fil och välj sedan **Flytta fil till...**.
2. Sök efter namnet på mappen du vill flytta filen till och välj den sedan från listan.

## Använda snabbmenyn

Snabbmenyn listar de åtgärder som är tillgängliga för en fil eller mapp. Många av filobjekten visas också i [[Fler alternativ-menyn]].

### Skrivbord

Högerklicka på en fil eller mapp i filutforskaren.

**Filer**

- **Öppna i ny flik** och **Öppna till höger** öppnar filen i en ny flik eller i en panel till höger.
- **Öppna i nytt fönster** öppnar filen i ett eget fönster. Se [[Popupfönster]].
- **Duplicera** skapar en kopia av filen.
- **Flytta fil till...** flyttar filen till en annan mapp. Se [[#Flytta en fil eller mapp]].
- **Bokmärk...** lägger till filen i dina bokmärken. Kräver tillägget Bokmärken. Se [[Bokmärken#Lägg till ett bokmärke]].
- **Slå samman hela filen med...** kombinerar anteckningen med en annan. Kräver tillägget Anteckningshantering. Se [[Anteckningshantering#Slå samman anteckningar]].
- **Publicera aktuell fil** publicerar anteckningen till din webbplats. Kräver Obsidian Publish. Se [[Introduktion till Obsidian Publish|Publish]].
- **Kopiera sökväg** kopierar filens plats som en Obsidian-URL, från valvmappen eller från systemroten.
- **Öppna versionshistorik** visar tidigare versioner av filen. Kräver en aktiv Obsidian Sync-prenumeration. Se [[Versionshistorik]].
- **Öppna i standardapp** öppnar filen i den app din dator använder för den filtypen.
- **Visa i filsystemet** visar filen i din filhanterare. På macOS står det **Visa i Finder**. På Windows och Linux står det **Visa i mapp**.
- **Byt namn...** ändrar filnamnet. Se [[#Byta namn på en fil eller mapp]].
- **Radera** raderar filen. Se [[#Radera en fil eller mapp]].

**Mappar**

- **Ny anteckning** och **Ny mapp** skapar en anteckning eller en mapp inuti mappen. Se [[#Skapa en ny anteckning]] och [[#Skapa en ny mapp]].
- **Ny canvas** skapar en canvas i mappen. Se [[Canvas]].
- **Ny base** skapar en base i mappen. Se [[Introduktion till Bases]].
- **Duplicera** skapar en kopia av mappen.
- **Flytta mapp till...** flyttar mappen till en annan mapp.
- **Sök i mapp** söker bara bland filerna i mappen. Se [[Sök]].
- **Bokmärk...** lägger till mappen i dina bokmärken.
- **Kopiera sökväg** kopierar mappens plats från valvmappen eller från systemroten.
- **Visa i filsystemet** visar mappen i din filhanterare, och har samma text som för filer.
- **Byt namn...** och **Radera** ändrar mappnamnet eller raderar mappen.

### Mobil

Tryck och håll på en mapp i filutforskaren. Menyn har samma objekt som skrivbordsmenyn för mappar, förutom **Bokmärk...** och **Visa i filsystemet**.
