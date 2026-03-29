---
permalink: plugins/daily-notes
---
Dagnotities is een [[Ingebouwde plug-ins|kernplug-in]] die een notitie opent op basis van de datum van vandaag, of deze aanmaakt als deze nog niet bestaat. Gebruik dagnotities om dagboeken, takenlijsten of dagelijkse logboeken bij te houden van dingen die je gedurende de dag hebt ontdekt.

Om de dagnotitie van vandaag te openen, kun je:

- Klikken op **Open de notitie van vandaag** ![[lucide-calendar.svg#icon]] in de [[Werkbalk|werkbalk]].
- **Open de notitie van vandaag** uitvoeren vanuit het [[Opdrachtenpaneel]].
- [[Sneltoetsen#Een sneltoets instellen|Een sneltoets gebruiken]] voor de opdracht **Open de notitie van vandaag**.

Standaard maakt Obsidian een nieuwe lege notitie aan met de naam van de huidige datum in het formaat JJJJ-MM-DD.

> [!tip] Als je je dagnotities liever in een aparte map bewaart, kun je de <u>Nieuwe bestandslocatie</u> onder plug-inopties instellen om te wijzigen waar Obsidian nieuwe dagnotities aanmaakt.

> [!example]- Automatische submappen
> Je kunt je dagnotities automatisch in mappen organiseren met de functie **Datumindeling**.
> 
> Als je bijvoorbeeld de datumindeling instelt als `YYYY/MMMM/YYYY-MMM-DD`, worden je notities aangemaakt als `2023/January/2023-Jan-01`. 
> 
> Je kunt meer opmaakopties verkennen op de documentatiesite van [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Een dagnotitie aanmaken vanuit een sjabloon

Als je dagnotities dezelfde structuur hebben, kun je een [[Plug-ins/Sjablonen|sjabloon]] gebruiken om vooraf gedefinieerde inhoud toe te voegen aan je dagnotities wanneer je ze aanmaakt.

1. Maak een nieuwe notitie aan met de naam "Dagsjabloon" met de volgende tekst (of wat voor jou logisch is!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Taken

   - [ ]
   ```

2. Open **[[Instellingen]]**.
3. Klik in de zijbalk op **Dagnotities** onder **Plug-inopties**.
4. Selecteer in het tekstvak naast **Sjabloonbestandslocatie** de notitie "Dagsjabloon".

Obsidian gebruikt het sjabloon de volgende keer dat je een nieuwe dagnotitie aanmaakt.

## Dagnotities en eigenschappen

Wanneer de plug-in Dagnotities is geactiveerd en er een datumeigenschap aanwezig is in een notitie, zal Obsidian automatisch proberen een koppeling naar de dagnotitie voor die specifieke dag te genereren. Als bijvoorbeeld een notitie met de titel `example.md` een datumeigenschap bevat zoals `2023-01-01`, wordt deze datum omgezet in een klikbare koppeling in het [[Weergaven en bewerkingsmodus#Live voorbeeld|live voorbeeld]]-gedeelte.

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
