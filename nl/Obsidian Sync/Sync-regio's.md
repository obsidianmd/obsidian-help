---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Verplaats je Sync-kluis naar een andere regio.
---
Wanneer je een [[Lokale en externe kluizen|externe kluis]] aanmaakt via [[Introductie tot Obsidian Sync|Obsidian Sync]], worden je gegevens versleuteld en opgeslagen op een van Obsidians regionale Sync-servers. Deze handleiding legt uit hoe je je Sync-kluis naar een andere regionale server kunt verplaatsen.

## Beschikbare regio's

De volgende regio's zijn beschikbaar met Obsidian Sync. We raden aan om **Automatisch** te gebruiken of een locatie dicht bij jou te kiezen om de latentie te verminderen en het synchronisatieproces sneller te maken.

![[Obsidian Sync/Beveiliging en privacy#^sync-geo-regions]]

## Je instellingen vastleggen

Wanneer je een apparaat verbindt met de nieuwe externe kluis, kan Sync de instellingen gebruiken die je op dat moment hebt ingeschakeld. Als je verschillende instellingen op verschillende apparaten gebruikt, leg ze dan vast voordat je begint. Bijvoorbeeld, je synchroniseert misschien geen grote mediabestanden naar je telefoon.

Open op elk apparaat dat de externe kluis gebruikt **[[Instellingen]] → Sync** en leg deze instellingen vast. Een schermafbeelding werkt goed.

- **Selectieve synchronisatie**
- **Kluisconfiguratiesynchronisatie**
- **Uitgesloten mappen**
- Apparaatspecifieke instellingen, zoals **Apparaatnaam** en **Conflictoplossing**

Zie [[Sync-instellingen en selectieve synchronisatie]] voor wat elke instelling doet en welke standaard zijn ingeschakeld.

## Sync-regio wijzigen

Om de regio van je externe kluis te wijzigen, moet je je kluis opnieuw aanmaken op een andere Sync-server. Je kunt ook van regio wisselen door de migratieassistent van [[Sync-versleuteling upgraden]] te gebruiken, als je externe kluis op een oudere versie staat.

> [!danger] Migraties zijn destructief
> 
> **Maak altijd een [[Back-up maken van je Obsidian-bestanden|back-up]] van je kluis voordat je verdergaat met een migratie.**
> 
> Wanneer je een externe kluis migreert, worden je gegevens vervangen. Dit betekent:
> 
> 1. Externe gegevens worden verwijderd van Obsidian-servers en kluisgegevens worden opnieuw geüpload ter vervanging.
> 2. Alle [[Versiegeschiedenis|versiegeschiedenis]] van de kluis gaat verloren.

![[Obsidian Sync instellen#Verbinding verbreken met een externe kluis]]

Als je het [[Abonnementen en opslaglimieten|Standaardabonnement]] hebt, moet je ook [[Obsidian Sync instellen#Een externe kluis verwijderen|je externe kluis verwijderen]] voordat je verdergaat.

![[Obsidian Sync instellen#Een nieuwe externe kluis aanmaken]]

## Je andere apparaten opnieuw verbinden

Nadat de nieuwe externe kluis klaar is met synchroniseren op je eerste apparaat, schakel je elk ander apparaat om dat de oude externe kluis gebruikte. Werk één apparaat tegelijk bij.

1. [[Obsidian Sync instellen#Verbinding verbreken met een externe kluis|Verbreek op het apparaat de verbinding met de oude externe kluis]].
2. [[Obsidian Sync instellen#Een externe kluis synchroniseren op een ander apparaat|Maak verbinding met de nieuwe externe kluis]]. Selecteer nog niet **Beginnen met synchroniseren**.
3. Stel **Selectieve synchronisatie**, **Kluisconfiguratiesynchronisatie** en **Uitgesloten mappen** in zodat ze overeenkomen met de instellingen die je voor dit apparaat hebt vastgelegd.
4. Start Obsidian opnieuw op. Op mobiel of tablet moet je de app mogelijk geforceerd afsluiten.
5. Selecteer **Beginnen met synchroniseren** of **Hervatten** en wacht tot Sync klaar is voordat je naar het volgende apparaat gaat.

Daarnaast kun je [[Obsidian Sync instellen#Een externe kluis verwijderen|je oude externe kluis verwijderen]] zodra je hebt bevestigd dat de overgang naar je nieuwe externe kluis en de bijbehorende regio is voltooid.
