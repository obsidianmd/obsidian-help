---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Du har kjøpt Obsidian Sync og er klar til å komme i gang. Denne veiledningen hjelper deg med å sette opp og justere Obsidian Sync-innstillingene dine for daglig bruk.
---
Du har kjøpt Obsidian Sync og er klar til å komme i gang. Denne guiden vil hjelpe deg med å sette opp og justere Obsidian Sync-innstillingene dine for daglig bruk.

- **Ny med Obsidian Sync?** Se: [[#Sett opp Obsidian Sync for første gang]]
- **Koble til en annen enhet?** Se: [[#Synkroniser et fjernhvelv på en annen enhet]]
- **Trenger du å gjøre endringer?** Se: [[#Administrer fjernhvelvene dine]]

## Sett opp Obsidian Sync for første gang

I denne delen vil du opprette et nytt [[Lokale og fjernhvelv|fjernhvelv]] og koble det til et eksisterende lokalt hvelv. Du trenger ikke å opprette et nytt, tomt lokalt hvelv for å bruke Obsidian Sync til dette formålet.

> [!info] Er ditt nåværende hvelv i en iCloud-, OneDrive-, Dropbox- eller annen synkroniseringsmappe? Hvis **ja**, eller du er **usikker**, vennligst les [[Ofte stilte spørsmål#Kan jeg bruke en tredjeparts synkroniseringstjeneste med Obsidian Sync?|dette]] og [[Bytt til Obsidian Sync]] før du fortsetter.

**Forutsetninger**

- En Obsidian-konto. Hvis du ikke har en, [registrer deg nå](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Et aktivt Obsidian Sync-[[Planer og lagringsgrenser|abonnement]]. Hvis du ikke har et, abonner fra [kontooversikten din](https://obsidian.md/account/sync).
- **Anbefalt**: Et [[Sikkerhetskopier Obsidian-filene dine|sikkerhetskopieringssystem]] på plass for Obsidian-filene dine. En synkroniseringstjeneste er ikke en sikkerhetskopi.

### Logg inn med Obsidian-kontoen din

1. Åpne **[[Innstillinger]]**.
2. I sidefeltet, velg **Generelt**.
3. Under **Konto → Kontoen din**, velg **Logg inn**.
4. I **E-post**, skriv inn e-posten din.
5. I **Passord**, skriv inn passordet ditt.
6. Velg **Logg inn**.

### Aktiver Obsidian Sync

1. Åpne **[[Innstillinger]]**.
2. I sidefeltet under **Alternativer**, velg **Kjerneutvidelser**.
3. Slå på **Sync**.

### Opprett et nytt fjernhvelv

1. Åpne **[[Innstillinger]]**.
2. I sidefeltet, velg **Sync**.
3. Ved siden av **Fjernhvelv**, velg **Velg**.
4. Velg **Opprett nytt hvelv**.
5. I **Hvelvnavn**, skriv inn navnet på fjernhvelvet.
6. I **Region**, velg server[[Sett opp Obsidian Sync#Regionale synkroniseringsservere|regionen]] for fjernhvelvet ditt.
7. I **Krypteringspassord**, velg et passord for hvelvet ditt. Dette oppretter et ende-til-ende-kryptert hvelv. Hvelvpassordet er separat fra Obsidian-kontoen din og kan være forskjellig for hvert av hvelvene dine. For mer informasjon, se [[Sikkerhet og personvern]].
8. Velg **Opprett**.

### Koble til et fjernhvelv

1. Velg **Koble til** ved siden av det nylig opprettede hvelvet ditt.
2. Skriv inn passordet du konfigurerte for hvelvet i feltet **Krypteringspassord** hvis du valgte [[Obsidian Sync/Sikkerhet og personvern#Hva betyr ende-til-ende-kryptering?|ende-til-ende-kryptering]].
3. Velg **Lås opp hvelv**.
4. **Ikke start synkronisering ennå.** Sjekk synkroniseringsinnstillingene i [[#Juster Obsidian Sync-innstillinger|juster Obsidian Sync-innstillinger]].
    - Hvis du ønsker å starte synkronisering umiddelbart, gå videre til [[#Begynn synkronisering med Obsidian Sync|begynn synkronisering med Obsidian Sync]].
5. Hvis du ikke allerede har gjort det, lukk eller avvis popup-vinduet som ber deg om å **Ekskluder mapper** og **Start synkronisering**. Fortsett til neste trinn.

#### Juster Obsidian Sync-innstillinger

1. Naviger til **[[Innstillinger]]** → **Sync** om nødvendig.
2. Hvis et enhetsnavn ikke har blitt lagt til, legg til et for å gjøre det enklere å lese Sync-loggene dine!
3. Slå av/på innstillingene under **Selektiv synkronisering** og **Synkronisering av hvelvkonfigurasjon** for å angi hvilke elementer som skal synkroniseres til og fra fjernhvelvet.
    - **Merk**: Hvis du nylig koblet fra et fjernhvelv og kobler til igjen uten å starte applikasjonen på nytt, kan noen innstillinger allerede være slått på.
4. Hvis du gjør endringer i innstillinger, start Obsidian helt på nytt.
5. Når Obsidian er startet på nytt, gå tilbake til **[[Innstillinger]]** → **Sync**.

#### Begynn synkronisering med Obsidian Sync

Hvis du begynner synkronisering etter å ha koblet til et fjernhvelv, vil du se en **Start synkronisering**-knapp. Velg denne knappen for å begynne synkronisering.

Hvis du begynner synkronisering etter å ha justert Obsidian Sync-innstillingene og startet applikasjonen på nytt, vil du se en **Fortsett**-knapp i Syncs innstillinger. Velg denne knappen for å begynne synkronisering.

> [!done] Synkroniseringsstatus
> Når Obsidian Sync er ferdig, vises en grønn sirkel med et hakemerke ![[obsidian-icon-sync-synced.svg#icon]] i nedre høyre hjørne (skrivebord) eller i høyre sidefelt (mobil). Sync-loggen vil også vise «Fully Synced» som en av de nyeste meldingene.
>
> For flere detaljer om synkroniseringsstatuser, se [[Statusikon og meldinger]].
^obsidian-sync-status

For å koble andre enheter til det nylig opprettede og synkroniserte fjernhvelvet, gå videre til [[Sett opp Obsidian Sync#Synkroniser et fjernhvelv på en annen enhet|Synkroniser et fjernhvelv på en annen enhet]].

For å lære mer om innstillinger og filer, gå videre til [[Synkroniseringsinnstillinger og selektiv synkronisering]].

## Synkroniser et fjernhvelv på en annen enhet

I denne delen har du allerede opprettet et fjernhvelv og lastet opp data til det. Nå vil du koble de andre enhetene dine til det.

**Forutsetninger**
- En Obsidian-konto. Hvis du ikke har en, [registrer deg nå](https://obsidian.md/account#mode=signup).
- Et aktivt Obsidian Sync-abonnement. Hvis du ikke har et, abonner fra [kontooversikten din](https://obsidian.md/account).
- Sync aktivert i [[Kjerneutvidelser]]-innstillingene.
- Et aktivt fjernhvelv. Hvis du ikke har opprettet et ennå, vennligst opprett et [[Sett opp Obsidian Sync#Opprett et nytt fjernhvelv|fjernhvelv]] først.
- **Anbefalt**: Et [[Sikkerhetskopier Obsidian-filene dine|sikkerhetskopieringssystem]] på plass for Obsidian-filene dine på den mest brukte enheten din. En synkroniseringstjeneste er ikke en sikkerhetskopi.

### Synkroniser hvelvet ditt fra hvelvbytteren

Hvis du har installert Obsidian for første gang, når du åpner programmet vil du bli presentert med [[Administrer hvelv|hvelvbytteren]]. For å opprette et nytt lokalt hvelv fra innholdet i et fjernhvelv, følg disse trinnene.

1. Åpne Obsidian (forutsatt at dette er første gang du åpner det)
2. Velg ett av alternativene avhengig av installasjonen din:
	1. **Skrivebord**: I seksjonen som sier Connect to Obsidian Sync, velg **Konfigurer**
	2. **Mobil/nettbrett**: **Konfigurer Obsidian Sync**
3. Logg inn med Obsidian-brukerkontoen din
	1. Hvis [[Tofaktorautentisering|2FA]] er satt opp, skriv inn 2FA-koden din.
4. Du vil bli bedt om å velge hvilket fjernhvelv du vil synkronisere til denne enheten. Velg **Koble til**.
5. Du vil bli bedt om å velge et navn for det lokale hvelvet som vil bli opprettet på enheten for å holde disse dataene. Skriv inn navnet du ønsker.
	1. Hvis du bruker [[Obsidian URI]]er, bør du bruke samme navn som det lokale hvelvet på den andre enheten din.
6. Velg **Opprett**.
7. Fjernhvelv-vinduet vil dukke opp et øyeblikk mens Obsidian Sync kobler til serveren din og validerer abonnementet. Det vil deretter vise deg et *Sett opp tilkobling*-vindu.
	1. Det anbefales sterkt at du lukker eller sveiper ned fra dette vinduet, og [[#Juster Obsidian Sync-innstillinger|justerer Obsidian Sync-innstillinger]] først.
	2. Hvis du endrer noen Sync-innstillinger, vennligst last inn på nytt eller start Obsidian på nytt.

### Synkroniser hvelvet ditt fra Obsidian-innstillinger

Hvis du allerede har opprettet et lokalt hvelv på denne enheten, og du vil koble dette lokale hvelvet til et fjernhvelv, er instruksjonene veldig like [[#Sett opp Obsidian Sync for første gang]].

![[Sett opp Obsidian Sync#Logg inn med Obsidian-kontoen din]]

![[Sett opp Obsidian Sync#Aktiver Obsidian Sync]]

#### Koble til et fjernhvelv

1. Åpne **[[Innstillinger]]**.
2. I sidefeltet, velg **Sync**.
3. Ved siden av **Velg fjernhvelv**, klikk **Velg**.
4. Klikk **Koble til** ved siden av fjernhvelvet du vil koble til.
5. I **Krypteringspassord**, skriv inn passordet for hvelvet ditt, hvis du har et.
6. Du vil bli bedt om å starte synkronisering. Det anbefales å vente og justere synkroniseringsinnstillingene først. Hvis du vil synkronisere hele hvelvet til enheten som det er, kan du velge **Start synkronisering**.

> [!warning] Hvis hvelvet på enheten din allerede inneholder noen notater (ikke anbefalt), vil du bli advart om at disse notatene vil bli slått sammen før du fortsetter. Konflikter vil bli løst gjennom [[Feilsøk Obsidian Sync#Konfliktløsning|Syncs konfliktløsning]].

![[Sett opp Obsidian Sync#Juster Obsidian Sync-innstillinger]]

![[Sett opp Obsidian Sync#Begynn synkronisering med Obsidian Sync]]

## Administrer fjernhvelvene dine

Du har opprettet og koblet til et fjernhvelv. Du kan også ha synkronisert dette fjernhvelvet til flere enheter. Denne delen dekker noen av de andre vanlige instruksjonene du kan trenge for å administrere dette fjernhvelvet.

### Koble fra et fjernhvelv

1. Åpne Obsidians **[[Innstillinger]]**.
2. Velg **Sync** i sidefeltet.
3. Klikk **Koble fra**-knappen ved siden av Fjernhvelv.

Du er nå koblet fra fjernhvelvet og synkroniserer ikke lenger på denne enheten.

### Slett et fjernhvelv

> [!tip] Sletting av et fjernhvelv vil ikke slette lokale data på enheten din.

1. Åpne **[[Innstillinger]]**.
2. I sidefeltet, velg **Sync**.
3. Velg **Administrer** ved siden av Fjernhvelv. Et vindu åpnes med listen over fjernhvelvene dine.
4. Velg papirkurv-ikonet ![[lucide-trash-2.svg#icon]] ved siden av fjernhvelvet du vil slette.
5. Bekreft slettingen ved å velge den røde **Slett**-knappen.
6. Fjernhvelvet ditt er slettet.

> [!info] Hvis det ikke er noe papirkurv-ikon synlig, kan det hende du først må koble fra fjernhvelvet. Når du er koblet fra, velg **Velg**-knappen for å åpne listen over fjernhvelv.

### Regionale synkroniseringsservere

Obsidian Sync lar deg velge vertslokasjon for fjernhvelvet ditt. Hvis du bruker versjon `1.4.16` eller eldre av Obsidian, vil lokasjonen bli automatisk valgt for deg.

Hvis du er usikker på hvor regionen til ditt nåværende hvelv er, sjekk ut [[Obsidian Sync/Sikkerhet og personvern#Hvor kan jeg finne min nåværende Sync-server og hvor er den hostet?|Hvor kan jeg finne min nåværende Sync-server og hvor er den hostet?]] for veiledning.

![[sync-regional-sync-servers.png#interface|300]]

Etter at du har valgt en lokasjon, **kan ikke** datasenteret ditt flyttes til en annen server uten å laste opp dataene dine på nytt. For å endre regioner, følg [[Sync-regioner|guiden for Sync-regioner for hvelv]].

![[Obsidian Sync/Sikkerhet og personvern#^sync-geo-regions]]

## Neste trinn

Her er noen foreslåtte dokumenter å lese videre.

- Utforsk mer om [[Synkroniseringsinnstillinger og selektiv synkronisering|valg av filer og innstillinger å synkronisere]].
- Lær hva som skjer hvis fjernhvelvet ditt [[Versjonshistorikk|fylles opp]].
- [[Samarbeid i et delt hvelv]] med en annen Obsidian Sync-bruker.
- Sjekk ut [[Ofte stilte spørsmål|Sync-FAQ]] for svar på vanlige spørsmål.
