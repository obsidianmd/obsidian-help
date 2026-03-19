---
permalink: early-access
---
Obtén acceso anticipado a las próximas versiones habilitando las _versiones de acceso anticipado_. Las versiones de acceso anticipado solo están disponibles para usuarios con una [[Licencia Catalyst]].

> [!warning] Advertencia
> Las versiones de acceso anticipado son versiones beta. Incluyen nuevas funciones, pero pueden ser menos estables. No habilites las versiones de acceso anticipado si prefieres una experiencia más fiable.
> 
> Ten en cuenta que los desarrolladores de complementos de la comunidad y temas reciben las versiones de acceso anticipado al mismo tiempo que todos los demás. Ten paciencia con los desarrolladores que necesitan realizar actualizaciones para dar soporte a las nuevas funciones.

## Habilitar versiones de acceso anticipado en escritorio

Para recibir versiones de acceso anticipado tan pronto como estén disponibles, sigue estos pasos:

1. Abre **[[Configuración]]**.
2. En la barra lateral, selecciona **General**.
3. En **Cuenta → Su cuenta**, selecciona **Iniciar sesión**.
4. En **Correo electrónico**, ingresa tu correo electrónico.
5. En **Contraseña**, ingresa tu contraseña.
6. Una vez que hayas iniciado sesión, regresa a **[[Configuración]]**.
7. En la barra lateral, selecciona **General**.
8. En **Aplicación**, habilita **Recibir versiones de prueba**.
9. Haz clic en **Buscar actualizaciones** y luego en **Reiniciar la app**.

## Instalar versiones de acceso anticipado en dispositivos móviles

Para encontrar instrucciones sobre cómo instalar versiones de acceso anticipado en tu dispositivo móvil, sigue estos pasos:

1. Descarga e instala [Discord](<https://discord.com>).
2. Únete al [servidor de Discord de Obsidian](https://discord.gg/obsidianmd).
3. [[Licencia Catalyst#Obtener tu insignia de Discord|Obtén tu insignia de Discord]] para acceder a los canales insider.
4. En el canal `#insider-welcome`, encontrarás instrucciones para acceder a tu descarga según el tipo de dispositivo.

## Reportar problemas y otros comentarios

Si descubres un problema en una versión de acceso anticipado, considera reportarlo al equipo de Obsidian. Antes de reportar un problema, busca en el [foro](https://forum.obsidian.md/) o en Discord para ver si alguien ya lo ha reportado.

Para reportar un problema, usa uno de los siguientes canales:

- En Discord, reporta el problema en el canal `#insider-release` correspondiente.
- En el foro, crea un nuevo tema en [Bug reports](https://forum.obsidian.md/c/bug-reports/7).

Cuando reportes un problema, incluye la versión de compilación y el sistema operativo en el que lo estás ejecutando. Puedes encontrar la versión de compilación en **[[Configuración]] → Acerca de → Aplicación → Versión actual**.

## Volver a las versiones públicas en escritorio

Para volver a usar las versiones públicas (no de acceso anticipado) en escritorio:

1. Deshabilita las versiones de acceso anticipado.
   1. Abre **[[Configuración]]**.
   2. En la barra lateral, selecciona **General**.
   3. En **Aplicación**, deshabilita **Recibir versiones de prueba**.
2. Cierra Obsidian.
3. Elimina el archivo `obsidian-VERSION.asar`, donde `VERSION` es la versión de Obsidian.
   - Windows: `%APPDATA%\obsidian\obsidian-VERSION.asar`
   - Mac: `~/Library/Application Support/obsidian/obsidian-VERSION.asar`
   - Linux: `~/.config/obsidian/obsidian-VERSION.asar`
4. Reinicia Obsidian.

## Volver a las versiones públicas en móvil

Para volver a usar las versiones públicas (no de acceso anticipado) en móvil:

1. Respalda los datos de tu bóveda
2. Desinstala Obsidian
3. Reinstala Obsidian desde Play Store o la App Store de Apple
4. Restaura los datos de tu bóveda desde tus respaldos
5. Abre Obsidian
