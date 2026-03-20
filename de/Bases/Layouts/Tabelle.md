---
permalink: bases/views/table
---
Tabelle ist ein Typ von [[Ansichten|Ansicht]], den du in [[Einführung in Bases|Bases]] verwenden kannst.

Wähle ![[lucide-table.svg#icon]]  **Tabelle** aus dem Ansichtsmenü, um Dateien als Tabelle anzuzeigen, mit einer Zeile pro Datei und Spalten für die [[Eigenschaften]] dieser Datei.

![Beispiel einer Basis, die eine Tabellenansicht mit einer Bücherliste zeigt](bases-noshadow.png#interface)

## Einstellungen

Tabellenansicht-Einstellungen können in den [[Ansichten#Ansichtseinstellungen|Ansichtseinstellungen]] konfiguriert werden.

### Zeilenhöhe

Die Zeilenhöhe ermöglicht es dir, mehr Informationen anzuzeigen. Wähle zwischen **Klein**, **Mittel**, **Groß** und **Extra groß**.

## Zusammenfassungen

Du kannst Zusammenfassungen zu einer Tabellenspalte hinzufügen, um schnell Werte wie Summen, Durchschnitte oder Anzahlen für die aktuell in der Ansicht sichtbaren Zeilen zu berechnen.

Zusammenfassungen sind an die Ansicht gebunden, nicht an die Basis. Jede Ansicht kann unterschiedliche Zusammenfassungen für dieselbe Spalte anzeigen.

### Zusammenfassung hinzufügen

1. Klicke mit der rechten Maustaste auf den Spaltenkopf in einer Tabellenansicht.
2. Wähle ![[lucide-calculator.svg#icon]] **Zusammenfassen…**.
3. Wähle eine der integrierten Zusammenfassungsfunktionen oder wähle ![[lucide-square-function.svg#icon]] **Zusammenfassung hinzufügen**, um eine eigene zu definieren.

Die Zusammenfassung erscheint am unteren Rand der Spalte. Wenn Ergebnisse [[Ansichten#Ergebnisse sortieren und gruppieren|gruppiert]] sind, wird die Zusammenfassung für jede Gruppe oben in der Gruppe angezeigt.

Sobald die Zusammenfassungsleiste hinzugefügt ist, kannst du weitere Zusammenfassungen für andere Spalten hinzufügen, indem du auf die Zusammenfassungszelle klickst. Die Zusammenfassungsleiste wird ausgeblendet, wenn alle Zusammenfassungen entfernt werden.

### Integrierte Zusammenfassungen

Die folgenden Zusammenfassungen sind standardmäßig verfügbar. Die Optionen können je nach Eigenschaftentyp variieren.

#### Alle Eigenschaftentypen

- **Kein Wert**: Anzahl der Zeilen ohne Wert.
- **Gefüllt**: Anzahl der Zeilen mit einem Wert.
- **Eindeutig**: Anzahl der unterschiedlichen Werte.

#### Zahlen

- **Durchschnitt**: Durchschnitt aller numerischen Werte.
- **Maximum**: größter Wert.
- **Median**: Medianwert.
- **Minimum**: kleinster Wert.
- **Bereich**: Differenz zwischen Maximum und Minimum.
- **Standardabweichung**: Standardabweichung.
- **Summe**: Gesamtsumme aller Werte.

#### Datum

- **Frühestes**: das kleinste/älteste Datum.
- **Spätestes**: das größte/aktuellste Datum.
- **Bereich**: Differenz zwischen frühestem und spätestem Datum.

#### Kontrollkästchen

- **Aktiviert**: Anzahl der Zeilen, in denen das Kontrollkästchen aktiviert ist.
- **Deaktiviert**: Anzahl der Zeilen, in denen das Kontrollkästchen deaktiviert ist.

### Benutzerdefinierte Zusammenfassungen

Du kannst eigene Zusammenfassungen mithilfe einer Formel definieren:

1. Wähle im Menü ![[lucide-calculator.svg#icon]] **Zusammenfassen…** die Option ![[lucide-square-function.svg#icon]] **Zusammenfassung hinzufügen**.
2. Gib der Zusammenfassung einen Namen.
3. Gib eine Formel ein. Die Formel wird über die Liste der Werte in dieser Spalte ausgeführt (z. B. mit einer [[Funktionen|Funktion]] wie `values.reduce(...)`).
4. Speichere die Zusammenfassung.

Benutzerdefinierte Zusammenfassungen sind nützlich, wenn du eine Berechnung benötigst, die nicht von den integrierten Optionen abgedeckt wird.

## Tastenkürzel

Du kannst dich schnell in einer Tabellenansicht bewegen, indem du die folgenden Maus- und [[Bearbeitungskürzel|Tastenkürzel]] verwendest.

- Shift-Klick erstellt eine Zellenauswahl.
- Klicke mit der rechten Maustaste auf eine Zellenauswahl, um auf zusätzliche Aktionen für diese Dateien zuzugreifen.

| Aktion                                                                                                                                                                  | Tastenkürzel         | macOS               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| Ausgewählte Zellen kopieren                                                                                                                                             | `Strg+C`            | `Cmd+C`             |
| Ausgewählte Zellen einfügen                                                                                                                                             | `Strg+V`            | `Cmd+V`             |
| Änderungen an Eigenschaften rückgängig machen                                                                                                                           | `Strg+Z`            | `Cmd+Z`             |
| Änderungen an Eigenschaften wiederholen                                                                                                                                  | `Strg+Umschalt+Z`   | `Cmd+Umschalt+Z`    |
| Alle Zellen in der aktuellen Gruppe auswählen                                                                                                                           | `Strg+A`            | `Cmd+A`             |
| Alle Zellen in eine bestimmte Richtung auswählen                                                                                                                        | `Strg+Umschalt+Pfeil` | `Strg+Umschalt+Pfeil` |
| Spalte auswählen                                                                                                                                                         | `Strg+Leertaste`    |                     |
| Zeile auswählen                                                                                                                                                          | `Umschalt+Leertaste` |                     |
| Aktuelle Zelle fokussieren – bei Kontrollkästchen wird das Kontrollkästchen umgeschaltet, bei Formeln wird der Formeleditor geöffnet                                    | `Eingabe`           |                     |
| Zur ersten Spalte gehen                                                                                                                                                  | `Pos1`              |                     |
| Zur letzten Spalte gehen                                                                                                                                                 | `Ende`              |                     |
| Seitenweise nach oben und unten navigieren                                                                                                                               | `Bild↑`,`Bild↓`    |                     |
| Aktuelle Zellenauswahl aufheben                                                                                                                                          | `Esc`               |                     |
| Aktuelle Zellen leeren                                                                                                                                                   | `Rücktaste`         |                     |
| Zur nächsten Zelle gehen                                                                                                                                                 | `Tab`               |                     |
| Zur vorherigen Zelle gehen                                                                                                                                               | `Umschalt-Tab`      |                     |
