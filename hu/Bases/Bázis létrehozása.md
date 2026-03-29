---
permalink: bases/create-base
---
A [[Bevezetés a Bázisokba|Bázisok]] segítségével adatbázis-szerű nézeteket hozhatsz létre a jegyzeteidről. Íme, hogyan hozhatsz létre egy bázist és ágyazhatod be egy jegyzetbe. Minden bázisnak lehet egy vagy több [[Nézetek|nézete]], amelyek különböző módokon jelenítik meg az információkat.

## Új bázis létrehozása

**Parancspaletta:**

1. Nyisd meg a **Parancspalettát**.
2. Válaszd ki a következőt:
	- **Bázisok: Új bázis létrehozása** – bázis létrehozása az aktív fájllal azonos mappában.
	- **Bázisok: Új bázis beszúrása** – bázis létrehozása és beágyazása az aktuális fájlba.

**Fájlkezelő:**

1. A Fájlkezelőben kattints jobb gombbal arra a mappára, amelyben a bázist létre szeretnéd hozni.
2. Válaszd az **Új bázis** lehetőséget.

**Szalag:**

- A függőleges szalagmenüben válaszd az **Új bázis létrehozása** lehetőséget, hogy bázist hozz létre az aktív fájllal azonos mappában.

## Bázis beágyazása

### Bázisfájl beágyazása

A bázisfájlokat bármely [[Fájlok beágyazása|más fájlba]] beágyazhatod a `![[Fájl.base]]` szintaxissal. Az alapértelmezett nézet megadásához használd a `![[Fájl.base#Nézet]]` szintaxist.

### Bázis beágyazása kódblokkként

A bázisok közvetlenül egy jegyzetbe is beágyazhatók egy `base` kódblokk és a [[Bázisok szintaxisa|bázisok szintaxisa]] segítségével.

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
