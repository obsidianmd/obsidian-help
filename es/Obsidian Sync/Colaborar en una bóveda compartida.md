---
permalink: sync/collaborate
publish: true
mobile: true
description: Esta página detalla cómo puedes colaborar con otros usuarios de Obsidian Sync.
---
Con [[Introducción a Obsidian Sync|Obsidian Sync]] puedes colaborar en una bóveda compartida con tu equipo.

Todos los colaboradores deben tener una suscripción activa de Sync para acceder a una bóveda compartida. Unirse a una bóveda compartida no cuenta para tu [[Preguntas frecuentes#¿Cuántas bóvedas remotas puedo tener?|límite de bóvedas]].

Si la bóveda remota está [[Obsidian Sync/Seguridad y privacidad|cifrada de extremo a extremo]], los colaboradores deben ingresar la contraseña de cifrado cuando configuren la bóveda.

## Gestionar usuarios

### Añadir usuarios

Para invitar a un usuario a compartir una bóveda remota:

1. Abre **[[Configuración]]**.
2. En el menú lateral, selecciona **Sync**.
3. Junto a **Bóveda remota**, selecciona **Administrar**.
4. Junto a la bóveda remota que deseas compartir, selecciona **Gestionar compartición** ![[lucide-users.svg#icon]].
5. En **Invitar usuario**, ingresa el correo electrónico del usuario que deseas invitar.
6. Selecciona **Añadir**.

### Eliminar usuarios

1. Abre **[[Configuración]]**.
2. En el menú lateral, selecciona **Sync**.
3. Junto a **Bóveda remota**, selecciona **Administrar**.
4. Junto al usuario al que deseas eliminar el acceso, selecciona **Eliminar usuario** ![[lucide-x.svg#icon]].

## Colaborar con tu equipo

### Permisos

Los permisos granulares aún no son compatibles. Todos los colaboradores reciben los mismos permisos que el propietario de la bóveda, con una excepción: solo el propietario de la bóveda puede invitar colaboradores.

### Edición en vivo

Las bóvedas compartidas permiten a los equipos trabajar juntos en un conjunto de archivos, sin embargo Obsidian aún no admite la edición colaborativa en vivo en el mismo archivo. No verás el cursor del otro usuario, y sus ediciones solo aparecerán una vez que los cambios se hayan sincronizado.

Si varios usuarios están editando el mismo archivo al mismo tiempo, [[Solución de problemas de Obsidian Sync#Resolución de conflictos|los cambios se fusionarán]] durante el proceso de sincronización. Los cambios pueden verse y restaurarse usando el [[Historial de versiones]].

![[version-history-collaboration.png]]^version-history-image

## Limitaciones

Ten en cuenta que Obsidian Sync tiene [[Preguntas frecuentes|limitaciones]] que pueden afectar a tu equipo:

- El número máximo de colaboradores en una bóveda compartida es de 20 usuarios.
- El tamaño máximo de archivo para adjuntos depende del [[Planes y límites de almacenamiento|plan]] del anfitrión de tu bóveda remota, con 5 MB para el Plan Estándar y 200 MB para el Plan Plus.

Aprende más sobre [[Sync para equipos]].
