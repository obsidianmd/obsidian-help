---
permalink: sync/security
publish: true
mobile: false
description: Aprende sobre las consideraciones de seguridad y privacidad para Obsidian Sync.
---
## Cifrado

Para tu seguridad, [[Introducción a Obsidian Sync|Obsidian Sync]] cifra tu [[Bóvedas locales y remotas|bóveda remota]] y toda la comunicación con los servidores de Obsidian.

Cuando creas una nueva bóveda remota, tienes dos opciones:

- **Cifrado de extremo a extremo (predeterminado)** ofrece la seguridad más fuerte pero requiere que almacenes de manera segura tu contraseña de cifrado. Esto garantiza que nadie — ni siquiera el equipo de Obsidian — pueda acceder a tus notas.
- **Cifrado estándar** usa una llave de cifrado gestionada por Obsidian para proteger tus datos en tránsito y en nuestro servidor.

Recomendamos el cifrado de extremo a extremo para todos los usuarios ya que es la opción más privada y segura. Sin embargo, ten en cuenta que si olvidas o pierdes tu contraseña de cifrado, tus datos permanecerán cifrados e inutilizables para siempre. No podemos recuperar tu contraseña, ni ningún dato cifrado por ti.

Tu elección solo afecta a tu bóveda remota. Obsidian no cifra tu bóveda local.

### ¿Qué significa cifrado de extremo a extremo?

El cifrado de extremo a extremo significa que los datos se cifran desde el momento en que salen de tu dispositivo, y solo pueden descifrarse usando tu llave de cifrado una vez que están de vuelta en uno de tus dispositivos.

No podemos leer tus datos. Tampoco pueden hacerlo posibles interceptores, como tu proveedor de servicios de internet.

En el caso poco probable de una brecha completa del servidor, tus datos permanecen cifrados — nadie puede descifrar tus archivos sin conocer tu contraseña.

### ¿Cuáles son los riesgos de usar cifrado estándar?

El cifrado estándar es fundamentalmente menos seguro que el cifrado de extremo a extremo, pero puede ser una opción conveniente si no esperas que los datos que estás sincronizando sean completamente privados. Por ejemplo, si tu bóveda sincronizada está [[Introducción a Obsidian Publish|publicada]] en un sitio web público como este sitio de Ayuda, entonces el cifrado de extremo a extremo no es necesario.

El cifrado estándar es el mismo método de cifrado utilizado por empresas de almacenamiento en la nube y plataformas de software como servicio, como Google Docs, Dropbox e iCloud (sin Protección de Datos Avanzada). Tu llave de cifrado es generada por la aplicación y utilizada para proteger tus datos en tránsito y en el servidor. Dado que la llave de cifrado se almacena en los servidores de la empresa, puede usarse para descifrar tus datos, por ejemplo, en un caso donde la empresa esté sujeta a una orden de registro, o en un caso donde quieras acceder a tus datos a través de un navegador web.

El cifrado de extremo a extremo garantiza que Obsidian nunca pueda acceder a tus datos y siempre debe usarse para sincronizar datos que desees mantener completamente privados y seguros.

### ¿Qué cifrado utilizan?

Para la seguridad de los datos, implementamos protocolos de cifrado estándar de la industria. Específicamente, utilizamos [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), el estándar de cifrado más fuerte, ampliamente empleado en contextos como la banca en línea. El proceso de cifrado involucra los siguientes detalles técnicos:

- **Función de derivación de llaves:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) con sal
- **Algoritmo de cifrado:** AES-256 usando [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### ¿Puedo verificar que mis datos están cifrados de extremo a extremo?

Sí. Consulta nuestra guía, [cómo verificar el cifrado de extremo a extremo de Obsidian Sync](https://obsidian.md/es/blog/verify-obsidian-sync-encryption/). Esta guía proporciona instrucciones paso a paso para que verifiques sin necesidad de confiar el cifrado de extremo a extremo de tus datos cuando se envían y reciben a través de los servidores de Sync.

### ¿Ha completado Obsidian una auditoría de seguridad por terceros?

Sí. Obsidian ha sido auditado de forma independiente. Visita nuestra [página de Seguridad](https://obsidian.md/es/security) para ver los informes de auditoría. Las auditorías regulares por empresas de seguridad externas aseguran que el código y los procedimientos de Obsidian cumplan con los más altos estándares de seguridad.

### ¿Qué sucede si olvido mi contraseña de cifrado?

Si alguna vez pierdes u olvidas la contraseña de cifrado, no podrás conectar bóvedas adicionales a tu bóveda remota. Dado que la contraseña de cifrado no se guarda en ningún lugar, se pierde para siempre.

Sin embargo, tus datos generalmente están almacenados de forma segura localmente en cada uno de tus dispositivos.

Para continuar usando Obsidian Sync, te sugerimos hacer una reconfiguración completa para poder añadir nuevos dispositivos a tu sistema de Sync:

1. Haz una copia de seguridad completa de la bóveda en tu dispositivo principal, por si algo sale mal. Esto puede ser tan simple como hacer una copia de la carpeta de la bóveda, o crear un archivo zip de la bóveda.
2. Desconecta la bóveda remota en cada uno de tus dispositivos. Esto se puede hacer yendo a **[[Configuración]] → Sync → Elegir bóveda remota → Desconectar**.
3. [[Configurar Obsidian Sync#Crear una nueva bóveda remota|Crea una nueva bóveda remota]] en tu dispositivo principal desde la misma página de Ajustes. Opcionalmente, puedes eliminar la bóveda remota anterior ya que de todas formas no tienes la contraseña. (Es posible que debas eliminar la bóveda remota anterior si estás en el [[Preguntas frecuentes#¿Cuántas bóvedas remotas puedo tener?|límite de bóvedas]])
4. Espera a que tu dispositivo principal se sincronice. Observa el indicador de sincronización en la parte inferior derecha de la pantalla hasta que muestre una marca de verificación verde.
5. Conecta cada uno de tus dispositivos a la misma bóveda remota recién creada. Al conectar, se te mostrará una advertencia sobre la fusión de bóvedas, esto es esperado y puedes proceder. Espera a que cada dispositivo se sincronice completamente antes de pasar al siguiente. Esto reduce las posibilidades de problemas.
6. Ahora todos tus dispositivos deberían estar conectados a la nueva bóveda remota.

## Alojamiento

### ¿Dónde alojan los servidores de Obsidian Sync?

Nuestros centros de datos, respaldados por [DigitalOcean](https://www.digitalocean.com), proporcionan opciones de alojamiento de bóvedas remotas geo-regionales en las siguientes ubicaciones:

> [!abstract] Regiones de Sync
> **Automático**: Tu centro de datos se elige según la ubicación de tu IP, en el momento en que lo configuras por primera vez.
> 
> **Asia**: Singapur
> **Europa**: Fráncfort, Alemania
> **Norteamérica**: San Francisco, EE.UU.
> **Oceanía**: Sídney, Australia
^sync-geo-regions

### ¿Dónde puedo encontrar mi servidor de Sync actual y dónde está alojado?

Para localizar tu servidor de Obsidian Sync, sigue estos pasos:
1. Ve a **[[Configuración]]** → **Sync** → **Copiar información de depuración**.
2. Pega la información copiada en una nota o archivo.
3. Busca una línea similar a esta: `Host server: wss://sync-xx.obsidian.md`

Esta línea indica el servidor donde está alojada tu bóveda remota. Para más detalles sobre las ubicaciones del servidor y su tiempo de actividad, visita nuestra [página de estado](https://status.obsidian.md/).

## Red y acceso

### Gestionar el acceso a Obsidian Sync en tu red

Para regular el acceso a Obsidian Sync en tu red, necesitas gestionar los siguientes dominios:

`sync-xx.obsidian.md`

El `xx` en este caso representa un número que va del `1 - 100`.

> [!tip] Si tu sistema de firewall lo admite, recomendamos incluir en la lista blanca `sync-*.obsidian.md` para tener en cuenta el crecimiento continuo en el número de subdominios.

## Limitaciones

Obsidian Sync está diseñado para mantener tus notas privadas y seguras. Para ofrecer una sincronización rápida y confiable y un almacenamiento eficiente entre dispositivos, hacemos algunas concesiones deliberadas en cómo se aplica el cifrado.

### Cifrado determinístico de hash de archivos

Ciframos los hashes de archivos de forma determinística: el mismo contenido de archivo, usando la misma llave de cifrado y sal, siempre produce el mismo hash cifrado en el servidor. Esto ayuda a Sync a detectar duplicados y evitar volver a subir o almacenar datos idénticos, lo que ahorra ancho de banda y almacenamiento remoto, especialmente en el historial de versiones o cuando se repiten archivos grandes.

Sin embargo, si un atacante compromete un servidor de Sync, y tiene una forma separada de forzar a un usuario a subir archivos de su elección, entonces el atacante podría forzar al usuario a subir archivos específicos y determinar si el archivo coincide con un archivo que el usuario haya subido previamente.

### Sin vinculación criptográfica entre ruta y contenido

Algunos metadatos no están cifrados de extremo a extremo: qué dispositivo subió o eliminó un archivo, cuándo se subió y el *mapeo* entre rutas de archivos cifradas y contenido cifrado. Estos datos son legibles por el servidor para que pueda enrutar cambios, determinar el historial de versiones de un archivo y mantener los dispositivos sincronizados.

Si un servidor de Sync fuera comprometido, un atacante podría manipular ese mapeo, causando que el contenido de un archivo cifrado se entregue bajo una ruta de archivo diferente. Esto no revela tus datos en texto sin formato, permanecen cifrados.
