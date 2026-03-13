---
description: Lær hvordan du kan ændre dele af Obsidians udseende uden at skulle udvikle et helt tema.
mobile: true
permalink: css-kodestykker
publish: true
---
Lær hvordan du kan ændre dele af Obsidians udseende uden at skulle [udvikle et helt tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme). 

> [!tip] Hvis du leder efter en guide til at håndtere CSS til [[Introduktion til Obsidian Publish|Obsidian Publish]], så læs guiden: [[Tilpas dit websted]].

CSS er et sprog, der kontrollerer, hvordan HTML ser ud. Ved at tilføje CSS kodestykker, kan du ændre dele af Obsidians brugergrænseflade, fx. størrelse og farve af overskrifter. Obsidian har [CSS variabler](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables), som kan hjælpe dig med at lave ændringer nemt.

Obsidian leder efter CSS kodestykker in boksens [[Konfigurationsmappen|konfigurationsmappe]].

## Sådan tilføjer du et CSS kodestykke

På **desktop** ![[lucide-monitor-check.svg#icon]] skal du følge disse trin:

1. Åben **Indstillinger**
2. Vælg **Åbn mappe med CSS kodestykker** ( ![[lucide-folder-plus.svg#icon]] ) under **Udseende → CSS kodestykker**
3. Opret en CSS fil i mappen, der indeholder dit CSS kodestykke
4. Vælg **Genindlæs CSS kodestykker** ( ![[lucide-refresh-cw.svg#icon]] ) under **Udseende → CSS kodestykker** for at den i listen
5. Aktivér CSS kodestykket ved at slå det til

På **mobil/tablet** ![[obsidian-icon-smartphone.svg#icon]] skal du følge disse trin:

1. Åben en stifinder og find din boks. Du kan tjekke boksens placering i _Håndtér bokse_ ved at trykke på din boks og se på stien
2. Åben [[Koonfigurationsmappen]] og opret en mappe med navnet `snippets`, hvis den ikke findes
3. Tilføj dit CSS kodestykke til mappen
4. Åben **Indstillinger** (![[lucide-cog.svg#icon]]) i Obsidian
5. Vælg **Udseende** til venstre
6. Rul ned til sektionen: **CSS kodestykker**
7. Tryk **Genindlæs CSS kodestykker** (![[lucide-refresh-cw.svg#icon]]) for at opfriske listen
8. Tryk på skifteknappen for at aktivere CSS kodestykket

Du kan alternativt:
- [[Synkroniser dine noter på tværs af enheder|Synkronisere]] ændringer med en synkroniseringsservice
- Benytte et fællesskabsplugin til at oprette et CSS kodestykke i Obsidian.

Når et CSS kodestykke er aktiveret vil Obsidian automatisk opdage og genindlæse det, hvis der sker ændringer i filen.

> [!tip] Du behøver ikke at genstarte Obsidian for at ændringer får effekt. Men du skal måske benytte kommandoen **Genindlæs app uden at gemme** i [[Kommandopaletten|kommandopaletten]], for at se ændringer i det aktive tema eller den aktive note.

## Sådan udvikler du CSS kodestykker til Obsidian

Obsidian tilbyder flere måder, som gør det nemmere og mere effektfuld at skrive CSS kodestykker på.

Den har en række [CSS variable](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables), som gør det nemt at modificere dele af Obsidian og en indbygget [[Egenskaber#Standardegenskaber|standardegenskaber]], til at ændre udseendet af en eller flere noter.

> [!example] Variable
> Opret en fil med navnet `headers.css` med følgende indhold, for at skifte farverne for de seks [[Grundlæggende formaterings syntaks#Afsnit|afsnitsniveauer]] til en regnbue:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS klasser
> Du kan få en eller flere noter til at se anderledes ud end de andre, ved at benytte [[Egenskaber|standardegenskaben]] med navnet `cssclasses`.
> 
> **CSS**:
> ```css
> .no-inline .inline-title {
>    display: none;
> }
> ```
> 
> **YAML/Properties**:
> ```yaml
> cssclasses:
>  - hjemmeside
> ```
> 
> Denne egenskab skjuler notens titel i selve dokumentet for alle noter med denne egenskab og værdi.

For at sikre at CSS filen indeholder gyldig CSS og er formatteret korrekt, anbefaler vi at anvende et program til dette, som fx. [Visual Studio Code](https://visualstudio.microsoft.com/) eller [Sublime Text](https://www.sublimetext.com/), da ugyldig CSS ikke vil virke.

## Lær mere

- Hvis CSS er nyt for dig, så læs guiden: [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) af Mozilla.
- Du kan få mere information om styling af Obsidian her (på engelsk):
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
