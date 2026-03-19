---
permalink: publish/security
---
Puedes elegir las notas que deseas publicar en [[Introducción a Obsidian Publish|Obsidian Publish]]. El resto de tus notas permanecen seguras en tu bóveda.

Solo las notas que elijas publicar se envían a los servidores de Obsidian, y cualquier nota que dejes de publicar se elimina.

## Protección con contraseña

Para mejorar el control de acceso en tu sitio Publish, aplica una contraseña de sitio. Se solicitará una contraseña a los visitantes cuando intenten acceder a él. Si decides eliminar la contraseña del sitio más adelante, todo el sitio volverá a ser visible para el público.

> [!warning] Actualmente no se admite la protección con contraseña individual para notas publicadas.

### Añadir una contraseña de sitio

1. En el menú de cinta, a la izquierda de la ventana de la aplicación, haz clic en **Publicar cambios** ( ![[lucide-send.svg#icon]] ).
2. En el diálogo **Publicar cambios**, haz clic en **Cambiar ajustes de sitio** ( ![[lucide-cog.svg#icon]] ).
3. En **Otros ajustes de la página web**, junto a **Contraseñas**, haz clic en **Administrar**.
4. Haz clic en **Nueva contraseña**.
5. En **Contraseña**, introduce una contraseña para tu sitio.
6. (Opcional) En **Apodo**, introduce un apodo para la contraseña, por ejemplo, la persona a quien deseas dar acceso al sitio.
7. Haz clic en **Añadir esta contraseña**.

### Eliminar una contraseña de sitio

1. En el menú de cinta, a la izquierda de la ventana de la aplicación, haz clic en **Publicar cambios** ( ![[lucide-send.svg#icon]] ).
2. En el diálogo **Publicar cambios**, haz clic en **Cambiar ajustes de sitio** ( ![[lucide-cog.svg#icon]] ).
3. En **Otros ajustes de la página web**, junto a **Contraseñas**, haz clic en **Administrar**.
5. Haz clic en el icono de cruz junto a la contraseña que deseas eliminar.

## Recopilación de datos
### Datos de visitantes

De forma predeterminada, Obsidian Publish **no** recopila datos de visitantes, almacena cookies ni procesa información personal. Sin embargo, puedes implementar analíticas o registrar otros datos de usuario [[Personalizar tu sitio|personalizando tu sitio]].

Como propietario del sitio, eres responsable de cumplir con el RGPD y las regulaciones de privacidad en tu región. Esto incluye crear tu propio banner de notificación, que puede implementarse usando publish.js, y añadir una página de política de privacidad a tu sitio.

## Acceso

Obsidian tiene contrato con [Cloudflare](https://www.cloudflare.com) para proporcionar alojamiento de sitios para nuestros sitios Publish. Los servidores están alojados en San Francisco, CA.

### Gestionar el acceso a Obsidian Publish en tu red

Para regular el acceso a Obsidian Publish en tu red, necesitas gestionar los siguientes dominios:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Además, los servicios de backend emplean los siguientes subdominios: `publish-xx.obsidian.md`, donde `xx` es un número que va de `1 - 100`.

> [!tip] Si tu sistema de firewall lo admite, recomendamos incluir en la lista blanca `publish-*.obsidian.md` para adaptarse a nuestra expansión continua de subdominios.
