---
permalink: uri
---
Obsidian URI ist ein von Obsidian unterstütztes benutzerdefiniertes URI-Protokoll, mit dem verschiedene Aktionen ausgelöst werden können, z. B. das Öffnen einer Notiz oder das Erstellen einer Notiz. Obsidian URI ermöglicht Automatisierung und App-übergreifende Workflows.

## URI-Format

Obsidian URIs verwenden das folgende Format:

```
obsidian://action?param1=value&param2=value
```

Der Parameter `action` ist die Aktion, die ausgeführt werden soll. Verfügbare Aktionen sind:

- `open` zum Öffnen einer Notiz.
- `new` zum Erstellen oder Ergänzen einer vorhandenen Notiz.
- `daily` zum Erstellen oder Öffnen einer täglichen Notiz.
- `unique` zum Erstellen einer neuen eindeutigen Notiz.
- `search` zum Öffnen einer Suche.
- `choose-vault` zum Öffnen der Vault-Verwaltung.

> [!warning] Kodierung
> Stelle sicher, dass deine Werte korrekt URI-kodiert sind. Zum Beispiel müssen Schrägstriche `/` als `%2F` und Leerzeichen als `%20` kodiert werden.
>
> Dies ist besonders wichtig, da ein falsch kodiertes „reserviertes" Zeichen die Interpretation der URI beeinträchtigen kann. [Weitere Details hier](https://en.wikipedia.org/wiki/Percent-encoding).

## Notiz öffnen

Die Aktion `open` öffnet einen Obsidian-Vault oder eine Datei innerhalb dieses Vaults.

### Beispiele

- `obsidian://open?vault=my%20vault`
  Dies öffnet den Vault `my vault`. Wenn der Vault bereits geöffnet ist, wird das Fenster fokussiert.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Dies öffnet den Vault mit der ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Dies öffnet die Notiz `my note.md` im Vault `my vault`, sofern die Datei existiert.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Dies sucht nach einem Vault, der den Pfad `/home/user/my vault/path/to/my note` enthält. Der restliche Pfad wird dann an den Parameter `file` übergeben. Wenn beispielsweise ein Vault unter `/home/user/my vault` existiert, entspräche dies dem `file`-Parameter mit dem Wert `path/to/my note`.


> [!tip] Eine Überschrift oder einen Block öffnen
> Mit korrekter URI-Kodierung kannst du zu einer Überschrift oder einem Block innerhalb einer Notiz navigieren. `Note%23Heading` navigiert zur Überschrift namens „Heading", während `Note%23%5EBlock` zum Block namens „Block" navigiert.

### Parameter

- `vault` kann entweder der Vault-Name oder die Vault-ID sein[^1].
- `file` kann entweder ein Dateiname oder ein Pfad vom Vault-Stammverzeichnis zur angegebenen Datei sein. Wenn die Dateiendung `md` ist, kann die Endung weggelassen werden.
- `path` ein absoluter Dateisystempfad zu einer Datei.
  - Die Verwendung dieses Parameters überschreibt sowohl `vault` als auch `file`.
  - Dies veranlasst die App, nach dem spezifischsten Vault zu suchen, der den angegebenen Dateipfad enthält.
  - Der restliche Pfad ersetzt dann den `file`-Parameter.
- `prepend` fügt am Anfang der Datei hinzu und versucht, Eigenschaften zu mergen.
- `append` fügt am Ende der Datei hinzu und versucht ebenfalls, Eigenschaften zu mergen.
- `paneType` (optional) bestimmt, wo die Notiz in der Benutzeroberfläche geöffnet wird.
  - Wenn nicht angegeben, wird der zuletzt aktive Tab ersetzt.
  - `paneType=tab` öffnet in einem neuen Tab.
  - `paneType=split` öffnet in einer neuen Tab-Gruppe.
  - `paneType=window` öffnet in einem Pop-out-Fenster (nur Desktop).

## Notiz erstellen

Die Aktion `new` erstellt eine neue Notiz im Vault, optional mit Inhalt.

### Beispiele

- `obsidian://new?vault=my%20vault&name=my%20note`
  Dies öffnet den Vault `my vault` und erstellt eine neue Notiz namens `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Dies öffnet den Vault `my vault` und erstellt eine neue Notiz unter `path/to/my note`.

### Parameter

- `vault` kann entweder der Vault-Name oder die Vault-ID sein[^1]. Wie bei der Aktion `open`.
- `name` der Dateiname der zu erstellenden Datei. Wenn angegeben, wird der Speicherort basierend auf der Einstellung „Standardordner für neue Notizen" gewählt.
- `file` ein Vault-absoluter Pfad, einschließlich des Namens. Überschreibt `name`, wenn angegeben.
- `path` ein global absoluter Pfad. Funktioniert ähnlich wie die Option `path` bei der Aktion `open` und überschreibt sowohl `vault` als auch `file`.
- `paneType` (optional) bestimmt, wo die Notiz in der Benutzeroberfläche geöffnet wird. Wie bei der Aktion `open`.
- `content` (optional) der Inhalt der Notiz.
- `clipboard` (optional) verwendet den Inhalt der Zwischenablage anstelle von `content`.
- `silent` (optional) füge diesen Parameter hinzu, wenn die neue Notiz nicht geöffnet werden soll.
- `append` (optional) füge diesen Parameter hinzu, um an eine vorhandene Datei anzuhängen, falls eine existiert.
- `overwrite` (optional) überschreibt eine vorhandene Datei, falls eine existiert, aber nur wenn `append` nicht gesetzt ist.
- `x-success` (optional) siehe [[#x-callback-url-Parameter verwenden]].

## Tägliche Notiz erstellen oder öffnen

Die Aktion `daily` erstellt oder öffnet deine tägliche Notiz. Die Erweiterung [[Tägliche Notizen]] muss aktiviert sein.

### Beispiele

- `obsidian://daily?vault=my%20vault`
  Dies öffnet den Vault `my vault` und erstellt oder öffnet die tägliche Notiz.

### Parameter

Die Aktion `daily` akzeptiert dieselben Parameter wie die Aktion `new`.

## Eindeutige Notiz

Die Aktion `unique` erstellt eine neue eindeutige Notiz im Vault. Die Erweiterung [[Plugins/Unique note creator|Eindeutige Notizen]] muss aktiviert sein.

### Beispiele

- `obsidian://unique?vault=my%20vault`
  Dies öffnet den Vault `my vault` und erstellt eine neue eindeutige Notiz.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Dies öffnet den Vault `my vault` und erstellt eine neue eindeutige Notiz mit dem Inhalt `Hello World`.

### Parameter

- `vault` kann entweder der Vault-Name oder die Vault-ID sein[^1]. Wie bei der Aktion `open`.
- `paneType` (optional) bestimmt, wo die Notiz in der Benutzeroberfläche geöffnet wird. Wie bei der Aktion `open`.
- `content` (optional) der Inhalt der Notiz.
- `clipboard` (optional) verwendet den Inhalt der Zwischenablage anstelle von `content`.
- `x-success` (optional) siehe [[#x-callback-url-Parameter verwenden]].

## Suche öffnen

Die Aktion `search` öffnet die [[Suchen|Suche]] im angegebenen Vault und führt optional einen Suchbegriff aus.

### Beispiele

- `obsidian://search?vault=my%20vault`
  Dies öffnet den Vault `my vault` und öffnet die [[Suchen|Suche]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Dies öffnet den Vault `my vault`, öffnet die [[Suchen|Suche]] und führt eine Suche nach `Obsidian` durch.

### Parameter

- `vault` kann entweder der Vault-Name oder die Vault-ID sein[^1]. Wie bei der Aktion `open`.
- `query` (optional) der auszuführende Suchbegriff.

## Vault-Verwaltung öffnen

Die Aktion `choose-vault` öffnet die [[Vaults verwalten|Vault-Verwaltung]].

### Beispiele

- `obsidian://choose-vault`

## Integration mit Hook

Diese Obsidian-URI-Aktion ist für die Verwendung mit [Hook](https://hookproductivity.com/) vorgesehen.

### Beispiel

`obsidian://hook-get-address`

### Parameter

- `vault` (optional) kann entweder der Vault-Name oder die Vault-ID sein[^1]. Wenn nicht angegeben, wird der aktuelle oder zuletzt fokussierte Vault verwendet.
- `x-success` (optional) siehe [[#x-callback-url-Parameter verwenden]].
- `x-error` (optional) siehe [[#x-callback-url-Parameter verwenden]].

Wenn `x-success` definiert ist, verwendet diese API es als x-callback-url. Andernfalls wird ein Markdown-Link der aktuell fokussierten Notiz als `obsidian://open`-URL in die Zwischenablage kopiert.

## x-callback-url-Parameter verwenden

Einige Endpunkte akzeptieren die x-callback-url-Parameter `x-success` und `x-error`. Wenn diese angegeben sind, liefert Obsidian die folgenden Informationen an den `x-success`-Callback:

- `name` der Name der Datei, ohne Dateiendung.
- `url` die `obsidian://`-URI für diese Datei.
- `file` (nur Desktop) die `file://`-URL für diese Datei.

Wenn Obsidian beispielsweise
`obsidian://.....x-success=myapp://x-callback-url` empfängt, lautet die Antwort `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Kurzformate

Zusätzlich zu den obigen Formaten gibt es zwei weitere „Kurz"-Formate zum Öffnen von Vaults und Dateien:

1. `obsidian://vault/my vault/my note` entspricht `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` entspricht `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Fehlerbehebung

### Obsidian URI registrieren

Unter Windows und macOS sollte es ausreichen, die App einmal auszuführen, um das Obsidian-URI-Protokoll auf deinem Computer zu registrieren.

Unter Linux ist der Prozess aufwendiger:

1. Stelle sicher, dass du eine `obsidian.desktop`-Datei erstellst. [Weitere Details hier](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Stelle sicher, dass deine Desktop-Datei das Feld `Exec` als `Exec=executable %u` angibt. Das `%u` wird verwendet, um die `obsidian://`-URIs an die App zu übergeben.
3. Wenn du das AppImage-Installationsprogramm verwendest, musst du es möglicherweise mit `Obsidian-x.y.z.AppImage --appimage-extract` entpacken. Stelle dann sicher, dass die `Exec`-Direktive auf die entpackte ausführbare Datei verweist.


[^1]: Die Vault-ID ist der zufällige 16-stellige Code, der dem Vault zugewiesen wird, zum Beispiel `ef6ca3e3b524d22f`. Diese ID ist eindeutig pro Ordner auf deinem Computer. Die ID kann gefunden werden, indem du die Vault-Auswahl öffnest und im Kontextmenü des gewünschten Vaults auf „Vault-ID kopieren" klickst.
