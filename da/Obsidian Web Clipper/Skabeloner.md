---
permalink: web-clipper/templates
description: 'Lær at oprette skabeloner, der automatisk indfanger og organiserer metadata fra websider med Web Clipper.'
---
[[Introduktion til Obsidian Web Clipper|Web Clipper]] giver dig mulighed for at oprette skabeloner, der automatisk indfanger og organiserer metadata fra websider. Eksempelskabeloner er tilgængelige i [clipper-templates-repoen](https://github.com/kepano/clipper-templates).

## Opret eller rediger en skabelon

For at **oprette** en skabelon skal du gå til Web Clipper-indstillinger og klikke på knappen **Ny skabelon** i sidebjælken. Du kan også **duplikére** en skabelon i menuen **Mere** i øverste højre hjørne.

For at **redigere** en skabelon vælger du en skabelon fra sidebjælken. Dine ændringer gemmes automatisk.

Skabeloner gør brug af [[Variabler]] og [[Filtre]], som giver dig mulighed for at tilpasse, hvordan indhold gemmes.

## Importér og eksportér Web Clipper-skabeloner

Sådan importerer du en skabelon:

1. Åbn udvidelsen og klik på **[[Indstillinger]]**-tandhjulsikonet.
2. Gå til en vilkårlig skabelon i listen.
3. Klik på **Importér** i øverste højre hjørne, eller træk og slip dine `.json`-skabelonfil(er) et vilkårligt sted i skabelonområdet.

For at eksportere en skabelon klikker du på **Eksportér** i øverste højre hjørne. Dette vil hente skabelonens `.json`-fil. Du kan også kopiere skabelondataene til din udklipsholder via menuen **Mere**.

## Skabelonindstillinger

### Adfærd

Definér, hvordan indhold fra Web Clipper tilføjes til Obsidian:

- **Opret en ny note**
- **Tilføj til en eksisterende note**, øverst eller nederst
- **Tilføj til daglig note**, øverst eller nederst (kræver at pluginet [[Daglige noter]] er aktivt)

### Udløs automatisk en skabelon

Skabelonudløsere giver dig mulighed for automatisk at vælge en skabelon baseret på den aktuelle sides URL eller [schema.org](https://schema.org/)-data. Du kan definere flere regler for hver skabelon, adskilt af en ny linje.

Det første match i din skabelonliste bestemmer, hvilken skabelon der bruges. Du kan trække skabeloner op og ned i Web Clipper-indstillinger for at ændre rækkefølgen, som skabeloner matches i.

#### Simpel URL-matching

Simpel matching udløser en skabelon, hvis den aktuelle sides URL *starter med* det givne mønster. For eksempel:

- `https://obsidian.md` vil matche enhver URL, der starter med denne tekst.

#### Matching med regulære udtryk

Du kan udløse skabeloner baseret på mere komplekse URL-mønstre ved hjælp af regulære udtryk. Omslut dit regex-mønster med skråstreger (`/`). Husk at escape specialtegn i regex-mønstre (som `.` og `/`) med en omvendt skråstreg (`\`). For eksempel:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` vil matche enhver IMDB-referenceside.

#### Schema.org-matching

Du kan udløse skabeloner baseret på [schema.org](https://schema.org/)-data, der er til stede på siden. Brug præfikset `schema:` efterfulgt af den schema-nøgle, du vil matche. Du kan valgfrit angive en forventet værdi. For eksempel:

- `schema:@Recipe` vil matche sider, hvor schematypen er "Recipe".
- `schema:@Recipe.name` vil matche sider, hvor `@Recipe.name` er til stede.
- `schema:@Recipe.name=Cookie` vil matche sider, hvor `@Recipe.name` er "Cookie".

Schema.org-værdier kan også bruges til at [[Variabler#Schema.org-variabler|forudfylde data i skabeloner]].

### Fortolkerkontekst

Når [[Fortolker|Fortolker]] er aktiveret, kan du bruge [[Variabler#Prompt-variabler|prompt-variabler]] til at udtrække sideindhold med naturligt sprog. For hver skabelon kan du definere den [[Fortolker#Kontekst|kontekst]], som fortolkeren har adgang til.
