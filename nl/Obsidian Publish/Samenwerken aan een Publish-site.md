---
permalink: publish/collaborate
publish: true
mobile: true
description: Leer hoe je samenwerkt met andere Obsidian-gebruikers op je Obsidian Publish-site.
---
Leer hoe je kunt samenwerken aan je [[Inleiding tot Obsidian Publish|Obsidian Publish]]-site met andere Obsidian-gebruikers. Door je vrienden en collega's als medewerkers toe te voegen, kunnen zij wijzigingen op je site publiceren.

Alleen de site-eigenaar heeft een actief abonnement op Obsidian Publish nodig. Medewerkers hebben alleen een [Obsidian-account](https://obsidian.md/account) nodig.

> [!warning] Voordat je wijzigingen publiceert op een gedeelde site, zorg ervoor dat je [[#Wijzigingen synchroniseren tussen medewerkers|wijzigingen synchroniseert tussen medewerkers]]. Anders loop je het risico wijzigingen van andere medewerkers te overschrijven.

## Een medewerker toevoegen aan een site

1. Selecteer in de [[Werkbalk]] de optie **Publiceer veranderingen** ![[lucide-send.svg#icon]] of open het [[Opdrachtenpaneel]] en typ **Publish: Publiceer veranderingen...**
2. Klik in het dialoogvenster **Publiceer veranderingen** op **Verander site-opties** ![[lucide-cog.svg#icon]].
3. Selecteer naast **Site-samenwerking** de optie **Beheren**.
4. Voer bij **Gebruiker uitnodigen** het e-mailadres van de medewerker in.
5. Selecteer **Toevoegen**.

## Een medewerker verwijderen van een site

1. Selecteer in de [[Werkbalk]] de optie **Publiceer veranderingen** ![[lucide-send.svg#icon]] of open het [[Opdrachtenpaneel]] en typ **Publish: Publiceer veranderingen...**
2. Klik in het dialoogvenster **Publiceer veranderingen** op **Verander site-opties** ![[lucide-cog.svg#icon]].
3. Selecteer naast **Site-samenwerking** de optie **Beheren**.
4. Selecteer naast de medewerker die je wilt verwijderen de optie **Verwijder gebruiker** ![[lucide-x.svg#icon]].

## Wijzigingen synchroniseren tussen medewerkers

Obsidian Publish synchroniseert gepubliceerde wijzigingen niet automatisch tussen lokale kluizen. In plaats daarvan moeten medewerkers wijzigingen van andere medewerkers handmatig synchroniseren.

Om een lokale notitie bij te werken met wijzigingen van de live site:

1. Selecteer in de [[Werkbalk]] de optie **Publiceer veranderingen** ![[lucide-send.svg#icon]] of open het [[Opdrachtenpaneel]] en typ **Publish: Publiceer veranderingen...**
2. Klik met de rechtermuisknop of houd de wijziging ingedrukt die je wilt synchroniseren en selecteer vervolgens **Gebruik live-versie**. **Dit zal de notitie in je lokale kluis overschrijven.**

> [!tip] We raden aan om een andere tool te gebruiken om wijzigingen tussen kluizen te synchroniseren, zoals [[Introductie tot Obsidian Sync|Obsidian Sync]] of [git](https://git-scm.com/).

## Rechten

De volgende tabel toont de beschikbare siterechten voor eigenaren en medewerkers:

| Actie                                        | Medewerker | Eigenaar |
|----------------------------------------------|:----------:|:--------:|
| Nieuwe pagina's publiceren                   | ✓          | ✓        |
| Wijzigingen aan gepubliceerde pagina's publiceren | ✓          | ✓        |
| Pagina's depubliceren                        | ✓          | ✓        |
| Site-opties configureren                     |            | ✓        |
| Rechten beheren                              |            | ✓        |
