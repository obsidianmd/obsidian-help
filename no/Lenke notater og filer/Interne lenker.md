---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Lær hvordan du lenker til notater, vedlegg og andre filer fra notatene dine ved hjelp av interne lenker.'
---
Lær hvordan du kan lenke til notater, vedlegg og andre filer fra notatene dine ved å bruke _interne lenker_. Ved å lenke notater kan du skape et kunnskapsnettverk. ^b15695

Obsidian kan automatisk oppdatere interne lenker i hvelvet ditt når du gir en fil nytt navn. Hvis du heller vil bli spurt, kan du deaktivere dette under:

**[[Innstillinger]]** → **[[Innstillinger#Filer og lenker|Files & Links]]** → **[[Innstillinger#Alltid oppdater lenker|Alltid oppdater lenker]]**.

## Støttede formater for interne lenker

Obsidian støtter følgende lenkeformater:

- Wiki-lenke: `[[Three laws of motion]]` eller `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` eller `[Three laws of motion](Three%20laws%20of%20motion.md)`

Eksemplene ovenfor er likeverdige, og de vises på samme måte i redigeringsprogrammet og lenker til det samme notatet.

> [!note] Merknad
> Når du bruker Markdown-formatet, sørg for å [URL-kode](https://en.wikipedia.org/wiki/Percent-encoding) lenkedestinasjonen. For eksempel blir mellomrom til `%20`.

Som standard genererer Obsidian lenker i wiki-lenkeformat på grunn av det mer kompakte formatet. Hvis interoperabilitet er viktig for deg, kan du deaktivere wiki-lenker og bruke Markdown-lenker i stedet.

For å bruke Markdown-formatet:

1. Åpne **[[Innstillinger]]**.
2. Under **Files & Links**, deaktiver **Use \[\[Wikilinks\]\]**.

Selv om du deaktiverer wiki-lenkeformatet, kan du fortsatt autofullføre lenker ved å skrive to firkantparenteser `[[`. Når du velger en av de foreslåtte filene, genererer Obsidian i stedet en Markdown-lenke.

> [!note] Ugyldige tegn
> En streng som inneholder følgende tegn fungerer kanskje ikke som en lenke: `# | ^ : %% [[ ]]`.
> 
> Vi anbefaler å unngå disse tegnene og å praktisere [trygge filnavnkonvensjoner](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Lenke til en fil

For å opprette en lenke mens du er i redigeringsvisning, bruk en av følgende metoder:

- Skriv `[[` i redigeringsprogrammet og velg deretter filen du vil opprette en lenke til.
- Velg tekst i redigeringsprogrammet og skriv deretter `[[`.
- Åpne [[Kommandovelger|kommandopaletten]] og velg deretter Legg til intern lenke.

![[Hurtigåpner#^search-autocomplete-large]]

Selv om du kan lenke til alle [[Aksepterte filformater]], må lenker til andre filformater enn Markdown inkludere en filextension, for eksempel `[[Figure 1.png]]`.

> [!tip] Å sette et utropstegn (!) foran en intern lenke lar deg bygge inn det lenkede innholdet. For mer informasjon, se [[Bygge inn filer]].

> [!info] Ekskluderte filer
> Filer som samsvarer med mønstrene i [[Innstillinger#Ekskluderte filer|Ekskluderte filer]] blir nedprioritert i lenkeforslag når du oppretter interne lenker.

## Lenke til en overskrift i et notat

Du kan lenke til spesifikke overskrifter i notater, også kjent som _ankerlenker_.

**Lenke til en overskrift i samme notat**

For å lenke til en overskrift i samme notat, skriv `[[#` for å få en liste over overskrifter i notatet å lenke til.

For eksempel vil `[[#Forhåndsvis en lenket fil]]` opprette en lenke til [[#Forhåndsvis en lenket fil]].

**Lenke til en overskrift i et annet notat**

For å lenke til en overskrift i et annet notat, legg til en hash (`#`) på slutten av lenkedestinasjonen, etterfulgt av overskriftsteksten.

For eksempel vil `[[Om Obsidian#Lenker er førsteklasses borgere]]` opprette en lenke til [[Om Obsidian#Lenker er førsteklasses borgere]].

**Lenke til underoverskrifter**

Du kan legge til flere hash-symboler for hver underoverskrift.

For eksempel vil `[[Hjelp og støtte#Questions and advice#Report bugs and request features]]` opprette en lenke til [[Hjelp og støtte#Questions and advice#Report bugs and request features]].

**Søke etter overskrifter på tvers av hvelvet**

For å søke etter overskrifter på tvers av hele hvelvet, bruk syntaksen `[[## overskrift]]`.

For eksempel vil `[[##` søke generelt på tvers av hvelvet, mens `[[## team]]` vil søke etter alle overskrifter som inneholder ordet _team_.

> [!info]- Skjermbilde av søk etter en overskriftslenke
>
> ![[internal-links-header.png#interface]]

## Lenke til en blokk i et notat

En blokk er en tekstenhet i notatet ditt, for eksempel et avsnitt, blokksitat eller listeelement.

Du kan lenke til en blokk ved å legge til `#^` på slutten av lenkedestinasjonen, etterfulgt av en unik blokkidentifikator. For eksempel: `[[2023-01-01#^37066d]]`. Heldigvis trenger du ikke å finne identifikatoren manuelt — når du skriver caret-tegnet (`^`), vises en liste med forslag som lar deg velge riktig blokk.

For *enkle avsnitt*, plasser et mellomrom etterfulgt av et caret-tegn `^` og blokkidentifikatoren på slutten av linjen:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

For *strukturerte blokker* (lister, sitater, uthevede blokker, tabeller), bør blokkidentifikatoren stå på en egen linje, med en tom linje før og etter:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

For *spesifikke linjer i en liste*, kan blokkidentifikatoren plasseres direkte på et punktmerking:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Vi støtter ikke lenker til spesifikke deler av sitater, uthevede blokker og tabeller.

**Søke etter blokker på tvers av hvelvet**

Du kan også søke etter blokker å lenke til fra hele hvelvet ved å bruke syntaksen `[[^^blokk]]`. Imidlertid kvalifiserer flere elementer som blokker sammenlignet med [[#Lenke til en overskrift i et notat|overskriftslenker]], så denne listen vil være mye lengre.

> [!info]- Skjermbilde av søk etter en blokklenke
> ![[link-block-heading.png#interface]]

Du kan også opprette lesbare blokkidentifikatorer ved å legge til et mellomrom etterfulgt av et caret-tegn (`^`) og identifikatoren. Blokkidentifikatorer kan kun bestå av latinske bokstaver, tall og bindestreker.

Legg for eksempel til `^quote-of-the-day` på slutten av en blokk:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Nå kan du lenke til blokken ved å skrive `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperabilitet
> Blokkreferanser er spesifikke for Obsidian og er ikke en del av standard Markdown-format. Lenker som inneholder blokkreferanser vil ikke fungere utenfor Obsidian.

## Endre visningsteksten for lenken

Som standard viser Obsidian lenketeksten slik den fremstår. For eksempel:
- `[[Eksempel]]` vises som [[Eksempel]]
- `[[Eksempel#Detaljer]]` vises som [[Eksempel#Detaljer]]

Du kan endre hvordan en lenke vises ved å tilpasse visningsteksten:

**Wiki-lenkeformat**:
Bruk en loddrett strek (`|`) for å endre visningsteksten.

- `[[Eksempel|Egendefinert navn]]` vises som [[Eksempel|Egendefinert navn]]
- `[[Eksempel#Detaljer|Seksjonsnavn]]` vises som [[Eksempel#Detaljer|Seksjonsnavn]]

**Markdown-format**:
Bruk `[Visningstekst](Lenke-URL)` for å tilpasse hvordan lenken vises.

- `[Egendefinert navn](Eksempel.md)` vises som [Egendefinert navn](Eksempel.md)
- `[Seksjonsnavn](Eksempel.md#Detaljer)` vises som [Seksjonsnavn](Eksempel.md#Detaljer)

Denne metoden er nyttig for enkelttilfeller der du vil endre hvordan en lenke ser ut i en spesifikk kontekst. Hvis du vil sette opp et alternativt lenkenavn som du kan gjenbruke i hele hvelvet, bør du vurdere å bruke et [[Aliaser|alias]] i stedet.

For eksempel, hvis du regelmessig refererer til `[[Three laws of motion]]` som `[[The 3 laws]]`, lar det å legge til «3 laws» som et alias deg å bare skrive det — uten å måtte legge til egendefinert visningstekst hver gang.

> [!tip] Tips
> Bruk [[#Endre visningsteksten for lenken|visningstekst for lenker]] når du vil tilpasse hvordan en lenke ser ut *på et bestemt sted*.
> 
> Bruk [[Aliaser|aliaser]] når du vil referere til det samme notatet med *forskjellige navn* i hele hvelvet.
^callout-internal-links-link-text

## Forhåndsvis en lenket fil

> [!note] Merknad
> For å forhåndsvise lenkede filer må du først aktivere [[Forhåndsvisning av notat]].

For å forhåndsvise en lenket fil, hold musepekeren over en intern lenke. I redigeringsmodus, trykk `Ctrl` (eller `Cmd` på macOS) mens du holder musepekeren over lenken. En forhåndsvisning av filinnholdet vises ved siden av markøren.
