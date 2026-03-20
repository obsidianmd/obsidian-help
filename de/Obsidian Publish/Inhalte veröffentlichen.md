---
permalink: publish/publish
publish: true
mobile: true
description: 'Erfahre, wie du deine Inhalte mit Obsidian Publish veröffentlichst'
---
Diese Seite erklärt, wie du deine veröffentlichten Inhalte verwaltest. Um zu erfahren, wie du das Styling deiner Website anpasst, siehe [[Website anpassen]].

## Voraussetzungen

- Ein Obsidian-Konto. Falls du noch keines hast, [melde dich jetzt an](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Ein aktives Obsidian Publish-Abonnement. Falls du noch keines hast, abonniere es über dein [Konto-Dashboard](https://obsidian.md/account/publish).
- Die integrierte Erweiterung **Publish** ist [[Obsidian Publish einrichten#Obsidian Publish aktivieren|aktiviert]].
- Eine [[Websites verwalten#Neue Website erstellen|Publish-Website]] ist erstellt.

## Notizen veröffentlichen

1. Wähle in der **Werkzeugleiste** die Option **Änderungen veröffentlichen** (![[lucide-send.svg#icon]]).
2. Wähle im Dialog **Änderungen veröffentlichen** die Option **NEU**, um alle unveröffentlichten Notizen anzuzeigen.
3. Wähle die Notizen aus, die du veröffentlichen möchtest.
4. Wähle **Veröffentlichen**.

## Notizen zurückziehen

Notizen bleiben in deinem lokalen Vault, auch nachdem du sie zurückgezogen hast.

1. Wähle in der **Werkzeugleiste** die Option **Änderungen veröffentlichen** (![[lucide-send.svg#icon]]).
2. Wähle im Dialog **Änderungen veröffentlichen** die Option **UNVERÄNDERT**, um alle veröffentlichten Notizen anzuzeigen.
3. Wähle die Notizen aus, die du zurückziehen möchtest.
4. Wähle **Veröffentlichen**.

## Eine veröffentlichte Notiz aktualisieren

1. Wähle in der **Werkzeugleiste** die Option **Änderungen veröffentlichen** (![[lucide-send.svg#icon]]).
2. Wähle im Dialog **Änderungen veröffentlichen** die Option **GEÄNDERT**, um alle seit der letzten Veröffentlichung geänderten Notizen anzuzeigen.
3. Wähle die Notizen aus, die du aktualisieren möchtest.
4. Wähle **Veröffentlichen**.

> [!hint] Das Löschen umbenannter oder entfernter Notizen und Bilder aus Publish erfolgt in diesem Schritt. Du musst das Kontrollkästchen manuell aktivieren, um diese Daten zu löschen, da es aus Sicherheitsgründen nicht automatisch ausgewählt wird.

## Verknüpfte Daten veröffentlichen

Beim Veröffentlichen von Notizen, die Links zu anderen Notizen oder eingebettete Bilder enthalten, können defekte Links auftreten, wenn die verknüpften Notizen nicht ebenfalls veröffentlicht werden. **Obsidian Publish** hilft dies zu vermeiden, indem automatisch Medien ausgewählt werden, die von den bereits gewählten Notizen verlinkt sind.

Um alle verknüpften Notizen einzuschließen, wähle **Verlinkte hinzufügen** im Dialog **Änderungen veröffentlichen**.

Überprüfe vor dem Veröffentlichen die aktualisierte Auswahl, um sicherzustellen, dass keine Daten enthalten sind, die du noch nicht veröffentlichen möchtest.

> [!tip] Die Funktion **Verlinkte hinzufügen** berücksichtigt alle unter [[#Daten ignorieren]] definierten Ausschlüsse.

## Automatisch Daten zum Veröffentlichen auswählen

Setze `publish: true` in den [[Eigenschaften]] einer Notiz, um sie automatisch als neue oder geänderte Notiz zur Veröffentlichung einzuschließen.

Du kannst auch automatisch Notizen und verknüpfte Bilder in bestimmten Ordnern auswählen, indem du sie als **Enthaltene** Ordner hinzufügst:

1. Wähle in der **Werkzeugleiste** die Option **Änderungen veröffentlichen** (![[lucide-send.svg#icon]]) oder öffne die [[Befehlspalette]] und tippe **Publish: Änderungen veröffentlichen...**.
2. Wähle das Symbol **Publish-Filter verwalten** (![[lucide-filter.svg#icon]]).
3. Wähle im Abschnitt **Enthaltene Ordner** die Option **Verwalten**.
4. Wähle die Ordner aus, die du einschließen möchtest.
5. Der Ordner wird zur Liste der enthaltenen Ordner hinzugefügt.
6. Wähle **Fertig**, wenn du fertig bist.

### Daten ignorieren

Um eine Notiz in Obsidian Publish zu ignorieren, setze `publish: false` in den [[Eigenschaften]] der Notiz. Die Notiz erscheint dann nicht mehr in der Liste der zu veröffentlichenden Notizen.

Du kannst auch automatisch Notizen und Bilder in bestimmten Ordnern ignorieren, indem du sie als **Ausgeschlossene** Ordner hinzufügst:

1. Wähle in der **Werkzeugleiste** die Option **Änderungen veröffentlichen** (![[lucide-send.svg#icon]]) oder öffne die [[Befehlspalette]] und tippe **Publish: Änderungen veröffentlichen...**.
2. Wähle das Symbol **Publish-Filter verwalten** (![[lucide-filter.svg#icon]]).
3. Wähle im Abschnitt **Ausgeschlossene Ordner** die Option **Verwalten**.
4. Wähle die Ordner aus, die du ausschließen möchtest.
5. Der Ordner wird zur Liste der ausgeschlossenen Ordner hinzugefügt.
6. Wähle **Fertig**, wenn du fertig bist.

> [!note] `publish: true` überschreibt ausgeschlossene Ordner
> Wenn eine Datei `publish: true` gesetzt hat, wird sie trotzdem veröffentlicht, auch wenn sie sich in einem ausgeschlossenen Ordner oder Filter befindet. Das liegt daran, dass `publish: true` eine spezifischere Kontrolle bietet.
