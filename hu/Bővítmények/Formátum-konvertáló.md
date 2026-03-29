---
permalink: plugins/format-converter
publish: true
mobile: true
description: 'A Formátumkonvertáló egy alapbővítmény, amely lehetővé teszi a Markdown konvertálását más alkalmazásokból az Obsidian formátumára.'
---
A Formátum-konvertáló egy [[Alap bővítmények|alap bővítmény]], amely lehetővé teszi a Markdown konvertálását más alkalmazásokból Obsidian formátumba. Emellett lehetővé teszi bizonyos [[Tulajdonságok]] konvertálását az új, szükséges formátumokba.

> [!warning] Figyelmeztetés
> A Formátum-konvertáló a beállításaid alapján a teljes széfet konvertálja. [[Obsidian fájlok biztonsági mentése|Készíts biztonsági mentést az Obsidian fájljaidról]], mielőtt végrehajtod a konvertálást.

Az összes jegyzet konvertálásához a széfben:

1. A [[Parancspaletta|parancspalettában]] válaszd a **Formátum-konvertáló megnyitása** lehetőséget. Ez a [[Szalag|szalagon]] is megtalálható a **Formátum-konvertáló megnyitása** ![[lucide-binary.svg#icon]] ikonnal.
2. Engedélyezd a konvertálni kívánt formátumokat.
3. Kattints a **Konvertálás indítása** gombra.

További információkért lásd az [[Alapvető formázási szintaxis]] oldalt.

## Támogatott formátumok

### Roam Research

A Formátum-konvertáló a következő Roam Research szintaxist tudja konvertálni:

- **Címkék**: A `#tag` és `#[[tag]]` formátumot `[[tag]]` formátumra konvertálja
- **Kiemelések**: A `^^highlight^^` formátumot `==highlight==` formátumra konvertálja
- **TODO elemek**: A `{{[[TODO]]}}` formátumot `[ ]` formátumra konvertálja

### Bear

A Formátum-konvertáló a következő Bear szintaxist tudja konvertálni:

- **Kiemelések**: A `::highlight::` formátumot `==highlight==` formátumra konvertálja

### Zettelkasten

A Formátum-konvertáló a következő Zettelkasten szintaxist tudja konvertálni:

- **Teljes hivatkozások**: A `[[UID]]` formátumot `[[UID File Name]]` formátumra konvertálja
- **Szép hivatkozások**: A `[[UID]]` formátumot `[[UID File Name|File Name]]` formátumra konvertálja

### [[Tulajdonságok]]

Az Obsidian `1.9.3` verziójától kezdve a Formátum-konvertáló képes a [[Tulajdonságok#Elavult tulajdonságok|elavult tulajdonság]] formátumokat az aktuális formátumra konvertálni:

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
