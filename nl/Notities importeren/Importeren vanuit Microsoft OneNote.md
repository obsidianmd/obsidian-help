---
permalink: import/onenote
---
Met Obsidian kun je eenvoudig je notities migreren vanuit Microsoft OneNote met behulp van de [[Importer|Importer-plug-in]]. Hiermee worden je OneNote-gegevens omgezet naar duurzame Markdown-bestanden, die je kunt gebruiken met Obsidian en veel andere apps.

> [!Warning]
> Alleen notitieboeken die eigendom zijn van je persoonlijke account kunnen worden geïmporteerd. Gedeelde notities, of accounts van werk- en schoolaccounts worden niet ondersteund.

## Je OneNote-gegevens importeren in Obsidian

Je hebt de officiële Obsidian [[Importer]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Schakel de Importer-plug-in in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Kies onder **Bestandsformaat** de optie **Microsoft OneNote**.
6. Klik op **Inloggen** om je webbrowser te openen naar de Microsoft-aanmeldpagina. Voer de inloggegevens in van je Microsoft-account dat je OneNote-notitieboeken bevat. Meer informatie over het Microsoft-aanmeldproces is hieronder beschikbaar.
7. Klik op **Accepteren** om Obsidian toestemming te geven om je OneNote-notitieboeken te bekijken.
8. Klik op **Koppeling openen** om je browser door te laten verwijzen naar de Obsidian-app.
9. In de Obsidian-app toont het Importer-dialoogvenster nu dat je bent ingelogd en geeft het je OneNote-notitieboeken en secties weer. Vink de secties aan die je wilt importeren.

![[OneNote-Importer-Select-Sections.png]]

10. Klik op **Importeren** en wacht tot het importeren is voltooid.
11. Je bent klaar!

## Problemen oplossen

### Er verschijnen geen secties of notitieboeken

Zorg ervoor dat de notitieboeken die je probeert te importeren gesynchroniseerd zijn met OneDrive en zichtbaar zijn in OneNote Web. Ze moeten van jou zijn (gedeelde notitieboeken geschreven door anderen worden niet ondersteund).

Als een specifieke sectie ontbreekt, controleer dan of het geen vergrendelde sectie is — die zijn onzichtbaar zonder eerst de vergrendeling te verwijderen.

### Geïmporteerde notities zijn leeg of missen inhoud

Dit probleem kan optreden bij notitieboeken die je zelden gebruikt. Volg deze stappen om het probleem op te lossen:

1. Open [OneNote Web](https://onenote.com/notebooks) in je browser.
2. **Klik met de rechtermuisknop** op de notitieboeken waarvan inhoud ontbreekt.
3. Selecteer **Notitieboek exporteren** in het menu.
4. **Pak** het zojuist gedownloade bestand **uit** in een map.
5. Upload je OneNote-notitieboeken [hier](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Open **Obsidian Importer** en probeer opnieuw te importeren.

Als je deze tips hebt gevolgd en je probleem blijft onopgelost, is het mogelijk dat er een tijdelijk probleem is met de Microsoft-servers. Als dat het geval is, wacht dan een paar minuten en probeer het opnieuw. Als het probleem aanhoudt, open dan een issue op de [Obsidian Importer GitHub-repository](https://github.com/obsidianmd/obsidian-importer/issues).

## Privacy

De Obsidian Importer-plug-in gebruikt [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) om te authenticeren met je Microsoft-account en je OneNote-notitieboeken te importeren. Dit verleent een kortdurend toegangstoken aan je account dat alleen vanaf je computer wordt gebruikt en nooit wordt opgeslagen. Na het voltooien van de import kun je het token optioneel intrekken via de [Microsoft-pagina voor apps en services](https://account.live.com/consent/Manage).
