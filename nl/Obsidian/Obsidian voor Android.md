---
permalink: android
---
De mobiele Obsidian-app voor Android brengt krachtige mogelijkheden voor het maken van notities naar je Android-apparaat. Je kunt deze downloaden via [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) of als een [APK-bestand](https://obsidian.md/download).
De app ondersteunt Android versie 5.1 en hoger.

Deze pagina behandelt Android-specifieke functies, waaronder widgets, integratie met Snelle instellingen en snelkoppelingen.

## Synchronisatie

Om je notities te synchroniseren met Obsidian op Android, zie [[Notities synchroniseren tussen apparaten]].

## Kluislocatie

Wanneer je Obsidian op Android start, wordt je gevraagd waar je kluisgegevens opgeslagen moeten worden. Je kunt kiezen voor **apparaatopslag** (aanbevolen) of **appopslag**.

### Apparaatopslag

Met de optie **apparaatopslag** worden je gegevens opgeslagen op een gedeelde locatie op je apparaat. Hierdoor kan je Obsidian-kluis worden benaderd door andere apps en diensten, zoals synchronisatietools van derden ([[Notities synchroniseren tussen apparaten|synchronisatie]]).

Dit is de aanbevolen optie omdat deze betere compatibiliteit biedt met synchronisatietools en ervoor zorgt dat je gegevens behouden blijven, zelfs als je de app verwijdert. Deze optie vereist echter extra machtigingen om toegang te krijgen tot de bestanden op je apparaat.

Vanwege beperkingen in Android vraagt Obsidian om toegang tot "Alle bestanden" om betrouwbaar te functioneren. Google raadt dit aan voor apps zoals Obsidian die worden beschouwd als "documentbeheer-apps". [Meer informatie](https://developer.android.com/training/data-storage/manage-all-files).

De app gebruikt deze machtiging alleen om je te helpen bij het benaderen van je gegevens op je apparaat. Je gegevens zijn nooit toegankelijk voor ons. Bezoek onze [Beveiligingspagina](https://obsidian.md/security) voor meer informatie over hoe we je gegevens beschermen en je privacy waarborgen.

### Appopslag

Met de optie **appopslag** worden je gegevens opgeslagen in de privé-appopslag van Obsidian. Dit houdt je gegevens geïsoleerd van andere apps voor extra privacy.

Dit is een goede optie als je geen externe synchronisatietools gebruikt en de voorkeur geeft aan striktere sandboxing op app-niveau voor je notities.

Met deze optie kun je [[Introductie tot Obsidian Sync|Obsidian Sync]] en synchronisatie-plug-ins van derden gebruiken die beschikbaar zijn via [[Communityplug-ins]], maar je kunt geen tools zoals Syncthing gebruiken die afhankelijk zijn van gedeelde opslag.

> [!warning] Het verwijderen van Obsidian wist je lokale notities als je appopslag gebruikt
> Als je de optie **Appopslag** gebruikt, worden je lokale kluisgegevens verwijderd wanneer je de app verwijdert. Je Obsidian-kluisgegevens op andere apparaten worden niet verwijderd.

## Widgets

Obsidian voor Android biedt verschillende widgetopties om snel toegang te krijgen tot je kluizen en notities vanaf je startscherm. Beschikbare widgets zijn:

- **Notitie openen** — Open een specifieke notitie
- **Nieuwe notitie** — Maak een nieuwe notitie aan
- **Zoeken** — Start een zoekopdracht
- **Dagnotitie** — Open je dagelijkse notitie
- **Obsidian openen** — Start de app

> [!note] Opmerking
> Deze widgets zijn statisch en tonen geen voorbeelden van de geselecteerde notitie of kluis.

Om widgets aan je startscherm toe te voegen:
1. Tik en houd ergens op je startscherm ingedrukt
2. Selecteer "Widgets"
3. Zoek Obsidian en selecteer vervolgens een widget die je wilt gebruiken.

> [!note] Opmerking
> Obsidian-widgets kunnen worden aangepast in grootte. Om een widget te verkleinen of te vergroten, tik je erop en houd je deze ingedrukt, en sleep je vervolgens de formaatgrepen.

Je kunt meerdere widgets van hetzelfde type toevoegen om verschillende bestanden te openen of verschillende zoekopdrachten uit te voeren.

Om een widget te configureren, druk je er lang op vanaf je startscherm en zoek je een optie "Bewerken" of "Configureren". Hiermee kun je de specifieke parameters opgeven die nodig zijn voor de tikactie van die widget, zoals Bestand of Pad, Zoekopdracht en Kluisnaam.

Zie dit [Google Support-artikel](https://support.google.com/android/answer/9450271?hl=en) voor meer informatie over Android-widgets.

## Tegels voor Snelle instellingen

Vereist Android 7.0 of hoger.

Voeg een Obsidian-tegel voor Snelle instellingen toe voor snelle toegang tot de app vanuit je meldingenscherm. Werkt op je startscherm en vergrendelscherm.

> [!note] Opmerking
> In tegenstelling tot app-widgets kun je slechts één tegel voor Snelle instellingen van hetzelfde type toevoegen.

Om een tegel voor Snelle instellingen aan je meldingenscherm toe te voegen:

1. Open je meldingenscherm, meestal door omlaag te vegen vanaf je statusbalk. Opmerking: mogelijk moet je nog een keer vegen om meer opties te zien.
2. Selecteer bij de tegels voor Snelle instellingen "Bewerken" — dit is meestal dezelfde sectie waar schakelaars zoals Wi-Fi, Bluetooth en Rotatievergrendeling zich bevinden.
3. Zoek en selecteer een Obsidian-tegel voor Snelle instellingen en rangschik deze naar wens.
4. Om een tegel voor Snelle instellingen te configureren, tik je erop en houd je deze ingedrukt om het configuratiescherm te openen.

Zie dit [Google Support-artikel](https://support.google.com/android/answer/9083864?hl=en) voor meer informatie over Snelle instellingen op Android.

## Snelkoppelingen

Vereist Android 7.1 of hoger.

Obsidian biedt app-snelkoppelingen die op verschillende manieren toegankelijk zijn:

- Druk lang op het Obsidian-app-pictogram
- Sleep het snelkoppelingspictogram naar je startscherm
- Benader via de zoekbalk op je launcher (beschikbaar bij de meeste apparaatfabrikanten)

Beschikbare snelkoppelingen:

- **Notitie openen** — Open een specifieke notitie in je kluis
- **Dagnotitie** — Ga direct naar de dagelijkse notitie van vandaag

> [!note] Opmerking
> Snelkoppelingen in Obsidian 1.11 zijn niet configureerbaar en zullen in latere versies worden herzien om meer dynamische opties te bieden die zijn afgestemd op je specifieke notities.
