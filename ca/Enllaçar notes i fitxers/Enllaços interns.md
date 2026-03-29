---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Apreneu a enllaçar notes, fitxers adjunts i altres fitxers des de les vostres notes, utilitzant enllaços interns.'
---
Aprèn com enllaçar notes, adjunts i altres fitxers des de les teves notes, utilitzant _enllaços interns_. En enllaçar notes, pots crear una xarxa de coneixement. ^b15695

Obsidian pot actualitzar automàticament els enllaços interns a la teva cambra forta quan canvies el nom d'un fitxer. Si prefereixes que se't demani confirmació, pots desactivar-ho a:

**[[Configuració]]** → **[[Configuració#Fitxers i Enllaços|Fitxers i Enllaços]]** → **[[Configuració#Sempre actualitza els enllaços interns|Sempre actualitza els enllaços interns]]**.

## Formats compatibles per als enllaços interns

Obsidian admet els següents formats d'enllaç:

- Enllaç wiki: `[[Three laws of motion]]` o `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` o `[Three laws of motion](Three%20laws%20of%20motion.md)`

Els exemples anteriors són equivalents, i apareixen de la mateixa manera a l'editor i enllacen a la mateixa nota.

> [!note] Nota
> Quan utilitzis el format Markdown, assegura't de [codificar l'URL](https://en.wikipedia.org/wiki/Percent-encoding) de la destinació de l'enllaç. Per exemple, els espais en blanc es converteixen en `%20`.

Per defecte, a causa del seu format més compacte, Obsidian genera enllaços en format d'enllaç wiki. Si la interoperabilitat és important per a tu, pots desactivar els enllaços wiki i utilitzar enllaços Markdown en el seu lloc.

Per utilitzar el format Markdown:

1. Obre la **[[Configuració]]**.
2. A **Fitxers i Enllaços**, desactiva **Utilitza \[\[Wikilinks\]\]**.

Fins i tot si desactives el format d'enllaç wiki, encara pots autocompletar enllaços escrivint dos claudàtors `[[`. Quan seleccionis un dels fitxers suggerits, Obsidian generarà un enllaç Markdown en el seu lloc.

> [!note] Caràcters no vàlids
> Una cadena que contingui els següents caràcters pot no funcionar com a enllaç: `# | ^ : %% [[ ]]`.
> 
> Recomanem evitar l'ús d'aquests caràcters i practicar [bones pràctiques per als noms de fitxers](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Enllaçar a un fitxer

Per crear un enllaç mentre estàs en vista d'edició, utilitza qualsevol dels mètodes següents:

- Escriu `[[` a l'editor i després selecciona el fitxer al qual vols crear un enllaç.
- Selecciona text a l'editor i després escriu `[[`.
- Obre la [[Paleta d'ordres]] i després selecciona Afegeix un enllaç intern.

![[Selector ràpid#^search-autocomplete-large]]

Tot i que pots enllaçar a qualsevol dels [[Formats de fitxer acceptats]], els enllaços a formats de fitxer que no siguin Markdown necessiten incloure una extensió de fitxer, com ara `[[Figure 1.png]]`.

> [!tip] Prefixar un enllaç intern amb un signe d'exclamació (!) et permet incrustar el contingut enllaçat. Per a més detalls, consulta [[Incrustar fitxers]].

> [!info] Fitxers exclosos
> Els fitxers que coincideixin amb els teus patrons de [[Configuració#Fitxers exclosos|Fitxers exclosos]] es desprioritzan a les suggerències d'enllaç quan crees enllaços interns.

## Enllaçar a un encapçalament d'una nota

Pots enllaçar a encapçalaments específics dins de les notes, també coneguts com a _enllaços d'àncora_.

**Enllaçar a un encapçalament dins de la mateixa nota**

Per enllaçar a un encapçalament dins de la mateixa nota, escriu `[[#` per obtenir una llista d'encapçalaments de la nota als quals pots enllaçar.

Per exemple, `[[#Previsualitzar un fitxer enllaçat]]` crearà un enllaç a [[#Previsualitzar un fitxer enllaçat]].

**Enllaçar a un encapçalament d'una altra nota**

Per enllaçar a un encapçalament d'una altra nota, afegeix una coixinet (`#`) al final de la destinació de l'enllaç, seguit del text de l'encapçalament.

Per exemple, `[[Sobre Obsidian#Els enllaços són ciutadans de primera classe]]` crearà un enllaç a [[Sobre Obsidian#Els enllaços són ciutadans de primera classe]].

**Enllaçar a subencapçalaments**

Pots afegir múltiples símbols de coixinet per a cada subencapçalament.

Per exemple, `[[Ajuda i suport#Preguntes i consells#Informar d'errors i sol·licitar funcions]]` crearà un enllaç a [[Ajuda i suport#Preguntes i consells#Informar d'errors i sol·licitar funcions]].

**Cercar encapçalaments a tota la cambra forta**

Per cercar encapçalaments a tota la cambra forta, utilitza la sintaxi `[[## encapçalament]]`.

Per exemple, `[[##` cercarà de manera genèrica a tota la cambra forta, mentre que `[[## equip]]` cercarà tots els encapçalaments que continguin la paraula _equip_.

> [!info]- Captura de pantalla de la cerca d'un enllaç d'encapçalament
>
> ![[internal-links-header.png#interface]]

## Enllaçar a un bloc d'una nota

Un bloc és una unitat de text a la teva nota, com ara un paràgraf, una cita en bloc o un element de llista.

Pots enllaçar a un bloc afegint `#^` al final de la destinació del teu enllaç, seguit d'un identificador de bloc únic. Per exemple: `[[2023-01-01#^37066d]]`. Afortunadament, no necessites trobar manualment l'identificador; quan escriguis el circumflex (`^`), apareixerà una llista de suggeriments que et permetrà seleccionar el bloc correcte.

Per a *paràgrafs simples*, col·loca un espai en blanc seguit d'un circumflex `^` i l'identificador de bloc al final de la línia:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Per a *blocs estructurats* (llistes, cites, blocs destacats, taules), l'identificador de bloc hauria d'estar en una línia separada, amb una línia en blanc abans i després:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Per a *línies específiques dins d'una llista*, l'identificador de bloc es pot col·locar directament en una vinyeta:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] No suportem enllaços a parts específiques de cites, blocs destacats i taules.

**Cercar blocs a tota la cambra forta**

També pots cercar blocs als quals enllaçar des de tota la cambra forta utilitzant la sintaxi `[[^^bloc]]`. No obstant això, més elements es qualifiquen com a blocs en comparació amb els [[#Enllaçar a un encapçalament d'una nota|enllaços d'encapçalament]], de manera que aquesta llista serà molt més llarga.

> [!info]- Captura de pantalla de la cerca d'un enllaç de bloc
> ![[link-block-heading.png#interface]]

També pots crear identificadors de bloc llegibles afegint un espai en blanc seguit d'un circumflex (`^`) i l'identificador. Els identificadors de bloc només poden consistir en lletres llatines, números i guions.

Per exemple, afegeix `^quote-of-the-day` al final d'un bloc:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Ara pots enllaçar al bloc escrivint `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperabilitat
> Les referències de bloc són específiques d'Obsidian i no formen part del format estàndard de Markdown. Els enllaços que continguin referències de bloc no funcionaran fora d'Obsidian.

## Canviar el text de visualització de l'enllaç

Per defecte, Obsidian mostrarà el text de l'enllaç tal com apareix. Per exemple:
- `[[Example]]` es mostra com [[Example]]
- `[[Example#Details]]` es mostra com [[Example#Details]]

Pots canviar com es mostra un enllaç personalitzant el seu text de visualització:

**Format d'enllaç wiki**:
Utilitza una barra vertical (`|`) per canviar el text de visualització.

- `[[Example|Nom personalitzat]]` apareix com [[Example|Nom personalitzat]]
- `[[Example#Details|Nom de secció]]` apareix com [[Example#Details|Nom de secció]]

**Format Markdown**:
Utilitza `[Text de visualització](URL de l'enllaç)` per personalitzar com apareix l'enllaç.

- `[Nom personalitzat](Example.md)` apareix com [Nom personalitzat](Example.md)
- `[Nom de secció](Example.md#Details)` apareix com [Nom de secció](Example.md#Details)

Aquest mètode és útil per a situacions puntuals on vols canviar com es veu un enllaç en un context específic. Si vols configurar un nom d'enllaç alternatiu que puguis reutilitzar a tota la teva cambra forta, considera utilitzar un [[Àlies|àlies]] en el seu lloc.

Per exemple, si et refereixes regularment a `[[Three laws of motion]]` com `[[The 3 laws]]`, afegir "3 laws" com a àlies et permet escriure només això, sense necessitat d'afegir text de visualització personalitzat cada vegada.

> [!tip] Consell
> Utilitza [[#Canviar el text de visualització de l'enllaç|text de visualització de l'enllaç]] quan vulguis personalitzar com es veu un enllaç *en un lloc específic*.
> 
> Utilitza [[Àlies|àlies]] quan vulguis referir-te a la mateixa nota utilitzant *noms diferents* a tota la teva cambra forta.
^callout-internal-links-link-text

## Previsualitzar un fitxer enllaçat

> [!note] Nota
> Per previsualitzar fitxers enllaçats, primer necessites activar la [[Previsualització de la pàgina]].

Per previsualitzar un fitxer enllaçat, passa el cursor sobre un enllaç intern. Mentre estàs en mode d'edició, prem `Ctrl` (o `Cmd` a macOS) mentre passes el cursor sobre l'enllaç. Una previsualització del contingut del fitxer apareixerà al costat del cursor.
