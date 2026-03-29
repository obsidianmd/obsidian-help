---
permalink: web-clipper/highlight
---
[[Introducció a Obsidian Web Clipper|Web Clipper]] us permet ressaltar text a les pàgines web i seleccionar els elements que voleu desar a Obsidian. Els vostres ressaltats es desen, de manera que podeu tornar-hi quan revisiteu una pàgina.

Els ressaltats es poden [[Retallar pàgines web|capturar]] i desar a Obsidian quan obriu l'extensió.

## Activar el ressaltador

Podeu activar el ressaltat de diverses maneres, segons el vostre navegador:

- La icona del ressaltador al panell de l'extensió.
- Dreceres de teclat, per activar l'extensió des del teclat.
- Menú contextual, fent clic dret a la pàgina web que esteu visitant.

Un cop el ressaltat està activat, podeu seleccionar text, imatges i elements que voleu ressaltar.

## Configuració del ressaltador

Podeu canviar el comportament del ressaltador anant a la configuració del Web Clipper. Aquí també podeu exportar els vostres ressaltats a un fitxer `.json`.

Hi ha tres opcions perquè els ressaltats s'insereixin a la nota retallada mitjançant la [[Variables|variable]] `{{content}}`:

- **Ressaltar el contingut de la pàgina** — afegeix els ressaltats directament al text amb la [[Obsidian Flavored Markdown|sintaxi]] `==highlight==`.
- **Reemplaçar el contingut de la pàgina** — retorna una llista de ressaltats, sense cap contingut de la pàgina.
- **No fer res** — retorna el contingut original sense ressaltats.

Podeu afegir ressaltats directament a la vostra plantilla utilitzant la variable `{{highlights}}`, per exemple:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
