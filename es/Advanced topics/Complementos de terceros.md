Obsidian permite a los desarrolladores escribir complementos de terceros para ampliar la funcionalidad de Obsidian.

En este momento, la API del complemento está en estado alfa. Esto significa que cualquier parte de la API podría introducir cambios importantes en una versión futura.

### Para desarrolladores
Para obtener instrucciones sobre cómo crear nuevos complementos, consulte [nuestra muestra de complementos](https://github.com/obsidianmd/obsidian-sample-plugin).

Para obtener documentación sobre la API, consulte [nuestro repositorio de complementos API](https://github.com/obsidianmd/obsidian-api).

Después de crear su complemento, puede agregarlo a nuestro mercado de complementos de la comunidad creando una solicitud de extracción en [nuestro repositorio de lanzamientos](https://github.com/obsidianmd/obsidian-releases). Consulte en la muestra de complementos sobre cómo publicar actualizaciones para su complemento.

### Para usuarios
#### Modo seguro
De forma predeterminada, Obsidian tiene activado el modo seguro para protegerte de posibles daños. En modo seguro, no se ejecutará ningún complemento de terceros.

Tenga en cuenta que los complementos de terceros pueden acceder a archivos en su computadora, conectarse a Internet e incluso instalar programas adicionales. Para leer más sobre la seguridad de los complementos, [[Complementos de terceros#Seguridad del complemento|consulte aquí]].

Para instalar complementos de terceros, debe desactivar el Modo seguro en Configuración -> Complemento de terceros -> Modo seguro.

#### Descubra e instale complementos de la comunidad
Después de deshabilitar el Modo seguro, puede encontrar complementos de terceros creados por la comunidad en Configuración -> Complemento de terceros -> Complementos de la comunidad -> Examinar.

En esta página, puede buscar complementos por popularidad o buscar complementos específicos. Haga clic en un complemento para ver los detalles y las instrucciones del autor del complemento. En la página de detalles, puede hacer clic en "Instalar" para instalar un complemento.

Después de la instalación, puede encontrar los complementos instalados en Configuración -> Complemento de terceros. Deben estar habilitados para que surtan efecto. También puede desinstalarlos allí.

### Seguridad del complemento
¡Gracias por confiar en Obsidian con sus datos! Significa mucho para nosotros y nos tomamos la seguridad muy en serio. Eso también incluye complementos de terceros.

Debido a razones técnicas con nuestra plataforma, no podemos restringir los complementos a un permiso o nivel de acceso específico. Dado que ofrecemos Obsidian de forma gratuita, actualmente no podemos revisar manualmente cada complemento.

La buena noticia es que Obsidian tiene una comunidad increíble y apasionada, por lo que confiamos en la confianza de la comunidad para garantizar la seguridad de los complementos de terceros.

En general, debería poder confiar en la mayoría de los complementos populares de la comunidad. Requerimos que todos los complementos de terceros de la comunidad sean de código abierto en GitHub. Si está trabajando con datos confidenciales, le recomendamos que inspeccione el código del complemento antes de instalarlo, para que se satisfagan sus necesidades de seguridad. Puede encontrar un enlace al repositorio de complementos en la página de detalles del complemento.

Si encuentra fallas de seguridad con complementos de terceros, comuníquese con el autor del complemento agregando un problema en GitHub. Si cree que el complemento es malicioso, comuníquese con nosotros para que investiguemos y eliminemos el complemento.
