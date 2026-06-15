---
permalink: sync/security
publish: true
mobile: false
aliases:
  - Obsidian Sync/Sikkerhed og privatliv
---
Af sikkerhedshensyn krypterer [[Introduktion til Obsidian Sync|Obsidian Sync]] din [[Lokale og fjernbokse|fjernbokse]] og al kommunikation med Obsidian servere.

Når du opretter en ny fjernboks, har du to muligheder:

- **Slutpunkt-til-slutpunkt (end-to-end) kryptering (standard)** tilbyder den stærkeste sikkerhed, men kræver at du sikkert opbevarer dit krypteringskodeord. Dette garanterer, at ingen — ikke engang Obsidian teamet — kan tilgå dine noter.
- **Standard kryptering** bruger en krypteringsnøgle, som er administreret af Obsidian til at beskytte dine data under overførsel og på vores server.

Vi anbefaler slutpunkt-til-slutpunkt kryptering for alle brugere, da det er den mest private og sikre mulighed. Vær dog opmærksom på, at hvis du glemmer eller mister dit krypteringskodeord, vil dine data forblive krypteret og ubrugelige for evigt. Vi vil ikke være i stand til at gendanne dit kodeord, eller noget krypteret data for dig.

Dit valg har kun effekt på dine fjernbokse. Obsidian krypterer ikke dine lokale bokse.

### Hvad betyder slutpunkt-til-slutpunkt (end-to-end) kryptering?

Slutpunkt-til-slutpunkt (end-to-end) kryptering betyder, at data er krypteret fra det øjeblik, det forlader din enhed, og kan kun dekrypteres ved hjælp af din krypteringsnøgle, når den er tilbage på en af dine enheder.

Vi kan ikke læse dine data. Heller ikke potentielle dataafyttere, så som din internetudbyder, kan.

Hvis det skulle ske, at serverne bliver hacket, vil dine data forblive krypteret — ingen kan dekryptere dine filer uden at kende dit kodeord.

### Hvad er risiciene ved at bruge standard kryptering?

Standard kryptering er fundamentalt mindre sikker end slutpunkt-til-slutpunkt kryptering, men det kan være en praktisk mulighed, hvis du ikke forventer, at de data du synkroniserer skal være fuldstændig private. For eksempel, hvis din synkroniserede boks er [[Introduktion til Obsidian Publish|udgivet]] på et offentligt websted som dette hjælpewebsted, så er slutpunkt-til-slutpunkt kryptering ikke nødvendig.

Standard kryptering er den samme krypteringsmetode, som bruges af cloud storage-virksomheder og software-as-a-service-platforme, såsom Google Docs, Dropbox og iCloud (uden Advanced Data Protection). Din krypteringsnøgle genereres af appen og bruges til at beskytte dine data under overførsel og på serveren. Fordi krypteringsnøglen er gemt på virksomhedens servere, kan den bruges til at dekryptere dine data, f.eks. i tilfælde hvor virksomheden er underlagt en ransagningskendelse, eller i tilfælde hvor du vil tilgå dine data via en webbrowser.

Slutpunkt-til-slutpunkt kryptering garanterer, at Obsidian aldrig kan tilgå dine data og bør altid bruges til at synkronisere data, som du ønsker skal forblive fuldstændig private og sikre.

### Hvilken krypteringsmetode benytter Obsidian?

Vi benytter industristandarden for krypteringsprotokoller. Specifikt bruger vi [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), den stærkeste krypteringsstandard, som er bredt anvendt i sammenhænge som fx. netbank. Krypteringsprocessen involverer følgende tekniske detaljer:

- **Nøgleafledningsfunktion:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) med salt
- **Krypteringsalgoritme:** AES-256 med brug af [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Kan jeg verificere, at mine data er slutpunkt-til-slutpunkt krypteret?

Ja. Se vores guide, [hvordan du verificerer Obsidian Syncs slutpunkt-til-slutpunkt kryptering](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Denne guide giver trinvise instruktioner, så du tillidsløst kan verificere slutpunkt-til-slutpunkt krypteringen af dine data, når de sendes og modtages via Sync-servere.

### Har Obsidian gennemført en tredjeparts sikkerhedsaudit?

Ja. Obsidian er blevet uafhængigt auditeret. Besøg vores [sikkerhedsside](https://obsidian.md/security) for at se auditrapporter. Regelmæssige audits fra tredjeparts sikkerhedsfirmaer sikrer, at Obsidians kode og procedurer opfylder de højeste sikkerhedsstandarder.

### Hvad sker der, hvis jeg glemmer mit krypteringskodeord?

Hvis du nogensinde glemmer krypteringskodeordet, vil du ikke være i stand til at forbinde yderligere bokse til din fjernboks. Da krypteringskodeordet ikke gemmes nogle steder, er det forevigt tabt.

Dine data er som regel sikkert gemt lokalt på hver enhed.

For fortsat at anvende Obsidian Sync, foreslår vi at du foretager en fuld genopsætning, så du igen kan tilføje nye enheder til dit synkroniserede system:

1. Foretag en fuld backup af din boks på din primære enhed i tilfælde af, at et eller andet går galt. Det kan være noget så simpelt, som at lave en backup af boks mappen, eller at lave en zip fil af boksen.
2. Afkoble forbindelsen til fjernboksen på alle de forbundne enheder. Dette kan gøres ved at gå til **[[Indstillinger]] → Sync → Vælg fjernboks → Afbryd**.
3. [[Opsæt Obsidian Sync#Opret en ny fjernboks|Opret en ny fjernboks]] på din primære enhed fra samme sted i indstillingerne. Du kan også slette den forrige fjernboks, da du jo alligevel ikke har kodeordet. (Du kan blive nødt til at slette den forrige fjernboks, hvis du har nået [[Ofte stillede spørgsmål#Hvor mange fjernbokse kan jeg have?|boksgrænsen]])
4. Vent på at din primære enhed er synkroniseret færdig. Hold øje med synkroniseringsindikatoren nederst til højre på skærmen, indtil den viser et grønt flueben.
5. Forbind hver enhed igen til den samme nyoprettede fjernboks. Når du opretter forbindelse, vil du se en advarsel om fletning af bokse. Det er normalt, og du kan fortsætte. Vent på at hver enhed er fuldt synkroniseret, før du går videre til den næste. Det reducerer chancen for problemer.
6. Nu burde alle dine enheder være forbundet til den nye fjernboks.

## Hosting

### Hvor hoster I serverne til Obsidian Sync?

Obsidian Sync-servere hostes af [DigitalOcean](https://www.digitalocean.com) på følgende regionale placeringer:

> [!abstract] Sync-regioner
> **Automatisk**: Dit datacenter vælges baseret på din IP-placering, på det tidspunkt hvor du først opsætter det.
> 
> **Asien**: Singapore
> **Europa**: Frankfurt, Tyskland
> **Nordamerika**: San Francisco, USA 
> **Oceanien**: Sydney, Australien
^sync-geo-regions

### Hvor kan jeg finde min nuværende Sync-server, og hvor er den hostet?

For at finde din Obsidian Sync-server, følg disse trin:
1. Gå til **[[Indstillinger]]** → **Sync** → **Kopiér fejlfindingsinfo**.
2. Indsæt den kopierede information i en note eller fil.
3. Find en linje lignende denne: `Host server: wss://sync-xx.obsidian.md`

Denne linje angiver serveren, hvor din fjernboks er hostet. For flere detaljer om serverens placeringer og oppetid, besøg vores [statusside](https://status.obsidian.md/).

## Netværk og adgang

### Administrér adgang til Obsidian Sync på dit netværk

For at regulere adgangen til Obsidian Sync på dit netværk, skal du administrere følgende domæner:

`sync-xx.obsidian.md`

`xx` repræsenterer i dette tilfælde et tal fra `1 - 100`.

> [!tip] Hvis dit firewallsystem understøtter det, anbefaler vi at whiteliste `sync-*.obsidian.md` for at tage højde for den løbende vækst i underdomænenumre.

## Begrænsninger

Obsidian Sync er designet til at holde dine noter private og sikre. For at levere hurtig, pålidelig synkronisering og effektiv lagring på tværs af enheder, foretager vi nogle bevidste afvejninger i, hvordan kryptering anvendes.

### Deterministisk fil-hash kryptering

Vi krypterer fil-hashes deterministisk: det samme filindhold, med den samme krypteringsnøgle og salt, producerer altid den samme krypterede hash på serveren. Dette hjælper Sync med at opdage duplikater og undgå at genuploade eller genlagre identiske data, hvilket sparer båndbredde og fjernlagring, især i versionshistorik eller når store filer gentages.

Hvis en angriber dog kompromitterer en Sync-server, og de har en separat måde at tvinge en bruger til at uploade filer efter eget valg, kan angriberen tvinge brugeren til at uploade specifikke filer og afgøre, om filen matcher en fil, som brugeren tidligere har uploadet.

### Ingen kryptografisk binding mellem sti og indhold

Noget metadata er ikke slutpunkt-til-slutpunkt krypteret: hvilken enhed der uploadede eller slettede en fil, hvornår den blev uploadet, og *koblingen* mellem krypterede filstier og krypteret indhold. Disse data er læsbare for serveren, så den kan dirigere ændringer, bestemme versionshistorikken for en fil og holde enheder synkroniserede.

Hvis en Sync-server blev kompromitteret, kunne en angriber manipulere med denne kobling, så indholdet af én krypteret fil leveres under en anden filsti. Dette afslører ikke dine data i klartekst, de forbliver krypterede.
