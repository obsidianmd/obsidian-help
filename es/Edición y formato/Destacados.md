---
permalink: callouts
publish: true
mobile: true
description: >-
  Esta página detalla cómo usar los recuadros para incluir contenido adicional
  sin interrumpir el flujo de tus notas.
---
Usa los recuadros para incluir contenido adicional sin interrumpir el flujo de tus notas.

Para crear un recuadro, agrega `[!info]` a la primera línea de una cita en bloque, donde `info` es el _identificador de tipo_. El identificador de tipo determina la apariencia y el estilo del recuadro. Para ver todos los tipos disponibles, consulta [[#Tipos soportados]]. Los recuadros también se soportan de forma nativa en [[Introducción a Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Aquí va el título del recuadro
> Aquí va un bloque de recuadro.
> ¡Soporta **Markdown**, [[Enlaces internos|Wikilinks]] e [[Incrustar archivos|incrustaciones]]!
> ![[Engelbart.jpg]]
```

> [!info] Aquí va el título del recuadro
> Aquí va un bloque de recuadro.
> ¡Soporta **Markdown**, [[Enlaces internos|Wikilinks]] e [[Incrustar archivos|incrustaciones]]!
> ![[Engelbart.jpg]]

Puedes insertar un recuadro `[!note]` predeterminado usando el [[Paleta de comandos|comando]] `Insertar destacado`. El cursor se posiciona automáticamente en el campo del nombre del recuadro, permitiéndote eliminar el nombre predeterminado y escribir uno nuevo antes de editar el contenido.

Para envolver contenido existente en un recuadro, selecciona el texto (incluyendo listas, bloques de código, etc.) y ejecuta el comando `Insertar destacado`. El contenido seleccionado se incluirá automáticamente dentro del recuadro.

En la [[Vistas y modo de edición#Vista previa en vivo|Vista previa en vivo]], también puedes hacer clic derecho en el nombre del recuadro para cambiar el tipo de recuadro.


### Cambiar el título

De forma predeterminada, el título del recuadro es su identificador de tipo con la primera letra en mayúscula. Puedes cambiarlo agregando texto después del identificador de tipo:

```markdown
> [!tip] Los recuadros pueden tener títulos personalizados
> Como este.
```

> [!tip] Los recuadros pueden tener títulos personalizados
> Como este.

Incluso puedes omitir el cuerpo para crear recuadros de solo título:

```markdown
> [!tip] Recuadro de solo título
```

> [!tip] Recuadro de solo título

### Recuadros plegables

Puedes hacer que un recuadro sea plegable agregando un signo más (`+`) o un signo menos (`-`) directamente después del identificador de tipo.

Un signo más expande el recuadro de forma predeterminada, y un signo menos lo contrae.

```markdown
> [!faq]- ¿Los recuadros son plegables?
> ¡Sí! En un recuadro plegable, el contenido se oculta cuando el recuadro está contraído.
```

> [!faq]- ¿Los recuadros son plegables?
> ¡Sí! En un recuadro plegable, el contenido se oculta cuando está contraído.

### Recuadros anidados

Puedes anidar recuadros en múltiples niveles.

```markdown
> [!question] ¿Se pueden anidar los recuadros?
> > [!todo] ¡Sí!, se puede.
> > > [!example] Incluso puedes usar múltiples niveles de anidación.
```

> [!question] ¿Se pueden anidar los recuadros?
> > [!todo] ¡Sí!, se puede.
> > > [!example] Incluso puedes usar múltiples niveles de anidación.

### Personalizar recuadros

Los [[Fragmentos CSS]] y los [[Complementos de la comunidad]] pueden definir recuadros personalizados, o incluso sobrescribir la configuración predeterminada.

Para definir un recuadro personalizado, crea el siguiente bloque CSS:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

El valor del atributo `data-callout` es el identificador de tipo que deseas usar, por ejemplo `[!custom-question-type]`.

- `--callout-color` define el color de fondo usando números (0–255) para rojo, verde y azul.
- `--callout-icon` puede ser un ID de icono de [lucide.dev](https://lucide.dev), o un elemento SVG.

> [!warning] Nota sobre las versiones de iconos de lucide
> Obsidian actualiza los iconos de Lucide periódicamente. La versión actual incluida se muestra a continuación; usa estos iconos o anteriores en recuadros personalizados.
> ![[Créditos#^lucide]]

> [!tip] Iconos SVG
> En lugar de usar un icono de Lucide, también puedes usar un elemento SVG como icono del recuadro.
>
> ```css
> --callout-icon: '<svg>...svg personalizado...</svg>';
> ```

### Tipos soportados

Puedes usar varios tipos de recuadros y alias. Cada tipo tiene un color de fondo e icono diferente.

Para usar estos estilos predeterminados, reemplaza `info` en los ejemplos con cualquiera de estos tipos, como `[!tip]` o `[!warning]`. Los tipos de recuadro también se pueden cambiar haciendo clic derecho en un recuadro en el modo de vista previa en vivo.

A menos que [[#Personalizar recuadros|personalices los recuadros]], cualquier tipo no soportado usará de forma predeterminada el tipo `note`. El identificador de tipo no distingue entre mayúsculas y minúsculas.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Alias: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Alias: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Alias: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Alias: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Alias: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Alias: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alias: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Alias: `cite`
