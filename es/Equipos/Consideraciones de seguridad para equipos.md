---
permalink: teams/security
cssclasses:
  - soft-embed
---
Nuestra página de [Seguridad](https://obsidian.md/es/security) recopila información sobre cómo Obsidian aborda la protección de tus datos. También es el hogar de las auditorías de seguridad completadas por terceros.

## Consideraciones

Obsidian está diseñado para funcionar como una aplicación sin conexión e independiente. Obsidian también admite complementos y temas personalizados. Además, proporcionamos soporte tanto oficial como no oficial para varios servicios de sincronización de archivos.

Si no tienes intención de usar complementos de la comunidad o temas, ni [[Introducción a Obsidian Sync|Obsidian Sync]] ni [[Introducción a Obsidian Publish|Obsidian Publish]], tus procedimientos estándar para proteger aplicaciones serán aplicables. Sin embargo, si planeas usar alguna de estas funcionalidades, te recomendamos evaluar exhaustivamente su idoneidad para tu lugar de trabajo.

## Complementos de la comunidad y temas

Por favor, revisa la página de [[Seguridad de complementos]] además de esta sección.

El equipo de Obsidian revisa todos los complementos de la comunidad y temas enviados al directorio oficial, a través de nuestro [repositorio de lanzamientos](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). No revisamos elementos de la comunidad que no hayan sido enviados al directorio oficial.

No tenemos una tienda comunitaria para [[Fragmentos CSS]]. Estos archivos se obtienen típicamente desde nuestra [Comunidad de Obsidian](https://obsidian.md/es/community) o desde repositorios públicos de GitHub.

Requerimos el empaquetado de recursos en fragmentos CSS y temas. Sin embargo, hemos hecho una excepción para [Google Fonts](https://fonts.google.com/) para mantener el rendimiento en dispositivos móviles, donde el impacto del empaquetado de fuentes es más notorio.

## Red y acceso

Mientras prioriza el enfoque local-primero de nuestra aplicación, Obsidian realiza llamadas de red según los servicios y funcionalidades que uses. Estas conexiones de red pueden deshabilitarse mediante un firewall de dominio o bloqueo de aplicación.

Obsidian realiza estas conexiones de red en el puerto HTTPS 443.

La siguiente es una lista de conexiones de red que Obsidian realiza.

### Conexiones originadas por Obsidian

- **Actualizaciones de acceso anticipado**: Usa `releases.obsidian.md`.
- **Gestión de cuenta y licencia**: Al acceder a tu cuenta de Obsidian en Ajustes y aplicar una licencia comercial, llamamos a `api.obsidian.md`.
- **Obsidian Sync**: Usado para sincronizar tus notas entre dispositivos.
	- `sync-xx.obsidian.md`, donde `xx` es un número entre 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` y `publish-xx.obsidian.md`, donde `xx` es un número.
    2. Frontend: `publish.obsidian.md`.

### Conexiones originadas por GitHub

Obsidian realiza solicitudes de red tanto a `github.com` como a `raw.githubusercontent.com`.

- **Lanzamientos públicos**: Si las actualizaciones automáticas están habilitadas, Obsidian comprueba en GitHub los lanzamientos públicos.
- **Temas y complementos de terceros**:
    - Se realiza una comprobación cada 12 horas desde el momento de inicio de la aplicación para obtener un archivo alojado en GitHub usado para "deprecaciones de complementos". Este archivo ayuda a deshabilitar remotamente versiones específicas de complementos que se sabe que funcionan mal, causan pérdida de datos, o son potencialmente vulnerables o maliciosos.
    - Los complementos habilitados pueden generar tráfico de red fuera del control de Obsidian y GitHub.

### Otras conexiones

- **Contenido en línea incrustado**: Al abrir notas que incrustan contenido en línea, como una imagen (`![gato](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **Solicitudes DNS**: Si un nombre de host necesita ser resuelto antes de establecer una conexión, incluyendo DNS sobre HTTPS. Consulta la [documentación de Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) para más información.

## Preguntas frecuentes

### Seguridad de la cuenta

**¿Obsidian soporta inicio de sesión único (SSO)?**
Obsidian no soporta SSO. En la mayoría de los casos de uso, Obsidian no requiere una cuenta ni inicio de sesión en tu lugar de trabajo, a menos que estés usando [[Introducción a Obsidian Publish|Obsidian Publish]] o [[Introducción a Obsidian Sync|Obsidian Sync]].

**¿Obsidian soporta autenticación multifactor (MFA)?**
Obsidian soporta [[Autenticación de 2 factores|autenticación de 2 factores]] (2FA) para cuentas de Obsidian, pero no soporta 2FA para abrir y usar la aplicación base. Los usuarios de [[Introducción a Obsidian Sync|Obsidian Sync]] y [[Introducción a Obsidian Publish|Obsidian Publish]] que tengan 2FA habilitado deberán confirmar su clave 2FA cuando inicien sesión por primera vez en la aplicación.

### Evaluaciones y certificaciones

**¿Aceptarán evaluaciones de seguridad de nuestra empresa?**
Requerimos un monto mínimo de orden de compra cotizado antes de considerar completar una evaluación de seguridad. Estas evaluaciones a menudo requieren mucho tiempo y pueden no ser aplicables a aplicaciones sin conexión como Obsidian, ya que generalmente están orientadas a servicios basados en la nube.

Sin embargo, puedes eximir este monto de orden de compra cotizado aceptando pagar una tarifa de anticipo. Por favor, contacta al [[Ayuda y soporte#Contactar con el soporte de Obsidian|soporte de Obsidian]] para consultar sobre esta opción.

**¿Tienen alguna certificación reconocida relacionada con la Seguridad de la Información o estándares de calidad, como ISO27001, NIST, COBIT, u otras certificaciones ISO o CSA?**
No en este momento. Es algo que podríamos explorar en el futuro, pero por ahora, nuestro enfoque está en nuestras [auditorías de seguridad](https://obsidian.md/es/security).
