---
permalink: plugins/web-viewer
---
Webviewer is een [[Ingebouwde plug-ins|kernplug-in]] waarmee je externe koppelingen binnen Obsidian op de desktop kunt openen. Hiermee kun je de inhoud van een koppeling lezen zonder de app te verlaten, wat multitasken bij webonderzoeksprojecten eenvoudiger maakt.

Externe koppelingen worden geopend als een [[Tabbladen|tabblad]] dat je kunt herschikken, splitsen en openen in een [[Losstaande vensters|losstaand venster]]. Webpaginakaarten die zijn ingesloten in [[Doek|Canvas]]-bestanden kunnen als webviewertabbladen worden geopend.

Webviewer is geen vervanging voor je primaire browser. Webviewer biedt een snelle manier om webpagina's te raadplegen voor onderzoek binnen Obsidian. Het biedt echter niet de volledige functionaliteit, beveiligingscontroles of uitbreidbaarheid van een volwaardige browser.

## Lezerweergave

Klik op het brillenpictogram om een platte-tekstversie van de webpagina te bekijken. Deze functie werkt door de inhoud op te schonen met Mozilla's Readability-bibliotheek, ontwikkeld voor Firefox.

## Opslaan in kluis

Klik op het pictogram voor meer acties om een webpagina in je kluis op te slaan. Je kunt de opslaglocatie aanpassen door naar **[[Instellingen]]** → **Webviewer** te gaan.

## Advertentieblokkering

Webviewer blokkeert standaard advertenties. Je kunt adblockregels aanpassen door lijsten toe te voegen zoals [Easylist](https://easylist.to/).

## Beveiliging

Als je Obsidian-plug-ins van derden gebruikt, raden we aan om je primaire browser te gebruiken voor gevoelige taken en met wachtwoord beveiligde websites in plaats van Webviewer.

Webviewer is gebaseerd op dezelfde [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag)-functie waarmee je webpagina's kunt insluiten in [[Doek|Canvas]]. Webviewer is [onafhankelijk geaudit](https://obsidian.md/blog/cure53-second-client-audit/) om te verifiëren dat het veilig is geïmplementeerd.

Obsidian-plug-ins [[Plug-inbeveiliging#Mogelijkheden van plug-ins|zijn niet gesandboxed]] en hebben diepgaande controle over de app. Dit ontwerp maakt krachtige functionaliteit mogelijk, maar brengt ook beveiligingsafwegingen met zich mee. Terwijl Obsidian draait, hebben plug-ins van derden volledige toegang tot cookies in Webviewer.
