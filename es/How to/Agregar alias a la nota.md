---
aliases: alias, aliases
---

A veces, es posible que desee hacer referencia al mismo archivo con varios nombres en diferentes contextos. Estos nombres alternativos son los que llamamos "alias".

Por ejemplo, es posible que desee referirse a su pareja por su nombre completo, nombre o un apodo. O quizás quiera referirse a "inteligencia artificial" por su abreviatura "AI". Si conoce varios idiomas, es posible que desee hacer referencia al mismo concepto con su nombre en el mismo idioma en el que está escrito el resto de la nota.

### Establecer alias

A partir de 0.9.16, puede especificar la propiedad "alias" en el [[Asunto principal de YAML]] al igual que:

```
---
aliases: [AI, Artificial Intelligence]
---
```

Tenga en cuenta que esta sección debe colocarse en la parte superior de una nota para que surta efecto.

En el futuro, consideraremos formas más fáciles de usar para administrar alias que escribirlos manualmente en la parte delantera.

### Enlace con alias

Una vez que haya establecido alias para un archivo, puede escribir `[[alias]]` para vincular a la página original. Aparecerá un icono de redireccionamiento en la lista de autocompletar así:

![[Insert alises.png]]

Se insertará un enlace interno con texto de visualización así: `[[Add aliases to note|alias]]`.

Nota: el enlace al alias **NO** se inserta como `[[alias]]` para la interoperabilidad, de modo que otro software pueda reconocerlo también.

### Encuentra menciones desvinculadas

Una vez que haya establecido alias para una nota, puede encontrar menciones no vinculadas tanto por su nombre como por sus alias.

Por ejemplo, después de establecer "AI" como un alias para "Inteligencia artificial", verá menciones de "AI" en otros archivos en la sección [[Backlinks]].

Si decide vincular esta mención, se creará un vínculo con el texto de visualización establecido en el alias. Siguiendo el ejemplo anterior, `AI` se convertirá `[[Artificial intelligence|AI]]` una vez que haga clic en el botón "Enlace".