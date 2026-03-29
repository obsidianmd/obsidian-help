---
permalink: sync/security
publish: true
mobile: false
description: Lær om sikkerhets- og personvernhensyn for Obsidian Sync.
---
## Kryptering

For din sikkerhet krypterer [[Introduksjon til Obsidian Sync|Obsidian Sync]] ditt [[Lokale og fjernhvelv|fjernhvelv]] og all kommunikasjon med Obsidians servere.

Når du oppretter et nytt fjernhvelv, har du to alternativer:

- **Ende-til-ende-kryptering (standard)** Gir den sterkeste sikkerheten, men krever at du lagrer krypteringspassordet ditt trygt. Dette garanterer at ingen — ikke engang Obsidian-teamet — kan få tilgang til notatene dine.
- **Standard kryptering** bruker en krypteringsnøkkel administrert av Obsidian for å beskytte dataene dine under overføring og på serveren vår.

Vi anbefaler ende-til-ende-kryptering for alle brukere, da det er det mest private og sikre alternativet. Vær imidlertid oppmerksom på at hvis du glemmer eller mister krypteringspassordet ditt, forblir dataene dine kryptert og ubrukelige for alltid. Vi kan ikke gjenopprette passordet ditt eller noen krypterte data for deg.

Valget ditt påvirker bare fjernhvelvet ditt. Obsidian krypterer ikke det lokale hvelvet ditt.

### Hva betyr ende-til-ende-kryptering?

Ende-til-ende-kryptering betyr at dataene krypteres fra det øyeblikket de forlater enheten din, og kun kan dekrypteres med krypteringsnøkkelen din når de er tilbake på en av enhetene dine.

Vi kan ikke lese dataene dine. Det kan heller ikke potensielle avlyttere, som internettleverandøren din.

I det sjeldne tilfellet av et fullstendig serverinnbrudd forblir dataene dine kryptert — ingen kan dekryptere filene dine uten å kjenne passordet ditt.

### Hva er risikoene ved å bruke standard kryptering?

Standard kryptering er fundamentalt mindre sikkert enn ende-til-ende-kryptering, men det kan være et praktisk alternativ hvis du ikke forventer at dataene du synkroniserer skal være helt private. For eksempel, hvis det synkroniserte hvelvet ditt er [[Introduksjon til Obsidian Publish|publisert]] på et offentlig nettsted som dette Hjelp-nettstedet, er ende-til-ende-kryptering ikke nødvendig.

Standard kryptering er den samme krypteringsmetoden som brukes av skylagringsselskaper og programvare-som-en-tjeneste-plattformer, som Google Docs, Dropbox og iCloud (uten Avansert databeskyttelse). Krypteringsnøkkelen din genereres av appen og brukes til å beskytte dataene dine under overføring og på serveren. Fordi krypteringsnøkkelen er lagret på selskapets servere, kan den brukes til å dekryptere dataene dine, f.eks. i tilfeller der selskapet er underlagt en ransakingsordre, eller i tilfeller der du ønsker å få tilgang til dataene dine via en nettleser.

Ende-til-ende-kryptering garanterer at Obsidian aldri kan få tilgang til dataene dine og bør alltid brukes til å synkronisere data du ønsker skal forbli helt private og sikre.

### Hvilken kryptering bruker dere?

For datasikkerhet implementerer vi bransjestandardiserte krypteringsprotokoller. Spesifikt bruker vi [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), den sterkeste krypteringsstandarden, mye brukt i sammenhenger som nettbank. Krypteringsprosessen involverer følgende tekniske detaljer:

- **Nøkkelavledningsfunksjon:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) med salt
- **Krypteringsalgoritme:** AES-256 med [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Kan jeg verifisere at dataene mine er ende-til-ende-kryptert?

Ja. Se vår guide, [hvordan verifisere Obsidian Syncs ende-til-ende-kryptering](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Denne guiden gir trinnvise instruksjoner for deg til å verifisere ende-til-ende-krypteringen av dataene dine uten å stole på noen når de sendes og mottas via Sync-servere.

### Har Obsidian gjennomgått en tredjeparts sikkerhetsrevisjon?

Ja. Obsidian har blitt uavhengig revidert. Besøk vår [Sikkerhetsside](https://obsidian.md/security) for å se revisjonsrapporter. Regelmessige revisjoner av tredjeparts sikkerhetsfirmaer sikrer at Obsidians kode og prosedyrer oppfyller de høyeste sikkerhetsstandardene.

### Hva skjer hvis jeg glemmer krypteringspassordet mitt?

Hvis du noen gang mister eller glemmer krypteringspassordet, vil du ikke kunne koble flere hvelv til fjernhvelvet ditt. Siden krypteringspassordet ikke er lagret noe sted, er det for alltid tapt.

Dataene dine er imidlertid vanligvis trygt lagret lokalt på hver av enhetene dine.

For å fortsette å bruke Obsidian Sync anbefaler vi å gjøre et fullstendig nyoppsett for å kunne legge til nye enheter i Sync-systemet ditt:

1. Lag en full sikkerhetskopi av hvelvet på hovedenheten din, i tilfelle noe går galt. Dette kan være så enkelt som å lage en kopi av hvelvmappen eller opprette en zip-fil fra hvelvet.
2. Koble fra fjernhvelvet på hver av enhetene dine. Dette kan gjøres ved å gå til **[[Innstillinger]] → Sync → Velg fjernhvelv → Koble fra**.
3. [[Sett opp Obsidian Sync#Opprett et nytt fjernhvelv|Opprett et nytt fjernhvelv]] på hovedenheten din fra samme Innstillinger-side. Valgfritt kan du slette det forrige fjernhvelvet siden du uansett ikke har passordet til det. (Du må kanskje slette det forrige fjernhvelvet hvis du er på [[Ofte stilte spørsmål#Hvor mange fjernhvelv kan jeg ha?|hvelvgrensen]])
4. Vent til hovedenheten din synkroniserer. Se på synkroniseringsindikatoren nederst til høyre på skjermen til den viser et grønt hakemerke.
5. Koble hver av enhetene dine til det samme nyopprettede fjernhvelvet. Når du kobler til, vil du se en advarsel om hvelvsammenslåing — dette er forventet og du kan fortsette. Vent til hver enhet er fullstendig synkronisert før du går videre til neste. Dette reduserer sjansen for problemer.
6. Nå skal alle enhetene dine være koblet til det nye fjernhvelvet.

## Hosting

### Hvor hoster dere serverne for Obsidian Sync?

Våre datasentre, drevet av [DigitalOcean](https://www.digitalocean.com), tilbyr geo-regionale hostingalternativer for fjernhvelv på følgende steder:

> [!abstract] Sync-regioner
> **Automatisk**: Datasenteret ditt velges basert på din IP-plassering på tidspunktet du først konfigurerer det.
> 
> **Asia**: Singapore
> **Europa**: Frankfurt, Tyskland
> **Nord-Amerika**: San Francisco, USA
> **Oseania**: Sydney, Australia
^sync-geo-regions

### Hvor kan jeg finne min nåværende Sync-server og hvor er den hostet?

For å finne Obsidian Sync-serveren din, følg disse trinnene:
1. Gå til **[[Innstillinger]]** → **Sync** → **Kopier feilsøkingsinfo**.
2. Lim inn den kopierte informasjonen i et notat eller en fil.
3. Se etter en linje som ligner på denne: `Host server: wss://sync-xx.obsidian.md`

Denne linjen indikerer serveren der fjernhvelvet ditt er hostet. For mer informasjon om serverens plassering og oppetid, besøk vår [statusside](https://status.obsidian.md/).

## Nettverk og tilgang

### Administrere tilgang til Obsidian Sync på nettverket ditt

For å regulere tilgang til Obsidian Sync på nettverket ditt, må du administrere følgende domener:

`sync-xx.obsidian.md`

`xx` i dette tilfellet representerer et tall fra `1 - 100`.

> [!tip] Hvis brannmursystemet ditt støtter det, anbefaler vi å hvitliste `sync-*.obsidian.md` for å ta høyde for den kontinuerlige veksten i antall underdomener.

## Begrensninger

Obsidian Sync er designet for å holde notatene dine private og sikre. For å levere rask, pålitelig synkronisering og effektiv lagring på tvers av enheter, gjør vi noen bevisste avveininger i hvordan kryptering anvendes.

### Deterministisk fil-hash-kryptering

Vi krypterer fil-hasher deterministisk: det samme filinnholdet, med samme krypteringsnøkkel og salt, produserer alltid den samme krypterte hashen på serveren. Dette hjelper Sync med å oppdage duplikater og unngå å laste opp eller lagre identiske data på nytt, noe som sparer båndbredde og fjernlagring, spesielt i versjonshistorikk eller når store filer gjentas.

Hvis en angriper imidlertid kompromitterer en Sync-server, og de har en separat måte å tvinge en bruker til å laste opp filer de velger, kan angriperen tvinge brukeren til å laste opp spesifikke filer og avgjøre om filen samsvarer med en fil brukeren tidligere har lastet opp.

### Ingen kryptografisk binding mellom bane og innhold

Noe metadata er ikke ende-til-ende-kryptert: hvilken enhet som lastet opp eller slettet en fil, når den ble lastet opp, og *tilordningen* mellom krypterte filbaner og kryptert innhold. Disse dataene er lesbare for serveren slik at den kan rute endringer, bestemme versjonshistorikken for en fil og holde enheter synkronisert.

Hvis en Sync-server ble kompromittert, kunne en angriper manipulere den tilordningen, slik at innholdet i én kryptert fil leveres under en annen filbane. Dette avslører ikke klartekstdataene dine — de forblir kryptert.
