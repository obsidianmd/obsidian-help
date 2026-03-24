---
permalink: settings
publish: true
mobile: true
description: Aprende cómo personalizar Obsidian a través de la interfaz de Ajustes.
aliases:
  - How to/Cambiar ajustes
---
Los ajustes te permiten personalizar tu experiencia con Obsidian. Configura opciones generales, preferencias del editor, apariencia, atajos de teclado, y gestiona tanto los complementos principales como los de la comunidad.

## Abrir Ajustes

### Escritorio

En la [[Barra lateral#Abrir barras laterales ocultas|barra lateral izquierda]], selecciona **[[Configuración]]** ![[lucide-cog.svg#icon]]. También puedes abrir los Ajustes con la [[Paleta de comandos]].

### Móvil

En la barra lateral izquierda, selecciona **[[Configuración]]** ![[lucide-cog.svg#icon]].

## Organización de los ajustes

Los ajustes están organizados en las siguientes categorías:

- **Opciones** — Ajustes principales de la aplicación, incluyendo [[#General]], [[#Editor]], [[#Archivos y enlaces]], [[#Apariencia]] y [[#Atajos de teclado]].
- **[[Complementos principales]]** — Plugins integrados que vienen con Obsidian.
- **[[Complementos de la comunidad]]** — Complementos de terceros instalados desde la comunidad.

## General

La página General contiene información de versión, ajustes de actualización, preferencias de idioma y gestión de cuenta.

### Versión y actualizaciones

Consulta tu versión actual de Obsidian y la versión del instalador en la parte superior de la página. Selecciona **Buscar actualizaciones** para verificar manualmente si hay nuevas versiones, o selecciona **[Leer el registro de cambios](<https://obsidian.md/es/changelog/>)** para ver las notas de la versión.

**Actualizaciones automáticas**

Cuando está habilitado, Obsidian busca automáticamente nuevas versiones y te notifica cuando hay actualizaciones disponibles.

**Recibir versiones de acceso anticipado**

Actualización automática a las últimas [[Versiones de acceso anticipado]]. Estas versiones incluyen nuevas funciones pero pueden ser menos estables.

> [!info]+ Se requiere licencia Catalyst
> Esta opción solo está disponible para usuarios con una [[Licencia Catalyst]].

### Idioma

Selecciona tu idioma preferido para la interfaz de Obsidian. Selecciona **[[Traducciones|Aprende cómo añadir un nuevo idioma a Obsidian]]** para contribuir con una traducción.

### Ayuda

Selecciona **[[Inicio|Abrir]]** para acceder a recursos de ayuda, incluyendo documentación, foros de la comunidad y guías de solución de problemas.

### Cuenta

Gestiona tu cuenta de Obsidian y licencias.

**Tu cuenta**

Consulta la información de tu cuenta, incluyendo nombre de usuario y correo electrónico. Selecciona **[Administrar](https://obsidian.md/es/account)** para acceder a los ajustes de la cuenta, o selecciona **Cerrar sesión** para cerrar sesión en la aplicación.

**Licencia Catalyst**

Consulta el estado de tu licencia Catalyst. Si tienes una [[Licencia Catalyst]] activa, tu nivel de licencia aparece aquí.

**Licencia comercial**

Si usas [Obsidian para el trabajo](<https://obsidian.md/es/blog/free-for-work/>), selecciona **Activar** para ingresar una clave de licencia comercial, o selecciona **[Comprar](https://obsidian.md/es/account/commercial)** para adquirir una licencia. Selecciona **[[Licencia comercial|Aprender más]]** para obtener información sobre las licencias comerciales.

### Avanzado

#### Notificar si la apertura tarda más de lo esperado

Cuando está habilitado, Obsidian muestra una notificación si el inicio es inusualmente lento. La notificación incluye información diagnóstica sobre qué está causando la demora. Selecciona el icono de temporizador ![[lucide-timer.svg#icon]] junto a este ajuste para [[Ayuda y soporte#Verificar tiempo de inicio|verificar tu tiempo de inicio]].

## Editor

La página del Editor contiene ajustes sobre cómo visualizas y editas notas.

### Siempre fijar el foco en las pestañas nuevas

Al abrir un enlace en una nueva pestaña, cambiar a esta inmediatamente.

### Vista por defecto para nuevas pestañas

La vista predeterminada con la que se abre una nueva pestaña de archivo Markdown. Elige entre [[Vistas y modo de edición#Vista de lectura|Vista de lectura]] o [[Vistas y modo de edición#Vista de edición|Vista de edición]].

### Modo de edición predeterminado

El modo de edición predeterminado con el que iniciará una nueva pestaña. Elige entre [[Vistas y modo de edición#Vista previa en vivo|Vista previa en vivo]] o [[Vistas y modo de edición#Modo de código fuente|Modo de código fuente]].

### Estado del editor en la barra de estado

Muestra el conmutador del modo de edición en la [[Barra de estado|barra de estado]].

### Mostrar

#### Longitud de línea visible

Limita la longitud de línea máxima. Muestra menos contenido en pantalla, pero los párrafos largos son más legibles.

#### Saltos de línea estrictos

Las especificaciones de Markdown ignoran los [[Sintaxis de formato básico#Saltos de línea|saltos de línea]] simples en la vista de lectura. Desactiva esto para hacer visibles los saltos de línea simples.

#### Propiedades en el documento

Elige cómo se muestran las [[Propiedades|propiedades]] en la parte superior de las notas. Selecciona **Fuente** para mostrar las propiedades como YAML sin formato.

#### Colapsar encabezado

[[Plegado|Plega]] todo el contenido bajo un encabezado seleccionando el icono de contraer junto a él.

### Colapsar texto sangrado

[[Plegado|Plega]] parte de una sangría, como listas, seleccionando el icono de contraer.

#### Números de línea

Muestra los números de línea en el margen.

#### Guías de sangría

Muestra líneas de relación verticales entre viñetas que sirven como asistencia visual.

#### Derecha-a-izquierda (Modo RTL)

Establece la dirección del texto de las notas para que se muestren de derecha a izquierda.

#### Emparejamiento automático de corchetes

Empareja automáticamente los corchetes y las comillas.

#### Emparejamiento automático de sintaxis Markdown

Empareja automáticamente los símbolos para negrita, cursiva, código y más.

#### Listas con sangrado inteligente

La aplicación gestiona la sangría y las viñetas.

#### Usar tabulación

Usa tabulaciones para sangrar al presionar la tecla Tab. Desactiva esto para sangrar usando 4 espacios.

#### Conversión automática de HTML

Convierte automáticamente HTML a Markdown al pegar y arrastrar y soltar desde páginas web.

Usa `Ctrl/Cmd+Shift+V` para pegar HTML sin convertir.

### Comportamiento

#### Revisión ortográfica

Activar el corrector ortográfico. Selecciona el icono de engranaje para eliminar elementos guardados del diccionario personalizado.

#### Idiomas del corrector ortográfico

**Windows y Linux:**

Elija los idiomas que utilizará el corrector ortográfico. Selecciona el icono de más (+) para añadir idiomas. Para eliminar un idioma, selecciona la X junto a él.

**macOS:**

El corrector ortográfico nativo detecta automáticamente el idioma usado por el sistema operativo.

#### Tamaño de la tabulación

Número de espacios a los que equivale una tabulación.

### Avanzado

#### Atajos de teclado de Vim

Permite el uso de los atajos de teclado de Vim en el editor.

## Archivos y enlaces

La página de Archivos y enlaces contiene ajustes para la gestión de archivos, enlaces y el comportamiento de la bóveda.

### Ubicación por defecto para nuevas notas

Dónde se ubican los archivos nuevos. Las opciones incluyen:

- **Carpeta de la bóveda** — Las notas se crean en la raíz de tu bóveda.
- **Misma carpeta donde está el archivo** — Las notas se crean en la misma carpeta que la nota activa actualmente.
- **En la carpeta especificada abajo** — Las notas se crean en una carpeta específica que elijas.

### Ubicación predeterminada para los archivos adjuntos nuevos

Dónde se colocan los [[Archivos adjuntos|adjuntos]] recién añadidos. Las opciones incluyen:

- **Carpeta de la bóveda** — Los adjuntos se colocan en la raíz de tu bóveda.
- **En la carpeta especificada abajo** — Los adjuntos se colocan en una carpeta específica que elijas.
- **Misma carpeta donde está el archivo** — Los adjuntos se colocan en la misma carpeta que la nota activa actualmente.
- **En la subcarpeta de la carpeta actual** — Los adjuntos se colocan en una subcarpeta dentro de la carpeta de la nota actual.

### Enlaces

#### Nuevo formato de enlace

Qué enlaces insertar al generar automáticamente [[Enlaces internos|enlaces internos]]. Las opciones incluyen:

- **Usar la ruta más corta cuando sea posible** — Usa la ruta única más corta al archivo enlazado.
- **Ruta relativa al archivo** — Usa una ruta relativa al archivo actual.
- **Ruta absoluta en la bóveda** — Usa la ruta completa desde la raíz de la bóveda.

#### Actualizar los enlaces internos automáticamente

Cuando está habilitado, Obsidian actualiza automáticamente los enlaces internos cuando renombras un archivo. Desactiva esto para que se te solicite actualizar los enlaces después de renombrar.

#### Usar Wikilinks

Genera automáticamente Wikilinks para `[[enlaces]]` e `![[imágenes]]` en lugar de enlaces e imágenes Markdown. Desactiva esta opción para generar enlaces Markdown en su lugar.

#### Mostrar todos los tipos de archivo

Muestra archivos con cualquier extensión, incluso si Obsidian no puede abrirlos de forma nativa, para que puedas vincularlos y verlos en el Explorador de Archivos y el Selector Rápido.

### Papelera

#### Confirmar eliminación de archivo

Preguntar antes de eliminar un archivo.

#### Archivos eliminados

Qué hacer con los archivos eliminados. Las opciones incluyen:

- **Mover a la papelera de reciclaje** — Los archivos se mueven a la papelera de tu sistema operativo.
- **Mover a la papelera de Obsidian** — Los archivos se mueven a la carpeta `.trash` en tu bóveda.
- **Eliminar permanentemente** — Los archivos se eliminan permanentemente y no se pueden recuperar.

### Avanzado

#### Archivos excluidos

Los archivos excluidos se ocultarán en la [[Búsqueda]], [[Vista de grafo]] y Menciones no enlazadas ([[Enlace de retorno]] y [[Enlaces salientes]]), y serán menos visibles en el [[Selector rápido]] y las sugerencias de enlaces. Selecciona **Administrar** para configurar los archivos excluidos.

#### Anular la carpeta de configuración

Usa una [[Carpeta de configuración|carpeta de configuración]] diferente a la predeterminada. Debe comenzar con un punto.

#### Permitir URI callbacks

Habilita el uso de x-callback-url a través de x-success o x-error al manejar [[Obsidian URI|URIs de Obsidian]].

#### Reconstruir caché de la bóveda

Reconstruye el [[Cómo Obsidian almacena los datos#Caché de metadatos|caché de metadatos]] de la bóveda. Reconstruir el caché podría tomar segundos o minutos dependiendo del tamaño de tu bóveda. Selecciona **Reconstruir** para iniciar el proceso.

## Apariencia

La página de Apariencia contiene ajustes para personalizar cómo se ve Obsidian.

### Tema base

Elige el esquema de colores predeterminado de Obsidian. Las opciones incluyen:

- **Adaptar al sistema** — Se adapta al modo claro u oscuro de tu sistema operativo.
- **Claro** — Usa el modo claro.
- **Oscuro** — Usa el modo oscuro.

### Color acentuado

Elige el color acentuado usado en toda la aplicación. Selecciona el selector de color o el icono de reinicio para personalizar.

### Temas

Gestiona los [[Temas|temas]] instalados y explora los temas de la comunidad. Selecciona **Administrar** para ver e instalar temas. El menú desplegable muestra tu tema activo actualmente. El icono de carpeta ![[lucide-folder-open.svg#icon]] abre la carpeta de temas en tu [[Carpeta de configuración|carpeta de configuración]].

### Temas de la comunidad instalados

Muestra el número de temas de la comunidad que tienes instalados.

### Fuente

#### Fuente de la interfaz

Configurar la fuente de la interfaz en todo Obsidian. Selecciona **Administrar** para elegir una fuente personalizada o ingresar un nombre de fuente.

#### Fuente del texto

Configurar la fuente para las vistas de edición y lectura. Selecciona **Administrar** para elegir una fuente personalizada o ingresar un nombre de fuente.

#### Fuente monoespaciada

Configurar la fuente para lugares como bloques de código e información preliminar. Selecciona **Administrar** para elegir una fuente personalizada o ingresar un nombre de fuente.

#### Tamaño de fuente

Tamaño de fuente en píxeles que afecta al editor y la vista de lectura. Ajusta usando el control deslizante.

#### Ajuste rápido del tamaño de fuente

Ajusta el tamaño de fuente usando `Ctrl+Scroll` (Windows/Linux) o `Cmd+Scroll` (macOS), o usando el gesto de pellizcar en el trackpad.

### Interfaz

#### Título en línea

Muestra el nombre del archivo como un título editable en línea con el contenido del archivo. El título en línea actúa como un encabezado dentro de Obsidian pero no añade un encabezado a tu nota.

#### Mostrar la barra de título de pestaña

Mostrar el encabezado en la parte superior de todas las pestañas.

#### Mostrar menú de cinta

Muestra una barra de herramientas vertical en el costado de la ventana. Aprende más sobre la [[Menú de cinta|menú de cinta]].

#### Ajustes del menú de cinta

Escoge los comandos que aparecen en el menú de cinta. Selecciona **Administrar** para personalizar.

> [!info]+ Configuración de la cinta en móvil
> En móvil, la personalización de la cinta funciona de manera diferente. Consulta [[Menú de cinta#Móvil|Personalización de la cinta en móvil]] para más detalles.

### Avanzado

#### Nivel de zoom

Controla el nivel de zoom global de la aplicación. Ajusta usando el control deslizante.

#### Menús nativos

Los menús de toda la aplicación coincidirán con el sistema operativo. No se verán afectados por tu tema.

#### Estilo del marco de la ventana

Determina el estilo de la barra de título de la ventana de Obsidian. Es necesario reiniciar la aplicación para que surta efecto. Las opciones incluyen:

- **Marco de Obsidian** — Usa el marco de ventana personalizado de Obsidian.
- **Marco nativo** — Usa el marco de ventana predeterminado de tu sistema operativo.
- **Marco oculto** — Oculta completamente la barra de título.

#### Ícono personalizado

Configura un ícono personalizado para la aplicación. Selecciona **Elegir** para escoger un archivo de ícono (`.icns`, `.ico`, `.png` o `.svg`). Aprende más sobre [[Apariencia#Ícono personalizado de la aplicación|íconos personalizados de la aplicación]].

#### Ventana translúcida

Activa un efecto de translucidez que aumenta la sensación de profundidad. Mejor para usar en modo oscuro. No soportado en Linux.

> [!info]+ Solo macOS
> Esta función está diseñada principalmente para macOS. Aprende más sobre la [[Apariencia#Translucidez|translucidez]].

#### Aceleración de hardware

Activa la aceleración de hardware, que usa tu GPU para hacer que Obsidian sea más suave. Si la desactivas, el rendimiento de la aplicación puede degradarse severamente, pero puede resolver algunos problemas poco comunes.

### Fragmentos CSS

Gestiona y visualiza los [[Fragmentos CSS|fragmentos CSS]] almacenados en tu bóveda. Los fragmentos CSS se almacenan en `/bóveda/.obsidian/snippets/`. Selecciona el icono de actualizar para recargar los fragmentos, o el icono de carpeta ![[lucide-folder-open.svg#icon]] para abrir la carpeta de fragmentos.

## Atajos de teclado

La página de [[Teclas de acceso rápido]] te permite ver, establecer y personalizar [[Atajos de edición|atajos de teclado]] para los comandos en Obsidian.

Usa la barra de búsqueda para filtrar comandos, y selecciona el icono de filtro para mostrar solo los comandos con atajos asignados. Para añadir un atajo de teclado, selecciona el icono de más (+) junto a un comando. Para eliminar un atajo de teclado, selecciona el icono X junto a la combinación de teclas.

## Complementos principales

Los [[Complementos principales]] son complementos integrados que vienen con Obsidian. Cada complemento añade funcionalidad específica a la aplicación.

Para habilitar o deshabilitar un complemento principal, selecciona el conmutador junto al nombre del complemento. Selecciona el icono de más ![[lucide-plus-circle.svg#icon]] para ver los [[Teclas de acceso rápido|atajos de teclado]] del complemento. Selecciona el icono de ajustes ![[lucide-settings.svg#icon]] para abrir la página de ajustes del complemento.

Usa la barra de búsqueda para filtrar complementos por nombre.

## Complementos de la comunidad

Los [[Complementos de la comunidad]] son complementos de terceros creados por la comunidad de Obsidian. Explora e instala complementos seleccionando **Explorar**.

### Modo restringido

El [[Seguridad de complementos#Modo restringido|modo restringido]] deshabilita todos los complementos de la comunidad por seguridad. Selecciona **Activar** para habilitar el modo restringido.

### Complementos actuales

Muestra el número de complementos de la comunidad que tienes instalados. Selecciona **Buscar actualizaciones** para verificar si hay actualizaciones de complementos.

### Complementos instalados

Visualiza y gestiona tus complementos de la comunidad instalados. Usa la barra de búsqueda para filtrar complementos por nombre. Cada complemento tiene iconos para ajustes, atajos de teclado, financiamiento, desinstalación y un conmutador para habilitarlo o deshabilitarlo.
