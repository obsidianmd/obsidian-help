---
permalink: callouts
publish: true
mobile: true
description: 'Diese Seite beschreibt, wie du Hinweisblöcke verwendest, um zusätzliche. Inhalte einzufügen, ohne den Fluss deiner Notizen zu unterbrechen.'
aliases:
  - Callouts
---
Verwende Hinweisblöcke, um zusätzliche Inhalte einzufügen, ohne den Fluss deiner Notizen zu unterbrechen.

Um einen Hinweisblock zu erstellen, füge `[!info]` in die erste Zeile eines Blockzitats ein, wobei `info` die _Typ-Kennung_ ist. Die Typ-Kennung bestimmt das Aussehen und Verhalten des Hinweisblocks. Alle verfügbaren Typen findest du unter [[#Unterstützte Typen]]. Hinweisblöcke werden auch nativ auf [[Einführung in Obsidian Publish|Obsidian Publish]] unterstützt.

```markdown
> [!info] Hier ist ein Hinweisblock-Titel
> Hier ist ein Hinweisblock.
> Er unterstützt **Markdown**, [[Interne Links|Wiki-Links]] und [[Dateien einbetten|Einbettungen]]!
> ![[Engelbart.jpg]]
```

> [!info] Hier ist ein Hinweisblock-Titel
> Hier ist ein Hinweisblock.
> Er unterstützt **Markdown**, [[Interne Links|Wiki-Links]] und [[Dateien einbetten|Einbettungen]]!
> ![[Engelbart.jpg]]

Du kannst einen Standard-`[!note]`-Hinweisblock mit dem [[Befehlspalette|Befehl]] `Callout einfügen` einfügen. Der Cursor wird automatisch im Namensfeld des Hinweisblocks positioniert, sodass du den Standardnamen löschen und einen neuen eingeben kannst, bevor du den Inhalt bearbeitest.

Um bestehenden Inhalt in einen Hinweisblock einzuschließen, wähle den Text aus (einschließlich Listen, Quelltext-Blöcke usw.) und führe den Befehl `Callout einfügen` aus. Der ausgewählte Inhalt wird automatisch in den Hinweisblock eingeschlossen.

In der [[Ansichten und Bearbeitungsmodus#Live-Vorschau|Live-Vorschau]] kannst du auch mit der rechten Maustaste auf den Hinweisblock-Namen klicken, um den Hinweisblock-Typ zu ändern.


### Titel ändern

Standardmäßig ist der Titel des Hinweisblocks die Typ-Kennung in Großbuchstaben am Wortanfang. Du kannst ihn ändern, indem du Text nach der Typ-Kennung hinzufügst:

```markdown
> [!tip] Hinweisblöcke können benutzerdefinierte Titel haben
> Wie dieser hier.
```

> [!tip] Hinweisblöcke können benutzerdefinierte Titel haben
> Wie dieser hier.

Du kannst den Inhalt auch weglassen, um reine Titel-Hinweisblöcke zu erstellen:

```markdown
> [!tip] Hinweisblock nur mit Titel
```

> [!tip] Hinweisblock nur mit Titel

### Einklappbare Hinweisblöcke

Du kannst einen Hinweisblock einklappbar machen, indem du ein Plus (`+`) oder ein Minus (`-`) direkt nach der Typ-Kennung hinzufügst.

Ein Pluszeichen klappt den Hinweisblock standardmäßig aus, ein Minuszeichen klappt ihn ein.

```markdown
> [!faq]- Sind Hinweisblöcke einklappbar?
> Ja! In einem einklappbaren Hinweisblock wird der Inhalt ausgeblendet, wenn der Hinweisblock eingeklappt ist.
```

> [!faq]- Sind Hinweisblöcke einklappbar?
> Ja! In einem einklappbaren Hinweisblock wird der Inhalt ausgeblendet, wenn er eingeklappt ist.

### Verschachtelte Hinweisblöcke

Du kannst Hinweisblöcke in mehreren Ebenen verschachteln.

```markdown
> [!question] Können Hinweisblöcke verschachtelt werden?
> > [!todo] Ja!, das können sie.
> > > [!example]  Du kannst sogar mehrere Verschachtelungsebenen verwenden.
```

> [!question] Können Hinweisblöcke verschachtelt werden?
> > [!todo] Ja!, das können sie.
> > > [!example]  Du kannst sogar mehrere Verschachtelungsebenen verwenden.

### Hinweisblöcke anpassen

[[CSS-Bausteine]] und [[Community-Erweiterungen]] können benutzerdefinierte Hinweisblöcke definieren oder sogar die Standardkonfiguration überschreiben.

Um einen benutzerdefinierten Hinweisblock zu definieren, erstelle den folgenden CSS-Block:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

Der Wert des `data-callout`-Attributs ist die Typ-Kennung, die du verwenden möchtest, zum Beispiel `[!custom-question-type]`.

- `--callout-color` definiert die Hintergrundfarbe mit Zahlen (0–255) für Rot, Grün und Blau.
- `--callout-icon` kann eine Symbol-ID von [lucide.dev](https://lucide.dev) oder ein SVG-Element sein.

> [!warning] Hinweis zu Lucide-Symbol-Versionen
> Obsidian aktualisiert Lucide-Symbole regelmäßig. Die aktuell enthaltene Version wird unten angezeigt; verwende diese oder frühere Symbole in benutzerdefinierten Hinweisblöcken.
> ![[Danksagungen#^lucide]]

> [!tip] SVG-Symbole
> Anstatt ein Lucide-Symbol zu verwenden, kannst du auch ein SVG-Element als Hinweisblock-Symbol verwenden.
>
> ```css
> --callout-icon: '<svg>...benutzerdefiniertes SVG...</svg>';
> ```

### Unterstützte Typen

Du kannst verschiedene Hinweisblock-Typen und Aliasse verwenden. Jeder Typ hat eine andere Hintergrundfarbe und ein anderes Symbol.

Um diese Standardstile zu verwenden, ersetze `info` in den Beispielen durch einen dieser Typen, wie zum Beispiel `[!tip]` oder `[!warning]`. Hinweisblock-Typen können auch durch Rechtsklick auf einen Hinweisblock im Live-Vorschau-Modus geändert werden.

Sofern du keine [[#Hinweisblöcke anpassen|Anpassungen vornimmst]], wird jeder nicht unterstützte Typ standardmäßig als `note`-Typ dargestellt. Die Typ-Kennung unterscheidet nicht zwischen Groß- und Kleinschreibung.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Aliasse: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Aliasse: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Aliasse: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Aliasse: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Aliasse: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Aliasse: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alias: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Alias: `cite`
