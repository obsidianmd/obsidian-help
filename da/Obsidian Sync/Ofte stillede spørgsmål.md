---
permalink: sync/faq
publish: true
mobile: true
description: Denne side opregner nogle af de almindelige spørgsmål relateret til spørgsmål og begrænsninger for Obsidian Sync.
---
Denne side lister nogle af de almindelige spørgsmål relateret til spørgsmål og begrænsninger for [[Introduktion til Obsidian Sync|Obsidian Sync]].

## Generelt

### Hvilke operativsystemer understøtter Obsidian Sync?

Obsidian Sync understøtter alle platforme, som Obsidian kan køre på. I øjeblikket betyder det Windows, macOS, Linux, Android og iOS.

### Virker Obsidian med Apples låsetilstand?

Obsidian kan bruges i [låsetilstand](https://support.apple.com/en-us/105120), så længe Obsidian er tilføjet som en undtagelse.

### Hvilken type data synkroniseres?

Som standard synkroniseres dine Obsidian-noter, billeder og din [[Konfigurationsmappe]].

Du kan tilføje yderligere synkroniseringsmuligheder for PDF'er, lydfiler, videofiler og andre filer, når du [[Sync indstillinger og selektiv synkronisering|konfigurerer Sync indstillinger og selektiv synkronisering]].

### Hvor meget lagerplads har jeg?

Lagergrænsen afhænger af dit Obsidian [[Abonnementer og lagergrænser#Plans|Sync-abonnement]]. Den maksimale lagerplads er 100 GB. Denne lagergrænse inkluderer [[Versionshistorik|versionshistorik]].

Du kan se **Boksstørrelse** i Obsidian-applikationen ved at gå til **[[Indstillinger]] → Sync**.

### Hvor mange fjernbokse kan jeg have?

Antallet af fjernbokse, du kan have, bestemmes ud fra dit [[Abonnementer og lagergrænser#Plans|Sync-abonnement]]. Standard-abonnementet inkluderer 1 boks, Plus-abonnementet inkluderer 10 bokse. Bokse delt med dig tæller ikke med i din boksgrænse.

### Hvor stor kan hver fjernboks være?

Der er ingen grænse per boks. Lagergrænsen er knyttet til din anvendte konto og kan fordeles på tværs af alle dine bokse.

### Hvor mange personer kan jeg dele en fjernboks med?

Du kan [[Samarbejd i en delt boks|dele en fjernboks]] med op til 20 personer.

### Hvor stor kan hver fil være?

Den maksimale filstørrelse afhænger af dit [[Abonnementer og lagergrænser|Obsidian Sync-abonnement]]. For Standard-abonnementet er grænsen 5 MB. For Plus-abonnementet er grænsen 200 MB per fil.

### Synkroniseres mine data i baggrunden?

Nej, filer synkroniseres kun, når Obsidian kører.

### Genindlæser Obsidian Sync mine indstillinger automatisk?

Obsidian Sync kan automatisk genindlæse visse indstillinger, men der er nogle begrænsninger. For flere detaljer, se [[Sync indstillinger og selektiv synkronisering#Genindlæsning af indstillinger|Genindlæsning af indstillinger]].

### Kan jeg bruge tredjepartssynkronisering sammen med Obsidian Sync?

Vi anbefaler ikke at bruge en tredjepartssynkroniseringstjeneste sammen med Obsidian Sync. Brug af en tredjepartstjeneste og Obsidian Sync på flere enheder kan føre til konflikter, hvilket resulterer i duplikerede eller beskadigede filer.

Skylagringstjenester som OneDrive og Dropbox tilbyder funktioner som "Filer efter behov" eller "Kun online-filer", som kun henter filer, når de er nødvendige, og fjerner dem lokalt for at spare plads. Da disse filer dog ikke altid er tilgængelige lokalt, vil Obsidian Sync fortolke dem som slettet, hvilket fører til deres fjernelse fra din fjernboks.

For at undgå disse problemer skal du deaktivere hentning efter behov, når du bruger Obsidian Sync med tjenester som OneDrive eller Dropbox. Du skal sikre, at tredjepartstjenestens indstillinger er konfigureret til altid at beholde filer på enheden.

## Dataopbevaring

Disse er ofte stillede spørgsmål om Obsidians dataopbevaring. For mere dybdegående svar, se [[Obsidian Sync/Sikkerhed og privatliv|Sikkerhed og privatliv]].

### Hvor længe opbevarer I versionshistorikken?

[[Versionshistorik]] afhænger af dit [[Abonnementer og lagergrænser|Obsidian Sync-abonnement]]. Med Standard-abonnementet opbevares dine noter i 1 måned. Med Plus-abonnementet opbevares dine noter i 12 måneder. Efter denne periode slettes de ældre versioner.

Ældre versioner af [[Vedhæftninger|vedhæftninger]] opbevares i to uger.

### Hvor længe opbevarer I mine data efter mit abonnement udløber?

Vi opbevarer data i dine fjernbokse, inklusiv versionshistorik, i en måned efter dit abonnement udløber. Eventuelle lokale bokse på dine enheder påvirkes ikke.

Så længe du fornyer inden for en måned, bør der ikke være nogen påvirkning af din brug. Hvis du fornyer efter en måned, når dine fjernbokse er blevet fjernet, kan du [[Opsæt Obsidian Sync|oprette en ny fjernboks]] og forbinde din lokale boks.

### Opbevarer I mine data, hvis jeg anmoder om refusion af mit abonnement?

Nej. Dataene slettes øjeblikkeligt fra Obsidian Sync-serverne. Data i din [[Lokale og fjernbokse|lokale boks]] påvirkes ikke.
