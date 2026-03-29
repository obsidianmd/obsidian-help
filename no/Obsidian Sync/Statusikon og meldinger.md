---
permalink: sync/messages
publish: true
mobile: true
description: Denne siden forklarer statusikoner for Obsidian Sync og gir detaljer om synkroniseringsaktivitetsloggen.
---
Obsidian Sync tilbyr flere elementer for å indikere synkroniseringsstatus, hovedsakelig [[#Sync-statusikon]] og [[#Sync-aktivitetslogg]]. Detaljer om versjonskontroll i Obsidian Sync dekkes på siden [[Versjonshistorikk]].

## Sync-statusikon

Sync-statusikonet er plassert i [[Statuslinje|statuslinjen]] på skrivebordsversjonen og i [[Sidefelt#Åpne skjulte sidefelt|høyre sidefelt]] på mobil og nettbrett. Ikonet gjenspeiler ulike synkroniseringstilstander:

- ![[obsidian-icon-sync-synced.svg#icon]] **Synkronisert**: Obsidian Sync har fullstendig synkronisert filene dine. Dette ikonet er vanligvis grønt.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Synkroniserer**: Obsidian oppdaterer for øyeblikket fjernhvelvet. Dette ikonet er vanligvis lilla.
- ![[obsidian-icon-sync-paused.svg#icon]] **Pauset**: Synkronisering er satt på pause, men Obsidian er fortsatt tilkoblet fjernhvelvet. Ikonet er vanligvis lilla.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Frakoblet**: Sync-kjerneutvidelsen er aktiv, men det [[Lokale og fjernhvelv|lokale hvelvet]] er ikke koblet til et fjernhvelv. Dette ikonet er vanligvis rødt.

Ved å klikke eller trykke på ikonet åpnes en kontekstmeny med følgende alternativer:
- ![[obsidian-icon-sync-paused.svg#icon]] Pause (eller ![[lucide-circle-play.svg#icon]] Fortsett hvis pauset)
- ![[lucide-history.svg#icon]] [[Versjonshistorikk]] (Nedtonet hvis du ikke viser et notat)
- ![[lucide-align-left.svg#icon]] Åpne [[#Sync-aktivitetslogg|Sync-logg]]
- ![[lucide-trash-2.svg#icon]] [[Versjonshistorikk#Gjenopprett en slettet fil|Slettede filer]]
- ![[lucide-cog.svg#icon]] [[Synkroniseringsinnstillinger og selektiv synkronisering|Synkroniseringsinnstillinger]]

## Sync-aktivitetslogg

Obsidian Sync inkluderer en detaljert sync-logg som sporer alle interaksjoner mellom dine lokale filer og fjernhvelvet. Loggen viser opplastinger, nedlastinger, slettinger og eventuelle problemer som sammenslåingskonflikter eller tilkoblingsproblemer.

**Tilgang til aktivitetsloggen:**
- Klikk på sync-statusikonet i statuslinjen
- Gå til **[[Innstillinger]] → Sync → Aktivitetslogg**
- Bruk **Kommandopalett → Sync: Åpne aktivitetslogg**

Loggen gir tidsstempler og detaljer for hver synkroniseringsoperasjon, noe som gjør den nyttig for feilsøking av synkroniseringsproblemer.

> [!warning] Sync-loggen lagres ikke etter at Obsidian lukkes. Hvis du støter på et problem, sørg for å kopiere loggen _før_ du lukker appen.

Loggen kategoriserer meldinger i følgende typer:

- [[#Generelle meldinger]]
- [[#Feilmeldinger]]
- [[#Hoppet over-meldinger]]
- [[#Kontomeldinger]]

Du kan filtrere Sync-loggen etter **Alle**, **Feil**, **Hoppet over** og **Sammenslåingskonflikter**. I tillegg kan du søke i Sync-loggen ved å bruke søkeboksen i Sync-vinduet.

> [!summary] Vi har inkludert noen av de mest sannsynlige meldingene du kan ha støtt på nedenfor. Listen er ikke uttømmende. Hvis du opplever et problem og har en sync-loggmelding du er usikker på, [[Hjelp og støtte#Kontakt Obsidian-støtte|kontakt Obsidian-støtte]].

### Generelle meldinger

Dette er vanlige dagligdagse meldinger du kan støte på.

**Connecting to server**  
Obsidian prøver å koble til fjernhvelvets [[Obsidian Sync/Sikkerhet og personvern#Hvor kan jeg finne min nåværende Sync-server og hvor er den hostet?|Sync-server]].

**Connected to server. Detecting changes...**  
Obsidian har opprettet en tilkobling og sammenligner det lokale hvelvet med fjernhvelvet for å avgjøre om endringer er nødvendige.

> [!info] Denne meldingen kan også indikere andre potensielle Sync-problemer. Hvis du ser den gjentatte ganger og tror det fortsatt er elementer som skal synkroniseres, [[Hjelp og støtte#Kontakt Obsidian-støtte|kontakt Obsidian-støtte]].

**Fully synced**  
- De lokale og fjerne hvelvene er fullstendig synkronisert.

**Merging conflicted file**  
En konflikt ble oppdaget under synkronisering, og filen ble slått sammen i stedet for overskrevet. Se [[Feilsøk Obsidian Sync#Konfliktløsning|konfliktløsning]] for mer informasjon. Hvis sammenslåingen er uønsket, kan du gjenopprette tidligere versjoner via [[Versjonshistorikk]] eller [[Filgjenoppretting]].

**Rejected server change**  
Endringene på fjernhvelvet er eldre enn versjonen på din lokale enhet, så den lokale versjonen beholdes og fjernendringen ignoreres.

### Feilmeldinger

Dette er meldinger som beskriver en feil ved synkronisering av en fil.

**Out of memory**  
Dette problemet oppstår vanligvis på mobile enheter når det ikke er nok lagringsplass eller minne tilgjengelig for å laste ned en fil. Det er mest vanlig med store filer, som videoer.

### Hoppet over-meldinger

Dette er meldinger som beskriver hva som ble hoppet over, og potensielt hvorfor.

**Unable to download file with illegal name**

Filen inneholder et [spesialtegn eller navnekonvensjon](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) som ikke er tillatt på det mottakende operativsystemet. For enkelhets skyld kan du gi nytt navn til filen på kildeenheten for å fjerne alle spesialtegn bortsett fra `-` og `_`.

Merk at dette også inkluderer filer med flere punktum `.` i navnet på Android-enheter.

### Kontomeldinger

Dette er meldinger relatert til en endring i abonnementet eller kontoen din.

**Vault limit exceeded**  
Kontoen din har overskredet den [[Ofte stilte spørsmål#Hvor stort kan hvert fjernhvelv være|maksimale lagringsstørrelsen]]. Vedlegg og versjonshistorikk bidrar til denne størrelsen. Selv om hvelvet ditt virker mindre enn grensen, kan eldre versjoner og filer skyve det over.

For å redusere hvelvstørrelsen:
1. Åpne **[[Innstillinger]] → Sync**.
2. Bruk alternativene under **Hvelvstørrelse over grensen** for å fjerne store filer.

**Vault not found**  
`{"res":"err","msg":"Vault not found."}`

Denne feilen kan oppstå i disse tilfellene:

1. Hvelvet ble slettet fra en annen enhet.
2. Sync-abonnementet var inaktivt i over 30 dager, noe som førte til at fjernhvelvet ble fjernet.
3. Abonnementet ble kansellert eller refundert, noe som resulterte i sletting av fjernhvelvet.

I disse tilfellene må du [[Sett opp Obsidian Sync#Koble fra et fjernhvelv|koble fra fjernhvelvet]] og [[Sett opp Obsidian Sync#Opprett et nytt fjernhvelv|opprette et nytt fjernhvelv]], og sørge for at dine lokale data bevares.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**  
Kontoen din har nå en fullstendig utløpt status da vi ikke kunne behandle betalingen på fil.

For å fortsette å bruke Obsidian Sync må du abonnere på nytt i [kontoen din](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync har oppdaget at du for øyeblikket ikke er logget inn. Du må logge inn igjen i appen i [[Innstillinger#Generelt#Konto|Konto]]-delen av **[[Innstillinger]]**.

I noen tilfeller kan en community-utvidelse også hindre Obsidian Sync i å bekrefte kontoens innloggingsstatus. Vennligst gå inn i **[[Utvidelsessikkerhet#Begrenset modus|begrenset modus]]** og prøv igjen.

### Nettverksmeldinger

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync har koblet fra Sync-serveren av en ukjent grunn. Sync vil forsøke å koble til serveren på nytt med jevne mellomrom.

På iOS vises denne meldingen som følgende feil:
`Null is not an object (evaluating 'this.socket.send')`

Den betyr nøyaktig det samme som meldingen `Unable to connect to server`, og er ikke på noen måte en indikasjon på at noe annet er galt.
