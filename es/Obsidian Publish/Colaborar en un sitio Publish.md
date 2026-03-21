---
permalink: publish/collaborate
publish: true
mobile: true
description: Aprende a colaborar con otros usuarios de Obsidian en tu sitio de Obsidian Publish.
---
Aprende a colaborar en tu sitio de [[Introducción a Obsidian Publish|Obsidian Publish]] con otros usuarios de Obsidian. Al agregar a tus amigos y colegas como colaboradores, ellos pueden publicar cambios en tu sitio.

Solo el propietario del sitio necesita una suscripción activa de Obsidian Publish. Los colaboradores solo necesitan una [cuenta de Obsidian](https://obsidian.md/es/account).

> [!warning] Antes de publicar cambios en un sitio compartido, asegúrate de [[#Sincronizar cambios entre colaboradores|sincronizar cambios entre colaboradores]]. De lo contrario, corres el riesgo de sobrescribir cambios de otros colaboradores.

## Agregar un colaborador a un sitio

1. En la [[Menú de cinta]], selecciona **Publicar cambios** (![[lucide-send.svg#icon]]) o abre la [[Paleta de comandos]] y escribe **Publish: Publicar cambios...**
2. En el diálogo **Publicar cambios**, haz clic en **Cambiar ajustes de sitio** ![[lucide-cog.svg#icon]].
3. Junto a **Colaboración de página web**, selecciona **Administrar**.
4. En **Invitar usuario**, ingresa el correo electrónico del colaborador.
5. Selecciona **Añadir**.

## Eliminar un colaborador de un sitio

1. En la [[Menú de cinta]], selecciona **Publicar cambios** (![[lucide-send.svg#icon]]) o abre la [[Paleta de comandos]] y escribe **Publish: Publicar cambios...**
2. En el diálogo **Publicar cambios**, haz clic en **Cambiar ajustes de sitio** ( ![[lucide-cog.svg#icon]] ).
3. Junto a **Colaboración de página web**, selecciona **Administrar**.
4. Junto al colaborador que deseas eliminar, selecciona **Eliminar usuario** ( ![[lucide-x.svg#icon]]).

## Sincronizar cambios entre colaboradores

Obsidian Publish no sincroniza automáticamente los cambios publicados entre bóvedas locales. En su lugar, los colaboradores necesitan sincronizar manualmente los cambios de otros colaboradores.

Para actualizar una nota local con los cambios del sitio en vivo:

1. En la [[Menú de cinta]], selecciona **Publicar cambios** (![[lucide-send.svg#icon]]) o abre la [[Paleta de comandos]] y escribe **Publish: Publicar cambios...**
2. Haz clic derecho o mantén presionado el cambio que deseas sincronizar, y luego selecciona **Usar versión en vivo**. **Esto sobrescribirá la nota en tu bóveda local.**

> [!tip] Recomendamos que uses otra herramienta para sincronizar cambios entre bóvedas, como [[Introducción a Obsidian Sync|Obsidian Sync]] o [git](https://git-scm.com/).

## Permisos

La siguiente tabla muestra los permisos de sitio disponibles para propietarios y colaboradores:

| Acción                                       | Colaborador | Propietario |
|----------------------------------------------|:-----------:|:-----------:|
| Publicar páginas nuevas                      | ✓           | ✓           |
| Publicar cambios en páginas publicadas       | ✓           | ✓           |
| Despublicar páginas                          | ✓           | ✓           |
| Configurar opciones del sitio                |             | ✓           |
| Administrar permisos                         |             | ✓           |
