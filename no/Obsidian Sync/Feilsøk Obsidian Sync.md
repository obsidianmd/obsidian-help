---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Denne siden lister opp uvanlige problemer du kan støte på med Obsidian Sync, og hvordan du løser dem.'
---
Denne siden lister opp uvanlige problemer du kan støte på med [[Introduksjon til Obsidian Sync|Obsidian Sync]] og hvordan du kan løse dem. Før du fortsetter, anbefaler vi å se gjennom sidene [[Statusikon og meldinger]] og [[Ofte stilte spørsmål]].

## Generelt

### Konfliktløsning

En konflikt oppstår når du endrer den samme filen på to eller flere enheter før de synkroniseres. For eksempel redigerer du et notat på datamaskinen din. Før den endringen lastes opp, endrer du også det samme notatet på telefonen din.

Konflikter skjer oftere når du jobber frakoblet. Det er flere endringer og lengre tid mellom synkroniseringer, noe som øker sjansen for konflikter.

#### Hvordan Obsidian Sync håndterer konflikter

Når Obsidian Sync oppdager en konflikt, avhenger resultatet av filtypen:

- **Markdown-filer**: Obsidian Sync slår sammen endringene ved hjelp av Googles [diff-match-patch](https://github.com/google/diff-match-patch)-algoritme.
- **Andre filtyper**: For alle andre filer, inkludert Canvas, bruker Obsidian en «sist endret vinner»-tilnærming. Den sist endrede versjonen erstatter tidligere versjoner.

For konflikter i Obsidian-innstillinger, som utvidelsesinnstillinger, slår Obsidian Sync sammen JSON-filene. Den legger nøkler fra den lokale JSON-filen oppå den fjerne JSON-filen.

#### Alternativer for konfliktløsning

Fra og med Obsidian 1.9.7 kan du velge hvordan konflikter skal håndteres. For å konfigurere denne innstillingen:

1. Åpne **[[Innstillinger]]**.
2. Velg **Sync** i sidefeltet.
3. Under **[[Synkroniseringsinnstillinger og selektiv synkronisering#Konfliktløsning|Konfliktløsning]]**, velg ditt foretrukne alternativ:
   - **Slå sammen automatisk** (standard): Obsidian Sync kombinerer alle endringer fra forskjellige enheter til én enkelt fil. Dette lagrer alle redigeringer, men kan noen ganger skape duplikattekst eller formateringsproblemer. Du må fikse disse manuelt.
   - **Opprett konfliktfil**: Når Obsidian finner motstridende endringer, oppretter den en separat konfliktfil i stedet for å slå sammen automatisk. Du kan deretter gjennomgå begge versjonene og slå dem sammen selv. Dette gir deg full kontroll over sluttresultatet.

> [!warning]+ Konfigurer på alle enheter
> Innstillinger for konfliktløsning er enhetsspesifikke. Du må konfigurere ditt foretrukne alternativ på hver av enhetene dine. Dette sikrer samme atferd på tvers av alle dine synkroniserte enheter.

**Navnemønster for konfliktfiler**

Når du bruker alternativet «Opprett konfliktfil», oppretter Obsidian en ny fil med dette navnemønsteret:

```
original-notatnavn (Conflicted copy enhetsnavn YYYYMMDDHHMM).md
```

For eksempel, hvis en konflikt oppstår i et notat kalt `Meeting notes.md`, kan konfliktfilen hete:

```
Meeting notes (Conflicted copy MyMacBook2 202411281430).md
```

Konfliktfilen inneholder endringene fra enheten der konflikten ble oppdaget. Den opprinnelige filen beholder den fjerne versjonen. Du kan sammenligne begge filene og manuelt slå sammen innholdet.

> [!info]+ Sjekk Sync-loggen
> For å sjekke når konflikter har oppstått, åpne [[Statusikon og meldinger#Sync activity-logg|Sync-loggen]]. Filtrer etter «Merge Conflicts» eller søk etter «Conflict».

### Sync slettet et notat jeg nettopp opprettet på to enheter

Obsidian Sync prøver vanligvis å [[#Konfliktløsning|løse konflikter]] ved å slå sammen motstridende notater på tvers av enheter. Imidlertid kan det oppstå problemer for brukere som automatisk oppretter eller endrer notater ved oppstart. Dette inkluderer [[Daglige notater]] eller ved bruk av community-utvidelsen [Templater](https://github.com/SilentVoid13/Templater).

Hvis du oppretter et notat lokalt på én enhet og, innen et par minutter, Sync laster ned en fjern versjon av det samme notatet, vil Sync beholde den fjerne versjonen uten å slå sammen de to. I dette tilfellet kan du gjenopprette den lokale versjonen ved hjelp av [[Filgjenoppretting]].

### Sync vil ikke synkronisere mine utvidelser og innstillingsoppdateringer

Obsidian [[Ofte stilte spørsmål#Laster Obsidian Sync innstillingene mine i sanntid?|laster ikke inn alle innstillinger i sanntid]]. Etter at du har oppdatert innstillinger eller utvidelser, må du starte Obsidian på nytt på andre enheter for å se endringene. På mobile enheter kan det hende du må tvangslukke appen.

> [!example]- Endre et tema
> - På din primære enhet (vanligvis en datamaskin) endrer du temaet tilbake til standard fra et egendefinert tema.
> - Sync-loggen bekrefter at de oppdaterte filene ble sendt til fjernhvelvet, men mobilenheten din viser fortsatt det egendefinerte temaet.
> - På mobilenheten, sjekk Sync-loggen for å bekrefte mottak av den oppdaterte `appearance.json`-filen.
> - Last inn på nytt eller start Obsidian på nytt på mobilenheten.
> - Etter å ha lastet inn på nytt eller startet på nytt, skal mobilenheten vise det samme temaet som datamaskinen din.

### Filene mine forsvinner fra Sync så snart jeg gjenoppretter dem

Dette problemet er mest vanlig på Windows. Windows Defender kan sette filer med kodeblokker i karantene, noe som fører til at visse notater forsvinner.

En annen vanlig årsak er dobbel synkronisering. Dette skjer når Obsidian Sync kjører sammen med en annen synkroniseringstjeneste.

![[Bytt til Obsidian Sync#Flytt hvelvet ditt ut av tredjeparts synkroniseringstjeneste eller skylagring]]

---

Til slutt kan dette skje når du gjenoppretter en fil på én enhet, men den deretter fjernes fra en sekundær enhet. Dette skjer når filnavnet har [[Statusikon og meldinger#Meldinger om hoppet over|ugyldige tegn]].

## Android

**Enheten min sletter vedlegg jeg mottar gjennom Sync**

Dette problemet skyldes sannsynligvis at Google eller Android Photos håndterer vedleggene dine. For å forhindre at systemet endrer filer mottatt via Sync, legg til en `.nomedia`-[fil i hvelvet ditt](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) på Android-enheten din.

> [!tip]- Bruk en utvidelse
> Community-utvidelsen [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) gjør dette enklere. Installer den på Android-telefonen din. Merk at `.nomedia`-filer ikke synkroniseres på tvers av enheter gjennom Obsidian Sync.
