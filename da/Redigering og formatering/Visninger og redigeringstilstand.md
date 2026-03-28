---
permalink: edit-and-read
aliases:
  - views-og-redigeringstilstand
  - Views og redigeringstilstand
  - Redigering og formatering/Views og redigeringstilstand
---
Obsidian lader dig kontrollere, hvordan du læser og redigerer noter skrevet i Markdown, ved hjælpe af _views_ og _tilstande_

- **Views** skifter mellem læsning og redigering af dine noter
- **Tilstande** kontrollerer hvordan Markdown ser ud, når du redigerer

> [!note] Note
> Som standard åbner Obsidian nye faner i redigeringstilstand. Du kan ændre dette under **[[Indstillinger]] → Editor → Standardview for nye faner**.

## Læsning

*Læsningsviewet* viser dine noter uden Markdown syntaks, så du har et fuld læsbart format.

Sådan skifter du til *Læsningsview*:

- Vælg viewskifteren ![[lucide-book-icon.svg#icon]] i øverste højre hjørne af editoren
- Eller klik på det interaktive statusikon ![[lucide-edit-3.svg#icon]] eller ![[lucide-code-xml.svg#icon]] i statuslinjen og vælg **Læsevisning**.
- Eller tryk `Ctrl+E` (`Cmd+E` på macOS)

> [!note] Note
> Aktiver **[[Indstillinger]] → Udseende → Vis fanens titellinje** for at kunne se viewskifterikonet.  
> 
> Hvis den er deaktiveret, så slå **[[Indstillinger]] → Editor → Vis redigeringstilstand i statusbar** til for at skifte views fra statuslinjen.

> [!tip] Views side om side  
> Hold `Ctrl` (eller `Cmd` på macOS) inde og klik på viewskifteren, for at åbne en note i både *redigeringsview* og *læsningsview* på samme tid.

## Redigering

*Redigeringsviewet* lader dig lave ændringer i dine noter.

I *redigeringsviewet* bestemmer *redigeringstilstanden*, hvordan Markdown vises. Du kan vælge en af to *redigeringstilstande*: *Live forhåndsvisning* eller *Kildetilstand*.

### Live forhåndsvisning

*Live forhåndsvisning* viser teksten formatteret idet den skjuler det meste af Markdown syntaksen. Når din markør sættes i formatteret indhold, vil den underliggende syntaks blive synlig for redigering.

Sådan skifter du til *Live forhåndsvisning*:

- Vælg viewskifteren ![[lucide-edit-3.svg#icon]] i øverste højre hjørne af editoren
- Eller klik på det interaktive statusikon ![[lucide-book-icon.svg#icon]] eller ![[lucide-code-xml.svg#icon]] i statuslinjen og vælg **Live-forhåndsvisning**.
- Eller tryk `Ctrl+E` (`Cmd+E` på macOS)
- Eller anvend [[Kommandopaletten|kommandoen]] **Skift mellem læsning og redigering**

> [!note] Note
> Som standard er redigeringsviewet sat til *Live forhåndsvisning*. Du kan ændre dette under **[[Indstillinger]] → Editor → Standard redigeringstilstand**.

> [!tip] I mange tilfælde kan live forhåndsvisning gøre det unødvendigt at skifte til [[#Læsning|læsningsview]].

### Kildetilstand

I *kildetilstand* vises al Markdown syntaks, som det er skrevet. Benyt denne redigeringstilstand, hvis du foretrækker at skrive almindelig tekst eller har brug for præcis formatteringskontrol.

Sådan skifter du til *Kildetilstand*:
- Klik på det interaktive statusikon ![[lucide-book-icon.svg#icon]] eller ![[lucide-edit-3.svg#icon]]  i statuslinjen og vælg **Kildetilstand**.

> [!note] Note
> Som standard er redigeringsviewet sat til *Live forhåndsvisning*. Skift dette til *Kildetilstand* under **[[Indstillinger]] → Editor → Standard redigeringstilstand**.
> 
> For at skifte til *Kildetilstand* kan du nu desuden:
> 
> - Klikke på viewskifteren ![[lucide-edit-3.svg#icon]] i øverste højre hjørne af din note.
> - Eller trykke `Ctrl+E` (`Cmd+E` på macOS).
> - Eller anvende [[Kommandopaletten|kommandoen]] **Skift mellem læsning og redigering**.

> [!tip] Skift *redigeringstilstand*
> For hurtigt at skifte mellem *Live forhåndsvisning* og *Kildetilstand* kan du indstille en [[Genvejstaster|tastaturgenvej]] for [[Kommandopaletten|kommandoen]] **Skift mellem forhåndsvisning og kildetilstand**.
