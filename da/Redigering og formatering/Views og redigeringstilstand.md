---
permalink: views-og-redigeringstilstand
---

Obsidian lader dig kontrollere, hvordan du læser og redigerer noter skrevet i Markdown, ved hjælpe af _views_ og _tilstande_

- **Views** skifter mellem læsning og redigering af dine noter
- **Tilstande** kontrollerer hvordan Markdown ser ud, når du redigerer

## Læsning

*Læsningsviewet* viser dine noter uden Markdown syntaks, så du har et fuld læsbart format.

Sådan skifter du til *Læsningsview*:
- Vælg viewskifteren (![[lucide-book-icon.svg#icon]]) i øverste højre hjørne af editoren
- eller, tryk `Ctrl+E` (`Cmd+E` på macOS)

> [!note]
> Aktiver **Indstillinger → Udseende → Vis fanens titellinje** for at kunne se vieskifterikonet.  
> 
> Hvis den er deaktiveret, så slå **Indstillinger → Editor → Vis redigeringstilstand i statusbar** til.

## Redigering

*Redigeringsviewet* lader dig lave ændringer i dine noter. Det indlkuderer to redigeringstilstande: *Live forhåndsvisning* og *Kildetilstand*.

For at skifte til *Redigeringsviewet*:
- Vælg viewskifteren (![[lucide-edit-3.svg#icon]])
- eller, tryk `Ctrl+E` (`Cmd+E` på macOS) igen
- Eller anvend [[Kommandopaletten|kommandoen]] **Skift mellem læsning og redigering**

> [!note]
> Du kan indstille det standardview du ønsker, læsning eller redigering, for nye faner under **Indstillinger → Editor → Standardview for nye faner**.

> [!tip] Views side om side  
> Hold `Ctrl` (eller `Cmd` på macOS) inde og klik på viewskifteren, for at åbne en note i både læsningsview og redigeringsview på samme tid.

## Redigeringstilstande

Du kan vælge, hvordan Markdown skal vises i *redigeringsviewet* ved at anvende en af de to *redigeringstilstande*.

### Live forhåndsvisning

*Live forhåndsvisning* viser teksten formatteret idet den skjuler det meste af MArkdown syntaksen. Når din markør sættes i formatteret indhold, vil den underliggende syntaks blive synlig for redigering.

Du kan sætte dette som standard under **Indstillinger → Editor → Standard redigeringstilstand**.

> [!tip] I mange tilfælge kan live forhåndsvisning gøre det unødvendigt at skifte til [[#Læsning|læsningsview]].

### Kildetilstand

I **kildetilstand** vises al Markdown syntaks, som det er skrevet. Benyt denne redigeringstilstand, hvis du foretrækker at skrive almindelig tekst eller har brug for at træne formattering.
