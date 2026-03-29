---
permalink: html
publish: true
mobile: true
description: 'Lær hvordan du bruker HTML i Obsidian, inkludert begrensninger med Markdown-gjengivelse og krav til HTML-blokker.'
---
Obsidian støtter HTML slik at du kan vise notatene dine slik du ønsker, eller til og med [[Bygg inn nettsider|bygge inn nettsider]]. Å tillate HTML inne i notatene dine medfører risiko. For å forhindre at ondsinnet kode gjør skade, _saniterer_ Obsidian all HTML i notatene dine.

> [!example] 
> Elementet `<script>` lar deg normalt kjøre JavaScript når det lastes inn. Hvis Obsidian ikke saniterte HTML, kunne en angriper overbevise deg om å lime inn en tekst som inneholder JavaScript som henter sensitiv informasjon fra datamaskinen din og sender den tilbake til dem.

Når det er sagt, siden Markdown-syntaks ikke støtter alle former for stilsetting, kan bruk av sanitert HTML være enda en måte å forbedre kvaliteten på notatene dine. Vi har inkludert noen av de vanligste bruksområdene for HTML.

## HTML-begrensninger

Obsidian har spesifikke begrensninger ved bruk av HTML i notatene dine:

### Ingen Markdown inne i HTML

Obsidian gjengir ikke Markdown-syntaks inne i HTML-elementer. Dette er et bevisst designvalg for ytelsesoptimalisering og for å holde parserkompleksiteten lav ved håndtering av store dokumenter.

For eksempel vil dette ikke fungere som forventet:

```md
<div>
This **will not** be bold and this `will not` be code.
</div>
```

### HTML-blokker må være selvstendige

HTML-blokker må være fullstendige og kan ikke inneholde tomme linjer inni seg. Tomme linjer vil bryte HTML-blokken.

Dette vil fungere:

```md
<table>
<tr>
<td>Content here</td>
</tr>
</table>
```

Dette vil ikke fungere korrekt:

```md
<table>

<tr>

<td>Content here</td>

</tr>

</table>
```

### Når Markdown ser ut til å fungere i HTML

Noen innebygde HTML-tagger som `<span>` eller `<a>` har begrenset funksjonalitet og kan se ut til å gjengi Markdown, men dette er egentlig ikke det som skjer. Markdown-en blir behandlet utenfor HTML-konteksten.

For mer informasjon om hvordan Obsidian håndterer Markdown, se [[Obsidian Flavored Markdown]].

## Vanlig HTML-bruk

> [!info] Mer informasjon om bruk av `<iframe>` finnes i [[Bygg inn nettsider]].

### Kommentarer

[[Grunnleggende formateringssyntaks#Kommentarer|Markdown-kommentarer]] er den foretrukne måten å legge til skjulte kommentarer i notatene dine. Noen metoder for å konvertere Markdown-notater, som [Pandoc](https://pandoc.org), har imidlertid begrenset støtte for Markdown-kommentarer. I slike tilfeller kan du bruke `<!-- HTML Comment -->` i stedet!

### Understreking

Hvis du raskt trenger å understreke et element i notatene dine, kan du bruke `<u>Eksempel</u>` for å lage <u>din understrekede tekst</u>.

### Span/Div

Span- og div-tagger kan brukes til å anvende egendefinerte klasser fra et [[CSS-utdrag|CSS-utdrag]], eller egendefinert stilsetting, på et valgt tekstområde. For eksempel kan bruk av `<span style="font-family: cursive">din tekst</span>` la deg raskt <span style="font-family: cursive">endre skrifttypen din</span>.

## Gjennomstreking

Trenger du å streke over <s>noe tekst</s>? Bruk `<s>dette</s>` for å streke det over.
