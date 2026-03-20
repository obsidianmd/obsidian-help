---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Esta página detalla algunos problemas comunes que puedes encontrar al usar Obsidian Publish
---
Esta página lista problemas comunes que podrías encontrar con [[Introducción a Obsidian Publish|Obsidian Publish]] y cómo abordarlos.

Asegúrate de revisar primero [[Archivos multimedia]] y [[Limitaciones de Publish|Limitaciones de Publish]].

## General

### Publicar notas

**Recibo un error de hash al intentar publicar una nota.**

¿Estás usando un [[Complementos de la comunidad|complemento de la comunidad]] que edita la hora de modificación del archivo al actualizarlo? Si es así, este complemento puede estar en conflicto con Publish. Por favor, reporta un error al desarrollador del complemento para resolver el problema.

**Recibo un error de red extraño y tengo un sitio Publish muy grande.**

Es probable que necesitemos examinar tu base de datos. Por favor, [[Ayuda y soporte#Contactar al soporte de Obsidian|contacta al soporte de Obsidian]] para obtener asistencia.

## CSS y temas

**Mi CSS en mi [[Carpeta de configuración]] no funciona en Publish. ¿Por qué?**

Publish no lee de la carpeta de configuración. En su lugar, necesitarás crear un archivo `publish.css` en el directorio de nivel superior de tu bóveda de publicación. Puedes aprender más sobre esto en [[Personalizar tu sitio]].

**Mi CSS no se ve igual en Publish que en la aplicación. ¿Por qué?**

El CSS de Obsidian Publish no es exactamente el mismo que en la aplicación. Recomendamos [desarrollar cualquier CSS y tema](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) específicamente para Publish desde cero.

En _general_, lo que funciona para la [[Vistas y modo de edición#Vista de lectura|vista de lectura]] tiene una alta probabilidad de funcionar en Publish.
