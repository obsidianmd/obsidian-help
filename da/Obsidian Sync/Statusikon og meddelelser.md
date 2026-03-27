---
permalink: sync/messages
publish: true
mobile: true
description: Denne side forklarer Obsidian Syncs statusikoner og giver detaljer om synkroniseringsaktivitetsloggen.
---
Obsidian Sync tilbyder flere elementer til at indikere synkroniseringsstatus, primært [[#Sync-statusikon]] og [[#Synkroniseringsaktivitetslog]]. Detaljer om versionsstyring i Obsidian Sync er beskrevet på siden [[Versionshistorik]].

## Sync-statusikon

Sync-statusikonet er placeret i [[Statuslinje|statuslinjen]] i desktopversionen og i den [[Sidebjælke#Åbn skjulte sidebjælker|højre sidebjælke]] på mobil og tablet. Ikonet afspejler forskellige synkroniseringstilstande:

- ![[obsidian-icon-sync-synced.svg#icon]] **Synkroniseret**: Obsidian Sync har fuldt synkroniseret dine filer. Dette ikon er typisk grønt.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Synkroniserer**: Obsidian opdaterer i øjeblikket fjernboksen. Dette ikon er normalt lilla.
- ![[obsidian-icon-sync-paused.svg#icon]] **Sat på pause**: Synkronisering er blevet sat på pause, men Obsidian er stadig forbundet til fjernboksen. Ikonet er typisk lilla.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Afbrudt**: Sync-kernepluginet er aktivt, men den [[Lokale og fjernbokse|lokale boks]] er ikke forbundet til en fjernboks. Dette ikon er typisk rødt.

Ved at klikke eller trykke på ikonet åbnes en kontekstmenu med følgende muligheder:
- ![[obsidian-icon-sync-paused.svg#icon]] Sæt på pause (eller ![[lucide-circle-play.svg#icon]] Fortsæt, hvis sat på pause)
- ![[lucide-history.svg#icon]] [[Versionshistorik]] (Nedtonet, hvis du ikke ser en note)
- ![[lucide-align-left.svg#icon]] Åbn [[#Synkroniseringsaktivitetslog|Synkroniseringslog]]
- ![[lucide-trash-2.svg#icon]] [[Versionshistorik#Gendan en slettet fil|Slettede filer]]
- ![[lucide-cog.svg#icon]] [[Sync indstillinger og selektiv synkronisering|Sync indstillinger]]

## Synkroniseringsaktivitetslog

Obsidian Sync inkluderer en detaljeret synkroniseringslog, der sporer alle interaktioner mellem dine lokale filer og fjernboksen. Loggen viser uploads, downloads, sletninger og eventuelle problemer som fletningskonflikter eller forbindelsesproblemer.

**Adgang til aktivitetsloggen:**
- Klik på sync-statusikonet i statuslinjen
- Gå til **[[Indstillinger]] → Sync → Synkroniseringsaktivitet**
- Brug **Kommandopalet → Sync: Åbn aktivitets log**

Loggen giver tidsstempler og detaljer for hver synkroniseringsoperation, hvilket gør den nyttig til fejlfinding af synkroniseringsproblemer.

> [!warning] Synkroniseringsloggen gemmes ikke efter Obsidian lukkes. Hvis du støder på et problem, skal du sørge for at kopiere loggen, _før_ du lukker applikationen.

Loggen kategoriserer meddelelser i følgende typer:

- [[#Generelle meddelelser]]
- [[#Fejlmeddelelser]]
- [[#Sprunget over-meddelelser]]
- [[#Kontomeddelelser]]

Du kan filtrere synkroniseringsloggen efter **Alle**, **Fejl**, **Sprunget over** og **Fletningskonflikter**. Derudover kan du søge i synkroniseringsloggen ved hjælp af søgefeltet i Sync-vinduet.

> [!summary] Vi har inkluderet nogle af de mest sandsynlige meddelelser, du kan støde på, nedenfor. Listen er ikke udtømmende. Hvis du oplever et problem og har en synkroniseringslogmeddelelse, du er usikker på, [[Hjælp og support#Kontakt Obsidian support|kontakt Obsidian support]].

### Generelle meddelelser

Disse er almindelige daglige meddelelser, du kan støde på.

**Connecting to server**
Obsidian forsøger at oprette forbindelse til din fjernboks' [[Obsidian Sync/Sikkerhed og privatliv#Hvor kan jeg finde min aktuelle Sync-server, og hvor er den hostet?|Sync-server]].

**Connected to server. Detecting changes...**
Obsidian har oprettet en forbindelse og sammenligner den lokale boks med fjernboksen for at afgøre, om der er behov for ændringer.

> [!info] Denne meddelelse kan også indikere andre potentielle Sync-problemer. Hvis du ser den gentagne gange og mener, at der stadig er elementer, der skal synkroniseres, [[Hjælp og support#Kontakt Obsidian support|kontakt Obsidian support]].

**Fully synced**
- Den lokale og fjerne boks er fuldt synkroniserede.

**Merging conflicted file**
En konflikt blev opdaget under synkronisering, og filen blev flettet i stedet for overskrevet. Se [[Fejlfinding af Obsidian Sync#Konfliktløsning|konfliktløsning]] for mere information. Hvis fletningen er uønsket, kan du gendanne tidligere versioner via [[Versionshistorik]] eller [[Filgenoprettelse]].

**Rejected server change**
Ændringerne på fjernboksen er ældre end versionen på din lokale enhed, så den lokale version beholdes, og fjernændringen ignoreres.

### Fejlmeddelelser

Disse er meddelelser, der beskriver en fejl ved synkronisering af en fil.

**Out of memory**
Dette problem opstår typisk på mobile enheder, når der ikke er nok lagerplads eller hukommelse til at hente en fil. Det er mest almindeligt med store filer, såsom videoer.

### Sprunget over-meddelelser

Disse er meddelelser, der beskriver hvad der blev sprunget over, og potentielt hvorfor.

**Unable to download file with illegal name**

Filen indeholder et [specialtegn eller navnekonvention](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names), der ikke er tilladt på det modtagende operativsystem. For nemheds skyld kan du omdøbe filen på dens kildeenhed for at fjerne alle specialtegn undtagen `-` og `_`.

Bemærk, at dette også inkluderer filer med flere punktummer `.` i deres navn på Android-enheder.

### Kontomeddelelser

Disse er meddelelser relateret til en ændring i dit abonnement eller din konto.

**Vault limit exceeded**
Din konto har overskredet den [[Ofte stillede spørgsmål#Hvor stor kan hver fjernboks være|maksimale lagerstørrelse]]. Vedhæftninger og versionshistorik bidrager til denne størrelse. Selvom din boks synes mindre end grænsen, kan ældre versioner og filer presse den over.

For at reducere boksstørrelse:
1. Åbn **[[Indstillinger]] → Sync**.
2. Brug mulighederne under **Boksstørrelse overstiger grænsen** for at fjerne store filer.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Denne fejl kan opstå i disse tilfælde:

1. Boksen blev slettet fra en anden enhed.
2. Sync-abonnementet var inaktivt i over 30 dage, hvilket medførte, at fjernboksen blev fjernet.
3. Abonnementet blev annulleret eller refunderet, hvilket resulterede i fjernboksens sletning.

I disse tilfælde skal du [[Opsæt Obsidian Sync#Afbryd forbindelsen til en fjernboks|afbryde forbindelsen til fjernboksen]] og [[Opsæt Obsidian Sync#Opret en ny fjernboks|oprette en ny fjernboks]], og sikre at dine lokale data bevares.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
Din konto er nu i en fuldt udløbet tilstand, da vi ikke kunne behandle betalingen på fil.

For at fortsætte med at bruge Obsidian Sync skal du genabonnere via [din konto](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync har registreret, at du ikke er logget ind i øjeblikket. Du skal logge ind igen i applikationen i [[Indstillinger#Generelt#Konto|Konto]]-sektionen under **[[Indstillinger]]**.

I nogle tilfælde kan et fællesskabsplugin også forhindre Obsidian Sync i at kunne bekræfte din kontos loginstatus. Gå venligst ind i **[[Pluginsikkerhed#Begrænset tilstand|begrænset tilstand]]** og prøv igen.

### Netværksmeddelelser

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync har mistet forbindelsen til Sync-serveren af en ukendt årsag. Sync vil forsøge at oprette forbindelse til serveren med jævne mellemrum.

På iOS vises denne meddelelse som følgende fejl:
`Null is not an object (evaluating 'this.socket.send')`

Det betyder nøjagtigt det samme som meddelelsen `Unable to connect to server` og er ikke på nogen måde en indikation af, at der er noget andet galt.
