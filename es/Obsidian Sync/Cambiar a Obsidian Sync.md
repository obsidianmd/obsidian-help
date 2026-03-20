---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Aprende cómo hacer la transición desde tu solución de sincronización actual a Obsidian Sync.
---
Aprende cómo hacer la transición desde tu solución de sincronización actual a Obsidian Sync.

> [!warning] Evita usar múltiples soluciones para sincronizar los mismos archivos
> [[Preguntas frecuentes#¿Puedo usar una sincronización de terceros con Obsidian Sync?|No recomendamos]] usar Obsidian Sync junto con servicios de almacenamiento en la nube (por ejemplo, iCloud, Dropbox, OneDrive, Google Drive) ya que esto puede causar conflictos. Sin embargo, los servicios de almacenamiento en la nube pueden tener un papel en tu estrategia de [[Respaldar tus archivos de Obsidian|respaldo]].

## Mueve tu bóveda fuera de tu servicio de sincronización de terceros o almacenamiento en la nube

Si tu bóveda está almacenada en cualquiera de las siguientes ubicaciones, es probable que esté siendo sincronizada por un servicio de terceros:

- **Windows**: `C:\Users\Username\Desktop` o `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` o `/users/username/Documents`
- **iOS**: La carpeta **iCloud** dentro de la aplicación Archivos
- **Otro**: Cualquier carpeta bajo un servicio de sincronización, como `Drive/mi-boveda`, `Dropbox/mi-boveda`, `pSync/mi-boveda`, etc.

Aunque Android y Linux tienden a tener menos problemas con esto, vale la pena verificar la ubicación de tu bóveda en estos dispositivos.

> [!tip] Si tu bóveda local actual está conectada a una bóveda remota, Obsidian intentará detectar si la bóveda está en un servicio de sincronización. Si lo está, verás un mensaje en la parte superior de los ajustes de Obsidian Sync.

Para evitar conflictos con servicios de sincronización, recomendamos almacenar tus bóvedas de Obsidian en las siguientes ubicaciones:

- **Windows**: Ubicaciones recomendadas en orden:
    1. `D:\` o cualquier otra unidad que no sea C ni una unidad de red en tu dispositivo
    2. `C:\Vaults` (si tienes permisos para usar la unidad C:\)
    3. `C:\Users\Username\Vaults` (si debes mantener tu bóveda dentro de C:\Users\Username, asegúrate de que OneDrive esté configurado para no eliminar archivos. OneDrive es generalmente menos agresivo fuera de las carpetas `Desktop` y `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Sin recomendación específica debido a la variedad de sistemas de archivos. Solo asegúrate de que Obsidian tenga acceso completo de lectura/escritura y que ningún servicio de sincronización gestione la carpeta.
- **iOS/iPadOS**: Almacena la bóveda en **En mi iPhone** o **En el dispositivo**.
- **Android**: Usa la carpeta `Documents/` en tu dispositivo.

## Mueve tu bóveda usando Obsidian en escritorio

![[Gestionar bóvedas#Mover bóveda a una carpeta diferente]]

## Mueve tu bóveda en móvil

En dispositivos móviles, Obsidian opera en un entorno aislado (sandbox), lo que significa que no puedes mover bóvedas dentro de la aplicación como puedes hacerlo en escritorio.

### Android

Los sistemas de archivos de Android varían mucho según el dispositivo, pero en general, sigue los mismos pasos que seguirías para mover tu bóveda manualmente, asegurándote de que esté eliminada de cualquier servicio de sincronización en tu dispositivo.

### iOS e iPadOS

Para mover una bóveda existente de iCloud a tu dispositivo, sigue estos pasos:

> [!note] Si ya tienes los datos en otro dispositivo y has configurado Obsidian Sync, se recomienda [[Configurar Obsidian Sync#Sincronizar una bóveda remota en otro dispositivo|configurar una nueva bóveda local desde Sync]] en su lugar.

- [[Respaldar tus archivos de Obsidian|Respalda]] tu bóveda.
- Crea una nueva bóveda en tu dispositivo, asegurándote de que **Guardar en iCloud Drive** esté desactivado.
- Fuerza el cierre de la aplicación Obsidian en todos los dispositivos para pausar Sync.
- Abre la aplicación **Archivos** en tu dispositivo iOS/iPadOS.
- Mantén pulsada la carpeta de la bóveda en **iCloud Drive → Obsidian**, luego selecciona **Mover**.
- Mueve la bóveda a **En mi iPhone/Dispositivo → Obsidian** y confirma que ahora es visible.
- Toca **Copiar**.
- Regresa a **iCloud Drive → Obsidian** y elimina la carpeta de la bóveda antigua.

Una vez que vuelvas a abrir Obsidian, la bóveda debería mostrar un icono de bóveda en lugar de un icono de nube, confirmando que ya no está en iCloud Drive. Obsidian Sync tampoco mostrará el mensaje de advertencia dentro de sus ajustes.

## Próximos pasos

- ¿Quieres comenzar con Obsidian Sync? [[Configurar Obsidian Sync]]
- ¿Aún necesitas ayuda? Consulta [[Solución de problemas de Obsidian Sync]]
