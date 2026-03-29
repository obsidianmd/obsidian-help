---
permalink: sync/plans
publish: true
mobile: true
description: Leer meer over de verschillende abonnementsopties die we beschikbaar hebben voor Obsidian Sync.
---
## Abonnementen

Om je notities te synchroniseren met [[Introductie tot Obsidian Sync|Obsidian Sync]] heb je een abonnement nodig. Je kunt een Sync-abonnement aanschaffen door in te loggen op [je account](https://obsidian.md/account/sync). Zie de [Sync-landingspagina](https://obsidian.md/sync) voor prijzen.

Hieronder staat een vergelijking tussen het Standard-abonnement en het Plus-abonnement:

|                                                                    | Sync Standard | Sync Plus       |
| ------------------------------------------------------------------ | ------------- | --------------- |
| Gesynchroniseerde kluizen                                          | 1             | 10              |
| Maximale bestandsgrootte                                           | 5 MB          | 200 MB          |
| Totale opslag                                                      | 1 GB          | 10 GB tot 100 GB |
| [[Versiegeschiedenis]]                                             | 1 maand       | 12 maanden      |
| Apparaten                                                          | Onbeperkt     | Onbeperkt       |
| [[Samenwerken aan een gedeelde kluis\|Gedeelde kluizen]]          | Ja            | Ja              |

## Opslaglimieten

De hoeveelheid gegevens die je kunt opslaan met [[Introductie tot Obsidian Sync|Obsidian Sync]] hangt af van je abonnement. Met het Sync Plus-abonnement kun je extra opslag aanschaffen tot 100 GB via [je accountdashboard](https://obsidian.md/account/sync). Zie [[Veelgestelde vragen]] voor meer details.

Er is één accountbrede opslaglimiet voor alle notities in al je kluizen. [[Versiegeschiedenis]] en [[bijlagen]] tellen ook mee voor de opslaglimiet van je account.

Wanneer je de opslaglimiet van je account bereikt, stopt de Sync-plug-in met het synchroniseren van bestanden en word je gevraagd om je externe kluis(en) op te ruimen.

### Grote bestanden identificeren en verwijderen

Om grote bestanden in de kluis te identificeren en te verwijderen:

1. Open **[[Instellingen]] → Sync**.
2. Selecteer **Toon grootste bestanden** naast **Kluisgrootte over de limiet**.
	1. Als je **Kluisgrootte over de limiet** niet ziet, betekent dit dat ==je de limiet nog niet hebt bereikt==.
3. Sluit het venster **Toon grootste bestanden**.
4. Verwijder enkele van de grote bestanden die je niet meer nodig hebt.
5. Wacht tot Obsidian Sync de taak heeft voltooid. Dit kan even duren.
6. Open **[[Instellingen]] → Sync**.
7. Selecteer **Opruimen** naast **Kluisgrootte over de limiet**. Dit verwijdert de verwijderde bestanden uit de externe kluis om ruimte vrij te maken.

Nadat het opruimen naar de server is gesynchroniseerd, zou Obsidian Sync weer moeten functioneren.

### Een nieuwe externe kluis aanmaken

Je kunt **een nieuwe externe kluis aanmaken** om grote bestanden uit te sluiten voordat je synchroniseert. De versiegeschiedenis van je bestanden wordt gereset als je een nieuwe externe kluis aanmaakt. Zorg ervoor dat je de versiegeschiedenis van oudere bestanden niet meer nodig hebt voordat je verdergaat.

Volg deze stappen om te synchroniseren naar een nieuwe externe kluis:

1. Open **[[Instellingen]] → Sync**.
2. Selecteer **Beheren** naast **Externe kluis**.
3. Kies **Nieuwe kluis aanmaken** en volg de stappen om deze aan te maken. Als je geen kluizen meer over hebt, moet je mogelijk eerst de huidige externe kluis [[Obsidian Sync instellen#Verbinding verbreken met een externe kluis|loskoppelen]] en [[Obsidian Sync instellen#Een externe kluis verwijderen|verwijderen]].
4. Stel uitgesloten bestanden in voordat je begint met synchroniseren naar de nieuwe externe kluis.
5. Herstart Obsidian om je wijzigingen toe te passen.
6. Open **[[Instellingen]] → Sync**.
7. Selecteer Hervatten om te beginnen met synchroniseren naar de nieuwe externe kluis.

De nieuwe externe kluis zou kleiner moeten zijn dan de vorige kluis, vanwege het ontbreken van versiegeschiedenis en uitgesloten bestanden.

## Je abonnement upgraden

Je kunt je abonnement upgraden door in te loggen op [je accountdashboard](https://obsidian.md/account/sync). Van daaruit kun je je abonnement upgraden van Sync Standard naar Sync Plus, en de opslag verhogen tot 100 GB.

## Je abonnement downgraden

Als je je Sync-abonnement wilt downgraden maar je opslaggebruik de limiet van het nieuwe abonnement overschrijdt, moet je ruimte vrijmaken in je externe kluis. Momenteel is er geen directe methode om snel specifieke bestanden uit een bestaande externe kluis te verwijderen. Dit komt doordat bijlagen tot twee weken in de versiegeschiedenis worden bewaard, en versiegeschiedenis meetelt voor je opslaglimiet.

De snelste manier om je Sync-opslaggebruik te verminderen is een nieuwe externe kluis aanmaken met bijlagen uitgeschakeld, en vervolgens de oude externe kluis die de opslaglimieten overschrijdt verwijderen. Houd er rekening mee dat je hierdoor je versiegeschiedenis verliest.

Als je downgradet van Sync Plus naar Sync Standard, moet je ook het aantal aanwezige kluizen terugbrengen tot één voordat de downgrade wordt toegestaan.

### Versiegeschiedenis behouden

Bijlagen worden tot twee weken bewaard in je [[Versiegeschiedenis|versiegeschiedenis]]. Als je van plan bent om binnenkort te downgraden, kun je beginnen met het verwijderen van bijlagen uit je lokale kluis.

Na twee weken worden deze opgeruimd uit de externe kluis en tellen ze niet langer mee voor je opslaglimiet. Op dat moment kun je je abonnement downgraden terwijl de versiegeschiedenis voor andere bestandstypen, zoals Markdown-bestanden, behouden blijft.
