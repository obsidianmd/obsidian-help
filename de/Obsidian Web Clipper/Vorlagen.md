---
permalink: web-clipper/templates
description: 'Erfahre, wie du Vorlagen erstellst, die Metadaten von Webseiten automatisch mit Web Clipper erfassen und organisieren.'
---
[[Einführung in Obsidian Web Clipper|Web Clipper]] ermöglicht es dir, Vorlagen zu erstellen, die automatisch Metadaten von Webseiten erfassen und organisieren. Beispielvorlagen sind im [clipper-templates Repo](https://github.com/kepano/clipper-templates) verfügbar.

## Vorlage erstellen oder bearbeiten

Um eine Vorlage zu **erstellen**, gehe zu den Web Clipper-Einstellungen und klicke auf die Schaltfläche **Neue Vorlage** in der Seitenleiste. Du kannst eine Vorlage auch über das Menü **Mehr** oben rechts **duplizieren**.

Um eine Vorlage zu **bearbeiten**, wähle eine Vorlage aus der Seitenleiste. Deine Änderungen werden automatisch gespeichert.

Vorlagen verwenden [[Variablen]] und [[Filter]], mit denen du anpassen kannst, wie Inhalte gespeichert werden.

## Web Clipper-Vorlagen importieren und exportieren

So importierst du eine Vorlage:

1. Öffne die Erweiterung und klicke auf das Zahnradsymbol **[[Einstellungen]]**.
2. Gehe zu einer beliebigen Vorlage in der Liste.
3. Klicke oben rechts auf **Importieren** oder ziehe deine `.json`-Vorlagendatei(en) per Drag and Drop in den Vorlagenbereich.

Um eine Vorlage zu exportieren, klicke oben rechts auf **Exportieren**. Dadurch wird die `.json`-Vorlagendatei heruntergeladen. Du kannst die Vorlagendaten auch über das Menü **Mehr** in deine Zwischenablage kopieren.

## Vorlageneinstellungen

### Verhalten

Lege fest, wie Inhalte von Web Clipper zu Obsidian hinzugefügt werden:

- **Neue Notiz erstellen**
- **Zu einer bestehenden Notiz hinzufügen**, oben oder unten
- **Zur täglichen Notiz hinzufügen**, oben oder unten (erfordert, dass die Erweiterung [[Tägliche Notizen]] aktiv ist)

### Vorlage automatisch auslösen

Vorlagen-Trigger ermöglichen es dir, eine Vorlage automatisch basierend auf der aktuellen Seiten-URL oder [schema.org](https://schema.org/)-Daten auszuwählen. Du kannst für jede Vorlage mehrere Regeln definieren, jeweils durch eine neue Zeile getrennt.

Der erste Treffer in deiner Vorlagenliste bestimmt, welche Vorlage verwendet wird. Du kannst Vorlagen in den Web Clipper-Einstellungen nach oben und unten ziehen, um die Reihenfolge zu ändern, in der Vorlagen abgeglichen werden.

#### Einfacher URL-Abgleich

Einfacher Abgleich löst eine Vorlage aus, wenn die aktuelle Seiten-URL *mit* dem angegebenen Muster *beginnt*. Zum Beispiel:

- `https://obsidian.md` stimmt mit jeder URL überein, die mit diesem Text beginnt.

#### Regulärer Ausdruck-Abgleich

Du kannst Vorlagen basierend auf komplexeren URL-Mustern mit regulären Ausdrücken auslösen. Schließe dein Regex-Muster in Schrägstriche (`/`) ein. Denke daran, Sonderzeichen in Regex-Mustern (wie `.` und `/`) mit einem Backslash (`\`) zu maskieren. Zum Beispiel:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` stimmt mit jeder IMDB-Referenzseite überein.

#### Schema.org-Abgleich

Du kannst Vorlagen basierend auf [schema.org](https://schema.org/)-Daten auslösen, die auf der Seite vorhanden sind. Verwende das Präfix `schema:` gefolgt vom Schema-Schlüssel, den du abgleichen möchtest. Optional kannst du einen erwarteten Wert angeben. Zum Beispiel:

- `schema:@Recipe` stimmt mit Seiten überein, bei denen der Schematyp „Recipe" ist.
- `schema:@Recipe.name` stimmt mit Seiten überein, bei denen `@Recipe.name` vorhanden ist.
- `schema:@Recipe.name=Cookie` stimmt mit Seiten überein, bei denen `@Recipe.name` „Cookie" ist.

Schema.org-Werte können auch verwendet werden, um [[Variablen#Schema.org-Variablen|Daten in Vorlagen vorab auszufüllen]].

### Interpreter-Kontext

Wenn der [[Interpreter|Interpreter]] aktiviert ist, kannst du [[Variablen#Prompt-Variablen|Prompt-Variablen]] verwenden, um Seiteninhalte mit natürlicher Sprache zu extrahieren. Für jede Vorlage kannst du den [[Interpreter#Kontext|Kontext]] definieren, auf den der Interpreter Zugriff hat.
