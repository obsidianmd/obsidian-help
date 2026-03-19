---
permalink: 2fa
---
Si tienes una [cuenta de Obsidian](https://obsidian.md/account), puedes activar la autenticación de dos factores (2FA) para proteger tu cuenta con un segundo paso de verificación.

## Activar 2FA

- Inicia sesión en [tu cuenta de Obsidian](https://obsidian.md/account/profile) desde tu navegador web.
- En la sección **Profile**, ve a **2-factor authentication** y selecciona **Enable**.
- Aparecerá una ventana emergente que te pedirá conectar una aplicación de autenticación mediante un **código QR** o una **clave de configuración**.

> [!hint]- Aplicaciones de autenticación populares
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [Llavero de iCloud](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Una vez conectada, tu aplicación de autenticación te proporcionará un código de seis dígitos. Introduce ese código debajo de la sección del **código QR/clave de configuración**, en el paso 3.
- Finalmente, introduce tu contraseña actual.
- Selecciona **Complete set up**.
- La ventana emergente será reemplazada por una ventana de confirmación y tus códigos de recuperación. Por favor, descarga tus códigos de recuperación, ya que los necesitarás para desbloquear tu cuenta.

Tu 2FA ya está configurado.

> [!warning]- Copias de seguridad del código QR/clave de configuración
> Si decides guardar una copia de seguridad de tu **código QR** o **clave de configuración** además de tus códigos de recuperación, te recomendamos encarecidamente mantenerla en un sistema cifrado con contraseña.

## Generar códigos de recuperación

Si activaste 2FA antes de que los códigos de recuperación estuvieran disponibles, o si deseas actualizar tus códigos de recuperación, sigue estos pasos:

- Inicia sesión en [tu cuenta de Obsidian](https://obsidian.md/account/profile) desde tu navegador web.
- Junto a 2-factor authentication, selecciona **Refresh recovery codes**.
- En la ventana emergente, introduce tu **contraseña** y el **código de 6 dígitos del autenticador**.
- Una ventana de confirmación mostrará tus códigos de recuperación. Tienes dos opciones:
    - **Copy recovery codes**: Copia los códigos para pegarlos en otro lugar.
    - **Download recovery codes**: Descarga un archivo `obsidian-recovery-codes.txt` que contiene tus códigos.
- Selecciona **Got it** para cerrar la ventana emergente.

Puedes usar un código de recuperación **una sola vez** en lugar de tu **código de 6 dígitos del autenticador**. También puedes actualizar tus códigos de recuperación en cualquier momento.

## Desactivar 2FA

- Inicia sesión en [tu cuenta de Obsidian](https://obsidian.md/account/profile) desde tu navegador web.
- En la sección **Profile**, ve a **2-factor authentication** y selecciona **Disable**.
- Introduce tu contraseña de Obsidian.
- Introduce el código de seis dígitos actual de tu aplicación de autenticación.
- Selecciona **Disable 2FA**.
- Serás redirigido a la pantalla de administración de la cuenta.

El ajuste de **2-factor authentication** mostrará nuevamente un botón **Enable**, indicando que el 2FA ha sido desactivado.

## Preguntas frecuentes

**He activado 2FA. ¿Se cerrará la sesión en mis dispositivos actuales de Obsidian?**
No. Activar 2FA no cierra tu sesión en todos los dispositivos para tu comodidad. Si lo necesitas, puedes hacerlo manualmente desde la página de tu cuenta y posteriormente iniciar sesión de nuevo en cada uno de tus dispositivos.

**Activé y luego desactivé 2FA. Me gustaría configurarlo de nuevo. ¿Puedo usar el código QR o la clave de configuración original?**
No. Se te proporcionará un nuevo **código QR** y una nueva **clave de configuración** cada vez que inicies una nueva configuración de 2FA.

**He activado 2FA. Aún no se me ha pedido después de varios intentos de cierre/inicio de sesión. ¿Está funcionando?**
La caché de tu navegador puede estar permitiendo que parezcas estar haciendo cambios en la página (como iniciar o cerrar sesión) cuando en realidad estás accediendo a los datos almacenados. Intenta usar una ventana de navegación privada para iniciar sesión y confirmar que el 2FA está funcionando.

Si continúas experimentando este comportamiento, por favor [envía un informe de error](https://forum.obsidian.md/c/bug-reports/7).

**Perdí mis códigos de recuperación, mi autenticador y todo lo necesario para iniciar sesión en mi cuenta. ¿Qué hago?**

Si has perdido tus códigos de recuperación y tu autenticador, por favor envía un correo electrónico a [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) para obtener asistencia y recuperar el acceso a tu cuenta.
