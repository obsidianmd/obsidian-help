---
permalink: snippets
publish: true
mobile: true
description: Erfahre, wie du Teile der Darstellung der Obsidian-App ändern kannst, ohne ein vollständiges Thema zu erstellen.
---
Erfahre, wie du Aspekte der Darstellung der Obsidian-Anwendung ändern kannst, ohne ein [Thema erstellen](https://docs.obsidian.md/Themes/App+themes/Build+a+theme) zu müssen.

> [!tip] Wenn du nach Anleitungen für den Umgang mit CSS für [[Einführung in Obsidian Publish|Obsidian Publish]] suchst, lies unbedingt [[Website anpassen]].

CSS ist eine Sprache, die das Aussehen von HTML steuert. Durch das Hinzufügen von CSS-Snippets kannst du Teile der Obsidian-Benutzeroberfläche ändern, wie die Größe und Farbe von Überschriften. Obsidian verfügt über [CSS-Variablen](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables), die dir helfen, die Oberfläche einfach anzupassen.

Obsidian sucht nach CSS-Snippets im [[Konfigurationsordner]] des Vaults.

## Ein Snippet hinzufügen

Um ein CSS-Snippet auf dem **Desktop** ![[lucide-monitor-check.svg#icon]] hinzuzufügen, befolge diese Schritte:

1. Öffne die **[[Einstellungen]]** ( ![[lucide-settings.svg#icon]] ).
2. Wähle unter **Darstellung → CSS-Bausteine** die Option **CSS-Baustein-Ordner öffnen** ( ![[lucide-folder-open.svg#icon]] ).
3. Erstelle im Snippets-Ordner eine CSS-Datei mit deinem Snippet.
4. Wähle in Obsidian unter **Darstellung → CSS-Bausteine** die Option **CSS-Bausteine neu laden** ( ![[lucide-refresh-cw.svg#icon]] ), um das Snippet in der Liste zu sehen.
5. Aktiviere das Snippet, indem du auf den Schalter klickst.

Um ein CSS-Snippet auf **Mobilgeräten/Tablets** ![[obsidian-icon-smartphone.svg#icon]] hinzuzufügen, kannst du diese Schritte befolgen:

1. Öffne einen Dateimanager und finde deinen Vault. Du kannst den Speicherort des Vaults unter _Vaults verwalten…_ überprüfen, indem du auf deinen Vault tippst und den Pfad anschaust.
2. Öffne den [[Konfigurationsordner]] und erstelle einen Ordner namens `snippets`, falls er noch nicht existiert.
3. Füge dein CSS-Snippet in diesen Ordner ein.
4. Öffne die **[[Einstellungen]]** von Obsidian ( ![[lucide-settings.svg#icon]] ).
5. Wähle links **Darstellung** aus.
6. Scrolle nach unten zum Abschnitt **CSS-Bausteine**.
7. Tippe auf **CSS-Bausteine neu laden** (![[lucide-refresh-cw.svg#icon]]), um die Liste zu aktualisieren.
8. Tippe auf den Schalter, um das Snippet zu aktivieren.

Alternativ kannst du
- Alle Änderungen mit deinem Synchronisierungsdienst [[Notizen geräteübergreifend synchronisieren|synchronisieren]].
- Eine externe Erweiterung verwenden, um ein Snippet direkt in Obsidian zu erstellen.

Sobald ein Snippet aktiviert ist, erkennt Obsidian automatisch Änderungen an CSS-Snippets und wendet sie an, wenn du die Datei speicherst.

> [!tip] Du musst Obsidian nicht neu starten, damit Änderungen wirksam werden. Möglicherweise musst du jedoch den [[Befehlspalette|Befehlspaletten]]-Befehl verwenden, um Obsidian ohne Speichern neu zu laden, damit Änderungen am aktuellen Thema oder in der Notiz sichtbar werden.

## CSS für Obsidian schreiben

Obsidian bietet mehrere Methoden, die das Schreiben von CSS einfacher und leistungsfähiger machen.

Es verfügt über zahlreiche [CSS-Variablen](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables), um Teile von Obsidian einfach zu ändern, und einen eingebauten [[Eigenschaften#Eigenschaftentypen|Eigenschaftentyp]], um die Darstellung einer oder mehrerer Notizen zu ändern.

> [!example] Variablen
> Erstelle eine Datei namens `headers.css` mit folgendem Inhalt, um die Farben der sechs [[Grundlegende Formatierungssyntax#Überschriften|Überschriftenebenen]] in einen Regenbogen zu ändern:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS-Klassen
> Weise den Namen einer benutzerdefinierten CSS-Klasse (oder eine Liste von CSS-Klassen) der vordefinierten [[Eigenschaften|Eigenschaft]] `cssclasses` zu, um eine oder mehrere Notizen anders aussehen zu lassen als andere.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
> }
> ```
> 
> **YAML/Eigenschaften**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> In jeder Notiz, die den Wert `red-border` in der `cssclasses`-Eigenschaft enthält, werden Bilder mit einem roten Rahmen angezeigt.

Um sicherzustellen, dass die CSS-Datei gültig und korrekt formatiert ist, empfehlen wir, sie mit einem Tool wie dem [CSS Validation Service](https://jigsaw.w3.org/css-validator/) zu validieren, da ungültiges CSS nicht funktioniert.

## Erfahre mehr

- Wenn du CSS noch nicht kennst, schau dir [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) von Mozilla an.
- Weitere Informationen zum Gestalten von Obsidian findest du unter:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
