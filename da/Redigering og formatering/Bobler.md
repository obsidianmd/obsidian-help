---
description: Denne side beskriver, hvordan du kan anvende bobler til at tilføje yderligere information uden at disse afbryder dine noters læseflow.
mobile: true
permalink: bobler
publish: true
---

Brug bobler til at inkludere yderligere indhold i dine noter uden af afbryde læseflowet.

For at oprette en boble i en note skal du tilføje `[!info]` til den første linje i et citat, hvor `info` er _typen af boble_. Typen angiver hvordan boblen skal se ud. Læs om de tilgængelige typer i afsnittet [[#Understøttede typer|understøttede typer]]. [[Introduktion til Obsidian Publish|Obsidian Publish]] understøtter bobler.

```markdown
> [!info] Her er overskriften på en boble
> Her er tekstblokken.
> Den understøtter **Markdown**, [[Interne links|Wikilinks]], og [[Indlejr filer|indlejringer]]!
> ![[Engelbart.jpg]]
```

> [!info] Her er overskriften på en boble
> Her er tekstblokken.
> Den understøtter **Markdown**, [[Interne links|Wikilinks]], og [[Indlejr filer|indlejringer]]!
> ![[Engelbart.jpg]]

Du kan indsætte en standard `![note]` boble med `Indsæt boble` [[Kommandopaletten|kommandoen]]. Markørens position bliver automatisk sat i boblens overskriftsfelt, så du kan slette standardtitlen og skrive en ny, før du redigerer indholdet af boblen.

Du kan omdanne eksisterende tekst til en boble ved at markere teksten (inklusiv lister, kodeblokke osv.) og kalde funktionen `Indsæt boble`. Den markerede tekst vil automatisk blive flyttet ind i en boble.

I [[Views og redigeringstilstand#Live forhåndsvisning|Live forhåndsvisning]] kan du også højreklikke på navnet på en boble for at ændre bobletypen.

### Skift overskrift

En bobles overskrift er den samme som dens type, der står med versaler. Du kan ændre overskriften ved at tilføje tekst efter typenavnet:

```markdown
> [!tip] Bobler kan have brugerdefinerede titler
> Ligesom som den her har.
```

> [!tip] Bobler kan have brugerdefinerede titler
> Ligesom som den her har.

Du kan endda lave bobler, som kun består af en titel:

```markdown
> [!tip] En boble kun med titel
```

> [!tip] En boble kun med titel

### Foldbare bobler

Du kan lave foldbare bobler ved at tilføje et plus tegn (`+`) eller et minus tegn (`-`) direkte efter typenavnet.

Et plus tegn viser som standard boblen med al indhold og et minus tegn skjuler indholdet.

```markdown
> [!faq]- Kan bobler skjules?
> Ja! I en foldbar boble er indholdet skjult, når bobles ikke vises.
```

> [!faq]- Kan bobler skjules?
> Ja! I en foldbar boble er indholdet skjult, når boblen ikke vises.

### Indlejrede bobler

Du kan også have bobler i bobler i mange niveauer.

```markdown
> [!question] Kan bobler indlejres?
> > [!todo] Ja! Det kan de.
> > > [!example]  Du kan endda lave underbobler til underbobler.
```

> [!question] Kan bobler indlejres?
> > [!todo] Ja! Det kan de.
> > > [!example]  Du kan endda lave underbobler til underbobler.

### Tilpas bobler

[[CSS kodestykker]] og [[Fællesskabsplugins|fællesskabsplugins]] kan indholde brugerdefinerede bobler, eller endda overskrive standardkonfigurationen.

Du kan oprette en brugerdefineret boble ved at anvende følgende CSS blok:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

`data-callout` værdien er det typenavn, som du vil anvende, fx. `[!custom-question-type]`.

- `--callout-color` definerer baggrundfarven i RGB værdier mellem (0–255) for rød, grøn, og blå
- `--callout-icon` kan være et ikon ID fra [lucide.dev](https://lucide.dev), eller et SVG element

> [!warning] Note omkring ikonversioner af lucide
> Obsidian opdaterer periodisk Lucide ikonerne. Den nuværende version af Lucide ikonerne, som er inkluderet kan ses forneden; brug disse eller tidligere ikoner i bruderdefinerede bobler.
> ![[Tak til#^lucide]]

> [!tip] SVG ikoner
> I stedet for at anvende et Lucide ikon, kan du også anvende et SVG element som ikonet til en boble.
>
> ```css
> --callout-icon: '<svg>...custom svg...</svg>';
> ```

### Understøttede typer

Du kan anvende flere forskellige typer bobler og aliaser. Hver type har forskellig baggrundsfarve og ikon.

For at anvende disse standardtyper skal du erstatte `info` i de forrige eksempler med en af de nedenstående typer. En bobles type kan også ændre ved at højreklikke på en bobel i live forhåndsvisningstilstand.

Med mindre du [[#Tilpas bobler|tilpasser boler]] vil enhver ikke understøttet type blive vist som en `note` type. 
Unless you [[#Customize callouts]], any unsupported type defaults to the `note` type. Typenavnet kan skrives med både store og små bogstaver.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alias: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Alias: `cite`
