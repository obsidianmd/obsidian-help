La recuperación de archivos es un complemento básico para ayudarlo a recuperar sus datos en caso de todo tipo de accidentes: error del usuario, corte de energía o complementos y scripts que no funcionan correctamente.

La recuperación de archivos está habilitada de forma predeterminada, porque es demasiado tarde para habilitarla cuando ya ha perdido datos.

## Cómo funciona

### Instantáneas

Siempre que este complemento esté habilitado, las instantáneas completas de lo que está trabajando se guardan a intervalos fijos (puede configurar este intervalo). Las instantáneas se eliminan después de una cantidad fija de tiempo de retención.

Este proceso es automático. De forma predeterminada, las instantáneas se realizan cada 5 minutos y las instantáneas se guardan durante 7 días.

### Recuperación

En caso de pérdida de datos, así es como puede encontrar instantáneas guardadas:

1. Abra la configuración
2. Abra la pestaña "Recuperación de archivos" en "Opciones de complementos"
3. Haga clic en el botón "Ver" en la sección "Instantáneas"
4. En la barra de búsqueda de la izquierda, ingrese el nombre del archivo que desea recuperar. Si el nombre del archivo no se muestra, significa que no se guardaron instantáneas para ese archivo
5. Después de seleccionar un archivo en el menú desplegable, aparecerá una lista de instantáneas a la izquierda. Seleccione el que desea recuperar
6. El contenido de esa instantánea se mostrará a la derecha. Puede hacer clic en "Copiar al portapapeles" para copiar todo o seleccionar parte del contenido

##Opciones

### Intervalo de instantáneas

Número mínimo de minutos entre dos instantáneas. El valor predeterminado es 5 minutos.

### Duración del historial

Número de días para conservar las instantáneas. El valor predeterminado es 7 días.

### Borrar historial

También tiene la opción de borrar todo el historial. ==Tenga cuidado ya que esta acción es irreversible.==

## Almacenamiento de datos

Los datos de recuperación de archivos se almacenan en [[Cómo almacena Obsidian los datos#Directorio del sistema|directorio del sistema]] en caso de mal funcionamiento de la bóveda.

Tenga en cuenta que las bóvedas se identifican por su ruta absoluta. Si ha movido la bóveda, deberá volver a moverla a su posición anterior para restaurar las instantáneas mientras la bóveda estaba allí.