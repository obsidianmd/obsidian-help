---
permalink: syntax
publish: true
mobile: true
description: Lär dig hur du tillämpar grundläggande formatering på dina anteckningar i Obsidian med hjälp av Markdown.
---
Lär dig hur du tillämpar grundläggande formatering på dina anteckningar med hjälp av [Markdown](https://daringfireball.net/projects/markdown/). För mer avancerad formateringssyntax, se [[Avancerad formateringssyntax]].

## Stycken

För att skapa stycken i Markdown, använd en **tom rad** för att separera textblock. Varje textblock som separeras med en tom rad behandlas som ett separat stycke.

```md
Det här är ett stycke.

Det här är ett annat stycke.
```

Det här är ett stycke.

Det här är ett annat stycke.

En tom rad mellan textrader skapar separata stycken. Detta är standardbeteendet i Markdown.

> [!tip]- Flera tomma mellanslag
> Flera intilliggande tomma mellanslag inom och mellan stycken fälls ihop till ett enda mellanslag vid visning i [[Vyer och redigeringsläge#Läsvy|Läsvy]] eller på [[Introduktion till Obsidian Publish|Obsidian Publish]]-webbplatser.
> 
> ```md
> Flera          intilliggande          mellanslag
> 
> 
> 
> och flera radbyten mellan stycken.
> ```
> 
> > Flera          intilliggande          mellanslag
> > 
> > 
> > 
> > och flera radbyten mellan stycken.
> 
> Om du vill förhindra att mellanslag fälls ihop eller lägga till flera tomma mellanslag kan du använda HTML-taggarna `&nbsp;` (icke-brytande mellanslag) eller `<br>` (radbrytning).

### Radbrytningar

Som standard i Obsidian skapar ett tryck på `Enter` en ny rad i din anteckning, men detta behandlas som en *fortsättning* av samma stycke i den renderade utmatningen, i enlighet med typiskt Markdown-beteende. För att infoga en radbrytning *inom* ett stycke utan att starta ett nytt stycke kan du antingen:

- Lägga till **två mellanslag** i slutet av en rad innan du trycker `Enter`, eller
- Använda genvägen `Shift+Enter` för att direkt infoga en radbrytning.

> [!question]- Varför skapar inte flera `Enter`-tryckningar fler radbrytningar i läsvy?
> I Markdown ignoreras ett enskilt `Enter`, och flera på varandra följande `Enter`-tryckningar resulterar i bara ett nytt stycke. Detta beteende följer Markdowns regel för mjuk radbrytning, där extra tomma rader inte genererar ytterligare radbrytningar eller stycken — de fälls ihop till en enda styckebrytning. Så här hanterar Markdown text som standard, vilket säkerställer att stycken flödar naturligt utan oväntade brytningar.

Obsidian inkluderar en inställning för **[[Inställningar#Stränga radbyten|Stränga radbyten]]**, som gör att Obsidian följer Markdowns standardspecifikation för radbrytningar.

För att aktivera den här funktionen:

1. Öppna **[[Inställningar]]**.
2. Gå till fliken **Redigerare**.
3. Aktivera **Stränga radbyten**.

När **Stränga radbyten** är aktiverat i Obsidian har radbrytningar tre distinkta beteenden beroende på hur raderna separeras:

**Enkel retur utan mellanslag**: Ett enskilt `Enter` utan efterföljande mellanslag slår ihop de två separata raderna till en enda rad vid rendering.

```md
rad ett
rad två
```

Renderas som:

rad ett rad två

**Enkel retur med två eller fler efterföljande mellanslag**: Om du lägger till två eller fler mellanslag i slutet av den första raden innan du trycker `Enter`, förblir de två raderna del av samma stycke, men separeras med en radbrytning (HTML `<br>`-element). Vi använder två understreck för att representera mellanslag i detta exempel.

```md
rad tre__  
rad fyra
```

Renderas som:

rad tre<br>
rad fyra

**Dubbel retur (med eller utan efterföljande mellanslag)**: Att trycka `Enter` två gånger (eller fler) separerar raderna i två distinkta stycken (HTML `<p>`-element), oavsett om du lägger till mellanslag i slutet av den första raden.

```md
rad fem

rad sex
```

Renderas som:

<p>rad fem</p>
<p>rad sex</p>

## Rubriker

För att skapa en rubrik, lägg till upp till sex `#`-symboler före din rubriktext. Antalet `#`-symboler bestämmer rubriknivån (som visas i [[Disposition]]).

```md
# Detta är en rubrik 1
## Detta är en rubrik 2
### Detta är en rubrik 3
#### Detta är en rubrik 4
##### Detta är en rubrik 5
###### Detta är en rubrik 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Detta är en rubrik 1</h1>
<h2>Detta är en rubrik 2</h2>
<h3>Detta är en rubrik 3</h3>
<h4>Detta är en rubrik 4</h4>
<h5>Detta är en rubrik 5</h5>
<h6>Detta är en rubrik 6</h6>

## Fet, kursiv, markeringar

Textformatering kan även tillämpas med [[Redigeringsgenvägar]].

| Stil | Syntax | Exempel | Utmatning |
|-|-|-|-|
| Fet | `** **` eller `__ __` | `**Fet text**` | **Fet text** |
| Kursiv | `* *` eller `_ _`  | `*Kursiv text*` | *Kursiv text* |
| Genomstrykning | `~~ ~~` |  `~~Genomstruken text~~` | ~~Genomstruken text~~ |
| Markering | `== ==` |  `==Markerad text==` | ==Markerad text== |
| Fet och nästlad kursiv | `** **` och `_ _`  | `**Fet text och _nästlad kursiv_ text**` | **Fet text och _nästlad kursiv_ text** |
| Fet och kursiv | `*** ***` eller `___ ___` |  `***Fet och kursiv text***` | ***Fet och kursiv text*** |

Formatering kan tvingas att visas som oformaterad text genom att lägga till ett omvänt snedstreck `\` framför den.

\*\*Den här raden kommer inte att vara fet\*\*

```markdown
\*\*Den här raden kommer inte att vara fet\*\*
```

\**Den här raden kommer att vara kursiv och visa asteriskerna*\*

```markdown
\**Den här raden kommer att vara kursiv och visa asteriskerna*\*
```

## Interna länkar

Obsidian stödjer två format för [[Interna länkar]] mellan anteckningar:

- Wikilänk: `[[Newtons tre rörelselagar]]`
- Markdown: `[Newtons tre rörelselagar](Newtons%20tre%20rörelselagar.md)`

## Externa länkar

Om du vill länka till en extern URL kan du skapa en inline-länk genom att omge länktexten med hakparenteser (`[ ]`), och sedan URL:en med vanliga parenteser (`( )`).

```md
[Obsidian Help](https://help.obsidian.md)
```

[Obsidian Help](https://help.obsidian.md)

Du kan även skapa externa länkar till filer i andra valv genom att länka till en [[Obsidian URI|Obsidian URI]].

```md
[Anteckning](obsidian://open?vault=MainVault&file=Note.md)
```

### Undvika mellanslag i länkar

Om din URL innehåller mellanslag måste du escape:a dem genom att ersätta dem med `%20`.

```md
[Min anteckning](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Du kan också escape:a URL:en genom att omsluta den med vinkelparenteser (`< >`).

```md
[Min anteckning](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Externa bilder

Du kan lägga till bilder med externa URL:er genom att lägga till en `!`-symbol före en [[#Externa länkar|extern länk]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Du kan ändra bildens dimensioner genom att lägga till `|640x480` till länkdestinationen, där 640 är bredden och 480 är höjden.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Om du bara anger bredden skalas bilden enligt sitt ursprungliga bildförhållande. Till exempel:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Tips
> Om du vill lägga till en bild inifrån ditt valv kan du även [[Bädda in filer#Bädda in en bild i en anteckning|bädda in en bild i en anteckning]].

## Citat

Du kan citera text genom att lägga till en `>`-symbol före texten.

```md
> Människor ställs inför allt mer komplexa och brådskande problem, och deras effektivitet i att hantera dessa problem är en fråga som är kritisk för samhällets stabilitet och fortsatta framsteg.

\- Doug Engelbart, 1961
```

> Människor ställs inför allt mer komplexa och brådskande problem, och deras effektivitet i att hantera dessa problem är en fråga som är kritisk för samhällets stabilitet och fortsatta framsteg.

\- Doug Engelbart, 1961

> [!tip]- Tips
> Du kan göra om ditt citat till en [[Notiser|notis]] genom att lägga till `[!info]` som första rad i ett citat.

## Listor

Du kan skapa en osorterad lista genom att lägga till ett `-`, `*` eller `+` före texten.

```md
- Första listobjektet
- Andra listobjektet
- Tredje listobjektet
```

- Första listobjektet
- Andra listobjektet
- Tredje listobjektet

För att skapa en sorterad lista, börja varje rad med ett nummer följt av en `.`- eller `)`-symbol.

```md
1. Första listobjektet
2. Andra listobjektet
3. Tredje listobjektet
```

1. Första listobjektet
2. Andra listobjektet
3. Tredje listobjektet

```md
1) Första listobjektet
2) Andra listobjektet
3) Tredje listobjektet
```

1) Första listobjektet
2) Andra listobjektet
3) Tredje listobjektet

Du kan använda `Shift+Enter` för att infoga en [[#Radbrytningar|radbrytning]] inom en sorterad lista utan att ändra numreringen.

```md
1. Första listobjektet
   
2. Andra listobjektet
3. Tredje listobjektet
   
4. Fjärde listobjektet
5. Femte listobjektet
6. Sjätte listobjektet
```

### Att göra-listor

För att skapa en att göra-lista, börja varje listobjekt med ett bindestreck och mellanslag följt av `[ ]`.

```md
- [x] Detta är en slutförd uppgift.
- [ ] Detta är en ofullständig uppgift.
```

- [x] Detta är en slutförd uppgift.
- [ ] Detta är en ofullständig uppgift.

Du kan markera en uppgift i läsvy genom att klicka på kryssrutan.

> [!tip]- Tips
> Du kan använda valfritt tecken inom hakparenteserna för att markera den som slutförd.
>
> ```md
> - [x] Mjölk
> - [?] Ägg
> - [-] Ägg
> ```
>
> - [x] Mjölk
> - [?] Ägg
> - [-] Ägg

### Nästlade listor

Du kan nästla alla typer av listor — sorterade, osorterade eller att göra-listor — under vilken annan listtyp som helst.

För att skapa en nästlad lista, dra in ett eller flera listobjekt. Du kan blanda listtyper inom en nästlad struktur:

```md
1. Första listobjektet
   1. Sorterat nästlat listobjekt
2. Andra listobjektet
   - Osorterat nästlat listobjekt
```

1. Första listobjektet
   1. Sorterat nästlat listobjekt
2. Andra listobjektet
   - Osorterat nästlat listobjekt

På samma sätt kan du skapa en nästlad att göra-lista genom att dra in ett eller flera listobjekt:

```md
- [ ] Uppgift 1
	- [ ] Deluppgift 1
- [ ] Uppgift 2
	- [ ] Deluppgift 1
```

- [ ] Uppgift 1
	- [ ] Deluppgift 1
- [ ] Uppgift 2
	- [ ] Deluppgift 1

Använd `Tab` eller `Shift+Tab` för att dra in eller ta bort indrag på valda listobjekt för att enkelt organisera dem.

## Horisontell linje

Du kan använda tre eller fler stjärnor `***`, bindestreck `---` eller understreck `___` på en egen rad för att lägga till en horisontell linje. Du kan även separera symbolerna med mellanslag.

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

## Kod

Du kan formatera kod både inline inom en mening eller i ett eget block.

### Inline-kod

Du kan formatera kod inom en mening med enkla bakåtfästingar.

```md
Text inom `bakåtfästingar` på en rad formateras som kod.
```

Text inom `bakåtfästingar` på en rad formateras som kod.

Om du vill sätta bakåtfästingar i ett inline-kodblock, omge det med dubbla bakåtfästingar så här: inline ``kod med en bakåtfästing ` inuti``.

### Kodblock

För att formatera kod som ett block, omslut den med tre eller fler bakåtfästingar eller tre eller fler tilden.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

Du kan också skapa ett kodblock genom att dra in texten med `Tab` eller 4 mellanslag.
`````md
    cd ~/Desktop
`````

Du kan lägga till syntaxmarkering i ett kodblock genom att lägga till en språkkod efter den första uppsättningen bakåtfästingar.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

Obsidian använder Prism för syntaxmarkering. För mer information, se [Supported languages](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS och redigeringsvyer
> [[Vyer och redigeringsläge#Källkodsläge|Källkodsläge]] och [[Vyer och redigeringsläge#Live-förhandsvisning|Live-förhandsvisning]] stödjer inte PrismJS och kan rendera syntaxmarkering på ett annat sätt.

#### Nästlade kodblock

När du behöver inkludera ett kodblock inuti ett annat kodblock (till exempel när du dokumenterar hur man använder kodblock) kan du använda fler än tre bakåtfästingar eller tilden för det yttre kodblocket.

För att nästla kodblock, använd fyra eller fler bakåtfästingar (eller tilden) för det yttre blocket, medan det inre blocket använder tre:
`````md
````md
Så här skapar du ett kodblock:
```js
console.log("Hello world")
```
````
`````

Du kan också blanda bakåtfästingar och tilden. Detta är särskilt användbart när du arbetar med kod som genererar andra kodblock:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

Nyckelprincipen är att det yttre kodblocket måste använda **fler** avgränningstecken (bakåtfästingar eller tilden) än något inre kodblock, eller använda en annan typ av avgränningstecken.

## Fotnoter

Du kan lägga till fotnoter[^footnote] i dina anteckningar med följande syntax:

[^footnote]: Detta är en fotnot.

```md
Detta är en enkel fotnot[^1].

[^1]: Detta är den refererade texten.
[^2]: Lägg till 2 mellanslag i början av varje ny rad.
  Detta låter dig skriva fotnoter som spänner över flera rader.
[^note]: Namngivna fotnoter visas fortfarande som nummer, men kan göra det enklare att identifiera och länka referenser.
```

Du kan också använda inline-fotnoter i en mening. Observera att cirkumflex-tecknet hamnar utanför hakparenteserna.

```md
Du kan också använda inline-fotnoter. ^[Detta är en inline-fotnot.]
```

> [!note] Notera
> Inline-fotnoter fungerar bara i läsvy, inte i live-förhandsvisning.

## Kommentarer

Du kan lägga till kommentarer genom att omsluta text med `%%`. Kommentarer är bara synliga i redigeringsvyn.

```md
Detta är en %%inline%% kommentar.

%%
Detta är en blockkommentar.

Blockkommentarer kan spänna över flera rader.
%%
```

## Escape:a Markdown-syntax

I vissa fall kan du behöva visa specialtecken i Markdown, som `*`, `_` eller `#`, utan att utlösa deras formatering. För att visa dessa tecken bokstavligt, placera ett omvänt snedstreck (`\`) framför dem.

> [!example] Vanliga tecken att escape:a
> 
> - Asterisk: `\*`
> - Understreck: `\_`
> - Hashtag: `\#`
> - Bakåtfästing: `` \` ``
> - Lodstreck (används i tabeller): `\|`
> - Tilde: `\~`

```md
\*Denna text kommer inte att vara kursiv\*.
```

\*Denna text kommer inte att vara kursiv\*.

När du arbetar med numrerade listor kan du behöva escape:a punkten efter numret för att förhindra automatisk listformatering. Placera det omvända snedstrecket (`\`) före punkten, **inte** före numret.

```md
1\. Detta kommer inte att vara ett listobjekt.
```

1\. Detta kommer inte att vara ett listobjekt.

## Läs mer

För att lära dig mer avancerad formateringssyntax, som tabeller, diagram och matematiska uttryck, se [[Avancerad formateringssyntax]].

För att lära dig mer om hur Obsidian tolkar Markdown, se [[Obsidian Flavored Markdown]].
