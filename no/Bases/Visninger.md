---
permalink: bases/views
---
Visninger lar deg organisere informasjonen i en [[Introduksjon til Bases|Base]] på flere måter. En base kan inneholde flere visninger, og hver visning kan ha en unik konfigurasjon for å vise, sortere og filtrere filer.

For eksempel kan du opprette en base kalt «Bøker» som har separate visninger for «Leseliste» og «Nylig fullført».

## Verktøylinje

Øverst i en base er det en verktøylinje som lar deg samhandle med visninger og resultatene deres.

- ![[lucide-table.svg#icon]] **Visningsmeny** — opprett, rediger og bytt visninger.
- **Resultater** — begrens, kopier og eksporter filer.
- ![[lucide-arrow-up-down.svg#icon]] **Sorter** — sorter og grupper filer.
- ![[lucide-list-filter.svg#icon]] **Filter** — filtrer filer.
- ![[lucide-list.svg#icon]] **Egenskaper** — velg egenskaper å vise og opprett [[Formler|formler]].
- ![[lucide-search.svg#icon]] **Søk** — søk etter elementer ved hjelp av deres viste egenskaper.
- ![[lucide-plus.svg#icon]] **Ny** — opprett en ny fil i gjeldende visning.

## Legg til og bytt visninger

Det er to måter å legge til en visning i en base:

- Klikk på visningsnavnet øverst til venstre og velg ![[lucide-plus.svg#icon]] **Legg til visning**.
- Bruk [[Kommandovelger|kommandopaletten]] og velg **Bases: Legg til visning**.

Den første visningen i listen over visninger lastes inn som standard. Dra visninger etter ikonet deres for å endre rekkefølgen.

## Visningsinnstillinger

Hver visning har sine egne konfigurasjonsalternativer. For å redigere visningsinnstillinger:

1. Klikk på visningsnavnet øverst til venstre.
2. Klikk på høyrepilen ved siden av visningen du vil konfigurere.

Alternativt kan du *høyreklikke* på visningsnavnet i basens verktøylinje for rask tilgang til visningsinnstillingene.

## Oppsett

Visninger kan vises med forskjellige oppsett, inkludert som ![[lucide-table.svg#icon]] **tabell**, ![[lucide-list.svg#icon]] **liste**, ![[lucide-layout-grid.svg#icon]] **kort** og ![[lucide-map.svg#icon]] **kart**. Ytterligere oppsett kan legges til av [[Community-utvidelser]]. Noen oppsett er fortsatt under utvikling og krever [[Tidlig tilgang-versjoner]] av Obsidian.

| Oppsett                   | Beskrivelse                                                                                                   | App&nbsp;versjon |
| ------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------- |
| [[Tabell-visning\|Tabell]] | Vis filer som rader i en tabell. Kolonner fylles ut fra [[Egenskaper|egenskaper]] i notatene dine.            | 1.9              |
| [[Kort-visning\|Kort]]     | Vis filer som et rutenett med kort. Lar deg opprette gallerilignende visninger med bilder.                    | 1.9              |
| [[Liste-visning\|Liste]]   | Vis filer som en [[Grunnleggende formateringssyntaks#Lister\|liste]] med punktmerking eller nummererte markører. | 1.10             |
| [[Kart-visning\|Kart]]     | Vis filer som nåler på et interaktivt kart. Krever Maps-tillegget.                                           | 1.10             |


## Filtre

Åpne ![[lucide-list-filter.svg#icon]] **Filter**-menyen øverst i en base for å legge til filtre.

En base uten filtre viser alle filene i hvelvet ditt. Filtre begrenser resultatene til kun å vise filer som oppfyller bestemte kriterier. For eksempel kan du bruke filtre til kun å vise filer med en bestemt [[Tagger|tagg]] eller i en bestemt mappe. Mange filtertyper er tilgjengelige.

Filtre kan brukes på alle visninger i en base, eller bare en enkelt visning ved å velge fra de to seksjonene i ![[lucide-list-filter.svg#icon]] **Filter**-menyen.

- **Alle visninger** bruker filtre på alle visninger i basen.
- **Denne visningen** bruker filtre på den aktive visningen.

#### Komponenter i et filter

Filtre har tre komponenter:

1. **Egenskap** — lar deg velge en [[Egenskaper|egenskap]] i hvelvet ditt, inkludert [[Bases-syntaks#Filegenskaper|filegenskaper]].
2. **Operator** — lar deg velge hvordan betingelsene sammenlignes. Listen over tilgjengelige operatorer avhenger av egenskapstypen (tekst, dato, tall osv.)
3. **Verdi** — lar deg velge verdien du sammenligner med. Verdier kan inkludere matte og [[Funksjoner|funksjoner]].

#### Konjunksjoner

- **Alle følgende er sanne** er en `og`-setning — resultater vises bare hvis *alle* betingelsene i filtergruppen er oppfylt.
- **Minst én av følgende er sann** er en `eller`-setning — resultater vises hvis *noen* av betingelsene i filtergruppen er oppfylt.
- **Ingen av følgende er sanne** er en `ikke`-setning — resultater vises ikke hvis *noen* av betingelsene i filtergruppen er oppfylt.

#### Filtergrupper

Filtergrupper lar deg opprette mer kompleks logikk ved å lage kombinasjoner av konjunksjoner.

#### Avansert filterredigering

Klikk på kodeknappen ![[lucide-code-xml.svg#icon]] for å bruke den **avanserte filterredigeringen**. Dette viser den rå [[Bases-syntaks|syntaksen]] for filteret, og kan brukes med mer komplekse [[Funksjoner|funksjoner]] som ikke kan vises ved hjelp av pek-og-klikk-grensesnittet.

## Sorter og grupper resultater

Åpne ![[lucide-arrow-up-down.svg#icon]] **Sorter**-menyen for å sortere og gruppere resultatene i en visning.

Du kan ordne resultater etter én eller flere egenskaper i stigende eller synkende rekkefølge. Dette gjør det enkelt å liste notater etter navn, sist redigert-tidspunkt eller en annen egenskap — inkludert formler.

Du kan også gruppere resultater etter en egenskap for å organisere lignende elementer i visuelt adskilte seksjoner. For øyeblikket støtter Obsidian gruppering etter kun én egenskap.

### Legg til en sortering

1. Åpne ![[lucide-arrow-up-down.svg#icon]] **Sorter**-menyen øverst i visningen.
2. Velg egenskapen du vil sortere (eller gruppere) etter.
3. Hvis du har flere sorteringer, dra dem opp eller ned med ![[lucide-grip-vertical.svg#icon]] drahåndtaket for å endre prioriteten.

Alternativene for å ordne resultater avhenger av egenskapstypen:

- **Tekst**: sorter *alfabetisk* (A→Å) eller i *omvendt alfabetisk rekkefølge* (Å→A).
- **Tall**: sorter fra *minste til største* (0→1) eller *største til minste* (1→0).
- **Dato og tid**: sorter etter *gammel til ny* eller *ny til gammel*.

### Fjern en sortering

1. Åpne ![[lucide-arrow-up-down.svg#icon]] **Sorter**-menyen øverst i visningen.
2. Klikk på ![[lucide-trash-2.svg#icon]] papirkurvknappen ved siden av sorteringen eller gruppen du vil fjerne.

## Begrens, kopier og eksporter resultater

### Begrens resultater

*Resultater*-menyen viser antall resultater i visningen. Klikk på resultatknappen for å begrense antall resultater og få tilgang til ytterligere handlinger.

### Kopier til utklippstavlen

Denne handlingen kopierer visningen til utklippstavlen din. Når den er i utklippstavlen kan du lime den inn i en Markdown-fil, eller i andre dokumentapper inkludert regneark som Google Sheets, Excel og Numbers.

### Eksporter CSV

Denne handlingen lagrer en CSV av gjeldende visning.

## Bygg inn en visning

Du kan bygge inn base-filer i [[Bygge inn filer|en hvilken som helst annen fil]] ved hjelp av `![[Fil.base]]`-syntaksen. Den første visningen i listen vil bli brukt. Du kan endre rekkefølgen ved å dra visninger i visningsmenyen.

For å spesifisere standardvisningen for en innebygging, bruk `![[Fil.base#Visning]]`.
