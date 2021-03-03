---
aliases: metadata
---

Obsidian anvender YAML front matter metadata som metadata på filniveau.

Front matter er essentielt en sektion af rene tekstattributter placeret helt i toppen af en fil. Front matter blev populære af statiske HTML generatorer såsom Jekyll, Hugo, and Gatsby. Det er en af de mest populære måder, at have metadata i en Markdown fil.

Front matter er en YAML sektion med **tredobbelte bindestreger** både før og efter.
==Denne sektion skal placeres helt i toppen af filen.==

Som eksempel:

```
---
nøgle: værdi
nøgle2: værdi2
mange: [en, to, tre]
mange:
- en
- to
- tre
---
```

Efter version 0.9.17 benyttes front matter til [[Tilføj aliasser til note|aliasser]] . Vi vil efterhånden gøre funktionaliteten mere tilgængelig for udviklere og mere brugevenlig.
