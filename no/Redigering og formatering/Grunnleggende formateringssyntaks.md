---
permalink: syntax
publish: true
mobile: true
description: Lær hvordan du bruker grunnleggende formatering på notatene dine i Obsidian ved hjelp av Markdown.
---
Lær hvordan du kan bruke grunnleggende formatering i notatene dine med [Markdown](https://daringfireball.net/projects/markdown/). For mer avansert formateringssyntaks, se [[Avansert formateringssyntaks]].

## Avsnitt

For å lage avsnitt i Markdown, bruk en **tom linje** til å skille tekstblokker. Hver tekstblokk som er skilt med en tom linje, behandles som et eget avsnitt.

```md
Dette er et avsnitt.

Dette er et annet avsnitt.
```

Dette er et avsnitt.

Dette er et annet avsnitt.

En tom linje mellom tekstlinjer skaper separate avsnitt. Dette er standardoppførselen i Markdown.

> [!tip]- Flere blanke mellomrom
> Flere sammenhengende blanke mellomrom innenfor og mellom avsnitt slås sammen til ett enkelt mellomrom når de vises i [[Visninger og redigeringsmodus#Lesevisning|lesevisning]] eller på [[Introduksjon til Obsidian Publish|Obsidian Publish]]-nettsteder.
> 
> ```md
> Flere          sammenhengende          mellomrom
> 
> 
> 
> og flere linjeskift mellom avsnitt.
> ```
> 
> > Flere          sammenhengende          mellomrom
> > 
> > 
> > 
> > og flere linjeskift mellom avsnitt.
> 
> Hvis du vil forhindre at mellomrom slås sammen eller legge til flere blanke mellomrom, kan du bruke `&nbsp;` (hardt mellomrom) eller `<br>` (linjeskift) HTML-tagger.

### Linjeskift

Som standard i Obsidian vil et trykk på `Enter` opprette en ny linje i notatet ditt, men dette behandles som en *fortsettelse* av det samme avsnittet i den gjengitte utgaven, i henhold til typisk Markdown-oppførsel. For å sette inn et linjeskift *innenfor* et avsnitt uten å starte et nytt avsnitt, kan du enten:

- Legge til **to mellomrom** på slutten av en linje før du trykker `Enter`, eller
- Bruke snarveien `Shift+Enter` for å sette inn et linjeskift direkte.

> [!question]- Hvorfor gir ikke flere `Enter`-trykk flere linjeskift i lesevisning?
> I Markdown ignoreres et enkelt `Enter`, og flere påfølgende `Enter`-trykk resulterer i bare ett nytt avsnitt. Denne oppførselen er i tråd med Markdowns myk-omslags-regel, der ekstra tomme linjer ikke genererer ytterligere linjeskift eller avsnitt – de slås sammen til et enkelt avsnittskift. Slik håndterer Markdown tekst som standard, og sikrer at avsnitt flyter naturlig uten uventede brudd.

Obsidian inkluderer en innstilling for **[[Innstillinger#Nøye linjeskift|Nøye linjeskift]]**, som gjør at Obsidian følger standard Markdown-spesifikasjonen for linjeskift.

For å aktivere denne funksjonen:

1. Åpne **[[Innstillinger]]**.
2. Gå til fanen **Editor**.
3. Aktiver **Nøye linjeskift**.

Når **Nøye linjeskift** er aktivert i Obsidian, har linjeskift tre ulike oppførsler avhengig av hvordan linjene er separert:

**Enkelt linjeskift uten mellomrom**: Et enkelt `Enter` uten etterfølgende mellomrom vil kombinere de to separate linjene til én enkelt linje når de gjengis.

```md
linje én
linje to
```

Gjengis som:

linje én linje to

**Enkelt linjeskift med to eller flere etterfølgende mellomrom**: Hvis du legger til to eller flere mellomrom på slutten av den første linjen før du trykker `Enter`, forblir de to linjene en del av det samme avsnittet, men deles av et linjeskift (HTML `<br>`-element). Vi bruker to understrekingstegn som erstatning for mellomrom i dette eksempelet.

```md
linje tre__  
linje fire
```

Gjengis som:

linje tre<br>
linje fire

**Dobbelt linjeskift (med eller uten etterfølgende mellomrom)**: Å trykke `Enter` to ganger (eller flere) separerer linjene til to distinkte avsnitt (HTML `<p>`-elementer), uavhengig av om du legger til mellomrom på slutten av den første linjen.

```md
linje fem

linje seks
```

Gjengis som:

<p>linje fem</p>
<p>linje seks</p>

## Overskrifter

For å lage en overskrift, legg til opptil seks `#`-symboler foran overskriftsteksten. Antallet `#`-symboler bestemmer overskriftsnivået (som vist i [[Disposisjon|Disposisjon]]).

```md
# Dette er overskrift 1
## Dette er overskrift 2
### Dette er overskrift 3
#### Dette er overskrift 4
##### Dette er overskrift 5
###### Dette er overskrift 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Dette er overskrift 1</h1>
<h2>Dette er overskrift 2</h2>
<h3>Dette er overskrift 3</h3>
<h4>Dette er overskrift 4</h4>
<h5>Dette er overskrift 5</h5>
<h6>Dette er overskrift 6</h6>

## Fet, kursiv, utheving

Tekstformatering kan også brukes via [[Redigeringssnarveier]].

| Stil | Syntaks | Eksempel | Resultat |
|-|-|-|-|
| Fet | `** **` eller `__ __` | `**Fet tekst**` | **Fet tekst** |
| Kursiv | `* *` eller `_ _`  | `*Kursiv tekst*` | *Kursiv tekst* |
| Gjennomstreking | `~~ ~~` |  `~~Gjennomstreket tekst~~` | ~~Gjennomstreket tekst~~ |
| Utheving | `== ==` |  `==Uthevet tekst==` | ==Uthevet tekst== |
| Fet med nestet kursiv | `** **` og `_ _`  | `**Fet tekst og _nestet kursiv_ tekst**` | **Fet tekst og _nestet kursiv_ tekst** |
| Fet og kursiv | `*** ***` eller `___ ___` |  `***Fet og kursiv tekst***` | ***Fet og kursiv tekst*** |

Formatering kan tvinges til å vises som ren tekst ved å legge til en omvendt skråstrek `\` foran den.

\*\*Denne linjen vil ikke være fet\*\*

```markdown
\*\*Denne linjen vil ikke være fet\*\*
```

\**Denne linjen vil være kursiv og vise stjernene*\*

```markdown
\**Denne linjen vil være kursiv og vise stjernene*\*
```

## Interne lenker

Obsidian støtter to formater for [[Interne lenker|interne lenker]] mellom notater:

- Wiki-lenke: `[[Bevegelsens tre lover]]`
- Markdown: `[Bevegelsens tre lover](Bevegelsens%20tre%20lover.md)`

## Eksterne lenker

Hvis du vil lenke til en ekstern URL, kan du lage en innebygd lenke ved å omslutte lenketeksten med hakeparenteser (`[ ]`), og deretter URL-en i parenteser (`( )`).

```md
[Obsidian Hjelp](https://help.obsidian.md)
```

[Obsidian Hjelp](https://help.obsidian.md)

Du kan også opprette eksterne lenker til filer i andre hvelv ved å lenke til en [[Obsidian URI|Obsidian URI]].

```md
[Notat](obsidian://open?vault=MainVault&file=Note.md)
```

### Escape mellomrom i lenker

Hvis URL-en din inneholder mellomrom, må du escape dem ved å erstatte dem med `%20`.

```md
[Mitt Notat](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Du kan også escape URL-en ved å omslutte den med vinkelparenteser (`< >`).

```md
[Mitt Notat](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Eksterne bilder

Du kan legge til bilder med eksterne URL-er ved å legge til et `!`-symbol foran en [[#Eksterne lenker|ekstern lenke]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Du kan endre bildedimensjonene ved å legge til `|640x480` i lenkedestinasjonen, der 640 er bredden og 480 er høyden.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Hvis du bare angir bredden, skaleres bildet i henhold til sitt opprinnelige sideforhold. For eksempel:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Tips
> Hvis du vil legge til et bilde fra hvelvet ditt, kan du også [[Bygge inn filer#Bygg inn et bilde i et notat|bygge inn et bilde i et notat]].

## Sitater

Du kan sitere tekst ved å legge til et `>`-symbol foran teksten.

```md
> Mennesker står overfor stadig mer komplekse og presserende problemer, og deres effektivitet i å håndtere disse problemene er en sak som er kritisk for stabiliteten og den videre fremgangen i samfunnet.

\- Doug Engelbart, 1961
```

> Mennesker står overfor stadig mer komplekse og presserende problemer, og deres effektivitet i å håndtere disse problemene er en sak som er kritisk for stabiliteten og den videre fremgangen i samfunnet.

\- Doug Engelbart, 1961

> [!tip]- Tips
> Du kan gjøre sitatet ditt om til en [[Uthevede blokker|uthevet blokk]] ved å legge til `[!info]` som den første linjen i et sitat.

## Lister

Du kan lage en usortert liste ved å legge til `-`, `*` eller `+` foran teksten.

```md
- Første listeelement
- Andre listeelement
- Tredje listeelement
```

- Første listeelement
- Andre listeelement
- Tredje listeelement

For å lage en ordnet liste, start hver linje med et tall etterfulgt av `.` eller `)`.

```md
1. Første listeelement
2. Andre listeelement
3. Tredje listeelement
```

1. Første listeelement
2. Andre listeelement
3. Tredje listeelement

```md
1) Første listeelement
2) Andre listeelement
3) Tredje listeelement
```

1) Første listeelement
2) Andre listeelement
3) Tredje listeelement

Du kan bruke `Shift+Enter` for å sette inn et [[#Linjeskift|linjeskift]] innenfor en ordnet liste uten å endre nummereringen.

```md
1. Første listeelement
   
2. Andre listeelement
3. Tredje listeelement
   
4. Fjerde listeelement
5. Femte listeelement
6. Sjette listeelement
```

### Oppgavelister

For å lage en oppgaveliste, start hvert listeelement med en bindestrek og mellomrom etterfulgt av `[ ]`.

```md
- [x] Dette er en fullført oppgave.
- [ ] Dette er en ufullstendig oppgave.
```

- [x] Dette er en fullført oppgave.
- [ ] Dette er en ufullstendig oppgave.

Du kan veksle en oppgave i lesevisning ved å velge avkrysningsboksen.

> [!tip]- Tips
> Du kan bruke et hvilket som helst tegn innenfor hakeparentesene for å merke den som fullført.
>
> ```md
> - [x] Melk
> - [?] Egg
> - [-] Egg
> ```
>
> - [x] Melk
> - [?] Egg
> - [-] Egg

### Nestede lister

Du kan neste alle typer lister – ordnede, usorterte eller oppgavelister – under hvilken som helst annen listetype.

For å lage en nestet liste, rykk inn ett eller flere listeelementer. Du kan blande listetyper innenfor en nestet struktur:

```md
1. Første listeelement
   1. Ordnet nestet listeelement
2. Andre listeelement
   - Usortert nestet listeelement
```

1. Første listeelement
   1. Ordnet nestet listeelement
2. Andre listeelement
   - Usortert nestet listeelement

På samme måte kan du lage en nestet oppgaveliste ved å rykke inn ett eller flere listeelementer:

```md
- [ ] Oppgave 1
	- [ ] Deloppgave 1
- [ ] Oppgave 2
	- [ ] Deloppgave 1
```

- [ ] Oppgave 1
	- [ ] Deloppgave 1
- [ ] Oppgave 2
	- [ ] Deloppgave 1

Bruk `Tab` eller `Shift+Tab` for å rykke inn eller redusere innrykk på valgte listeelementer for enkel organisering.

## Horisontal linje

Du kan bruke tre eller flere stjerner `***`, bindestreker `---` eller understrekingstegn `___` på en egen linje for å legge til en horisontal linje. Du kan også separere symbolene med mellomrom.

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

Du kan formatere kode både innebygd i en setning, eller i sin egen blokk.

### Innebygd kode

Du kan formatere kode innenfor en setning ved å bruke enkle backticks.

```md
Tekst innenfor `backticks` på en linje vil bli formatert som kode.
```

Tekst innenfor `backticks` på en linje vil bli formatert som kode.

Hvis du vil sette backticks i en innebygd kodeblokk, omslutter du den med doble backticks slik: innebygd ``kode med en backtick ` inni``.

### Kodeblokker

For å formatere kode som en blokk, omslutter du den med tre eller flere backticks eller tre eller flere tilder.

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

Du kan også lage en kodeblokk ved å rykke inn teksten med `Tab` eller 4 blanke mellomrom.
`````md
    cd ~/Desktop
`````

Du kan legge til syntaksutheving i en kodeblokk ved å legge til en språkkode etter det første settet med backticks.

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

Obsidian bruker Prism for syntaksutheving. For mer informasjon, se [Støttede språk](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS og redigeringsvisninger
> [[Visninger og redigeringsmodus#Kildemodus|Kildemodus]] og [[Visninger og redigeringsmodus#Live-forhåndsvisning|Live-forhåndsvisning]] støtter ikke PrismJS, og kan gjengi syntaksutheving annerledes.

#### Nestede kodeblokker

Når du trenger å inkludere en kodeblokk inne i en annen kodeblokk (for eksempel når du dokumenterer hvordan du bruker kodeblokker), kan du bruke mer enn tre backticks eller tilder for den ytre kodeblokken.

For å neste kodeblokker, bruk fire eller flere backticks (eller tilder) for den ytre blokken, mens den indre blokken bruker tre:
`````md
````md
Slik lager du en kodeblokk:
```js
console.log("Hello world")
```
````
`````

Du kan også blande backticks og tilder. Dette er spesielt nyttig når du arbeider med kode som genererer andre kodeblokker:
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

Nøkkelprinsippet er at den ytre kodeblokken må bruke **flere** gjerdetegn (backticks eller tilder) enn noen indre kodeblokk, eller bruke en annen type gjerdetegn.

## Fotnoter

Du kan legge til fotnoter[^footnote] i notatene dine ved å bruke følgende syntaks:

[^footnote]: Dette er en fotnote.

```md
Dette er en enkel fotnote[^1].

[^1]: Dette er den refererte teksten.
[^2]: Legg til 2 mellomrom i starten av hver ny linje.
  Dette lar deg skrive fotnoter som strekker seg over flere linjer.
[^note]: Navngitte fotnoter vises fortsatt som tall, men kan gjøre det enklere å identifisere og lenke referanser.
```

Du kan også legge inn fotnoter direkte i en setning. Merk at cirkumfleks-tegnet går utenfor hakeparentesene.

```md
Du kan også bruke innebygde fotnoter. ^[Dette er en innebygd fotnote.]
```

> [!note] Merk
> Innebygde fotnoter fungerer bare i lesevisning, ikke i Live-forhåndsvisning.

Bruk [[Fotnoter-visning|Fotnoter-visningen]] for å se alle fotnoter i et notat.

## Kommentarer

Du kan legge til kommentarer ved å omslutte tekst med `%%`. Kommentarer er bare synlige i redigeringsvisning.

```md
Dette er en %%innebygd%% kommentar.

%%
Dette er en blokkkommentar.

Blokkkommentarer kan strekke seg over flere linjer.
%%
```

## Escape av Markdown-syntaks

I noen tilfeller kan du trenge å vise spesialtegn i Markdown, som `*`, `_` eller `#`, uten å utløse formateringen deres. For å vise disse tegnene bokstavelig, plasser en omvendt skråstrek (`\`) foran dem.

> [!example] Vanlige tegn å escape
> 
> - Stjerne: `\*`
> - Understrekingstegn: `\_`
> - Hashtag: `\#`
> - Backtick: `` \` ``
> - Pipe (brukt i tabeller): `\|`
> - Tilde: `\~`

```md
\*Denne teksten vil ikke bli kursiv\*.
```

\*Denne teksten vil ikke bli kursiv\*.

Når du arbeider med nummererte lister, kan du trenge å escape punktumet etter tallet for å forhindre automatisk listeformatering. Plasser den omvendte skråstreken (`\`) foran punktumet, **ikke** foran tallet.

```md
1\. Dette vil ikke bli et listeelement.
```

1\. Dette vil ikke bli et listeelement.

## Les mer

For å lære mer om avansert formateringssyntaks, som tabeller, diagrammer og matematiske uttrykk, se [[Avansert formateringssyntaks]].

For å lære mer om hvordan Obsidian tolker Markdown, se [[Obsidian Flavored Markdown]].
