---
permalink: web-clipper/capture
---
Når du har installert nettleserutvidelsen [[Introduksjon til Obsidian Web Clipper|Web Clipper]], kan du få tilgang til den på flere måter, avhengig av nettleseren din:

1. Obsidian-ikonet i nettleserens verktøylinje.
2. Hurtigtaster, for å aktivere utvidelsen fra tastaturet.
3. Kontekstmeny, ved å høyreklikke på nettsiden du besøker.

For å lagre en side til Obsidian, klikk på **Legg til i Obsidian**-knappen.

## Fang opp en side

Når du åpner utvidelsen, henter Web Clipper data fra gjeldende nettside i henhold til innstillingene i [[Obsidian Web Clipper/Maler|malen]] din. Du kan opprette dine egne maler og tilpasse utdataene ved hjelp av [[Variabler|variabler]] og [[Filtre|filtre]].

Som standard forsøker Web Clipper å intelligent hente ut kun hovedinnholdet i artikkelen, og ekskluderer andre elementer på siden. Du kan imidlertid overstyre denne atferden på følgende måter:

- Hvis en egendefinert mal er til stede, bruker den malen din.
- Hvis et utvalg er til stede, bruker den utvalget. Du kan bruke `Ctrl/Cmd+A` for å velge hele siden.
- Hvis noen [[Uthev nettsider|uthevinger]] er til stede, bruker den uthevingene.

## Last ned bilder

Bilder lastes ikke automatisk ned når du bruker Web Clipper. I stedet lenker bilder til sin nettbaserte URL. Dette sparer plass i hvelvet ditt, men det betyr at bildene ikke vil være tilgjengelige uten nett, eller hvis URL-en slutter å fungere.

Du kan laste ned bilder for enhver fil i Obsidian ved å bruke [[Kommandovelger|kommandoen]] kalt **Last ned vedlegg for gjeldende fil**. Denne kommandoen kan også tilordnes en hurtigtast i Obsidian.

## Hurtigtaster

Web Clipper inkluderer tastatursnarveier du kan bruke for å effektivisere arbeidsflyten din. For å endre tastetilordninger, gå til **Web Clipper-innstillinger** → **Generelt** og følg instruksjonene for nettleseren din. Tilordninger kan endres for alle nettlesere bortsett fra Safari, som ikke støtter redigering av hurtigtaster.

| Handling                | macOS          | Windows/Linux   |
| ----------------------- | -------------- | --------------- |
| Åpne klipperen          | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Hurtigklipp             | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Veksle uthever          | `Opt+Shift+H`  | `Alt+Shift+H`   |

## Grensesnittfunksjonalitet

Web Clipper-grensesnittet er delt inn i fire seksjoner:

1. **Topptekst** der du kan bytte maler, slå på [[Uthev nettsider|utheving]], [[Lesevisning|lesemodus]], og få tilgang til innstillinger.
2. **Egenskaper** viser [[Egenskaper|metadataene]] hentet fra siden som vil bli lagret som [[Egenskaper]] i Obsidian.
3. **Notatinnhold** som vil bli lagret i Obsidian.
4. **Bunntekst** lar deg velge hvelv og mappe, og legge til i Obsidian.

Topptekstfunksjonalitet inkluderer:

- **Mal**-nedtrekksmeny for å bytte mellom lagrede [[Obsidian Web Clipper/Maler|maler]] lagt til i Web Clipper-innstillinger.
- **Mer (...)**-knapp for å vise sidevariabler du kan bruke i maler.
- **Uthever**-knapp for å slå på [[Uthev nettsider|utheving]].
- **Tannhjul**-knapp for å åpne Web Clipper-innstillinger.

Bunntekstfunksjonalitet inkluderer:

- **Legg til i Obsidian**-knapp for å lagre data til Obsidian.
- **Hvelv**-nedtrekksmeny for å bytte mellom lagrede hvelv lagt til i Web Clipper-innstillinger.
- **Mappe**-felt for å definere hvilken mappe det skal lagres til.
- **Tolk** for å kjøre [[Tolk nettsider|naturlige språkforespørsler]] på siden.
