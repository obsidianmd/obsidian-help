---
permalink: bases/create-base
---
[[Introduktion till baser|Baser]] låter dig skapa databasliknande vyer av dina anteckningar. Här beskrivs hur du kan skapa en bas och bädda in den i en anteckning. Varje bas kan ha en eller flera [[Vyer|vyer]] för att visa information på olika sätt.

## Skapa en ny bas

**Kommandopalett:**

1. Öppna **Kommandopaletten**.
2. Välj
	- **Baser: Skapa ny bas** för att skapa en bas i samma mapp som den aktiva filen.
	- **Baser: Infoga ny bas** för att skapa en bas och bädda in den i den aktuella filen.

**Filutforskare:**

1. I Filutforskaren, högerklicka på mappen där du vill skapa basen.
2. Välj **Ny bas**.

**Ribbon:**

- I den vertikala ribbon-menyn, välj **Skapa ny bas** för att skapa en bas i samma mapp som den aktiva filen.

## Bädda in en bas

### Bädda in en basfil

Du kan bädda in basfiler i [[Bädda in filer|vilken annan fil som helst]] med syntaxen `![[Fil.base]]`. För att ange standardvyn använd `![[Fil.base#Vy]]`.

### Bädda in en bas som ett kodblock

Baser kan också bäddas in direkt i en anteckning med ett `base`-kodblock och [[Baser-syntax|baser-syntaxen]].

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
