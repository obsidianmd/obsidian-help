---
permalink: bases/views/kanban
---
Kanban ist eine Art [[Ansichten|Sicht]], die du in [[Einführung in Bases|Bases]] verwenden kannst.

Wähle ![[lucide-kanban-square.svg#icon]] **Kanban** aus dem Sicht-Menü, um Dateien als Karten anzuzeigen, die in Spalten organisiert sind. Jede Spalte repräsentiert einen Wert der Eigenschaft, nach der die Ergebnisse gruppiert werden.


> [!note] Erfordert Obsidian 1.14+
> Kanban-Sichten sind ab Obsidian 1.14 verfügbar.


## Karten in Spalten gruppieren

Eine Kanban-Sicht benötigt eine Eigenschaft, nach der die Ergebnisse gruppiert werden.

1. Wähle **Gruppieren** in der Symbolleiste. Auf Smartphones wähle **Anzeige → Gruppieren**.
2. Wähle unter **Gruppieren nach** eine Eigenschaft aus.

Dateien ohne Wert für die ausgewählte Eigenschaft erscheinen in der Spalte **Kein Wert**.

> [!info] 
> Wenn du nach einer Formel oder einer Datei-Eigenschaft außer `file.folder` gruppierst, kannst du Karten und Spalten nicht verschieben und keine Notizen aus den Spalten erstellen. Du kannst dennoch im Menü **Gruppieren** die [[Ansichten#Gruppen neu ordnen, ausblenden und hinzufügen|Gruppenreihenfolge und Sichtbarkeit verwalten]].

## Mit Karten und Spalten arbeiten

- Ziehe eine Karte in eine andere Spalte, um die gruppierte Eigenschaft in dieser Notiz zu aktualisieren. Nur Markdown-Notizen können zwischen Spalten verschoben werden, außer bei Gruppierung nach `file.folder`, wobei das Verschieben einer Karte die Datei in den entsprechenden Ordner verschiebt.
- Wähle das Plus-Symbol in einer Spaltenüberschrift oder ![[lucide-plus.svg#icon]] **Neu** am unteren Ende einer Spalte, um eine Notiz mit dem Wert dieser Spalte zu erstellen.
- Ziehe eine Spaltenüberschrift, um die Spaltenreihenfolge zu ändern. Um die automatische Reihenfolge wiederherzustellen, öffne **Gruppieren** und wähle eine automatische Sortierreihenfolge anstelle von **Manuell**.
- Verwende **Gruppieren**, um [[Ansichten#Gruppen neu ordnen, ausblenden und hinzufügen|Spalten neu zu ordnen, auszublenden oder hinzuzufügen]].
- Verwende das Menü ![[lucide-list.svg#icon]] **Eigenschaften**, um die auf jeder Karte angezeigten Eigenschaften auszuwählen. Die erste Eigenschaft wird als Kartentitel angezeigt.

## Einstellungen

Kanban-Sicht-Einstellungen können in den [[Ansichten#Sicht-Einstellungen|Sicht-Einstellungen]] konfiguriert werden.

- Leere Spalten ausblenden
- Spaltenbreite
- Bild-Eigenschaft
- Bildanpassung
- Bildformat

### Leere Spalten ausblenden

Blendet Spalten aus, die keine Karten enthalten.

### Spaltenbreite

Definiert die Breite jeder Spalte und ihrer Karten.

### Bild-Eigenschaft

Kanban-Karten unterstützen ein optionales Titelbild, das oben auf der Karte angezeigt wird. Die unterstützten Eigenschaftswerte sind dieselben wie bei der [[Galerie#Bild-Eigenschaft|Bild-Eigenschaft in der Galerie-Sicht]].

### Bildanpassung

Wenn du eine Bild-Eigenschaft konfiguriert hast, bestimmt diese Option, wie das Bild auf der Karte angezeigt wird.

- **Ausfüllen:** Das Bild füllt den Inhaltsbereich der Karte aus. Wenn es nicht passt, wird das Bild zugeschnitten.
- **Einpassen:** Das Bild wird skaliert, bis es in den Inhaltsbereich der Karte passt. Das Bild wird nicht zugeschnitten.

### Bildformat

Die Höhe des Titelbilds wird durch sein Seitenverhältnis bestimmt. Passe diese Option an, um das Bild kürzer oder höher darzustellen.
