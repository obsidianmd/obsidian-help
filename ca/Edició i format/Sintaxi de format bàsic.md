---
permalink: syntax
publish: true
mobile: true
description: 'Apreneu a aplicar format bàsic a les vostres notes a Obsidian, utilitzant Markdown.'
---
Apreneu com aplicar format bàsic a les vostres notes, utilitzant [Markdown](https://daringfireball.net/projects/markdown/). Per a sintaxi de format més avançat, consulteu [[Sintaxi de format avançat]].

## Paràgrafs

Per crear paràgrafs en Markdown, utilitzeu una **línia en blanc** per separar blocs de text. Cada bloc de text separat per una línia en blanc es tracta com un paràgraf diferent.

```md
Això és un paràgraf.

Això és un altre paràgraf.
```

Això és un paràgraf.

Això és un altre paràgraf.

Una línia en blanc entre línies de text crea paràgrafs separats. Aquest és el comportament per defecte en Markdown.

> [!tip]- Múltiples espais en blanc
> Múltiples espais en blanc adjacents dins i entre paràgrafs es col·lapsen en un sol espai quan es mostren a la [[Vistes i mode d'edició#Vista de lectura|Vista de lectura]] o als llocs d'[[Introducció a Obsidian Publish|Obsidian Publish]].
> 
> ```md
> Múltiples          espais          adjacents
> 
> 
> 
> i múltiples salts de línia entre paràgrafs.
> ```
> 
> > Múltiples          espais          adjacents
> > 
> > 
> > 
> > i múltiples salts de línia entre paràgrafs.
> 
> Si voleu evitar que els espais es col·lapsin o afegir múltiples espais en blanc, podeu utilitzar les etiquetes HTML `&nbsp;` (espai sense trencament) o `<br>` (salt de línia).

### Salts de línia

Per defecte a Obsidian, prémer `Enter` una vegada crearà una nova línia a la vostra nota, però això es tracta com una *continuació* del mateix paràgraf a la sortida renderitzada, seguint el comportament típic de Markdown. Per inserir un salt de línia *dins* d'un paràgraf sense començar un paràgraf nou, podeu:

- Afegir **dos espais** al final d'una línia abans de prémer `Enter`, o
- Utilitzar la drecera `Maj+Enter` per inserir directament un salt de línia.

> [!question]- Per què múltiples pressions d'`Enter` no creen més salts de línia a la vista de lectura?
> En Markdown, un sol `Enter` s'ignora, i múltiples pressions consecutives d'`Enter` resulten en un sol paràgraf nou. Aquest comportament s'alinea amb la regla d'ajust suau de Markdown, on les línies en blanc addicionals no generen salts de línia o paràgrafs addicionals—es col·lapsen en un sol trencament de paràgraf. Així és com Markdown gestiona el text per defecte, assegurant que els paràgrafs flueixin naturalment sense trencaments inesperats​.

Obsidian inclou una configuració de **[[Configuració#Trencament de línia estricte|Trencament de línia estricte]]**, que fa que Obsidian segueixi l'especificació estàndard de Markdown per als salts de línia.

Per activar aquesta característica:

1. Obriu la **[[Configuració]]**.
2. Aneu a la pestanya **Editor**.
3. Activeu **Trencament de línia estricte**.

Quan el **Trencament de línia estricte** està activat a Obsidian, els salts de línia tenen tres comportaments diferents depenent de com se separen les línies:

**Retorn simple sense espais**: Un sol `Enter` sense espais al final combinarà les dues línies separades en una sola línia quan es renderitzi.

```md
línia u
línia dos
```

Es renderitza com:

línia u línia dos

**Retorn simple amb dos o més espais al final**: Si afegiu dos o més espais al final de la primera línia abans de prémer `Enter`, les dues línies romanen part del mateix paràgraf, però se separen per un salt de línia (element HTML `<br>`). Utilitzarem dos guions baixos per representar els espais en aquest exemple.

```md
línia tres__  
línia quatre
```

Es renderitza com:

línia tres<br>
línia quatre

**Doble retorn (amb o sense espais al final)**: Prémer `Enter` dues vegades (o més) separa les línies en dos paràgrafs diferents (elements HTML `<p>`), independentment de si afegiu espais al final de la primera línia.

```md
línia cinc

línia sis
```

Es renderitza com:

<p>línia cinc</p>
<p>línia sis</p>

## Encapçalaments

Per crear un encapçalament, afegiu fins a sis símbols `#` abans del text de l'encapçalament. El nombre de símbols `#` estableix el nivell de l'encapçalament (com es mostra a l'[[Esquema]]).

```md
# Això és un encapçalament 1
## Això és un encapçalament 2
### Això és un encapçalament 3
#### Això és un encapçalament 4
##### Això és un encapçalament 5
###### Això és un encapçalament 6
```

%% Aquests encapçalaments utilitzen HTML per evitar desordenar l'Esquema/Índex %%
<h1>Això és un encapçalament 1</h1>
<h2>Això és un encapçalament 2</h2>
<h3>Això és un encapçalament 3</h3>
<h4>Això és un encapçalament 4</h4>
<h5>Això és un encapçalament 5</h5>
<h6>Això és un encapçalament 6</h6>

## Negreta, cursiva, ressaltats

El format de text també es pot aplicar utilitzant les [[Dreceres d'edició]].

| Estil | Sintaxi | Exemple | Resultat |
|-|-|-|-|
| Negreta | `** **` o `__ __` | `**Text en negreta**` | **Text en negreta** |
| Cursiva | `* *` o `_ _`  | `*Text en cursiva*` | *Text en cursiva* |
| Ratllat | `~~ ~~` |  `~~Text ratllat~~` | ~~Text ratllat~~ |
| Ressaltat | `== ==` |  `==Text ressaltat==` | ==Text ressaltat== |
| Negreta i cursiva niuada | `** **` i `_ _`  | `**Text en negreta i _cursiva niuada_ text**` | **Text en negreta i _cursiva niuada_ text** |
| Negreta i cursiva | `*** ***` o `___ ___` |  `***Text en negreta i cursiva***` | ***Text en negreta i cursiva*** |

El format es pot forçar a mostrar-se en text sense format afegint una barra inversa `\` al davant.

\*\*Aquesta línia no serà en negreta\*\*

```markdown
\*\*Aquesta línia no serà en negreta\*\*
```

\**Aquesta línia serà en cursiva i mostrarà els asteriscs*\*

```markdown
\**Aquesta línia serà en cursiva i mostrarà els asteriscs*\*
```

## Enllaços interns

Obsidian admet dos formats per als [[Enllaços interns]] entre notes:

- Enllaç wiki: `[[Tres lleis del moviment]]`
- Markdown: `[Tres lleis del moviment](Tres%20lleis%20del%20moviment.md)`

## Enllaços externs

Si voleu enllaçar a una URL externa, podeu crear un enllaç en línia envoltant el text de l'enllaç entre claudàtors (`[ ]`), i després la URL entre parèntesis (`( )`).

```md
[Ajuda d'Obsidian](https://help.obsidian.md)
```

[Ajuda d'Obsidian](https://help.obsidian.md)

També podeu crear enllaços externs a fitxers en altres cambres fortes, enllaçant a un [[Obsidian URI|URI d'Obsidian]].

```md
[Nota](obsidian://open?vault=MainVault&file=Note.md)
```

### Escapar espais en blanc als enllaços

Si la vostra URL conté espais en blanc, heu d'escapar-los substituint-los per `%20`.

```md
[La meva nota](obsidian://open?vault=MainVault&file=My%20Note.md)
```

També podeu escapar la URL envoltant-la amb claudàtors angulars (`< >`).

```md
[La meva nota](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Imatges externes

Podeu afegir imatges amb URL externes, afegint un símbol `!` abans d'un [[#Enllaços externs|enllaç extern]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Podeu canviar les dimensions de la imatge, afegint `|640x480` a la destinació de l'enllaç, on 640 és l'amplada i 480 és l'alçada.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Si només especifiqueu l'amplada, la imatge s'escala d'acord amb la seva relació d'aspecte original. Per exemple:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Consell
> Si voleu afegir una imatge de dins de la vostra cambra forta, també podeu [[Incrustar fitxers#Incrustar una imatge en una nota|incrustar una imatge en una nota]].

## Cites

Podeu citar text afegint un símbol `>` abans del text.

```md
> Els éssers humans s'enfronten a problemes cada vegada més complexos i urgents, i la seva eficàcia per tractar aquests problemes és una qüestió crítica per a l'estabilitat i el progrés continu de la societat.

\- Doug Engelbart, 1961
```

> Els éssers humans s'enfronten a problemes cada vegada més complexos i urgents, i la seva eficàcia per tractar aquests problemes és una qüestió crítica per a l'estabilitat i el progrés continu de la societat.

\- Doug Engelbart, 1961

> [!tip]- Consell
> Podeu convertir la vostra cita en un [[Destacats|bloc destacat]] afegint `[!info]` com a primera línia d'una cita.

## Llistes

Podeu crear una llista no ordenada afegint un `-`, `*`, o `+` abans del text.

```md
- Primer element de la llista
- Segon element de la llista
- Tercer element de la llista
```

- Primer element de la llista
- Segon element de la llista
- Tercer element de la llista

Per crear una llista ordenada, comenceu cada línia amb un número seguit d'un símbol `.` o `)`.

```md
1. Primer element de la llista
2. Segon element de la llista
3. Tercer element de la llista
```

1. Primer element de la llista
2. Segon element de la llista
3. Tercer element de la llista

```md
1) Primer element de la llista
2) Segon element de la llista
3) Tercer element de la llista
```

1) Primer element de la llista
2) Segon element de la llista
3) Tercer element de la llista

Podeu utilitzar `Maj+Enter` per inserir un [[#Salts de línia|salt de línia]] dins d'una llista ordenada sense alterar la numeració.

```md
1. Primer element de la llista
   
2. Segon element de la llista
3. Tercer element de la llista
   
4. Quart element de la llista
5. Cinquè element de la llista
6. Sisè element de la llista
```

### Llistes de tasques

Per crear una llista de tasques, comenceu cada element de la llista amb un guió i un espai seguit de `[ ]`.

```md
- [x] Aquesta és una tasca completada.
- [ ] Aquesta és una tasca incompleta.
```

- [x] Aquesta és una tasca completada.
- [ ] Aquesta és una tasca incompleta.

Podeu alternar una tasca a la vista de lectura seleccionant la casella de selecció.

> [!tip]- Consell
> Podeu utilitzar qualsevol caràcter dins dels claudàtors per marcar-la com a completada.
>
> ```md
> - [x] Llet
> - [?] Ous
> - [-] Ous
> ```
>
> - [x] Llet
> - [?] Ous
> - [-] Ous

### Llistes niuades

Podeu niuar qualsevol tipus de llista—ordenada, no ordenada o llistes de tasques—sota qualsevol altre tipus de llista.

Per crear una llista niuada, sagneu un o més elements de la llista. Podeu barrejar tipus de llista dins d'una estructura niuada:

```md
1. Primer element de la llista
   1. Element niuat ordenat
2. Segon element de la llista
   - Element niuat no ordenat
```

1. Primer element de la llista
   1. Element niuat ordenat
2. Segon element de la llista
   - Element niuat no ordenat

De manera similar, podeu crear una llista de tasques niuada sagnant un o més elements de la llista:

```md
- [ ] Element de tasca 1
	- [ ] Subtasca 1
- [ ] Element de tasca 2
	- [ ] Subtasca 1
```

- [ ] Element de tasca 1
	- [ ] Subtasca 1
- [ ] Element de tasca 2
	- [ ] Subtasca 1

Utilitzeu `Tab` o `Maj+Tab` per sagnar o treure sagnat els elements de llista seleccionats per organitzar-los fàcilment.

## Línia horitzontal

Podeu utilitzar tres o més estrelles `***`, guions `---` o guions baixos `___` en la seva pròpia línia per afegir una barra horitzontal. També podeu separar els símbols amb espais.

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

## Codi

Podeu formatar codi tant en línia dins d'una frase, com en el seu propi bloc.

### Codi en línia

Podeu formatar codi dins d'una frase utilitzant accents greus simples.

```md
El text dins d'`accents greus` en una línia es formatarà com a codi.
```

El text dins d'`accents greus` en una línia es formatarà com a codi.

Si voleu posar accents greus en un bloc de codi en línia, envolteu-lo amb accents greus dobles així: codi en línia ``amb un accent greu ` a dins``.

### Blocs de codi

Per formatar codi com a bloc, tanqueu-lo amb tres o més accents greus o tres o més tildes.

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

També podeu crear un bloc de codi sagnant el text amb `Tab` o 4 espais en blanc.
`````md
    cd ~/Desktop
`````

Podeu afegir ressaltat de sintaxi a un bloc de codi, afegint un codi de llenguatge després del primer conjunt d'accents greus.

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

Obsidian utilitza Prism per al ressaltat de sintaxi. Per a més informació, consulteu [Llenguatges suportats](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS i les vistes d'edició
> El [[Vistes i mode d'edició#Mode de codi font|mode de codi font]] i la [[Vistes i mode d'edició#Previsualització en viu|previsualització en viu]] no suporten PrismJS, i poden renderitzar el ressaltat de sintaxi de manera diferent.

#### Blocs de codi niuats

Quan necessiteu incloure un bloc de codi dins d'un altre bloc de codi (per exemple, quan documenteu com utilitzar blocs de codi), podeu utilitzar més de tres accents greus o tildes per al bloc de codi exterior.

Per niuar blocs de codi, utilitzeu quatre o més accents greus (o tildes) per al bloc exterior, mentre que el bloc interior utilitza tres:
`````md
````md
Així és com es crea un bloc de codi:
```js
console.log("Hola món")
```
````
`````

També podeu barrejar accents greus i tildes. Això és particularment útil quan treballeu amb codi que genera altres blocs de codi:
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

El principi clau és que el bloc de codi exterior ha d'utilitzar **més** caràcters de tanca (accents greus o tildes) que qualsevol bloc de codi interior, o utilitzar un tipus diferent de caràcter de tanca.

## Notes a peu de pàgina

Podeu afegir notes a peu de pàgina[^footnote] a les vostres notes utilitzant la sintaxi següent:

[^footnote]: Això és una nota a peu de pàgina.

```md
Això és una nota a peu de pàgina simple[^1].

[^1]: Això és el text referenciat.
[^2]: Afegiu 2 espais al principi de cada línia nova.
  Això us permet escriure notes a peu de pàgina que abasten múltiples línies.
[^note]: Les notes a peu de pàgina amb nom encara apareixen com a números, però poden facilitar la identificació i l'enllaç de les referències.
```

També podeu incloure notes a peu de pàgina en línia dins d'una frase. Tingueu en compte que el circumflex va fora dels claudàtors.

```md
També podeu utilitzar notes a peu de pàgina en línia. ^[Això és una nota a peu de pàgina en línia.]
```

> [!note] Nota
> Les notes a peu de pàgina en línia només funcionen a la vista de lectura, no a la previsualització en viu.

Utilitzeu la [[Vista de notes a peu de pàgina]] per veure totes les notes a peu de pàgina d'una nota.

## Comentaris

Podeu afegir comentaris envoltant el text amb `%%`. Els comentaris només són visibles a la vista d'edició.

```md
Això és un comentari %%en línia%%.

%%
Això és un comentari de bloc.

Els comentaris de bloc poden abastar múltiples línies.
%%
```

## Escapar la sintaxi Markdown

En alguns casos, pot ser que necessiteu mostrar caràcters especials en Markdown, com `*`, `_`, o `#`, sense activar el seu format. Per mostrar aquests caràcters literalment, col·loqueu una barra inversa (`\`) al davant.

> [!example] Caràcters comuns a escapar
> 
> - Asterisc: `\*`
> - Guió baix: `\_`
> - Coixinet: `\#`
> - Accent greu: `` \` ``
> - Barra vertical (utilitzada en taules): `\|`
> - Tilde: `\~`

```md
\*Aquest text no serà en cursiva\*.
```

\*Aquest text no serà en cursiva\*.

Quan treballeu amb llistes numerades, pot ser que necessiteu escapar el punt després del número per evitar el format automàtic de llista. Col·loqueu la barra inversa (`\`) abans del punt, **no** abans del número.

```md
1\. Això no serà un element de llista.
```

1\. Això no serà un element de llista.

## Aprèn'n més

Per aprendre més sobre sintaxi de format avançat, com taules, diagrames i expressions matemàtiques, consulteu [[Sintaxi de format avançat]].

Per aprendre més sobre com Obsidian analitza Markdown, consulteu [[Obsidian Flavored Markdown]].
