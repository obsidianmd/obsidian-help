---
description: Sådan håndterer du noter i Obsidian.
mobile: false
permalink: manage-notes
publish: true
aliases:
  - håndter-noter
  - Håndter noter
  - Filer og mapper/Håndter noter
---
Du kan håndtere filer og mapper på foskellige måder, fx. ved at benytte [[Brugergrænseflade/Genvejstaster|genvejstaster]], [[Kommandopaletten|kommandopaletten]] eller med [[Stifinder|stifinderen]].

## Opret en ny note

Sådan opretter du en ny fil:

1. Tryk `Ctrl+N` (eller `Cmd+N` på macOS).
2. Angiv navnet på noten og tryk `Retur` for at redigere noten

Du kan også oprette noter ved hjælpe af [[Stifinder#Opret en ny note|stifinderen]], eller ved at vælge **Opret ny note** fra [[Kommandopaletten|kommandopaletten]].


> [!hint] Systemtegnsbegrænsning
> Obsidian respekterer de systemtegsbegrænsninger, som det operativsystem, du anvender, benytter sig af, når du opretter en note. Hvis du har planer om at [[Synkroniser dine noter på tværs af enheder|synkronisere dine noter på tværs af enheder]], så skal du sikre dig, at filnavnene er [sikre på andre operativsystemer](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Åbn filer uden for din boks

På desktop kan du åbne og redigere individuelle Markdown-filer uden for din boks. Filer åbnes i dit nuværende vindue og forbliver på deres oprindelige placering.

> [!note] Kræver Obsidian 1.14 og det nyeste installationsprogram
> [[Opdatér Obsidian#Installer updates|Opdater dit installationsprogram]] ved at downloade Obsidian fra [obsidian.md/download](https://obsidian.md/download) og geninstallere applikationen.

Sådan åbner du en Markdown-fil:

1. Åbn [[Kommandopaletten|kommandopaletten]].
2. Vælg **Åbn fil uden for boksen...**.
3. Vælg en Markdown-fil på din computer.

Du kan også bruge dit operativsystems **Åbn med**-menu og vælge **Obsidian**. For at åbne Markdown-filer i Obsidian som standard skal du indstille det som standardapplikationen for `.md`-filer.

Billedindlejringer og links til andre lokale filer opløses relativt til Markdown-filens mappe. Brug [[Disposition|dispositionen]] til at navigere mellem overskrifter og [[Udgående links|udgående links]] til at gennemse linkede filer.

### Forhåndsvis filer med Quick Look

På macOS kan du vælge en Markdown-fil i Finder og trykke `Mellemrum` for at forhåndsvise den med **Quick Look**. Quick Look-forhåndsvisninger fungerer, selv når Obsidian er lukket.

## Omdøb en note

Sådan omdøber du den aktive note:

1. Tryk på navnet øverst på den aktive note (eller tryk `F2`)
2. Angiv det nye navn og tryk `Retur`

Når du omdøber en fil vil Obsidian automatisk opdatere alle links til den fil.

Du kan omdøbe en note eller en mappe uden at åbne den, ved at benytte [[Stifinder#Omdøb en fil eller en mappe|stifinderen]].

## Slet en note
Du kan slette en aktiv note ved at vælge **Flere muligheder → Slet fil** i menuen i notens øverste højre hjørne.

Eller vælge **Slet nuværende fil** fra [[Kommandopaletten|kommandopaletten]].

Du kan også slette en note eller en malle ved at anvende [[Stifinder#OSlet en fil eller en mappe|stifinderen]].

> [!note] Hvad sker der med filer, når jeg har slettet dem?
> For at ændre, hvad der skal ske med slettede filer, kan du vælge en af følgende muligheder under **Indstillinger → Filer & links**:
>
> - **Flyt til systemets papirkurv**: Slettede filer flyttes til operativsystemets papirkurv som standard. For at genskabe filer skal du anvende operativsystemets stifinder
> - **Flyt til Obsidians papirkurv (.trash mappe)**: Du kan sende slettede filer til en `.trash` mappe i din boks
> - **Slet permanent**: Filer bliver slettet permanent og kan ikke gendannes
