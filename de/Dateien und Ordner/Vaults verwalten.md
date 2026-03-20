---
permalink: manage-vaults
---
Ein **Vault** ist ein Ordner in deinem Dateisystem, der deine Notizen, [[Anhänge]], und den [[Konfigurationsordner]] mit Obsidian-spezifischen Einstellungen enthält. Weitere Informationen zu Vaults findest du unter [[Wie Obsidian Daten speichert]].

Du kannst deine Vaults mit dem **Vault-Umschalter** verwalten. Das *Vault-Profil* öffnet sich beim ersten Start von Obsidian.

Um den Vault-Umschalter aus einem bestehenden Vault zu öffnen, wähle **Vault-Profil** ( ![[lucide-chevrons-up-down.svg#icon]]) am unteren Rand der [[Seitenleiste|linken Seitenleiste]]. Oder wähle **Anderen Vault öffnen** aus der [[Befehlspalette]].

## Neuen Vault erstellen

1. Öffne Obsidian auf deinem Computer.
2. Wähle unten links das **Vault-Profil** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. Ein Kontextmenü erscheint. Wähle **Vaults verwalten...**.
3. Rechts neben **Neuen Vault erstellen** wähle **Erstellen**.
4. Gib unter **Vault-Name** den Namen deines Vaults ein.
5. Klicke auf **Wählen**, um auszuwählen, wo dein neuer Vault erstellt werden soll.
6. Klicke auf **Erstellen**.

## Vault aus einem bestehenden Ordner erstellen

1. Öffne Obsidian auf deinem Computer.
2. Wähle unten links das **Vault-Profil** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. Ein Kontextmenü erscheint. Wähle **Vaults verwalten...**.
3. Rechts neben **Ordner als Vault öffnen** klicke auf **Öffnen**.
4. Wähle im Dateibrowser den Ordner aus, den du als Vault verwenden möchtest.
5. Klicke auf **Öffnen**.

> [!tip] Vault von Obsidian Sync öffnen
> Wenn du einen Remote-Tresor mit Obsidian Sync öffnen möchtest, siehe [[Obsidian Sync einrichten]].

## Vault umbenennen

Da der Name eines Vaults und der zugrunde liegende Ordner identisch sind, wird beim Umbenennen eines Vaults auch der Ordner umbenannt.

1. Öffne Obsidian auf deinem Computer.
2. Wähle unten links das **Vault-Profil** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. Ein Kontextmenü erscheint. Wähle **Vaults verwalten...**.
4. Wähle in der Vault-Liste **Weitere Optionen** ( ![[lucide-more-horizontal.svg#icon]] ) neben dem Vault, den du umbenennen möchtest.
5. Wähle **Vault umbenennen**.
6. Gib den neuen Namen für den Vault ein und drücke `Enter`.

## Vault in einen anderen Ordner verschieben

1. Öffne Obsidian auf deinem Computer.
2. Wähle unten links das **Vault-Profil** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. Ein Kontextmenü erscheint. Wähle **Vaults verwalten...**.
4. Schließe das aktuelle Vault-Fenster, aber lasse das Fenster **Vaults verwalten** geöffnet.
5. Wähle in der Vault-Liste **Weitere Optionen** ( ![[lucide-more-horizontal.svg#icon]] ) neben dem Vault, den du verschieben möchtest.
6. Wähle **Vault verschieben** und dann den neuen Speicherort.

Einige Betriebssysteme erlauben es nicht, den Vault mit dem Vault-Umschalter zu verschieben. In diesen Fällen musst du deinen Vault manuell verschieben:

1. Schließe Obsidian.
2. Verschiebe deinen Vault-Ordner an einen neuen Speicherort und vermeide dabei Ordner, die von anderen Diensten synchronisiert werden.
3. Öffne Obsidian erneut.
4. Klicke unten links auf das **Vault-Profil**-Symbol ( ![[lucide-chevrons-up-down.svg#icon]]).
5. Wähle im Pop-up-Menü **Vaults verwalten...**.
6. Klicke neben **Ordner als Vault öffnen** auf **Öffnen**.
7. Navigiere zu deinem neuen Vault-Ordner und wähle ihn aus.
8. Klicke auf **Öffnen**.
9. Überprüfe, ob der Vault-Inhalt unverändert ist. Falls nötig, aktiviere Community-Erweiterungen erneut, indem du zu **[[Einstellungen]] → Community-Erweiterungen → Eingeschränkten Modus deaktivieren** navigierst.

## Vault entfernen

Das Entfernen eines Vaults entfernt ihn nur aus der Vault-Liste.

1. Öffne Obsidian auf deinem Computer.
2. Wähle unten links das **Vault-Profil** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. Ein Kontextmenü erscheint. Wähle **Vaults verwalten...**.
4. Wähle in der Vault-Liste **Weitere Optionen** ( ![[lucide-more-horizontal.svg#icon]]) neben dem Vault, den du entfernen möchtest.
5. Wähle **Von Liste entfernen**.

## Einstellungen auf einen anderen Vault übertragen

Um dieselben Einstellungen für einen anderen Vault zu verwenden, kopiere mit deinem bevorzugten Dateimanager (oder Terminal) den `.obsidian`-Ordner aus dem Stammverzeichnis des Quell-Vaults in das Stammverzeichnis des Ziel-Vaults.

Möglicherweise musst du Obsidian neu starten, damit die Änderungen wirksam werden.

> [!note] Wo finde ich den `.obsidian`-Ordner?
> Standardmäßig verstecken die meisten Betriebssysteme Ordner, die mit einem Punkt (`.`) beginnen. Weitere Informationen zum `.obsidian`-Ordner und wie du darauf zugreifen kannst, findest du unter [[Wie Obsidian Daten speichert#Vault-Einstellungen|Vault-Einstellungen]] und [[Konfigurationsordner|Konfigurationsordner]].
