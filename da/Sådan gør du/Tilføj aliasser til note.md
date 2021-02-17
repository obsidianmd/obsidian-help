---
aliases: alias, aliases
---
Nogle gange har du møske brug for at referere til den samme fil ved hjælp af flere navne i forskelige kontekster. Disse alternative navne kaldes "aliasser".

F.eks. vil du gerne referere til din partner med deres fulde navn, fornavn eller kaldenavn. Eller du vil refererer til "kunstig intelligens" med forkortelsen "AI". Hvis du benytter flere sprog, vil du måsker gerne referere til det samme koncept med dets navn på samme sprig, som resten af noten er i.

### Sæt aliasser

Begyndende med Obsidian v0.9.16 er det muligt at specificere "alias" egenskaben i en notes [[YAML markdown metadata]] på denne måde:

```
---
aliases: [AI, Kunstig intelligens]
---
```

Bemærk at denne sektion skal placeres helt i begyndelsen af en note for at det tager effekt.

I fremtiden overvejer vi mere brugervenlige måder a håndtere aliasser en ved at skrive dem manuelt i begyndelsen af noten.

### Link med aliasser

Når du har sat et alias for en fil kan du skrive `[[alias]]` for at linke til den originale note. Et redirigeringsikon dukker op i den automatiske liste med forslag sådan:

![[Insert alises.png]]

Et internt link med visningstekst bliver indsat sådan: `[[Tilføj aliasser til note|alias]]`.

Bemærk: Linket til alias er **IKKE** indsat som `[[alias]]` for interkompabilitet, så andet markdown software også kan genkende det.

### Find ulinkede omtaler

Efter at du har sat en notes alias kan du finde ulinkede omtaler med både dets navn og dets alias.

F.eks. efter at du har sat "AI" som en alias for "Kunstig intelligens" vil du se omtaler af "AI" i andre filer i [[Tilbagelinks]] sektionen.

Hvis du beslutter dig for at linke til denne omtale, vil der blive oprettet et link, hvor teksten er sat til det alias. Følger vi eksemplet i forrige afsnit, så vil `AI` blive til `[[Kunstig intelligens|AI]]` , når du klikker på "Link" knappen.
