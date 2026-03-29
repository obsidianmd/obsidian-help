---
permalink: configuration-folder
publish: true
mobile: true
description: Lær hvordan du får tilgang til og administrerer konfigurasjonsmappen din på datamaskin og mobile enheter.
---
Obsidians konfigurasjonsmappe inneholder alle innstillingsfilene som tilhører [[Administrer hvelv|hvelvet]] ditt.

Som standard heter konfigurasjonsmappen `.obsidian` og er plassert i hvelvets rotmappe. Når du bruker en synkroniseringstjeneste, eller hvis du ønsker å teste forskjellige profiler i samme hvelv, kan det være lurt å endre konfigurasjonsmappen.

## Få tilgang til konfigurasjonsmappen

### Datamaskin

På datamaskinen ligger `.obsidian`-mappen i hvelvets rotmappe. Du kan få tilgang til den via systemets filbehandler.

### Mobil

Tilgang til konfigurasjonsmappen varierer etter plattform:

**iOS og iPadOS**

Det finnes ingen standardmetode for å få tilgang til `.obsidian`-mappen på iOS eller iPadOS. For å vise og redigere skjulte filer og mapper trenger du en tredjepartsapp, for eksempel:

- **Taio** — Gratis app med grunnleggende funksjoner for å vise og redigere mappe- og filnavn.
- **Textastic** — Betalt app med avanserte filredigeringsfunksjoner.

**Android**

For å få tilgang til `.obsidian`-mappen på Android:

1. Åpne systemets filbehandler.
2. Aktiver «Vis skjulte filer»-bryteren i innstillingene.
3. Naviger til hvelvets rotmappe. `.obsidian`-mappen vil vises på øverste nivå.

> [!tip]- Alternative filbehandlere
> Hvis standardfilbehandleren din ikke har et «Vis skjulte filer»-alternativ, installer en filbehandlerapp som inkluderer denne funksjonen.

## Endre konfigurasjonsmappen

For å angi konfigurasjonsmappen:

1. Åpne **[[Innstillinger]] → Files & Links**.
2. I **Overstyr konfigurasjonsmappe**, skriv inn navnet på profilen din, med en prikk (`.`) i begynnelsen. For eksempel `.obsidian-awesome`.
3. Start Obsidian på nytt for at endringene skal tre i kraft.

> [!info] Eventuelle innstillinger i konfigurasjonsmappen din vil ikke overføres til den nye konfigurasjonsmappen. Den tidligere konfigurasjonsmappen vil imidlertid forbli i hvelvets rotmappe.
