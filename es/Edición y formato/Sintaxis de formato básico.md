---
permalink: syntax
publish: true
mobile: true
description: 'Aprende cómo aplicar formato básico a tus notas en Obsidian, usando Markdown.'
aliases:
  - How to/Formatear tus notas
---
Aprende cómo aplicar formato básico a tus notas, usando [Markdown](https://daringfireball.net/projects/markdown/). Para una sintaxis de formato más avanzada, consulta [[Sintaxis de formato avanzado]].

## Párrafos

Para crear párrafos en Markdown, usa una **línea en blanco** para separar bloques de texto. Cada bloque de texto separado por una línea en blanco se trata como un párrafo distinto.

```md
Esto es un párrafo.

Esto es otro párrafo.
```

Esto es un párrafo.

Esto es otro párrafo.

Una línea en blanco entre líneas de texto crea párrafos separados. Este es el comportamiento predeterminado en Markdown.

> [!tip]- Múltiples espacios en blanco
> Múltiples espacios en blanco adyacentes dentro y entre párrafos se colapsan en un solo espacio cuando se muestran en la [[Vistas y modo de edición#Vista de lectura|Vista de lectura]] o en sitios de [[Introducción a Obsidian Publish|Obsidian Publish]].
> 
> ```md
> Múltiples          espacios          adyacentes
> 
> 
> 
> y múltiples saltos de línea entre párrafos.
> ```
> 
> > Múltiples          espacios          adyacentes
> > 
> > 
> > 
> > y múltiples saltos de línea entre párrafos.
> 
> Si quieres evitar que los espacios se colapsen o añadir múltiples espacios en blanco, puedes usar las etiquetas HTML `&nbsp;` (espacio de no separación) o `<br>` (salto de línea).

### Saltos de línea

De forma predeterminada en Obsidian, presionar `Enter` una vez creará una nueva línea en tu nota, pero esto se trata como una *continuación* del mismo párrafo en la salida renderizada, siguiendo el comportamiento típico de Markdown. Para insertar un salto de línea *dentro* de un párrafo sin comenzar un nuevo párrafo, puedes:

- Añadir **dos espacios** al final de una línea antes de presionar `Enter`, o
- Usar el atajo `Shift+Enter` para insertar directamente un salto de línea.

> [!question]- ¿Por qué múltiples pulsaciones de `Enter` no crean más saltos de línea en la vista de lectura?
> En Markdown, un solo `Enter` se ignora, y múltiples pulsaciones consecutivas de `Enter` resultan en un solo nuevo párrafo. Este comportamiento se alinea con la regla de ajuste suave de Markdown, donde las líneas en blanco adicionales no generan saltos de línea o párrafos adicionales—se colapsan en un solo salto de párrafo. Así es como Markdown maneja el texto de forma predeterminada, asegurando que los párrafos fluyan naturalmente sin saltos inesperados.

Obsidian incluye una configuración de **[[Configuración#Saltos de línea estrictos|Saltos de línea estrictos]]**, que hace que Obsidian siga la especificación estándar de Markdown para los saltos de línea.

Para habilitar esta función:

1. Abre los **[[Configuración|Ajustes]]**.
2. Ve a la pestaña **Editor**.
3. Habilita **Saltos de línea estrictos**.

Cuando los **Saltos de línea estrictos** están habilitados en Obsidian, los saltos de línea tienen tres comportamientos distintos dependiendo de cómo se separen las líneas:

**Retorno simple sin espacios**: Un solo `Enter` sin espacios al final combinará las dos líneas separadas en una sola línea al renderizar.

```md
línea uno
línea dos
```

Se renderiza como:

línea uno línea dos

**Retorno simple con dos o más espacios al final**: Si añades dos o más espacios al final de la primera línea antes de presionar `Enter`, las dos líneas permanecen como parte del mismo párrafo, pero se separan por un salto de línea (elemento HTML `<br>`). Usaremos dos guiones bajos para representar los espacios en este ejemplo.

```md
línea tres__  
línea cuatro
```

Se renderiza como:

línea tres<br>
línea cuatro

**Doble retorno (con o sin espacios al final)**: Presionar `Enter` dos veces (o más) separa las líneas en dos párrafos distintos (elementos HTML `<p>`), independientemente de si añades espacios al final de la primera línea.

```md
línea cinco

línea seis
```

Se renderiza como:

<p>línea cinco</p>
<p>línea seis</p>

## Encabezados

Para crear un encabezado, añade hasta seis símbolos `#` antes del texto del encabezado. El número de símbolos `#` establece el nivel del encabezado (como se muestra en el [[Esquema]]).

```md
# Esto es un encabezado 1
## Esto es un encabezado 2
### Esto es un encabezado 3
#### Esto es un encabezado 4
##### Esto es un encabezado 5
###### Esto es un encabezado 6
```

%% Estos encabezados usan HTML para evitar saturar el Esquema/Tabla de contenidos %%
<h1>Esto es un encabezado 1</h1>
<h2>Esto es un encabezado 2</h2>
<h3>Esto es un encabezado 3</h3>
<h4>Esto es un encabezado 4</h4>
<h5>Esto es un encabezado 5</h5>
<h6>Esto es un encabezado 6</h6>

## Negrita, cursiva, resaltado

El formato de texto también se puede aplicar usando los [[Atajos de edición]].

| Estilo | Sintaxis | Ejemplo | Resultado |
|-|-|-|-|
| Negrita | `** **` o `__ __` | `**Texto en negrita**` | **Texto en negrita** |
| Cursiva | `* *` o `_ _`  | `*Texto en cursiva*` | *Texto en cursiva* |
| Tachado | `~~ ~~` |  `~~Texto tachado~~` | ~~Texto tachado~~ |
| Resaltado | `== ==` |  `==Texto resaltado==` | ==Texto resaltado== |
| Negrita y cursiva anidada | `** **` y `_ _`  | `**Texto en negrita y _cursiva anidada_**` | **Texto en negrita y _cursiva anidada_** |
| Negrita y cursiva | `*** ***` o `___ ___` |  `***Texto en negrita y cursiva***` | ***Texto en negrita y cursiva*** |

Se puede forzar que el formato se muestre como texto sin formato añadiendo una barra invertida `\` delante.

\*\*Esta línea no estará en negrita\*\*

```markdown
\*\*Esta línea no estará en negrita\*\*
```

\**Esta línea estará en cursiva y mostrará los asteriscos*\*

```markdown
\**Esta línea estará en cursiva y mostrará los asteriscos*\*
```

## Enlaces internos

Obsidian admite dos formatos para [[Enlaces internos|enlaces internos]] entre notas:

- Enlace wiki: `[[Tres leyes del movimiento]]`
- Markdown: `[Tres leyes del movimiento](Tres%20leyes%20del%20movimiento.md)`

## Enlaces externos

Si quieres enlazar a una URL externa, puedes crear un enlace en línea rodeando el texto del enlace con corchetes (`[ ]`), y luego la URL entre paréntesis (`( )`).

```md
[Ayuda de Obsidian](https://help.obsidian.md)
```

[Ayuda de Obsidian](https://help.obsidian.md)

También puedes crear enlaces externos a archivos en otras bóvedas, enlazando a un [[Obsidian URI|URI de Obsidian]].

```md
[Nota](obsidian://open?vault=MainVault&file=Note.md)
```

### Escapar espacios en blanco en enlaces

Si tu URL contiene espacios en blanco, debes escaparlos reemplazándolos con `%20`.

```md
[Mi Nota](obsidian://open?vault=MainVault&file=My%20Note.md)
```

También puedes escapar la URL envolviéndola con corchetes angulares (`< >`).

```md
[Mi Nota](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Imágenes externas

Puedes añadir imágenes con URLs externas, añadiendo un símbolo `!` antes de un [[#Enlaces externos|enlace externo]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Puedes cambiar las dimensiones de la imagen, añadiendo `|640x480` al destino del enlace, donde 640 es el ancho y 480 es la altura.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Si solo especificas el ancho, la imagen se escala de acuerdo con su proporción original. Por ejemplo:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Consejo
> Si quieres añadir una imagen desde dentro de tu bóveda, también puedes [[Incrustar archivos#Incrustar una imagen en una nota|incrustar una imagen en una nota]].

## Citas

Puedes citar texto añadiendo un símbolo `>` antes del texto.

```md
> Los seres humanos enfrentan problemas cada vez más complejos y urgentes, y su efectividad para lidiar con estos problemas es un asunto crítico para la estabilidad y el progreso continuo de la sociedad.

\- Doug Engelbart, 1961
```

> Los seres humanos enfrentan problemas cada vez más complejos y urgentes, y su efectividad para lidiar con estos problemas es un asunto crítico para la estabilidad y el progreso continuo de la sociedad.

\- Doug Engelbart, 1961

> [!tip]- Consejo
> Puedes convertir tu cita en un [[Destacados|recuadro]] añadiendo `[!info]` como la primera línea de una cita.

## Listas

Puedes crear una lista desordenada añadiendo un `-`, `*`, o `+` antes del texto.

```md
- Primer elemento de la lista
- Segundo elemento de la lista
- Tercer elemento de la lista
```

- Primer elemento de la lista
- Segundo elemento de la lista
- Tercer elemento de la lista

Para crear una lista ordenada, comienza cada línea con un número seguido de un símbolo `.` o `)`.

```md
1. Primer elemento de la lista
2. Segundo elemento de la lista
3. Tercer elemento de la lista
```

1. Primer elemento de la lista
2. Segundo elemento de la lista
3. Tercer elemento de la lista

```md
1) Primer elemento de la lista
2) Segundo elemento de la lista
3) Tercer elemento de la lista
```

1) Primer elemento de la lista
2) Segundo elemento de la lista
3) Tercer elemento de la lista

Puedes usar `Shift+Enter` para insertar un [[#Saltos de línea|salto de línea]] dentro de una lista ordenada sin alterar la numeración.

```md
1. Primer elemento de la lista
   
2. Segundo elemento de la lista
3. Tercer elemento de la lista
   
4. Cuarto elemento de la lista
5. Quinto elemento de la lista
6. Sexto elemento de la lista
```

### Listas de tareas

Para crear una lista de tareas, comienza cada elemento de la lista con un guion y espacio seguido de `[ ]`.

```md
- [x] Esta es una tarea completada.
- [ ] Esta es una tarea incompleta.
```

- [x] Esta es una tarea completada.
- [ ] Esta es una tarea incompleta.

Puedes marcar o desmarcar una tarea en la vista de lectura seleccionando la casilla de verificación.

> [!tip]- Consejo
> Puedes usar cualquier carácter dentro de los corchetes para marcarlo como completado.
>
> ```md
> - [x] Leche
> - [?] Huevos
> - [-] Huevos
> ```
>
> - [x] Leche
> - [?] Huevos
> - [-] Huevos

### Listas anidadas

Puedes anidar cualquier tipo de lista—ordenada, desordenada o de tareas—dentro de cualquier otro tipo de lista.

Para crear una lista anidada, aplica sangría a uno o más elementos de la lista. Puedes mezclar tipos de lista dentro de una estructura anidada:

```md
1. Primer elemento de la lista
   1. Elemento anidado ordenado
2. Segundo elemento de la lista
   - Elemento anidado desordenado
```

1. Primer elemento de la lista
   1. Elemento anidado ordenado
2. Segundo elemento de la lista
   - Elemento anidado desordenado

De manera similar, puedes crear una lista de tareas anidada aplicando sangría a uno o más elementos de la lista:

```md
- [ ] Elemento de tarea 1
	- [ ] Subtarea 1
- [ ] Elemento de tarea 2
	- [ ] Subtarea 1
```

- [ ] Elemento de tarea 1
	- [ ] Subtarea 1
- [ ] Elemento de tarea 2
	- [ ] Subtarea 1

Usa `Tab` o `Shift+Tab` para aplicar o quitar sangría a los elementos de la lista seleccionados para organizarlos fácilmente.

## Regla horizontal

Puedes usar tres o más asteriscos `***`, guiones `---`, o guiones bajos `___` en su propia línea para añadir una barra horizontal. También puedes separar los símbolos usando espacios.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Código

Puedes formatear código tanto en línea dentro de una oración, como en su propio bloque.

### Código en línea

Puedes formatear código dentro de una oración usando comillas invertidas simples.

```md
El texto dentro de `comillas invertidas` en una línea se formateará como código.
```

El texto dentro de `comillas invertidas` en una línea se formateará como código.

Si quieres poner comillas invertidas en un bloque de código en línea, rodéalo con comillas invertidas dobles de esta manera: código en línea ``con una comilla invertida ` dentro``.

### Bloques de código

Para formatear código como un bloque, enciérralo con tres o más comillas invertidas o tres o más tildes.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

También puedes crear un bloque de código aplicando sangría al texto usando `Tab` o 4 espacios en blanco.
`````md
    cd ~/Desktop
`````

Puedes añadir resaltado de sintaxis a un bloque de código, añadiendo un código de lenguaje después del primer conjunto de comillas invertidas.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

Obsidian usa Prism para el resaltado de sintaxis. Para más información, consulta [Lenguajes soportados](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS y vistas de edición
> El [[Vistas y modo de edición#Modo de código fuente|Modo de código fuente]] y la [[Vistas y modo de edición#Vista previa en vivo|Vista previa en vivo]] no soportan PrismJS, y pueden renderizar el resaltado de sintaxis de manera diferente.

#### Anidar bloques de código

Cuando necesitas incluir un bloque de código dentro de otro bloque de código (por ejemplo, al documentar cómo usar bloques de código), puedes usar más de tres comillas invertidas o tildes para el bloque de código exterior.

Para anidar bloques de código, usa cuatro o más comillas invertidas (o tildes) para el bloque exterior, mientras que el bloque interior usa tres:
`````md
````md
Así es como se crea un bloque de código:
```js
console.log("Hello world")
```
````
`````

También puedes mezclar comillas invertidas y tildes. Esto es particularmente útil cuando trabajas con código que genera otros bloques de código:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

El principio clave es que el bloque de código exterior debe usar **más** caracteres de cerca (comillas invertidas o tildes) que cualquier bloque de código interior, o usar un tipo diferente de carácter de cerca.

## Notas al pie

Puedes añadir notas al pie[^footnote] a tus notas usando la siguiente sintaxis:

[^footnote]: Esta es una nota al pie.

```md
Esta es una nota al pie simple[^1].

[^1]: Este es el texto referenciado.
[^2]: Añade 2 espacios al inicio de cada nueva línea.
  Esto te permite escribir notas al pie que abarcan múltiples líneas.
[^note]: Las notas al pie con nombre aún aparecen como números, pero pueden facilitar la identificación y vinculación de referencias.
```

También puedes insertar notas al pie en línea dentro de una oración. Ten en cuenta que el acento circunflejo va fuera de los corchetes.

```md
También puedes usar notas al pie en línea. ^[Esta es una nota al pie en línea.]
```

> [!note] Nota
> Las notas al pie en línea solo funcionan en la vista de lectura, no en la vista previa en vivo.

## Comentarios

Puedes añadir comentarios envolviendo el texto con `%%`. Los comentarios solo son visibles en la vista de edición.

```md
Este es un comentario %%en línea%%.

%%
Este es un comentario de bloque.

Los comentarios de bloque pueden abarcar múltiples líneas.
%%
```

## Escapar la sintaxis de Markdown

En algunos casos, puede que necesites mostrar caracteres especiales en Markdown, como `*`, `_`, o `#`, sin activar su formato. Para mostrar estos caracteres literalmente, coloca una barra invertida (`\`) antes de ellos.

> [!example] Caracteres comunes para escapar
> 
> - Asterisco: `\*`
> - Guion bajo: `\_`
> - Almohadilla: `\#`
> - Comilla invertida: `` \` ``
> - Barra vertical (usada en tablas): `\|`
> - Tilde: `\~`

```md
\*Este texto no estará en cursiva\*.
```

\*Este texto no estará en cursiva\*.

Cuando trabajas con listas numeradas, puede que necesites escapar el punto después del número para evitar el formato automático de lista. Coloca la barra invertida (`\`) antes del punto, **no** antes del número.

```md
1\. Esto no será un elemento de lista.
```

1\. Esto no será un elemento de lista.

## Aprender más

Para aprender más sobre la sintaxis de formato avanzado, como tablas, diagramas y expresiones matemáticas, consulta [[Sintaxis de formato avanzado]].

Para aprender más sobre cómo Obsidian interpreta Markdown, consulta [[Obsidian Flavored Markdown]].
