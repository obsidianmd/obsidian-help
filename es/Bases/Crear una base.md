---
permalink: bases/create-base
---
[[Introducción a Bases|Bases]] te permite crear vistas tipo base de datos de tus notas. Aquí te mostramos cómo puedes crear una base e incrustarla en una nota. Cada base puede tener una o más [[Vistas|vistas]] para mostrar información de diferentes maneras.

## Crear una nueva base

**Paleta de comandos:**

1. Abre la **Paleta de comandos**.
2. Selecciona
	- **Bases: Crear nueva base** para crear una base en la misma carpeta que el archivo activo.
	- **Bases: Insertar nueva base** para crear una base e incrustarla en el archivo actual.

**Explorador de archivos:**

1. En el Explorador de archivos, haz clic derecho en la carpeta donde deseas crear la base.
2. Selecciona **Nueva base**.

**Menú de cinta:**

- En el menú vertical del menú de cinta, selecciona **Crear nueva base** para crear una base en la misma carpeta que el archivo activo.

## Incrustar una base

### Incrustar un archivo de base

Puedes incrustar archivos de base en [[Incrustar archivos|cualquier otro archivo]] usando la sintaxis `![[Archivo.base]]`. Para especificar la vista predeterminada usa `![[Archivo.base#Vista]]`.

### Incrustar una base como bloque de código

Las bases también se pueden incrustar directamente en una nota usando un bloque de código `base` y la [[Sintaxis de Bases|sintaxis de bases]].

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~
