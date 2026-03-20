---
permalink: bases/create-base
---
[[Einführung in Bases|Basen]] ermöglichen es dir, datenbankähnliche Ansichten deiner Notizen zu erstellen. Hier erfährst du, wie du eine Basis erstellen und in eine Notiz einbetten kannst. Jede Basis kann eine oder mehrere [[Ansichten]] haben, um Informationen auf unterschiedliche Weise darzustellen.

## Eine neue Basis erstellen

**Befehlspalette:**

1. Öffne die **Befehlspalette**.
2. Wähle
	- **Basen: Neue Base erstellen**, um eine Basis im selben Ordner wie die aktive Datei zu erstellen.
	- **Basen: Neue Base einfügen**, um eine Basis zu erstellen und sie in die aktuelle Datei einzubetten.

**Dateiexplorer:**

1. Klicke im Dateiexplorer mit der rechten Maustaste auf den Ordner, in dem du die Basis erstellen möchtest.
2. Wähle **Neue Base**.

**Werkzeugleiste:**

- Wähle in der vertikalen Werkzeugleiste **Neue Base erstellen**, um eine Basis im selben Ordner wie die aktive Datei zu erstellen.

## Eine Basis einbetten

### Eine Basis-Datei einbetten

Du kannst Basis-Dateien in [[Dateien einbetten|jede andere Datei]] mit der Syntax `![[Datei.base]]` einbetten. Um die Standardansicht festzulegen, verwende `![[Datei.base#Ansicht]]`.

### Eine Basis als Quelltext-Block einbetten

Basen können auch direkt in eine Notiz eingebettet werden, indem ein `base`-Quelltext-Block und die [[Bases-Syntax]] verwendet werden.

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~
