---
aliases: Internt link, Link til blokke
---

Her kan du lære, hvordan du kan linke til noter, vedhæftninger, og andre filer i dine noter ved at benytte _interne links_. Ved at linke noter kan du danne et netværk af viden.

Obsidian kan automatisk opdatere interne links i din boks, når du omdøber en fil. Hvis du vil spørges hver gang, kan du deaktivere automatisk linkning under **Indstillinger** → **Filer & links** → **Opdater automatisk interne links**.

## Understøttede formater for interne links

Obsidian understøtter følgende link formater:

-   Wikilink: `[[De tre bevægelseslove]]`
-   Markdown: `[De tre bevægelseslove](De%20%tre%20%bevægelseslove.md)`

De to måder kan anvendes - De vil se ud på samme måde i visningstilstand og linke til den samme note.

> [!note]
> Når du benytter Markdown formatet, så skal du sikre dig at [URL kode](https://en.wikipedia.org/wiki/Percent-encoding) linket til destinationen, så f.eks. mellemrums tegn erstattes med `%20`.

Obsidian genererer links i Wikilink formatet som standard, da det er et mere kompakt format. Hvis kompabilitet er vigtigt for dig, altså at links skal kunne fungere med andre applikationer, kan du deaktivere Wikilinks og benytte Markdownlinks i stedet.

Sådan benytter du Markdown formatet:

1. Åben **Indsillinger**
2. Deaktiver **Benyt \[\[Wikilink\]\]** under **Filer og links**

Selvom du deaktiverer Wikilink formatetkan du stadig benytte autofuldførelse af links ved at skrive to firkantede parenteser `[[`. Når du vælger en af de foreslåede filer, vil Obsidian i stedet generere et Markdown link.

## Link til en fil

Du kan oprette et link i redigeringstilstand på en af følgende måder:

- Skrive `[[` i editoren og vælg den fil, du vil lave et link til
- Vælge noget tekst i editoren og derefter skrive `[[`
- Åbne [[Kommandopalette|kommandopaletten]] og derefter søge og vælge **Tilføj iternt link**

Du kan linke til alle [[Accepterede filformater|accepterede filformater]]; dog skal alle links til andre filformater end Markdown filer (altså Obsidian noter) have inkluderet filtypenavnet, f.eks. `[[Figur 1.png]]`.

## Link til en overskrift i en note

Du kan linke til en specifik overskrift i en note, hvilket kaldes et _anker link_.

Tilføj et hashtag (`#`) i slutningen af linkdestinationen efterfulgt af overskriftens navn, for at linke til en specifik overskrift

F.eks. `[[De tre bevægelseslove#Anden lov]]`.

Du kan tilføje flere hastags for at hver underoverskrift.

F.eks. `[[Min note#Overskrift 1#Overskrift 2]]`.

## Link til en blok i en note

En blok er en tekstenhed i din note, f.eks. et afsnit, et blok citat, eller en liste.

Du linker til en blok ved at tilføje `#^` i slutningen af link destinationen efterfulgt af en unik blokidentifikator, f.eks.  `[[2023-01-01#^37066d]]`.

Heldigvis behøver du ikke at kende blokidentifikatoren. Når du skriver tegnet (`^`) kan du vælge den ønskede blok fra en liste af forslag, så du kan indsætte den korrekte identifikator.

Du kan selv oprette læsbare blok identifikatorer ved at tilføje f.eks.  ` ^dagens-citat` i slutningen af en blok. Bemærk det ene mellemrum før `^`. Derefter kan du indsætte et link til denne blok ved at skrive: `[[2023-01-01#^dagens-citat]]`.

Blok identifikatorer må kun indeholde bogstaver, tag og bindestreg (Og altså ikke mellemrum).

> [!warning] Kompabilitet
> Blok referencer er en Obsidian specifik feature og er ikke en del af Markdown standardformatet. Det betyder, at links der indeholder blok referencer ikke vil virke udenfor Obsidian.

## Skift visningstekst for et link

Du kan ændre teksten, som benyttes til at vise linket. Det er brugbart, når du vil indsætte et link i en sætning uden at anvende navnet på destinationsfilen.

**Wikilink format:**

Skriv en lodret streg  (`|`) for at ændre teksten, der anvendes til at vise et link.

F.eks.  vil `[[Interne links#Skift visningstekst for et link|brugerdefineret linktekst]]` vises som [[Interne links#Skift visningstekst for et link|brugerdefineret linktekst]].

**Markdown format:**

Skriv den ønskede visningstekst mellem to firkantede paranteser (`[]`).

F.eks. vi l`[brugerdefineret linktekst](Interne%20links.md)` vises som [brugerdefineret linktekst](Interne%20links.md).

## Forhåndsvis en linket fil

> [!note]
> For at kunne forhåndsvise linkede filer skal du først aktivere: [[Forhåndsvisning af note]].

For at forhåndsvise en linket fil skal du trykke `Ctrl` (eller `Cmd` på macOS) mens du fører musemarkøren over linket. Et popup vindue indeholdende forhåndsvisningen bliver vist ved siden af musemarkøren.
