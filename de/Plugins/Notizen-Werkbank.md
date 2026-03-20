---
permalink: plugins/note-composer
---
Die [[Obsidian-Erweiterungen|Notizen-Werkbank]] ist eine [[Obsidian-Erweiterungen|integrierte Erweiterung]], mit der du zwei Notizen zusammenführen oder einen Teil einer Notiz in eine neue Notiz extrahieren kannst.

## Notizen zusammenführen

Beim Zusammenführen wird eine Notiz zu einer anderen hinzugefügt und die erste entfernt. Die Notizen-Werkbank aktualisiert alle Links, sodass sie auf die zusammengeführte Notiz verweisen.

Wenn du die Zielnotiz auswählst, kannst du zwischen folgenden Methoden wählen:

- `Enter`: Fügt die Quellnotiz am _Ende_ der Zielnotiz hinzu.
- `Shift+Enter`: Fügt die Quellnotiz am _Anfang_ der Zielnotiz hinzu.
- `Ctrl+Enter` (oder `Cmd+Enter` unter macOS): Erstellt eine neue Notiz mit dem Inhalt der Quellnotiz.

So führst du die aktive Notiz mit einer anderen Notiz in deinem Vault zusammen:

**Dateiexplorer**

1. Klicke im Dateiexplorer mit der rechten Maustaste auf die Notiz, die du zusammenführen möchtest.
2. Klicke auf **Verbinde gesamte Notiz mit...**.
3. Wähle die Notiz aus, mit der du zusammenführen möchtest.
4. Klicke zur Bestätigung auf **Mergen**.

**Befehlspalette**

1. Öffne die [[Befehlspalette]].
2. Wähle **Notizen-Werkbank: Verbinde aktive Notiz mit einer anderen Notiz...**.
3. Wähle die Notiz aus, mit der du zusammenführen möchtest.
4. Klicke zur Bestätigung auf **Mergen**.

> [!tip] Tipp
> Standardmäßig fragt die Notizen-Werkbank vor dem Zusammenführen nach einer Bestätigung. Wenn du die Bestätigung deaktivierst und versehentlich eine Notiz zusammenführst, kannst du sie mit der [[Datenwiederherstellung]]-Erweiterung wiederherstellen.

## Notiz extrahieren

Wenn du die Zielnotiz für die Extraktion auswählst, kannst du zwischen folgenden Methoden wählen:

- `Enter`: Fügt den ausgewählten Text am _Ende_ der Zielnotiz hinzu.
- `Shift+Enter`: Fügt den ausgewählten Text am _Anfang_ der Zielnotiz hinzu.
- `Ctrl+Enter` (oder `Cmd+Enter` unter macOS): Erstellt eine neue Notiz mit dem ausgewählten Text.

So extrahierst du Text in eine neue Notiz:

**Editor**

1. Wähle in der **Editor**-Ansicht den Text aus, den du extrahieren möchtest.
2. Klicke mit der rechten Maustaste auf den ausgewählten Text.
3. Klicke auf **Aktive Auswahl extrahieren...**.
4. Wähle die Notiz aus, in die du extrahieren möchtest.

**Befehlspalette**

1. Wähle in der **Editor**-Ansicht den Text aus, den du extrahieren möchtest.
2. Öffne die [[Befehlspalette]].
3. Wähle **Notizen-Werkbank: Aktive Auswahl extrahieren...**.
4. Wähle die Notiz aus, in die du extrahieren möchtest.

> [!tip] Tipp
> Standardmäßig ersetzt die Notizen-Werkbank den extrahierten Text durch einen Link zur Zielnotiz. In den Einstellungen kannst du auch festlegen, dass stattdessen die Zielnotiz [[Dateien einbetten|eingebettet]] wird oder dass nichts zurückbleibt.

## Vorlagendatei

Durch die Konfiguration einer Vorlage kannst du den Inhalt anpassen, bevor er zur neuen Notiz hinzugefügt wird. Um eine Vorlage zu verwenden, gib in den Erweiterungseinstellungen einen **Speicherort der Vorlagendatei** ein.

Die Vorlage kann folgende Variablen enthalten:

| Variable          | Beschreibung                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Der zusammenzuführende Inhalt oder die extrahierte Textauswahl. Wenn du diese Variable nicht einfügst, fügt die Notizen-Werkbank den Inhalt am Ende der Vorlage hinzu. |
| `{{fromTitle}}`   | Name der Quellnotiz.                                                                                                                                 |
| `{{newTitle}}`    | Name der Zielnotiz. Zum Beispiel, um den Dateinamen als Überschrift am Anfang der Datei hinzuzufügen.                                                     |
| `{{date:FORMAT}}` | Erstellungsdatum der neuen Notiz. Zum Beispiel `{{date:YYYY-MM-DD}}`.                                                                                       |
