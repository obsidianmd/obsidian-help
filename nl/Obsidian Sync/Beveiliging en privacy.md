---
permalink: sync/security
publish: true
mobile: false
description: Leer meer over de beveiligings- en privacyoverwegingen voor Obsidian Sync.
---
## Versleuteling

Voor je veiligheid versleutelt [[Introductie tot Obsidian Sync|Obsidian Sync]] je [[Lokale en externe kluizen|externe kluis]] en alle communicatie met de servers van Obsidian.

Wanneer je een nieuwe externe kluis aanmaakt, heb je twee opties:

- **End-to-end-encryptie (standaard)** biedt de sterkste beveiliging maar vereist dat je je versleutelingswachtwoord veilig bewaart. Dit garandeert dat niemand — zelfs niet het Obsidian-team — toegang heeft tot je notities.
- **Standaardversleuteling** gebruikt een versleutelingssleutel die door Obsidian wordt beheerd om je gegevens te beschermen tijdens transport en op onze server.

We raden end-to-end-encryptie aan voor alle gebruikers omdat dit de meest privé en veilige optie is. Let er echter op dat als je je versleutelingswachtwoord vergeet of kwijtraakt, je gegevens voor altijd versleuteld en onbruikbaar blijven. We kunnen je wachtwoord of versleutelde gegevens niet voor je herstellen.

Je keuze is alleen van toepassing op je externe kluis. Obsidian versleutelt je lokale kluis niet.

### Wat betekent end-to-end-encryptie?

End-to-end-encryptie betekent dat de gegevens worden versleuteld vanaf het moment dat ze je apparaat verlaten, en alleen kunnen worden ontsleuteld met je versleutelingssleutel zodra ze terug zijn op een van je apparaten.

We kunnen je gegevens niet lezen. Potentiële afluisteraars evenmin, zoals je internetprovider.

In het zeldzame geval van een volledige serverinbreuk blijven je gegevens versleuteld — niemand kan je bestanden ontsleutelen zonder je wachtwoord te kennen.

### Wat zijn de risico's van het gebruik van standaardversleuteling?

Standaardversleuteling is fundamenteel minder veilig dan end-to-end-encryptie, maar het kan een handige optie zijn als je niet verwacht dat de gegevens die je synchroniseert volledig privé hoeven te zijn. Bijvoorbeeld, als je gesynchroniseerde kluis [[Inleiding tot Obsidian Publish|gepubliceerd]] is op een openbare website zoals deze Helpsite, dan is end-to-end-encryptie niet noodzakelijk.

Standaardversleuteling is dezelfde versleutelingsmethode die wordt gebruikt door cloudopslagbedrijven en software-as-a-service-platformen, zoals Google Docs, Dropbox en iCloud (zonder Geavanceerde Gegevensbescherming). Je versleutelingssleutel wordt gegenereerd door de app en gebruikt om je gegevens te beschermen tijdens transport en op de server. Omdat de versleutelingssleutel op bedrijfsservers wordt opgeslagen, kan deze worden gebruikt om je gegevens te ontsleutelen, bijvoorbeeld in het geval dat het bedrijf onderworpen is aan een huiszoekingsbevel, of in het geval dat je toegang wilt tot je gegevens via een webbrowser.

End-to-end-encryptie garandeert dat Obsidian nooit toegang heeft tot je gegevens en moet altijd worden gebruikt om gegevens te synchroniseren die je volledig privé en veilig wilt houden.

### Welke versleuteling gebruiken jullie?

Voor gegevensbeveiliging implementeren we industriestandaard versleutelingsprotocollen. Specifiek gebruiken we [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), de sterkste versleutelingsstandaard, breed ingezet in contexten zoals online bankieren. Het versleutelingsproces omvat de volgende technische details:

- **Sleutelafleidingsfunctie:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) met salt
- **Versleutelingsalgoritme:** AES-256 met [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Kan ik verifiëren dat mijn gegevens end-to-end versleuteld zijn?

Ja. Zie onze handleiding, [hoe je de end-to-end-encryptie van Obsidian Sync verifieert](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Deze handleiding biedt stapsgewijze instructies om zonder vertrouwen te hoeven stellen de end-to-end-encryptie van je gegevens te verifiëren wanneer deze worden verzonden en ontvangen via Sync-servers.

### Heeft Obsidian een onafhankelijke beveiligingsaudit doorlopen?

Ja. Obsidian is onafhankelijk geaudit. Bezoek onze [Beveiligingspagina](https://obsidian.md/security) om auditrapporten te bekijken. Regelmatige audits door externe beveiligingsbedrijven zorgen ervoor dat de code en procedures van Obsidian aan de hoogste beveiligingsstandaarden voldoen.

### Wat gebeurt er als ik mijn versleutelingswachtwoord vergeet?

Als je ooit je versleutelingswachtwoord kwijtraakt of vergeet, kun je geen extra kluizen meer verbinden met je externe kluis. Aangezien het versleutelingswachtwoord nergens wordt opgeslagen, is het voor altijd verloren.

Je gegevens zijn echter doorgaans veilig lokaal opgeslagen op elk van je apparaten.

Om Obsidian Sync te blijven gebruiken, raden we aan een volledige herinrichting uit te voeren zodat je nieuwe apparaten kunt toevoegen aan je Sync-systeem:

1. Maak een volledige kluisback-up op je primaire apparaat, voor het geval er iets misgaat. Dit kan zo simpel zijn als een kopie maken van de kluismap, of een zipbestand maken van de kluis.
2. Verbreek de verbinding met de externe kluis op elk van je apparaten. Dit kan door te gaan naar **[[Instellingen]] → Synchronisatie → Externe kluis kiezen → Verbinding verbreken**.
3. [[Obsidian Sync instellen#Een nieuwe externe kluis aanmaken|Maak een nieuwe externe kluis aan]] op je primaire apparaat vanaf dezelfde instellingenpagina. Optioneel kun je de vorige externe kluis verwijderen aangezien je het wachtwoord er toch niet voor hebt. (Mogelijk moet je de vorige externe kluis verwijderen als je aan de [[Veelgestelde vragen#Hoeveel externe kluizen kan ik hebben?|kluislimiet]] zit)
4. Wacht tot je primaire apparaat gesynchroniseerd is. Let op de synchronisatie-indicator rechtsonder in het scherm totdat er een groen vinkje verschijnt.
5. Verbind elk van je apparaten met dezelfde nieuw aangemaakte externe kluis. Bij het verbinden krijg je een waarschuwing over het samenvoegen van kluizen te zien, dit is verwacht en je kunt doorgaan. Wacht tot elk apparaat volledig gesynchroniseerd is voordat je verder gaat met het volgende. Dit verkleint de kans op problemen.
6. Nu zouden al je apparaten verbonden moeten zijn met de nieuwe externe kluis.

## Hosting

### Waar hosten jullie de servers voor Obsidian Sync?

Onze datacenters, aangedreven door [DigitalOcean](https://www.digitalocean.com), bieden geo-regionale hostingopties voor externe kluizen op de volgende locaties:

> [!abstract] Sync-regio's
> **Automatisch**: Je datacenter wordt gekozen op basis van je IP-locatie, op het moment dat je het voor het eerst instelt.
> 
> **Azië**: Singapore
> **Europa**: Frankfurt, Duitsland
> **Noord-Amerika**: San Francisco, VS
> **Oceanië**: Sydney, Australië
^sync-geo-regions

### Waar kan ik mijn huidige Sync-server vinden en waar wordt deze gehost?

Volg deze stappen om je Obsidian Sync-server te lokaliseren:
1. Ga naar **[[Instellingen]]** → **Synchronisatie** → **Kopieer debuginformatie**.
2. Plak de gekopieerde informatie in een notitie of bestand.
3. Zoek een regel vergelijkbaar met: `Host server: wss://sync-xx.obsidian.md`

Deze regel geeft de server aan waar je externe kluis wordt gehost. Voor meer details over de serverlocaties en uptime, bezoek onze [statuspagina](https://status.obsidian.md/).

## Netwerk en toegang

### Toegang tot Obsidian Sync beheren op je netwerk

Om de toegang tot Obsidian Sync op je netwerk te reguleren, moet je de volgende domeinen beheren:

`sync-xx.obsidian.md`

De `xx` in dit geval vertegenwoordigt een nummer van `1 - 100`.

> [!tip] Als je firewallsysteem het ondersteunt, raden we aan om `sync-*.obsidian.md` op de allowlist te zetten om rekening te houden met de voortdurende groei van subdomeinnummers.

## Beperkingen

Obsidian Sync is ontworpen om je notities privé en veilig te houden. Om snelle, betrouwbare synchronisatie en efficiënte opslag op meerdere apparaten te bieden, maken we bewuste afwegingen in hoe versleuteling wordt toegepast.

### Deterministische bestandshash-versleuteling

We versleutelen bestandshashes deterministisch: dezelfde bestandsinhoud, met dezelfde versleutelingssleutel en salt, produceert altijd dezelfde versleutelde hash op de server. Dit helpt Sync om duplicaten te detecteren en het opnieuw uploaden of opslaan van identieke gegevens te vermijden, wat bandbreedte en externe opslag bespaart, vooral in versiegeschiedenis of wanneer grote bestanden herhaald worden.

Echter, als een aanvaller een Sync-server compromitteert en een aparte manier heeft om een gebruiker te dwingen bestanden naar keuze te uploaden, dan zou de aanvaller de gebruiker specifieke bestanden kunnen laten uploaden en kunnen bepalen of het bestand overeenkomt met een bestand dat de gebruiker eerder heeft geüpload.

### Geen cryptografische binding tussen pad en inhoud

Sommige metadata is niet end-to-end versleuteld: welk apparaat een bestand heeft geüpload of verwijderd, wanneer het is geüpload, en de *koppeling* tussen versleutelde bestandspaden en versleutelde inhoud. Deze gegevens zijn leesbaar voor de server zodat deze wijzigingen kan routeren, de versiegeschiedenis voor een bestand kan bepalen en apparaten gesynchroniseerd kan houden.

Als een Sync-server gecompromitteerd zou worden, zou een aanvaller met die koppeling kunnen knoeien, waardoor de inhoud van een versleuteld bestand onder een ander bestandspad wordt afgeleverd. Dit onthult je platte-tekstgegevens niet — die blijven versleuteld.
