---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Esta página enumera problemas poco comunes que puedes encontrar con Obsidian Sync y cómo resolverlos.
---
Esta página enumera problemas poco comunes que puedes encontrar con [[Introducción a Obsidian Sync|Obsidian Sync]] y cómo resolverlos. Antes de continuar, recomendamos revisar las páginas [[Icono de estado y mensajes]] y [[Preguntas frecuentes]].

## General

### Resolución de conflictos

Un conflicto ocurre cuando cambias el mismo archivo en dos o más dispositivos antes de que se sincronicen. Por ejemplo, editas una nota en tu computadora. Antes de que ese cambio se suba, también cambias la misma nota en tu teléfono.

Los conflictos ocurren con más frecuencia cuando trabajas sin conexión. Hay más cambios y más tiempo entre sincronizaciones, lo que aumenta la probabilidad de conflictos.

#### Cómo Obsidian Sync maneja los conflictos

Cuando Obsidian Sync encuentra un conflicto, el resultado depende del tipo de archivo:

- **Archivos Markdown**: Obsidian Sync fusiona los cambios usando el algoritmo [diff-match-patch](https://github.com/google/diff-match-patch) de Google.
- **Otros tipos de archivo**: Para todos los demás archivos, incluyendo canvas, Obsidian usa un enfoque de "el último modificado gana". La versión modificada más recientemente reemplaza las versiones anteriores.

Para conflictos en los ajustes de Obsidian, como los ajustes de complementos, Obsidian Sync fusiona los archivos JSON. Aplica las claves del JSON local sobre el JSON remoto.

#### Opciones de resolución de conflictos

A partir de Obsidian 1.9.7, puedes elegir cómo manejar los conflictos. Para configurar este ajuste:

1. Abre **[[Configuración]]**.
2. En la barra lateral, selecciona **Sync**.
3. En **[[Ajustes de Sync y sincronización selectiva#Resolución de conflictos|Resolución de conflictos]]**, elige tu opción preferida:
   - **Fusionar automáticamente** (predeterminado): Obsidian Sync combina todos los cambios de diferentes dispositivos en un solo archivo. Esto guarda todas las ediciones, pero a veces puede crear texto duplicado o problemas de formato. Necesitarás corregirlos manualmente.
   - **Crear archivo de conflicto**: Cuando Obsidian encuentra cambios conflictivos, crea un archivo de conflicto separado en lugar de fusionar automáticamente. Luego puedes revisar ambas versiones y fusionarlas tú mismo. Esto te da control total sobre el resultado final.

> [!warning]+ Configurar en todos los dispositivos
> Los ajustes de resolución de conflictos son específicos de cada dispositivo. Debes configurar tu opción preferida en cada uno de tus dispositivos. Esto asegura el mismo comportamiento en todos tus dispositivos sincronizados.

**Patrón de nombres de archivos de conflicto**

Cuando usas la opción "Crear archivo de conflicto", Obsidian crea un nuevo archivo con este patrón de nombre:

```
nombre-nota-original.sync-conflict-AAAAMMDD-HHMMSS.md
```

Por ejemplo, si ocurre un conflicto en una nota llamada `Meeting notes.md`, el archivo de conflicto podría llamarse:

```
Meeting notes.sync-conflict-20241128-143022.md
```

El archivo de conflicto contiene los cambios del dispositivo donde se detectó el conflicto. El archivo original mantiene la versión remota. Puedes comparar ambos archivos y fusionar el contenido manualmente.

> [!info]+ Revisa el registro de sincronización
> Para verificar cuándo ocurrieron conflictos, abre el [[Icono de estado y mensajes#Actividad de sincronización|registro de sincronización]]. Filtra por "Combinar conflictos" o busca "Conflict".

### Sync eliminó una nota que acababa de crear en dos dispositivos

Obsidian Sync normalmente intenta [[#Resolución de conflictos|resolver conflictos]] fusionando notas conflictivas entre dispositivos. Sin embargo, pueden ocurrir problemas para usuarios que crean o cambian notas automáticamente al inicio. Esto incluye [[Notas diarias]] o al usar el complemento de la comunidad [Templater](https://github.com/SilentVoid13/Templater).

Si creas una nota localmente en un dispositivo y, en un par de minutos, Sync descarga una versión remota de esa misma nota, Sync mantendrá la versión remota sin fusionar las dos. En este caso, puedes recuperar la versión local usando [[Recuperación de archivos]].

### Sync no sincroniza las actualizaciones de mis complementos y ajustes

Obsidian [[Preguntas frecuentes#¿Obsidian Sync recarga mis ajustes en tiempo real?|no recarga en vivo todos los ajustes]]. Después de actualizar ajustes o complementos, necesitas reiniciar Obsidian en otros dispositivos para ver los cambios. En dispositivos móviles, puede que necesites forzar el cierre de la aplicación.

> [!example]- Cambiar un tema
> - En tu dispositivo principal (generalmente una computadora), cambias tu tema de vuelta al predeterminado desde un tema personalizado.
> - El registro de sincronización confirma que los archivos actualizados fueron enviados a la bóveda remota, pero tu dispositivo móvil aún muestra el tema personalizado.
> - En el dispositivo móvil, revisa el registro de sincronización para confirmar la recepción del archivo `appearance.json` actualizado.
> - Recarga o reinicia Obsidian en el dispositivo móvil.
> - Después de recargar o reiniciar, el dispositivo móvil debería mostrar el mismo tema que tu computadora.

### Mis archivos siguen desapareciendo de Sync tan pronto como los restauro

Este problema es más común en Windows. Windows Defender puede poner en cuarentena archivos con bloques de código, lo que causa que ciertas notas desaparezcan.

Otra causa común es la sincronización doble. Esto ocurre cuando Obsidian Sync se ejecuta junto con otro servicio de sincronización.

![[Cambiar a Obsidian Sync#Mueve tu bóveda fuera de tu servicio de sincronización de terceros o almacenamiento en la nube]]

---

Finalmente, esto puede ocurrir cuando restauras un archivo en un dispositivo, pero luego se elimina de un dispositivo secundario. Esto sucede cuando el nombre del archivo tiene [[Icono de estado y mensajes#Mensajes omitidos|caracteres ilegales]].

## Android

**Mi dispositivo está eliminando los adjuntos que recibo a través de Sync**

Este problema probablemente se debe a que Google o Android Photos están gestionando tus adjuntos. Para evitar que el sistema cambie archivos recibidos a través de Sync, añade un archivo `.nomedia` [a tu bóveda](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) en tu dispositivo Android.

> [!tip]- Usa un complemento
> El complemento de la comunidad [Android Nomedia](https://obsidian.md/es/plugins?id=android-nomedia) facilita esto. Instálalo en tu teléfono Android. Ten en cuenta que los archivos `.nomedia` no se sincronizan entre dispositivos a través de Obsidian Sync.
