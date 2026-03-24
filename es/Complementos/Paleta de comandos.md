---
permalink: plugins/command-palette
aliases:
  - Plugins/Paleta de comandos
---
El [[Complementos principales|complemento]] de la Paleta de comandos te permite ejecutar cualquier comando directamente desde tu teclado. También te permite explorar todos los comandos disponibles y sus [[Teclas de acceso rápido|atajos de teclado]].

Para ejecutar un comando desde la Paleta de comandos:

1. Presiona `Ctrl+P` (o `Cmd+P` en macOS) para abrir la Paleta de comandos. También puedes abrirla desde la [[Menú de cinta]] con el icono de Paleta de comandos ![[lucide-terminal.svg#icon]].
2. Escribe el nombre del comando que deseas ejecutar.
3. Navega hasta el comando usando las teclas de flecha.
4. Presiona `Enter`.

> [!tip] Consejo
> La Paleta de comandos admite _coincidencia difusa_, lo que te permite buscar comandos incluso si no conoces sus nombres exactos. Por ejemplo, escribir "gaa" encontrará el comando **G**uardar **a**rchivo **a**ctual.

A partir de la **versión 1.8.3**, los comandos usados recientemente aparecen en la parte superior de la Paleta de comandos. Sin embargo, estos comandos usados recientemente siguen sujetos al algoritmo de _coincidencia difusa_. Cuando comienzas a filtrar, los comandos más cortos tendrán prioridad sobre los usados recientemente.

## Comandos fijados

Puedes fijar comandos de uso frecuente en la parte superior de la Paleta de comandos para acceder rápidamente a ellos sin tener que escribir su nombre.

> [!tip] Consejo
> Si deseas ejecutar rápidamente comandos de uso frecuente, también puedes [[Teclas de acceso rápido#Configurar atajos de teclado|configurar atajos de teclado]] para ellos.

### Fijar un comando

1. Abre **[[Configuración]]**.
2. En la barra lateral, haz clic en **Paleta de comandos** bajo **Opciones de complementos**.
3. Junto a **Nuevo comando fijado**, haz clic en **Seleccionar un comando**.
4. Selecciona el comando que deseas fijar de la lista.
5. Presiona `Enter`.

### Desfijar un comando

1. Abre **[[Configuración]]**.
2. En la barra lateral, haz clic en **Paleta de comandos** bajo **Opciones de complementos**.
3. Bajo **Comandos fijados**, haz clic en el icono de cruz junto al comando que deseas desfijar.
