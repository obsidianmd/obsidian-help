---
description: Her kan du lære om grundlæggende Markdown formattering af dine noter i Obsidian
mobile: true
permalink: grundlæggende-syntaks
publish: true
---

Lær hvordan du kan formatere dine noter ved at anvende [Markdown](https://daringfireball.net/projects/markdown/) syntaks. Har du brug for mere avanceret syntaks, så læs guiden: [[Avanceret formaterings syntaks]].

## Afsnit

Du opretter afsnit i en tekst, ved at indsætte en **tom linje** mellem blokke af tekst. Hver tekstblok, der er adskilt af en tom linje, vil blive betragtet som sit eget afsnit.

```md
Dette er et afsnit.

Dette er et andet afsnit.
```

Dette er et afsnit.

Dette er et andet afsnit.

En tom linje i en tekst opretter separate afsnit. Dette er en stardardopførsel i Markdown.

> [!tip] Flere tomme linjer og mellemrum efter hinanden
> Flere tomme linjer efter hinanden bliver omdannet til én tom linje, og mange mellemrum bliver omdannet til ét mellemrum, når teksten vises i [[Views og redigeringstilstand#Læsning|Læsningstilstand]] eller på et [[Introduktion til Obsidian Publish|Obsidian Publish]] websted. 

> 
> ```md
> Mange          tomme          mellemrum efter hinanden
> 
> 
> 
> og mange tomme linjer mellem afsnit.
> ```
> 
> > Mange          tomme          mellemrum efter hinanden
> > 
> > 
> > 
> > og mange tomme linjer mellem afsnit.
> 
> Hvis du vil undgå at mellemrum eller tomme linjer fjernes, kan du anvende `&nbsp;` (tvunget mellemrum) eller `<br>` (linjeskift) HTML kode.

### Linjeskift

Når du trykker `Retur` på tastaturet vil Obsidian som standard lave en ny linje i din note, men den bliver behandlet som en *fortsættelse* af samme afsnit i det gengivne output, hvilket følger typisk Markdown adfærd. For at indsætte et et linjeskift *i' afsnittet uden at starte et nyt afsnit kan du enten:

- Tilføje **to mellemrum** i slutningen af en linje før du trykker `Retur`, eller
- Anvende genvejstasten `Skift + Retur`, som indsætter et linjeskift direkte

> [!question]- Hvorfor laver flere tryk på `Retur` tasten ikke flere linjeskift i læsningstilstand?
> Et enkelt `Retur` ingoreres i Markdown, og flere tryk på `Retur` resulterer i et nyt afsnit. Denne adfærd følger Markdowns regel for bløde linjeskift, hvor ekstra linjekskift ikke laver flere linjeskift eller afsnit; de bliver forkortet til et enkelt afsnitsskift. Sådan håndterer Markdown tekst som standard, hvilket sikrer at afsnit følger hinanden uden uventede mellemrum.

Obsidian har mulighed for en **striks linjeskift** indstilling, som gør at Obsidian følger Markdown spcifikationerne for linjeskift.

For at aktivere denne funktion, skal du:

1. Åbne **Indstillinger**
2. Gå til **Editor** fanen
3. Slå **Striks linjeskift** til

Når **strikse linjeskift** er aktiveret i Obsidian, har linjeskift tre forskelige adfærd, afhængig af hvordan linjer deles:

**Enkelt `Retur` med ingen mellemrum**: Et enkelt `Retur` uden efterfølgende mellemrum, vil samle de to linjer til én, når de ses i læsningstilstand.

```md
linje et
linje to
```

Vises som:

linje et linje to

**Enkelt `Retur` med to eller flere efterfølgende mellemrum i slutningen af linjen**: Hvis du tilføjer to eller flere mellemrum i slutningen af første linje før du trykker `Retur`, vil de to linjer blive del af det samme afsnit, men blive brudt af et linjeskift (Et HTML `<br>` element). Vi benytter to understreger i stedet for mellemrum i det følgende eksempel:

```md
linje tre__  
linje fire
```

Vises som:

linje tre  
linje fire


**Dobbelt `Retur` (med eller uden efterfølgende mellemrum i slutningen af linjen)**:
Trykkes der `Retur` to (eller flere) gange vil linjerne deles i to separate afsnit (HTML `<p>` elementer), uanset om du tilføler mellemrum i slutningen af den første linje.

```md
linje fem

linje seks
```

Vises som:

<p>linje fem</p>
<p>linje seks</p>

## Overskrifter

Du opretter overskrifter ved at tilføje op til seks `#` tegn før et afsnit. Antallet af `#` bestemmer størrelsen af overskriften.

```md
# Dette er overskrift 1
## Dette er overskrift 2
### Dette er overskrift 3
#### Dette er overskrift 4
##### Dette er overskrift 5
###### Dette er overskrift 6
```

%% Følgende overskrifter benytter HTML for at undgå at indholdfortegnelsen til denne side blive forstyrret %%
<h1>Dette er overskrift 1</h1>
<h2>Dette er overskrift 2</h2>
<h3>Dette er overskrift 3</h3>
<h4>Dette er overskrift 4</h4>
<h5>Dette er overskrift 5</h5>
<h6>Dette er overskrift 6</h6>

## Fed-, kursiv-, og fremhævet tekst

Tekstformattering kan også foretages med [[Redigering og formatering/Tastaturgenveje|genvejstaster]].


| Stil | Syntaks | Eksempel | Vises som |
|-|-|-|-|
| Fed | `** **` eller `__ __` | `**Fed tekst**` | **Fed tekst** |
| Kursiv | `* *` eller `_ _`  | `*Kursiv tekst*` | *Kursiv tekst* |
| Gennemstregning | `~~ ~~` |  `~~Gennemstreget tekst~~` | ~~Gennemstreget tekst~~ |
| Fremhæv | `== ==` |  `==Fremhævet tekst==` | ==Fremhævet tekst== |
| Fed og indlejret kursiv | `** **` og `_ _`  | `**Fed tekst og _indlejret kursiv_ tekst**` | **Fed tekst og _indlejret kursiv_ tekst** |
| Fed og kursiv | `*** ***` eller `___ ___` |  `***Fed og kursiv tekst***` | ***Fed og kursiv tekst*** |

Formatering kan tvinges til at blive vist som almindelig tekst ved at tilføje en omvendt skråstreg `\` foran tegnet.


\*\*Denne linje bliver ikke fed\*\*

```markdown
\*\*Denne linje bliver ikke fed\*\*
```

\**Denne linje vises i kursiv og viser gangetegn*\*

```markdown
\**Denne linje vises i kursiv og viser gangetegn*\*
```

## Interne links

Obsidian understøtter to formater til at oprette [[Interne links|interne links]] mellem noter:

- Wikilink: `[[De tre bevægelseslove]]`
- Markdown: `[De tre bevægelseslove](De%20tre%20bevægelseslove.md)`

## Eksterne links

Hvis du vil linke til en ekstern URL, kan du oprette et link ved at sætte linkteksten i firkantede parenteser (`[ ]`), og URLen i parenteser (`( )`).

```md
[Obsidian Help](https://help.obsidian.md)
```

[Obsidian Help](https://help.obsidian.md)

Du kan også oprette eksterne links til filer i andre bokse ved at linke til en [[Obsidian URI|Obsidian URI]].

```md
[Note](obsidian://open?vault=Hovedboks&file=Note.md)
```

### Undgå mellemrum i links

hvis din URL indeholder mellemrum, skal du erstate mellemrummene med `%20`.

```md
[Min note](obsidian://open?vault=Hovedboks&file=Min%20Note.md)
```

Du kan omgå at erstatte mellemrum med `%20`, hvis du omgiver URLen med vinklede paranteser(`< >`).

```md
[Min note](<obsidian://open?vault=Hoveboks&file=Min note.md>)
```

## Eksterne billeder

Du kan tilføje billeder med eksterne URLer ved at tilføje et udtåbstegn `!` før et [[#Eksterne links|eksternt link]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Du kan ændre på billedets dimensioner ved at tilføje fx. `|640x480` til linkdesinationen, hvor 640 er bredden og 480 er højden.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Hvis du kun angiver bredden vil billedet skaleres i forhold til billedets originale format. Fx.

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]
> Hvis du vil indlejre et billede fra din boks til en note, kan du også det. Se: [[Indlejr filer#Indlejr et billede i en note|Indlejr et billede i en note]].

## Citater

Du kan oprette citater ved at tilføje et `>` tegn før teksten.

```md
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961
```

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961

> [!tip]
> Du kan omdanne dit citat til en [[Bobler|bemærkning]] ved at tilføje `[!info]` som den første linje i citatet.

## Lister

Du kan oprette uordnede lister ved at tilføje en bindestreg`-`, et gangetegn `*`, eller et plus `+` før en tekst.

```md
- Første listelelement
- Andet listelelement
- Tredje listelelement
```

- Første listelelement
- Andet listelelement
- Tredje listelelement

Du kan oprette en ordnet liste ved at hver linje begynder med et tal efterfulgt af enten punktum `.` eller en slutparantes `)`.

```md
1. Første listelelement
2. Andet listelelement
3. Tredje listelelement
```

1. Første listelelement
2. Andet listelelement
3. Tredje listelelement

```md
1) Første listelelement
2) Andet listelelement
3) Tredje listelelement
```

1) Første listelelement
2) Andet listelelement
3) Tredje listelelement

Du kan anvende `shift + enter` for at indsætte [[#Linjeskift|linjeskift]] i en ordnet liste uden at nummerrækkefølgen ændres.

```md
1. Første listelelement
   
2. Andet listelelement
3. Tredje listelelement
   
4. Fjerde listelelement
5. Femte listelelement
6. Sjette listelelement
```

> [!note]
> På dansk afslutter man ikke et listelement med punktum, som man gør på engelsk.

### Opgavelister

Du kan oprette en opgaveliste ved at starte listelelementet med en bindestreg efterfulgt at et mellemrum og derefter `[ ]`.

```md
- [x] Dette er en opgave, som er udført
- [ ] Denne opgave er ikke færdig
```

- [x] Dette er en opgave, som er udført
- [ ] Denne opgave er ikke færdig

Du kan skifte status på en opgave ved at klikke på afkrydsningsfeltet i læsningstilstand.


> [!tip]
> Du kan envende et hvilket som helst tegn i de firkantede paraenteser for at markere, at opgaven er færdig.
>
> ```md
> - [x] Mælk
> - [?] Æg
> - [-] Brød
> ```
>
> - [x] Mælk
> - [?] Æg
> - [-] Brød

> [!note]
> På dansk afslutter man ikke et listelement med punktum, som man gør på engelsk.

### Underlister

Du kan indlejre en hvilken som helst listetype (ordnet, uordnet eller opgave) i hvilken som helst anden listetype.

For at oprette underlister skal du indrykke en eller flere listelementer. Du kan blande listetyper i en underliste:

```md
1. Første listelelement
   1. Ordnet underlisteelement
2. Andet listelelement
   - Uordnet underlistelelement
```

1. Første listelelement
   1. Ordnet underlisteelement
2. Andet listelelement
   - Uordnet underlistelelement

På samme måde kan du oprette opgave underlister ved at indrykke en eller listelementer:


```md
- [ ] Opgave element 1
	- [ ] Underopgave 1
- [ ] Opgave element 2
	- [ ] Underopgave 1
```

- [ ] Opgave element 1
	- [ ] Underopgave 1
- [ ] Opgave element 2
	- [ ] Underopgave 1

Benyt `Tab` eller `Skift+Tab` for at indrykke eller udrykke listelementer.

## Vandret streg

For at lave en vandret streg skal du anvende tre eller flere gangetegn `***`, bindestreger `---`, eller understregning `___`. Du kan også adskille tegnene med mellemrum.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Kode

Du kan formatere kode både inden i en sætning eller i sin egen blok.

### Indlejret kode

Du kan formatere kode i en sætning ved at anvende enkelte backticks.


```md
Tekst i `backticks` på en linje vil blive formatteret som kode.
```

Tekst i `backticks` på en linje vil blive formatteret som kode.

Hvis du har brug for at anvende backtics inden i en kodeblok, så start og slut sætningen med nbacktics, fx. ``kode med et backtick ` indeni``.

### Kodeblokke

For at formatere en blok som kode skal startlinjen og slutlinjen bestå af tre backtics (```) eller tre tilder (~~~):

~~~
```
cd ~/Skrivebord
```
~~~

```
~~~
cd ~/Skrivebord
~~~
```

```md
cd ~/Skrivebord
```

Du kan også oprette kodeblokke ved at indrykke en teks med `Tab` eller benytte fire mellemrum:

```md
    cd ~/Skrivebord
```

Du kan tilføje syntaksfremhævning til en kodeblok ved at tilføje en kode for programmeringssproget efter det første sæt af backtics.

~~~md
```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
~~~

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

Obsidien anvender Prism til syntaksfremhævning. Læs denne guide for at se hvilke [sprog som er understøttet](https://prismjs.com/#supported-languages).

> [!note]
> [[Views og redigeringstilstand|Redigeringstilstand]] og [[Views og redigeringstilstand#Læsning|læsningstilstand]] understøtter ikke PrismJS og vil vise synktaktfremhævning anderledes.

## Fodnoter

Du kan tilføje fodnoter[^fodnote] til dine noter ved at anvende følgende syntaks:

[^fodnote]: Dette er en fodnote.

```md
Dette er en simpel fodnote[^1].

[^1]: Dette er den refererede tekst.
[^2]: Tilføj to mellemrum i begyndelsen af hver ny linje.
  Dette lader dig skrive fodnoter, som spænder flere linjer.
[^note]: Navngivne fodnoter vises stadig som numre, men kan gøre det nemmere at identificere referencer.
```

Du kan også anvende fodnoter inde i en sætning. Bemærk at cirkumfleksen (`^`) står udenfor de firkantede parenteser:

```md
Du kan også anvende fodnoter i sætninger. ^[Dette er en fodnote.]
```

> [!note]
> Fodnoter i sætninger virker kun i læsningstilstand og ikke i live forhåndvisning.

## Kommentarer

Du kan tilføje kommentarer ved at starte og afslutte med `%%`. Kommentarer er kun synlige i redigerinsgtilstand.

```md
Dette er en %%indlejret%% kommentar.

%%
Dette er en kommentarblok.

Kommentarblokke kan spænde over flere linjer.
%%
```

## Anvendelse af specialtegn i Markdown

I nogle tilfælde har du måske brug for at vise specialtegn i Markdown, såsom `*`, `_`, eller `#` uden at det trigger en formattering. For at vise tegnene som de er, så placer en baglæns skråstreg (`\`) før tegnet.

> [!example] Nogle almindelige tegn som man fx. vil vise
> 
> - Gangetegn: `\*`
> - Understreg: `\_`
> - Havelåge/Hashtag: `\#`
> - Backtick: `` \` ``
> - Lodret streg/Pipe (brugt i tabeller): `\|`
> - Tilde: `\~`

```md
\*Denne tekst kommer ikke til at stå i kursiv\*.
```

\*Denne tekst kommer ikke til at stå i kursiv\*.

Hvis du har brug for at vise et punktum efter et tal i en ordnet liste, så det ikke bliver en del af den automatiske nummerformatering kan du placere en baglæns skråstreg (`\`) før punktummet. Det skal **ikke** placeres før tallet.

```md
1\. Dette bliver ikke et listelement
```

1\. Dette bliver ikke et listelement

## Lær mere

Du kan lære om avanceret formateringssynktaks såsom tabeller, diagrammer og matematiske udtryk i guiden: [[Avenceret formaterings syntaks]].

Hvis du vil vide mere om hvordan Obsidian fortolker Markdown, så læs guiden: [[Obsidians Markdown format]].
