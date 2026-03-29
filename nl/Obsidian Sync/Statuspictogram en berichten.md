---
permalink: sync/messages
publish: true
mobile: true
description: Deze pagina legt de statuspictogrammen van Obsidian Sync uit en geeft details over het synchronisatieactiviteitenlogboek.
---
Obsidian Sync biedt verschillende elementen om de synchronisatiestatus aan te geven, voornamelijk het [[#Synchronisatiestatuspictogram]] en het [[#Synchronisatieactiviteitenlogboek]]. Details over versiebeheer in Obsidian Sync worden behandeld op de pagina [[Versiegeschiedenis]].

## Synchronisatiestatuspictogram

Het synchronisatiestatuspictogram bevindt zich in de [[Statusbalk]] op de desktopversie en in de [[Zijbalk#Verborgen zijbalken openen|rechter zijbalk]] op mobiel en tablet. Het pictogram geeft verschillende synchronisatiestatussen weer:

- ![[obsidian-icon-sync-synced.svg#icon]] **Gesynchroniseerd**: Obsidian Sync heeft je bestanden volledig gesynchroniseerd. Dit pictogram is doorgaans groen.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Synchroniseren**: Obsidian werkt momenteel de externe kluis bij. Dit pictogram is meestal paars.
- ![[obsidian-icon-sync-paused.svg#icon]] **Gepauzeerd**: Synchronisatie is gepauzeerd, maar Obsidian is nog steeds verbonden met de externe kluis. Het pictogram is doorgaans paars.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Verbinding verbroken**: De Sync-kernplug-in is actief, maar de [[Lokale en externe kluizen|lokale kluis]] is niet verbonden met een externe kluis. Dit pictogram is doorgaans rood.

Door op het pictogram te klikken of tikken, wordt een contextmenu geopend met de volgende opties:
- ![[obsidian-icon-sync-paused.svg#icon]] Pauzeren (of ![[lucide-circle-play.svg#icon]] Hervatten indien gepauzeerd)
- ![[lucide-history.svg#icon]] [[Versiegeschiedenis]] (Grijs weergegeven als je geen notitie bekijkt)
- ![[lucide-align-left.svg#icon]] [[#Synchronisatieactiviteitenlogboek|Synchronisatieverslag]] openen
- ![[lucide-trash-2.svg#icon]] [[Versiegeschiedenis#Een verwijderd bestand herstellen|Verwijderde bestanden]]
- ![[lucide-cog.svg#icon]] [[Sync-instellingen en selectieve synchronisatie|Sync-instellingen]]

## Synchronisatieactiviteitenlogboek

Obsidian Sync bevat een gedetailleerd synchronisatielogboek dat alle interacties tussen je lokale bestanden en de externe kluis bijhoudt. Het logboek toont uploads, downloads, verwijderingen en eventuele problemen zoals samenvoegingsconflicten of verbindingsproblemen.

**Het activiteitenlogboek openen:**
- Klik op het synchronisatiestatuspictogram in de statusbalk
- Ga naar **[[Instellingen]] → Sync → Synchronisatieactiviteit**
- Gebruik **Opdrachtenpalet → Sync: Open activiteitsverslag**

Het logboek biedt tijdstempels en details voor elke synchronisatiebewerking, wat handig is bij het oplossen van synchronisatieproblemen.

> [!warning] Het synchronisatielogboek blijft niet bewaard nadat Obsidian is gesloten. Als je een probleem tegenkomt, zorg er dan voor dat je het logboek kopieert _voordat_ je de app sluit.

Het logboek categoriseert berichten in de volgende typen:

- [[#Algemene berichten]]
- [[#Foutberichten]]
- [[#Overgeslagen berichten]]
- [[#Accountberichten]]

Je kunt het synchronisatielogboek filteren op **Alle**, **Fouten**, **Overgeslagen** en **Samenvoegingsconflicten**. Daarnaast kun je het synchronisatielogboek doorzoeken met het zoekveld in het Sync-venster.

> [!summary] Hieronder hebben we enkele veelvoorkomende berichten opgenomen die je mogelijk bent tegengekomen. De lijst is niet uitputtend. Als je een probleem ervaart en een synchronisatielogboekbericht hebt waar je niet zeker over bent, [[Hulp en ondersteuning#Contact opnemen met Obsidian-ondersteuning|neem contact op met Obsidian-ondersteuning]].

### Algemene berichten

Dit zijn veelvoorkomende dagelijkse berichten die je kunt tegenkomen.

**Connecting to server**  
Obsidian probeert verbinding te maken met de [[Obsidian Sync/Beveiliging en privacy#Waar kan ik mijn huidige Sync-server vinden en waar wordt deze gehost?|Sync-server]] van je externe kluis.

**Connected to server. Detecting changes...**  
Obsidian heeft een verbinding tot stand gebracht en vergelijkt de lokale kluis met de externe kluis om te bepalen of er wijzigingen nodig zijn.

> [!info] Dit bericht kan ook wijzen op andere mogelijke Sync-problemen. Als je het herhaaldelijk ziet en denkt dat er nog items gesynchroniseerd moeten worden, [[Hulp en ondersteuning#Contact opnemen met Obsidian-ondersteuning|neem contact op met Obsidian-ondersteuning]].

**Fully synced**  
- De lokale en externe kluizen zijn volledig gesynchroniseerd.

**Merging conflicted file**  
Er is een conflict gedetecteerd tijdens het synchroniseren en het bestand is samengevoegd in plaats van overschreven. Zie [[Problemen oplossen met Obsidian Sync#Conflictoplossing|conflictoplossing]] voor meer informatie. Als de samenvoeging ongewenst is, kun je eerdere versies herstellen via [[Versiegeschiedenis]] of [[Bestanden herstellen]].

**Rejected server change**  
De wijzigingen op de externe kluis zijn ouder dan de versie op je lokale apparaat, dus de lokale versie wordt behouden en de externe wijziging wordt genegeerd.

### Foutberichten

Dit zijn berichten die een fout bij het synchroniseren van een bestand beschrijven.

**Out of memory**  
Dit probleem treedt meestal op bij mobiele apparaten wanneer er onvoldoende opslagruimte of geheugen beschikbaar is om een bestand te downloaden. Het komt het vaakst voor bij grote bestanden, zoals video's.

### Overgeslagen berichten

Dit zijn berichten die beschrijven wat er is overgeslagen, en mogelijk waarom.

**Unable to download file with illegal name**

Het bestand bevat een [speciaal teken of naamgevingsconventie](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) die niet is toegestaan op het ontvangende besturingssysteem. Voor het gemak kun je het bestand op het bronapparaat hernoemen om alle speciale tekens te verwijderen behalve `-` en `_`.

Let op dat dit ook bestanden met meerdere punten `.` in hun naam op Android-apparaten omvat.

### Accountberichten

Dit zijn berichten gerelateerd aan een wijziging in je abonnement of account.

**Vault limit exceeded**  
Je account heeft de [[Veelgestelde vragen#Hoe groot kan elke externe kluis zijn|maximale opslaggrootte]] overschreden. Bijlagen en versiegeschiedenis dragen bij aan deze grootte. Zelfs als je kluis kleiner lijkt dan de limiet, kunnen oudere versies en bestanden deze overschrijden.

Om de kluisgrootte te verminderen:
1. Open **[[Instellingen]] → Sync**.
2. Gebruik de opties onder **Kluisgrootte over de limiet** om grote bestanden te verwijderen.

**Vault not found**  
`{"res":"err","msg":"Vault not found."}`

Deze fout kan optreden in de volgende gevallen:

1. De kluis is verwijderd vanaf een ander apparaat.
2. Het synchronisatieabonnement was meer dan 30 dagen inactief, waardoor de externe kluis is verwijderd.
3. Het abonnement is geannuleerd of terugbetaald, wat heeft geleid tot het verwijderen van de externe kluis.

In deze gevallen moet je [[Obsidian Sync instellen#Verbinding verbreken met een externe kluis|de verbinding met de externe kluis verbreken]] en [[Obsidian Sync instellen#Een nieuwe externe kluis aanmaken|een nieuwe externe kluis aanmaken]], waarbij je ervoor zorgt dat je lokale gegevens behouden blijven.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**  
Je account heeft nu een volledig verlopen status omdat we de betaling niet konden verwerken.

Om Obsidian Sync te blijven gebruiken, moet je je opnieuw abonneren via [je account](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync heeft gedetecteerd dat je momenteel niet bent ingelogd. Je moet opnieuw inloggen in de app in het gedeelte [[Instellingen#Algemeen#Account|Account]] van **[[Instellingen]]**.

In sommige gevallen kan een community-plugin ook voorkomen dat Obsidian Sync je inlogstatus kan bevestigen. Schakel **[[Plug-inbeveiliging#Beperkte modus|Beperkte modus]]** in en probeer het opnieuw.

### Netwerkberichten

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync heeft de verbinding met de Sync-server verbroken om een onbekende reden. Sync zal periodiek proberen opnieuw verbinding te maken met de server.

Op iOS wordt dit bericht weergegeven als de volgende fout:
`Null is not an object (evaluating 'this.socket.send')`

Dit betekent exact hetzelfde als het bericht `Unable to connect to server`, en is op geen enkele manier een indicatie dat er iets anders mis is.
