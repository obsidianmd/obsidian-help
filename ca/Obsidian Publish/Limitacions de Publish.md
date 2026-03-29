---
permalink: publish/limitations
---
> [!tip] Membres de la nostra increïble comunitat han creat solucions alternatives per a algunes d'aquestes limitacions. Per a més informació, si us plau, visita el nostre fil de [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) als fòrums d'Obsidian.

## Connectors de la comunitat

Obsidian Publish té un suport mínim per als [[Connectors de la comunitat]].

Els connectors que generen Markdown en cru, com el connector Waypoint, són compatibles amb Publish perquè no requereixen l'aplicació per renderitzar les seves dades.

En canvi, un connector que requereix un bloc de codi de connector per renderitzar, com Dataview o Fantasy Statblocks, no funcionarà per defecte a Publish.

## Gràfic

Publish ofereix personalització bàsica de colors per a la seva vista de gràfic utilitzant CSS. Podeu modificar els colors dels nodes al vostre fitxer `publish.css` utilitzant les [variables CSS de la Vista de Gràfic](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Tingueu en compte que el gràfic publicat no admet les opcions completes d'ordenació i visualització disponibles a la [[Vista gràfica]] de l'aplicació.

## Fitxers multimèdia

Obsidian Publish no està optimitzat per a la reproducció en temps real de vídeo o fitxers d'àudio grans. Incloem algunes bones pràctiques per gestionar els vostres [[Fitxers multimèdia|fitxers multimèdia]] en aquests documents.

Per millorar l'experiència dels vostres visitants, us recomanem que utilitzeu un servei d'allotjament de vídeo, com YouTube o Vimeo.

Podeu pujar fitxers de **fins a 50 MB** de mida al vostre lloc Publish. ^publish-media-limit

## PDFs

En dispositius mòbils, tauletes i ordinadors amb pantalles petites, podeu trobar problemes on un PDF incrustat no es carrega o només es mostra la primera pàgina. Això es deu a limitacions del renderitzador de PDF en dispositius mòbils.

Per a contingut dirigit a usuaris mòbils, suggerim proporcionar enllaços a PDFs allotjats externament o incloure enllaços interns que permetin als usuaris baixar el PDF directament al seu dispositiu.

## Cerca

Publish té suport bàsic per cercar text sense format en el contingut publicat. La preferència per als resultats de cerca es dona a:

- Noms de fitxer
- Àlies
- Noms d'encapçalament

Després de cercar coincidències en els elements anteriors, la cerca inclourà el text sense format de les notes publicades.

Per millorar la cercabilitat del vostre lloc publicat, es recomana utilitzar noms de fitxer descriptius, incorporar múltiples àlies i seleccionar noms d'encapçalament que reflecteixin amb precisió el contingut.

A més, Publish no admet actualment la funció de [[Cerca#Incrustar resultats de cerca en una nota|resultats de cerca incrustats]] de l'aplicació.
