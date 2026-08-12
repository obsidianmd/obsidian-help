---
permalink: import/onenote
---
Met Obsidian kun je eenvoudig je notities migreren vanuit Microsoft OneNote met behulp van de [[Importeren|Importer-plug-in]]. Hiermee worden je OneNote-gegevens omgezet naar duurzame Markdown-bestanden, die je kunt gebruiken met Obsidian en veel andere apps.

Obsidian biedt twee manieren om je OneNote-gegevens te importeren:

1. **Microsoft-account** logt in op je Microsoft-account en importeert de notitieboeken die gesynchroniseerd zijn met OneDrive. Vereist een internetverbinding.
2. **Bestandsimport** gebruikt de exportbestanden van OneNote (`.onepkg` en `.one`). Vereist geen account of internetverbinding, en werkt voor notitieboeken die nooit gesynchroniseerd zijn.

## Importeren vanuit je Microsoft-account

> [!Warning]
> Alleen notitieboeken die eigendom zijn van je account kunnen worden geïmporteerd. Notitieboeken die andere mensen met je hebben gedeeld worden niet ondersteund, en een werk- of schoolaccount kan vereisen dat je organisatie toegang goedkeurt.

Je hebt de officiële Obsidian [[Importeren]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Schakel de Importer-plug-in in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Kies onder **Bestandsformaat** de optie **Microsoft OneNote**.
6. Klik op **Inloggen** om je webbrowser te openen naar de Microsoft-aanmeldpagina. Voer de inloggegevens in van je Microsoft-account dat je OneNote-notitieboeken bevat. Meer informatie over het Microsoft-aanmeldproces is hieronder beschikbaar.
7. Klik op **Accepteren** om Obsidian toestemming te geven om je OneNote-notitieboeken te bekijken.
8. Klik op **Koppeling openen** om je browser door te laten verwijzen naar de Obsidian-app.
9. In de Obsidian-app toont het Importer-dialoogvenster nu dat je bent ingelogd en geeft het je OneNote-notitieboeken en secties weer. Vink de secties aan die je wilt importeren.
10. Klik op **Importeren** en wacht tot het importeren is voltooid.
11. Je bent klaar!

Als je notitieboeken bij een werk- of schoolaccount horen, kan OneNote de plug-in de toegang weigeren nadat je bent ingelogd. Wanneer dat gebeurt verschijnt er een knop **Werk- of schooltoegang gebruiken** naast **Uitloggen**. Gebruik deze om opnieuw in te loggen met de bredere machtiging die die accounts nodig hebben. Je organisatie moet die machtiging mogelijk goedkeuren voordat het werkt.

### Problemen oplossen

#### Er verschijnen geen secties of notitieboeken

Zorg ervoor dat de notitieboeken die je probeert te importeren gesynchroniseerd zijn met OneDrive en zichtbaar zijn in OneNote Web. Ze moeten van jou zijn (gedeelde notitieboeken geschreven door anderen worden niet ondersteund).

Als een specifieke sectie ontbreekt, controleer dan of het geen vergrendelde sectie is, want die zijn onzichtbaar zonder eerst de vergrendeling te verwijderen.

Als het een werk- of schoolnotitieboek betreft, zie de opmerking over **Werk- of schooltoegang gebruiken** hierboven.

#### Geïmporteerde notities zijn leeg of missen inhoud

Dit probleem kan optreden bij notitieboeken die je zelden gebruikt. Volg deze stappen om het probleem op te lossen:

1. Open [OneNote Web](https://onenote.com/notebooks) in je browser.
2. **Klik met de rechtermuisknop** op de notitieboeken waarvan inhoud ontbreekt.
3. Selecteer **Notitieboek exporteren** in het menu.
4. **Pak** het zojuist gedownloade bestand **uit** in een map.
5. Upload je OneNote-notitieboeken [hier](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Open **Obsidian Importer** en probeer opnieuw te importeren.

Als je deze tips hebt gevolgd en je probleem blijft onopgelost, is het mogelijk dat er een tijdelijk probleem is met de Microsoft-servers. Als dat het geval is, wacht dan een paar minuten en probeer het opnieuw. Als het probleem aanhoudt, open dan een issue op de [Obsidian Importer GitHub-repository](https://github.com/obsidianmd/obsidian-importer/issues).

## OneNote-bestanden importeren (.one, .onepkg)

Bestandsimport is een alternatieve manier om je OneNote-gegevens te importeren. Het leest de exportbestanden die OneNote zelf schrijft, dus het heeft geen Microsoft-account en geen internetverbinding nodig. Gebruik het voor notitieboeken die alleen op je computer staan, notitieboeken die je account niet kan bereiken, of wanneer je liever niet inlogt.

### Je notitieboeken exporteren vanuit OneNote

We raden aan elk notitieboek te exporteren als een **OneNote-pakket** (`.onepkg`). Eén pakket bevat elke sectie van het notitieboek, zodat je een notitieboek in één stap kunt exporteren en importeren, en Importer de secties toont waaruit je kunt kiezen.

Exporteren is alleen beschikbaar in **OneNote voor Windows**, de desktopapp die bij Microsoft 365 wordt geleverd. De OneNote-app voor Mac en de oudere OneNote voor Windows 10-app kunnen niet naar deze formaten exporteren.

1. Open het notitieboek dat je wilt exporteren in OneNote voor Windows.
2. Ga naar **Bestand → Exporteren**.
3. Kies onder **Huidig exporteren** de optie **Notitieboek**.
4. Kies onder **Indeling selecteren** de optie **OneNote-pakket (\*.onepkg)**.
5. Klik op **Exporteren** en kies waar je het bestand wilt opslaan.
6. Herhaal dit voor elk notitieboek dat je wilt importeren.

Om een enkele sectie te exporteren, kies je **Sectie** in stap 3 en **OneNote 2010-2016-sectie (\*.one)** in stap 4.

Je kunt ook de sectiebestanden importeren die OneNote al op schijf bewaart, zonder iets te exporteren:

- Notitieboeken die op je computer staan bevinden zich in `Documenten\OneNote Notebooks`, één `.one`-bestand per sectie.
- Back-ups van gesynchroniseerde notitieboeken staan in `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Je OneNote-bestanden importeren

Je hebt de officiële Obsidian [[Importeren]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Schakel de Importer-plug-in in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Kies onder **Bestandsformaat** de optie **Microsoft OneNote (.one, .onepkg)**.
6. Kies de `.onepkg`- en `.one`-bestanden die je wilt importeren. Je kunt meer dan één bestand tegelijk selecteren, zodat al je notitieboeken samen geïmporteerd kunnen worden.
7. Onder **Te importeren secties** worden de secties weergegeven die in die bestanden zijn gevonden, met alles aangevinkt. Vink alles uit wat je niet wilt.
8. Kies optioneel een **Uitvoermap** voor de import, waar de bijlagen moeten worden opgeslagen, en wat er moet gebeuren met **Bestaande notities** als je hetzelfde notitieboek opnieuw importeert.
9. Klik op **Importeren** en wacht tot het importeren is voltooid.
10. Je bent klaar!

Elke sectie wordt een map en elke pagina erin wordt een notitie. Een subpagina wordt opgeslagen in een map die is vernoemd naar de pagina erboven, wat de structuur behoudt die OneNote toonde en voorkomt dat twee subpagina's met dezelfde naam botsen. Pagina's in de prullenbak van het notitieboek worden niet geïmporteerd.

### Beperkingen

- Met een wachtwoord beveiligde secties zijn versleuteld opgeslagen en hun pagina's worden overgeslagen. Verwijder het wachtwoord in OneNote en exporteer opnieuw om ze te importeren.
- Met rechten beveiligde bestanden kunnen alleen worden geopend door een account dat het beleid toestaat, en kunnen niet worden gelezen door Importer.

## Privacy

Als je ervoor kiest te importeren met je Microsoft-account, gebruikt de Obsidian Importer-plug-in [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) om te authenticeren en je OneNote-notitieboeken te importeren. Dit verleent een kortdurend toegangstoken aan je account dat alleen vanaf je computer wordt gebruikt en nooit wordt opgeslagen. Na het voltooien van de import kun je het token optioneel intrekken via de [Microsoft-pagina voor apps en services](https://account.live.com/consent/Manage).

Bestandsimport maakt nooit verbinding met Microsoft: de bestanden die je selecteert worden op je computer gelezen, zonder enige netwerkverbinding.
