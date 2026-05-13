---
permalink: callouts
publish: true
mobile: true
description: Deze pagina beschrijft hoe u callouts kunt gebruiken om aanvullende inhoud op te nemen zonder de flow van uw notities te onderbreken.
---
Gebruik infoblokken om aanvullende inhoud toe te voegen zonder de stroom van je notities te onderbreken.

Om een infoblok te maken, voeg je `[!info]` toe aan de eerste regel van een blokcitaat, waarbij `info` de _type-identificatie_ is. De type-identificatie bepaalt hoe het infoblok eruitziet en aanvoelt. Raadpleeg [[#Ondersteunde types]] voor alle beschikbare types. Infoblokken worden ook native ondersteund op [[Inleiding tot Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Hier is een infobloktitel
> Hier is een infoblok.
> Het ondersteunt **Markdown**, [[Interne koppelingen|wiki-links]] en [[Bestanden insluiten|insluitingen]]!
> ![[Engelbart.jpg]]
```

> [!info] Hier is een infobloktitel
> Hier is een infoblok.
> Het ondersteunt **Markdown**, [[Interne koppelingen|wiki-links]] en [[Bestanden insluiten|insluitingen]]!
> ![[Engelbart.jpg]]

Je kunt een standaard `[!note]`-infoblok invoegen met de [[Opdrachtenpaneel|opdracht]] `Kader invoegen`. De cursor positioneert zich automatisch in het naamveld van het infoblok, zodat je de standaardnaam kunt verwijderen en een nieuwe kunt typen voordat je de inhoud bewerkt.

Om bestaande inhoud in een infoblok te verpakken, selecteer je de tekst (inclusief lijsten, codeblokken, enz.) en voer je de opdracht `Kader invoegen` uit. De geselecteerde inhoud wordt automatisch in het infoblok ingesloten.

In [[Weergaven en bewerkingsmodus#Live voorbeeld|live voorbeeld]] kun je ook met de rechtermuisknop op de naam van het infoblok klikken om het type te wijzigen.


### De titel wijzigen

Standaard is de titel van het infoblok de type-identificatie in hoofdletternotatie. Je kunt deze wijzigen door tekst toe te voegen na de type-identificatie:

```markdown
> [!tip] Infoblokken kunnen aangepaste titels hebben
> Zoals deze.
```

> [!tip] Infoblokken kunnen aangepaste titels hebben
> Zoals deze.

Je kunt zelfs de inhoud weglaten om infoblokken te maken die alleen een titel bevatten:

```markdown
> [!tip] Infoblok met alleen een titel
```

> [!tip] Infoblok met alleen een titel

### Invouwbare infoblokken

Je kunt een infoblok invouwbaar maken door direct na de type-identificatie een plusteken (`+`) of een minteken (`-`) toe te voegen.

Een plusteken vouwt het infoblok standaard uit, en een minteken vouwt het in.

```markdown
> [!faq]- Zijn infoblokken invouwbaar?
> Ja! In een invouwbaar infoblok wordt de inhoud verborgen wanneer het infoblok is ingevouwen.
```

> [!faq]- Zijn infoblokken invouwbaar?
> Ja! In een invouwbaar infoblok wordt de inhoud verborgen wanneer het is ingevouwen.

### Geneste infoblokken

Je kunt infoblokken in meerdere niveaus nesten.

```markdown
> [!question] Kunnen infoblokken genest worden?
> > [!todo] Ja!, dat kan.
> > > [!example]  Je kunt zelfs meerdere niveaus van nesting gebruiken.
```

> [!question] Kunnen infoblokken genest worden?
> > [!todo] Ja!, dat kan.
> > > [!example]  Je kunt zelfs meerdere niveaus van nesting gebruiken.

### Infoblokken aanpassen

[[CSS-fragmenten]] en [[Communityplug-ins]] kunnen aangepaste infoblokken definiëren, of zelfs de standaardconfiguratie overschrijven.

Om een aangepast infoblok te definiëren, maak je het volgende CSS-blok aan:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

De waarde van het `data-callout`-attribuut is de type-identificatie die je wilt gebruiken, bijvoorbeeld `[!custom-question-type]`.

- `--callout-color` definieert de achtergrondkleur met getallen (0–255) voor rood, groen en blauw.
- `--callout-icon` kan een pictogram-ID zijn van [lucide.dev](https://lucide.dev), of een SVG-element.

> [!warning] Opmerking over lucide-pictogramversies
> Obsidian werkt Lucide-pictogrammen periodiek bij. De huidige meegeleverde versie wordt hieronder weergegeven; gebruik deze of eerdere pictogrammen in aangepaste infoblokken.
> ![[Credits#^lucide]]

> [!tip] SVG-pictogrammen
> In plaats van een Lucide-pictogram te gebruiken, kun je ook een SVG-element als infoblokpictogram gebruiken.
>
> ```css
> --callout-icon: '<svg>...aangepaste svg...</svg>';
> ```

### Ondersteunde types

Je kunt verschillende infobloktypes en aliassen gebruiken. Elk type heeft een andere achtergrondkleur en pictogram.

Om deze standaardstijlen te gebruiken, vervang je `info` in de voorbeelden door een van deze types, zoals `[!tip]` of `[!warning]`. Infobloktypes kunnen ook worden gewijzigd door met de rechtermuisknop op een infoblok te klikken in de live voorbeeldmodus.

Tenzij je [[#Infoblokken aanpassen|infoblokken aanpast]], valt elk niet-ondersteund type terug op het `note`-type. De type-identificatie is niet hoofdlettergevoelig.

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

Aliassen: `summary`, `tldr`

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

Aliassen: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Aliassen: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Aliassen: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Aliassen: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Aliassen: `fail`, `missing`

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
