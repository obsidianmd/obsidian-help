---
aliases: Internt link, Link til blokke
cssclasses:
  - soft-embed
description: Lær hvordan du linker til noter, vedhæftninger og andre filer.
permalink: links
---

Her kan du lære, hvordan du kan linke til noter, vedhæftninger, og andre filer i dine noter ved at benytte _interne links_. Ved at linke noter kan du danne et netværk af viden. ^b15695

Obsidian kan automatisk opdatere interne links i din boks, når du omdøber en fil. Hvis du vil spørges hver gang, kan du deaktivere automatisk linkning under:

**Indstillinger** → **Filer & links** → **Opdater automatisk interne links**.

## Understøttede formater for interne links

Obsidian understøtter følgende link formater:

-   Wikilink: `[[De tre bevægelseslove]]`
-   Markdown: `[De tre bevægelseslove](De%20%tre%20%bevægelseslove.md)`

De to måder kan anvendes - De vil se ud på samme måde i visningstilstand og linke til den samme note.

> [!note]
> Når du benytter Markdown formatet, så skal du sikre dig at [URL kode](https://en.wikipedia.org/wiki/Percent-encoding) linket til destinationen, så fx. mellemrums tegn erstattes med `%20`.

Obsidian genererer links i Wikilink formatet som standard, da det er et mere kompakt format. Hvis kompabilitet er vigtigt for dig, altså at links skal kunne fungere med andre applikationer, kan du deaktivere Wikilinks og benytte Markdownlinks i stedet.

Sådan benytter du Markdown formatet:

1. Åben **Indsillinger**
2. Deaktiver **Benyt \[\[Wikilink\]\]** under **Filer og links**

Selvom du deaktiverer Wikilink formatetkan du stadig benytte autofuldførelse af links ved at skrive to firkantede parenteser `[[`. Når du vælger en af de foreslåede filer, vil Obsidian i stedet generere et Markdown link.

> [!note] Ugyldige tegn i filnavne
> En navngivning som indeholder nogle af følgende tegn virker muligvis ikke som et link: `# | ^ : %% [[ ]]`. 
> 
> Vi anbefaler at du ungår disse tegn og praktiserer [sikre filnavne](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names). 

## Link til en fil

Du kan oprette et link i redigeringstilstand på en af følgende måder:

- Skrive `[[` i editoren og vælg den fil, du vil lave et link til
- Vælge noget tekst i editoren og derefter skrive `[[`
- Åbne [[Kommandopaletten|kommandopaletten]] og derefter søge og vælge **Tilføj internt link**

![[Hurtigskifter#^search-autocomplete-large]]

Du kan linke til alle [[Accepterede filformater|accepterede filformater]]; dog skal alle links til andre filformater end Markdown filer (altså Obsidian noter) have inkluderet filtypenavnet, fx. `[[Figur 1.png]]`.

> [!tip] Hvis du præfikser et internt link med et udråbstegn (!) så indlejrer du det linkede indhold. Se siden "[[Indlejr filer]]" for flere detaljer.

## Link til en overskrift i en note

Du kan linke til en specifik overskrift i en note, hvilket kaldes et _anker link_.

**Opret link til en overskrift i samme note**

For at oprette et link til en overskrift i den samme note, så skriv `[[#` for at se en liste af overskrifter i noten.

Fx. `[[#Forhåndsvis en linket fil]]` vil oprette et link til [[#Forhåndsvis en linket fil]].

**Opret link til en overskrift i en anden note***

For at linke til en overskrift i en anden note skal du tilføje et hashtag (`#`) efter navnet på noten efterfulgt af soverskrift titlen.

Fx. `[[Obsidian#Links er førsteklasses borgere]]` vil oprette et link til [[Obsidian#Links er førsteklasses borgere]].

**Link til en underoverskrift**

Du kan tilføje hashtags for hver underoevrskift du vil linke til.

Fx. `[[Hjælp og support#Spørgsmål og råd#Fejlrapportering og funktionsanmodninger]]` vil oprette et link til [[Hjælp og support#Spørgsmål og råd#Fejlrapportering og funktionsanmodninger]].

**Søg efter overskrifter i hele din boks**

For at søge efter overskrifter i hele din boks skal du benytte syntaksen `[[## overskrift]]`.

Fx. vil `[[##` lave en generisk søgning i hele din boks, mens `[[## team]]` vil søge efter alle overskrifter, der indeholder ordet _team_.

> [!info]- Skærmbillede af en søgning efter et overskrift link
>
> ![[internal-links-header.png#interface]]

## Link til en blok i en note

En blok er en tekstenhed i din note, fx. et afsnit, et blok citat, eller en liste.

Du linker til en blok ved at tilføje `#^` i slutningen af link destinationen efterfulgt af en unik blokidentifikator, fx.  `[[2023-01-01#^37066d]]`.

Heldigvis behøver du ikke at kende blokidentifikatoren. Når du skriver tegnet (`^`) kan du vælge den ønskede blok fra en liste af forslag, så du kan indsætte den korrekte identifikator.

For *simple afsnit* skal blokidentifikatoren placeres i slutningen af linjen (Bemærk det ene mellemrum før `^`):

```md
> (Ikke oversat til dansk): The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```


For strukturerede blokke (lister, citater, bemærkninger, tabeller) bør blokidentifikatoren stå på en separat linje med en blank linje før og efter:

```md
> (Ikke oversat til dansk): The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

For *specifikke linjer i en liste* kan blokidentifikatoren placeres direkte på en række i listen;

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Obsidian understøtter ikke links til specifikke dele af citater, bemærkninger eller tabeller.

**Søgning efter blokke på tværs af boksen**

Du kan også søge i hele din boks efter blokke du vil linke til ved at anvende syntaksen `[[^^blok]]`. Da flere elementer kan kvalificeres som blokke i forhold til [[#Link til en overskrift i en note|Overskrift links]], vil denne liste blive meget større.

> [!info]- Skærmbillede af en søgning for et blok link
> ![[link-block-heading.png#interface]]

Du kan også oprette læsbare blokidentifikatorer ved at tilføje et mellemrum fulgt af indentifikatoren. Blokidentifikatorer må kun indeholde almindelige bogstaver, tal og bindestreger.

Fx. kan du tilføje `^dagens-citat` i slutningen af en blok:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^dagens-citat
```

Bu kan du linke til blokken ved at skrive `[[2025-01-01#^dagens-citat]]`.

> [!warning] Interoperabilitet
> Blokreferencer er en specifik Obsidian funktion og er ikke en del ag standard Markdown formatet. Links der indeholder blokreferencer vil sltså ikke virke udenfor Obsidian.

## Skift visningstekst for et link

Du kan ændre teksten, som benyttes til at vise linket. Det er brugbart, når du vil indsætte et link i en sætning uden at anvende navnet på destinationsfilen.

Obsidian viser link teksten som den ser ud som standard. F.ex.
- `[[Interne links]]` vises som [[Interne links]]  
- `[[Interne links#Skift visningstekst for et link]]` vises som [[Interne links#Skift visningstekst for et link]]

Du kan ændre hvordan et links skal se ud på følgende måde:

**Wikilink format:**

Skriv en lodret streg  (`|`) for at ændre teksten, der anvendes til at vise et link.

Fx.  vil `[[Interne links#Skift visningstekst for et link|brugerdefineret linktekst]]` vises som [[Interne links#Skift visningstekst for et link|brugerdefineret linktekst]].


**Markdown format:**

Benyt `[Vis link tekst](Link URL)` for at skifte visningstekst.

- `[brugerdefineret linktekst](Interne%20links)` vises som [brugerdefineret linktekst](Interne%20links)
- `[brugerdefineret linktekst](Interne%20links#Skift visningstekst for et link)` vises som [brugerdefineret linktekst](Interne%20links#Skift%20visningstekst%20for%20et%20link)

Denne metode er brugbar i situationer, hvor du ønsker at ændre  hvordan et link ser ud i en bestemt kontekst. Hvis du ønsker at genrbuge et alternativt navn på et link i hele din boks, så kan du anvende [[Aliaser|aliaser]] i stedet.

Hvis du fx. ofte refererer til de `[[De tre bevægelseslove]]` som `[[3 love]]`, så tilføj "3 love" som et alias for teksten.

> [!tip]
> Benyt `[[#Skift visningstekst for et link|brugerdefineret linktekst]]` når du vil ændre hvordan et link skal se ud et *specifik sted*
>
>Benyt [[Aliaser|aliaser]] når du vil referere til den samme note, hvis du anvender *forskellige navne* i din boks
^callout-internal-links-link-text


## Forhåndsvis en linket fil

> [!note]
> For at kunne forhåndsvise linkede filer skal du først aktivere: [[Forhåndsvisning af note]].

For at forhåndsvise en linket fil skal du trykke `Ctrl` (eller `Cmd` på macOS) mens du fører musemarkøren over linket. Et popup vindue indeholdende forhåndsvisningen bliver vist ved siden af musemarkøren.
