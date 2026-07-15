---
permalink: ios
---
# Obsidian mobilapp for iOS og iPadOS

Obsidian-mobilappen for iOS og iPadOS gir kraftige notatmuligheter til iPhone og iPad. Du kan laste den ned fra [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Denne siden dekker iOS-spesifikke funksjoner, inkludert widgeter, Siri-integrasjon og Snarveier.

## Sync

For informasjon om synkronisering av notater mellom enheter, se [[Synkroniser notatene dine på tvers av enheter]].

## Widgeter

Obsidian for iOS tilbyr flere widgeter for å utføre raske handlinger i hvelvet ditt.

> [!note] Merk
> Widgeter er tilgjengelige på iOS og iPadOS 18 og nyere.
> Widgeter er ikke tilgjengelige når du bruker «Krev Face ID» for å låse opp appen.

### Låseskjerm- og kontrollsenter-widgeter

Låseskjerm- og kontrollsenter-widgeter lar deg:
- Opprette et nytt notat
- Åpne et bestemt notat
- Åpne daglig notat
- Åpne søk
- Åpne Obsidian

### Hjemskjerm-widgeter

Hjemskjerm-widgeter lar deg:
- Opprette et notat
- Vise et notat
- Åpne ditt daglige notat

### Tilpasse widgeter

Du kan tilpasse widgeter for å passe arbeidsflyten din, som å velge hvilket hvelv som skal brukes eller angi et bestemt notat å åpne.

- **Hjemskjerm-widgeter:** Trykk og hold på widgeten, og velg deretter **Rediger widget**.
- **Låseskjerm-widgeter:** Trykk og hold på låseskjermen, trykk **Tilpass**, velg låseskjermen, og trykk deretter på widgeten du vil tilpasse.
- **Kontrollsenter-widgeter:** Åpne kontrollsenteret, trykk på **+**-knappen øverst til venstre for å begynne redigeringen, og trykk deretter på widgeten du vil tilpasse.

Konfigurasjonsalternativer for **Nytt notat**-widget:

![[ios-new-note-configuration.png|400]]

Konfigurasjonsalternativer for **Vis notat**-widget:

![[ios-view-note-configuration.png|400]]

## Snarveier

Obsidian integrerer med Apples Snarveier-app, som lar deg lage kraftige automatiseringer. Tilgjengelige snarveier inkluderer:

- **Åpne et notat** — Åpne et bestemt notat i hvelvet ditt
- **Opprett et nytt notat** — Opprett et nytt notat i hvelvet ditt
- **Åpne daglig notat** — Gå direkte til dagens daglige notat
- **Fang til daglig notat** — Legg til eller sett inn tekst i det daglige notatet uten å åpne Obsidian-appen
- **Fang til bokmerke** — Legg til eller sett inn tekst i et bokmerket notat uten å åpne Obsidian-appen

Fang-snarveier er spesielt nyttige for raske notater, ettersom de lar deg legge til innhold i et notat i bakgrunnen.

## Delingsark

Obsidians delingsark lar deg fange innhold fra nettsider. Det fungerer også med apper som YouTube og andre sosiale nettverk.

> [!note]
> - Det innebygde delingsarket er tilgjengelig på iOS og iPadOS 18 og nyere.
> - Delingsark-funksjonene beskrevet i denne seksjonen krever Obsidian 1.13.0 eller nyere.

Bruk delingsarket for raskt å sende innhold fra en annen app til Obsidian:
1. I en annen app, trykk på **Del**-knappen.
2. Velg **Obsidian**.
3. Velg en plassering.
4. Gjennomgå eller rediger det fangede innholdet.
5. Trykk **Lagre**.

![[ios-share-sheet-extension.png|400]]

### Plasseringer

Plasseringer lar deg bestemme hvor det delte innholdet skal lagres før du lagrer det.

Plasseringer kan fange til:
- **Nytt notat** — Opprett et nytt notat i et hvelv eller en mappe.
- **Daglig notat** — Legg til innhold i begynnelsen eller slutten av dagens daglige notat.
- **Bokmerket notat** — Legg til innhold i begynnelsen eller slutten av et bokmerket notat.
- **Notat** — Velg et eksisterende notat i hvelvet ditt.
- **Nytt bokmerke** — Lagre en delt URL til Obsidian-bokmerker.

![[ios-share-sheet-locations.png|400]]

### Tilpasse plasseringer

Du kan opprette plasseringer for vanlige arbeidsflyter, som å lagre artikler i en innboks, legge til sitater i det daglige notatet, eller legge til lenker i bokmerker.

For å tilpasse plasseringer:

1. Åpne Obsidian fra iOS-delingsarket.
2. Trykk på gjeldende plassering i verktøylinjen.
3. Trykk på **+**-knappen for å opprette en ny plassering, eller velg en eksisterende plassering for å redigere.
4. Velg hvelv, atferd og valgfrie innstillinger.

Avhengig av `Atferd`-typen kan du konfigurere alternativer som:
- Mappe
- Mal
- Bokmerkegruppe
- Legg til i begynnelsen eller slutten
- Om delte lenker fanger **Full tekst** eller bare **URL-en**

![[ios-share-sheet-add-location.png|400]]

### Bruke en mal ved deling

Du kan bruke en mal når du deler innhold fra delingsarket. Maler lar deg formatere fanget nettinnhold med detaljer som sidetittel, forfatter, kildenettsted og publiseringsdato.

For å sette opp en plassering med en mal:

1. Åpne Obsidian fra iOS-delingsarket.
2. Trykk på gjeldende plassering i verktøylinjen.
3. Trykk på **+**-knappen for å opprette en ny plassering.
4. Skriv inn et navn for plasseringen.
5. Velg et hvelv.
6. Sett **Atferd** til **Nytt notat**.
7. I **Valgfritt**-seksjonen, trykk **Mal**.
8. Velg et notat fra hvelvet ditt som skal brukes som mal.
9. Trykk **Lagre** for å lagre plasseringen.

![[ios-share-sheet-set-template.png|400]]

Når du deler en lenke med denne plasseringen, bruker Obsidian malen først, og legger deretter til det delte innholdet.

Støttede mal-plassholdere:

| Plassholder | Beskrivelse |
| --- | --- |
| `{{author}}` | Forfatter av artikkelen |
| `{{description}}` | Beskrivelse eller sammendrag av artikkelen |
| `{{domain}}` | Domenenavn for nettstedet |
| `{{favicon}}` | URL til nettstedets favicon |
| `{{image}}` | URL til artikkelens hovedbilde |
| `{{published}}` | Publiseringsdato for artikkelen, med standard datoformat |
| `{{published: YYYY-MM-DD}}` | Publiseringsdato med egendefinert datoformat |
| `{{site}}` | Navn på nettstedet |
| `{{title}}` | Tittel på artikkelen |
| `{{url}}` | Artikkelens URL |
| `{{wordCount}}` | Totalt antall ord i det uttrukne innholdet |

Du kan også bruke standard mal-plassholdere for dato og tid:

| Plassholder | Beskrivelse |
| --- | --- |
| `{{date}}` | Gjeldende dato |
| `{{date: YYYY-MM-DD}}` | Gjeldende dato med egendefinert format |
| `{{time}}` | Gjeldende tid |
| `{{time: HH:mm}}` | Gjeldende tid med egendefinert format |

## Siri-integrasjon

Du kan bruke Siri-stemmekommandoer for å samhandle med Obsidian:

- «Capture using Obsidian»
- «Capture to Obsidian»
- «Open my daily note in Obsidian»
- «Search in Obsidian»

## Spotlight-integrasjon

Når du søker etter «Obsidian» i iOS Spotlight, ser du hurtighandlinger:
- Nytt notat
- Søk
- Daglig notat
