---
permalink: plugins/daily-notes
---
Notas diarias es un [[Complementos principales|complemento principal]] que abre una nota basada en la fecha de hoy, o la crea si no existe. Usa las notas diarias para crear diarios, listas de tareas o registros diarios de cosas que descubriste durante el día.

Para abrir la nota diaria de hoy, puedes:

- Hacer clic en **Abrir la nota de hoy** ( ![[lucide-calendar.svg#icon]] ) en la [[Menú de cinta|menú de cinta]].
- Ejecutar **Abrir la nota de hoy** desde la [[Paleta de comandos]].
- [[Teclas de acceso rápido#Configurar atajos de teclado|Usar un atajo de teclado]] para el comando **Abrir la nota de hoy**.

De forma predeterminada, Obsidian crea una nueva nota vacía con el nombre de la fecha de hoy en formato YYYY-MM-DD.

> [!tip] Si prefieres tener tus notas diarias en una carpeta separada, puedes configurar la <u>Ubicación de archivo nuevo</u> en las opciones del complemento para cambiar dónde Obsidian crea las nuevas notas diarias.

> [!example]- Subcarpetas automáticas
> Puedes organizar automáticamente tus notas diarias en carpetas usando la función de **Formato de fecha**.
> 
> Por ejemplo, si configuras el formato de fecha como `YYYY/MMMM/YYYY-MMM-DD`, tus notas se crearán como `2023/January/2023-Jan-01`. 
> 
> Puedes explorar más opciones de formato en el sitio de documentación de [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Crear una nota diaria desde una plantilla

Si tus notas diarias tienen la misma estructura, puedes usar una [[Plugins/Plantillas|plantilla]] para agregar contenido predefinido a tus notas diarias cuando las crees.

1. Crea una nueva nota llamada "Plantilla diaria" con el siguiente texto (¡o lo que tenga sentido para ti!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Tareas

   - [ ]
   ```

2. Abre **[[Configuración]]**.
3. En la barra lateral, haz clic en **Notas diarias** bajo **Opciones de complementos**.
4. En el cuadro de texto junto a **Ubicación de la plantilla**, selecciona la nota "Plantilla diaria".

Obsidian usará la plantilla la próxima vez que crees una nueva nota diaria.

## Notas diarias y propiedades

Cuando el complemento de Notas diarias está activado y una propiedad de fecha está presente en cualquier nota, Obsidian intentará automáticamente generar un enlace a la nota diaria de ese día específico. Por ejemplo, si una nota titulada `example.md` incluye una propiedad de fecha como `2023-01-01`, esta fecha se transformará en un enlace clicable en la sección de [[Vistas y modo de edición#Vista previa en vivo|vista previa en vivo]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
