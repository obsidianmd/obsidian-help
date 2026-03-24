---
permalink: style-guide
publish: true
mobile: true
description: Diese Seite erklärt die Stilrichtlinien für das Verfassen unserer Support-Dokumentation.
---
Die Obsidian-Dokumentation folgt den auf dieser Seite aufgeführten Stilrichtlinien. Diese Richtlinien basieren auf branchenüblichen Best Practices, insbesondere dem [Google Developer Documentation Style Guide](<https://developers.google.com/style>) und dem [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/). Für Grenzfälle, die nachfolgend nicht abgedeckt werden, nutze diese externen Leitfäden als sekundäre Referenz.

> [!tip]- Mitwirken
> Der Großteil der Dokumentation existierte bereits vor diesem Stilrichtlinien.
>
> Wenn du Verstöße gegen diese Stilrichtlinien findest, [erstelle bitte ein Issue](https://github.com/obsidianmd/obsidian-docs/issues/new) und reiche einen Pull Request bei [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs) ein.

## Terminologie und Grammatik

### Sprachstil

Für unsere englische Dokumentation wird die Verwendung von [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) empfohlen, um unser weltweites Publikum besser zu bedienen und [[#Übersetzungen]] zu unterstützen. Das bedeutet:

- Vermeidung von Redewendungen und kulturspezifischen Ausdrücken
- Verwendung von Aktivform und direktem Satzbau
- Bevorzugung einfacher, gebräuchlicher Wörter gegenüber komplexer Terminologie
- Explizite statt implizite Formulierungen
- Für Rechtschreibkonventionen amerikanisches Englisch verwenden (z. B. 'organize' statt 'organise').

### Begriffe

- Bevorzuge „Tastaturkürzel" gegenüber „Hotkey". Verwende Hotkey, wenn du dich auf die spezifische Funktion beziehst.
- Bevorzuge „die Obsidian-App" auf Mobilgeräten und „die Obsidian-Anwendung" auf dem Desktop.
- Bevorzuge „synchronisieren" oder „Synchronisierung" gegenüber „synchronisieren" mit abweichenden Schreibweisen.
- Bevorzuge „Suchbegriff" gegenüber „Suchabfrage".
- Bevorzuge „Überschrift" gegenüber „Header", wenn du dich auf einen Text beziehst, der einen Abschnitt einleitet.
- Bevorzuge „Maximum" gegenüber „Max" und „Minimum" gegenüber „Min".

### Produktnamen

Obsidian-Produktnamen beginnen mit „Obsidian", zum Beispiel „Obsidian Publish" und „Obsidian Sync".

Wenn ein Absatz zu repetitiv wird, kannst du in nachfolgenden Erwähnungen die Kurzform verwenden.

Zum Beispiel:

_Um gerätespezifische Konfigurationen zu ermöglichen, synchronisiert Obsidian Sync nicht seine eigenen Einstellungen. Du musst Sync für jedes deiner Geräte konfigurieren._

### Benutzeroberfläche und Interaktionen

- Verwende **Fettdruck**, um Schaltflächentext anzuzeigen.
- Bevorzuge „wählen" gegenüber „tippen" oder „klicken".
	- Bei mobil-spezifischen Anweisungen ist „tippen" akzeptabel, wenn Touch-Interaktionen beschrieben werden, da „klicken" nicht verfügbar ist.
- Bevorzuge „Seitenleiste" gegenüber „Seiten-Leiste".
- Bevorzuge „ausführen" gegenüber „aufrufen" oder „exekutieren", wenn du dich auf Befehle oder Aktionen beziehst.

Wenn du dich auf mehrere UI-Interaktionen in einer Reihenfolge beziehst, verwende das Symbol → (U+2192). Zum Beispiel: „**[[Einstellungen]] → Community-Erweiterungen**".

### Notizen, Dateien und Ordner

- Verwende „Notiz", wenn du dich auf eine Markdown-Datei im Vault beziehst.
- Verwende „Datei", wenn du dich auf andere Dateiendungen als Markdown beziehst.
- Bevorzuge „Notizname" gegenüber „Notiztitel".
- Bevorzuge „aktive Notiz" gegenüber „aktuelle Notiz".
- Bevorzuge „Ordner" gegenüber „Verzeichnis".
- Bevorzuge „Dateityp" gegenüber „Dateiformat", es sei denn, du beziehst dich speziell auf das Datenformat des Dateiinhalts.

Beim Wechseln zwischen Notizen verwende „öffnen", wenn das Ziel nicht sichtbar ist, und „wechseln", wenn sowohl Quell- als auch Zielnotiz in separaten Splits geöffnet sind.

### Referenzdokumentation für Einstellungen

Wenn möglich, sollten Einstellungen innerhalb von Obsidian mit einem beschreibenden Text dokumentiert werden. Vermeide es, eine bestimmte Einstellung in der Obsidian-Hilfe zu dokumentieren, es sei denn:

- Sie erfordert tiefgehenderes Wissen darüber, wie und wann sie zu verwenden ist.
- Sie wird häufig falsch verwendet oder danach gefragt.
- Sie verändert die Benutzererfahrung _drastisch_.

Erwäge die Verwendung eines Tipp-Hinweisblocks, wenn du auf eine bestimmte Einstellung aufmerksam machen möchtest.

### Richtungsangaben

Verwende Bindestriche bei Richtungsangaben, wenn sie als Adjektive verwendet werden. Vermeide Bindestriche, wenn die Richtung als Substantiv verwendet wird.

**Empfohlen:**

- Wähle **[[Einstellungen]]** in der unteren-linken Ecke.
- Wähle **[[Einstellungen]]** unten links.

**Nicht empfohlen:**

- Wähle **[[Einstellungen]]** in der unteren linken Ecke.
- Wähle **[[Einstellungen]]** in der unteren-linken.

Bevorzuge „oben-links" und „oben-rechts" gegenüber „links-oben" und „rechts-oben".

Gib keine Richtung an, wenn du dich auf Einstellungen beziehst. Die Position des Einstellungselements hängt vom Gerät ab.

**Empfohlen:**

- Wähle neben **Remote-Tresor auswählen** die Option **Auswählen**.

**Nicht empfohlen:**

- Wähle rechts neben **Remote-Tresor auswählen** die Option **Auswählen**.

Verwende bei der Beschreibung vertikaler Richtungen in UI-Elementen „oberhalb" und „unterhalb" für räumliche Beziehungen. Vermeide „oben" und „unten", da sie in verschiedenen Kontexten mehrdeutig sind.

**Empfohlen:**

- Das Suchfeld erscheint oberhalb der Dateiliste.
- Weitere Optionen sind unterhalb verfügbar.

**Nicht empfohlen:**

- Das Suchfeld befindet sich über der Dateiliste.
- Mehr Optionen sind weiter unten.

### Anweisungen

Verwende den Imperativ für die Bezeichnungen von Anleitungen, Abschnittsüberschriften und Schritt-für-Schritt-Anweisungen. Der Imperativ ist prägnant und handlungsorientiert, was für Benutzer, die Anweisungen befolgen, einfacher ist.

- Bevorzuge „Einrichten" gegenüber „Das Einrichten"
- Bevorzuge „Eine Datei verschieben" gegenüber „Das Verschieben einer Datei"
- Bevorzuge „Notizen importieren" gegenüber „Das Importieren von Notizen"

### Satzschreibweise

Bevorzuge *Satzschreibweise* gegenüber *Titelschreibweise* für Überschriften, Schaltflächen und Titel. Wenn du dich auf UI-Elemente beziehst, stimme die Groß- und Kleinschreibung immer mit dem Text in der Benutzeroberfläche ab.

**Empfohlen:**

- Wie Obsidian Daten speichert

**Nicht empfohlen:**

- Wie Obsidian Daten Speichert

### Beispiele

Bevorzuge realistische Beispiele gegenüber Platzhalter-Begriffen.

**Empfohlen:**

- `task:(anrufen OR planen)`

**Nicht empfohlen:**

- `task:(foo OR bar)`

### Tastennamen und Tastaturkürzel

Verwende eine einheitliche Notation, wenn du dich auf Tasten und Tastaturkürzel beziehst.

**Einzelne Tastennamen:**

Wenn du dich auf ein Zeichen auf der Tastatur namentlich beziehst, füge das Zeichen in Klammern direkt nach dem Namen hinzu.

**Empfohlen:**

- Drücke die Bindestrich-Taste (-), um einen Strich einzufügen.
- Verwende das Fragezeichen (?), um zu suchen.

**Nicht empfohlen:**

- Drücke die Bindestrich-Taste, um einen Strich einzufügen.
- Verwende das ?, um zu suchen.
- Füge ein `-` vor dem Wort ein.

**Tastaturkürzel:**

Formatiere Tastaturkürzel ohne Leerzeichen um das Pluszeichen. Wenn sich ein Kürzel zwischen Betriebssystemen unterscheidet, gib beide an.

**Empfohlen:**

- Drücke `Strg+Z` (Windows) oder `Befehlstaste+Z` (macOS), um rückgängig zu machen.
- Drücke `Escape`, um dieses Fenster zu schließen.
- Verwende `Tab`, um zwischen Feldern zu wechseln.

**Nicht empfohlen:**

- Drücke `Cmd+Z`, um rückgängig zu machen.
- Drücke `Strg + Z` (mit Leerzeichen), um rückgängig zu machen.
- Drücke `Strg/Cmd+Z`, um rückgängig zu machen.

Bei Kürzeln, die auf allen Plattformen identisch sind, musst du das Betriebssystem nicht angeben. Wenn du unsicher bist, ob sich ein Kürzel je nach Plattform unterscheidet, gib das Betriebssystem sicherheitshalber an. Windows und Linux verwenden in der Regel die gleichen Kürzel.

### Markdown

Verwende Leerzeilen zwischen Markdown-Blöcken:

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

Verwende Geviertstriche (—), um fett gedruckte Begriffe von ihren Beschreibungen in Aufzählungen zu trennen. Verwende keine Geviertstriche in einfachen verschachtelten Aufzählungen mit Links.

**Empfohlen:**

- **Ansichtsmenü** — Ansichten erstellen, bearbeiten und wechseln.
- **Werte berechnen** — Preise hinzufügen, Summen berechnen oder mathematische Operationen durchführen.

**Nicht empfohlen:**

- [[Eine Base erstellen]] — Erfahre, wie du eine Basis erstellst und einbettest.

### Bilder

Verwende „**Breite** x **Höhe** Pixel" für die Beschreibung von Bild- oder Bildschirmabmessungen.

**Beispiel:**

Empfohlene Bildabmessungen: 1920 x 1080 Pixel.

## Informationsstruktur

### Hinweisblock-Typen

Verwende Hinweisblöcke strategisch, um bestimmte Arten von Informationen hervorzuheben:

**Tipp** (`[!tip]-`) - Praktische Ratschläge oder Best Practices, die den Arbeitsablauf des Benutzers verbessern. Verwende sie für Abkürzungen, Workarounds oder nicht wesentliche, aber hilfreiche Informationen. Diese Hinweisblöcke starten eingeklappt.

**Info** (`[!info]+`) - Zusätzlicher Kontext, Hintergrundinformationen oder Erläuterungen. Verwende sie, wenn Informationen das Verständnis erweitern, aber nicht erforderlich sind, um eine Aufgabe abzuschließen. Diese Hinweisblöcke starten ausgeklappt.

**Warnung** (`[!warning]+`) - Wichtige Warnhinweise, die Datenverlust, Fehler oder unbeabsichtigte Folgen verhindern. Verwende sie sparsam für tatsächlich riskante Situationen. Diese Hinweisblöcke sollten niemals eingeklappt sein.

**Beispiel** (`[!example]-`) - Allgemeine Randbemerkungen oder ergänzende Details. Verwende sie für tangentiale Informationen, die für einige Benutzer relevant sein könnten. Diese Hinweisblöcke starten eingeklappt.

**Beispiele:**
```md
> [!tip]- Tastaturkürzel verwenden
> Du kannst deinen Arbeitsablauf beschleunigen, indem du dir die meistgenutzten Kürzel einprägst.

> [!info]+ Dies ist ein kostenpflichtiges Add-on
> Diese Funktion erfordert ein kostenpflichtiges Abonnement.

> [!warning]+ Diese Aktion kann nicht rückgängig gemacht werden
> Das Löschen eines Vaults ist dauerhaft. Erwäge, deine Notizen vorher zu exportieren.

> [!example]- Erweiterte Nutzung
> Du kannst diese Einstellung auch über das Diagramm-Menü konfigurieren.
```

### Listen vs. Fließtext

Verwende Listen, wenn du einzelne Punkte präsentierst, die keine starken sequenziellen oder kausalen Beziehungen haben. Verwende Fließtext und Absätze, wenn Punkte aufeinander aufbauen, Erklärungen erfordern oder von einem narrativen Fluss profitieren.

**Verwende eine Liste für:**
- Eine Reihe nicht zusammenhängender Funktionen
- Installationsanforderungen
- Konfigurationsoptionen
- Schritte zur Fehlerbehebung

**Verwende Fließtext für:**
- Erklärungen, wie etwas funktioniert
- Arbeitsabläufe mit Abhängigkeiten
- Konzeptionelle Übersichten
- Anleitungen, die Kontext erfordern

### Tabellen

Verwende Tabellen, um Funktionen, Versionen oder verwandte Datenpunkte zu vergleichen, wenn die Ausrichtung das Verständnis erleichtert. Vermeide Tabellen für einfache Listen oder einspaltige Daten.

**Guter Anwendungsfall:**

| Funktion | Mobil | Desktop |
|----------|-------|---------|
| Sync | Ja | Ja |
| Erweiterungen | Nein | Ja |
| Themes | Eingeschränkt | Vollständig |

### Querverweise

Verwende interne Wiki-Links (`[[Notizname]]`) großzügig, um Benutzern die Navigation zu verwandten Themen zu erleichtern. Vermeide jedoch übermäßiges Verlinken:

- Verlinke denselben Begriff nicht mehrmals auf einer einzelnen Seite
- Verlinke nur, wenn die referenzierte Seite signifikanten zusätzlichen Kontext bietet
- Verwende bei Bedarf beschreibenden Linktext: `[[Notizname#Abschnitt|beschreibender Text]]`

**Beispiel:**

Erste Erwähnung: „Erfahre mehr über [[Einführung in Obsidian Sync|Obsidian Sync]], um deinen Vault geräteübergreifend aktuell zu halten."
Spätere Erwähnung: „Du kannst Sync für jedes Gerät separat konfigurieren."

### Plattformspezifische Inhalte

Wenn du Funktionen dokumentierst, die sich zwischen Plattformen unterscheiden, verwende Abschnittsüberschriften, um den Inhalt zu organisieren.

Verwende `Desktop` und `Mobil` als Unterabschnittsüberschriften, um plattformspezifische Anweisungen oder Funktionen zu trennen.

**Empfohlen:**
```md
## Die Werkzeugleiste anpassen

### Desktop

In der Desktop-Version kannst du die Werkzeugleiste wie folgt anpassen:

- Ordne die Reihenfolge der Werkzeugleisten-Aktionen per Drag and Drop der Symbole um.
- Um bestimmte Aktionen auszublenden, klicke mit der rechten Maustaste auf einen leeren Bereich und deaktiviere die Aktionen, die du ausblenden möchtest.

### Mobil

In der mobilen Version kannst du die Werkzeugleiste über die Einstellungen anpassen:

1. Öffne **[[Einstellungen]]**.
2. Navigiere zu **Erscheinungsbild**.
3. Wähle **Verwalten** unter **Werkzeugleisten-Konfiguration**.
```

> [!info]+ Wann separate Abschnitte erstellen?
> Erstelle nur dann separate Abschnitte, wenn sich der Inhalt erheblich unterscheidet. Wenn die Anweisungen weitgehend gleich sind mit geringfügigen Abweichungen, verwende stattdessen Inline-Hinweise.

## Symbole und Bilder

Füge Symbole und Bilder ein, wenn sie es einfacher machen, Dinge zu erklären, die mit Worten schwer zu beschreiben sind, oder wenn du wichtige Teile der Obsidian-Anwendung zeigen musst. Du kannst Bilder im Ordner `Attachments` speichern.

- Das Bild sollte den begleitenden Text verständlicher machen.

 **Beispiel**: Einmal aktiviert, erstellt die Erweiterung [[Anzahl der Wörter]] einen neuen Eintrag in deiner unteren Statusleiste.

![[Style-guide-zoomed-example.png#interface|300]]

- Bilder sollten im `.png`- oder `.svg`-Format sein.
- Wenn ein Bild in der Notiz zu groß erscheint, verkleinere es außerhalb von Obsidian oder passe seine Abmessungen an, wie unter [[Dateien einbetten#Ein Bild in eine Notiz einbetten|Ein Bild in eine Notiz einbetten]] erklärt.
- In seltenen Fällen möchtest du besonders große oder komplexe Bilder möglicherweise in einem [[Hinweisblöcke#Einklappbare Hinweisblöcke|eingeklappten Hinweisblock]] platzieren.
- Bei Pop-up-Fenstern oder Modalen sollte das Bild das gesamte Obsidian-Anwendungsfenster zeigen.
 ![[Style-guide-modal-example.png#interface]]

### Symbole

[Lucide](https://lucide.dev/icons/)- und benutzerdefinierte Obsidian-Symbole können neben detaillierten Elementen verwendet werden, um eine visuelle Darstellung einer Funktion zu bieten.

**Beispiel:** Wähle in der Werkzeugleiste auf der linken Seite **Neuen Canvas erstellen** ( ![[lucide-layout-dashboard.svg#icon]] ), um einen Canvas im selben Ordner wie die aktive Datei zu erstellen.

**Richtlinien für Symbole**

- Speichere Symbole im Ordner `Attachments/icons`.
- Füge das Präfix `lucide-` vor dem Lucide-Symbolnamen hinzu.
- Füge das Präfix `obsidian-icon-` vor dem Obsidian-Symbolnamen hinzu.

**Beispiel:** Das Symbol zum Erstellen eines neuen Canvas sollte `lucide-layout-dashboard` heißen.

- Verwende die SVG-Version der verfügbaren Symbole.
- Symbole sollten `18` Pixel breit, `18` Pixel hoch und eine Strichbreite von `1.5` haben. Du kannst diese Einstellungen in den SVG-Daten anpassen.

> [!info]- Größe und Strichbreite in einer SVG anpassen
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="BREITE" height="HÖHE" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STRICHBREITE" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Verwende den `icon`-Anker in eingebetteten Bildern, um den Abstand um das Symbol herum anzupassen, damit es sauber mit dem umgebenden Text ausgerichtet ist.
- Symbole sollten von Klammern umgeben sein. ( ![[lucide-cog.svg#icon]] )

**Beispiel**: `( ![[lucide-cog.svg#icon]] )`

### Bild-Anker-Tags

Bild-Anker-Tags stehen zur Verfügung, um dekorative Änderungen an eingebetteten Bildern vorzunehmen.

> [!warning] Warnung für Live-Vorschau
> Die Symbol-Anker-Tags werden in der **Live-Vorschau** nicht korrekt angezeigt. Verwende den **Lesemodus**, um zu bestätigen, dass der Anker-Tag angewendet wurde.

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

> [!tip] Beachte die untere linke Ecke des Bildes, um den Unterschied zu sehen.

![[Backlinks.png#outline]]

Das zweite Bild hat keinen Umrandungs-Anker-Tag.

![[Backlinks.png]]

### Optimierung

Bilder verlangsamen die Ladezeit der Seite und beanspruchen wertvollen [[Einführung in Obsidian Publish|Publish]]-Speicherplatz. Die Optimierung von Bildern ermöglicht eine Reduzierung der Dateigröße bei gleichzeitiger Beibehaltung der visuellen Integrität des Bildes.

Sowohl Bilder als auch Symbole sollten optimiert werden.

> [!info] Werkzeuge zur Bildoptimierung
> Hier sind einige empfohlene Programme zur Reduzierung der Größe deiner Bilder.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
>
> Wir empfehlen eine Optimierungsrate von 65-75%.

## Layout

### Defekte Links

Bevor du deinen Pull Request einreichst, überprüfe bitte alle defekten Links in der Dokumentation der Übersetzung, an der du arbeitest, und korrigiere diese. Defekte Links können im Laufe der Zeit natürlich auftreten, daher hilft die Überprüfung ihrer Richtigkeit dabei, die Qualität der Dokumentation aufrechtzuerhalten.

Du kannst defekte Links mithilfe von [[Community-Erweiterungen]] oder in deiner IDE verfügbaren Werkzeugen überprüfen.

### Beschreibungen

Diese Dokumentation wird auf GitHub bearbeitet und online über [[Einführung in Obsidian Publish|Obsidian Publish]] gehostet, was [[Linkvorschau für soziale Medien#Beschreibung|Beschreibungen]] für Social Cards und andere [[SEO]]-Elemente enthält.

Wenn die Seite, an der du arbeitest, keine `description`-[[Eigenschaften|Eigenschaft]] hat, füge bitte eine hinzu. Die Beschreibung sollte 150 Zeichen oder weniger umfassen und eine objektive Zusammenfassung des Seiteninhalts bieten.

**Gut**: Lerne, Vorlagen zu erstellen, die Metadaten von Webseiten automatisch mit Web Clipper erfassen und organisieren.
**Könnte verbessert werden**: Erfahre, wie du Vorlagen erstellst, die automatisch Metadaten von Webseiten mit Web Clipper erfassen und organisieren.

### Richtungen

Wenn du [[#Anweisungen]] zur Durchführung einer Aktion innerhalb der App schreibst oder überarbeitest, stelle sicher, dass du Schritte für sowohl die mobile als auch die Desktop-Version einbeziehst.

Wenn du keinen Zugang zu einem mobilen oder Desktop-Gerät hast, erwähne dies bitte bei der Einreichung deines Pull Requests.

## Übersetzungen

Übersetze den gesamten Inhalt, wenn du eine Übersetzung fertigstellst. Dies umfasst unter anderem:

- Notiznamen
- Ordnernamen
- Aliasse
- Anhangsnamen
- Alternativer Linktext
