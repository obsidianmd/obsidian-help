---
permalink: import/zettelkasten
---
Als je de Zettelkasten-methode hebt gebruikt om je notities te benoemen en te koppelen, kan het nodig zijn om koppelingen van `[[UID]]` naar `[[UID Mijn notitietitel]]` om te zetten.

Als je bijvoorbeeld een notitie hebt met de naam `202301011230 Mijn notitietitel` en je koppelt ernaar vanuit een andere notitie met alleen de UID, `[[202301011230]]`. Omdat Obsidian de volledige naam van de notitie gebruikt om interne koppelingen op te lossen, zullen koppelingen zoals deze niet meer werken.

Om alle `[[UID]]`-koppelingen in je kluis bij te werken zodat ze de volledige naam van de notitie gebruiken, gebruik je de [[Markdown-indeling importeren|Markdown-indeling importeren]].

1. Open **[[Instellingen]]**.
2. Schakel onder **Ingebouwde plug-ins** de plug-in **Markdown-indeling importeren** in en sluit het venster Instellingen.
3. Selecteer in de werkbalk, aan de linkerkant van het app-venster, **Open format convert** ![[lucide-binary.svg#icon]].
4. Schakel **Zettelkastenverwijzingencorrectie** in.
5. Selecteer **Conversie starten**. Hiermee worden alle notities in je hele kluis omgezet.

> [!tip] Zettelkastenverwijzingen mooier maken
> [[Markdown-indeling importeren]] kan ook je koppelingen mooier maken door de UID uit de weergavenaam te verwijderen. Bijvoorbeeld, `[[UID]]` wordt omgezet naar `[[UID Mijn notitietitel|Mijn notitietitel]]`.
>
> Om je Zettelkasten-koppelingen mooier te maken, schakel je **Zettelkastenverwijzingen mooier maken** in in het venster voor het importeren van de Markdown-indeling.

Je kunt ook de [[Uniekenotitiesmaker]] gebruiken om Zettelkasten-notities aan te maken in Obsidian.
