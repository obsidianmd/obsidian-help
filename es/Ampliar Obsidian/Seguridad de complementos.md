---
permalink: plugin-security
---
El equipo de Obsidian se toma la seguridad en serio. Esta página explica los riesgos involucrados al instalar complementos de la comunidad, y lo que el equipo de Obsidian hace para abordarlos.

## Modo restringido

De forma predeterminada, Obsidian se ejecuta en modo restringido para evitar la ejecución de código de terceros. Solo desactive el modo restringido si confía en los autores de los complementos que instala.

Para desactivar el modo restringido:

1. Abra **[[Configuración]]**.
2. En el menú lateral, seleccione **Complementos creados por la comunidad**.
3. Seleccione **Activar complementos creados por la comunidad**.

Para activar el modo restringido:

1. Abra **[[Configuración]]**.
2. En el menú lateral, seleccione **Complementos creados por la comunidad**.
3. Junto a **Modo restringido**, seleccione **Activar**.

Los complementos instalados permanecen en su bóveda incluso si activa el modo restringido, pero son ignorados por Obsidian.

## Capacidades de los complementos

Debido a limitaciones técnicas, Obsidian no puede restringir de forma fiable los complementos a permisos o niveles de acceso específicos. Esto significa que los complementos heredarán los niveles de acceso de Obsidian. Como resultado, considere los siguientes ejemplos de lo que los complementos de la comunidad pueden hacer:

- Los complementos de la comunidad pueden acceder a archivos en su computadora.
- Los complementos de la comunidad pueden conectarse a internet.
- Los complementos de la comunidad pueden instalar programas adicionales.

> [!tip] 
> Si trabaja con datos sensibles y desea instalar un complemento de la comunidad, le recomendamos que realice una auditoría de seguridad independiente del complemento antes de usarlo.

## Proceso de revisión de complementos

Los complementos de la comunidad pasan por una revisión inicial cuando se envían a la tienda de complementos. Todos los complementos deben cumplir con las [Políticas para desarrolladores de Obsidian](https://docs.obsidian.md/Developer+policies).

El equipo de Obsidian es pequeño y no puede revisar manualmente cada nueva versión de los complementos de la comunidad. En su lugar, contamos con la ayuda de la comunidad para identificar y reportar problemas con los complementos.

- Si descubre alguna vulnerabilidad de seguridad menor en un complemento de la comunidad, consulte el archivo `security.md` o `readme.md` del autor del complemento para saber cómo reportarla. Para fallos de categoría Crítica, por favor reporte el problema también al [[Ayuda y soporte#Contactar con el soporte de Obsidian|soporte de Obsidian]].
- Si sospecha que un complemento de la comunidad es malicioso, repórtelo al [[Ayuda y soporte#Contactar con el soporte de Obsidian|soporte de Obsidian]], o enviando un mensaje directo a nuestros moderadores.
