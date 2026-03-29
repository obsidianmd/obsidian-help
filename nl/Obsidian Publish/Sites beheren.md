---
permalink: publish/sites
---
Deze pagina legt uit hoe je [[Inleiding tot Obsidian Publish|Obsidian Publish]]-sites beheert.

Een site is een verzameling notities die wordt gehost door Obsidian Publish en online beschikbaar is, hetzij via een Obsidian Publish-adres of een [[Aangepaste domeinen|aangepast domein]].

## Een nieuwe site aanmaken

> [!note] Het aantal sites dat je tegelijkertijd kunt hebben wordt bepaald door je Obsidian Publish-abonnement. Controleer voordat je een nieuwe site aanmaakt of je abonnement dit toestaat.

1. Klik in de werkbalk, aan de linkerkant van het applicatievenster, op **Wijzigingen publiceren** ![[lucide-send.svg#icon]].
2. Als je al een bestaande site hebt, klik op **Site veranderen** ![[lucide-repeat.svg#icon]].
3. Voer bij **Site-ID** het pad in dat je voor je site wilt. Bijvoorbeeld, een site met het ID `my-amazing-site` is beschikbaar via publish.obsidian.md/my-amazing-site.
4. Klik op **Aanmaken**.

## Een bestaande site verwijderen

> [!note] Notities blijven in je kluis, zelfs nadat je een site verwijdert.

1. Klik in de werkbalk, aan de linkerkant van het applicatievenster, op **Wijzigingen publiceren** ![[lucide-send.svg#icon]].
2. Klik op **Site veranderen** ![[lucide-repeat.svg#icon]].
3. Klik op **Site verwijderen** ![[lucide-x.svg#icon]] rechts van de site die je wilt verwijderen.
4. Klik op **Verwijderen** om te bevestigen.

## Wisselen tussen sites

1. Klik in de werkbalk, aan de linkerkant van het applicatievenster, op **Wijzigingen publiceren** ![[lucide-send.svg#icon]].
2. Klik op **Site veranderen** ![[lucide-repeat.svg#icon]].
3. Klik op **Kiezen** rechts van de site waarnaar je wilt wisselen.

## De site-ID wijzigen

1. Klik in de werkbalk, aan de linkerkant van het applicatievenster, op **Wijzigingen publiceren** ![[lucide-send.svg#icon]].
2. Klik op **Site veranderen** ![[lucide-repeat.svg#icon]].
3. Klik op **Site-ID aanpassen** ![[lucide-edit-3.svg#icon]] rechts van de site die je wilt bewerken.
4. Voer bij **Site-ID** het nieuwe ID voor je site in.
5. Klik op **Veranderen**.

## Site-instellingen bekijken

1. Klik in de werkbalk, aan de linkerkant van het applicatievenster, op **Wijzigingen publiceren** ![[lucide-send.svg#icon]].
2. Klik in het dialoogvenster **Wijzigingen publiceren** op **Verander site-opties** ![[lucide-cog.svg#icon]].

## Site-instellingen

### Algemeen

| Optie                                    | Type   | Beschrijving                                                                                                                          |
| ---------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Site-naam                                | Invoer | De publieke naam en titel van je Obsidian Publish-site.                                                                               |
| Homepagina van je site                   | Invoer | De locatie van het Markdown-bestand dat je als landingspagina wilt gebruiken.                                                          |
| Logo                                     | Invoer | De afbeelding die je als sitebanner wilt gebruiken. De afbeelding moet [[Je inhoud publiceren#Notities publiceren\|gepubliceerd zijn]]. |
| Site-samenwerking                        | Knop   | Andere gebruikers aanwijzen die toegang moeten hebben om je gepubliceerde notities te bewerken. Gebruikers moeten een Obsidian-account hebben. |
| Aangepast domein                         | Knop   | [[Aangepaste domeinen]]                                                                                                               |
| Zoekmachineindexering niet toestaan      | Schakelaar | Voorkom dat respectvolle zoekmachines je site crawlen door een `robots.txt`-bestand toe te voegen.                                  |

### Uiterlijk

| Optie                    | Type       | Beschrijving                                                                                            |
|--------------------------|------------|---------------------------------------------------------------------------------------------------------|
| Thema                    | Keuzelijst | Kies hoe je thema op je site wordt weergegeven; **Licht**, **Donker** of **Aan systeem aanpassen**.     |
| Licht/donker schakelaar  | Schakelaar | Sta gebruikers toe om **Licht**/**Donker**-modus te wisselen met een schakelknop op je site.            |

## Leeservaring

| Optie                    | Type       | Beschrijving                                                                                                    |
|--------------------------|------------|-----------------------------------------------------------------------------------------------------------------|
| Toon zwevend voorbeeld   | Schakelaar | Schakel de mogelijkheid van paginavoorbeeld bij het zweven over een actieve, interne koppeling in of uit.        |
| Paginatitel verbergen    | Schakelaar | Schakel in of uit of de inline titel van een gepubliceerde notitie wordt weergegeven.                           |
| Leesbare regellengte     | Schakelaar | Schakel leesbare regellengte binnen je site in of uit.                                                          |
| Strikt regeleinde        | Schakelaar | Schakel in of uit of enkele regelovergangen op je site worden weergegeven.                                      |
| Gebruik schuivende vensters | Schakelaar | Schakel [[Tabbladen#Tabbladgroepen stapelen\|Gestapelde tabbladen]] op je site in of uit.                    |

### Onderdelen

| Optie                    | Type       | Beschrijving                                                                                                                                       |
|--------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Toon navigatie           | Schakelaar | Schakel de [[Bestandsverkenner]]-weergave op je Publish-site in of uit.                                                                            |
| Navigatie aanpassen      | Knop       | [[Je site aanpassen#Navigatie aanpassen\|Pas aan]] in welke volgorde je bestanden worden weergegeven als **Toon navigatie** is ingeschakeld.        |
| Toon zoekbalk            | Schakelaar | Schakel een zoekbalk op je site in of uit.                                                                                                          |
| Toon grafiekweergave     | Schakelaar | Schakel de grafiekweergave in de rechter zijbalk van je site in of uit.                                                                            |
| Toon inhoudstabel        | Schakelaar | Schakel de [[Overzicht\|Inhoudsopgave]]-weergave op je site in of uit.                                                                             |
| Toon terugverwijzingen   | Schakelaar | Schakel [[Terugverwijzing]] op je site in of uit.                                                                                                   |

### Andere site-instellingen

| Optie                              | Type   | Beschrijving                                                                                                            |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| Wachtwoorden                       | Knop   | [[Obsidian Publish/Beveiliging en privacy#Een sitewachtwoord toevoegen\|Stel een wachtwoord in]] om de toegang tot je hele site te beperken. |
| Google Analytics traceringscode    | Invoer | **Alleen voor aangepaste domein-URL**. Plaats hier je Google Analytics sitetrackeringscode.                              |
