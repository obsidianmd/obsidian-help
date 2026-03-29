---
permalink: publish/publish
publish: true
mobile: true
description: Apreneu a publicar el vostre contingut mitjançant Obsidian Publish.
---
Aquesta pàgina explica com gestionar el contingut publicat. Per aprendre a personalitzar l'estil del teu lloc, consulta [[Personalitza el teu lloc]].

## Requisits previs

- Un compte d'Obsidian. Si no en tens un, [registra't ara](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Una subscripció activa a Obsidian Publish. Si no en tens una, subscriu-te des del [tauler del teu compte](https://obsidian.md/account/publish).
- El connector principal **Publish** està [[Configura Obsidian Publish#Habilitar Obsidian Publish|activat]].
- S'ha creat un [[Gestionar llocs#Crear un lloc nou|lloc Publish]].

## Publicar notes

1. A la **Cinta**, selecciona **Publica els canvis** ![[lucide-send.svg#icon]].
2. Al diàleg **Publica els canvis**, selecciona **NOU** per veure totes les notes no publicades.
3. Selecciona les notes que vols publicar.
4. Selecciona **Publica**.

## Despublicar notes

Les notes es mantenen a la teva cambra forta local fins i tot després de despublicar-les.

1. A la **Cinta**, selecciona **Publica els canvis** ![[lucide-send.svg#icon]].
2. Al diàleg **Publica els canvis**, selecciona **SENSE CANVIS** per veure totes les notes publicades.
3. Selecciona les notes que vols despublicar.
4. Selecciona **Publica**.

## Actualitzar una nota publicada

1. A la **Cinta**, selecciona **Publica els canvis** ![[lucide-send.svg#icon]].
2. Al diàleg **Publica els canvis**, selecciona **CANVIS** per veure totes les notes modificades des de l'última publicació.
3. Selecciona les notes que vols actualitzar.
4. Selecciona **Publica**.

> [!hint] L'eliminació de notes renomenades o suprimides i imatges de Publish es fa en aquest pas. Has de seleccionar manualment la casella de selecció per eliminar aquestes dades, ja que no se selecciona automàticament per seguretat.

## Publicar dades enllaçades

Quan publiques notes que contenen enllaços a altres notes o imatges incrustades, es poden produir enllaços trencats a menys que les notes enllaçades també es publiquin. **Obsidian Publish** ajuda a prevenir-ho seleccionant automàticament els fitxers multimèdia enllaçats des de les notes que ja has escollit.

Per incloure totes les notes enllaçades, selecciona **Afegir enllaçat** al diàleg **Publica els canvis**.

Abans de publicar, revisa la selecció actualitzada per assegurar-te que no inclou cap dada que no estiguis preparat per publicar.

> [!tip] La funció **Afegir enllaçat** respecta qualsevol exclusió definida a [[#Ignorar dades]].

## Seleccionar automàticament dades per publicar

Estableix `publish: true` a les [[Propietats]] d'una nota per incloure-la automàticament per a la publicació com a nota nova o modificada.

També pots seleccionar automàticament notes i imatges enllaçades en carpetes específiques afegint-les com a carpetes **Incloses**:

1. A la **Cinta**, selecciona **Publica els canvis** ![[lucide-send.svg#icon]] o obre la [[Paleta d'ordres]] i escriu **Publish: Publica els canvis...**.
2. Selecciona la icona **Gestiona els filtres de publicació** ![[lucide-filter.svg#icon]].
3. A la secció **Carpetes incloses**, selecciona **Gestionar**.
4. Escull les carpetes que vols incloure des del suggeridor.
5. La carpeta s'afegeix a la llista d'incloses.
6. Selecciona **Fet** quan hagis acabat.

### Ignorar dades

Per ignorar una nota a Obsidian Publish, estableix `publish: false` a les [[Propietats]] de la nota. La nota ja no apareixerà a la llista de notes per publicar.

També pots ignorar automàticament notes i imatges en carpetes específiques afegint-les com a carpetes **Excloses**:

1. A la **Cinta**, selecciona **Publica els canvis** ![[lucide-send.svg#icon]] o obre la [[Paleta d'ordres]] i escriu **Publish: Publica els canvis...**.
2. Selecciona la icona **Gestiona els filtres de publicació** ![[lucide-filter.svg#icon]].
3. A la secció **Carpetes excloses**, selecciona **Gestionar**.
4. Escull les carpetes que vols excloure des del suggeridor.
5. La carpeta s'afegeix a la llista d'excloses.
6. Selecciona **Fet** quan hagis acabat.

> [!note] `publish: true` sobreescriu les carpetes excloses
> Si un fitxer té `publish: true`, es publicarà igualment encara que estigui en una carpeta o filtre exclòs. Això és perquè `publish: true` ofereix un control més específic.
