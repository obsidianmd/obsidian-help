---
permalink: plugins/graph
publish: true
mobile: true
description: >-
  Die Graph-Ansicht ist eine integrierte Erweiterung, mit der du die Beziehungen
  zwischen den Notizen in deinem Vault visualisieren kannst.
---
Die Graph-Ansicht ist eine [[Obsidian-Erweiterungen|integrierte Erweiterung]], mit der du die Beziehungen zwischen den Notizen in deinem Vault visualisieren kannst.

Um die Graph-Ansicht zu öffnen, klicke auf **Graph-Ansicht öffnen** in der [[Menüband|Werkzeugleiste]].

- Kreise repräsentieren Notizen, oder _Knoten_.
- Linien repräsentieren [[Interne Links]] zwischen zwei Knoten.

Je mehr Knoten auf einen bestimmten Knoten verweisen, desto größer wird er.

Um mit Notizen im Graphen zu interagieren:

- Bewege den Mauszeiger über einen Kreis, um die Verbindungen dieser Notiz hervorzuheben.
- Klicke auf eine Notiz im Graphen, um diese Notiz zu öffnen.
- Klicke mit der rechten Maustaste auf eine Notiz, um ein Kontextmenü mit den verfügbaren Aktionen für diese Notiz zu öffnen.

Um im Graphen zu navigieren:

- Vergrößere und verkleinere mit dem Scrollrad deiner Maus oder mit den Tasten `+` und `-`.
- Verschiebe den Graphen, indem du ihn mit dem Mauszeiger ziehst oder die Pfeiltasten verwendest.

Du kannst die Umschalttaste gedrückt halten, während du die Tastatur verwendest, um die Bewegungen zu beschleunigen.

## Einstellungen

Um die Graph-Einstellungen zu öffnen, klicke auf das Zahnradsymbol in der oberen rechten Ecke der Graph-Ansicht.

Klicke auf **Voreinstellungen wiederherstellen** in der oberen rechten Ecke des Einstellungsfensters, um alle vorgenommenen Änderungen zurückzusetzen.

### Filter

Dieser Abschnitt steuert, welche Knoten im Graphen angezeigt werden.

- **Dateien suchen** ermöglicht dir, Notizen anhand eines Suchbegriffs zu filtern. Um zu erfahren, wie du fortgeschrittenere Suchbegriffe schreiben kannst, siehe [[Suchen]].
- **Tags** schaltet um, ob Tags im Graphen angezeigt werden.
- **Anhänge** schaltet um, ob Anhänge im Graphen angezeigt werden.
- **Nur existierende Dateien zeigen** schaltet um, ob nur Notizen angezeigt werden, die in deinem Vault existieren. Da eine Notiz nicht existieren muss, um auf sie zu verlinken, kann dies helfen, deinen Graphen auf Notizen zu beschränken, die du tatsächlich in deinem Vault hast.
- **Verwaiste Dateien** schaltet um, ob Notizen ohne Verknüpfungen angezeigt werden.

> [!info] Ignorierte Dateien
> Dateien, die deinen [[Einstellungen#Ignorierte Dateien|Ignorierte Dateien]]-Mustern entsprechen, werden in der Graph-Ansicht nicht angezeigt.

### Gruppen

Erstelle Gruppen von Notizen, um sie mithilfe von Farben voneinander zu unterscheiden.

Um eine neue Gruppe zu erstellen:

1. Klicke auf **Neue Gruppe von Lesezeichen**.
2. Gib im Suchfeld einen Suchbegriff für die Notizen ein, die du zur Gruppe hinzufügen möchtest.
3. Klicke auf den farbigen Kreis, um der Gruppe eine Farbe zuzuweisen.

Um zu erfahren, wie du fortgeschrittenere Suchbegriffe schreiben kannst, siehe [[Suchen]].

### Anzeige

Dieser Abschnitt steuert, wie Knoten und Links im Graphen dargestellt werden.

- **Pfeile** schaltet um, ob die Richtung jedes Links angezeigt wird.
- **Grenze Text-Transparenz** steuert die Texttransparenz für den Namen jeder Notiz.
- **Knotengröße** steuert die Größe des Kreises, der jede Notiz repräsentiert.
- **Kantenstärke** steuert die Linienbreite für jeden Link.
- **Animieren** startet eine [[#Zeitrafferanimation starten|Zeitrafferanimation]].

### Kräfte

Dieser Abschnitt steuert die Kräfte, die auf jeden Knoten im Graphen wirken.

- **Zentrierkraft** steuert, wie kompakt der Graph ist. Ein höherer Wert erzeugt einen kreisförmigeren Graphen.
- **Abstoßungskraft** steuert, wie stark ein Knoten andere Knoten von sich wegdrückt.
- **Linkkraft** steuert die Zugkraft auf jeden Link. Wenn der Link ein Gummiband wäre, steuert die Linkkraft, wie straff oder locker das Band ist.
- **Linkabstand** steuert die Länge der Linien zwischen den einzelnen Notizen.

## Zeitrafferanimation starten

Notizen und Anhänge erscheinen in chronologischer Reihenfolge basierend auf ihrer Erstellungszeit.

![[obsidian-graph-view.png#interface]]

## Lokaler Graph

Um eine lokale Graph-Ansicht zu öffnen, verwende den Befehl **Lokalen Graphen öffnen**. Während die Graph-Ansicht alle Notizen in deinem Vault anzeigt, zeigt dir eine lokale Graph-Ansicht Notizen, die mit der aktiven Notiz verbunden sind.

Die lokale Graph-Ansicht kann alle [[#Einstellungen]] verwenden, die auch für die globale Graph-Ansicht verfügbar sind. Zusätzlich kannst du die Tiefe des lokalen Graphen ändern. Jede Tiefenstufe zeigt Notizen, die mit den Notizen der vorherigen Tiefenstufe verbunden sind. Um die Tiefe des lokalen Graphen zu steuern, verwende den Schieberegler oben im Filtereinstellungs-Panel des lokalen Graphen.
