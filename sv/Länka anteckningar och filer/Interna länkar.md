---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Lär dig hur du länkar till anteckningar, bilagor och andra filer från dina anteckningar med hjälp av interna länkar.'
---
Lär dig hur du länka till anteckningar, bilagor och andra filer från dina anteckningar med hjälp av _interna länkar_. Genom att länka anteckningar kan du skapa ett kunskapsnätverk. ^b15695

Obsidian kan automatiskt uppdatera interna länkar i ditt valv när du byter namn på en fil. Om du vill bli tillfrågad istället kan du inaktivera det under:

**[[Inställningar]]** → **[[Inställningar#Filer och länkar|Filer och länkar]]** → **[[Inställningar#Upppdatera interna länkar|Upppdatera interna länkar]]**.

## Format som stöds för interna länkar

Obsidian stöder följande länkformat:

- Wikilänk: `[[Three laws of motion]]` eller `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` eller `[Three laws of motion](Three%20laws%20of%20motion.md)`

Exemplen ovan är likvärdiga och de visas på samma sätt i redigeraren och länkar till samma anteckning.

> [!note] Notera
> När du använder Markdown-formatet, se till att [URL-koda](https://en.wikipedia.org/wiki/Percent-encoding) länkdestinationen. Till exempel blir blanksteg `%20`.

Som standard genererar Obsidian länkar i wikilänk-format på grund av dess mer kompakta format. Om interoperabilitet är viktigt för dig kan du inaktivera wikilänkar och använda Markdown-länkar istället.

För att använda Markdown-formatet:

1. Öppna **[[Inställningar]]**.
2. Under **Filer och länkar**, inaktivera **Använd \[\[Wikilänkar\]\]**.

Även om du inaktiverar wikilänk-formatet kan du fortfarande autokomplettera länkar genom att skriva två hakparenteser `[[`. När du väljer en av de föreslagna filerna genererar Obsidian istället en Markdown-länk.

> [!note] Ogiltiga tecken
> En sträng som innehåller följande tecken kanske inte fungerar som en länk: `# | ^ : %% [[ ]]`.
> 
> Vi rekommenderar att du undviker dessa tecken och följer [säkra filnamnsrutiner](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Länka till en fil

För att skapa en länk i redigeringsvyn, använd något av följande sätt:

- Skriv `[[` i redigeraren och välj sedan filen du vill skapa en länk till.
- Markera text i redigeraren och skriv sedan `[[`.
- Öppna [[Kommandopalett|kommandopaletten]] och välj sedan Lägg till intern länk.

![[Snabbväxlare#^search-autocomplete-large]]

Även om du kan länka till alla [[Accepterade filformat]], kräver länkar till andra filformat än Markdown en filändelse, som `[[Figure 1.png]]`.

> [!tip] Att lägga till ett utropstecken (!) före en intern länk låter dig bädda in det länkade innehållet. För mer detaljer, se [[Bädda in filer]].

> [!info] Exkluderade filer
> Filer som matchar dina [[Inställningar#Exkluderade filer|Exkluderade filer]]-mönster nedprioriteras i länkförslag när du skapar interna länkar.

## Länka till en rubrik i en anteckning

Du kan länka till specifika rubriker i anteckningar, även kända som _ankarlänkar_.

**Länka till en rubrik inom samma anteckning**

För att länka till en rubrik inom samma anteckning, skriv `[[#` för att få en lista över rubriker i anteckningen att länka till.

Till exempel skapar `[[#Förhandsgranska en länkad fil]]` en länk till [[#Förhandsgranska en länkad fil]].

**Länka till en rubrik i en annan anteckning**

För att länka till en rubrik i en annan anteckning, lägg till en hash (`#`) i slutet av länkdestinationen, följt av rubriktexten.

Till exempel skapar `[[Om Obsidian#Länkar är förstaklassens medborgare]]` en länk till [[Om Obsidian#Länkar är förstaklassens medborgare]].

**Länka till underrubriker**

Du kan lägga till flera hash-tecken för varje underrubrik.

Till exempel skapar `[[Hjälp och support#Questions and advice#Report bugs and request features]]` en länk till [[Hjälp och support#Questions and advice#Report bugs and request features]].

**Söka efter rubriker i hela valvet**

För att söka efter rubriker i hela valvet, använd syntaxen `[[## rubrik]]`.

Till exempel söker `[[##` generellt i hela valvet, medan `[[## team]]` söker efter alla rubriker som innehåller ordet _team_.

> [!info]- Skärmbild av sökning efter en rubriklänk
>
> ![[internal-links-header.png#interface]]

## Länka till ett block i en anteckning

Ett block är en textenhet i din anteckning, såsom ett stycke, blockcitat eller listobjekt.

Du kan länka till ett block genom att lägga till `#^` i slutet av din länkdestination, följt av en unik blockidentifierare. Till exempel: `[[2023-01-01#^37066d]]`. Lyckligtvis behöver du inte hitta identifieraren manuellt — när du skriver caret-tecknet (`^`) visas en lista med förslag som låter dig välja rätt block.

För *enkla stycken*, placera ett blanksteg följt av ett caret-tecken `^` och blockidentifieraren i slutet av raden:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

För *strukturerade block* (listor, citat, notiser, tabeller) bör blockidentifieraren vara på en separat rad, med en tom rad före och efter:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

För *specifika rader inom en lista* kan blockidentifieraren placeras direkt på en punkt:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Vi stöder inte länkar till specifika delar av citat, notiser och tabeller.

**Söka efter block i hela valvet**

Du kan också söka efter block att länka till från hela valvet med syntaxen `[[^^block]]`. Dock kvalificerar fler objekt som block jämfört med [[#Länka till en rubrik i en anteckning|rubriklänkar]], så denna lista kommer att vara mycket längre.

> [!info]- Skärmbild av sökning efter en blocklänk
> ![[link-block-heading.png#interface]]

Du kan också skapa läsbara blockidentifierare genom att lägga till ett blanksteg följt av ett caret-tecken (`^`) och identifieraren. Blockidentifierare kan bara bestå av latinska bokstäver, siffror och bindestreck.

Till exempel, lägg till `^quote-of-the-day` i slutet av ett block:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Nu kan du länka till blocket genom att skriva `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperabilitet
> Blockreferenser är specifika för Obsidian och ingår inte i standard Markdown-formatet. Länkar som innehåller blockreferenser fungerar inte utanför Obsidian.

## Ändra länkens visningstext

Som standard visar Obsidian länktexten som den ser ut. Till exempel:
- `[[Example]]` visas som [[Example]]
- `[[Example#Details]]` visas som [[Example#Details]]

Du kan ändra hur en länk visas genom att anpassa dess länktext:

**Wikilänk-format**:
Använd ett lodstreck (`|`) för att ändra visningstexten.

- `[[Example|Anpassat namn]]` visas som [[Example|Anpassat namn]]
- `[[Example#Details|Avsnittsnamn]]` visas som [[Example#Details|Avsnittsnamn]]

**Markdown-format**:
Använd `[Visningstext](Länk-URL)` för att anpassa hur länken visas.

- `[Anpassat namn](Example.md)` visas som [Anpassat namn](Example.md)
- `[Avsnittsnamn](Example.md#Details)` visas som [Avsnittsnamn](Example.md#Details)

Denna metod är användbar för engångssituationer där du vill ändra hur en länk ser ut i ett specifikt sammanhang. Om du vill ställa in ett alternativt länknamn som du kan återanvända i hela ditt valv, överväg att använda ett [[Aliaser|alias]] istället.

Till exempel, om du regelbundet hänvisar till `[[Three laws of motion]]` som `[[The 3 laws]]`, kan du lägga till "3 laws" som alias och bara skriva det — utan att behöva lägga till anpassad visningstext varje gång.

> [!tip] Tips
> Använd [[#Ändra länkens visningstext|länkens visningstext]] när du vill anpassa hur en länk ser ut *på en specifik plats*.
> 
> Använd [[Aliaser|alias]] när du vill hänvisa till samma anteckning med *olika namn* i hela ditt valv.
^callout-internal-links-link-text

## Förhandsgranska en länkad fil

> [!note] Notera
> För att förhandsgranska länkade filer måste du först aktivera [[Sidförhandsvisning]].

För att förhandsgranska en länkad fil, hovra över en intern länk. I redigeringsläge, tryck `Ctrl` (eller `Cmd` på macOS) medan du hovrar markören över länken. En förhandsvisning av filens innehåll visas bredvid markören.
