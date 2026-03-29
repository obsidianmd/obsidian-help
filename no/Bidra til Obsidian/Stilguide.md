---
permalink: style-guide
publish: true
mobile: true
description: Denne siden forklarer stilguiden for skriving av støttedokumentasjonen vår.
---
Obsidian-dokumentasjonen følger stilretningslinjene som er oppført på denne siden. Disse retningslinjene er basert på bransjens beste praksis, spesielt [Google developer documentation style guide](<https://developers.google.com/style>) og [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/). For spesialtilfeller som ikke dekkes nedenfor, se disse eksterne guidene som sekundære referanser.

> [!tip]- Bidra
> Det meste av dokumentasjonen eksisterte før denne stilguiden ble laget.
> 
> Hvis du finner brudd på denne stilguiden, vennligst [opprett en sak](https://github.com/obsidianmd/obsidian-docs/issues/new) og send en pull request til [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologi og grammatikk

### Språkstil

For den engelske dokumentasjonen vår anbefales det å bruke [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) for bedre å betjene det globale publikummet vårt og for å hjelpe med [[#Oversettelser]]. Dette betyr:

- Unngå idiomer og kulturspesifikke uttrykk
- Bruke aktiv stemme og direkte setningsoppbygging
- Foretrekke enkle, vanlige ord fremfor kompleks terminologi
- Være eksplisitt i stedet for underforstått
- For stavekonvensjoner, bruk amerikansk engelsk (f.eks. «organize» ikke «organise»).

### Begreper

- Foretrekk «hurtigtast» fremfor «hotkey». Bruk Hotkey når du refererer til den spesifikke funksjonen.
- Foretrekk «Obsidian-appen» på mobil, og «Obsidian-applikasjonen» på datamaskin.
- Foretrekk «synkroniser» eller «synkronisering» fremfor «synkroniser» eller «synkronisering».
- Foretrekk «søkeord» fremfor «søkespørring».
- Foretrekk «overskrift» fremfor «header» når du refererer til en tekst som introduserer en seksjon.
- Foretrekk «maksimum» fremfor «maks» og «minimum» fremfor «min».

### Produktnavn

Obsidian-produktnavn starter med «Obsidian», for eksempel «Obsidian Publish» og «Obsidian Sync».

Hvis et avsnitt blir for repetitivt, kan du bruke kortformen i etterfølgende referanser.

For eksempel:

_For å tillate enhetsspesifikk konfigurasjon synkroniserer ikke Obsidian Sync sine egne innstillinger. Du må konfigurere Sync for hver av enhetene dine._

### Brukergrensesnitt og interaksjoner

- Bruk **fet skrift** for å indikere knappetekst
- Foretrekk «velg» fremfor «trykk» eller «klikk».
	- For mobilspesifikke instruksjoner er «trykk» akseptabelt når du beskriver berøringsinteraksjoner siden «klikk» ikke er tilgjengelig.
- Foretrekk «sidefelt» fremfor «side felt».
- Foretrekk «utfør» fremfor «påkall» og «kjør» når du refererer til kommandoer eller handlinger.

Når du refererer til flere UI-interaksjoner i en sekvens, bruk → (U+2192)-symbolet. For eksempel «**[[Innstillinger]] → Community-utvidelser**».

### Notater, filer og mapper

- Bruk «notat» når du refererer til en Markdown-fil i hvelvet.
- Bruk «fil» når du refererer til andre filtyper enn Markdown.
- Foretrekk «notatnavn» fremfor «notattittel».
- Foretrekk «aktivt notat» fremfor «nåværende notat».
- Foretrekk «mappe» fremfor «katalog».
- Foretrekk «filtype» fremfor «filformat», med mindre du spesifikt refererer til dataformatet for filinnholdet.

Når du navigerer mellom notater, bruk «åpne» hvis destinasjonen er skjult, og «bytt» hvis både kilde- og destinasjonsnotatene er åpne i separate visninger.

### Referansedokumentasjon for innstillinger

Når det er mulig, bør alle innstillinger dokumenteres inni Obsidian med en beskrivende tekst. Unngå å dokumentere en spesifikk innstilling i Obsidian Hjelp med mindre:

- Den krever mer inngående kunnskap om hvordan og når den skal brukes.
- Den er ofte feilbrukt eller det stilles spørsmål om den.
- Den _drastisk_ endrer brukeropplevelsen.

Vurder å bruke en tips-uthevet blokk hvis du vil trekke oppmerksomhet til en spesifikk innstilling.

### Retningsbetegnelser

Bruk bindestrek i retningsbetegnelser når de brukes som adjektiver. Unngå bindestrek når retning brukes som substantiv.

**Anbefalt:**

- Velg **[[Innstillinger]]** i nedre-venstre hjørne.
- Velg **[[Innstillinger]]** nederst til venstre.

**Ikke anbefalt:**

- Velg **[[Innstillinger]]** i nedre venstre hjørne.
- Velg **[[Innstillinger]]** i nedre-venstre.

Foretrekk «øvre-venstre» og «øvre-høyre» fremfor «topp-venstre» og «topp-høyre».

Ikke angi en retning når du refererer til innstillinger. Plasseringen av innstillingskontrollen avhenger av enheten.

**Anbefalt:**

- Ved siden av **Velg fjernhvelv**, velg **Velg**.

**Ikke anbefalt:**

- Til høyre for **Velg fjernhvelv**, velg **Velg**.

Når du beskriver vertikal retning i UI-elementer, bruk «over» og «under» for romlige forhold. Unngå «opp» og «ned» da de er tvetydige i forskjellige kontekster.

**Anbefalt:**

- Søkeboksen vises over fillisten.
- Ytterligere alternativer er tilgjengelige under.

**Ikke anbefalt:**

- Søkeboksen er opp fra fillisten.
- Flere alternativer er ned under.

### Instruksjoner

Bruk imperativ for navn på guider, seksjonsoverskrifter og trinnvise instruksjoner. Imperativformen er konsis og handlingsorientert, noe som er mer rettfram for brukere som følger instruksjoner.

- Foretrekk «Sett opp» fremfor «Sette opp»
- Foretrekk «Flytt en fil» fremfor «Flytte en fil»
- Foretrekk «Importer notatene dine» fremfor «Importere notatene dine»

### Stor/liten bokstav i overskrifter

Foretrekk *stor forbokstav bare i første ord* fremfor *stor forbokstav i alle ord* for overskrifter, knapper og titler. Når du refererer til UI-elementer, samsvar alltid med bokstavbruken i teksten i brukergrensesnittet.

**Anbefalt:**

- Hvordan Obsidian lagrer data

**Ikke anbefalt:**

- Hvordan Obsidian Lagrer Data

### Eksempler

Foretrekk realistiske eksempler fremfor meningsløse begreper.

**Anbefalt:**

- `task:(ring ELLER planlegg)`

**Ikke anbefalt:**

- `task:(foo ELLER bar)`

### Tastenavn og hurtigtaster

Når du refererer til tastaturtaster og hurtigtaster, bruk konsekvent notasjon.

**Individuelle tastenavn:**

Når du refererer til et tegn på tastaturet ved navn, legg til tegnet mellom parenteser rett etter navnet.

**Anbefalt:**

- Trykk på bindestrek-tasten (-) for å legge til en strek.
- Bruk spørsmålstegnet (?) for å søke.

**Ikke anbefalt:**

- Trykk på bindestrek-tasten for å legge til en strek.
- Bruk ? for å søke.
- Legg til en `-` foran ordet.

**Hurtigtaster:**

Formater hurtigtaster uten mellomrom rundt plusstegnet. Når en snarvei er forskjellig mellom operativsystemer, spesifiser begge.

**Anbefalt:**

- Trykk `Ctrl+Z` (Windows) eller `Command+Z` (macOS) for å angre.
- Trykk `Escape` for å lukke dette vinduet.
- Bruk `Tab` for å flytte mellom felt.

**Ikke anbefalt:**

- Trykk `Cmd+Z` for å angre.
- Trykk `Ctrl + Z` (med mellomrom) for å angre.
- Trykk `Ctrl/Cmd+Z` for å angre.

For snarveier som er identiske på alle plattformer, trenger du ikke å spesifisere OS. Hvis du er usikker på om en snarvei er forskjellig mellom plattformer, spesifiser OS for sikkerhets skyld. Windows og Linux bruker vanligvis de samme snarveiene.

### Markdown

Bruk linjeskift mellom Markdown-blokker:

**Anbefalt:**

```md
# Overskrift 1

Dette er en seksjon.

1. Første element
2. Andre element
3. Tredje element
```

**Ikke anbefalt:**

```md
# Overskrift 1
Dette er en seksjon.
1. Første element
2. Andre element
3. Tredje element
```

**Tankestreker i lister:**

Bruk tankestreker (—) for å skille uthevede begreper fra beskrivelsene deres i punktlister. Ikke bruk tankestreker i enkle nestede punktlister med lenker.

**Anbefalt:**

- **Visningsmeny** — opprett, rediger og bytt visninger.
- **Beregn verdier** — legg til priser, beregn totaler eller utfør matteoperasjoner.

**Ikke anbefalt:**

- [[Opprett en base]] — Lær hvordan du oppretter og bygger inn en base.

### Bilder

Bruk «**bredde** x **høyde** piksler» for å beskrive bilde- eller skjermdimensjoner.

**Eksempel:**

Anbefalte bildedimensjoner: 1920 x 1080 piksler.

## Informasjonsstruktur

### Typer uthevede blokker

Bruk uthevede blokker strategisk for å fremheve spesifikke typer informasjon:

**Tips** (`[!tip]-`) - Praktiske råd eller beste praksis som forbedrer brukerens arbeidsflyt. Bruk for snarveier, løsninger eller ikke-essensiell men nyttig informasjon. Disse uthevede blokkene starter sammenklappt.

**Info** (`[!info]+`) - Ytterligere kontekst, bakgrunnsinformasjon eller avklaringer. Bruk når informasjon gir forståelse, men ikke er nødvendig for å fullføre en oppgave. Disse uthevede blokkene starter utvidet.

**Advarsel** (`[!warning]+`) - Viktige advarsler som forhindrer datatap, feil eller utilsiktede konsekvenser. Bruk sparsomt for genuint risikable situasjoner. Disse uthevede blokkene skal aldri være sammenklappt.

**Eksempel** (`[!example]-`) - Generelle merknader eller tilleggsinformasjon. Bruk for tangentiell informasjon som noen brukere kan finne relevant. Disse uthevede blokkene starter sammenklappt.

**Eksempler:**
```md
> [!tip]- Bruk hurtigtaster
> Du kan effektivisere arbeidsflyten din ved å lære deg de mest brukte snarveiene.

> [!info]+ Dette er et betalt tillegg
> Denne funksjonen krever et betalt abonnement for å brukes.

> [!warning]+ Denne handlingen kan ikke angres
> Sletting av et hvelv er permanent. Vurder å eksportere notatene dine først.

> [!example]- Avansert bruk
> Du kan også konfigurere denne innstillingen via Graf-menyen.
```

### Lister vs. prosa

Bruk lister når du presenterer separate elementer som ikke har sterke sekvensielle eller kausale relasjoner. Bruk prosa og avsnitt når elementer bygger på hverandre, krever forklaring eller drar nytte av narrativ flyt.

**Bruk en liste for:**
- Et sett med urelaterte funksjoner
- Installasjonskrav
- Konfigurasjonsalternativer
- Feilsøkingstrinn

**Bruk prosa for:**
- Forklaringer av hvordan noe fungerer
- Arbeidsflyter med avhengigheter
- Konseptuelle oversikter
- Veiledning som krever kontekst

### Tabeller

Bruk tabeller for å sammenligne funksjoner, versjoner eller relaterte datapunkter der justering hjelper forståelsen. Unngå tabeller for enkle lister eller data med én kolonne.

**Godt brukstilfelle:**

| Funksjon | Mobil | Datamaskin |
|----------|-------|------------|
| Sync | Ja | Ja |
| Utvidelser | Nei | Ja |
| Temaer | Begrenset | Full |

### Kryssreferanser

Bruk interne wiki-lenker (`[[Notatnavn]]`) liberalt for å hjelpe brukere med å navigere til relaterte emner. Unngå imidlertid overdreven lenking:

- Ikke lenk til samme begrep flere ganger på én side
- Lenk bare når den refererte siden gir betydelig ekstra kontekst
- Bruk beskrivende lenketekst når det er nyttig: `[[Notatnavn#Seksjon|beskrivende tekst]]`

**Eksempel:**

Første omtale: «Lær om [[Introduksjon til Obsidian Sync|Obsidian Sync]] for å holde hvelvet ditt oppdatert på tvers av enheter.»
Senere omtale: «Du kan konfigurere Sync for hver enhet separat.»

### Plattformspesifikt innhold

Når du dokumenterer funksjoner som er forskjellige mellom plattformer, bruk seksjonsoverskrifter for å organisere innholdet.

Bruk `Datamaskin` og `Mobil` som underoverskrifter for å skille plattformspesifikke instruksjoner eller funksjoner.

**Anbefalt:**
```md
## Tilpass verktøylinjen

### Datamaskin

I datamaskinversjonen kan du tilpasse verktøylinjen slik:

- Endre rekkefølgen på verktøylinje-handlinger ved å dra og slippe ikonene.
- For å skjule spesifikke handlinger, høyreklikk på et tomt område og fjern haken for handlingene du vil skjule.

### Mobil

I mobilversjonen kan du tilpasse verktøylinjen gjennom innstillinger:

1. Åpne **[[Innstillinger]]**.
2. Naviger til **Utseende**.
3. Klikk på **Administrer** under **Ribbon Configuration**.
```

> [!info]+ Når bør du opprette seksjoner?
> Opprett kun separate seksjoner hvis innholdet er vesentlig forskjellig. Hvis instruksjonene er stort sett de samme med mindre variasjoner, bruk innebygde merknader i stedet.

## Ikoner og bilder

Inkluder ikoner og bilder når de gjør det enklere å forklare ting som er vanskelige å beskrive med ord, eller når du trenger å vise viktige deler av Obsidian-applikasjonen. Du kan lagre bilder i `Attachments`-mappen.

- Bildet bør gjøre teksten det følger med lettere å forstå.

 **Eksempel**: Når den er aktivert, vil [[Antall ord]]-utvidelsen opprette en ny oppføring på statuslinjen nederst.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Bilder bør være i enten `.png`- eller `.svg`-format.
- Hvis et bilde ser for stort ut i notatet, gjør det mindre utenfor Obsidian, eller juster dimensjonene som forklart i [[Bygge inn filer#Bygg inn et bilde i et notat|innbygging av et bilde i et notat]].
- I sjeldne tilfeller kan du plassere spesielt store eller komplekse bilder i en [[Uthevede blokker#Sammenklappbare uthevede blokker|sammenklappt uthevet blokk]].
- For popup-vinduer eller modaler bør bildet vise hele Obsidian-applikasjonsvinduet.
 ![[Style-guide-modal-example.png#interface]]

### Ikoner

[Lucide](https://lucide.dev/icons/)-ikoner og egendefinerte Obsidian-ikoner kan brukes sammen med detaljerte elementer for å gi en visuell representasjon av en funksjon.

**Eksempel:** I verktøylinjen til venstre, velg **Opprett ny Canvas** ![[lucide-layout-dashboard.svg#icon]] for å opprette en Canvas i samme mappe som det aktive filen.

**Retningslinjer for ikoner**

- Lagre ikoner i `Attachments/icons`-mappen.
- Legg til prefikset `lucide-` foran Lucide-ikonnavnet.
- Legg til prefikset `obsidian-icon-` foran Obsidian-ikonnavnet.

**Eksempel:** Ikonet for å opprette en ny Canvas bør hete `lucide-layout-dashboard`.

- Bruk SVG-versjonen av de tilgjengelige ikonene.
- Ikoner bør være `18` piksler i bredde, `18` piksler i høyde og ha en strekbredde på `1.5`. Du kan justere disse innstillingene i SVG-dataene.

> [!info]- Justere størrelse og strek i en SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="BREDDE" height="HØYDE" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STREK-BREDDE" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Bruk `icon`-ankeret i innebygde bilder for å justere avstanden rundt ikonet slik at det er pent justert med teksten i nærheten.
- Ikoner bør være omgitt av parenteser. ![[lucide-cog.svg#icon]]

**Eksempel**: `![[lucide-cog.svg#icon]]`

### Bilde-ankertagger

Bilde-ankertagger er tilgjengelige for å legge til dekorative endringer på innebygde bilder.

> [!warning] Advarsel for Live-forhåndsvisning
> Ikon-ankertaggene vil ikke vises korrekt i **Live-forhåndsvisning.** Bruk **Lesevisning** for å bekrefte at ankertagger er riktig brukt.

**Ikon**

`![[lucide-menu.svg#icon]]`

Ikon-ankertagger sikrer korrekt vertikal justering for ikoner som brukes til å indikere grensesnittelementer.

Det første menyikonet bruker ankertaggen ![[lucide-menu.svg#icon]], mens det andre menyikonet ( ![[lucide-menu.svg]] ) ikke gjør det.

**Grensesnitt**

`![[Vault picker.png#interface]]`

Grensesnitt-ankertaggen legger til en dekorativ bokseskygge rundt bildet. I det første bildet er grensesnitt-ankertaggen brukt.
![[Vault picker.png#interface]]
I motsetning til dette har det andre bildet ikke grensesnitt-ankeret brukt.

![[Vault picker.png]]

**Omriss**

`![[Backlinks.png#outline]]`

Omriss-ankertaggen legger til en subtil kant rundt bildet. I det første bildet er omriss-ankertaggen brukt.

> [!tip] Se nede til venstre i bildet for å se forskjellen.

![[Backlinks.png#outline]]

Det andre bildet mangler omriss-ankertaggen.

![[Backlinks.png]]

### Optimalisering

Bilder gjør at siden lastes saktere, og tar verdifull [[Introduksjon til Obsidian Publish|Publish]]-lagringsplass. Optimalisering av bilder muliggjør reduksjon i filstørrelse, men opprettholder den visuelle integriteten til bildet.

Både bilder og ikoner bør optimaliseres.

> [!info] Verktøy for optimalisering av bilder
> Her er noen anbefalte programmer for å redusere størrelsen på bildene dine.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Vi anbefaler en optimaliseringsrate på 65-75%.

## Oppsett

### Ødelagte lenker

Før du sender inn pull requesten din, vennligst sjekk for ødelagte lenker i dokumentasjonen for oversettelsen du jobber med, og korriger dem. Ødelagte lenker kan oppstå naturlig over tid, så å verifisere nøyaktigheten deres bidrar til å opprettholde kvaliteten på dokumentasjonen.

Du kan sjekke for ødelagte lenker ved å bruke [[Community-utvidelser]] eller verktøy tilgjengelige i IDE-en din.

### Beskrivelser

Denne dokumentasjonen redigeres på GitHub og publiseres online via [[Introduksjon til Obsidian Publish|Obsidian Publish]], som inkluderer [[Forhåndsvisning av lenker på sosiale medier#Beskrivelse|beskrivelser]] for sosiale kort og andre [[SEO]]-elementer.

Hvis siden du jobber med ikke har en `description` [[Egenskaper|egenskap]], vennligst legg til en. Beskrivelsen bør være 150 tegn eller færre og gi et objektivt sammendrag av sidens innhold.

**Bra**: Lær å lage maler som fanger opp og organiserer nettsidemetadata automatisk med Web Clipper.
**Kan forbedres**: Lær hvordan du lager maler som automatisk fanger opp og organiserer metadata fra nettsider med Web Clipper.

### Retningsanvisninger

Når du skriver eller omskriver [[#Instruksjoner]] for hvordan du utfører en handling i appen, sørg for å inkludere trinn for både mobil- og datamaskinversjonene.

Hvis du ikke har tilgang til en mobil- eller datamaskinenhet, vennligst nevn dette når du sender inn pull requesten din.

## Oversettelser

Oversett hele innholdet når du fullfører en oversettelse. Dette inkluderer, men er ikke begrenset til:

- Notatnavn
- Mappenavn
- Aliaser
- Vedleggsnavn
- Alternativ lenketekst
