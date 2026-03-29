---
permalink: import/notion
---
Met Obsidian kun je eenvoudig je notities migreren vanuit Notion met behulp van de [[Importer|Importer-plug-in]]. Dit zal je Notion-gegevens converteren naar duurzame Markdown-bestanden die je offline kunt gebruiken met Obsidian en veel andere apps.

Obsidian biedt twee manieren om je Notion-gegevens te importeren:

1. **API-import** behoudt je volledige werkruimte inclusief Databases en formules die worden geconverteerd naar [[Introductie tot Bases|Bases]], maar vereist een Notion-integratietoken en een internetverbinding.
2. **Bestandsimport** behoudt geen Databases, maar vereist geen API-token of internetverbinding.

## API-import

### Een Notion API-integratietoken aanmaken

Om via de API toegang te krijgen tot je Notion-gegevens heb je een integratietoken nodig. Deze stap duurt ongeveer 2 minuten.

Het token is een lange reeks cijfers en letters die doorgaans begint met `ntn_...` waarmee je je gegevens kunt downloaden vanuit Notion.

1. Log in op je [Notion Integrations](https://www.notion.so/profile/integrations/internal)-dashboard.
2. Kies **New integration**.

![[notion-integration.png#interface]]

2. Geef je integratie een naam, bijv. "Persoonlijk". Elke naam kan worden gebruikt.
3. Kies de werkruimte die je wilt exporteren.
4. Klik op **Save** en ga verder naar **Configure integration settings**.
5. In het tabblad **Configuration** is je API-token beschikbaar in het veld **Internal Integration Secret**.
6. Selecteer **Show** en vervolgens **Copy**.
7. Bewaar het token op een veilige plek zoals je wachtwoordmanager.

![[notion-token.png#interface]]

Geef vervolgens je integratie toegang tot de Notion-pagina's en databases die je wilt importeren.

1. Ga naar het tabblad **Access** van de integratie die je zojuist hebt aangemaakt.
2. Klik op **Edit access**.
3. Voeg de pagina's en databases toe die je wilt importeren.

Je kunt nu je gegevens converteren met Obsidian Importer.

### Je Notion-gegevens importeren via API

Je hebt de officiële Obsidian [[Importer]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Schakel de Importer-plug-in in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Selecteer onder **File format** de optie **Notion (API)**
6. Plak onder **API token** je **Internal Integration Secret** van Notion.
7. Klik op **Laden** om de databases en pagina's te kiezen die je wilt importeren.
8. Bekijk en bewerk de importopties.
9. Selecteer **Importeren** en wacht tot de import is voltooid
10. Je bent klaar!

### Beperkingen

> [!info] API-import is nieuw
> De Notion API-importer is nieuw. Vanwege de complexiteit van Notion-werkruimtes zijn sommige randgevallen mogelijk niet meegenomen. Als je problemen ondervindt met de conversie, [dien dan een bugrapport in](https://github.com/obsidianmd/obsidian-importer/issues) zodat we het kunnen verbeteren.

Door Notion API-snelheidslimieten kan het importeren van grote werkruimtes aanzienlijke tijd in beslag nemen. Heb geduld.

Door beperkingen in de Notion API zijn sommige gegevens niet beschikbaar of kunnen niet worden geconverteerd:

- Alleen de primaire weergave van elke database wordt geïmporteerd.
- [Gekoppelde gegevensbronnen](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) worden niet geïmporteerd: *"De API van Notion ondersteunt momenteel geen gekoppelde gegevensbronnen. Zorg er bij het delen van een database met je integratie voor dat deze de originele gegevensbron bevat!"*
- `People`-functies: `name()` en `email()`
- `Text`-functies: `style()` en `unstyle()`

Daarnaast zal Importer de volgende wijzigingen aanbrengen:

- Pagina's zonder subpagina's of databases worden geïmporteerd als `[bestandsnaam].md` in plaats van `[bestandsnaam]/[bestandsnaam].md`.
- Databases worden altijd weergegeven als mappen met de naam `[databasenaam]` met daarin een `[databasenaam].base`-bestand.

## Bestandsimport

Bestandsimport is een alternatieve manier om je Notion-gegevens te importeren. Deze methode behoudt geen Databases, maar vereist geen API-token of internetverbinding.

### Je gegevens exporteren vanuit Notion

Om je gegevens voor te bereiden op import, moet je je volledige werkruimte exporteren met het HTML-exportformaat van Notion. We raden aan om niet het Markdown-exportformaat van Notion te gebruiken, omdat dit belangrijke gegevens weglaat. Je moet beheerderstoegang hebben tot de Notion-werkruimte om alle werkruimte-inhoud te exporteren.

1. Ga naar **[[Instellingen]]** bovenaan de Notion-zijbalk.
2. Selecteer onder **Workspace** de optie **General**.
3. Zoek en selecteer **Export all workspace content**.
4. Selecteer onder **Export format** de optie **HTML**.
5. Kies **Include everything**.
6. Schakel **Create folders for subpages** in.
7. Je ontvangt een `.zip`-bestand via e-mail of direct in de browser.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Je Notion .zip-bestand importeren

Je hebt de officiële Obsidian [[Importer]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Schakel de Importer-plug-in in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Selecteer onder **File format** de optie **Notion (.zip)**
6. Kies het `.zip`-bestand met Notion-bestanden dat je wilt importeren. *Het wordt aanbevolen om al je Notion-gegevens in één keer te importeren, zodat interne koppelingen correct kunnen worden afgestemd.*
7. Selecteer _optioneel_ een map voor de import. Je Notion-pagina's en databases worden genest in deze map.
8. Schakel **Save parent pages in subfolders** in om de Notion-structuur te behouden. *Let op: in Notion kun je inhoud schrijven in mappen, dit is niet mogelijk in Obsidian en deze pagina's worden toegevoegd als subpagina onder de map.*
9. Selecteer **Importeren** en wacht tot de import is voltooid
10. Je bent klaar!

### Problemen oplossen

Als je problemen ondervindt bij het importeren vanuit Notion:

- Zorg ervoor dat je **HTML** als exportformaat gebruikt in Notion, **niet Markdown**.
- Als Obsidian lijkt vast te lopen tijdens de import, schakel dan communityplug-ins uit en probeer het opnieuw.

Kom je iets anders tegen? Zoek in [de Importer-repository](https://github.com/obsidianmd/obsidian-importer/issues) om te zien of anderen hetzelfde hebben ervaren.

#### Grote werkruimtes importeren

Als je een werkruimte importeert met meerdere gigabytes aan gegevens, kan de export vanuit Notion geneste `.zip`-bestanden bevatten. In dat geval zie je mogelijk een foutmelding bij de import die er ongeveer zo uitziet:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Als je deze foutmelding ziet, kun je het bestand vanuit Notion uitpakken en vervolgens de geneste `Export-{id}-Part-1.zip`-bestanden importeren.
