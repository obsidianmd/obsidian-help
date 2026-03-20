---
permalink: ribbon
publish: true
mobile: true
description: >-
  Erfahren Sie, wie Sie die Werkzeugleiste nutzen, einen Bereich für häufige
  Befehle in Obsidian, und wie Sie sie auf Desktop und Mobilgeräten anpassen.
---
Die Werkzeugleiste dient als Bereich für häufige Befehle in Obsidian.

Auf dem Desktop befindet sie sich in der [[Seitenleiste#Verborgene Seitenleisten öffnen|linken Seitenleiste]] und bleibt sichtbar, auch wenn die linke Seitenleiste geschlossen ist.

Auf Mobilgeräten können Sie auf die [[Mobile App#Werkzeugleisten-Aktionen|Werkzeugleisten-Aktionen]] zugreifen, indem Sie auf die **Menü-Option** ( ![[lucide-menu.svg#icon]] ) in der unteren rechten Ecke der App tippen, wenn Sie gerade keine Notiz bearbeiten.

## Aktionen

Jede Aktion wird durch ein Symbol in der Werkzeugleiste dargestellt. Wenn Sie mit der Maus über diese Symbole fahren, wird ein Tooltip angezeigt, und durch Auswählen wird die zugehörige Aktion ausgelöst. Auf Mobilgeräten können Sie diese Symbole antippen, um sie zu aktivieren.

1. **[[Vaults verwalten|Vault-Wechsler]]** öffnen ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
2. Auf **Hilfe** zugreifen ( ![[lucide-help-circle.svg#icon]] ).
3. **[[Einstellungen]]** öffnen ( ![[lucide-settings.svg#icon]] ).

In der mobilen Version können Sie eine Schnellzugriffsaktion in der Werkzeugleiste konfigurieren. Weitere Informationen finden Sie im [[#Mobil|Abschnitt für Mobilgeräte]] und unter [[Mobile App]].

## Werkzeugleiste anpassen

Ihr angepasstes Werkzeugleisten-Layout wird sitzungsübergreifend gespeichert. Es wird mit anderen Geräten und der mobilen App synchronisiert, wenn die App-Einstellungen (in den Dateien `workspace.json` und `workspace-mobile.json`) synchronisiert werden.

### Desktop

In der Desktop-Version können Sie die Werkzeugleiste wie folgt anpassen:

- Ordnen Sie die Reihenfolge der Werkzeugleisten-Aktionen durch Ziehen und Ablegen der Symbole neu an.
- Um bestimmte Aktionen auszublenden, klicken Sie mit der rechten Maustaste auf einen leeren Bereich innerhalb der Werkzeugleiste und deaktivieren Sie die Aktionen, die Sie ausblenden möchten.

#### Werkzeugleiste ausblenden

Sie können die Werkzeugleiste auf zwei Arten ausblenden:

- Klicken Sie mit der rechten Maustaste auf die Werkzeugleiste und wählen Sie **Werkzeugleiste ausblenden**.
- Öffnen Sie **[[Einstellungen]]** → **Darstellung**, scrollen Sie nach unten zu **Erweitert** und deaktivieren Sie **Werkzeugleiste anzeigen**.

#### Werkzeugleiste anzeigen

Wenn Sie die Werkzeugleiste ausgeblendet haben und sie wieder anzeigen möchten:

1. Öffnen Sie **[[Einstellungen]]** → **Darstellung**.
2. Scrollen Sie nach unten zu **Erweitert**.
3. Aktivieren Sie **Werkzeugleiste anzeigen**.
4. Die Werkzeugleiste erscheint wieder auf der linken Seite des Fensters.

> [!tip] Benutzerdefiniertes CSS
> Wenn Sie ein Community-Thema oder benutzerdefiniertes CSS verwenden, stellen Sie sicher, dass es die Werkzeugleiste nicht durch benutzerdefinierte Stilregeln ausblendet.

### Mobil

In der mobilen Version von Obsidian können Sie Schnellzugriffsaktionen durchführen, Elemente neu anordnen und die Werkzeugleisten-Konfiguration anpassen. Um auf diese Anpassungen zuzugreifen, gehen Sie wie folgt vor:

1. Öffnen Sie die **[[Einstellungen]]** von Obsidian ( ![[lucide-cog.svg#icon]] ).
2. Navigieren Sie zum Abschnitt **Darstellung**.
3. Scrollen Sie nach unten zu den **erweiterten** Optionen.
4. Wählen Sie die Schaltfläche **Verwalten** unter dem Eintrag **Werkzeugleisten-Konfiguration**.

#### Schnellzugriff

Standardmäßig ist die Schnellzugriffsoption auf „Werkzeugleiste öffnen" bei einem *kurzen Drücken* eingestellt. Wenn Sie eine andere Option als Schnellzugriff wählen:

- Die ausgewählte Option wird durch *kurzes Drücken* ausgelöst.
- Der Zugriff auf die Werkzeugleiste wechselt zu *langem Drücken*.

> [!info] Die Schnellzugriffsoptionen hängen von den Obsidian-Einstellungen und den aktivierten Obsidian-Erweiterungen ab.

#### Anordnung und Sichtbarkeit

Um die Reihenfolge der Elemente in der Werkzeugleiste zu ändern, halten Sie die **Ziehen-und-Ablegen**-Schaltfläche ( ![[lucide-menu.svg#icon]] ) gedrückt und verschieben Sie das ausgewählte Element nach oben oder unten.

Sie können Elemente in der Werkzeugleiste ein- oder ausblenden, indem Sie die rote **Entfernen**-Schaltfläche ( ![[lucide-minus-circle.svg#icon]] ) oder die grüne **Hinzufügen**-Schaltfläche ( ![[lucide-plus-circle.svg#icon]] ) verwenden, um deren Sichtbarkeit umzuschalten.

 ![[ribbon-rearrange-visibility.jpeg#interface]]
