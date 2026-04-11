---
permalink: web-clipper/templates
description: Lær å lage maler som fanger opp og organiserer metadata fra nettsider automatisk med Web Clipper.
---
[[Introduksjon til Obsidian Web Clipper|Web Clipper]] lar deg lage maler som automatisk fanger og organiserer metadata fra nettsider. Eksempelmaler er tilgjengelige i [clipper-templates-repoet](https://github.com/kepano/clipper-templates).

## Opprett eller rediger en mal

For å **opprette** en mal, gå til Web Clipper-innstillinger og klikk på **Ny mal**-knappen i sidefeltet. Du kan også **duplisere** en mal i **Mer**-menyen øverst i høyre hjørne.

For å **redigere** en mal, velg en mal fra sidefeltet. Endringene dine lagres automatisk.

Maler bruker [[Variabler]] og [[Filtre]], som lar deg tilpasse hvordan innhold lagres.

## Importer og eksporter Web Clipper-maler

For å importere en mal:

1. Åpne utvidelsen og klikk på **[[Innstillinger]]**-tannhjulikonet.
2. Gå til en hvilken som helst mal i listen.
3. Klikk **Importer** øverst til høyre, eller dra og slipp `.json`-malfil(er) hvor som helst i malområdet.

For å eksportere en mal, klikk **Eksporter** øverst til høyre. Dette vil laste ned malens `.json`-fil. Du kan også kopiere maldataene til utklippstavlen via **Mer**-menyen.

## Malinnstillinger

### Atferd

Definer hvordan innhold fra Web Clipper legges til i Obsidian:

- **Opprett et nytt notat**
- **Legg til i et eksisterende notat**, øverst eller nederst
- **Legg til i daglig notat**, øverst eller nederst (krever at [[Daglige notater]]-utvidelsen er aktiv)

### Utløs en mal automatisk

Malutløsere lar deg automatisk velge en mal basert på gjeldende side-URL eller [schema.org](https://schema.org/)-data. Du kan definere flere regler for hver mal, atskilt med ny linje.

Det første treffet i mallisten din bestemmer hvilken mal som brukes. Du kan dra maler opp og ned i Web Clipper-innstillinger for å endre rekkefølgen malene matches i.

#### Enkel URL-matching

Enkel matching utløser en mal hvis gjeldende side-URL *starter med* det gitte mønsteret. For eksempel:

- `https://obsidian.md` vil matche enhver URL som starter med denne teksten.

#### Matching med regulære uttrykk

Du kan utløse maler basert på mer komplekse URL-mønstre ved hjelp av regulære uttrykk. Omslutt regex-mønsteret ditt med skråstreker (`/`). Husk å escape spesialtegn i regex-mønstre (som `.` og `/`) med en omvendt skråstrek (`\`). For eksempel:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` vil matche enhver IMDB-referanseside.

#### Schema.org-matching

Du kan utløse maler basert på [schema.org](https://schema.org/)-data som finnes på siden. Bruk `schema:`-prefikset etterfulgt av schema-nøkkelen du vil matche. Du kan valgfritt spesifisere en forventet verdi. For eksempel:

- `schema:@Recipe` vil matche sider der schema-typen er "Recipe".
- `schema:@Recipe.name` vil matche sider der `@Recipe.name` er til stede.
- `schema:@Recipe.name=Cookie` vil matche sider der `@Recipe.name` er "Cookie".

Schema.org-verdier kan også brukes til å [[Variabler#Schema.org-variabler|forhåndsutfylle data i maler]].

### Tolkningskontekst

Når [[Tolk|Tolk]] er aktivert, kan du bruke [[Variabler#Ledetekstvariabler|ledetekstvariabler]] for å trekke ut sideinnhold med naturlig språk. For hver mal kan du definere [[Tolk#Kontekst|konteksten]] som Tolk har tilgang til.
