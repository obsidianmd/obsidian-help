Obsidian undersøtter en brugerdefineret URI protokol `obsidian://` som kan benyttes til at udløse forskellige handlinger i applikationen. Dette er almindeligt på MacOS og mobil apps, så applikationer kan automatiseres og snakke sammen.

Hvis du har Obsidian installeret, så vil dette link åbne appen på din enhed: [Klik her](obsidian://open)

## Installere Obsidian URI

For at være sikker på at dit operativsystem redirigerer `obsidian://` URIer til Obsidian applikationen skal du muligvis foretage noget yderligere.

- På Windows bør det være nok at køre applikationen en gang. Dette vil registrere `obsidian://` som brugerdefineret protokol i Windows registreringsdataabsen.
- På MacOS bør det være nok at køre applikationen en gang, men din installeringsversion **skal** være nyere end 0.8.12
- På Linux skal du gøre følgende:
	- Først skal du oprette en `obsidian.desktop` fil.  [Se her for detaljer på Gnome](https://developer.gnome.org/integration-guide/stable/desktop-files.html.en)
	- Sørg for at din desktop fil specificerer `Exec` feltet som `Exec=navnpåkørbarfil %u`. `%u` benyttes til at overføre `obsidian://` URIer til applikationen.
	- Hvis du benytter AppImage skal du udpakke AppImage filen med `Obsidian-x.y.z.AppImage --appimage-extract`. Derefter skal `Exec` direktivet i din `obsidian.desktop` fil pege på den udpakkede kørbare applikation.
		
	
## Benytte Obsidian URIer

Obsidian URIer er typisk i dette format:

```
obsidian://action?parameter1=værdi&parameter2=værdi
```

- `action` er den handling, som du vil udføre.

### Kodning

==Vigtigt==

Vær sikker på at dine værdier er korrekt URI kodet. F.eks. skal tegnet skråstreg `/` kodes som `%2F` og tegnet mellemrum skal kodes som `%20`.

Det er især vigtigt fordi et forkert kodet "reserveret" tegn kan ødelægge fortolkningen af URIen. [Se her for flere detaljer](https://en.wikipedia.org/wiki/Percent-encoding)

### Tilgængelige handlinger

#### Handling `open`

Beskrivelse: Åbner en Obsidian boks, og muligvis en fil i boksen.

Mulige parametre:
- `vault` kan enten være boksnavnet, eller boks ID'et.
	- Boksnavnet er navnet på de mappe, som indeholder boksen.
	- Boks ID'et er en tilfældigt 16-cifret tegnkode, som hver boks er tildelt. Dette ID er unikt for hevr mappe på din computer. F.eks. `ef6ca3e3b524d22f`. Der er endnu ikke en nem måde at finde dette ID på, men et vil blive tilbudt senere i boks skifteren. LIge nu kan det findes i `%appdata%/obsidian/obsidian.json` på Windows. På MacOS, erstat `%appdata%` med `~/Library/Application Support/`. På Linux, erstat `%appdata%` med `~/.config/`.
- `file`  kan være enten et filnavn eller en sti fra boksens rod til den specificerede fil.
	- For at afgøre hvilken fil, som skal åbnes, benytter Obsidian den samme måde at fortolke links på som ved almindelige `[[wikilink]]` inde i en boks.
	- Hvis filtypen er `md` kan endelsen `.md` udelades.
- `path` er en absolut filsystemssti til en fil.
	- Brug af denne parameter vil tilsidesætte både `vault` og `file`.
	- Dette vil få Obsidian til at søge efter den boks, som indeholder den specificerede sti.
	- Derefter vil resten af stien erstatte `file` parameteren.

Eksempler:

- `obsidian://open?vault=min%20boks`
	Dette åbner boksen `min boks`. Hvis boksen allerede er åben, så får applikationen fokus.

- `obsidian://open?vault=ef6ca3e3b524d22f`
	Dette åbner boksen identificeret med ID `ef6ca3e3b524d22f`.

- `obsidian://open?vault=min%20boks&file=min%20note`
	Dette åbner noten `min note` i boksen `min boks` forudsat at `min note` eksisterer og at filnavnet er `min note.md`.
	
- `obsidian://open?vault=min%20boks&file=min%20note.md`
	Dette åbner også noten `min note` i boksen `min boks`.
	
- `obsidian://open?vault=min%20boks&file=sti%2Ftil%2Fmin%20note`
	Dette åbner noten lokaliseret i `sti/til/min note` i boksen `min boks`. 

- `obsidian://open?path=%2Fhome%2Fuser%2Fmin%20boks%2Fsti%2Ftil%2Fmin%20note`
	Dette vil søge efter enhver boks efter stien `/home/user/min boks/sti/til/min note`. Derefter vil resten af stien blive overført til `file` parameteren. Hvis f.eks. en boks eksisterer på stien `/home/user/min boks`, så vil det svare til at `file` parameteren bliver sat til `sti/til/min note`.

- `obsidian://open?path=D%3A%5CDokumenter%5CMin%20boks%5CMin%20note`
	Dette vil søge efter enhver boks der indeholder stien `D:\Dokumenter\Min boks\Min note`. Derefter vil resten af stien overføres til `file` parameteren. Hvis f.eks. boksen eksisterer i `D:\Dokumenter\Min boks`, så svarer det til at `file` parameteren bliver sat til `Min note`.
	
#### Handling `search`

Beskrivelse: Åbner søge panelet for en boks og evt. udfører en søgeforespørgsel, hvis du har angivet det.

Mulige parametre:
- `vault` kan enten være boksnavnet, eller boks ID'et. Samme handling som `open`.
- `query` (Valgfrit) Den søgeforesprøgsel, som skal udføres.

Eksempler:

- `obsidian://search?vault=min%20boks`
	Dette åbner boksen `min boks`, og åbner søgepanelet.
	
- `obsidian://search?vault=min%20boks&query=MOC`
	Dette åbner boksen `min boks`, åbner søgepanelet, og udfører en søgning efter `MOC`.

#### Handling `new`

Beskrivelse: Opretter en ny note i boksen, evt. med noget indhold, hvis du har angivet det.

Mulige parametre:
- `vault` kan enten være boksnavnet, eller boks ID'et. Samme handling som `open`.
- `name` filnavnet på noten, som skal oprettes. Hvis det er specificeret, vil placeringen blive baseret på dine "Standard placering for nye noter" indstillinger.
- `file` er en absolut sti inklusiv navnet. Denne parameter vil tilsidesætte `name`, hvis den er specificeret.
- `path` er en global absolut sti. Fungerer på samme måde som `path` parameteren i `open` handlingen, og den tilsidesætter både `vault` og `file` parameterne.
- `content` (Valgfrit) indholdet af noten.
- `silent` (Valgfrit) kan angives, hvis du ikke ønsker at åbne den nye note.

Eksempler:

- `obsidian://new?vault=min%20boks&name=min%20note`
	Dette åbner boksen `min boks`, og opretter en ny note med navnet`min note`.
- `obsidian://new?vault=min%20boks&path=sti%2Ftil%2Fmin%20note`
	Dette åbner boksen `min boks`, og opretter en ny note på stien `sti/til/min note`.
	
	
#### Handling `hook-get-address`

Beskrivelse: Slutpunkt til brug med [Hook](https://hookproductivity.com/).  Kopierer et markdonlink af den nuværende note i fokus til udklipsholderen, som en `obsidian://open` URL. Benyt: `obsidian://hook-get-address`

Mulige parametre:

- `vault` (Valgfrit) kan enten være navnet på boksen eller boks ID'et. Hvis det ikke angives vil den nuværende eller sidste boks med fokus blive benyttet.

## Korte formater

Ud over formaterne beskrevet foroven er der to andre "korte" formater tilgængelige til at åbne bokse og filer:

- `obsidian://vault/min boks/min note` svarer til `obsidian://open?vault=min%20boks&file=min%20note`
- `obsidian:///absolut/sti/til/min note` svarer til`obsidian://open?path=%2Fabsolut%2Fsti%2Ftil%2Fmin%20note`
