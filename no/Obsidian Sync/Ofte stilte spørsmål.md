---
permalink: sync/faq
publish: true
mobile: true
description: Denne siden lister opp noen av de vanlige spørsmålene knyttet til spørsmål og begrensninger for Obsidian Sync.
---
Denne siden lister noen av de vanlige spørsmålene knyttet til spørsmål og begrensninger for [[Introduksjon til Obsidian Sync|Obsidian Sync]].

## Generelt

### Hvilke operativsystemer støtter Obsidian Sync?

Obsidian Sync støtter alle plattformer som Obsidian kan kjøre på. For øyeblikket betyr det Windows, macOS, Linux, Android og iOS.

### Fungerer Obsidian med Apples sperremodus (Lockdown Mode)?

Obsidian kan brukes i [sperremodus](https://support.apple.com/en-us/105120) så lenge Obsidian er lagt til som et unntak.

### Hvilken type data synkroniseres?

Som standard synkroniseres Obsidian-notatene dine, bilder og [[Konfigurasjonsmappe|konfiguringsmappen]] din.

Du kan legge til flere synkroniseringsalternativer for PDF-er, lydfiler, videofiler og andre filer når du konfigurerer [[Synkroniseringsinnstillinger og selektiv synkronisering]].

### Hvor mye lagringsplass har jeg?

Lagringsgrensen avhenger av Obsidian [[Planer og lagringsgrenser#Planer|Sync-planen]] din. Maksimal lagringsplass er 100 GB. Denne lagringsgrensen inkluderer [[Versjonshistorikk|versjonshistorikk]].

Du kan se **Vault size** i Obsidian-appen ved å gå til **[[Innstillinger]] → Sync**.

### Hvor mange fjernhvelv kan jeg ha?

Antall fjernhvelv du kan ha bestemmes basert på [[Planer og lagringsgrenser#Planer|Sync-planen]] din. Standard-planen inkluderer 1 hvelv, Plus-planen inkluderer 10 hvelv. Hvelv delt med deg teller ikke mot hvelvgrensen din.

### Hvor stort kan hvert fjernhvelv være?

Det er ingen grense per hvelv. Lagringsgrensen er knyttet til kontoen din og kan fordeles på tvers av alle hvelvene dine.

### Hvor mange personer kan jeg dele et fjernhvelv med?

Du kan [[Samarbeid i et delt hvelv|dele et fjernhvelv]] med opptil 20 personer.

### Hvor stor kan hver fil være?

Maksimal filstørrelse avhenger av [[Planer og lagringsgrenser|Obsidian Sync-planen]] din. For Standard-planen er grensen 5 MB. For Plus-planen er grensen 200 MB per fil.

### Synkroniseres dataene mine i bakgrunnen?

Nei, filer synkroniseres bare når Obsidian kjører.

### Laster Obsidian Sync inn innstillingene mine på nytt automatisk?

Obsidian Sync kan automatisk laste inn visse innstillinger på nytt, men det er noen begrensninger. For mer informasjon, se [[Synkroniseringsinnstillinger og selektiv synkronisering#Innlasting av innstillinger på nytt|Innlasting av innstillinger på nytt]].

### Kan jeg bruke en tredjeparts synkroniseringstjeneste med Obsidian Sync?

Vi anbefaler ikke å bruke en tredjeparts synkroniseringstjeneste sammen med Obsidian Sync. Bruk av en tredjepartstjeneste og Obsidian Sync på flere enheter kan føre til konflikter, noe som resulterer i dupliserte eller ødelagte filer.

Skylagringstjenester som OneDrive og Dropbox tilbyr funksjoner som «Filer ved behov» eller «Bare tilkoblede filer», som bare laster ned filer når det trengs og fjerner dem lokalt for å spare plass. Siden disse filene ikke alltid er tilgjengelige lokalt, vil Obsidian Sync tolke dem som slettet, noe som fører til at de fjernes fra fjernhvelvet ditt.

For å unngå disse problemene, deaktiver nedlasting ved behov når du bruker Obsidian Sync med tjenester som OneDrive eller Dropbox. Du må sørge for at tredjepartstjenestens innstillinger er konfigurert til å alltid beholde filer på enheten.

## Datalagring

Dette er vanlige spørsmål om Obsidians datalagring. For mer utfyllende svar, se [[Sikkerhet og personvern|Sikkerhet og personvern]].

### Hvor lenge beholder dere versjonshistorikken?

[[Versjonshistorikk]] avhenger av [[Planer og lagringsgrenser|Obsidian Sync-planen]] din. På Standard-planen beholdes notatene dine i 1 måned. På Plus-planen beholdes notatene dine i 12 måneder. Etter denne perioden slettes de eldre versjonene.

Eldre versjoner av [[Vedlegg|vedlegg]] lagres i to uker.

### Hvor lenge beholder dere dataene mine etter at abonnementet utløper?

Vi beholder data i fjernhvelvene dine, inkludert versjonshistorikk, i én måned etter at abonnementet utløper. Eventuelle lokale hvelv på enhetene dine påvirkes ikke.

Så lenge du fornyer innen én måned, skal det ikke ha noen innvirkning på bruken din. Hvis du fornyer etter en måned, når fjernhvelvene dine har blitt fjernet, kan du [[Sett opp Obsidian Sync|opprette et nytt fjernhvelv]] og koble til det lokale hvelvet ditt.

### Beholder dere dataene mine hvis jeg ber om refusjon for abonnementet?

Nei. Dataene slettes umiddelbart fra Obsidian Sync-serverne. Data i det [[Lokale og fjernhvelv|lokale hvelvet]] ditt påvirkes ikke.
