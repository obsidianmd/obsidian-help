---
permalink: web-clipper/highlight
---
[[Introducció a Obsidian Web Clipper|Web Clipper]] us permet ressaltar text a les pàgines web i seleccionar els elements que voleu desar a Obsidian. Els ressaltats es desen de manera que podeu veure'ls quan torneu a una pàgina.

Els ressaltats es poden desar a Obsidian utilitzant l'extensió. Podeu definir les opcions del ressaltador a la configuració de l'extensió.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Utilitzar el ressaltador

El ressaltador es pot utilitzar en pàgines web en directe o al [[Lector]]. A la vista del Reader, crear una selecció de text us dona l'opció de ressaltar-la.

També podeu afegir automàticament les seleccions als vostres ressaltats, activant el ressaltador:

- ![[lucide-highlighter.svg#icon]] La **icona del ressaltador** al panell de l'extensió o la barra d'eines del Reader.
- **Dreceres de teclat**, personalitzables a la configuració de l'extensió.
- **Menú contextual**, fent clic dret a la pàgina web que esteu visitant.

Un cop el ressaltador està activat, qualsevol text, imatge o element seleccionat s'afegirà als vostres ressaltats. Tots els mètodes anteriors també us permeten sortir del ressaltador.

## Afegir ressaltats a les notes

Hi ha tres opcions per a com els ressaltats s'insereixen a les vostres notes retallades:

- **Ressaltar el contingut de la pàgina** — afegeix els ressaltats directament al text amb la [[Obsidian Flavored Markdown|sintaxi]] `==highlight==`.
- **Reemplaçar el contingut de la pàgina** — retorna una llista de ressaltats, sense cap contingut de la pàgina.
- **No fer res** — retorna el contingut original sense ressaltats.
 
Aquestes opcions canvien la [[Variables|variable]] `{{content}}` a la vostra plantilla. També podeu afegir ressaltats directament a la vostra plantilla utilitzant la variable `{{highlights}}`, per exemple:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Veure i cercar ressaltats

Tots els ressaltats que creeu es poden veure a la vostra pàgina de Ressaltats. Podeu obrir aquesta pàgina anant a **Configuració** → **Ressaltador**.

## Exportar ressaltats

Els ressaltats es poden exportar a un fitxer `.json`, ja sigui a la pàgina de Configuració o a la pàgina de Ressaltats.
