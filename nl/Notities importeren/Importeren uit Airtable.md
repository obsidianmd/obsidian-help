---
permalink: import/airtable
cssclasses:
  - soft-embed
---
Met Obsidian kun je je gegevens migreren vanuit Airtable met behulp van de [[Importeren|Importer-plug-in]]. Hiermee worden je Airtable-bases geconverteerd naar duurzame Markdown-bestanden die je offline kunt gebruiken met Obsidian en veel andere apps.

Elke tabel wordt een map met notities, met één notitie per record, plus een [[Introductie tot Bases|Bases]]-bestand dat de tabel en zijn weergaven nabootst. Omdat het de Airtable-API gebruikt, vereist het importeren een persoonlijk toegangstoken en een internetverbinding.

## Een persoonlijk Airtable-toegangstoken aanmaken

Om toegang te krijgen tot je Airtable-gegevens via de API heb je een persoonlijk toegangstoken nodig. Deze stap duurt ongeveer twee minuten.

Het token is een lange reeks cijfers en letters die doorgaans begint met `pat...` waarmee je je gegevens kunt downloaden van Airtable.

1. Log in bij Airtable en ga naar de pagina [Persoonlijke toegangstokens](https://airtable.com/create/tokens) in je accountinstellingen.
2. Kies **Create new token**.
3. Geef je token een naam, bijv. "Obsidian". Elke naam kan worden gebruikt.
4. Voeg onder **Scopes** `data.records:read` en `schema.bases:read` toe.
5. Voeg onder **Access** de bases toe die je wilt importeren, of kies alle bases in een werkruimte.
6. Kies **Create token** en vervolgens **Copy** om het token te kopiëren.
7. Sla het token op op een veilige plek, zoals je wachtwoordmanager.

Airtable toont het token slechts één keer. Als je het kwijtraakt, maak dan een nieuw token aan.

## Je Airtable-gegevens importeren

Je hebt de officiële Obsidian [[Importeren|Importer]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activeer de Importer-plug-in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Selecteer onder **Bestandsindeling** de optie **Airtable**.
6. Klik onder **Airtable Personal Access Token** op **Koppelen...** om een nieuw geheim toe te voegen. Geef voor het **ID** een naam op zoals `airtable`, en plak voor het **Geheim** je persoonlijke toegangstoken.
7. Klik op **Laden** om je bases te bladeren en selecteer vervolgens de tabellen die je wilt importeren.
8. Bekijk en bewerk de importopties.
9. Selecteer **Importeren** om te configureren hoe je velden worden geconverteerd naar notities met [[Eigenschappen|eigenschappen]].
10. Selecteer **Doorgaan** om het gegenereerde sjabloon te bekijken en voorbeelden van je records te bekijken.
11. Selecteer **Importeren** en wacht tot het importeren is voltooid.

## Importopties

- **Formules converteren** — kies of formule-, lookup-, rollup- en count-velden worden herschreven als [[Formules|Bases-formules]], terugvallend op de waarde die Airtable heeft berekend wanneer er geen equivalent is, of alleen als statische waarden worden geïmporteerd.
- **Bijlagen downloaden** — sla bijlagebestanden op in je kluis, met gebruik van je instellingen voor bijlagenmap en koppelingsindeling. Wanneer dit is uitgeschakeld, of wanneer een download mislukt, linkt de notitie in plaats daarvan naar de URL van het bestand op Airtable.
- **Weergave-eigenschapsnaam** — de eigenschap die registreert tot welke Airtable-weergaven een record behoort. Elke weergave in de gegenereerde basis filtert op deze eigenschap. Standaard `Views`.
- **Airtable record-ID opslaan** — voegt een `airtable-id`-eigenschap toe zodat toekomstige imports records kunnen herkennen nadat hun notities zijn verplaatst of hernoemd.

## Configureren hoe Airtable-velden worden geïmporteerd

In de veldconfiguratiestap kun je kiezen hoe elk veld wordt geïmporteerd.

Standaard wordt elk Airtable-veld een eigenschap. Je kunt eigenschappen hernoemen of verwijderen en hun waarden wijzigen voordat je verdergaat naar het sjabloonvoorbeeld.

Het primaire veld van elke tabel levert de standaard notitienaam. Je kunt het notitienaam-sjabloon bewerken vanuit de voorbeeldstap. Records worden altijd geplaatst in een map die is vernoemd naar hun tabel.

Zie [[Importer-sjablonen]] om de gegenereerde Markdown aan te passen.

## Wat er wordt geïmporteerd

Voor een basis met de naam `Projects` met een `Tasks`-tabel maakt de importer het volgende aan:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Eén notitie per record, met het primaire veld als notitietitel en de andere velden van het record als [[Eigenschappen|eigenschappen]].
- Een `.base`-bestand per tabel, waarbij elke Airtable-weergave wordt vertaald naar een [[Weergaven|Bases-weergave]]:
	- **Grid** wordt een [[Tabelweergave]].
	- **Gallery** wordt een [[Kaartenweergave]].
	- **List** wordt een [[Lijstweergave]].
	- **Kanban** wordt een [[Kanbanweergave]] in Obsidian 1.14 en later. Airtable geeft niet aan op welk veld een kanban is gegroepeerd, dus [[Kanbanweergave#Kaarten groeperen in kolommen|kies een eigenschap om op te groeperen]] na het importeren. Opnieuw importeren behoudt je keuze.
- Airtable-veldtypen worden vertaald naar Obsidian-eigenschapstypen, zonder typen te overschrijven die je al hebt ingesteld.
- Gekoppelde records worden koppelingen naar de bijbehorende notities.
- Bijlagen worden gedownload in je kluis met behulp van je kluisinstellingen.

## Beperkingen

Vanwege de snelheidslimieten van de Airtable-API kan het importeren van grote bases aanzienlijke tijd in beslag nemen. Heb geduld.

Vanwege beperkingen in de Airtable-API zijn sommige gegevens niet beschikbaar of kunnen niet worden geconverteerd:

- Rollup-waarden worden niet geïmporteerd. De API toont niet de aggregatie die wordt gebruikt voor de berekende waarde van een rollup, dus alleen de eigenschapsnaam wordt geschreven, samen met een Bases-formule wanneer het schema van het veld een expressie bevat.
- Formules die functies gebruiken waarvoor Obsidian geen equivalent heeft, zoals `SWITCH`, `FIND`, `REGEX_EXTRACT` en `SQRT`, vallen terug op de statische waarde van Airtable.
- Alleen grid-, galerij-, lijst- en kanbanweergaven worden geïmporteerd. Andere weergavetypen, zoals kalender, tijdlijn en Gantt, worden genegeerd.
- Koppelingen naar records in tabellen die je niet hebt geselecteerd worden de platte titel van het record in plaats van een koppeling.
- Interface-ontwerpen, automatiseringen, opmerkingen en revisiegeschiedenis worden niet geïmporteerd.

## Probleemoplossing

Als je problemen ondervindt bij de conversie, [dien dan een bugrapport in](https://github.com/obsidianmd/obsidian-importer/issues) zodat we het kunnen verbeteren.
