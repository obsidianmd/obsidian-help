---
permalink: plugins/file-recovery
publish: true
mobile: true
description: La Recuperación de archivos ayuda a proteger tu trabajo de la pérdida involuntaria de datos guardando automáticamente instantáneas de tus notas a intervalos regulares.
---
La recuperación de archivos es un [[Complementos principales|complemento principal]] que protege tu trabajo de eliminaciones accidentales, corrupción de archivos o cambios no deseados al guardar automáticamente instantáneas completas de tus notas a intervalos regulares. La recuperación de archivos no es una solución de respaldo completa, y recomendamos también [[Respaldar tus archivos de Obsidian|respaldar]] tus archivos de Obsidian por separado.

Para evitar ocupar [[#Almacenamiento y rendimiento|demasiado espacio]], Obsidian conserva las instantáneas durante un cierto número de días antes de eliminarlas. Las instantáneas capturan el contenido completo de tus archivos, no solo los cambios, lo que te permite restaurar cualquier versión anterior.

> [!info]+ Información
> Por defecto, las instantáneas se guardan con un mínimo de 5 minutos de diferencia entre sí, y se conservan durante 7 días. Puedes configurar ambos intervalos en **[[Configuración]] → Complementos principales → Recuperación de archivos**.

Las instantáneas se almacenan en los [[Cómo Obsidian almacena los datos#Ajustes globales|Ajustes globales]], fuera de la bóveda, para tener en cuenta la pérdida de datos relacionada con la bóveda. Esto significa que las instantáneas se almacenan con la ruta absoluta a la nota. Si has movido tu bóveda recientemente, es posible que necesites moverla de vuelta a la ubicación donde estaba cuando se tomó la instantánea.

> [!tip] Si estás usando [[Introducción a Obsidian Sync|Obsidian Sync]] u [[Sincronizar notas entre dispositivos|otros servicios de sincronización]], las instantáneas de recuperación de archivos no se sincronizarán entre dispositivos. Las instantáneas son específicas del dispositivo y permanecen locales en cada dispositivo.

## Recuperar una instantánea

1. Abre **[[Configuración]]**.
2. En la barra lateral, selecciona **Recuperación de archivos** en **Complementos principales**.
3. En **Capturas**, selecciona **Vista**.
4. En el campo de nombre de archivo, comienza a escribir el nombre del archivo que deseas recuperar y verás una lista de sugerencias.
5. Selecciona el archivo, presiona Enter y verás una lista de instantáneas disponibles.
6. Selecciona la instantánea que deseas recuperar.
    1. Si deseas copiar y pegar en una nueva nota, selecciona el botón **Copiar**.
    2. Si deseas restaurar el archivo completamente, selecciona el botón **Restaurar**.
7. Opcionalmente puedes mostrar las diferencias entre instantáneas activando **Mostrar cambios**. Esto muestra qué contenido fue añadido, eliminado o modificado entre versiones de las instantáneas.

## Limpiar el historial de instantáneas

> [!danger] Limpiar el historial de instantáneas elimina irreversiblemente todas las instantáneas de tu bóveda.

1. Abre **[[Configuración]]**.
2. En la barra lateral, selecciona **Recuperación de archivos** en **Complementos principales**.
3. En **Limpiar historial**, selecciona **Limpiar**.
4. Confirma que deseas eliminar todas las instantáneas haciendo clic en **Limpiar**.

## Almacenamiento y rendimiento

Las instantáneas de recuperación de archivos normalmente usan un espacio mínimo en disco, ya que solo almacenan archivos modificados. Sin embargo, en bóvedas con muchos archivos grandes o ediciones frecuentes, las instantáneas pueden acumularse con el tiempo. Monitorea el uso de almacenamiento y ajusta el período de retención si es necesario.

## Limitaciones

- **Modo de bloqueo de Apple**: Esta función no está disponible en dispositivos Apple con el [modo de bloqueo](https://support.apple.com/en-us/105120) habilitado, a menos que Obsidian esté exento.
- **Tipos de archivo**: Solo los archivos `.md` y `.canvas` pueden restaurarse usando la recuperación de archivos.
- **Ubicación de la bóveda**: Si mueves tu bóveda a una ubicación diferente sin usar el [[Gestionar bóvedas#Mover la bóveda a una carpeta diferente|selector de bóvedas]], las instantáneas existentes podrían no estar accesibles.
