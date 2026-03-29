---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Hoe je je Obsidian-notities synchroniseert tussen apparaten en platformen.
---
Obsidian slaat notities lokaal op je apparaat op, zodat je er altijd toegang toe hebt, zelfs offline. Om je notities op meerdere apparaten te openen, moet je een synchronisatiemethode instellen.

Deze gids behandelt veelgebruikte synchronisatiemethoden, inclusief tips om gegevensverlies te voorkomen en een soepele ervaring te garanderen.

We raden ook aan om onze [[Back-up maken van je Obsidian-bestanden|back-upgids]] te lezen om je gegevens te beschermen.

## Synchronisatiemethoden

Bij Obsidian worden je gegevens eenvoudigweg opgeslagen als bestanden in een map die een [[Lokale en externe kluizen|kluis]] wordt genoemd. Dit betekent dat er veel manieren zijn om je gegevens te synchroniseren.

Dit zijn enkele veelgebruikte synchronisatiemethoden die door leden van de [Obsidian Community](https://obsidian.md/community) worden gerapporteerd:

1. **Eigen synchronisatie**: [[#Obsidian Sync]]
2. **Cloudopslag van derden**: [[#iCloud]], [[#OneDrive]] en [[#Google Drive]]
3. **Lokale synchronisatie**: [[#Syncthing]]
4. **Versiebeheer**: [[#Git]] en [[#Working Copy]]

## Obsidian Sync

**Aanbevolen systemen**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

De meest eenvoudige en officieel ondersteunde synchronisatiemethode is onze eigen oplossing: [[Introductie tot Obsidian Sync|Obsidian Sync]].

Obsidian Sync houdt je kluizen gesynchroniseerd op al je apparaten door een externe kluis te gebruiken om kopieën van je gegevens te maken. Een lokale kopie blijft altijd op je apparaten staan.

Volg de [[Obsidian Sync instellen|installatiegids]] om Obsidian Sync te configureren.

## iCloud

**Aanbevolen systemen**: `macOS`, `iOS`, `iPadOS`

iCloud kan worden gebruikt om kluizen te synchroniseren tussen iOS en macOS. Echter, **iCloud Drive op Windows** kan leiden tot bestandsduplicatie of -beschadiging.

**Hoe je een kluis aanmaakt en opslaat in iCloud Drive**:

- **iCloud Drive inschakelen**:
    - Op macOS: Ga naar **Systeeminstellingen → Apple ID → iCloud → iCloud Drive**.
    - Op iOS: Ga naar **Instellingen → [Je naam] → iCloud → iCloud Drive**.
- **Een nieuwe kluis aanmaken in iCloud**:
    - Op macOS:
        1. Open **Obsidian** en selecteer **Nieuwe kluis aanmaken**.
        2. Navigeer in de bestandskiezer naar **iCloud Drive → Obsidian**.
        3. Maak een map aan voor je kluis en geef deze een naam.
        4. Selecteer **Aanmaken** om te voltooien.
    - Op iOS:
        1. Open **Obsidian** en tik op **Nieuwe kluis aanmaken**.
        2. Voer een naam in voor je kluis.
        3. Schakel **Opslaan in iCloud** in.
        4. Tik op **Aanmaken**.
- **De kluis openen op een ander Apple-apparaat**:
    - Open op een ander macOS- of iOS-apparaat **Obsidian**, ga naar de [[Kluizen beheren|Kluiswisselaar]] en selecteer **Open map als kluis**. Navigeer naar **iCloud Drive → Obsidian**.

> [!warning]+ Maplocatie op iOS en iPadOS
> Wanneer je iCloud op mobiele apparaten gebruikt, zorg er dan voor dat je kluis op de juiste locatie is opgeslagen: `iCloud Drive/Obsidian/[Je kluisnaam]`.
> 
> Kluizen moeten zich in de map **Obsidian** binnen iCloud Drive bevinden. De map rechts met het Obsidian-pictogram is correct. Gebruik niet de gewone map zonder het app-pictogram.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Om je kluislocatie te verifiëren, open de **Bestanden**-app, tik op **Bladeren**, selecteer **iCloud Drive** onder **Locaties** en bevestig dat je kluis zich in de map **Obsidian** bevindt. Als je kluis op een andere locatie staat, kun je synchronisatieproblemen ervaren.

> [!tip] Beste werkwijzen
> - Voor **macOS 14 (Sonoma) en eerder**: Schakel **Optimaliseer Mac-opslag** uit in de iCloud-instellingen om te voorkomen dat bestanden worden uitgeladen. Deze instelling beïnvloedt alle iCloud-opslag op het apparaat, niet alleen Obsidian.
> - Voor **macOS 15 (Sequoia)**: Klik met de rechtermuisknop op de map **Obsidian** in iCloud Drive en selecteer **Bewaar gedownload**.

## OneDrive

**Aanbevolen systemen**: `Windows`, `macOS` (beperkte functionaliteit op Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) is een populaire cloudopslagoptie voor Windows- en macOS-gebruikers. Het heeft echter beperkingen op Android en wordt niet officieel ondersteund voor het synchroniseren van Obsidian-kluizen op iOS.

> [!info] Bestanden offline beschikbaar houden
> Voordat je OneDrive gebruikt voor synchronisatie, zorg ervoor dat je kluismap is gemarkeerd als **Altijd bewaren op dit apparaat**. Dit voorkomt dat OneDrive bestanden uitlaadt en dat Obsidian denkt dat ze ontbreken.

**Hoe je een kluis aanmaakt en opslaat in OneDrive**:

1. **OneDrive instellen**:
   - Op Windows: Log in via de OneDrive-app of je Microsoft-account.
   - Op macOS: Download de OneDrive-app en log in.
2. **Een nieuwe kluis aanmaken in OneDrive**:
   - Op Windows/macOS:
     1. Open **Verkenner** (Windows) of **Finder** (macOS) en navigeer naar **OneDrive → Documenten**.
     2. Maak een nieuwe map aan (bijv. \"Obsidian Kluis\").
     3. Open **Obsidian**, selecteer **Nieuwe kluis aanmaken** en selecteer de OneDrive-map.
3. **De kluis openen op een ander apparaat**:
   - Open op een ander apparaat **Obsidian**, ga naar de [[Kluizen beheren|Kluiswisselaar]] en selecteer **Open map als kluis**. Navigeer naar **OneDrive → Documenten**.

> [!info] Android-synchronisatie
> OneDrive werkt mogelijk niet goed voor Android-synchronisatie. Overweeg het gebruik van apps zoals [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) of [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Beste werkwijzen
> - Houd je kluisbestanden altijd **Offline beschikbaar** door met de rechtermuisknop op de map te klikken en **Altijd bewaren op dit apparaat** te selecteren.
> - Vermijd het gebruik van de **Bestanden op aanvraag**-functie van OneDrive voor kluizen om synchronisatieproblemen te voorkomen.

## Google Drive

**Aanbevolen systemen**: `Windows`, `macOS`, `Android` (beperkte functionaliteit op iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) is een andere populaire cloudopslagoplossing. Hoewel het niet officieel wordt ondersteund voor het synchroniseren van Obsidian-kluizen, kun je apps en plug-ins van derden gebruiken om te synchroniseren tussen apparaten.

> [!info] iOS-ondersteuning
> Google Drive wordt niet officieel ondersteund voor het synchroniseren van Obsidian-kluizen op iOS. Overweeg het gebruik van een oplossing of plug-in van derden om op iOS te synchroniseren.

**Hoe je een kluis aanmaakt en opslaat in Google Drive**:

1. **Google Drive instellen**:
    - Op Windows of macOS: Download de Google Drive-app en log in.
    - Op Android: Zorg ervoor dat Google Drive is ingeschakeld en dat je bent ingelogd.
2. **Een nieuwe kluis aanmaken in Google Drive**:
    - Op Windows/macOS:
        1. Open **Verkenner** (Windows) of **Finder** (macOS) en navigeer naar **Google Drive**.
        2. Maak een nieuwe map aan (bijv. \"Obsidian Kluis\").
        3. Open **Obsidian**, selecteer **Nieuwe kluis aanmaken** en selecteer de Google Drive-map.
3. **De kluis openen op een ander apparaat**:
    - Open op een ander apparaat **Obsidian**, ga naar de [[Kluizen beheren|Kluiswisselaar]] en selecteer **Open map als kluis**. Navigeer naar je Google Drive-map.

> [!tip] Beste werkwijzen
> - Stel kluisbestanden in op **Offline beschikbaar** in Google Drive om synchronisatieproblemen door uitladen te voorkomen.
> - Overweeg voor iOS alternatieve methoden zoals [[Introductie tot Obsidian Sync|Obsidian Sync]], [[#iCloud]], of gebruik de **Remotely Save**-plug-in.

## Syncthing

**Aanbevolen systemen**: `Windows`, `macOS`, `Linux`

Syncthing is een gedecentraliseerd bestandssynchronisatietool dat niet afhankelijk is van cloudopslag. Het synchroniseert je kluis rechtstreeks tussen apparaten via het netwerk of internet.

> [!info]+ Android-ondersteuning
> De officiële Syncthing Android-app wordt niet meer onderhouden. Een community-fork genaamd [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) wordt echter actief doorontwikkeld en kan op Android-apparaten worden gebruikt.

**Hoe je een kluis aanmaakt en opslaat met Syncthing**:

1. **Syncthing instellen**:
   - Installeer Syncthing op elk apparaat. Raadpleeg de [Syncthing-website](https://syncthing.net/) voor installatiehandleidingen.
   - Installeer op Android [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) vanuit de GitHub-releases of F-Droid.
2. **Een gedeelde map aanmaken en configureren**:
   - Op alle apparaten:
     1. Open Syncthing en maak een gedeelde map aan. Stel het mappad in op je Obsidian-kluis.
     2. Zorg ervoor dat dezelfde map op alle apparaten is geselecteerd.
     3. Configureer de mapsynchronisatievoorkeuren (bijv. **Verzenden en ontvangen** voor synchronisatie in twee richtingen).
3. **De kluis openen in Obsidian**:
   - Zodra de map op alle apparaten is gesynchroniseerd, open **Obsidian**, ga naar de [[Kluizen beheren|Kluiswisselaar]] en selecteer **Open map als kluis**.

> [!info] Beschikbaarheid van apparaten
> Syncthing werkt het beste wanneer ten minste één apparaat altijd aan staat om continue synchronisatie te garanderen.

> [!tip] Beste werkwijzen
> - Zorg er bij lokale synchronisatie voor dat alle apparaten met hetzelfde netwerk zijn verbonden.
> - Sluit `.obsidian` uit van synchronisatie als je op elk apparaat aparte instellingen wilt.
> - Gebruik negeerpatronen om het synchroniseren van tijdelijke of back-upbestanden te voorkomen.

## Git

**Aanbevolen systemen**: `Windows`, `macOS`, `Linux`

**Git** is een versiebeheersysteem waarmee je wijzigingen kunt bijhouden, kunt samenwerken met anderen en je kluizen kunt synchroniseren via opslagplaatsen zoals GitHub, GitLab of een zelf-gehoste server.

**Hoe je je kluis synchroniseert met Git**:

1. **Een externe opslagplaats instellen**:
    - Maak een opslagplaats aan op een Git-hostingplatform (bijv. GitHub, GitLab of een zelf-gehoste server).
2. **Je kluis synchroniseren**:
    1. Open een terminal of Git-GUI (bijv. GitKraken, Sourcetree).
    2. Initialiseer een Git-opslagplaats in je kluismap met `git init`.
    3. Voeg de externe opslagplaats toe: `git remote add origin [URL]`.
    4. Commit je wijzigingen: `git add .` en `git commit -m "Je bericht"`.
    5. Push de wijzigingen: `git push origin main`.
3. **Wijzigingen ophalen op andere apparaten**:
    - Kloon de opslagplaats op een ander apparaat en haal wijzigingen op met `git pull origin main`.

> [!info] Handmatige synchronisatie vereist
> Git biedt sterk versiebeheer, maar synchronisatie is niet automatisch. Je moet handmatig wijzigingen pushen en pullen.

## Synchronisatie op iPhone en iPad

**Aanbevolen opties**:
- [[Introductie tot Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Vermijd het mixen van synchronisatiediensten
> Vermijd het synchroniseren van dezelfde kluis via meerdere diensten (bijv. zowel Obsidian Sync als iCloud tegelijkertijd gebruiken) om gegevensconflicten of -beschadiging te voorkomen.

**Niet-ondersteunde opties**:
De volgende diensten worden niet officieel ondersteund op iOS, maar gebruikers hebben workarounds gevonden met tools of plug-ins van derden:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Sommige gebruikers hebben met succes plug-ins zoals **Remotely Save** of **LiveSync** gebruikt om kluizen op iOS te synchroniseren. Deze methoden worden echter niet officieel ondersteund en de resultaten kunnen variëren.

### Working Copy

**Aanbevolen systemen**: `iOS`
**Vereist**: [[#Git]]

**Working Copy** is een Git-client voor iOS waarmee je wijzigingen kunt klonen, committen en pushen naar een Git-opslagplaats. Het werkt goed voor het synchroniseren van Obsidian-kluizen via Git, hoewel sommige functies een betaalde in-app-aankoop vereisen.

**Hoe je je kluis synchroniseert met Working Copy**:

1. **Working Copy installeren**:
    - Download de **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)**-app op je iPhone of iPad.
2. **Je Git-opslagplaats klonen**:
    - Open Working Copy, tik op **Opslagplaats toevoegen** en voer je opslagplaats-URL in (bijv. GitHub, GitLab).
3. **Opslagplaats koppelen aan Obsidian**:
    - Koppel de gekloonde opslagplaatsmap aan een lege kluis in **Obsidian**.
4. **Wijzigingen committen en pushen**:
    - Gebruik na het bewerken van notities in Obsidian Working Copy om wijzigingen te **committen** en te **pushen** naar de externe opslagplaats.
    - Haal op andere apparaten wijzigingen op met Git om de kluis te synchroniseren.

> [!info] Communitygebruik
> Hoewel Working Copy niet officieel wordt ondersteund, hebben veel gebruikers het met succes gebruikt om kluizen met Git te synchroniseren.

## Veelgestelde vragen

**Waarom wordt mijn voorkeurssynchronisatiedienst niet officieel ondersteund?**

In tegenstelling tot sommige notitie-apps die per keer één bestand openen, heeft Obsidian toegang tot de volledige kluis nodig voor zijn functies (bijv. koppelingen bijwerken bij het hernoemen van een bestand). Dit maakt het moeilijk voor sommige diensten om betrouwbaar met Obsidian te werken.

**Waarom moet ik bestanden "Offline beschikbaar" houden?**

Als diensten zoals OneDrive of iCloud bestanden uitladen (bijv. met **Bestanden op aanvraag** of **Optimaliseer Mac-opslag**), kan Obsidian ze niet openen, wat synchronisatieproblemen veroorzaakt. Markeer je kluismap als **Altijd bewaren op dit apparaat** (OneDrive) of zorg ervoor dat **Bewaar gedownload** is ingeschakeld (iCloud).

**Hoe beheer ik verschillende configuraties voor mijn kluizen?**

Met Obsidian kun je de configuratiemap per apparaat aanpassen met de functie [[Configuratiemap|Configuratiemappen]].
