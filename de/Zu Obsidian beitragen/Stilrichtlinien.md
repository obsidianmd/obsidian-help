---
permalink: style-guide
publish: true
mobile: true
description: Diese Seite erklärt die Stilrichtlinien für das Verfassen unserer Support-Dokumentation.
---
Die Obsidian-Dokumentation folgt den auf dieser Seite aufgeführten Stilrichtlinien. Diese Richtlinien basieren auf branchenüblichen Best Practices, insbesondere dem [Google Developer Documentation Style Guide](<https://developers.google.com/style>) und dem [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/). Für Grenzfälle, die nachfolgend nicht abgedeckt werden, nutzen Sie diese externen Leitfäden als sekundäre Referenz.

> [!tip]- Mitwirken
> Der Großteil der Dokumentation existierte bereits vor diesem Stilrichtlinien.
> 
> Wenn Sie Verstöße gegen diese Stilrichtlinien finden, [erstellen Sie bitte ein Issue](https://github.com/obsidianmd/obsidian-docs/issues/new) und reichen Sie einen Pull Request bei [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs) ein.

## Terminologie und Grammatik

### Sprachstil

Für unsere englische Dokumentation wird die Verwendung von [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) empfohlen, um unser weltweites Publikum besser zu bedienen und [[#Übersetzungen]] zu unterstützen. Das bedeutet:

- Vermeidung von Redewendungen und kulturspezifischen Ausdrücken
- Verwendung von Aktivform und direktem Satzbau
- Bevorzugung einfacher, gebräuchlicher Wörter gegenüber komplexer Terminologie
- Explizite statt implizite Formulierungen
- Für Rechtschreibkonventionen amerikanisches Englisch verwenden (z. B. 'organize' statt 'organise').

### Begriffe

- Bevorzugen Sie „Tastaturkürzel" gegenüber „Hotkey". Verwenden Sie Hotkey, wenn Sie sich auf die spezifische Funktion beziehen.
- Bevorzugen Sie „die Obsidian-App" auf Mobilgeräten und „die Obsidian-Anwendung" auf dem Desktop.
- Bevorzugen Sie „synchronisieren" oder „Synchronisierung" gegenüber „synchronisieren" mit abweichenden Schreibweisen.
- Bevorzugen Sie „Suchbegriff" gegenüber „Suchabfrage".
- Bevorzugen Sie „Überschrift" gegenüber „Header", wenn Sie sich auf einen Text beziehen, der einen Abschnitt einleitet.
- Bevorzugen Sie „Maximum" gegenüber „Max" und „Minimum" gegenüber „Min".

### Produktnamen

Obsidian-Produktnamen beginnen mit „Obsidian", zum Beispiel „Obsidian Publish" und „Obsidian Sync".

Wenn ein Absatz zu repetitiv wird, können Sie in nachfolgenden Erwähnungen die Kurzform verwenden.

Zum Beispiel:

_Um gerätespezifische Konfigurationen zu ermöglichen, synchronisiert Obsidian Sync nicht seine eigenen Einstellungen. Sie müssen Sync für jedes Ihrer Geräte konfigurieren._

### Benutzeroberfläche und Interaktionen

- Verwenden Sie **Fettdruck**, um Schaltflächentext anzuzeigen.
- Bevorzugen Sie „wählen" gegenüber „tippen" oder „klicken".
	- Bei mobil-spezifischen Anweisungen ist „tippen" akzeptabel, wenn Touch-Interaktionen beschrieben werden, da „klicken" nicht verfügbar ist.
- Bevorzugen Sie „Seitenleiste" gegenüber „Seiten-Leiste".
- Bevorzugen Sie „ausführen" gegenüber „aufrufen" oder „exekutieren", wenn Sie sich auf Befehle oder Aktionen beziehen.

Wenn Sie sich auf mehrere UI-Interaktionen in einer Reihenfolge beziehen, verwenden Sie das Symbol → (U+2192). Zum Beispiel: „**[[Einstellungen]] → Community-Erweiterungen**".

### Notizen, Dateien und Ordner

- Verwenden Sie „Notiz", wenn Sie sich auf eine Markdown-Datei im Vault beziehen.
- Verwenden Sie „Datei", wenn Sie sich auf andere Dateiendungen als Markdown beziehen.
- Bevorzugen Sie „Notizname" gegenüber „Notiztitel".
- Bevorzugen Sie „aktive Notiz" gegenüber „aktuelle Notiz".
- Bevorzugen Sie „Ordner" gegenüber „Verzeichnis".
- Bevorzugen Sie „Dateityp" gegenüber „Dateiformat", es sei denn, Sie beziehen sich speziell auf das Datenformat des Dateiinhalts.

Beim Wechseln zwischen Notizen verwenden Sie „öffnen", wenn das Ziel nicht sichtbar ist, und „wechseln", wenn sowohl Quell- als auch Zielnotiz in separaten Splits geöffnet sind.

### Referenzdokumentation für Einstellungen

Wenn möglich, sollten Einstellungen innerhalb von Obsidian mit einem beschreibenden Text dokumentiert werden. Vermeiden Sie es, eine bestimmte Einstellung in der Obsidian-Hilfe zu dokumentieren, es sei denn:

- Sie erfordert tiefgehenderes Wissen darüber, wie und wann sie zu verwenden ist.
- Sie wird häufig falsch verwendet oder danach gefragt.
- Sie verändert die Benutzererfahrung _drastisch_.

Erwägen Sie die Verwendung eines Tipp-Hinweisblocks, wenn Sie auf eine bestimmte Einstellung aufmerksam machen möchten.

### Richtungsangaben

Verwenden Sie Bindestriche bei Richtungsangaben, wenn sie als Adjektive verwendet werden. Vermeiden Sie Bindestriche, wenn die Richtung als Substantiv verwendet wird.

**Empfohlen:**

- Wählen Sie **[[Einstellungen]]** in der unteren-linken Ecke.
- Wählen Sie **[[Einstellungen]]** unten links.

**Nicht empfohlen:**

- Wählen Sie **[[Einstellungen]]** in der unteren linken Ecke.
- Wählen Sie **[[Einstellungen]]** in der unteren-linken.

Bevorzugen Sie „oben-links" und „oben-rechts" gegenüber „links-oben" und „rechts-oben".

Geben Sie keine Richtung an, wenn Sie sich auf Einstellungen beziehen. Die Position des Einstellungselements hängt vom Gerät ab.

**Empfohlen:**

- Wählen Sie neben **Remote-Tresor auswählen** die Option **Auswählen**.

**Nicht empfohlen:**

- Wählen Sie rechts neben **Remote-Tresor auswählen** die Option **Auswählen**.

Verwenden Sie bei der Beschreibung vertikaler Richtungen in UI-Elementen „oberhalb" und „unterhalb" für räumliche Beziehungen. Vermeiden Sie „oben" und „unten", da sie in verschiedenen Kontexten mehrdeutig sind.

**Empfohlen:**

- Das Suchfeld erscheint oberhalb der Dateiliste.
- Weitere Optionen sind unterhalb verfügbar.

**Nicht empfohlen:**

- Das Suchfeld befindet sich über der Dateiliste.
- Mehr Optionen sind weiter unten.

### Anweisungen

Verwenden Sie den Imperativ für die Bezeichnungen von Anleitungen, Abschnittsüberschriften und Schritt-für-Schritt-Anweisungen. Der Imperativ ist prägnant und handlungsorientiert, was für Benutzer, die Anweisungen befolgen, einfacher ist.

- Bevorzugen Sie „Einrichten" gegenüber „Das Einrichten"
- Bevorzugen Sie „Eine Datei verschieben" gegenüber „Das Verschieben einer Datei"
- Bevorzugen Sie „Notizen importieren" gegenüber „Das Importieren von Notizen"

### Satzschreibweise

Bevorzugen Sie *Satzschreibweise* gegenüber *Titelschreibweise* für Überschriften, Schaltflächen und Titel. Wenn Sie sich auf UI-Elemente beziehen, stimmen Sie die Groß- und Kleinschreibung immer mit dem Text in der Benutzeroberfläche ab.

**Empfohlen:**

- Wie Obsidian Daten speichert

**Nicht empfohlen:**

- Wie Obsidian Daten Speichert

### Beispiele

Bevorzugen Sie realistische Beispiele gegenüber Platzhalter-Begriffen.

**Empfohlen:**

- `task:(anrufen OR planen)`

**Nicht empfohlen:**

- `task:(foo OR bar)`

### Tastennamen und Tastaturkürzel

Verwenden Sie eine einheitliche Notation, wenn Sie sich auf Tasten und Tastaturkürzel beziehen.

**Einzelne Tastennamen:**

Wenn Sie sich auf ein Zeichen auf der Tastatur namentlich beziehen, fügen Sie das Zeichen in Klammern direkt nach dem Namen hinzu.

**Empfohlen:**

- Drücken Sie die Bindestrich-Taste (-), um einen Strich einzufügen.
- Verwenden Sie das Fragezeichen (?), um zu suchen.

**Nicht empfohlen:**

- Drücken Sie die Bindestrich-Taste, um einen Strich einzufügen.
- Verwenden Sie das ?, um zu suchen.
- Fügen Sie ein `-` vor dem Wort ein.

**Tastaturkürzel:**

Formatieren Sie Tastaturkürzel ohne Leerzeichen um das Pluszeichen. Wenn sich ein Kürzel zwischen Betriebssystemen unterscheidet, geben Sie beide an.

**Empfohlen:**

- Drücken Sie `Strg+Z` (Windows) oder `Befehlstaste+Z` (macOS), um rückgängig zu machen.
- Drücken Sie `Escape`, um dieses Fenster zu schließen.
- Verwenden Sie `Tab`, um zwischen Feldern zu wechseln.

**Nicht empfohlen:**

- Drücken Sie `Cmd+Z`, um rückgängig zu machen.
- Drücken Sie `Strg + Z` (mit Leerzeichen), um rückgängig zu machen.
- Drücken Sie `Strg/Cmd+Z`, um rückgängig zu machen.

Bei Kürzeln, die auf allen Plattformen identisch sind, müssen Sie das Betriebssystem nicht angeben. Wenn Sie unsicher sind, ob sich ein Kürzel je nach Plattform unterscheidet, geben Sie das Betriebssystem sicherheitshalber an. Windows und Linux verwenden in der Regel die gleichen Kürzel.

### Markdown

Verwenden Sie Leerzeilen zwischen Markdown-Blöcken:

**Empfohlen:**

```md
# Überschrift 1

Dies ist ein Abschnitt.

1. Erster Punkt
2. Zweiter Punkt
3. Dritter Punkt
```

**Nicht empfohlen:**

```md
# Überschrift 1
Dies ist ein Abschnitt.
1. Erster Punkt
2. Zweiter Punkt
3. Dritter Punkt
```

**Geviertstriche in Listen:**

Verwenden Sie Geviertstriche (—), um fett gedruckte Begriffe von ihren Beschreibungen in Aufzählungen zu trennen. Verwenden Sie keine Geviertstriche in einfachen verschachtelten Aufzählungen mit Links.

**Empfohlen:**

- **Ansichtsmenü** — Ansichten erstellen, bearbeiten und wechseln.
- **Werte berechnen** — Preise hinzufügen, Summen berechnen oder mathematische Operationen durchführen.

**Nicht empfohlen:**

- [[Eine Base erstellen]] — Erfahren Sie, wie Sie eine Basis erstellen und einbetten.

### Bilder

Verwenden Sie „**Breite** x **Höhe** Pixel" für die Beschreibung von Bild- oder Bildschirmabmessungen.

**Beispiel:**

Empfohlene Bildabmessungen: 1920 x 1080 Pixel.

## Informationsstruktur

### Hinweisblock-Typen

Verwenden Sie Hinweisblöcke strategisch, um bestimmte Arten von Informationen hervorzuheben:

**Tipp** (`[!tip]-`) - Praktische Ratschläge oder Best Practices, die den Arbeitsablauf des Benutzers verbessern. Verwenden Sie sie für Abkürzungen, Workarounds oder nicht wesentliche, aber hilfreiche Informationen. Diese Hinweisblöcke starten eingeklappt.

**Info** (`[!info]+`) - Zusätzlicher Kontext, Hintergrundinformationen oder Erläuterungen. Verwenden Sie sie, wenn Informationen das Verständnis erweitern, aber nicht erforderlich sind, um eine Aufgabe abzuschließen. Diese Hinweisblöcke starten ausgeklappt.

**Warnung** (`[!warning]+`) - Wichtige Warnhinweise, die Datenverlust, Fehler oder unbeabsichtigte Folgen verhindern. Verwenden Sie sie sparsam für tatsächlich riskante Situationen. Diese Hinweisblöcke sollten niemals eingeklappt sein.

**Beispiel** (`[!example]-`) - Allgemeine Randbemerkungen oder ergänzende Details. Verwenden Sie sie für tangentiale Informationen, die für einige Benutzer relevant sein könnten. Diese Hinweisblöcke starten eingeklappt.

**Beispiele:**
```md
> [!tip]- Tastaturkürzel verwenden
> Sie können Ihren Arbeitsablauf beschleunigen, indem Sie sich die meistgenutzten Kürzel einprägen.

> [!info]+ Dies ist ein kostenpflichtiges Add-on
> Diese Funktion erfordert ein kostenpflichtiges Abonnement.

> [!warning]+ Diese Aktion kann nicht rückgängig gemacht werden
> Das Löschen eines Vaults ist dauerhaft. Erwägen Sie, Ihre Notizen vorher zu exportieren.

> [!example]- Erweiterte Nutzung
> Sie können diese Einstellung auch über das Diagramm-Menü konfigurieren.
```

### Listen vs. Fließtext

Verwenden Sie Listen, wenn Sie einzelne Punkte präsentieren, die keine starken sequenziellen oder kausalen Beziehungen haben. Verwenden Sie Fließtext und Absätze, wenn Punkte aufeinander aufbauen, Erklärungen erfordern oder von einem narrativen Fluss profitieren.

**Verwenden Sie eine Liste für:**
- Eine Reihe nicht zusammenhängender Funktionen
- Installationsanforderungen
- Konfigurationsoptionen
- Schritte zur Fehlerbehebung

**Verwenden Sie Fließtext für:**
- Erklärungen, wie etwas funktioniert
- Arbeitsabläufe mit Abhängigkeiten
- Konzeptionelle Übersichten
- Anleitungen, die Kontext erfordern

### Tabellen

Verwenden Sie Tabellen, um Funktionen, Versionen oder verwandte Datenpunkte zu vergleichen, wenn die Ausrichtung das Verständnis erleichtert. Vermeiden Sie Tabellen für einfache Listen oder einspaltige Daten.

**Guter Anwendungsfall:**

| Funktion | Mobil | Desktop |
|----------|-------|---------|
| Sync | Ja | Ja |
| Erweiterungen | Nein | Ja |
| Themes | Eingeschränkt | Vollständig |

### Querverweise

Verwenden Sie interne Wiki-Links (`[[Notizname]]`) großzügig, um Benutzern die Navigation zu verwandten Themen zu erleichtern. Vermeiden Sie jedoch übermäßiges Verlinken:

- Verlinken Sie denselben Begriff nicht mehrmals auf einer einzelnen Seite
- Verlinken Sie nur, wenn die referenzierte Seite signifikanten zusätzlichen Kontext bietet
- Verwenden Sie bei Bedarf beschreibenden Linktext: `[[Notizname#Abschnitt|beschreibender Text]]`

**Beispiel:**

Erste Erwähnung: „Erfahren Sie mehr über [[Einführung in Obsidian Sync|Obsidian Sync]], um Ihren Vault geräteübergreifend aktuell zu halten."
Spätere Erwähnung: „Sie können Sync für jedes Gerät separat konfigurieren."

### Plattformspezifische Inhalte

Wenn Sie Funktionen dokumentieren, die sich zwischen Plattformen unterscheiden, verwenden Sie Abschnittsüberschriften, um den Inhalt zu organisieren.

Verwenden Sie `Desktop` und `Mobil` als Unterabschnittsüberschriften, um plattformspezifische Anweisungen oder Funktionen zu trennen.

**Empfohlen:**
```md
## Die Werkzeugleiste anpassen

### Desktop

In der Desktop-Version können Sie die Werkzeugleiste wie folgt anpassen:

- Ordnen Sie die Reihenfolge der Werkzeugleisten-Aktionen per Drag and Drop der Symbole um.
- Um bestimmte Aktionen auszublenden, klicken Sie mit der rechten Maustaste auf einen leeren Bereich und deaktivieren Sie die Aktionen, die Sie ausblenden möchten.

### Mobil

In der mobilen Version können Sie die Werkzeugleiste über die Einstellungen anpassen:

1. Öffnen Sie **[[Einstellungen]]**.
2. Navigieren Sie zu **Erscheinungsbild**.
3. Wählen Sie **Verwalten** unter **Werkzeugleisten-Konfiguration**.
```

> [!info]+ Wann separate Abschnitte erstellen?
> Erstellen Sie nur dann separate Abschnitte, wenn sich der Inhalt erheblich unterscheidet. Wenn die Anweisungen weitgehend gleich sind mit geringfügigen Abweichungen, verwenden Sie stattdessen Inline-Hinweise.

## Symbole und Bilder

Fügen Sie Symbole und Bilder ein, wenn sie es einfacher machen, Dinge zu erklären, die mit Worten schwer zu beschreiben sind, oder wenn Sie wichtige Teile der Obsidian-Anwendung zeigen müssen. Sie können Bilder im Ordner `Attachments` speichern.

- Das Bild sollte den begleitenden Text verständlicher machen.

 **Beispiel**: Einmal aktiviert, erstellt die Erweiterung [[Anzahl der Wörter]] einen neuen Eintrag in Ihrer unteren Statusleiste.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Bilder sollten im `.png`- oder `.svg`-Format sein.
- Wenn ein Bild in der Notiz zu groß erscheint, verkleinern Sie es außerhalb von Obsidian oder passen Sie seine Abmessungen an, wie unter [[Dateien einbetten#Ein Bild in eine Notiz einbetten|Ein Bild in eine Notiz einbetten]] erklärt.
- In seltenen Fällen möchten Sie besonders große oder komplexe Bilder möglicherweise in einem [[Hinweisblöcke#Einklappbare Hinweisblöcke|eingeklappten Hinweisblock]] platzieren.
- Bei Pop-up-Fenstern oder Modalen sollte das Bild das gesamte Obsidian-Anwendungsfenster zeigen.
 ![[Style-guide-modal-example.png#interface]]

### Symbole

[Lucide](https://lucide.dev/icons/)- und benutzerdefinierte Obsidian-Symbole können neben detaillierten Elementen verwendet werden, um eine visuelle Darstellung einer Funktion zu bieten.

**Beispiel:** Wählen Sie in der Werkzeugleiste auf der linken Seite **Neuen Canvas erstellen** ( ![[lucide-layout-dashboard.svg#icon]] ), um einen Canvas im selben Ordner wie die aktive Datei zu erstellen.

**Richtlinien für Symbole**

- Speichern Sie Symbole im Ordner `Attachments/icons`.
- Fügen Sie das Präfix `lucide-` vor dem Lucide-Symbolnamen hinzu.
- Fügen Sie das Präfix `obsidian-icon-` vor dem Obsidian-Symbolnamen hinzu.

**Beispiel:** Das Symbol zum Erstellen eines neuen Canvas sollte `lucide-layout-dashboard` heißen.

- Verwenden Sie die SVG-Version der verfügbaren Symbole.
- Symbole sollten `18` Pixel breit, `18` Pixel hoch und eine Strichbreite von `1.5` haben. Sie können diese Einstellungen in den SVG-Daten anpassen.

> [!info]- Größe und Strichbreite in einer SVG anpassen
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="BREITE" height="HÖHE" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STRICHBREITE" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Verwenden Sie den `icon`-Anker in eingebetteten Bildern, um den Abstand um das Symbol herum anzupassen, damit es sauber mit dem umgebenden Text ausgerichtet ist.
- Symbole sollten von Klammern umgeben sein. ( ![[lucide-cog.svg#icon]] )

**Beispiel**: `( ![[lucide-cog.svg#icon]] )`

### Bild-Anker-Tags

Bild-Anker-Tags stehen zur Verfügung, um dekorative Änderungen an eingebetteten Bildern vorzunehmen.

> [!warning] Warnung für Live-Vorschau
> Die Symbol-Anker-Tags werden in der **Live-Vorschau** nicht korrekt angezeigt. Verwenden Sie den **Lesemodus**, um zu bestätigen, dass der Anker-Tag angewendet wurde.

**Symbol**

`![[lucide-menu.svg#icon]]`

Der Symbol-Anker-Tag stellt die korrekte vertikale Ausrichtung für Symbole sicher, die zur Kennzeichnung von Schnittstellenelementen verwendet werden.

Das erste Menü-Symbol verwendet den Anker-Tag ( ![[lucide-menu.svg#icon]] ), während das zweite Menü-Symbol ( ![[lucide-menu.svg]] ) dies nicht tut.

**Oberfläche**

`![[Vault picker.png#interface]]`

Der Oberflächen-Anker-Tag fügt einen dekorativen Schlagschatten um das Bild hinzu. Im ersten Bild ist der Oberflächen-Anker-Tag angewendet.
![[Vault picker.png#interface]]
Im Gegensatz dazu hat das zweite Bild keinen Oberflächen-Anker angewendet.

![[Vault picker.png]]

**Umrandung**

`![[Backlinks.png#outline]]`

Der Umrandungs-Anker-Tag fügt einen dezenten Rahmen um das Bild hinzu. Im ersten Bild ist der Umrandungs-Anker-Tag angewendet.

> [!tip] Beachten Sie die untere linke Ecke des Bildes, um den Unterschied zu sehen.

![[Backlinks.png#outline]]

Das zweite Bild hat keinen Umrandungs-Anker-Tag.

![[Backlinks.png]]

### Optimierung

Bilder verlangsamen die Ladezeit der Seite und beanspruchen wertvollen [[Einführung in Obsidian Publish|Publish]]-Speicherplatz. Die Optimierung von Bildern ermöglicht eine Reduzierung der Dateigröße bei gleichzeitiger Beibehaltung der visuellen Integrität des Bildes.

Sowohl Bilder als auch Symbole sollten optimiert werden.

> [!info] Werkzeuge zur Bildoptimierung
> Hier sind einige empfohlene Programme zur Reduzierung der Größe Ihrer Bilder.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Wir empfehlen eine Optimierungsrate von 65-75%.

## Layout

### Defekte Links

Bevor Sie Ihren Pull Request einreichen, überprüfen Sie bitte alle defekten Links in der Dokumentation der Übersetzung, an der Sie arbeiten, und korrigieren Sie diese. Defekte Links können im Laufe der Zeit natürlich auftreten, daher hilft die Überprüfung ihrer Richtigkeit dabei, die Qualität der Dokumentation aufrechtzuerhalten.

Sie können defekte Links mithilfe von [[Community-Erweiterungen]] oder in Ihrer IDE verfügbaren Werkzeugen überprüfen.

### Beschreibungen

Diese Dokumentation wird auf GitHub bearbeitet und online über [[Einführung in Obsidian Publish|Obsidian Publish]] gehostet, was [[Linkvorschau für soziale Medien#Beschreibung|Beschreibungen]] für Social Cards und andere [[SEO]]-Elemente enthält.

Wenn die Seite, an der Sie arbeiten, keine `description`-[[Eigenschaften|Eigenschaft]] hat, fügen Sie bitte eine hinzu. Die Beschreibung sollte 150 Zeichen oder weniger umfassen und eine objektive Zusammenfassung des Seiteninhalts bieten.

**Gut**: Lernen Sie, Vorlagen zu erstellen, die Metadaten von Webseiten automatisch mit Web Clipper erfassen und organisieren.
**Könnte verbessert werden**: Erfahren Sie, wie Sie Vorlagen erstellen, die automatisch Metadaten von Webseiten mit Web Clipper erfassen und organisieren.

### Richtungen

Wenn Sie [[#Anweisungen]] zur Durchführung einer Aktion innerhalb der App schreiben oder überarbeiten, stellen Sie sicher, dass Sie Schritte für sowohl die mobile als auch die Desktop-Version einbeziehen.

Wenn Sie keinen Zugang zu einem mobilen oder Desktop-Gerät haben, erwähnen Sie dies bitte bei der Einreichung Ihres Pull Requests.

## Übersetzungen

Übersetzen Sie den gesamten Inhalt, wenn Sie eine Übersetzung fertigstellen. Dies umfasst unter anderem:

- Notiznamen
- Ordnernamen
- Aliasse
- Anhangsnamen
- Alternativer Linktext
