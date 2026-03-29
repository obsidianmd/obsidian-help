---
permalink: snippets
publish: true
mobile: true
description: Apreneu com modificar parts de l'aparença de l'aplicació Obsidian sense crear un tema complet.
---
Aprèn com modificar aspectes de l'aparença de l'aplicació Obsidian sense necessitat de [construir un tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Si busques orientació sobre com gestionar CSS per a [[Introducció a Obsidian Publish|Obsidian Publish]], assegura't de revisar [[Personalitza el teu lloc]].

CSS és un llenguatge que controla com es veu l'HTML. Afegint fragments de CSS, pots canviar parts de la interfície d'usuari d'Obsidian, com la mida i el color dels encapçalaments. Obsidian té [variables CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) que t'ajuden a personalitzar la interfície fàcilment.

Obsidian cerca fragments de CSS dins la [[Carpeta de configuració|carpeta de configuració]] de la cambra forta.

## Afegir un fragment

Per afegir un fragment de CSS a l'**Escriptori** ![[lucide-monitor-check.svg#icon]], segueix aquests passos:

1. Obre la **[[Configuració]]** ![[lucide-settings.svg#icon]].
2. A **Aparença → Pedaços de CSS**, selecciona **Obre la carpeta de pedaços** ![[lucide-folder-open.svg#icon]].
3. A la carpeta de pedaços, crea un fitxer CSS que contingui el teu fragment.
4. A Obsidian, a **Aparença → Pedaços de CSS**, selecciona **Recarrega els pedaços** ![[lucide-refresh-cw.svg#icon]] per veure el fragment a la llista.
5. Activa el fragment fent clic al commutador.

Per afegir un fragment de CSS al **Mòbil/Tauleta** ![[obsidian-icon-smartphone.svg#icon]], pots seguir aquests passos:

1. Obre un gestor de fitxers i cerca la teva cambra forta. Pots comprovar la ubicació de la cambra forta a _Gestiona les cambres fortes…_ tocant la teva cambra forta i mirant la ruta.
2. Obre la [[Carpeta de configuració]] i crea una carpeta anomenada `snippets` si no existeix.
3. Afegeix el teu fragment de CSS a aquesta carpeta.
4. Obre la **[[Configuració]]** d'Obsidian ![[lucide-settings.svg#icon]].
5. Selecciona **Aparença** a l'esquerra.
6. Desplaça't fins a la secció **Pedaços de CSS**.
7. Toca **Recarrega els pedaços** ![[lucide-refresh-cw.svg#icon]] per actualitzar la llista.
8. Toca el commutador per activar el fragment.

Alternativament, pots
- [[Sincronitza les teves notes entre dispositius|Sincronitzar]] qualsevol canvi amb el teu servei de sincronització.
- Utilitzar un connector de la comunitat per crear un fragment des de dins d'Obsidian.

Un cop activat, Obsidian detectarà automàticament els canvis als fragments de CSS i els aplicarà quan desis el fitxer.

> [!tip] No cal reiniciar Obsidian perquè els canvis tinguin efecte. No obstant això, pot ser que necessitis utilitzar l'ordre de la [[Paleta d'ordres]] per recarregar Obsidian sense desar per veure els canvis en el tema o nota actual.

## Escriure CSS per a Obsidian

Obsidian ofereix diversos mètodes que fan que escriure CSS sigui més fàcil i potent.

Té una gran quantitat de [variables CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) per modificar fàcilment parts d'Obsidian i un [[Propietats#Tipus de propietat|tipus de propietat]] integrat per canviar l'aparença d'una o diverses notes.

> [!example] Variables
> Crea un fitxer anomenat `headers.css` amb el contingut següent per canviar els colors dels sis [[Sintaxi de format bàsic#Encapçalaments|nivells d'encapçalament]] a un arc de Sant Martí:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] Classes CSS
> Assigna el nom d'una classe CSS personalitzada (o una llista de classes CSS) a una [[Propietats|propietat]] predefinida `cssclasses` per fer que una o més notes es vegin diferents de les altres.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Propietats**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> A cada nota que contingui el valor `red-border` a la propietat `cssclasses`, les imatges es mostren amb una vora vermella.

Per assegurar que el fitxer CSS és vàlid i té el format correcte, aconsellem validar-lo amb una eina com el [Servei de validació CSS](https://jigsaw.w3.org/css-validator/), ja que el CSS no vàlid no funcionarà.

## Aprèn'n més

- Si ets nou amb CSS, consulta [Aprèn a estilitzar HTML amb CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) de Mozilla.
- Per a més informació sobre l'estilització d'Obsidian, consulta:
  - [Sobre l'estilització](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Construir un tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Construir un tema de Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Flux de treball de l'inspector CSS d'Obsidian](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
