---
permalink: uri
---
Obsidian URI is een aangepast URI-protocol dat door Obsidian wordt ondersteund en waarmee je verschillende acties kunt activeren, zoals het openen of aanmaken van een notitie. Obsidian URI maakt automatisering en werkstromen tussen apps mogelijk.

## URI-formaat

Obsidian URI's gebruiken het volgende formaat:

```
obsidian://action?param1=value&param2=value
```

De parameter `action` is de actie die je wilt uitvoeren. Beschikbare acties zijn:

- `open` om een notitie te openen.
- `new` om een notitie aan te maken of aan een bestaande notitie toe te voegen.
- `daily` om je dagelijkse notitie aan te maken of te openen.
- `unique` om een nieuwe unieke notitie aan te maken.
- `search` om een zoekopdracht te openen.
- `choose-vault` om het kluisbeheer te openen.

> [!warning] Codering
> Zorg ervoor dat je waarden correct URI-gecodeerd zijn. Zo moeten schuine strepen `/` worden gecodeerd als `%2F` en spaties als `%20`.
> 
> Dit is vooral belangrijk omdat een onjuist gecodeerd "gereserveerd" teken de interpretatie van de URI kan verstoren. [Zie hier voor details](https://en.wikipedia.org/wiki/Percent-encoding).

## Notitie openen

De actie `open` opent een Obsidian-kluis, of opent een bestand binnen die kluis.

### Voorbeelden

- `obsidian://open?vault=my%20vault`
  Dit opent de kluis `my vault`. Als de kluis al geopend is, wordt het venster naar de voorgrond gebracht.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Dit opent de kluis met het ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Dit opent de notitie `my note.md` in de kluis `my vault`, aangenomen dat het bestand bestaat.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Dit zoekt naar elke kluis die het pad `/home/user/my vault/path/to/my note` bevat. Vervolgens wordt de rest van het pad doorgegeven aan de parameter `file`. Als er bijvoorbeeld een kluis bestaat op `/home/user/my vault`, dan zou dit gelijk zijn aan de parameter `file` ingesteld op `path/to/my note`.


> [!tip] Een kop of blok openen
> Met de juiste URI-codering kun je naar een kop of blok binnen een notitie navigeren. `Note%23Heading` navigeert naar de kop genaamd "Heading", terwijl `Note%23%5EBlock` navigeert naar het blok genaamd "Block".

### Parameters

- `vault` kan de kluisnaam of het kluis-ID zijn[^1].
- `file` kan een bestandsnaam zijn, of een pad vanaf de kluisroot naar het opgegeven bestand. Als de bestandsextensie `md` is, kan de extensie worden weggelaten.
- `path` een absoluut bestandssysteempad naar een bestand.
  - Het gebruik van deze parameter overschrijft zowel `vault` als `file`.
  - De app zoekt dan naar de meest specifieke kluis die het opgegeven bestandspad bevat.
  - Vervolgens vervangt de rest van het pad de parameter `file`.
- `prepend` voegt toe aan het begin van het bestand en probeert eigenschappen samen te voegen.
- `append` voegt toe aan het einde van het bestand en probeert ook eigenschappen samen te voegen.
- `paneType` (optioneel) bepaalt waar de notitie wordt geopend in de interface.
  - indien niet aanwezig, wordt het laatst actieve tabblad vervangen.
  - `paneType=tab` openen in een nieuw tabblad.
  - `paneType=split` openen in een nieuwe tabbladgroep.
  - `paneType=window` openen in een losstaand venster (alleen desktop).

## Notitie aanmaken

De actie `new` maakt een nieuwe notitie aan in de kluis, optioneel met inhoud.

### Voorbeelden

- `obsidian://new?vault=my%20vault&name=my%20note`
  Dit opent de kluis `my vault` en maakt een nieuwe notitie aan genaamd `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Dit opent de kluis `my vault` en maakt een nieuwe notitie aan op `path/to/my note`.

### Parameters

- `vault` kan de kluisnaam of het kluis-ID zijn[^1]. Hetzelfde als bij de actie `open`.
- `name` de bestandsnaam die aangemaakt moet worden. Als dit is opgegeven, wordt de bestandslocatie gekozen op basis van je instellingen voor "Standaardlocatie voor nieuwe notitie".
- `file` een absoluut pad binnen de kluis, inclusief de naam. Overschrijft `name` indien opgegeven.
- `path` een globaal absoluut pad. Werkt vergelijkbaar met de optie `path` in de actie `open`, die zowel `vault` als `file` overschrijft.
- `paneType` (optioneel) bepaalt waar de notitie wordt geopend in de interface. Hetzelfde als bij de actie `open`.
- `content` (optioneel) de inhoud van de notitie.
- `clipboard` (optioneel) gebruik de inhoud van het klembord in plaats van `content` op te geven.
- `silent` (optioneel) voeg deze parameter toe als je de nieuwe notitie niet wilt openen.
- `append` (optioneel) voeg deze parameter toe om aan een bestaand bestand toe te voegen als er een bestaat.
- `overwrite` (optioneel) overschrijf een bestaand bestand als er een bestaat, maar alleen als `append` niet is ingesteld.
- `x-success` (optioneel) zie [[#x-callback-url-parameters gebruiken]].

## Dagelijkse notitie aanmaken of openen

De actie `daily` maakt je dagelijkse notitie aan of opent deze. De plug-in [[Dagnotities]] moet ingeschakeld zijn.

### Voorbeelden

- `obsidian://daily?vault=my%20vault`
  Dit opent de kluis `my vault` en maakt de dagelijkse notitie aan of opent deze.

### Parameters

De actie `daily` accepteert dezelfde parameters als de actie `new`.

## Unieke notitie

De actie `unique` maakt een nieuwe unieke notitie aan in de kluis. De plug-in [[Plug-ins/Uniekenotitiesmaker|Uniekenotitiesmaker]] moet ingeschakeld zijn.

### Voorbeelden

- `obsidian://unique?vault=my%20vault`
  Dit opent de kluis `my vault` en maakt een nieuwe unieke notitie aan.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Dit opent de kluis `my vault` en maakt een nieuwe unieke notitie aan met de inhoud `Hello World`.

### Parameters

- `vault` kan de kluisnaam of het kluis-ID zijn[^1]. Hetzelfde als bij de actie `open`.
- `paneType` (optioneel) bepaalt waar de notitie wordt geopend in de interface. Hetzelfde als bij de actie `open`.
- `content` (optioneel) de inhoud van de notitie.
- `clipboard` (optioneel) gebruik de inhoud van het klembord in plaats van `content` op te geven.
- `x-success` (optioneel) zie [[#x-callback-url-parameters gebruiken]].

## Zoekopdracht openen

De actie `search` opent [[Zoeken]] in de opgegeven kluis, en voert optioneel een zoekterm uit.

### Voorbeelden

- `obsidian://search?vault=my%20vault`
  Dit opent de kluis `my vault` en opent [[Zoeken]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Dit opent de kluis `my vault`, opent [[Zoeken]] en voert een zoekopdracht uit naar `Obsidian`.

### Parameters

- `vault` kan de kluisnaam of het kluis-ID zijn[^1]. Hetzelfde als bij de actie `open`.
- `query` (optioneel) de zoekterm om uit te voeren.

## Kluisbeheer openen

De actie `choose-vault` opent het [[Kluizen beheren|kluisbeheer]].

### Voorbeelden

- `obsidian://choose-vault`

## Integratie met Hook

Deze Obsidian URI-actie is bedoeld voor gebruik met [Hook](https://hookproductivity.com/).

### Voorbeeld

`obsidian://hook-get-address`

### Parameters

- `vault` (optioneel) kan de kluisnaam of het kluis-ID zijn[^1]. Indien niet opgegeven, wordt de huidige of laatst gefocuste kluis gebruikt.
- `x-success` (optioneel) zie [[#x-callback-url-parameters gebruiken]].
- `x-error` (optioneel) zie [[#x-callback-url-parameters gebruiken]].

Als `x-success` is gedefinieerd, gebruikt deze API het als de x-callback-url. Anders wordt een Markdown-koppeling van de huidige gefocuste notitie naar het klembord gekopieerd, als een `obsidian://open` URL.

## x-callback-url-parameters gebruiken

Sommige eindpunten accepteren de x-callback-url-parameters `x-success` en `x-error`. Wanneer deze zijn opgegeven, levert Obsidian het volgende aan de `x-success` callback:

- `name` de naam van het bestand, zonder de bestandsextensie.
- `url` de `obsidian://` URI voor dit bestand.
- `file` (alleen desktop) de `file://` URL voor dit bestand.

Als Obsidian bijvoorbeeld
`obsidian://.....x-success=myapp://x-callback-url` ontvangt, zou het antwoord `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...` zijn.

## Verkorte formaten

Naast de bovenstaande formaten zijn er nog twee "verkorte" formaten beschikbaar om kluizen en bestanden te openen:

1. `obsidian://vault/my vault/my note` is gelijk aan `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` is gelijk aan `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Problemen oplossen

### Obsidian URI registreren

Op Windows en macOS zou het eenmalig uitvoeren van de app voldoende moeten zijn om het Obsidian URI-protocol op je computer te registreren.

Op Linux is dit een aanzienlijk uitgebreider proces:

1. Zorg ervoor dat je een `obsidian.desktop`-bestand aanmaakt. [Zie hier voor details](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Zorg ervoor dat je desktopbestand het veld `Exec` specificeert als `Exec=executable %u`. De `%u` wordt gebruikt om de `obsidian://` URI's aan de app door te geven.
3. Als je het AppImage-installatieprogramma gebruikt, moet je het mogelijk uitpakken met `Obsidian-x.y.z.AppImage --appimage-extract`. Zorg er vervolgens voor dat de `Exec`-richtlijn naar het uitgepakte uitvoerbare bestand verwijst.


[^1]: Het kluis-ID is de willekeurige code van 16 tekens die aan de kluis is toegewezen, bijvoorbeeld `ef6ca3e3b524d22f`. Dit ID is uniek per map op je computer. Het ID kan worden gevonden door de kluiswisselaar te openen en in het contextmenu van de gewenste kluis op "Kluis-id kopiëren" te klikken.
