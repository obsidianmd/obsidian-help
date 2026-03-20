---
permalink: data-storage
publish: true
mobile: true
description: 'Diese Seite erklärt, wie Obsidian Daten auf deinem Gerät speichert.'
---
Obsidian speichert deine Notizen als [[Grundlegende Formatierungssyntax|Markdown-formatierte]] reine Textdateien in einem _Vault_. Ein Vault ist ein Ordner in deinem lokalen Dateisystem, einschließlich aller Unterordner.

Da Notizen reine Textdateien sind, kannst du andere Texteditoren und Dateimanager verwenden, um Notizen zu bearbeiten und zu verwalten. Obsidian aktualisiert deinen Vault automatisch, um externe Änderungen zu berücksichtigen.

Du kannst einen Vault überall dort erstellen, wo es dein Betriebssystem erlaubt. Obsidian synchronisiert mit [[Einführung in Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git und vielen anderen Drittanbieter-Diensten.

Du kannst mehrere Ordner als einzelne Vaults öffnen, um beispielsweise Notizen für Arbeit und Studium zu trennen.

> [!warning] Vaults innerhalb von Vaults
> Da [[Interne Links]] lokal zu einem Vault sind, empfehlen wir, keine Vaults innerhalb von Vaults zu erstellen. Links werden möglicherweise nicht korrekt aktualisiert.

## Vault-Einstellungen

Obsidian erstellt einen `.obsidian` [[Konfigurationsordner]] im Stammordner des Vaults, der vault-spezifische Einstellungen enthält, wie [[Tastenkürzel|Tastenkürzel]], [[Themen|Themen]] und [[Community-Erweiterungen]].

Standardmäßig verbergen die meisten Betriebssysteme Ordner, die mit einem Punkt (`.`) beginnen. Möglicherweise musst du die Einstellungen deines Dateimanagers anpassen, um sie zu sehen.

- **macOS**: Drücke im Finder `Cmd+Shift+.` (Punkt), um nicht sichtbare Dateien anzuzeigen.
- **Windows**: [Versteckte Dateien anzeigen](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** In den meisten Dateimanagern drücke `Strg + H`, um nicht sichtbare Dateien anzuzeigen.

> [!tip] `.obsidian` zu Git hinzufügen
> Die Dateien `.obsidian/workspace.json` und `.obsidian/workspaces.json` speichern das aktuelle Workspace-Layout und werden bei jedem Öffnen einer neuen Datei aktualisiert. Wenn du [Git](https://git-scm.com) zur Verwaltung deines Vaults verwendest, solltest du diese Dateien zu `.gitignore` hinzufügen.

## Globale Einstellungen

Obsidian speichert globale Einstellungen in einem Systemordner. Der Speicherort des Systemordners hängt vom verwendeten Betriebssystem ab.

- **macOS**: `/Users/deinbenutzername/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` oder `~/.config/obsidian/`

> [!warning] Erstelle keinen Vault im Systemordner. Dies kann zu beschädigten Daten oder Datenverlust führen.

## IndexedDB

IndexedDB ist eine clientseitige Low-Level-Datenbank, die Obsidian als Backend-Speicher verwendet. Sie hilft dabei, den Zustand von [[Einführung in Obsidian Sync|Obsidian Sync]]-Verbindungen aufrechtzuerhalten und den [[#Metadaten-Cache]] zu bewahren, wenn die App geschlossen wird.

> [!warning] Wenn Apples [Blockierungsmodus](<https://support.apple.com/en-us/105120>) aktiviert ist und Obsidian nicht ausgenommen wurde, werden diese Datenbankdateien nicht gespeichert, sodass bei jedem Start der App eine Neuindizierung erforderlich ist.

### Metadaten-Cache

Um ein schnelles Erlebnis bei der Nutzung der App zu gewährleisten, pflegt Obsidian eine lokale Aufzeichnung der Metadaten über die Dateien in deinem Vault, den sogenannten **Metadaten-Cache**. Diese Metadaten werden für viele Funktionen in der App genutzt, von der Diagrammansicht bis zur Gliederungsansicht.

Obsidian hält diesen Cache mit den Dateien in deinem Vault synchron, aber es ist möglich, dass die Daten nicht mehr mit den zugrunde liegenden Dateien übereinstimmen. Sollte dies bei deinem Vault auftreten, kannst du deinen Metadaten-Cache in den App-Einstellungen im Abschnitt *Dateien & Links* zurücksetzen.
