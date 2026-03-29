---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Plantilles és un connector bàsic que us permet inserir fragments de text predefinits a la vostra nota activa.
---
Plantilles és un [[Connectors principals|connector principal]] que et permet inserir fragments de text predefinits a la nota activa.

## Configura la carpeta de plantilles

1. A la cantonada inferior esquerra, fes clic a **[[Configuració]]** ![[lucide-cog.svg#icon]].
2. A **Connectors principals → Plantilles → Ubicació de la carpeta de plantilles**, introdueix la carpeta que conté les teves plantilles.

## Variables de plantilla

Pots afegir informació dinàmica a les teves plantilles utilitzant _variables de plantilla_. Quan insereixes una plantilla que conté una variable de plantilla, Plantilles la substitueix pel seu valor corresponent.

| Variable    | Descripció                                          |
|-------------|-----------------------------------------------------|
| `{{title}}` | Títol de la nota activa.                            |
| `{{date}}`  | Data d'avui. **Format per defecte:** `YYYY-MM-DD`.  |
| `{{time}}`  | Hora actual. **Format per defecte:** `HH:mm`.       |

Tant `{{date}}` com `{{time}}` et permeten canviar el format per defecte utilitzant una _cadena de format_.

Per establir una cadena de format, afegeix dos punts (`:`) seguits d'una cadena de [tokens de format de Moment.js](https://momentjs.com/docs/#/displaying/format/), per exemple `{{date:YYYY-MM-DD}}`.

Pots utilitzar `{{date}}` i `{{time}}` indistintament amb cadenes de format, per exemple `{{time:YYYY-MM-DD}}`.

Pots canviar els formats de data i hora per defecte a **[[Configuració]] → Plantilles → Format de data** i **[[Configuració]] → Plantilles → Format d'hora**. ^template-settings-date-time-formatting

> [!tip] Consell
> També pots utilitzar les variables de plantilla `{{date}}` i `{{time}}` als connectors [[Notes diàries]] i [[Creador de notes úniques]].

## Crear una plantilla

A la [[#Configura la carpeta de plantilles|carpeta de plantilles]], [[Gestionar notes#Crear una nota nova|crea una nota]] que contingui el text que vols que aparegui quan utilitzis la plantilla. Pots fer servir [[#Variables de plantilla|variables de plantilla]] per a text dinàmic com la data actual.

Per exemple, aquí tens una plantilla per a notes d'estudi:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Conceptes clau


## Detalls importants


## Exemples


## Preguntes
- 

## Resum


## Temes relacionats
- [[]]
```

## Inserir una plantilla a la nota activa

**Important:** Per inserir una plantilla, primer has de [[#Configura la carpeta de plantilles]].

1. A la barra d'eines, fes clic a **Inserir plantilla**.
2. Selecciona la plantilla per inserir-la a la posició del cursor a la nota activa.

Per inserir una plantilla utilitzant la [[Paleta d'ordres]] o [[Tecles d'accés ràpid#Establir una drecera de teclat|una drecera de teclat personalitzada]], utilitza l'ordre `Plantilles: Inserir plantilla`.

El contingut de la plantilla s'insereix a la posició actual del cursor. Si el cursor no és al cos de la nota, el contingut s'insereix a l'última posició del cursor.

### Propietats de plantilla

![[Propietats#^templates-properties]]

## Inserir la data i hora actuals a la nota activa

Utilitza les ordres `Plantilles: Inserir data actual` i `Plantilles: Inserir hora actual` per inserir la data i hora actuals a la posició actual del cursor. Com l'ordre `Inserir plantilla`, això es pot fer amb la [[Paleta d'ordres]] o [[Tecles d'accés ràpid#Establir una drecera de teclat|una drecera de teclat personalitzada]].

La data i hora inserides utilitzen el [[#^template-settings-date-time-formatting|format establert a la configuració del connector]].
