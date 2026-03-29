---
permalink: cli
description: Alt du kan gjøre i Obsidian kan gjøres fra kommandolinjen.
---
Obsidian CLI er et kommandolinjegrensesnitt som lar deg styre Obsidian fra terminalen din for skripting, automatisering og integrasjon med eksterne verktøy.

Alt du kan gjøre i Obsidian kan du gjøre fra kommandolinjen. Obsidian CLI inkluderer til og med [[#Utviklerkommandoer|utviklerkommandoer]] for å få tilgang til utviklerverktøy, inspisere elementer, ta skjermbilder, laste inn tillegg på nytt og mer.

![[obsidian-cli.mp4#interface]]

> [!warning] Krever Obsidian 1.12-installasjonsprogram
> Bruk av CLI krever Obsidian 1.12-installasjonsprogrammet. Se [[Oppdater Obsidian#Oppdateringer av installasjonsprogram|veiledning for oppdatering av installasjonsversjon]].

## Installer Obsidian CLI

Oppgrader til den nyeste [[Oppdater Obsidian|Obsidian-installasjonsversjonen]] (1.11.7) og den nyeste [[Tidlig tilgang-versjoner|tidlig tilgang-versjonen]] (1.12.x).

Aktiver Obsidian CLI i Obsidian:

1. Gå til **Innstillinger** → **Generelt**.
2. Aktiver **Kommandolinjegrensesnitt**.
3. Følg instruksjonene for å registrere Obsidian CLI.

Hvis du har problemer med å installere Obsidian CLI, se [[#Feilsøking]].

## Kom i gang

Obsidian CLI støtter både enkeltkommandoer og et terminalbrukergrensesnitt (TUI) med interaktiv hjelp og autofullføring.

> [!info] Obsidian-appen må kjøre
> Obsidian CLI krever at Obsidian-appen kjører. Hvis Obsidian ikke kjører, vil den første kommandoen du kjører starte Obsidian.
>
> Vil du synkronisere uten skrivebordsappen? Se [[Hodeløs Sync|Obsidian Headless]].

### Kjør en kommando

Kjør en individuell kommando uten å åpne TUI:

```shell
# Kjør hjelpekommandoen
obsidian help
```

### Bruk terminalgrensesnittet

Bruk TUI ved å skrive `obsidian`. Påfølgende kommandoer kan skrives inn uten `obsidian`.

```shell
# Åpne TUI, kjør deretter hjelp
obsidian
help
```

TUI støtter autofullføring, kommandohistorikk og omvendt søk. Bruk `Ctrl+R` for å søke i kommandohistorikken. Se [[#Hurtigtaster]] for alle tilgjengelige snarveier.

## Eksempler

Her er noen eksempler på hva Obsidian CLI kan gjøre.

### Daglig bruk

```shell
# Åpne dagens daglige notat
obsidian daily

# Legg til en oppgave i det daglige notatet
obsidian daily:append content="- [ ] Kjøpe dagligvarer"

# Søk i hvelvet
obsidian search query="møtenotater"

# Les den aktive filen
obsidian read

# List alle oppgaver fra det daglige notatet
obsidian tasks daily

# Opprett et nytt notat fra en mal
obsidian create name="Tur til Paris" template=Reise

# List alle tagger i hvelvet med antall
obsidian tags counts

# Sammenlign to versjoner av en fil
obsidian diff file=README from=1 to=3
```

### For utviklere

Mange [[#Utviklerkommandoer]] er tilgjengelige for utvikling av tillegg og temaer. Disse kommandoene lar agentiske kodeverktøy automatisk teste og feilsøke.

```shell
# Åpne utviklerverktøy
obsidian devtools

# Last inn et community-tillegg du utvikler på nytt
obsidian plugin:reload id=my-plugin

# Ta et skjermbilde av appen
obsidian dev:screenshot path=screenshot.png

# Kjør JavaScript i app-konsollen
obsidian eval code="app.vault.getFiles().length"
```

## Slik gjør du det

### Bruk parametere og flagg

Kommandoer kan bruke **parametere** og **flagg**. De fleste kommandoer krever ingen parametere eller flagg. Påkrevde parametere er merket som `required`. For eksempel:

```shell
# Opprett et nytt notat med standardnavnet "Uten tittel"
obsidian create
```

En **parameter** tar en verdi, skrevet som `parameter=verdi`. Hvis verdien har mellomrom, sett den i anførselstegn:

```shell
# Opprett et nytt notat kalt "Notat" med innhold "Hei verden"
obsidian create name=Notat content="Hei verden"
```

Et **flagg** er en boolsk bryter uten verdi. Inkluder det for å slå det på, for eksempel er `open` og `overwrite` flagg:

```shell
# Opprett et notat og åpne det
obsidian create name=Notat content="Hei" open overwrite
```

For flerlinjet innhold, bruk `\n` for ny linje. Bruk `\t` for tabulator.

```bash
obsidian create name=Notat content="# Tittel\n\nBrødtekst"
```

### Målrett et hvelv

Hvis terminalens gjeldende arbeidskatalog er en hvelvmappe, brukes det hvelvet som standard. Ellers brukes det aktive hvelvet.

Bruk `vault=<navn>` eller `vault=<id>` for å målrette et spesifikt hvelv. Dette må være den første parameteren før kommandoen din:

```shell
obsidian vault=Notater daily
obsidian vault="Mitt Hvelv" search query="test"
```

I TUI, bruk `vault:open <navn>` eller `<id>` for å bytte til et annet hvelv.

### Målrett en fil

Mange kommandoer aksepterer `file`- og `path`-parametere for å målrette en spesifikk fil. Hvis ingen er oppgitt, bruker kommandoen den aktive filen som standard.

- `file=<navn>` løser filen ved å bruke samme lenkeoppløsning som [[Interne lenker|wiki-lenker]], og matcher på filnavn uten å kreve full bane eller filtype.
- `path=<bane>` krever den nøyaktige banen fra hvelvroten, f.eks. `mappe/notat.md`.

```shell
# Disse er likeverdige hvis "Oppskrift.md" er den eneste filen med det navnet
obsidian read file=Oppskrift
obsidian read path="Maler/Oppskrift.md"
```

### Kopier utdata

Legg til `--copy` på hvilken som helst kommando for å kopiere utdataene til utklippstavlen:

```shell
read --copy
search query="TODO" --copy
```


## Generelle kommandoer

### `help`

Vis liste over alle tilgjengelige kommandoer.

| Parameter   | Beskrivelse                              |
| ----------- | ---------------------------------------- |
| `<command>` | Vis hjelp for en spesifikk kommando.     |

### `version`

Vis Obsidian-versjon.

### `reload`

Last inn app-vinduet på nytt.

### `restart`

Start appen på nytt.


## Bases

Kommandoer for [[Introduksjon til Bases|Bases]].

### `bases`

List alle `.base`-filer i hvelvet.

### `base:views`

List visninger i den gjeldende base-filen.

### `base:create`

Opprett et nytt element i en base. Bruker den aktive base-visningen som standard hvis ingen fil er spesifisert.

```bash
file=<name>        # base-filnavn
path=<path>        # base-filbane
view=<name>        # visningsnavn
name=<name>        # nytt filnavn
content=<text>     # innledende innhold

open               # åpne fil etter opprettelse
newtab             # åpne i ny fane
```

### `base:query`

Spør en base og returner resultater.

```bash
file=<name>                    # base-filnavn
path=<path>                    # base-filbane
view=<name>                    # visningsnavn å spørre
format=json|csv|tsv|md|paths   # utdataformat (standard: json)
```

## Bokmerker

Kommandoer for [[Bokmerker]].

### `bookmarks`

List bokmerker.

```bash
total              # returner antall bokmerker
verbose            # inkluder bokmerketyper
format=json|tsv|csv  # utdataformat (standard: tsv)
```

### `bookmark`

Legg til et bokmerke.

```bash
file=<path>        # fil å bokmerke
subpath=<subpath>  # underbane (overskrift eller blokk) i filen
folder=<path>      # mappe å bokmerke
search=<query>     # søkespørring å bokmerke
url=<url>          # URL å bokmerke
title=<title>      # bokmerketittel
```

## Kommandopalett

Kommandoer for [[Kommandovelger]] og [[Hurtigtaster]]. Dette inkluderer alle kommandoer registrert av tillegg.

### `commands`

List tilgjengelige kommando-IDer.

```bash
filter=<prefix>    # filtrer etter ID-prefiks
```

### `command`

Kjør en Obsidian-kommando.

```bash
id=<command-id>    # (påkrevd) kommando-ID å kjøre
```

### `hotkeys`

List hurtigtaster for alle kommandoer.

```bash
total              # returner antall hurtigtaster
verbose            # vis om hurtigtast er tilpasset
format=json|tsv|csv  # utdataformat (standard: tsv)
```

### `hotkey`

Hent hurtigtast for en kommando.

```bash
id=<command-id>    # (påkrevd) kommando-ID

verbose            # vis om tilpasset eller standard
```

## Daglige notater

Kommandoer for [[Daglige notater]].

### `daily`

Åpne daglig notat.

```bash
paneType=tab|split|window    # paneltype å åpne i
```

### `daily:path`

Hent bane til daglig notat. Returnerer den forventede banen selv om filen ikke er opprettet ennå.

### `daily:read`

Les innholdet i det daglige notatet.

### `daily:append`

Legg til innhold på slutten av det daglige notatet.

```bash
content=<text>     # (påkrevd) innhold å legge til
paneType=tab|split|window    # paneltype å åpne i

inline             # legg til uten ny linje
open               # åpne fil etter tillegg
```

### `daily:prepend`

Legg til innhold i begynnelsen av det daglige notatet.

```bash
content=<text>     # (påkrevd) innhold å legge til i begynnelsen
paneType=tab|split|window    # paneltype å åpne i

inline             # legg til uten ny linje
open               # åpne fil etter tillegg
```

## Filhistorikk

### `diff`

List eller sammenlign versjoner fra lokal [[Filgjenoppretting]] og [[Introduksjon til Obsidian Sync|Sync]]. Versjoner er nummerert fra nyeste til eldste.

```bash
file=<name>          # filnavn
path=<path>          # filbane
from=<n>             # versjonsnummer å sammenligne fra
to=<n>               # versjonsnummer å sammenligne til
filter=local|sync    # filtrer etter versjonskilde
```

**Eksempler:**

```shell
# List alle versjoner av den aktive filen
diff

# List alle versjoner av en spesifikk fil
diff file=Oppskrift

# Sammenlign den nyeste versjonen med den gjeldende filen
diff file=Oppskrift from=1

# Sammenlign to versjoner
diff file=Oppskrift from=2 to=1

# Vis kun Sync-versjoner
diff filter=sync
```

### `history`

List versjoner kun fra [[Filgjenoppretting]]. Se [[#Sync|sync:history]] for den tilsvarende Sync-kommandoen.

```bash
file=<name>        # filnavn
path=<path>        # filbane
```

### `history:list`

List alle filer med lokal historikk.

### `history:read`

Les en lokal historikkversjon.

```bash
file=<name>        # filnavn
path=<path>        # filbane
version=<n>        # versjonsnummer (standard: 1)
```

### `history:restore`

Gjenopprett en lokal historikkversjon.

```bash
file=<name>        # filnavn
path=<path>        # filbane
version=<n>        # (påkrevd) versjonsnummer
```

### `history:open`

Åpne filgjenoppretting.

```bash
file=<name>        # filnavn
path=<path>        # filbane
```

## Filer og mapper

### `file`

Vis filinformasjon (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane
```

Eksempel:

```
path       Notater/Oppskrift.md
name       Oppskrift
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

List filer i hvelvet.

```bash
folder=<path>      # filtrer etter mappe
ext=<extension>    # filtrer etter filtype

total              # returner antall filer
```

### `folder`

Vis mappeinformasjon.

```bash
path=<path>              # (påkrevd) mappebane
info=files|folders|size  # returner kun spesifikk informasjon
```

### `folders`

List mapper i hvelvet.

```bash
folder=<path>      # filtrer etter overordnet mappe

total              # returner antall mapper
```

### `open`

Åpne en fil.

```bash
file=<name>        # filnavn
path=<path>        # filbane

newtab             # åpne i ny fane
```

### `create`

Opprett eller overskriv en fil.

```bash
name=<name>        # filnavn
path=<path>        # filbane
content=<text>     # innledende innhold
template=<name>    # mal å bruke

overwrite          # overskriv hvis filen finnes
open               # åpne fil etter opprettelse
newtab             # åpne i ny fane
```

### `read`

Les filinnhold (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane
```

### `append`

Legg til innhold på slutten av en fil (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane
content=<text>     # (påkrevd) innhold å legge til

inline             # legg til uten ny linje
```

### `prepend`

Legg til innhold etter startmetadata (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane
content=<text>     # (påkrevd) innhold å legge til i begynnelsen

inline             # legg til uten ny linje
```

### `move`

Flytt eller gi nytt navn til en fil (standard: aktiv fil). Dette vil automatisk oppdatere [[Interne lenker|interne lenker]] hvis det er slått på i [[Innstillinger#Alltid oppdater lenker|hvelvinnstillingene]] dine.

```bash
file=<name>        # filnavn
path=<path>        # filbane
to=<path>          # (påkrevd) målmappe eller bane
```

### `rename`

Gi nytt navn til en fil (standard: aktiv fil). Filtypen bevares automatisk hvis den utelates fra det nye navnet. Bruk [[#`move`|move]] for å gi nytt navn og flytte en fil samtidig. Dette vil automatisk oppdatere [[Interne lenker|interne lenker]] hvis det er slått på i [[Innstillinger#Alltid oppdater lenker|hvelvinnstillingene]] dine.

```bash
file=<name>        # filnavn
path=<path>        # filbane
name=<name>        # (påkrevd) nytt filnavn
```

### `delete`

Slett en fil (standard: aktiv fil, papirkurv som standard).

```bash
file=<name>        # filnavn
path=<path>        # filbane

permanent          # hopp over papirkurv, slett permanent
```

## Lenker

Kommandoer for [[Lenker tilbake]] og [[Outgoing Links]].

### `backlinks`

List tilbakelenker til en fil (standard: aktiv fil).

```bash
file=<name>        # målfilnavn
path=<path>        # målfilbane

counts             # inkluder antall lenker
total              # returner antall tilbakelenker
format=json|tsv|csv  # utdataformat (standard: tsv)
```

### `links`

List utgående lenker fra en fil (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane

total              # returner antall lenker
```

### `unresolved`

List uløste lenker i hvelvet.

```bash
total              # returner antall uløste lenker
counts             # inkluder antall lenker
verbose            # inkluder kildefiler
format=json|tsv|csv  # utdataformat (standard: tsv)
```

### `orphans`

List filer uten innkommende lenker.

```bash
total              # returner antall foreldreløse
```

### `deadends`

List filer uten utgående lenker.

```bash
total              # returner antall blindveier
```

## Disposisjon

Kommandoer for [[Disposisjon]].

### `outline`

Vis overskrifter for den gjeldende filen.

```bash
file=<name>        # filnavn
path=<path>        # filbane
format=tree|md|json  # utdataformat (standard: tree)

total              # returner antall overskrifter
```

## Utvidelser

Kommandoer for [[Kjerneutvidelser]] og [[Community-utvidelser]].

### `plugins`

List installerte tillegg.

```bash
filter=core|community  # filtrer etter tilleggstype

versions               # inkluder versjonsnumre
format=json|tsv|csv    # utdataformat (standard: tsv)
```

### `plugins:enabled`

List aktiverte tillegg.

```bash
filter=core|community  # filtrer etter tilleggstype

versions               # inkluder versjonsnumre
format=json|tsv|csv    # utdataformat (standard: tsv)
```

### `plugins:restrict`

Slå av/på eller sjekk begrenset modus.

```bash
on                 # aktiver begrenset modus
off                # deaktiver begrenset modus
```

### `plugin`

Hent tilleggsinformasjon.

```bash
id=<plugin-id>     # (påkrevd) tilleggs-ID
```

### `plugin:enable`

Aktiver et tillegg.

```bash
id=<id>                # (påkrevd) tilleggs-ID
filter=core|community  # tilleggstype
```

### `plugin:disable`

Deaktiver et tillegg.

```bash
id=<id>                # (påkrevd) tilleggs-ID
filter=core|community  # tilleggstype
```

### `plugin:install`

Installer et community-tillegg.

```bash
id=<id>            # (påkrevd) tilleggs-ID

enable             # aktiver etter installasjon
```

### `plugin:uninstall`

Avinstaller et community-tillegg.

```bash
id=<id>            # (påkrevd) tilleggs-ID
```

### `plugin:reload`

Last inn et tillegg på nytt (for utviklere).

```bash
id=<id>            # (påkrevd) tilleggs-ID
```

## Egenskaper

Kommandoer relatert til [[Egenskaper]].

### `aliases`

List aliaser i hvelvet. Bruk `active` eller `file`/`path` for å vise aliaser for en spesifikk fil.

```bash
file=<name>        # filnavn
path=<path>        # filbane

total              # returner antall aliaser
verbose            # inkluder filbaner
active             # vis aliaser for aktiv fil
```

### `properties`

List egenskaper i hvelvet. Bruk `active` eller `file`/`path` for å vise egenskaper for en spesifikk fil.

```bash
file=<name>        # vis egenskaper for fil
path=<path>        # vis egenskaper for bane
name=<name>        # hent antall for spesifikk egenskap
sort=count         # sorter etter antall (standard: navn)
format=yaml|json|tsv  # utdataformat (standard: yaml)

total              # returner antall egenskaper
counts             # inkluder forekomsttall
active             # vis egenskaper for aktiv fil
```

### `property:set`

Sett en egenskap på en fil (standard: aktiv fil).

```bash
name=<name>                                    # (påkrevd) egenskapsnavn
value=<value>                                  # (påkrevd) egenskapsverdi
type=text|list|number|checkbox|date|datetime   # egenskapstype
file=<name>                                    # filnavn
path=<path>                                    # filbane
```

### `property:remove`

Fjern en egenskap fra en fil (standard: aktiv fil).

```bash
name=<name>        # (påkrevd) egenskapsnavn
file=<name>        # filnavn
path=<path>        # filbane
```

### `property:read`

Les en egenskapsverdi fra en fil (standard: aktiv fil).

```bash
name=<name>        # (påkrevd) egenskapsnavn
file=<name>        # filnavn
path=<path>        # filbane
```

## Publish

Kommandoer for [[Introduksjon til Obsidian Publish|Obsidian Publish]].

### `publish:site`

Vis informasjon om publiseringsnettstedet (slug, URL).

### `publish:list`

List publiserte filer.

```bash
total              # returner antall publiserte filer
```

### `publish:status`

List publiseringsendringer.

```bash
total              # returner antall endringer
new                # vis kun nye filer
changed            # vis kun endrede filer
deleted            # vis kun slettede filer
```

### `publish:add`

Publiser en fil eller alle endrede filer (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane

changed            # publiser alle endrede filer
```

### `publish:remove`

Avpubliser en fil (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane
```

### `publish:open`

Åpne fil på publisert nettsted (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane
```

## Tilfeldige notater

Kommandoer for [[Tilfeldig notat]].

### `random`

Åpne et tilfeldig notat.

```bash
folder=<path>      # begrens til mappe

newtab             # åpne i ny fane
```

### `random:read`

Les et tilfeldig notat (inkluderer bane).

```bash
folder=<path>      # begrens til mappe
```

## Søk

Kommandoer for [[Søk]].

### `search`

Søk i hvelvet etter tekst. Returnerer matchende filbaner.

```bash
query=<text>       # (påkrevd) søkespørring
path=<folder>      # begrens til mappe
limit=<n>          # maks antall filer
format=text|json   # utdataformat (standard: text)

total              # returner antall treff
case               # skill mellom store og små bokstaver
```

### `search:context`

Søk med matchende linjekontekst. Returnerer grep-lignende `bane:linje: tekst`-utdata.

```bash
query=<text>       # (påkrevd) søkespørring
path=<folder>      # begrens til mappe
limit=<n>          # maks antall filer
format=text|json   # utdataformat (standard: text)

case               # skill mellom store og små bokstaver
```

### `search:open`

Åpne søkevisning.

```bash
query=<text>       # innledende søkespørring
```

## Sync

Kommandoer for [[Introduksjon til Obsidian Sync|Obsidian Sync]].

> [!tip] Synkroniser uten skrivebordsappen
> Disse kommandoene styrer Sync i den kjørende Obsidian-appen. For å synkronisere hvelv fra kommandolinjen uten skrivebordsappen, se [[Hodeløs Sync]].

### `sync`

Pause eller gjenoppta synkronisering.

```bash
on                 # gjenoppta synkronisering
off                # pause synkronisering
```

### `sync:status`

Vis synkroniseringsstatus og bruk.

### `sync:history`

List synkroniseringsversjonshistorikk for en fil (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane

total              # returner antall versjoner
```

### `sync:read`

Les en synkroniseringsversjon (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane
version=<n>        # (påkrevd) versjonsnummer
```

### `sync:restore`

Gjenopprett en synkroniseringsversjon (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane
version=<n>        # (påkrevd) versjonsnummer
```

### `sync:open`

Åpne synkroniseringshistorikk (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane
```

### `sync:deleted`

List slettede filer i synkronisering.

```bash
total              # returner antall slettede filer
```

## Tagger

Kommandoer for [[Tagger]].

### `tags`

List tagger i hvelvet. Bruk `active` eller `file`/`path` for å vise tagger for en spesifikk fil.

```bash
file=<name>        # filnavn
path=<path>        # filbane
sort=count         # sorter etter antall (standard: navn)

total              # returner antall tagger
counts             # inkluder antall tagger
format=json|tsv|csv  # utdataformat (standard: tsv)
active             # vis tagger for aktiv fil
```

### `tag`

Hent tagginformasjon.

```bash
name=<tag>         # (påkrevd) taggnavn

total              # returner antall forekomster
verbose            # inkluder filliste og antall
```

## Oppgaver

Kommandoer for oppgavebehandling.

### `tasks`

List oppgaver i hvelvet. Bruk `active` eller `file`/`path` for å vise oppgaver for en spesifikk fil.

```bash
file=<name>        # filtrer etter filnavn
path=<path>        # filtrer etter filbane
status="<char>"    # filtrer etter statustegn

total              # returner antall oppgaver
done               # vis fullførte oppgaver
todo               # vis ufullstendige oppgaver
verbose            # grupper etter fil med linjenumre
format=json|tsv|csv  # utdataformat (standard: text)
active             # vis oppgaver for aktiv fil
daily              # vis oppgaver fra daglig notat
```

**Eksempler:**

```bash
# List alle oppgaver i hvelvet
tasks

# List ufullstendige oppgaver i hvelvet
tasks todo

# List fullførte oppgaver fra en spesifikk fil
tasks file=Oppskrift done

# List oppgaver fra dagens daglige notat
tasks daily

# Tell oppgaver i daglig notat
tasks daily total

# List oppgaver med filbaner og linjenumre
tasks verbose

# Filtrer etter egendefinert status (sett spesialtegn i anførselstegn)
tasks 'status=?'
```

### `task`

Vis eller oppdater en oppgave.

```bash
ref=<path:line>    # oppgavereferanse (bane:linje)
file=<name>        # filnavn
path=<path>        # filbane
line=<n>           # linjenummer
status="<char>"    # sett statustegn

toggle             # veksle oppgavestatus
daily              # daglig notat
done               # merk som ferdig
todo               # merk som ugjort
```

**Eksempler:**

```bash
# Vis oppgaveinformasjon
task file=Oppskrift line=8
task ref="Oppskrift.md:8"

# Veksle oppgavefullføring
task ref="Oppskrift.md:8" toggle

# Veksle oppgave i daglig notat
task daily line=3 toggle

# Sett oppgavestatus
task file=Oppskrift line=8 done      # → [x]
task file=Oppskrift line=8 todo      # → [ ]
task file=Oppskrift line=8 status=-  # → [-]
task daily line=3 done               # Merk oppgave i daglig notat som ferdig
```


## Maler

Kommandoer for [[Maler]].

### `templates`

List maler.

```bash
total              # returner antall maler
```

### `template:read`

Les malinnhold.

```bash
name=<template>    # (påkrevd) malnavn
title=<title>      # tittel for variabeloppløsning

resolve            # løs opp malvariabler
```

### `template:insert`

Sett inn mal i aktiv fil.

```bash
name=<template>    # (påkrevd) malnavn
```

**Merknader:**
- `resolve`-alternativet behandler `{{date}}`-, `{{time}}`- og `{{title}}`-variabler
- Bruk `create path=<bane> template=<navn>` for å opprette en fil med en mal

## Temaer og utdrag

Kommandoer for [[Temaer]] og [[CSS-utdrag]].

### `themes`

List installerte temaer.

```bash
versions           # inkluder versjonsnumre
```

### `theme`

Vis aktivt tema eller hent informasjon.

```bash
name=<name>        # temanavn for detaljer
```

### `theme:set`

Sett aktivt tema.

```bash
name=<name>        # (påkrevd) temanavn (tom for standard)
```

### `theme:install`

Installer et community-tema.

```bash
name=<name>        # (påkrevd) temanavn

enable             # aktiver etter installasjon
```

### `theme:uninstall`

Avinstaller et tema.

```bash
name=<name>        # (påkrevd) temanavn
```

### `snippets`

List installerte CSS-utdrag.

### `snippets:enabled`

List aktiverte CSS-utdrag.

### `snippet:enable`

Aktiver et CSS-utdrag.

```bash
name=<name>        # (påkrevd) utdragsnavn
```

### `snippet:disable`

Deaktiver et CSS-utdrag.

```bash
name=<name>        # (påkrevd) utdragsnavn
```

## Unike notater

Kommandoer for [[Unik notatoppretter]].

### `unique`

Opprett unikt notat.

```bash
name=<text>        # notatnavn
content=<text>     # innledende innhold
paneType=tab|split|window    # paneltype å åpne i

open               # åpne fil etter opprettelse
```

## Hvelv

### `vault`

Vis hvelvinformasjon.

```bash
info=name|path|files|folders|size  # returner kun spesifikk informasjon
```

### `vaults`

List kjente hvelv.

```bash
total              # returner antall hvelv
verbose            # inkluder hvelvbaner
```

### `vault:open`

Bytt til et annet hvelv (kun TUI).

```bash
name=<name>        # (påkrevd) hvelvnavn
```

## Webviser

Kommandoer for [[Webviser]].

### `web`

Åpne URL i webviser.

```bash
url=<url>          # (påkrevd) URL å åpne

newtab             # åpne i ny fane
```

## Ordtelling

Kommandoer for [[Antall ord]].

### `wordcount`

Tell ord og tegn (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filbane

words              # returner kun antall ord
characters         # returner kun antall tegn
```

## Arbeidsområde

Kommandoer for [[Arbeidsområde]] og [[Arbeidsområder]]-tillegget.

### `workspace`

Vis arbeidsområdetre.

```bash
ids                # inkluder arbeidsområde-element-IDer
```

### `workspaces`

List lagrede arbeidsområder.

```bash
total              # returner antall arbeidsområder
```

### `workspace:save`

Lagre gjeldende oppsett som arbeidsområde.

```bash
name=<name>        # arbeidsområdenavn
```

### `workspace:load`

Last inn et lagret arbeidsområde.

```bash
name=<name>        # (påkrevd) arbeidsområdenavn
```

### `workspace:delete`

Slett et lagret arbeidsområde.

```bash
name=<name>        # (påkrevd) arbeidsområdenavn
```

### `tabs`

List åpne faner.

```bash
ids                # inkluder fane-IDer
```

### `tab:open`

Åpne en ny fane.

```bash
group=<id>         # fanegruppe-ID
file=<path>        # fil å åpne
view=<type>        # visningstype å åpne
```

### `recents`

List nylig åpnede filer.

```bash
total              # returner antall nylige filer
```

## Utviklerkommandoer

Kommandoer for å hjelpe deg med å utvikle [[Community-utvidelser]] og [[Temaer]]. Les mer på [Obsidian Developer Documentation](https://docs.obsidian.md).

### `devtools`

Slå av/på Electron-utviklerverktøy.

### `dev:debug`

Koble til/fra Chrome DevTools Protocol-feilsøker.

```bash
on                 # koble til feilsøker
off                # koble fra feilsøker
```

### `dev:cdp`

Kjør en Chrome DevTools Protocol-kommando.

```bash
method=<CDP.method>  # (påkrevd) CDP-metode å kalle
params=<json>        # metodeparametere som JSON
```

### `dev:errors`

Vis fangede JavaScript-feil.

```bash
clear              # tøm feilbufferen
```

### `dev:screenshot`

Ta et skjermbilde (returnerer base64 PNG).

```bash
path=<filename>    # utdatafilbane
```

### `dev:console`

Vis fangede konsollmeldinger.

```bash
limit=<n>                        # maks antall meldinger å vise (standard 50)
level=log|warn|error|info|debug  # filtrer etter loggnivå

clear                            # tøm konsollbufferen
```

### `dev:css`

Inspiser CSS med kildeplasseringer.

```bash
selector=<css>     # (påkrevd) CSS-velger
prop=<name>        # filtrer etter egenskapsnavn
```

### `dev:dom`

Spør DOM-elementer.

```bash
selector=<css>     # (påkrevd) CSS-velger
attr=<name>        # hent attributtverdi
css=<prop>         # hent CSS-egenskapsverdi

total              # returner antall elementer
text               # returner tekstinnhold
inner              # returner innerHTML i stedet for outerHTML
all                # returner alle treff i stedet for første
```

### `dev:mobile`

Slå av/på mobilemulering.

```bash
on                 # aktiver mobilemulering
off                # deaktiver mobilemulering
```

### `eval`

Kjør JavaScript og returner resultat.

```bash
code=<javascript>  # (påkrevd) JavaScript-kode å kjøre
```

## Hurtigtaster

Disse snarveiene er tilgjengelige i [[#Bruk terminalgrensesnittet|TUI]].

### Navigasjon

| Handling                                                     | Snarvei        |
| ------------------------------------------------------------ | -------------- |
| Flytt markør til venstre                                     | `←` / `Ctrl+B` |
| Flytt markør til høyre (godtar forslag på slutten av linjen) | `→` / `Ctrl+F` |
| Hopp til starten av linjen                                   | `Ctrl+A`       |
| Hopp til slutten av linjen                                   | `Ctrl+E`       |
| Flytt tilbake ett ord                                        | `Alt+B`        |
| Flytt fremover ett ord                                       | `Alt+F`        |

### Redigering

| Handling                        | Snarvei                    |
| ------------------------------- | -------------------------- |
| Slett til starten av linjen     | `Ctrl+U`                   |
| Slett til slutten av linjen     | `Ctrl+K`                   |
| Slett forrige ord               | `Ctrl+W` / `Alt+Backspace` |

### Autofullføring

| Handling                                               | Snarvei     |
| ------------------------------------------------------ | ----------- |
| Gå inn i forslagsmodus / godta valgt forslag           | `Tab`       |
| Gå ut av forslagsmodus                                 | `Shift+Tab` |
| Gå inn i forslagsmodus (fra ny inndata)                | `↓`         |
| Godta første/valgte forslag (på slutten av linjen)     | `→`         |

### Historikk

| Handling                                                           | Snarvei        |
| ------------------------------------------------------------------ | -------------- |
| Forrige historikkoppføring / naviger forslag opp                   | `↑` / `Ctrl+P` |
| Neste historikkoppføring / naviger forslag ned                     | `↓` / `Ctrl+N` |
| Omvendt historikksøk (skriv for å filtrere, `Ctrl+R` for å bla)  | `Ctrl+R`       |

### Annet

| Handling                                                     | Snarvei             |
| ------------------------------------------------------------ | ------------------- |
| Kjør kommando eller godta forslag                            | `Enter`             |
| Angre autofullføring / gå ut av forslagsmodus / tøm inndata | `Escape`            |
| Tøm skjerm                                                  | `Ctrl+L`            |
| Avslutt                                                      | `Ctrl+C` / `Ctrl+D` |

## Feilsøking

Hvis du har problemer med å kjøre Obsidian CLI:

- Sørg for at du bruker den nyeste [[Oppdater Obsidian|Obsidian-installasjonsversjonen]] (1.12.4 eller nyere).
- Start terminalen på nytt etter registrering av CLI for at PATH-endringene skal tre i kraft.
- Obsidian må kjøre. CLI kobler seg til den kjørende Obsidian-instansen. Hvis Obsidian ikke kjører, bør den første CLI-kommandoen starte appen.

### Windows

Obsidian CLI på Windows krever Obsidian 1.12.4+-installasjonsprogrammet. Se [[Oppdater Obsidian|Oppdatering av installasjonsversjon]].

Windows bruker en terminalomdirigerer som kobler Obsidian til stdin/stdout på riktig måte. Dette er nødvendig fordi Obsidian normalt kjører som en GUI-app som er inkompatibel med terminalutdata på Windows. Når du installerer Obsidian 1.12.4+ vil `Obsidian.com`-terminalomdirigeren bli lagt til i mappen der du installerte `Obsidian.exe`-filen.

### macOS

CLI-registreringen legger til Obsidians binærkatalog i PATH via `~/.zprofile`. Hvis du har problemer, sjekk følgende:

Filen `~/.zprofile` bør inneholde følgende linje. Hvis den mangler, kan du legge den til manuelt:

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### Alternative skall

CLI-registreringen endrer kun `~/.zprofile`, som brukes av zsh (standard macOS-skall). Hvis du bruker et annet skall, legg til Obsidians binærkatalog i skallets konfigurasjonsfil manuelt:

- Bash: legg til `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` i `~/.bash_profile`
- Fish: kjør `fish_add_path /Applications/Obsidian.app/Contents/MacOS`


### Linux

CLI-registreringen oppretter en symbolsk lenke på `/usr/local/bin/obsidian` som peker til Obsidian-binæren (krever sudo).

#### AppImage

For AppImage-installasjoner peker den symbolske lenken til `.AppImage`-filen i stedet for den interne binæren, siden monteringsbanen endres ved hver oppstart. Hvis sudo feiler, opprettes den symbolske lenken på `~/.local/bin/obsidian` som reserveløsning. Hvis du har problemer, sjekk følgende.

Sjekk at den symbolske lenken finnes og peker til riktig binær:

```
ls -l /usr/local/bin/obsidian
```

Hvis den symbolske lenken mangler, opprett den manuelt:

```
sudo ln -s /path/to/obsidian /usr/local/bin/obsidian
```

Hvis den symbolske lenken ble opprettet i `~/.local/bin/` i stedet, sørg for at den katalogen er i PATH. Legg til følgende i `~/.bashrc` eller `~/.zshrc`:

```
export PATH="$PATH:$HOME/.local/bin"
```

Hvis den symbolske lenken brytes etter at du flytter eller gir nytt navn til `.AppImage`-filen, registrer CLI på nytt eller oppdater den symbolske lenken manuelt.

#### Snap

Snap-pakken lagrer insider-byggdata i sin egen brukerdatakatalog. Hvis CLI ikke oppdager insider `.asar`, sett `XDG_CONFIG_HOME` til å peke til Snap-konfigurasjonsbanen:

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

Legg dette til i `~/.bashrc` eller `~/.zshrc` for å gjøre det permanent.


#### Flatpak

Obsidian prøver å gjøre dette automatisk, men nedenfor er de manuelle instruksjonene. Hvis det er en systeminstallasjon:

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

Hvis det er en brukerinstallasjon:

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
