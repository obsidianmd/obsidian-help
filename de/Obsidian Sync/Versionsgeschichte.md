---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian Sync führt ein Protokoll aller Änderungen an deinen Notizen und prüft regelmäßig auf Aktualisierungen, wobei neue Versionen deiner Notizen erstellt werden.
---
[[Einführung in Obsidian Sync|Obsidian Sync]] prüft regelmäßig auf Aktualisierungen deiner [[Sync-Einstellungen und selektive Synchronisierung|synchronisierten Dateien]] und führt ein Protokoll aller Änderungen. Diese werden als neue Einträge im [[#Versionsverlauf]] gespeichert. Diese Informationen können auf verschiedene Arten abgerufen werden:

- [[#Synchronisierungsverlauf]]
- [[#Versionsverlauf]]

Obwohl nicht Teil von Obsidian Sync, ist auf jedem Gerät auch ein lokaler Versionsverlauf verfügbar, wenn die Erweiterung [[Datenwiederherstellung]] aktiviert ist.

## Synchronisierungsverlauf

Die Funktion Synchronisierungsverlauf (oder Sync-Seitenleiste), eingeführt in Obsidian Version 1.7, ermöglicht es dir, kürzlich erstellte oder geänderte Notizen und Anhänge, die synchronisiert wurden, schnell einzusehen. Du kannst sie auch als _Bearbeitungs_-Verlauf betrachten.

In der Seitenleiste kannst du ein Element auswählen, um dessen Datei in deinem aktiven Fenster zu öffnen. Die Elemente haben auch Kontextmenüs, über die du Aktionen wie das Verschieben der Datei oder das Anzeigen ihres [[#Notizen und Anhänge|Versionsverlaufs]] ausführen kannst.

> [!compatibility] Nur für Desktop verfügbar
> Wenn du in der Seitenleiste über eine synchronisierte Datei fährst, kannst du sehen, wer die Datei zuletzt bearbeitet hat. Dies ist besonders nützlich, wenn du an einem gemeinsamen Vault [[An einem gemeinsamen Tresor zusammenarbeiten|zusammenarbeitest]].

> [!tip] 
> Einstellungen und gelöschte Elemente werden nicht in der Seitenleiste des Synchronisierungsverlaufs angezeigt. Diese findest du stattdessen im [[#Notizen und Anhänge|Versionsverlauf]].

### Synchronisierungsverlauf anzeigen

Wenn du die integrierte Erweiterung [[Einführung in Obsidian Sync|Sync]] aktivierst, wird der Synchronisierungsverlauf automatisch aktiviert, erscheint aber nicht standardmäßig in der Seitenleiste. Du musst ihn manuell über einen Befehl oder ein Tastenkürzel hinzufügen.

#### Über die Befehlspalette aktivieren

> [!info] Diese Option erfordert, dass die integrierte Erweiterung [[Befehlspalette]] aktiviert ist.

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Öffne die **Befehlspalette**. ( ![[lucide-terminal.svg#icon]] )
2. Gib „Sync" ein.
3. Wähle die Option „Sync: Synchronisierungsverlauf anzeigen".

Der Synchronisierungsverlauf erscheint dann in der [[Seitenleiste|rechten Seitenleiste]].

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]

1. Öffne die [[Menüband|Werkzeugleiste]] ( ![[lucide-menu.svg#icon]] ).
2. Öffne die **Befehlspalette**. ( ![[lucide-terminal.svg#icon]] )
3. Gib „Sync" ein.
4. Wähle die Option „Sync: Synchronisierungsverlauf anzeigen".

Der Synchronisierungsverlauf erscheint dann als Dropdown-Option in der [[Seitenleiste|rechten Seitenleiste]].

#### Über Tastenkürzel aktivieren

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Kategorie **Optionen** den Punkt **Tastenkürzel**.
3. Gib in der Suchleiste für Tastenkürzel „Sync" ein.
4. Weise neben „Sync: Synchronisierungsverlauf anzeigen" dein bevorzugtes Tastenkürzel zu.

## Versionsverlauf

Zusätzlich zum [[#Synchronisierungsverlauf]] pflegt Obsidian auch einen Versionsverlauf zur Wiederherstellung von Notizen und Anhängen. Wenn du versehentlich eine Notiz löschst oder zu einer früheren Version zurückkehren möchtest, kannst du sie aus dem Versionsverlauf wiederherstellen.

Die Aufbewahrungsdauer deines Versionsverlaufs hängt von deinem [[Tarife und Speicherlimits|Obsidian Sync-Tarif]] ab. Beim Standard-Tarif werden Notizen 1 Monat lang aufbewahrt, beim Plus-Tarif 12 Monate. Nach Ablauf dieses Zeitraums werden ältere Versionen deiner Notizen gelöscht.

Für [[Anhänge]] werden ältere Versionen <u>zwei Wochen</u> lang gespeichert.

![[An einem gemeinsamen Tresor zusammenarbeiten#^version-history-image]]

### Notizen und Anhänge

Der Vorgang zur Wiederherstellung von Notizen und Anhängen ist identisch.

#### Versionsverlauf einer Datei anzeigen

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. Wähle im **Dateiexplorer** die Notiz aus, die du wiederherstellen möchtest.
2. Wähle **Versionsverlauf öffnen**.
3. Wähle links die Version der Notiz aus, die du anzeigen möchtest. Der Inhalt wird rechts angezeigt.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. Wähle im **Dateiexplorer** die Notiz aus, die du wiederherstellen möchtest.
2. Halte lange gedrückt, um das Kontextmenü aufzurufen.
3. Wähle **Versionsverlauf öffnen**.
4. Wähle im Pop-up-Menü die Version der Notiz aus, die du anzeigen möchtest.
5. Nach der Auswahl steht der Inhalt der Notiz zur Überprüfung bereit.

#### Versionsverlauf einer gelöschten oder umbenannten Datei anzeigen

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste unter **Obsidian-Erweiterungen*** den Punkt **Sync**.
3. Wähle neben **Gelöschte Dateien** die Option **Anzeigen**.
4. Wähle die Notiz aus, deren Versionsverlauf du anzeigen möchtest.
5. Wähle im Pop-up des Versionsverlaufs links die Version der Notiz aus, die du anzeigen möchtest.

#### Eine frühere Version einer Datei wiederherstellen

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. Wähle im **Dateiexplorer** die Notiz aus, die du wiederherstellen möchtest.
2. Wähle **Versionsverlauf öffnen**.
3. Wähle links die Version der Notiz aus, die du wiederherstellen möchtest. Der Inhalt wird rechts angezeigt.
4. Wähle die Schaltfläche **Wiederherstellen**.
5. Der Notizinhalt wird durch die wiederhergestellte Version ersetzt.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. Wähle im **Dateiexplorer** die Notiz aus, die du wiederherstellen möchtest.
2. Halte lange gedrückt, um das Kontextmenü aufzurufen.
3. Wähle **Versionsverlauf öffnen**.
4. Wähle im Pop-up-Menü die Version der Notiz aus, die du wiederherstellen möchtest.
5. Nach der Auswahl steht der Inhalt der Notiz zur Überprüfung bereit.
6. Wähle die Schaltfläche **Wiederherstellen**.
7. Der Notizinhalt wird durch die wiederhergestellte Version ersetzt.

#### Eine gelöschte Datei wiederherstellen

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste unter **Obsidian-Erweiterungen*** den Punkt **Sync**.
3. Wähle neben **Gelöschte Dateien** die Option **Anzeigen**.
4. Wähle die Notiz aus, die du wiederherstellen möchtest.
5. Wähle in der Versionsliste links die Version aus, die du wiederherstellen möchtest.
6. Wähle rechts die Schaltfläche **Wiederherstellen**.
7. Die Notiz wird an ihrem ursprünglichen Speicherort im Dateisystem wiederhergestellt.

> [!tip] Du kannst mehrere Notizen mit **Mehrere wiederherstellen** auswählen, indem du die Kontrollkästchen aktivierst oder `Umschalt+Klick` verwendest. Diese Dateien können in diesem Menü nicht vorab überprüft werden.

### Einstellungsverlauf

Obsidian Sync verfolgt auch die Änderungen an deinen Vault-Konfigurationseinstellungen.

#### Versionsverlauf einer Einstellung anzeigen

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste unter **Obsidian-Erweiterungen*** den Punkt **Sync**.
3. Navigiere nach unten zu **Vault-Konfiguration synchronisieren**.
4. Wähle die Schaltfläche **Anzeigen** neben **[[Einstellungen]]-Versionsverlauf**.
5. Wähle im Pop-up **[[Einstellungen]]-Datei** eine Einstellungsdatei aus, die du anzeigen möchtest.

#### Eine frühere Version einer Einstellung wiederherstellen

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste unter **Obsidian-Erweiterungen** den Punkt **Sync**.
3. Navigiere nach unten zu **Vault-Konfiguration synchronisieren**.
4. Wähle die Schaltfläche **Anzeigen** neben **[[Einstellungen]]-Versionsverlauf**.
5. Wähle im Pop-up **[[Einstellungen]]-Datei** eine Einstellungsdatei aus, die du anzeigen möchtest.
6. Wähle im Änderungsfenster die Schaltfläche **Wiederherstellen**.
7. Lade Obsidian neu oder starte es neu, damit die Einstellung wirksam wird. Weitere Details findest du in den Anweisungen unter [[Obsidian Sync einrichten#Obsidian Sync-Einstellungen anpassen|Obsidian Sync-Einstellungen anpassen]].
