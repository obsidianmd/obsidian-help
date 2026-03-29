---
permalink: plugins/search
publish: true
mobile: true
description: Søk er en kjerneplugin som hjelper deg med å finne data i Obsidian-hvelvet ditt ved å bruke søkeord og operatorer for å begrense resultatene.
---
Søk er en [[Kjerneutvidelser|kjerneutvidelse]] som hjelper deg med å finne data i Obsidian-hvelvet ditt ved å bruke søketermer og operatorer for å begrense resultatene.

Som standard finner du Søk i venstre sidefelt ![[lucide-search.svg#icon]]. Du kan også åpne Søk ved å trykke `Ctrl+Shift+F` (Windows/Linux) eller `Command+Shift+F` (macOS).

- **Søk i valgt tekst**: Hvis du markerer tekst i redigeringsprogrammet og åpner Søk med hurtigtasten, viser Søk deg søkeresultatene for den markerte teksten.
- **Søk i nylige søketermer**: Åpne Søk med en tom søketerm for å liste opp nylige søketermer. Klikk på en av dem for å bruke søketermen igjen.

> [!info] Ekskluderte filer
> Filer som samsvarer med mønstrene i [[Innstillinger#Ekskluderte filer|Ekskluderte filer]] vil ikke vises i søkeresultatene.

## Søketermer

En søketerm er ordet eller frasen du skriver inn i søkefeltet. Å lære seg å skrive søketermer effektivt kan hjelpe deg med å raskt finne det du leter etter, selv i store hvelv. Obsidian søker bare i innholdet i notater og Canvas-filer.

> [!tip]- Søke i stier og filnavn
> Som standard kan du bare søke i stier og filnavn for notater og Canvas-filer. For å søke etter en sti eller et filnavn for en hvilken som helst fil i hvelvet, bruk `path`- eller `file`-operatoren.

Hvert ord i søketermen matches uavhengig i hver fil. For å søke etter en eksakt frase, omslutter du den med anførselstegn, for eksempel `"star wars"`. For å søke etter tekst med anførselstegn innenfor en eksakt frase, kan du _escape_ anførselstegnene ved å legge til en omvendt skråstrek (`\`) foran anførselstegnet, for eksempel `"they said \"hello\" to each other"`.

Du kan kontrollere om resultatene skal inneholde _alle_ ordene i søketermen, eller _et av_ ordene:

- `meeting work` returnerer filer som inneholder både `meeting` og `work`.
- `meeting OR work` returnerer filer som inneholder enten `meeting` eller `work`.

Du kan til og med kombinere de to i samme søketerm.

- `meeting work OR meetup personal` returnerer filer for arbeidsmøter og personlige treff.

Du kan bruke parenteser for å kontrollere prioriteten til hvert uttrykk.

- `meeting (work OR meetup) personal` returnerer filer som inneholder `meeting`, `personal`, og enten `work` eller `meetup`.

For å ekskludere, eller negere, et ord fra søkeresultatene, legg til en bindestrek (`-`) foran det:

- `meeting -work` returnerer filer som inneholder `meeting` men ikke `work`.

Du kan ekskludere flere uttrykk:

- `meeting -work -meetup` returnerer filer som inneholder `meeting` men ikke `work` eller `meetup`.

Du kan ekskludere en kombinasjon av uttrykk ved hjelp av parenteser:

- `meeting -(work meetup)` returnerer filer som inneholder `meeting` men ikke _både_ `work` og `meetup`.

For å filtrere resultater ved hjelp av mindre enn (`<`) og større enn (`>`) operatorene, omslutter du dem med hakeparenteser (`[]`) eller anførselstegn (`""`):

- `meeting [duration:<5]` returnerer filer der meeting er til stede, og duration er mindre enn 5.
- `meeting [duration:>5]` returnerer filer der meeting er til stede, og duration er større enn 5.

> [!tip]- Forklar søketerm
> Hvis du trenger å feilsøke en kompleks søketerm, kan du klikke på **Forklar søketerm** i Søk for en forklaring av søketermen din.

## Søkeoperatorer

Søkeoperatorer gjør det mulig med mer finmasket søk for å filtrere resultatene enda mer.

Noen operatorer lar deg til og med legge til en nestet søketerm innenfor parenteser, for eksempel: `task:(call OR email)`.

| Søkeoperator | Beskrivelse |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`         | Finn tekst i filnavn. Matcher alle filer i hvelvet.<p/>Eksempel: `file:.jpg` eller `file:202209`. |
| `path:`         | Finn tekst i filsti. Matcher alle filer i hvelvet.<p/>Eksempel: `path:"Daily notes/2022-07"`. |
| `content:`      | Finn tekst i filinnhold.<p/>Eksempel: `content:"happy cat"`. |
| `match-case:`   | Søk som skiller mellom store og små bokstaver.<p/>Eksempel: `match-case:HappyCat`. |
| `ignore-case:`  | Søk som ikke skiller mellom store og små bokstaver.<p/>Eksempel: `ignore-case:ikea`. |
| `tag:`          | Finn tagg i fil.<p/>Eksempel: `tag:#work`.<p/>Husk at søk etter `tag:#work` ikke vil returnere resultater for `#myjob/work`.<br /><br />**Merk**: Siden `tag:` ignorerer treff i kodeblokker og i ikke-Markdown-innhold, er det ofte raskere og mer nøyaktig enn et vanlig fulltekstsøk etter `#work`. |
| `line:`         | Finn filer som inneholder minst én linje som matcher `x`.<p/>Eksempel: `line:(mix flour)`.<p/><br>**Merk:** Bruk av `-line` negerer søket, noe som betyr at det finner filer der ingen linje matcher `x`. |
| `block:`        | Finn treff i samme blokk.<p/>Eksempel: `block:(dog cat)`.<p/>**Merk**: Siden `block:` krever at Søk analyserer Markdown-innholdet i hver fil, kan det føre til at søketermen tar lengre tid å fullføre. |
| `section:`      | Finn treff i samme seksjon (tekst mellom to overskrifter).<p/>Eksempel: `section:(dog cat)`. |
| `task:`         | Finn treff i en [[Grunnleggende formateringssyntaks#Oppgavelister\|oppgave]] på blokk-for-blokk-basis.<p/>Eksempel: `task:call`. |
| `task-todo:`    | Finn treff i en *ufullført* [[Grunnleggende formateringssyntaks#Oppgavelister\|oppgave]] på blokk-for-blokk-basis.<p/>Eksempel: `task-todo:call`. |
| `task-done:`    | Finn treff i en *fullført* [[Grunnleggende formateringssyntaks#Oppgavelister\|oppgave]] på blokk-for-blokk-basis.<p/>Eksempel: `task-done:call`. |

## Søk i egenskaper

Du kan bruke data lagret i [[Egenskaper]] i søketermene dine.

Bruk hakeparenteser rundt et egenskapsnavn `[property]` for å returnere filer med den egenskapen:

- `[aliases]` returnerer filer som inneholder egenskapen `aliases`

Bruk hakeparenteser og et kolon `[property:value]` for å returnere filer med den egenskapen og verdien:

- `[aliases:Name]` returnerer filer der egenskapsverdien for `aliases` er `Name`

Bruk `null` som verdi for å finne egenskaper som ikke har noen verdi:

- `[aliases:null]` returnerer filer der egenskapen `aliases` eksisterer men ikke har noen verdi

> [!info]+ Tomme verdier
> `null`-operatoren fungerer når en egenskap er tom (f.eks. `aliases: `), men ikke når egenskapen inneholder tomme anførselstegn (`""`) eller tomme hakeparenteser (`[]`).

Både egenskap og verdi tillater underspørringer, som parenteser for gruppering, `OR`-operatoren, doble anførselstegn for eksakt treff, og regulære uttrykk.

- `[status:Draft OR Published]` returnerer filer der egenskapsverdien for `status` er `Draft` eller `Published`

## Endre sensitivitet for store/små bokstaver

Som standard skiller ikke søketermer mellom store og små bokstaver. Hvis du vil søke etter den eksakte bokstavstørrelsen i søketermen, velg **Skill mellom store og små bokstaver** ![[obsidian-icon-upper-lowercase.svg#icon]] inne i søkefeltet.

Denne innstillingen kan slås av og på. Hvis ikonet **Skill mellom store og små bokstaver** er uthevet, betyr det at du for øyeblikket gjør et søk som skiller mellom store og små bokstaver.

## Endre sorteringsrekkefølge for resultater

1. Skriv inn en [[#Søketermer|søketerm]].
2. Under søkefeltet, velg nedtrekkslisten til høyre.
3. Velg sorteringsrekkefølgen du ønsker. Standard er "Sorter etter navn (A til Å)".

Følgende alternativer er tilgjengelige:

- Sorter etter navn (A til Å)
- Sort etter navn (Å til A)
- Sorter etter redigeringstid (ny til gammel)
- Sorter etter redigeringstid (gammel til ny)
- Sorter etter opprettelsesstid (ny til gammel)
- Sorter etter opprettelsesstid (gammel til ny)

## Kopier søkeresultater

1. Skriv inn en [[#Søketermer|søketerm]].
2. Under søkefeltet, velg ikonet med tre prikker ved siden av antall resultater.
3. Velg **Kopier søkeresultater**.

## Bruk regulære uttrykk

Et regulært uttrykk er et sett med tegn som beskriver et tekstmønster. For å bruke regulære uttrykk i søketermen, omslutter du uttrykket med skråstreker (`/`).

- `/\d{4}-\d{2}-\d{2}/` matcher en ISO 8601-dato, som 2022-01-01.

Du kan til og med kombinere regulære uttrykk med søkeoperatorer:

- `path:/\d{4}-\d{2}-\d{2}/` returnerer filer med en dato i filstien.

For mer informasjon om hvordan du skriver regulære uttrykk, se FreeCodeCamps [Practical Regex guide](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) eller Mozillas [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

> [!info]+ JavaScript-baserte regulære uttrykk
> Regulære uttrykk finnes i ulike varianter som kan se forskjellige ut fra hverandre. Obsidian bruker JavaScript-baserte regulære uttrykk.

## Konfigurer søkeinnstillinger

For å konfigurere Søk, velg **Søkeinnstillinger** ![[lucide-sliders-horizontal.svg#icon]] på høyre side av søkefeltet for å se bryterne.

| Innstilling | Beskrivelse |
|-------------------------|-----------------------------------------------------------------------------|
| **Forklar søketerm** | Bryter ned søketermene og forklarer dem i ren tekst. |
| **Lukk resultater** | Slår av og på om søkekonteksten skal vises. |
| **Vis mer kontekst** | Utvider søkeresultatet for å vise mer tekst rundt treffet. |

## Bygg inn søkeresultater i et notat

For å bygge inn søkeresultater i et notat, legg til en `query`-kodeblokk:

````
```query
embed OR search
```
````

[[Introduksjon til Obsidian Publish|Obsidian Publish]] støtter ikke innebygde [[Publish-begrensninger#Søk|søkeresultater]]. For å se et live gjengitt eksempel, bruk kodeblokken ovenfor i hvelvet ditt.

![[search-query-rendered.png]]
