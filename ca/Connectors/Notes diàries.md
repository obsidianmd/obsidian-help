---
permalink: plugins/daily-notes
---
Notes diàries és un [[Connectors principals|connector principal]] que obre una nota basada en la data d'avui, o la crea si no existeix. Utilitza les notes diàries per crear diaris, llistes de tasques o registres diaris de coses que has descobert durant el dia.

Per obrir la nota diària d'avui, pots:

- Fer clic a **Obre la nota d'avui** ![[lucide-calendar.svg#icon]] a la [[Cinta|barra d'eines]].
- Executar **Obre la nota d'avui** des de la [[Paleta d'ordres]].
- [[Tecles d'accés ràpid#Establir una drecera de teclat|Utilitzar una drecera de teclat]] per a l'ordre **Obre la nota d'avui**.

Per defecte, Obsidian crea una nota buida nova amb el nom de la data d'avui en format AAAA-MM-DD.

> [!tip] Si prefereixes tenir les teves notes diàries en una carpeta separada, pots configurar la <u>Ubicació del fitxer nou</u> a les opcions del connector per canviar on Obsidian crea les noves notes diàries.

> [!example]- Subcarpetes automàtiques
> Pots organitzar automàticament les teves notes diàries en carpetes utilitzant la funció de **Format de data**.
> 
> Per exemple, si configures el format de data com `YYYY/MMMM/YYYY-MMM-DD`, les teves notes es crearan com `2023/January/2023-Jan-01`. 
> 
> Pots explorar més opcions de format al lloc de documentació de [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Crear una nota diària a partir d'una plantilla

Si les teves notes diàries tenen la mateixa estructura, pots utilitzar una [[Plantilles|plantilla]] per afegir contingut predefinit a les teves notes diàries quan les crees.

1. Crea una nota nova anomenada "Plantilla diària" amb el text següent (o el que tingui sentit per a tu!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Tasques

   - [ ]
   ```

2. Obre la **[[Configuració]]**.
3. A la barra lateral, fes clic a **Notes diàries** sota **Opcions del connector**.
4. Al camp de text al costat d'**Ubicació del fitxer de plantilla**, selecciona la nota "Plantilla diària".

Obsidian utilitzarà la plantilla la pròxima vegada que creïs una nota diària nova.

## Notes diàries i propietats

Quan el connector de Notes diàries està activat i una propietat de data és present dins de qualsevol nota, Obsidian intentarà generar automàticament un enllaç a la nota diària d'aquell dia específic. Per exemple, si una nota titulada `example.md` inclou una propietat de data com `2023-01-01`, aquesta data es transformarà en un enllaç clicable a la secció de [[Vistes i mode d'edició#Previsualització en viu|previsualització en viu]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
