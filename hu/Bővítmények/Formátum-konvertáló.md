---
permalink: plugins/format-converter
publish: true
mobile: true
description: 'A Formátumkonvertáló egy alapbővítmény, amely lehetővé teszi a Markdown konvertálását más alkalmazásokból az Obsidian formátumára.'
---
A Formátum-konvertáló az elavult [[Tulajdonságok#Elavult tulajdonságok|tulajdonságformátumokat]] az Obsidian által használt aktuális formátumra alakítja át.

> [!warning] Készíts biztonsági mentést a széfedről
> A konvertálás a teljes széfre vonatkozik. [[Obsidian fájlok biztonsági mentése|Készíts biztonsági mentést az Obsidian fájljaidról]], mielőtt elkezded.

A jegyzeteidben lévő tulajdonságok konvertálásához:

1. Nyisd meg a [[Parancspaletta|parancspalettát]].
2. Válaszd a **Formátum-konvertáló: Metaadatok migrációja** lehetőséget.
3. Válaszd a **Konvertálás indítása** lehetőséget.

## Támogatott tulajdonságformátumok

A konvertáló az alternatív neveket, címkéket és CSS osztályokat frissíti az elavult formátumokról:

**Alternatív nevek**

```yaml
# Előtte

alias: My Note Title

# Utána

aliases:
  - My Note Title
```

**Címkék**

```yaml
# Előtte

tag: project, important

# Utána

tags:
  - project
  - important
```

**CSS osztályok**

```yaml
# Előtte

cssclass: custom-style

# Utána

cssclasses:
  - custom-style
```
