---
permalink: syntax
publish: true
mobile: true
description: 'Aflați cum să aplicați formatare de bază notelor dvs. în Obsidian, folosind Markdown.'
aliases:
  - Basic formatting syntax
---

Aflați cum să aplicați formatare de bază notelor dvs., folosind [Markdown](https://daringfireball.net/projects/markdown/). Pentru sintaxă de formatare mai avansată, consultați [[Sintaxă avansată de formatare]].

## Paragrafe

Pentru a crea paragrafe în Markdown, folosiți un **rând gol** pentru a separa blocurile de text. Fiecare bloc de text separat printr-un rând gol este tratat ca un paragraf distinct.

```md
This is a paragraph.

This is another paragraph.
```

Acesta este un paragraf.

Acesta este un alt paragraf.

Un rând gol între rândurile de text creează paragrafe separate. Acesta este comportamentul implicit în Markdown.

> [!tip]- Spații goale multiple
> Mai multe spații goale adiacente, în cadrul paragrafelor sau între ele, se restrâng la un singur spațiu atunci când sunt afișate în [[Moduri de vizualizare și editare#Reading view|Modul de citire]] sau pe site-urile [[Introducere în Obsidian Publish|Obsidian Publish]].
> 
> ```md
> Multiple          adjacent          spaces
> 
> 
> 
> and multiple newlines between paragraphs.
> ```
> 
> > Mai multe          spații          adiacente
> > 
> > 
> > 
> > și mai multe rânduri noi între paragrafe.
> 
> Dacă doriți să preveniți restrângerea spațiilor sau să adăugați mai multe spații goale, puteți folosi etichetele HTML `&nbsp;` (spațiu neîntreruptibil) sau `<br>` (întrerupere de rând).

### Întreruperi de rând

Implicit în Obsidian, apăsarea tastei `Enter` o singură dată va crea un rând nou în nota dvs., dar acesta este tratat ca o *continuare* a aceluiași paragraf în rezultatul afișat, urmând comportamentul tipic Markdown. Pentru a insera o întrerupere de rând *în interiorul* unui paragraf fără a începe un paragraf nou, puteți fie:

- Să adăugați **două spații** la sfârșitul unui rând înainte de a apăsa `Enter`, fie
- Să folosiți comanda rapidă `Shift+Enter` pentru a insera direct o întrerupere de rând.

> [!question]- De ce apăsările multiple ale tastei `Enter` nu creează mai multe întreruperi de rând în modul de citire?
> În Markdown, o singură apăsare a tastei `Enter` este ignorată, iar apăsările consecutive multiple ale tastei `Enter` au ca rezultat doar un singur paragraf nou. Acest comportament este în concordanță cu regula de încadrare flexibilă (soft wrap) a Markdown, prin care rândurile goale suplimentare nu generează întreruperi de rând sau paragrafe suplimentare — ele se restrâng într-o singură separare de paragraf. Acesta este modul implicit în care Markdown gestionează textul, asigurându-se că paragrafele curg în mod natural, fără întreruperi neașteptate.

Obsidian include o setare **[[Setări#Strict line breaks|Afișați spațiile de un singur rând]]**, care face ca Obsidian să respecte specificația Markdown standard pentru întreruperile de rând.

Pentru a activa această funcție:

1. Deschideți **[[Setări]]**.
2. Accesați fila **Editor**.
3. Activați **Strict Line Breaks**.

Când **Strict Line Breaks** este activată în Obsidian, întreruperile de rând au trei comportamente distincte, în funcție de modul în care sunt separate rândurile:

**O singură apăsare Enter, fără spații**: O singură apăsare a tastei `Enter`, fără spații finale, va combina cele două rânduri separate într-un singur rând la afișare.

```md
line one
line two
```

Se afișează astfel:

rândul unu rândul doi

**O singură apăsare Enter cu două sau mai multe spații finale**: Dacă adăugați două sau mai multe spații la sfârșitul primului rând înainte de a apăsa `Enter`, cele două rânduri rămân parte din același paragraf, dar sunt întrerupte de o întrerupere de rând (elementul HTML `<br>`). Vom folosi două liniuțe de subliniere pentru a reprezenta spațiile în acest exemplu.

```md
line three__  
line four
```

Se afișează astfel:

rândul trei<br>
rândul patru

**Dublă apăsare Enter (cu sau fără spații finale)**: Apăsarea tastei `Enter` de două ori (sau mai multe) separă rândurile în două paragrafe distincte (elemente HTML `<p>`), indiferent dacă adăugați spații la sfârșitul primului rând.

```md
line five

line six
```

Se afișează astfel:

<p>rândul cinci</p>
<p>rândul șase</p>

## Titluri

Pentru a crea un titlu, adăugați până la șase simboluri `#` înaintea textului titlului. Numărul de simboluri `#` stabilește nivelul titlului (așa cum este afișat în [[Sumar|Sumar]]).

```md
# This is a heading 1
## This is a heading 2
### This is a heading 3
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Acesta este un titlu de nivel 1</h1>
<h2>Acesta este un titlu de nivel 2</h2>
<h3>Acesta este un titlu de nivel 3</h3>
<h4>Acesta este un titlu de nivel 4</h4>
<h5>Acesta este un titlu de nivel 5</h5>
<h6>Acesta este un titlu de nivel 6</h6>

## Aldin, cursiv, evidențieri

Formatarea textului poate fi aplicată și folosind [[Comenzi rapide de editare|comenzile rapide de editare]].

| Stil | Sintaxă | Exemplu | Rezultat |
|-|-|-|-|
| Îngroșat | `** **` sau `__ __` | `**Bold text**` | **Text îngroșat** |
| Cursiv | `* *` sau `_ _`  | `*Italic text*` | *Text cursiv* |
| Tăiat | `~~ ~~` |  `~~Striked out text~~` | ~~Text tăiat~~ |
| Evidențiat | `== ==` |  `==Highlighted text==` | ==Text evidențiat== |
| Îngroșat și cursiv imbricat | `** **` și `_ _`  | `**Bold text and _nested italic_ text**` | **Text îngroșat cu _cursiv imbricat_** |
| Îngroșat și cursiv | `*** ***` sau `___ ___` |  `***Bold and italic text***` | ***Text îngroșat și cursiv*** |

Formatarea poate fi forțată să se afișeze ca text simplu prin adăugarea unei bare oblice inverse `\` înaintea ei.

\*\*Acest rând nu va fi îngroșat\*\*

```markdown
\*\*This line will not be bold\*\*
```

\**Acest rând va fi cursiv și va afișa asteriscurile*\*

```markdown
\**This line will be italic and show the asterisks*\*
```

## Legături interne

Obsidian acceptă două formate pentru [[internal links|legăturile interne]] dintre note:

- Wikilink: `[[Three laws of motion]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion.md)`

## Legături externe

Dacă doriți să creați o legătură către un URL extern, puteți crea o legătură în text prin încadrarea textului legăturii în paranteze drepte (`[ ]`), urmat de URL în paranteze rotunde (`( )`).

```md
[Obsidian Help](https://help.obsidian.md)
```

[Obsidian Help](https://help.obsidian.md)

Puteți crea, de asemenea, legături externe către fișiere din alte seifuri, creând o legătură către un [[Obsidian URI|URI Obsidian]].

```md
[Note](obsidian://open?vault=MainVault&file=Note.md)
```

### Excludeți spațiile goale în legături

Dacă URL-ul dvs. conține spații goale, trebuie să le excludeți înlocuindu-le cu `%20`.

```md
[My Note](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Puteți exclude URL-ul și încadrându-l cu paranteze unghiulare (`< >`).

```md
[My Note](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Imagini externe

Puteți adăuga imagini cu URL-uri externe, adăugând un simbol `!` înaintea unei [[#External links|legături externe]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Puteți schimba dimensiunile imaginii, adăugând `|640x480` la destinația legăturii, unde 640 este lățimea și 480 este înălțimea.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Dacă specificați doar lățimea, imaginea se scalează în funcție de raportul de aspect original. De exemplu:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Sfat
> Dacă doriți să adăugați o imagine din interiorul seifului dvs., puteți și [[Încorporează fișiere#Embed an image in a note|încorpora o imagine într-o notă]].

## Citate

Puteți cita text adăugând simboluri `>` înaintea textului.

```md
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961
```

> Ființele umane se confruntă cu probleme din ce în ce mai complexe și mai urgente, iar eficiența lor în abordarea acestor probleme este esențială pentru stabilitatea și progresul continuu al societății.

\- Doug Engelbart, 1961

> [!tip]- Sfat
> Puteți transforma citatul dvs. într-o [[Explicații|explicație]] adăugând `[!info]` ca prim rând într-un citat.

## Liste

Puteți crea o listă neordonată adăugând un `-`, `*` sau `+` înaintea textului.

```md
- First list item
- Second list item
- Third list item
```

- Primul element din listă
- Al doilea element din listă
- Al treilea element din listă

Pentru a crea o listă ordonată, începeți fiecare rând cu un număr urmat de un simbol `.` sau `)`.

```md
1. First list item
2. Second list item
3. Third list item
```

1. Primul element din listă
2. Al doilea element din listă
3. Al treilea element din listă

```md
1) First list item
2) Second list item
3) Third list item
```

1) Primul element din listă
2) Al doilea element din listă
3) Al treilea element din listă

Puteți folosi `Shift+Enter` pentru a insera o [[#Line breaks|întrerupere de rând]] într-o listă ordonată, fără a modifica numerotarea.

```md
1. First list item
   
2. Second list item
3. Third list item
   
4. Fourth list item
5. Fifth list item
6. Sixth list item
```

### Liste de sarcini

Pentru a crea o listă de sarcini, începeți fiecare element din listă cu o cratimă și un spațiu, urmate de `[ ]`.

```md
- [x] This is a completed task.
- [ ] This is an incomplete task.
```

- [x] Aceasta este o sarcină finalizată.
- [ ] Aceasta este o sarcină nefinalizată.

Puteți comuta o sarcină în modul de citire selectând caseta de bifare.

> [!tip]- Sfat
> Puteți folosi orice caracter în interiorul parantezelor pătrate pentru a o marca drept finalizată.
>
> ```md
> - [x] Milk
> - [?] Eggs
> - [-] Eggs
> ```
>
> - [x] Lapte
> - [?] Ouă
> - [-] Ouă

### Imbricarea listelor

Puteți imbrica orice tip de listă — ordonată, neordonată sau de sarcini — sub orice alt tip de listă.

Pentru a crea o listă imbricată, indentați unul sau mai multe elemente din listă. Puteți combina tipuri de liste într-o structură imbricată:

```md
1. First list item
   1. Ordered nested list item
2. Second list item
   - Unordered nested list item
```

1. Primul element din listă
   1. Element imbricat ordonat
2. Al doilea element din listă
   - Element imbricat neordonat

În mod similar, puteți crea o listă de sarcini imbricată prin indentarea unuia sau mai multor elemente din listă:

```md
- [ ] Task item 1
	- [ ] Subtask 1
- [ ] Task item 2
	- [ ] Subtask 1
```

- [ ] Sarcina 1
	- [ ] Subsarcina 1
- [ ] Sarcina 2
	- [ ] Subsarcina 1

Folosiți `Tab` sau `Shift+Tab` pentru a indenta sau dezindenta elementele selectate din listă, pentru a le organiza mai ușor.

## Linie orizontală

Puteți folosi trei sau mai multe steluțe `***`, cratime `---` sau liniuțe de subliniere `___` pe propriul rând pentru a adăuga o bară orizontală. Puteți separa simbolurile și cu spații.

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

## Cod

Puteți formata codul atât în text, în cadrul unei propoziții, cât și în propriul bloc.

### Cod în text

Puteți formata codul în text folosind ghilimele oblice simple (backtick).

```md
Text inside `backticks` on a line will be formatted like code.
```

Textul dintre `ghilimele oblice` pe un rând va fi formatat ca un cod.

Dacă doriți să puneți ghilimele oblice într-un bloc de cod în text, încadrați-le cu ghilimele oblice duble, astfel: cod în text ``cu o ghilimea oblică ` în interior``.

### Blocuri de cod

Pentru a formata codul ca bloc, încadrați-l cu trei sau mai multe ghilimele oblice sau trei sau mai multe tilde.

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

Puteți crea, de asemenea, un bloc de cod indentând textul folosind `Tab` sau 4 spații goale.
`````md
    cd ~/Desktop
`````

Puteți adăuga evidențiere de sintaxă unui bloc de cod, adăugând un cod de limbaj după primul set de ghilimele oblice.

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

Obsidian folosește Prism pentru evidențierea sintaxei. Pentru mai multe informații, consultați [Limbaje acceptate](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS și modurile de editare
> [[Moduri de vizualizare și editare#Source mode|Modul sursă]] și [[Moduri de vizualizare și editare#Live Preview|Live Preview]] nu acceptă PrismJS și pot afișa evidențierea sintaxei diferit.

#### Imbricarea blocurilor de cod

Când trebuie să includeți un bloc de cod în interiorul altui bloc de cod (de exemplu, atunci când documentați modul de utilizare a blocurilor de cod), puteți folosi mai mult de trei ghilimele oblice sau tilde pentru blocul de cod exterior.

Pentru a imbrica blocuri de cod, folosiți patru sau mai multe ghilimele oblice (sau tilde) pentru blocul exterior, în timp ce blocul interior folosește trei:
`````md
````md
Here's how to create a code block:
```js
console.log("Hello world")
```
````
`````

Puteți combina și ghilimele oblice cu tilde. Acest lucru este util în special atunci când lucrați cu cod care generează alte blocuri de cod:
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

Principiul-cheie este că blocul de cod exterior trebuie să folosească **mai multe** caractere de delimitare (ghilimele oblice sau tilde) decât orice bloc de cod interior, sau să folosească un tip diferit de caracter de delimitare.

## Note de subsol

Puteți adăuga note de subsol[^footnote] în notele dvs. folosind sintaxa următoare:

[^footnote]: Aceasta este o notă de subsol.

```md
This is a simple footnote[^1].

[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.
```

Puteți include note de subsol și direct în text, într-o propoziție. Rețineți că accentul circumflex se plasează în afara parantezelor pătrate.

```md
You can also use inline footnotes. ^[This is an inline footnote.]
```

> [!note] Notă
> Notele de subsol incluse în text funcționează doar în modul de citire, nu și în Live Preview.

Folosiți [[Afișaj note de subsol|modul de vizualizare a notelor de subsol]] pentru a vedea toate notele de subsol dintr-o notă.

## Comentarii

Puteți adăuga comentarii încadrând textul cu `%%`. Comentariile sunt vizibile doar în modul de editare.

```md
This is an %%inline%% comment.

%%
This is a block comment.

Block comments can span multiple lines.
%%
```

## Excluderea sintaxei Markdown

În unele cazuri, poate fi necesar să afișați caractere speciale în Markdown, precum `*`, `_` sau `#`, fără a declanșa formatarea acestora. Pentru a afișa aceste caractere literal, plasați o bară oblică inversă (`\`) înaintea lor.

> [!example] Caractere comune de exclus
> 
> - Asterisc: `\*`
> - Liniuță de subliniere: `\_`
> - Diez: `\#`
> - Ghilimea oblică: `` \` ``
> - Bară verticală (folosită în tabele): `\|`
> - Tildă: `\~`

```md
\*This text will not be italicized\*.
```

\*Acest text nu va fi cursiv\*.

Când lucrați cu liste numerotate, poate fi necesar să excludeți punctul de după număr pentru a preveni formatarea automată a listei. Plasați bara oblică inversă (`\`) înaintea punctului, **nu** înaintea numărului.

```md
1\. This won't be a list item.
```

1\. Acesta nu va fi un element de listă.

## Aflați mai multe

Pentru a afla mai multe despre sintaxa de formatare avansată, precum tabele, diagrame și expresii matematice, consultați [[Sintaxă avansată de formatare]].

Pentru a afla mai multe despre modul în care Obsidian interpretează Markdown, consultați [[Markdown specific Obsidian]].
