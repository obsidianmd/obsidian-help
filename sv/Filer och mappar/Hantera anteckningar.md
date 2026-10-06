---
permalink: manage-notes
publish: true
mobile: false
description: null
---
Du kan hantera filer och mappar på flera sätt, med hjälp av [[Snabbkommandon]], [[Kommandopalett|kommandon]] eller [[Filutforskare]].

## Skapa en ny anteckning

För att skapa en ny fil:

1. Tryck på `Ctrl+N` (eller `Cmd+N` på macOS).
2. Ange anteckningens namn och tryck sedan på `Enter` för att börja redigera anteckningen.

Du kan även skapa anteckningar med [[Filutforskare#Skapa en ny anteckning|Filutforskare]], eller genom att välja **Skapa ny anteckning** från [[Kommandopalett|kommandopaletten]].

> [!hint] Systembegränsningar för tecken
> Obsidian respekterar filnamnsbegränsningarna för det operativsystem du skapar anteckningen på. Om du planerar att [[Synkronisera dina anteckningar mellan enheter|synkronisera dina anteckningar mellan enheter]], se till att dina filnamn är [säkra för andra operativsystem](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Öppna filer utanför ditt valv

På datorn kan du öppna och redigera enskilda Markdown-filer utanför ditt valv. Filer öppnas i ditt nuvarande fönster och förblir på sin ursprungliga plats.

> [!note] Kräver Obsidian 1.14 och det senaste installationsprogrammet
> [[Uppdatera Obsidian#Installationsuppdateringar|Uppdatera ditt installationsprogram]] genom att ladda ner Obsidian från [obsidian.md/download](https://obsidian.md/download) och installera om appen.

För att öppna en Markdown-fil:

1. Öppna [[Kommandopalett|kommandopaletten]].
2. Välj **Öppna fil utanför valvet...**.
3. Välj en Markdown-fil på din dator.

Du kan även använda operativsystemets **Öppna med**-meny och välja **Obsidian**. För att öppna Markdown-filer i Obsidian som standard, ställ in det som standardapp för `.md`-filer.

Bildinbäddningar och länkar till andra lokala filer löses relativt till Markdown-filens mapp. Använd [[Disposition]] för att navigera rubriker och [[Utgående länkar]] för att bläddra bland länkade filer.

### Förhandsgranska filer med Quick Look

På macOS, markera en Markdown-fil i Finder och tryck på `Mellanslag` för att förhandsgranska den med **Quick Look**. Quick Look-förhandsvisningar fungerar även när Obsidian är stängt.

## Byt namn på en anteckning

För att byta namn på en aktiv anteckning:

1. Markera anteckningens namn längst upp i redigeraren (eller tryck på `F2`).
2. Ange det nya namnet och tryck sedan på `Enter`.

När du byter namn på en fil uppdaterar Obsidian automatiskt alla länkar till den filen.

Du kan byta namn på en anteckning eller mapp utan att öppna den, genom att använda [[Filutforskare#Byt namn på en fil eller mapp|Filutforskare]]

## Radera en anteckning

För att radera en anteckning, välj **Fler alternativ → Radera fil** uppe till höger i en aktiv anteckning.

Eller välj **Radera aktuell fil** från [[Kommandopalett|kommandopaletten]].

Du kan även radera en anteckning eller mapp med hjälp av [[Filutforskare#Radera en fil eller mapp|Filutforskare]].

> [!note] Vad händer med filer efter att jag raderar dem?
> För att ändra vad som händer med raderade filer, välj ett av följande alternativ under **[[Inställningar]] → Filer och länkar**:
>
> - **Systempapperskorg**: Som standard hamnar raderade filer i operativsystemets papperskorg. För att återställa en fil, använd din föredragna filhanterare.
> - **Obsidians papperskorg**: Du kan skicka raderade filer till en `.trash`-mapp i ditt valv.
> - **Ta bort permanent**: Filer raderas omedelbart utan möjlighet att återställa dem.
