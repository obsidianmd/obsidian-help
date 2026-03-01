---
permalink: plugins/skabeloner
---
Du kan benytte skabeloner til at indsætte foruddefineredet tekst ind i din aktive note.

## Indstil din skabelonmappe

1. Klik på **indstillinger** (tandhjulsikonet) nederst i båndmenuen til venstre
2. Under **Kerne plugins → Skabeloner → Placering af skabelonmappe** angiver du den mappe, som skal indeholde dine skabeloner

## Indsæt en skabelon i den aktive note

**Vigtigt:** For at indsætte en skabelon skal du først [[#Indstil din skabelonmappe|indstille din skabelonmappe]].

1. I venstre båndmenu skal du vælge **Indsæt skabelon**
2. Vælg den skabelon, som du vil indsætte på makørpositionen i den aktive note

Hvis din skabelonmappe kun indeholder en noteskabelon, vil denne blive indsat med det samme i den aktive note.

## Skabelon variabler

Du kan tilføje dynamisk information til dine skabeloner ved at benytte _skabelonvarialer_. Når du indsætter en skabelon, der indeholder en skabelon variabel, vil dette plugin erstatte variablen med dens korresponderende værdi.

| Variable    | Description                                     |
|-------------|-------------------------------------------------|
| `{{title}}` | Titlen på den aktive note.                       |
| `{{date}}`  | Datoen i dag. **Standard format:** `YYYY-MM-DD`. |
| `{{time}}`  | Det nuværende tidspunkt. **Standard format:** `HH:mm`.      |

Både `{{date}}` og `{{time}}` variablerne tillader dig at kunne ændre standard formatet ved at angive en _formatteringssyntaks_.

For at angive en formattering skal du tilføje et kolon efterfulgt af en tekst [formatteret i Moment.js formatet](https://momentjs.com/docs/#/displaying/format/), fx. `{{date:YYYY-MM-DD}}`.

Du kan anvende `{{date}}` og `{{time}}` med formattering uafhængigt af hinanden, fx. `{{time:YYYY-MM-DD}}`.

Du kan ændre standard dato- og tidsformaterne under **Indstillinger → Skabeloner → Datoformat** og **Indstillinger → Skabeloner → Tidsformat**.

> [!tip]
> Du kan også benytte `{{date}}` og `{{time}}` skabelon variable i de to plugins [[Daglige noter]] og [[Unik note opretter]].
