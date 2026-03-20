---
permalink: style-guide
publish: true
mobile: true
description: Esta página explica la guía de estilo para escribir nuestra documentación de soporte.
---
La documentación de Obsidian sigue las directrices de estilo listadas en esta página. Estas directrices se basan en las mejores prácticas de la industria, particularmente la [guía de estilo de documentación para desarrolladores de Google](<https://developers.google.com/style>) y la [Guía de estilo de Microsoft](https://learn.microsoft.com/en-us/style-guide/). Para casos especiales no cubiertos a continuación, consulte esas guías externas como referencias secundarias.

> [!tip]- Contribuir
> La mayor parte de la documentación existía antes de que existiera esta guía de estilo.
> 
> Si encuentras alguna violación de esta guía de estilo, por favor [crea un issue](https://github.com/obsidianmd/obsidian-docs/issues/new) y envía un pull request a [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminología y gramática

### Estilo del lenguaje

Para nuestra documentación en inglés, se recomienda usar [inglés global](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) para servir mejor a nuestra audiencia mundial y para ayudar con las [[#Traducciones]]. Esto significa:

- Evitar modismos y expresiones culturalmente específicas
- Usar voz activa y construcción directa de oraciones
- Preferir palabras simples y comunes sobre terminología compleja
- Ser explícito en lugar de implícito
- Para convenciones ortográficas, usar inglés americano (por ejemplo, 'organize' no 'organise').

### Términos

- Preferir "keyboard shortcut" sobre "hotkey". Usar Hotkey cuando se refiera a la función específica.
- Preferir "the Obsidian app" en móvil y "the Obsidian application" en escritorio.
- Preferir "sync" o "syncing" sobre "synchronise" o "synchronising".
- Preferir "search term" sobre "search query".
- Preferir "heading" sobre "header" al referirse a un texto que introduce una sección.
- Preferir "maximum" sobre "max" y "minimum" sobre "min".

### Nombres de productos

Los nombres de productos de Obsidian comienzan con "Obsidian", por ejemplo "Obsidian Publish" y "Obsidian Sync".

Si un párrafo se vuelve demasiado repetitivo, puedes usar la forma abreviada en referencias posteriores.

Por ejemplo:

_Para permitir la configuración específica por dispositivo, Obsidian Sync no sincroniza sus propios ajustes. Necesitas configurar Sync para cada uno de tus dispositivos._

### Interfaz de usuario e interacciones

- Usa **negrita** para indicar texto de botones
- Preferir "seleccionar" sobre "tocar" o "hacer clic".
	- Para instrucciones específicas de móvil, "tocar" es aceptable al describir interacciones táctiles ya que "hacer clic" no está disponible.
- Preferir "barra lateral" sobre "barra lateral separada".
- Preferir "ejecutar" sobre "invocar" al referirse a comandos o acciones.

Al referirse a múltiples interacciones de interfaz en secuencia, usa el símbolo → (U+2192). Por ejemplo, "**[[Configuración]] → Complementos creados por la comunidad**".

### Notas, archivos y carpetas

- Usa "nota" al referirte a un archivo Markdown en la bóveda.
- Usa "archivo" al referirte a otras extensiones de archivo distintas de Markdown.
- Preferir "nombre de la nota" sobre "título de la nota".
- Preferir "nota activa" sobre "nota actual".
- Preferir "carpeta" sobre "directorio".
- Preferir "tipo de archivo" sobre "formato de archivo", a menos que se refiera específicamente al formato de datos del contenido del archivo.

Al moverse entre notas, usa "abrir" si el destino está oculto, y "cambiar" si tanto la nota de origen como la de destino están abiertas en divisiones separadas.

### Documentación de referencia para ajustes

Cuando sea posible, cualquier ajuste debería documentarse dentro de Obsidian usando un texto descriptivo. Evita documentar un ajuste específico en la Ayuda de Obsidian a menos que:

- Requiera un conocimiento más profundo sobre cómo y cuándo usarlo.
- Sea comúnmente mal utilizado o preguntado.
- Cambie _drásticamente_ la experiencia del usuario.

Considera usar un recuadro de consejo si quieres llamar la atención sobre un ajuste específico.

### Términos direccionales

Usa guiones en los términos direccionales cuando se usen como adjetivos. Evita el uso de guiones cuando la dirección se usa como sustantivo.

**Recomendado:**

- Selecciona **[[Configuración]]** en la esquina inferior izquierda.
- Selecciona **[[Configuración]]** en la parte inferior izquierda.

**No recomendado:**

- Selecciona **[[Configuración]]** en la esquina inferior izquierda (sin guión).
- Selecciona **[[Configuración]]** en la inferior-izquierda.

Preferir "superior izquierda" y "superior derecha" sobre "arriba a la izquierda" y "arriba a la derecha".

No indiques una dirección al referirte a ajustes. La ubicación del control de ajustes depende del dispositivo.

**Recomendado:**

- Junto a **Elegir bóveda remota**, selecciona **Elegir**.

**No recomendado:**

- A la derecha de **Elegir bóveda remota**, selecciona **Elegir**.

Al describir la dirección vertical en elementos de interfaz, usa "encima" y "debajo" para relaciones espaciales. Evita "arriba" y "abajo" ya que son ambiguos en diferentes contextos.

**Recomendado:**

- El cuadro de búsqueda aparece encima de la lista de archivos.
- Opciones adicionales están disponibles debajo.

**No recomendado:**

- El cuadro de búsqueda está arriba de la lista de archivos.
- Más opciones están abajo.

### Instrucciones

Usa imperativos para los nombres de guías, encabezados de sección e instrucciones paso a paso. El modo imperativo es conciso y orientado a la acción, lo cual es más directo para los usuarios que siguen instrucciones.

- Preferir "Configura" sobre "Configurando"
- Preferir "Mueve un archivo" sobre "Moviendo un archivo"
- Preferir "Importa tus notas" sobre "Importando tus notas"

### Uso de mayúsculas en oraciones

Preferir *mayúscula solo al inicio de la oración* sobre *mayúscula en cada palabra* para encabezados, botones y títulos. Al hacer referencia a elementos de interfaz, siempre coincide con las mayúsculas del texto en la interfaz.

**Recomendado:**

- Cómo Obsidian almacena los datos

**No recomendado:**

- Cómo Obsidian Almacena Los Datos

### Ejemplos

Preferir ejemplos realistas sobre términos sin sentido.

**Recomendado:**

- `task:(llamar OR agendar)`

**No recomendado:**

- `task:(foo OR bar)`

### Nombres de teclas y atajos de teclado

Al referirse a teclas del teclado y atajos, usa una notación consistente.

**Nombres de teclas individuales:**

Al referirse a un carácter del teclado por nombre, agrega el carácter entre paréntesis justo después del nombre.

**Recomendado:**

- Presiona la tecla guion (-) para agregar un guion.
- Usa el signo de interrogación (?) para buscar.

**No recomendado:**

- Presiona la tecla guion para agregar un guion.
- Usa el ? para buscar.
- Agrega un `-` delante de la palabra.

**Atajos de teclado:**

Formatea los atajos de teclado sin espacios alrededor del signo más. Cuando un atajo difiere entre sistemas operativos, especifica ambos.

**Recomendado:**

- Presiona `Ctrl+Z` (Windows) o `Command+Z` (macOS) para deshacer.
- Presiona `Escape` para cerrar esta ventana.
- Usa `Tab` para moverte entre campos.

**No recomendado:**

- Presiona `Cmd+Z` para deshacer.
- Presiona `Ctrl + Z` (con espacios) para deshacer.
- Presiona `Ctrl/Cmd+Z` para deshacer.

Para atajos que son idénticos en todas las plataformas, no necesitas especificar el sistema operativo. Si no estás seguro de si un atajo difiere por plataforma, especifica el sistema operativo para estar seguro. Windows y Linux típicamente usan los mismos atajos.

### Markdown

Usa líneas nuevas entre bloques Markdown:

**Recomendado:**

```md
# Encabezado 1

Esta es una sección.

1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

**No recomendado:**

```md
# Encabezado 1
Esta es una sección.
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

**Guiones largos en listas:**

Usa guiones largos (—) para separar términos en negrita de sus descripciones en listas con viñetas. No uses guiones largos en listas anidadas simples con enlaces.

**Recomendado:**

- **Menú de vista** — crear, editar y cambiar vistas.
- **Calcular valores** — agregar precios, calcular totales o realizar operaciones matemáticas.

**No recomendado:**

- [[Crear una base]] — Aprende a crear e incrustar una base.

### Imágenes

Usa "**ancho** x **alto** píxeles" para describir dimensiones de imagen o pantalla.

**Ejemplo:**

Dimensiones de imagen recomendadas: 1920 x 1080 píxeles.

## Estructura de la información

### Tipos de recuadros

Usa recuadros estratégicamente para resaltar tipos específicos de información:

**Consejo** (`[!tip]-`) - Consejos prácticos o mejores prácticas que mejoran el flujo de trabajo del usuario. Úsalo para atajos, soluciones alternativas o información no esencial pero útil. Estos recuadros comienzan contraídos.

**Información** (`[!info]+`) - Contexto adicional, información de fondo o aclaraciones. Úsalo cuando la información agrega comprensión pero no es necesaria para completar una tarea. Estos recuadros comienzan expandidos.

**Advertencia** (`[!warning]+`) - Precauciones importantes que previenen pérdida de datos, errores o consecuencias no deseadas. Úsalo con moderación para situaciones genuinamente riesgosas. Estos recuadros nunca deben estar contraídos.

**Ejemplo** (`[!example]-`) - Comentarios generales o detalles complementarios. Úsalo para información tangencial que algunos usuarios pueden encontrar relevante. Estos recuadros comienzan contraídos.

**Ejemplos:**
```md
> [!tip]- Usa atajos de teclado
> Puedes acelerar tu flujo de trabajo memorizando los atajos más usados.

> [!info]+ Este es un complemento de pago
> Esta función requiere una suscripción de pago para usarla.

> [!warning]+ Esta acción no se puede deshacer
> Eliminar una bóveda es permanente. Considera exportar tus notas primero.

> [!example]- Uso avanzado
> También puedes configurar este ajuste a través del menú del gráfico.
```

### Listas vs. prosa

Usa listas al presentar elementos discretos que no tienen relaciones secuenciales o causales fuertes. Usa prosa y párrafos cuando los elementos se construyen unos sobre otros, requieren explicación o se benefician de un flujo narrativo.

**Usa una lista para:**
- Un conjunto de funciones no relacionadas
- Requisitos de instalación
- Opciones de configuración
- Pasos de solución de problemas

**Usa prosa para:**
- Explicaciones de cómo funciona algo
- Flujos de trabajo con dependencias
- Descripciones generales conceptuales
- Orientación que requiere contexto

### Tablas

Usa tablas para comparar funciones, versiones o puntos de datos relacionados donde la alineación ayuda a la comprensión. Evita tablas para listas simples o datos de una sola columna.

**Buen caso de uso:**

| Función | Móvil | Escritorio |
|---------|-------|-----------|
| Sync | Sí | Sí |
| Complementos | No | Sí |
| Temas | Limitado | Completo |

### Referencias cruzadas

Usa enlaces wiki internos (`[[Nombre de nota]]`) generosamente para ayudar a los usuarios a navegar por temas relacionados. Sin embargo, evita enlazar en exceso:

- No enlaces el mismo término múltiples veces en una sola página
- Enlaza solo cuando la página referenciada proporcione un contexto adicional significativo
- Usa texto de enlace descriptivo cuando sea útil: `[[Nombre de nota#Sección|texto descriptivo]]`

**Ejemplo:**

Primera mención: "Aprende sobre [[Introducción a Obsidian Sync|Obsidian Sync]] para mantener tu bóveda actualizada entre dispositivos."
Mención posterior: "Puedes configurar Sync para cada dispositivo por separado."

### Contenido específico por plataforma

Al documentar funciones que difieren entre plataformas, usa encabezados de sección para organizar el contenido.

Usa `Escritorio` y `Móvil` como encabezados de subsección para separar instrucciones o funciones específicas de cada plataforma.

**Recomendado:**
```md
## Personalizar el menú de cinta

### Escritorio

En la versión de escritorio, puedes personalizar el menú de cinta de la siguiente manera:

- Reorganiza el orden de las acciones de la cinta arrastrando y soltando los iconos.
- Para ocultar acciones específicas, haz clic derecho en un espacio vacío y desmarca las acciones que deseas ocultar.

### Móvil

En la versión móvil, puedes personalizar el menú de cinta a través de los ajustes:

1. Abre **[[Configuración]]**.
2. Navega a **Apariencia**.
3. Haz clic en **Administrar** bajo **Ajustes del menú de cinta**.
```

> [!info]+ ¿Cuándo crear secciones?
> Solo crea secciones separadas si el contenido difiere significativamente. Si las instrucciones son en gran medida las mismas con variaciones menores, usa notas en línea en su lugar.

## Iconos e imágenes

Incluye iconos e imágenes cuando faciliten explicar cosas que son difíciles de describir con palabras, o cuando necesites mostrar partes importantes de la aplicación Obsidian. Puedes guardar imágenes en la carpeta `Attachments`.

- La imagen debería hacer que el texto que acompaña sea más fácil de entender.

 **Ejemplo**: Una vez habilitado, el complemento [[Contador de palabras]] creará una nueva entrada en tu barra de estado inferior.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Las imágenes deben estar en formato `.png` o `.svg`.
- Si una imagen se ve demasiado grande en la nota, hazla más pequeña fuera de Obsidian, o ajusta sus dimensiones como se explica en [[Incrustar archivos#Incrustar una imagen en una nota|incrustar una imagen en una nota]].
- En casos raros, puedes querer colocar imágenes especialmente grandes o complejas en un [[Destacados#Destacados plegables|recuadro plegable]].
- Para ventanas emergentes o modales, la imagen debe mostrar toda la ventana de la aplicación Obsidian.
 ![[Style-guide-modal-example.png#interface]]

### Iconos

Los iconos de [Lucide](https://lucide.dev/icons/) y los iconos personalizados de Obsidian se pueden usar junto con elementos detallados para proporcionar una representación visual de una función.

**Ejemplo:** En el menú de cinta a la izquierda, selecciona **Crear nuevo lienzo** ( ![[lucide-layout-dashboard.svg#icon]] ) para crear un lienzo en la misma carpeta que el archivo activo.

**Directrices para iconos**

- Almacena los iconos en la carpeta `Attachments/icons`.
- Agrega el prefijo `lucide-` antes del nombre del icono de Lucide.
- Agrega el prefijo `obsidian-icon-` antes del nombre del icono de Obsidian.

**Ejemplo:** El icono para crear un nuevo lienzo debe llamarse `lucide-layout-dashboard`.

- Usa la versión SVG de los iconos disponibles.
- Los iconos deben tener `18` píxeles de ancho, `18` píxeles de alto y un grosor de trazo de `1.5`. Puedes ajustar estos valores en los datos SVG.

> [!info]- Ajustar tamaño y trazo en un SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="ANCHO" height="ALTO" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="GROSOR-DE-TRAZO" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Utiliza el ancla `icon` en imágenes incrustadas, para ajustar el espaciado alrededor del icono de modo que se alinee ordenadamente con el texto cercano.
- Los iconos deben estar rodeados por paréntesis. ( ![[lucide-cog.svg#icon]] )

**Ejemplo**: `( ![[lucide-cog.svg#icon]] )`

### Etiquetas de ancla de imagen

Las etiquetas de ancla de imagen están disponibles para agregar cambios decorativos a las imágenes incrustadas.

> [!warning] Advertencia de vista previa en vivo
> Las etiquetas de ancla de icono no se mostrarán correctamente en **vista previa en vivo.** Usa **vista de lectura** para confirmar que la etiqueta de ancla se ha aplicado.

**Icono**

`![[lucide-menu.svg#icon]]`

La etiqueta de ancla de icono asegura la alineación vertical correcta para los iconos usados para indicar elementos de interfaz.

El primer icono de menú usa la etiqueta de ancla ( ![[lucide-menu.svg#icon]] ), mientras que el segundo icono de menú ( ![[lucide-menu.svg]] ) no.

**Interfaz**

`![[Vault picker.png#interface]]`

La etiqueta de ancla de interfaz agrega una sombra decorativa alrededor de la imagen. En la primera imagen, la etiqueta de ancla de interfaz está aplicada.
![[Vault picker.png#interface]]
En contraste, la segunda imagen no tiene la etiqueta de ancla de interfaz aplicada.

![[Vault picker.png]]

**Contorno**

`![[Backlinks.png#outline]]`

La etiqueta de ancla de contorno agrega un borde sutil alrededor de la imagen. En la primera imagen, la etiqueta de ancla de contorno está aplicada.

> [!tip] Observa la parte inferior izquierda de la imagen para ver la diferencia.

![[Backlinks.png#outline]]

La segunda imagen carece de la etiqueta de ancla de contorno.

![[Backlinks.png]]

### Optimización

Las imágenes ralentizan el tiempo de carga de la página y ocupan valioso espacio de almacenamiento de [[Introducción a Obsidian Publish|Publish]]. Optimizar las imágenes permite una reducción en el tamaño del archivo, pero mantiene la integridad visual de la imagen.

Tanto las imágenes como los iconos deben ser optimizados.

> [!info] Herramientas para optimizar imágenes
> Aquí hay algunos programas recomendados para reducir el tamaño de tus imágenes.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Recomendamos una tasa de optimización del 65-75%.

## Diseño

### Enlaces rotos

Antes de enviar tu Pull Request, por favor verifica si hay enlaces rotos en la documentación de la traducción en la que estás trabajando y corrígelos. Los enlaces rotos pueden ocurrir naturalmente con el tiempo, así que verificar su precisión ayuda a mantener la calidad de la documentación.

Puedes verificar enlaces rotos usando [[Complementos de la comunidad]] o herramientas disponibles en tu IDE.

### Descripciones

Esta documentación se edita en GitHub y se aloja en línea a través de [[Introducción a Obsidian Publish|Obsidian Publish]], que incluye [[Vistas previas de enlaces en redes sociales#Descripción|descripciones]] para tarjetas sociales y otros elementos de [[SEO]].

Si la página en la que estás trabajando no tiene una [[Propiedades|propiedad]] `description`, por favor agrega una. La descripción debe tener 150 caracteres o menos y proporcionar un resumen objetivo del contenido de la página.

**Bueno**: Aprende a crear plantillas que capturan y organizan metadatos de páginas web automáticamente con Web Clipper.
**Podría mejorarse**: Aprende cómo crear plantillas que automáticamente capturan y organizan metadatos de páginas web con Web Clipper.

### Direcciones

Al escribir o reescribir [[#Instrucciones]] sobre cómo realizar una acción dentro de la aplicación, asegúrate de incluir pasos tanto para la versión móvil como para la de escritorio.

Si no tienes acceso a un dispositivo móvil o de escritorio, por favor menciónalo al enviar tu Pull Request.

## Traducciones

Traduce la totalidad del contenido al completar una traducción. Esto incluye, pero no se limita a:

- Nombres de notas
- Nombres de carpetas
- Alias
- Nombres de adjuntos
- Texto alternativo de enlaces
