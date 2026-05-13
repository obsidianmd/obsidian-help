---
permalink: settings
publish: true
mobile: true
description: Lær hvordan du tilpasser Obsidian gjennom innstillingsgrensesnittet.
---
Innstillinger lar deg tilpasse Obsidian-opplevelsen din. Konfigurer generelle alternativer, redigeringspreferanser, utseende, hurtigtaster, og administrer både kjerneutvidelser og community-utvidelser.

## Åpne Innstillinger

### Skrivebord

I det [[Sidefelt#Åpne skjulte sidefelt|venstre sidefeltet]], velg **[[Innstillinger]]** ![[lucide-cog.svg#icon]]. Du kan også åpne Innstillinger med [[Kommandovelger|kommandopaletten]].

### Mobil

I det venstre sidefeltet, velg **[[Innstillinger]]** ![[lucide-cog.svg#icon]].

## Organisering av innstillinger

Innstillinger er organisert i følgende kategorier:

- **Alternativer** — Grunnleggende applikasjonsinnstillinger inkludert [[#Generelt]], [[#Redigeringsprogram]], [[#Filer og lenker]], [[#Utseende]] og [[#Hurtigtaster]].
- **[[Kjerneutvidelser]]** — Innebygde utvidelser som følger med Obsidian.
- **[[Community-utvidelser]]** — Tredjepartsutvidelser installert fra fellesskapet.

## Generelt

Generelt-siden inneholder versjonsinformasjon, oppdateringsinnstillinger, språkpreferanser og kontoadministrasjon.

### Versjon og oppdateringer

Se din nåværende Obsidian-versjon og installasjonsprogramversjon øverst på siden. Velg **Se etter oppdateringer** for å manuelt se etter nye versjoner, eller velg **[Les endringsloggen](<https://obsidian.md/changelog/>)** for å se versjonsnotater.

**Automatiske oppdateringer**

Når aktivert, sjekker Obsidian automatisk etter nye versjoner og varsler deg når oppdateringer er tilgjengelige.

**Få Insider-versjoner**

Auto-oppdater til de siste [[Tidlig tilgang-versjoner|tidlig tilgang-versjonene]]. Disse versjonene inkluderer nye funksjoner, men kan være mindre stabile.

> [!info]+ Catalyst-lisens påkrevd
> Dette alternativet er kun tilgjengelig for brukere med en [[Catalyst-lisens]].

### Språk

Velg ditt foretrukne språk for Obsidian-grensesnittet. Velg **[[Oversettelser|Lær hvordan du legger til et nytt språk i Obsidian]]** for å bidra med en oversettelse.

### Hjelp

Velg **[[Hjem|Åpne]]** for å få tilgang til hjelperessurser, inkludert dokumentasjon, fellesskapsforum og feilsøkingsguider.

### Konto

Administrer Obsidian-kontoen din og lisenser.

**Kontoen din**

Se kontoinformasjonen din, inkludert brukernavn og e-post. Velg **[Administrer](https://obsidian.md/account)** for å få tilgang til kontoinnstillinger, eller velg **Logg ut** for å logge ut i appen.

**Catalyst-lisens**

Se statusen på din Catalyst-lisens. Hvis du har en aktiv [[Catalyst-lisens]], vises lisensnivået ditt her.

**Kommersiell lisens**

Hvis du støtter [Obsidian for arbeid](<https://obsidian.md/blog/free-for-work/>), velg **Aktiver** for å skrive inn en kommersiell lisensnøkkel, eller velg **[Kjøp](https://obsidian.md/account/commercial)** for å kjøpe en lisens. Velg **[[Kommersiell lisens|Les mer]]** for informasjon om kommersielle lisenser.

### Avansert

#### Varsle ved treg oppstart

Når aktivert, viser Obsidian et varsel hvis oppstarten er uvanlig treg. Varselet inkluderer diagnostisk informasjon om hva som forårsaker forsinkelsen. Velg tidtaker-ikonet ![[lucide-timer.svg#icon]] ved siden av denne innstillingen for å [[Hjelp og støtte#Sjekk oppstartstid|sjekke oppstartstiden din]].

## Redigeringsprogram

Redigeringsprogram-siden inneholder innstillinger for hvordan du ser og redigerer notater.

### Alltid fokuser på nye tabs

Hvis du åpner en lenke i en ny fane, hopp til den med en gang.

### Standardvisning for nye faner

Standardvisningen som en ny Markdown-filfane åpnes i. Velg mellom [[Visninger og redigeringsmodus#Lesevisning|Lesevisning]] eller [[Visninger og redigeringsmodus#Redigeringsvisning|Redigeringsvisning]].

### Standard redigeringsmodus

Standard redigeringsmodus som en ny fane starter med. Velg mellom [[Visninger og redigeringsmodus#Live-forhåndsvisning|Live-forhåndsvisning]] eller [[Visninger og redigeringsmodus#Kildemodus|Kildemodus]].

### Editor status

Vis redigeringsmodus-bryteren i [[Statuslinje|statuslinjen]].

### Visning

#### Lesbar linjelengde

Begrenser lengden på hver linje. Mindre innhold får plass på skjermen, men lange avsnitt blir enklere å lese.

#### Nøye linjeskift

Markdown-spesifikasjoner ignorerer enkle [[Grunnleggende formateringssyntaks#Linjeskift|linjeskift]] i lesevisning. Slå dette av for å gjøre enkle linjeskift synlige.

#### Egenskaper i dokument

Velg hvordan [[Egenskaper|egenskaper]] vises øverst i notater. Velg **kilde** for å vise egenskaper som rå YAML.

#### Skjul under overskrift

[[Folding|Fold]] alt innhold under en overskrift ved å velge skjul-ikonet ved siden av den.

### Skjul under innrykk

[[Folding|Fold]] deler av et innrykk, som lister, ved å velge skjul-ikonet.

#### Linjenumre

Viser linjenummer ved siden av innholdet.

#### Innrykksguider

Vis vertikale relasjonslinjer mellom listeelementer.

#### Høyre-til-venstre (RTL)

Setter standard tekstretning for notater til høyre-til-venstre.

#### Automatiske parenteser

Lukker parenteser og anførselstegn automatisk.

#### Automatisk Markdown syntaks

Setter automatisk inn symboler for kursiv og fet skrift.

#### Smarte lister

Tar hånd om innrykk og listetegn for deg.

#### Bruk tab-er

Bruk tabulatorer for innrykk ved å trykke Tab-tasten. Slå dette av for å bruke 4 mellomrom for innrykk.

#### Auto-konverter HTML

Konverter automatisk HTML til Markdown ved innliming og dra-og-slipp fra nettsider.

Bruk `Ctrl/Cmd+Shift+V` for å lime inn HTML uten konvertering.

### Atferd

#### Stavekontroll

Skrur på stavekontroll. Velg tannhjul-ikonet for å fjerne lagrede elementer fra den egendefinerte ordboken.

#### Språk for stavekontroll

**Windows og Linux:**

Velg språkene stavekontrollen skal bruke. Velg pluss (+)-ikonet for å legge til språk. For å fjerne et språk, velg X ved siden av det.

**macOS:**

Den innebygde stavekontrollen oppdager automatisk språket som brukes av operativsystemet.

#### Tab size

Antall mellomrom et tabulatortegn gjengis som.

### Avansert

#### Vim-hurtigtaster

Lar deg bruke hurtigtaster som i Vim.

## Filer og lenker

Filer og lenker-siden inneholder innstillinger for filhåndtering, lenker og hvelvatferd.

### Standard plassering av nytt notat

Hvor nye notater plasseres. Alternativene inkluderer:

- **Hvelvets rotmappe** — Notater opprettes i roten av hvelvet ditt.
- **Samme mappe som filen er i** — Notater opprettes i samme mappe som det aktive notatet.
- **Egendefinert mappe (spesifisert nedenfor)** — Notater opprettes i en bestemt mappe du velger.

### Standard plassering for nye vedlegg

Hvor nye [[Vedlegg|vedlegg]] plasseres. Alternativene inkluderer:

- **Hvelvets rotmappe** — Vedlegg plasseres i roten av hvelvet ditt.
- **Egendefinert mappe (spesifisert nedenfor)** — Vedlegg plasseres i en bestemt mappe du velger.
- **Samme mappe som filen er i** — Vedlegg plasseres i samme mappe som det aktive notatet.
- **I undermappe under gjeldende mappe** — Vedlegg plasseres i en undermappe i det gjeldende notatets mappe.

### Lenker

#### Format på nye lenker

Hvilke lenker som settes inn ved automatisk generering av [[Interne lenker|interne lenker]]. Alternativene inkluderer:

- **Kortest mulig søkesti** — Bruker den korteste unike stien til den lenkede filen.
- **Relativ sti til fil** — Bruker en sti relativ til gjeldende fil.
- **Absolutt sti i hvelvet** — Bruker den fulle stien fra hvelvroten.

#### Alltid oppdater lenker

Når aktivert, oppdaterer Obsidian automatisk interne lenker når du gir en fil nytt navn. Slå dette av for å bli spurt om å oppdatere lenker etter omdøping.

#### Bruk wiki-lenker

Auto-generer wiki-lenker for `[[lenker]]` og `![[bilder]]` i stedet for Markdown-lenker og bilder. Deaktiver dette alternativet for å generere Markdown-lenker i stedet.

#### Vis alle filtyper

Vis filer med alle filtyper selv om Obsidian ikke kan åpne dem direkte, slik at du kan lenke til dem og se dem i filutforskeren og hurtigbytteren.

### Papirkurv

#### Bekreft filsletting

Spør før sletting av en fil.

#### Slettede filer

Hva du ønsker å gjøre med slettede filer. Alternativene inkluderer:

- **Flytt til systemets papirkurv** — Filer flyttes til operativsystemets papirkurv.
- **Flytt til Obsidians papirkurv** — Filer flyttes til `.trash`-mappen i hvelvet ditt.
- **Slett permanent** — Filer slettes permanent og kan ikke gjenopprettes.

### Avansert

#### Ekskluderte filer

Ekskluderte filer vil bli skjult i [[Søk]], [[Grafvisnining|grafvisning]] og ulenkede omtaler ([[Lenker tilbake]] og [[Outgoing Links]]), og mindre synlige i [[Hurtigåpner|hurtigbytteren]] og lenkeforslag. Velg **Administrer** for å konfigurere ekskluderte filer.

#### Overstyr konfigurasjonsmappe

Bruk en annen [[Konfigurasjonsmappe|konfigurasjonsmappe]] enn standardmappen. Må starte med et punktum.

#### Tillat URI-callbacker

Aktiver bruk av x-callback-url gjennom x-success eller x-error ved håndtering av [[Obsidian URI|Obsidian URI-er]].

#### Bygg hvelvbuffer på nytt

Gjenoppbygger hvelvets [[Hvordan Obsidian lagrer data#Metadatabuffer|metadatabuffer]]. Gjenoppbygging av buffer kan ta fra noen sekunder til flere minutter avhengig av størrelsen på hvelvet ditt. Velg **Bygg på nytt** for å starte prosessen.

## Utseende

Utseende-siden inneholder innstillinger for å tilpasse hvordan Obsidian ser ut.

### Base theme

Velg Obsidians standard fargevalg. Alternativene inkluderer:

- **Tilpass til systemet** — Samsvarer med operativsystemets lys- eller mørkmodus.
- **Lys** — Bruker lys modus.
- **Mørk** — Bruker mørk modus.

### Aksentfarge

Velg aksentfargen som brukes i hele appen. Velg fargevelgeren eller tilbakestill-ikonet for å tilpasse.

### Temaer

Administrer installerte [[Temaer|temaer]] og bla gjennom community-temaer. Velg **Administrer** for å se og installere temaer. Nedtrekkslisten viser ditt aktive tema. Mappeikonet ![[lucide-folder-open.svg#icon]] åpner temaer-mappen i din [[Konfigurasjonsmappe|konfigurasjonsmappe]].

### Nåværende community-temaer

Viser antall community-temaer du har installert.

### Skrifttype

#### Skrifttype for grensesnitt

Angi grunnskrift for hele Obsidian. Velg **Administrer** for å velge en egendefinert skrifttype eller skriv inn et skrifttypenavn.

#### Tekstskrift

Skrifttype for redigering og lesing. Velg **Administrer** for å velge en egendefinert skrifttype eller skriv inn et skrifttypenavn.

#### Fastbredde-skrift

Skrifttype for kodeblokker og metadata. Velg **Administrer** for å velge en egendefinert skrifttype eller skriv inn et skrifttypenavn.

#### Skriftstørrelse

Skriftstørrelse i piksler som påvirker redigerings- og lesevisninger. Juster med glidebryteren.

#### Rask justering av skriftstørrelse

Juster skriftstørrelsen med `Ctrl+Rull` (Windows/Linux) eller `Cmd+Rull` (macOS), eller bruk styreflatens klype-zoom-bevegelse.

### Grensesnitt

#### Innebygd tittel

Viser filnavnet som en redigerbar tittel innebygd med filinnholdet. Den innebygde tittelen fungerer som en overskrift i Obsidian, men legger ikke til en overskrift i notatet ditt.

#### Vis tittellinje for fane

Vis toppteksten øverst i hver fane.

#### Vis verktøylinje

Vis vertikal verktøylinje på siden av vinduet. Les mer om [[Verktøylinje|verktøylinjen]].

#### Ribbon menu

Konfigurer hvilke kommandoer som vises i verktøylinjemenyen. Velg **Administrer** for å tilpasse.

> [!info]+ Verktøylinjekonfigurasjon på mobil
> På mobil fungerer verktøylinjetilpasning annerledes. Se [[Verktøylinje#Mobil|Verktøylinjetilpasning på mobil]] for detaljer.

### Avansert

#### Zoomnivå

Styrer appens totale zoomnivå. Juster med glidebryteren.

#### Native menyer

Menyer i hele appen vil samsvare med operativsystemet. De vil ikke bli påvirket av temaet ditt.

#### Vindusrammestil

Bestemmer stilen på tittellinjen i Obsidian-vinduer. Krever full omstart for å tre i kraft. Alternativene inkluderer:

- **Obsidian-ramme** — Bruker Obsidians egendefinerte vindusramme.
- **Opprinnelig ramme** — Bruker operativsystemets standard vindusramme.
- **Skjult ramme** — Skjuler tittellinjen fullstendig.

#### Tilpasset app-ikon

Angi et tilpasset ikon for appen. Velg **Velg** for å velge en ikonfil (`.icns`, `.ico`, `.png`, eller `.svg`). Les mer om [[Utseende#Tilpasset app-ikon|tilpassede app-ikoner]].

#### Gjennomsiktig vindu

Skru på gjennomsiktighet for å gi en følelse av dybde. Funker best i mørkt modus. Støttes ikke av Linux.

> [!info]+ Kun macOS
> Denne funksjonen er primært designet for macOS. Les mer om [[Utseende#Gjennomsiktighet|gjennomsiktighet]].

#### Hardware Acceleration

Slår på maskinvareakselerasjon, som bruker GPU-en din for å gjøre Obsidian jevnere. Hvis du slår dette av, kan appytelsen bli kraftig redusert, men det kan løse noen sjeldne problemer.

### CSS-utdrag

Administrer og vis [[CSS-utdrag]] lagret i hvelvet ditt. CSS-utdrag lagres i `/hvelv/.obsidian/snippets/`. Velg oppdater-ikonet for å laste utdrag på nytt, eller mappeikonet ![[lucide-folder-open.svg#icon]] for å åpne utdragsmappen.

## Hurtigtaster

[[Hurtigtaster]]-siden lar deg se, angi og tilpasse [[Redigeringssnarveier|tastatursnarveier]] for kommandoer i Obsidian.

Bruk søkefeltet for å filtrere kommandoer, og velg filterikonet for å kun vise kommandoer med tildelte hurtigtaster. For å legge til en hurtigtast, velg pluss (+)-ikonet ved siden av en kommando. For å fjerne en hurtigtast, velg X-ikonet ved siden av tastekombinasjonen.

## Kjerneutvidelser

[[Kjerneutvidelser]] er innebygde utvidelser som følger med Obsidian. Hver utvidelse legger til spesifikk funksjonalitet i appen.

For å aktivere eller deaktivere en kjerneutvidelse, velg bryteren ved siden av utvidelsesnavnet. Velg pluss-ikonet ![[lucide-plus-circle.svg#icon]] for å se [[Hurtigtaster|hurtigtastene]] for utvidelsen. Velg innstillinger-ikonet ![[lucide-settings.svg#icon]] for å åpne utvidelsens innstillingsside.

Bruk søkefeltet for å filtrere utvidelser etter navn.

## Community-utvidelser

[[Community-utvidelser]] er tredjepartsutvidelser laget av Obsidian-fellesskapet. Bla gjennom og installer utvidelser ved å velge **Bla gjennom**.

### Begrenset modus

[[Utvidelsessikkerhet#Begrenset modus|Begrenset modus]] deaktiverer alle community-utvidelser for sikkerhet. Velg **Turn on** for å aktivere begrenset modus.

### Gjeldende tillegg

Viser antall community-utvidelser du har installert. Velg **Se etter oppdateringer** for å sjekke etter utvidelsesoppdateringer.

### Installerte tillegg

Se og administrer dine installerte community-utvidelser. Bruk søkefeltet for å filtrere utvidelser etter navn. Hver utvidelse har ikoner for innstillinger, hurtigtaster, finansiering, avinstallering og en bryter for å aktivere eller deaktivere den.
