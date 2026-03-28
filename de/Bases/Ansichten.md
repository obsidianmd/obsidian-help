---
permalink: bases/views
---
Ansichten ermöglichen es, die Informationen in einer [[Einführung in Bases|Basis]] auf verschiedene Weise zu organisieren. Eine Basis kann mehrere Ansichten enthalten, und jede Ansicht kann eine eigene Konfiguration zum Anzeigen, Sortieren und Filtern von Dateien haben.

Zum Beispiel könntest du eine Basis namens „Bücher" erstellen, die separate Ansichten für „Leseliste" und „Kürzlich beendet" hat.

## Symbolleiste

Am oberen Rand einer Basis befindet sich eine Symbolleiste, mit der du mit Ansichten und deren Ergebnissen interagieren kannst.

- ![[lucide-table.svg#icon]] **Ansichtsmenü** — Ansichten erstellen, bearbeiten und wechseln.
- **Ergebnisse** — Dateien begrenzen, kopieren und exportieren.
- ![[lucide-arrow-up-down.svg#icon]] **Sortieren** — Dateien sortieren und gruppieren.
- ![[lucide-list-filter.svg#icon]] **Filter** — Dateien filtern.
- ![[lucide-list.svg#icon]] **Eigenschaften** — Eigenschaften zur Anzeige auswählen und [[Formeln]] erstellen.
- ![[lucide-search.svg#icon]] **Suche** — nach Elementen anhand ihrer angezeigten Eigenschaften suchen.
- ![[lucide-plus.svg#icon]] **Neu** — eine neue Datei in der aktuellen Ansicht erstellen.

## Ansichten hinzufügen und wechseln

Es gibt zwei Möglichkeiten, einer Basis eine Ansicht hinzuzufügen:

- Klicke oben links auf den Ansichtsnamen und wähle ![[lucide-plus.svg#icon]] **Sicht hinzufügen**.
- Verwende die [[Befehlspalette]] und wähle **Bases: Sicht hinzufügen**.

Die erste Ansicht in deiner Ansichtsliste wird standardmäßig geladen. Ziehe Ansichten an ihrem Symbol, um ihre Reihenfolge zu ändern.

## Ansichtseinstellungen

Jede Ansicht hat eigene Konfigurationsoptionen. Um Ansichtseinstellungen zu bearbeiten:

1. Klicke oben links auf den Ansichtsnamen.
2. Klicke auf den Rechtspfeil neben der Ansicht, die du konfigurieren möchtest.

Alternativ kannst du mit der *rechten Maustaste* auf den Ansichtsnamen in der Symbolleiste der Basis klicken, um schnell auf die Ansichtseinstellungen zuzugreifen.

## Layout

Ansichten können mit verschiedenen Layouts angezeigt werden, darunter ![[lucide-table.svg#icon]] **Tabelle**, ![[lucide-list.svg#icon]] **Liste**, ![[lucide-layout-grid.svg#icon]] **Galerie** und ![[lucide-map.svg#icon]] **Karte**. Zusätzliche Layouts können durch [[Community-Erweiterungen]] hinzugefügt werden. Einige Layouts befinden sich noch in der Entwicklung und erfordern [[Vorabversionen]] von Obsidian.

| Layout                            | Beschreibung                                                                                                                          | App-Version |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [[Tabelle]]      | Dateien als Zeilen in einer Tabelle anzeigen. Spalten werden aus [[Eigenschaften]] in deinen Notizen befüllt.                         | 1.9         |
| [[Galerie]]       | Dateien als Raster anzeigen. Ermöglicht galerieartige Ansichten mit Bildern.                                                          | 1.9         |
| [[Liste]]          | Dateien als [[Grundlegende Formatierungssyntax#Listen\|Liste]] mit Aufzählungszeichen oder nummerierten Markern anzeigen.             | 1.10        |
| [[Karte]]          | Dateien als Pins auf einer interaktiven Karte anzeigen. Erfordert die Karten-Erweiterung.                                             | 1.10        |

## Filter

Öffne das Menü ![[lucide-list-filter.svg#icon]] **Filter** am oberen Rand einer Basis, um Filter hinzuzufügen.

Eine Basis ohne Filter zeigt alle Dateien in deinem Vault an. Filter grenzen die Ergebnisse ein, sodass nur Dateien angezeigt werden, die bestimmte Kriterien erfüllen. Du kannst beispielsweise Filter verwenden, um nur Dateien mit einem bestimmten [[Tag-Übersicht|Tag]] oder innerhalb eines bestimmten Ordners anzuzeigen. Viele Filtertypen stehen zur Verfügung.

Filter können auf alle Ansichten in einer Basis angewendet werden, oder nur auf eine einzelne Ansicht, indem du aus den beiden Abschnitten im Menü ![[lucide-list-filter.svg#icon]] **Filter** auswählst.

- **Alle Sichten** wendet Filter auf alle Ansichten in der Basis an.
- **Diese Sicht** wendet Filter auf die aktive Ansicht an.

#### Komponenten eines Filters

Filter haben drei Komponenten:

1. **Eigenschaft** — ermöglicht die Auswahl einer [[Eigenschaften|Eigenschaft]] in deinem Vault, einschließlich [[Bases-Syntax#Dateieigenschaften|Dateieigenschaften]].
2. **Operator** — ermöglicht die Auswahl, wie die Bedingungen verglichen werden. Die Liste der verfügbaren Operatoren hängt vom Eigenschaftentyp ab (Text, Datum, Zahl usw.)
3. **Wert** — ermöglicht die Auswahl des Werts, mit dem verglichen wird. Werte können Mathe und [[Funktionen]] enthalten.

#### Verknüpfungen

- **Alle folgenden Bedingungen treffen zu** ist eine `und`-Aussage — Ergebnisse werden nur angezeigt, wenn *alle* Bedingungen in der Filtergruppe erfüllt sind.
- **Mindestens eine der folgenden Bedingungen trifft zu** ist eine `oder`-Aussage — Ergebnisse werden angezeigt, wenn *eine beliebige* der Bedingungen in der Filtergruppe erfüllt ist.
- **Keine der folgenden Bedingungen trifft zu** ist eine `nicht`-Aussage — Ergebnisse werden nicht angezeigt, wenn *eine beliebige* der Bedingungen in der Filtergruppe erfüllt ist.

#### Filtergruppen

Filtergruppen ermöglichen es dir, komplexere Logik zu erstellen, indem du Kombinationen von Verknüpfungen erstellst.

#### Erweiterter Filter-Editor

Klicke auf die Quelltext-Schaltfläche ![[lucide-code-xml.svg#icon]], um den **erweiterten Filter**-Editor zu verwenden. Dieser zeigt die rohe [[Bases-Syntax|Syntax]] des Filters an und kann mit komplexeren [[Funktionen]] verwendet werden, die nicht über die Klick-Oberfläche dargestellt werden können.

## Ergebnisse sortieren und gruppieren

Öffne das Menü ![[lucide-arrow-up-down.svg#icon]] **Sortieren**, um die Ergebnisse in einer Ansicht zu sortieren und zu gruppieren.

Du kannst Ergebnisse nach einer oder mehreren Eigenschaften in aufsteigender oder absteigender Reihenfolge anordnen. So lassen sich Notizen einfach nach Name, letzter Bearbeitungszeit oder einer anderen Eigenschaft auflisten — einschließlich Formeln.

Du kannst Ergebnisse auch nach einer Eigenschaft gruppieren, um ähnliche Elemente in visuell abgegrenzte Abschnitte zu organisieren. Derzeit unterstützt Obsidian die Gruppierung nach nur einer Eigenschaft.

### Sortierung hinzufügen

1. Öffne das Menü ![[lucide-arrow-up-down.svg#icon]] **Sortieren** am oberen Rand der Ansicht.
2. Wähle die Eigenschaft, nach der du sortieren (oder gruppieren) möchtest.
3. Wenn du mehrere Sortierungen hast, ziehe sie mit dem ![[lucide-grip-vertical.svg#icon]] Griff nach oben oder unten, um ihre Priorität zu ändern.

Die Optionen zum Anordnen der Ergebnisse hängen vom Eigenschaftentyp ab:

- **Text**: *alphabetisch* (A→Z) oder in *umgekehrt alphabetischer Reihenfolge* (Z→A) sortieren.
- **Zahl**: von *kleinster zu größter* (0→1) oder *größter zu kleinster* (1→0) sortieren.
- **Datum und Uhrzeit**: nach *Alter absteigend* oder *Alter aufsteigend* sortieren.

### Sortierung entfernen

1. Öffne das Menü ![[lucide-arrow-up-down.svg#icon]] **Sortieren** am oberen Rand der Ansicht.
2. Klicke auf die ![[lucide-trash-2.svg#icon]] Papierkorb-Schaltfläche neben der Sortierung oder Gruppierung, die du entfernen möchtest.

## Ergebnisse begrenzen, kopieren und exportieren

### Ergebnisse begrenzen

Das *Ergebnisse*-Menü zeigt die Anzahl der Ergebnisse in der Ansicht an. Klicke auf die Ergebnisse-Schaltfläche, um die Anzahl der Ergebnisse zu begrenzen und auf zusätzliche Aktionen zuzugreifen.

### In Zwischenablage kopieren

Diese Aktion kopiert die Ansicht in deine Zwischenablage. Von dort kannst du sie in eine Markdown-Datei oder in andere Dokumenten-Apps einfügen, einschließlich Tabellenkalkulationen wie Google Sheets, Excel und Numbers.

### CSV exportieren

Diese Aktion speichert eine CSV-Datei deiner aktuellen Ansicht.

## Eine Ansicht einbetten

Du kannst Basis-Dateien in [[Dateien einbetten|jede andere Datei]] mit der Syntax `![[Datei.base]]` einbetten. Die erste Ansicht in der Liste wird verwendet. Du kannst die Reihenfolge ändern, indem du Ansichten im Ansichtsmenü ziehst.

Um die Standardansicht für eine Einbettung festzulegen, verwende `![[Datei.base#Ansicht]]`.
