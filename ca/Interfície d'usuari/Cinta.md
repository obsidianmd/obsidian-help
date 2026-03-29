---
permalink: ribbon
publish: true
mobile: true
description: 'Aprèn com utilitzar la cinta, un espai per a ordres habituals a Obsidian, i com personalitzar-la a l''escriptori i al mòbil.'
---
La cinta funciona com un espai per a ordres comunes dins d'Obsidian.

A l'escriptori, es troba a la [[Barra lateral#Obrir barres laterals amagades|barra lateral esquerra]] i roman visible fins i tot quan la barra lateral esquerra està tancada.

Al mòbil, pots accedir a les [[Aplicació mòbil#Accions de la cinta|Accions de la cinta]] tocant l'**opció de menú** ![[lucide-menu.svg#icon]] a la cantonada inferior dreta de l'aplicació quan no estàs editant una nota.

## Accions

Cada acció està representada per una icona a la cinta. En passar el cursor per sobre d'aquestes icones es mostrarà un consell, mentre que seleccionar-les activarà l'acció associada. Al mòbil, pots tocar aquestes icones per activar-les.

1. Obrir el **[[Gestiona les cambres fortes|Commutador de cambres fortes]]** ![[obsidian-icon-vault-switcher.svg#icon]].
2. Accedir a l'**ajuda** ![[lucide-help-circle.svg#icon]].
3. Obrir la **[[Configuració]]** ![[lucide-settings.svg#icon]].

A la versió mòbil, pots configurar una acció d'accés ràpid a la cinta. Per a més informació, consulta la [[#Mòbil|secció mòbil]] i [[Aplicació mòbil]].

## Personalitzar la cinta

La disposició personalitzada de la cinta es recorda entre sessions. Es sincronitza amb altres dispositius i l'aplicació mòbil quan la configuració de l'aplicació (als fitxers `workspace.json` i `workspace-mobile.json`) està sincronitzada.

### Escriptori

A la versió d'escriptori, pots personalitzar la cinta de la manera següent:

- Reordena les accions de la cinta arrossegant i deixant anar les icones.
- Per amagar accions específiques, fes clic dret en un espai buit dins de la cinta i desmarca les accions que vulguis amagar.

#### Amagar la cinta

Pots amagar la cinta de dues maneres:

- Fes clic dret a la cinta i selecciona **Amaga la cinta**.
- Obre la **[[Configuració]]** → **Aparença**, desplaça't cap avall fins a **Avançat** i desactiva **Mostra la cinta**.

#### Mostrar la cinta

Si has amagat la cinta i vols mostrar-la de nou:

1. Obre la **[[Configuració]]** → **Aparença**.
2. Desplaça't cap avall fins a **Avançat**.
3. Activa **Mostra la cinta**.
4. La cinta apareixerà de nou al costat esquerre de la finestra.

> [!tip] CSS personalitzat
> Si estàs utilitzant un tema de la comunitat o CSS personalitzat, assegura't que no amaga la cinta mitjançant regles d'estil personalitzades.

### Mòbil

A la versió mòbil d'Obsidian, pots realitzar accions d'accés ràpid, reordenar elements i personalitzar el menú de la cinta. Per accedir a aquestes personalitzacions, segueix aquests passos:

1. Obre la **[[Configuració]]** d'Obsidian ![[lucide-cog.svg#icon]].
2. Navega a la secció d'**aparença**.
3. Desplaça't cap avall fins a les opcions **avançades**.
4. Selecciona el botó **Gestionar** sota l'element **Configuració de la cinta**.

#### Accés ràpid

Per defecte, l'opció d'accés ràpid està configurada com a "Obre el menú de la barra d'eines" amb una *pulsació curta*. Si esculls una altra opció com a accés ràpid:

- L'opció seleccionada s'activarà amb una *pulsació curta*.
- L'accés al menú de la cinta canviarà a una *pulsació llarga*.

> [!info] Les opcions d'accés ràpid depenen de la configuració d'Obsidian i els connectors principals que tinguis activats.

#### Reordenar i visibilitat

Per canviar l'ordre dels elements al menú de la cinta, mantén premut el botó d'**arrossegar i deixar anar** ![[lucide-menu.svg#icon]] i mou l'element seleccionat amunt o avall.

Pots mostrar o amagar elements al menú de la cinta utilitzant els botons vermell d'**eliminar** ![[lucide-minus-circle.svg#icon]] o verd d'**afegir** ![[lucide-plus-circle.svg#icon]] per alternar la seva visibilitat.

 ![[ribbon-rearrange-visibility.jpeg#interface]]
