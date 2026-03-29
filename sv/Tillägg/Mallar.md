---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Mallar är ett kärntillägg som låter dig infoga fördefinierade textstycken i din aktiva anteckning.
---
Mallar är ett [[Kärntillägg|kärntillägg]] som låter dig infoga fördefinierade textstycken i din aktiva anteckning.

## Ställ in din mallmapp

1. I det nedre vänstra hörnet, klicka på **[[Inställningar]]** ![[lucide-cog.svg#icon]].
2. Under **Kärntillägg → Mallar → Mallmappens plats**, ange mappen som innehåller dina mallar.

## Mallvariabler

Du kan lägga till dynamisk information i dina mallar med hjälp av _mallvariabler_. När du infogar en mall som innehåller en mallvariabel ersätter Mallar den med dess motsvarande värde.

| Variabel    | Beskrivning                                          |
|-------------|------------------------------------------------------|
| `{{title}}` | Titel på den aktiva anteckningen.                    |
| `{{date}}`  | Dagens datum. **Standardformat:** `YYYY-MM-DD`.      |
| `{{time}}`  | Aktuell tid. **Standardformat:** `HH:mm`.            |

Både `{{date}}` och `{{time}}` låter dig ändra standardformatet med en _formatsträng_.

För att ställa in en formatsträng, lägg till ett kolon (`:`) följt av en sträng med [Moment.js-formattoken](https://momentjs.com/docs/#/displaying/format/), till exempel `{{date:YYYY-MM-DD}}`.

Du kan använda `{{date}}` och `{{time}}` omväxlande med formatsträngar, till exempel `{{time:YYYY-MM-DD}}`.

Du kan ändra standardformaten för datum och tid under **[[Inställningar]] → Mallar → Datumformat** och **[[Inställningar]] → Mallar → Tidsformat**. ^template-settings-date-time-formatting

> [!tip] Tips
> Du kan också använda mallvariablerna `{{date}}` och `{{time}}` i tilläggen [[Dagliga anteckningar]] och [[Unik anteckningsskapare]].

## Skapa en mall

I [[#Ställ in din mallmapp|mallmappen]], [[Hantera anteckningar#Skapa en ny anteckning|skapa en anteckning]] som innehåller den text du vill ska visas när du använder mallen. Du kan använda [[#Mallvariabler|mallvariabler]] för dynamisk text som det aktuella datumet.

Här är till exempel en mall för studieanteckningar:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Nyckelbegrepp


## Viktiga detaljer


## Exempel


## Frågor
- 

## Sammanfattning


## Relaterade ämnen
- [[]]
```

## Infoga en mall i den aktiva anteckningen

**Viktigt:** För att infoga en mall måste du först [[#Ställ in din mallmapp]].

1. I ribbonen, klicka på **Infoga mall**.
2. Välj mallen som ska infogas vid markörens position i den aktiva anteckningen.

För att infoga en mall med [[Kommandopalett|kommandopaletten]] eller [[Snabbkommandon#Ställ in ett snabbkommando|en anpassad tangentbordsgenväg]], använd kommandot `Mallar: Infoga mall`.

Mallens innehåll infogas vid din aktuella markörposition. Om din markör inte är i anteckningens brödtext infogas innehållet vid din senaste markörposition.

### Mallegenskaper

![[Egenskaper#^templates-properties]]

## Infoga aktuellt datum och tid i den aktiva anteckningen

Använd kommandona `Mallar: Infoga aktuellt datum` och `Mallar: Infoga aktuell tid` för att infoga aktuellt datum och tid vid din aktuella markörposition. Precis som kommandot `Infoga mall` kan detta göras med [[Kommandopalett|kommandopaletten]] eller [[Snabbkommandon#Ställ in ett snabbkommando|en anpassad tangentbordsgenväg]].

Det infogade datumet och tiden använder den [[#^template-settings-date-time-formatting|formatering som ställts in i tilläggsinställningarna]].
