---
permalink: ios
aliases:
  - iOS app
---
Obsidian mobilappen til iOS og iPadOS giver kraftfulde noteringsmuligheder til din iPhone og iPad. Du kan downloade den fra [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Denne side dækker iOS-specifikke funktioner, herunder widgets, Siri-integration og Genveje.

## Synkronisering

Du kan finde information om synkronisering af noter mellem enheder her: [[Synkroniser dine noter på tværs af enheder]].

## Widgets

Obsidian til iOS tilbyder flere widgets til hurtige handlinger i din boks.

> [!note] Note
> Widgets er tilgængelige på iOS og iPadOS 18 og nyere.
> Widgets er ikke tilgængelige, når du bruger "Kræv Face ID" til at låse appen op.


### Låseskærm og Kontrolcenter widgets

Låseskærm og Kontrolcenter widgets giver dig mulighed for at:
- Oprette en ny note
- Åbne en bestemt note
- Åbne daglig note
- Åbne søgning
- Åbne Obsidian

### Hjemmeskærm widgets

Hjemmeskærm widgets giver dig mulighed for at:
- Oprette en note
- Se en note
- Åbne din daglige note

### Tilpasning af widgets

Du kan tilpasse widgets til din arbejdsgang, f.eks. vælge hvilken boks der skal bruges eller angive en bestemt note der skal åbnes.

- **Hjemmeskærm widgets:** Tryk og hold på widgetten, vælg derefter **Rediger widget**.
- **Låseskærm widgets:** Tryk og hold på din låseskærm, tryk på **Tilpas**, vælg låseskærmen, og tryk derefter på den widget du vil tilpasse.
- **Kontrolcenter widgets:** Åbn Kontrolcenter, tryk på **+**-knappen øverst til venstre for at begynde redigering, og tryk derefter på den widget du vil tilpasse.

**Ny note** widget-konfigurationsindstillinger:

![[ios-new-note-configuration.png|400]]

**Vis note** widget-konfigurationsindstillinger:

![[ios-view-note-configuration.png|400]]

## Genveje

Obsidian integrerer med Apples Genveje-app, så du kan oprette kraftfulde automatiseringer. Tilgængelige genveje inkluderer:

- **Åbn en note** — Åbn en bestemt note i din boks
- **Opret en ny note** — Opret en ny note i din boks
- **Åbn daglig note** — Spring direkte til dagens daglige note
- **Indfang til daglig note** — Tilføj tekst til begyndelsen eller slutningen af den daglige note uden at åbne Obsidian-appen
- **Indfang til bogmærke** — Tilføj tekst til begyndelsen eller slutningen af en bogmærket note uden at åbne Obsidian-appen

Indfangningsgenveje er særligt nyttige til hurtig notering, da de giver dig mulighed for at tilføje indhold til en note i baggrunden.

## Delearket

Obsidians delearket lader dig indfange indhold fra websider. Det fungerer også med apps som YouTube og andre sociale netværk.

> [!note]
> - Det native delearket er tilgængeligt på iOS og iPadOS 18 og nyere.
> - Delearkets funktioner beskrevet i dette afsnit kræver Obsidian 1.13.0 eller nyere.

Brug delearket til hurtigt at sende indhold fra en anden app til Obsidian:
1. I en anden app skal du trykke på **Del**-knappen.
2. Vælg **Obsidian**.
3. Vælg en placering.
4. Gennemse eller rediger det indfangede indhold.
5. Tryk på **Gem**.

![[ios-share-sheet-extension.png|400]]

### Placeringer

Placeringer lader dig bestemme, hvor det delte indhold skal gemmes, før du gemmer det.

Placeringer kan indfange til:
- **Ny note** — Opret en ny note i en boks eller mappe.
- **Daglig note** — Tilføj indhold til begyndelsen eller slutningen af dagens daglige note.
- **Bogmærket note** — Tilføj indhold til begyndelsen eller slutningen af en bogmærket note.
- **Note** — Vælg en eksisterende note i din boks.
- **Nyt bogmærke** — Gem en delt URL til Obsidian-bogmærker.

![[ios-share-sheet-locations.png|400]]

### Tilpasning af placeringer

Du kan oprette placeringer til almindelige arbejdsgange, f.eks. gemme artikler i en indbakke, tilføje citater til din daglige note eller tilføje links til bogmærker.

Sådan tilpasser du placeringer:

1. Åbn Obsidian fra iOS-delearket.
2. Tryk på den aktuelle placering i værktøjslinjen.
3. Tryk på **+**-knappen for at oprette en ny placering, eller vælg en eksisterende placering for at redigere.
4. Vælg boks, adfærd og valgfrie indstillinger.

Afhængigt af `Adfærd`-typen kan du konfigurere indstillinger som:
- Mappe
- Skabelon
- Bogmærkegruppe
- Tilføj til begyndelse eller slutning
- Om delte links indfanger **Fuld tekst** eller kun **URL**

![[ios-share-sheet-add-location.png|400]]

### Brug af en skabelon ved deling

Du kan bruge en skabelon, når du deler indhold fra delearket. Skabeloner lader dig formatere indfanget webindhold med detaljer som sidetitel, forfatter, kildewebsted og udgivelsesdato.

Sådan opsætter du en placering med en skabelon:

1. Åbn Obsidian fra iOS-delearket.
2. Tryk på den aktuelle placering i værktøjslinjen.
3. Tryk på **+**-knappen for at oprette en ny placering.
4. Indtast et navn til placeringen.
5. Vælg en boks.
6. Sæt **Adfærd** til **Ny note**.
7. I sektionen **Valgfrit** skal du trykke på **Skabelon**.
8. Vælg en note fra din boks, der skal bruges som skabelon.
9. Tryk på **Gem** for at gemme placeringen.

![[ios-share-sheet-set-template.png|400]]

Når du deler et link med denne placering, anvender Obsidian først skabelonen og tilføjer derefter det delte indhold.

Understøttede skabelonpladsholdere:

| Pladsholder | Beskrivelse |
| --- | --- |
| `{{author}}` | Artiklens forfatter |
| `{{description}}` | Beskrivelse eller resumé af artiklen |
| `{{domain}}` | Webstedets domænenavn |
| `{{favicon}}` | URL til webstedets favicon |
| `{{image}}` | URL til artiklens hovedbillede |
| `{{published}}` | Artiklens udgivelsesdato med standarddatoformat |
| `{{published: YYYY-MM-DD}}` | Udgivelsesdato med brugerdefineret datoformat |
| `{{site}}` | Webstedets navn |
| `{{title}}` | Artiklens titel |
| `{{url}}` | Artiklens URL |
| `{{wordCount}}` | Samlet antal ord i det udtrukne indhold |

Du kan også bruge standard skabelonpladsholdere for dato og tid:

| Pladsholder | Beskrivelse |
| --- | --- |
| `{{date}}` | Aktuel dato |
| `{{date: YYYY-MM-DD}}` | Aktuel dato med brugerdefineret format |
| `{{time}}` | Aktuelt tidspunkt |
| `{{time: HH:mm}}` | Aktuelt tidspunkt med brugerdefineret format |

## Siri-integration

Du kan bruge Siri-stemmekommandoer til at interagere med Obsidian:

- "Capture using Obsidian"
- "Capture to Obsidian"
- "Open my daily note in Obsidian"
- "Search in Obsidian"

## Spotlight-integration

Når du søger efter "Obsidian" i iOS Spotlight, ser du hurtige handlinger:
- Ny note
- Søg
- Daglig note
