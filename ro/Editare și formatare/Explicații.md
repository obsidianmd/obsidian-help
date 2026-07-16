---
permalink: callouts
publish: true
mobile: true
description: Această pagină detaliază modul de utilizare a explicațiilor pentru a include conținut suplimentar fără a întrerupe fluxul notelor dvs.
aliases:
  - Callouts
---

Folosiți explicații pentru a include conținut suplimentar fără a întrerupe fluxul notelor dvs.

Pentru a crea o explicație, adăugați `[!info]` pe primul rând al unui citat, unde `info` este _identificatorul de tip_. Identificatorul de tip determină aspectul și comportamentul explicației. Pentru a vedea toate tipurile disponibile, consultați [[#Supported types]]. Explicațiile sunt de asemenea acceptate nativ pe [[Introducere în Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Here's a callout title
> Here's a callout block.
> It supports **Markdown**, [[Internal link|Wikilinks]], and [[Încorporează fișiere|embeds]]!
> ![[Engelbart.jpg]]
```

> [!info] Iată titlul unei explicații
> Iată un bloc de explicație.
> Acesta acceptă **Markdown**, [[Legături interne|Wikilink-uri]] și [[Încorporează fișiere|încorporări]]!
> ![[Engelbart.jpg]]

Puteți insera o explicație implicită de tip `[!note]` folosind [[Paleta de comenzi|comanda]] `Insert callout`. Cursorul se poziționează automat în câmpul cu numele explicației, permițându-vă să ștergeți numele implicit și să introduceți unul nou înainte de a edita conținutul.

Pentru a încadra conținutul existent într-o explicație, selectați textul (inclusiv liste, blocuri de cod etc.) și rulați comanda `Insert callout`. Conținutul selectat va fi încadrat automat în explicație.

În [[Moduri de vizualizare și editare#Live Preview|Live Preview]], puteți de asemenea să faceți clic dreapta pe numele explicației pentru a schimba tipul acesteia.


### Schimbați titlul

Implicit, titlul explicației este identificatorul său de tip, scris cu majuscule inițiale. Îl puteți schimba adăugând text după identificatorul de tip:

```markdown
> [!tip] Callouts can have custom titles
> Like this one.
```

> [!tip] Explicațiile pot avea titluri personalizate
> Ca aceasta.

Puteți chiar omite conținutul, pentru a crea explicații doar cu titlu:

```markdown
> [!tip] Title-only callout
```

> [!tip] Explicație doar cu titlu

### Explicații pliabile

Puteți face o explicație pliabilă adăugând un plus (`+`) sau un minus (`-`) imediat după identificatorul de tip.

Semnul plus extinde explicația implicit, iar semnul minus o pliază în schimb.

```markdown
> [!faq]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden when the callout is collapsed.
```

> [!faq]- Explicațiile sunt pliabile?
> Da! Într-o explicație pliabilă, conținutul este ascuns atunci când explicația este pliată.

### Explicații imbricate

Puteți imbrica explicații pe mai multe niveluri.

```markdown
> [!question] Can callouts be nested?
> > [!todo] Yes!, they can.
> > > [!example]  You can even use multiple layers of nesting.
```

> [!question] Pot fi imbricate explicațiile?
> > [!todo] Da, pot!
> > > [!example]  Puteți folosi chiar și mai multe niveluri de imbricare.

### Personalizați explicațiile

[[Fragmente CSS|Fragmentele CSS]] și [[Module comunitare|modulele comunității]] pot defini explicații personalizate sau chiar suprascrie configurația implicită.

Pentru a defini o explicație personalizată, creați următorul bloc CSS:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

Valoarea atributului `data-callout` este identificatorul de tip pe care doriți să îl folosiți, de exemplu `[!custom-question-type]`.

- `--callout-color` definește culoarea de fundal folosind numere (0–255) pentru roșu, verde și albastru.
- `--callout-icon` poate fi un ID de pictogramă de la [lucide.dev](https://lucide.dev), sau un element SVG. 

> [!warning] Notă despre versiunile pictogramelor lucide
> Obsidian actualizează periodic pictogramele Lucide. Versiunea curentă inclusă este afișată mai jos; folosiți-le pe acestea sau pictograme mai vechi în explicațiile personalizate.
> ![[Mulțumiri#^lucide]]

> [!tip] Pictograme SVG
> În loc să folosiți o pictogramă Lucide, puteți folosi și un element SVG ca pictogramă a explicației.
>
> ```css
> --callout-icon: '<svg>...custom svg...</svg>';
> ```

### Tipuri acceptate

Puteți folosi mai multe tipuri de explicații și alias-uri. Fiecare tip vine cu o culoare de fundal și o pictogramă diferite.

Pentru a folosi aceste stiluri implicite, înlocuiți `info` din exemple cu oricare dintre aceste tipuri, precum `[!tip]` sau `[!warning]`. Tipurile de explicații pot fi schimbate și făcând clic dreapta pe o explicație în modul Live Preview.

Cu excepția cazului în care [[#Customize callouts|le personalizați]], orice tip neacceptat revine implicit la tipul `note`. Identificatorul de tip nu ține cont de majuscule și minuscule.

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

Alias-uri: `summary`, `tldr`

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

Alias-uri: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Alias-uri: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Alias-uri: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Alias-uri: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Alias-uri: `fail`, `missing`

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
