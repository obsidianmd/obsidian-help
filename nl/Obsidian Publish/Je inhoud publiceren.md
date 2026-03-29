---
permalink: publish/publish
publish: true
mobile: true
description: Leer hoe je je content publiceert met Obsidian Publish.
---
Deze pagina legt uit hoe je je gepubliceerde inhoud beheert. Zie [[Je site aanpassen]] voor meer informatie over het aanpassen van de stijl van je site.

## Vereisten

- Een Obsidian-account. Als je er nog geen hebt, [schrijf je nu in](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Een actief Obsidian Publish-abonnement. Als je er nog geen hebt, neem dan een abonnement via [je accountdashboard](https://obsidian.md/account/publish).
- De **Publish**-kernplug-in is [[Obsidian Publish instellen#Obsidian Publish inschakelen|ingeschakeld]].
- Er is een [[Sites beheren#Een nieuwe site aanmaken|Publish-site]] aangemaakt.

## Notities publiceren

1. Selecteer in de **werkbalk** de optie **Publiceer veranderingen** ![[lucide-send.svg#icon]].
2. Selecteer in het dialoogvenster **Publiceer veranderingen** de optie **NIEUW** om alle niet-gepubliceerde notities te bekijken.
3. Selecteer de notities die je wilt publiceren.
4. Selecteer **Publiceren**.

## Notities depubliceren

Notities blijven in je lokale kluis, ook nadat je ze hebt gedepubliceerd.

1. Selecteer in de **werkbalk** de optie **Publiceer veranderingen** ![[lucide-send.svg#icon]].
2. Selecteer in het dialoogvenster **Publiceer veranderingen** de optie **ONGEWIJZIGD** om alle gepubliceerde notities te bekijken.
3. Selecteer de notities die je wilt depubliceren.
4. Selecteer **Publiceren**.

## Een gepubliceerde notitie bijwerken

1. Selecteer in de **werkbalk** de optie **Publiceer veranderingen** ![[lucide-send.svg#icon]].
2. Selecteer in het dialoogvenster **Publiceer veranderingen** de optie **GEWIJZIGD** om alle gewijzigde notities sinds de laatste publicatie te bekijken.
3. Selecteer de notities die je wilt bijwerken.
4. Selecteer **Publiceren**.

> [!hint] Het verwijderen van hernoemde of verwijderde notities en afbeeldingen uit Publish gebeurt in deze stap. Je moet handmatig het selectievakje aanvinken om deze gegevens te verwijderen, aangezien dit om veiligheidsredenen niet automatisch wordt geselecteerd.

## Gekoppelde gegevens publiceren

Bij het publiceren van notities die koppelingen naar andere notities of ingesloten afbeeldingen bevatten, kunnen er gebroken koppelingen ontstaan tenzij de gekoppelde notities ook worden gepubliceerd. **Obsidian Publish** helpt dit te voorkomen door automatisch media te selecteren die gekoppeld zijn vanuit de notities die je al hebt gekozen.

Om alle gekoppelde notities op te nemen, selecteer **Voeg gelinkte toe** in het dialoogvenster **Publiceer veranderingen**.

Controleer vóór het publiceren de bijgewerkte selectie om er zeker van te zijn dat er geen gegevens bij zitten die je nog niet wilt publiceren.

> [!tip] De functie **Voeg gelinkte toe** respecteert alle uitsluitingen die zijn gedefinieerd in [[#Gegevens negeren]].

## Automatisch gegevens selecteren om te publiceren

Stel `publish: true` in in de [[Eigenschappen]] van een notitie om deze automatisch op te nemen voor publicatie als nieuwe of gewijzigde notitie.

Je kunt ook automatisch notities en gekoppelde afbeeldingen in specifieke mappen selecteren door ze als **Geselecteerde** mappen toe te voegen:

1. Selecteer in de **werkbalk** de optie **Publiceer veranderingen** ![[lucide-send.svg#icon]] of open het [[Opdrachtenpaneel]] en typ **Publish: Publiceer veranderingen...**.
2. Selecteer het pictogram **Publicatiefilters beheren** ![[lucide-filter.svg#icon]].
3. Selecteer in de sectie **Geselecteerde mappen** de optie **Beheren**.
4. Kies de mappen die je wilt opnemen vanuit de suggestielijst.
5. De map wordt toegevoegd aan de lijst met geselecteerde mappen.
6. Selecteer **Klaar** wanneer je klaar bent.

### Gegevens negeren

Om een notitie in Obsidian Publish te negeren, stel `publish: false` in de [[Eigenschappen]] van de notitie in. De notitie verschijnt niet meer in de lijst met te publiceren notities.

Je kunt ook automatisch notities en afbeeldingen in specifieke mappen negeren door ze als **Uitgesloten** mappen toe te voegen:

1. Selecteer in de **werkbalk** de optie **Publiceer veranderingen** ![[lucide-send.svg#icon]] of open het [[Opdrachtenpaneel]] en typ **Publish: Publiceer veranderingen...**.
2. Selecteer het pictogram **Publicatiefilters beheren** ![[lucide-filter.svg#icon]].
3. Selecteer in de sectie **Uitgesloten mappen** de optie **Beheren**.
4. Kies de mappen die je wilt uitsluiten vanuit de suggestielijst.
5. De map wordt toegevoegd aan de uitgesloten lijst.
6. Selecteer **Klaar** wanneer je klaar bent.

> [!note] `publish: true` overschrijft uitgesloten mappen
> Als een bestand `publish: true` heeft, wordt het alsnog gepubliceerd, zelfs als het zich in een map of filter bevindt die is uitgesloten. Dit komt doordat `publish: true` meer specifieke controle biedt.
