---
permalink: publish/permalinks
---
Puedes renombrar la URL de tus notas, usando _enlaces permanentes_.

Por ejemplo, puedes convertir esto:

```
https://publish.obsidian.md/username/Company/About+us
```

En esto:

```
https://publish.obsidian.md/username/about
```

Para crear un enlace permanente para una nota, añade la propiedad `permalink` a tus [[Propiedades]].

```yaml
---
permalink: about
---
```

Si alguien visita una nota usando la URL original, será redirigido automáticamente al enlace permanente.

## Redirigir notas antiguas

Renombrar y eliminar notas es una parte natural de mantener una bóveda activa. Aunque Obsidian actualiza automáticamente los enlaces cuando mueves una nota dentro de tu bóveda local, otros sitios web pueden seguir enlazando a tus notas antiguas en tu sitio de [[Introducción a Obsidian Publish|Obsidian Publish]]. Puedes redirigir a los lectores de una nota a otra.

Imagina que quieres mover una nota de una carpeta a otra:

- **Guides**
  - ~~Making friends.md~~ (eliminada)
- **Tutorials**
  - *How to make friends.md* (añadida)

Después de mover la nota, Obsidian actualiza automáticamente todos los enlaces dentro de la bóveda. Sin embargo, si publicas el cambio en tu sitio Publish, cualquier enlace a `/Guides/Making+friends` resultará en un error 404.

Para redirigir a los lectores de `/Guides/Making+friends` a `/Tutorials/How+to+make+friends`, necesitas añadir un [[Alias|alias]] en `How to make friends.md`, la nota a la que deseas redirigir.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Importante
> Asegúrate de incluir la ruta completa a la nota antigua en el alias. Aunque usar solo el nombre de la nota como alias funciona en tu bóveda local, Publish necesita la ruta completa de la nota para poder redirigir hacia ella.

Puedes redirigir múltiples notas añadiendo un alias para cada una.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
