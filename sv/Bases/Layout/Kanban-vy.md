---
permalink: bases/views/kanban
---
Kanban är en typ av [[Vyer|vy]] som du kan använda i [[Introduktion till baser|Bases]].

Välj ![[lucide-kanban-square.svg#icon]] **Kanban** från vymenyn för att visa filer som kort organiserade i kolumner. Varje kolumn representerar ett värde för den egenskap som används för att gruppera resultat.


> [!warning] Kräver Obsidian 1.14+
> Kanban-vyer kräver Obsidian 1.14 som för närvarande är i [[Tidig åtkomst-versioner|tidig åtkomst]].


## Gruppera kort i kolumner

En Kanban-vy kräver en egenskap att gruppera resultat efter.

1. Välj ![[lucide-arrow-up-down.svg#icon]] **Sortera** i verktygsfältet.
2. Under **Gruppera efter**, välj **Egenskap** och välj en egenskap.

Filer utan ett värde för den valda egenskapen visas i kolumnen **Inget värde**.

> [!info] 
> Om du grupperar efter en formel eller filegenskap kan du inte flytta kort eller kolumner, eller skapa anteckningar från kolumnerna. Dessa egenskaper kan inte redigeras genom att flytta ett kort.

## Arbeta med kort och kolumner

- Dra ett kort till en annan kolumn för att uppdatera den grupperade egenskapen i den anteckningen. Endast Markdown-anteckningar kan flyttas mellan kolumner.
- Välj plusikonen i en kolumnrubrik eller ![[lucide-plus.svg#icon]] **Ny** längst ner i en kolumn för att skapa en anteckning med den kolumnens värde.
- Dra en kolumnrubrik för att ändra kolumnordningen. För att återställa den ursprungliga ordningen, högerklicka på en kolumn och välj **Återställ ordning**.
- Använd menyn ![[lucide-list.svg#icon]] **Egenskaper** för att välja vilka egenskaper som visas på varje kort. Den första egenskapen visas som kortets titel.

## Inställningar

Kanban-vyns inställningar kan konfigureras i [[Vyer#Vyinställningar|Vyinställningar]].

- Dölj tomma kolumner
- Kolumnbredd
- Bildegenskap
- Bildanpassning
- Bildförhållande

### Dölj tomma kolumner

Döljer kolumner som inte innehåller några kort.

### Kolumnbredd

Definierar bredden på varje kolumn och dess kort.

### Bildegenskap

Kanban-kort stöder en valfri omslagsbild som visas högst upp på kortet. De egenskapsvärden som stöds är desamma som för [[Kortvy#Bildegenskap|bildegenskapen i Kortvy]].

### Bildanpassning

Om du har en bildegenskap konfigurerad avgör detta alternativ hur bilden visas i kortet.

- **Fyll:** Bilden fyller kortets innehållsruta. Om den inte passar beskärs bilden.
- **Inpassa:** Bilden skalas tills den passar inom kortets innehållsruta. Bilden beskärs inte.

### Bildförhållande

Höjden på omslagsbilden bestäms av dess bildförhållande. Justera detta alternativ för att göra bilden kortare eller högre.
