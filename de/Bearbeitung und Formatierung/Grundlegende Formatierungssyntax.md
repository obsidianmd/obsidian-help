---
permalink: syntax
publish: true
mobile: true
description: 'Lerne, wie du grundlegende Formatierungen auf deine Notizen in Obsidian anwendest, unter Verwendung von Markdown.'
---
Lerne, wie du grundlegende Formatierungen auf deine Notizen anwendest, unter Verwendung von [Markdown](https://daringfireball.net/projects/markdown/). Für erweiterte Formatierungssyntax, siehe [[Erweiterte Formatierungssyntax]].

## Absätze

Um Absätze in Markdown zu erstellen, verwende eine **Leerzeile**, um Textblöcke zu trennen. Jeder durch eine Leerzeile getrennte Textblock wird als eigenständiger Absatz behandelt.

```md
Dies ist ein Absatz.

Dies ist ein weiterer Absatz.
```

Dies ist ein Absatz.

Dies ist ein weiterer Absatz.

Eine Leerzeile zwischen Textzeilen erzeugt separate Absätze. Dies ist das Standardverhalten in Markdown.

> [!tip]- Mehrfache Leerzeichen
> Mehrere aufeinanderfolgende Leerzeichen innerhalb und zwischen Absätzen werden zu einem einzelnen Leerzeichen zusammengefasst, wenn sie im [[Ansichten und Bearbeitungsmodus#Lesemodus|Lesemodus]] oder auf [[Einführung in Obsidian Publish|Obsidian Publish]]-Websites angezeigt werden.
> 
> ```md
> Mehrere          aufeinanderfolgende          Leerzeichen
> 
> 
> 
> und mehrere Zeilenumbrüche zwischen Absätzen.
> ```
> 
> > Mehrere          aufeinanderfolgende          Leerzeichen
> > 
> > 
> > 
> > und mehrere Zeilenumbrüche zwischen Absätzen.
> 
> Wenn du verhindern möchtest, dass Leerzeichen zusammengefasst werden, oder mehrere Leerzeichen einfügen willst, kannst du die HTML-Tags `&nbsp;` (geschütztes Leerzeichen) oder `<br>` (Zeilenumbruch) verwenden.

### Zeilenumbrüche

Standardmäßig erzeugt in Obsidian ein einmaliges Drücken von `Enter` eine neue Zeile in deiner Notiz, aber diese wird in der gerenderten Ausgabe als *Fortsetzung* desselben Absatzes behandelt, gemäß dem typischen Markdown-Verhalten. Um einen Zeilenumbruch *innerhalb* eines Absatzes einzufügen, ohne einen neuen Absatz zu beginnen, kannst du entweder:

- **Zwei Leerzeichen** am Ende einer Zeile hinzufügen, bevor du `Enter` drückst, oder
- Die Tastenkombination `Shift+Enter` verwenden, um direkt einen Zeilenumbruch einzufügen.

> [!question]- Warum erzeugen mehrfaches Drücken von `Enter` keine weiteren Zeilenumbrüche im Lesemodus?
> In Markdown wird ein einzelnes `Enter` ignoriert, und mehrere aufeinanderfolgende `Enter`-Eingaben ergeben nur einen neuen Absatz. Dieses Verhalten entspricht der Soft-Wrap-Regel von Markdown, bei der zusätzliche Leerzeilen keine weiteren Zeilenumbrüche oder Absätze erzeugen – sie werden zu einem einzigen Absatzumbruch zusammengefasst. So handhabt Markdown Text standardmäßig, um sicherzustellen, dass Absätze natürlich fließen, ohne unerwartete Umbrüche.

Obsidian enthält eine Einstellung für **[[Einstellungen#Strenge Zeilenumbrüche|Strenge Zeilenumbrüche]]**, die Obsidian veranlasst, der Standard-Markdown-Spezifikation für Zeilenumbrüche zu folgen.

Um diese Funktion zu aktivieren:

1. Öffne die **[[Einstellungen]]**.
2. Gehe zum Tab **Editor**.
3. Aktiviere **Strenge Zeilenumbrüche**.

Wenn **Strenge Zeilenumbrüche** in Obsidian aktiviert ist, haben Zeilenumbrüche drei unterschiedliche Verhaltensweisen, je nachdem wie die Zeilen getrennt sind:

**Einfacher Zeilenumbruch ohne Leerzeichen**: Ein einzelnes `Enter` ohne nachgestellte Leerzeichen verbindet die zwei getrennten Zeilen zu einer einzigen Zeile bei der Darstellung.

```md
Zeile eins
Zeile zwei
```

Wird dargestellt als:

Zeile eins Zeile zwei

**Einfacher Zeilenumbruch mit zwei oder mehr nachgestellten Leerzeichen**: Wenn du zwei oder mehr Leerzeichen am Ende der ersten Zeile hinzufügst, bevor du `Enter` drückst, bleiben die zwei Zeilen Teil desselben Absatzes, werden aber durch einen Zeilenumbruch (HTML-`<br>`-Element) getrennt. Wir verwenden in diesem Beispiel zwei Unterstriche als Platzhalter für Leerzeichen.

```md
Zeile drei__  
Zeile vier
```

Wird dargestellt als:

Zeile drei<br>
Zeile vier

**Doppelter Zeilenumbruch (mit oder ohne nachgestellte Leerzeichen)**: Zweimaliges (oder mehrmaliges) Drücken von `Enter` trennt die Zeilen in zwei eigenständige Absätze (HTML-`<p>`-Elemente), unabhängig davon, ob du Leerzeichen am Ende der ersten Zeile hinzufügst.

```md
Zeile fünf

Zeile sechs
```

Wird dargestellt als:

<p>Zeile fünf</p>
<p>Zeile sechs</p>

## Überschriften

Um eine Überschrift zu erstellen, füge bis zu sechs `#`-Symbole vor deinem Überschriftentext hinzu. Die Anzahl der `#`-Symbole bestimmt die Ebene der Überschrift (wie in der [[Gliederung]] dargestellt).

```md
# Dies ist eine Überschrift 1
## Dies ist eine Überschrift 2
### Dies ist eine Überschrift 3
#### Dies ist eine Überschrift 4
##### Dies ist eine Überschrift 5
###### Dies ist eine Überschrift 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Dies ist eine Überschrift 1</h1>
<h2>Dies ist eine Überschrift 2</h2>
<h3>Dies ist eine Überschrift 3</h3>
<h4>Dies ist eine Überschrift 4</h4>
<h5>Dies ist eine Überschrift 5</h5>
<h6>Dies ist eine Überschrift 6</h6>

## Fett, Kursiv, Hervorhebungen

Textformatierungen können auch mithilfe von [[Bearbeitungskürzel|Bearbeitungskürzel]] angewendet werden.

| Stil | Syntax | Beispiel | Ausgabe |
|-|-|-|-|
| Fett | `** **` oder `__ __` | `**Fetter Text**` | **Fetter Text** |
| Kursiv | `* *` oder `_ _`  | `*Kursiver Text*` | *Kursiver Text* |
| Durchgestrichen | `~~ ~~` |  `~~Durchgestrichener Text~~` | ~~Durchgestrichener Text~~ |
| Hervorhebung | `== ==` |  `==Hervorgehobener Text==` | ==Hervorgehobener Text== |
| Fett und verschachteltes Kursiv | `** **` und `_ _`  | `**Fetter Text und _verschachtelter kursiver_ Text**` | **Fetter Text und _verschachtelter kursiver_ Text** |
| Fett und Kursiv | `*** ***` oder `___ ___` |  `***Fetter und kursiver Text***` | ***Fetter und kursiver Text*** |

Formatierungen können als reiner Text angezeigt werden, indem ein Backslash `\` davor gesetzt wird.

\*\*Diese Zeile wird nicht fett sein\*\*

```markdown
\*\*Diese Zeile wird nicht fett sein\*\*
```

\**Diese Zeile wird kursiv sein und die Sternchen anzeigen*\*

```markdown
\**Diese Zeile wird kursiv sein und die Sternchen anzeigen*\*
```

## Interne Links

Obsidian unterstützt zwei Formate für [[Interne Links|interne Links]] zwischen Notizen:

- Wiki-Link: `[[Drei Bewegungsgesetze]]`
- Markdown: `[Drei Bewegungsgesetze](Drei%20Bewegungsgesetze.md)`

## Externe Links

Wenn du auf eine externe URL verlinken möchtest, kannst du einen Inline-Link erstellen, indem du den Linktext in eckige Klammern (`[ ]`) und die URL in runde Klammern (`( )`) setzt.

```md
[Obsidian Help](https://help.obsidian.md)
```

[Obsidian Help](https://help.obsidian.md)

Du kannst auch externe Links zu Dateien in anderen Vaults erstellen, indem du auf eine [[Obsidian URI|Obsidian-URI]] verlinkst.

```md
[Notiz](obsidian://open?vault=MainVault&file=Note.md)
```

### Leerzeichen in Links escapen

Wenn deine URL Leerzeichen enthält, musst du diese escapen, indem du sie durch `%20` ersetzt.

```md
[Meine Notiz](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Du kannst die URL auch escapen, indem du sie mit spitzen Klammern (`< >`) umschließt.

```md
[Meine Notiz](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Externe Bilder

Du kannst Bilder mit externen URLs hinzufügen, indem du ein `!`-Symbol vor einem [[#Externe Links|externen Link]] setzt.

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Du kannst die Bildabmessungen ändern, indem du `|640x480` zum Linkziel hinzufügst, wobei 640 die Breite und 480 die Höhe ist.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Wenn du nur die Breite angibst, wird das Bild entsprechend seinem ursprünglichen Seitenverhältnis skaliert. Zum Beispiel:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Tipp
> Wenn du ein Bild aus deinem Vault einfügen möchtest, kannst du auch [[Dateien einbetten#Ein Bild in eine Notiz einbetten|ein Bild in eine Notiz einbetten]].

## Zitate

Du kannst Text zitieren, indem du `>`-Symbole vor den Text setzt.

```md
> Die Menschen stehen vor immer komplexeren und dringenderen Problemen, und ihre Effektivität im Umgang mit diesen Problemen ist eine Angelegenheit, die für die Stabilität und den anhaltenden Fortschritt der Gesellschaft entscheidend ist.

\- Doug Engelbart, 1961
```

> Die Menschen stehen vor immer komplexeren und dringenderen Problemen, und ihre Effektivität im Umgang mit diesen Problemen ist eine Angelegenheit, die für die Stabilität und den anhaltenden Fortschritt der Gesellschaft entscheidend ist.

\- Doug Engelbart, 1961

> [!tip]- Tipp
> Du kannst dein Zitat in einen [[Hinweisblöcke|Hinweisblock]] umwandeln, indem du `[!info]` als erste Zeile in einem Zitat hinzufügst.

## Listen

Du kannst eine ungeordnete Liste erstellen, indem du ein `-`, `*` oder `+` vor den Text setzt.

```md
- Erster Listeneintrag
- Zweiter Listeneintrag
- Dritter Listeneintrag
```

- Erster Listeneintrag
- Zweiter Listeneintrag
- Dritter Listeneintrag

Um eine nummerierte Liste zu erstellen, beginne jede Zeile mit einer Zahl, gefolgt von einem `.`- oder `)`-Symbol.

```md
1. Erster Listeneintrag
2. Zweiter Listeneintrag
3. Dritter Listeneintrag
```

1. Erster Listeneintrag
2. Zweiter Listeneintrag
3. Dritter Listeneintrag

```md
1) Erster Listeneintrag
2) Zweiter Listeneintrag
3) Dritter Listeneintrag
```

1) Erster Listeneintrag
2) Zweiter Listeneintrag
3) Dritter Listeneintrag

Du kannst `Shift+Enter` verwenden, um einen [[#Zeilenumbrüche|Zeilenumbruch]] innerhalb einer nummerierten Liste einzufügen, ohne die Nummerierung zu ändern.

```md
1. Erster Listeneintrag
   
2. Zweiter Listeneintrag
3. Dritter Listeneintrag
   
4. Vierter Listeneintrag
5. Fünfter Listeneintrag
6. Sechster Listeneintrag
```

### Aufgabenlisten

Um eine Aufgabenliste zu erstellen, beginne jeden Listeneintrag mit einem Bindestrich und Leerzeichen, gefolgt von `[ ]`.

```md
- [x] Dies ist eine abgeschlossene Aufgabe.
- [ ] Dies ist eine offene Aufgabe.
```

- [x] Dies ist eine abgeschlossene Aufgabe.
- [ ] Dies ist eine offene Aufgabe.

Du kannst eine Aufgabe im Lesemodus umschalten, indem du das Kontrollkästchen auswählst.

> [!tip]- Tipp
> Du kannst ein beliebiges Zeichen innerhalb der Klammern verwenden, um es als abgeschlossen zu markieren.
>
> ```md
> - [x] Milch
> - [?] Eier
> - [-] Eier
> ```
>
> - [x] Milch
> - [?] Eier
> - [-] Eier

### Verschachtelte Listen

Du kannst jeden Listentyp – nummeriert, ungeordnet oder Aufgabenlisten – unter jedem anderen Listentyp verschachteln.

Um eine verschachtelte Liste zu erstellen, rücke einen oder mehrere Listeneinträge ein. Du kannst Listentypen innerhalb einer verschachtelten Struktur mischen:

```md
1. Erster Listeneintrag
   1. Nummerierter verschachtelter Listeneintrag
2. Zweiter Listeneintrag
   - Ungeordneter verschachtelter Listeneintrag
```

1. Erster Listeneintrag
   1. Nummerierter verschachtelter Listeneintrag
2. Zweiter Listeneintrag
   - Ungeordneter verschachtelter Listeneintrag

Ebenso kannst du eine verschachtelte Aufgabenliste erstellen, indem du einen oder mehrere Listeneinträge einrückst:

```md
- [ ] Aufgabe 1
	- [ ] Unteraufgabe 1
- [ ] Aufgabe 2
	- [ ] Unteraufgabe 1
```

- [ ] Aufgabe 1
	- [ ] Unteraufgabe 1
- [ ] Aufgabe 2
	- [ ] Unteraufgabe 1

Verwende `Tab` oder `Shift+Tab`, um ausgewählte Listeneinträge einzurücken oder den Einzug zu verringern und sie einfach zu organisieren.

## Horizontale Linie

Du kannst drei oder mehr Sternchen `***`, Bindestriche `---` oder Unterstriche `___` in einer eigenen Zeile verwenden, um eine horizontale Linie hinzuzufügen. Du kannst die Symbole auch mit Leerzeichen trennen.

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

## Quelltext

Du kannst Quelltext sowohl inline innerhalb eines Satzes als auch in einem eigenen Block formatieren.

### Inline-Quelltext

Du kannst Quelltext innerhalb eines Satzes mit einfachen Backticks formatieren.

```md
Text innerhalb von `Backticks` in einer Zeile wird wie Quelltext formatiert.
```

Text innerhalb von `Backticks` in einer Zeile wird wie Quelltext formatiert.

Wenn du Backticks in einem Inline-Quelltext-Block verwenden möchtest, umschließe ihn mit doppelten Backticks wie folgt: inline ``Quelltext mit einem Backtick ` innen``.

### Quelltext-Blöcke

Um Quelltext als Block zu formatieren, umschließe ihn mit drei oder mehr Backticks oder drei oder mehr Tilden.

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

Du kannst auch einen Quelltext-Block erstellen, indem du den Text mit `Tab` oder 4 Leerzeichen einrückst.
`````md
    cd ~/Desktop
`````

Du kannst einem Quelltext-Block Syntaxhervorhebung hinzufügen, indem du nach dem ersten Satz von Backticks einen Sprachcode hinzufügst.

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

Obsidian verwendet Prism für die Syntaxhervorhebung. Weitere Informationen findest du unter [Unterstützte Sprachen](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS und Editor-Ansichten
> [[Ansichten und Bearbeitungsmodus#Quellcode-Ansicht|Quellcode-Ansicht]] und [[Ansichten und Bearbeitungsmodus#Live-Vorschau|Live-Vorschau]] unterstützen PrismJS nicht und können die Syntaxhervorhebung anders darstellen.

#### Verschachtelte Quelltext-Blöcke

Wenn du einen Quelltext-Block innerhalb eines anderen Quelltext-Blocks einfügen musst (zum Beispiel beim Dokumentieren der Verwendung von Quelltext-Blöcken), kannst du mehr als drei Backticks oder Tilden für den äußeren Quelltext-Block verwenden.

Um Quelltext-Blöcke zu verschachteln, verwende vier oder mehr Backticks (oder Tilden) für den äußeren Block, während der innere Block drei verwendet:
`````md
````md
So erstellst du einen Quelltext-Block:
```js
console.log("Hello world")
```
````
`````

Du kannst auch Backticks und Tilden mischen. Dies ist besonders nützlich, wenn du mit Quelltext arbeitest, der andere Quelltext-Blöcke erzeugt:
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

Das Grundprinzip ist, dass der äußere Quelltext-Block **mehr** Begrenzungszeichen (Backticks oder Tilden) verwenden muss als jeder innere Quelltext-Block, oder einen anderen Begrenzungszeichentyp verwenden muss.

## Fußnoten

Du kannst Fußnoten[^footnote] zu deinen Notizen hinzufügen, indem du die folgende Syntax verwendest:

[^footnote]: Dies ist eine Fußnote.

```md
Dies ist eine einfache Fußnote[^1].

[^1]: Dies ist der referenzierte Text.
[^2]: Füge 2 Leerzeichen am Anfang jeder neuen Zeile hinzu.
  So kannst du Fußnoten schreiben, die mehrere Zeilen umfassen.
[^note]: Benannte Fußnoten werden weiterhin als Zahlen angezeigt, können aber das Identifizieren und Verknüpfen von Referenzen erleichtern.
```

Du kannst Fußnoten auch inline in einem Satz einfügen. Beachte, dass das Caret-Zeichen außerhalb der Klammern steht.

```md
Du kannst auch Inline-Fußnoten verwenden. ^[Dies ist eine Inline-Fußnote.]
```

> [!note] Hinweis
> Inline-Fußnoten funktionieren nur im Lesemodus, nicht in der Live-Vorschau.

## Kommentare

Du kannst Kommentare hinzufügen, indem du Text mit `%%` umschließt. Kommentare sind nur in der Editor-Ansicht sichtbar.

```md
Dies ist ein %%Inline-%%-Kommentar.

%%
Dies ist ein Block-Kommentar.

Block-Kommentare können mehrere Zeilen umfassen.
%%
```

## Markdown-Syntax escapen

In manchen Fällen musst du Sonderzeichen in Markdown anzeigen, wie `*`, `_` oder `#`, ohne deren Formatierung auszulösen. Um diese Zeichen wörtlich anzuzeigen, setze einen Backslash (`\`) davor.

> [!example] Häufig zu escapende Zeichen
> 
> - Sternchen: `\*`
> - Unterstrich: `\_`
> - Raute: `\#`
> - Backtick: `` \` ``
> - Pipe (in Tabellen verwendet): `\|`
> - Tilde: `\~`

```md
\*Dieser Text wird nicht kursiv dargestellt\*.
```

\*Dieser Text wird nicht kursiv dargestellt\*.

Wenn du mit nummerierten Listen arbeitest, musst du möglicherweise den Punkt nach der Zahl escapen, um eine automatische Listenformatierung zu verhindern. Setze den Backslash (`\`) vor den Punkt, **nicht** vor die Zahl.

```md
1\. Dies wird kein Listeneintrag sein.
```

1\. Dies wird kein Listeneintrag sein.

## Erfahre mehr

Um mehr über erweiterte Formatierungssyntax wie Tabellen, Diagramme und mathematische Ausdrücke zu erfahren, siehe [[Erweiterte Formatierungssyntax]].

Um mehr darüber zu erfahren, wie Obsidian Markdown interpretiert, siehe [[Obsidian Flavored Markdown]].
