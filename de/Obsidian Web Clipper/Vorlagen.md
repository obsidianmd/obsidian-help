---
permalink: web-clipper/templates
description: >-
  Erfahren Sie, wie Sie Vorlagen erstellen, die Metadaten von Webseiten
  automatisch mit Web Clipper erfassen und organisieren.
---
[[Einführung in Obsidian Web Clipper|Web Clipper]] ermöglicht es Ihnen, Vorlagen zu erstellen, die automatisch Metadaten von Webseiten erfassen und organisieren. Beispielvorlagen sind im [clipper-templates Repo](https://github.com/kepano/clipper-templates) verfügbar.

## Vorlage erstellen oder bearbeiten

Um eine Vorlage zu **erstellen**, gehen Sie zu den Web Clipper-Einstellungen und klicken Sie auf die Schaltfläche **Neue Vorlage** in der Seitenleiste. Sie können eine Vorlage auch über das Menü **Mehr** oben rechts **duplizieren**.

Um eine Vorlage zu **bearbeiten**, wählen Sie eine Vorlage aus der Seitenleiste. Ihre Änderungen werden automatisch gespeichert.

Vorlagen verwenden [[Variablen]] und [[Filter]], mit denen Sie anpassen können, wie Inhalte gespeichert werden.

## Web Clipper-Vorlagen importieren und exportieren

So importieren Sie eine Vorlage:

1. Öffnen Sie die Erweiterung und klicken Sie auf das Zahnradsymbol **[[Einstellungen]]**.
2. Gehen Sie zu einer beliebigen Vorlage in der Liste.
3. Klicken Sie oben rechts auf **Importieren** oder ziehen Sie Ihre `.json`-Vorlagendatei(en) per Drag and Drop in den Vorlagenbereich.

Um eine Vorlage zu exportieren, klicken Sie oben rechts auf **Exportieren**. Dadurch wird die `.json`-Vorlagendatei heruntergeladen. Sie können die Vorlagendaten auch über das Menü **Mehr** in Ihre Zwischenablage kopieren.

## Vorlageneinstellungen

### Verhalten

Legen Sie fest, wie Inhalte von Web Clipper zu Obsidian hinzugefügt werden:

- **Neue Notiz erstellen**
- **Zu einer bestehenden Notiz hinzufügen**, oben oder unten
- **Zur täglichen Notiz hinzufügen**, oben oder unten (erfordert, dass die Erweiterung [[Tägliche Notizen]] aktiv ist)

### Vorlage automatisch auslösen

Vorlagen-Trigger ermöglichen es Ihnen, eine Vorlage automatisch basierend auf der aktuellen Seiten-URL oder [schema.org](https://schema.org/)-Daten auszuwählen. Sie können für jede Vorlage mehrere Regeln definieren, jeweils durch eine neue Zeile getrennt.

Der erste Treffer in Ihrer Vorlagenliste bestimmt, welche Vorlage verwendet wird. Sie können Vorlagen in den Web Clipper-Einstellungen nach oben und unten ziehen, um die Reihenfolge zu ändern, in der Vorlagen abgeglichen werden.

#### Einfacher URL-Abgleich

Einfacher Abgleich löst eine Vorlage aus, wenn die aktuelle Seiten-URL *mit* dem angegebenen Muster *beginnt*. Zum Beispiel:

- `https://obsidian.md` stimmt mit jeder URL überein, die mit diesem Text beginnt.

#### Regulärer Ausdruck-Abgleich

Sie können Vorlagen basierend auf komplexeren URL-Mustern mit regulären Ausdrücken auslösen. Schließen Sie Ihr Regex-Muster in Schrägstriche (`/`) ein. Denken Sie daran, Sonderzeichen in Regex-Mustern (wie `.` und `/`) mit einem Backslash (`\`) zu maskieren. Zum Beispiel:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` stimmt mit jeder IMDB-Referenzseite überein.

#### Schema.org-Abgleich

Sie können Vorlagen basierend auf [schema.org](https://schema.org/)-Daten auslösen, die auf der Seite vorhanden sind. Verwenden Sie das Präfix `schema:` gefolgt vom Schema-Schlüssel, den Sie abgleichen möchten. Optional können Sie einen erwarteten Wert angeben. Zum Beispiel:

- `schema:@Recipe` stimmt mit Seiten überein, bei denen der Schematyp „Recipe" ist.
- `schema:@Recipe.name` stimmt mit Seiten überein, bei denen `@Recipe.name` vorhanden ist.
- `schema:@Recipe.name=Cookie` stimmt mit Seiten überein, bei denen `@Recipe.name` „Cookie" ist.

Schema.org-Werte können auch verwendet werden, um [[Variablen#Schema.org-Variablen|Daten in Vorlagen vorab auszufüllen]].

### Interpreter-Kontext

Wenn der [[Webseiten interpretieren|Interpreter]] aktiviert ist, können Sie [[Variablen#Prompt-Variablen|Prompt-Variablen]] verwenden, um Seiteninhalte mit natürlicher Sprache zu extrahieren. Für jede Vorlage können Sie den [[Webseiten interpretieren#Kontext|Kontext]] definieren, auf den der Interpreter Zugriff hat.
