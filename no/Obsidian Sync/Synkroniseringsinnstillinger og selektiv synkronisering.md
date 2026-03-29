---
permalink: sync/settings
publish: true
mobile: true
description: Denne siden forklarer Sync-innstillingene og veileder deg i å velge hvilke filer som skal synkroniseres.
---
Når du [[Planer og lagringsgrenser#Opprett et nytt fjernhvelv|oppretter et fjernhvelv]] og [[Sett opp Obsidian Sync#Koble til et fjernhvelv|kobler til det]], blir Sync-kjerneutvidelsen stedet for å administrere fjernhvelvet ditt.

## Synkroniseringsinnstillinger

**Fjernhvelv**
Denne seksjonen viser fjernhvelvet du er tilkoblet for øyeblikket. Den inkluderer en **Koble fra**-knapp for å koble fra fjernhvelvet og en **Administrer**-knapp for å se alle fjernhvelv kontoen din har tilgang til (inkludert delte hvelv via [[Samarbeid i et delt hvelv|samarbeid]]).

> [!warning]+ Fjernhvelv i tredjeparts synkroniseringstjeneste
> Hvis fjernhvelvet ditt er plassert i en tredjeparts synkroniseringstjeneste, vil du se en rød feilmelding. Følg trinnene i [[Bytt til Obsidian Sync]] for å løse dette.

**Synkroniseringsstatus**
Viser gjeldende synkroniseringsstatus for fjernhvelvet. Denne seksjonen inkluderer enten en **Pause**- eller **Fortsett**-knapp, avhengig av statusen.

**Enhetsnavn**
Gi et unikt navn til enheten som synkroniserer for øyeblikket. Dette hjelper med å spore aktivitet i [[Statusikon og meldinger#Sync activity|sync-loggen]]. Denne innstillingen er enhetsspesifikk, akkurat som [[#Selektiv synkronisering]].

**[[#Konfliktløsning]]**
Velg hvordan konflikter skal løses når du endrer en fil på flere enheter. Denne innstillingen er enhetsspesifikk, akkurat som [[#Selektiv synkronisering]].

**Slettede filer**
Inneholder en knapp for å **Vise** eller **Gjenopprette** slettede filer. For mer informasjon, se [[Versjonshistorikk]].

**Vault size**
Viser en fremdriftslinje som viser hvor mye av synkroniseringslagringen som er brukt.

> [!tip]- Serverbehandlingstid
> Det kan ta opptil 30 minutter før gjeldende bruk oppdateres på grunn av serversidebehandling.

**Kontakt støtte**
Gir instruksjoner om hvordan du [[Hjelp og støtte#Kontakt Obsidian-støtte|kontakter Obsidian-støtte]], inkludert alternativer for å **Kopiere feilsøkingsinfo** og **Sende e-post til støtte**.

### Konfliktløsning

Velg hvordan konflikter skal løses når du endrer en fil på flere enheter før synkronisering. Du kan automatisk slå sammen endringer eller opprette separate konfliktfiler for manuell gjennomgang. Se [[Feilsøk Obsidian Sync#Konfliktløsning|Konfliktløsning]] for detaljer om hvordan konflikter fungerer og hvordan du konfigurerer denne innstillingen.

> [!warning]+ Konfigurer på hver enhet
> Denne innstillingen må konfigureres separat på hver enhet.

---

Du kan også velge hva som skal synkroniseres i innstillingene for Sync-kjerneutvidelsen. Denne seksjonen dekker **selektiv synkronisering** og **synkronisering av hvelvkonfigurasjon**, sammen med tilhørende forbehold.

## Selektiv synkronisering

Filer synkronisert til [[Lokale og fjernhvelv|fjernhvelvet]] ditt bidrar til [[Ofte stilte spørsmål#Hvor stort kan hvert fjernhvelv være|lagringsgrensen]] din. Som standard aktiverer Obsidian Sync **selektiv synkronisering** for følgende filtyper:
- Bilder
- Lyd
- Videoer
- PDF-er

For å synkronisere flere filtyper, slå på alternativet `Synkroniser alle andre typer`.

Standardinnstillingene for **synkronisering av hvelvkonfigurasjon** inkluderer:
- Andre filtyper
- Hovedinnstillinger
- Utseende
- Temaer og utdrag
- Hurtigtaster
- Aktiv liste over kjerneutvidelser
- Innstillinger for kjerneutvidelser

For å synkronisere community-utvidelser, aktiver manuelt **Aktiv liste over community-utvidelser** og **Installert liste over community-utvidelser**.

### Endre filtypene du vil synkronisere

1. Åpne **[[Innstillinger]] → Sync**.
2. Under **Selektiv synkronisering**, aktiver filtypene du vil synkronisere.
3. Start applikasjonen på nytt for å bruke de nye innstillingene. På mobil eller nettbrett kan det kreve en tvungen avslutning.

Merk at [[Planer og lagringsgrenser|Sync-planen]] din definerer den maksimale filstørrelsen du kan synkronisere. Standard-planen tillater synkronisering av filer opptil 5 MB, mens Plus-planen støtter filer opptil 200 MB.

> [!info]+ Ekskluderte filer forblir i fjernhvelvet
> Å legge til en fil i listen over **Ekskluderte filer** fjerner den ikke fra fjernhvelvet hvis den allerede er synkronisert. Konfigurer Sync-innstillingene dine før synkronisering for å unngå unødvendig lagringsbruk.

### Utelat en mappe fra synkronisering

Som standard synkroniserer Obsidian alle filer og mapper i hvelvet ditt. For å utelate en bestemt mappe fra synkronisering:
1. Åpne **[[Innstillinger]] → Sync**.
2. Ved siden av **Utelatte mapper**, velg **Administrer**.
3. Velg mappen du vil utelate fra listen.
4. Velg **Ferdig**.

For å fjerne en mappe fra ekskluderingslisten, velg ![[lucide-x.svg#icon]]-knappen ved siden av mappenavnet.

#### Alltid ekskludert fra synkronisering

##### Øyeblikksbilder fra filgjenoppretting

Øyeblikksbildene i [[Filgjenoppretting]]-utvidelsen synkroniseres ikke via Obsidian Sync, ettersom øyeblikksbilder oppbevares i [[Hvordan Obsidian lagrer data#Globale innstillinger|Globale innstillinger]].

##### Skjulte filer og mapper

Filer og mapper som begynner med `.` behandles som skjulte og ekskluderes fra synkronisering. Det eneste unntaket er hvelvets [[Konfigurasjonsmappe|konfigurasjonsmappe]] (`.obsidian`), som synkroniseres.

Vanlige eksempler på skjulte filer og mapper som ikke synkroniseres:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Synkroniseringsinnstillinger

Synkroniseringsinnstillinger synkroniseres ikke på tvers av enheter. Du må konfigurere dem separat på hver enhet etter behov.

## Oppdatere innstillingene for det synkroniserte hvelvet

For å endre synkroniseringsinnstillinger på tvers av flere enheter, følg disse trinnene:

> [!tip]- Primære og sekundære enheter
> Begrepene "primær" og "sekundær" enhet er kun for tydelighetens skyld. Sync skiller ikke mellom dem.

### Primær enhet

Den primære enheten fungerer som sannhetens kilde. Endringer gjort her synkroniseres på tvers av alle andre enheter.

1. Gå til **[[Innstillinger]] → Sync**.
2. Aktiver ønskede innstillinger under **Synkronisering av hvelvkonfigurasjon**.
3. Last inn på nytt eller start Obsidian på nytt. På mobil eller nettbrett kan det kreve en tvungen avslutning.
4. Gi tid til at innstillingene synkroniseres med fjernhvelvet.

### Sekundær(e) enhet(er)

Sekundære enheter (som telefonen din) mottar oppdateringer fra den primære enheten.

1. Gå til **[[Innstillinger]] → Sync**.
2. Aktiver de nødvendige innstillingene under **Synkronisering av hvelvkonfigurasjon**.
3. Vent til endringene lastes ned fra fjernhvelvet.
4. Last inn på nytt eller start appen på nytt for å bruke de synkroniserte innstillingene. På mobil eller nettbrett kan det kreve en tvungen avslutning.

### Innlasting av innstillinger på nytt

Visse innstillinger kan lastes inn på nytt uten omstart, mens andre krever en omstart:

- **Kan lastes inn uten omstart**: De fleste Obsidian-konfigurasjoner, inkludert hurtigtaster og egenskaper, utseendeinnstillinger og konfigurasjoner for allerede aktiverte kjerneutvidelser.
- **Krever omstart**: CSS-endringer (f.eks. [[CSS-utdrag]], [[Temaer]]), grafvisningskonfigurasjoner og tilstander for kjerneutvidelser (f.eks. aktivering/deaktivering av Daglige notater).

Community-utvidelser støtter vanligvis ikke innlasting uten omstart og krever en omstart når nye innstillinger brukes.

> [!info]+ For utviklere av utvidelser
> Lær hvordan du [integrerer funksjonalitet for innlasting uten omstart med Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Innstillingsprofiler

Obsidian Sync kan synkronisere flere [[Konfigurasjonsmappe|konfigurasjonsmapper]] til samme fjernhvelv, slik at du kan opprette separate profiler (f.eks. én for mobil, en annen for den bærbare datamaskinen).

### Opprett en innstillingsprofil

For å opprette en ny innstillingsprofil:

1. Åpne **[[Innstillinger]] → Files & Links**.
2. Under **Overstyr konfigurasjonsmappe**, skriv inn et navn for profilen din, som begynner med et punktum (`.`), f.eks. `.obsidian-mobile`.
3. Start Obsidian på nytt for å bruke endringene.

> [!info]+ Unngå å laste ned utvidelser og temaer på nytt
> Å endre innstillingsprofilen vil kreve at du konfigurerer synkroniseringsinnstillingene dine på nytt. For å unngå å laste ned utvidelser og temaer på nytt, kopier den eksisterende `.obsidian`-mappen og gi den nytt navn slik at den samsvarer med den nye profilen din (f.eks. `.obsidian-mobile`) før du gjør endringer.
