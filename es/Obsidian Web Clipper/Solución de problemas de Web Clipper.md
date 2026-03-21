---
permalink: web-clipper/troubleshoot
---
Si encuentras problemas con [[Introducción a Obsidian Web Clipper|Web Clipper]] puedes obtener ayuda a través del [canal oficial de Discord](https://discord.com/channels/686053708261228577/1285652864089198672). También puedes reportar errores en el [repositorio de GitHub](https://github.com/obsidianmd/obsidian-clipper).

## General

### Falta algo de contenido

De forma predeterminada, Web Clipper intenta capturar inteligentemente el contenido de la página. Sin embargo, puede que no lo logre con éxito en todos los sitios web.

Web Clipper usa [Defuddle](https://github.com/kepano/defuddle) para capturar solo el contenido principal de la página. Esto excluye encabezados, pies de página y otros elementos, pero a veces puede ser demasiado conservador y eliminar contenido que deseas mantener. Puedes [reportar errores](https://github.com/kepano/defuddle) a Defuddle.

Para omitir Defuddle en Web Clipper usa los siguientes métodos:

- Selecciona texto, o usa `Cmd/Ctrl+A` para seleccionar todo el texto.
- [[Resaltar páginas web|Resalta contenido]] para elegir exactamente lo que deseas capturar.
- Usa una [[Obsidian Web Clipper/Plantillas|plantilla personalizada]] para el sitio.

### No aparece contenido en Obsidian

Si no ves ningún contenido en Obsidian cuando haces clic en **Añadir a Obsidian**:

- Verifica si hay errores en la [[Ayuda y soporte#Capturar registros de consola|consola de desarrollador]] de Obsidian.
- Verifica que el nombre de tu bóveda en los ajustes de Web Clipper coincida exactamente con el *nombre de tu bóveda* en Obsidian, *no con la ruta de la bóveda*.
- Verifica que el nombre de la carpeta tenga el formato correcto.

## Linux

#### Obsidian no se abre

- Asegúrate de que el protocolo [[Obsidian URI]] [[Obsidian URI#Registrar el URI de Obsidian|esté registrado]].
- Si usas Firefox puede que necesites [registrarlo en los ajustes del navegador](https://kb.mozillazine.org/Register_protocol).

#### Obsidian se abre pero solo se guarda el nombre del archivo

Es probable que Obsidian no pueda acceder a tu portapapeles. El acceso al portapapeles es necesario para pasar datos desde tu navegador a Obsidian. Tu configuración puede afectar cómo se aíslan las aplicaciones y los permisos del portapapeles.

Si usas Wayland, asegúrate de que Obsidian tenga permisos para leer el portapapeles cuando la aplicación no esté enfocada. Esta preferencia puede estar en tu gestor de ventanas de mosaico, por ejemplo, Hyprland o Sway.

Si usas Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Si usas Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Si usas Flatpak considera probar una [versión de Obsidian oficialmente soportada](https://obsidian.md/es/download).
- Si usas KDE ve a **Configuración del sistema** → **Gestión de ventanas** → **Reglas de ventanas** y permite que Obsidian tome el foco, [[web-clipper-kde.png|ver captura de pantalla]].
- Como alternativa, intenta cambiar al **modo Legado** en **Ajustes de Web Clipper** → **General**. Esto omitirá el portapapeles y guardará el contenido directamente a través de URI. Ten en cuenta que esto limitará el número de caracteres que se pueden recortar dependiendo de tu navegador y distribución de Linux.

## iOS e iPadOS

Para habilitar la extensión de Web Clipper para Safari:

1. Ve a Safari, toca el botón más a la izquierda en la barra de URL del navegador, se ve como un rectángulo con líneas debajo.
2. Toca **Administrar extensiones**.
3. Activa **Obsidian Web Clipper** en la lista de extensiones.
4. Sal del menú.
5. Para usar la extensión, **toca el icono de pieza de rompecabezas** en la barra de URL.

Para permitir que Web Clipper se ejecute en todos los sitios web:

1. Ve a **[[Configuración]]** de iOS → **Apps** → **Safari** → **Extensiones**.
2. En **Permisos** permite que se ejecute en todos los sitios web.

Para permitir que Obsidian siempre reciba contenido de Web Clipper:

1. Ve a **[[Configuración]]** de iOS → **Apps** → **Obsidian**.
2. Establece **Pegar desde otras apps** en **Permitir**.
