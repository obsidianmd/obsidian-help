---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Erfahre, wie du mit internen Links auf Notizen, Anhänge und andere Dateien in deinen Notizen verweisen kannst.
---
Erfahre, wie du mit _internen Links_ auf Notizen, Anhänge und andere Dateien in deinen Notizen verweisen kannst. Durch das Verknüpfen von Notizen kannst du ein Wissensnetzwerk aufbauen. ^b15695

Obsidian kann interne Links in deinem Vault automatisch aktualisieren, wenn du eine Datei umbenennst. Wenn du stattdessen gefragt werden möchtest, kannst du diese Option deaktivieren unter:

**[[Einstellungen]]** → **[[Einstellungen#Dateien & Links|Dateien & Links]]** → **[[Einstellungen#Interne Links automatisch aktualisieren|Interne Links automatisch aktualisieren]]**.

## Unterstützte Formate für interne Links

Obsidian unterstützt die folgenden Link-Formate:

- Wiki-Link: `[[Three laws of motion]]` oder `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` oder `[Three laws of motion](Three%20laws%20of%20motion.md)`

Die obigen Beispiele sind gleichwertig, sie erscheinen im Editor auf die gleiche Weise und verweisen auf dieselbe Notiz.

> [!note] Hinweis
> Wenn du das Markdown-Format verwendest, stelle sicher, dass du das Linkziel [URL-kodierst](https://en.wikipedia.org/wiki/Percent-encoding). Zum Beispiel werden Leerzeichen zu `%20`.

Standardmäßig erzeugt Obsidian aufgrund des kompakteren Formats Links im Wiki-Link-Format. Wenn dir Interoperabilität wichtig ist, kannst du Wiki-Links deaktivieren und stattdessen Markdown-Links verwenden.

So verwendest du das Markdown-Format:

1. Öffne die **[[Einstellungen]]**.
2. Deaktiviere unter **Dateien & Links** die Option **\[\[Wiki-Links\]\] verwenden**.

Auch wenn du das Wiki-Link-Format deaktivierst, kannst du Links weiterhin autovervollständigen, indem du zwei eckige Klammern `[[` eingibst. Wenn du eine der vorgeschlagenen Dateien auswählst, erzeugt Obsidian stattdessen einen Markdown-Link.

> [!note] Ungültige Zeichen
> Eine Zeichenkette, die die folgenden Zeichen enthält, funktioniert möglicherweise nicht als Link: `# | ^ : %% [[ ]]`.
> 
> Wir empfehlen, diese Zeichen zu vermeiden und [sichere Dateinamen-Praktiken](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) anzuwenden.

## Auf eine Datei verlinken

Um einen Link in der Editor-Ansicht zu erstellen, verwende eine der folgenden Methoden:

- Tippe `[[` im Editor ein und wähle dann die Datei aus, auf die du verlinken möchtest.
- Markiere Text im Editor und tippe dann `[[`.
- Öffne die [[Befehlspalette]] und wähle dann Internen Link hinzufügen.

![[Schnellauswahl#^search-autocomplete-large]]

Du kannst zwar auf alle [[Akzeptierte Dateiformate]] verlinken, aber Links zu anderen Dateiformaten als Markdown müssen eine Dateiendung enthalten, wie z. B. `[[Figure 1.png]]`.

> [!tip] Wenn du einem internen Link ein Ausrufezeichen (!) voranstellst, kannst du den verlinkten Inhalt einbetten. Weitere Details findest du unter [[Dateien einbetten]].

> [!info] Ignorierte Dateien
> Dateien, die deinen [[Einstellungen#Ignorierte Dateien|Ignorierte Dateien]]-Mustern entsprechen, werden bei Linkvorschlägen beim Erstellen interner Links herabgestuft.

## Auf eine Überschrift in einer Notiz verlinken

Du kannst auf bestimmte Überschriften in Notizen verlinken, auch als _Anker-Links_ bekannt.

**Auf eine Überschrift innerhalb derselben Notiz verlinken**

Um auf eine Überschrift innerhalb derselben Notiz zu verlinken, tippe `[[#`, um eine Liste der Überschriften in der Notiz zu erhalten.

Zum Beispiel erstellt `[[#Vorschau einer verlinkten Datei]]` einen Link zu [[#Vorschau einer verlinkten Datei]].

**Auf eine Überschrift in einer anderen Notiz verlinken**

Um auf eine Überschrift in einer anderen Notiz zu verlinken, füge am Ende des Linkziels ein Rautezeichen (`#`) hinzu, gefolgt vom Überschriftentext.

Zum Beispiel erstellt `[[Über Obsidian#Links sind erstklassige Bürger]]` einen Link zu [[Über Obsidian#Links sind erstklassige Bürger]].

**Auf Unterüberschriften verlinken**

Du kannst mehrere Rautezeichen für jede Unterüberschrift hinzufügen.

Zum Beispiel erstellt `[[Hilfe und Support#Fragen und Ratschläge#Fehler melden und Funktionen anfragen]]` einen Link zu [[Hilfe und Support#Fragen und Ratschläge#Fehler melden und Funktionen anfragen]].

**Nach Überschriften im gesamten Vault suchen**

Um im gesamten Vault nach Überschriften zu suchen, verwende die Syntax `[[## Überschrift]]`.

Zum Beispiel sucht `[[##` generisch im gesamten Vault, während `[[## team]]` nach allen Überschriften sucht, die das Wort _team_ enthalten.

> [!info]- Screenshot der Suche nach einem Überschriften-Link
>
> ![[internal-links-header.png#interface]]

## Auf einen Block in einer Notiz verlinken

Ein Block ist eine Texteinheit in deiner Notiz, wie ein Absatz, Blockzitat oder Listenelement.

Du kannst auf einen Block verlinken, indem du `#^` am Ende deines Linkziels hinzufügst, gefolgt von einer eindeutigen Block-ID. Zum Beispiel: `[[2023-01-01#^37066d]]`. Glücklicherweise musst du die ID nicht manuell suchen — wenn du das Caret-Zeichen (`^`) eingibst, erscheint eine Liste von Vorschlägen, aus der du den richtigen Block auswählen kannst.

Für *einfache Absätze* platziere ein Leerzeichen gefolgt von einem Caret `^` und der Block-ID am Ende der Zeile:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Für *strukturierte Blöcke* (Listen, Zitate, Hinweisblöcke, Tabellen) sollte die Block-ID in einer separaten Zeile stehen, mit einer Leerzeile davor und danach:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Für *bestimmte Zeilen innerhalb einer Liste* kann die Block-ID direkt an einem Aufzählungszeichen platziert werden:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Wir unterstützen keine Links zu bestimmten Teilen von Zitaten, Hinweisblöcken und Tabellen.

**Nach Blöcken im gesamten Vault suchen**

Du kannst auch im gesamten Vault nach Blöcken suchen, auf die du verlinken möchtest, indem du die Syntax `[[^^block]]` verwendest. Allerdings qualifizieren sich mehr Elemente als Blöcke im Vergleich zu [[#Auf eine Überschrift in einer Notiz verlinken|Überschriften-Links]], sodass diese Liste deutlich länger sein wird.

> [!info]- Screenshot der Suche nach einem Block-Link
> ![[link-block-heading.png#interface]]

Du kannst auch menschenlesbare Block-IDs erstellen, indem du ein Leerzeichen gefolgt von einem Caret (`^`) und der ID hinzufügst. Block-IDs können nur aus lateinischen Buchstaben, Zahlen und Bindestrichen bestehen.

Füge zum Beispiel `^quote-of-the-day` am Ende eines Blocks hinzu:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Jetzt kannst du auf den Block verlinken, indem du `[[2023-01-01#^quote-of-the-day]]` eingibst.

> [!warning] Interoperabilität
> Block-Referenzen sind spezifisch für Obsidian und nicht Teil des Standard-Markdown-Formats. Links mit Block-Referenzen funktionieren außerhalb von Obsidian nicht.

## Anzeigetext des Links ändern

Standardmäßig zeigt Obsidian den Linktext so an, wie er erscheint. Zum Beispiel:
- `[[Beispiel]]` wird als [[Beispiel]] angezeigt
- `[[Beispiel#Details]]` wird als [[Beispiel#Details]] angezeigt

Du kannst die Anzeige eines Links ändern, indem du seinen Anzeigetext anpasst:

**Wiki-Link-Format**:
Verwende einen senkrechten Strich (`|`), um den Anzeigetext zu ändern.

- `[[Beispiel|Benutzerdefinierter Name]]` erscheint als [[Beispiel|Benutzerdefinierter Name]]
- `[[Beispiel#Details|Abschnittsname]]` erscheint als [[Beispiel#Details|Abschnittsname]]

**Markdown-Format**:
Verwende `[Anzeigetext](Link-URL)`, um die Darstellung des Links anzupassen.

- `[Benutzerdefinierter Name](Beispiel.md)` erscheint als [Benutzerdefinierter Name](Beispiel.md)
- `[Abschnittsname](Beispiel.md#Details)` erscheint als [Abschnittsname](Beispiel.md#Details)

Diese Methode ist nützlich für einmalige Situationen, in denen du das Aussehen eines Links in einem bestimmten Kontext ändern möchtest. Wenn du einen alternativen Linknamen einrichten möchtest, den du in deinem gesamten Vault wiederverwenden kannst, solltest du stattdessen einen [[Aliasse|Alias]] verwenden.

Wenn du zum Beispiel regelmäßig auf `[[Three laws of motion]]` als `[[The 3 laws]]` verweist, kannst du „3 laws" als Alias hinzufügen — so musst du nicht jedes Mal einen benutzerdefinierten Anzeigetext hinzufügen.

> [!tip] Tipp
> Verwende [[#Anzeigetext des Links ändern|Anzeigetext des Links]], wenn du das Aussehen eines Links *an einer bestimmten Stelle* anpassen möchtest.
> 
> Verwende [[Aliasse|Aliasse]], wenn du dieselbe Notiz mit *verschiedenen Namen* in deinem gesamten Vault referenzieren möchtest.
^callout-internal-links-link-text

## Vorschau einer verlinkten Datei

> [!note] Hinweis
> Um verlinkte Dateien in der Vorschau anzuzeigen, musst du zuerst [[Seitenvorschau]] aktivieren.

Um eine verlinkte Datei in der Vorschau anzuzeigen, bewege den Mauszeiger über einen internen Link. Im Bearbeitungsmodus halte `Strg` (oder `Cmd` unter macOS) gedrückt, während du den Mauszeiger über den Link bewegst. Eine Vorschau des Dateiinhalts erscheint neben dem Mauszeiger.
