---
permalink: cli
description: 'Alt hvad du kan gøre i Obsidian, kan gøres fra kommandolinjen.'
---
Obsidian CLI er en kommandolinjegrænseflade, der lader dig styre Obsidian fra din terminal til scripting, automatisering og integration med eksterne værktøjer.

Alt hvad du kan gøre i Obsidian, kan du gøre fra kommandolinjen. Obsidian CLI inkluderer endda [[#Udviklerkommandoer|udviklerkommandoer]] til at tilgå udviklingsværktøjer, inspicere elementer, tage skærmbilleder, genindlæse plugins og meget mere.

![[obsidian-cli.mp4#interface]]

> [!warning] Kræver Obsidian 1.12 installationsprogram
> Brug af CLI kræver Obsidian 1.12 installationsprogrammet. Se [[Opdatér Obsidian#Installationsopdateringer|guiden til opdatering af installationsprogram]].

## Installér Obsidian CLI

Opgrader til den seneste [[Opdatér Obsidian|Obsidian installationsversion]] (1.11.7) og den seneste [[Tidlig adgang-versioner|tidlig adgang-version]] (1.12.x).

Aktivér Obsidian CLI i Obsidian:

1. Gå til **Indstillinger** → **Generelt**.
2. Aktivér **Kommandolinjegrænseflade**.
3. Følg prompten for at registrere Obsidian CLI.

Hvis du støder på problemer med at installere Obsidian CLI, se [[#Fejlfinding]].

## Kom i gang

Obsidian CLI understøtter både enkelte kommandoer og en terminal-brugergrænseflade (TUI) med interaktiv hjælp og autofuldførelse.

> [!info] Obsidian-applikationen skal køre
> Obsidian CLI kræver, at Obsidian-applikationen kører. Hvis Obsidian ikke kører, starter den første kommando, du kører, Obsidian.
>
> Leder du efter synkronisering uden desktopapplikationen? Se [[Obsidian Headless|Obsidian Headless]].

### Kør en kommando

Kør en individuel kommando uden at åbne TUI:

```shell
# Kør hjælp-kommandoen
obsidian help
```

### Brug terminalgrænsefladen

Brug TUI ved at skrive `obsidian`. Efterfølgende kommandoer kan indtastes uden `obsidian`.

```shell
# Åbn TUI, kør derefter hjælp
obsidian
help
```

TUI understøtter autofuldførelse, kommandohistorik og omvendt søgning. Brug `Ctrl+R` til at søge i din kommandohistorik. Se [[#Tastaturgenveje]] for alle tilgængelige genveje.

## Eksempler

Her er nogle eksempler på, hvad Obsidian CLI kan gøre.

### Daglig brug

```shell
# Åbn dagens daglige note
obsidian daily

# Tilføj en opgave til din daglige note
obsidian daily:append content="- [ ] Køb dagligvarer"

# Søg i din boks
obsidian search query="mødenoter"

# Læs den aktive fil
obsidian read

# List alle opgaver fra din daglige note
obsidian tasks daily

# Opret en ny note fra en skabelon
obsidian create name="Tur til Paris" template=Rejse

# List alle tags i din boks med antal
obsidian tags counts

# Sammenlign to versioner af en fil
obsidian diff file=README from=1 to=3
```

### For udviklere

Mange [[#Udviklerkommandoer]] er tilgængelige til plugin- og temaudvikling. Disse kommandoer gør det muligt for agentiske kodningsværktøjer automatisk at teste og fejlsøge.

```shell
# Åbn udviklingsværktøjer
obsidian devtools

# Genindlæs et fællesskabsplugin, du udvikler
obsidian plugin:reload id=my-plugin

# Tag et skærmbillede af applikationen
obsidian dev:screenshot path=screenshot.png

# Kør JavaScript i applikationskonsollen
obsidian eval code="app.vault.getFiles().length"
```

## Sådan gør du

### Brug parametre og flag

Kommandoer kan bruge **parametre** og **flag**. De fleste kommandoer kræver ingen parametre eller flag. Påkrævede parametre er markeret som `required`. For eksempel:

```shell
# Opret en ny note med standardnavnet "Unavngivet"
obsidian create
```

En **parameter** tager en værdi, skrevet som `parameter=værdi`. Hvis værdien indeholder mellemrum, skal den omsluttes af anførselstegn:

```shell
# Opret en ny note kaldet "Note" med indholdet "Hej verden"
obsidian create name=Note content="Hej verden"
```

Et **flag** er en boolsk kontakt uden værdi. Inkludér det for at slå det til, for eksempel er `open` og `overwrite` flag:

```shell
# Opret en note og åbn den
obsidian create name=Note content="Hej" open overwrite
```

For indhold med flere linjer brug `\n` for linjeskift. Brug `\t` for tabulator.

```bash
obsidian create name=Note content="# Titel\n\nBrødtekst"
```

### Målret en boks

Hvis din terminals nuværende arbejdsmappe er en boksmappe, bruges den boks som standard. Ellers bruges den aktuelt aktive boks.

Brug `vault=<navn>` eller `vault=<id>` til at målrette en bestemt boks. Dette skal være den første parameter før din kommando:

```shell
obsidian vault=Notes daily
obsidian vault="Min Boks" search query="test"
```

I TUI brug `vault:open <navn>` eller `<id>` til at skifte til en anden boks.

### Målret en fil

Mange kommandoer accepterer `file`- og `path`-parametre til at målrette en bestemt fil. Hvis ingen er angivet, bruger kommandoen den aktive fil som standard.

- `file=<navn>` opløser filen ved at bruge samme linkopløsning som [[Interne links|wikilinks]], der matcher efter filnavn uden at kræve den fulde sti eller filendelse.
- `path=<sti>` kræver den præcise sti fra boksens rod, f.eks. `mappe/note.md`.

```shell
# Disse er ækvivalente, hvis "Opskrift.md" er den eneste fil med det navn
obsidian read file=Opskrift
obsidian read path="Skabeloner/Opskrift.md"
```

### Kopiér output

Tilføj `--copy` til enhver kommando for at kopiere outputtet til udklipsholderen:

```shell
read --copy
search query="TODO" --copy
```


## Generelle kommandoer

### `help`

Vis liste over alle tilgængelige kommandoer.

| Parameter   | Beskrivelse                              |
| ----------- | ---------------------------------------- |
| `<command>` | Vis hjælp for en bestemt kommando.       |

### `version`

Vis Obsidian-version.

### `reload`

Genindlæs applikationsvinduet.

### `restart`

Genstart applikationen.


## Baser

Kommandoer til [[Introduktion til Baser|Baser]].

### `bases`

List alle `.base`-filer i boksen.

### `base:views`

List visninger i den aktuelle base-fil.

### `base:create`

Opret et nyt element i en base. Bruger som standard den aktive basevisning, hvis ingen fil er angivet.

```bash
file=<name>        # base-filnavn
path=<path>        # base-filsti
view=<name>        # visningsnavn
name=<name>        # nyt filnavn
content=<text>     # indledende indhold

open               # åbn fil efter oprettelse
newtab             # åbn i ny fane
```

### `base:query`

Forespørg en base og returnér resultater.

```bash
file=<name>                    # base-filnavn
path=<path>                    # base-filsti
view=<name>                    # visningsnavn at forespørge
format=json|csv|tsv|md|paths   # outputformat (standard: json)
```

## Bogmærker

Kommandoer til [[Bogmærker]].

### `bookmarks`

List bogmærker.

```bash
total              # returnér antal bogmærker
verbose            # inkludér bogmærketyper
format=json|tsv|csv  # outputformat (standard: tsv)
```

### `bookmark`

Tilføj et bogmærke.

```bash
file=<path>        # fil at bogmærke
subpath=<subpath>  # understi (overskrift eller blok) i filen
folder=<path>      # mappe at bogmærke
search=<query>     # søgeforespørgsel at bogmærke
url=<url>          # URL at bogmærke
title=<title>      # bogmærketitel
```

## Kommandopalet

Kommandoer til [[Fastgjorte kommandoer]] og [[Genvejstaster]]. Dette inkluderer alle kommandoer registreret af plugins.

### `commands`

List tilgængelige kommando-ID'er.

```bash
filter=<prefix>    # filtrér efter ID-præfiks
```

### `command`

Udfør en Obsidian-kommando.

```bash
id=<command-id>    # (påkrævet) kommando-ID at udføre
```

### `hotkeys`

List tastaturgenveje for alle kommandoer.

```bash
total              # returnér antal genvejstaster
verbose            # vis om genvejstasten er brugerdefineret
format=json|tsv|csv  # outputformat (standard: tsv)
```

### `hotkey`

Hent tastaturgenvej for en kommando.

```bash
id=<command-id>    # (påkrævet) kommando-ID

verbose            # vis om brugerdefineret eller standard
```

## Daglige noter

Kommandoer til [[Daglige noter]].

### `daily`

Åbn daglig note.

```bash
paneType=tab|split|window    # panetype at åbne i
```

### `daily:path`

Hent sti til daglig note. Returnerer den forventede sti, selvom filen ikke er oprettet endnu.

### `daily:read`

Læs indholdet af den daglige note.

### `daily:append`

Tilføj indhold til slutningen af den daglige note.

```bash
content=<text>     # (påkrævet) indhold at tilføje
paneType=tab|split|window    # panetype at åbne i

inline             # tilføj uden linjeskift
open               # åbn fil efter tilføjelse
```

### `daily:prepend`

Tilføj indhold til begyndelsen af den daglige note.

```bash
content=<text>     # (påkrævet) indhold at tilføje forrest
paneType=tab|split|window    # panetype at åbne i

inline             # tilføj uden linjeskift
open               # åbn fil efter tilføjelse
```

## Filhistorik

### `diff`

List eller sammenlign versioner fra lokal [[Filgenoprettelse]] og [[Introduktion til Obsidian Sync|Sync]]. Versioner er nummereret fra nyeste til ældste.

```bash
file=<name>          # filnavn
path=<path>          # filsti
from=<n>             # versionsnummer at sammenligne fra
to=<n>               # versionsnummer at sammenligne til
filter=local|sync    # filtrér efter versionskilde
```

**Eksempler:**

```shell
# List alle versioner af den aktive fil
diff

# List alle versioner af en bestemt fil
diff file=Opskrift

# Sammenlign den seneste version med den aktuelle fil
diff file=Opskrift from=1

# Sammenlign to versioner
diff file=Opskrift from=2 to=1

# Vis kun Sync-versioner
diff filter=sync
```

### `history`

List versioner kun fra [[Filgenoprettelse]]. Se [[#Sync|sync:history]] for den tilsvarende Sync-kommando.

```bash
file=<name>        # filnavn
path=<path>        # filsti
```

### `history:list`

List alle filer med lokal historik.

### `history:read`

Læs en lokal historikversion.

```bash
file=<name>        # filnavn
path=<path>        # filsti
version=<n>        # versionsnummer (standard: 1)
```

### `history:restore`

Gendan en lokal historikversion.

```bash
file=<name>        # filnavn
path=<path>        # filsti
version=<n>        # (påkrævet) versionsnummer
```

### `history:open`

Åbn filgenoprettelse.

```bash
file=<name>        # filnavn
path=<path>        # filsti
```

## Filer og mapper

### `file`

Vis filinformation (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti
```

Eksempel:

```
path       Notes/Opskrift.md
name       Opskrift
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

List filer i boksen.

```bash
folder=<path>      # filtrér efter mappe
ext=<extension>    # filtrér efter filendelse

total              # returnér filantal
```

### `folder`

Vis mappeinformation.

```bash
path=<path>              # (påkrævet) mappesti
info=files|folders|size  # returnér kun bestemt information
```

### `folders`

List mapper i boksen.

```bash
folder=<path>      # filtrér efter overordnet mappe

total              # returnér mappeantal
```

### `open`

Åbn en fil.

```bash
file=<name>        # filnavn
path=<path>        # filsti

newtab             # åbn i ny fane
```

### `create`

Opret eller overskriv en fil.

```bash
name=<name>        # filnavn
path=<path>        # filsti
content=<text>     # indledende indhold
template=<name>    # skabelon at bruge

overwrite          # overskriv hvis filen eksisterer
open               # åbn fil efter oprettelse
newtab             # åbn i ny fane
```

### `read`

Læs filindhold (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti
```

### `append`

Tilføj indhold til slutningen af en fil (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti
content=<text>     # (påkrævet) indhold at tilføje

inline             # tilføj uden linjeskift
```

### `prepend`

Tilføj indhold efter metadata (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti
content=<text>     # (påkrævet) indhold at tilføje forrest

inline             # tilføj uden linjeskift
```

### `move`

Flyt eller omdøb en fil (standard: aktiv fil). Dette opdaterer automatisk [[Interne links|interne links]], hvis det er slået til i dine [[Indstillinger#Opdater altid interne links|boksindstillinger]].

```bash
file=<name>        # filnavn
path=<path>        # filsti
to=<path>          # (påkrævet) destinationsmappe eller -sti
```

### `rename`

Omdøb en fil (standard: aktiv fil). Filendelsen bevares automatisk, hvis den udelades fra det nye navn. Brug [[#`move`|move]] til at omdøbe og flytte en fil samtidig. Dette opdaterer automatisk [[Interne links|interne links]], hvis det er slået til i dine [[Indstillinger#Opdater altid interne links|boksindstillinger]].

```bash
file=<name>        # filnavn
path=<path>        # filsti
name=<name>        # (påkrævet) nyt filnavn
```

### `delete`

Slet en fil (standard: aktiv fil, papirkurv som standard).

```bash
file=<name>        # filnavn
path=<path>        # filsti

permanent          # spring papirkurv over, slet permanent
```

## Links

Kommandoer til [[Tilbagelinks]] og [[Udgående Links]].

### `backlinks`

List tilbagelinks til en fil (standard: aktiv fil).

```bash
file=<name>        # målfilnavn
path=<path>        # målfilsti

counts             # inkludér linkantal
total              # returnér antal tilbagelinks
format=json|tsv|csv  # outputformat (standard: tsv)
```

### `links`

List udgående links fra en fil (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti

total              # returnér linkantal
```

### `unresolved`

List uopløste links i boksen.

```bash
total              # returnér antal uopløste links
counts             # inkludér linkantal
verbose            # inkludér kildefiler
format=json|tsv|csv  # outputformat (standard: tsv)
```

### `orphans`

List filer uden indgående links.

```bash
total              # returnér antal forældreløse
```

### `deadends`

List filer uden udgående links.

```bash
total              # returnér antal blindgyder
```

## Disposition

Kommandoer til [[Disposition]].

### `outline`

Vis overskrifter for den aktuelle fil.

```bash
file=<name>        # filnavn
path=<path>        # filsti
format=tree|md|json  # outputformat (standard: tree)

total              # returnér antal overskrifter
```

## Plugins

Kommandoer til [[Kerneplugins]] og [[Fællesskabsplugins]].

### `plugins`

List installerede plugins.

```bash
filter=core|community  # filtrér efter plugintype

versions               # inkludér versionsnumre
format=json|tsv|csv    # outputformat (standard: tsv)
```

### `plugins:enabled`

List aktiverede plugins.

```bash
filter=core|community  # filtrér efter plugintype

versions               # inkludér versionsnumre
format=json|tsv|csv    # outputformat (standard: tsv)
```

### `plugins:restrict`

Slå begrænset tilstand til/fra eller tjek status.

```bash
on                 # aktivér begrænset tilstand
off                # deaktivér begrænset tilstand
```

### `plugin`

Hent plugininformation.

```bash
id=<plugin-id>     # (påkrævet) plugin-ID
```

### `plugin:enable`

Aktivér et plugin.

```bash
id=<id>                # (påkrævet) plugin-ID
filter=core|community  # plugintype
```

### `plugin:disable`

Deaktivér et plugin.

```bash
id=<id>                # (påkrævet) plugin-ID
filter=core|community  # plugintype
```

### `plugin:install`

Installér et fællesskabsplugin.

```bash
id=<id>            # (påkrævet) plugin-ID

enable             # aktivér efter installation
```

### `plugin:uninstall`

Afinstallér et fællesskabsplugin.

```bash
id=<id>            # (påkrævet) plugin-ID
```

### `plugin:reload`

Genindlæs et plugin (for udviklere).

```bash
id=<id>            # (påkrævet) plugin-ID
```

## Egenskaber

Kommandoer relateret til [[Egenskaber]].

### `aliases`

List aliasser i boksen. Brug `active` eller `file`/`path` til at vise aliasser for en bestemt fil.

```bash
file=<name>        # filnavn
path=<path>        # filsti

total              # returnér antal aliasser
verbose            # inkludér filstier
active             # vis aliasser for aktiv fil
```

### `properties`

List egenskaber i boksen. Brug `active` eller `file`/`path` til at vise egenskaber for en bestemt fil.

```bash
file=<name>        # vis egenskaber for fil
path=<path>        # vis egenskaber for sti
name=<name>        # hent antal for bestemt egenskab
sort=count         # sortér efter antal (standard: navn)
format=yaml|json|tsv  # outputformat (standard: yaml)

total              # returnér antal egenskaber
counts             # inkludér forekomstantal
active             # vis egenskaber for aktiv fil
```

### `property:set`

Sæt en egenskab på en fil (standard: aktiv fil).

```bash
name=<name>                                    # (påkrævet) egenskabsnavn
value=<value>                                  # (påkrævet) egenskabsværdi
type=text|list|number|checkbox|date|datetime   # egenskabstype
file=<name>                                    # filnavn
path=<path>                                    # filsti
```

### `property:remove`

Fjern en egenskab fra en fil (standard: aktiv fil).

```bash
name=<name>        # (påkrævet) egenskabsnavn
file=<name>        # filnavn
path=<path>        # filsti
```

### `property:read`

Læs en egenskabsværdi fra en fil (standard: aktiv fil).

```bash
name=<name>        # (påkrævet) egenskabsnavn
file=<name>        # filnavn
path=<path>        # filsti
```

## Publish

Kommandoer til [[Introduktion til Obsidian Publish|Obsidian Publish]].

### `publish:site`

Vis information om publish-websted (slug, URL).

### `publish:list`

List udgivne filer.

```bash
total              # returnér antal udgivne filer
```

### `publish:status`

List publish-ændringer.

```bash
total              # returnér antal ændringer
new                # vis kun nye filer
changed            # vis kun ændrede filer
deleted            # vis kun slettede filer
```

### `publish:add`

Udgiv en fil eller alle ændrede filer (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti

changed            # udgiv alle ændrede filer
```

### `publish:remove`

Fjern udgivelse af en fil (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti
```

### `publish:open`

Åbn fil på udgivet websted (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti
```

## Tilfældige noter

Kommandoer til [[Tilfældig note]].

### `random`

Åbn en tilfældig note.

```bash
folder=<path>      # begræns til mappe

newtab             # åbn i ny fane
```

### `random:read`

Læs en tilfældig note (inkluderer sti).

```bash
folder=<path>      # begræns til mappe
```

## Søgning

Kommandoer til [[Søg]].

### `search`

Søg i boksen efter tekst. Returnerer matchende filstier.

```bash
query=<text>       # (påkrævet) søgeforespørgsel
path=<folder>      # begræns til mappe
limit=<n>          # maks antal filer
format=text|json   # outputformat (standard: text)

total              # returnér antal matches
case               # forskel på store og små bogstaver
```

### `search:context`

Søg med matchende linjekontekst. Returnerer grep-stil `sti:linje: tekst` output.

```bash
query=<text>       # (påkrævet) søgeforespørgsel
path=<folder>      # begræns til mappe
limit=<n>          # maks antal filer
format=text|json   # outputformat (standard: text)

case               # forskel på store og små bogstaver
```

### `search:open`

Åbn søgevisning.

```bash
query=<text>       # indledende søgeforespørgsel
```

## Sync

Kommandoer til [[Introduktion til Obsidian Sync|Obsidian Sync]].

> [!tip] Synkroniser uden desktopapplikationen
> Disse kommandoer styrer Sync i den kørende Obsidian-applikation. For at synkronisere bokse fra kommandolinjen uden desktopapplikationen, se [[Headless Sync]].

### `sync`

Sæt sync på pause eller genoptag.

```bash
on                 # genoptag sync
off                # sæt sync på pause
```

### `sync:status`

Vis sync-status og forbrug.

### `sync:history`

List sync-versionshistorik for en fil (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti

total              # returnér antal versioner
```

### `sync:read`

Læs en sync-version (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti
version=<n>        # (påkrævet) versionsnummer
```

### `sync:restore`

Gendan en sync-version (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti
version=<n>        # (påkrævet) versionsnummer
```

### `sync:open`

Åbn sync-historik (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti
```

### `sync:deleted`

List slettede filer i sync.

```bash
total              # returnér antal slettede filer
```

## Tags

Kommandoer til [[Tags]].

### `tags`

List tags i boksen. Brug `active` eller `file`/`path` til at vise tags for en bestemt fil.

```bash
file=<name>        # filnavn
path=<path>        # filsti
sort=count         # sortér efter antal (standard: navn)

total              # returnér antal tags
counts             # inkludér tagantal
format=json|tsv|csv  # outputformat (standard: tsv)
active             # vis tags for aktiv fil
```

### `tag`

Hent taginformation.

```bash
name=<tag>         # (påkrævet) tagnavn

total              # returnér antal forekomster
verbose            # inkludér filliste og antal
```

## Opgaver

Kommandoer til opgavestyring.

### `tasks`

List opgaver i boksen. Brug `active` eller `file`/`path` til at vise opgaver for en bestemt fil.

```bash
file=<name>        # filtrér efter filnavn
path=<path>        # filtrér efter filsti
status="<char>"    # filtrér efter statustegn

total              # returnér antal opgaver
done               # vis fuldførte opgaver
todo               # vis ufuldstændige opgaver
verbose            # gruppér efter fil med linjenumre
format=json|tsv|csv  # outputformat (standard: text)
active             # vis opgaver for aktiv fil
daily              # vis opgaver fra daglig note
```

**Eksempler:**

```bash
# List alle opgaver i boksen
tasks

# List ufuldstændige opgaver i boksen
tasks todo

# List fuldførte opgaver fra en bestemt fil
tasks file=Opskrift done

# List opgaver fra dagens daglige note
tasks daily

# Tæl opgaver i daglig note
tasks daily total

# List opgaver med filstier og linjenumre
tasks verbose

# Filtrér efter brugerdefineret status (citér specialtegn)
tasks 'status=?'
```

### `task`

Vis eller opdatér en opgave.

```bash
ref=<path:line>    # opgavereference (sti:linje)
file=<name>        # filnavn
path=<path>        # filsti
line=<n>           # linjenummer
status="<char>"    # sæt statustegn

toggle             # skift opgavestatus
daily              # daglig note
done               # markér som færdig
todo               # markér som opgave
```

**Eksempler:**

```bash
# Vis opgaveinformation
task file=Opskrift line=8
task ref="Opskrift.md:8"

# Skift opgavefuldførelse
task ref="Opskrift.md:8" toggle

# Skift opgave i daglig note
task daily line=3 toggle

# Sæt opgavestatus
task file=Opskrift line=8 done      # → [x]
task file=Opskrift line=8 todo      # → [ ]
task file=Opskrift line=8 status=-  # → [-]
task daily line=3 done              # Markér daglig note-opgave som færdig
```


## Skabeloner

Kommandoer til [[Plugins/Skabeloner|Skabeloner]].

### `templates`

List skabeloner.

```bash
total              # returnér antal skabeloner
```

### `template:read`

Læs skabelonindhold.

```bash
name=<template>    # (påkrævet) skabelonnavn
title=<title>      # titel til variabelopløsning

resolve            # opløs skabelonvariabler
```

### `template:insert`

Indsæt skabelon i aktiv fil.

```bash
name=<template>    # (påkrævet) skabelonnavn
```

**Bemærkninger:**
- `resolve`-muligheden behandler `{{date}}`-, `{{time}}`-, `{{title}}`-variabler
- Brug `create path=<sti> template=<navn>` til at oprette en fil med en skabelon

## Temaer og kodestykker

Kommandoer til [[Temaer]] og [[CSS-kodestykker]].

### `themes`

List installerede temaer.

```bash
versions           # inkludér versionsnumre
```

### `theme`

Vis aktivt tema eller hent information.

```bash
name=<name>        # temanavn for detaljer
```

### `theme:set`

Sæt aktivt tema.

```bash
name=<name>        # (påkrævet) temanavn (tomt for standard)
```

### `theme:install`

Installér et fællesskabstema.

```bash
name=<name>        # (påkrævet) temanavn

enable             # aktivér efter installation
```

### `theme:uninstall`

Afinstallér et tema.

```bash
name=<name>        # (påkrævet) temanavn
```

### `snippets`

List installerede CSS-kodestykker.

### `snippets:enabled`

List aktiverede CSS-kodestykker.

### `snippet:enable`

Aktivér et CSS-kodestykke.

```bash
name=<name>        # (påkrævet) kodestykkernavn
```

### `snippet:disable`

Deaktivér et CSS-kodestykke.

```bash
name=<name>        # (påkrævet) kodestykkernavn
```

## Unikke noter

Kommandoer til [[Unik noteopretter]].

### `unique`

Opret unik note.

```bash
name=<text>        # notenavn
content=<text>     # indledende indhold
paneType=tab|split|window    # panetype at åbne i

open               # åbn fil efter oprettelse
```

## Boks

### `vault`

Vis boksinformation.

```bash
info=name|path|files|folders|size  # returnér kun bestemt information
```

### `vaults`

List kendte bokse.

```bash
total              # returnér antal bokse
verbose            # inkludér boksstier
```

### `vault:open`

Skift til en anden boks (kun TUI).

```bash
name=<name>        # (påkrævet) boksnavn
```

## Webviser

Kommandoer til [[Webfremviser]].

### `web`

Åbn URL i webviser.

```bash
url=<url>          # (påkrævet) URL at åbne

newtab             # åbn i ny fane
```

## Ordtælling

Kommandoer til [[Ordtælling]].

### `wordcount`

Tæl ord og tegn (standard: aktiv fil).

```bash
file=<name>        # filnavn
path=<path>        # filsti

words              # returnér kun ordantal
characters         # returnér kun tegnantal
```

## Arbejdsområde

Kommandoer til [[Arbejdsområde]] og [[Arbejdsområder]]-pluginet.

### `workspace`

Vis arbejdsområdetræ.

```bash
ids                # inkludér arbejdsområde-element-ID'er
```

### `workspaces`

List gemte arbejdsområder.

```bash
total              # returnér antal arbejdsområder
```

### `workspace:save`

Gem nuværende layout som arbejdsområde.

```bash
name=<name>        # arbejdsområdenavn
```

### `workspace:load`

Indlæs et gemt arbejdsområde.

```bash
name=<name>        # (påkrævet) arbejdsområdenavn
```

### `workspace:delete`

Slet et gemt arbejdsområde.

```bash
name=<name>        # (påkrævet) arbejdsområdenavn
```

### `tabs`

List åbne faner.

```bash
ids                # inkludér fane-ID'er
```

### `tab:open`

Åbn en ny fane.

```bash
group=<id>         # fanegruppe-ID
file=<path>        # fil at åbne
view=<type>        # visningstype at åbne
```

### `recents`

List nyligt åbnede filer.

```bash
total              # returnér antal nylige filer
```

## Udviklerkommandoer

Kommandoer til at hjælpe dig med at udvikle [[Fællesskabsplugins]] og [[Temaer]]. Få mere at vide ved at besøge [Obsidian Developer Documentation](https://docs.obsidian.md).

### `devtools`

Slå Electron-udviklingsværktøjer til/fra.

### `dev:debug`

Tilknyt/frakobl Chrome DevTools Protocol debugger.

```bash
on                 # tilknyt debugger
off                # frakobl debugger
```

### `dev:cdp`

Kør en Chrome DevTools Protocol-kommando.

```bash
method=<CDP.method>  # (påkrævet) CDP-metode at kalde
params=<json>        # metodeparametre som JSON
```

### `dev:errors`

Vis indfangede JavaScript-fejl.

```bash
clear              # ryd fejlbufferen
```

### `dev:screenshot`

Tag et skærmbillede (returnerer base64 PNG).

```bash
path=<filename>    # output-filsti
```

### `dev:console`

Vis indfangede konsolmeddelelser.

```bash
limit=<n>                        # maks antal meddelelser at vise (standard 50)
level=log|warn|error|info|debug  # filtrér efter logniveau

clear                            # ryd konsolbufferen
```

### `dev:css`

Inspicér CSS med kildeplacering.

```bash
selector=<css>     # (påkrævet) CSS-selektor
prop=<name>        # filtrér efter egenskabsnavn
```

### `dev:dom`

Forespørg DOM-elementer.

```bash
selector=<css>     # (påkrævet) CSS-selektor
attr=<name>        # hent attributværdi
css=<prop>         # hent CSS-egenskabsværdi

total              # returnér elementantal
text               # returnér tekstindhold
inner              # returnér innerHTML i stedet for outerHTML
all                # returnér alle matches i stedet for første
```

### `dev:mobile`

Slå mobilemulering til/fra.

```bash
on                 # aktivér mobilemulering
off                # deaktivér mobilemulering
```

### `eval`

Udfør JavaScript og returnér resultat.

```bash
code=<javascript>  # (påkrævet) JavaScript-kode at udføre
```

## Tastaturgenveje

Disse genveje er tilgængelige i [[#Brug terminalgrænsefladen|TUI]].

### Navigation

| Handling                                                  | Genvej          |
| --------------------------------------------------------- | ---------------- |
| Flyt markør til venstre                                   | `←` / `Ctrl+B`  |
| Flyt markør til højre (accepterer forslag ved linjeende)  | `→` / `Ctrl+F`  |
| Spring til starten af linjen                              | `Ctrl+A`         |
| Spring til slutningen af linjen                           | `Ctrl+E`         |
| Flyt ét ord tilbage                                       | `Alt+B`          |
| Flyt ét ord fremad                                        | `Alt+F`          |

### Redigering

| Handling                        | Genvej                      |
| ------------------------------- | --------------------------- |
| Slet til starten af linjen     | `Ctrl+U`                    |
| Slet til slutningen af linjen  | `Ctrl+K`                    |
| Slet forrige ord               | `Ctrl+W` / `Alt+Backspace`  |

### Autofuldførelse

| Handling                                                 | Genvej       |
| -------------------------------------------------------- | ------------ |
| Gå ind i forslagstilstand / acceptér valgt forslag       | `Tab`        |
| Forlad forslagstilstand                                  | `Shift+Tab`  |
| Gå ind i forslagstilstand (fra frisk input)              | `↓`          |
| Acceptér første/valgte forslag (ved linjeende)           | `→`          |

### Historik

| Handling                                                            | Genvej          |
| ------------------------------------------------------------------- | ---------------- |
| Forrige historikpost / navigér forslag op                           | `↑` / `Ctrl+P`  |
| Næste historikpost / navigér forslag ned                            | `↓` / `Ctrl+N`  |
| Omvendt historiksøgning (skriv for at filtrere, `Ctrl+R` for at gennemløbe) | `Ctrl+R`         |

### Andet

| Handling                                                     | Genvej               |
| ------------------------------------------------------------ | -------------------- |
| Udfør kommando eller acceptér forslag                        | `Enter`              |
| Fortryd autofuldførelse / forlad forslagstilstand / ryd input | `Escape`             |
| Ryd skærm                                                    | `Ctrl+L`             |
| Afslut                                                       | `Ctrl+C` / `Ctrl+D`  |

## Fejlfinding

Hvis du har problemer med at køre Obsidian CLI:

- Sørg for at du bruger den seneste [[Opdatér Obsidian|Obsidian installationsversion]] (1.12.4 eller nyere).
- Genstart din terminal efter registrering af CLI, for at PATH-ændringerne træder i kraft.
- Obsidian skal køre. CLI forbinder til den kørende Obsidian-instans. Hvis Obsidian ikke kører, bør den første CLI-kommando starte applikationen.

### Windows

Obsidian CLI på Windows kræver Obsidian 1.12.4+ installationsprogrammet. Se [[Opdatér Obsidian|Opdatering af installationsversion]].

Windows bruger en terminal-redirector, der forbinder Obsidian korrekt til stdin/stdout. Dette er nødvendigt, fordi Obsidian normalt kører som en GUI-applikation, der er inkompatibel med terminaloutput på Windows. Når du installerer Obsidian 1.12.4+, vil `Obsidian.com` terminal-redirectoren blive tilføjet i mappen, hvor du installerede `Obsidian.exe`-filen.

### macOS

CLI-registreringen tilføjer Obsidian-binærmappen til din PATH via `~/.zprofile`. Hvis du har problemer, tjek følgende:

Din `~/.zprofile`-fil bør indeholde følgende linje. Hvis den mangler, kan du tilføje den manuelt:

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### Alternative shells

CLI-registreringen ændrer kun `~/.zprofile`, som bruges af zsh (standard macOS-shell). Hvis du bruger en anden shell, tilføj Obsidian-binærmappen til din shells konfigurationsfil manuelt:

- Bash: tilføj `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` til `~/.bash_profile`
- Fish: kør `fish_add_path /Applications/Obsidian.app/Contents/MacOS`


### Linux

CLI-registreringen opretter et symbolsk link på `/usr/local/bin/obsidian`, der peger på Obsidian-binæren (kræver sudo).

#### AppImage

For AppImage-installationer peger det symbolske link på `.AppImage`-filen i stedet for den interne binær, da monteringsstien ændres ved hver opstart. Hvis sudo fejler, oprettes det symbolske link på `~/.local/bin/obsidian` som alternativ. Hvis du har problemer, tjek følgende.

Tjek at det symbolske link eksisterer og peger på den korrekte binær:

```
ls -l /usr/local/bin/obsidian
```

Hvis det symbolske link mangler, opret det manuelt:

```
sudo ln -s /path/to/obsidian /usr/local/bin/obsidian
```

Hvis det symbolske link blev oprettet i `~/.local/bin/` i stedet, sørg for at den mappe er i din PATH. Tilføj følgende til din `~/.bashrc` eller `~/.zshrc`:

```
export PATH="$PATH:$HOME/.local/bin"
```

Hvis det symbolske link går i stykker efter flytning eller omdøbning af `.AppImage`-filen, genregistrér CLI eller opdatér det symbolske link manuelt.

#### Snap

Snap-pakken gemmer insiderversionsdata i sin egen brugerdatamappe. Hvis CLI ikke registrerer insider `.asar`-filen, sæt `XDG_CONFIG_HOME` til at pege på Snap-konfigurationsstien:

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

Tilføj dette til din `~/.bashrc` eller `~/.zshrc` for at gøre det permanent.


#### Flatpak

Obsidian forsøger at gøre dette automatisk, men herunder er de manuelle instruktioner. Hvis det er en systeminstallation:

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

Hvis det er en brugerinstallation:

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
