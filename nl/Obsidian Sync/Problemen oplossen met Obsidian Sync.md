---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Deze pagina bevat een overzicht van ongebruikelijke problemen die u kunt tegenkomen met Obsidian Sync en hoe u deze kunt oplossen.
---
Deze pagina bevat ongewone problemen die je kunt tegenkomen met [[Introductie tot Obsidian Sync|Obsidian Sync]] en hoe je ze kunt oplossen. Voordat je verdergaat, raden we aan de pagina's [[Statuspictogram en berichten]] en [[Veelgestelde vragen]] te bekijken.

## Algemeen

### Conflictoplossing

Een conflict ontstaat wanneer je hetzelfde bestand op twee of meer apparaten wijzigt voordat ze synchroniseren. Je bewerkt bijvoorbeeld een notitie op je computer. Voordat die wijziging wordt geüpload, wijzig je dezelfde notitie ook op je telefoon.

Conflicten komen vaker voor wanneer je offline werkt. Er zijn meer wijzigingen en langere periodes tussen synchronisaties, wat de kans op conflicten vergroot.

#### Hoe Obsidian Sync conflicten afhandelt

Wanneer Obsidian Sync een conflict detecteert, hangt het resultaat af van het bestandstype:

- **Markdown-bestanden**: Obsidian Sync voegt de wijzigingen samen met behulp van Google's [diff-match-patch](https://github.com/google/diff-match-patch)-algoritme.
- **Andere bestandstypen**: Voor alle andere bestanden, inclusief canvassen, gebruikt Obsidian een "laatst gewijzigd wint"-benadering. De meest recent gewijzigde versie vervangt eerdere versies.

Bij conflicten in Obsidian-instellingen, zoals plug-ininstellingen, voegt Obsidian Sync de JSON-bestanden samen. Het past sleutels uit het lokale JSON-bestand toe bovenop het externe JSON-bestand.

#### Opties voor conflictoplossing

Vanaf Obsidian 1.9.7 kun je kiezen hoe conflicten worden afgehandeld. Om deze instelling te configureren:

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk **Sync**.
3. Kies onder **[[Sync-instellingen en selectieve synchronisatie#Conflictoplossing|Conflictoplossing]]** je gewenste optie:
   - **Automatisch samenvoegen** (standaard): Obsidian Sync combineert alle wijzigingen van verschillende apparaten in één bestand. Dit bewaart alle bewerkingen, maar kan soms dubbele tekst of opmaakproblemen veroorzaken. Je moet deze handmatig corrigeren.
   - **Conflictbestand maken**: Wanneer Obsidian conflicterende wijzigingen detecteert, maakt het een apart conflictbestand aan in plaats van automatisch samen te voegen. Je kunt dan beide versies bekijken en ze zelf samenvoegen. Dit geeft je volledige controle over het eindresultaat.

> [!warning]+ Configureer op alle apparaten
> Instellingen voor conflictoplossing zijn apparaatspecifiek. Je moet je gewenste optie op elk van je apparaten configureren. Dit zorgt voor hetzelfde gedrag op al je gesynchroniseerde apparaten.

**Naamgevingspatroon voor conflictbestanden**

Wanneer je de optie "Conflictbestand maken" gebruikt, maakt Obsidian een nieuw bestand aan met het volgende naamgevingspatroon:

```
originele-notitienaam (Conflicted copy apparaatnaam JJJJMMDDUURR).md
```

Als er bijvoorbeeld een conflict optreedt in een notitie genaamd `Vergadernotities.md`, kan het conflictbestand de volgende naam krijgen:

```
Vergadernotities (Conflicted copy MijnMacBook2 202411281430).md
```

Het conflictbestand bevat de wijzigingen van het apparaat waarop het conflict werd gedetecteerd. Het originele bestand behoudt de externe versie. Je kunt beide bestanden vergelijken en de inhoud handmatig samenvoegen.

> [!info]+ Controleer het synchronisatielogboek
> Om te controleren wanneer conflicten hebben plaatsgevonden, open het [[Statuspictogram en berichten#Synchronisatieactiviteit|synchronisatielogboek]]. Filter op "Samenvoegingsconflicten" of zoek naar "Conflict".

### Sync heeft een notitie verwijderd die ik net op twee apparaten heb aangemaakt

Obsidian Sync probeert doorgaans [[#Conflictoplossing|conflicten op te lossen]] door conflicterende notities op verschillende apparaten samen te voegen. Er kunnen echter problemen optreden voor gebruikers die automatisch notities aanmaken of wijzigen bij het opstarten. Dit geldt onder andere voor [[Dagnotities]] of bij gebruik van de community-plugin [Templater](https://github.com/SilentVoid13/Templater).

Als je lokaal een notitie aanmaakt op één apparaat en Sync binnen enkele minuten een externe versie van diezelfde notitie downloadt, behoudt Sync de externe versie zonder de twee samen te voegen. In dit geval kun je de lokale versie herstellen met [[Bestanden herstellen]].

### Sync synchroniseert mijn plug-ins en instellingenupdates niet

Obsidian [[Veelgestelde vragen#Does Obsidian Sync live-reload my settings?|herlaadt niet alle instellingen live]]. Nadat je instellingen of plug-ins hebt bijgewerkt, moet je Obsidian op andere apparaten opnieuw opstarten om de wijzigingen te zien. Op mobiele apparaten moet je de app mogelijk geforceerd afsluiten.

> [!example]- Een thema wijzigen
> - Op je primaire apparaat (meestal een computer) wijzig je je thema terug naar het standaardthema vanuit een aangepast thema.
> - Het synchronisatielogboek bevestigt dat de bijgewerkte bestanden naar de externe kluis zijn verzonden, maar je mobiele apparaat toont nog steeds het aangepaste thema.
> - Controleer op het mobiele apparaat het synchronisatielogboek om de ontvangst van het bijgewerkte `appearance.json`-bestand te bevestigen.
> - Herlaad of herstart Obsidian op het mobiele apparaat.
> - Na het herladen of herstarten zou het mobiele apparaat hetzelfde thema moeten weergeven als je computer.

### Mijn bestanden blijven verdwijnen uit Sync zodra ik ze herstel

Dit probleem komt het vaakst voor op Windows. Windows Defender kan bestanden met codeblokken in quarantaine plaatsen, waardoor bepaalde notities verdwijnen.

Een andere veelvoorkomende oorzaak is dubbele synchronisatie. Dit gebeurt wanneer Obsidian Sync naast een andere synchronisatiedienst draait.

![[Overstappen naar Obsidian Sync#Verplaats je kluis uit je synchronisatiedienst van derden of cloudopslag]]

---

Tot slot kan dit gebeuren wanneer je een bestand op één apparaat herstelt, maar het vervolgens wordt verwijderd van een secundair apparaat. Dit gebeurt wanneer de bestandsnaam [[Statuspictogram en berichten#Overgeslagen berichten|ongeldige tekens]] bevat.

## Android

**Mijn apparaat verwijdert de bijlagen die ik via Sync ontvang**

Dit probleem wordt waarschijnlijk veroorzaakt doordat Google of Android Foto's je bijlagen beheert. Om te voorkomen dat het systeem bestanden wijzigt die via Sync zijn ontvangen, voeg je een `.nomedia`-[bestand toe aan je kluis](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) op je Android-apparaat.

> [!tip]- Gebruik een plug-in
> De community-plugin [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) maakt dit eenvoudiger. Installeer deze op je Android-telefoon. Let op: `.nomedia`-bestanden worden niet gesynchroniseerd tussen apparaten via Obsidian Sync.
