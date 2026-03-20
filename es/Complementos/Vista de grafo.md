---
permalink: plugins/graph
publish: true
mobile: true
description: La vista de grafo es un complemento principal que te permite visualizar las relaciones entre las notas de tu bóveda.
---
La vista de grafo es un [[Complementos principales|complemento principal]] que te permite visualizar las relaciones entre las notas de tu bóveda.

Para abrir la vista de grafo, haz clic en **Abrir vista gráfica** en la [[Menú de cinta]].

- Los círculos representan notas, o _nodos_.
- Las líneas representan [[Enlaces internos]] entre dos nodos.

Cuantos más nodos hagan referencia a un nodo determinado, más grande se vuelve.

Para interactuar con las notas en el grafo:

- Pasa el cursor sobre cada círculo para resaltar las conexiones de esa nota.
- Haz clic en una nota del grafo para abrirla.
- Haz clic derecho en una nota para abrir un menú contextual con las acciones disponibles para esa nota.

Para navegar por el grafo:

- Acerca y aleja usando la rueda de desplazamiento del ratón, o usando las teclas `+` y `-`.
- Mueve el grafo arrastrándolo con el cursor del ratón, o usando las teclas de flecha.

Puedes mantener presionada la tecla Mayús mientras usas el teclado para acelerar los movimientos.

## Ajustes

Para abrir los ajustes del grafo, haz clic en el icono de engranaje en la esquina superior derecha de la vista de grafo.

Haz clic en **Restaurar ajustes por defecto** en la esquina superior derecha del cuadro de ajustes para restablecer cualquier cambio que hayas realizado.

### Filtros

Esta sección controla qué nodos se muestran en el grafo.

- **Buscar archivos** te permite filtrar notas según un término de búsqueda. Para aprender a escribir términos de búsqueda más avanzados, consulta [[Búsqueda]].
- **Etiquetas** alterna si se muestran las etiquetas en el grafo.
- **Adjuntos** alterna si se muestran los adjuntos en el grafo.
- **Solo archivos existentes** alterna si se muestran notas que existen en tu bóveda. Dado que una nota no necesita existir para enlazarla, esto puede ayudar a limitar tu grafo a notas que realmente tienes en tu bóveda.
- **Huérfanos** alterna si se muestran notas sin ningún enlace.

> [!info] Archivos excluidos
> Los archivos que coincidan con tus patrones de [[Configuración#Archivos excluidos|Archivos excluidos]] no aparecerán en la vista de grafo.

### Grupos

Crea grupos de notas para distinguirlas entre sí usando colores.

Para crear un nuevo grupo:

1. Haz clic en **Nuevo grupo de marcadores**.
2. En el cuadro de búsqueda, escribe un término de búsqueda para las notas que deseas agregar al grupo.
3. Haz clic en el círculo de color para asignar un color al grupo.

Para aprender a escribir términos de búsqueda más avanzados, consulta [[Búsqueda]].

### Mostrar

Esta sección controla cómo se visualizan los nodos y enlaces en el grafo.

- **Flechas** alterna si se muestra la dirección de cada enlace.
- **Umbral de desvanecimiento** controla la transparencia del texto del nombre de cada nota.
- **Tamaño del nodo** controla el tamaño del círculo que representa cada nota.
- **Grosor de la línea** controla el ancho de línea de cada enlace.
- **Animar** inicia una [[#Iniciar una animación de lapso de tiempo|animación de lapso de tiempo]].

### Fuerzas

Esta sección controla las fuerzas que actúan sobre cada nodo en el grafo.

- **Fuerza centrípeta** controla qué tan compacto es el grafo. Un valor más alto crea un grafo más circular.
- **Fuerza de repelencia** controla cuánto un nodo empuja a otros nodos lejos de él.
- **Fuerza de enlace** controla la atracción de cada enlace. Si el enlace fuera una banda elástica, la fuerza de enlace controla qué tan tensa o suelta está la banda.
- **Distancia de enlace** controla la longitud de las líneas entre cada nota.

## Iniciar una animación de lapso de tiempo

Las notas y adjuntos aparecen en orden cronológico según su fecha de creación.

![[obsidian-graph-view.png#interface]]

## Grafo local

Para abrir una vista de grafo local, usa el comando **Abrir gráfico local**. Mientras que la vista de grafo muestra todas las notas de tu bóveda, una vista de grafo local te muestra las notas conectadas a la nota activa.

La vista de grafo local puede usar todos los [[#Ajustes]] disponibles en la vista de grafo global. Además, puedes cambiar la profundidad del grafo local. Cada nivel de profundidad mostrará notas conectadas a las notas reveladas en la profundidad anterior. Para controlar la profundidad del grafo local, usa el control deslizante en la parte superior del panel de ajustes de filtros del grafo local.
