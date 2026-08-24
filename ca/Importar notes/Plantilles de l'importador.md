---
permalink: import/templates
description: 'Personalitza el nom de la nota, les propietats i el contingut creats per l''Importador.'
---
L'[[Importador]] us permet definir plantilles que controlen com s'importen les vostres notes des d'altres aplicacions. Això significa que podeu modificar el títol, les propietats i el contingut de les notes que importeu.

## Editar la plantilla d'importació

Seleccioneu **Edita** a sobre de la previsualització per editar la plantilla per defecte. Podeu editar:

- El nom de la nota mostrat com a títol en línia.
- Les propietats al principi de la nota.
- El contingut Markdown de la nota.

Seleccioneu **Desa** per tornar a la previsualització. L'Importador recorda una plantilla en línia editada per a futures importacions que utilitzin el mateix format.

Alternativament, podeu carregar una plantilla des d'un fitxer Markdown a la cambra forta actual.

## Previsualitzar resultats

La previsualització mostra fins a deu mostres de les dades que heu seleccionat. Utilitzeu els botons de fletxa per moure-us entre les mostres. Els canvis a la configuració d'importació i a la plantilla actualitzen la previsualització abans que res s'afegeixi a la vostra cambra forta.

Alguns fitxers adjunts, elements remots i referències entre notes no es poden resoldre completament fins que s'executi la importació. En aquests casos, la previsualització pot conservar l'enllaç d'origen o mostrar un marcador de posició.

## Sintaxi de plantilla

Les plantilles de l'Importador utilitzen una sintaxi que consisteix en variables, [[Filtres]] i [[Lògica]]. Utilitza la mateixa sintaxi [Knap](https://github.com/obsidianmd/knap) que el [[Introducció a Obsidian Web Clipper|Web Clipper]].

Inseriu variables amb claudàtors dobles, com ara `{{title}}`, `{{content}}` o `{{date}}`. Les variables es poden utilitzar al nom de la nota, a les propietats i al contingut.

Podeu modificar les variables utilitzant [[Filtres]]. Per exemple, per canviar el format de data utilitzant `{{date|date:"YYYY-MM-DD"}}`. Utilitzeu la [[Lògica]] per a condicionals, bucles i assignació de variables més avançats.

## Variables

Les variables següents estan disponibles per utilitzar en qualsevol plantilla de l'Importador:

| Variable         | Descripció                                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Cos Markdown sense propietats (sense metadades inicials).                                           |
| `{{content}}`    | Markdown complet abans d'aplicar la plantilla seleccionada.                                         |
| `{{ctime}}`      | Hora de creació de la font com a marca de temps ISO 8601; buida quan no està disponible.            |
| `{{date}}`       | Data i hora actuals quan es renderitza la plantilla, com a marca de temps ISO 8601.                 |
| `{{importer}}`   | ID de l'Importador, com ara `keep`, `html` o `notion-api`.                                         |
| `{{folder}}`     | Carpeta pare final relativa a la cambra forta. Buida quan la nota és a l'arrel de la cambra forta. |
| `{{mtime}}`      | Hora de modificació de la font com a marca de temps ISO 8601; buida quan no està disponible.        |
| `{{noteName}}`   | Nom final resolt de la nota, després d'eliminar caràcters no vàlids i afegir sufixos per a duplicats. |
| `{{path}}`       | Ruta final relativa a la cambra forta, incloent l'extensió `.md`.                                   |
| `{{properties}}` | Objecte que conté les propietats de les metadades inicials.                                         |
| `{{source}}`     | Objecte que conté les propietats generades i els valors específics de la font.                      |
| `{{sourceId}}`   | Identificador estable de la font quan l'importador en proporciona un; en cas contrari, buit.        |
| `{{time}}`       | Àlies per a `{{date}}`.                                                                            |
| `{{title}}`      | Títol original de la nota abans de la sanitització i deduplicació.                                  |

## Valors de la font per a propietats

Per als formats d'importació que admeten [[Propietats]], els valors de la font també estan disponibles com a variables de primer nivell per comoditat.

Si un valor de la font té el mateix nom que una variable compartida, accediu-hi a través de `{{source}}`. Per exemple, si la vostra font d'importació té una propietat anomenada `content`, està disponible com a `{{source.content}}`, mentre que `{{content}}` continua sent la variable per defecte de l'Importador.

Utilitzeu la notació amb claudàtors quan un nom de camp contingui espais, puntuació o altres caràcters especials:

```twig
{{source["Project: status"]}}
```

## Plantilla d'exemple

Aquí teniu un exemple d'una plantilla que utilitza variables i [[Filtres|filtres]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Podeu afegir dades a una nota de manera condicional utilitzant la [[Lògica]]:

```twig
{% if tags %}
## Etiquetes
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
