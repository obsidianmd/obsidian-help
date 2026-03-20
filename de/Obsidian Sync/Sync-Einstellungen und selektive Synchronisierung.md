---
permalink: sync/settings
publish: true
mobile: true
description: Diese Seite erklärt die Sync-Einstellungen und hilft dir bei der Auswahl, welche Dateien synchronisiert werden sollen.
---
Wenn du einen [[Tarife und Speicherlimits#Einen neuen Remote-Tresor erstellen|Remote-Tresor erstellst]] und [[Obsidian Sync einrichten#Mit einem Remote-Tresor verbinden|dich damit verbindest]], wird die integrierte Sync-Erweiterung zum Verwaltungsort für deinen Remote-Tresor.

## Sync-Einstellungen

**Remote-Tresor**
Dieser Abschnitt zeigt deinen aktuell verbundenen Remote-Tresor. Er enthält eine Schaltfläche **Verbindung trennen**, um die Verbindung zum Remote-Tresor zu trennen, und eine Schaltfläche **Verwalten**, um alle Remote-Tresore anzuzeigen, auf die dein Konto Zugriff hat (einschließlich geteilter Tresore über [[An einem gemeinsamen Tresor zusammenarbeiten|Zusammenarbeit]]).

> [!warning]+ Remote-Tresor in Drittanbieter-Synchronisierungsdienst
> Wenn sich dein Remote-Tresor in einem Drittanbieter-Synchronisierungsdienst befindet, wird eine rote Fehlermeldung angezeigt. Befolge die Schritte in [[Zu Obsidian Sync wechseln]], um dies zu beheben.

**Sync-Status**
Zeigt den aktuellen Sync-Status des Remote-Tresors an. Dieser Abschnitt enthält je nach Status entweder eine Schaltfläche **Anhalten** oder **Fortfahren**.

**Name des Gerätes**
Weise dem aktuell synchronisierenden Gerät einen eindeutigen Namen zu. Dies hilft, die Aktivität im [[Statussymbol und Meldungen#Sync-Aktivitätsprotokoll|Sync-Log]] nachzuverfolgen. Diese Einstellung ist gerätespezifisch, genau wie die [[#Selektive Synchronisierung]].

**[[#Konfliktlösung]]**
Wähle, wie Konflikte gelöst werden sollen, wenn du eine Datei auf mehreren Geräten änderst. Diese Einstellung ist gerätespezifisch, genau wie die [[#Selektive Synchronisierung]].

**Gelöschte Dateien**
Enthält eine Schaltfläche zum **Anzeigen** oder **Wiederherstellen** gelöschter Dateien. Weitere Details findest du unter [[Versionsgeschichte]].

**Größe des Vaults**
Zeigt einen Fortschrittsbalken an, der anzeigt, wie viel deines Sync-Speichers belegt ist.

> [!tip]- Server-Verarbeitungszeit
> Es kann aufgrund serverseitiger Verarbeitung bis zu 30 Minuten dauern, bis die aktuelle Nutzung aktualisiert wird.

**Support kontaktieren**
Enthält Anweisungen, wie du den [[Hilfe und Support#Obsidian-Support kontaktieren|Obsidian-Support kontaktierst]], einschließlich Optionen zum **Debug-Informationen kopieren** und **E-Mail an den Support**.

### Konfliktlösung

Wähle, wie Konflikte gelöst werden sollen, wenn du eine Datei auf mehreren Geräten vor der Synchronisierung änderst. Du kannst Änderungen automatisch mergen oder separate Konfliktdateien zur manuellen Überprüfung erstellen lassen. Siehe [[Obsidian Sync Fehlerbehebung#Konfliktlösung|Konfliktlösung]] für Details darüber, wie Konflikte funktionieren und wie diese Einstellung konfiguriert wird.

> [!warning]+ Auf jedem Gerät konfigurieren
> Diese Einstellung muss auf jedem Gerät separat konfiguriert werden.

---

Du kannst auch wählen, was in den Einstellungen der integrierten Sync-Erweiterung synchronisiert werden soll. Dieser Abschnitt behandelt die **selektive Synchronisierung** und die **Vault-Konfigurationssynchronisierung** sowie die damit verbundenen Hinweise.

## Selektive Synchronisierung

Dateien, die in deinen [[Lokale und Remote-Tresore|Remote-Tresor]] synchronisiert werden, zählen zu deinem [[Häufig gestellte Fragen#Wie groß kann jeder Remote-Tresor sein|Speicherlimit]]. Standardmäßig aktiviert Obsidian Sync die **selektive Synchronisierung** für die folgenden Dateitypen:
- Bilder
- Audio
- Videos
- PDFs

Um zusätzliche Dateitypen zu synchronisieren, aktiviere die Option `Alle anderen Dateien synchronisieren`.

Die Standard-Einstellungen für die **Vault-Konfigurationssynchronisierung** umfassen:
- Andere Dateitypen
- Allgemeine Einstellungen
- Darstellung
- Themen und Snippets
- Tastenkürzel
- Aktive Obsidian-Erweiterungen
- Obsidian-Erweiterungseinstellungen

Um Community-Erweiterungen zu synchronisieren, aktiviere manuell **Aktive externe Erweiterungen** und **Installierte externe Erweiterungen**.

### Dateitypen ändern, die synchronisiert werden sollen

1. Öffne **[[Einstellungen]] → Sync**.
2. Aktiviere unter **Selektive Synchronisierung** die Dateitypen, die du synchronisieren möchtest.
3. Starte die Anwendung neu, um die neuen Einstellungen zu übernehmen. Auf Mobilgeräten oder Tablets kann ein erzwungenes Beenden erforderlich sein.

Beachte, dass dein [[Tarife und Speicherlimits|Sync-Tarif]] die maximale Dateigröße definiert, die du synchronisieren kannst. Der Standard-Tarif erlaubt die Synchronisierung von Dateien bis zu 5 MB, während der Plus-Tarif Dateien bis zu 200 MB unterstützt.

> [!info]+ Ausgeschlossene Dateien verbleiben im Remote-Tresor
> Das Hinzufügen einer Datei zur Liste der **Ignorierten Dateien** entfernt sie nicht aus dem Remote-Tresor, wenn sie bereits synchronisiert wurde. Konfiguriere deine Sync-Einstellungen vor der Synchronisierung, um unnötige Speichernutzung zu vermeiden.

### Einen Ordner von der Synchronisierung ausschließen

Standardmäßig synchronisiert Obsidian alle Dateien und Ordner in deinem Vault. Um einen bestimmten Ordner von der Synchronisierung auszuschließen:
1. Öffne **[[Einstellungen]] → Sync**.
2. Wähle neben **Ausgeschlossene Ordner** die Option **Verwalten**.
3. Wähle den Ordner aus, den du aus der Liste ausschließen möchtest.
4. Wähle **Fertig**.

Um einen Ordner von der Ausschlussliste zu entfernen, wähle die Schaltfläche ![[lucide-x.svg#icon]] neben dem Ordnernamen.

#### Immer von der Synchronisierung ausgeschlossen

##### Sicherungskopien der Datenwiederherstellung

Die Sicherungskopien der [[Datenwiederherstellung]]-Erweiterung werden nicht über Obsidian Sync synchronisiert, da Sicherungskopien in den [[Wie Obsidian Daten speichert#Globale Einstellungen|Globalen Einstellungen]] gespeichert werden.

##### Versteckte Dateien und Ordner

Dateien und Ordner, die mit einem `.` beginnen, werden als versteckt behandelt und von der Synchronisierung ausgeschlossen. Die einzige Ausnahme ist der [[Konfigurationsordner]] des Vaults (`.obsidian`), der synchronisiert wird.

Häufige Beispiele für versteckte Dateien und Ordner, die nicht synchronisiert werden:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Sync-Einstellungen

Sync-Einstellungen werden nicht geräteübergreifend synchronisiert. Du musst sie auf jedem Gerät separat nach Bedarf konfigurieren.

## Einstellungen deines synchronisierten Vaults aktualisieren

Um Sync-Einstellungen auf mehreren Geräten zu ändern, befolge diese Schritte:

> [!tip]- Primäre und sekundäre Geräte
> Die Begriffe „primäres" und „sekundäres" Gerät dienen nur der Klarheit. Sync unterscheidet nicht zwischen ihnen.

### Primäres Gerät

Das primäre Gerät dient als Quelle der Wahrheit. Hier vorgenommene Änderungen werden auf alle anderen Geräte synchronisiert.

1. Gehe zu **[[Einstellungen]] → Sync**.
2. Aktiviere die gewünschten Einstellungen unter **Vault-Konfiguration synchronisieren**.
3. Lade Obsidian neu oder starte es neu. Auf Mobilgeräten oder Tablets kann ein erzwungenes Beenden erforderlich sein.
4. Warte, bis die Einstellungen mit deinem Remote-Tresor synchronisiert sind.

### Sekundäre(s) Gerät(e)

Sekundäre Geräte (z. B. dein Handy) empfangen Aktualisierungen vom primären Gerät.

1. Gehe zu **[[Einstellungen]] → Sync**.
2. Aktiviere die erforderlichen Einstellungen unter **Vault-Konfiguration synchronisieren**.
3. Warte, bis die Änderungen vom Remote-Tresor heruntergeladen werden.
4. Lade die App neu oder starte sie neu, um die synchronisierten Einstellungen zu übernehmen. Auf Mobilgeräten oder Tablets kann ein erzwungenes Beenden erforderlich sein.

### Neuladen von Einstellungen

Bestimmte Einstellungen können im laufenden Betrieb neu geladen werden, während andere einen Neustart erfordern:

- **Im laufenden Betrieb neu ladbar**: Die meisten Obsidian-Konfigurationen, einschließlich Tastenkürzel und Eigenschaften, Darstellungseinstellungen und Konfigurationen für bereits aktivierte integrierte Erweiterungen.
- **Erfordert Neuladen**: CSS-Änderungen (z. B. [[CSS-Bausteine]], [[Darstellung|Themen]]), Diagrammansicht-Konfigurationen und Zustände integrierter Erweiterungen (z. B. Aktivieren/Deaktivieren von Tägliche Notizen).

Community-Erweiterungen unterstützen in der Regel kein Neuladen im laufenden Betrieb und erfordern einen Neustart, wenn neue Einstellungen angewendet werden.

> [!info]+ Für Erweiterungsentwickler
> Erfahre, wie du [Hot-Reload-Funktionalität mit Obsidian Sync integrierst](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Einstellungsprofile

Obsidian Sync kann mehrere [[Konfigurationsordner]] mit demselben Remote-Tresor synchronisieren, sodass du separate Profile erstellen kannst (z. B. eines für Mobilgeräte, ein anderes für deinen Laptop).

### Ein Einstellungsprofil erstellen

Um ein neues Einstellungsprofil zu erstellen:

1. Öffne **[[Einstellungen]] → Dateien & Links**.
2. Gib unter **Konfigurationsordner überschreiben** einen Namen für dein Profil ein, der mit einem Punkt (`.`) beginnt, z. B. `.obsidian-mobile`.
3. Starte Obsidian neu, um die Änderungen zu übernehmen.

> [!info]+ Erneutes Herunterladen von Erweiterungen und Themen vermeiden
> Das Ändern des Einstellungsprofils erfordert eine Neukonfiguration deiner Sync-Einstellungen. Um das erneute Herunterladen von Erweiterungen und Themen zu vermeiden, kopiere deinen bestehenden `.obsidian`-Ordner und benenne ihn passend zu deinem neuen Profil um (z. B. `.obsidian-mobile`), bevor du Änderungen vornimmst.
