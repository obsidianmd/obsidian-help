---
permalink: publish/limitations
---
> [!tip] Mitglieder unserer großartigen Community haben Umgehungslösungen für einige dieser Einschränkungen entwickelt. Für weitere Informationen, bitte besuche unseren [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582)-Thread im Obsidian-Forum.

## Community-Erweiterungen

Obsidian Publish bietet minimale Unterstützung für [[Community-Erweiterungen|Community-Erweiterungen]].

Erweiterungen, die reines Markdown ausgeben, wie das Waypoint-Plugin, sind mit Publish kompatibel, da sie die Anwendung nicht zum Rendern ihrer Daten benötigen.

Dagegen funktionieren Erweiterungen, die einen Plugin-Codeblock zum Rendern benötigen, wie Dataview oder Fantasy Statblocks, standardmäßig nicht in Publish.

## Graph

Publish bietet grundlegende Farbanpassung für seine Diagrammansicht mittels CSS. Du kannst die Knotenfarben in deiner `publish.css`-Datei ändern, indem du die [Graph View CSS-Variablen](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph) verwendest.

Beachte, dass der veröffentlichte Graph nicht die umfassenden Sortier- und Ansichtsoptionen unterstützt, die in der [[Graph-Ansicht]] der Anwendung verfügbar sind.

## Mediendateien

Obsidian Publish ist nicht für das Streaming von Videos oder großen Audiodateien optimiert. Wir haben einige Best Practices für den Umgang mit deinen [[Mediendateien]] in diesen Dokumenten zusammengestellt.

Um das Erlebnis für deine Besucher zu verbessern, empfehlen wir, stattdessen einen Video-Hosting-Dienst wie YouTube oder Vimeo zu verwenden.

Du kannst Dateien mit einer Größe von **bis zu 50 MB** auf deine Publish-Website hochladen. ^publish-media-limit

## PDFs

Auf Mobilgeräten, Tablets und Computern mit kleinen Bildschirmen kann es vorkommen, dass ein eingebettetes PDF nicht geladen wird oder nur die erste Seite angezeigt wird. Dies liegt an Einschränkungen des PDF-Renderers auf Mobilgeräten.

Für Inhalte, die auf mobile Nutzer ausgerichtet sind, empfehlen wir, Links zu extern gehosteten PDFs bereitzustellen oder interne Links einzufügen, die es den Nutzern ermöglichen, das PDF direkt auf ihr Gerät herunterzuladen.

## Suche

Publish bietet grundlegende Unterstützung für die Suche nach reinem Text in veröffentlichten Inhalten. Bei den Suchergebnissen wird folgenden Elementen Vorrang eingeräumt:

- Dateinamen
- Aliasse
- Überschriftennamen

Nachdem die oben genannten Elemente auf Übereinstimmungen durchsucht wurden, wird die Suche auch den reinen Text der veröffentlichten Notizen einbeziehen.

Um die Durchsuchbarkeit deiner veröffentlichten Website zu verbessern, wird empfohlen, beschreibende Dateinamen zu verwenden, mehrere Aliasse einzubinden und Überschriftennamen zu wählen, die den Inhalt genau widerspiegeln.

Darüber hinaus unterstützt Publish derzeit nicht die Funktion der [[Suchen#Suchergebnisse in eine Notiz einbetten|eingebetteten Suchergebnisse]] der Anwendung.
