---
permalink: bases/create-base
aliases:
  - Create a base
---
[[Introducere în Baze|Bazele]] îți permit să creezi vizualizări de tip bază de date pentru notele tale. Iată cum poți crea o bază și cum o poți încorpora într-o notă. Fiecare bază poate avea una sau mai multe [[Afișaje|vizualizări]] pentru a afișa informațiile în moduri diferite.

## Creează o bază nouă

**Paleta de comenzi:**

1. Deschide **Paleta de comenzi**.
2. Selectează
	- **Bases: Create new base** pentru a crea o bază în același director cu fișierul activ.
	- **Bases: Insert new base** pentru a crea o bază și a o încorpora în fișierul curent.

**Exploratorul de fișiere:**

1. În Exploratorul de fișiere, dă clic dreapta pe directorul în care vrei să creezi baza.
2. Selectează **New base** (Bază nouă).

**Panglică:**

- În meniul vertical al panglicii, selectează **Create new base** (Creează o bază nouă) pentru a crea o bază în același director cu fișierul activ.

## Încorporează o bază

### Încorporează un fișier bază

Poți încorpora fișiere bază în [[Încorporează fișiere|orice alt fișier]] folosind sintaxa `![[File.base]]`. Pentru a specifica vizualizarea implicită, folosește `![[File.base#View]]`.

### Încorporează o bază ca bloc de cod

Bazele pot fi de asemenea încorporate direct într-o notă folosind un bloc de cod `base` și [[Sintaxă Baze|sintaxa bases]].

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

