---
permalink: bases/views/table
---
Tabell er en type [[Visninger|visning]] du kan bruke i [[Introduksjon til Bases|Bases]].

Velg ![[lucide-table.svg#icon]]  **Tabell** fra visningsmenyen for å vise filer som en tabell med en rad for hver fil, og kolonner for [[Egenskaper]] til den filen.

![Eksempel på en base som viser en tabellvisning med en liste over bøker](bases-noshadow.png#interface)

## Innstillinger

Innstillinger for tabellvisning kan konfigureres i [[Visninger#Visningsinnstillinger|Visningsinnstillinger]].

### Radhøyde

Radhøyde lar deg vise mer informasjon. Velg mellom **lav**, **middels**, **høy** og **ekstra høy**.

## Sammendrag

Du kan legge til sammendrag i en tabellkolonne for raskt å beregne verdier som totaler, gjennomsnitt eller antall for radene som er synlige i visningen.

Sammendrag er knyttet til visningen, ikke basen. Hver visning kan vise forskjellige sammendrag for samme kolonne.

### Legg til et sammendrag

1. Høyreklikk på kolonneoverskriften i en tabellvisning.
2. Velg ![[lucide-calculator.svg#icon]] **Oppsummer…**.
3. Velg en av de innebygde sammendragsfunksjonene, eller velg ![[lucide-square-function.svg#icon]] **Legg til sammendrag** for å definere ditt eget.

Sammendraget vises nederst i kolonnen. Når resultater er [[Visninger#Sorter og grupper resultater|gruppert]] vises sammendraget for hver gruppe øverst i gruppen.

Når sammendragslinjen er lagt til, kan du legge til flere sammendrag for andre kolonner ved å klikke på sammendragscellen. Sammendragslinjen er skjult hvis alle sammendrag fjernes.

### Innebygde sammendrag

Følgende sammendrag er tilgjengelige som standard. Alternativer kan variere avhengig av egenskapstypen.

#### Alle egenskapstyper

- **Tom**: antall rader uten verdi.
- **Fylt**: antall rader med en verdi.
- **Unik**: antall distinkte verdier.

#### Tall

- **Gjennomsnitt**: gjennomsnitt av alle numeriske verdier.
- **Maks**: største verdi.
- **Median**: medianverdi.
- **Min**: minste verdi.
- **Område**: forskjell mellom maks og min.
- **Standardavvik**: standardavvik.
- **Sum**: total av alle verdier.

#### Datoer

- **Tidligst**: den minste/eldste datoen.
- **Senest**: den største/nyeste datoen.
- **Område**: forskjell mellom tidligst og senest.

#### Avkrysningsboks

- **Avkrysset**: antall rader der avkrysningsboksen er på.
- **Ikke avkrysset**: antall rader der avkrysningsboksen er av.

### Egendefinerte sammendrag

Du kan definere ditt eget sammendrag ved hjelp av en formel:

1. I menyen ![[lucide-calculator.svg#icon]] **Oppsummer…**, velg ![[lucide-square-function.svg#icon]] **Legg til sammendrag**.
2. Gi sammendraget et navn.
3. Skriv inn en formel. Formelen kjøres over listen med verdier i den kolonnen (for eksempel ved å bruke en [[Funksjoner|funksjon]] som `values.reduce(...)`).
4. Lagre sammendraget.

Egendefinerte sammendrag er nyttige når du trenger en beregning som ikke dekkes av de innebygde alternativene.

## Snarveier

Du kan raskt navigere rundt i en tabellvisning ved hjelp av følgende mus- og [[Redigeringssnarveier|tastatursnarveier]].

- Shift-klikk oppretter et cellevalg.
- Høyreklikk et cellevalg for å få tilgang til flere handlinger for disse filene.

| Handling                                                                                                                       | Snarvei              | macOS               |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------- | ------------------- |
| Kopier de valgte cellene                                                                                                       | `Ctrl+C`             | `Cmd+C`             |
| Lim inn de valgte cellene                                                                                                      | `Ctrl+V`             | `Cmd+V`             |
| Angre endringer i egenskaper                                                                                                   | `Ctrl+Z`             | `Cmd+Z`             |
| Gjør om endringer i egenskaper                                                                                                 | `Ctrl+Shift+Z`       | `Cmd+Shift+Z`       |
| Velg alle celler i gjeldende gruppe                                                                                            | `Ctrl+A`             | `Cmd+A`             |
| Velg alle celler i en gitt retning                                                                                             | `Ctrl+Shift+Pil`     | `Ctrl+Shift+Pil`    |
| Velg kolonnen                                                                                                                  | `Ctrl+Space`         |                     |
| Velg raden                                                                                                                     | `Shift+Space`        |                     |
| Fokuser gjeldende celle — for avkrysningsbokser veksler dette avkrysningsboksen, for formler åpner dette formelredigeringsprogrammet | `Enter`              |                     |
| Gå til første kolonne                                                                                                          | `Home`               |                     |
| Gå til siste kolonne                                                                                                           | `End`                |                     |
| Naviger opp og ned etter sidehøyde                                                                                             | `PageUp`,`PageDown`  |                     |
| Tøm gjeldende cellevalg                                                                                                        | `Esc`                |                     |
| Tøm gjeldende celler                                                                                                           | `Backspace`          |                     |
| Gå til neste celle                                                                                                             | `Tab`                |                     |
| Gå til forrige celle                                                                                                           | `Shift-Tab`          |                     |
