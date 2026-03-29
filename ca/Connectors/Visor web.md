---
permalink: plugins/web-viewer
---
El visor web és un [[Connectors principals|connector principal]] que et permet obrir enllaços externs dins d'Obsidian a l'escriptori. Això et permet llegir el contingut dels enllaços sense sortir de l'aplicació i facilita la multitasca en projectes de recerca web.

Els enllaços externs s'obren com una [[Pestanyes|pestanya]] que pots reorganitzar, dividir i obrir en una [[Finestres emergents|finestra emergent]]. Qualsevol targeta de pàgina web incrustada en fitxers de [[Canvas]] es pot obrir com a pestanyes del visor web.

El visor web no és un substitut del teu navegador principal. El visor web proporciona una manera ràpida d'accedir a pàgines web per a la recerca dins d'Obsidian. No obstant això, no ofereix la funcionalitat completa, els controls de seguretat ni l'extensibilitat d'un navegador dedicat.

## Vista de lectura

Fes clic a la icona de les ulleres per veure una versió en text sense format de la pàgina web. Aquesta funció funciona netejant el contingut amb la biblioteca Readability de Mozilla desenvolupada per a Firefox.

## Desa a la cambra forta

Fes clic a la icona de més accions per desar una pàgina web a la teva cambra forta. Pots personalitzar la ubicació de desament anant a **[[Configuració]]** → **Visor web**.

## Bloqueig d'anuncis

El visor web bloqueja els anuncis per defecte. Pots personalitzar les regles de bloqueig d'anuncis afegint llistes com ara [Easylist](https://easylist.to/).

## Seguretat

Si fas servir connectors d'Obsidian de tercers, recomanem utilitzar el teu navegador principal per a tasques sensibles i llocs web protegits amb contrasenya en lloc del visor web.

El visor web es basa en la mateixa funcionalitat de [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) que et permet incrustar pàgines web a [[Canvas]]. El visor web ha estat [auditat de manera independent](https://obsidian.md/blog/cure53-second-client-audit/) per verificar que s'ha implementat de manera segura.

Els connectors d'Obsidian [[Seguretat dels connectors#Capacitats dels connectors|no estan aïllats]] i tenen un control profund sobre l'aplicació. Aquest disseny permet una funcionalitat potent però també comporta compromisos de seguretat. Mentre Obsidian s'està executant, els connectors de tercers tenen accés complet a les cookies del visor web.
