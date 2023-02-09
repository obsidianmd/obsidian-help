---
aliases: metadata
---
YAML, også kendt som front matter, er designet til at være metadata på filniveau, som kan læses af mennesker *og* Obsidian.

Front matter er en sektion af rene tekstattributter placeret helt i toppen af en fil. Front matter blev populære af statiske HTML generatorer såsom Jekyll, Hugo, and Gatsby. Det er en af de mest populære måder, at have metadata i en Markdown fil.

Front matter er en YAML sektion med **tripple bindestreger** både før og efter.
==Denne sektion skal placeres helt i toppen af filen.==

Som eksempel:

```
---
nøgle: værdi
nøgle2: værdi2
nøgle3: [en, to, tre]
nøgle4:
- fire
- fem
- seks
---
```

Fra version 0.12.12 er følgende fire nøgler understøttet af Obsidian:
- `tags` ([[Arbejde med tags|Mere information]])
- `aliases` 
- `cssclass`
- `publish` 

Efterhånden som Obsidian udvikles vil mere funktionalitet blive tilgængelig for udviklere og blive mere brugevenlig.
