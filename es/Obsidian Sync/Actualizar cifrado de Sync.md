---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Mueve tu bóveda de Sync a una región diferente, realiza una actualización de cifrado.
---
Por defecto, Obsidian Sync utiliza [[Obsidian Sync/Seguridad y privacidad#Cifrado|cifrado de extremo a extremo]] para todos tus datos. Esto garantiza que nadie — ni siquiera el equipo de Obsidian — pueda acceder a tus notas.

Obsidian actualiza ocasionalmente el cifrado de Sync para mantener los más altos estándares de [[Obsidian Sync/Seguridad y privacidad|seguridad]]. Si hay una actualización de cifrado disponible, verás una opción titulada **Actualizar el cifrado de la bóveda** en **Ajustes de Obsidian → Sync**. Este proceso también te permite cambiar tu [[Regiones de Sync|región de Sync]].

## Versiones de cifrado

Todas las bóvedas nuevas utilizan automáticamente el cifrado más reciente. Las bóvedas existentes pueden actualizarse usando el asistente de migración. Ten en cuenta que todos los dispositivos deben estar usando una versión de la aplicación Obsidian que sea compatible con la versión de cifrado de Sync a la que estás migrando.

| Fecha de lanzamiento                                                    | Versión de Sync | Versión mínima de la aplicación |
| ----------------------------------------------------------------------- | --------------- | ------------------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3               | 1.8.3                           |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0               | 0.9.21                          |

## Actualizar el cifrado con el asistente de migración

Antes de proceder, crea una [[Respaldar tus archivos de Obsidian|copia de seguridad]] de tu bóveda para prevenir cualquier posible pérdida de datos. Este proceso eliminará permanentemente todos los datos en tu bóveda remota con el cifrado anterior, incluyendo el historial de versiones.

> [!danger] Las migraciones son destructivas
> 
> **Siempre [[Respaldar tus archivos de Obsidian|respalda]] tu bóveda antes de proceder con una migración.**
> 
> Cuando migras una bóveda remota, tus datos serán reemplazados. Esto significa:
> 
> 1. Los datos remotos serán eliminados de los servidores de Obsidian, y los datos de la bóveda serán subidos nuevamente en su lugar.
> 2. Todo el [[Historial de versiones|historial de versiones]] de la bóveda se perderá.

1. Abre **[[Configuración]]**.
2. En la barra lateral, selecciona **Sync**.
3. Haz clic en **Actualizar bóveda**. Esta opción solo será visible si hay una actualización disponible para tu bóveda remota.
4. Verifica tus copias de seguridad y haz clic en **Continuar**.
5. En **Nombre de la bóveda**, ingresa el nombre de la bóveda remota.
6. En **Región**, elige la [[#Servidores regionales de sincronización|región]] del servidor para tu bóveda remota.
7. En **Contraseña de cifrado**, elige una contraseña para tu bóveda. Esto crea una bóveda con cifrado de extremo a extremo. La contraseña de la bóveda es independiente de tu cuenta de Obsidian y puede ser diferente para cada una de tus bóvedas. Para más información, consulta [[Seguridad y privacidad]].
8. Una vez que vuelvas a subir tus datos con el nuevo cifrado, reconéctate a la nueva bóveda de Sync en tus otros dispositivos.
