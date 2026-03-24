---
permalink: publish/social-share
---
Viele soziale Netzwerke zeigen eine Rich-Vorschau für deine Website an, wenn ein Benutzer einen Link dazu teilt. Mit [[Eigenschaften]] kannst du anpassen, wie deine Notizen in der Vorschau erscheinen.

> [!warning] Warnung
> Die in diesem Abschnitt überschriebenen Tags sind **nur** für Web-Crawler sichtbar. Reguläre Webbrowser erhalten aus Leistungsgründen die unveränderte Seite.

## Beschreibung

Obsidian generiert automatisch eine Beschreibung basierend auf dem Notizinhalt, aber du kannst mit `description` eine eigene angeben.

```yaml
---
description: Eine Einführung in unser Sonnensystem.
---
```

> [!note] Meta-Tags
> `description` überschreibt die automatisch generierte Beschreibung in `<meta name="description" content="...">` und die Entsprechungen für `og:description` und `twitter:description`.

## Bild

Du kannst ein benutzerdefiniertes Bild für die Linkvorschau verwenden, indem du `image` oder `cover` mit einem Pfad zum Bild hinzufügst. Das Bild muss auf Publish hochgeladen sein.

Der Pfad kann ein absoluter Pfad vom Stammverzeichnis deines Vaults sein:

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

Anstelle eines absoluten Pfads in deinem Vault kannst du auch eine externe URL verwenden:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` und `cover` sind identisch. Verwende nur eines davon.

> [!note] Meta-Tags
> `image` und `cover` überschreiben das automatisch generierte Bild in `<meta property="og:image" content="...">`.
