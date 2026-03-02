---
permalink: baser/views/tabel
---
Tabeller er en [[Views|viewtype]], som du kan anvende i [[Introduktion til Baser|Baser]].

Vælg ![[lucide-table.svg#icon]]  **Tabel** fra view menuen for at viser filer som en tabel med rækekr for hver fil, og kolonner for filens [[Egenskaber|egenskaber]].

![Eksempel på en base, som viser et tebelview med en liste af bøger](bases-noshadow.png#interface)

## Indstillinger

INdstillingerne for tabelviews kan konfigureres i [[Views#View indstillinger|View indstillingerne]].

### Rækkehøjde

Du kan vise mere information ved at gøre rækekrne højere. Vælg mellem **lille**, **medium**, **stor**, eller **ekstra stor**.

## Summaries

Du kan tilføje _summaries_ til en tabel for hurtigt at beregne værdier, som fx. totaler gennemsnit eller tælle antallet af rækker, som kan ses i viewet.

_Summaries_ er tilknyttet viewet, og ikke basen. Hvert view akn vise forskellige _summaries_ for den samme kolonne.

### Sådan tilføjer du et _summary_

1. Højreklik på kolonne titlen i tabelviewet
2. Vælg ![[lucide-calculator.svg#icon]] **Summér…**
3. Vælg en af de indbyggede summeringsfunktioner, eller vælg ![[lucide-square-function.svg#icon]] **Tilføj summering** for at definere din egen

Summeringen vises i bunden af kolonnen. Når resultater er [[Views#Sådan sorterer og grupperer du resultater|grupperet]], vil summeringen for hver gruppe vises i toppen af gruppen.

Så snart summeringen baren er tilføjet, kan du tilføje flere sumeringer for andre kolonner ve at klikke på summeringscellen. Summeringsbaren skjules, hvis alle summeringer fjernes.

### Indbyggede summeringer

Som standard er følgende summeringer tilgængelige. Valgmuligheder varierer afhængig af egenskabstypen. 

#### Alle egenskabstyper

- **Empty**: tæller antallet af rækker uden en værdi
- **Filled**: tæller antallet af rækker med en værdi
- **Unique**: antallet af unikke værdier

#### Tal

- **Average**: gennemsnittet af alle numeriske værdier
- **Max**: største værdi
- **Median**: median værdien
- **Min**: mindste værdi
- **Range**: forskellem mellem maksimum og minimum
- **Stddev**: standardafvigelsen
- **Sum**: total antal værdier

#### Datoer

- **Earliest**: Den ældste dato
- **Latest**: Den nyeste dato
- **Range**: forskellen mellem den ældste og nyeste dato

#### Afkrydsningsfelt

- **Checked**: antallet af rækker, hvor der er sat flueben
- **Unchecked**: antalle af rækker, hvor der ikke er sat flueben

### Brugerdefinerede summeringer

Du kan definere dine egen summeringer ved hjælp af en formel:

1. Vælg ![[lucide-square-function.svg#icon]] **Tilføj summering** i ![[lucide-calculator.svg#icon]] **Summér…** menuen
2. Giv summeringen et navn
3. Angiv en formel. Formlen benyttes på hele listen af værdier i den kolonne (fx.  [[Functioner|funktioner]] som `værdier.reduce(...)`)
4. Gem summeringen

Brugerdefinerede summeringer er brugbare, når du har brug for en beregning, som ikke er dækket af standardmulighederne.

## Tastaturgenveje

Du kan flytte hurtigt rundt i et tabelview med følgende muse- og [[Tastaturgenveje|tastaturgenveje]].

- Skift + klik med musen vælger en celle
- Højreklik på en celle for at tilgå yderligere funktioner for disse filer

| Aktion                                                                                                          | Genvej            | macOS              |
| --------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ |
| Kopiér de valgte celler                                                                                         | `Ctrl+C`            | `Cmd+C`            |
| Indsæt de valgte celler                                                                                        | `Ctrl+V`            | `Cmd+V`            |
| Fortryd egenskabsændringer                                                                                      | `Ctrl+Z`            | `Cmd+Z`            |
| Gentag egenskabsændringer                                                                                      | `Ctrl+Skift+Z`      | `Cmd+Skift+Z`      |
| Vælg alle celler i den nuværende gruppe                                                                           | `Ctrl+A`            | `Cmd+A`            |
| Vælg alle celler i den giuvne retning                                                                           | `Ctrl+Skift+Pil`  | `Ctrl+Skift+Pil` |
| Vælg kolonnen                                                                                               | `Ctrl+Mellemrum`        |                    |
| Vælg rækken                                                                                                  | `Shift+Mellemrum`       |                    |
| Fokusér på den nuværende celle — dette vil få afkrydningsfelter ti lat skifte, og for formler vil det åbne formeleditoren | `Retur`             |                    |
| Gå til den første kolonne                                                                                          | `Hjem`              |                    |
| Gå til den sidste kolonne                                                                                           | `Slut`               |                    |
| Navigér en side op eller ned                                                                             | `SideOp`,`SideNed` |                    |
| Ryd de væalgte nuværende celler                                                                                | `Esc`               |                    |
| Rydder de nuværende celler                                                                                         | `Tilbage`         |                    |
| Gå til næste celle                                                                                             | `Tab`               |                    |
| Gå til foregående celle                                                                                         | `Skift-Tab`         |                    |
