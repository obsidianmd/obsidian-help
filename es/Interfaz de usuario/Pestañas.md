---
permalink: tabs
publish: true
mobile: true
description: >-
  Aprende a abrir, organizar y gestionar pestañas en Obsidian, incluyendo fijar,
  apilar y vistas enlazadas.
aliases:
  - How to/Trabajar con varias notas
---
Las pestañas en Obsidian funcionan de manera similar a las pestañas de otras aplicaciones, como los navegadores web.

Puedes abrir tantas pestañas como desees en Obsidian. También puedes organizar las pestañas para crear disposiciones personalizadas que se mantienen hasta la próxima vez que abras la aplicación.

> [!note] Pestañas en móvil
> En dispositivos móviles, puedes gestionar las pestañas abiertas desde el contador de pestañas en la [[Aplicación móvil#Barra de navegación|Barra de navegación]].

## Abrir una nueva pestaña

En la parte superior de la ventana de la aplicación, junto a la última pestaña a la derecha, selecciona **Nueva pestaña** ( ![[lucide-plus.svg#icon]] ). O utiliza un atajo de teclado:

- **Windows y Linux:** `Ctrl+t`
- **macOS:** `Cmd+t`

## Abrir un enlace

Selecciona un enlace en Obsidian para abrirlo en la pestaña activa.

Para abrir un enlace en una nueva pestaña, presiona `Ctrl` (o `Cmd` en macOS) y selecciona el enlace.

A continuación se muestran todas las teclas modificadoras que puedes usar para abrir enlaces de diferentes maneras:

|Acción|MacOS|Windows/Linux|
|---|---|---|
|**Navegar**|_Ninguno_|_Ninguno_|
|**Nueva pestaña**|`⌘` (+ `Shift` en modo de código fuente)|`Ctrl` (+ `Shift` en modo de código fuente)|
|**Nuevo grupo de pestañas**|`⌘` `⌥`| `Ctrl` `Alt`|
|**Nueva ventana**|`⌘` `⌥` `Shift`|`Ctrl` `Alt` `Shift`|

## Organizar tus pestañas y ventanas

Cada pestaña pertenece a un _grupo de pestañas_. Puedes arrastrar y soltar pestañas para reorganizarlas dentro de un grupo de pestañas, moverlas a un grupo de pestañas diferente o crear un nuevo grupo de pestañas. En escritorio, puedes arrastrar pestañas fuera de su ventana para abrirlas en una [[Ventanas emergentes|ventana emergente]] separada.

Las pestañas en las barras laterales solo muestran el icono. Pasa el cursor sobre el icono para mostrar una descripción emergente con el título de la pestaña.

### Organizar pestañas

Para cambiar el orden de tus pestañas, arrastra la pestaña a lo largo de las pestañas en el grupo de pestañas.

Al arrastrar una pestaña, las _zonas de destino_—áreas a las que puedes mover la pestaña—se resaltan. La zona de destino determina dónde insertar la pestaña. Algunas pestañas solo pueden estar en una de las barras laterales.

### Dividir un grupo de pestañas

Haz clic derecho en una pestaña y selecciona **Dividir a la derecha** o **Dividir abajo** para crear un nuevo grupo de pestañas con esa pestaña.

También puedes dividir un grupo de pestañas arrastrando una pestaña a la parte inferior de otra pestaña.

### Redimensionar un grupo de pestañas

Para redimensionar un grupo de pestañas, coloca el cursor sobre un borde del grupo de pestañas. El borde se resalta cuando puede ser arrastrado para redimensionar.

Puedes redimensionar las barras laterales de manera similar para dar más espacio a los grupos de pestañas en el centro.

### Mover pestaña a una nueva ventana

**Arrastrar y soltar:**

- Selecciona y arrastra la pestaña fuera de la ventana de la aplicación para abrirla en una nueva ventana.

**Paleta de comandos:**

- Abre la paleta de comandos y selecciona **Mover panel actual a una ventana nueva**.

### Mover una pestaña a una ventana diferente

Para mover una pestaña a otra ventana existente, arrastra la pestaña a la ventana a la que deseas moverla.

### Fijar una pestaña

Para fijar una pestaña en el editor principal, haz clic derecho en la pestaña y selecciona **Fijar**. Los enlaces en una pestaña fijada siempre se abren en una pestaña separada.

Para desfijar una pestaña fijada en el editor principal, haz clic derecho en la pestaña y selecciona **Desfijar**.

Para fijar o desfijar una pestaña en la barra lateral, consulta [[Barra lateral#Fijar pestañas|fijar pestañas en la barra lateral]].

## Cambiar a una pestaña diferente

Selecciona una pestaña para cambiar a ella. O utiliza un atajo de teclado:

| Cambiar a                        | MacOS            | Windows/Linux        |
|----------------------------------|------------------|----------------------|
| **Pestaña siguiente**            | `⌃`+`⇥`         | `Ctrl`+`Tab`         |
| **Pestaña anterior**             | `⌃`+`⇧`+`⇥`    | `Ctrl`+`Shift`+`Tab` |
| **Primera pestaña a la izquierda** | `⌘`+`1`          | `Ctrl`+`1`           |
| **2ª a 8ª pestaña**              | `⌘`+`2`..`8`     | `Ctrl`+`2`..`8`      |
| **Última pestaña a la derecha**  | `⌘`+`9`          | `Ctrl`+`9`           |
| **Pestaña cerrada recientemente** | `⌘`+`⇧`+`t`     | `Ctrl`+`Shift`+`t`   |

## Apilar grupos de pestañas

Puedes apilar pestañas para deslizarlas sobre otras pestañas en el mismo grupo de pestañas.

Para apilar notas, selecciona la flecha hacia abajo en la esquina superior derecha del grupo de pestañas y luego selecciona **Apilar notas**.

![tab-stacks](https://user-images.githubusercontent.com/693981/188205363-0f24b2a5-3706-4a8c-b38b-7a66baa68ce6.gif)

Las pestañas apiladas están inspiradas en las [notas deslizantes de Andy Matuschak](https://notes.andymatuschak.org/).

## Vistas enlazadas

Las _vistas enlazadas_ son pestañas que hacen referencia a otra pestaña diferente. Cuando el contenido de la pestaña referenciada cambia, la vista enlazada también cambia.

Para pestañas de notas, puedes usar los siguientes complementos como vistas enlazadas:

- [[Vista de grafo|Vista de grafo]] (local)
- [[Enlaces entrantes]]
- [[Esquema]]

Para abrir una vista enlazada de una pestaña de nota:

1. Selecciona **Más opciones** ( ![[lucide-more-horizontal.svg#icon]] ) en la esquina superior derecha de la nota.
2. En **Abrir en vista enlazada**, selecciona la vista enlazada que deseas abrir.

## Guardar disposiciones

Puedes guardar y restaurar disposiciones de ventanas usando el complemento [[Espacios de trabajo]].
