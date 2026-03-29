---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Aquesta pàgina detalla alguns problemes comuns que podeu trobar en utilitzar Obsidian Publish.
---
Aquesta pàgina enumera problemes comuns que podeu trobar amb [[Introducció a Obsidian Publish|Obsidian Publish]] i com resoldre'ls.

Assegureu-vos de revisar primer [[Fitxers multimèdia]] i [[Limitacions de Publish|Limitacions de Publish]].

## General

### Publicar notes

**Rebo un error de hash quan intento publicar una nota.**

Esteu utilitzant un [[Connectors de la comunitat|connector de la comunitat]] que modifica l'hora de modificació del fitxer en actualitzar-lo? Si és així, aquest connector pot estar en conflicte amb Publish. Si us plau, envieu un informe d'error al desenvolupador del connector per resoldre el problema.

**Rebo un error de xarxa estrany, i tinc un lloc Publish molt gran.**

Probablement necessitem examinar la vostra base de dades. Si us plau, [[Ajuda i suport#Contacta amb el suport d'Obsidian|contacteu amb el suport d'Obsidian]] per obtenir assistència.

## CSS i temes

**El meu CSS a la meva [[Carpeta de configuració]] no funciona a Publish. Per què?**

Publish no llegeix de la carpeta de configuració. En lloc d'això, haureu de crear un fitxer `publish.css` al directori arrel de la vostra cambra forta de publicació. Podeu obtenir més informació sobre això a [[Personalitza el teu lloc]].

**El meu CSS no es veu igual a Publish que a l'aplicació. Per què?**

El CSS d'Obsidian Publish no és exactament el mateix que el de l'aplicació. Recomanem [desenvolupar qualsevol CSS i tema](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) específicament per a Publish des de zero.

En _general_, el que funciona per a la [[Vistes i mode d'edició#Vista de lectura|vista de lectura]] té una alta probabilitat de funcionar a Publish.
