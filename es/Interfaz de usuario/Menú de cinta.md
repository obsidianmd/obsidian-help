---
permalink: ribbon
publish: true
mobile: true
description: Aprende a usar el menú de cinta, un espacio para comandos comunes en Obsidian, y a personalizarla en escritorio y móvil.
---
El menú de cinta funciona como un espacio para comandos comunes dentro de Obsidian.

En escritorio, se encuentra en la [[Barra lateral#Abrir barras laterales ocultas|barra lateral izquierda]] y permanece visible incluso cuando la barra lateral izquierda está cerrada.

En móvil, puedes acceder a las [[Aplicación móvil#Acciones del menú de cinta|acciones del menú de cinta]] tocando la **opción de Menú** ![[lucide-menu.svg#icon]] en la esquina inferior derecha de la aplicación cuando no estás editando una nota.

## Acciones

Cada acción está representada por un icono en el menú de cinta. Al pasar el cursor sobre estos iconos se mostrará una descripción emergente, mientras que al seleccionarlos se activará la acción asociada. En móvil, puedes tocar estos iconos para activarlos.

1. Abrir el **[[Gestionar bóvedas|Selector de bóvedas]]** ![[obsidian-icon-vault-switcher.svg#icon]].
2. Acceder a la **ayuda** ![[lucide-help-circle.svg#icon]].
3. Abrir **[[Configuración]]** ![[lucide-settings.svg#icon]].

En la versión móvil, puedes configurar una acción de acceso rápido en el menú de cinta. Para más información, consulta la [[#Móvil|sección móvil]] y [[Aplicación móvil]].

## Personalizar el menú de cinta

La disposición personalizada de tu menú de cinta se recuerda entre sesiones. Se sincroniza con otros dispositivos y la aplicación móvil cuando los ajustes de la aplicación (en los archivos `workspace.json` y `workspace-mobile.json`) están sincronizados.

### Escritorio

En la versión de escritorio, puedes personalizar el menú de cinta de la siguiente manera:

- Reordena las acciones del menú de cinta arrastrando y soltando los iconos.
- Para ocultar acciones específicas, haz clic derecho en un espacio vacío dentro del menú de cinta y desmarca las acciones que deseas ocultar.

#### Ocultar el menú de cinta

Puedes ocultar el menú de cinta de dos formas:

- Haz clic derecho en el menú de cinta y selecciona **Ocultar menú de cinta**.
- Abre **[[Configuración]]** → **Apariencia**, desplázate hacia abajo hasta **Avanzado** y desactiva **Mostrar menú de cinta**.

#### Mostrar el menú de cinta

Si has ocultado el menú de cinta y deseas mostrarla de nuevo:

1. Abre **[[Configuración]]** → **Apariencia**.
2. Desplázate hacia abajo hasta **Avanzado**.
3. Activa **Mostrar menú de cinta**.
4. El menú de cinta aparecerá de nuevo en el lado izquierdo de la ventana.

> [!tip] CSS personalizado
> Si estás usando un tema de la comunidad o CSS personalizado, asegúrate de que no oculte el menú de cinta mediante reglas de estilo personalizadas.

### Móvil

En la versión móvil de Obsidian, puedes realizar acciones de acceso rápido, reordenar elementos y personalizar el menú de cinta. Para acceder a estas personalizaciones, sigue estos pasos:

1. Abre los **[[Configuración|Ajustes]]** de Obsidian ![[lucide-cog.svg#icon]].
2. Navega a la sección de **apariencia**.
3. Desplázate hacia abajo hasta las opciones **avanzadas**.
4. Selecciona el botón **Administrar** bajo el elemento **Ajustes del menú de cinta**.

#### Acceso rápido

Por defecto, la opción de acceso rápido está configurada como "Abrir el menú de cinta" con una *pulsación corta*. Si eliges otra opción como acceso rápido:

- La opción seleccionada se activará con una *pulsación corta*.
- El acceso al menú de cinta cambiará a una *pulsación larga*.

> [!info] Las opciones de acceso rápido dependen de los ajustes de Obsidian y los complementos principales que tengas habilitados.

#### Reordenar y visibilidad

Para cambiar el orden de los elementos en el menú de cinta, mantén presionado el botón de **arrastrar y soltar** ![[lucide-menu.svg#icon]] y mueve el elemento seleccionado hacia arriba o hacia abajo.

Puedes mostrar u ocultar elementos en el menú de cinta usando los botones rojo de **eliminar** ![[lucide-minus-circle.svg#icon]] o verde de **añadir** ![[lucide-plus-circle.svg#icon]] para alternar su visibilidad.

 ![[ribbon-rearrange-visibility.jpeg#interface]]
