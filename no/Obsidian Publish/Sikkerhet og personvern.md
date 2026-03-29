---
permalink: publish/security
---
Du kan velge notatene du vil publisere til [[Introduksjon til Obsidian Publish|Obsidian Publish]]. Resten av notatene dine forblir trygge i hvelvet ditt.

Bare notatene du velger å publisere sendes til Obsidians servere, og eventuelle notater du avpubliserer blir fjernet.

## Passordbeskyttelse

For forbedret tilgangskontroll på publish-nettstedet ditt kan du legge til et nettstedspassord. Besøkende vil bli bedt om å oppgi et passord når de forsøker å få tilgang til det. Hvis du senere bestemmer deg for å fjerne nettstedspassordet, vil hele nettstedet bli synlig for offentligheten igjen.

> [!warning] Individuell passordbeskyttelse for publiserte notater støttes for øyeblikket ikke.

### Legg til et nettstedspassord

1. I verktøylinjen, til venstre i applikasjonsvinduet, klikk **Publiser endringer** ![[lucide-send.svg#icon]].
2. I dialogboksen **Publiser endringer**, klikk **Endre nettstedsalternativer** ![[lucide-cog.svg#icon]].
3. Under **Andre nettstedsinnstillinger**, ved siden av **Passord**, klikk **Administrer**.
4. Klikk **Nytt passord**.
5. I **Passord**, skriv inn et passord for nettstedet ditt.
6. (Valgfritt) I **Kallenavn**, skriv inn et kallenavn for passordet, for eksempel personen du vil gi tilgang til nettstedet.
7. Klikk **Legg til dette passordet**.

### Fjern et nettstedspassord

1. I verktøylinjen, til venstre i applikasjonsvinduet, klikk **Publiser endringer** ![[lucide-send.svg#icon]].
2. I dialogboksen **Publiser endringer**, klikk **Endre nettstedsalternativer** ![[lucide-cog.svg#icon]].
3. Under **Andre nettstedsinnstillinger**, ved siden av **Passord**, klikk **Administrer**.
5. Klikk kryss-ikonet ved siden av passordet du vil slette.

## Datainnsamling
### Besøksdata

Som standard samler Obsidian Publish **ikke** inn besøksdata, lagrer informasjonskapsler eller behandler personopplysninger. Du kan imidlertid implementere analyse eller logge andre brukerdata ved å [[Tilpass nettstedet ditt|tilpasse nettstedet ditt]].

Som nettstedseier er du ansvarlig for å overholde GDPR og personvernreguleringer i din region. Dette inkluderer å opprette ditt eget varslingsbanner, som kan implementeres ved hjelp av publish.js, og å legge til en personvernpolicyside på nettstedet ditt.

## Tilgang

Obsidian har kontrakt med [Cloudflare](https://www.cloudflare.com) for å tilby nettstedshosting for våre Publish-nettsteder. Serverne er plassert i San Francisco, CA.

### Administrere tilgang til Obsidian Publish på nettverket ditt

For å regulere tilgangen til Obsidian Publish på nettverket ditt, må du administrere følgende domener:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

I tillegg bruker backend-tjenestene følgende underdomener: `publish-xx.obsidian.md`, der `xx` er et tall fra `1 - 100`.

> [!tip] Hvis brannmursystemet ditt støtter det, anbefaler vi å hvitliste `publish-*.obsidian.md` for å imøtekomme vår kontinuerlige utvidelse av underdomener.
