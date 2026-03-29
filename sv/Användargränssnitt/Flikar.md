---
permalink: tabs
publish: true
mobile: true
description: 'Lär dig hur du öppnar, organiserar och hanterar flikar i Obsidian, inklusive att fästa, stapla och länka vyer.'
---
Flikar i Obsidian fungerar ungefär som flikar i andra appar, såsom webbläsare.

Du kan öppna så många flikar du vill i Obsidian. Du kan också ordna flikar för att skapa anpassade layouter som kvarstår till nästa gång du öppnar appen.

> [!note] Mobila flikar
> På mobil kan du hantera öppna flikar från flikräknaren i [[Mobilapp#Navigeringsfält|Navigeringsfältet]].

## Öppna en ny flik

Längst upp i programfönstret, bredvid den sista fliken till höger, välj **Ny flik** ![[lucide-plus.svg#icon]]. Eller använd en tangentbordsgenväg:

- **Windows och Linux:** `Ctrl+t`
- **macOS:** `Cmd+t`

## Öppna en länk

Välj en länk i Obsidian för att öppna den i den aktiva fliken.

För att öppna en länk i en ny flik, tryck `Ctrl` (eller `Cmd` på macOS) och välj länken.

Följande är alla modifieringstangenter du kan använda för att öppna länkar på olika sätt:

|Åtgärd|MacOS|Windows/Linux|
|---|---|---|
|**Navigera**|_Ingen_|_Ingen_|
|**Ny flik**|`⌘` (+ `Shift` i källkodsläge)|`Ctrl` (+ `Shift` i källkodsläge)|
|**Ny flikgrupp**|`⌘` `⌥`| `Ctrl` `Alt`|
|**Nytt fönster**|`⌘` `⌥` `Shift`|`Ctrl` `Alt` `Shift`|

## Organisera dina flikar och fönster

Varje flik tillhör en _flikgrupp_. Du kan dra och släppa flikar för att ordna om dem inom en flikgrupp, flytta dem till en annan flikgrupp eller skapa en ny flikgrupp. På dator kan du dra flikar ut ur sitt fönster för att öppna dem i ett separat [[Fristående fönster|fristående fönster]].

Flikar i sidofält visar bara ikonen. Håll muspekaren över ikonen för att visa en tooltip med flikens titel.

### Ordna flikar

För att ändra ordningen på dina flikar, dra fliken längs flikarna i flikgruppen.

När du drar en flik markeras _släppzoner_ — områden dit du kan flytta fliken. Släppzonen avgör var fliken infogas. Vissa flikar kan bara vara i ett av sidofälten.

### Dela en flikgrupp

Högerklicka på en flik och välj **Dela till höger** eller **Dela nedåt** för att skapa en ny flikgrupp med den fliken.

Du kan också dela en flikgrupp genom att dra en flik till botten av en annan flik.

### Ändra storlek på en flikgrupp

För att ändra storlek på en flikgrupp, håll muspekaren över en kant av flikgruppen. Kanten markeras när den kan dras för att ändra storlek.

Du kan ändra storlek på sidofält på liknande sätt för att ge mer utrymme åt flikgrupperna i mitten.

### Flytta flik till ett nytt fönster

**Dra och släpp:**

- Välj och dra fliken utanför programfönstret för att öppna den i ett nytt fönster.

**Kommandopalett:**

- Öppna kommandopaletten och välj **Flytta aktuell panel till nytt fönster**.

### Flytta en flik till ett annat fönster

För att flytta en flik till ett annat befintligt fönster, dra fliken till det fönster du vill flytta den till.

### Fäst en flik

För att fästa en flik i huvudredigeraren, högerklicka på fliken och välj **Fäst**. Länkar i en fäst flik öppnas alltid i en separat flik.

För att lossa en fäst flik i huvudredigeraren, högerklicka på fliken och välj **Lossa**.

För att fästa eller lossa en flik i sidofältet, se [[Sidofält#Fäst flikar|fästa flikar i sidofältet]].

## Växla till en annan flik

Välj en flik för att växla till den. Eller använd en tangentbordsgenväg:

| Växla till                    | MacOS            | Windows/Linux        |
|-------------------------------|------------------|----------------------|
| **Nästa flik**                | `⌃`+`⇥`         | `Ctrl`+`Tab`         |
| **Föregående flik**           | `⌃`+`⇧`+`⇥`    | `Ctrl`+`Shift`+`Tab` |
| **Första fliken till vänster**| `⌘`+`1`          | `Ctrl`+`1`           |
| **2:a till 8:e fliken**       | `⌘`+`2`..`8`     | `Ctrl`+`2`..`8`      |
| **Sista fliken till höger**   | `⌘`+`9`          | `Ctrl`+`9`           |
| **Nyligen stängd flik**       | `⌘`+`⇧`+`t`     | `Ctrl`+`Shift`+`t`   |

## Stapla flikgrupper

Du kan stapla flikar för att glida dem över andra flikar i samma flikgrupp.

För att stapla anteckningar, välj nedåtpilen i det övre högra hörnet av flikgruppen och välj sedan **Stapla flikar**.

![tab-stacks](https://user-images.githubusercontent.com/693981/188205363-0f24b2a5-3706-4a8c-b38b-7a66baa68ce6.gif)

Flikstaplar är inspirerade av [Andy Matuschaks glidande anteckningar](https://notes.andymatuschak.org/).

## Länkade vyer

_Länkade vyer_ är flikar som refererar till en annan flik. När innehållet i den refererade fliken ändras, ändras den länkade vyn också.

För anteckningsflikar kan du använda följande tillägg som länkade vyer:

- [[Grafvy]] (lokal)
- [[Bakåtlänkar]]
- [[Disposition]]

För att öppna en länkad vy för en anteckningsflik:

1. Välj **Fler alternativ** ![[lucide-more-horizontal.svg#icon]] i det övre högra hörnet av anteckningen.
2. Under **Öppna länkad vy**, välj den länkade vy du vill öppna.

## Spara layouter

Du kan spara och återställa fönsterlayouter med hjälp av tillägget [[Arbetsytor]].
