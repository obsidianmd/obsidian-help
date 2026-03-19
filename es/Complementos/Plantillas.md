---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: >-
  Plantillas es un complemento principal que te permite insertar fragmentos de
  texto predefinidos en tu nota activa.
aliases:
  - Plugins/Plantillas
---
Plantillas es un [[Complementos principales|complemento principal]] que te permite insertar fragmentos de texto predefinidos en tu nota activa.

## Configurar tu carpeta de plantillas

1. En la esquina inferior izquierda, haz clic en **[[Configuración]]** ( ![[lucide-cog.svg#icon]] ).
2. En **Complementos principales → Plantillas → Ubicación de la carpeta de plantillas**, introduce la carpeta que contiene tus plantillas.

## Variables de plantilla

Puedes añadir información dinámica a tus plantillas usando _variables de plantilla_. Cuando insertas una plantilla que contiene una variable de plantilla, Plantillas la reemplaza con su valor correspondiente.

| Variable    | Descripción                                              |
|-------------|----------------------------------------------------------|
| `{{title}}` | Título de la nota activa.                                |
| `{{date}}`  | Fecha de hoy. **Formato predeterminado:** `YYYY-MM-DD`. |
| `{{time}}`  | Hora actual. **Formato predeterminado:** `HH:mm`.        |

Tanto `{{date}}` como `{{time}}` te permiten cambiar el formato predeterminado usando una _cadena de formato_.

Para establecer una cadena de formato, añade dos puntos (`:`) seguidos de una cadena de [tokens de formato de Moment.js](https://momentjs.com/docs/#/displaying/format/), por ejemplo `{{date:YYYY-MM-DD}}`.

Puedes usar `{{date}}` y `{{time}}` indistintamente con cadenas de formato, por ejemplo `{{time:YYYY-MM-DD}}`.

Puedes cambiar los formatos predeterminados de fecha y hora en **[[Configuración]] → Plantillas → Formato de fecha** y **[[Configuración]] → Plantillas → Formato de tiempo**.

> [!tip] Consejo
> También puedes usar las variables de plantilla `{{date}}` y `{{time}}` en los complementos [[Notas diarias]] y [[Creador de nota única]].

## Crear una plantilla

En la [[#Configurar tu carpeta de plantillas|carpeta de plantillas]], [[Gestionar notas#Crear una nueva nota|crea una nota]] que contenga el texto que deseas que aparezca cuando uses la plantilla. Puedes usar [[#Variables de plantilla|variables de plantilla]] para texto dinámico como la fecha actual.

Por ejemplo, aquí tienes una plantilla para notas de estudio:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Conceptos Clave


## Detalles Importantes


## Ejemplos


## Preguntas
- 

## Resumen


## Temas Relacionados
- [[]]
```

## Insertar una plantilla en la nota activa

**Importante:** Para insertar una plantilla, primero necesitas [[#Configurar tu carpeta de plantillas]].

1. En el menú de cinta, haz clic en **Insertar plantilla**.
2. Selecciona la plantilla para insertar en la posición del cursor en la nota activa.

## Propiedades de plantilla

![[Propiedades#^templates-properties]]
