---
permalink: html
publish: true
mobile: true
description: 'Lär dig hur du använder HTML i Obsidian, inklusive begränsningar med Markdown-rendering och krav för HTML-block.'
---
Obsidian stöder HTML för att låta dig visa dina anteckningar som du vill, eller till och med [[Bädda in webbsidor|bädda in webbsidor]]. Att tillåta HTML i dina anteckningar medför risker. För att förhindra att skadlig kod orsakar skada _sanerar_ Obsidian all HTML i dina anteckningar.

> [!example] 
> Elementet `<script>` låter normalt dig köra JavaScript när det laddas. Om Obsidian inte sanerade HTML kunde en angripare övertala dig att klistra in text som innehåller JavaScript som extraherar känslig information från din dator och skickar den tillbaka till dem.

Med det sagt, eftersom Markdown-syntax inte stöder alla former av formatering, kan användning av sanerad HTML vara ytterligare ett sätt att förbättra kvaliteten på dina anteckningar. Vi har inkluderat några av de vanligaste användningarna av HTML.

## HTML-begränsningar

Obsidian har specifika begränsningar vid användning av HTML i dina anteckningar:

### Ingen Markdown inuti HTML

Obsidian renderar inte Markdown-syntax inuti HTML-element. Detta är ett avsiktligt designval för prestandaoptimering och för att hålla parserkomplexiteten låg vid hantering av stora dokument.

Till exempel kommer detta inte att fungera som förväntat:

```md
<div>
This **will not** be bold and this `will not` be code.
</div>
```

### HTML-block måste vara fristående

HTML-block måste vara kompletta och kan inte innehålla tomma rader inuti dem. Tomma rader kommer att bryta HTML-blocket.

Detta fungerar:

```md
<table>
<tr>
<td>Content here</td>
</tr>
</table>
```

Detta fungerar inte korrekt:

```md
<table>

<tr>

<td>Content here</td>

</tr>

</table>
```

### När Markdown verkar fungera i HTML

Vissa inline HTML-taggar som `<span>` eller `<a>` har begränsad funktionalitet och kan verka rendera Markdown, men det är inte vad som faktiskt händer. Markdown bearbetas utanför HTML-kontexten.

För mer information om hur Obsidian hanterar Markdown, se [[Obsidian Flavored Markdown]].

## Vanlig HTML-användning

> [!info] Mer information om att använda `<iframe>` finns i [[Bädda in webbsidor]].

### Kommentarer

[[Grundläggande formateringssyntax#Kommentarer|Markdown-kommentarer]] är det föredragna sättet att lägga till dolda kommentarer i dina anteckningar. Vissa metoder för att konvertera Markdown-anteckningar, som [Pandoc](https://pandoc.org), har dock begränsat stöd för Markdown-kommentarer. I dessa fall kan du använda `<!-- HTML Comment -->` istället!

### Understrykning

Om du snabbt behöver stryka under ett objekt i dina anteckningar kan du använda `<u>Example</u>` för att skapa <u>din understrukna text</u>.

### Span/Div

Span- och div-taggar kan användas för att tillämpa anpassade klasser från ett [[CSS-instick|CSS-instick]], eller anpassad definierad stil, på ett markerat textområde. Till exempel kan `<span style="font-family: cursive">din text</span>` låta dig snabbt <span style="font-family: cursive">ändra ditt typsnitt</span>.

## Genomstrykning

Behöver du stryka <s>lite text</s>? Använd `<s>detta</s>` för att stryka det.
