---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Je hebt Obsidian Sync aangeschaft en bent klaar om te beginnen. Deze handleiding helpt je bij het instellen en aanpassen van je Obsidian Sync-instellingen voor dagelijks gebruik.
---
Je hebt Obsidian Sync aangeschaft en bent klaar om aan de slag te gaan. Deze handleiding helpt je om je Obsidian Sync-instellingen in te stellen en aan te passen voor dagelijks gebruik.

- **Nieuw bij Obsidian Sync?** Zie: [[#Obsidian Sync voor de eerste keer instellen]]
- **Een tweede apparaat verbinden?** Zie: [[#Een externe kluis synchroniseren op een ander apparaat]]
- **Wijzigingen nodig?** Zie: [[#Je externe kluizen beheren]]

## Obsidian Sync voor de eerste keer instellen

In dit gedeelte maak je een nieuwe [[Lokale en externe kluizen|externe kluis]] aan en verbind je deze met een bestaande lokale kluis. Je hoeft hiervoor geen nieuwe, lege lokale kluis aan te maken om Obsidian Sync te gebruiken.

> [!info] Staat je huidige kluis in een iCloud-, OneDrive-, Dropbox- of andere synchronisatiemap? Zo **ja**, of als je het **niet zeker weet**, lees dan [[Veelgestelde vragen#Kan ik synchronisatie van derden gebruiken samen met Obsidian Sync?|dit]] en [[Overstappen naar Obsidian Sync]] voordat je verdergaat.

**Vereisten**

- Een Obsidian-account. Als je er geen hebt, [schrijf je nu in](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Een actief Obsidian Sync-[[Abonnementen en opslaglimieten|abonnement]]. Als je er geen hebt, neem dan een abonnement via [je accountdashboard](https://obsidian.md/account/sync).
- **Aanbevolen**: Een [[Back-up maken van je Obsidian-bestanden|back-upsysteem]] voor je Obsidian-bestanden. Een synchronisatiedienst is geen back-up.

### Inloggen met je Obsidian-account

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk **Algemeen**.
3. Selecteer onder **Account → Uw account** de optie **Inloggen**.
4. Voer bij **E-mail** je e-mailadres in.
5. Voer bij **Wachtwoord** je wachtwoord in.
6. Selecteer **Inloggen**.

### Obsidian Sync activeren

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk onder **Opties** de optie **Ingebouwde plug-ins**.
3. Schakel **Sync** in.

### Een nieuwe externe kluis aanmaken

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk **Sync**.
3. Selecteer naast **Externe kluis** de optie **Kiezen**.
4. Selecteer **Nieuwe kluis aanmaken**.
5. Voer bij **Kluisnaam** de naam van de externe kluis in.
6. Kies bij **Regio** je server[[Obsidian Sync instellen#Regionale synchronisatieservers|regio]] voor je externe kluis.
7. Kies bij **Wachtwoord voor versleuteling** een wachtwoord voor je kluis. Hiermee maak je een end-to-end-versleutelde kluis aan. Het kluiswachtwoord staat los van je Obsidian-account en kan voor elke kluis verschillend zijn. Raadpleeg [[Beveiliging en privacy]] voor meer informatie.
8. Selecteer **Aanmaken**.

### Verbinden met een externe kluis

1. Selecteer **Verbinden** naast je zojuist aangemaakte kluis.
2. Voer het wachtwoord in dat je hebt geconfigureerd voor de kluis in het veld **Wachtwoord voor versleuteling** als je hebt gekozen voor [[Obsidian Sync/Beveiliging en privacy#Wat betekent end-to-end-encryptie?|end-to-end-encryptie]].
3. Selecteer **Kluisverleuteling openen**.
4. **Start de synchronisatie nog niet.** Controleer je synchronisatie-instellingen bij [[#Obsidian Sync-instellingen aanpassen|Obsidian Sync-instellingen aanpassen]].
    - Als je direct wilt beginnen met synchroniseren, ga dan verder naar [[#Beginnen met synchroniseren met Obsidian Sync|beginnen met synchroniseren met Obsidian Sync]].
5. Als je dat nog niet hebt gedaan, sluit het pop-upvenster dat je vraagt om **Mappen uit te sluiten** en **Synchronisatie te starten**. Ga verder naar de volgende stap.

#### Obsidian Sync-instellingen aanpassen

1. Navigeer indien nodig naar **[[Instellingen]]** → **Sync**.
2. Voeg een apparaatnaam toe als die nog niet is ingesteld, zodat je synchronisatieverslagen gemakkelijker kunt lezen!
3. Schakel de instellingen onder **Selectieve synchronisatie** en **Kluisconfiguratiesynchronisatie** in of uit om aan te geven welke items gesynchroniseerd moeten worden naar en van de externe kluis.
    - **Opmerking**: Als je onlangs de verbinding met een externe kluis hebt verbroken en opnieuw verbindt zonder de applicatie opnieuw te starten, kunnen sommige instellingen al ingeschakeld zijn.
4. Als je instellingen hebt gewijzigd, start Obsidian dan volledig opnieuw op.
5. Ga na het opnieuw opstarten van Obsidian terug naar **[[Instellingen]]** → **Sync**.

#### Beginnen met synchroniseren met Obsidian Sync

Als je begint met synchroniseren nadat je verbinding hebt gemaakt met een externe kluis, zie je een knop **Synchronisatie starten**. Selecteer deze knop om te beginnen met synchroniseren.

Als je begint met synchroniseren nadat je de instellingen van Obsidian Sync hebt aangepast en de applicatie opnieuw hebt gestart, zie je een knop **Hervatten** in de Sync-instellingen. Selecteer deze knop om te beginnen met synchroniseren.

> [!done] Synchronisatiestatus
> Wanneer Obsidian Sync klaar is, verschijnt er een groene cirkel met een vinkje ![[obsidian-icon-sync-synced.svg#icon]] in de rechteronderhoek (desktop) of in de rechter zijbalk (mobiel). Het synchronisatieverslag toont ook "Volledig gesynchroniseerd" als een van de meest recente berichten.
>
> Raadpleeg [[Statuspictogram en berichten]] voor meer details over synchronisatiestatussen.
^obsidian-sync-status

Om andere apparaten te verbinden met je zojuist aangemaakte en gesynchroniseerde externe kluis, ga verder naar [[Obsidian Sync instellen#Een externe kluis synchroniseren op een ander apparaat|Een externe kluis synchroniseren op een ander apparaat]].

Voor meer informatie over instellingen en bestanden, ga verder naar [[Sync-instellingen en selectieve synchronisatie]].

## Een externe kluis synchroniseren op een ander apparaat

In dit gedeelte heb je al een externe kluis aangemaakt en gegevens ernaar geüpload. Nu wil je je andere apparaten ermee verbinden.

**Vereisten**
- Een Obsidian-account. Als je er geen hebt, [schrijf je nu in](https://obsidian.md/account#mode=signup).
- Een actief Obsidian Sync-abonnement. Als je er geen hebt, neem dan een abonnement via [je accountdashboard](https://obsidian.md/account).
- Sync ingeschakeld in de [[Ingebouwde plug-ins]]-instellingen.
- Een actieve externe kluis. Als je er nog geen hebt gemaakt, maak dan eerst een [[Obsidian Sync instellen#Een nieuwe externe kluis aanmaken|externe kluis]] aan.
- **Aanbevolen**: Een [[Back-up maken van je Obsidian-bestanden|back-upsysteem]] voor je Obsidian-bestanden op je meestgebruikte apparaat. Een synchronisatiedienst is geen back-up.

### Je kluis synchroniseren vanuit de kluiskiezer

Als je Obsidian pas hebt geïnstalleerd en het programma opent, krijg je de [[Kluizen beheren|kluiskiezer]] te zien. Om een nieuwe lokale kluis te maken vanuit de inhoud van een externe kluis, voer je de volgende stappen uit.

1. Open Obsidian (ervan uitgaande dat dit de eerste keer is dat je het opent)
2. Selecteer een van de opties afhankelijk van je installatie:
	1. **Desktop**: Kies in het gedeelte Verbinden met Obsidian Sync de optie **Installatie**
	2. **Mobiel/Tablet**: **Obsidian Sync instellen**
3. Log in met je Obsidian-gebruikersaccount
	1. Als [[Tweefactorauthenticatie|2FA]] is ingesteld, voer dan je 2FA-code in.
4. Je wordt gevraagd welke externe kluis je wilt synchroniseren met dit apparaat. Selecteer **Verbinden**.
5. Je wordt gevraagd een naam te kiezen voor de lokale kluis die op het apparaat wordt aangemaakt om deze gegevens op te slaan. Voer een naam naar keuze in.
	1. Als je [[Obsidian URI]]'s gebruikt, gebruik dan dezelfde naam als de lokale kluis op je andere apparaat.
6. Selecteer **Aanmaken**.
7. Het venster voor externe kluizen verschijnt even terwijl Obsidian Sync verbinding maakt met je server en het abonnement valideert. Vervolgens krijg je een venster *Verbinding instellen* te zien.
	1. Het is sterk aanbevolen om dit venster te sluiten of omlaag te vegen en eerst je [[#Obsidian Sync-instellingen aanpassen|Obsidian Sync-instellingen aan te passen]].
	2. Als je synchronisatie-instellingen wijzigt, herlaad of herstart Obsidian dan.

### Je kluis synchroniseren vanuit Obsidian-instellingen

Als je al een lokale kluis op dit apparaat hebt aangemaakt en deze lokale kluis wilt verbinden met een externe kluis, zijn de instructies zeer vergelijkbaar met [[#Obsidian Sync voor de eerste keer instellen]].

![[Obsidian Sync instellen#Inloggen met je Obsidian-account]]

![[Obsidian Sync instellen#Obsidian Sync activeren]]

#### Verbinden met een externe kluis

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk **Sync**.
3. Klik naast **Externe kluis kiezen** op **Kiezen**.
4. Klik op **Verbinden** naast de externe kluis waarmee je wilt verbinden.
5. Voer bij **Wachtwoord voor versleuteling** het wachtwoord voor je kluis in, als je er een hebt.
6. Je wordt gevraagd om de synchronisatie te starten. Het is aanbevolen om te wachten en eerst je synchronisatie-instellingen aan te passen. Als je de volledige kluis naar het apparaat wilt synchroniseren zoals deze is, kun je **Synchronisatie starten** selecteren.

> [!warning] Als de kluis op je apparaat al notities bevat (niet aanbevolen), word je gewaarschuwd dat deze notities worden samengevoegd voordat je verdergaat. Conflicten worden opgelost via [[Problemen oplossen met Obsidian Sync#Conflictoplossing|de conflictoplossing van Sync]].

![[Obsidian Sync instellen#Obsidian Sync-instellingen aanpassen]]

![[Obsidian Sync instellen#Beginnen met synchroniseren met Obsidian Sync]]

## Je externe kluizen beheren

Je hebt een externe kluis aangemaakt en er verbinding mee gemaakt. Mogelijk heb je deze externe kluis ook gesynchroniseerd naar meerdere apparaten. Dit gedeelte behandelt enkele andere veelvoorkomende instructies die je nodig kunt hebben bij het beheren van deze externe kluis.

### Verbinding verbreken met een externe kluis

1. Open de **[[Instellingen]]** van Obsidian.
2. Selecteer **Sync** in de zijbalk.
3. Klik op de knop **Verbinding verbreken** naast Externe kluizen.

Je bent nu losgekoppeld van de externe kluis en synchroniseert niet meer op dit apparaat.

### Een externe kluis verwijderen

> [!tip] Het verwijderen van een externe kluis verwijdert geen lokale gegevens op je apparaat.

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk **Sync**.
3. Selecteer **Beheren** naast Externe kluizen. Er opent een venster met je lijst van externe kluizen.
4. Selecteer het prullenbakpictogram ![[lucide-trash-2.svg#icon]] naast de externe kluis die je wilt verwijderen.
5. Bevestig de verwijdering door de rode knop **Verwijderen** te selecteren.
6. Je externe kluis is verwijderd.

> [!info] Als er geen prullenbakpictogram zichtbaar is, moet je mogelijk eerst de verbinding met de externe kluis verbreken. Selecteer na het verbreken van de verbinding de knop **Kiezen** om de lijst van externe kluizen te openen.

### Regionale synchronisatieservers

Met Obsidian Sync kun je de hostinglocatie voor je externe kluis kiezen. Als je versie `1.4.16` of ouder van Obsidian gebruikt, wordt de locatie automatisch voor je gekozen.

Als je niet zeker weet in welke regio je huidige kluis zich bevindt, raadpleeg dan [[Obsidian Sync/Beveiliging en privacy#Waar kan ik mijn huidige Sync-server vinden en waar wordt deze gehost?|Waar kan ik mijn huidige Sync-server vinden en waar wordt deze gehost?]] voor hulp.

![[sync-regional-sync-servers.png#interface|300]]

Nadat je een locatie hebt geselecteerd, kan je datacenter **niet** worden verplaatst naar een andere server zonder je gegevens opnieuw te uploaden. Om van regio te wisselen, volg de [[Sync-regio's|handleiding voor Sync-regio's van kluizen]].

![[Obsidian Sync/Beveiliging en privacy#^sync-geo-regions]]

## Volgende stappen

Hier zijn enkele suggesties voor documenten om hierna te lezen.

- Ontdek meer over [[Sync-instellingen en selectieve synchronisatie|het selecteren van bestanden en instellingen om te synchroniseren]].
- Leer wat er gebeurt als je externe kluis [[Versiegeschiedenis|vol raakt]].
- [[Samenwerken aan een gedeelde kluis]] met een andere Obsidian Sync-gebruiker.
- Bekijk de [[Veelgestelde vragen|Sync-FAQ]] voor antwoorden op veelgestelde vragen.
