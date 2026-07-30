---
permalink: callouts
publish: true
mobile: true
description: Denne siden beskriver hvordan du bruker callouts for å inkludere tilleggsinnhold uten å bryte flyten i notatene dine.
---
Bruk uthevede blokker for å inkludere tilleggsinnhold uten å bryte flyten i notatene dine.

For å opprette en uthevet blokk, legg til `[!info]` på første linje i et blokksitat, der `info` er _typeidentifikatoren_. Typeidentifikatoren bestemmer hvordan den uthevede blokken ser ut og føles. For å se alle tilgjengelige typer, se [[#Støttede typer]]. Uthevede blokker støttes også nativt på [[Introduksjon til Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Her er en tittel på en uthevet blokk
> Her er en uthevet blokk.
> Den støtter **Markdown**, [[Interne lenker|Wiki-lenker]] og [[Bygge inn filer|innebygninger]]!
> ![[Engelbart.jpg]]
```

> [!info] Her er en tittel på en uthevet blokk
> Her er en uthevet blokk.
> Den støtter **Markdown**, [[Interne lenker|Wiki-lenker]] og [[Bygge inn filer|innebygninger]]!
> ![[Engelbart.jpg]]

Du kan sette inn en standard `[!note]` uthevet blokk ved å bruke `Sett inn uthevet blokk`-[[Kommandovelger|kommandoen]]. Markøren plasseres automatisk i navnefeltet for den uthevede blokken, slik at du kan slette standardnavnet og skrive inn et nytt før du redigerer innholdet.

For å pakke eksisterende innhold i en uthevet blokk, velg teksten (inkludert lister, kodeblokker osv.) og kjør `Sett inn uthevet blokk`-kommandoen. Det valgte innholdet vil automatisk bli innesluttet i den uthevede blokken.

I [[Visninger og redigeringsmodus#Live-forhåndsvisning|Live-forhåndsvisning]] kan du også høyreklikke på navnet til den uthevede blokken for å endre typen.


### Endre tittelen

Som standard er tittelen på den uthevede blokken typeidentifikatoren med stor forbokstav. Du kan endre den ved å legge til tekst etter typeidentifikatoren:

```markdown
> [!tip] Uthevede blokker kan ha egendefinerte titler
> Som denne.
```

> [!tip] Uthevede blokker kan ha egendefinerte titler
> Som denne.

Du kan til og med utelate brødteksten for å lage uthevede blokker med kun tittel:

```markdown
> [!tip] Uthevet blokk med kun tittel
```

> [!tip] Uthevet blokk med kun tittel

### Sammenleggbare uthevede blokker

Du kan gjøre en uthevet blokk sammenleggbar ved å legge til et pluss (`+`) eller et minus (`-`) direkte etter typeidentifikatoren.

Et plusstegn utvider den uthevede blokken som standard, og et minustegn skjuler den i stedet.

```markdown
> [!faq]- Er uthevede blokker sammenleggbare?
> Ja! I en sammenleggbar uthevet blokk er innholdet skjult når den er foldet sammen.
```

> [!faq]- Er uthevede blokker sammenleggbare?
> Ja! I en sammenleggbar uthevet blokk er innholdet skjult når den er foldet sammen.

### Nestede uthevede blokker

Du kan neste uthevede blokker i flere nivåer.

```markdown
> [!question] Kan uthevede blokker nestes?
> > [!todo] Ja!, det kan de.
> > > [!example] Du kan til og med bruke flere lag med nesting.
```

> [!question] Kan uthevede blokker nestes?
> > [!todo] Ja!, det kan de.
> > > [!example] Du kan til og med bruke flere lag med nesting.

### Tilpass uthevede blokker

[[CSS-utdrag]] og [[Community-utvidelser]] kan definere egendefinerte uthevede blokker, eller til og med overskrive standardkonfigurasjonen.

For å definere en egendefinert uthevet blokk, opprett følgende CSS-blokk:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

Verdien av `data-callout`-attributtet er typeidentifikatoren du ønsker å bruke, for eksempel `[!custom-question-type]`.

- `--callout-color` definerer bakgrunnsfargen med tall (0–255) for rød, grønn og blå.
- `--callout-icon` kan være en ikon-ID fra [lucide.dev](https://lucide.dev), eller et SVG-element.

> [!warning] Merknad om lucide-ikonversjoner
> Obsidian oppdaterer Lucide-ikoner med jevne mellomrom. Den nåværende versjonen som er inkludert vises nedenfor; bruk disse eller tidligere ikoner i egendefinerte uthevede blokker.
> ![[Krediteringer#^lucide]]

> [!tip] SVG-ikoner
> I stedet for å bruke et Lucide-ikon kan du også bruke et SVG-element som ikon for den uthevede blokken.
>
> ```css
> --callout-icon: '<svg>...egendefinert svg...</svg>';
> ```

### Støttede typer

Du kan bruke flere typer uthevede blokker og aliaser. Hver type kommer med en annen bakgrunnsfarge og ikon.

For å bruke disse standardstilene, erstatt `info` i eksemplene med hvilken som helst av disse typene, som `[!tip]` eller `[!warning]`. Typer for uthevede blokker kan også endres ved å høyreklikke på en uthevet blokk i Live-forhåndsvisningsmodus.

Med mindre du [[#Tilpass uthevede blokker|tilpasser uthevede blokker]], vil enhver type som ikke støttes bruke `note`-typen som standard. Typeidentifikatoren skiller ikke mellom store og små bokstaver.

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

Aliaser: `summary`, `tldr`

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

Aliaser: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Aliaser: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Aliaser: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Aliaser: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Aliaser: `fail`, `missing`

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
