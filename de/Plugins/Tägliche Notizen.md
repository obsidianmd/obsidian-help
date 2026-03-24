---
permalink: plugins/daily-notes
---
Tägliche Notizen ist eine [[Obsidian-Erweiterungen|Obsidian-Erweiterung]], die eine Notiz basierend auf dem heutigen Datum öffnet oder erstellt, falls sie noch nicht existiert. Verwende Tägliche Notizen, um Tagebücher, Aufgabenlisten oder tägliche Protokolle für Dinge zu erstellen, die du im Laufe des Tages entdeckt hast.

Um die heutige Tägliche Notiz zu öffnen, kannst du entweder:

- Auf **Heutige Notiz öffnen** ![[lucide-calendar.svg#icon]] in der [[Menüband|Werkzeugleiste]] klicken.
- **Heutige Notiz öffnen** über die [[Befehlspalette]] ausführen.
- Ein [[Tastenkürzel#Tastenkombinationen festlegen|Tastenkürzel verwenden]] für den Befehl **Heutige Notiz öffnen**.

Standardmäßig erstellt Obsidian eine neue leere Notiz, die nach dem heutigen Datum im Format JJJJ-MM-TT benannt ist.

> [!tip] Wenn du deine Täglichen Notizen lieber in einem separaten Ordner aufbewahren möchtest, kannst du den <u>Speicherort für neue Dateien</u> in den Erweiterungs-Einstellungen festlegen, um zu ändern, wo Obsidian neue Tägliche Notizen erstellt.

> [!example]- Automatische Unterordner
> Du kannst deine Täglichen Notizen mithilfe der **Datumsformat**-Funktion automatisch in Ordner organisieren.
> 
> Wenn du beispielsweise das Datumsformat auf `YYYY/MMMM/YYYY-MMM-DD` einstellst, werden deine Notizen als `2023/January/2023-Jan-01` erstellt.
> 
> Weitere Formatierungsoptionen findest du auf der Dokumentationsseite von [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Eine Tägliche Notiz aus einer Vorlage erstellen

Wenn deine Täglichen Notizen die gleiche Struktur haben, kannst du eine [[Plugins/Vorlagen|Vorlage]] verwenden, um beim Erstellen vordefinierte Inhalte zu deinen Täglichen Notizen hinzuzufügen.

1. Erstelle eine neue Notiz mit dem Namen „Tägliche Vorlage" mit dem folgenden Text (oder was auch immer für dich sinnvoll ist!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Aufgaben

   - [ ]
   ```

2. Öffne die **[[Einstellungen]]**.
3. Klicke in der Seitenleiste unter **Erweiterungs-Einstellungen** auf **Tägliche Notizen**.
4. Wähle im Textfeld neben **Speicherort der Vorlagendatei** die Notiz „Tägliche Vorlage" aus.

Obsidian verwendet die Vorlage beim nächsten Erstellen einer neuen Täglichen Notiz.

## Tägliche Notizen und Eigenschaften

Wenn die Erweiterung „Tägliche Notizen" aktiviert ist und eine Datumseigenschaft in einer beliebigen Notiz vorhanden ist, versucht Obsidian automatisch, einen Link zur Täglichen Notiz für diesen bestimmten Tag zu generieren. Wenn beispielsweise eine Notiz mit dem Titel `beispiel.md` eine Datumseigenschaft wie `2023-01-01` enthält, wird dieses Datum im Abschnitt [[Ansichten und Bearbeitungsmodus#Live-Vorschau|Live-Vorschau]] in einen klickbaren Link umgewandelt.

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
