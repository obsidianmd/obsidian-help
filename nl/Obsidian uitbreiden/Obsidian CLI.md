---
permalink: cli
description: 'Alles wat je in Obsidian kunt doen, kan ook vanaf de opdrachtregel worden gedaan.'
---
Obsidian CLI is een opdrachtregelinterface waarmee je Obsidian kunt bedienen vanuit je terminal voor scripting, automatisering en integratie met externe tools.

Alles wat je in Obsidian kunt doen, kun je ook vanaf de opdrachtregel doen. Obsidian CLI bevat zelfs [[#Ontwikkelaarsopdrachten|ontwikkelaarsopdrachten]] om ontwikkelaarstools te openen, elementen te inspecteren, schermafbeeldingen te maken, plug-ins opnieuw te laden en meer.

![[obsidian-cli.mp4#interface]]

> [!warning] Vereist Obsidian 1.12 installatieprogramma
> Voor het gebruik van de CLI is het Obsidian 1.12 installatieprogramma vereist. Zie de [[Obsidian bijwerken#Installatieprogramma-updates|update-handleiding voor het installatieprogramma]].

## Obsidian CLI installeren

Upgrade naar de nieuwste [[Obsidian bijwerken|Obsidian installatieprogrammaversie]] (1.12.7+).

Schakel Obsidian CLI in binnen Obsidian:

1. Ga naar **Instellingen** → **Algemeen**.
2. Schakel **Opdrachtregelinterface** in.
3. Volg de prompt om Obsidian CLI te registreren.

Als je problemen ondervindt bij het installeren van Obsidian CLI, zie [[#Probleemoplossing]].

## Aan de slag

Obsidian CLI ondersteunt zowel losse opdrachten als een terminal-gebruikersinterface (TUI) met interactieve hulp en automatisch aanvullen.

> [!info] De Obsidian-app moet actief zijn
> Obsidian CLI vereist dat de Obsidian-app actief is. Als Obsidian niet actief is, start de eerste opdracht die je uitvoert Obsidian op.
>
> Wil je synchroniseren zonder de desktop-app? Zie [[Obsidian Headless|Obsidian Headless]].

### Een opdracht uitvoeren

Voer een individuele opdracht uit zonder de TUI te openen:

```shell
# Voer de help-opdracht uit
obsidian help
```

### De terminalinterface gebruiken

Gebruik de TUI door `obsidian` in te voeren. Volgende opdrachten kunnen zonder `obsidian` worden ingevoerd.

```shell
# Open de TUI en voer daarna help uit
obsidian
help
```

De TUI ondersteunt automatisch aanvullen, opdrachtgeschiedenis en omgekeerd zoeken. Gebruik `Ctrl+R` om je opdrachtgeschiedenis te doorzoeken. Zie [[#Sneltoetsen]] voor alle beschikbare sneltoetsen.

## Voorbeelden

Hier zijn enkele voorbeelden van wat Obsidian CLI kan doen.

### Dagelijks gebruik

```shell
# Open de dagelijkse notitie van vandaag
obsidian daily

# Voeg een taak toe aan je dagelijkse notitie
obsidian daily:append content="- [ ] Boodschappen doen"

# Doorzoek je kluis
obsidian search query="vergadernotities"

# Lees het actieve bestand
obsidian read

# Lijst alle taken van je dagelijkse notitie op
obsidian tasks daily

# Maak een nieuwe notitie aan op basis van een sjabloon
obsidian create name="Reis naar Parijs" template=Reizen

# Lijst alle labels in je kluis op met tellingen
obsidian tags counts

# Vergelijk twee versies van een bestand
obsidian diff file=README from=1 to=3
```

### Voor ontwikkelaars

Veel [[#Ontwikkelaarsopdrachten]] zijn beschikbaar voor plug-in- en thema-ontwikkeling. Deze opdrachten stellen agentische coderingstools in staat om automatisch te testen en te debuggen.

```shell
# Open ontwikkelaarstools
obsidian devtools

# Herlaad een community-plugin die je aan het ontwikkelen bent
obsidian plugin:reload id=my-plugin

# Maak een schermafbeelding van de app
obsidian dev:screenshot path=screenshot.png

# Voer JavaScript uit in de app-console
obsidian eval code="app.vault.getFiles().length"
```

## Instructies

### Parameters en vlaggen gebruiken

Opdrachten kunnen **parameters** en **vlaggen** gebruiken. De meeste opdrachten vereisen geen parameters of vlaggen. Verplichte parameters zijn gemarkeerd als `required`. Bijvoorbeeld:

```shell
# Maak een nieuwe notitie aan met de standaardnaam "Naamloos"
obsidian create
```

Een **parameter** neemt een waarde aan, geschreven als `parameter=waarde`. Als de waarde spaties bevat, zet je deze tussen aanhalingstekens:

```shell
# Maak een nieuwe notitie aan genaamd "Notitie" met de inhoud "Hallo wereld"
obsidian create name=Notitie content="Hallo wereld"
```

Een **vlag** is een booleaanse schakelaar zonder waarde. Voeg deze toe om in te schakelen, bijvoorbeeld `open` en `overwrite` zijn vlaggen:

```shell
# Maak een notitie aan en open deze
obsidian create name=Notitie content="Hallo" open overwrite
```

Gebruik voor meerregelige inhoud `\n` voor een nieuwe regel. Gebruik `\t` voor een tab.

```bash
obsidian create name=Notitie content="# Titel\n\nBroodtekst"
```

### Een kluis targeten

Als de huidige werkmap van je terminal een kluismap is, wordt die kluis standaard gebruikt. Anders wordt de momenteel actieve kluis gebruikt.

Gebruik `vault=<naam>` of `vault=<id>` om een specifieke kluis te targeten. Dit moet de eerste parameter zijn vóór je opdracht:

```shell
obsidian vault=Notities daily
obsidian vault="Mijn Kluis" search query="test"
```

In de TUI gebruik je `vault:open <naam>` of `<id>` om naar een andere kluis te wisselen.

### Een bestand targeten

Veel opdrachten accepteren `file`- en `path`-parameters om een specifiek bestand te targeten. Als geen van beide wordt opgegeven, wordt standaard het actieve bestand gebruikt.

- `file=<naam>` lost het bestand op met dezelfde koppelingsresolutie als [[Interne koppelingen|wiki-links]], waarbij wordt gezocht op bestandsnaam zonder het volledige pad of de extensie te vereisen.
- `path=<pad>` vereist het exacte pad vanaf de kluisroot, bijv. `map/notitie.md`.

```shell
# Deze zijn gelijkwaardig als "Recept.md" het enige bestand met die naam is
obsidian read file=Recept
obsidian read path="Sjablonen/Recept.md"
```

### Uitvoer kopiëren

Voeg `--copy` toe aan elke opdracht om de uitvoer naar het klembord te kopiëren:

```shell
read --copy
search query="TODO" --copy
```


## Algemene opdrachten

### `help`

Toon de lijst van alle beschikbare opdrachten.

| Parameter   | Beschrijving                              |
| ----------- | ----------------------------------------- |
| `<command>` | Toon hulp voor een specifieke opdracht.   |

### `version`

Toon Obsidian-versie.

### `reload`

Herlaad het app-venster.

### `restart`

Herstart de app.


## Bases

Opdrachten voor [[Introductie tot Bases|Bases]].

### `bases`

Lijst alle `.base`-bestanden in de kluis op.

### `base:views`

Lijst weergaven in het huidige basisbestand op.

### `base:create`

Maak een nieuw item aan in een basis. Standaard wordt de actieve basisweergave gebruikt als er geen bestand is opgegeven.

```bash
file=<name>        # naam van het basisbestand
path=<path>        # pad van het basisbestand
view=<name>        # naam van de weergave
name=<name>        # naam van het nieuwe bestand
content=<text>     # initiële inhoud

open               # bestand openen na aanmaken
newtab             # openen in nieuw tabblad
```

### `base:query`

Bevraag een basis en retourneer resultaten.

```bash
file=<name>                    # naam van het basisbestand
path=<path>                    # pad van het basisbestand
view=<name>                    # naam van de weergave om te bevragen
format=json|csv|tsv|md|paths   # uitvoerformaat (standaard: json)
```

## Bladwijzers

Opdrachten voor [[Bladwijzers]].

### `bookmarks`

Lijst bladwijzers op.

```bash
total              # retourneer aantal bladwijzers
verbose            # inclusief bladwijzertypes
format=json|tsv|csv  # uitvoerformaat (standaard: tsv)
```

### `bookmark`

Voeg een bladwijzer toe.

```bash
file=<path>        # bestand om als bladwijzer op te slaan
subpath=<subpath>  # subpad (kop of blok) binnen bestand
folder=<path>      # map om als bladwijzer op te slaan
search=<query>     # zoekterm om als bladwijzer op te slaan
url=<url>          # URL om als bladwijzer op te slaan
title=<title>      # bladwijzertitel
```

## Opdrachtenpalet

Opdrachten voor [[Opdrachtenpaneel]] en [[Sneltoetsen]]. Dit omvat alle opdrachten die door plug-ins zijn geregistreerd.

### `commands`

Lijst beschikbare opdracht-ID's op.

```bash
filter=<prefix>    # filter op ID-prefix
```

### `command`

Voer een Obsidian-opdracht uit.

```bash
id=<command-id>    # (verplicht) opdracht-ID om uit te voeren
```

### `hotkeys`

Lijst sneltoetsen voor alle opdrachten op.

```bash
total              # retourneer aantal sneltoetsen
verbose            # toon of sneltoets aangepast is
format=json|tsv|csv  # uitvoerformaat (standaard: tsv)
```

### `hotkey`

Haal sneltoets op voor een opdracht.

```bash
id=<command-id>    # (verplicht) opdracht-ID

verbose            # toon of aangepast of standaard
```

## Dagnotities

Opdrachten voor [[Dagnotities]].

### `daily`

Open dagelijkse notitie.

```bash
paneType=tab|split|window    # paneeltype om in te openen
```

### `daily:path`

Haal pad van dagelijkse notitie op. Retourneert het verwachte pad zelfs als het bestand nog niet is aangemaakt.

### `daily:read`

Lees de inhoud van de dagelijkse notitie.

### `daily:append`

Voeg inhoud toe aan het einde van de dagelijkse notitie.

```bash
content=<text>     # (verplicht) toe te voegen inhoud
paneType=tab|split|window    # paneeltype om in te openen

inline             # toevoegen zonder nieuwe regel
open               # bestand openen na toevoegen
```

### `daily:prepend`

Voeg inhoud toe aan het begin van de dagelijkse notitie.

```bash
content=<text>     # (verplicht) toe te voegen inhoud
paneType=tab|split|window    # paneeltype om in te openen

inline             # toevoegen zonder nieuwe regel
open               # bestand openen na toevoegen
```

## Bestandsgeschiedenis

### `diff`

Lijst of vergelijk versies van lokale [[Bestanden herstellen|Bestanden herstellen]] en [[Introductie tot Obsidian Sync|Sync]]. Versies zijn genummerd van nieuwste naar oudste.

```bash
file=<name>          # bestandsnaam
path=<path>          # bestandspad
from=<n>             # versienummer om vanaf te vergelijken
to=<n>               # versienummer om mee te vergelijken
filter=local|sync    # filter op versiebron
```

**Voorbeelden:**

```shell
# Lijst alle versies van het actieve bestand op
diff

# Lijst alle versies van een specifiek bestand op
diff file=Recept

# Vergelijk de nieuwste versie met het huidige bestand
diff file=Recept from=1

# Vergelijk twee versies
diff file=Recept from=2 to=1

# Toon alleen Sync-versies
diff filter=sync
```

### `history`

Lijst versies van alleen [[Bestanden herstellen]]. Zie [[#Sync|sync:history]] voor de equivalente Sync-opdracht.

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
```

### `history:list`

Lijst alle bestanden met lokale geschiedenis op.

### `history:read`

Lees een lokale geschiedenisversie.

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
version=<n>        # versienummer (standaard: 1)
```

### `history:restore`

Herstel een lokale geschiedenisversie.

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
version=<n>        # (verplicht) versienummer
```

### `history:open`

Open bestanden herstellen.

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
```

## Bestanden en mappen

### `file`

Toon bestandsinformatie (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
```

Voorbeeld:

```
path       Notities/Recept.md
name       Recept
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Lijst bestanden in de kluis op.

```bash
folder=<path>      # filter op map
ext=<extension>    # filter op extensie

total              # retourneer aantal bestanden
```

### `folder`

Toon mapinformatie.

```bash
path=<path>              # (verplicht) mappad
info=files|folders|size  # retourneer alleen specifieke informatie
```

### `folders`

Lijst mappen in de kluis op.

```bash
folder=<path>      # filter op bovenliggende map

total              # retourneer aantal mappen
```

### `open`

Open een bestand.

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad

newtab             # openen in nieuw tabblad
```

### `create`

Maak een bestand aan of overschrijf het.

```bash
name=<name>        # bestandsnaam
path=<path>        # bestandspad
content=<text>     # initiële inhoud
template=<name>    # te gebruiken sjabloon

overwrite          # overschrijven als bestand bestaat
open               # bestand openen na aanmaken
newtab             # openen in nieuw tabblad
```

### `read`

Lees bestandsinhoud (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
```

### `append`

Voeg inhoud toe aan het einde van een bestand (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
content=<text>     # (verplicht) toe te voegen inhoud

inline             # toevoegen zonder nieuwe regel
```

### `prepend`

Voeg inhoud toe na de voormetadata (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
content=<text>     # (verplicht) toe te voegen inhoud

inline             # toevoegen zonder nieuwe regel
```

### `move`

Verplaats of hernoem een bestand (standaard: actief bestand). Dit werkt automatisch [[Interne koppelingen|interne koppelingen]] bij als dit is ingeschakeld in je [[Instellingen#Altijd interne links bijwerken|kluisinstellingen]].

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
to=<path>          # (verplicht) doelmap of -pad
```

### `rename`

Hernoem een bestand (standaard: actief bestand). De bestandsextensie wordt automatisch behouden als deze wordt weggelaten uit de nieuwe naam. Gebruik [[#`move`|move]] om een bestand tegelijkertijd te hernoemen en te verplaatsen. Dit werkt automatisch [[Interne koppelingen|interne koppelingen]] bij als dit is ingeschakeld in je [[Instellingen#Altijd interne links bijwerken|kluisinstellingen]].

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
name=<name>        # (verplicht) nieuwe bestandsnaam
```

### `delete`

Verwijder een bestand (standaard: actief bestand, naar prullenbak).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad

permanent          # prullenbak overslaan, permanent verwijderen
```

## Koppelingen

Opdrachten voor [[Terugverwijzing]] en [[Uitgaande verwijzingen]].

### `backlinks`

Lijst teruglinks naar een bestand op (standaard: actief bestand).

```bash
file=<name>        # naam van doelbestand
path=<path>        # pad van doelbestand

counts             # inclusief aantal koppelingen
total              # retourneer aantal teruglinks
format=json|tsv|csv  # uitvoerformaat (standaard: tsv)
```

### `links`

Lijst uitgaande koppelingen vanuit een bestand op (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad

total              # retourneer aantal koppelingen
```

### `unresolved`

Lijst onopgeloste koppelingen in de kluis op.

```bash
total              # retourneer aantal onopgeloste koppelingen
counts             # inclusief aantal koppelingen
verbose            # inclusief bronbestanden
format=json|tsv|csv  # uitvoerformaat (standaard: tsv)
```

### `orphans`

Lijst bestanden zonder inkomende koppelingen op.

```bash
total              # retourneer aantal wezen
```

### `deadends`

Lijst bestanden zonder uitgaande koppelingen op.

```bash
total              # retourneer aantal doodlopende bestanden
```

## Overzicht

Opdrachten voor [[Overzicht]].

### `outline`

Toon koppen voor het huidige bestand.

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
format=tree|md|json  # uitvoerformaat (standaard: tree)

total              # retourneer aantal koppen
```

## Plug-ins

Opdrachten voor [[Ingebouwde plug-ins]] en [[Communityplug-ins]].

### `plugins`

Lijst geïnstalleerde plug-ins op.

```bash
filter=core|community  # filter op plug-intype

versions               # inclusief versienummers
format=json|tsv|csv    # uitvoerformaat (standaard: tsv)
```

### `plugins:enabled`

Lijst ingeschakelde plug-ins op.

```bash
filter=core|community  # filter op plug-intype

versions               # inclusief versienummers
format=json|tsv|csv    # uitvoerformaat (standaard: tsv)
```

### `plugins:restrict`

Schakel de beperkte modus in of uit, of controleer de status.

```bash
on                 # beperkte modus inschakelen
off                # beperkte modus uitschakelen
```

### `plugin`

Haal plug-ininformatie op.

```bash
id=<plugin-id>     # (verplicht) plug-in-ID
```

### `plugin:enable`

Schakel een plug-in in.

```bash
id=<id>                # (verplicht) plug-in-ID
filter=core|community  # plug-intype
```

### `plugin:disable`

Schakel een plug-in uit.

```bash
id=<id>                # (verplicht) plug-in-ID
filter=core|community  # plug-intype
```

### `plugin:install`

Installeer een community-plugin.

```bash
id=<id>            # (verplicht) plug-in-ID

enable             # inschakelen na installatie
```

### `plugin:uninstall`

Verwijder een community-plugin.

```bash
id=<id>            # (verplicht) plug-in-ID
```

### `plugin:reload`

Herlaad een plug-in (voor ontwikkelaars).

```bash
id=<id>            # (verplicht) plug-in-ID
```

## Eigenschappen

Opdrachten gerelateerd aan [[Eigenschappen]].

### `aliases`

Lijst aliassen in de kluis op. Gebruik `active` of `file`/`path` om aliassen voor een specifiek bestand te tonen.

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad

total              # retourneer aantal aliassen
verbose            # inclusief bestandspaden
active             # toon aliassen voor actief bestand
```

### `properties`

Lijst eigenschappen in de kluis op. Gebruik `active` of `file`/`path` om eigenschappen voor een specifiek bestand te tonen.

```bash
file=<name>        # toon eigenschappen voor bestand
path=<path>        # toon eigenschappen voor pad
name=<name>        # haal specifieke eigenschap-telling op
sort=count         # sorteer op telling (standaard: naam)
format=yaml|json|tsv  # uitvoerformaat (standaard: yaml)

total              # retourneer aantal eigenschappen
counts             # inclusief voorkomenstellingen
active             # toon eigenschappen voor actief bestand
```

### `property:set`

Stel een eigenschap in op een bestand (standaard: actief bestand).

```bash
name=<name>                                    # (verplicht) eigenschapnaam
value=<value>                                  # (verplicht) eigenschapwaarde
type=text|list|number|checkbox|date|datetime   # eigenschapstype
file=<name>                                    # bestandsnaam
path=<path>                                    # bestandspad
```

### `property:remove`

Verwijder een eigenschap van een bestand (standaard: actief bestand).

```bash
name=<name>        # (verplicht) eigenschapnaam
file=<name>        # bestandsnaam
path=<path>        # bestandspad
```

### `property:read`

Lees een eigenschapwaarde van een bestand (standaard: actief bestand).

```bash
name=<name>        # (verplicht) eigenschapnaam
file=<name>        # bestandsnaam
path=<path>        # bestandspad
```

## Publish

Opdrachten voor [[Inleiding tot Obsidian Publish|Obsidian Publish]].

### `publish:site`

Toon publish-site-informatie (slug, URL).

### `publish:list`

Lijst gepubliceerde bestanden op.

```bash
total              # retourneer aantal gepubliceerde bestanden
```

### `publish:status`

Lijst publish-wijzigingen op.

```bash
total              # retourneer aantal wijzigingen
new                # toon alleen nieuwe bestanden
changed            # toon alleen gewijzigde bestanden
deleted            # toon alleen verwijderde bestanden
```

### `publish:add`

Publiceer een bestand of alle gewijzigde bestanden (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad

changed            # publiceer alle gewijzigde bestanden
```

### `publish:remove`

Haal publicatie van een bestand terug (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
```

### `publish:open`

Open bestand op de gepubliceerde site (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
```

## Willekeurige notities

Opdrachten voor [[Willekeurige notitie]].

### `random`

Open een willekeurige notitie.

```bash
folder=<path>      # beperk tot map

newtab             # openen in nieuw tabblad
```

### `random:read`

Lees een willekeurige notitie (inclusief pad).

```bash
folder=<path>      # beperk tot map
```

## Zoeken

Opdrachten voor [[Zoeken]].

### `search`

Doorzoek de kluis op tekst. Retourneert overeenkomende bestandspaden.

```bash
query=<text>       # (verplicht) zoekterm
path=<folder>      # beperk tot map
limit=<n>          # max bestanden
format=text|json   # uitvoerformaat (standaard: text)

total              # retourneer aantal overeenkomsten
case               # hoofdlettergevoelig
```

### `search:context`

Zoek met overeenkomende regelcontext. Retourneert grep-stijl `pad:regel: tekst` uitvoer.

```bash
query=<text>       # (verplicht) zoekterm
path=<folder>      # beperk tot map
limit=<n>          # max bestanden
format=text|json   # uitvoerformaat (standaard: text)

case               # hoofdlettergevoelig
```

### `search:open`

Open zoekweergave.

```bash
query=<text>       # initiële zoekterm
```

## Sync

Opdrachten voor [[Introductie tot Obsidian Sync|Obsidian Sync]].

> [!tip] Synchroniseren zonder de desktop-app
> Deze opdrachten bedienen Sync binnen de actieve Obsidian-app. Om kluizen te synchroniseren vanaf de opdrachtregel zonder de desktop-app, zie [[Headless Sync]].

### `sync`

Pauzeer of hervat synchronisatie.

```bash
on                 # synchronisatie hervatten
off                # synchronisatie pauzeren
```

### `sync:status`

Toon synchronisatiestatus en gebruik.

### `sync:history`

Lijst sync-versiegeschiedenis voor een bestand op (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad

total              # retourneer aantal versies
```

### `sync:read`

Lees een sync-versie (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
version=<n>        # (verplicht) versienummer
```

### `sync:restore`

Herstel een sync-versie (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
version=<n>        # (verplicht) versienummer
```

### `sync:open`

Open sync-geschiedenis (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
```

### `sync:deleted`

Lijst verwijderde bestanden in sync op.

```bash
total              # retourneer aantal verwijderde bestanden
```

## Labels

Opdrachten voor [[Labels]].

### `tags`

Lijst labels in de kluis op. Gebruik `active` of `file`/`path` om labels voor een specifiek bestand te tonen.

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad
sort=count         # sorteer op telling (standaard: naam)

total              # retourneer aantal labels
counts             # inclusief labeltellingen
format=json|tsv|csv  # uitvoerformaat (standaard: tsv)
active             # toon labels voor actief bestand
```

### `tag`

Haal labelinformatie op.

```bash
name=<tag>         # (verplicht) labelnaam

total              # retourneer aantal voorkomens
verbose            # inclusief bestandslijst en telling
```

## Taken

Opdrachten voor taakbeheer.

### `tasks`

Lijst taken in de kluis op. Gebruik `active` of `file`/`path` om taken voor een specifiek bestand te tonen.

```bash
file=<name>        # filter op bestandsnaam
path=<path>        # filter op bestandspad
status="<char>"    # filter op statusteken

total              # retourneer aantal taken
done               # toon voltooide taken
todo               # toon onvoltooide taken
verbose            # groepeer per bestand met regelnummers
format=json|tsv|csv  # uitvoerformaat (standaard: text)
active             # toon taken voor actief bestand
daily              # toon taken van dagelijkse notitie
```

**Voorbeelden:**

```bash
# Lijst alle taken in de kluis op
tasks

# Lijst onvoltooide taken in de kluis op
tasks todo

# Lijst voltooide taken van een specifiek bestand op
tasks file=Recept done

# Lijst taken van de dagelijkse notitie van vandaag op
tasks daily

# Tel taken in dagelijkse notitie
tasks daily total

# Lijst taken met bestandspaden en regelnummers op
tasks verbose

# Filter op aangepaste status (speciale tekens tussen aanhalingstekens)
tasks 'status=?'
```

### `task`

Toon of werk een taak bij.

```bash
ref=<path:line>    # taakreferentie (pad:regel)
file=<name>        # bestandsnaam
path=<path>        # bestandspad
line=<n>           # regelnummer
status="<char>"    # stel statusteken in

toggle             # taakstatus wisselen
daily              # dagelijkse notitie
done               # markeer als voltooid
todo               # markeer als te doen
```

**Voorbeelden:**

```bash
# Toon taakinformatie
task file=Recept line=8
task ref="Recept.md:8"

# Wissel taakvoltooiing
task ref="Recept.md:8" toggle

# Wissel taak in dagelijkse notitie
task daily line=3 toggle

# Stel taakstatus in
task file=Recept line=8 done      # → [x]
task file=Recept line=8 todo      # → [ ]
task file=Recept line=8 status=-  # → [-]
task daily line=3 done            # Markeer taak in dagelijkse notitie als voltooid
```


## Sjablonen

Opdrachten voor [[Sjablonen]].

### `templates`

Lijst sjablonen op.

```bash
total              # retourneer aantal sjablonen
```

### `template:read`

Lees sjablooninhoud.

```bash
name=<template>    # (verplicht) sjabloonnaam
title=<title>      # titel voor variabelenresolutie

resolve            # sjabloonvariabelen oplossen
```

### `template:insert`

Voeg sjabloon in het actieve bestand in.

```bash
name=<template>    # (verplicht) sjabloonnaam
```

**Opmerkingen:**
- De optie `resolve` verwerkt `{{date}}`-, `{{time}}`- en `{{title}}`-variabelen
- Gebruik `create path=<pad> template=<naam>` om een bestand aan te maken met een sjabloon

## Thema's en snippets

Opdrachten voor [[Thema's]] en [[CSS-fragmenten]].

### `themes`

Lijst geïnstalleerde thema's op.

```bash
versions           # inclusief versienummers
```

### `theme`

Toon actief thema of haal informatie op.

```bash
name=<name>        # themanaam voor details
```

### `theme:set`

Stel actief thema in.

```bash
name=<name>        # (verplicht) themanaam (leeg voor standaard)
```

### `theme:install`

Installeer een communitythema.

```bash
name=<name>        # (verplicht) themanaam

enable             # activeren na installatie
```

### `theme:uninstall`

Verwijder een thema.

```bash
name=<name>        # (verplicht) themanaam
```

### `snippets`

Lijst geïnstalleerde CSS-snippets op.

### `snippets:enabled`

Lijst ingeschakelde CSS-snippets op.

### `snippet:enable`

Schakel een CSS-snippet in.

```bash
name=<name>        # (verplicht) snippetnaam
```

### `snippet:disable`

Schakel een CSS-snippet uit.

```bash
name=<name>        # (verplicht) snippetnaam
```

## Unieke notities

Opdrachten voor [[Uniekenotitiesmaker]].

### `unique`

Maak een unieke notitie aan.

```bash
name=<text>        # notitienaam
content=<text>     # initiële inhoud
paneType=tab|split|window    # paneeltype om in te openen

open               # bestand openen na aanmaken
```

## Kluis

### `vault`

Toon kluisinformatie.

```bash
info=name|path|files|folders|size  # retourneer alleen specifieke informatie
```

### `vaults`

Lijst bekende kluizen op.

```bash
total              # retourneer aantal kluizen
verbose            # inclusief kluispaden
```

### `vault:open`

Schakel naar een andere kluis (alleen TUI).

```bash
name=<name>        # (verplicht) kluisnaam
```

## Webviewer

Opdrachten voor [[Webviewer]].

### `web`

Open URL in webviewer.

```bash
url=<url>          # (verplicht) te openen URL

newtab             # openen in nieuw tabblad
```

## Woordenaantal

Opdrachten voor [[Woordenaantal]].

### `wordcount`

Tel woorden en tekens (standaard: actief bestand).

```bash
file=<name>        # bestandsnaam
path=<path>        # bestandspad

words              # retourneer alleen woordenaantal
characters         # retourneer alleen aantal tekens
```

## Werkruimte

Opdrachten voor [[Werkruimte]] en de [[Werkbladen]]-plug-in.

### `workspace`

Toon werkruimtestructuur.

```bash
ids                # inclusief werkruimte-item-ID's
```

### `workspaces`

Lijst opgeslagen werkruimten op.

```bash
total              # retourneer aantal werkruimten
```

### `workspace:save`

Sla de huidige lay-out op als werkruimte.

```bash
name=<name>        # werkruimtenaam
```

### `workspace:load`

Laad een opgeslagen werkruimte.

```bash
name=<name>        # (verplicht) werkruimtenaam
```

### `workspace:delete`

Verwijder een opgeslagen werkruimte.

```bash
name=<name>        # (verplicht) werkruimtenaam
```

### `tabs`

Lijst geopende tabbladen op.

```bash
ids                # inclusief tabblad-ID's
```

### `tab:open`

Open een nieuw tabblad.

```bash
group=<id>         # tabbladgroep-ID
file=<path>        # te openen bestand
view=<type>        # te openen weergavetype
```

### `recents`

Lijst recent geopende bestanden op.

```bash
total              # retourneer aantal recente bestanden
```

## Ontwikkelaarsopdrachten

Opdrachten om je te helpen bij het ontwikkelen van [[Communityplug-ins]] en [[Thema's]]. Meer informatie vind je in de [Obsidian Developer Documentation](https://docs.obsidian.md).

### `devtools`

Schakel Electron-ontwikkelaarstools in of uit.

### `dev:debug`

Koppel Chrome DevTools Protocol debugger aan of los.

```bash
on                 # debugger koppelen
off                # debugger loskoppelen
```

### `dev:cdp`

Voer een Chrome DevTools Protocol opdracht uit.

```bash
method=<CDP.method>  # (verplicht) CDP-methode om aan te roepen
params=<json>        # methodeparameters als JSON
```

### `dev:errors`

Toon vastgelegde JavaScript-fouten.

```bash
clear              # foutbuffer wissen
```

### `dev:screenshot`

Maak een schermafbeelding (retourneert base64 PNG).

```bash
path=<filename>    # uitvoerbestandspad
```

### `dev:console`

Toon vastgelegde consoleberichten.

```bash
limit=<n>                        # max berichten om te tonen (standaard 50)
level=log|warn|error|info|debug  # filter op logniveau

clear                            # consolebuffer wissen
```

### `dev:css`

Inspecteer CSS met bronlocaties.

```bash
selector=<css>     # (verplicht) CSS-selector
prop=<name>        # filter op eigenschapnaam
```

### `dev:dom`

Bevraag DOM-elementen.

```bash
selector=<css>     # (verplicht) CSS-selector
attr=<name>        # attribuutwaarde ophalen
css=<prop>         # CSS-eigenschapwaarde ophalen

total              # retourneer aantal elementen
text               # retourneer tekstinhoud
inner              # retourneer innerHTML in plaats van outerHTML
all                # retourneer alle overeenkomsten in plaats van de eerste
```

### `dev:mobile`

Schakel mobiele emulatie in of uit.

```bash
on                 # mobiele emulatie inschakelen
off                # mobiele emulatie uitschakelen
```

### `eval`

Voer JavaScript uit en retourneer het resultaat.

```bash
code=<javascript>  # (verplicht) uit te voeren JavaScript-code
```

## Sneltoetsen

Deze sneltoetsen zijn beschikbaar in de [[#De terminalinterface gebruiken|TUI]].

### Navigatie

| Actie                                                        | Sneltoets       |
| ------------------------------------------------------------ | --------------- |
| Cursor naar links verplaatsen                                | `←` / `Ctrl+B`  |
| Cursor naar rechts verplaatsen (accepteert suggestie aan het einde van de regel) | `→` / `Ctrl+F`  |
| Naar begin van de regel springen                             | `Ctrl+A`        |
| Naar einde van de regel springen                             | `Ctrl+E`        |
| Een woord terug                                              | `Alt+B`         |
| Een woord vooruit                                            | `Alt+F`         |

### Bewerken

| Actie                          | Sneltoets                    |
| ------------------------------ | ---------------------------- |
| Verwijderen tot begin van regel | `Ctrl+U`                     |
| Verwijderen tot einde van regel | `Ctrl+K`                     |
| Vorig woord verwijderen        | `Ctrl+W` / `Alt+Backspace`   |

### Automatisch aanvullen

| Actie                                                    | Sneltoets    |
| -------------------------------------------------------- | ------------ |
| Suggestiemodus openen / geselecteerde suggestie accepteren | `Tab`        |
| Suggestiemodus verlaten                                   | `Shift+Tab`  |
| Suggestiemodus openen (vanuit nieuwe invoer)              | `↓`          |
| Eerste/geselecteerde suggestie accepteren (aan einde van regel) | `→`     |

### Geschiedenis

| Actie                                                             | Sneltoets       |
| ----------------------------------------------------------------- | --------------- |
| Vorig geschiedenisitem / suggesties omhoog navigeren              | `↑` / `Ctrl+P`  |
| Volgend geschiedenisitem / suggesties omlaag navigeren            | `↓` / `Ctrl+N`  |
| Omgekeerd zoeken in geschiedenis (typ om te filteren, `Ctrl+R` om te bladeren) | `Ctrl+R`  |

### Overig

| Actie                                                    | Sneltoets            |
| -------------------------------------------------------- | -------------------- |
| Opdracht uitvoeren of suggestie accepteren               | `Enter`              |
| Automatisch aanvullen ongedaan maken / suggestiemodus verlaten / invoer wissen | `Escape`  |
| Scherm wissen                                            | `Ctrl+L`             |
| Afsluiten                                                | `Ctrl+C` / `Ctrl+D`  |

## Probleemoplossing

Als je problemen hebt met het uitvoeren van Obsidian CLI:

- Zorg ervoor dat je de nieuwste [[Obsidian bijwerken|Obsidian installatieprogrammaversie]] (1.12.7 of hoger) gebruikt.
- Als je Obsidian net hebt bijgewerkt vanuit een eerdere versie, schakel dan de CLI-instelling uit en weer in, en laat Obsidian vervolgens de automatische PATH-registratie uitvoeren.
- Herstart je terminal na het registreren van de CLI zodat de PATH-wijzigingen van kracht worden.
- Obsidian moet actief zijn. De CLI maakt verbinding met de actieve Obsidian-instantie.

### Windows

Obsidian CLI op Windows vereist het Obsidian 1.12.7+ installatieprogramma. Zie [[Obsidian bijwerken|Installatieprogrammaversie-update]].

Windows gebruikt een terminal-redirector die Obsidian correct verbindt met stdin/stdout. Dit is nodig omdat Obsidian normaal als GUI-app draait, wat incompatibel is met terminaluitvoer op Windows. Wanneer je Obsidian 1.12.7+ installeert, wordt de `Obsidian.com` terminal-redirector toegevoegd in de map waar je het `Obsidian.exe`-bestand hebt geïnstalleerd.

De CLI-registratie voegt Obsidian toe aan de PATH-variabele van je gebruiker, wat pas van kracht wordt nadat je de terminal opnieuw hebt gestart.

### macOS

De CLI-registratie maakt een symlink aan op `/usr/local/bin/obsidian` die verwijst naar het CLI-binaire bestand dat bij de app is gebundeld. Hiervoor zijn beheerdersbevoegdheden vereist — je wordt gevraagd via een systeemvenster.

Controleer of de symlink bestaat en naar het juiste binaire bestand verwijst:

```
ls -l /usr/local/bin/obsidian
```

Als de symlink ontbreekt, maak deze dan handmatig aan:

```
sudo ln -sf /Applications/Obsidian.app/Contents/MacOS/obsidian-cli /usr/local/bin/obsidian
```

> [!note] Als je de CLI eerder hebt geregistreerd met een oudere versie van Obsidian, heb je mogelijk een overgebleven PATH-vermelding in `~/.zprofile`. Het nieuwe registratieproces verwijdert deze automatisch, maar als deze blijft staan, kun je de regels die beginnen met `# Added by Obsidian` veilig verwijderen uit `~/.zprofile`.

### Linux

De CLI-registratie kopieert het CLI-binaire bestand naar `~/.local/bin/obsidian`. Dit wordt gedaan omdat sommige Linux-installatiemethoden vanuit tijdelijke mappen draaien die niet persistent gesymlinkt kunnen worden.

Zorg ervoor dat `~/.local/bin` in je PATH staat. Voeg het volgende toe aan je `~/.bashrc` of `~/.zshrc` als dat niet het geval is:

```
export PATH="$PATH:$HOME/.local/bin"
```

Controleer of het binaire bestand bestaat:

```
ls -l ~/.local/bin/obsidian
```

Als het binaire bestand ontbreekt, kopieer het dan handmatig vanuit de Obsidian-installatiemap:

```
cp /pad/naar/Obsidian/obsidian-cli ~/.local/bin/obsidian
chmod 755 ~/.local/bin/obsidian
```
