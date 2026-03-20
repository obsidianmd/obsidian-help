---
permalink: sync/collaborate
publish: true
mobile: true
description: >-
  Diese Seite beschreibt, wie du mit anderen Obsidian Sync-Nutzern
  zusammenarbeiten kannst.
---
Mit [[Einführung in Obsidian Sync|Obsidian Sync]] kannst du mit deinem Team an einem gemeinsamen Vault zusammenarbeiten.

Alle Mitwirkenden müssen ein aktives Sync-Abonnement haben, um auf einen gemeinsamen Vault zugreifen zu können. Der Beitritt zu einem gemeinsamen Vault zählt nicht zum [[Häufig gestellte Fragen#Wie viele Remote-Tresore kann ich haben?|Vault-Limit]].

Wenn der Remote-Tresor [[Obsidian Sync/Sicherheit und Datenschutz|Ende-zu-Ende-verschlüsselt]] ist, müssen Mitwirkende das Passwort für Verschlüsselung eingeben, wenn sie den Vault einrichten.

## Nutzer verwalten

### Nutzer hinzufügen

Um einen Nutzer einzuladen, einen Remote-Tresor zu teilen:

1. Öffne die **[[Einstellungen]]**.
2. Wähle im Seitenmenü **Sync**.
3. Wähle neben **Remote-Tresor** die Option **Verwalten**.
4. Wähle neben dem Remote-Tresor, den du teilen möchtest, **Freigabe verwalten** ( ![[lucide-users.svg#icon]] ).
5. Gib unter **Nutzer einladen** die E-Mail des Nutzers ein, den du einladen möchtest.
6. Wähle **Hinzufügen**.

### Nutzer entfernen

1. Öffne die **[[Einstellungen]]**.
2. Wähle im Seitenmenü **Sync**.
3. Wähle neben **Remote-Tresor** die Option **Verwalten**.
4. Wähle neben dem Nutzer, dem du den Zugriff entziehen möchtest, **Nutzer entfernen** ( ![[lucide-x.svg#icon]] ).

## Mit deinem Team zusammenarbeiten

### Berechtigungen

Detaillierte Berechtigungen werden noch nicht unterstützt. Alle Mitwirkenden erhalten dieselben Berechtigungen wie der Vault-Eigentümer, mit einer Ausnahme: Nur der Vault-Eigentümer kann Mitwirkende einladen.

### Live-Bearbeitung

Gemeinsame Vaults ermöglichen es Teams, gemeinsam an einer Reihe von Dateien zu arbeiten. Obsidian unterstützt jedoch noch keine kollaborative Live-Bearbeitung derselben Datei. Du wirst den Cursor des anderen Nutzers nicht sehen, und dessen Änderungen erscheinen erst, wenn die Änderungen synchronisiert sind.

Wenn mehrere Nutzer gleichzeitig dieselbe Datei bearbeiten, werden die [[Obsidian Sync Fehlerbehebung#Konfliktlösung|Änderungen während des Synchronisierungsprozesses zusammengeführt]]. Änderungen können über die [[Versionsgeschichte]] eingesehen und wiederhergestellt werden.

![[version-history-collaboration.png]]^version-history-image

## Einschränkungen

Beachte, dass Obsidian Sync [[Häufig gestellte Fragen|Einschränkungen]] hat, die dein Team betreffen können:

- Die maximale Anzahl von Mitwirkenden in einem gemeinsamen Vault beträgt 20 Nutzer.
- Die maximale Dateigröße für Anhänge hängt vom [[Tarife und Speicherlimits|Tarif]] deines Remote-Tresor-Hosts ab, wobei 5 MB für den Standard-Tarif und 200 MB für den Plus-Tarif gelten.

Erfahre mehr über [[Sync für Teams]].
