---
permalink: cli
description: Allt du kan göra i Obsidian kan göras från kommandoraden.
---
Obsidian CLI är ett kommandoradsgränssnitt som låter dig styra Obsidian från din terminal för skript, automatisering och integration med externa verktyg.

Allt du kan göra i Obsidian kan du göra från kommandoraden. Obsidian CLI inkluderar till och med [[#Utvecklarkommandon|utvecklarkommandon]] för att komma åt utvecklarverktyg, inspektera element, ta skärmbilder, ladda om tillägg och mer.

![[obsidian-cli.mp4#interface]]

> [!warning] Kräver Obsidian 1.12-installationsprogram
> Att använda CLI kräver Obsidian 1.12-installationsprogrammet. Se [[Uppdatera Obsidian#Installationsprogramuppdateringar|uppdateringsguiden för installationsprogrammet]].

## Installera Obsidian CLI

Uppgradera till den senaste [[Uppdatera Obsidian|versionen av Obsidians installationsprogram]] (1.12.7+).

Aktivera Obsidian CLI i Obsidian:

1. Gå till **Inställningar** → **Allmänt**.
2. Aktivera **Kommandoradsgränssnitt**.
3. Följ instruktionerna för att registrera Obsidian CLI.

Om du stöter på problem med att installera Obsidian CLI, se [[#Felsökning]].

## Kom igång

Obsidian CLI stöder både enskilda kommandon och ett terminalgränssnitt (TUI) med interaktiv hjälp och autokomplettering.

> [!info] Obsidian-appen måste vara igång
> Obsidian CLI kräver att Obsidian-appen körs. Om Obsidian inte körs startar det första kommandot du kör Obsidian.
>
> Vill du synkronisera utan skrivbordsappen? Se [[Obsidian Headless|Obsidian Headless]].

### Kör ett kommando

Kör ett enskilt kommando utan att öppna TUI:

```shell
# Kör hjälpkommandot
obsidian help
```

### Använd terminalgränssnittet

Använd TUI genom att skriva `obsidian`. Efterföljande kommandon kan skrivas utan `obsidian`.

```shell
# Öppna TUI, kör sedan help
obsidian
help
```

TUI stöder autokomplettering, kommandohistorik och omvänd sökning. Använd `Ctrl+R` för att söka i din kommandohistorik. Se [[#Tangentbordsgenvägar]] för alla tillgängliga genvägar.

## Exempel

Här är några exempel på vad Obsidian CLI kan göra.

### Vardaglig användning

```shell
# Öppna dagens dagliga anteckning
obsidian daily

# Lägg till en uppgift i din dagliga anteckning
obsidian daily:append content="- [ ] Handla mat"

# Sök i ditt valv
obsidian search query="mötesanteckningar"

# Läs den aktiva filen
obsidian read

# Lista alla uppgifter från din dagliga anteckning
obsidian tasks daily

# Skapa en ny anteckning från en mall
obsidian create name="Resa till Paris" template=Resa

# Lista alla taggar i ditt valv med antal
obsidian tags counts

# Jämför två versioner av en fil
obsidian diff file=README from=1 to=3
```

### För utvecklare

Många [[#Utvecklarkommandon]] finns tillgängliga för tilläggs- och temautveckling. Dessa kommandon möjliggör att agentiska kodningsverktyg automatiskt kan testa och felsöka.

```shell
# Öppna utvecklarverktyg
obsidian devtools

# Ladda om ett gemenskapstillägg du utvecklar
obsidian plugin:reload id=my-plugin

# Ta en skärmbild av appen
obsidian dev:screenshot path=screenshot.png

# Kör JavaScript i appens konsol
obsidian eval code="app.vault.getFiles().length"
```

## Så här gör du

### Använd parametrar och flaggor

Kommandon kan använda **parametrar** och **flaggor**. De flesta kommandon kräver inga parametrar eller flaggor. Obligatoriska parametrar är markerade som `required`. Till exempel:

```shell
# Skapa en ny anteckning med standardnamnet "Namnlös"
obsidian create
```

En **parameter** tar ett värde, skrivet som `parameter=värde`. Om värdet innehåller mellanslag, omslut det med citattecken:

```shell
# Skapa en ny anteckning kallad "Anteckning" med innehållet "Hej världen"
obsidian create name=Anteckning content="Hej världen"
```

En **flagga** är en boolesk omkopplare utan värde. Inkludera den för att aktivera den, till exempel är `open` och `overwrite` flaggor:

```shell
# Skapa en anteckning och öppna den
obsidian create name=Anteckning content="Hej" open overwrite
```

För flerradigt innehåll använd `\n` för ny rad. Använd `\t` för tabb.

```bash
obsidian create name=Anteckning content="# Titel\n\nBrödtext"
```

### Rikta mot ett valv

Om din terminals aktuella arbetskatalog är en valvmapp används det valvet som standard. Annars används det för närvarande aktiva valvet.

Använd `vault=<namn>` eller `vault=<id>` för att rikta mot ett specifikt valv. Detta måste vara den första parametern före ditt kommando:

```shell
obsidian vault=Anteckningar daily
obsidian vault="Mitt Valv" search query="test"
```

I TUI, använd `vault:open <namn>` eller `<id>` för att byta till ett annat valv.

### Rikta mot en fil

Många kommandon accepterar parametrarna `file` och `path` för att rikta mot en specifik fil. Om inget anges används den aktiva filen som standard.

- `file=<namn>` löser filen med samma länkupplösning som [[Interna länkar|wikilänkar]], matchning sker via filnamn utan att kräva fullständig sökväg eller filändelse.
- `path=<sökväg>` kräver den exakta sökvägen från valvets rot, t.ex. `mapp/anteckning.md`.

```shell
# Dessa är likvärdiga om "Recept.md" är den enda filen med det namnet
obsidian read file=Recept
obsidian read path="Mallar/Recept.md"
```

### Kopiera utdata

Lägg till `--copy` till valfritt kommando för att kopiera utdatan till urklipp:

```shell
read --copy
search query="TODO" --copy
```


## Allmänna kommandon

### `help`

Visa lista över alla tillgängliga kommandon.

| Parameter   | Beskrivning                             |
| ----------- | --------------------------------------- |
| `<command>` | Visa hjälp för ett specifikt kommando.  |

### `version`

Visa Obsidian-version.

### `reload`

Ladda om appfönstret.

### `restart`

Starta om appen.


## Baser

Kommandon för [[Introduktion till baser|baser]].

### `bases`

Lista alla `.base`-filer i valvet.

### `base:views`

Lista vyer i den aktuella basfilen.

### `base:create`

Skapa ett nytt objekt i en bas. Använder den aktiva basvyn som standard om ingen fil anges.

```bash
file=<name>        # basfilens namn
path=<path>        # basfilens sökväg
view=<name>        # vynamn
name=<name>        # nytt filnamn
content=<text>     # initialt innehåll

open               # öppna fil efter skapande
newtab             # öppna i ny flik
```

### `base:query`

Fråga en bas och returnera resultat.

```bash
file=<name>                    # basfilens namn
path=<path>                    # basfilens sökväg
view=<name>                    # vynamn att fråga
format=json|csv|tsv|md|paths   # utdataformat (standard: json)
```

## Bokmärken

Kommandon för [[Bokmärken]].

### `bookmarks`

Lista bokmärken.

```bash
total              # returnera antal bokmärken
verbose            # inkludera bokmärkestyper
format=json|tsv|csv  # utdataformat (standard: tsv)
```

### `bookmark`

Lägg till ett bokmärke.

```bash
file=<path>        # fil att bokmärka
subpath=<subpath>  # undersökväg (rubrik eller block) inom filen
folder=<path>      # mapp att bokmärka
search=<query>     # sökfråga att bokmärka
url=<url>          # URL att bokmärka
title=<title>      # bokmärkestitel
```

## Kommandopalett

Kommandon för [[Kommandopalett]] och [[Snabbkommandon]]. Detta inkluderar alla kommandon registrerade av tillägg.

### `commands`

Lista tillgängliga kommando-ID:n.

```bash
filter=<prefix>    # filtrera efter ID-prefix
```

### `command`

Kör ett Obsidian-kommando.

```bash
id=<command-id>    # (required) kommando-ID att köra
```

### `hotkeys`

Lista tangentbordsgenvägar för alla kommandon.

```bash
total              # returnera antal genvägar
verbose            # visa om genvägen är anpassad
format=json|tsv|csv  # utdataformat (standard: tsv)
```

### `hotkey`

Hämta tangentbordsgenväg för ett kommando.

```bash
id=<command-id>    # (required) kommando-ID

verbose            # visa om anpassad eller standard
```

## Dagliga anteckningar

Kommandon för [[Dagliga anteckningar]].

### `daily`

Öppna daglig anteckning.

```bash
paneType=tab|split|window    # paneltyp att öppna i
```

### `daily:path`

Hämta sökväg till daglig anteckning. Returnerar den förväntade sökvägen även om filen inte har skapats ännu.

### `daily:read`

Läs innehållet i daglig anteckning.

### `daily:append`

Lägg till innehåll i slutet av daglig anteckning.

```bash
content=<text>     # (required) innehåll att lägga till
paneType=tab|split|window    # paneltyp att öppna i

inline             # lägg till utan ny rad
open               # öppna fil efter tillägg
```

### `daily:prepend`

Lägg till innehåll i början av daglig anteckning.

```bash
content=<text>     # (required) innehåll att lägga till i början
paneType=tab|split|window    # paneltyp att öppna i

inline             # lägg till utan ny rad
open               # öppna fil efter tillägg
```

## Filhistorik

### `diff`

Lista eller jämför versioner från lokal [[Filåterställning]] och [[Introduktion till Obsidian Sync|Sync]]. Versioner numreras från nyaste till äldsta.

```bash
file=<name>          # filnamn
path=<path>          # filsökväg
from=<n>             # versionsnummer att jämföra från
to=<n>               # versionsnummer att jämföra till
filter=local|sync    # filtrera efter versionskälla
```

**Exempel:**

```shell
# Lista alla versioner av den aktiva filen
diff

# Lista alla versioner av en specifik fil
diff file=Recept

# Jämför den senaste versionen med den aktuella filen
diff file=Recept from=1

# Jämför två versioner
diff file=Recept from=2 to=1

# Visa bara Sync-versioner
diff filter=sync
```

### `history`

Lista versioner från [[Filåterställning]] enbart. Se [[#Sync|sync:history]] för motsvarande Sync-kommando.

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
```

### `history:list`

Lista alla filer med lokal historik.

### `history:read`

Läs en lokal historikversion.

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
version=<n>        # versionsnummer (standard: 1)
```

### `history:restore`

Återställ en lokal historikversion.

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
version=<n>        # (required) versionsnummer
```

### `history:open`

Öppna filåterställning.

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
```

## Filer och mappar

### `file`

Visa filinformation (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
```

Exempel:

```
path       Notes/Recept.md
name       Recept
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Lista filer i valvet.

```bash
folder=<path>      # filtrera efter mapp
ext=<extension>    # filtrera efter filändelse

total              # returnera antal filer
```

### `folder`

Visa mappinformation.

```bash
path=<path>              # (required) mappsökväg
info=files|folders|size  # returnera enbart specifik info
```

### `folders`

Lista mappar i valvet.

```bash
folder=<path>      # filtrera efter överordnad mapp

total              # returnera antal mappar
```

### `open`

Öppna en fil.

```bash
file=<name>        # filnamn
path=<path>        # filsökväg

newtab             # öppna i ny flik
```

### `create`

Skapa eller skriv över en fil.

```bash
name=<name>        # filnamn
path=<path>        # filsökväg
content=<text>     # initialt innehåll
template=<name>    # mall att använda

overwrite          # skriv över om filen finns
open               # öppna fil efter skapande
newtab             # öppna i ny flik
```

### `read`

Läs filinnehåll (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
```

### `append`

Lägg till innehåll i slutet av en fil (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
content=<text>     # (required) innehåll att lägga till

inline             # lägg till utan ny rad
```

### `prepend`

Lägg till innehåll efter frontmatter (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
content=<text>     # (required) innehåll att lägga till i början

inline             # lägg till utan ny rad
```

### `move`

Flytta eller byt namn på en fil (standard: aktiv fil). Detta uppdaterar automatiskt [[Interna länkar|interna länkar]] om det är aktiverat i dina [[Inställningar#Upppdatera interna länkar|valvinställningar]].

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
to=<path>          # (required) destinationsmapp eller sökväg
```

### `rename`

Byt namn på en fil (standard: aktiv fil). Filändelsen bevaras automatiskt om den utelämnas från det nya namnet. Använd [[#`move`|move]] för att byta namn och flytta en fil samtidigt. Detta uppdaterar automatiskt [[Interna länkar|interna länkar]] om det är aktiverat i dina [[Inställningar#Upppdatera interna länkar|valvinställningar]].

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
name=<name>        # (required) nytt filnamn
```

### `delete`

Radera en fil (standard: aktiv fil, papperskorgen som standard).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg

permanent          # hoppa över papperskorgen, radera permanent
```

## Länkar

Kommandon för [[Bakåtlänkar]] och [[Utgående länkar]].

### `backlinks`

Lista bakåtlänkar till en fil (standard: aktiv fil).

```bash
file=<name>        # målfilens namn
path=<path>        # målfilens sökväg

counts             # inkludera antal länkar
total              # returnera antal bakåtlänkar
format=json|tsv|csv  # utdataformat (standard: tsv)
```

### `links`

Lista utgående länkar från en fil (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg

total              # returnera antal länkar
```

### `unresolved`

Lista olösta länkar i valvet.

```bash
total              # returnera antal olösta länkar
counts             # inkludera antal länkar
verbose            # inkludera källfiler
format=json|tsv|csv  # utdataformat (standard: tsv)
```

### `orphans`

Lista filer utan inkommande länkar.

```bash
total              # returnera antal föräldralösa
```

### `deadends`

Lista filer utan utgående länkar.

```bash
total              # returnera antal återvändsgränder
```

## Disposition

Kommandon för [[Disposition]].

### `outline`

Visa rubriker för den aktuella filen.

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
format=tree|md|json  # utdataformat (standard: tree)

total              # returnera antal rubriker
```

## Tillägg

Kommandon för [[Kärntillägg]] och [[Gemenskapstillägg]].

### `plugins`

Lista installerade tillägg.

```bash
filter=core|community  # filtrera efter tilläggstyp

versions               # inkludera versionsnummer
format=json|tsv|csv    # utdataformat (standard: tsv)
```

### `plugins:enabled`

Lista aktiverade tillägg.

```bash
filter=core|community  # filtrera efter tilläggstyp

versions               # inkludera versionsnummer
format=json|tsv|csv    # utdataformat (standard: tsv)
```

### `plugins:restrict`

Växla eller kontrollera begränsat läge.

```bash
on                 # aktivera begränsat läge
off                # inaktivera begränsat läge
```

### `plugin`

Hämta tilläggsinformation.

```bash
id=<plugin-id>     # (required) tilläggs-ID
```

### `plugin:enable`

Aktivera ett tillägg.

```bash
id=<id>                # (required) tilläggs-ID
filter=core|community  # tilläggstyp
```

### `plugin:disable`

Inaktivera ett tillägg.

```bash
id=<id>                # (required) tilläggs-ID
filter=core|community  # tilläggstyp
```

### `plugin:install`

Installera ett gemenskapstillägg.

```bash
id=<id>            # (required) tilläggs-ID

enable             # aktivera efter installation
```

### `plugin:uninstall`

Avinstallera ett gemenskapstillägg.

```bash
id=<id>            # (required) tilläggs-ID
```

### `plugin:reload`

Ladda om ett tillägg (för utvecklare).

```bash
id=<id>            # (required) tilläggs-ID
```

## Egenskaper

Kommandon relaterade till [[Egenskaper]].

### `aliases`

Lista aliaser i valvet. Använd `active` eller `file`/`path` för att visa aliaser för en specifik fil.

```bash
file=<name>        # filnamn
path=<path>        # filsökväg

total              # returnera antal aliaser
verbose            # inkludera filsökvägar
active             # visa aliaser för aktiv fil
```

### `properties`

Lista egenskaper i valvet. Använd `active` eller `file`/`path` för att visa egenskaper för en specifik fil.

```bash
file=<name>        # visa egenskaper för fil
path=<path>        # visa egenskaper för sökväg
name=<name>        # hämta antal för specifik egenskap
sort=count         # sortera efter antal (standard: namn)
format=yaml|json|tsv  # utdataformat (standard: yaml)

total              # returnera antal egenskaper
counts             # inkludera antal förekomster
active             # visa egenskaper för aktiv fil
```

### `property:set`

Ange en egenskap på en fil (standard: aktiv fil).

```bash
name=<name>                                    # (required) egenskapsnamn
value=<value>                                  # (required) egenskapsvärde
type=text|list|number|checkbox|date|datetime   # egenskapstyp
file=<name>                                    # filnamn
path=<path>                                    # filsökväg
```

### `property:remove`

Ta bort en egenskap från en fil (standard: aktiv fil).

```bash
name=<name>        # (required) egenskapsnamn
file=<name>        # filnamn
path=<path>        # filsökväg
```

### `property:read`

Läs ett egenskapsvärde från en fil (standard: aktiv fil).

```bash
name=<name>        # (required) egenskapsnamn
file=<name>        # filnamn
path=<path>        # filsökväg
```

## Publish

Kommandon för [[Introduktion till Obsidian Publish|Obsidian Publish]].

### `publish:site`

Visa information om publiceringswebbplatsen (slug, URL).

### `publish:list`

Lista publicerade filer.

```bash
total              # returnera antal publicerade filer
```

### `publish:status`

Lista publiceringsändringar.

```bash
total              # returnera antal ändringar
new                # visa enbart nya filer
changed            # visa enbart ändrade filer
deleted            # visa enbart raderade filer
```

### `publish:add`

Publicera en fil eller alla ändrade filer (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg

changed            # publicera alla ändrade filer
```

### `publish:remove`

Avpublicera en fil (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
```

### `publish:open`

Öppna fil på publicerad webbplats (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
```

## Slumpmässiga anteckningar

Kommandon för [[Slumpmässig anteckning]].

### `random`

Öppna en slumpmässig anteckning.

```bash
folder=<path>      # begränsa till mapp

newtab             # öppna i ny flik
```

### `random:read`

Läs en slumpmässig anteckning (inkluderar sökväg).

```bash
folder=<path>      # begränsa till mapp
```

## Sök

Kommandon för [[Sök]].

### `search`

Sök i valvet efter text. Returnerar matchande filsökvägar.

```bash
query=<text>       # (required) sökfråga
path=<folder>      # begränsa till mapp
limit=<n>          # max antal filer
format=text|json   # utdataformat (standard: text)

total              # returnera antal träffar
case               # skiftlägeskänslig
```

### `search:context`

Sök med matchande radkontext. Returnerar grep-liknande `sökväg:rad: text`-utdata.

```bash
query=<text>       # (required) sökfråga
path=<folder>      # begränsa till mapp
limit=<n>          # max antal filer
format=text|json   # utdataformat (standard: text)

case               # skiftlägeskänslig
```

### `search:open`

Öppna sökvy.

```bash
query=<text>       # initial sökfråga
```

## Sync

Kommandon för [[Introduktion till Obsidian Sync|Obsidian Sync]].

> [!tip] Synkronisera utan skrivbordsappen
> Dessa kommandon styr Sync inom den körande Obsidian-appen. För att synkronisera valv från kommandoraden utan skrivbordsappen, se [[Headless Sync]].

### `sync`

Pausa eller återuppta synkronisering.

```bash
on                 # återuppta synkronisering
off                # pausa synkronisering
```

### `sync:status`

Visa synkroniseringsstatus och användning.

### `sync:history`

Lista synkroniseringsversionshistorik för en fil (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg

total              # returnera antal versioner
```

### `sync:read`

Läs en synkroniseringsversion (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
version=<n>        # (required) versionsnummer
```

### `sync:restore`

Återställ en synkroniseringsversion (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
version=<n>        # (required) versionsnummer
```

### `sync:open`

Öppna synkroniseringshistorik (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
```

### `sync:deleted`

Lista raderade filer i synkroniseringen.

```bash
total              # returnera antal raderade filer
```

## Taggar

Kommandon för [[Taggar]].

### `tags`

Lista taggar i valvet. Använd `active` eller `file`/`path` för att visa taggar för en specifik fil.

```bash
file=<name>        # filnamn
path=<path>        # filsökväg
sort=count         # sortera efter antal (standard: namn)

total              # returnera antal taggar
counts             # inkludera antal taggar
format=json|tsv|csv  # utdataformat (standard: tsv)
active             # visa taggar för aktiv fil
```

### `tag`

Hämta tagginformation.

```bash
name=<tag>         # (required) taggnamn

total              # returnera antal förekomster
verbose            # inkludera fillista och antal
```

## Uppgifter

Kommandon för uppgiftshantering.

### `tasks`

Lista uppgifter i valvet. Använd `active` eller `file`/`path` för att visa uppgifter för en specifik fil.

```bash
file=<name>        # filtrera efter filnamn
path=<path>        # filtrera efter filsökväg
status="<char>"    # filtrera efter statustecken

total              # returnera antal uppgifter
done               # visa slutförda uppgifter
todo               # visa ej slutförda uppgifter
verbose            # gruppera efter fil med radnummer
format=json|tsv|csv  # utdataformat (standard: text)
active             # visa uppgifter för aktiv fil
daily              # visa uppgifter från daglig anteckning
```

**Exempel:**

```bash
# Lista alla uppgifter i valvet
tasks

# Lista ej slutförda uppgifter i valvet
tasks todo

# Lista slutförda uppgifter från en specifik fil
tasks file=Recept done

# Lista uppgifter från dagens dagliga anteckning
tasks daily

# Räkna uppgifter i daglig anteckning
tasks daily total

# Lista uppgifter med filsökvägar och radnummer
tasks verbose

# Filtrera efter anpassad status (citera specialtecken)
tasks 'status=?'
```

### `task`

Visa eller uppdatera en uppgift.

```bash
ref=<path:line>    # uppgiftsreferens (sökväg:rad)
file=<name>        # filnamn
path=<path>        # filsökväg
line=<n>           # radnummer
status="<char>"    # ange statustecken

toggle             # växla uppgiftsstatus
daily              # daglig anteckning
done               # markera som klar
todo               # markera som att göra
```

**Exempel:**

```bash
# Visa uppgiftsinformation
task file=Recept line=8
task ref="Recept.md:8"

# Växla slutförandestatus för uppgift
task ref="Recept.md:8" toggle

# Växla uppgift i daglig anteckning
task daily line=3 toggle

# Ange uppgiftsstatus
task file=Recept line=8 done      # → [x]
task file=Recept line=8 todo      # → [ ]
task file=Recept line=8 status=-  # → [-]
task daily line=3 done            # Markera uppgift i daglig anteckning som klar
```


## Mallar

Kommandon för [[Mallar|Mallar]].

### `templates`

Lista mallar.

```bash
total              # returnera antal mallar
```

### `template:read`

Läs mallinnehåll.

```bash
name=<template>    # (required) mallnamn
title=<title>      # titel för variabelupplösning

resolve            # lös mallvariabler
```

### `template:insert`

Infoga mall i aktiv fil.

```bash
name=<template>    # (required) mallnamn
```

**Anteckningar:**
- Alternativet `resolve` bearbetar variablerna `{{date}}`, `{{time}}`, `{{title}}`
- Använd `create path=<sökväg> template=<namn>` för att skapa en fil med en mall

## Teman och css-instick

Kommandon för [[Teman]] och [[CSS-instick]].

### `themes`

Lista installerade teman.

```bash
versions           # inkludera versionsnummer
```

### `theme`

Visa aktivt tema eller hämta information.

```bash
name=<name>        # temanamn för detaljer
```

### `theme:set`

Ange aktivt tema.

```bash
name=<name>        # (required) temanamn (tomt för standard)
```

### `theme:install`

Installera ett gemenskapstema.

```bash
name=<name>        # (required) temanamn

enable             # aktivera efter installation
```

### `theme:uninstall`

Avinstallera ett tema.

```bash
name=<name>        # (required) temanamn
```

### `snippets`

Lista installerade CSS-instick.

### `snippets:enabled`

Lista aktiverade CSS-instick.

### `snippet:enable`

Aktivera ett CSS-instick.

```bash
name=<name>        # (required) namn på instick
```

### `snippet:disable`

Inaktivera ett CSS-instick.

```bash
name=<name>        # (required) namn på instick
```

## Unika anteckningar

Kommandon för [[Unik anteckningsskapare]].

### `unique`

Skapa unik anteckning.

```bash
name=<text>        # anteckningsnamn
content=<text>     # initialt innehåll
paneType=tab|split|window    # paneltyp att öppna i

open               # öppna fil efter skapande
```

## Valv

### `vault`

Visa valvinformation.

```bash
info=name|path|files|folders|size  # returnera enbart specifik info
```

### `vaults`

Lista kända valv.

```bash
total              # returnera antal valv
verbose            # inkludera valvsökvägar
```

### `vault:open`

Byt till ett annat valv (enbart TUI).

```bash
name=<name>        # (required) valvnamn
```

## Webbvisare

Kommandon för [[Webbvisare]].

### `web`

Öppna URL i webbvisare.

```bash
url=<url>          # (required) URL att öppna

newtab             # öppna i ny flik
```

## Ordräkning

Kommandon för [[Ordräkning]].

### `wordcount`

Räkna ord och tecken (standard: aktiv fil).

```bash
file=<name>        # filnamn
path=<path>        # filsökväg

words              # returnera enbart ordantal
characters         # returnera enbart teckenantal
```

## Arbetsyta

Kommandon för [[Arbetsyta]] och tillägget [[Arbetsytor]].

### `workspace`

Visa arbetsytans träd.

```bash
ids                # inkludera arbetsytobjektens ID:n
```

### `workspaces`

Lista sparade arbetsytor.

```bash
total              # returnera antal arbetsytor
```

### `workspace:save`

Spara aktuell layout som arbetsyta.

```bash
name=<name>        # arbetsytans namn
```

### `workspace:load`

Ladda en sparad arbetsyta.

```bash
name=<name>        # (required) arbetsytans namn
```

### `workspace:delete`

Radera en sparad arbetsyta.

```bash
name=<name>        # (required) arbetsytans namn
```

### `tabs`

Lista öppna flikar.

```bash
ids                # inkludera flik-ID:n
```

### `tab:open`

Öppna en ny flik.

```bash
group=<id>         # flikgrupps-ID
file=<path>        # fil att öppna
view=<type>        # vytyp att öppna
```

### `recents`

Lista nyligen öppnade filer.

```bash
total              # returnera antal nyliga filer
```

## Utvecklarkommandon

Kommandon för att hjälpa dig utveckla [[Gemenskapstillägg]] och [[Teman]]. Läs mer genom att besöka [Obsidians utvecklardokumentation](https://docs.obsidian.md).

### `devtools`

Växla Electron-utvecklarverktyg.

### `dev:debug`

Anslut/koppla bort Chrome DevTools Protocol-felsökare.

```bash
on                 # anslut felsökare
off                # koppla bort felsökare
```

### `dev:cdp`

Kör ett Chrome DevTools Protocol-kommando.

```bash
method=<CDP.method>  # (required) CDP-metod att anropa
params=<json>        # metodparametrar som JSON
```

### `dev:errors`

Visa fångade JavaScript-fel.

```bash
clear              # rensa felbufferten
```

### `dev:screenshot`

Ta en skärmbild (returnerar base64 PNG).

```bash
path=<filename>    # sökväg för utdatafil
```

### `dev:console`

Visa fångade konsolmeddelanden.

```bash
limit=<n>                        # max meddelanden att visa (standard 50)
level=log|warn|error|info|debug  # filtrera efter loggnivå

clear                            # rensa konsolbufferten
```

### `dev:css`

Inspektera CSS med källkodsplatser.

```bash
selector=<css>     # (required) CSS-selektor
prop=<name>        # filtrera efter egenskapsnamn
```

### `dev:dom`

Fråga DOM-element.

```bash
selector=<css>     # (required) CSS-selektor
attr=<name>        # hämta attributvärde
css=<prop>         # hämta CSS-egenskapsvärde

total              # returnera antal element
text               # returnera textinnehåll
inner              # returnera innerHTML istället för outerHTML
all                # returnera alla träffar istället för första
```

### `dev:mobile`

Växla mobilemulering.

```bash
on                 # aktivera mobilemulering
off                # inaktivera mobilemulering
```

### `eval`

Kör JavaScript och returnera resultat.

```bash
code=<javascript>  # (required) JavaScript-kod att köra
```

## Tangentbordsgenvägar

Dessa genvägar är tillgängliga i [[#Använd terminalgränssnittet|TUI]].

### Navigering

| Åtgärd                                                 | Genväg          |
| ------------------------------------------------------- | --------------- |
| Flytta markör vänster                                   | `←` / `Ctrl+B`  |
| Flytta markör höger (accepterar förslag vid radens slut) | `→` / `Ctrl+F`  |
| Hoppa till radens början                                | `Ctrl+A`        |
| Hoppa till radens slut                                  | `Ctrl+E`        |
| Flytta bakåt ett ord                                    | `Alt+B`         |
| Flytta framåt ett ord                                   | `Alt+F`         |

### Redigering

| Åtgärd                           | Genväg                      |
| -------------------------------- | --------------------------- |
| Radera till radens början        | `Ctrl+U`                    |
| Radera till radens slut          | `Ctrl+K`                    |
| Radera föregående ord            | `Ctrl+W` / `Alt+Backspace`  |

### Autokomplettering

| Åtgärd                                                  | Genväg       |
| -------------------------------------------------------- | ------------ |
| Gå in i förslagsläge / acceptera valt förslag            | `Tab`        |
| Lämna förslagsläge                                       | `Shift+Tab`  |
| Gå in i förslagsläge (från ny inmatning)                 | `↓`          |
| Acceptera första/valda förslaget (vid radens slut)       | `→`          |

### Historik

| Åtgärd                                                          | Genväg          |
| ---------------------------------------------------------------- | --------------- |
| Föregående historikpost / navigera förslag uppåt                 | `↑` / `Ctrl+P`  |
| Nästa historikpost / navigera förslag nedåt                      | `↓` / `Ctrl+N`  |
| Omvänd historiksökning (skriv för att filtrera, `Ctrl+R` för att cykla) | `Ctrl+R`        |

### Övrigt

| Åtgärd                                                     | Genväg               |
| ----------------------------------------------------------- | -------------------- |
| Kör kommando eller acceptera förslag                        | `Enter`              |
| Ångra autokomplettering / lämna förslagsläge / rensa inmatning | `Escape`             |
| Rensa skärm                                                 | `Ctrl+L`             |
| Avsluta                                                     | `Ctrl+C` / `Ctrl+D`  |

## Felsökning

Om du har problem med att köra Obsidian CLI:

- Se till att du använder den senaste [[Uppdatera Obsidian|versionen av Obsidians installationsprogram]] (1.12.7 eller högre).
- Om du just uppdaterade Obsidian från en tidigare version, stäng av CLI-inställningen och slå på den igen, och låt sedan Obsidian utföra den automatiska PATH-registreringen.
- Starta om din terminal efter att du registrerat CLI för att PATH-ändringarna ska träda i kraft.
- Obsidian måste vara igång. CLI ansluter till den körande Obsidian-instansen.

### Windows

Obsidian CLI på Windows kräver installationsprogrammet Obsidian 1.12.7+. Se [[Uppdatera Obsidian|Uppdatering av installationsprogramsversion]].

Windows använder en terminalomdirigering som ansluter Obsidian till stdin/stdout korrekt. Detta är nödvändigt eftersom Obsidian normalt körs som en GUI-app som är inkompatibel med terminalutdata på Windows. När du installerar Obsidian 1.12.7+ läggs terminalomdirigaren `Obsidian.com` till i mappen där du installerade filen `Obsidian.exe`.

CLI-registreringen lägger till Obsidian i din användares PATH-variabel, vilket bara träder i kraft efter att du startar om terminalen.

### macOS

CLI-registreringen skapar en symbolisk länk vid `/usr/local/bin/obsidian` som pekar på CLI-binärfilen som ingår i appen. Detta kräver administratörsbehörigheter — du kommer att bli tillfrågad via en systemdialog.

Kontrollera att den symboliska länken finns och pekar på rätt binärfil:

```
ls -l /usr/local/bin/obsidian
```

Om den symboliska länken saknas, skapa den manuellt:

```
sudo ln -sf /Applications/Obsidian.app/Contents/MacOS/obsidian-cli /usr/local/bin/obsidian
```

> [!note] Om du tidigare registrerade CLI med en äldre version av Obsidian kan du ha en kvarvarande PATH-post i `~/.zprofile`. Den nya registreringsprocessen tar bort detta automatiskt, men om det finns kvar kan du säkert radera raderna som börjar med `# Added by Obsidian` från `~/.zprofile`.

### Linux

CLI-registreringen kopierar CLI-binärfilen till `~/.local/bin/obsidian`. Detta görs eftersom vissa Linux-installationsmetoder körs från tillfälliga kataloger som inte kan länkas symboliskt på ett beständigt sätt.

Se till att `~/.local/bin` finns i din PATH. Lägg till följande i din `~/.bashrc` eller `~/.zshrc` om det inte redan finns:

```
export PATH="$PATH:$HOME/.local/bin"
```

Kontrollera att binärfilen finns:

```
ls -l ~/.local/bin/obsidian
```

Om binärfilen saknas, kopiera den manuellt från Obsidians installationskatalog:

```
cp /path/to/Obsidian/obsidian-cli ~/.local/bin/obsidian
chmod 755 ~/.local/bin/obsidian
```
