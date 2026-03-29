---
permalink: plugins/graph
publish: true
mobile: true
description: La vista de graf és un connector principal que us permet visualitzar les relacions entre les notes del vostre magatzem.
---
La vista de gràfic és un [[Connectors principals|connector principal]] que us permet visualitzar les relacions entre les notes de la vostra cambra forta.

Per obrir la vista de gràfic, feu clic a **Obre la vista gràfica** a la [[Cinta]].

- Els cercles representen notes, o _nodes_.
- Les línies representen [[Enllaços interns]] entre dos nodes.

Com més nodes facin referència a un node donat, més gran es fa.

Per interactuar amb les notes al gràfic:

- Passeu el cursor per sobre de cada cercle per ressaltar les connexions d'aquella nota.
- Feu clic en una nota al gràfic per obrir-la.
- Feu clic dret en una nota per obrir un menú contextual amb les accions disponibles per a aquella nota.

Per navegar pel gràfic:

- Apropeu i allunyeu amb la roda de desplaçament del ratolí, o amb les tecles `+` i `-`.
- Moveu el gràfic arrossegant-lo amb el cursor del ratolí, o amb les tecles de fletxa.

Podeu mantenir premuda la tecla Maj mentre feu servir el teclat per accelerar els moviments.

## Configuració

Per obrir la configuració del gràfic, feu clic a la icona d'engranatge a la cantonada superior dreta de la vista de gràfic.

Feu clic a **Restaura la configuració predeterminada** a la cantonada superior dreta del quadre de configuració per restablir qualsevol canvi que hàgiu fet.

### Filtres

Aquesta secció controla quins nodes es mostren al gràfic.

- **Cerca fitxers** us permet filtrar notes basant-vos en un terme de cerca. Per aprendre a escriure termes de cerca més avançats, consulteu [[Cerca]].
- **Etiquetes** commuta si es mostren les etiquetes al gràfic.
- **Fitxers adjunts** commuta si es mostren els fitxers adjunts al gràfic.
- **Només fitxers existents** commuta si es mostren notes que existeixen a la vostra cambra forta. Com que una nota no necessita existir per enllaçar-hi, això pot ajudar a limitar el gràfic a notes que realment teniu a la vostra cambra forta.
- **Òrfes** commuta si es mostren notes sense cap enllaç.

> [!info] Fitxers exclosos
> Els fitxers que coincideixin amb els patrons de [[Configuració#Fitxers exclosos|Fitxers exclosos]] no apareixeran a la vista de gràfic.

### Grups

Creeu grups de notes per distingir-les les unes de les altres usant color.

Per crear un nou grup:

1. Feu clic a **Nou grup de marcadors**.
2. Al quadre de cerca, escriviu un terme de cerca per a les notes que voleu afegir al grup.
3. Feu clic al cercle de color per assignar un color al grup.

Per aprendre a escriure termes de cerca més avançats, consulteu [[Cerca]].

### Visualització

Aquesta secció controla com es visualitzen els nodes i els enllaços al gràfic.

- **Fletxes** commuta si es mostra la direcció de cada enllaç.
- **Llindar d'esvaïment del text** controla la transparència del text per al nom de cada nota.
- **Mida del node** controla la mida del cercle que representa cada nota.
- **Gruix de l'enllaç** controla l'amplada de la línia de cada enllaç.
- **Animar** inicia una [[#Inicia una animació de seqüència temporal|animació de seqüència temporal]].

### Forces

Aquesta secció controla les forces que actuen sobre cada node al gràfic.

- **Força de centrat** controla com de compacte és el gràfic. Un valor més alt crea un gràfic més circular.
- **Força de repulsió** controla quant un node empeny els altres nodes lluny d'ell.
- **Força de l'enllaç** controla la tracció sobre cada enllaç. Si l'enllaç fos una goma elàstica, la força de l'enllaç controla com de tensa o fluixa és la goma.
- **Distància de l'enllaç** controla la longitud de les línies entre cada nota.

## Inicia una animació de seqüència temporal

Les notes i els fitxers adjunts apareixen en ordre cronològic segons la seva data de creació.

![[obsidian-graph-view.png#interface]]

## Gràfic local

Per obrir una vista de gràfic local, useu l'ordre **Obre la vista gràfica local**. Mentre que la vista de gràfic mostra totes les notes de la vostra cambra forta, una vista de gràfic local us mostra les notes connectades a la nota activa.

La vista de gràfic local pot usar tota la [[#Configuració]] disponible per a la vista de gràfic global. A més, podeu canviar la profunditat del gràfic local. Cada nivell de profunditat mostrarà notes connectades a les notes revelades al nivell de profunditat anterior. Per controlar la profunditat del gràfic local, useu el control lliscant a la part superior del panell de configuració de filtres del gràfic local.
