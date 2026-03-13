---
permalink: android
---
For at synkronisere dine noter på Android kan du læse guiden: [[Synkroniser dine noter på tværs af enheder]].

## Boksplacering

Når du starter Obsidian for første gang på Android, bliver du spurgt hvor du vil gemme dine data. Du kan vælge **enhedslager** (anbefalet) eller **app lager**.

### Enhedslager

Dine data bliver gemt på en delt placring på din enhed, hvis du vælger muligheden **enhedslager**. Det tillader at andre apps pg services kan tilgå din Obsidian boks, såsom tredjeparts [[Synkroniser dine noter på tværs af enheder|synkroniserings]] værktøjer.

Det er den anbefalede mulighed fordi den tilbyder bedre kompabilitet med synkronseringsværktøjer og sikrer at dine data er indtakte selvom du afinstallerer appen. Denne mulighed kræver dog yderligere tilladelser til at tilgå dine enheds filer.

På grund af begrænsninger på Android, vil Obsidian bede om tilladelse til at tilgå "alle filer" for at kunne fungere pålidelig. Google anbefaler dette selv for apps, der som Obsidian fungerer som "dokumenthåndterings apps". [Lær mere](https://developer.android.com/training/data-storage/manage-all-files).

Obsidian anvender kun denne tilladelse til at hjælpe dig med at tilgå dine data på din enhed. Dine data er ikke tilgændelig for os. For at lære mere om, hvordan du beskytter dine data og privatsikkerhed, kan du besøge vores [Sikkerhedsside](https://obsidian.md/security).

### App lager

Dine data bliver gemt i Obsidians private app lager, hvis du vælger muligheden **app lager**.

Dette er en god metode, hvis du ikke anvender nogle eksterne synkroniseringsværktøjer og foretrækker en strammere sikkerhed omkring dine noter.

Med denne metode kan du benytte [[Introduktion til Obsidian Sync|Obsidian Sync]] og tredjeparts synkroniseringsplugins, som er tilgængelige via [[Fællesskabsplugins|Fællesskabsplugins]], men du kan ikke anvende værktøjer som Syncthing, som kræver adgang til delt lager.

> [!warning] Hvis du afinstallerer Obsidian og har benyttet denne metode, vil dine noter blive slettet.
> Hvis du benytter **App lager** metoden, vil dine boksdata altså blive slettet, hvis du afinstallerer appen. Din Obsidian boks på andre enheden, vil ikke blive slettet.
