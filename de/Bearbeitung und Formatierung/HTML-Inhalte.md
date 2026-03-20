---
permalink: html
publish: true
mobile: true
description: >-
  Erfahre, wie du HTML in Obsidian verwenden kannst, einschließlich
  Einschränkungen beim Markdown-Rendering und Anforderungen an HTML-Blöcke.
---
Obsidian unterstützt HTML, damit du deine Notizen nach deinen Wünschen gestalten oder sogar [[Webseiten einbetten|Webseiten einbetten]] kannst. Die Verwendung von HTML in deinen Notizen birgt Risiken. Um zu verhindern, dass bösartiger Code Schaden anrichtet, _bereinigt_ Obsidian jegliches HTML in deinen Notizen.

> [!example]
> Das `<script>`-Element ermöglicht normalerweise die Ausführung von JavaScript, sobald es geladen wird. Wenn Obsidian HTML nicht bereinigen würde, könnte ein Angreifer dich dazu bringen, einen Text einzufügen, der JavaScript enthält, das sensible Informationen von deinem Computer extrahiert und an ihn zurücksendet.

Da die Markdown-Syntax jedoch nicht alle Formen der Gestaltung unterstützt, kann die Verwendung von bereinigtem HTML eine weitere Möglichkeit sein, die Qualität deiner Notizen zu verbessern. Wir haben einige der gebräuchlichsten HTML-Anwendungen zusammengestellt.

## HTML-Einschränkungen

Obsidian hat bestimmte Einschränkungen bei der Verwendung von HTML in deinen Notizen:

### Kein Markdown innerhalb von HTML

Obsidian rendert keine Markdown-Syntax innerhalb von HTML-Elementen. Dies ist eine bewusste Designentscheidung zur Leistungsoptimierung und um die Parser-Komplexität bei der Verwaltung großer Dokumente gering zu halten.

Zum Beispiel wird dies nicht wie erwartet funktionieren:

```md
<div>
Dieser Text wird **nicht** fett und dieser `nicht` als Quelltext dargestellt.
</div>
```

### HTML-Blöcke müssen eigenständig sein

HTML-Blöcke müssen vollständig sein und dürfen keine Leerzeilen enthalten. Leerzeilen unterbrechen den HTML-Block.

Dies funktioniert:

```md
<table>
<tr>
<td>Inhalt hier</td>
</tr>
</table>
```

Dies funktioniert nicht korrekt:

```md
<table>

<tr>

<td>Inhalt hier</td>

</tr>

</table>
```

### Wenn Markdown scheinbar in HTML funktioniert

Einige Inline-HTML-Tags wie `<span>` oder `<a>` haben eingeschränkte Funktionalität und scheinen Markdown zu rendern, aber das ist nicht wirklich der Fall. Das Markdown wird außerhalb des HTML-Kontexts verarbeitet.

Weitere Details zur Handhabung von Markdown durch Obsidian findest du unter [[Obsidian Flavored Markdown]].

## Gängige HTML-Verwendung

> [!info] Weitere Details zur Verwendung von `<iframe>` findest du unter [[Webseiten einbetten]].

### Kommentare

[[Grundlegende Formatierungssyntax#Kommentare|Markdown-Kommentare]] sind die bevorzugte Methode, um versteckte Kommentare in deinen Notizen hinzuzufügen. Einige Methoden zur Konvertierung von Markdown-Notizen, wie z. B. [Pandoc](https://pandoc.org), bieten jedoch nur eingeschränkte Unterstützung für Markdown-Kommentare. In diesen Fällen kannst du stattdessen `<!-- HTML-Kommentar -->` verwenden!

### Unterstreichen

Wenn du ein Element in deinen Notizen schnell unterstreichen möchtest, kannst du `<u>Beispiel</u>` verwenden, um <u>deinen unterstrichenen Text</u> zu erstellen.

### Span/Div

Span- und Div-Tags können verwendet werden, um benutzerdefinierte Klassen aus einem [[CSS-Bausteine|CSS-Snippet]] oder benutzerdefinierte Styles auf einen ausgewählten Textbereich anzuwenden. Zum Beispiel kannst du mit `<span style="font-family: cursive">dein Text</span>` schnell <span style="font-family: cursive">deine Schriftart ändern</span>.

## Durchgestrichen

Musst du <s>etwas Text</s> durchstreichen? Verwende `<s>dies</s>`, um ihn durchzustreichen.
