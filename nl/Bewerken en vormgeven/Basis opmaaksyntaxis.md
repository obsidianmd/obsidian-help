---
permalink: syntax
publish: true
mobile: true
description: Leer hoe u basisopmaak toepast op uw notities in Obsidian met behulp van Markdown.
---
Leer hoe je basisopmaak toepast op je notities met behulp van [Markdown](https://daringfireball.net/projects/markdown/). Raadpleeg voor meer geavanceerde opmaaksyntaxis [[Geavanceerde opmaaksyntaxis]].

## Alinea's

Om alinea's te maken in Markdown, gebruik je een **lege regel** om blokken tekst te scheiden. Elk blok tekst dat door een lege regel wordt gescheiden, wordt behandeld als een afzonderlijke alinea.

```md
Dit is een alinea.

Dit is een andere alinea.
```

Dit is een alinea.

Dit is een andere alinea.

Een lege regel tussen tekstregels maakt afzonderlijke alinea's. Dit is het standaardgedrag in Markdown.

> [!tip]- Meerdere lege spaties
> Meerdere opeenvolgende lege spaties binnen en tussen alinea's worden samengevouwen tot één enkele spatie wanneer ze worden weergegeven in [[Weergaven en bewerkingsmodus#Leesweergave|leesweergave]] of op [[Inleiding tot Obsidian Publish|Obsidian Publish]]-sites.
> 
> ```md
> Meerdere          opeenvolgende          spaties
> 
> 
> 
> en meerdere lege regels tussen alinea's.
> ```
> 
> > Meerdere          opeenvolgende          spaties
> > 
> > 
> > 
> > en meerdere lege regels tussen alinea's.
> 
> Als je wilt voorkomen dat spaties samenvallen of meerdere lege spaties wilt toevoegen, kun je de `&nbsp;` (vaste spatie) of `<br>` (regeleinde) HTML-tags gebruiken.

### Regeleinden

Standaard maakt het eenmaal indrukken van `Enter` in Obsidian een nieuwe regel in je notitie, maar dit wordt behandeld als een *voortzetting* van dezelfde alinea in de weergegeven uitvoer, volgens typisch Markdown-gedrag. Om een regeleinde *binnen* een alinea in te voegen zonder een nieuwe alinea te beginnen, kun je:

- **Twee spaties** toevoegen aan het einde van een regel voordat je `Enter` indrukt, of
- De sneltoets `Shift+Enter` gebruiken om direct een regeleinde in te voegen.

> [!question]- Waarom maken meerdere keren `Enter` geen extra regeleinden in de leesweergave?
> In Markdown wordt een enkele `Enter` genegeerd, en meerdere opeenvolgende `Enter`-toetsaanslagen resulteren in slechts één nieuwe alinea. Dit gedrag sluit aan bij Markdown's soft wrap-regel, waarbij extra lege regels geen aanvullende regeleinden of alinea's genereren — ze worden samengevoegd tot één enkele alinea-scheiding. Dit is hoe Markdown standaard met tekst omgaat, zodat alinea's natuurlijk doorlopen zonder onverwachte onderbrekingen​.

Obsidian bevat een instelling **[[Instellingen#Strikt regeleinde|Strikt regeleinde]]**, waardoor Obsidian de standaard Markdown-specificatie voor regeleinden volgt.

Om deze functie in te schakelen:

1. Open **[[Instellingen]]**.
2. Ga naar het tabblad **Editor**.
3. Schakel **Strikt regeleinde** in.

Wanneer **Strikt regeleinde** is ingeschakeld in Obsidian, hebben regeleinden drie verschillende gedragingen, afhankelijk van hoe de regels worden gescheiden:

**Enkele return zonder spaties**: Een enkele `Enter` zonder afsluitende spaties combineert de twee afzonderlijke regels tot één enkele regel bij het weergeven.

```md
regel een
regel twee
```

Wordt weergegeven als:

regel een regel twee

**Enkele return met twee of meer afsluitende spaties**: Als je twee of meer spaties toevoegt aan het einde van de eerste regel voordat je `Enter` indrukt, blijven de twee regels deel van dezelfde alinea, maar worden ze gescheiden door een regeleinde (HTML `<br>`-element). We gebruiken twee underscores als vervanging voor spaties in dit voorbeeld.

```md
regel drie__  
regel vier
```

Wordt weergegeven als:

regel drie<br>
regel vier

**Dubbele return (met of zonder afsluitende spaties)**: Twee keer (of vaker) `Enter` indrukken scheidt de regels in twee afzonderlijke alinea's (HTML `<p>`-elementen), ongeacht of je spaties toevoegt aan het einde van de eerste regel.

```md
regel vijf

regel zes
```

Wordt weergegeven als:

<p>regel vijf</p>
<p>regel zes</p>

## Koppen

Om een kop te maken, voeg je maximaal zes `#`-symbolen toe vóór je koptekst. Het aantal `#`-symbolen bepaalt het niveau van de kop (zoals weergegeven in het [[Overzicht]]).

```md
# Dit is een kop 1
## Dit is een kop 2
### Dit is een kop 3
#### Dit is een kop 4
##### Dit is een kop 5
###### Dit is een kop 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Dit is een kop 1</h1>
<h2>Dit is een kop 2</h2>
<h3>Dit is een kop 3</h3>
<h4>Dit is een kop 4</h4>
<h5>Dit is een kop 5</h5>
<h6>Dit is een kop 6</h6>

## Vet, cursief, markeringen

Tekstopmaak kan ook worden toegepast met behulp van [[Sneltoetsen voor bewerken]].

| Stijl | Syntaxis | Voorbeeld | Uitvoer |
|-|-|-|-|
| Vet | `** **` of `__ __` | `**Vetgedrukte tekst**` | **Vetgedrukte tekst** |
| Cursief | `* *` of `_ _`  | `*Cursieve tekst*` | *Cursieve tekst* |
| Doorhalen | `~~ ~~` |  `~~Doorgehaalde tekst~~` | ~~Doorgehaalde tekst~~ |
| Markeren | `== ==` |  `==Gemarkeerde tekst==` | ==Gemarkeerde tekst== |
| Vet en genest cursief | `** **` en `_ _`  | `**Vetgedrukte tekst en _genest cursieve_ tekst**` | **Vetgedrukte tekst en _genest cursieve_ tekst** |
| Vet en cursief | `*** ***` of `___ ___` |  `***Vetgedrukte en cursieve tekst***` | ***Vetgedrukte en cursieve tekst*** |

Opmaak kan worden gedwongen om als platte tekst weer te geven door er een backslash `\` voor te plaatsen.

\*\*Deze regel wordt niet vetgedrukt\*\*

```markdown
\*\*Deze regel wordt niet vetgedrukt\*\*
```

\**Deze regel wordt cursief weergegeven en toont de sterretjes*\*

```markdown
\**Deze regel wordt cursief weergegeven en toont de sterretjes*\*
```

## Interne koppelingen

Obsidian ondersteunt twee formaten voor [[Interne koppelingen|interne koppelingen]] tussen notities:

- Wiki-link: `[[Drie wetten van beweging]]`
- Markdown: `[Drie wetten van beweging](Drie%20wetten%20van%20beweging.md)`

## Externe koppelingen

Als je naar een externe URL wilt linken, kun je een inline koppeling maken door de linktekst tussen vierkante haken (`[ ]`) te plaatsen, en vervolgens de URL tussen ronde haken (`( )`).

```md
[Obsidian Help](https://help.obsidian.md)
```

[Obsidian Help](https://help.obsidian.md)

Je kunt ook externe koppelingen maken naar bestanden in andere kluizen, door te linken naar een [[Obsidian URI|Obsidian URI]].

```md
[Notitie](obsidian://open?vault=MainVault&file=Note.md)
```

### Spaties escapen in koppelingen

Als je URL spaties bevat, moet je deze escapen door ze te vervangen door `%20`.

```md
[Mijn Notitie](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Je kunt de URL ook escapen door deze te omgeven met punthaken (`< >`).

```md
[Mijn Notitie](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Externe afbeeldingen

Je kunt afbeeldingen met externe URL's toevoegen door een `!`-symbool vóór een [[#Externe koppelingen|externe koppeling]] te plaatsen.

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Je kunt de afbeeldingsafmetingen wijzigen door `|640x480` toe te voegen aan de linkbestemming, waarbij 640 de breedte is en 480 de hoogte.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Als je alleen de breedte opgeeft, wordt de afbeelding geschaald volgens de oorspronkelijke beeldverhouding. Bijvoorbeeld:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Tip
> Als je een afbeelding vanuit je kluis wilt toevoegen, kun je ook [[Bestanden insluiten#Een afbeelding insluiten in een notitie|een afbeelding insluiten in een notitie]].

## Citaten

Je kunt tekst citeren door een `>`-symbool vóór de tekst te plaatsen.

```md
> De mens staat voor steeds complexere en urgentere problemen, en hun effectiviteit bij het aanpakken van deze problemen is een kwestie die van cruciaal belang is voor de stabiliteit en voortdurende vooruitgang van de samenleving.

\- Doug Engelbart, 1961
```

> De mens staat voor steeds complexere en urgentere problemen, en hun effectiviteit bij het aanpakken van deze problemen is een kwestie die van cruciaal belang is voor de stabiliteit en voortdurende vooruitgang van de samenleving.

\- Doug Engelbart, 1961

> [!tip]- Tip
> Je kunt je citaat omzetten in een [[Bijschriften|infoblok]] door `[!info]` als eerste regel in een citaat toe te voegen.

## Lijsten

Je kunt een ongeordende lijst maken door een `-`, `*` of `+` vóór de tekst te plaatsen.

```md
- Eerste lijstitem
- Tweede lijstitem
- Derde lijstitem
```

- Eerste lijstitem
- Tweede lijstitem
- Derde lijstitem

Om een geordende lijst te maken, begin je elke regel met een nummer gevolgd door een `.` of `)` symbool.

```md
1. Eerste lijstitem
2. Tweede lijstitem
3. Derde lijstitem
```

1. Eerste lijstitem
2. Tweede lijstitem
3. Derde lijstitem

```md
1) Eerste lijstitem
2) Tweede lijstitem
3) Derde lijstitem
```

1) Eerste lijstitem
2) Tweede lijstitem
3) Derde lijstitem

Je kunt `Shift+Enter` gebruiken om een [[#Regeleinden|regeleinde]] in te voegen binnen een geordende lijst zonder de nummering te wijzigen.

```md
1. Eerste lijstitem
   
2. Tweede lijstitem
3. Derde lijstitem
   
4. Vierde lijstitem
5. Vijfde lijstitem
6. Zesde lijstitem
```

### Takenlijsten

Om een takenlijst te maken, begin je elk lijstitem met een koppelteken en spatie gevolgd door `[ ]`.

```md
- [x] Dit is een voltooide taak.
- [ ] Dit is een onvoltooide taak.
```

- [x] Dit is een voltooide taak.
- [ ] Dit is een onvoltooide taak.

Je kunt een taak aan- of uitvinken in de leesweergave door het selectievakje te selecteren.

> [!tip]- Tip
> Je kunt elk willekeurig teken binnen de vierkante haken gebruiken om het als voltooid te markeren.
>
> ```md
> - [x] Melk
> - [?] Eieren
> - [-] Eieren
> ```
>
> - [x] Melk
> - [?] Eieren
> - [-] Eieren

### Geneste lijsten

Je kunt elk type lijst — geordend, ongeordend of takenlijsten — nesten onder elk ander type lijst.

Om een geneste lijst te maken, spring je een of meer lijstitems in. Je kunt lijsttypen combineren binnen een geneste structuur:

```md
1. Eerste lijstitem
   1. Geordend genest lijstitem
2. Tweede lijstitem
   - Ongeordend genest lijstitem
```

1. Eerste lijstitem
   1. Geordend genest lijstitem
2. Tweede lijstitem
   - Ongeordend genest lijstitem

Op dezelfde manier kun je een geneste takenlijst maken door een of meer lijstitems in te springen:

```md
- [ ] Taakitem 1
	- [ ] Subtaak 1
- [ ] Taakitem 2
	- [ ] Subtaak 1
```

- [ ] Taakitem 1
	- [ ] Subtaak 1
- [ ] Taakitem 2
	- [ ] Subtaak 1

Gebruik `Tab` of `Shift+Tab` om geselecteerde lijstitems in te springen of de inspringing te verkleinen zodat je ze eenvoudig kunt organiseren.

## Horizontale lijn

Je kunt drie of meer sterretjes `***`, koppeltekens `---` of underscores `___` op een eigen regel gebruiken om een horizontale lijn toe te voegen. Je kunt symbolen ook scheiden met spaties.

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

## Code

Je kunt code opmaken, zowel inline binnen een zin als in een eigen blok.

### Inline code

Je kunt code binnen een zin opmaken met enkele backticks.

```md
Tekst binnen `backticks` op een regel wordt opgemaakt als code.
```

Tekst binnen `backticks` op een regel wordt opgemaakt als code.

Als je backticks in een inline codeblok wilt plaatsen, omgeef het dan met dubbele backticks, zoals: inline ``code met een backtick ` erin``.

### Codeblokken

Om code als blok op te maken, omsluit je het met drie of meer backticks of drie of meer tildes.

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

Je kunt ook een codeblok maken door de tekst in te springen met `Tab` of 4 spaties.
`````md
    cd ~/Desktop
`````

Je kunt syntaxismarkering toevoegen aan een codeblok door een taalcode toe te voegen na de eerste reeks backticks.

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

Obsidian gebruikt Prism voor syntaxismarkering. Raadpleeg [Ondersteunde talen](https://prismjs.com/#supported-languages) voor meer informatie.

> [!info]+ PrismJS en bewerkingsweergaven
> [[Weergaven en bewerkingsmodus#Bronmodus|Bronmodus]] en [[Weergaven en bewerkingsmodus#Live voorbeeld|Live voorbeeld]] ondersteunen PrismJS niet en kunnen syntaxismarkering anders weergeven.

#### Geneste codeblokken

Wanneer je een codeblok binnen een ander codeblok moet opnemen (bijvoorbeeld bij het documenteren van het gebruik van codeblokken), kun je meer dan drie backticks of tildes gebruiken voor het buitenste codeblok.

Om codeblokken te nesten, gebruik je vier of meer backticks (of tildes) voor het buitenste blok, terwijl het binnenste blok er drie gebruikt:
`````md
````md
Zo maak je een codeblok:
```js
console.log("Hello world")
```
````
`````

Je kunt ook backticks en tildes combineren. Dit is bijzonder handig wanneer je werkt met code die andere codeblokken genereert:
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

Het belangrijkste principe is dat het buitenste codeblok **meer** fence-tekens (backticks of tildes) moet gebruiken dan elk binnenste codeblok, of een ander type fence-teken moet gebruiken.

## Voetnoten

Je kunt voetnoten[^footnote] toevoegen aan je notities met de volgende syntaxis:

[^footnote]: Dit is een voetnoot.

```md
Dit is een eenvoudige voetnoot[^1].

[^1]: Dit is de verwezen tekst.
[^2]: Voeg 2 spaties toe aan het begin van elke nieuwe regel.
  Hierdoor kun je voetnoten schrijven die meerdere regels beslaan.
[^note]: Benoemde voetnoten verschijnen nog steeds als nummers, maar kunnen het gemakkelijker maken om verwijzingen te identificeren en te koppelen.
```

Je kunt ook inline voetnoten in een zin invoegen. Let op dat het dakje buiten de haakjes staat.

```md
Je kunt ook inline voetnoten gebruiken. ^[Dit is een inline voetnoot.]
```

> [!note] Opmerking
> Inline voetnoten werken alleen in de leesweergave, niet in Live voorbeeld.

Gebruik de [[Voetnotenweergave]] om alle voetnoten in een notitie te bekijken.

## Opmerkingen

Je kunt opmerkingen toevoegen door tekst te omgeven met `%%`. Opmerkingen zijn alleen zichtbaar in de bewerkingsweergave.

```md
Dit is een %%inline%% opmerking.

%%
Dit is een blokopmerking.

Blokopmerkingen kunnen meerdere regels beslaan.
%%
```

## Markdown-syntaxis escapen

In sommige gevallen moet je speciale tekens in Markdown weergeven, zoals `*`, `_` of `#`, zonder hun opmaak te activeren. Om deze tekens letterlijk weer te geven, plaats je een backslash (`\`) ervoor.

> [!example] Veelvoorkomende tekens om te escapen
> 
> - Sterretje: `\*`
> - Underscore: `\_`
> - Hashtag: `\#`
> - Backtick: `` \` ``
> - Pipe (gebruikt in tabellen): `\|`
> - Tilde: `\~`

```md
\*Deze tekst wordt niet cursief weergegeven\*.
```

\*Deze tekst wordt niet cursief weergegeven\*.

Bij genummerde lijsten moet je mogelijk de punt na het nummer escapen om automatische lijstopmaak te voorkomen. Plaats de backslash (`\`) vóór de punt, **niet** vóór het nummer.

```md
1\. Dit wordt geen lijstitem.
```

1\. Dit wordt geen lijstitem.

## Meer informatie

Raadpleeg [[Geavanceerde opmaaksyntaxis]] voor meer geavanceerde opmaaksyntaxis, zoals tabellen, diagrammen en wiskundige uitdrukkingen.

Raadpleeg [[Obsidian Flavored Markdown]] voor meer informatie over hoe Obsidian Markdown verwerkt.
