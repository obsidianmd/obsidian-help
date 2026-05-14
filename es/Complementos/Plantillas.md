---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Plantillas es un complemento principal que te permite insertar fragmentos de texto predefinidos en tu nota activa.
aliases:
  - Plugins/Plantillas
---
Plantillas es un [[Complementos principales|complemento principal]] que te permite insertar fragmentos de texto predefinidos en tu nota activa.

## Configurar tu carpeta de plantillas

1. En la esquina inferior izquierda, selecciona **[[Configuración]]** ![[lucide-cog.svg#icon]].
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

Puedes usar `{{date}}` y `{{time}}` con cadenas de formato de la misma manera, por ejemplo `{{time:YYYY-MM-DD}}`.

Puedes cambiar los formatos predeterminados de fecha y hora en **[[Configuración]] → Complementos principales → Plantillas → Formato de fecha** y **[[Configuración]] → Complementos principales → Plantillas → Formato de tiempo**. ^template-settings-date-time-formatting

> [!tip]- Usar variables de fecha y hora en otros complementos
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

> [!warning]+ Editar plantillas en modo de código fuente
> En [[Vistas y modo de edición#Vista previa en vivo|Vista previa en vivo]], el panel de **Propiedades en el documento** puede sobrescribir las variables de plantilla que no tengan comillas.
>
> Para evitar esto, edita las plantillas en [[Vistas y modo de edición#Modo de código fuente|modo de código fuente]], o configura **[[Configuración]] → Editor → [[Configuración#Propiedades en el documento|Propiedades en el documento]]** a **Fuente**.

## Insertar una plantilla en la nota activa

> [!todo] [[#Configurar tu carpeta de plantillas]] antes de insertar una plantilla.

1. En el menú de cinta, selecciona **Insertar plantilla**.
2. Selecciona la plantilla para insertar en la posición del cursor en la nota activa.

Para insertar una plantilla usando la [[Paleta de comandos]] o [[Atajos de teclado#Configurar un atajo de teclado|un atajo de teclado personalizado]], usa el comando `Plantillas: Insertar plantilla`.

El contenido de la plantilla se inserta en la posición actual del cursor. Si tu cursor no está en el cuerpo de la nota, el contenido se inserta en la última posición del cursor.

### Propiedades de plantilla

![[Propiedades#^templates-properties]]

## Insertar fecha y hora actuales en la nota activa

Usa los comandos `Plantillas: Insertar fecha actual` y `Plantillas: Insertar hora actual` para insertar la fecha y hora actuales en la posición actual del cursor. Al igual que el comando `Insertar plantilla`, también puedes ejecutarlos con la paleta de comandos o un atajo de teclado personalizado.

La fecha y hora insertadas usan el [[#^template-settings-date-time-formatting|formato configurado en los ajustes del complemento]].
