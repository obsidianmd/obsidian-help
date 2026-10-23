---
permalink: pdf
publish: true
mobile: true
description: 'Aprende a visualizar, buscar y enlazar archivos PDF en Obsidian, y cómo exportar una nota como PDF.'
---
Obsidian abre archivos PDF en un visor integrado. También puedes incrustar un PDF en una nota, enlazar a un pasaje en él y exportar cualquier nota como PDF. Para los tipos de archivo que Obsidian admite, consulta [[Formatos de archivo aceptados]].

> [!info]+ Algunas funciones son solo para escritorio
> La aplicación de Obsidian en móvil no puede buscar dentro de un PDF, copiar una cita o un enlace a una selección, ni exportar una nota a PDF.

## Abrir un PDF

En el [[Explorador de archivos]], selecciona un PDF para abrirlo en una pestaña.

> [!info]+ Las anotaciones no son compatibles
> Obsidian no admite agregar anotaciones ni resaltados a un PDF. Para marcar un PDF, usa otra aplicación y luego abre el archivo actualizado en tu bóveda.

El visor tiene una barra de herramientas con estos controles. La aplicación de Obsidian en móvil tiene la misma barra de herramientas.

- **Alternar barra lateral** muestra u oculta la barra lateral, y **Opciones de barra lateral** cambia lo que muestra la barra lateral.
- **Alejar** y **Acercar** cambian el tamaño de la página.
- **Opciones de pantalla** cambia cómo se distribuyen las páginas.
- El cuadro de página muestra la página actual. Ingresa un número de página para ir a esa página.

Para trabajar con el archivo PDF en sí, como renombrarlo o moverlo, selecciona **Más opciones** ![[lucide-more-horizontal.svg#icon]]. Un PDF tiene menos elementos en este menú que una nota. Consulta [[Menú de más opciones]].

## Navegar un PDF

Selecciona **Opciones de barra lateral** y luego elige qué mostrar.

- **Miniaturas** muestra una pequeña vista previa de cada página.
- **Tabla de contenidos** muestra el esquema del PDF, si tiene uno.
- **Mostrar página en la tabla de contenidos** resalta la página actual en la tabla de contenidos.

Para enlazar a una página, haz clic derecho en su miniatura y selecciona **Copiar enlace a la página N**, donde N es el número de página. Pega el enlace en una nota.

Para enlazar a una sección, haz clic derecho en una entrada de la tabla de contenidos y selecciona **Copiar enlace a "Título"**, donde Título es el nombre de la entrada. En móvil, mantén presionada la entrada.

## Cambiar la apariencia de un PDF

Selecciona **Opciones de pantalla** para cambiar la distribución.

- **Ajustar al ancho** y **Ajustar al alto** ajustan la página al visor.
- **Página única** muestra una página a la vez.
- **Dos páginas (impar)** muestra las páginas lado a lado, comenzando con una página impar a la izquierda. Por ejemplo, las páginas 1 y 2 se muestran juntas, y luego las páginas 3 y 4.
- **Dos páginas (par)** muestra las páginas lado a lado, comenzando con una página par a la izquierda. Por ejemplo, la página 1 se muestra sola, y luego las páginas 2 y 3 se muestran juntas.
- **Adaptar al tema** oscurece los colores del PDF cuando tu tema de Obsidian es oscuro.

## Buscar en un PDF

Buscar dentro de un PDF solo está disponible en escritorio. La aplicación de Obsidian en móvil no tiene búsqueda en el visor de PDF.

1. Presiona `Ctrl+F` (Windows y Linux) o `Command+F` (macOS).
2. En **Escriba para empezar a buscar...**, ingresa el texto que deseas encontrar.
3. Selecciona la flecha hacia arriba o hacia abajo para moverte entre las coincidencias.

Para cambiar cómo funciona la búsqueda, usa estas opciones.

- **Coincidir mayúsculas y minúsculas** coincide exactamente con mayúsculas y minúsculas. Es el botón **Aa** en el campo de búsqueda.
- **Resaltar todo** resalta cada coincidencia. Selecciona el botón de ajustes junto a las flechas para encontrar esta opción.
- **Coincidir diacríticos** trata las letras con acentos como letras diferentes. Está en el mismo menú de ajustes.
- **Palabras enteras** encuentra solo palabras completas. Está en el mismo menú de ajustes.

Selecciona el botón de cerrar para salir de la búsqueda.

## Copiar texto de un PDF

En escritorio, selecciona texto en el PDF y luego haz clic derecho sobre él.

- **Copiar** copia el texto.
- **Copiar como una cita** copia el texto como una cita, seguido de un enlace al pasaje.
- **Copiar enlace a esta selección** copia un enlace a ese pasaje, para que puedas pegarlo en una nota.

Una cita se ve así cuando la pegas en una nota.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Un enlace a una selección tiene el mismo enlace por sí solo.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

En móvil, seleccionar texto en un PDF muestra el menú de texto estándar de tu dispositivo. **Copiar como una cita** y **Copiar enlace a esta selección** no están disponibles.

## Incrustar un PDF

Para mostrar un PDF dentro de una nota, consulta cómo [[Incrustar archivos#Incrustar un PDF en una nota|incrustar un PDF en una nota]]. Un PDF incrustado tiene la misma barra de herramientas que el visor. Selecciona **Editar este bloque** para cambiar el enlace de incrustación.

## Exportar una nota a PDF

Puedes exportar cualquier nota como PDF en escritorio. Exportar a PDF no está disponible en la aplicación de Obsidian en móvil.

1. Abre la nota que deseas exportar.
2. Abre la [[Paleta de comandos]] y selecciona **Exportar PDF**. También puedes seleccionar **Más opciones** ![[lucide-more-horizontal.svg#icon]] en la nota, y luego seleccionar **Exportar PDF**.
3. Elige tus ajustes.
    - **Incluir el nombre del archivo como título** agrega el nombre del archivo en la parte superior del PDF.
    - **Tamaño de página** establece el tamaño del papel. Puedes elegir A3, A4, A5, Legal, Letter o Tabloid.
    - **Horizontal** gira las páginas de lado.
    - **Márgenes** establece el margen de la página en **Predeterminado**, **Mínimo** o **Ninguno**.
    - **Porcentaje de reducción de escala** escala el contenido en cada página. A 100, el contenido mantiene su tamaño completo. Valores menores hacen el texto y las imágenes más pequeños, por lo que cabe más en cada página.
4. Selecciona **Exportar a PDF**.
5. Elige dónde guardar el archivo.

> [!tip]- Exportar una nota con un tema oscuro
> Las exportaciones siempre usan estilos claros, incluso si tu tema es oscuro. Para cambiar la apariencia de una exportación, puedes usar un [[Fragmentos CSS|fragmento CSS]]. El foro de Obsidian tiene ejemplos de fragmentos para impresión y exportación.[^1]

[^1]: Consulta [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) y [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
