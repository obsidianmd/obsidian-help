---
permalink: plugins/templates
aliases:
  - plugins/skabeloner
  - Plugins/Skabeloner
cssclasses:
  - soft-embed
publish: true
mobile: true
---
Du kan benytte skabeloner til at indsætte foruddefineredet tekst ind i din aktive note.

## Indstil din skabelonmappe

1. Vælg **indstillinger** (tandhjulsikonet) nederst i båndmenuen til venstre
2. Under **Kerne plugins → Skabeloner → Placering af skabelonmappe** angiver du den mappe, som skal indeholde dine skabeloner

## Skabelon variabler

Du kan tilføje dynamisk information til dine skabeloner ved at benytte _skabelonvarialer_. Når du indsætter en skabelon, der indeholder en skabelon variabel, vil dette plugin erstatte variablen med dens korresponderende værdi.

| Variable    | Description                                     |
|-------------|-------------------------------------------------|
| `{{title}}` | Titlen på den aktive note.                       |
| `{{date}}`  | Datoen i dag. **Standard format:** `YYYY-MM-DD`. |
| `{{time}}`  | Det nuværende tidspunkt. **Standard format:** `HH:mm`.      |

Både `{{date}}` og `{{time}}` variablerne tillader dig at kunne ændre standard formatet ved at angive en _formatteringssyntaks_.

For at angive en formattering skal du tilføje et kolon efterfulgt af en tekst [formatteret i Moment.js formatet](https://momentjs.com/docs/#/displaying/format/), fx. `{{date:YYYY-MM-DD}}`.

Du kan anvende `{{date}}` og `{{time}}` med formattering på samme måde, fx. `{{time:YYYY-MM-DD}}`.

Du kan ændre standard dato- og tidsformaterne under **[[Indstillinger]] → Kerneplugins → Skabeloner → Datoformat** og **[[Indstillinger]] → Kerneplugins → Skabeloner → Tidsformat**. ^template-settings-date-time-formatting

> [!tip]- Brug dato- og tidsvariabler i andre plugins
> Du kan også benytte `{{date}}` og `{{time}}` skabelon variable i de to plugins [[Daglige noter]] og [[Unik note opretter]].

## Opret en skabelon

I [[#Indstil din skabelonmappe|skabelonmappen]] skal du [[Administrer noter#Create a new note|oprette en note]], der indeholder den tekst, du ønsker skal vises, når du bruger skabelonen. Du kan bruge [[#Skabelon variabler|skabelonvariabler]] til dynamisk tekst som den aktuelle dato.

For eksempel, her er en skabelon til studienoter:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Key Concepts


## Important Details


## Examples


## Questions
- 

## Summary


## Related Topics
- [[]]
```

> [!warning]+ Rediger skabeloner i kildetilstand
> I [[Visninger og redigeringstilstand#Live Preview|Live-forhåndsvisning]] kan panelet **Egenskaber i dokument** overskrive skabelonvariabler, der ikke har anførselstegn.
>
> For at undgå dette skal du redigere skabeloner i [[Visninger og redigeringstilstand#Source mode|kildetilstand]], eller indstille **[[Indstillinger]] → Editor → [[Indstillinger#Egenskaber i dokument|Egenskaber i dokument]]** til **Kilde**.

## Indsæt en skabelon i den aktive note

> [!todo] [[#Indstil din skabelonmappe]] før du indsætter en skabelon.

1. I båndmenuen skal du vælge **Indsæt skabelon**
2. Vælg den skabelon, som du vil indsætte på markørpositionen i den aktive note

For at indsætte en skabelon ved hjælp af [[Kommandopalet|kommandopaletten]] eller [[Genvejstaster#Set a hotkey|en brugerdefineret tastaturgenvej]], brug kommandoen `Skabeloner: Indsæt skabelon`.

Skabelonens indhold indsættes ved din nuværende markørposition. Hvis din markør ikke er i noteteksten, indsættes indholdet ved din seneste markørposition.

### Skabelon egenskaber

![[Egenskaber#^templates-properties]]

## Indsæt aktuel dato og tid i den aktive note

Brug kommandoerne `Skabeloner: Indsæt dags dato` og `Skabeloner: Indsæt nuværende tidspunkt` for at indsætte den aktuelle dato og tid ved din nuværende markørposition. Ligesom kommandoen `Indsæt skabelon` kan du også udføre disse med kommandopaletten eller en brugerdefineret tastaturgenvej.

Den indsatte dato og tid bruger den [[#^template-settings-date-time-formatting|formattering, der er angivet i plugin-indstillingerne]].
