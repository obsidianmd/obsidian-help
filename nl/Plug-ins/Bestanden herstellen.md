---
permalink: plugins/file-recovery
publish: true
mobile: true
description: Bestandsherstel helpt je werk te beschermen tegen onbedoeld gegevensverlies door automatisch op regelmatige intervallen momentopnamen van je notities op te slaan.
---
Bestanden herstellen is een [[Ingebouwde plug-ins|kernplug-in]] die je werk beschermt tegen onbedoeld verwijderen, bestandscorruptie of ongewenste wijzigingen door automatisch volledige momentopnames van je notities op regelmatige intervallen op te slaan. Bestanden herstellen is geen volledige back-upoplossing, en we raden aan ook apart [[Back-up maken van je Obsidian-bestanden|een back-up te maken]] van je Obsidian-bestanden.

Om te voorkomen dat er [[#Opslag en prestaties|te veel ruimte]] wordt ingenomen, bewaart Obsidian momentopnames een bepaald aantal dagen voordat ze worden verwijderd. Momentopnames leggen de volledige inhoud van je bestanden vast, niet alleen wijzigingen, waardoor je elke eerdere versie kunt herstellen.

> [!info]+ Informatie
> Standaard worden momentopnames minimaal 5 minuten na elkaar opgeslagen en 7 dagen bewaard. Je kunt beide intervallen configureren onder **[[Instellingen]] → Ingebouwde plug-ins → Bestanden herstellen**.

Momentopnames worden bewaard in de [[Hoe Obsidian gegevens opslaat#Globale instellingen|Globale instellingen]], buiten de kluis, om rekening te houden met kluisgerelateerd gegevensverlies. Dit betekent dat momentopnames worden opgeslagen met het absolute pad naar de notitie. Als je je kluis recent hebt verplaatst, moet je deze mogelijk terugzetten naar de locatie waar deze was toen de momentopname werd gemaakt.

> [!tip] Als je [[Introductie tot Obsidian Sync|Obsidian Sync]] of [[Notities synchroniseren tussen apparaten|andere synchronisatieservices]] gebruikt, worden momentopnames van Bestanden herstellen niet gesynchroniseerd tussen apparaten. Momentopnames zijn apparaatspecifiek en blijven lokaal op elk apparaat.

## Een momentopname herstellen

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk **Bestanden herstellen** onder **Ingebouwde plug-ins**.
3. Selecteer onder **Momentopnames** de knop **Weergave**.
4. Begin in het bestandsnaamveld de naam te typen van het bestand dat je wilt herstellen, en je ziet een suggestielijst.
5. Selecteer het bestand, druk op Enter, en je ziet een lijst met beschikbare momentopnames.
6. Selecteer de momentopname die je wilt herstellen.
    1. Als je wilt kopiëren en plakken in een nieuwe notitie, selecteer dan de knop **Kopiëren**.
    2. Als je het bestand volledig wilt herstellen, selecteer dan de knop **Herstellen**.
7. Je kunt optioneel de verschillen tussen momentopnames tonen door **Toon verschil** in te schakelen. Dit toont welke inhoud is toegevoegd, verwijderd of gewijzigd tussen momentopnameversies.

## Momentopnamegeschiedenis wissen

> [!danger] Het wissen van de momentopnamegeschiedenis verwijdert onomkeerbaar alle momentopnames in je kluis.

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk **Bestanden herstellen** onder **Ingebouwde plug-ins**.
3. Selecteer onder **Geschiedenis wissen** de knop **Wissen**.
4. Bevestig dat je alle momentopnames wilt verwijderen door op **Wissen** te klikken.

## Opslag en prestaties

Momentopnames van Bestanden herstellen gebruiken doorgaans minimale schijfruimte, omdat ze alleen gewijzigde bestanden opslaan. In kluizen met veel grote bestanden of frequente bewerkingen kunnen momentopnames zich echter na verloop van tijd ophopen. Controleer je opslaggebruik en pas de bewaarperiode aan indien nodig.

## Beperkingen

- **Apple-vergrendelingsmodus**: Deze functie is niet beschikbaar op Apple-apparaten met [Vergrendelingsmodus](https://support.apple.com/en-us/105120) ingeschakeld, tenzij Obsidian is uitgezonderd.
- **Bestandstypen**: Alleen `.md`- en `.canvas`-bestanden kunnen worden hersteld met Bestanden herstellen.
- **Kluislocatie**: Als je je kluis naar een andere locatie verplaatst zonder de [[Kluizen beheren#Kluis verplaatsen naar een andere map|kluiswisselaar]] te gebruiken, zijn bestaande momentopnames mogelijk niet toegankelijk.
