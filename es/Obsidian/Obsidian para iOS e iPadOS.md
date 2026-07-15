---
permalink: ios
---
La aplicación móvil de Obsidian para iOS e iPadOS lleva poderosas capacidades de toma de notas a tu iPhone y iPad. Puedes descargarla desde la [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Esta página cubre funciones específicas de iOS, incluyendo widgets, integración con Siri y Atajos.

## Sync

Para obtener información sobre la sincronización de notas entre dispositivos, consulta [[Sincronizar notas entre dispositivos]].

## Widgets

Obsidian para iOS ofrece varios widgets para realizar acciones rápidas en tu bóveda.

> [!note] Nota
> Los widgets están disponibles en iOS e iPadOS 18 y versiones superiores.
> Los widgets no están disponibles cuando se utiliza "Requerir Face ID" para desbloquear la aplicación.


### Widgets de pantalla de bloqueo y Centro de control

Los widgets de pantalla de bloqueo y Centro de control te permiten:
- Crear una nueva nota
- Abrir una nota específica
- Abrir la nota diaria
- Abrir búsqueda
- Abrir Obsidian

### Widgets de pantalla de inicio

Los widgets de pantalla de inicio te permiten:
- Crear una nota
- Ver una nota
- Abrir tu nota diaria

### Personalizar widgets

Puedes personalizar los widgets para adaptarlos a tu flujo de trabajo, como elegir qué bóveda usar o especificar una nota particular para abrir.

- **Widgets de pantalla de inicio:** Mantén presionado el widget, luego selecciona **Editar Widget**.
- **Widgets de pantalla de bloqueo:** Mantén presionada tu pantalla de bloqueo, toca **Personalizar**, selecciona la pantalla de bloqueo, luego toca el widget que deseas personalizar.
- **Widgets del Centro de control:** Abre el Centro de control, toca el botón **+** en la esquina superior izquierda para comenzar a editar, luego toca el widget que deseas personalizar.

Opciones de configuración del widget **Nueva nota**:

![[ios-new-note-configuration.png|400]]

Opciones de configuración del widget **Ver nota**:

![[ios-view-note-configuration.png|400]]

## Atajos

Obsidian se integra con la aplicación Atajos de Apple, permitiéndote crear automatizaciones potentes. Los atajos disponibles incluyen:

- **Abrir una nota** — Abre una nota específica en tu bóveda
- **Crear una nueva nota** — Crea una nueva nota en tu bóveda
- **Abrir nota diaria** — Ir directamente a la nota diaria de hoy
- **Capturar en la nota diaria** — Añade texto al principio o al final de la nota diaria sin abrir la aplicación Obsidian
- **Capturar en marcador** — Añade texto al principio o al final de una nota marcada sin abrir la aplicación Obsidian

Los atajos de captura son particularmente útiles para tomar notas rápidas, ya que te permiten agregar contenido a una nota en segundo plano.

## Hoja para compartir

La hoja para compartir de Obsidian te permite capturar contenido de páginas web. También funciona con aplicaciones como YouTube y otras redes sociales.

> [!note]
> - La hoja para compartir nativa está disponible en iOS e iPadOS 18 y versiones superiores.
> - Las funciones de la hoja para compartir descritas en esta sección requieren Obsidian 1.13.0 o posterior.

Usa la hoja para compartir para enviar rápidamente contenido desde otra aplicación a Obsidian:
1. En otra aplicación, toca el botón **Compartir**.
2. Selecciona **Obsidian**.
3. Elige una ubicación.
4. Revisa o edita el contenido capturado.
5. Toca **Guardar**.

![[ios-share-sheet-extension.png|400]]

### Ubicaciones

Las ubicaciones te permiten decidir a dónde debe ir el contenido compartido antes de guardarlo.

Las ubicaciones pueden capturar en:
- **Nueva nota** — Crea una nueva nota en una bóveda o carpeta.
- **Nota diaria** — Añade contenido al principio o al final de la nota diaria de hoy.
- **Nota marcada** — Añade contenido al principio o al final de una nota marcada.
- **Nota** — Elige una nota existente en tu bóveda.
- **Nuevo marcador** — Guarda una URL compartida en los marcadores de Obsidian.

![[ios-share-sheet-locations.png|400]]

### Personalizar ubicaciones

Puedes crear ubicaciones para flujos de trabajo comunes, como guardar artículos en una bandeja de entrada, añadir citas a tu nota diaria o agregar enlaces a marcadores.

Para personalizar ubicaciones:

1. Abre Obsidian desde la hoja para compartir de iOS.
2. Toca la ubicación actual en la barra de herramientas.
3. Toca el botón **+** para crear una nueva ubicación, o selecciona una ubicación existente para editarla.
4. Elige la bóveda, el comportamiento y los ajustes opcionales.

Dependiendo del tipo de `Comportamiento`, puedes configurar opciones como:
- Carpeta
- Plantilla
- Grupo de marcadores
- Posición de añadir al principio o al final
- Si los enlaces compartidos capturan el **Texto completo** o solo la **URL**

![[ios-share-sheet-add-location.png|400]]

### Usar una plantilla al compartir

Puedes usar una plantilla al compartir contenido desde la hoja para compartir. Las plantillas te permiten dar formato al contenido web capturado con detalles como el título de la página, el autor, el sitio web de origen y la fecha de publicación.

Para configurar una ubicación con una plantilla:

1. Abre Obsidian desde la hoja para compartir de iOS.
2. Toca la ubicación actual en la barra de herramientas.
3. Toca el botón **+** para crear una nueva ubicación.
4. Introduce un nombre para la ubicación.
5. Selecciona una bóveda.
6. Establece **Comportamiento** en **Nueva nota**.
7. En la sección **Opcional**, toca **Plantilla**.
8. Selecciona una nota de tu bóveda para usarla como plantilla.
9. Toca **Guardar** para guardar la ubicación.

![[ios-share-sheet-set-template.png|400]]

Cuando compartes un enlace usando esta ubicación, Obsidian aplica primero la plantilla y luego añade el contenido compartido.

Marcadores de posición compatibles en las plantillas:

| Marcador de posición | Descripción |
| --- | --- |
| `{{author}}` | Autor del artículo |
| `{{description}}` | Descripción o resumen del artículo |
| `{{domain}}` | Nombre de dominio del sitio web |
| `{{favicon}}` | URL del favicon del sitio web |
| `{{image}}` | URL de la imagen principal del artículo |
| `{{published}}` | Fecha de publicación del artículo, usando el formato de fecha predeterminado |
| `{{published: YYYY-MM-DD}}` | Fecha de publicación usando un formato de fecha personalizado |
| `{{site}}` | Nombre del sitio web |
| `{{title}}` | Título del artículo |
| `{{url}}` | URL del artículo |
| `{{wordCount}}` | Número total de palabras en el contenido extraído |

También puedes usar los marcadores de posición estándar de fecha y hora de las plantillas:

| Marcador de posición | Descripción |
| --- | --- |
| `{{date}}` | Fecha actual |
| `{{date: YYYY-MM-DD}}` | Fecha actual usando un formato personalizado |
| `{{time}}` | Hora actual |
| `{{time: HH:mm}}` | Hora actual usando un formato personalizado |

## Integración con Siri

Puedes usar comandos de voz de Siri para interactuar con Obsidian:

- "Capturar usando Obsidian"
- "Capturar en Obsidian"
- "Abrir mi nota diaria en Obsidian"
- "Buscar en Obsidian"

## Integración con Spotlight

Cuando buscas "Obsidian" en Spotlight de iOS, verás acciones rápidas:
- Nueva nota
- Buscar
- Nota diaria
