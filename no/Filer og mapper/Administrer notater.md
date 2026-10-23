---
permalink: manage-notes
publish: true
mobile: false
description: null
---
Du kan administrere filer og mapper på flere måter, ved hjelp av [[Hurtigtaster]], [[Kommandovelger|kommandoer]], eller [[Filutforsker]].

## Opprett et nytt notat

For å opprette en ny fil:

1. Trykk `Ctrl+N` (eller `Cmd+N` på macOS).
2. Skriv inn navnet på notatet og trykk deretter `Enter` for å begynne å redigere notatet.

Du kan også opprette notater ved hjelp av [[Filutforsker#Opprett et nytt notat|Filutforsker]], eller ved å velge **Lag nytt notat** fra [[Kommandovelger|kommandopaletten]].

> [!hint] Systembegrensninger for tegn
> Obsidian respekterer filnavnbegrensningene til operativsystemet du oppretter notatet på. Hvis du planlegger å [[Synkroniser notatene dine på tvers av enheter|synkronisere notatene dine på tvers av enheter]], sørg for at filnavnene dine er [trygge for andre operativsystemer](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Åpne filer utenfor hvelvet

På skrivebordet kan du åpne og redigere individuelle Markdown-filer utenfor hvelvet ditt. Filer åpnes i det gjeldende vinduet og forblir på sin opprinnelige plassering.

> [!note] Krever Obsidian 1.14 og det nyeste installasjonsprogrammet
> [[Oppdater Obsidian#Oppdateringer av installasjonsprogrammet|Oppdater installasjonsprogrammet ditt]] ved å laste ned Obsidian fra [obsidian.md/download](https://obsidian.md/download) og installere appen på nytt.

For å åpne en Markdown-fil:

1. Åpne [[Kommandovelger|kommandopaletten]].
2. Velg **Åpne fil utenfor hvelvet...**.
3. Velg en Markdown-fil på datamaskinen din.

Du kan også bruke operativsystemets **Åpne med**-meny og velge **Obsidian**. For å åpne Markdown-filer i Obsidian som standard, sett det som standardappen for `.md`-filer.

Bildeinnebygginger og lenker til andre lokale filer løses relativt til Markdown-filens mappe. Bruk [[Disposisjon]] for å navigere overskrifter og [[Utgående lenker]] for å bla gjennom lenkede filer.

### Forhåndsvis filer med Quick Look

På macOS kan du velge en Markdown-fil i Finder og trykke `Mellomrom` for å forhåndsvise den med **Quick Look**. Quick Look-forhåndsvisning fungerer selv når Obsidian er lukket.

## Gi nytt navn til et notat

For å gi nytt navn til et aktivt notat:

1. Velg navnet på notatet øverst i redigeringsprogrammet (eller trykk `F2`).
2. Skriv inn det nye navnet og trykk deretter `Enter`.

Når du gir nytt navn til en fil, oppdaterer Obsidian automatisk alle lenker til den filen.

Du kan gi nytt navn til et notat eller en mappe uten å åpne det/den, ved å bruke [[Filutforsker#Gi nytt navn til en fil eller mappe|Filutforsker]]

## Slett et notat

For å slette et notat, velg **Flere valg → Slett fil** øverst til høyre i et aktivt notat.

Eller velg **Slett gjeldende fil** fra [[Kommandovelger|kommandopaletten]].

Du kan også slette et notat eller en mappe ved å bruke [[Filutforsker#Slett en fil eller mappe|Filutforsker]].

> [!note] Hva skjer med filer etter at jeg sletter dem?
> For å endre hva som skjer med slettede filer, velg ett av følgende alternativer under **[[Innstillinger]] → Filer og lenker**:
>
> - **Systemets papirkurv**: Som standard havner slettede filer i systemets papirkurv for operativsystemet ditt. For å gjenopprette en fil, bruk din foretrukne filbehandler.
> - **Obsidian-papirkurv**: Du kan sende slettede filer til en `.trash`-mappe i hvelvet ditt.
> - **Slett permanent**: Filer slettes umiddelbart uten mulighet for å gjenopprette dem.
