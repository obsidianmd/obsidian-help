---
permalink: cli
description: Alles, was du in Obsidian tun kannst, lässt sich auch über die Befehlszeile erledigen.
---
Obsidian CLI ist eine Befehlszeilenschnittstelle, mit der du Obsidian von deinem Terminal aus steuern kannst – für Skripte, Automatisierung und Integration mit externen Werkzeugen.

Alles, was du in Obsidian tun kannst, lässt sich auch über die Befehlszeile erledigen. Obsidian CLI enthält sogar [[#Entwicklerbefehle|Entwicklerbefehle]], um auf Entwicklerwerkzeuge zuzugreifen, Elemente zu inspizieren, Screenshots zu erstellen, Erweiterungen neu zu laden und mehr.

![[obsidian-cli.mp4#interface]]

> [!warning] Erfordert Obsidian 1.12 Installationsprogramm
> Die Nutzung der CLI erfordert das Obsidian 1.12 Installationsprogramm. Siehe die [[Obsidian aktualisieren#Installer-Aktualisierungen|Anleitung zur Aktualisierung des Installationsprogramms]].

## Obsidian CLI installieren

Aktualisiere auf die neueste [[Obsidian aktualisieren|Obsidian-Installationsversion]] (1.11.7) und die neueste [[Vorabversionen|Vorabversion]] (1.12.x).

Aktiviere Obsidian CLI in Obsidian:

1. Gehe zu **Einstellungen** → **Allgemein**.
2. Aktiviere **Befehlszeilenschnittstelle**.
3. Folge der Aufforderung, um Obsidian CLI zu registrieren.

Falls du Probleme bei der Installation von Obsidian CLI hast, siehe [[#Fehlerbehebung]].

## Erste Schritte

Obsidian CLI unterstützt sowohl einzelne Befehle als auch eine Terminal-Benutzeroberfläche (TUI) mit interaktiver Hilfe und Autovervollständigung.

> [!info] Obsidian-App muss laufen
> Obsidian CLI erfordert, dass die Obsidian-App läuft. Wenn Obsidian nicht läuft, startet der erste Befehl, den du ausführst, Obsidian.
>
> Du möchtest ohne die Desktop-App synchronisieren? Siehe [[Obsidian Headless|Obsidian Headless]].

### Einen Befehl ausführen

Führe einen einzelnen Befehl aus, ohne die TUI zu öffnen:

```shell
# Hilfe-Befehl ausführen
obsidian help
```

### Die Terminal-Oberfläche verwenden

Verwende die TUI, indem du `obsidian` eingibst. Nachfolgende Befehle können ohne `obsidian` eingegeben werden.

```shell
# TUI öffnen, dann Hilfe aufrufen
obsidian
help
```

Die TUI unterstützt Autovervollständigung, Befehlsverlauf und Rückwärtssuche. Verwende `Ctrl+R`, um deinen Befehlsverlauf zu durchsuchen. Siehe [[#Tastenkürzel]] für alle verfügbaren Kürzel.

## Beispiele

Hier sind einige Beispiele, was Obsidian CLI leisten kann.

### Alltägliche Nutzung

```shell
# Heutige Tagesnotiz öffnen
obsidian daily

# Eine Aufgabe zur Tagesnotiz hinzufügen
obsidian daily:append content="- [ ] Einkaufen gehen"

# Vault durchsuchen
obsidian search query="Besprechungsnotizen"

# Aktive Datei lesen
obsidian read

# Alle Aufgaben aus der Tagesnotiz auflisten
obsidian tasks daily

# Neue Notiz aus einer Vorlage erstellen
obsidian create name="Reise nach Paris" template=Reise

# Alle Tags im Vault mit Anzahl auflisten
obsidian tags counts

# Zwei Versionen einer Datei vergleichen
obsidian diff file=README from=1 to=3
```

### Für Entwickler

Viele [[#Entwicklerbefehle]] stehen für die Plugin- und Theme-Entwicklung zur Verfügung. Diese Befehle ermöglichen es agentischen Programmierwerkzeugen, automatisch zu testen und zu debuggen.

```shell
# Entwicklerwerkzeuge öffnen
obsidian devtools

# Eine Community-Erweiterung neu laden, die du entwickelst
obsidian plugin:reload id=my-plugin

# Screenshot der App erstellen
obsidian dev:screenshot path=screenshot.png

# JavaScript in der App-Konsole ausführen
obsidian eval code="app.vault.getFiles().length"
```

## Anleitungen

### Parameter und Flags verwenden

Befehle können **Parameter** und **Flags** verwenden. Die meisten Befehle erfordern keine Parameter oder Flags. Erforderliche Parameter sind als `required` gekennzeichnet. Zum Beispiel:

```shell
# Neue Notiz mit dem Standard-Namen "Unbenannt" erstellen
obsidian create
```

Ein **Parameter** nimmt einen Wert an, geschrieben als `parameter=wert`. Wenn der Wert Leerzeichen enthält, setze ihn in Anführungszeichen:

```shell
# Neue Notiz namens "Notiz" mit Inhalt "Hallo Welt" erstellen
obsidian create name=Notiz content="Hallo Welt"
```

Ein **Flag** ist ein boolescher Schalter ohne Wert. Füge ihn hinzu, um ihn zu aktivieren, zum Beispiel sind `open` und `overwrite` Flags:

```shell
# Notiz erstellen und öffnen
obsidian create name=Notiz content="Hallo" open overwrite
```

Für mehrzeiligen Inhalt verwende `\n` für Zeilenumbruch. Verwende `\t` für Tabulator.

```bash
obsidian create name=Notiz content="# Titel\n\nFließtext"
```

### Einen Vault auswählen

Wenn das aktuelle Arbeitsverzeichnis deines Terminals ein Vault-Ordner ist, wird dieser Vault standardmäßig verwendet. Andernfalls wird der aktuell aktive Vault verwendet.

Verwende `vault=<name>` oder `vault=<id>`, um einen bestimmten Vault auszuwählen. Dies muss der erste Parameter vor deinem Befehl sein:

```shell
obsidian vault=Notizen daily
obsidian vault="Mein Vault" search query="test"
```

In der TUI verwende `vault:open <name>` oder `<id>`, um zu einem anderen Vault zu wechseln.

### Eine Datei auswählen

Viele Befehle akzeptieren `file`- und `path`-Parameter, um eine bestimmte Datei auszuwählen. Wenn keiner angegeben wird, verwendet der Befehl standardmäßig die aktive Datei.

- `file=<name>` löst die Datei mit derselben Linkauflösung wie [[Interne Links|Wiki-Links]] auf, wobei nach Dateinamen ohne vollständigen Pfad oder Erweiterung gesucht wird.
- `path=<pfad>` erfordert den exakten Pfad vom Vault-Stammverzeichnis, z. B. `ordner/notiz.md`.

```shell
# Diese sind gleichwertig, wenn "Rezept.md" die einzige Datei mit diesem Namen ist
obsidian read file=Rezept
obsidian read path="Vorlagen/Rezept.md"
```

### Ausgabe kopieren

Füge `--copy` zu einem beliebigen Befehl hinzu, um die Ausgabe in die Zwischenablage zu kopieren:

```shell
read --copy
search query="TODO" --copy
```


## Allgemeine Befehle

### `help`

Zeigt eine Liste aller verfügbaren Befehle an.

| Parameter   | Beschreibung                                |
| ----------- | ------------------------------------------- |
| `<command>` | Zeigt Hilfe für einen bestimmten Befehl an. |

### `version`

Zeigt die Obsidian-Version an.

### `reload`

Lädt das App-Fenster neu.

### `restart`

Startet die App neu.


## Basen

Befehle für [[Einführung in Bases|Bases]].

### `bases`

Listet alle `.base`-Dateien im Vault auf.

### `base:views`

Listet Ansichten in der aktuellen Basis-Datei auf.

### `base:create`

Erstellt ein neues Element in einer Basis. Verwendet standardmäßig die aktive Basis-Ansicht, wenn keine Datei angegeben wird.

```bash
file=<name>        # Basis-Dateiname
path=<pfad>        # Basis-Dateipfad
view=<name>        # Ansichtsname
name=<name>        # neuer Dateiname
content=<text>     # anfänglicher Inhalt

open               # Datei nach Erstellung öffnen
newtab             # in neuem Tab öffnen
```

### `base:query`

Fragt eine Basis ab und gibt Ergebnisse zurück.

```bash
file=<name>                    # Basis-Dateiname
path=<pfad>                    # Basis-Dateipfad
view=<name>                    # abzufragender Ansichtsname
format=json|csv|tsv|md|paths   # Ausgabeformat (Standard: json)
```

## Lesezeichen

Befehle für [[Lesezeichen]].

### `bookmarks`

Listet Lesezeichen auf.

```bash
total              # gibt die Lesezeichen-Anzahl zurück
verbose            # schließt Lesezeichen-Typen ein
format=json|tsv|csv  # Ausgabeformat (Standard: tsv)
```

### `bookmark`

Fügt ein Lesezeichen hinzu.

```bash
file=<pfad>        # Datei als Lesezeichen setzen
subpath=<unterpfad>  # Unterpfad (Überschrift oder Block) innerhalb der Datei
folder=<pfad>      # Ordner als Lesezeichen setzen
search=<abfrage>   # Suchabfrage als Lesezeichen setzen
url=<url>          # URL als Lesezeichen setzen
title=<titel>      # Lesezeichen-Titel
```

## Befehlspalette

Befehle für [[Befehlspalette]] und [[Tastenkürzel]]. Dies umfasst alle von Erweiterungen registrierten Befehle.

### `commands`

Listet verfügbare Befehls-IDs auf.

```bash
filter=<präfix>    # nach ID-Präfix filtern
```

### `command`

Führt einen Obsidian-Befehl aus.

```bash
id=<befehls-id>    # (erforderlich) auszuführende Befehls-ID
```

### `hotkeys`

Listet Tastenkürzel für alle Befehle auf.

```bash
total              # gibt die Tastenkürzel-Anzahl zurück
verbose            # zeigt an, ob Tastenkürzel benutzerdefiniert ist
format=json|tsv|csv  # Ausgabeformat (Standard: tsv)
```

### `hotkey`

Gibt das Tastenkürzel für einen Befehl zurück.

```bash
id=<befehls-id>    # (erforderlich) Befehls-ID

verbose            # zeigt ob benutzerdefiniert oder Standard
```

## Tägliche Notizen

Befehle für [[Tägliche Notizen]].

### `daily`

Öffnet die Tagesnotiz.

```bash
paneType=tab|split|window    # Fensterbereich-Typ zum Öffnen
```

### `daily:path`

Gibt den Pfad der Tagesnotiz zurück. Gibt den erwarteten Pfad auch zurück, wenn die Datei noch nicht erstellt wurde.

### `daily:read`

Liest den Inhalt der Tagesnotiz.

### `daily:append`

Hängt Inhalt an die Tagesnotiz an.

```bash
content=<text>     # (erforderlich) anzuhängender Inhalt
paneType=tab|split|window    # Fensterbereich-Typ zum Öffnen

inline             # ohne Zeilenumbruch anhängen
open               # Datei nach dem Hinzufügen öffnen
```

### `daily:prepend`

Stellt Inhalt der Tagesnotiz voran.

```bash
content=<text>     # (erforderlich) voranzustellender Inhalt
paneType=tab|split|window    # Fensterbereich-Typ zum Öffnen

inline             # ohne Zeilenumbruch voranstellen
open               # Datei nach dem Hinzufügen öffnen
```

## Dateiverlauf

### `diff`

Listet oder vergleicht Versionen aus der lokalen [[Datenwiederherstellung]] und [[Einführung in Obsidian Sync|Sync]]. Versionen werden von der neuesten zur ältesten nummeriert.

```bash
file=<name>          # Dateiname
path=<pfad>          # Dateipfad
from=<n>             # Versionsnummer zum Vergleichen ab
to=<n>               # Versionsnummer zum Vergleichen bis
filter=local|sync    # nach Versionsquelle filtern
```

**Beispiele:**

```shell
# Alle Versionen der aktiven Datei auflisten
diff

# Alle Versionen einer bestimmten Datei auflisten
diff file=Rezept

# Die neueste Version mit der aktuellen Datei vergleichen
diff file=Rezept from=1

# Zwei Versionen vergleichen
diff file=Rezept from=2 to=1

# Nur Sync-Versionen anzeigen
diff filter=sync
```

### `history`

Listet Versionen nur aus der [[Datenwiederherstellung]] auf. Siehe [[#Sync|sync:history]] für den entsprechenden Sync-Befehl.

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
```

### `history:list`

Listet alle Dateien mit lokalem Verlauf auf.

### `history:read`

Liest eine lokale Verlaufsversion.

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
version=<n>        # Versionsnummer (Standard: 1)
```

### `history:restore`

Stellt eine lokale Verlaufsversion wieder her.

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
version=<n>        # (erforderlich) Versionsnummer
```

### `history:open`

Öffnet die Datenwiederherstellung.

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
```

## Dateien und Ordner

### `file`

Zeigt Dateiinformationen an (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
```

Beispiel:

```
path       Notizen/Rezept.md
name       Rezept
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Listet Dateien im Vault auf.

```bash
folder=<pfad>      # nach Ordner filtern
ext=<erweiterung>  # nach Erweiterung filtern

total              # gibt die Dateianzahl zurück
```

### `folder`

Zeigt Ordnerinformationen an.

```bash
path=<pfad>              # (erforderlich) Ordnerpfad
info=files|folders|size  # nur bestimmte Information zurückgeben
```

### `folders`

Listet Ordner im Vault auf.

```bash
folder=<pfad>      # nach übergeordnetem Ordner filtern

total              # gibt die Ordneranzahl zurück
```

### `open`

Öffnet eine Datei.

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad

newtab             # in neuem Tab öffnen
```

### `create`

Erstellt oder überschreibt eine Datei.

```bash
name=<name>        # Dateiname
path=<pfad>        # Dateipfad
content=<text>     # anfänglicher Inhalt
template=<name>    # zu verwendende Vorlage

overwrite          # überschreiben, falls Datei existiert
open               # Datei nach Erstellung öffnen
newtab             # in neuem Tab öffnen
```

### `read`

Liest Dateiinhalte (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
```

### `append`

Hängt Inhalt an eine Datei an (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
content=<text>     # (erforderlich) anzuhängender Inhalt

inline             # ohne Zeilenumbruch anhängen
```

### `prepend`

Stellt Inhalt nach dem Frontmatter voran (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
content=<text>     # (erforderlich) voranzustellender Inhalt

inline             # ohne Zeilenumbruch voranstellen
```

### `move`

Verschiebt oder benennt eine Datei um (Standard: aktive Datei). Dies aktualisiert automatisch [[Interne Links]], wenn dies in deinen [[Einstellungen#Interne Links automatisch aktualisieren|Vault-Einstellungen]] aktiviert ist.

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
to=<pfad>          # (erforderlich) Zielordner oder -pfad
```

### `rename`

Benennt eine Datei um (Standard: aktive Datei). Die Dateierweiterung wird automatisch beibehalten, wenn sie im neuen Namen weggelassen wird. Verwende [[#`move`|move]], um eine Datei gleichzeitig umzubenennen und zu verschieben. Dies aktualisiert automatisch [[Interne Links]], wenn dies in deinen [[Einstellungen#Interne Links automatisch aktualisieren|Vault-Einstellungen]] aktiviert ist.

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
name=<name>        # (erforderlich) neuer Dateiname
```

### `delete`

Löscht eine Datei (Standard: aktive Datei, standardmäßig in den Papierkorb).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad

permanent          # Papierkorb überspringen, endgültig löschen
```

## Links

Befehle für [[Rückverweise]] und [[Ausgehende Links]].

### `backlinks`

Listet Rückverweise zu einer Datei auf (Standard: aktive Datei).

```bash
file=<name>        # Zieldateiname
path=<pfad>        # Zieldateipfad

counts             # Linkanzahl einbeziehen
total              # gibt die Rückverweisanzahl zurück
format=json|tsv|csv  # Ausgabeformat (Standard: tsv)
```

### `links`

Listet ausgehende Links einer Datei auf (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad

total              # gibt die Linkanzahl zurück
```

### `unresolved`

Listet unaufgelöste Links im Vault auf.

```bash
total              # gibt die Anzahl unaufgelöster Links zurück
counts             # Linkanzahl einbeziehen
verbose            # Quelldateien einbeziehen
format=json|tsv|csv  # Ausgabeformat (Standard: tsv)
```

### `orphans`

Listet Dateien ohne eingehende Links auf.

```bash
total              # gibt die Anzahl verwaister Dateien zurück
```

### `deadends`

Listet Dateien ohne ausgehende Links auf.

```bash
total              # gibt die Anzahl der Sackgassen zurück
```

## Gliederung

Befehle für [[Gliederung]].

### `outline`

Zeigt Überschriften der aktuellen Datei an.

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
format=tree|md|json  # Ausgabeformat (Standard: tree)

total              # gibt die Überschriftenanzahl zurück
```

## Erweiterungen

Befehle für [[Obsidian-Erweiterungen]] und [[Community-Erweiterungen]].

### `plugins`

Listet installierte Erweiterungen auf.

```bash
filter=core|community  # nach Erweiterungstyp filtern

versions               # Versionsnummern einbeziehen
format=json|tsv|csv    # Ausgabeformat (Standard: tsv)
```

### `plugins:enabled`

Listet aktivierte Erweiterungen auf.

```bash
filter=core|community  # nach Erweiterungstyp filtern

versions               # Versionsnummern einbeziehen
format=json|tsv|csv    # Ausgabeformat (Standard: tsv)
```

### `plugins:restrict`

Wechselt den eingeschränkten Modus oder prüft ihn.

```bash
on                 # eingeschränkten Modus aktivieren
off                # eingeschränkten Modus deaktivieren
```

### `plugin`

Gibt Erweiterungsinformationen zurück.

```bash
id=<plugin-id>     # (erforderlich) Erweiterungs-ID
```

### `plugin:enable`

Aktiviert eine Erweiterung.

```bash
id=<id>                # (erforderlich) Erweiterungs-ID
filter=core|community  # Erweiterungstyp
```

### `plugin:disable`

Deaktiviert eine Erweiterung.

```bash
id=<id>                # (erforderlich) Erweiterungs-ID
filter=core|community  # Erweiterungstyp
```

### `plugin:install`

Installiert eine Community-Erweiterung.

```bash
id=<id>            # (erforderlich) Erweiterungs-ID

enable             # nach Installation aktivieren
```

### `plugin:uninstall`

Deinstalliert eine Community-Erweiterung.

```bash
id=<id>            # (erforderlich) Erweiterungs-ID
```

### `plugin:reload`

Lädt eine Erweiterung neu (für Entwickler).

```bash
id=<id>            # (erforderlich) Erweiterungs-ID
```

## Eigenschaften

Befehle für [[Eigenschaften]].

### `aliases`

Listet Aliasse im Vault auf. Verwende `active` oder `file`/`path`, um Aliasse für eine bestimmte Datei anzuzeigen.

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad

total              # gibt die Alias-Anzahl zurück
verbose            # Dateipfade einbeziehen
active             # Aliasse der aktiven Datei anzeigen
```

### `properties`

Listet Eigenschaften im Vault auf. Verwende `active` oder `file`/`path`, um Eigenschaften für eine bestimmte Datei anzuzeigen.

```bash
file=<name>        # Eigenschaften für Datei anzeigen
path=<pfad>        # Eigenschaften für Pfad anzeigen
name=<name>        # Anzahl einer bestimmten Eigenschaft abrufen
sort=count         # nach Anzahl sortieren (Standard: name)
format=yaml|json|tsv  # Ausgabeformat (Standard: yaml)

total              # gibt die Eigenschaftenanzahl zurück
counts             # Vorkommensanzahl einbeziehen
active             # Eigenschaften der aktiven Datei anzeigen
```

### `property:set`

Setzt eine Eigenschaft für eine Datei (Standard: aktive Datei).

```bash
name=<name>                                    # (erforderlich) Eigenschaftsname
value=<wert>                                   # (erforderlich) Eigenschaftswert
type=text|list|number|checkbox|date|datetime   # Eigenschaftentyp
file=<name>                                    # Dateiname
path=<pfad>                                    # Dateipfad
```

### `property:remove`

Entfernt eine Eigenschaft von einer Datei (Standard: aktive Datei).

```bash
name=<name>        # (erforderlich) Eigenschaftsname
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
```

### `property:read`

Liest einen Eigenschaftswert aus einer Datei (Standard: aktive Datei).

```bash
name=<name>        # (erforderlich) Eigenschaftsname
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
```

## Publish

Befehle für [[Einführung in Obsidian Publish|Obsidian Publish]].

### `publish:site`

Zeigt Informationen zur Publish-Website an (Slug, URL).

### `publish:list`

Listet veröffentlichte Dateien auf.

```bash
total              # gibt die Anzahl veröffentlichter Dateien zurück
```

### `publish:status`

Listet Publish-Änderungen auf.

```bash
total              # gibt die Änderungsanzahl zurück
new                # nur neue Dateien anzeigen
changed            # nur geänderte Dateien anzeigen
deleted            # nur gelöschte Dateien anzeigen
```

### `publish:add`

Veröffentlicht eine Datei oder alle geänderten Dateien (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad

changed            # alle geänderten Dateien veröffentlichen
```

### `publish:remove`

Hebt die Veröffentlichung einer Datei auf (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
```

### `publish:open`

Öffnet eine Datei auf der veröffentlichten Website (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
```

## Zufällige Notizen

Befehle für [[Zufällige Notiz]].

### `random`

Öffnet eine zufällige Notiz.

```bash
folder=<pfad>      # auf Ordner beschränken

newtab             # in neuem Tab öffnen
```

### `random:read`

Liest eine zufällige Notiz (einschließlich Pfad).

```bash
folder=<pfad>      # auf Ordner beschränken
```

## Suche

Befehle für [[Suchen]].

### `search`

Durchsucht den Vault nach Text. Gibt passende Dateipfade zurück.

```bash
query=<text>       # (erforderlich) Suchabfrage
path=<ordner>      # auf Ordner beschränken
limit=<n>          # maximale Dateien
format=text|json   # Ausgabeformat (Standard: text)

total              # gibt die Trefferanzahl zurück
case               # Großschreibung beachten
```

### `search:context`

Suche mit passendem Zeilenkontext. Gibt grep-artige `pfad:zeile: text`-Ausgabe zurück.

```bash
query=<text>       # (erforderlich) Suchabfrage
path=<ordner>      # auf Ordner beschränken
limit=<n>          # maximale Dateien
format=text|json   # Ausgabeformat (Standard: text)

case               # Großschreibung beachten
```

### `search:open`

Öffnet die Suchansicht.

```bash
query=<text>       # initiale Suchabfrage
```

## Sync

Befehle für [[Einführung in Obsidian Sync|Obsidian Sync]].

> [!tip] Ohne Desktop-App synchronisieren
> Diese Befehle steuern Sync innerhalb der laufenden Obsidian-App. Um Vaults über die Befehlszeile ohne die Desktop-App zu synchronisieren, siehe [[Headless Sync]].

### `sync`

Sync anhalten oder fortsetzen.

```bash
on                 # Sync fortsetzen
off                # Sync anhalten
```

### `sync:status`

Zeigt Sync-Status und Nutzung an.

### `sync:history`

Listet den Sync-Versionsverlauf für eine Datei auf (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad

total              # gibt die Versionsanzahl zurück
```

### `sync:read`

Liest eine Sync-Version (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
version=<n>        # (erforderlich) Versionsnummer
```

### `sync:restore`

Stellt eine Sync-Version wieder her (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
version=<n>        # (erforderlich) Versionsnummer
```

### `sync:open`

Öffnet den Sync-Verlauf (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
```

### `sync:deleted`

Listet gelöschte Dateien in Sync auf.

```bash
total              # gibt die Anzahl gelöschter Dateien zurück
```

## Tags

Befehle für [[Tags]].

### `tags`

Listet Tags im Vault auf. Verwende `active` oder `file`/`path`, um Tags für eine bestimmte Datei anzuzeigen.

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
sort=count         # nach Anzahl sortieren (Standard: name)

total              # gibt die Tag-Anzahl zurück
counts             # Tag-Anzahl einbeziehen
format=json|tsv|csv  # Ausgabeformat (Standard: tsv)
active             # Tags der aktiven Datei anzeigen
```

### `tag`

Gibt Tag-Informationen zurück.

```bash
name=<tag>         # (erforderlich) Tag-Name

total              # gibt die Vorkommensanzahl zurück
verbose            # Dateiliste und Anzahl einbeziehen
```

## Aufgaben

Befehle für die Aufgabenverwaltung.

### `tasks`

Listet Aufgaben im Vault auf. Verwende `active` oder `file`/`path`, um Aufgaben für eine bestimmte Datei anzuzeigen.

```bash
file=<name>        # nach Dateiname filtern
path=<pfad>        # nach Dateipfad filtern
status="<zeichen>" # nach Statuszeichen filtern

total              # gibt die Aufgabenanzahl zurück
done               # erledigte Aufgaben anzeigen
todo               # unerledigte Aufgaben anzeigen
verbose            # nach Datei gruppieren mit Zeilennummern
format=json|tsv|csv  # Ausgabeformat (Standard: text)
active             # Aufgaben der aktiven Datei anzeigen
daily              # Aufgaben aus der Tagesnotiz anzeigen
```

**Beispiele:**

```bash
# Alle Aufgaben im Vault auflisten
tasks

# Unerledigte Aufgaben im Vault auflisten
tasks todo

# Erledigte Aufgaben einer bestimmten Datei auflisten
tasks file=Rezept done

# Aufgaben der heutigen Tagesnotiz auflisten
tasks daily

# Aufgaben in der Tagesnotiz zählen
tasks daily total

# Aufgaben mit Dateipfaden und Zeilennummern auflisten
tasks verbose

# Nach benutzerdefiniertem Status filtern (Sonderzeichen in Anführungszeichen)
tasks 'status=?'
```

### `task`

Zeigt oder aktualisiert eine Aufgabe.

```bash
ref=<pfad:zeile>   # Aufgabenreferenz (pfad:zeile)
file=<name>        # Dateiname
path=<pfad>        # Dateipfad
line=<n>           # Zeilennummer
status="<zeichen>" # Statuszeichen setzen

toggle             # Aufgabenstatus umschalten
daily              # Tagesnotiz
done               # als erledigt markieren
todo               # als unerledigt markieren
```

**Beispiele:**

```bash
# Aufgabeninfo anzeigen
task file=Rezept line=8
task ref="Rezept.md:8"

# Aufgabenabschluss umschalten
task ref="Rezept.md:8" toggle

# Aufgabe in der Tagesnotiz umschalten
task daily line=3 toggle

# Aufgabenstatus setzen
task file=Rezept line=8 done      # → [x]
task file=Rezept line=8 todo      # → [ ]
task file=Rezept line=8 status=-  # → [-]
task daily line=3 done            # Aufgabe in der Tagesnotiz als erledigt markieren
```


## Vorlagen

Befehle für [[Vorlagen]].

### `templates`

Listet Vorlagen auf.

```bash
total              # gibt die Vorlagenanzahl zurück
```

### `template:read`

Liest den Vorlageninhalt.

```bash
name=<vorlage>     # (erforderlich) Vorlagenname
title=<titel>      # Titel für Variablenauflösung

resolve            # Vorlagenvariablen auflösen
```

### `template:insert`

Fügt eine Vorlage in die aktive Datei ein.

```bash
name=<vorlage>     # (erforderlich) Vorlagenname
```

**Hinweise:**
- Die Option `resolve` verarbeitet `{{date}}`-, `{{time}}`- und `{{title}}`-Variablen
- Verwende `create path=<pfad> template=<name>`, um eine Datei mit einer Vorlage zu erstellen

## Themen und Snippets

Befehle für [[Themen]] und [[CSS-Bausteine]].

### `themes`

Listet installierte Themen auf.

```bash
versions           # Versionsnummern einbeziehen
```

### `theme`

Zeigt das aktive Thema an oder gibt Informationen zurück.

```bash
name=<name>        # Themenname für Details
```

### `theme:set`

Setzt das aktive Thema.

```bash
name=<name>        # (erforderlich) Themenname (leer für Standard)
```

### `theme:install`

Installiert ein Community-Thema.

```bash
name=<name>        # (erforderlich) Themenname

enable             # nach Installation aktivieren
```

### `theme:uninstall`

Deinstalliert ein Thema.

```bash
name=<name>        # (erforderlich) Themenname
```

### `snippets`

Listet installierte CSS-Snippets auf.

### `snippets:enabled`

Listet aktivierte CSS-Snippets auf.

### `snippet:enable`

Aktiviert ein CSS-Snippet.

```bash
name=<name>        # (erforderlich) Snippet-Name
```

### `snippet:disable`

Deaktiviert ein CSS-Snippet.

```bash
name=<name>        # (erforderlich) Snippet-Name
```

## Eindeutige Notizen

Befehle für [[Eindeutige Notizen]].

### `unique`

Erstellt eine eindeutige Notiz.

```bash
name=<text>        # Notizname
content=<text>     # anfänglicher Inhalt
paneType=tab|split|window    # Fensterbereich-Typ zum Öffnen

open               # Datei nach Erstellung öffnen
```

## Vault

### `vault`

Zeigt Vault-Informationen an.

```bash
info=name|path|files|folders|size  # nur bestimmte Information zurückgeben
```

### `vaults`

Listet bekannte Vaults auf.

```bash
total              # gibt die Vault-Anzahl zurück
verbose            # Vault-Pfade einbeziehen
```

### `vault:open`

Wechselt zu einem anderen Vault (nur TUI).

```bash
name=<name>        # (erforderlich) Vault-Name
```

## Web-Viewer

Befehle für [[Web-Viewer]].

### `web`

Öffnet eine URL im Web-Viewer.

```bash
url=<url>          # (erforderlich) zu öffnende URL

newtab             # in neuem Tab öffnen
```

## Wortanzahl

Befehle für [[Anzahl der Wörter]].

### `wordcount`

Zählt Wörter und Zeichen (Standard: aktive Datei).

```bash
file=<name>        # Dateiname
path=<pfad>        # Dateipfad

words              # nur Wortanzahl zurückgeben
characters         # nur Zeichenanzahl zurückgeben
```

## Workspace

Befehle für [[Arbeitsbereich]] und die [[Arbeitsbereiche]]-Erweiterung.

### `workspace`

Zeigt den Workspace-Baum an.

```bash
ids                # Workspace-Element-IDs einbeziehen
```

### `workspaces`

Listet gespeicherte Workspaces auf.

```bash
total              # gibt die Workspace-Anzahl zurück
```

### `workspace:save`

Speichert das aktuelle Layout als Workspace.

```bash
name=<name>        # Workspace-Name
```

### `workspace:load`

Lädt einen gespeicherten Workspace.

```bash
name=<name>        # (erforderlich) Workspace-Name
```

### `workspace:delete`

Löscht einen gespeicherten Workspace.

```bash
name=<name>        # (erforderlich) Workspace-Name
```

### `tabs`

Listet geöffnete Tabs auf.

```bash
ids                # Tab-IDs einbeziehen
```

### `tab:open`

Öffnet einen neuen Tab.

```bash
group=<id>         # Tab-Gruppen-ID
file=<pfad>        # zu öffnende Datei
view=<typ>         # zu öffnender Ansichtstyp
```

### `recents`

Listet zuletzt geöffnete Dateien auf.

```bash
total              # gibt die Anzahl zuletzt geöffneter Dateien zurück
```

## Entwicklerbefehle

Befehle zur Entwicklung von [[Community-Erweiterungen]] und [[Themen]]. Erfahre mehr in der [Obsidian-Entwicklerdokumentation](https://docs.obsidian.md).

### `devtools`

Schaltet die Electron-Entwicklerwerkzeuge um.

### `dev:debug`

Verbindet/trennt den Chrome DevTools Protocol Debugger.

```bash
on                 # Debugger verbinden
off                # Debugger trennen
```

### `dev:cdp`

Führt einen Chrome DevTools Protocol Befehl aus.

```bash
method=<CDP.method>  # (erforderlich) aufzurufende CDP-Methode
params=<json>        # Methodenparameter als JSON
```

### `dev:errors`

Zeigt erfasste JavaScript-Fehler an.

```bash
clear              # Fehlerpuffer leeren
```

### `dev:screenshot`

Erstellt einen Screenshot (gibt Base64-PNG zurück).

```bash
path=<dateiname>   # Ausgabedateipfad
```

### `dev:console`

Zeigt erfasste Konsolennachrichten an.

```bash
limit=<n>                        # maximale Nachrichten (Standard: 50)
level=log|warn|error|info|debug  # nach Log-Level filtern

clear                            # Konsolenpuffer leeren
```

### `dev:css`

Inspiziert CSS mit Quellpositionen.

```bash
selector=<css>     # (erforderlich) CSS-Selektor
prop=<name>        # nach Eigenschaftsname filtern
```

### `dev:dom`

Fragt DOM-Elemente ab.

```bash
selector=<css>     # (erforderlich) CSS-Selektor
attr=<name>        # Attributwert abrufen
css=<eigenschaft>  # CSS-Eigenschaftswert abrufen

total              # gibt die Elementanzahl zurück
text               # Textinhalt zurückgeben
inner              # innerHTML statt outerHTML zurückgeben
all                # alle Treffer statt nur dem ersten zurückgeben
```

### `dev:mobile`

Schaltet die mobile Emulation um.

```bash
on                 # mobile Emulation aktivieren
off                # mobile Emulation deaktivieren
```

### `eval`

Führt JavaScript aus und gibt das Ergebnis zurück.

```bash
code=<javascript>  # (erforderlich) auszuführender JavaScript-Code
```

## Tastenkürzel

Diese Tastenkürzel sind in der [[#Die Terminal-Oberfläche verwenden|TUI]] verfügbar.

### Navigation

| Aktion                                                          | Tastenkürzel    |
| --------------------------------------------------------------- | --------------- |
| Cursor nach links bewegen                                       | `←` / `Ctrl+B` |
| Cursor nach rechts bewegen (akzeptiert Vorschlag am Zeilenende) | `→` / `Ctrl+F` |
| Zum Zeilenanfang springen                                       | `Ctrl+A`        |
| Zum Zeilenende springen                                         | `Ctrl+E`        |
| Ein Wort zurück bewegen                                         | `Alt+B`         |
| Ein Wort vorwärts bewegen                                       | `Alt+F`         |

### Bearbeitung

| Aktion                         | Tastenkürzel               |
| ------------------------------ | -------------------------- |
| Bis zum Zeilenanfang löschen   | `Ctrl+U`                   |
| Bis zum Zeilenende löschen     | `Ctrl+K`                   |
| Vorheriges Wort löschen        | `Ctrl+W` / `Alt+Backspace` |

### Autovervollständigung

| Aktion                                                   | Tastenkürzel |
| -------------------------------------------------------- | ------------ |
| Vorschlagsmodus betreten / ausgewählten Vorschlag annehmen | `Tab`        |
| Vorschlagsmodus verlassen                                | `Shift+Tab`  |
| Vorschlagsmodus betreten (bei neuer Eingabe)             | `↓`          |
| Ersten/ausgewählten Vorschlag annehmen (am Zeilenende)   | `→`          |

### Verlauf

| Aktion                                                              | Tastenkürzel    |
| ------------------------------------------------------------------- | --------------- |
| Vorheriger Verlaufseintrag / Vorschläge nach oben navigieren        | `↑` / `Ctrl+P` |
| Nächster Verlaufseintrag / Vorschläge nach unten navigieren         | `↓` / `Ctrl+N` |
| Rückwärtssuche im Verlauf (tippen zum Filtern, `Ctrl+R` zum Wechseln) | `Ctrl+R`        |

### Sonstiges

| Aktion                                                              | Tastenkürzel         |
| ------------------------------------------------------------------- | -------------------- |
| Befehl ausführen oder Vorschlag annehmen                            | `Enter`              |
| Autovervollständigung rückgängig / Vorschlagsmodus verlassen / Eingabe leeren | `Escape`             |
| Bildschirm leeren                                                   | `Ctrl+L`             |
| Beenden                                                             | `Ctrl+C` / `Ctrl+D` |

## Fehlerbehebung

Falls du Probleme beim Ausführen von Obsidian CLI hast:

- Stelle sicher, dass du die neueste [[Obsidian aktualisieren|Obsidian-Installationsversion]] (1.12.4 oder höher) verwendest.
- Starte dein Terminal nach der CLI-Registrierung neu, damit die PATH-Änderungen wirksam werden.
- Obsidian muss laufen. Die CLI verbindet sich mit der laufenden Obsidian-Instanz. Wenn Obsidian nicht läuft, sollte der erste CLI-Befehl die App starten.

### Windows

Obsidian CLI unter Windows erfordert das Obsidian 1.12.4+ Installationsprogramm. Siehe [[Obsidian aktualisieren|Installationsversion aktualisieren]].

Windows verwendet einen Terminal-Redirector, der Obsidian korrekt mit stdin/stdout verbindet. Dies ist notwendig, da Obsidian normalerweise als GUI-App läuft, die mit Terminal-Ausgaben unter Windows inkompatibel ist. Wenn du Obsidian 1.12.4+ installierst, wird der Terminal-Redirector `Obsidian.com` im Ordner hinzugefügt, in dem du die Datei `Obsidian.exe` installiert hast.

### macOS

Die CLI-Registrierung fügt das Obsidian-Binärverzeichnis über `~/.zprofile` zu deinem PATH hinzu. Falls du Probleme hast, überprüfe Folgendes:

Deine `~/.zprofile`-Datei sollte die folgende Zeile enthalten. Falls sie fehlt, kannst du sie manuell hinzufügen:

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### Alternative Shells

Die CLI-Registrierung ändert nur `~/.zprofile`, das von zsh (der Standard-macOS-Shell) verwendet wird. Wenn du eine andere Shell verwendest, füge das Obsidian-Binärverzeichnis manuell zur Konfigurationsdatei deiner Shell hinzu:

- Bash: füge `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` zu `~/.bash_profile` hinzu
- Fish: führe `fish_add_path /Applications/Obsidian.app/Contents/MacOS` aus


### Linux

Die CLI-Registrierung erstellt einen symbolischen Link unter `/usr/local/bin/obsidian`, der auf die Obsidian-Binärdatei zeigt (erfordert sudo).

#### AppImage

Bei AppImage-Installationen zeigt der symbolische Link auf die `.AppImage`-Datei statt auf die interne Binärdatei, da sich der Einhängepfad bei jedem Start ändert. Falls sudo fehlschlägt, wird der symbolische Link als Fallback unter `~/.local/bin/obsidian` erstellt. Falls du Probleme hast, überprüfe Folgendes:

Überprüfe, ob der symbolische Link existiert und auf die richtige Binärdatei zeigt:

```
ls -l /usr/local/bin/obsidian
```

Falls der symbolische Link fehlt, erstelle ihn manuell:

```
sudo ln -s /pfad/zu/obsidian /usr/local/bin/obsidian
```

Falls der symbolische Link stattdessen in `~/.local/bin/` erstellt wurde, stelle sicher, dass dieses Verzeichnis in deinem PATH ist. Füge Folgendes zu deiner `~/.bashrc` oder `~/.zshrc` hinzu:

```
export PATH="$PATH:$HOME/.local/bin"
```

Falls der symbolische Link nach dem Verschieben oder Umbenennen der `.AppImage`-Datei nicht mehr funktioniert, registriere die CLI erneut oder aktualisiere den symbolischen Link manuell.

#### Snap

Das Snap-Paket speichert Insider-Build-Daten in seinem eigenen Benutzerdatenverzeichnis. Falls die CLI das Insider-`.asar` nicht erkennt, setze `XDG_CONFIG_HOME` so, dass es auf den Snap-Konfigurationspfad zeigt:

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

Füge dies zu deiner `~/.bashrc` oder `~/.zshrc` hinzu, um es dauerhaft zu machen.


#### Flatpak

Obsidian versucht dies automatisch durchzuführen, aber nachfolgend findest du die manuellen Anweisungen. Bei einer Systeminstallation:

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

Bei einer Benutzerinstallation:

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
