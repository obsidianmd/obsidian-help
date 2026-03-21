---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: Las propiedades permiten organizar información sobre una nota. Las propiedades contienen datos estructurados como texto, enlaces, fechas, casillas de verificación y números.
aliases:
  - Advanced topics/Asunto principal de YAML
---
Las propiedades permiten organizar información sobre una nota. Las propiedades contienen datos estructurados como texto, enlaces, fechas, casillas de verificación y números. Las propiedades también se pueden usar en combinación con [[Complementos de la comunidad]] que pueden hacer cosas útiles con tus datos estructurados.

## Añadir propiedades a una nota

Hay varias formas de añadir una propiedad a una nota:

- Usa el [[Paleta de comandos|comando]] **Añadir propiedad**.
- Usa el [[Teclas de acceso rápido|atajo de teclado]] **`Cmd/Ctrl+;`**.
- Elige **Añadir propiedad** desde el menú **Más acciones** (que se abre con el icono de tres puntos o haciendo clic derecho en la pestaña).
- Escribe `---` al inicio del archivo.

Una vez que añadas una propiedad, aparecerá una fila en la parte superior del archivo con dos campos: el _nombre_ de la propiedad y el _valor_ de la propiedad.

Para el nombre, puedes elegir lo que desees. Obsidian proporciona varias propiedades predeterminadas: `tags`, `cssclasses` y `aliases`.

Una vez que elijas el nombre de la propiedad, puedes asignarle un valor.

### Tipos de propiedad

Además de un nombre y un valor, las propiedades también tienen un _tipo_. El tipo de una propiedad determina qué clase de valores puede almacenar y cómo Obsidian las gestiona. Para cambiar el tipo de una propiedad, haz clic en el icono de tipo junto al nombre de la propiedad y selecciona una opción diferente. También puedes gestionar los tipos de propiedad usando el complemento principal [[Vista de propiedades]].

Obsidian admite los siguientes tipos de propiedad:

- **[[#Texto]]**
- **[[#Lista]]**
- **[[#Número]]**
- **[[#Casilla de verificación]]**
- **[[#Fecha]]**
- **[[#Fecha y hora]]**
- **[[#Etiquetas]]**

Una vez que se asigna un tipo de propiedad a un nombre de propiedad, todas las propiedades con ese nombre en toda tu bóveda usarán el mismo tipo.

## Usos avanzados

### Buscar propiedades

Las propiedades tienen su propia [[Búsqueda|sintaxis de búsqueda]] que puedes usar junto con otros términos de búsqueda y operadores. [[Búsqueda#Buscar propiedades|Consulta la sintaxis de búsqueda para propiedades]].

### Plantillas

Puedes añadir propiedades a las [[Plantillas|Plantillas]].

Cuando insertas una plantilla en la nota activa, todas las propiedades de la plantilla se añadirán a la nota. Obsidian también fusionará cualquier propiedad que exista en tu nota con las propiedades de la plantilla. ^templates-properties

### Renombrar propiedades

Puedes renombrar una propiedad haciendo clic derecho sobre ella en la [[Vista de propiedades|vista de Todas las propiedades]].

### Modos de visualización

Puedes cambiar cómo se muestran las propiedades en tu nota yendo a **[[Configuración]] → Editor → Propiedades en el documento**. Las opciones son:

- **Visibles** (predeterminado) – muestra las propiedades en la parte superior de la nota, si las hay.
- **Ocultas** – oculta las propiedades, que aún pueden mostrarse en la barra lateral mediante la [[Vista de propiedades]].
- **Fuente** – muestra las propiedades en formato YAML de texto sin formato.

### Fragmentos CSS

Puedes usar [[Fragmentos CSS]] para cambiar la apariencia de notas específicas.

### No soportado

Algunas funcionalidades no están actualmente soportadas en Obsidian:

- **Propiedades anidadas**: Para ver propiedades anidadas, recomendamos usar el [[Vistas y modo de edición#Modo de código fuente|modo de código fuente]].
- **Edición masiva de propiedades**: Para una edición masiva en profundidad fuera de la [[Vista de propiedades]], recomendamos usar herramientas de edición masiva como VSCode, scripts y complementos de la comunidad.
- **Markdown en propiedades**: Esta es una limitación intencional ya que las propiedades están diseñadas para pequeñas piezas atómicas de información que sean legibles tanto para humanos como para máquinas.

## Atajos de teclado

### Añadir una propiedad

| Acción | Atajo de teclado |
|---|---|
|Añadir nueva propiedad|`Cmd + ;`|

### Navegar entre propiedades

Cuando una propiedad tiene el foco

| Acción | Atajo de teclado |
|---|---|
|Enfocar siguiente propiedad|`Flecha abajo` o `Tab`|
|Enfocar propiedad anterior|`Flecha arriba` o `Shift+Tab`|
|Saltar al editor|`Alt+Flecha abajo`|

### Seleccionar propiedades

| Acción | Atajo de teclado |
|---|---|
|Extender selección hacia arriba|`Shift+Flecha arriba`|
|Extender selección hacia abajo|`Shift+Flecha abajo`|
|Seleccionar todo|`Cmd+A`|

### Editar propiedades

| Acción | Atajo de teclado |
|---|---|
|Editar nombre de propiedad|`Flecha izquierda`|
|Editar valor de propiedad|`Flecha derecha`|
|Enfocar propiedad|`Escape`|
|Eliminar propiedad|`Cmd+Retroceso`<br><br>si hay propiedades seleccionadas, eliminará la selección en su lugar.|
|Deshacer|`Cmd+Z`|
|Rehacer|`Cmd+Shift+Z`|

### Vim (avanzado)

| Acción | Atajo de teclado |
|---|---|
|Mover abajo|`j`|
|Mover arriba|`k`|
|Enfocar clave|`h`|
|Enfocar valor|`l`|
|Enfocar valor (Cursor al final)|`A`|
|Enfocar valor (Cursor al inicio)|`i`|
|Crear nueva propiedad|`o`|

## Formato de propiedades

Las propiedades se almacenan en formato [YAML](https://yaml.org/) en la parte superior del archivo. YAML es un formato popular que es fácil de leer tanto para humanos como para computadoras.

Los nombres de las propiedades se separan de sus valores por dos puntos seguidos de un espacio:

```yaml
---
name: value
---
```

Aunque el orden de cada par nombre-valor no importa, cada nombre debe ser único dentro de una nota. Por ejemplo, no puedes tener más de una propiedad `tags`.

Los valores pueden ser [[#Texto|texto]], [[#Número|números]], [[#Casilla de verificación|casillas de verificación]], [[#Fecha|fechas]], [[#Fecha y hora|fechas y horas]], o [[#Lista|listas]].

### Texto

Las propiedades de texto contienen una sola línea de texto. El formato Markdown no se renderiza en las propiedades de texto. Los hashtags no crean etiquetas cuando se usan en propiedades de texto.

Las propiedades de texto pueden contener URLs y [[Enlaces internos]] usando la sintaxis `[[Enlace]]`. Los [[Enlaces internos]] en propiedades de texto deben estar rodeados con comillas. Obsidian las añadirá automáticamente si introduces manualmente enlaces internos en las propiedades, pero ten cuidado de añadirlas cuando uses complementos de plantillas.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Lista

Las propiedades de lista contienen múltiples valores. Cada valor en una lista aparece en su propia línea, precedido por un guion (-) y un espacio.

Los valores de lista pueden contener texto, números y [[Enlaces internos]]. Cuando uses [[Enlaces internos]] en propiedades de lista, rodéalos con comillas.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Número

Las propiedades de tipo número siempre deben ser un número literal, no una expresión con operadores. Se permiten tanto enteros como decimales.

```yaml
---
year: 1977
pie: 3.14
---
```

### Casilla de verificación

Las propiedades de casilla de verificación son `true` o `false`. En vista previa en vivo, esto se muestra como una casilla de verificación.

```yaml
---
favorite: true
reply: false
last: # Valor indeterminado; generalmente tratado como false
```

### Fecha

Las propiedades de fecha se almacenan en el siguiente formato:

```yaml
---
date: 2020-08-21
---
```

El selector de fecha sigue el formato predeterminado de fecha y hora de tu sistema operativo. Puedes cambiarlo en las preferencias del sistema:

> [!info]- Windows
> **[[Configuración]] → Hora e idioma → Idioma y región → Formato regional → Cambiar formatos**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Preferencias del Sistema → Idioma y región → Formato de fecha**
> 
> ![[Mac-OS-DateTime.png|450]]

Con el complemento [[Notas diarias]] habilitado, la propiedad de fecha funcionará adicionalmente como un enlace interno a la nota diaria correspondiente a esa fecha.

![[Notas diarias#^daily-notes-date]]

### Fecha y hora

Las propiedades de fecha y hora incluyen tanto una fecha como una hora específica, almacenadas en el siguiente formato:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Al igual que las [[#Fecha|propiedades de fecha]], el selector de fecha y hora sigue el formato predeterminado de tu sistema operativo. Puedes cambiarlo en las preferencias del sistema.

### Etiquetas

Las propiedades de etiquetas son un tipo de propiedad especial usado exclusivamente por la propiedad `tags`. Este tipo de propiedad no puede asignarse a otras propiedades.

Las propiedades de etiquetas tienen formato de lista, con cada etiqueta en su propia línea precedida por un guion (-) y un espacio.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

La propiedad `tags` es una de las [[#Propiedades predeterminadas]] de Obsidian. Consulta [[Etiquetas]] para más información sobre el uso de etiquetas en Obsidian.

### Propiedades JSON

Aunque recomendamos usar YAML para definir propiedades, también puedes definir propiedades usando [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Ten en cuenta que el bloque JSON será leído, interpretado y guardado como YAML.

## Propiedades predeterminadas

Obsidian viene con un conjunto de propiedades predeterminadas:

| Propiedad    | Tipo  | Descripción                                                  |
| ------------ | ----- | ------------------------------------------------------------ |
| `tags`       | Lista | Ver [[Etiquetas\|Etiquetas]].             |
| `aliases`    | Lista | Ver [[Alias]].                                               |
| `cssclasses` | Lista | Permite dar estilo a notas individuales usando [[Fragmentos CSS]]. |

### Propiedades para Obsidian Publish

Las siguientes propiedades predeterminadas pueden usarse con [[Introducción a Obsidian Publish|Obsidian Publish]]:

| Propiedad     | Descripción                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| `publish`     | Ver [[Publicar tu contenido#Seleccionar automáticamente notas para publicar\|Seleccionar automáticamente notas para publicar]]. |
| `permalink`   | Ver [[Enlaces permanentes\|Enlaces permanentes]].                                                                    |
| `description` | Ver [[Vistas previas de enlaces en redes sociales#Descripción\|Descripción]].                                        |
| `image`       | Ver [[Vistas previas de enlaces en redes sociales#Imagen\|Imagen]].                                                  |
| `cover`       | Ver [[Vistas previas de enlaces en redes sociales#Imagen\|Imagen]].                                                  |

### Propiedades obsoletas

Estas propiedades quedaron obsoletas en Obsidian 1.4 y deben reemplazarse por sus equivalentes modernos. El soporte para ellas como [[#Propiedades predeterminadas]] se eliminó en Obsidian 1.9.

| Propiedad  | Descripción                            |
|------------|----------------------------------------|
| `tag`      | Alias obsoleto de `tags`.              |
| `alias`    | Alias obsoleto de `aliases`.           |
| `cssclass` | Alias obsoleto de `cssclasses`.        |

> [!tip] Si necesitas convertir tus archivos en tu bóveda al formato de [[#Propiedades predeterminadas]], puedes usar el [[Conversor de formato]] para cambiar tu bóveda de forma masiva.
