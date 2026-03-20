---
permalink: publish/social-share
---
Viele soziale Netzwerke zeigen eine Rich-Vorschau für Ihre Website an, wenn ein Benutzer einen Link dazu teilt. Mit [[Eigenschaften]] können Sie anpassen, wie Ihre Notizen in der Vorschau erscheinen.

> [!warning] Warnung
> Die in diesem Abschnitt überschriebenen Tags sind **nur** für Web-Crawler sichtbar. Reguläre Webbrowser erhalten aus Leistungsgründen die unveränderte Seite.

## Beschreibung

Obsidian generiert automatisch eine Beschreibung basierend auf dem Notizinhalt, aber Sie können mit `description` eine eigene angeben.

```yaml
---
description: Eine Einführung in unser Sonnensystem.
---
```

> [!note] Meta-Tags
> `description` überschreibt die automatisch generierte Beschreibung in `<meta name="description" content="...">` und die Entsprechungen für `og:description` und `twitter:description`.

## Bild

Sie können ein benutzerdefiniertes Bild für die Linkvorschau verwenden, indem Sie `image` oder `cover` mit einem Pfad zum Bild hinzufügen. Das Bild muss auf Publish hochgeladen sein.

Der Pfad kann ein absoluter Pfad vom Stammverzeichnis Ihres Vaults sein:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

Beim Pfad zum Bild wird die Großschreibung beachtet. In unserem vorherigen Beispiel haben wir einen Pfad zu einem Bild namens `Cover image.png`. Der folgende Pfad funktioniert nicht, da er die falsche Groß-/Kleinschreibung verwendet.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

Anstelle eines absoluten Pfads in Ihrem Vault können Sie auch eine externe URL verwenden:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` und `cover` sind identisch. Verwenden Sie nur eines davon.

> [!note] Meta-Tags
> `image` und `cover` überschreiben das automatisch generierte Bild in `<meta property="og:image" content="...">`.
