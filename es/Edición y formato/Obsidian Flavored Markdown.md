---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: Aprende sobre el Markdown con sabor Obsidian, incluyendo extensiones compatibles y cómo Markdown interactúa con elementos HTML.
---
Obsidian se esfuerza por ofrecer la máxima capacidad sin romper ningún formato existente. Como resultado, utilizamos una combinación de variantes de [[Sintaxis de formato básico|Markdown]].

Obsidian es compatible con [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) y [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown dentro de HTML
> Obsidian no renderiza la sintaxis Markdown dentro de elementos HTML. Esta es una decisión de diseño intencional para la optimización del rendimiento y para mantener baja la complejidad del analizador al gestionar documentos grandes.
>
> Por ejemplo, el formato Markdown como `**negrita**` o `` `código` `` no se procesará dentro de `<div>`, `<span>`, `<table>`, ni ninguna otra etiqueta HTML.
>
> ```md
> <div>
> Esto **no se mostrará** en negrita.
> </div>
> ```

### Extensiones de Markdown compatibles

| Sintaxis        | Descripción                                                                      |
| --------------- | -------------------------------------------------------------------------------- |
| `[[Enlace]]`    | [[Enlaces internos]]                                                             |
| `![[Enlace]]`   | [[Incrustar archivos]]                                                           |
| `![[Enlace#^id]]` | [[Enlaces internos#Enlazar a un bloque en una nota\|Referencias a bloques]]    |
| `^id`           | [[Enlaces internos#Enlazar a un bloque en una nota\|Definir un bloque]]          |
| `[^id]`         | [[Sintaxis de formato básico#Notas al pie\|Notas al pie]]                        |
| `%%Texto%%`     | [[Sintaxis de formato básico#Comentarios\|Comentarios]]                          |
| `~~Texto~~`     | [[Sintaxis de formato básico#Negrita, cursiva, resaltados\|Tachado]]             |
| `==Texto==`     | [[Sintaxis de formato básico#Negrita, cursiva, resaltados\|Resaltados]]          |
| `` ``` ``       | [[Sintaxis de formato básico#Bloques de código\|Bloques de código]]              |
| `- [ ]`         | [[Sintaxis de formato básico#Listas de tareas\|Tarea incompleta]]                |
| `- [x]`         | [[Sintaxis de formato básico#Listas de tareas\|Tarea completada]]                |
| `> [!note]`     | [[Destacados]]                                                                   |
| (ver enlace)    | [[Sintaxis de formato avanzado#Tablas\|Tablas]]                                  |
