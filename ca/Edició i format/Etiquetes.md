---
permalink: tags
---
Les etiquetes són paraules clau o temes que t'ajuden a trobar ràpidament les notes que vols.

## Afegir una etiqueta a una nota

Per crear una etiqueta, introdueix un símbol coixinet (`#`) a l'editor, seguit d'una paraula clau. Per exemple, `#reunió`.

També pots afegir etiquetes utilitzant la [[Propietats|propietat]] `tags`. Les etiquetes en YAML sempre s'han de formatar com una llista:

```yaml
---
tags:
  - recepta
  - cuina
---
```

## Trobar notes utilitzant etiquetes

Per trobar notes utilitzant el connector [[Cerca]], fes servir l'[[Cerca#Operadors de cerca|operador de cerca]] `tag` al teu terme de cerca, per exemple `tag:#reunió`.

També pots cercar etiquetes fent-hi clic a les teves notes.

Per trobar notes utilitzant el connector [[Panell d'etiquetes|Panell d'etiquetes]], selecciona **Etiquetes: Mostra el panell d'etiquetes** a la [[Paleta d'ordres]], i després selecciona l'etiqueta que vols cercar.

## Etiquetes niades

Les etiquetes niades defineixen jerarquies d'etiquetes que faciliten trobar i filtrar etiquetes relacionades.

Crea etiquetes niades utilitzant barres inclinades (`/`) al nom de l'etiqueta, per exemple `#safata/per-llegir` i `#safata/processant`.

- A la [[Cerca]], `tag:safata` coincidirà amb `#safata` així com amb totes les etiquetes niades com `#safata/per-llegir`.  
- Al [[Panell d'etiquetes]], les etiquetes niades es mostren com a pertanyents a la seva etiqueta pare.  
- A [[Introducció a Bases|Bases]], les etiquetes niades són reconegudes per la funció [[Funcions#hasTag|`hasTag`]], de manera que `file.hasTag("a")` coincidirà tant amb `#a` com amb `#a/b`.  

## Format d'etiqueta

Pots utilitzar qualsevol dels següents caràcters a les teves etiquetes:

- Lletres alfabètiques
- Números
- Guió baix (`_`)
- Guió (`-`)
- Barra inclinada (`/`) per a [[#Etiquetes niades]]
- Caràcters Unicode comunament acceptats, incloent emojis i altres símbols

Les etiquetes han de contenir almenys un caràcter no numèric. Per exemple, #1984 no és una etiqueta vàlida, però #y1984 sí que ho és.

Les etiquetes no distingeixen entre majúscules i minúscules. Per exemple, #etiqueta i #ETIQUETA es tractaran com a idèntiques.

> [!note] 
> Les etiquetes es mostraran amb les majúscules i minúscules amb què es van crear per primera vegada al [[Panell d'etiquetes]]. 
> Per exemple, crear #Etiqueta i després #ETIQUETA mostrarà #Etiqueta per a ambdues. 

Les etiquetes no poden contenir espais en blanc. Per separar dues o més paraules, pots utilitzar els formats següents:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
