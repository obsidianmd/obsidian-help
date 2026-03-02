---
permalink: obsidian-uri
---
Obsidian URI er en brugerdefineret URI protokol, som Obsidian supporterer, som lader dig trigge forskellige kommandoer, såsom at åbne en note eller oprette en note. Obsidian URI giver mulighed for automation og workflows på tværs af applikationer.

## URI formatet

Obsidian URIer benytter følgende format:

```
obsidian://action?param1=værdi&param2=værdi
```

Parameteren `action` er den kommando, som du have udført. De tilgængelige kommandoer er:

- `open` for at åbne en note
- `new` for at oprette en note eller tilføje til en eksisetrende note
- `daily` for at oprette eller åbne din daglige note
- `search` for at åbne søgefunktionen


> [!warning] Kodning
> Dine værdier skal være korrekt URI kodet. Fx. skal skråskrege `/` kodes som `%2F` og mellemrum skal kodes som `%20`.
> 
 Dette er specielt vigtigt, fordi et forkert "reserveret" tegn kodet forkert kan ødelægge fortolkningen af URIen. [Se her for detaljer](https://en.wikipedia.org/wiki/Percent-encoding).

## Åben note

Kommandoen `open` åbner en Obsidian boks, eller åbner en fil i boksen.

### Eksempler

- `obsidian://open?vault=min%20boks`
  Denne kommando åbner boksen `min boks`. Hvis boksen allerede er åben, vil den få fokus
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Denne kommando åbner boksen, som er identificeret med ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=min%20boks&file=min%20note`
  Denne kommando åbner noten `min note.md` i boksen `min boks`, hvis den findes
- `obsidian://open?path=%2Fhome%2Fuser%2Fmin%20boks%2Fsti%2Ftil%2Fmin%20note`
  Denne kommando vil søge efter enhver boks, der indholder stien `/home/user/min boks/sti/til/min note`. Derefter vil resten af stien blive overført til `file` parameteren. Fx. hvis en boks eksisterer i `/home/user/min boks`, er det equivalent med at `file` parameteren er sat til `sti/til/min note`.


> [!tip] Sådan åbner du en overskrift eller en blok
> Med korrekt URI kodning, kan du navigere til en overskrift eller en blok i en note. `Note%23Overskrift` vil navigere til en overskrift kaldet "Overskrift", og `Note%23%5EBlok` vil navigere til en blok kaldet "Blok".

### Parametre

- `vault` kan enten være boksen navn eller dens boks ID[^1].
- `file` kan enten være et filnavn, eller en sti fra boksens rod til den specificerede fil. Hvis filens filtype(extension) er `md` behøver den ikke at blive angivet
- `path` en absolut filsystems sti til en fil
  - Denne parameter overstyrer både `vault` og `file`
  - Parameteren vil få Obsidian til at søge efter den mest specifikke boks, som indeholder den specificerede filsti
  - Derefter vil resten af stien erstatte `file` parameteren
- `prepend` vil tilføje til begyndelsen af tilen og flette eventuelle egenskaber
- `append` vil tilføje til slutningen af filen og også flette eventuelle egenskaber

## Opret note

Kommandoen `new` opretter en note i boksen og med valgmulighed for noget indhold.

### Eksempler

- `obsidian://new?vault=min%20boks&name=min%20note`
  Denne kommando åbner boksen `min boks` og opretter en ny note kaldet `min note`
- `obsidian://new?vault=min%20boks&file=sti%2Ftil%2Fmin%20note`
  Denne kommando åbner boksen `min boks` og opretter en note på stien `sti/til/min note`

### Parametere

- `vault` kan enten været navnet på en boks eller boksens ID[^1]; ligesom kommandoen `open`
- `name` er navnet på den fil, som skal oprettes. Filens sti vil blive valgt baseret på den standard placering for nye filer, som er angivet i Obsidians indstillinger i boksen
- `file` er navnet inklusiv den fulde sti i boksen. Denne parameter overstyrer `name`, hvis den er specificeret
- `path` er en absolut global sti. Virker på samme måde som `path` parameteren i `open` kommandoen, som overstyrer både `vault` og `file`
- `content` (valgfri) er indholdet af noten
- `clipboard` (valgfri) benytter indholdet af udklipsholderen i stetdet for at specificere `content`
- `silent` (valgfri) udfører kommandoen uden at åbne den nye note
- `append` (valgfri) vil tilføje til en eksisterende fil, hvis den eksisterer
- `overwrite` (valgfri) vi loverskrive en eksisterende fil, hvis den eksisterer, men kun hvis `append` ikke er anvendt
- `x-success` (valgfri) se [[#Benyt x-callback-url parametre]].

## Opret eller åbn den daglige note

Kommandoen `daily` opretter eller åbner din daglige note. Pluginnet [[Daglige noter]] skal være aktiveret.

### Eksempel

- `obsidian://daily?vault=min%20boks`
  Denne kommando åbner boksen `min boks` og opretter eller åbner den daglige note.

### Parametre

Kommandoen `daily` accepterer de samme parametre som `new` kommandoen.

## Åbn søgning

Kommandoen `search` åbner [[Søg|søgning]] i den specificerede boks og udfører en søgning, hvis en er specificeret.

### Eksempler

- `obsidian://search?vault=min%20boks`
  Dette åbner boksen `min boks`, og åbner [[Søg|søgning]]
- `obsidian://search?vault=min%20boks&query=Obsidian`
  Dette åbner boksen `min boks`, åbner [[Søg|søgning]], og udfører en søgning efter `Obsidian`

### Parametre

- `vault` kan enten være navnet på boksen eller dens ID[^1]. Har samme kommandoer som kommandoen `open`
- `query` (valgfri) Den søgning, som skal foretages

## Integration med Hook

En Obsidian URI kommando kan anvendes med [Hook](https://hookproductivity.com/). 

### Eksempel

`obsidian://hook-get-address`

### Parametere

- `vault` (valgfri) kan enten være navnet på en boks eller dens ID[^1]. Hvis det ikke er angivet vil den nuværende boks eller den boks, som sidst var i fokus, blive anvendt
- `x-success` (valgfri) se [[#Benyt x-callback-url parametre]]
- `x-error` (valgfri) se [[#Benyt x-callback-url parametre]]

Hvis `x-success` er defineret vil navnet på boksen blive angivet som dens x-callback-url. Ellers vil en kopi af et Markdown link til den note, som for nuværende er i fokus, blive sendt til udklipsholderen som en `obsidian://open` URL.

## Benyt x-callback-url parametre

Nogle slutpunkter vil acceptere x-callback-url parameterne `x-success` og `x-error`. Obsidian vil tilføje følgende til `x-success`, hvis det er anvendt:

- `name` - Navnet å"filen uden filtype extension
- `url` - Filens `obsidian://` URI
- `file` - (kun på desktop) Filens `file://` URL

Hvis Obsidian fx modtager:
`obsidian://.....x-success=myapp://x-callback-url`, vil svaret blive `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=fil%3A%2F%2F...`

## Korte formater

Der er to mere korte formater tilgængelige for at åbne bokse og filer udover dem, som foroven:

1. `obsidian://vault/min boks/min note` er det samme som `obsidian://open?vault=min%20boks&file=min%20note`
2. `obsidian:///absolut/sti/til/min note` er det samme som `obsidian://open?path=%2Fabsolut%2Fsti%2Ftil%2Fmin%20note`

## Fejlfinding

### Registrer Obsidian URI

Obsidian vil registerere Obsidian URI protokollen på Windows og macOS første gang du starter Obsidian op på din computer.

På linux kræver det lidt mere:

1. Du skal have oprettet en `obsidian.desktop` fil. [Se detaljer her](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files)
2. Du skal sikre at din desktop fil specificerer `Exec` feltet som `Exec=executable %u`. Parameteren `%u` anvendes til at overføre `obsidian://` URIer til applikationen
3. Hvis du anvender AppImage, skal du muligvis udpakke arkivet med `Obsidian-x.y.z.AppImage --appimage-extract`. Det sikrer at `Exec` direktivet peger på den udpakkede udgave af Obsidian


[^1]: En boks ID er en tilfældigt 16 cifret kode, som er tilknyttet boksen, fx. `ef6ca3e3b524d22f`. Dette ID er unikt per mappe på diin computer. Du kan finde en boks ID ved at åbne boksskifteren og klikke på "Kopiér boks-ID" i kontektmenuen for en valgt boks.
