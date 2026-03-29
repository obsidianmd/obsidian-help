---
permalink: web-clipper/capture
---
Un cop instal·lada l'extensió del navegador [[Introducció a Obsidian Web Clipper|Web Clipper]], hi pots accedir de diverses maneres, depenent del teu navegador:

1. La icona d'Obsidian a la barra d'eines del teu navegador.
2. Dreceres de teclat, per activar l'extensió des del teclat.
3. Menú contextual, fent clic dret a la pàgina web que estàs visitant.

Per desar una pàgina a Obsidian fes clic al botó **Agregar a Obsidian**.

## Capturar una pàgina

Quan obres l'extensió, el Web Clipper extreu dades de la pàgina web actual seguint la configuració de la teva [[Obsidian Web Clipper/Plantilles|plantilla]]. Pots crear les teves pròpies plantilles i personalitzar la sortida utilitzant [[variables]] i [[Filtres|filtres]].

Per defecte, el Web Clipper intenta extreure intel·ligentment només el contingut principal de l'article, excloent altres elements de la pàgina. No obstant això, pots substituir aquest comportament de les maneres següents:

- Si hi ha una plantilla personalitzada, utilitza la teva plantilla.
- Si hi ha una selecció, utilitza la selecció. Pots fer servir `Ctrl/Cmd+A` per seleccionar tota la pàgina.
- Si hi ha [[Ressaltar pàgines web|ressaltats]], utilitza els ressaltats.

## Descarregar imatges

Les imatges no es descarreguen automàticament quan fas servir el Web Clipper. En lloc d'això, les imatges enllacen a la seva URL web. Això estalvia espai a la teva cambra forta, però significa que les imatges no seran accessibles fora de línia o si la URL deixa de funcionar.

Pots descarregar les imatges de qualsevol fitxer a Obsidian utilitzant l'[[Paleta d'ordres|ordre]] anomenada **Descarrega els adjunts del fitxer actual**. Aquesta ordre també es pot assignar a una drecera de teclat a Obsidian.

## Dreceres de teclat

El Web Clipper inclou dreceres de teclat que pots utilitzar per accelerar el teu flux de treball. Per canviar les assignacions de tecles, ves a **Configuració del Web Clipper** → **General** i segueix les instruccions per al teu navegador. Les assignacions es poden canviar per a tots els navegadors excepte Safari, que no permet editar les dreceres de teclat.

| Acció                       | macOS          | Windows/Linux   |
| --------------------------- | -------------- | --------------- |
| Obrir el clipper             | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Guardat ràpid                | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Alternar el mode de ressaltat | `Opt+Shift+H`  | `Alt+Shift+H`   |

## Funcionalitat de la interfície

La interfície del Web Clipper es divideix en quatre seccions:

1. **Capçalera** on pots canviar de plantilla, activar el [[Ressaltar pàgines web|ressaltat]], el [[Lector|mode de lectura]] i accedir a la configuració.
2. **Propietats** mostra les [[Propietats|metadades]] extretes de la pàgina que es desaran com a [[Propietats]] a Obsidian.
3. **Contingut de la nota** que es desarà a Obsidian.
4. **Peu de pàgina** et permet seleccionar la cambra forta i la carpeta, i agregar a Obsidian.

La funcionalitat de la capçalera inclou:

- Desplegable de **Plantilla** per canviar entre les teves [[Obsidian Web Clipper/Plantilles|plantilles]] desades afegides a la configuració del Web Clipper.
- Botó **Més (...)** per mostrar les variables de pàgina que pots utilitzar a les plantilles.
- Botó **Ressaltador** per activar el [[Ressaltar pàgines web|ressaltat]].
- Botó de **Roda dentada** per obrir la configuració del Web Clipper.

La funcionalitat del peu de pàgina inclou:

- Botó **Agregar a Obsidian** per desar les dades a Obsidian.
- Desplegable de **Cambra forta** per canviar entre les cambres fortes desades afegides a la configuració del Web Clipper.
- Camp de **Carpeta** per definir a quina carpeta desar.
- **Intèrpret** per executar [[Interpretar pàgines web|indicacions en llenguatge natural]] a la pàgina.
