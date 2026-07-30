---
permalink: callouts
publish: true
mobile: true
description: Den här sidan beskriver hur du använder utlyfta block (callouts) för att inkludera ytterligare innehåll utan att bryta flödet i dina anteckningar.
---
Använd notiser för att inkludera ytterligare innehåll utan att bryta flödet i dina anteckningar.

För att skapa en notis, lägg till `[!info]` på första raden i ett blockcitat, där `info` är _typidentifieraren_. Typidentifieraren avgör hur notisen ser ut och upplevs. För att se alla tillgängliga typer, se [[#Typer som stöds]]. Notiser stöds även inbyggt på [[Introduktion till Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Här är en notisrubrik
> Här är ett notisblock.
> Det stöder **Markdown**, [[Interna länkar|Wikilänkar]] och [[Bädda in filer|inbäddningar]]!
> ![[Engelbart.jpg]]
```

> [!info] Här är en notisrubrik
> Här är ett notisblock.
> Det stöder **Markdown**, [[Interna länkar|Wikilänkar]] och [[Bädda in filer|inbäddningar]]!
> ![[Engelbart.jpg]]

Du kan infoga en standard `[!note]`-notis med hjälp av [[Kommandopalett|kommandot]] `Infoga callout`. Markören placeras automatiskt i notisens namnfält, så att du kan radera standardnamnet och skriva ett nytt innan du redigerar innehållet.

För att omsluta befintligt innehåll i en notis, markera texten (inklusive listor, kodblock, etc.) och kör kommandot `Infoga callout`. Det markerade innehållet omsluts automatiskt i notisen.

I [[Vyer och redigeringsläge#Live-förhandsvisning|Live-förhandsvisning]] kan du också högerklicka på notisens namn för att ändra notistypen.


### Ändra titeln

Som standard är titeln på notisen dess typidentifierare med stor begynnelsebokstav. Du kan ändra den genom att lägga till text efter typidentifieraren:

```markdown
> [!tip] Notiser kan ha anpassade titlar
> Som denna.
```

> [!tip] Notiser kan ha anpassade titlar
> Som denna.

Du kan till och med utelämna brödtexten för att skapa notiser med enbart titel:

```markdown
> [!tip] Notis med enbart titel
```

> [!tip] Notis med enbart titel

### Vikbara notiser

Du kan göra en notis vikbar genom att lägga till ett plustecken (`+`) eller ett minustecken (`-`) direkt efter typidentifieraren.

Ett plustecken expanderar notisen som standard, medan ett minustecken viker in den istället.

```markdown
> [!faq]- Är notiser vikbara?
> Ja! I en vikbar notis döljs innehållet när notisen är invikt.
```

> [!faq]- Är notiser vikbara?
> Ja! I en vikbar notis döljs innehållet när den är invikt.

### Nästlade notiser

Du kan nästla notiser i flera nivåer.

```markdown
> [!question] Kan notiser nästlas?
> > [!todo] Ja!, det kan de.
> > > [!example]  Du kan till och med använda flera nivåer av nästling.
```

> [!question] Kan notiser nästlas?
> > [!todo] Ja!, det kan de.
> > > [!example]  Du kan till och med använda flera nivåer av nästling.

### Anpassa notiser

[[CSS-instick]] och [[Gemenskapstillägg]] kan definiera anpassade notiser, eller till och med skriva över standardkonfigurationen.

För att definiera en anpassad notis, skapa följande CSS-block:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

Värdet på attributet `data-callout` är typidentifieraren du vill använda, till exempel `[!custom-question-type]`.

- `--callout-color` definierar bakgrundsfärgen med siffror (0–255) för röd, grön och blå.
- `--callout-icon` kan vara ett ikon-id från [lucide.dev](https://lucide.dev), eller ett SVG-element.

> [!warning] Notering om lucide-ikonversioner
> Obsidian uppdaterar Lucide-ikoner periodiskt. Den aktuella versionen som ingår visas nedan; använd dessa eller tidigare ikoner i anpassade notiser.
> ![[Medverkande#^lucide]]

> [!tip] SVG-ikoner
> Istället för att använda en Lucide-ikon kan du också använda ett SVG-element som notisikon.
>
> ```css
> --callout-icon: '<svg>...anpassad svg...</svg>';
> ```

### Typer som stöds

Du kan använda flera notistyper och alias. Varje typ har en egen bakgrundsfärg och ikon.

För att använda dessa standardstilar, ersätt `info` i exemplen med någon av dessa typer, som `[!tip]` eller `[!warning]`. Notistyper kan också ändras genom att högerklicka på en notis i live-förhandsvisningsläge.

Om du inte [[#Anpassa notiser|anpassar notiser]] faller alla otyper som inte stöds tillbaka på typen `note`. Typidentifieraren är skiftlägesokänslig.

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

Alias: `summary`, `tldr`

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

Alias: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Alias: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Alias: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Alias: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Alias: `fail`, `missing`

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
