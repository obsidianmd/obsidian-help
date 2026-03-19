---
permalink: html-indhold
---
Obsidian understøtter HTML, som tillader dig at vise dine noter, lige på den måde du ønsker, eller endda [[indlejr websider|indlejre websider]]. At kunne benytte HTML i dine noter kommer med en risiko. Obsidian _renser_ al HTML i dine noter, som kan forvolde skade.

> [!example] 
> `<script>` elementet lader dig normalt kunne køre JavaScript, så snart det er indlæst. Hvis Obsidian ikke rensede HTMLen, kunne en person måske overtale dig til at indsætte et stykke tekst i din note indholdende JavaScript, der kunne sende sensitiv information fra din computer til personen.

Når det er sagt, så understøtter Markdown ikke alle former for styling, så HTML kan være en anden måde at forbedre dine noters visuelle kvalitet. Du kan læse om den mest almindelige brug af HTML herunder.

> [!info] Du kan læse mere om brugen af `<iframe>` i guiden: [[Indlejr websider]].

### Kommentarer

Den foretrukne måde at skjule kommentarer i den noter er ved at benytte [[Grundlæggende formaterings syntaks#Kommentarer|Markdown kommentarer]]. Men nogle værtøjer, såsom [Pandoc](https://pandoc.org) har begrænset undersøttelse af Markdown kommentarer. I de tilfælde kan du anvende en `<!-- HTML Kommentar -->` i stedet for.

### Understregning

Hvis du har brug for hurtigt, at understrege noget tekst i din note, så kan du anvende `<u>Eksempel</u>` for at <u>lave en understreget tekst</u>.

### Span/Div

Span og div HTML elementer kan anvendes til at tilføje brugerdefinerede klasser eller styling via [[CSS kodestykker]], i udvalgte områder af din tekst, Fx. tillader `<span style="font-family: cursive">din tekst</span>` dig til hurtigt at <span style="font-family: cursive">ændre din font</span>.

## Gennemstregning

Har du brug for at gennemstrege <s>noget tekst</s>? Så benyt `<s>dette</s>` tag.


