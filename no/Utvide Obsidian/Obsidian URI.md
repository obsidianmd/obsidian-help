---
permalink: uri
---
Obsidian URI er en tilpasset URI-protokoll støttet av Obsidian som lar deg utløse ulike handlinger, som å åpne et notat eller opprette et notat. Obsidian URI muliggjør automatisering og arbeidsflyter på tvers av apper.

## URI-format

Obsidian-URIer bruker følgende format:

```
obsidian://action?param1=value&param2=value
```

Parameteren `action` er handlingen du ønsker å utføre. Tilgjengelige handlinger inkluderer:

- `open` for å åpne et notat.
- `new` for å opprette eller legge til i et eksisterende notat.
- `daily` for å opprette eller åpne ditt daglige notat.
- `unique` for å opprette et nytt unikt notat.
- `search` for å åpne et søk.
- `choose-vault` for å åpne hvelvadministratoren.

> [!warning] Koding
> Sørg for at verdiene dine er riktig URI-kodet. For eksempel må skråstrek-tegn `/` kodes som `%2F` og mellomrom må kodes som `%20`.
> 
> Dette er spesielt viktig fordi et feilkodet «reservert» tegn kan ødelegge tolkningen av URIen. [Se her for detaljer](https://en.wikipedia.org/wiki/Percent-encoding).

## Åpne notat

Handlingen `open` åpner et Obsidian-hvelv, eller åpner en fil i det hvelvet.

### Eksempler

- `obsidian://open?vault=my%20vault`
  Dette åpner hvelvet `my vault`. Hvis hvelvet allerede er åpent, fokuseres vinduet.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Dette åpner hvelvet identifisert med IDen `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Dette åpner notatet `my note.md` i hvelvet `my vault`, forutsatt at filen eksisterer.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Dette vil lete etter ethvert hvelv som inneholder banen `/home/user/my vault/path/to/my note`. Deretter sendes resten av banen til `file`-parameteren. For eksempel, hvis et hvelv eksisterer på `/home/user/my vault`, ville dette tilsvare `file`-parameteren satt til `path/to/my note`.


> [!tip] Åpne en overskrift eller blokk
> Med riktig URI-koding kan du navigere til en overskrift eller blokk i et notat. `Note%23Heading` vil navigere til overskriften kalt «Heading», mens `Note%23%5EBlock` vil navigere til blokken kalt «Block».

### Parametere

- `vault` kan enten være hvelvnavnet eller hvelv-IDen[^1].
- `file` kan enten være et filnavn, eller en bane fra hvelvroten til den angitte filen. Hvis filtypen er `md`, kan filtypen utelates.
- `path` en absolutt filsystembane til en fil.
  - Bruk av denne parameteren vil overstyre både `vault` og `file`.
  - Dette vil få appen til å søke etter det mest spesifikke hvelvet som inneholder den angitte filbanen.
  - Deretter erstatter resten av banen `file`-parameteren.
- `prepend` vil legge til øverst i filen og forsøke å slå sammen egenskaper.
- `append` vil legge til nederst i filen og også forsøke å slå sammen egenskaper.
- `paneType` (valgfritt) bestemmer hvor notatet vil bli åpnet i brukergrensesnittet.
  - hvis ikke angitt, erstattes den sist aktive fanen.
  - `paneType=tab` åpner i en ny fane.
  - `paneType=split` åpner i en ny fanegruppe.
  - `paneType=window` åpner i et løsrevet vindu (kun skrivebord).

## Opprett notat

Handlingen `new` oppretter et nytt notat i hvelvet, eventuelt med noe innhold.

### Eksempler

- `obsidian://new?vault=my%20vault&name=my%20note`
  Dette åpner hvelvet `my vault`, og oppretter et nytt notat kalt `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Dette åpner hvelvet `my vault`, og oppretter et nytt notat på `path/to/my note`.

### Parametere

- `vault` kan enten være hvelvnavnet, eller hvelv-IDen[^1]. Samme som handlingen `open`.
- `name` filnavnet som skal opprettes. Hvis dette er angitt, vil filplasseringen velges basert på innstillingen «Standard plassering av nytt notat».
- `file` en absolutt hvelvbane, inkludert navnet. Vil overstyre `name` hvis angitt.
- `path` en globalt absolutt bane. Fungerer på samme måte som `path`-alternativet i `open`-handlingen, som vil overstyre både `vault` og `file`.
- `paneType` (valgfritt) bestemmer hvor notatet vil bli åpnet i brukergrensesnittet. Samme som handlingen `open`.
- `content` (valgfritt) innholdet i notatet.
- `clipboard` (valgfritt) bruk innholdet fra utklippstavlen i stedet for å angi `content`.
- `silent` (valgfritt) inkluder denne parameteren hvis du ikke ønsker å åpne det nye notatet.
- `append` (valgfritt) inkluder denne parameteren for å legge til i en eksisterende fil hvis en finnes.
- `overwrite` (valgfritt) overskriver en eksisterende fil hvis en finnes, men bare hvis `append` ikke er satt.
- `x-success` (valgfritt) se [[#Bruk x-callback-url-parametere]].

## Opprett eller åpne daglig notat

Handlingen `daily` oppretter eller åpner ditt daglige notat. Utvidelsen [[Daglige notater]] må være aktivert.

### Eksempler

- `obsidian://daily?vault=my%20vault`
  Dette åpner hvelvet `my vault`, og oppretter eller åpner det daglige notatet.

### Parametere

Handlingen `daily` aksepterer de samme parameterne som handlingen `new`.

## Unikt notat

Handlingen `unique` oppretter et nytt unikt notat i hvelvet. Utvidelsen [[Unik notatoppretter|Unik notatoppretter]] må være aktivert.

### Eksempler

- `obsidian://unique?vault=my%20vault`
  Dette åpner hvelvet `my vault`, og oppretter et nytt unikt notat.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Dette åpner hvelvet `my vault`, og oppretter et nytt unikt notat med innholdet `Hello World`.

### Parametere

- `vault` kan enten være hvelvnavnet, eller hvelv-IDen[^1]. Samme som handlingen `open`.
- `paneType` (valgfritt) bestemmer hvor notatet vil bli åpnet i brukergrensesnittet. Samme som handlingen `open`.
- `content` (valgfritt) innholdet i notatet.
- `clipboard` (valgfritt) bruk innholdet fra utklippstavlen i stedet for å angi `content`.
- `x-success` (valgfritt) se [[#Bruk x-callback-url-parametere]].

## Åpne søk

Handlingen `search` åpner [[Søk]] i det angitte hvelvet, og utfører eventuelt et søkeord.

### Eksempler

- `obsidian://search?vault=my%20vault`
  Dette åpner hvelvet `my vault`, og åpner [[Søk]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Dette åpner hvelvet `my vault`, åpner [[Søk]], og utfører et søk etter `Obsidian`.

### Parametere

- `vault` kan enten være hvelvnavnet, eller hvelv-IDen[^1]. Samme som handlingen `open`.
- `query` (valgfritt) søkeordet som skal utføres.

## Åpne hvelvadministratoren

Handlingen `choose-vault` åpner [[Administrer hvelv|hvelvadministratoren]].

### Eksempler

- `obsidian://choose-vault`

## Integrer med Hook

Denne Obsidian URI-handlingen er ment å brukes med [Hook](https://hookproductivity.com/).

### Eksempel

`obsidian://hook-get-address`

### Parametere

- `vault` (valgfritt) kan enten være hvelvnavnet, eller hvelv-IDen[^1]. Hvis ikke angitt, vil det gjeldende eller sist fokuserte hvelvet brukes.
- `x-success` (valgfritt) se [[#Bruk x-callback-url-parametere]].
- `x-error` (valgfritt) se [[#Bruk x-callback-url-parametere]].

Hvis `x-success` er definert, vil dette APIet bruke det som x-callback-url. Ellers vil det kopiere en Markdown-lenke til det gjeldende fokuserte notatet til utklippstavlen, som en `obsidian://open`-URL.

## Bruk x-callback-url-parametere

Noen endepunkter aksepterer x-callback-url-parameterne `x-success` og `x-error`. Når dette er angitt, vil Obsidian gi følgende til `x-success`-tilbakekallet:

- `name` navnet på filen, uten filtypen.
- `url` `obsidian://`-URIen for denne filen.
- `file` (kun skrivebord) `file://`-URLen for denne filen.

For eksempel, hvis Obsidian mottar
`obsidian://.....x-success=myapp://x-callback-url`, vil svaret være `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Kortformater

I tillegg til formatene ovenfor, finnes det to ekstra «kortformater» tilgjengelig for å åpne hvelv og filer:

1. `obsidian://vault/my vault/my note` tilsvarer `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` tilsvarer `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Feilsøking

### Registrer Obsidian URI

På Windows og macOS bør det være tilstrekkelig å kjøre appen én gang for å registrere Obsidian URI-protokollen på datamaskinen din.

På Linux er det en mer omfattende prosess:

1. Sørg for at du oppretter en `obsidian.desktop`-fil. [Se her for detaljer](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Sørg for at skrivebordsfilen angir `Exec`-feltet som `Exec=executable %u`. `%u` brukes til å sende `obsidian://`-URIene til appen.
3. Hvis du bruker AppImage-installasjonsprogrammet, kan du måtte pakke det ut med `Obsidian-x.y.z.AppImage --appimage-extract`. Sørg deretter for at `Exec`-direktivet peker til den utpakkede kjørbare filen.


[^1]: Hvelv-ID er den tilfeldige 16-tegns koden tildelt hvelvet, for eksempel `ef6ca3e3b524d22f`. Denne IDen er unik per mappe på datamaskinen din. IDen kan finnes ved å åpne hvelvbytteren og klikke «Kopier hvelv-ID» i kontekstmenyen for det ønskede hvelvet.
